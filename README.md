# NestJS 博客系统

这是一个使用 NestJS 框架开发的博客系统后端API，采用 Prisma ORM 与 PostgreSQL 数据库进行交互。本项目实现了文章、作者和分类的完整 CRUD 操作，并针对数据库进行了读写分离优化。此外，还集成了GitHub仓库信息查询功能，支持AWS Lambda无服务器部署。

## 项目特点

- **NestJS 框架**：使用最流行的 Node.js 服务端框架，提供模块化、依赖注入等特性
- **Prisma ORM**：类型安全的数据库访问，自动生成类型定义
- **数据库读写分离**：实现读写分离策略，优化数据库性能
- **RESTful API**：符合 REST 规范的 API 设计
- **数据验证**：使用内置验证管道确保数据安全
- **模块化设计**：按功能划分模块，易于维护和扩展
- **GitHub API 集成**：提供查询GitHub用户仓库和仓库详情的功能
- **AWS Lambda 部署**：支持无服务器部署，使用 AWS SAM 进行基础设施管理
- **错误处理与重试**：完善的错误处理和重试机制，提高系统稳定性

## 项目结构

```
pf-nest-blog/
├── prisma/                 # Prisma 配置和模型定义
│   ├── schema.prisma       # 数据库模型定义
│   └── seed.ts             # 数据库种子数据
├── src/
│   ├── articles/           # 文章模块
│   │   ├── dto/            # 数据传输对象
│   │   ├── articles.controller.ts  # 控制器
│   │   ├── articles.service.ts     # 服务
│   │   └── articles.module.ts      # 模块定义
│   ├── authors/            # 作者模块
│   │   ├── dto/            # 数据传输对象
│   │   ├── authors.controller.ts   # 控制器
│   │   ├── authors.service.ts      # 服务
│   │   └── authors.module.ts       # 模块定义
│   ├── categories/         # 分类模块
│   │   ├── dto/            # 数据传输对象
│   │   ├── categories.controller.ts # 控制器
│   │   ├── categories.service.ts    # 服务
│   │   └── categories.module.ts     # 模块定义
│   ├── github/             # GitHub模块
│   │   ├── github.controller.ts    # GitHub控制器
│   │   ├── github.service.ts       # GitHub服务
│   │   └── github.module.ts        # GitHub模块定义
│   ├── prisma/             # Prisma 服务
│   │   ├── prisma.service.ts        # Prisma 服务实现
│   │   └── prisma.module.ts         # Prisma 模块定义
│   ├── app.module.ts       # 应用主模块
│   ├── app.controller.ts   # 应用控制器
│   ├── app.service.ts      # 应用服务
│   ├── main.ts             # 应用入口文件
│   └── lambda.ts           # AWS Lambda处理函数
├── template.yaml           # AWS SAM部署模板
├── samconfig.toml         # AWS SAM配置文件
└── .env                    # 环境变量配置
```

## 数据模型

项目包含以下主要数据模型：

1. **文章 (Article)**：博客文章，包含标题、内容、发布状态等
2. **作者 (Author)**：文章作者，包含姓名、邮箱、简介等
3. **分类 (Category)**：文章分类，包含名称和描述
4. **文章分类关联 (CategoryOnArticle)**：多对多关联表，连接文章和分类

## 环境变量配置

在项目根目录创建 `.env` 文件，配置以下环境变量：

```
# 数据库连接 - 写入连接（主库）
DATABASE_URL="postgresql://username:password@your-database-endpoint:5432/blog?schema=public"

# 数据库连接 - 只读连接（读副本）
DATABASE_URL_READER="postgresql://username:password@your-database-reader-endpoint:5432/blog?schema=public"

# 应用端口
PORT=3000

# 环境
NODE_ENV=development

# GitHub API令牌（可选，用于提高API限制）
GITHUB_TOKEN=your_github_token

# AWS区域（用于 Lambda 部署）
AWS_REGION=us-east-1
```

## 安装和运行

### 前提条件

- Node.js 16+ 和 pnpm
- AWS Aurora PostgreSQL 数据库（或本地 PostgreSQL 用于开发）

### 安装步骤

1. 克隆仓库并安装依赖：

```bash
git clone <仓库地址>
cd pf-nest-blog
pnpm install
```

2. 配置环境变量：

编辑 `.env` 文件，填入你的数据库连接信息。

3. 生成 Prisma 客户端：

```bash
npx prisma generate
```

4. 创建数据库表：

```bash
npx prisma migrate dev --name init
```

5. 启动开发服务器：

```bash
pnpm run start:dev
```

应用将在 http://localhost:3000/api 上运行。

## API 接口

### 文章 API

- `GET /api/articles` - 获取所有文章，支持分页和过滤
- `GET /api/articles/:id` - 获取单个文章详情
- `POST /api/articles` - 创建新文章
- `PATCH /api/articles/:id` - 更新文章
- `DELETE /api/articles/:id` - 删除文章

### 作者 API

- `GET /api/authors` - 获取所有作者
- `GET /api/authors/:id` - 获取单个作者详情
- `POST /api/authors` - 创建新作者
- `PATCH /api/authors/:id` - 更新作者信息
- `DELETE /api/authors/:id` - 删除作者

### 分类 API

| 方法   | 路径                  | 描述         | 参数                     |
|--------|----------------------|--------------|------------------------|
| GET    | /api/categories      | 获取分类列表 | -                      |
| GET    | /api/categories/:id  | 获取分类详情 | id                     |
| POST   | /api/categories      | 创建分类     | name, description      |
| PATCH  | /api/categories/:id  | 更新分类     | name, description      |
| DELETE | /api/categories/:id  | 删除分类     | id                     |

### GitHub API

| 方法   | 路径                                      | 描述               | 参数             |
|--------|------------------------------------------|-------------------|------------------|
| GET    | /api/github/repositories/:username       | 获取用户仓库列表   | username         |
| GET    | /api/github/repositories/:username/:repo | 获取仓库详情       | username, repo   |

## 部署选项

本项目支持两种部署方式：传统的EC2服务器部署和无服务器的Lambda部署。

## 部署到 AWS EC2

### 准备工作

1. 创建 EC2 实例（推荐 Amazon Linux 2 或 Ubuntu）
2. 配置安全组，开放应用端口（默认 3000）
3. 确保 EC2 实例可以访问 Aurora 数据库（配置正确的安全组）

### 部署步骤

1. 连接到 EC2 实例：

```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
```

2. 安装 Node.js 和 pnpm：

```bash
# 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 pnpm
npm install -g pnpm
```

3. 克隆代码并安装依赖：

```bash
git clone <仓库地址>
cd pf-nest-blog
pnpm install
```

4. 配置环境变量：

```bash
cp .env.example .env
# 编辑 .env 文件，填入正确的 Aurora 数据库连接信息
```

5. 生成 Prisma 客户端：

```bash
npx prisma generate
```

6. 构建应用：

```bash
pnpm run build
```

7. 使用 PM2 启动应用（保持应用在后台运行）：

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start dist/main.js --name nest-blog

# 设置开机自启
pm2 startup
pm2 save
```

应用将在 http://your-ec2-ip:3000/api 上运行。

## 部署到 AWS Lambda

本项目支持使用 AWS SAM (Serverless Application Model) 部署到 AWS Lambda，实现无服务器架构。

### 准备工作

1. 安装 AWS CLI 和 AWS SAM CLI
2. 配置 AWS 凭证
3. 确保已经设置好环境变量

### 部署步骤

1. 构建应用

```bash
npm run build
```

2. 使用 SAM CLI 构建部署包

```bash
npm run sam:build
```

3. 部署到 AWS

```bash
npm run sam:deploy
```

成功部署后，控制台将显示 API Gateway 的端点 URL。

### 部署架构

部署到 AWS Lambda 时，项目使用以下架构：

- **AWS Lambda**：运行 NestJS 应用的无服务器环境
- **API Gateway**：处理 HTTP 请求并路由到 Lambda 函数
- **VPC**：私有网络环境，用于安全访问数据库
- **CloudFront**：内容分发网络，提供缓存和全球加速

### Lambda 函数优化

项目中的 `lambda.ts` 文件实现了以下优化：

1. **冷启动优化**：保留 NestJS 应用实例，减少冷启动时间
2. **请求缓存**：对特定请求进行缓存，减少重复处理
3. **错误处理**：完善的错误处理机制

## GitHub 模块详解

GitHub 模块提供了查询 GitHub 仓库信息的功能，主要包含以下特点：

1. **重试机制**：对 GitHub API 请求失败进行自动重试
2. **错误处理**：详细的错误日志和异常处理
3. **令牌支持**：支持使用 GitHub 令牌提高 API 限制
4. **网络适配**：特别针对 AWS Lambda 网络环境进行了适配

使用方式：

```typescript
// 获取用户仓库列表
GET /api/github/repositories/:username

// 获取特定仓库详情
GET /api/github/repositories/:username/:repo
```

## 开发建议

1. **数据库迁移**：使用 Prisma 迁移功能管理数据库架构变更
   ```bash
   npx prisma migrate dev --name <migration-name>
   ```

2. **读写分离**：对于读操作使用 `prismaReader`，写操作使用 `prismaWriter`

3. **错误处理**：使用 NestJS 内置的异常过滤器处理常见错误

4. **扩展建议**：
   - 添加用户认证和授权
   - 实现缓存机制（Redis）
   - 添加文件上传功能
   - 实现全文搜索

## 常见问题解答

**Q: 如何处理 Aurora 数据库的冷启动延迟？**  
A: 可以实现定期健康检查或预热机制，保持数据库连接活跃。

**Q: 如何优化数据库查询性能？**  
A: 对于频繁访问的数据，可以添加缓存层；合理设计索引；使用 Prisma 的查询优化功能。

**Q: 如何扩展这个博客系统？**  
A: 可以添加评论功能、用户认证、标签系统、全文搜索等功能。

## 技术栈

- **后端框架**：NestJS
- **ORM**：Prisma
- **数据库**：AWS Aurora PostgreSQL
- **包管理器**：pnpm
- **部署**：AWS EC2
