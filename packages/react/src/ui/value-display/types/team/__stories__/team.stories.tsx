import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Team",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Renders a team avatar with name.",
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

export const TeamTypeWithLongName: Story = {
  args: {
    item: {
      ...mockItem,
      teamName: "Engineering Department for International Product Operations",
    },
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
  render: (args) => (
    <div style={{ width: 200 }}>
      <Cell {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Inside a fixed-width column, a name wider than the cell truncates with an ellipsis and shows the full name in a tooltip on hover, instead of clipping mid-character.",
      },
    },
  },
}
