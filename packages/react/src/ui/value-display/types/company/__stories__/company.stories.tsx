import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Company",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Renders a company avatar with name.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CompanyType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
        },
      }),
    },
  },
}

export const CompanyTypeWithLongName: Story = {
  args: {
    item: {
      ...mockItem,
      companyName: "Factorial AI handles the paperwork, you handle the people.",
    },
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
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
    type: 'company',
    value: {
        name: item.companyName,
        src: item.companyLogo,
    }
})`,
      },
    },
  },
}

export const CompanyTypeWithLines: Story = {
  args: {
    item: {
      ...mockItem,
      companyName: "Factorial AI handles the paperwork, you handle the people.",
    },
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
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
    type: 'company',
    value: {
        name: item.companyName,
        src: item.companyLogo,
        lines: 2,
    }
})`,
      },
    },
  },
}

export const CompanyTypeTruncatedToOneLine: Story = {
  args: {
    item: {
      ...mockItem,
      companyName: "Factorial AI handles the paperwork, you handle the people.",
    },
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
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
    type: 'company',
    value: {
        name: item.companyName,
        src: item.companyLogo,
        lines: 1,
    }
})`,
      },
    },
  },
}
