const env  = process.env.NODE_ENV || 'development'
const path = require('path')
const { resolve } = path

const ROOT = __dirname
const SRC  = `${ROOT}/src`

module.exports = {
	/** 运行环境 */
	env: env,
	__DEV__: env === 'development',
	__QA__:  env === 'qa',
	__PRD__: env === 'production',
	/** 根路径全名 */
	basePath: ROOT,
	/** 源文件目录 */
	srcDir: SRC,
	/** 入口文件 */
	app:      `${SRC}/index.js`,
	template: `${SRC}/index.html`,
	/** 打包输出路径 */
	outDir: `${ROOT}/dist`,
	/** 公共路径 */
	publicPath: `${SRC}/assets`,
	/** 映射路径 */
	alias: {
		'img':          `${SRC}/assets`,
		'layout':       `${SRC}/views/layout`,
		'global':       `${SRC}/views/global`,
		'store':        `${SRC}/store`,
		'components':   `${SRC}/components`,
		// actions:     `${SRC}/actions`,
		// api:         `${SRC}/api`,
		// reducers:    `${SRC}/reducers`,
		// utils:       `${SRC}/utils`,
		// constants:   `${SRC}/constants`,
		// controllers: `${SRC}/controllers`,
		// style:       `${SRC}/style`,


		// ASSET: path.join(src, 'assets'),
		// COMPONENT: path.join(src, 'components'),
		// ACTION: path.join(src, 'redux/actions'),
		// REDUCER: path.join(src, 'redux/reducers'),
		// STORE: path.join(src, 'redux/store'),
		// ROUTE: path.join(src, 'routes'),
		// SERVICE: path.join(src, 'services'),
		// UTIL: path.join(src, 'utils'),
		// HOC: path.join(src, 'utils/HoC'),
		// MIXIN: path.join(src, 'utils/mixins'),
		// VIEW: path.join(src, 'views'),
	},
	/** 是否sourcemap */
	sourcemaps: true,
	/** A hash map of keys that the compiler should treat as external to the project */
	externals: {},
	/** 全局变量hash映射 */
	globals: {},
	/** 启用日志 */
	verbose: false,
	/** 应用程序核心模块列表 */
	vendors: [
		'react',
		'react-dom',
		'redux',
		'react-redux',
		'redux-thunk',
		'react-router',
	],
	fonts: [
		['woff',  'application/font-woff'],
		['woff2', 'application/font-woff2'],
		['otf',   'font/opentype'],
		['ttf',   'application/octet-stream'],
		['eot',   'application/vnd.ms-fontobject'],
		['svg',   'image/svg+xml'],
	]
}
