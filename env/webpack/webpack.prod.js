const merge = require('webpack-merge');
const rootPath = require('app-root-path').path;
const path = require('path');
const common = require('./webpack.common');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const GlobalCssLoader = require('./module/global-css');
const ImageLoader = require('./module/image');
const FontLoader = require('./module/font');

module.exports =  merge(common, {
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    rules: [
      GlobalCssLoader(),
      ImageLoader({optimize: true}),
      FontLoader({name: '[name].[hash:6].[ext]'})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'index.js',
    chunkFilename: '[name].[hash:6].js'
  }
});