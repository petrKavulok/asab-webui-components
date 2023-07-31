const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "index.js",
		libraryTarget: "umd", // To generate both CommonJS and ES modules
		globalObject: "this", // Required for umd target
	},
	module: {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
				presets: ["@babel/preset-react"],
				},
			},
		},
		// {
		// 	test: /\.(s[ac]|c)ss$/i,
		// 	use: [
		// 		MiniCssExtractPlugin.loader, //extracs CSS into files
		// 		{
		// 			loader: 'css-loader',
		// 			options: { sourceMap: true }
		// 		},
		// 		{
		// 			loader: 'postcss-loader',
		// 			options: { sourceMap: true }
		// 		},
		// 		{
		// 			loader: 'sass-loader',
		// 			options: { sourceMap: true }
		// 		}
		// 	],
		// }
	],
	},
	resolve: {
		extensions: [".js"],
	},
	externals: ["react", "react-dom"], // Exclude peer dependencies from bundling
	optimization: {
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				parallel: true,
				minify: TerserPlugin.terserMinify,
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: false,
						inline: 2
					},
					mangle: {
						safari10: true,
					},
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
			// new MiniCssExtractPlugin({
			// 	  filename: "styles/index.css", // Change the filename to "index.css"
			// 	  chunkFilename: "[id].css",
			// }),
			// // Add WriteFilePlugin to create index.scss
		    // new WriteFilePlugin({
		    //   test: /index\.css$/, // Only create index.scss when index.css is emitted
		    //   useHashIndex: false, // Disable hash in the index.scss filename
		    //   filename: "styles/index.scss", // Output index.scss in the dist folder
		    // }),
			// `...` applies webpack's default minimizers which would otherwise be completely overwritten by our config
			`...`
		], // Minify the output file
	},
};
