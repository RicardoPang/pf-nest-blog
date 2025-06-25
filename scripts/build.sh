#!/bin/bash

# 🚀 NestJS Blog AWS Lambda 统一部署脚本
# 用法: ./build.sh [development|production|test] [--with-layer] [--deploy-only]

set -e  # 遇到错误立即退出

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印彩色消息
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

# 检查参数
if [ -z "$1" ]; then
    print_error "Environment parameter is required!"
    echo "Usage: ./build.sh [development|production|test] [--with-layer] [--deploy-only]"
    echo ""
    echo "Examples:"
    echo "  ./build.sh production              # 生产环境完整部署"
    echo "  ./build.sh development --with-layer # 开发环境 + 重建Layer"
    echo "  ./build.sh production --deploy-only # 仅部署代码，不重建Layer"
    exit 1
fi

ENV=$1
ENV_FILE=".env.$ENV"
WITH_LAYER=false
DEPLOY_ONLY=false

# 解析额外参数
for arg in "$@"; do
    case $arg in
        --with-layer)
            WITH_LAYER=true
            ;;
        --deploy-only)
            DEPLOY_ONLY=true
            ;;
    esac
done

# 导出变量以便在函数中使用
export DEPLOY_ONLY
export WITH_LAYER

# 检查环境文件
if [ ! -f "$ENV_FILE" ]; then
    print_error "Environment file $ENV_FILE does not exist!"
    exit 1
fi

print_info "🚀 开始 $ENV 环境部署..."
print_info "📁 使用环境文件: $ENV_FILE"
print_info "🔧 重建Layer: $WITH_LAYER"
print_info "📦 仅部署代码: $DEPLOY_ONLY"

# 获取项目配置
if [ ! -f "aws-manual-config.json" ]; then
    print_error "aws-manual-config.json 配置文件不存在！"
    exit 1
fi

# 提取配置信息
BASE_FUNCTION_NAME=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).lambda.functionName")
S3_BUCKET=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).storage.s3BucketName")
REGION=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).region")

# 根据环境设置函数名
if [ "$ENV" = "development" ]; then
    FUNCTION_NAME="${BASE_FUNCTION_NAME}-dev"
    LAYER_NAME="nest-dependencies-dev"
else
    FUNCTION_NAME="$BASE_FUNCTION_NAME"
    LAYER_NAME="nest-dependencies"
fi

print_info "📋 Lambda函数: $FUNCTION_NAME"
print_info "📦 S3存储桶: $S3_BUCKET" 
print_info "🌐 AWS区域: $REGION"

# 函数：清理旧文件
cleanup_old_files() {
    print_info "🧹 清理旧构建文件..."
    
    # 在deploy-only模式下，不删除dist目录
    if [ "$DEPLOY_ONLY" != true ]; then
        rm -rf dist/
    fi
    
    rm -rf deploy-temp/
    rm -f lambda-deployment.zip
    rm -f layer-deployment.zip
    print_success "清理完成"
}

# 函数：检查依赖
check_dependencies() {
    print_info "🔍 检查构建依赖..."
    
    # 检查Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js 未安装"
        exit 1
    fi
    NODE_VERSION=$(node --version)
    print_success "Node.js: $NODE_VERSION"
    
    # 检查包管理器 (优先使用pnpm)
    if command -v pnpm &> /dev/null; then
        PACKAGE_MANAGER="pnpm"
        PKG_VERSION=$(pnpm --version)
        print_success "pnpm: $PKG_VERSION"
    elif command -v npm &> /dev/null; then
        PACKAGE_MANAGER="npm"
        PKG_VERSION=$(npm --version)
        print_success "npm: $PKG_VERSION"
    else
        print_error "未找到包管理器 (pnpm 或 npm)"
        exit 1
    fi
    
    # 检查AWS CLI
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI 未安装"
        exit 1
    fi
    AWS_VERSION=$(aws --version)
    print_success "AWS CLI: $AWS_VERSION"
    
    # 检查AWS认证
    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS认证失败，请检查AWS凭证配置"
        exit 1
    fi
    print_success "AWS认证验证通过"
}

# 函数：构建应用代码
build_application() {
    print_info "🔨 构建NestJS应用..."
    
    # 清理缓存（如果遇到安装问题）
    if [ ! -d "node_modules" ]; then
        print_info "🧹 清理包管理器缓存..."
        if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
            pnpm store prune 2>/dev/null || true
        else
            npm cache clean --force 2>/dev/null || true
        fi
    fi
    
    # 安装依赖
    print_info "📦 安装项目依赖 (使用 $PACKAGE_MANAGER)..."
    if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
        if ! pnpm install; then
            print_error "pnpm install 失败，尝试使用 --no-frozen-lockfile"
            pnpm install --no-frozen-lockfile
        fi
    else
        if ! npm install; then
            print_error "npm install 失败，尝试使用 --legacy-peer-deps"
            npm install --legacy-peer-deps
        fi
    fi
    
    # TypeScript编译
    print_info "🔧 编译TypeScript代码..."
    if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
        pnpm run build
    else
        npm run build
    fi
    
    # 检查关键文件 (Lambda入口文件可能在不同位置)
    if [ -f "dist/lambda.js" ]; then
        LAMBDA_ENTRY="dist/lambda.js"
        print_info "✅ 找到Lambda入口文件: dist/lambda.js"
    elif [ -f "dist/src/lambda.js" ]; then
        LAMBDA_ENTRY="dist/src/lambda.js"
        print_info "✅ 找到Lambda入口文件: dist/src/lambda.js"
    else
        print_error "Lambda入口文件不存在: dist/lambda.js 或 dist/src/lambda.js"
        exit 1
    fi
    
    # 检查src目录
    if [ ! -d "dist/src" ]; then
        print_error "编译后的src目录不存在: dist/src"
        print_info "检查dist目录内容:"
        ls -la dist/ || true
        exit 1
    fi
    
    print_success "应用构建完成"
}

# 函数：创建Lambda Layer
create_lambda_layer() {
    if [ "$DEPLOY_ONLY" = true ]; then
        print_info "⏭️  跳过Layer构建 (--deploy-only模式)"
        return
    fi
    
    if [ "$WITH_LAYER" = false ]; then
        print_info "⏭️  跳过Layer构建 (使用现有Layer)"
        return
    fi
    
    print_info "📁 创建Lambda Layer..."
    
    # 创建Layer目录结构
    rm -rf layer-temp/
    mkdir -p layer-temp/nodejs
    
    # 创建Layer的package.json (基于项目实际依赖，优化版本)
    print_info "📝 生成Layer package.json..."
    cat > layer-temp/nodejs/package.json << EOF
{
  "name": "nestjs-blog-dependencies",
  "version": "1.0.0",
  "description": "NestJS Blog Lambda Layer Dependencies",
  "dependencies": {
    "@nestjs/common": "^9.0.11",
    "@nestjs/core": "^9.0.0",
    "@nestjs/platform-express": "^9.0.0",
    "@prisma/client": "^6.10.1",
    "@vendia/serverless-express": "^4.12.6",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.2",
    "express": "^5.1.0",
    "rxjs": "^7.8.2"
  }
}
EOF
    
    # 安装Layer依赖
    print_info "📦 安装Layer依赖 (生产环境, ARM64)..."
    cd layer-temp/nodejs
    if command -v pnpm &> /dev/null; then
        pnpm install --production --no-frozen-lockfile --no-optional
    else
        npm install --production --platform=linux --arch=arm64 --no-package-lock --no-optional
    fi
    
    # 清理非必要文件以减小Layer大小
    print_info "🧹 优化Layer大小..."
    find node_modules -name "*.md" -delete 2>/dev/null || true
    find node_modules -name "*.txt" -delete 2>/dev/null || true
    find node_modules -name "*.map" -delete 2>/dev/null || true
    find node_modules -name "*.ts" -delete 2>/dev/null || true
    find node_modules -name "test" -type d -exec rm -rf {} + 2>/dev/null || true
    find node_modules -name "tests" -type d -exec rm -rf {} + 2>/dev/null || true
    find node_modules -name "__tests__" -type d -exec rm -rf {} + 2>/dev/null || true
    find node_modules -name "*.spec.js" -delete 2>/dev/null || true
    find node_modules -name "*.test.js" -delete 2>/dev/null || true
    find node_modules -name "docs" -type d -exec rm -rf {} + 2>/dev/null || true
    find node_modules -name "example" -type d -exec rm -rf {} + 2>/dev/null || true
    find node_modules -name "examples" -type d -exec rm -rf {} + 2>/dev/null || true
    
    # 检查依赖安装结果
    if [ ! -d "node_modules" ]; then
        print_error "Layer依赖安装失败"
        exit 1
    fi
    
    print_info "📊 Layer大小统计:"
    du -sh node_modules/ | awk '{print "   " $0}'
    
    # 创建Layer压缩包
    cd ..
    print_info "🗜️  创建Layer压缩包..."
    zip -r ../layer-deployment.zip . -q
    cd ..
    
    # 检查Layer包大小
    LAYER_SIZE=$(du -m layer-deployment.zip | cut -f1)
    print_info "📦 Layer包大小: ${LAYER_SIZE}MB"
    
    # AWS Lambda Layer限制检查
    if [ $LAYER_SIZE -gt 70 ]; then
        print_error "Layer包过大 (${LAYER_SIZE}MB > 70MB AWS限制)"
        print_info "尝试进一步优化..."
        
        # 进一步优化：移除更多非必要文件
        cd layer-temp/nodejs
        find node_modules -name "*.d.ts" -delete 2>/dev/null || true
        find node_modules -name "CHANGELOG*" -delete 2>/dev/null || true
        find node_modules -name "README*" -delete 2>/dev/null || true
        find node_modules -name "LICENSE*" -delete 2>/dev/null || true
        find node_modules -name "HISTORY*" -delete 2>/dev/null || true
        find node_modules -name ".github" -type d -exec rm -rf {} + 2>/dev/null || true
        find node_modules -name "coverage" -type d -exec rm -rf {} + 2>/dev/null || true
        cd ../..
        
        # 重新打包
        cd layer-temp
        print_info "🗜️  重新创建优化后的Layer压缩包..."
        zip -r ../layer-deployment.zip . -q
        cd ..
        
        # 再次检查大小
        LAYER_SIZE=$(du -m layer-deployment.zip | cut -f1)
        print_info "📦 优化后Layer包大小: ${LAYER_SIZE}MB"
        
        if [ $LAYER_SIZE -gt 70 ]; then
            print_error "Layer包仍然过大 (${LAYER_SIZE}MB > 70MB限制)"
            print_info "建议手动审查依赖项或使用外部Layer"
            exit 1
        fi
    fi
    
    # 上传Layer到AWS
    print_info "⬆️  上传Layer到AWS..."
    aws lambda publish-layer-version \
        --layer-name "$LAYER_NAME" \
        --description "NestJS Blog dependencies for $ENV environment" \
        --zip-file fileb://layer-deployment.zip \
        --compatible-runtimes nodejs18.x nodejs20.x \
        --compatible-architectures arm64 \
        --region $REGION > layer-result.json
    
    LAYER_VERSION=$(node -p "JSON.parse(require('fs').readFileSync('layer-result.json', 'utf8')).Version")
    LAYER_ARN=$(node -p "JSON.parse(require('fs').readFileSync('layer-result.json', 'utf8')).LayerArn")
    
    print_success "Layer创建成功: $LAYER_ARN:$LAYER_VERSION"
    
    # 清理临时文件
    rm -rf layer-temp/
    rm -f layer-deployment.zip
    rm -f layer-result.json
}

# 函数：创建部署包
create_deployment_package() {
    print_info "📦 创建Lambda部署包..."
    
    # 检查dist目录是否存在
    if [ ! -d "dist" ]; then
        print_error "dist目录不存在，请先运行构建"
        print_info "运行: npm run build 或使用完整部署: npm run deploy:prod"
        exit 1
    fi
    
    # 创建临时部署目录
    rm -rf deploy-temp/
    mkdir -p deploy-temp
    
    # 复制必要文件
    print_info "📋 复制应用文件..."
    
    # 检查并复制src目录
    if [ -d "dist/src" ]; then
        cp -r dist/src deploy-temp/
        print_info "✅ 复制src目录"
    else
        print_warning "dist/src目录不存在，尝试复制所有.js文件"
        find dist -name "*.js" -not -path "*/node_modules/*" -exec cp {} deploy-temp/ \;
    fi
    
    # 复制Lambda入口文件
    if [ -f "dist/lambda.js" ]; then
        cp dist/lambda.js deploy-temp/
        print_info "✅ 复制lambda.js"
    elif [ -f "dist/src/lambda.js" ]; then
        cp dist/src/lambda.js deploy-temp/lambda.js
        print_info "✅ 复制lambda.js (从src目录)"
    else
        print_error "Lambda入口文件不存在: dist/lambda.js 或 dist/src/lambda.js"
        exit 1
    fi
    
    # 复制package.json
    if [ -f "dist/package.json" ]; then
        cp dist/package.json deploy-temp/
    else
        print_warning "dist/package.json不存在，使用根目录package.json"
        cp package.json deploy-temp/
    fi
    
    # 复制Prisma客户端
    if [ -d "dist/prisma" ]; then
        cp -r dist/prisma deploy-temp/
        print_info "📁 复制Prisma客户端"
    fi
    
    # 复制环境文件
    cp "$ENV_FILE" "deploy-temp/.env"
    print_info "🔧 复制环境文件: $ENV_FILE"
    
    # 创建轻量package.json (不包含依赖，因为使用Layer)
    cat > deploy-temp/package.json << EOF
{
  "name": "nestjs-blog-lambda",
  "version": "1.0.0",
  "main": "lambda.js",
  "dependencies": {}
}
EOF
    
    # 创建压缩包
    print_info "🗜️  压缩部署包..."
    cd deploy-temp
    zip -r ../lambda-deployment.zip . -q -x "*.map"
    cd ..
    
    # 检查包大小
    PACKAGE_SIZE=$(du -m lambda-deployment.zip | cut -f1)
    print_info "📦 部署包大小: ${PACKAGE_SIZE}MB"
    
    if [ $PACKAGE_SIZE -gt 50 ]; then
        print_warning "部署包较大，将使用S3上传"
    fi
    
    print_success "部署包创建完成"
}

# 函数：检查并创建开发环境Lambda函数
check_and_create_dev_function() {
    if [ "$ENV" != "development" ]; then
        return  # 仅在开发环境执行
    fi
    
    print_info "🔍 检查开发环境Lambda函数..."
    
    # 检查函数是否存在
    if aws lambda get-function --function-name "$FUNCTION_NAME" --region $REGION >/dev/null 2>&1; then
        print_success "开发环境Lambda函数已存在: $FUNCTION_NAME"
        return
    fi
    
    print_info "📦 创建开发环境Lambda函数..."
    
    # 获取生产环境配置作为模板
    ROLE_ARN=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).iam.lambdaRoleArn")
    VPC_CONFIG=$(aws lambda get-function-configuration --function-name "$BASE_FUNCTION_NAME" --region $REGION --query 'VpcConfig' --output json)
    
    # 创建开发环境函数
    aws lambda create-function \
        --function-name "$FUNCTION_NAME" \
        --runtime nodejs20.x \
        --role "$ROLE_ARN" \
        --handler lambda.handler \
        --description "NestJS Blog Development Environment" \
        --timeout 30 \
        --memory-size 3008 \
        --architectures arm64 \
        --zip-file fileb://lambda-deployment.zip \
        --region $REGION \
        --vpc-config "$VPC_CONFIG" > /dev/null
    
    print_success "开发环境Lambda函数创建完成: $FUNCTION_NAME"
}

# 函数：部署到AWS Lambda
deploy_to_lambda() {
    print_info "⬆️  部署到AWS Lambda..."
    
    # 检查并创建开发环境函数
    check_and_create_dev_function
    
    # 检查包大小决定上传方式
    PACKAGE_SIZE=$(du -m lambda-deployment.zip | cut -f1)
    
    if [ $PACKAGE_SIZE -gt 50 ]; then
        # 使用S3上传大包
        print_info "📤 使用S3上传大部署包..."
        S3_KEY="deployments/nestjs-blog-$(date +%s).zip"
        
        aws s3 cp lambda-deployment.zip "s3://$S3_BUCKET/$S3_KEY" --region $REGION
        
        aws lambda update-function-code \
            --function-name "$FUNCTION_NAME" \
            --s3-bucket "$S3_BUCKET" \
            --s3-key "$S3_KEY" \
            --region $REGION > deploy-result.json
        
        # 清理S3临时文件
        print_info "🧹 清理S3临时文件..."
        sleep 10  # 等待部署完成
        aws s3 rm "s3://$S3_BUCKET/$S3_KEY" --region $REGION
    else
        # 直接上传小包
        print_info "📤 直接上传部署包..."
        aws lambda update-function-code \
            --function-name "$FUNCTION_NAME" \
            --zip-file fileb://lambda-deployment.zip \
            --region $REGION > deploy-result.json
    fi
    
    # 等待函数更新完成
    print_info "⏳ 等待Lambda函数更新完成..."
    aws lambda wait function-updated \
        --function-name "$FUNCTION_NAME" \
        --region $REGION
    
    # 发布新版本
    print_info "🎯 发布新版本..."
    aws lambda publish-version \
        --function-name "$FUNCTION_NAME" \
        --region $REGION \
        --query 'Version' \
        --output text > version.txt
    
    NEW_VERSION=$(cat version.txt)
    print_success "Lambda函数部署完成，版本: $NEW_VERSION"
    
    # 清理临时文件
    rm -f deploy-result.json version.txt
}

# 函数：同步环境变量
sync_environment_variables() {
    print_info "🔧 同步环境变量到Lambda..."
    
    # 读取环境变量文件
    ENV_FILE_PATH=".env.$ENV"
    if [ ! -f "$ENV_FILE_PATH" ]; then
        print_error "环境变量文件 $ENV_FILE_PATH 不存在"
        return 1
    fi

    # 解析环境变量 - 使用更安全的方法
    TEMP_FILE="temp-env-vars.json"
    echo '{"Variables":{' > "$TEMP_FILE"
    
    first_var=true
    while IFS= read -r line; do
        # 跳过空行和注释
        if [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]]; then
            continue
        fi
        
        # 解析键值对
        if [[ "$line" =~ ^[[:space:]]*([^=]+)=(.*)$ ]]; then
            key="${BASH_REMATCH[1]}"
            value="${BASH_REMATCH[2]}"
            
            # 移除引号
            value=$(echo "$value" | sed 's/^["'\'']\|["'\'']$//g')
            
            # 跳过AWS保留变量
            case "$key" in
                AWS_REGION|AWS_DEFAULT_REGION|AWS_ACCESS_KEY_ID|AWS_SECRET_ACCESS_KEY|AWS_SESSION_TOKEN|AWS_LAMBDA_*|AWS_EXECUTION_ENV|AWS_XRAY_*|_AWS_XRAY_*|LAMBDA_*)
                    print_info "   ⚠️ 跳过AWS保留变量: $key"
                    continue
                    ;;
            esac
            
            # 转义特殊字符
            value=$(echo "$value" | sed 's/\\/\\\\/g' | sed 's/"/\\"/g')
            
            # 添加到JSON（使用逗号分隔）
            if [ "$first_var" = true ]; then
                echo "\"$key\":\"$value\"" >> "$TEMP_FILE"
                first_var=false
            else
                echo ",\"$key\":\"$value\"" >> "$TEMP_FILE"
            fi
        fi
    done < "$ENV_FILE_PATH"
    
    echo '}}' >> "$TEMP_FILE"
    
    # 上传环境变量
    aws lambda update-function-configuration \
        --function-name "$FUNCTION_NAME" \
        --environment "file://$TEMP_FILE" \
        --region "$REGION" > /dev/null
    
    rm -f "$TEMP_FILE"
    print_success "环境变量同步完成"
}

# 函数：测试部署
test_deployment() {
    print_info "🧪 测试部署结果..."
    
    # 获取API基础URL
    API_BASE_URL=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).apiGateway.baseUrl" 2>/dev/null || echo "")
    
    if [ -z "$API_BASE_URL" ]; then
        print_warning "无法获取API Gateway URL，跳过测试"
        return
    fi
    
    # 测试端点列表
    endpoints=("/articles" "/authors" "/categories")
    success_count=0
    total_count=${#endpoints[@]}
    
    print_info "🌐 基础URL: $API_BASE_URL"
    
    for endpoint in "${endpoints[@]}"; do
        print_info "📡 测试: $endpoint"
        
        # 使用curl测试
        response=$(curl -s -w "%{http_code}" -o /dev/null "$API_BASE_URL$endpoint" || echo "000")
        
        if [ "$response" = "200" ]; then
            print_success "✅ $endpoint 测试成功 (HTTP 200)"
            ((success_count++))
        else
            print_warning "⚠️ $endpoint 返回状态码: $response"
        fi
    done
    
    print_info "📊 测试总结: 成功 $success_count/$total_count"
    
    if [ $success_count -eq $total_count ]; then
        print_success "🎉 所有API测试通过!"
    else
        print_warning "⚠️ 部分API测试失败，请检查Lambda函数日志"
    fi
}

# 函数：清理临时文件
cleanup_temp_files() {
    print_info "🧹 清理临时文件..."
    rm -rf deploy-temp/
    rm -f lambda-deployment.zip
    print_success "清理完成"
}

# 主执行流程
main() {
    print_info "🚀 开始执行构建部署流程..."
    
    # 检查依赖
    check_dependencies
    
    # 清理旧文件
    cleanup_old_files
    
    # 构建应用
    if [ "$DEPLOY_ONLY" != true ]; then
        build_application
    fi
    
    # 创建Lambda Layer
    create_lambda_layer
    
    # 创建部署包
    create_deployment_package
    
    # 同步环境变量
    sync_environment_variables
    
    # 部署到Lambda
    deploy_to_lambda
    
    # 测试部署
    test_deployment
    
    # 清理临时文件
    cleanup_temp_files
    
    print_success "🎉 部署完成！"
    
    # 显示访问信息
    API_URL=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).apiGateway.baseUrl")
    CLOUDFRONT_URL=$(node -p "JSON.parse(require('fs').readFileSync('aws-manual-config.json', 'utf8')).cloudfront.baseUrl")
    
    echo ""
    print_info "📊 部署信息:"
    echo "   🔗 API Gateway: $API_URL"
    echo "   🚀 CloudFront: $CLOUDFRONT_URL"
    echo "   ⚡ Lambda函数: $FUNCTION_NAME"
    echo "   🌐 AWS区域: $REGION"
    echo ""
    print_success "✨ 部署成功完成！你可以开始使用API了！"
}

# 执行主函数
main "$@"