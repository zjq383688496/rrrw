import createReducer from './createReducer'
import * as Login from './Login'
import { USER } from 'Actions/Type'
// debugger
export default {
	Login: createReducer(USER, Login)
}