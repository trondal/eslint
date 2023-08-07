module.exports = {
  rules: {
    "import/order": [
      "error",
      { groups: ["builtin", "external", "internal", "parent", "sibling"] },
    ],
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-fragments": "off",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "arrow-body-style": "off",
    "dot-notation": "off",
    "func-names": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-else-return": "warn",
    "no-extra-boolean-cast": "off",
    "no-lonely-if": "warn",
    "no-nested-ternary": "off",
    "no-param-reassign": "warn",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-exports": "warn",
    "no-return-assign": "error",
    "no-underscore-dangle": "warn",
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "no-use-before-define": ["error", { functions: false }],
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "prefer-template": "off",
    radix: "warn",
    "spaced-comment": "off",
    eqeqeq: 0,
  },
  env: {
    browser: true, // allow browser global variables
  },
  // parserOptions indicates the syntax you want to allow
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
  },
};
