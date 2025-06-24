import {
  INestApplication,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { setTimeout } from 'timers/promises';

// Prisma客户端类型定义
interface CustomNodeJSGlobal extends Global {
  prisma?: PrismaClient;
  prismaReader?: PrismaClient;
  prismaWriter?: PrismaClient;
  // 追踪连接状态
  writerConnected?: boolean;
  readerConnected?: boolean;
}

declare const global: CustomNodeJSGlobal;

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  // 私有日志记录器
  private readonly logger = new Logger(PrismaService.name);

  // 主Prisma客户端
  private prisma: PrismaClient;
  // 为读操作提供的Prisma客户端
  public reader: PrismaClient;
  // 为写操作提供的Prisma客户端
  public writer: PrismaClient;

  constructor(private configService: ConfigService) {
    // 获取环境变量中的数据库连接信息
    const dbUrl = this.configService.get<string>('DATABASE_URL');
    const readerDbUrl =
      this.configService.get<string>('DATABASE_URL_READER') || dbUrl;

    // 支持Lambda冷启动优化，使用全局变量缓存PrismaClient实例
    // 主客户端（通常不直接使用）
    if (!global.prisma) {
      global.prisma = new PrismaClient({
        log:
          process.env.NODE_ENV === 'dev'
            ? ['query', 'error', 'warn']
            : ['error'],
      });
      this.logger.log('主Prisma客户端已初始化');
    }

    // 读客户端 - 使用只读副本
    if (!global.prismaReader) {
      global.prismaReader = new PrismaClient({
        datasources: {
          db: {
            url: readerDbUrl,
          },
        },
        log:
          process.env.NODE_ENV === 'dev'
            ? ['query', 'error', 'warn']
            : ['error'],
      });
      this.logger.log(
        `读Prisma客户端已初始化，连接到 ${
          readerDbUrl ? '副本数据库' : '主数据库'
        }`,
      );
    }

    // 写客户端 - 使用主库
    if (!global.prismaWriter) {
      global.prismaWriter = new PrismaClient({
        datasources: {
          db: {
            url: dbUrl,
          },
        },
        log:
          process.env.NODE_ENV === 'dev'
            ? ['query', 'error', 'warn']
            : ['error'],
      });
      this.logger.log('写Prisma客户端已初始化，连接到主数据库');
    }

    this.prisma = global.prisma;
    this.reader = global.prismaReader;
    this.writer = global.prismaWriter;
  }

  async onModuleInit() {
    // 初始化连接状态
    if (global.writerConnected === undefined) global.writerConnected = false;
    if (global.readerConnected === undefined) global.readerConnected = false;

    // 使用重试机制连接数据库
    await this.connectWithRetry();
  }

  /**
   * 连接到数据库，带有重试机制
   * @param retryCount 当前重试次数
   */
  async connectWithRetry(retryCount = 0) {
    const maxRetries = 5;

    // 尝试连接写入数据库
    if (!global.writerConnected) {
      try {
        await this.writer.$connect();
        global.writerConnected = true;
        this.logger.log('写入数据库连接成功');
      } catch (writerError) {
        this.logger.error('写入数据库连接失败:', writerError);
      }
    }

    // 尝试连接读取数据库
    if (!global.readerConnected) {
      try {
        await this.reader.$connect();
        global.readerConnected = true;
        this.logger.log('读取数据库连接成功');
      } catch (readerError) {
        this.logger.error('读取数据库连接失败:', readerError);
      }
    }

    // 如果主客户端还未连接，也尝试连接
    try {
      await this.prisma.$connect();
      this.logger.log('主Prisma客户端连接成功');
    } catch (prismaError) {
      this.logger.error('主Prisma客户端连接失败:', prismaError);
    }

    // 如果两个连接都成功，则返回
    if (global.writerConnected && global.readerConnected) {
      this.logger.log('数据库连接完全成功');
      return;
    }

    // 如果达到最大重试次数，则使用本地数据库作为备份
    if (retryCount >= maxRetries - 1) {
      this.logger.warn(
        `达到最大重试次数 (${maxRetries})，将使用本地数据库作为备份`,
      );

      // 重新配置为本地数据库
      const localDbUrl = 'postgresql://pangjianfeng@localhost:5432/blog';

      if (!global.writerConnected) {
        try {
          await this.writer.$disconnect();
          // 重新配置写入客户端
          global.prismaWriter = new PrismaClient({
            datasources: { db: { url: localDbUrl } },
            log:
              process.env.NODE_ENV === 'dev'
                ? ['query', 'error', 'warn']
                : ['error'],
          });
          this.writer = global.prismaWriter;
          await this.writer.$connect();
          global.writerConnected = true;
          this.logger.log('已切换到本地数据库作为写入端点');
        } catch (localWriterError) {
          this.logger.error('本地写入数据库连接失败:', localWriterError);
        }
      }

      if (!global.readerConnected) {
        try {
          await this.reader.$disconnect();
          // 重新配置读取客户端
          global.prismaReader = new PrismaClient({
            datasources: { db: { url: localDbUrl } },
            log:
              process.env.NODE_ENV === 'dev'
                ? ['query', 'error', 'warn']
                : ['error'],
          });
          this.reader = global.prismaReader;
          await this.reader.$connect();
          global.readerConnected = true;
          this.logger.log('已切换到本地数据库作为读取端点');
        } catch (localReaderError) {
          this.logger.error('本地读取数据库连接失败:', localReaderError);
        }
      }

      // 检查在尝试本地连接后的状态
      if (global.writerConnected && global.readerConnected) {
        this.logger.log('使用本地数据库连接成功');
        return;
      } else {
        this.logger.error('所有数据库连接尝试均失败');

        // 在AWS Lambda环境中，连接失败应该使函数失败
        if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
          throw new Error('无法连接到任何数据库，包括备用本地数据库');
        }
      }

      return;
    }

    // 否则，等待后重试
    const delay = Math.pow(2, retryCount) * 1000; // 指数退避策略
    this.logger.log(`将在 ${delay}ms 后重试连接...`);

    await setTimeout(delay);
    return this.connectWithRetry(retryCount + 1);
  }

  async onModuleDestroy() {
    try {
      // 断开所有Prisma客户端连接
      await this.prisma.$disconnect();
      await this.reader.$disconnect();
      await this.writer.$disconnect();
      this.logger.log('所有数据库连接已关闭');
    } catch (error) {
      this.logger.error('关闭数据库连接失败:', error);
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    // 使用进程事件而不是Prisma事件
    process.on('beforeExit', async () => {
      this.logger.log('应用正在关闭，断开数据库连接...');
      await app.close();
    });

    // 处理 AWS Lambda 环境下的关闭
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
      process.on('SIGTERM', async () => {
        this.logger.log('Lambda函数收到SIGTERM信号，正在关闭...');
        await this.onModuleDestroy();
      });
    }
  }
}
