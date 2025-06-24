import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  /**
   * 获取指定用户的GitHub仓库列表
   * @param username GitHub用户名
   * @returns 仓库列表
   */
  @Get('repositories/:username')
  async getRepositories(@Param('username') username: string) {
    return {
      success: true,
      data: await this.githubService.getRepositories(username),
      message: '获取GitHub仓库列表成功',
    };
  }

  /**
   * 获取指定仓库的详细信息
   * @param username GitHub用户名
   * @param repoName 仓库名称
   * @returns 仓库详情
   */
  @Get('repositories/:username/:repoName')
  async getRepository(
    @Param('username') username: string,
    @Param('repoName') repoName: string,
  ) {
    return {
      success: true,
      data: await this.githubService.getRepositoryDetails(username, repoName),
      message: '获取仓库详情成功',
    };
  }
}
