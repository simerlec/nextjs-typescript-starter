module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 6,
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
