/**
 * 创建作者的数据传输对象
 * 定义了创建作者时需要的字段
 */
export class CreateAuthorDto {
  /**
   * 作者姓名
   * @example "张三"
   */
  name: string;

  /**
   * 作者邮箱
   * @example "zhangsan@example.com"
   */
  email: string;

  /**
   * 作者简介
   * @example "一位热爱技术的开发者"
   */
  bio?: string;

  /**
   * 作者头像URL
   * @example "https://example.com/avatars/zhangsan.jpg"
   */
  avatar?: string;
}
