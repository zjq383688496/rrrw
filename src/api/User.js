import ajax from './ajax'

/**
 * 对应后端涉及到用户认证的 API
 */
class User {

	checkLogin () {
		// return ajax({ url: '/user' })
		return setTimeout(() => true, 1000)
	}

	/**
	 * @param  {Object} userData
	 * @return {Promise}
	 */
	login (userData) {
		// return ajax({
		// 	method: 'post',
		// 	url:    '/login',
		// 	body:   userData
		// })
		return setTimeout(() => true, 1000)
	}

	logout () {
		// return ajax({ url: '/logout' })
		return setTimeout(() => true, 1000)
	}

}

// 实例化后再导出
export default new User()