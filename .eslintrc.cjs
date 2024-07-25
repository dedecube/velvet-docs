module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['resources/js/**/*.vue'], // TODO: check path
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['resources/js/Pages/**/*.vue'], // TODO: check path
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/block-tag-newline': 'error',
    'vue/component-api-style': 'error',
    'vue/define-emits-declaration': 'error',
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/define-props-declaration': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/padding-line-between-tags': [
      'error',
      [{ blankLine: 'consistent', prev: '*', next: '*' }],
    ],
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
