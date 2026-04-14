import { useCallback, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import New from "@/icons/app/New"
import Search from "@/icons/app/Search"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

import { CollapsibleGroup } from "./components/CollapsibleGroup"
import { ThreadListSkeleton } from "./components/ThreadListSkeleton"
import type { DateGroup } from "./types"
import { useChatHistory } from "./useChatHistory"
import { groupThreadsByDate } from "./utils"

interface ChatHistoryDialogProps {
  onClose: () => void
  onSelectThread: (threadId: string, title: string) => void
  onNewChat: () => void
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

            {isLoading && <ThreadListSkeleton />}

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
