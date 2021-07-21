module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'semi': 'error',
    'no-console': 'warn',
    'no-redeclare': 'off',
    'no-lonely-if': 'error',
    'yoda': 'error',
    'no-multi-spaces': 'error',
    'quotes': ['error', 'single', {
      avoidEscape: true
    }],
    'no-implicit-coercion': ['error', {
      'number': false,
      'string': false
    }],
  }
};