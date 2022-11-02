module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.jsx", "*.js"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      { singleQuote: false },
      {
        endOfLine: "auto",
      },
    ],
    "no-trailing-spaces": 0,
    "keyword-spacing": 0,
    "no-unused-vars": 1,
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "eol-last": 0,
    "no-var": "error",
  },
};
