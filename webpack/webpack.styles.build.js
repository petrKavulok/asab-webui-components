const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WriteFilePlugin = require("write-file-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  // ... other configurations
  mode: "production",
  entry: "./src/index.scss", // Entry point is now index.scss
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "styles/main.js", // Rename the output file to styles/index.scss
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {loader: "file-loader", // Use file-loader to output the SCSS file
            options: {
              name: "styles/index.scss", // Name the output file as index.scss
            }
          },
          {
            loader: "css-loader",
            options: { sourceMap: false },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  }
};
