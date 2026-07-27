// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from "@storybook/react-vite"

import { writeFileSync } from "node:fs"
import { createRequire } from "node:module"
import { dirname, join, resolve } from "node:path"
import * as process from "node:process"
import { fileURLToPath } from "node:url"
import remarkGfm from "remark-gfm"
import { Preset } from "storybook/internal/types"

import {
  componentStatusVitePlugin,
  computeComponentStatusData,
  effectiveStatusByLeaf,
} from "../scripts/component-status-build.mjs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

// The Storybook manager is an esbuild bundle that can't run the Vite virtual
// module or the `@/` alias, so it can't compute component status itself. Compute
// a leaf-name → effective-status map here (Node, at startup) and write it to a
// generated file the manager imports for its sidebar status markers. Only the
// non-stable levels are included (stable needs no marker).
{
  const byLeaf = effectiveStatusByLeaf(computeComponentStatusData().components)
  const markers: Record<string, string> = {}
  for (const [leaf, status] of Object.entries(byLeaf)) {
    if (status === "experimental" || status === "deprecated") {
      markers[leaf] = status
    }
  }
  writeFileSync(
    resolve(__dirname, "sidebar-status.generated.json"),
    JSON.stringify(markers)
  )
}

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
    {
      directory: "../src/experimental/F0CardHorizontal",
      titlePrefix: "Components",
    },
    {
      directory: "../src/experimental/F0SegmentedBar",
      titlePrefix: "Components",
    },
    {
      directory: "../src/experimental/F0VersionHistory",
      titlePrefix: "Components",
    },
    { directory: "../src/hooks/toast", titlePrefix: "Components" },

    // ── Patterns · Core compositions (layouts folded in) ─────────
    { directory: "../src/patterns", titlePrefix: "Patterns" },
    { directory: "../src/experimental/CrudPatterns", titlePrefix: "Patterns" },
    { directory: "../src/layouts", titlePrefix: "Patterns/App shell" },

    // ── Kits · functional bundles (AI + Chat promoted from sds) ──
    { directory: "../src/kits/Charts", titlePrefix: "Kits" },
    { directory: "../src/kits/F0DataChart", titlePrefix: "Kits" },
    { directory: "../src/kits/ai", titlePrefix: "Kits" },
    { directory: "../src/kits/surveys", titlePrefix: "Kits" },
    {
      directory: "../src/experimental/AiPromotionChat",
      titlePrefix: "Kits/AI",
    },

    // ── Domain specific · owned by a single domain (was "SDS") ───
    { directory: "../src/sds/Home", titlePrefix: "Domain specific" },
    { directory: "../src/sds/Profile", titlePrefix: "Domain specific" },
    { directory: "../src/sds/inbox", titlePrefix: "Domain specific" },
    { directory: "../src/sds/social", titlePrefix: "Domain specific/social" }, // Reactions
    {
      directory: "../src/sds/timeline",
      titlePrefix: "Domain specific/timeline",
    }, // composed timeline (lives in sds/)
    {
      directory: "../src/sds/chat",
      titlePrefix: "Domain specific/Communications",
    }, // unvalidated chat — holding area until recurrent use is proven, then promote
    {
      directory: "../src/sds/UpsellingKit",
      titlePrefix: "Domain specific/Growth",
    },

    // ── Resources · hooks, utilities, examples ───────────────────
    { directory: "../src/lib/F0Box", titlePrefix: "Components" }, // layout primitive → Components
    { directory: "../src/lib/Await", titlePrefix: "Resources" },
    { directory: "../src/lib/F0GridStack", titlePrefix: "Resources" },
    { directory: "../src/lib/OneEllipsis", titlePrefix: "Resources" },
    { directory: "../src/lib/VirtualList", titlePrefix: "Resources" },
    { directory: "../src/lib/data-testid", titlePrefix: "Resources" },
    { directory: "../src/lib/numeric", titlePrefix: "Resources" },
    { directory: "../src/lib/providers", titlePrefix: "Resources" },
    { directory: "../src/hooks/datasource", titlePrefix: "Resources" },
    { directory: "../src/examples", titlePrefix: "Resources/Examples" },

    // ── deprecated/ dissolved: `deprecated` is a badge, not a section.
    //    Items sit in their category, marked by the deprecated tag/badge. ──
    { directory: "../src/deprecated/Dialog", titlePrefix: "Components" },
    { directory: "../src/deprecated/EntitySelect", titlePrefix: "Components" },
    { directory: "../src/deprecated/ToggleGroup", titlePrefix: "Components" },

    // ── ui/ dissolved: "internal" is a badge, not a section. Items go to
    //    their altitude (primitive / component / pattern); privacy is the
    //    `internal` tag/badge and stays visible to contributors. ──────────
    // Core · internal primitives (chrome that wraps public components)
    { directory: "../src/ui/Action", titlePrefix: "Components/Primitives" },
    { directory: "../src/ui/Card", titlePrefix: "Components/Primitives" },
    {
      directory: "../src/ui/ChevronToggle",
      titlePrefix: "Components/Primitives",
    },
    { directory: "../src/ui/Counter", titlePrefix: "Components/Primitives" },
    {
      directory: "../src/ui/DatePickerPopup",
      titlePrefix: "Components/Primitives",
    },
    { directory: "../src/ui/Dialog", titlePrefix: "Components/Primitives" },
    { directory: "../src/ui/IconBadge", titlePrefix: "Components/Primitives" },
    {
      directory: "../src/ui/OverflowList",
      titlePrefix: "Components/Primitives",
    },
    { directory: "../src/ui/Select", titlePrefix: "Components/Primitives" },
    { directory: "../src/ui/Spinner", titlePrefix: "Components/Primitives" },
    { directory: "../src/ui/Toast", titlePrefix: "Components/Primitives" },
    {
      directory: "../src/ui/VerticalOverflowList",
      titlePrefix: "Components/Primitives",
    },
    // Core · components (the widget itself; no public wrapper)
    { directory: "../src/ui/ButtonCopy", titlePrefix: "Components" },
    { directory: "../src/ui/ButtonGroup", titlePrefix: "Components" },
    { directory: "../src/ui/F0Wizard", titlePrefix: "Components" },
    { directory: "../src/ui/OnePagination", titlePrefix: "Components" },
    { directory: "../src/ui/OnePreset", titlePrefix: "Components" },
    { directory: "../src/ui/Shortcut", titlePrefix: "Components" },
    { directory: "../src/ui/value-display", titlePrefix: "Components" },
    { directory: "../src/ui/Omnibutton", titlePrefix: "Components" }, // deprecated (badge)
    // Patterns
    { directory: "../src/ui/Kanban", titlePrefix: "Patterns" },
    { directory: "../src/ui/Lane", titlePrefix: "Patterns" },
    // Resources
    { directory: "../src/ui/OneRestrictComponent", titlePrefix: "Resources" },
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

    // Provide the `virtual:f0-component-status-data` module (component status is
    // computed from source at build time). Guarded so it is not added twice if
    // Storybook already merged it from vite.config.ts.
    config.plugins = config.plugins || []
    const existing = (config.plugins as unknown[]).flat(Infinity) as Array<{
      name?: string
    } | null>
    const hasComponentStatus = existing.some(
      (p) => p?.name === "f0-component-status"
    )
    if (!hasComponentStatus) {
      config.plugins.push(componentStatusVitePlugin())
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
