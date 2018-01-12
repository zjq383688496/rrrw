import React, { Component } from 'react'
import Mainlayout from 'layout/main'
import './index.scss'

					// <h4>Hello Jimmy!</h4>
					// <img className='duck' src={require('./assets/Duck.jpg')} />

export default class home extends Component{
	render() {
		return (
			<Mainlayout>
				<div style={{ width: '100%' }}>
					<div className="form-row">
						<input type="text" className="form-control" placeholder="Username" />
					</div>
					<div className="form-row">
						<input type="text" className="form-control" placeholder="Password" />
					</div>
					<div className="form-row">
						<button type="button" className="btn btn-danger">登 录</button>
						<button type="button" className="btn btn-link">注 册</button>
					</div>
				</div>
			</Mainlayout>
		)
	}
}
