import { addons } from "storybook/manager-api"
import { create } from "storybook/theming"

const theme = create({
  base: "light",
  brandTitle: "ONE Components",
  brandImage: "./one-light.svg", // CSS will override this based on theme
})

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    filters: {
      noSidebar: (item) => !item.tags?.includes("no-sidebar"),
    },
  },
})
