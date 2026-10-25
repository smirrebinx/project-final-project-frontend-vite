import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import standardRules from './eslint-standard-rules.js'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import styledA11y from 'eslint-plugin-styled-components-a11y'

export default [
  {
    ignores: ['dist/**']
  },
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
      'jsx-a11y': jsxA11y,
      'styled-components-a11y': styledA11y
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the version of React that is being used
      }
    },
    rules: {
      // plugin:styled-components-a11y/recommended (which extends plugin:jsx-a11y/recommended)
      ...jsxA11y.flatConfigs.recommended.rules,
      ...styledA11y.configs.recommended.rules,
      ...standardRules, // Rules copied from eslint-config-standard, see eslint-standard-rules.js
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
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
