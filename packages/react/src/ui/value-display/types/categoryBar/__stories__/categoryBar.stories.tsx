import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/CategoryBar",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Category bar cell: a proportional distribution across categories (e.g. gender or department breakdowns) rendered inside a data collection. Delegates to CategoryBarChart.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Gender",
      render: () => ({
        type: "categoryBar",
        value: {
          items: [
            { label: "Female", value: 20 },
            { label: "Male", value: 55 },
            { label: "Non-binary", value: 25 },
          ],
        },
      }),
    },
  },
}

export const WithCustomColors: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Department",
      render: () => ({
        type: "categoryBar",
        value: {
          items: [
            { label: "Engineering", value: 40, color: "categorical-3" },
            { label: "Sales", value: 35, color: "categorical-5" },
            { label: "Operations", value: 25, color: "categorical-7" },
          ],
        },
      }),
    },
  },
}

export const WithLegend: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Gender",
      render: () => ({
        type: "categoryBar",
        value: {
          legend: true,
          items: [
            { label: "Female", value: 20 },
            { label: "Male", value: 55 },
            { label: "Non-binary", value: 25 },
          ],
        },
      }),
    },
  },
}

export const Empty: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Gender",
      render: () => ({
        type: "categoryBar",
        value: {
          items: [],
        },
      }),
    },
  },
}
