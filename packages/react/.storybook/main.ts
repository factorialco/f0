// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from "@storybook/react-vite"

import { createRequire } from "node:module"
import { dirname, join, resolve } from "node:path"
import * as process from "node:process"
import { fileURLToPath } from "node:url"
import remarkGfm from "remark-gfm"
import { Preset } from "storybook/internal/types"

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

// We should add the STORYBOOK_ prefix to make sure that the environment variables are in browser mode (for example manager.ts file)
if (process.env.PUBLIC_BUILD) {
  process.env.STORYBOOK_PUBLIC_BUILD = process.env.PUBLIC_BUILD
}

// Mark that we're building for Storybook to preserve data-testid attributes
process.env.STORYBOOK_BUILD = "true"

const config: StorybookConfig = {
  stories: [
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../src/components",
      titlePrefix: "Components",
    },
    {
      directory: "../src/patterns",
      titlePrefix: "Patterns",
    },
    {
      directory: "../src/experimental",
      titlePrefix: "Experimental",
    },
    {
      directory: "../src/kits",
      titlePrefix: "Kits",
    },
    {
      directory: "../src/layouts",
      titlePrefix: "Layouts",
    },
    {
      directory: "../src/lib",
      titlePrefix: "Library",
    },
    {
      directory: "../src/hooks",
      titlePrefix: "Library",
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
      directory: "../src/deprecated",
      titlePrefix: "Deprecated",
    },
    {
      directory: "../src/ui",
      titlePrefix: "🔒 Internal",
    },
    ...(process.env.STORYBOOK_PUBLIC_BUILD ? [] : []),
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
    // MCP server: exposes component docs/stories to AI agents via the MCP protocol.
    // In public (static) builds only the docs toolset is useful; dev and test require
    // a running Storybook server.
    {
      name: getAbsolutePath("@storybook/addon-mcp"),
      options: process.env.STORYBOOK_PUBLIC_BUILD
        ? { toolsets: { dev: false, test: false, docs: true } }
        : {},
    },
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
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
      "~": resolve(__dirname, "../"),
    }
    // Ensure base is set to '/' to prevent absolute path issues in CI
    // This ensures paths are relative and work correctly when served
    config.base = config.base || "/"

    // Pre-bundle dependencies that Vite would otherwise discover lazily
    // when navigating to certain stories. Late discovery triggers a
    // re-optimisation that invalidates already-loaded modules and breaks
    // the page with "Failed to fetch dynamically imported module" errors.
    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      "@storybook/addon-links/react",
      "@copilotkit/react-core",
      "@copilotkit/react-ui",
      "@copilotkit/shared",
    ]

    return config
  },
}
export default config

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")))
}
