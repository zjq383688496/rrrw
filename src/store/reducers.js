import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
// import locationReducer from './location'

import Reducers from 'Reducers/index'


// ======================================================
// 同步的 Reducers（即应用初始化所必需的）
// ======================================================
const syncReducers = {
	// router: routerReducer,
	...Reducers
}

console.log(syncReducers)
// debugger
/**
 * @return {Function} rootReducer
 */
export const createRootReducer = (asyncReducers) => {
	return combineReducers({
		// location: locationReducer,
		...syncReducers,
		...asyncReducers
	})
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
export const injectReducer = (store, { key, reducer }) => {
	store.asyncReducers[key] = reducer
	// 替换当前的 rootReducer
	store.replaceReducer(createRootReducer(store.asyncReducers))
}

export default createRootReducer
