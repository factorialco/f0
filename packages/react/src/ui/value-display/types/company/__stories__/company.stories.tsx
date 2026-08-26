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
          "Inside a fixed-width column, a name wider than the cell truncates with an ellipsis and shows the full name in a tooltip on hover, instead of clipping mid-character.",
      },
    },
  },
}
