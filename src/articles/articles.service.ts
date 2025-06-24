import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { QueryArticleDto } from './dto/query-article.dto';

/**
 * 文章服务 - 处理文章的增删改查操作
 */
@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  /**
   * 创建文章
   * @param createArticleDto 创建文章的数据
   * @returns 创建的文章
   */
  async create(createArticleDto: CreateArticleDto) {
    const { categoryIds, ...articleData } = createArticleDto;

    // 使用写入客户端创建文章
    const article = await this.prisma.writer.article.create({
      data: {
        ...articleData,
        // 如果提供了分类ID，则创建文章与分类的关联
        ...(categoryIds && categoryIds.length > 0
          ? {
              categories: {
                create: categoryIds.map((categoryId) => ({
                  category: {
                    connect: { id: categoryId },
                  },
                })),
              },
            }
          : {}),
      },
      include: {
        author: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return article;
  }

  /**
   * 查找所有文章
   * @param queryDto 查询参数
   * @returns 文章列表和总数
   */
  async findAll(queryDto: QueryArticleDto) {
    const {
      page = 1,
      limit = 10,
      publishedOnly,
      searchTitle,
      authorId,
      categoryId,
    } = queryDto;
    const skip = (page - 1) * limit;

    // 构建查询条件
    const where: any = {};

    // 如果指定了只查询已发布的文章
    if (publishedOnly) {
      where.published = true;
    }

    // 如果指定了标题搜索
    if (searchTitle) {
      where.title = {
        contains: searchTitle,
        mode: 'insensitive', // 忽略大小写
      };
    }

    // 如果指定了作者ID
    if (authorId) {
      where.authorId = authorId;
    }

    // 如果指定了分类ID
    if (categoryId) {
      where.categories = {
        some: {
          categoryId,
        },
      };
    }

    // 使用读取客户端查询文章列表
    const [articles, total] = await Promise.all([
      this.prisma.reader.article.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc', // 默认按创建时间降序排序
        },
        include: {
          author: true,
          categories: {
            include: {
              category: true,
            },
          },
        },
      }),
      this.prisma.reader.article.count({ where }),
    ]);

    // 格式化返回结果
    const formattedArticles = articles.map((article) => ({
      ...article,
      categories: article.categories.map((c) => c.category),
    }));

    return {
      items: formattedArticles,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * 根据ID查找单个文章
   * @param id 文章ID
   * @returns 文章详情
   */
  async findOne(id: number) {
    // 使用读取客户端查询单个文章
    const article = await this.prisma.reader.article.findUnique({
      where: { id },
      include: {
        author: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!article) {
      throw new NotFoundException(`文章ID ${id} 不存在`);
    }

    // 格式化返回结果
    return {
      ...article,
      categories: article.categories.map((c) => c.category),
    };
  }

  /**
   * 更新文章
   * @param id 文章ID
   * @param updateArticleDto 更新文章的数据
   * @returns 更新后的文章
   */
  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const { categoryIds, ...articleData } = updateArticleDto;

    // 检查文章是否存在
    const exists = await this.prisma.reader.article.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      throw new NotFoundException(`文章ID ${id} 不存在`);
    }

    // 如果提供了分类ID，则更新文章与分类的关联
    if (categoryIds && categoryIds.length > 0) {
      // 先删除现有的关联
      await this.prisma.writer.categoryOnArticle.deleteMany({
        where: { articleId: id },
      });

      // 创建新的关联
      await Promise.all(
        categoryIds.map((categoryId) =>
          this.prisma.writer.categoryOnArticle.create({
            data: {
              articleId: id,
              categoryId,
            },
          }),
        ),
      );
    }

    // 使用写入客户端更新文章
    const article = await this.prisma.writer.article.update({
      where: { id },
      data: articleData,
      include: {
        author: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    // 格式化返回结果
    return {
      ...article,
      categories: article.categories.map((c) => c.category),
    };
  }

  /**
   * 删除文章
   * @param id 文章ID
   * @returns 删除的文章
   */
  async remove(id: number) {
    // 检查文章是否存在
    const exists = await this.prisma.reader.article.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      throw new NotFoundException(`文章ID ${id} 不存在`);
    }

    // 先删除文章与分类的关联
    await this.prisma.writer.categoryOnArticle.deleteMany({
      where: { articleId: id },
    });

    // 使用写入客户端删除文章
    const article = await this.prisma.writer.article.delete({
      where: { id },
    });

    return article;
  }
}
