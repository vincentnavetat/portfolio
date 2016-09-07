'use strict';

var webpack = require('webpack');
var path = require('path');
var app = path.join(__dirname, 'app');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  entry: path.join(app, '/index.jsx'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'portfolio.js',
    sourceMapFilename: 'portfolio.map',
    library: 'Portfolio',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: app
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss-loader!sass')
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=10000!img?progressive=true'
    }]
  },
  postcss: function () {
    return [autoprefixer];
  },
  resolve: {
    root: app,
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
};
