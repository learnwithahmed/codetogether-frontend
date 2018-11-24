module.exports = {
	extends: ["react-app", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"arrow-body-style": "off",
		"func-style": "off",
		"import/order": ["error", { "newlines-between": "never" }],
		"no-invalid-this": "off",
		"prefer-destructuring": "off",
		"react/require-default-props": "off",
		"indent": ["error", "tab"],
		"linebreak-style": "off", // Don't play nicely with Windows
		'react/jsx-wrap-multilines': 'off',
	},
	"plugins": ["prettier"]
}
