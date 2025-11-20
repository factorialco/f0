import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const DateInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: item.date,
      }),
    },
  },
}

export const DateValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: { date: item.date },
      }),
    },
  },
}

export const DateWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: () => ({
        type: "date",
        value: { date: undefined, placeholder: "Some placeholder" },
      }),
    },
  },
}
