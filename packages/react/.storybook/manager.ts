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
