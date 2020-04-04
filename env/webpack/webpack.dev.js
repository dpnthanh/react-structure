const rootPath = require('app-root-path').path;
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const GlobalCssLoader = require('./module/global-css');
const ImageLoader = require('./module/image');
const FontLoader = require('./module/font');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports =  merge(common, {
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    rules: [
      GlobalCssLoader(),
      ImageLoader({exactName: true}),
      FontLoader({name: '[name].[ext]'})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(rootPath, '/dist/'),
    host: 'localhost',
    compress: true,
    port: 3030,
    hot: true,
    writeToDisk: true,
  },
});