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
          "By default a name wider than its column wraps onto as many lines as it needs, so the whole name stays readable.",
      },
      source: {
        code: `
render: (item) => ({
    type: 'team',
    value: {
        name: item.teamName,
        src: item.teamLogo,
    }
})`,
      },
    },
  },
}

export const TeamTypeWithLines: Story = {
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
          lines: 2,
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
          "`lines` caps the name: it wraps up to two lines and truncates past that, with the full name in a tooltip on hover. The avatar stays on the first line.",
      },
      source: {
        code: `
render: (item) => ({
    type: 'team',
    value: {
        name: item.teamName,
        src: item.teamLogo,
        lines: 2,
    }
})`,
      },
    },
  },
}

export const TeamTypeTruncatedToOneLine: Story = {
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
          lines: 1,
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
          "`lines: 1` keeps the name on a single line, truncating with an ellipsis and showing the full name in a tooltip on hover. Use it where every row has to be the same height.",
      },
      source: {
        code: `
render: (item) => ({
    type: 'team',
    value: {
        name: item.teamName,
        src: item.teamLogo,
        lines: 1,
    }
})`,
      },
    },
  },
}
