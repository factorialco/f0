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
    // ── Components · Core primitives ─────────────────────────────
    // Maturity (experimental / stable) is a story tag surfaced as a
    // sidebar badge (see manager.ts), NOT a separate top-level section.
    // The former `experimental/` bucket is dissolved here by function.
    { directory: "../src/components", titlePrefix: "Components" },
    { directory: "../src/experimental/Actions", titlePrefix: "Components" },
    { directory: "../src/experimental/Forms", titlePrefix: "Components" },
    { directory: "../src/experimental/Lists", titlePrefix: "Components" },
    { directory: "../src/experimental/Navigation", titlePrefix: "Components" },
    { directory: "../src/experimental/Overlays", titlePrefix: "Components" },
    { directory: "../src/experimental/Information", titlePrefix: "Components" },
    { directory: "../src/experimental/Widgets", titlePrefix: "Components" },
    { directory: "../src/experimental/Utilities", titlePrefix: "Components" },
    { directory: "../src/experimental/OneTable", titlePrefix: "Components" },
    { directory: "../src/experimental/F0CardHorizontal", titlePrefix: "Components" },
    { directory: "../src/experimental/F0SegmentedBar", titlePrefix: "Components" },
    { directory: "../src/experimental/F0VersionHistory", titlePrefix: "Components" },
    { directory: "../src/hooks/toast", titlePrefix: "Components" },

    // ── Patterns · Core compositions (layouts folded in) ─────────
    { directory: "../src/patterns", titlePrefix: "Patterns" },
    { directory: "../src/experimental/CrudPatterns", titlePrefix: "Patterns" },
    { directory: "../src/layouts", titlePrefix: "Patterns/App shell" },

    // ── Kits · functional bundles (AI + Chat promoted from sds) ──
    { directory: "../src/kits", titlePrefix: "Kits" },
    { directory: "../src/sds/ai", titlePrefix: "Kits" },
    { directory: "../src/sds/chat", titlePrefix: "Kits" },
    { directory: "../src/experimental/AiPromotionChat", titlePrefix: "Kits/AI" },

    // ── Domain specific · owned by a single domain (was "SDS") ───
    { directory: "../src/sds/Home", titlePrefix: "Domain specific" },
    { directory: "../src/sds/Profile", titlePrefix: "Domain specific" },
    { directory: "../src/sds/inbox", titlePrefix: "Domain specific" },
    { directory: "../src/sds/surveys", titlePrefix: "Domain specific" },
    { directory: "../src/sds/TimeLine", titlePrefix: "Domain specific/Time tracking" },
    { directory: "../src/sds/UpsellingKit", titlePrefix: "Domain specific/Growth" },

    // ── Resources · hooks, utilities, examples ───────────────────
    { directory: "../src/lib", titlePrefix: "Resources" },
    { directory: "../src/hooks/datasource", titlePrefix: "Resources" },
    { directory: "../src/examples", titlePrefix: "Resources/Examples" },

    // ── Deprecated · scheduled for removal, with migration ───────
    { directory: "../src/deprecated", titlePrefix: "Deprecated" },

    // ── Internal · primitives not exported from the package ──────
    { directory: "../src/ui", titlePrefix: "🔒 Internal" },
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
      "@xyflow/react",
      "@dagrejs/dagre",
    ]

    return config
  },
}
export default config

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")))
}
