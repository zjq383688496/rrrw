import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

// ======================================================
// 中间件配置
// ======================================================
const middleware = [thunk]

// ======================================================
// Store 增强器
// ======================================================
const enhancers = []
if (__DEV__) {
	const devToolsExtension = window.devToolsExtension
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}
// debugger
// ======================================================
// Store 实例化
// ======================================================
const store = createStore(
	createRootReducer(),
	window.__INITIAL_STATE__ || {},
	compose(
		applyMiddleware(...middleware),
		...enhancers
	)
)
// debugger
// ======================================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ======================================================
store.asyncReducers = {}

export default store
