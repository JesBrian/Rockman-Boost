// webpack.prod.js

const path = require('path');
const WebpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackConfig = require('./webpack.config.js');

module.exports = WebpackMerge(webpackConfig, {
  mode: 'production',

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist')
        }
      ]
    }),

    new BabiliPlugin({
    }),
  ],

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
      }),
    ],

    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        }
      }
    }
  }
});
