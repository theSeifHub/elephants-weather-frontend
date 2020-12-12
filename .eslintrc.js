module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/prettier",
    "prettier/react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "comma-dangle": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "indent": [2, 2, { SwitchCase: 1 }],
    "no-console": 0,
    "no-alert": 0,
    "linebreak-style": 0,
    "curly": ["error", "all"],
    "quotes": [
      "error",
      "double",
      { "avoidEscape": true, "allowTemplateLiterals": false }
    ],
    "prefer-const": [2, { "destructuring": "all" }]
  }
};
