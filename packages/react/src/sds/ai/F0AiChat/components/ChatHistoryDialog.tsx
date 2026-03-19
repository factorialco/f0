import { useCallback, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import {
  Dropdown,
  type DropdownItem as DropdownItemType,
} from "@/experimental/Navigation/Dropdown"
import { ChevronUp, EllipsisHorizontal } from "@/icons/app"
import ChevronDown from "@/icons/app/ChevronDown"
import Delete from "@/icons/app/Delete"
import New from "@/icons/app/New"
import PushPin from "@/icons/app/PushPin"
import Search from "@/icons/app/Search"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Action } from "@/ui/Action"

import { useChatHistory, type ChatThread } from "../hooks/useChatHistory"

interface ChatHistoryDialogProps {
  onClose: () => void
  onSelectThread: (threadId: string, title: string) => void
  onNewChat: () => void
}

type DateGroup = "today" | "yesterday" | "thisMonth" | "older"

interface ThreadGroup {
  key: DateGroup
  threads: ChatThread[]
}

function getDateGroup(dateString: string): DateGroup {
  const date = new Date(dateString)
  const now = new Date()

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const yesterdayStart = new Date(todayStart)
  yesterdayStart.setDate(yesterdayStart.getDate() - 1)
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  if (date >= todayStart) return "today"
  if (date >= yesterdayStart) return "yesterday"
  if (date >= monthStart) return "thisMonth"
  return "older"
}

function groupThreadsByDate(threads: ChatThread[]): ThreadGroup[] {
  const groups: Record<DateGroup, ChatThread[]> = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: [],
  }

  for (const thread of threads) {
    const group = getDateGroup(thread.updatedAt)
    groups[group].push(thread)
  }

  const order: DateGroup[] = ["today", "yesterday", "thisMonth", "older"]
  return order
    .filter((key) => groups[key].length > 0)
    .map((key) => ({ key, threads: groups[key] }))
}

function ThreadItem({
  thread,
  isPinned,
  onSelect,
  onPin,
  onUnpin,
  onDelete,
}: {
  thread: ChatThread
  isPinned: boolean
  onSelect: (threadId: string, title: string) => void
  onPin: (id: string) => void
  onUnpin: (id: string) => void
  onDelete: (id: string) => void
}) {
  const translations = useI18n()
  const dropdownItems: DropdownItemType[] = useMemo(
    () => [
      {
        label: isPinned ? translations.ai.unpinChat : translations.ai.pinChat,
        icon: PushPin,
        onClick: () => (isPinned ? onUnpin(thread.id) : onPin(thread.id)),
      },
      {
        label: translations.ai.deleteChat,
        icon: Delete,
        critical: true,
        onClick: () => onDelete(thread.id),
      },
    ],
    [isPinned, thread.id, onPin, onUnpin, onDelete]
  )

  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        focusRing("rounded")
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect(thread.id, thread.title)
        }
      }}
    >
      <div
        className="flex w-full items-center gap-2"
        onClick={() => onSelect(thread.id, thread.title)}
      >
        <OneEllipsis lines={1} className="text-left font-medium">
          {thread.title}
        </OneEllipsis>
      </div>
      <div className="flex items-center">
        <Dropdown items={dropdownItems}>
          <F0Button
            icon={EllipsisHorizontal}
            variant="ghost"
            size="md"
            label={translations.ai.threadOptions}
            hideLabel
          />
        </Dropdown>
      </div>
    </div>
  )
}

function CollapsibleGroup({
  label,
  threads,
  pinnedIds,
  onSelect,
  onPin,
  onUnpin,
  onDelete,
}: {
  label: string
  threads: ChatThread[]
  pinnedIds: Set<string>
  onSelect: (threadId: string, title: string) => void
  onPin: (id: string) => void
  onUnpin: (id: string) => void
  onDelete: (id: string) => void
}) {
  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggleExpanded()
      }
    },
    [toggleExpanded]
  )

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={toggleExpanded}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          focusRing("rounded")
        )}
      >
        <span className="text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary">
          {label}
        </span>
        <F0Icon
          icon={expanded ? ChevronDown : ChevronUp}
          color="secondary"
          size="xs"
        />
      </div>
      {expanded && (
        <div className="flex flex-col">
          {threads.map((thread) => (
            <ThreadItem
              key={thread.id}
              thread={thread}
              isPinned={pinnedIds.has(thread.id)}
              onSelect={onSelect}
              onPin={onPin}
              onUnpin={onUnpin}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const ChatHistoryDialog = ({
  onClose,
  onSelectThread,
  onNewChat,
}: ChatHistoryDialogProps) => {
  const translations = useI18n()
  const {
    threads,
    isLoading,
    error,
    pinnedIds,
    pinThread,
    unpinThread,
    deleteThread,
  } = useChatHistory({ enabled: true })
  const [search, setSearch] = useState("")

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const groupLabels: Record<DateGroup, string> = useMemo(
    () => ({
      today: translations.ai.today,
      yesterday: translations.ai.yesterday,
      thisMonth: translations.ai.thisMonth,
      older: translations.ai.older,
    }),
    [
      translations.ai.today,
      translations.ai.yesterday,
      translations.ai.thisMonth,
      translations.ai.older,
    ]
  )

  const filteredThreads = useMemo(() => {
    if (!search.trim()) return threads
    const query = search.toLowerCase()
    return threads.filter((t) => t.title.toLowerCase().includes(query))
  }, [threads, search])

  const pinnedThreads = useMemo(
    () => filteredThreads.filter((t) => pinnedIds.has(t.id)),
    [filteredThreads, pinnedIds]
  )

  const unpinnedThreads = useMemo(
    () => filteredThreads.filter((t) => !pinnedIds.has(t.id)),
    [filteredThreads, pinnedIds]
  )

  const groups = useMemo(
    () => groupThreadsByDate(unpinnedThreads),
    [unpinnedThreads]
  )

  const handleSelectThread = useCallback(
    (threadId: string, title: string) => {
      onSelectThread(threadId, title)
      onClose()
    },
    [onSelectThread, onClose]
  )

  const handleNewChat = useCallback(() => {
    onNewChat()
    onClose()
  }, [onNewChat, onClose])

  const handleDelete = useCallback(
    (id: string) => {
      void deleteThread(id)
    },
    [deleteThread]
  )

  const hasResults = pinnedThreads.length > 0 || groups.length > 0

  return createPortal(
    <>
      {/* Overlay — click to dismiss */}
      <div
        className="fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={translations.ai.chatHistory}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center",
          "pointer-events-none",
          "animate-in fade-in-0 zoom-in-95"
        )}
      >
        <div
          className={cn(
            "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
            "rounded-xl bg-f1-background shadow-lg",
            "max-h-[min(600px,80vh)]"
          )}
        >
          {/* Fixed search bar */}
          <div className="flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3">
            <F0Icon icon={Search} color="secondary" size="md" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={translations.ai.searchChats}
              className={cn(
                "w-full",
                "py-2.5 pr-3",
                "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                "outline-none"
              )}
            />
          </div>

          {/* Scrollable thread list */}
          <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-2">
            {/* New chat button */}
            <Action
              variant="ghost"
              size="md"
              className="py-1 [&>div>span>span]:w-full"
              onClick={handleNewChat}
            >
              <div className="flex w-full items-center gap-2">
                <F0Icon icon={New} color="default" size="md" />
                <OneEllipsis lines={1} className="text-left">
                  {translations.ai.startNewChat}
                </OneEllipsis>
              </div>
            </Action>

            {isLoading && (
              <div className="flex flex-col gap-2 py-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2"
                  >
                    <div className="h-5 w-full animate-pulse rounded bg-f1-background-secondary" />
                    <div className="h-5 w-6 animate-pulse rounded bg-f1-background-secondary" />
                  </div>
                ))}
              </div>
            )}

            {!isLoading && error && (
              <p className="py-8 text-center text-base text-f1-foreground-tertiary">
                {error}
              </p>
            )}

            {!isLoading && !error && !hasResults && (
              <p className="py-8 text-center text-base text-f1-foreground-tertiary">
                {translations.ai.noPreviousChats}
              </p>
            )}

            {/* Pinned group */}
            {!isLoading && !error && pinnedThreads.length > 0 && (
              <CollapsibleGroup
                label={translations.ai.pinnedChats}
                threads={pinnedThreads}
                pinnedIds={pinnedIds}
                onSelect={handleSelectThread}
                onPin={pinThread}
                onUnpin={unpinThread}
                onDelete={handleDelete}
              />
            )}

            {/* Date groups (unpinned threads) */}
            {!isLoading &&
              !error &&
              groups.map((group) => (
                <CollapsibleGroup
                  key={group.key}
                  label={groupLabels[group.key]}
                  threads={group.threads}
                  pinnedIds={pinnedIds}
                  onSelect={handleSelectThread}
                  onPin={pinThread}
                  onUnpin={unpinThread}
                  onDelete={handleDelete}
                />
              ))}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
