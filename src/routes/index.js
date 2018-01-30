import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// History
// import createHashHistory from 'history/createHashHistory'
// const history = createHashHistory()

// Store
import createStore from 'store/createStore'
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// 手动监听更新，也可以将事件绑定到视图层。
store.subscribe(() => console.log('store:', store.getState()))


// 导入初始化渲染所需的模块
import Home from './Home'


export default class App extends Component{
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<Route exact path="/" component={Home} />
				</HashRouter>
			</Provider>
		)
	}
}

