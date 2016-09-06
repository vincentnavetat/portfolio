'use strict';

var path = require('path');
var app = path.join(__dirname, 'app');
var autoprefixer = require('autoprefixer');

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
        test:   /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
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
