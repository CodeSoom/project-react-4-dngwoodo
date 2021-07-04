const { notEmpty, returnAction } = require('../utils.js')

module.exports = {
	description: 'generate react container component',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'component name please',
		validate: notEmpty('name')
	}],
	actions: returnAction('containers')
};