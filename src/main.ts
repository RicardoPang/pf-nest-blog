import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Context, Handler } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';

let server: Handler;

/**
 * 应用入口文件
 * 同时支持本地开发和AWS Lambda部署
 */
async function bootstrap() {
  // 创建NestJS应用实例
  const app = await NestFactory.create(AppModule);

  // 启用CORS，允许前端跨域访问
  app.enableCors();

  // 设置全局路由前缀
  app.setGlobalPrefix('api');

  // 添加全局验证管道，用于自动验证请求数据
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 去除非预期属性
      transform: true, // 自动类型转换
      forbidNonWhitelisted: true, // 拒绝非白名单属性
    }),
  );

  // AWS Lambda部署时无需监听端口，仅在本地开发时启动HTTP服务器
  if (process.env.AWS_EXECUTION_ENV === undefined) {
    // 从配置中获取端口
    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT', 3000);

    // 启动应用
    await app.listen(port);
    console.log(`应用已启动，访问地址: http://localhost:${port}/api`);
  }

  return app;
}

/**
 * AWS Lambda处理函数
 */
export const handler = async (event: any, context: Context, callback: any) => {
  // 首次调用时初始化服务器
  if (!server) {
    const app = await bootstrap();
    await app.init();

    const expressApp = app.getHttpAdapter().getInstance();
    server = serverlessExpress({ app: expressApp });
  }

  // 处理请求
  return server(event, context, callback);
};

// 在非Lambda环境中执行启动函数
if (process.env.AWS_EXECUTION_ENV === undefined) {
  bootstrap();
}
