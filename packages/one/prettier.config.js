/** @type {import('prettier').Config} */
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
}
export default config
