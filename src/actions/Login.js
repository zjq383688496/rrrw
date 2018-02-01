import User from 'Api/User'

// ================================
// Action Type
// ================================
const LOG_IN  = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// ================================
// Action Creator
// ================================
const loginDone = (userData) => {
	debugger
	return {
		type: LOG_IN,
		payload: userData
	}
}

const login = (formData) => {
	return dispatch => {
		User
		.login(formData)
		.then(
			re => dispatch(loginDone(re))
		)
	}
}

// export const LoginSub = (state, type) => {
// 	return {
// 		...state,
// 		type: type,
// 	}
// }

export const ACTION_HANDLERS = {
  [LOG_IN]: (userData, { payload }) => payload, // payload is userData
  [LOG_OUT]: () => null
}