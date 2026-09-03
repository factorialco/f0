import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { modules } from "@/components/avatars/F0AvatarModule"
import Check from "@/icons/app/Check"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0AiProposalCardProps } from "../types"

import { F0AiProposalCard } from ".."

const longDescription = `The employee cannot access payroll documents from their profile.

They already tried refreshing the browser, logging out, and using another device, but the payslip download still fails.`

// Lives in meta.args, so every story shares this one spy. Collapsed.play
// asserts an exact call count, and a CI retry or a second visit to the story
// would otherwise inflate it, hence the mockClear in beforeEach below.
const onPrimaryAction = fn()

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
  onPrimaryAction,
} satisfies F0AiProposalCardProps

const meta: Meta<F0AiProposalCardProps> = {
  title: "AI/F0AiProposalCard",
  component: F0AiProposalCard,
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  tags: ["!autodocs", "stable"],
  beforeEach: () => {
    onPrimaryAction.mockClear()
  },
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step(
      "Reveals the full description and moves focus to it",
      async () => {
        await userEvent.click(canvas.getByRole("button", { name: "See more" }))

        // getNodeText only joins an element's *direct* child text nodes, so this
        // resolves to the description <p> alone and not to its ancestors.
        const description = canvas.getByText(/using another device/)
        await expect(description).toHaveFocus()
        // The reveal is one-way: the control unmounts rather than toggling back.
        await expect(
          canvas.queryByRole("button", { name: "See more" })
        ).not.toBeInTheDocument()
      }
    )

    await step("Invokes the primary action", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Send ticket" }))
      await expect(onPrimaryAction).toHaveBeenCalledOnce()
    })
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
