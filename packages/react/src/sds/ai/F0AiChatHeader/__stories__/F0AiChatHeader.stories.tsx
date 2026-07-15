import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChartLine } from "@/icons/app"

import { F0AiChatHeader } from "../F0AiChatHeader"

const meta = {
  title: "AI/F0AiChatHeader",
  component: F0AiChatHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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

export const WithTitleIcon: Story = {
  args: {
    historyEnabled: true,
    currentThreadTitle: "Headcount by department",
    titleIcon: ChartLine,
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
