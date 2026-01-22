import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/ProgressBar",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a progress bar visualization for displaying completion or progress values. Supports custom max values, labels, and colors.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ProgressBarSimple: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressBar",
        value: {
          value: 75,
          label: "Progress",
          hideLabel: true,
        },
      }),
    },
  },
}

export const ProgressBarWithLabel: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Completion",
      render: () => ({
        type: "progressBar",
        value: {
          value: 65,
          label: "65%",
        },
      }),
    },
  },
}

export const ProgressBarWithCustomMax: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Budget Used",
      render: () => ({
        type: "progressBar",
        value: {
          value: 8500,
          max: 10000,
          label: "€8,500 / €10,000",
        },
      }),
    },
  },
}

export const ProgressBarWithCustomColor: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Tasks Completed",
      render: () => ({
        type: "progressBar",
        value: {
          value: 42,
          max: 100,
          label: "42 / 100 tasks",
          color: "categorical-2",
        },
      }),
    },
  },
}

export const ProgressBarWarningColor: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Storage Used",
      render: () => ({
        type: "progressBar",
        value: {
          value: 90,
          max: 100,
          label: "90% used",
          color: "categorical-3",
        },
      }),
    },
  },
}

export const ProgressBarWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Progress",
      render: () => ({
        type: "progressBar",
        value: {
          value: undefined,
          placeholder: "No progress data available",
          label: "No progress data available",
        },
      }),
    },
  },
}
