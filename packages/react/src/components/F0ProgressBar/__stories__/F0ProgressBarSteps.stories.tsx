import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0ProgressBar } from "../index"

const meta = {
  title: "F0ProgressBar/Steps",
  component: F0ProgressBar.Steps,
  tags: ["experimental"],
  args: {
    total: 5,
    completed: 3,
  },
  argTypes: {
    completed: {
      control: { type: "range", min: 0, max: 10, step: 1 },
    },
    total: {
      control: { type: "range", min: 1, max: 10, step: 1 },
    },
  },
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
} satisfies Meta<typeof F0ProgressBar.Steps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllCompleted: Story = {
  args: {
    total: 3,
    completed: 3,
  },
}

export const NoneCompleted: Story = {
  args: {
    total: 4,
    completed: 0,
  },
}

export const PartialWithCustomColor: Story = {
  args: {
    total: 3,
    completed: 1,
    color: "categorical-5",
  },
}

export const ManySteps: Story = {
  args: {
    total: 8,
    completed: 5,
  },
}
