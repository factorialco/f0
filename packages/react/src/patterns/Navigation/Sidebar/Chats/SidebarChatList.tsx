import { AnimatePresence, motion } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import { useReducedMotion } from "@/lib/a11y"
import { cn, focusRing } from "@/lib/utils"

import { SidebarCollapsibleSection } from "../CollapsibleSection"
import { SidebarChatItem } from "./SidebarChatItem"
import { useSidebarChats } from "./SidebarChatProvider"
import { SidebarChatAction } from "./types"

/** Copy shown when there are no chats at all. Override via the `emptyState` prop. */
export type SidebarChatEmptyState = {
  emoji?: string
  title?: string
  description?: string
}

const DEFAULT_EMPTY_STATE: Required<SidebarChatEmptyState> = {
  emoji: "💬",
  title: "No chats yet",
  description: "Start a conversation — the synergy won't build itself.",
}

/** Left-aligned, full-width ghost button for a top-of-list action. */
const SidebarChatActionButton = ({ action }: { action: SidebarChatAction }) => (
  <button
    type="button"
    onClick={action.onClick}
    className={cn(
      "flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 pl-1.5 pr-2 text-left font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
      focusRing("focus-visible:ring-inset")
    )}
  >
    {action.icon && (
      <F0Icon icon={action.icon} size="md" className="text-f1-icon" />
    )}
    <span className="line-clamp-1">{action.label}</span>
  </button>
)

/**
 * Body of the "Messages" tab: chat groups read from `SidebarChatProvider`.
 * Chats fade in/out as they are added/removed; live reordering from the store
 * is applied instantly (Slack-style), without layout projection — that avoids
 * the resize-like "bounce" when the tab mounts.
 */
export const SidebarChatList = ({
  actions = [],
  emptyState,
}: {
  /** Ghost actions rendered at the very top (e.g. New chat, New group). */
  actions?: SidebarChatAction[]
  /** Copy for the blank state shown when there are no chats. */
  emptyState?: SidebarChatEmptyState
}) => {
  const { groups, activeChatId, setActiveChat } = useSidebarChats()
  const shouldReduceMotion = useReducedMotion()

  const hasChats = groups.some((group) => group.chats.length > 0)
  const empty = { ...DEFAULT_EMPTY_STATE, ...emptyState }

  return (
    <div className="flex w-full flex-col gap-2 bg-transparent px-3">
      {actions.length > 0 && (
        <div className="flex flex-col gap-0.5">
          {actions.map((action) => (
            <SidebarChatActionButton key={action.label} action={action} />
          ))}
        </div>
      )}
      {!hasChats && (
        <div className="flex flex-col items-center gap-1 px-4 py-10 text-center">
          <span className="text-3xl" role="img" aria-hidden="true">
            {empty.emoji}
          </span>
          <p className="font-medium text-f1-foreground">{empty.title}</p>
          <p className="text-sm text-f1-foreground-secondary">
            {empty.description}
          </p>
        </div>
      )}
      {groups.map((group) => {
        const hasUnread = group.chats.some((c) => c.unreadCount)
        return (
          <SidebarCollapsibleSection
            key={group.id}
            title={group.title}
            isOpen={group.isOpen}
            // Slack-style: when collapsed with unread chats, emphasise the title.
            highlightWhenCollapsed={hasUnread}
          >
            <AnimatePresence initial={false}>
              {group.chats.map((chat) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                >
                  <SidebarChatItem
                    chat={chat}
                    isActive={chat.id === activeChatId}
                    onClick={() => {
                      setActiveChat(chat.id)
                      chat.onClick?.()
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </SidebarCollapsibleSection>
        )
      })}
    </div>
  )
}
