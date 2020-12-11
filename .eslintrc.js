module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint-config-alloy', 'eslint-config-alloy/react', 'eslint-config-alloy/typescript'],
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-console': 2
  },
  overrides: []
}
