import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { HighlightBanner } from "./index"

const meta: Meta<typeof HighlightBanner> = {
  component: HighlightBanner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof HighlightBanner>

export const Default: Story = {
  args: {
    title: "Thank you for their amazing work!",
    subtitle: "Show appreciation and spread positivity",
    buttonLabel: "Send claps",
    onClick: fn(),
  },
}
