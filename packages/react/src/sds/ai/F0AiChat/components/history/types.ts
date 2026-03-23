import type { ChatThread } from "./useChatHistory"

export type DateGroup = "today" | "yesterday" | "thisMonth" | "older"

export interface ThreadGroup {
  key: DateGroup
  threads: ChatThread[]
}

export interface ThreadActionHandlers {
  onSelect: (threadId: string, title: string) => void
  onPin: (id: string) => void
  onUnpin: (id: string) => void
  onDelete: (id: string) => void
}
