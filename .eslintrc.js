const files = [
	'./javascript.js',
	'./react.js',
	'./typescript.js',
];

module.exports = {
	extends: files,
	overrides: [
		{
			files,
			rules: { 'import/no-commonjs': 'off' },
		},
	],
};
