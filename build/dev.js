const webpack = require('webpack')
const merge   = require('webpack-merge')
const config  = require('../config')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const webpackBaseConf = require('./webpack.base.conf')

const PORT = 3000

module.exports = merge(webpackBaseConf, {
	plugins: [
		// 定义环境变量为开发环境
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(config.env),
			__DEV__: config.__DEV__,
			__QA__:  config.__QA__,
			__PRD__: config.__PRD__,
		}),
		new OpenBrowserPlugin({
			url: `http://localhost:${PORT}`,
		}),
	],
	devtool: 'source-map',
	devServer: {
		contentBase: '../src/',
		historyApiFallback: true,
		// hot: false,
		// host: '0.0.0.0',
		port: PORT,
		stats: { colors: true }
	},
	// devServer: {
	// 	historyApiFallback: true,
	// 	port: PORT,
	// 	compress: false,
	// 	inline:   true,
	// 	hot:      true,
	// 	stats: {
	// 		assets:     true,
	// 		children:   false,
	// 		chunks:     false,
	// 		hash:       false,
	// 		modules:    false,
	// 		publicPath: false,
	// 		timings:    true,
	// 		version:    false,
	// 		warnings:   true,
	// 		colors: {
	// 			green:  '\u001b[32m',
	// 		}
	// 	},
	// }
})