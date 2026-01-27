import type { Meta, StoryObj } from "@storybook/react-vite"

import { ProgressBarDuo } from "./index"

const meta: Meta<typeof ProgressBarDuo> = {
  title: "Charts/ProgressBarDuo",
  component: ProgressBarDuo,
  tags: ["autodocs", "experimental"],
  args: {
    value: 50,
    max: 100,
  },
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[150px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressBarDuo>

export const Default: Story = {}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const TwentyFive: Story = {
  args: {
    value: 25,
  },
}

export const SeventyFive: Story = {
  args: {
    value: 75,
  },
}

export const CustomMax: Story = {
  args: {
    value: 75,
    max: 200,
  },
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 200,
        step: 1,
      },
    },
  },
}
