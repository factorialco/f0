import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const DotTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Dot Tag",
      render: (item) => ({
        type: "dotTag",
        value: {
          label: item.role,
          color: "viridian",
        },
      }),
    },
  },
}
