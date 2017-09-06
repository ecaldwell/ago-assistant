module.exports = {
    "env": {
        "amd": true,
        "browser": true,
        "es6": true,
        "jquery": true,
        "node": true
    },
    "extends": "prettier",
    "parserOptions": {
      "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error",
      // "array-bracket-spacing": ["warn", "never"],
      // "block-spacing": ["warn", "always"],
      // "brace-style": ["warn", "1tbs"],
      // "comma-spacing": ["warn", {"before": false, "after": true}],
      // "comma-style": ["warn", "last"],
      // "eol-last": ["warn"],
      // "func-names": ["off"],
      // "func-style": ["off", "expression"],
      // "indent": ["warn", 2],
      // "key-spacing": ["warn"],
      // "keyword-spacing": ["warn"],
      // // "linebreak-style": ["off"],
      // "lines-around-comment": ["off"],
      // "max-len": ["off", {"code": 100, "ignoreUrls": true}],
      // "new-cap": ["warn", {"newIsCapExceptions": ["arcgisOAuthInfo"]}],
      // "new-parens": ["warn"],
      // // "newline-after-var": ["off"],
      // // "newline-before-return": ["off"],
      // // "newline-per-chained-call": ["off"],
      // "no-array-constructor": ["warn"],
      // "no-console": ["off"],
      // "no-empty": ["off"],
      // "no-loop-func": ["warn"],
      // "no-trailing-spaces": ["warn"],
      // "no-unneeded-ternary": ["warn"],
      // "no-unused-vars": ["warn"],
      // "no-whitespace-before-property": ["warn"],
      // // "object-curly-spacing": ["warn", "never"],
      // // "object-property-newline": ["off"],
      // "one-var": ["warn", "never"],
      // "one-var-declaration-per-line": ["warn", "always"],
      // "operator-assignment": ["off"],
      // "operator-linebreak": ["warn", "after"],
      // "padded-blocks": ["off", "always"],
      // "quote-props": ["warn", "as-needed"],
      // // "quotes": ["warn", "double"],
      // "semi": ["warn", "always"],
      // "sort-vars": ["off"],
      // "space-before-blocks": ["warn", "always"],
      // "space-before-function-paren": ["warn", "never"],
      // "space-in-parens": ["warn", "never"],
      // "space-infix-ops": ["warn"],
      // "space-unary-ops": ["warn"],
      // "spaced-comment": ["warn", "always"],
      // "wrap-regex": ["off"]
    }
};
