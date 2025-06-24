import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

/**
 * 作者服务 - 处理作者的增删改查操作
 */
@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  /**
   * 创建作者
   * @param createAuthorDto 创建作者的数据
   * @returns 创建的作者
   */
  async create(createAuthorDto: CreateAuthorDto) {
    try {
      // 使用写入客户端创建作者
      const author = await this.prisma.writer.author.create({
        data: createAuthorDto,
      });
      return author;
    } catch (error) {
      // 处理唯一约束冲突（如邮箱已存在）
      if (error.code === 'P2002') {
        throw new ConflictException('邮箱已被使用');
      }
      throw error;
    }
  }

  /**
   * 查找所有作者
   * @returns 作者列表
   */
  async findAll() {
    // 使用读取客户端查询所有作者
    const authors = await this.prisma.reader.author.findMany({
      include: {
        _count: {
          select: {
            articles: true,
          },
        },
      },
    });

    // 格式化返回结果
    return authors.map((author) => ({
      ...author,
      articlesCount: author._count.articles,
      _count: undefined,
    }));
  }

  /**
   * 根据ID查找单个作者
   * @param id 作者ID
   * @returns 作者详情
   */
  async findOne(id: number) {
    // 使用读取客户端查询单个作者
    const author = await this.prisma.reader.author.findUnique({
      where: { id },
      include: {
        articles: {
          where: {
            published: true,
          },
          take: 5,
          orderBy: {
            createdAt: 'desc',
          },
        },
        _count: {
          select: {
            articles: true,
          },
        },
      },
    });

    if (!author) {
      throw new NotFoundException(`作者ID ${id} 不存在`);
    }

    // 格式化返回结果
    return {
      ...author,
      articlesCount: author._count.articles,
      _count: undefined,
    };
  }

  /**
   * 更新作者
   * @param id 作者ID
   * @param updateAuthorDto 更新作者的数据
   * @returns 更新后的作者
   */
  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    try {
      // 检查作者是否存在
      const exists = await this.prisma.reader.author.findUnique({
        where: { id },
        select: { id: true },
      });

      if (!exists) {
        throw new NotFoundException(`作者ID ${id} 不存在`);
      }

      // 使用写入客户端更新作者
      const author = await this.prisma.writer.author.update({
        where: { id },
        data: updateAuthorDto,
      });

      return author;
    } catch (error) {
      // 处理唯一约束冲突（如邮箱已存在）
      if (error.code === 'P2002') {
        throw new ConflictException('邮箱已被使用');
      }
      throw error;
    }
  }

  /**
   * 删除作者
   * @param id 作者ID
   * @returns 删除的作者
   */
  async remove(id: number) {
    // 检查作者是否存在
    const exists = await this.prisma.reader.author.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      throw new NotFoundException(`作者ID ${id} 不存在`);
    }

    // 检查作者是否有关联的文章
    const hasArticles = await this.prisma.reader.article.findFirst({
      where: { authorId: id },
      select: { id: true },
    });

    if (hasArticles) {
      throw new ConflictException('无法删除有文章关联的作者');
    }

    // 使用写入客户端删除作者
    const author = await this.prisma.writer.author.delete({
      where: { id },
    });

    return author;
  }
}
