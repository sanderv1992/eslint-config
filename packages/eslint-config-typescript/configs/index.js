module.exports = {
  extends: [
    './rules/imports',
    './rules/best-practices',
    './rules/typescript',
  ].map(require.resolve),
  parserOptions: {
    project: '../tsconfig.json',
    sourceType: 'module',
  },
}
