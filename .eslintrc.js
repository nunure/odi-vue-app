module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/script-indent": "error",
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/no-use-v-if-with-v-for": "error",
    "vue/no-v-html": "error",
    "vue/prop-name-casing": "error",
    "vue/component-name-in-template-casing": "kebab-case"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"]
};
