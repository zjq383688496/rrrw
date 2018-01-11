const webpack = require('webpack')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(config.env)

module.exports = {
	entry: {
		main: config.app,
		vendor: config.vendors,
	},
	// 入口
	// entry: config.app,
	output: {
		filename: '[name].bundle.js',	// 输出文件名
		path: config.outDir,			// 输出文件所在的目录
		// publicPath: config.srcDir,
	},
	resolve: {
		extensions: ['.js', '.json'],
		modules: [config.srcDir, 'node_modules'],
		alias: config.alias,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader?sourceMap=true!css-loader?sourceMap=true!postcss-loader?sourceMap=true!sass-loader?sourceMap=true',
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader?sourceMap=true!css-loader?sourceMap=true',
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				// loader: 'url-loader?limit=8192',
				// loader: 'url-loader?name=/img/[name].[hash:5].[ext]',
				loader: 'file-loader?name=img/[name].[hash:5].[ext]',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			// filename : 'index.html',
			template: config.template,
			inject: true
		})
	],
}