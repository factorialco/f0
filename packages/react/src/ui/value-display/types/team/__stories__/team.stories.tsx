import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Team",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a team avatar with name. Supports the same badge system as the person type.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TeamType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Team",
      render: (item) => ({
        type: "team",
        value: {
          name: item.teamName,
          src: item.teamLogo,
        },
      }),
    },
  },
}
