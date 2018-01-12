import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

export default (initialState = {}) => {
	// ======================================================
	// 中间件配置
	// ======================================================
	const middleware = [thunk]

	// ======================================================
	// store增强
	// ======================================================
	const enhancers = []
	if (__DEV__) {
		const devToolsExtension = window.devToolsExtension
		if (typeof devToolsExtension === 'function') {
			enhancers.push(devToolsExtension())
		}
	}

	// ======================================================
	// 状态实例化 & HMR 设置
	// ======================================================
	const store = createStore(
		makeRootReducer(),
		initialState,
		compose(
			applyMiddleware(...middleware),
			...enhancers
		)
	)
	store.asyncReducers = {}

	// if (module.hot) {
	// 	module.hot.accept('./reducers', () => {
	// 		const reducers = require('./reducers').default
	// 		store.replaceReducer(reducers(store.asyncReducers))
	// 	})
	// }

	return store
}
