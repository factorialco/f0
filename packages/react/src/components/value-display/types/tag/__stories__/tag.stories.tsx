import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

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
