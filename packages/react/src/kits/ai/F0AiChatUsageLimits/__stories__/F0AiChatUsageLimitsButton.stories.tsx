import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, screen, userEvent, within } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0AiChatUsageLimitsButton } from "../F0AiChatUsageLimitsButton"

const meta = {
  title: "AI/F0AiChatUsageLimitsButton",
  component: F0AiChatUsageLimitsButton,
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex w-[360px] justify-end pt-[260px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiChatUsageLimitsButton>

export default meta
type Story = StoryObj<typeof meta>

const onSeeCompany = fn()

const ADMIN_USAGE = {
  usedPercentage: 30,
  onSeeCompany,
  sections: [
    { id: "company", label: "Company allowance", usedPercentage: 70 },
    { id: "current", label: "Current usage", usedPercentage: 30 },
  ],
}

export const Employee: Story = {
  args: {
    usage: { usedPercentage: 30 },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step("Open the popover from the ring", async () => {
      await userEvent.click(
        canvas.getByRole("button", { name: /personal allowance/i })
      )
      const dialog = await screen.findByRole("dialog")
      await expect(within(dialog).getByText("30% used")).toBeInTheDocument()
    })
  },
}

export const Admin: Story = {
  args: {
    usage: ADMIN_USAGE,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step("Admins get the company section", async () => {
      await userEvent.click(
        canvas.getByRole("button", { name: /personal allowance/i })
      )
      const dialog = await screen.findByRole("dialog")
      await expect(
        within(dialog).getByText("Company allowance")
      ).toBeInTheDocument()
      await userEvent.click(
        within(dialog).getByRole("button", { name: /your company/i })
      )
      await expect(onSeeCompany).toHaveBeenCalled()
    })
  },
}

export const Exhausted: Story = {
  args: {
    usage: { ...ADMIN_USAGE, usedPercentage: 100 },
  },
}

export const Unlimited: Story = {
  args: {
    usage: {
      usedPercentage: 0,
      unlimited: true,
      onSeeCompany,
      sections: [
        {
          id: "company",
          label: "Company allowance",
          usedPercentage: 0,
          unlimited: true,
        },
      ],
    },
  },
}

export const Loading: Story = {
  args: {
    usage: null,
  },
}

export const LoadError: Story = {
  args: {
    usage: null,
    error: true,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    usage: ADMIN_USAGE,
  },
  render: (args) => (
    <div className="flex flex-row items-center gap-6">
      <F0AiChatUsageLimitsButton {...args} usage={{ usedPercentage: 30 }} />
      <F0AiChatUsageLimitsButton {...args} usage={{ usedPercentage: 100 }} />
      <F0AiChatUsageLimitsButton
        {...args}
        usage={{ usedPercentage: 0, unlimited: true }}
      />
      <F0AiChatUsageLimitsButton {...args} usage={null} />
    </div>
  ),
}
