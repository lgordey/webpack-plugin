var webpack = require('webpack');
var path = require('path');
var ManifestRevisionPlugin  = require('manifest-revision-webpack-plugin');
var webpackPlugin = require('./webpack-plugin');

var rootAssetPath = './app/assets';

module.exports = {
  output: {
    path: './public/assets',
    filename: '[chunkhash].[name].js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?context=' + rootAssetPath + '&name=[path][name].[hash].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new ManifestRevisionPlugin('manifest.json', {
        rootAssetPath: rootAssetPath,
        ignorePaths: ['/stylesheets', '/javascript']
    }),
    new webpackPlugin('./app/assets/svg/1.svg', './app/assets/svg/2.svg')
  ]
};