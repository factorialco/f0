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

export type F0AiChatHistoryProps = {
  /** Close the dialog (overlay click, ESC, or post-selection). */
  onClose: () => void
  /** Called when the user picks a thread to load. */
  onSelectThread: (threadId: string, title: string) => void
  /** Called when the user clicks "Start new chat". */
  onNewChat: () => void

  /** Thread list (already fetched). */
  threads: ChatThread[]
  /** Whether the threads are still being fetched. */
  isLoading: boolean
  /** Fetch error message, or null when no error. */
  error: string | null

  /** Set of pinned thread IDs. */
  pinnedIds: Set<string>
  /** Called when the user pins a thread. */
  onPinThread: (id: string) => void
  /** Called when the user unpins a thread. */
  onUnpinThread: (id: string) => void
  /** Called when the user deletes a thread (may be async). */
  onDeleteThread: (id: string) => Promise<void> | void
}
