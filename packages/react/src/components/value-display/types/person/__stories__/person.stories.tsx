import { Placeholder } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Person",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a person avatar with name. Supports badges (regular or module) and tooltips for additional information.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const PersonType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
        },
      }),
    },
  },
}

export const PersonTypeWithBadge: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
          badge: {
            type: "warning",
            icon: Placeholder,
            tooltip: "This is a tooltip",
          },
        },
      }),
    },
  },
}

export const PersonTypeWithModuleBadge: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
          badge: {
            type: "module",
            module: "inbox",
          },
        },
      }),
    },
  },
}
