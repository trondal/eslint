# eslint

- Package for common eslint rules.

## contained packages

- airbnb:
  - eslint
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react
  - eslint-plugin-react-hooks
- airbnb-typescript
  - eslint
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - eslint-plugin-import
- airbnb/hooks
- plugin:@typescript-eslint/recommended
  - eslint
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - eslint-plugin-import
- plugin:@typescript-eslint/recommended-requiring-type-checking
- prettier

## Versions

- "jsx" version deals with js and jsx. It is ment for legacy js/lsx project. NOT new projects.
- "tsx" version deals with typescript. But with lax rules regarding formatting.
- "strict" version deals with typescript. Base rules is Airbnb-typescript, but with minor modifications.

## Installation

1. npm install trondal/eslint --save-dev
2. Add "eslint/jsx", "eslint/tsx" or "eslint/strict to eslint-> extend section. (see below for example)

## Explanation

| Rule                                                                                         | Description                               |
| -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| eslint-config-airbnb                                                                         | Standard main config                      |
| eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react, eslint-plugin-react-hooks | Dependencies of eslint-config-airbnb      |
| eslint-config-prettier                                                                       | Remove rules that conflicts with prettier |
| eslint-plugin-jest                                                                           | Jest(testing) rules                       |

## Usage

npm install 'trondal/eslint'

###

example usage in package.json:

    "eslint": "eslint src --ext .js,.jsx,.ts,.tsx"
    "eslint": "eslint src --ext .js,.jsx,.ts,.tsx --fix"

## Overrride in your project

In package.json, .eslintrc.json or whatever file you use for eslint configuration, add the rules to the "rules" section. For instance if I want to allow non-closing components (`<div></div>`), I add this to package.json:

    "eslintConfig": {
        "extends": [
            "@trondal/trondal/strict"
        ],
        "rules": {
            "react/self-closing-comp": 0
        }
    },

## Override global rules.

If you want to change the rules globally, it should be commited into this repo, and can be set in the "rules" section of index.js.
If your project has "special" needs, override the rules in the project, not this repo.
