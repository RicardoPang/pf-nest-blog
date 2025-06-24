import { Injectable } from '@nestjs/common';

/**
 * 应用服务类 - 提供应用级别的服务
 */
@Injectable()
export class AppService {
  /**
   * 获取API信息
   * @returns API基本信息
   */
  getApiInfo() {
    return {
      name: 'NestJS 博客系统 API',
      version: '1.0.0',
      description: '基于NestJS和Prisma开发的博客系统后端API',
      endpoints: [
        { path: '/api/articles', description: '文章管理' },
        { path: '/api/authors', description: '作者管理' },
        { path: '/api/categories', description: '分类管理' },
      ],
      documentation: '访问特定端点获取更多信息',
    };
  }
}
