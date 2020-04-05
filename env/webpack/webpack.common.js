const rootPath = require('app-root-path').path;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(rootPath, 'src', 'renderer.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(rootPath, 'src'),
        ],
        exclude: [
          path.resolve(rootPath, 'node_modules'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.html/,
        loader: 'html-loader'
      },
    ]
  },
  resolve: {
    extensions: ['json', 'js', 'jsx'],
    alias: {
      '@': path.resolve(rootPath, 'src'),
      'page': path.resolve(rootPath, 'src/page'),
      'component': path.resolve(rootPath, 'src/component'),
      'img': path.resolve(rootPath, 'src/asset/img'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'index.html'),
      filename: 'index.html',
      fileChunkName: '[name].html'
    })
  ],
  target: 'electron-renderer'
};