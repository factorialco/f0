import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { IconType } from "@/components/F0Icon"

export type SidebarChatPresence = "online" | "offline"

/**
 * Status shown as a small icon avatar to the right of a person's name (people
 * only). The consumer fully controls it — pass any icon with an accessible
 * label. F0 does not hardcode any set of statuses.
 */
export type SidebarChatStatus = {
  icon: IconType
  label: string
}

/**
 * A top-of-list action in the Messages tab (e.g. "New chat", "New group").
 * The list renders one ghost button per action, so any number can be added.
 */
export type SidebarChatAction = {
  label: string
  icon?: IconType
  onClick?: () => void
}

export type SidebarChat = {
  id: string
  label: string
  /**
   * Person / team / company avatar (F0Avatar variant). Optional: omit it for
   * avatar-less rows (e.g. an AI chat history that shows titles only).
   */
  avatar?: AvatarVariant
  /**
   * When true, the row renders as a skeleton (avatar + name placeholders) but
   * keeps its position. Use it for the "cascade" case: the conversation is
   * known (id, group, order) but its name/avatar haven't resolved yet. As each
   * chat resolves, flip this to false and pass the real `label`/`avatar`.
   */
  loading?: boolean
  onClick?: () => void
  /** When > 0, the chat is rendered as unread (darker, bolder name). */
  unreadCount?: number
  /**
   * When > 0, the unread badge is prefixed with an `@` (groups only) — the
   * unread run includes a message that mentions you, Slack-style. Just a marker
   * on the existing badge, not a separate count; cleared on read.
   */
  mentionCount?: number
  /** When true, the name is replaced by a live "Writing…" label. */
  typing?: boolean
  presence?: SidebarChatPresence
  /** Status icon shown to the right of the name. People only. */
  status?: SidebarChatStatus
  /** Epoch ms of the last activity; used for ordering. */
  lastActivityAt?: number
  /** Whether the chat is pinned (favourited) — selects the solid pin icon. */
  pinned?: boolean
  /**
   * Toggle the pinned state. When set, a pin/unpin button appears on row hover
   * in place of the unread badge / status icon. Omit to hide the affordance.
   */
  onTogglePin?: () => void
  /**
   * A pin/unpin request for this chat is in flight (e.g. waiting on the
   * backend). Replaces the pin button with a spinner, kept visible off-hover,
   * so the row reads as "saving". The move between groups can still be applied
   * optimistically — this only reflects that persistence is pending.
   */
  pinPending?: boolean
}

export type SidebarChatGroup = {
  id: string
  title: string
  /** Initial open state of the collapsible group. @default true */
  isOpen?: boolean
  chats: SidebarChat[]
}

/**
 * Imperative store API exposed by `useSidebarChats`. Every mutation is stable
 * (identity preserved across renders) so it can be called from anywhere with
 * access to the context — e.g. a websocket handler pushing live updates.
 */
export type SidebarChatStore = {
  groups: SidebarChatGroup[]
  /**
   * Id of the currently active chat. Chats are not navigation links — you can
   * be on any page (e.g. the dashboard) with a chat active — so the active
   * state is driven from here, not from the router.
   */
  activeChatId?: string
  /** Number of conversations with unread messages (across all groups). */
  unreadChatsCount: number
  /** Replace the whole tree. */
  setGroups: (groups: SidebarChatGroup[]) => void
  /** Set (or clear, with `null`) the active chat. */
  setActiveChat: (id: string | null) => void
  /** Insert a chat into a group, or update it in place if it already exists. */
  upsertChat: (groupId: string, chat: SidebarChat) => void
  /** Patch an existing chat by id, regardless of its group. */
  updateChat: (id: string, patch: Partial<SidebarChat>) => void
  /** Remove a chat by id. */
  removeChat: (id: string) => void
  /** Convenience setter for the unread counter of a chat. */
  setUnread: (id: string, count: number) => void
  /** Reorder the chats of a group given the new ordered list of ids. */
  reorder: (groupId: string, orderedIds: string[]) => void
}

export type SidebarChatActions = Omit<
  SidebarChatStore,
  "groups" | "activeChatId" | "unreadChatsCount"
>
