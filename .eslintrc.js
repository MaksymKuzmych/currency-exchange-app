module.exports = {
  extends: ['expo', 'plugin:react-hooks/recommended', 'prettier'],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/no-explicit-any': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error',
  },
};
