import {
  IsOptional,
  IsInt,
  IsBoolean,
  IsString,
  Min,
  Max,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

/**
 * 文章查询的数据传输对象
 * 用于过滤和分页查询
 */
export class QueryArticleDto {
  /**
   * 页码
   * @example 1
   * @default 1
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '页码必须是整数' })
  @Min(1, { message: '页码最小为 1' })
  page?: number = 1;

  /**
   * 每页数量
   * @example 10
   * @default 10
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '每页数量必须是整数' })
  @Min(1, { message: '每页数量最小为 1' })
  @Max(100, { message: '每页数量最大为 100' })
  limit?: number = 10;

  /**
   * 是否只查询已发布的文章
   * @example true
   */
  @IsOptional()
  @Transform(({ value }) => {
    return value === 'true' ? true : value === 'false' ? false : value;
  })
  @IsBoolean()
  publishedOnly?: boolean;

  /**
   * 按标题搜索
   * @example "NestJS"
   */
  @IsOptional()
  @IsString()
  searchTitle?: string;

  /**
   * 按作者ID过滤
   * @example 1
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '作者ID必须是整数' })
  authorId?: number;

  /**
   * 按分类ID过滤
   * @example 2
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '分类ID必须是整数' })
  categoryId?: number;
}
