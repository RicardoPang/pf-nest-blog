import { PrismaClient } from '@prisma/client';

// 初始化Prisma客户端
const prisma = new PrismaClient();

/**
 * 示例数据填充脚本
 * 用于快速创建测试数据
 */
async function main() {
  console.log('开始填充示例数据...');

  // 1. 创建示例作者
  console.log('创建示例作者...');
  const author1 = await prisma.author.upsert({
    where: { email: 'zhang.san@example.com' },
    update: {},
    create: {
      name: '张三',
      email: 'zhang.san@example.com',
      bio: '资深技术博主，专注于Web开发和云计算',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  });

  const author2 = await prisma.author.upsert({
    where: { email: 'li.si@example.com' },
    update: {},
    create: {
      name: '李四',
      email: 'li.si@example.com',
      bio: '全栈开发工程师，热爱开源项目',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  });

  console.log(`已创建作者: ${author1.name}, ${author2.name}`);

  // 2. 创建示例分类
  console.log('创建示例分类...');
  const category1 = await prisma.category.upsert({
    where: { name: '前端开发' },
    update: {},
    create: {
      name: '前端开发',
      description: '包括HTML、CSS、JavaScript、React、Vue等前端技术',
    },
  });

  const category2 = await prisma.category.upsert({
    where: { name: '后端开发' },
    update: {},
    create: {
      name: '后端开发',
      description: 'Node.js、NestJS、Express、数据库等后端技术',
    },
  });

  const category3 = await prisma.category.upsert({
    where: { name: '云计算' },
    update: {},
    create: {
      name: '云计算',
      description: 'AWS、Azure、Docker、Kubernetes等云服务和容器技术',
    },
  });

  console.log(
    `已创建分类: ${category1.name}, ${category2.name}, ${category3.name}`,
  );

  // 3. 创建示例文章
  console.log('创建示例文章...');
  const article1 = await prisma.article.create({
    data: {
      title: 'NestJS入门指南',
      content: `
# NestJS入门指南

NestJS是一个用于构建高效、可靠和可扩展的服务器端应用程序的框架。它使用渐进式JavaScript，内置并完全支持TypeScript。

## 为什么选择NestJS?

- 基于Express，可以轻松使用Express生态系统的众多模块
- 架构灵感来自Angular，提供了模块化、依赖注入等特性
- 支持多种传输层协议（REST, GraphQL, WebSockets等）
- 内置支持TypeScript，提供类型安全

## 快速开始

\`\`\`bash
npm i -g @nestjs/cli
nest new project-name
cd project-name
npm run start:dev
\`\`\`

## 基本概念

1. **控制器(Controllers)**: 处理传入的请求并返回响应
2. **提供者(Providers)**: 处理业务逻辑的服务
3. **模块(Modules)**: 组织应用程序结构的功能单元

更多内容请参考[官方文档](https://docs.nestjs.com/)。
      `,
      published: true,
      author: {
        connect: { id: author1.id },
      },
      categories: {
        create: [{ category: { connect: { id: category2.id } } }],
      },
    },
  });

  const article2 = await prisma.article.create({
    data: {
      title: 'AWS Aurora数据库性能优化指南',
      content: `
# AWS Aurora数据库性能优化指南

Aurora是AWS提供的一种兼容MySQL和PostgreSQL的云数据库服务，它提供了传统数据库5倍的性能。

## Aurora的主要特点

- 高性能：吞吐量是MySQL的5倍
- 高可用性：跨3个可用区复制数据，提供99.99%的可用性
- 自动扩展：存储自动扩展，最高可达128TB
- 读写分离：可创建最多15个低延迟只读副本

## 性能优化技巧

### 1. 合理使用读写分离

Aurora允许创建多个只读副本，可以将读请求分发到这些副本上：

\`\`\`typescript
// 写操作使用主实例
await prismaWriter.article.create({...});

// 读操作使用只读副本
await prismaReader.article.findMany({...});
\`\`\`

### 2. 使用连接池

管理数据库连接，避免频繁创建和销毁连接：

\`\`\`typescript
// Prisma已内置连接池管理
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // 配置连接池
  connection: {
    pool: {
      min: 5,
      max: 10
    }
  }
});
\`\`\`

### 3. 优化查询

- 使用适当的索引
- 避免SELECT *，只查询需要的字段
- 使用分页限制结果集大小

更多优化技巧请参考[AWS官方文档](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_BestPractices.html)。
      `,
      published: true,
      author: {
        connect: { id: author2.id },
      },
      categories: {
        create: [{ category: { connect: { id: category3.id } } }],
      },
    },
  });

  const article3 = await prisma.article.create({
    data: {
      title: 'React与Vue的对比分析',
      content: `
# React与Vue的对比分析

React和Vue是当前最流行的两个前端框架，它们各有特点和适用场景。本文将对它们进行详细对比。

## 学习曲线

- **React**: 相对陡峭，需要了解JSX、函数式编程等概念
- **Vue**: 较为平缓，模板语法接近HTML，易于上手

## 性能表现

两者性能相当，但在不同场景下有细微差别：

- **React**: 通过虚拟DOM和Fiber架构优化渲染
- **Vue**: 通过细粒度依赖追踪实现高效更新

## 生态系统

- **React**: 生态非常丰富，有React Native、Next.js等
- **Vue**: 官方提供Vue Router、Vuex等核心库，生态逐渐丰富

## 代码示例对比

### React组件

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### Vue组件

\`\`\`vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>
\`\`\`

## 选择建议

- 如果你喜欢更多的自由度和函数式编程，选择React
- 如果你希望更快上手并喜欢简洁的API，选择Vue
      `,
      published: true,
      author: {
        connect: { id: author1.id },
      },
      categories: {
        create: [{ category: { connect: { id: category1.id } } }],
      },
    },
  });

  const article4 = await prisma.article.create({
    data: {
      title: 'Prisma ORM实战教程',
      content: `
# Prisma ORM实战教程

Prisma是一个现代化的数据库ORM工具，它可以让你更安全、更高效地操作数据库。

## Prisma的主要特点

- 类型安全：自动生成TypeScript类型定义
- 自动生成客户端：根据数据模型生成类型安全的客户端
- 直观的数据模型：使用Prisma Schema定义数据模型
- 强大的迁移系统：轻松管理数据库架构变更

## 快速开始

### 1. 安装Prisma

\`\`\`bash
npm install prisma --save-dev
npx prisma init
\`\`\`

### 2. 定义数据模型

\`\`\`prisma
// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
\`\`\`

### 3. 生成Prisma客户端

\`\`\`bash
npx prisma generate
\`\`\`

### 4. 使用Prisma客户端

\`\`\`typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 创建用户
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: '测试用户',
    },
  })
  
  // 创建文章
  const post = await prisma.post.create({
    data: {
      title: '使用Prisma的第一篇文章',
      content: '这是文章内容...',
      author: {
        connect: { id: user.id },
      },
    },
  })
  
  // 查询所有文章及其作者
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  })
  
  console.log(posts)
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
\`\`\`

更多内容请参考[Prisma官方文档](https://www.prisma.io/docs/)。
      `,
      published: false, // 这篇是草稿状态
      author: {
        connect: { id: author2.id },
      },
      categories: {
        create: [{ category: { connect: { id: category2.id } } }],
      },
    },
  });

  console.log(
    `已创建文章: ${article1.title}, ${article2.title}, ${article3.title}, ${article4.title}`,
  );

  console.log('示例数据填充完成！');
}

// 执行主函数
main()
  .catch((e) => {
    console.error('填充数据时出错:', e);
    process.exit(1);
  })
  .finally(async () => {
    // 关闭Prisma客户端连接
    await prisma.$disconnect();
  });
