module.exports = {
  extends: ['airbnb', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  "plugins": ["@typescript-eslint"],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  // settings: {
  //   polyfills: ['fetch', 'promises', 'url'],
  //   "import/resolver": {
  //     node: {
  //       "paths": ["./"],
  //       "extensions": [
  //         ".js",
  //         ".jsx",
  //         ".ts",
  //         ".tsx"
  //       ]
  //     },
  //   },
  //   "import/parsers": {
  //     "typescript-eslint-parser": [ ".ts", ".tsx" ]
  //   }
  // },
  globals: {
    APP_TYPE: true,
  },
  rules: {
    // 'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // 'import/no-unresolved': 0
    // 'import/no-unresolved': [2, { ignore: ['^@/'] }],
    // 'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
  },
}
