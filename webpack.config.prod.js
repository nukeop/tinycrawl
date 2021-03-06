const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'game');
const RESOURCES_DIR = path.resolve(__dirname, 'resources');
const DATA_DIR = path.resolve(__dirname, 'game', 'data');

module.exports = {
  entry: path.resolve(APP_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
	test: /\.jsx?/,
	loader: 'babel-loader',
	include: APP_DIR,
	options: {
	  presets: ['env']
	}
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        include: RESOURCES_DIR
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader',
	include: RESOURCES_DIR
      },
      {
	test: /\.yaml$/,
	loader: 'json-loader!yaml-loader',
	include: DATA_DIR
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
