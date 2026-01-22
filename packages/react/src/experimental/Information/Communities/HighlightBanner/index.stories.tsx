import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { HighlightBanner } from "./index"

const meta: Meta<typeof HighlightBanner> = {
  component: HighlightBanner,
  title: "Home/Communities/HighlightBanner",
  tags: ["autodocs", "experimental"],
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
