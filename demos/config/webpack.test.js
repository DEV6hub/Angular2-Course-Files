const webpack = require("webpack"),
	helpers = require("./helpers");

const lessonVars = require("./lessons.json");

const LESSON = process.env.LESSON;
const lessonPath = LESSON ? lessonVars[LESSON] : "";

module.exports = {
	context: helpers.root() + "/" + lessonPath + "/src",
	devtool: "inline-source-map",
	
	resolve: {
		extensions: ["", ".js", ".ts"],
		root: helpers.root()
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts",
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.css$/,
				include: helpers.root(lessonPath, "src", "app"),
				loader: "raw"
			}
		]
	}
}
