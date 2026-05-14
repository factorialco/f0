import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import Check from "@/icons/app/Check"

import { F0AiProposalConfirmationCard } from ".."

const longDescription = `The employee cannot access payroll documents from their profile.

They already tried refreshing the browser, logging out, and using another device, but the payslip download still fails.`

const meta = {
  title: "AI/F0AiProposalConfirmationCard",
  component: F0AiProposalConfirmationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  decorators: [
    (Story) => (
      <div className="w-[420px] p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    module: "tasks",
    heading: "Review this ticket",
    title: "Cannot access payroll documents",
    subtitle: "People Team · Payroll",
    description: longDescription,
    seeMoreLabel: "See more",
    primaryActionLabel: "Send ticket",
    secondaryActionLabel: "Cancel",
    primaryActionIcon: Check,
    showActions: true,
    onPrimaryAction: fn(),
    onSecondaryAction: fn(),
  },
} satisfies Meta<typeof F0AiProposalConfirmationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Collapsed: Story = {
  args: {
    maxCollapsedDescriptionLength: 90,
  },
}

export const WithoutActions: Story = {
  args: {
    showActions: false,
  },
}

export const WithoutSubtitle: Story = {
  args: {
    subtitle: undefined,
  },
}
