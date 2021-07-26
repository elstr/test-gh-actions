const {random} = require('lodash')
exports.handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(`Hello world - ${random(10)}`)
	}
}