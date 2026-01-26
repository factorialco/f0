import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChatSpinner } from "../components/ChatSpinner"

const meta: Meta<typeof ChatSpinner> = {
  title: "AI/F0ActionItem/ChatSpinner",
  component: ChatSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "no-sidebar"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
