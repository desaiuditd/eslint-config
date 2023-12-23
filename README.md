# eslint-config
Opinionated eslint config(s)

Project not maintained actively. In favour of @biomejs/biome.

## Install

```
npm i -D @desaiuditd/eslint-config \
	@typescript-eslint/eslint-plugin \
	@typescript-eslint/parser \
	@wordpress/eslint-plugin \
	eslint \
	eslint-plugin-import \
	eslint-plugin-jsx-a11y \
	eslint-plugin-react \
	eslint-plugin-react-hooks \
	eslint-plugin-sort-keys-fix \
	typescript
```

## Configure

```js
// .eslintrc.js

module.exports = {
	extends: [
		// For JavaScript rules.
		'@desaiuditd/eslint-config/javascript',
		// For TypeScript rules.
		'@desaiuditd/eslint-config/typescript',
		// For React rules.
		'@desaiuditd/eslint-config/react',
	],
};
```
