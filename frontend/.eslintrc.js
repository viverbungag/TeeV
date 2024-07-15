/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
  extends: ['@cyrilolanolan/ts', 'next'],
  settings: {
    next: {
      rootDir: 'src',
    },
  },
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
