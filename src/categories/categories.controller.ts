import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

/**
 * 分类控制器 - 处理分类相关的HTTP请求
 * 提供RESTful API接口
 */
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * 创建分类
   * @param createCategoryDto 创建分类的数据
   * @returns 创建的分类
   */
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  /**
   * 获取所有分类
   * @returns 分类列表
   */
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  /**
   * 获取单个分类详情
   * @param id 分类ID
   * @returns 分类详情
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  /**
   * 更新分类
   * @param id 分类ID
   * @param updateCategoryDto 更新分类的数据
   * @returns 更新后的分类
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  /**
   * 删除分类
   * @param id 分类ID
   * @returns 删除的分类
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
