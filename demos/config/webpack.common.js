var webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	helpers = require("./helpers");

const devEnvVars = require("./development.json");
const testEnvVars = require("./test.json");
const prodEnvVars = require("./production.json");
const lessonVars = require("./lessons.json");

const ENV = process.env.NODE_ENV;
const LESSON = process.env.LESSON;
const isTest = ["test", "testing"].includes(ENV);
const isProduction = ["prod", "production"].includes(ENV);
const isDev = !isTest && !isProduction;
const lessonPath = LESSON ? lessonVars[LESSON] : "";

module.exports = {
	context: helpers.root() + "/" + lessonPath + "/src",
	entry: {
		app: "./main.ts",
		vendor: "./../../common/vendor.ts",
		polyfills: "./../../common/polyfills.ts"
	},
	
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts"
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: "file?name=assets/[name].[hash].[ext]"
			},
			{
				test: /\.css$/,
				exclude: helpers.root(lessonPath, "src", "app"),
				loader: ExtractTextPlugin.extract("style", "css?sourceMap")
			},
			{
				test: /\.css$/,
				include: helpers.root(lessonPath, "src", "app"),
				loader: "raw"
			},
			{
				test: /\.s(a|c)ss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["app", "vendor", "polyfills"]
		}),
		
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	]
}
