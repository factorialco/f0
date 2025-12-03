import { Placeholder } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Icon",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders an icon with an associated label. Used for visual representation of status or type indicators.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

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

export const IconWithHiddenLabel: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Icon with hidden label",
      render: () => ({
        type: "icon",
        value: {
          icon: Placeholder,
          label: "Status indicator",
          hideLabel: true,
        },
      }),
    },
  },
}

export const IconWithTooltip: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Icon with tooltip",
      render: () => ({
        type: "icon",
        value: {
          icon: Placeholder,
          label: "Icon",
          tooltip: "This is a helpful tooltip describing the icon",
        },
      }),
    },
  },
}
