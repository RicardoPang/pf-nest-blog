import { CreateAuthorDto } from './create-author.dto';

/**
 * 更新作者的数据传输对象
 * 继承自CreateAuthorDto，但所有字段都是可选的
 */
export class UpdateAuthorDto implements Partial<CreateAuthorDto> {
  /**
   * 作者姓名
   * @example "张三（已更新）"
   */
  name?: string;

  /**
   * 作者邮箱
   * @example "zhangsan.updated@example.com"
   */
  email?: string;

  /**
   * 作者简介
   * @example "一位热爱技术并且经验丰富的开发者"
   */
  bio?: string;

  /**
   * 作者头像URL
   * @example "https://example.com/avatars/zhangsan-new.jpg"
   */
  avatar?: string;
}
