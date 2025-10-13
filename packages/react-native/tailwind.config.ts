const { baseConfig } = require("@factorialco/f0-core/tailwind");
const { hairlineWidth } = require("nativewind/theme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  ...baseConfig,
  content: [
    "./playground/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    ".storybook/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "false",
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
};
