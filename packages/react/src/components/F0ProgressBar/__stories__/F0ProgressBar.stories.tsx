import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0ProgressBar } from "../index"

const meta = {
  title: "F0ProgressBar",
  component: F0ProgressBar,
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
} satisfies Meta<typeof F0ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    segments: [{ value: 30 }, { value: 50 }, { value: 20 }],
  },
}

export const TwoSegments: Story = {
  args: {
    segments: [{ value: 60 }, { value: 40 }],
  },
}

export const FiveSegments: Story = {
  args: {
    segments: [
      { value: 20 },
      { value: 25 },
      { value: 15 },
      { value: 30 },
      { value: 10 },
    ],
  },
}

export const CustomColorTokens: Story = {
  args: {
    segments: [
      { value: 25, color: "categorical-4" },
      { value: 50, color: "categorical-6" },
      { value: 25, color: "categorical-8" },
    ],
  },
}

export const WithCustomMax: Story = {
  args: {
    segments: [{ value: 30 }, { value: 20 }, { value: 10 }],
    max: 100,
  },
}

export const SingleSegment: Story = {
  args: {
    segments: [{ value: 100 }],
  },
}
