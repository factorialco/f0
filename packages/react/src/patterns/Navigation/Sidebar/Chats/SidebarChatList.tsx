import { useI18n } from "@/lib/providers/i18n"

import { SidebarTabPanel, SidebarTabPanelGroup } from "../TabPanel"
import { SidebarChatItem } from "./SidebarChatItem"
import { useSidebarChats } from "./SidebarChatProvider"
import { SidebarChatListSkeleton } from "./SidebarChatSkeleton"
import { SidebarChatAction } from "./types"
import { UnreadBadge } from "./UnreadBadge"

/** Copy shown when there are no chats at all. Override via the `emptyState` prop. */
export type SidebarChatEmptyState = {
  emoji?: string
  title?: string
  description?: string
}

const DEFAULT_EMPTY_STATE: Required<SidebarChatEmptyState> = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a new conversation to see it here.",
}

/**
 * Body of the "Messages" tab: chat groups read from `SidebarChatProvider`,
 * rendered through the shared `SidebarTabPanel` (search + actions + collapsible
 * groups). This stays a thin adapter — it maps the chat store onto the panel
 * and owns only chat-specific bits (unread badges, the blank state copy).
 */
export const SidebarChatList = ({
  actions = [],
  emptyState,
  loading = false,
}: {
  /** Ghost actions rendered at the very top (e.g. New chat, New group). */
  actions?: SidebarChatAction[]
  /** Copy for the blank state shown when there are no chats. */
  emptyState?: SidebarChatEmptyState
  /**
   * Whole-list loading: the conversations aren't known yet. Renders a generic
   * skeleton instead of the blank state. Once any chats are known, pass them
   * (with `loading` on the individual chats whose name is still resolving) and
   * set this back to false — the per-chat skeletons take over (cascade).
   */
  loading?: boolean
}) => {
  const { groups, activeChatId, setActiveChat } = useSidebarChats()
  const i18n = useI18n()

  const panelGroups: SidebarTabPanelGroup[] = groups.map((group) => {
    const totalUnread = group.chats.reduce(
      (sum, c) => sum + (c.unreadCount ?? 0),
      0
    )
    return {
      id: group.id,
      title: group.title,
      isOpen: group.isOpen,
      // Slack-style: when collapsed with unread chats, emphasise the title and
      // surface the group's total unread count as a badge.
      highlightWhenCollapsed: totalUnread > 0,
      collapsedBadge:
        totalUnread > 0 ? <UnreadBadge count={totalUnread} /> : undefined,
      items: group.chats.map((chat) => ({
        id: chat.id,
        searchText: chat.label,
        content: (
          <SidebarChatItem
            chat={chat}
            isActive={chat.id === activeChatId}
            onClick={() => {
              setActiveChat(chat.id)
              chat.onClick?.()
            }}
          />
        ),
      })),
    }
  })

  const empty = { ...DEFAULT_EMPTY_STATE, ...emptyState }

  return (
    <SidebarTabPanel
      className="bg-transparent"
      groups={panelGroups}
      actions={actions}
      searchPlaceholder={i18n.chat.searchPlaceholder}
      loading={loading}
      skeleton={<SidebarChatListSkeleton />}
      noResultsLabel={i18n.chat.noResults}
      animateItems
      emptyState={
        <div className="flex flex-col items-center gap-1 px-4 py-10 text-center">
          <span className="text-3xl" role="img" aria-hidden="true">
            {empty.emoji}
          </span>
          <p className="font-medium text-f1-foreground">{empty.title}</p>
          <p className="text-sm text-f1-foreground-secondary">
            {empty.description}
          </p>
        </div>
      }
    />
  )
}
