import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { IconType } from "@/components/F0Icon"

export type SidebarChatPresence = "online" | "offline"

/**
 * Status shown as a small avatar to the right of a person's name (people only).
 * The consumer fully controls it — pass an emoji or an icon avatar with an
 * accessible label. F0 does not hardcode any set of statuses.
 */
export type SidebarChatStatus = { label: string } & (
  | { type: "emoji"; emoji: string }
  | { type: "icon"; icon: IconType }
)

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
  /** Person / team / company avatar (F0Avatar variant). */
  avatar: AvatarVariant
  onClick?: () => void
  /** When > 0, the chat is rendered as unread (darker, bolder name). */
  unreadCount?: number
  presence?: SidebarChatPresence
  /** Status icon shown to the right of the name. People only. */
  status?: SidebarChatStatus
  /** Epoch ms of the last activity; used for ordering. */
  lastActivityAt?: number
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
  "groups" | "activeChatId"
>
