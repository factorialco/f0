import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/CategoryBarChart",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Horizontal stacked proportional bar chart cell. Displays category distribution as colored segments with tooltip on hover. Mirrors the standalone CategoryBarChart kit but sized for table cells.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const GenderDistribution: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Gender",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "Female", value: 12 },
            { name: "Male", value: 8 },
            { name: "Non-binary", value: 2 },
          ],
        },
      }),
    },
  },
}

export const WorkLocation: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Work location",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "Office", value: 15 },
            { name: "Remote", value: 10 },
            { name: "Hybrid", value: 5 },
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
      label: "Category",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [
            { name: "A", value: 40, color: "categorical-1" },
            { name: "B", value: 30, color: "categorical-3" },
            { name: "C", value: 20, color: "categorical-5" },
          ],
        },
      }),
    },
  },
}

export const SingleCategory: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Single",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [{ name: "Only one", value: 100 }],
        },
      }),
    },
  },
}

export const Empty: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Category",
      render: () => ({
        type: "categoryBarChart",
        value: {
          dataPoints: [],
        },
      }),
    },
  },
}
