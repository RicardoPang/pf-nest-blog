const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * webpack生产环境配置
 * 这个配置文件针对生产环境，会对代码进行压缩和优化
 */
module.exports = merge(base, {
  // 生产模式，会自动启用代码压缩等优化
  mode: 'production',
  // 入口文件改为lambda.ts，专为AWS Lambda设计
  entry: {
    lambda: path.resolve(__dirname, '../../src/lambda.ts'),
  },
  // 覆盖基础配置中的externals设置，确保依赖被打包
  externals: [],
  // 优化配置
  optimization: {
    // 最小化代码
    minimize: true,
    minimizer: [
      // 使用TerserPlugin压缩JavaScript
      new TerserPlugin({
        terserOptions: {
          // 删除注释
          format: {
            comments: false,
          },
          // 压缩设置
          compress: {
            // 删除console.log等调试信息
            drop_console: true,
          },
        },
        // 不提取注释到单独文件
        extractComments: false,
      }),
    ],
  },
  // 输出配置
  output: {
    // 输出到dist目录
    path: path.resolve(__dirname, '../../dist'),
    // 文件名为lambda.js
    filename: '[name].js',
    // 指定库的类型为CommonJS2，兼容Node.js
    libraryTarget: 'commonjs2',
    // 确保handler函数被正确导出，不会被包装在模块中
    library: {
      name: 'handler',
      type: 'umd',
      export: 'handler',
    },
  },
  // 生产环境特有的插件
  plugins: [
    // 向代码中注入环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
