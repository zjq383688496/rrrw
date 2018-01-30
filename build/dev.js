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
		// 开启 热更新
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'source-map', // 'eval-source-map'
	devServer: {
		contentBase: '../src/',
		historyApiFallback: true,
		hot: true,
		port: PORT,
		stats: { colors: true }
	},
})