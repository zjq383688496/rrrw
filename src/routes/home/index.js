import React, { Component } from 'react'
import Mainlayout from 'layout/main'
import './index.scss'

					// <h4>Hello Jimmy!</h4>
					// <img className='duck' src={require('./assets/Duck.jpg')} />

class Input extends Component{
	getInitialState() {
	　　return {}
	}
	render() { 
		return (
			<input className="form-control" type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.vauleChange.bind(this.props.name)}/>
		)
	}
}

export default class home extends Component{
	constructor(props) {
		super(props)
		this.state = {
			username: { val: '', error: false },
			password: { val: '', error: false },
		}
	}
	render() {
		const {username, password} = this.state
		return (
			<Mainlayout>
				<div style={{ width: '100%' }}>
					<div className="form-row">
						<Input type="text" value={username.val} placeholder="Username" vauleChange={this.onChange} />
					</div>
					<div className="form-row">
						<Input type="password" value={password.val} placeholder="Password" vauleChange={this.onChange} />
					</div>
					<div className="form-row">
						<button type="button" className="btn btn-danger" onClick={this.onLogin}>登 录</button>
						<button type="button" className="btn btn-link">注 册</button>
					</div>
				</div>
			</Mainlayout>
		)
	}
	onChange = (e) => {
		debugger
	}
	onLogin = () => {
		const {username, password} = this.state
		debugger
	}
}
