import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagAlert } from "../"

const meta: Meta = {
  component: F0TagAlert,
  title: "Tag/TagAlert",
  tags: ["autodocs"],
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

export const PositiveAlertTag: Story = {
  args: {
    text: "Success",
    level: "positive",
  },
}
