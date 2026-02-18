const baseConfig = require("@factorialco/f0-react-native/tailwind.config");

/** @type {import("tailwindcss").Config} */
module.exports = {
  ...baseConfig,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@factorialco/f0-react-native/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset"), ...(baseConfig.presets || [])],
};
