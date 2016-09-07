'use strict';

var path = require('path');
var app = path.join(__dirname, 'app');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(app, '/index.jsx'),
  output: {
    path: './',
    filename: '/index.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /lib|node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  devServer: {
    contentBase: './app',
    noInfo: false,
    hot: false,
    inline: true
  }
};
