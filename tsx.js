const base = require("./base");

module.exports = {
  ...base,
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
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
    ...base.rules,
    "@typescript-eslint/ban-ts-comment": "off", // Used to disable error on @ts-ignore lines
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unused-expressions": [
      "warn",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off", // Used to disable the following error: 'React' was used before it was defined  @typescript-eslint/no-use-before-define
    "@typescript-eslint/no-var-requires": "off",
    "import/no-cycle": "warn",
    "no-global-assign": "off",
    "no-restricted-exports": ["warn", { restrictedNamedExports: ["default"] }],
    "import/no-default-export": "warn",
    "no-restricted-globals": "off",
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "react/jsx-no-constructed-context-values": "warn",
    "react/no-array-index-key": "warn",
    "react/require-default-props": "off",
  },
  parserOptions: {
    ...base.parserOptions,
    project: "./tsconfig.json", // Kan overstyres
  },
};
