const HtmlWebpackPlugin = require('html-webpack-plugin');
const prodConfig = require('./webpack.config');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;


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
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: "./src/index.html"
    }),
    new ModuleFederationPlugin({
      name: "diffusion",
      filename: "remoteEntry.js",
      exposes: {
        './bootstrap': './src/bootstrap'
      },
      shared: {
        ...deps
      },
    })
  ]
};
