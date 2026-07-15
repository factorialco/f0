import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChartLine } from "@/icons/app"

import { F0AiChatHistory } from "../F0AiChatHistory"
import type { ChatThread } from "../useChatHistory"

const now = new Date()
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
const earlierThisMonth = new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000)
const lastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())

const SAMPLE_THREADS: ChatThread[] = [
  {
    id: "t1",
    title: "Time-off request review for Q3",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  },
  {
    id: "t2",
    title: "Salary increase recommendation for Ana",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  },
  {
    id: "t3",
    title: "Onboarding checklist for the new SRE",
    createdAt: yesterday.toISOString(),
    updatedAt: yesterday.toISOString(),
  },
  {
    id: "t4",
    title: "Engagement survey draft",
    createdAt: earlierThisMonth.toISOString(),
    updatedAt: earlierThisMonth.toISOString(),
  },
  {
    id: "t5",
    title: "Year-end performance review template",
    createdAt: lastYear.toISOString(),
    updatedAt: lastYear.toISOString(),
  },
]

const meta = {
  title: "AI/F0AiChatHistory",
  component: F0AiChatHistory,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof F0AiChatHistory>

export default meta
type Story = StoryObj<typeof meta>

const baseArgs = {
  onClose: () => console.log("close"),
  onSelectThread: (id: string, title: string) =>
    console.log("select", id, title),
  onNewChat: () => console.log("new chat"),
  onPinThread: (id: string) => console.log("pin", id),
  onUnpinThread: (id: string) => console.log("unpin", id),
  onDeleteThread: async (id: string) => console.log("delete", id),
}

export const Loading: Story = {
  args: {
    ...baseArgs,
    threads: [],
    isLoading: true,
    error: null,
    pinnedIds: new Set(),
  },
}

export const Empty: Story = {
  args: {
    ...baseArgs,
    threads: [],
    isLoading: false,
    error: null,
    pinnedIds: new Set(),
  },
}

export const Error: Story = {
  args: {
    ...baseArgs,
    threads: [],
    isLoading: false,
    error: "Failed to fetch chat history",
    pinnedIds: new Set(),
  },
}

export const WithThreads: Story = {
  args: {
    ...baseArgs,
    threads: SAMPLE_THREADS,
    isLoading: false,
    error: null,
    pinnedIds: new Set(),
  },
}

export const WithPinned: Story = {
  args: {
    ...baseArgs,
    threads: SAMPLE_THREADS,
    isLoading: false,
    error: null,
    pinnedIds: new Set(["t1", "t3"]),
  },
}

const THREADS_WITH_BADGE: ChatThread[] = SAMPLE_THREADS.map((thread) =>
  thread.id === "t2"
    ? {
        ...thread,
        title: "Headcount by department",
        badge: { label: "Analytics", icon: ChartLine },
      }
    : thread
)

export const WithModeBadge: Story = {
  args: {
    ...baseArgs,
    threads: THREADS_WITH_BADGE,
    isLoading: false,
    error: null,
    pinnedIds: new Set(),
  },
}
