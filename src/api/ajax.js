// 后端 API 地址，最好以 http(s):// 打头
const rootPath = 'http://localhost:8989'

const ajax = ({ url, body = null, method = 'get' }) => {
	const defer = $.Deferred()

	const cred = {
		// 跨域允许带上第三方cookie
		xhrFields: { withCredentials: true },
		crossDomain: true
	}
	$.ajax({
		url:  `${rootPath}url`,
		type: method,
		data: body,
		...cred,
	})
	.done(defer.resolve)
	.fail((e) => {
		console.error(e)
	})

	return defer.promise()
}

export default ajax