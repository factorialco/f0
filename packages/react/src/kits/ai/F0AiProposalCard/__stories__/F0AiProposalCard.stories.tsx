import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { modules } from "@/components/avatars/F0AvatarModule"
import Check from "@/icons/app/Check"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0AiProposalCardProps } from "../types"

import { F0AiProposalCard } from ".."

const longDescription = `The employee cannot access payroll documents from their profile.

They already tried refreshing the browser, logging out, and using another device, but the payslip download still fails.`

const defaultArgs: F0AiProposalCardProps = {
  module: "tasks",
  heading: "Review this ticket",
  title: "Cannot access payroll documents",
  subtitle: "People Team · Payroll",
  description: longDescription,
  seeMoreLabel: "See more",
  primaryActionLabel: "Send ticket",
  primaryActionIcon: Check,
  showActions: true,
  onPrimaryAction: fn(),
} satisfies F0AiProposalCardProps

const meta: Meta<F0AiProposalCardProps> = {
  title: "AI/F0AiProposalCard",
  component: F0AiProposalCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  argTypes: {
    module: {
      control: "select",
      options: Object.keys(modules),
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[420px] p-8">
        <Story />
      </div>
    ),
  ],
  args: defaultArgs,
}

export default meta
type Story = Omit<StoryObj<typeof meta>, "args"> & {
  args?: Partial<F0AiProposalCardProps>
}

export const Default: Story = {}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: (args: F0AiProposalCardProps) => {
    const visibleActionsArgs = { ...defaultArgs, ...args }
    const hiddenActionsArgs: F0AiProposalCardProps = {
      ...defaultArgs,
      ...args,
      showActions: false,
    }

    return (
      <div className="flex w-[420px] flex-col gap-6">
        <F0AiProposalCard {...visibleActionsArgs} />
        <F0AiProposalCard
          {...visibleActionsArgs}
          maxCollapsedDescriptionLength={90}
        />
        <F0AiProposalCard {...visibleActionsArgs} module={undefined} />
        <F0AiProposalCard {...hiddenActionsArgs} />
        <F0AiProposalCard {...visibleActionsArgs} subtitle={undefined} />
      </div>
    )
  },
}

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
