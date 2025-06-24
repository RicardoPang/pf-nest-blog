import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

/**
 * 作者控制器 - 处理作者相关的HTTP请求
 * 提供RESTful API接口
 */
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  /**
   * 创建作者
   * @param createAuthorDto 创建作者的数据
   * @returns 创建的作者
   */
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  /**
   * 获取所有作者
   * @returns 作者列表
   */
  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  /**
   * 获取单个作者详情
   * @param id 作者ID
   * @returns 作者详情
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }

  /**
   * 更新作者
   * @param id 作者ID
   * @param updateAuthorDto 更新作者的数据
   * @returns 更新后的作者
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  /**
   * 删除作者
   * @param id 作者ID
   * @returns 删除的作者
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
