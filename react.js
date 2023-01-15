module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:@wordpress/eslint-plugin/jsx-a11y',
	],
	plugins: [
		'react-hooks',
	],
	rules: {
		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react/display-name': 'off',
		'react/jsx-boolean-value': [ 'error', 'never' ],
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-brace-presence': 'error',
		'react/jsx-curly-spacing': [
			'error',
			{
				attributes: { when: 'always' },
				children: { when: 'always' },
			},
		],
		'react/jsx-equals-spacing': [ 'error', 'never' ],
		'react/jsx-fragments': 'error',
		'react/jsx-handler-names': 'error',
		'react/jsx-indent': [ 'error', 'tab' ],
		'react/jsx-indent-props': [ 'error', 'tab' ],
		'react/jsx-pascal-case': 'error',
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: false,
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: false,
				shorthandFirst: false,
				shorthandLast: false,
			},
		],
		'react/jsx-tag-spacing': [ 'error', {
			afterOpening: 'never',
			beforeClosing: 'never',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		} ],
		'react/jsx-wrap-multilines': 'error',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/self-closing-comp': [ 'error', { component: true, html: true } ],
	},
};
