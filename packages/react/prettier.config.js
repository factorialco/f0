import * as prettierPluginOxc from "@prettier/plugin-oxc"

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
let config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva"],
  organizeImportsSkipDestructiveCodeActions: false,
  proseWrap: "always",
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      parser: "oxc",
      plugins: [prettierPluginOxc],
    },
    {
      files: ["**/*.{ts,mts,cts,tsx}"],
      parser: "oxc-ts",
      plugins: [prettierPluginOxc],
    },
  ],
}
export default config
