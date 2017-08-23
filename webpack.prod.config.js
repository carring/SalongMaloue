const path = require('path')
const webpack = require('webpack')
var BUILD_DIR = path.resolve(__dirname, '/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  devtool: 'source-map',

  entry: APP_DIR + '/index.jsx',

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.jpg?$/,
        loader: 'file-loader' }
    ]
  }
}