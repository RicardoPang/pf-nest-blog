import { CreateArticleDto } from './create-article.dto';

/**
 * 更新文章的数据传输对象
 * 继承自CreateArticleDto，但所有字段都是可选的
 */
export class UpdateArticleDto implements Partial<CreateArticleDto> {
  /**
   * 文章标题
   * @example "NestJS与Prisma结合使用教程（更新版）"
   */
  title?: string;

  /**
   * 文章内容
   * @example "这是一篇更新后的关于NestJS和Prisma的教程..."
   */
  content?: string;

  /**
   * 文章摘要
   * @example "学习如何在NestJS中高效使用Prisma ORM"
   */
  summary?: string;

  /**
   * 封面图片URL
   * @example "https://example.com/images/cover-updated.jpg"
   */
  coverImage?: string;

  /**
   * 是否发布
   * @example true
   */
  published?: boolean;

  /**
   * 作者ID
   * @example 2
   */
  authorId?: number;

  /**
   * 分类ID列表
   * @example [1, 3]
   */
  categoryIds?: number[];
}
