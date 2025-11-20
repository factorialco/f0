import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const TextType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => item.firstName + " " + item.lastName,
    },
  },
}

export const TextInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => ({
        type: "text",
        value: item.firstName + " " + item.lastName,
      }),
    },
  },
}

export const TextValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => ({
        type: "text",
        value: {
          text: item.firstName + " " + item.lastName,
        },
      }),
    },
  },
}

export const TextWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: () => ({
        type: "text",
        value: {
          text: undefined,
          placeholder: "Some placeholder",
        },
      }),
    },
  },
}
