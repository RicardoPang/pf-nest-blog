import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 应用控制器 - 处理根路径请求
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * 处理根路径请求，返回API信息
   * @returns API基本信息
   */
  @Get()
  getApiInfo() {
    return this.appService.getApiInfo();
  }
}
