module.exports = {
  root: true,
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    strictNullChecks: 0,
    semi: 'never',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.(d.)?ts(x)?'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {},
    },
  ],
}
