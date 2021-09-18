'use strict';

var env = {
	browser: true,
	es2021: true,
	node: true
};
var parserOptions = {
	ecmaVersion: "latest",
	requireConfigFile: false,
	babelOptions: {
		plugins: [
			"@babel/plugin-proposal-class-properties"
		]
	}
};
var parser = "@babel/eslint-parser";
var rules = {
	"no-unused-expressions": [
		"error",
		{
			allowShortCircuit: true,
			allowTernary: true
		}
	],
	"no-plusplus": "off",
	eqeqeq: "off",
	curly: "error",
	semi: [
		"error",
		"always",
		{
			omitLastInOneLineBlock: true
		}
	]
};
var config = {
	env: env,
	"extends": [
	"eslint:recommended"
],
	parserOptions: parserOptions,
	parser: parser,
	rules: rules
};

module.exports = config;
