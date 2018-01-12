import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './routes'
import createStore from 'store/createStore'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/core.scss'

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log('store', store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				{renderRoutes(routes)}
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
