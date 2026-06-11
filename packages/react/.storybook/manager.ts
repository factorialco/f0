import { addons } from "storybook/manager-api"
import { create } from "storybook/theming"

const theme = create({
  base: "light",
  brandTitle: "F0 Design System",
  brandImage: "./f0-light.svg", // CSS will override this based on theme
})

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ["playground"],
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
        text: "Experimental",
        style: {
          backgroundColor: "#fcefd9",
          color: "#8a5a00",
          borderColor: "#e8c07a",
        },
        tooltip: "Experimental — API may change",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    {
      tags: "stable",
      badge: {
        text: "Stable",
        style: {
          backgroundColor: "#e3f5e9",
          color: "#0f7a39",
          borderColor: "#86cfa0",
        },
        tooltip: "Stable — owned by Foundations",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    {
      tags: "deprecated",
      badge: {
        text: "Deprecated",
        style: {
          backgroundColor: "#fde8e8",
          color: "#b42318",
          borderColor: "#f1a9a0",
        },
        tooltip: "Deprecated — do not use in new code",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    {
      tags: "internal",
      badge: {
        text: "Internal",
        style: {
          backgroundColor: "#eceef2",
          color: "#4b5563",
          borderColor: "#cbd2dc",
        },
        tooltip: "Internal — not part of the public API",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
  ],
})
