const base = require("./base");

module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:unicorn/recommended",
    "prettier", // disabled conflicting rules with prettier, Prettier must be installed in host project
  ],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      env: {
        "jest/globals": true,
      },
    },
  ],
  // "rules" always wins over "extends"
  rules: {
    "import/order": [
      "error",
      { groups: ["builtin", "external", "internal", "parent", "sibling"] },
    ],
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "no-console": ["warning", { allow: ["warn", "error", "info"] }],
    "no-nested-ternary": "off",
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    "@typescript-eslint/explicit-function-return-type": "off",
    // Use function hoisting to improve code readability
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    // This must be off due to @typescript-eslint/no-use-before-define
    "no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
      },
    ],
  },
  parserOptions: {
    ...base.parserOptions,
    project: "./tsconfig.json", // Kan overstyres
  },
};
