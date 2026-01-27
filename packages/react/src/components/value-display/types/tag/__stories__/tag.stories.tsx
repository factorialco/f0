import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Tag",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a single tag with optional icon. Used for labeling or categorizing items in data collections.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Tag",
      render: (item) => ({
        type: "tag",
        value: {
          label: item.status,
          color: item.status === "active" ? "green" : "red",
        },
      }),
    },
  },
}
