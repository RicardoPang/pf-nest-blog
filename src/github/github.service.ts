import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom, retry, timer } from 'rxjs';

/**
 * GitHub服务 - 负责与GitHub API交互
 * 包含错误处理和重试机制以适应AWS Lambda环境
 */
@Injectable()
export class GithubService {
  private readonly logger = new Logger(GithubService.name);
  private readonly baseUrl: string;
  private readonly token: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrl = 'https://api.github.com';
    this.token = this.configService.get<string>('GITHUB_TOKEN');
  }

  /**
   * 获取用户的GitHub仓库列表
   * @param username GitHub用户名
   * @returns 仓库列表
   */
  async getRepositories(username: string) {
    try {
      const headers = this.token
        ? { Authorization: `token ${this.token}` }
        : {};

      // 添加重试机制，如果网络错误会自动重试
      const response = await firstValueFrom(
        this.httpService
          .get(`${this.baseUrl}/users/${username}/repos`, {
            headers,
            timeout: 10000, // 10秒超时
          })
          .pipe(
            // 重试最多3次，每次间隔递增
            retry({
              count: 3,
              delay: (error, retryCount) => {
                this.logger.log(`第${retryCount}次尝试连接GitHub API...`);
                return timer(1000 * retryCount); // 1秒，2秒，3秒...
              },
            }),
            // 错误处理
            catchError((error) => {
              this.logger.error(
                `获取GitHub仓库失败: ${error.message}`,
                error.stack,
              );

              if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
                throw new HttpException(
                  `网络连接问题，请检查VPC和子网配置: ${error.message}`,
                  HttpStatus.SERVICE_UNAVAILABLE,
                );
              }

              if (error.response?.status === 403) {
                throw new HttpException(
                  '访问GitHub API限制，请检查是否需要设置GITHUB_TOKEN',
                  HttpStatus.FORBIDDEN,
                );
              }

              if (error.response?.status === 404) {
                throw new HttpException(
                  `GitHub用户'${username}'不存在`,
                  HttpStatus.NOT_FOUND,
                );
              }

              throw new HttpException(
                `获取GitHub仓库失败: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }),
          ),
      );

      // 转换响应数据为更易读的格式
      return response.data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        isPrivate: repo.private,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      }));
    } catch (error) {
      // 如果是HttpException，直接抛出
      if (error instanceof HttpException) {
        throw error;
      }
      // 其他错误转为HttpException
      this.logger.error(`获取GitHub仓库失败: ${error.message}`, error.stack);
      throw new HttpException(
        `获取GitHub仓库失败: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * 获取特定仓库的详细信息
   * @param owner 仓库所有者
   * @param repo 仓库名称
   * @returns 仓库详情
   */
  async getRepositoryDetails(owner: string, repo: string) {
    try {
      const headers = this.token
        ? { Authorization: `token ${this.token}` }
        : {};

      // 添加重试机制，如果网络错误会自动重试
      const response = await firstValueFrom(
        this.httpService
          .get(`${this.baseUrl}/repos/${owner}/${repo}`, {
            headers,
            timeout: 10000, // 10秒超时
          })
          .pipe(
            // 重试最多3次，每次间隔递增
            retry({
              count: 3,
              delay: (error, retryCount) => {
                this.logger.log(`第${retryCount}次尝试连接GitHub API...`);
                return timer(1000 * retryCount);
              },
            }),
            catchError((error) => {
              this.logger.error(
                `获取仓库详情失败: ${error.message}`,
                error.stack,
              );

              if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
                throw new HttpException(
                  `网络连接问题，请检查VPC和子网配置: ${error.message}`,
                  HttpStatus.SERVICE_UNAVAILABLE,
                );
              }

              if (error.response?.status === 403) {
                throw new HttpException(
                  '访问GitHub API限制，请检查是否需要设置GITHUB_TOKEN',
                  HttpStatus.FORBIDDEN,
                );
              }

              if (error.response?.status === 404) {
                throw new HttpException(
                  `找不到仓库 ${owner}/${repo}`,
                  HttpStatus.NOT_FOUND,
                );
              }

              throw new HttpException(
                `获取仓库详情失败: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }),
          ),
      );

      // 获取语言统计，也添加重试机制
      const languagesResponse = await firstValueFrom(
        this.httpService
          .get(response.data.languages_url, {
            headers,
            timeout: 10000,
          })
          .pipe(
            retry({
              count: 3,
              delay: (error, retryCount) => timer(1000 * retryCount),
            }),
            catchError((error) => {
              this.logger.warn(
                `获取仓库语言统计失败: ${error.message}`,
                error.stack,
              );
              // 如果只是语言统计失败，不阻断整个请求，返回空对象
              return [{ data: {} }];
            }),
          ),
      );

      // 格式化仓库详情输出
      return {
        id: response.data.id,
        name: response.data.name,
        fullName: response.data.full_name,
        description: response.data.description,
        url: response.data.html_url,
        homepage: response.data.homepage,
        stars: response.data.stargazers_count,
        forks: response.data.forks_count,
        watchers: response.data.watchers_count,
        openIssues: response.data.open_issues_count,
        defaultBranch: response.data.default_branch,
        createdAt: response.data.created_at,
        updatedAt: response.data.updated_at,
        pushedAt: response.data.pushed_at,
        size: response.data.size,
        language: response.data.language,
        languages: languagesResponse.data,
        owner: {
          id: response.data.owner.id,
          login: response.data.owner.login,
          avatarUrl: response.data.owner.avatar_url,
          url: response.data.owner.html_url,
        },
        // 添加一些有用的统计和标记，方便前端展示
        metrics: {
          popularity:
            response.data.stargazers_count + response.data.forks_count,
          activity: response.data.pushed_at
            ? new Date(response.data.pushed_at).getTime()
            : 0,
          issueHealth:
            response.data.open_issues_count > 0
              ? response.data.open_issues_count /
                (response.data.subscribers_count || 1)
              : 0,
        },
      };
    } catch (error) {
      // 如果是HttpException，直接抛出
      if (error instanceof HttpException) {
        throw error;
      }
      // 其他错误转为HttpException
      this.logger.error(`获取仓库详情失败: ${error.message}`, error.stack);
      throw new HttpException(
        `获取仓库详情失败: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
