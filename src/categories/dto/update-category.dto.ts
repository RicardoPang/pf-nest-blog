import { CreateCategoryDto } from './create-category.dto';

/**
 * 更新分类的数据传输对象
 * 继承自CreateCategoryDto，但所有字段都是可选的
 */
export class UpdateCategoryDto implements Partial<CreateCategoryDto> {
  /**
   * 分类名称
   * @example "技术教程（已更新）"
   */
  name?: string;

  /**
   * 分类描述
   * @example "关于各种前沿技术的深度教程和指南"
   */
  description?: string;
}
