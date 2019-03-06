const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackVisualizerPlugin = require('webpack-visualizer-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WebpackVisualizerPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  output: {
    filename: 'index.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
});
