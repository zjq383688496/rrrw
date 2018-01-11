import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import Routes from './routes'
import createStore from 'store/createStore'

import './styles/common.scss'

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log('store', store.getState()))

// import { createStore } from 'redux'


// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1
// 		case 'DECREMENT':
// 			return state - 1
// 		default:
// 			return state
// 	}
// }

// const store = createStore(counter)

// store.subscribe(() => console.log('store', store.getState()))

// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })


// const add = () => {
// 	store.dispatch({ type: 'INCREMENT' })
// }
// const remove = () => {
// 	store.dispatch({ type: 'DECREMENT' })
// }



/*ReactDOM.render(
	<div>
		<input onClick={add} defaultValue="点我增加" />
		<input onClick={remove} defaultValue="点我减少" />
	</div>,
	document.getElementById('root')
)*/

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				{renderRoutes(Routes)}
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
