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
    filename: "styles/index.scss", // Rename the output file to styles/index.scss
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // MiniCssExtractPlugin.loader, // Extract CSS into separate file
          {
            loader: "css-loader",
            options: { sourceMap: true },
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
  },

  // plugins: [
  //   new CssMinimizerPlugin(),
  //     new MiniCssExtractPlugin({
  //        filename: "styles/index.scss", // Change the filename to "index.css"
  //        chunkFilename: "[id].scss",
  //     }),
  //     // Add WriteFilePlugin to create index.scss
  //     new WriteFilePlugin({
  //       test: /index\.css$/, // Only create index.scss when index.css is emitted
  //       useHashIndex: false, // Disable hash in the index.scss filename
  //       filename: "styles/index.scss", // Output index.scss in the dist folder
  //     }),
  // ],
};
