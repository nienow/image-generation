const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require("./package.json").dependencies;

require('dotenv').config();

module.exports = {
  mode: 'production',
  output: {
    filename: "[contenthash].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['solid']
          }
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "diffusion",
      filename: "remoteEntry.js",
      exposes: {
        './bootstrap': './src/bootstrap'
      },
      shared: {
        ...deps
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: ['.tsx', '.ts', '.js']
  }
};
