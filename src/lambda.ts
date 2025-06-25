import {
  Handler,
  Context,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

// 使用CommonJS导入方式，确保兼容AWS Lambda
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serverlessExpress = require('@vendia/serverless-express');

// 这个变量用于缓存 serverlessExpress 实例，实现冷启动优化
let cachedServer: Handler;

// 创建 Express 应用并初始化 NestJS
async function bootstrapServer(): Promise<Handler> {
  // 添加日志记录Lambda冷启动情况
  console.log('Lambda冷启动开始:', new Date().toISOString());

  if (!cachedServer) {
    console.log('初始化Express和NestJS应用');
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    // 不设置全局前缀，简化路由配置

    // 启用 CORS
    nestApp.enableCors({
      origin: '*', // 在生产环境中，应该设置为具体的前端域名
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    await nestApp.init();

    // 创建 serverlessExpress 实例，使用configure函数
    cachedServer = serverlessExpress.configure({ app: expressApp });
  }

  return cachedServer;
}

// Lambda 处理函数
export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: any,
): Promise<APIGatewayProxyResult> => {
  // 为了调试，可以记录请求信息
  console.log('收到新请求:', new Date().toISOString());
  console.log('请求路径:', event.path);
  console.log('请求方法:', event.httpMethod);
  console.log('请求头:', JSON.stringify(event.headers));

  try {
    // 获取 serverlessExpress 实例
    const server = await bootstrapServer();

    // 处理请求
    console.log('开始处理请求');
    return server(event, context, callback);
  } catch (error) {
    // 捕获并记录错误
    console.error('处理请求时发生错误:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: '服务器内部错误，请稍后再试',
        details: error.message,
      }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
