import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagStatus } from "../"

const meta: Meta = {
  component: F0TagStatus,
  title: "Tag/TagStatus",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Label",
    variant: "neutral",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NeutralStatusTag: Story = {}

export const InfoStatusTag: Story = {
  args: {
    variant: "info",
  },
}

export const PositiveTag: Story = {
  args: {
    variant: "positive",
  },
}

export const WarningStatusTag: Story = {
  args: {
    variant: "warning",
  },
}

export const CriticalStatusTag: Story = {
  args: {
    variant: "critical",
  },
}
