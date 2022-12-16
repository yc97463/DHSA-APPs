module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // extends: ['plugin:react/recommended', 'airbnb'],
  extends: 'prettier',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    singleQuote: 0
  }
};
