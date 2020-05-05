module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "space-before-function-paren": 0,
    "strict": [2, "never"],
    "semi": [2, "never"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
