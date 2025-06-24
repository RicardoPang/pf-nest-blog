const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');
const webpack = require('webpack');

/**
 * webpack开发环境配置
 * 这个配置文件针对开发阶段的特殊设置
 */
module.exports = merge(base, {
  // 开发模式，保留完整代码，便于调试
  mode: 'development',
  // 生成源码映射，方便调试
  devtool: 'inline-source-map',
  // 开发环境特有的插件
  plugins: [
    // 支持模块热替换，开发时修改代码无需重启
    new webpack.HotModuleReplacementPlugin(),
    // 向代码中注入环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  // 监视文件变更
  watch: true,
});
