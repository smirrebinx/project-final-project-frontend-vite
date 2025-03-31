import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import standard from 'eslint-config-standard'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        document: true,
        window: true,
        process: true
      },
      parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          modules: true
        },
        requireConfigFile: false
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
      jsxA11y
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the version of React that is being used
      }
    },
     extends: [
    'plugin:styled-components-a11y/recommended'
    ],
    rules: {
      ...standard.rules, // Directly include the rules from eslint-config-standard
      'react/jsx-uses-react': 'warn',
      'react/react-in-jsx-scope': 'warn',
      'no-unused-vars': 'warn',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ]
      // Add other custom rules here...
    }
  }
]
