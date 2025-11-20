import { Placeholder } from "@/icons/app"
import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const IconType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Icon",
      render: () => ({
        type: "icon",
        value: {
          icon: Placeholder,
          label: "Icon",
        },
      }),
    },
  },
}
