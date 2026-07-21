import React from "react"
import { addons } from "storybook/manager-api"
import { create } from "storybook/theming"

// Generated at Storybook startup by `.storybook/main.ts` (the manager is an
// esbuild bundle that can't compute component status itself). Maps a normalized
// leaf name → effective status for the non-stable levels.
import sidebarStatus from "./sidebar-status.generated.json"

const statusByLeaf = sidebarStatus as Record<
  string,
  "experimental" | "deprecated"
>

const STATUS_MARKER: Record<string, { emoji: string; title: string }> = {
  experimental: {
    emoji: "🚧",
    title: "Experimental — does not meet the definition of done",
  },
  deprecated: {
    emoji: "❌",
    title: "Deprecated — scheduled for removal",
  },
}

/** Must match `normalizeComponentName`/`leafName` in component-status-build.mjs. */
function normalizeLeaf(name: string) {
  const leaf = name.split("/").pop() ?? name
  return leaf
    .toLowerCase()
    .replace(/^f0/, "")
    .replace(/[^a-z0-9]/g, "")
}

const theme = create({
  base: "light",
  brandTitle: "F0 Design System",
  brandImage: "./f0-light.svg", // CSS will override this based on theme
})

/**
 * Sidebar label with a status marker: 🚧 for effectively-experimental
 * components (untagged, below the bar, or meeting the bar without the stable
 * tag) and ❌ for deprecated ones. Stable and non-component entries render
 * unchanged. See the component-status API.
 */
function renderSidebarLabel(item: { name: string; type: string }) {
  if (item.type !== "component" && item.type !== "docs") return item.name
  const status = statusByLeaf[normalizeLeaf(item.name)]
  const marker = status && STATUS_MARKER[status]
  if (!marker) return item.name

  return React.createElement(
    "span",
    { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
    item.name,
    React.createElement(
      "span",
      {
        title: marker.title,
        style: { fontSize: 11, lineHeight: 1, flex: "none" },
      },
      marker.emoji
    )
  )
}

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ["playground"],
    renderLabel: renderSidebarLabel,
    filters: {
      // `internal` is no longer hidden — internal primitives stay visible to
      // contributors in every build. Maturity markers (🚧 / ❌) come from
      // `renderLabel` above (component-status); there is no separate badge
      // config. Only `no-sidebar` is filtered out.
      noSidebar: (item) => !item.tags?.includes("no-sidebar"),
    },
  },
})
