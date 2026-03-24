import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollShadow } from "../ScrollShadow"

const meta = {
  title: "AI/F0AiChat/Messages/ScrollShadow",
  component: ScrollShadow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative h-32 w-64 bg-f1-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollShadow>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
  args: {
    position: "top",
  },
}

export const Bottom: Story = {
  args: {
    position: "bottom",
  },
}
