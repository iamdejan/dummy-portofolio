module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: [
      './tsconfig.json'
    ]
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'unused-imports'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/unbound-method': 'off',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'no-await-in-loop': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
    'unused-imports/no-unused-imports-ts': 'error'
  }
};