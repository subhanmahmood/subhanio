module.exports = {
	plugins: ['testing-library'],
	extends: ['airbnb-typescript', 'next/core-web-vitals'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	ignorePatterns: ['.eslintrc.json', 'src/**/*.icon.tsx'],
	overrides: [
		// Only uses Testing Library lint rules in test files
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
	],
	rules: {
		'@typescript-eslint/indent': [
			'warn',
			'tab',
			{ ignoredNodes: ['TSTypeParameterInstantiation'] },
		],
		'object-curly-spacing': ['warn', 'always'],
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'none',
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'none',
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				ignoreRestArgs: true,
			},
		],
		'@typescript-eslint/semi': ['warn'],
		'max-len': [
			'warn',
			{
				code: 120,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreComments: true,
				tabWidth: 4,
			},
		],
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'react/jsx-key': 'error',
		'react/no-array-index-key': 0,
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.spec.js',
					'**/*.spec.jsx',
					'**/*.spec.ts',
					'**/*.spec.tsx',
					'src/tests/**/*',
					'cypress/**/*',
					'**/*.stories.tsx',
				],
			},
		],
		'import/order': [
			'warn',
			{
				groups: [['builtin', 'external'], ['sibling', 'parent'], 'index'],
				'newlines-between': 'always',
				alphabetize: {
					order:
						'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
					caseInsensitive: false /* ignore case. Options: [true, false] */,
				},
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-boolean-value': 'off',
		'react/prop-types': 'off',
		'react/no-unescaped-entities': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/destructuring-assignment': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react/jsx-no-target-blank': ['warn'],
		'react/require-default-props': 'off',
		'no-restricted-properties': [
			'error',
			{
				object: 'window',
				property: 'open',
				message: 'Please use openInNewTab helper',
			},
		],
		'no-restricted-imports': [
			'error',
			{
				name: 'dayjs',
				message: 'Please use dayjs helper instead',
			},
		],
	},
};
