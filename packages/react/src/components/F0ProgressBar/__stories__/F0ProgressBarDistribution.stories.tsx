import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0ProgressBar } from "../index"

const meta = {
  title: "F0ProgressBar/Distribution",
  component: F0ProgressBar.Distribution,
  tags: ["experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0ProgressBar.Distribution>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { label: "Category A", value: 40 },
      { label: "Category B", value: 35 },
      { label: "Category C", value: 25 },
    ],
  },
}

export const GenderDistribution: Story = {
  args: {
    items: [
      { label: "Male", value: 55, color: "categorical-4" },
      { label: "Female", value: 38, color: "categorical-6" },
      { label: "Non-binary", value: 7, color: "categorical-8" },
    ],
  },
}

export const TwoCategories: Story = {
  args: {
    items: [
      { label: "Active", value: 70 },
      { label: "Inactive", value: 30 },
    ],
  },
}

export const FiveCategories: Story = {
  args: {
    items: [
      { label: "Engineering", value: 35 },
      { label: "Design", value: 20 },
      { label: "Product", value: 15 },
      { label: "Sales", value: 20 },
      { label: "Operations", value: 10 },
    ],
  },
}
