module.exports = {
  env: {
    browser: true,
    amd: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/all'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: { version: 'detect' }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0
  },
  globals: {
    window: true,
    module: true
  }
};
