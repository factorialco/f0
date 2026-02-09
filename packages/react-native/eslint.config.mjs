import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
// Common settings to apply to all configs using React
const reactSettings = {
  react: {
    version: "detect",
  },
};

export default [
  // Ignore dist, lib (compiled files), package (build artifacts), and other config files
  {
    ignores: [
      "**/dist",
      "**/lib",
      "**/package",
      "**/.eslintrc.cjs",
      "**/babel.config.cjs",
      "**/*.cjs",
      "**/scripts/**/*.mjs",
    ],
  },

  // Main React Native configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: reactSettings,
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
    ),
  ).map((config) => ({
    ...config,
    settings: {
      ...(config.settings || {}),
      ...reactSettings,
    },
  })),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: reactSettings,
    rules: {
      "no-undef": "off", // Disable since it conflicts with globals in RN config files
      "@typescript-eslint/no-require-imports": "off", // React Native uses require-style imports
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrors: "none",
        },
      ],
    },
  },
];
