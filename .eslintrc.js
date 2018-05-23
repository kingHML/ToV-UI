module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	extends: 'standard',
	// required to lint *.vue files
	plugins: ['html'],
	// add your custom rules here
	rules: {
		'max-len': ['error', 150, {
			ignoreUrls: true,
			ignoreComments: true,
			ignoreTrailingComments: true
		}],
		'max-lines': ['error', 500],
		"no-unused-vars": 0,
		// "indent": [1, 2],//缩进风格
		"indent": [0],
		"no-tabs": "off",
		"no-mixed-spaces-and-tabs": [0, true],
		"no-extend-native": 0,
		"no-undef": 0,
		"no-callback-literal": 0,
		"no-inner-declarations": 0
	},
	globals: {}
}
