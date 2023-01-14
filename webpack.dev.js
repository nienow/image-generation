const HtmlWebpackPlugin = require('html-webpack-plugin');
const prodConfig = require('./webpack.config');

module.exports = {
  ...prodConfig,
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3102/',
    clean: true
  },
  optimization: {
    minimize: false
  },
  devServer: {
    port: 3102,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: "./src/index.html"
    })
  ]
};
