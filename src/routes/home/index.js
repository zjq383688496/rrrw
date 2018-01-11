import React, { Component } from 'react'
// import './index.scss'

export default class home extends Component{
	render() {
		return (
			<div>
				<h4>This is a duck, because Redux!</h4>
				<img className='duck' src={require('./assets/Duck.jpg')} />
			</div>
		)
	}
}
