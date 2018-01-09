process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const env = require('./config/env');
// console.log(process.env.NODE_PATH, {
//   paths: process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
// },)

module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  plugins: [
    'import',
    "prettier"
  ],
  rules: {
    "no-unused-vars": 'warn',

    "react/no-unused-state": 'warn',
    "react/jsx-filename-extension": ['error', { "extensions": [".js", ".jsx"] }],
    "react/default-props-match-prop-types": 'warn',
    "react/prop-types": 'off',
    "react/jsx-no-bind": 'warn',

    "prettier/prettier": ["error", {
      "trailingComma": "es5",
      "bracketSpacing": true,
      "singleQuote": true,
      "jsxBracketSameLine": false,
    }],

    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: [ "Link" ],
      specialLink: [ "to" ],
    }],

    'import/prefer-default-export': 'off',
    
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
      },
    },
  }
};
