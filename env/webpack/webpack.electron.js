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
  mode: 'development',
  watch: true,
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
    filename: 'app.[hash:6].js',
    chunkFilename: '[name].[hash:6].js'
  }
});