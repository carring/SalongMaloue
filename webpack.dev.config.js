const path = require('path')
const webpack = require('webpack')
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  devtool: 'eval',

  entry: [
    APP_DIR + 'webpack-hot-middleware/client',
    APP_DIR + '/index.jsx'
  ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.jpg?$/,
        loader: 'file-loader' }
    ]
  }
}