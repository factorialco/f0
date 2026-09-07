import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Tag List",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders multiple tags of any type with automatic overflow handling. Supports limiting the maximum number of visible tags.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TagArrayType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Multiple Tags",
      render: (item) => ({
        type: "tagList",
        value: {
          type: "dot",
          tags: item.skills.map((skill) => ({
            text: skill.label,
            description: skill.description,
            color: skill.color,
          })),
          max: 3,
        },
      }),
    },
  },
}
