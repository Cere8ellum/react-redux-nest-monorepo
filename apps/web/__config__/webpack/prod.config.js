const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./common.config.js");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const plugins = [
  new Dotenv({
    path: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "env/.production.env"
    ), // load this now instead of the ones in '.env'
  }),
  new MiniCssExtractPlugin({
    filename: "[contenthash].css",
  }),
  // Compress images
  new ImageMinimizerPlugin({
    minimizer: {
      implementation: ImageMinimizerPlugin.imageminMinify,
      options: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 8 }],
          [
            "svgo",
            {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                      addAttributesToSVGElement: {
                        params: {
                          attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                        },
                      },
                    },
                  },
                },
              ],
            },
          ],
        ],
      },
    },
  }),
];

module.exports = merge(common, {
  mode: "production",
  target: "browserslist",
  plugins,
  devtool: false,
  output: {
    filename: "[fullhash].js",
  },
  optimization: {
    usedExports: false,
    minimize: true, // Affects Terser Plugin
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: true,
          output: {
            beautify: true,
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});
