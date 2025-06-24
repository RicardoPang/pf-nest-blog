import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { GithubModule } from './github/github.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * 应用主模块 - 注册所有功能模块
 */
@Module({
  imports: [
    // 配置模块，用于加载环境变量
    ConfigModule.forRoot({
      isGlobal: true, // 全局可用
    }),
    // 数据库连接模块
    PrismaModule,
    // 功能模块
    ArticlesModule,
    AuthorsModule,
    CategoriesModule,
    // GitHub模块 - 用于获取GitHub仓库信息
    GithubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
