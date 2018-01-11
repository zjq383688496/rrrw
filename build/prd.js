const webpack = require('webpack')
const merge   = require('webpack-merge')
const config  = require('../config')
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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', // 入口文件名
			filename: 'vendor.[hash:5].js', // 打包后的文件名
			minChunks: 4,
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			minimize: true,
		}),
	],
	devtool: 'source-map',
})