import { Meta } from "@storybook/react-vite"
import { Cell } from "./shared"

export const meta = {
  title: "Value Display",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Cell types are a way to render data in a data collection. They are defined in the `render` function of the data collection. The type is the cell type to render and the value depends on that type.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta

// Re-export all stories from type-specific files
export * from "../types/alertTag/__stories__/alertTag.stories"
export * from "../types/amount/__stories__/amount.stories"
export * from "../types/avatarList/__stories__/avatarList.stories"
export * from "../types/company/__stories__/company.stories"
export * from "../types/date/__stories__/date.stories"
export * from "../types/dotTag/__stories__/dotTag.stories"
export * from "../types/file/__stories__/file.stories"
export * from "../types/folder/__stories__/folder.stories"
export * from "../types/icon/__stories__/icon.stories"
export * from "../types/longText/__stories__/longText.stories"
export * from "../types/number/__stories__/number.stories"
export * from "../types/percentage/__stories__/percentage.stories"
export * from "../types/person/__stories__/person.stories"
export * from "../types/status/__stories__/status.stories"
export * from "../types/tag/__stories__/tag.stories"
export * from "../types/tagList/__stories__/tagList.stories"
export * from "../types/team/__stories__/team.stories"
export * from "../types/text/__stories__/text.stories"
