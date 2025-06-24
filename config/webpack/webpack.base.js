const path = require('path');
const nodeExternals = require('webpack-node-externals');

/**
 * webpack基础配置
 * 这个配置文件包含所有环境共享的基本设置
 */
module.exports = {
  // 指定目标为node环境，不是浏览器
  target: 'node',
  // 排除node_modules中的依赖，减小打包体积
  externals: [nodeExternals()],
  // 配置如何处理不同类型的文件
  module: {
    rules: [
      {
        // 处理TypeScript文件
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // 配置模块解析方式
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
  },
  // 输出配置
  output: {
    // 输出文件名
    filename: 'main.js',
    // 输出路径
    path: path.resolve(__dirname, '../../dist'),
  },
};
