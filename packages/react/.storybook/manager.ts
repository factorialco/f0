import React from "react"
import { addons } from "storybook/manager-api"
import { create } from "storybook/theming"

// Generated at Storybook startup by `.storybook/main.ts` (the manager is an
// esbuild bundle that can't compute component status itself). Normalized leaf
// names of components whose effective status is experimental.
import experimentalLeaves from "./experimental-components.generated.json"

const experimentalSet = new Set(experimentalLeaves as string[])

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
 * Sidebar label with a warning dot for components whose *effective* status is
 * experimental (untagged, below the bar, or meeting the bar without the stable
 * tag) — see the component-status API. Non-component entries render unchanged.
 */
function renderSidebarLabel(item: { name: string; type: string }) {
  if (item.type !== "component" && item.type !== "docs") return item.name
  if (!experimentalSet.has(normalizeLeaf(item.name))) return item.name

  return React.createElement(
    "span",
    { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
    item.name,
    React.createElement(
      "span",
      {
        title: "Experimental — does not meet the definition of done",
        style: { fontSize: 11, lineHeight: 1, flex: "none" },
      },
      "🚧"
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
      internal: (item) => {
        return (
          !process.env.STORYBOOK_PUBLIC_BUILD ||
          !item.tags?.includes("internal")
        )
      },
      noSidebar: (item) => !item.tags?.includes("no-sidebar"),
    },
  },
  tagBadges: [
    {
      tags: "experimental",
      badge: {
        text: "🚧",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Experimental",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    {
      tags: "stable",
      badge: {
        text: "✅",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Stable",
      },
      display: {
        sidebar: false,
        toolbar: true,
      },
    },
    {
      tags: "deprecated",
      badge: {
        text: "⛔",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Deprecated",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    {
      tags: "internal",
      badge: {
        text: "🔒",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Internal",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
  ],
})
