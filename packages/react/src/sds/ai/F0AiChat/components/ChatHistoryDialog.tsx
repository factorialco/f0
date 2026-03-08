import { useCallback, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { ChevronUp } from "@/icons/app"
import ChevronDown from "@/icons/app/ChevronDown"
import New from "@/icons/app/New"
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

function CollapsibleGroup({
  label,
  threads,
  onSelect,
}: {
  label: string
  threads: ChatThread[]
  onSelect: (threadId: string, title: string) => void
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
          "flex cursor-pointer items-center p-3",
          focusRing("rounded")
        )}
      >
        <span className="text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary">
          {label}
        </span>
        <F0Icon
          icon={expanded ? ChevronDown : ChevronUp}
          color="secondary"
          size="sm"
        />
      </div>
      {expanded && (
        <div className="flex flex-col">
          {threads.map((thread) => (
            <Action
              key={thread.id}
              variant="ghost"
              size="md"
              className="justify-start py-0.5 [&>div>span>span]:w-full"
              onClick={() => onSelect(thread.id, thread.title)}
            >
              <OneEllipsis lines={1} className="text-left">
                {thread.title}
              </OneEllipsis>
            </Action>
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
  const { threads, isLoading, error } = useChatHistory({ enabled: true })
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

  const groups = useMemo(
    () => groupThreadsByDate(filteredThreads),
    [filteredThreads]
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

  const hasResults = groups.length > 0

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
          <div className="flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-3 pl-5 pr-3">
            <F0Icon icon={Search} color="secondary" size="md" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={translations.ai.searchChats}
              className={cn(
                "w-full",
                "py-2 pr-3",
                "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                "outline-none"
              )}
            />
          </div>

          {/* Scrollable thread list */}
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-2">
            {/* New chat button */}
            <Action
              variant="ghost"
              size="md"
              className="py-1 [&>div>span>span]:w-full"
              onClick={handleNewChat}
            >
              <div className="flex w-full items-center gap-2">
                <F0Icon icon={New} color="primary" size="md" />
                <OneEllipsis lines={1} className="text-left">
                  {translations.ai.startNewChat}
                </OneEllipsis>
              </div>
            </Action>

            {isLoading && (
              <div className="flex flex-col gap-2 px-2 py-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg px-3 py-2"
                  >
                    <div className="h-4 w-3/4 animate-pulse rounded bg-f1-background-secondary" />
                    <div className="ml-3 h-3 w-12 animate-pulse rounded bg-f1-background-secondary" />
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

            {!isLoading &&
              !error &&
              groups.map((group) => (
                <CollapsibleGroup
                  key={group.key}
                  label={groupLabels[group.key]}
                  threads={group.threads}
                  onSelect={handleSelectThread}
                />
              ))}
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
