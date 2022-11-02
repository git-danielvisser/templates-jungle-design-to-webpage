const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: [
    path.resolve(__dirname, "src/js/main.js"),
    path.resolve(__dirname, "src/scss/main.scss")
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 300,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: "src/res", to: "res" }] }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ]
};

//https://stackoverflow.com/questions/55111937/add-stylesheet-link-dynamically-into-html-using-webpack
