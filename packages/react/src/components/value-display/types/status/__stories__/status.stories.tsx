import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const StatusType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Status",
      render: (item) => ({
        type: "status",
        value: {
          status: "critical",
          label: item.status,
        },
      }),
    },
  },
}
