/**
 * 创建分类的数据传输对象
 * 定义了创建分类时需要的字段
 */
export class CreateCategoryDto {
  /**
   * 分类名称
   * @example "技术教程"
   */
  name: string;

  /**
   * 分类描述
   * @example "关于各种技术的教程和指南"
   */
  description?: string;
}
