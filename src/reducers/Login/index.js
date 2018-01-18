import { UTYPE_USER, UTYPE_ADMIN } from 'Actions/Type'

let initState = {
	username: '', // 用户名
	password: '', // 密码
	type: '',
}

export const LoginSub = (state = initState, action = {}) => {
	debugger
	switch(action.type) {
		case UTYPE_USER:
			debugger
			return {
				...state,
				type: action.type,
			}
		case UTYPE_ADMIN:
			debugger
			return {
				...state,
				type: action.type,
			}
		default:
			return state
	}
}