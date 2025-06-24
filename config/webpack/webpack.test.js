const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');

/**
 * webpack测试环境配置
 * 这个配置文件针对测试环境，类似于生产环境但保留一些调试功能
 */
module.exports = merge(base, {
  // 开发模式，但会应用一些生产环境的优化
  mode: 'development',
  // 生成源码映射，便于测试时定位问题
  devtool: 'source-map',
  // 入口文件，同时支持传统服务器和Lambda函数
  entry: {
    main: path.resolve(__dirname, '../../src/main.ts'),
    lambda: path.resolve(__dirname, '../../src/lambda.ts'),
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, '../../dist'),
    // 根据入口生成对应的文件名
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  // 测试环境特有的插件
  plugins: [
    // 向代码中注入环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
    }),
  ],
});
