exports.notEmpty = name => v =>
    !v || v.trim() === '' ? `${name} is required` : true

exports.returnAction = (path) => {
    return [
		{
			type: 'add',
			path: `${path}/{{ pascalCase name }}/index.jsx`,
			templateFile: 'plop-templates/component/index.hbs'
		},
		{
			type: 'add',
			path: `${path}/{{ pascalCase name }}/index.test.jsx`,
			templateFile: 'plop-templates/component/index.test.hbs'
		},
		{
			type: 'add',
			path: `${path}/{{ pascalCase name }}/{{ pascalCase name }}.jsx`,
			templateFile: 'plop-templates/component/component.hbs'
		}
	]
}
