/*
* @Author: Hedgehog
* @Date:   2016-07-21 15:22:27
* @Last Modified by:   hedgehog
* @Last Modified time: 2016-07-29 14:38:30
*/

const path = require('path');
// const webpack = require('webpack');
module.exports = {
  entry: {
    'index': './index',
  },
  output: {
    path: './dist',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    root: [
      path.resolve(__dirname, 'node_modules'),
      // path.resolve(__dirname, './components'),
      // path.resolve(__dirname, './views'),
    ],

  },
  alias:{
    components: path.resolve(__dirname,'./components'),
    vuex: path.resolve(__dirname,'./vuex'),
    assets: path.resolve(__dirname,'./assets'),
    views: path.resolve(__dirname,'./views')
  },
  module:{
    loaders:[{
      test:/\.vue$/,
      loader:'vue',
    }, {
      test:/\.js$/,
      loader:'babel',
      exclude:/node_modules/,
    }, {
      test:/\.css$/,
      loader:'vue-style!style!css!sass',
    }, {
      test:/\.(scss|sass)$/,
      loader:'vue-style!style!css!sass',
    },{
      test:/\.(?:jpg|png|gif|woff|ttf|svg)$/,
      loader:'file',
    },],
  },
  babel: {
    presets: ['es2015'],
  },
  externals: {
    'io': 'io',
  },/*
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]*/
  devServer: {
    proxy: {
      // '/api': 'http://localhost:3000/'
      '/api': {
        target: 'http://localhost:3000',
        secure: true,
      }
    }
  }
}
