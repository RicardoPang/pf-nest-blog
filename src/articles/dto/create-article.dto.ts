import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsArray,
  IsUrl,
  MinLength,
  MaxLength,
} from 'class-validator';

/**
 * 创建文章的数据传输对象
 * 定义了创建文章时需要的字段
 */
export class CreateArticleDto {
  /**
   * 文章标题
   * @example "NestJS与Prisma结合使用教程"
   */
  @IsString()
  @MinLength(2, { message: '标题至少需要 2 个字符' })
  @MaxLength(100, { message: '标题最多 100 个字符' })
  title: string;

  /**
   * 文章内容
   * @example "这是一篇关于NestJS和Prisma的教程..."
   */
  @IsString()
  @MinLength(10, { message: '内容至少需要 10 个字符' })
  content: string;

  /**
   * 文章摘要
   * @example "学习如何在NestJS中使用Prisma ORM"
   */
  @IsOptional()
  @IsString()
  @MaxLength(200, { message: '摘要最多 200 个字符' })
  summary?: string;

  /**
   * 封面图片URL
   * @example "https://example.com/images/cover.jpg"
   */
  @IsOptional()
  @IsUrl({}, { message: '请提供有效的URL' })
  coverImage?: string;

  /**
   * 是否发布
   * @example true
   * @default true
   */
  @IsOptional()
  @IsBoolean()
  published?: boolean;

  /**
   * 作者ID
   * @example 1
   */
  @IsInt({ message: '作者ID必须是整数' })
  authorId: number;

  /**
   * 分类ID列表
   * @example [1, 2]
   */
  @IsOptional()
  @IsArray()
  @IsInt({ each: true, message: '分类ID必须是整数' })
  categoryIds?: number[];
}
