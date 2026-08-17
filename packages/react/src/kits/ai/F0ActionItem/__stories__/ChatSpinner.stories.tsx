import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChatSpinner } from "../components/ChatSpinner"

const meta: Meta<typeof ChatSpinner> = {
  title: "AI/F0ActionItem/ChatSpinner",
  component: ChatSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 20 },
}

export const Medium: Story = {
  args: { size: 32 },
}

export const Large: Story = {
  args: { size: 60 },
}

export const Hero: Story = {
  args: { size: 120 },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <ChatSpinner size={20} />
      <ChatSpinner size={28} />
      <ChatSpinner size={32} />
      <ChatSpinner size={60} />
      <ChatSpinner size={120} />
    </div>
  ),
}
