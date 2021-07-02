const { notEmpty, returnAction } = require('../utils.js')

module.exports = {
	description: 'generate react page component',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'component name please',
		validate: notEmpty('name')
	}],
	actions: returnAction('pages')
};