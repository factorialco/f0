import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isCI = process.env.CI === "true";

const noConsoleRule = isCI || process.env.NOCONSOLE === "true";

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
  {
    files: ["eslint.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  // Main project configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "**/dist",
      "**/.eslintrc.cjs",
      "apps/react-native-example/**",
      "packages/react-native/**",
      ".husky",
      ".vscode",
      ".yarn",
      "node_modules",
      "coverage",
      "storybook-static",
    ],
    settings: reactSettings,
  },
  [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      ignores: [
        "**/*.stories.*",
        "**/__stories__/**",
        "**/*.test.*",
        "**/__tests__/**",
      ],
      rules: {
        "no-console": ["error", { allow: ["warn", "error", "assert"] }],
      },
    },
  ],
  // ...fixupConfigRules(
  //   compat.extends(
  //     "eslint:recommended",
  //     "plugin:react/recommended",
  //     "plugin:@typescript-eslint/recommended",
  //     "plugin:react-hooks/recommended",
  //     "plugin:storybook/recommended"
  //   )
  // ).map((config) => ({
  //   ...config,
  //   settings: {
  //     ...(config.settings || {}),
  //     ...reactSettings,
  //   },
  // })),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    //ignores: ["apps/react-native-example/**"],
    plugins: {
      "react-refresh": reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    settings: reactSettings,
    rules: {
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": ["error", {}],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  // Restrict barrel imports for all files except exports.ts and f0.ts
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["**/exports.ts", "**/f0.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@/f0",
              message:
                "Barrel imports are not allowed. Use specific component imports instead.",
            },
            {
              name: "@/experimental",
              message:
                "Imports from @/experimental root are not allowed. Import the component directly instead.",
            },
          ],
          patterns: [
            {
              group: [
                // F0 patterns (all variations)
                "*f0",
                "*f0.ts",
                "*/f0",
                "**/f0",
                "**/f0.ts",
                // exports patterns (all variations)
                "*exports",
                "*exports.ts",
                "*/exports",
                "**/exports",
                "**/exports.ts",
                "@/*/exports",
                "@/**/exports",
                // exceptions
                "!@/lib/providers/f0",
              ],
              message:
                "Barrel imports are not allowed. Use specific component imports instead. [Rule: 1]",
            },
          ],
        },
      ],
    },
  },
  // Restrict barrel imports for exports.ts and f0.ts files (allow exports.ts imports)
  {
    files: [
      "**/exports.ts",
      "**/exports.tsx",
      "**/f0.ts",
      "**/experimental.ts",
    ],
    ignores: [],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@/f0",
              message:
                "Barrel imports are not allowed. Use specific component imports instead.  [Rule: 2]",
            },
            {
              name: "@/experimental",
              message:
                "Imports from @/experimental root are not allowed. Import the component directly instead. [Rule: 3]",
            },
          ],
          patterns: [
            {
              group: [
                // F0 patterns (all variations)
                "f0",
                "*f0.ts",
                "*/f0",
                "**/f0",
                "**/f0.ts",
                // exceptions
                "!@/lib/providers/f0",
              ],
              message:
                "Barrel imports are not allowed. Use specific component imports instead. [Rule: 4]",
            },
          ],
        },
      ],
    },
  },
];
