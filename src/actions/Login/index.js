import { UTYPE_USER, UTYPE_ADMIN } from 'Actions/Type'


export const LoginSub = (state, type) => {
	return {
		...state,
		type: type,
	}
}