const path = require("path");
const webpack = require("webpack"); // eslint-disable-line import/no-extraneous-dependencies
const merge = require("webpack-merge"); // eslint-disable-line import/no-extraneous-dependencies
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist", // publicPath 了解
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: "/",
    filename: "index.[hash].js",
    path: path.resolve(__dirname, "dist")
  }
});
