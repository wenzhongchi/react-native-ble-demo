module.exports = {
  env: {
    node: true,
    es6: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: '16.8.6',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    '@typescript-eslint/camelcase': [2, {properties: 'never'}],
    'react-native/no-unused-styles': 2,
    'no-console': 'off',
    'react/display-name': 'off',
  },
};
