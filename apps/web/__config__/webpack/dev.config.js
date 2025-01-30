const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./common.config.js");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new Dotenv({
    path: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "env/.development.env"
    ), // load this now instead of the ones in '.env'
    safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

module.exports = merge(common, {
  mode: "development",
  target: "web",
  plugins,
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
  },
});
