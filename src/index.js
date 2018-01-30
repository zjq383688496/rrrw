import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/core.scss'

if (__DEV__) console.log('当前环境: [ 开发环境 ]')
else if (__QA__)  console.log('当前环境: [ 测试环境 ]')
else if (__PRD__) console.log('当前环境: [ 生产环境 ]')

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
ReactDOM.render(
	<Routes />,
	document.getElementById('root')
)