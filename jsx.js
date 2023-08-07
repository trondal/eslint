const base = require('./base');

module.exports = {
  ...base,
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
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
  }
};


