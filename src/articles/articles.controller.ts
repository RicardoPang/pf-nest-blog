import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { QueryArticleDto } from './dto/query-article.dto';

/**
 * 文章控制器 - 处理文章相关的HTTP请求
 * 提供RESTful API接口
 */
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  /**
   * 创建文章
   * @param createArticleDto 创建文章的数据
   * @returns 创建的文章
   */
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  /**
   * 获取文章列表
   * @param queryDto 查询参数
   * @returns 文章列表和分页信息
   */
  @Get()
  findAll(@Query() queryDto: QueryArticleDto) {
    return this.articlesService.findAll(queryDto);
  }

  /**
   * 获取单个文章详情
   * @param id 文章ID
   * @returns 文章详情
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  /**
   * 更新文章
   * @param id 文章ID
   * @param updateArticleDto 更新文章的数据
   * @returns 更新后的文章
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  /**
   * 删除文章
   * @param id 文章ID
   * @returns 删除的文章
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
