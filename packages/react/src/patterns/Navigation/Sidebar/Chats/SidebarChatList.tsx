import { useI18n } from "@/lib/providers/i18n"

import { SidebarTabPanel, SidebarTabPanelGroup } from "../TabPanel"
import {
  SidebarChatBlankState,
  type SidebarChatBlankStateAction,
} from "./SidebarChatBlankState"
import { SidebarChatItem } from "./SidebarChatItem"
import { useSidebarChats } from "./SidebarChatProvider"
import { SidebarChatListSkeleton } from "./SidebarChatSkeleton"
import { SidebarChatAction } from "./types"
import { UnreadBadge } from "./UnreadBadge"

/**
 * Copy shown when there are no chats at all. Override via the `emptyState` prop.
 * Rendered through the shared `OneEmptyState`, so the AI history list and this
 * one read identically — the host (factorial) just supplies the copy + actions.
 */
export type SidebarChatEmptyState = {
  title: string
  description?: string
  /** Optional CTA(s) shown under the copy — e.g. "Start a conversation". */
  actions?: SidebarChatBlankStateAction[]
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
  emptyState: SidebarChatEmptyState
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

  return (
    <SidebarTabPanel
      className="bg-transparent"
      groups={panelGroups}
      actions={actions}
      searchPlaceholder={i18n.chat.searchPlaceholder}
      loading={loading}
      skeleton={<SidebarChatListSkeleton />}
      noResultsLabel={i18n.chat.noResults}
      emptyState={
        <SidebarChatBlankState
          title={emptyState.title}
          description={emptyState.description}
          actions={emptyState.actions}
        />
      }
    />
  )
}
