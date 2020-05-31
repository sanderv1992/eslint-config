module.exports = {
  extends: ['./rules/react', './rules/best-practices'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
}
