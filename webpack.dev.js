const webpack = require("webpack");
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    contentBase: "./src",
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude: [/node_modules/, /dist/, /test/] }
    ]
  },
  optimization: {
    runtimeChunk: "single"
  }
});
