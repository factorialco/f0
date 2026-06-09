import type { Meta, StoryObj } from "@storybook/react-vite"

import { ProgressBarN } from "./index"

const meta: Meta<typeof ProgressBarN> = {
  title: "Widgets/Charts/ProgressBarN",
  component: ProgressBarN,
  tags: ["autodocs", "experimental"],
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
}

export default meta
type Story = StoryObj<typeof ProgressBarN>

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

export const CustomColors: Story = {
  args: {
    segments: [
      { value: 25, color: "#F0A22E" },
      { value: 50, color: "#6B9DAD" },
      { value: 25, color: "#C8697D" },
    ],
  },
}

export const AllGreen: Story = {
  args: {
    segments: [
      { value: 33, color: "#1AB26B" },
      { value: 33, color: "#1AB26B" },
      { value: 34, color: "#1AB26B" },
    ],
  },
}

export const PartialWithGray: Story = {
  args: {
    segments: [
      { value: 40, color: "#E5463D" },
      { value: 30, color: "#D1D5DB" },
      { value: 30, color: "#D1D5DB" },
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
