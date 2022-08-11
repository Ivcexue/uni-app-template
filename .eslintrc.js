module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // 解决vite+airbnb导致eslint报错import/extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },
  globals: {
    uni: true,
    UniApp: true
  }
}
