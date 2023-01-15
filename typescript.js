module.exports = {
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
			],
			files: [ '*.ts', '*.tsx', '.*.ts', '.*.tsx' ],
			rules: {
				'@typescript-eslint/array-type': [ 'error', { default: 'array' } ],
				'@typescript-eslint/brace-style': [ 'error', '1tbs' ],
				'@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
				'@typescript-eslint/comma-spacing': [ 'error', { after: true, before: false } ],
				'@typescript-eslint/consistent-indexed-object-style': [ 'error', 'record' ],
				'@typescript-eslint/func-call-spacing': [ 'error' ],
				'@typescript-eslint/indent': [ 'error', 'tab' ],
				'@typescript-eslint/keyword-spacing': [ 'error', { after: true, before: true } ],
				'@typescript-eslint/member-delimiter-style': [ 'error' ],
				'@typescript-eslint/method-signature-style': [ 'error', 'property' ],
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/prefer-ts-expect-error': 'error',
				'@typescript-eslint/quotes': [ 'error', 'single' ],
				'@typescript-eslint/semi': [ 'error' ],
				'@typescript-eslint/sort-type-union-intersection-members': [ 'error' ],
				'@typescript-eslint/space-before-function-paren': [
					'error',
					{
						anonymous: 'always',
						asyncArrow: 'always',
						named: 'never',
					},
				],
				'@typescript-eslint/type-annotation-spacing': [ 'error' ],

				// TypeScript takes care of this for us.
				'brace-style': 'off',
				'comma-dangle': 'off',
				'comma-spacing': 'off',
				'func-call-spacing': 'off',
				'import/named': 'off',
				indent: 'off',
				'keyword-spacing': 'off',
				quotes: 'off',
				semi: 'off',
				'space-before-function-paren': 'off',
			},
		},
	],
	plugins: [
		'@typescript-eslint',
	],
};
