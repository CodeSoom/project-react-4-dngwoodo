exports.notEmpty = name => v =>
    !v || v.trim() === '' ? `${name} is required` : true

exports.returnAction = (path) => {
    return [
		{
			type: 'add',
			path: `${path}/{{ pascalCase name }}/index.tsx`,
			templateFile: 'plop-templates/component/index.hbs'
		},
		{
			type: 'add',
			path: `${path}/{{ pascalCase name }}/index.test.tsx`,
			templateFile: 'plop-templates/component/index.test.hbs'
		},
		{
			type: 'add',
			path: `${path}/{{ pascalCase name }}/{{ pascalCase name }}.tsx`,
			templateFile: 'plop-templates/component/component.hbs'
		}
	]
}
