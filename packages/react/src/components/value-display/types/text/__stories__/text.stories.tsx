import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Text",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders text or number values. Supports placeholder states and can be used as a shortcut returning just a string.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

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
