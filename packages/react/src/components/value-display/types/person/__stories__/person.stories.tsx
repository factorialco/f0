import { Placeholder } from "@/icons/app"
import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

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
