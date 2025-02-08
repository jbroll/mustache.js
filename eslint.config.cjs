// eslint.config.cjs
const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "func-names": "off",  // Changed from "error" to "off"
      "no-mixed-spaces-and-tabs": "error",
      "quotes": ["error", "single", "avoid-escape"],
      "semi": "error",
      "keyword-spacing": "error",
      "space-before-function-paren": "error",
      "curly": "off",
      "consistent-return": "off",
      "no-use-before-define": "off",
      "no-process-exit": "off",
      "strict": "off"
    }
  },
  {
    files: ["mustache.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2015
    }
  }
];