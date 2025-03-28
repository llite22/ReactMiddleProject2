import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginRouter from '@tanstack/eslint-plugin-router';
import stylisticJs from '@stylistic/eslint-plugin-js';
import css from '@eslint/css';
import i18next from 'eslint-plugin-i18next';
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		files: ['**/*.css'],
		plugins: {
			css
		},
		languageOptions: {
			tolerant: true
		},
		language: 'css/css',
		rules: {
			'css/no-duplicate-imports': 'error',
			'css/no-empty-blocks': 'error'
		}
	},
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			...pluginRouter.configs['flat/recommended'],
			i18next.configs['flat/recommended'],
			...pluginQuery.configs['flat/recommended']
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@stylistic/js': stylisticJs
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			'@stylistic/js/semi': 'error',
			'@stylistic/js/quotes': ['error', 'single'],
			'@stylistic/js/indent': ['error', 'tab', { SwitchCase: 1 }],
			'@stylistic/js/object-curly-spacing': ['error', 'always'],
			'react-refresh/only-export-components': 'off',
			'@typescript-eslint/ban-ts-comment': 'off'
		}
	},
	{
		files: ['**/src/**/*.test.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 'off'
		}
	}
);
