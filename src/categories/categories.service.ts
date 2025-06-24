import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

/**
 * 分类服务 - 处理分类的增删改查操作
 */
@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  /**
   * 创建分类
   * @param createCategoryDto 创建分类的数据
   * @returns 创建的分类
   */
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      // 使用写入客户端创建分类
      const category = await this.prisma.writer.category.create({
        data: createCategoryDto,
      });
      return category;
    } catch (error) {
      // 处理唯一约束冲突（如分类名称已存在）
      if (error.code === 'P2002') {
        throw new ConflictException('分类名称已存在');
      }
      throw error;
    }
  }

  /**
   * 查找所有分类
   * @returns 分类列表
   */
  async findAll() {
    // 使用读取客户端查询所有分类
    const categories = await this.prisma.reader.category.findMany({
      include: {
        _count: {
          select: {
            articles: true,
          },
        },
      },
    });

    // 格式化返回结果
    return categories.map((category) => ({
      ...category,
      articlesCount: category._count.articles,
      _count: undefined,
    }));
  }

  /**
   * 根据ID查找单个分类
   * @param id 分类ID
   * @returns 分类详情
   */
  async findOne(id: number) {
    // 使用读取客户端查询单个分类
    const category = await this.prisma.reader.category.findUnique({
      where: { id },
      include: {
        articles: {
          include: {
            article: {
              include: {
                author: true,
              },
            },
          },
          take: 5,
          orderBy: {
            article: {
              createdAt: 'desc',
            },
          },
        },
        _count: {
          select: {
            articles: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException(`分类ID ${id} 不存在`);
    }

    // 格式化返回结果
    return {
      ...category,
      articles: category.articles.map((a) => a.article),
      articlesCount: category._count.articles,
      _count: undefined,
    };
  }

  /**
   * 更新分类
   * @param id 分类ID
   * @param updateCategoryDto 更新分类的数据
   * @returns 更新后的分类
   */
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      // 检查分类是否存在
      const exists = await this.prisma.reader.category.findUnique({
        where: { id },
        select: { id: true },
      });

      if (!exists) {
        throw new NotFoundException(`分类ID ${id} 不存在`);
      }

      // 使用写入客户端更新分类
      const category = await this.prisma.writer.category.update({
        where: { id },
        data: updateCategoryDto,
      });

      return category;
    } catch (error) {
      // 处理唯一约束冲突（如分类名称已存在）
      if (error.code === 'P2002') {
        throw new ConflictException('分类名称已存在');
      }
      throw error;
    }
  }

  /**
   * 删除分类
   * @param id 分类ID
   * @returns 删除的分类
   */
  async remove(id: number) {
    // 检查分类是否存在
    const exists = await this.prisma.reader.category.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      throw new NotFoundException(`分类ID ${id} 不存在`);
    }

    // 检查分类是否有关联的文章
    const hasArticles = await this.prisma.reader.categoryOnArticle.findFirst({
      where: { categoryId: id },
      select: { articleId: true },
    });

    if (hasArticles) {
      throw new ConflictException('无法删除有文章关联的分类');
    }

    // 使用写入客户端删除分类
    const category = await this.prisma.writer.category.delete({
      where: { id },
    });

    return category;
  }
}
