#!/bin/bash

# 🚀 NestJS Blog 开发环境快速部署脚本
# 用法: ./scripts/dev.sh [--rebuild]

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

# 解析参数
REBUILD=false
for arg in "$@"; do
    case $arg in
        --rebuild)
            REBUILD=true
            ;;
    esac
done

print_info "🚀 开发环境快速部署..."
print_info "🔧 重新构建: $REBUILD"

# 检查环境文件
ENV_FILE=".env.development"
if [ ! -f "$ENV_FILE" ]; then
    print_warning "开发环境文件不存在，创建默认配置..."
    
    # 创建默认的开发环境配置
    cat > "$ENV_FILE" << EOF
# 开发环境配置
NODE_ENV=development
NODE_OPTIONS=--enable-source-maps
PORT=3000
VERSION=dev-$(date +%Y%m%d-%H%M%S)

# 数据库配置 (复制生产配置或使用本地数据库)
# DATABASE_URL=postgresql://localhost:5432/blog_dev
# DATABASE_URL_READER=postgresql://localhost:5432/blog_dev

# GitHub配置 (开发用)
# GITHUB_TOKEN=your_dev_github_token

# Aurora优化
AURORA_WARMUP=false
EOF
    
    print_warning "请编辑 $ENV_FILE 配置开发环境变量"
    print_info "建议配置本地数据库或复制生产环境配置"
fi

# 如果需要重新构建或者dist不存在
if [ "$REBUILD" = true ] || [ ! -d "dist" ]; then
    print_info "🔧 构建应用..."
    ./scripts/build.sh development --with-layer
else
    print_info "📦 快速部署现有代码..."
    ./scripts/build.sh development --deploy-only
fi

print_success "🎉 开发环境部署完成！"

# 显示开发环境信息
print_info "📊 开发环境信息:"
echo "   🌐 环境: development"
echo "   📁 配置文件: $ENV_FILE"
echo "   🔗 API地址: 与生产环境共享Lambda函数"
echo ""
print_info "💡 常用开发命令:"
echo "   ./scripts/dev.sh --rebuild  # 重新构建并部署"
echo "   ./scripts/dev.sh           # 快速部署代码更改"
echo "   npm run build              # 仅构建代码"
echo ""
print_success "✨ 开发环境已就绪！"