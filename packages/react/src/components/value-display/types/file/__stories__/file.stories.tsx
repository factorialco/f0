import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const FileType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "File",
      render: () => ({
        type: "file",
        value: {
          name: "My file",
          type: "application/pdf",
        },
      }),
    },
  },
}
