import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "storybook/test"

import { Clock } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AiChatHeader } from "../F0AiChatHeader"

const meta = {
  title: "AI/F0AiChatHeader",
  component: F0AiChatHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs", "stable"],
  decorators: [
    (Story) => (
      <div className="w-[480px] rounded-md border border-solid border-f1-border bg-f1-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiChatHeader>

export default meta
type Story = StoryObj<typeof meta>

const noopFetchUsage = async () => ({ used: 230, total: 500 })

const SAMPLE_CREDITS = {
  fetchUsage: noopFetchUsage,
  companyName: "Acme Corp",
  planName: "Enterprise",
  upgradePlanUrl: "https://example.com/upgrade",
}

const openRoutines = fn()

export const Legacy: Story = {
  args: {
    historyEnabled: false,
    title: "AI assistant",
    onClose: () => console.log("close"),
  },
}

export const LegacyWithMessages: Story = {
  args: {
    historyEnabled: false,
    title: "AI assistant",
    hasMessages: true,
    onClose: () => console.log("close"),
    onNewChat: () => console.log("new chat"),
  },
}

export const WithHistory: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: "Q3 employee review summary",
    onClose: () => console.log("close"),
    onOpenHistory: () => console.log("open history"),
  },
}

export const WithHistoryNewConversation: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: null,
    onClose: () => console.log("close"),
    onOpenHistory: () => console.log("open history"),
  },
}

export const WithCredits: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: "Discussing perf reviews",
    credits: SAMPLE_CREDITS,
    onClose: () => console.log("close"),
    onOpenHistory: () => console.log("open history"),
  },
}

export const WithHostAction: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: "Discussing perf reviews",
    actions: [
      {
        id: "routines",
        label: "Routines",
        icon: Clock,
        onClick: openRoutines,
      },
    ],
    onClose: () => console.log("close"),
    onOpenHistory: () => console.log("open history"),
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)
    const action = page.getByRole("button", { name: "Routines" })

    await step("Shows the localized action tooltip", async () => {
      await userEvent.hover(action)
      await expect(await page.findByRole("tooltip")).toHaveTextContent(
        "Routines"
      )
    })

    await step("Invokes the host action", async () => {
      await userEvent.click(action)
      await expect(openRoutines).toHaveBeenCalledOnce()
    })
  },
}

export const Compact: Story = {
  args: {
    compact: true,
    currentThreadTitle: "Q3 employee review summary",
    actions: [
      {
        id: "routines",
        label: "Routines",
        icon: Clock,
        onClick: openRoutines,
      },
    ],
    onClose: () => console.log("close"),
  },
}

export const Fullscreen: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: "Fullscreen conversation",
    fullscreen: true,
    onClose: () => console.log("close"),
    onOpenHistory: () => console.log("open history"),
    onToggleVisualizationMode: () => console.log("toggle"),
  },
}

export const LockedMode: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: "Locked chat",
    lockVisualizationMode: true,
    onClose: () => console.log("close"),
  },
}

export const Snapshot: Story = {
  args: {
    onClose: () => console.log("close"),
  },
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...Legacy.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...LegacyWithMessages.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...WithHistory.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...WithHistoryNewConversation.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...WithCredits.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...WithHostAction.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...Compact.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...Fullscreen.args} />
      </div>
      <div className="rounded-md border border-solid border-f1-border">
        <F0AiChatHeader {...LockedMode.args} />
      </div>
    </div>
  ),
}
