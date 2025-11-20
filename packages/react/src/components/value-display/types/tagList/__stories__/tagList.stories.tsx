import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

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
