import React, { Component } from 'react'
import { connect } from 'react-redux'
import Mainlayout from 'layout/main'
import { LoginSub } from 'Actions/Login'
import './index.scss'

class Input extends Component{
	constructor(props) {
		super(props)
		this.props.valChange.bind(this)
	}
	// getInitialState() {
	// 　　return {}
	// }
	render() { 
		return (
			<div className="form-row">
				<input className="form-control" type={this.props.type} placeholder={this.props.placeholder} onChange={this._onChange} />
			</div>
		)
	}
	_onChange = (e) => {
		this.props.valChange(e, this.props.name, e.target.value)
	}
}

class Home extends Component {
	componentDidMount() {
	}
	constructor(props) {
		super(props)
		this.state = {
			username: { val: '', error: false },
			password: { val: '', error: false },
		}
	}
	render() {
		const { username, password } = this.state

		return (
			<Mainlayout>
				<div style={{ width: '100%' }}>
					<Input type="text" value={username.val} placeholder="Username" name="username" valChange={this.onChange} />
					<Input type="password" value={password.val} placeholder="Password" name="password" valChange={this.onChange} />
					<div className="form-row">
						<button type="button" className="btn btn-danger" onClick={this.onLogin}>登 录</button>
						<button type="button" className="btn btn-link">注 册</button>
					</div>
				</div>
			</Mainlayout>
		)
	}
	onChange = (e, n, v) => {
		const { store } = this.context
		this.state[n] = v
	}
	onLogin = () => {
		LoginSub(this.state, 'UTYPE_USER')
	}
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {
	LoginSub
})(Home)
