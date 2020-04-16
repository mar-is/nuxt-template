module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV == 'development' ? 'error' : 'off',
    'no-console':
      process.env.NODE_ENV == 'development'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
  },
}
