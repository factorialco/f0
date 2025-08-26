import type { Meta, StoryObj } from "@storybook/react-vite"

import { TagAlert } from "./index"

const meta: Meta = {
  component: TagAlert,
  title: "Tag/AlertTag",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Info",
    level: "info",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const InfoAlertTag: Story = {}

export const WarningAlertTag: Story = {
  args: {
    text: "Warning",
    level: "warning",
  },
}

export const CriticalAlertTag: Story = {
  args: {
    text: "Critical",
    level: "critical",
  },
}
