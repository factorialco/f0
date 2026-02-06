// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from "@storybook/react-vite";

import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import * as process from "node:process";
import { fileURLToPath } from "node:url";
import remarkGfm from "remark-gfm";
import { Preset } from "storybook/internal/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// We should add the STORYBOOK_ prefix to make sure that the environment variables are in browser mode (for example manager.ts file)
if (process.env.PUBLIC_BUILD) {
  process.env.STORYBOOK_PUBLIC_BUILD = process.env.PUBLIC_BUILD;
}

// Mark that we're building for Storybook to preserve data-testid attributes
process.env.STORYBOOK_BUILD = "true";

const config: StorybookConfig = {
  stories: [
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../src/components",
      titlePrefix: "Components",
    },
    {
      directory: "../src/experimental",
      titlePrefix: "Components",
    },
    {
      directory: "../src/ai",
      titlePrefix: "Components",
    },
    {
      directory: "../src/lib",
      titlePrefix: "Library",
    },
    {
      directory: "../src/layouts",
      titlePrefix: "Layouts",
    },
    {
      directory: "../src/hooks",
      titlePrefix: "Hooks",
    },
    {
      directory: "../src/sds",
      titlePrefix: "SDS",
    },
    {
      directory: "../src/examples",
      titlePrefix: "Examples",
    },
    {
      directory: "../src/ui",
      titlePrefix: "🔒 Internal",
    },
    ...(process.env.STORYBOOK_PUBLIC_BUILD
      ? []
      : []),
  ],
  staticDirs: ["../public", "./static"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    process.env.STORYBOOK_PUBLIC_BUILD
      ? undefined
      : getAbsolutePath("@vueless/storybook-dark-mode"),
    getAbsolutePath("@chromatic-com/storybook"),
    {
      name: getAbsolutePath("@storybook/addon-docs"),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-vitest"),
  ].filter(Boolean) as Preset[],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    defaultName: "Documentation",
    docsMode:
      process.env.STORYBOOK_PUBLIC_BUILD || process.env.DOCS_MODE
        ? true
        : false,
  },
  typescript: {
    reactDocgen: "react-docgen",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "../tsconfig.json",
    },
  },
  viteFinal: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
      "~": resolve(__dirname, "../"),
    };
    // Ensure base is set to '/' to prevent absolute path issues in CI
    // This ensures paths are relative and work correctly when served
    config.base = config.base || "/";
    return config;
  },
};
export default config;

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}
