import { useCallback, useEffect, useState } from "react"

import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../F0AiChat/utils/local-storage"

export type ChatThread = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

type UseChatHistoryReturn = {
  threads: ChatThread[]
  isLoading: boolean
  error: string | null
  refetch: () => void
  pinnedIds: Set<string>
  pinThread: (id: string) => void
  unpinThread: (id: string) => void
  deleteThread: (id: string) => Promise<void>
}

type UseChatHistoryOptions = {
  /** When true, fetches threads on mount. Default: `false`. */
  enabled?: boolean
  /**
   * Async callback that returns the list of threads. The host owns the
   * URL/auth/fetch — this hook only calls the callback and manages state.
   */
  fetchThreads: () => Promise<ChatThread[]>
  /**
   * Async callback that deletes a thread by id. Should throw or reject on
   * failure; the hook will then re-fetch to restore consistency.
   */
  deleteThread: (id: string) => Promise<void>
}

const PINNED_STORAGE_KEY = "f0-ai-pinned-threads"

function readPinnedIds(): Set<string> {
  const parsed = readFromLocalStorage<string[]>(PINNED_STORAGE_KEY, [])
  return new Set(Array.isArray(parsed) ? parsed : [])
}

function writePinnedIds(ids: Set<string>): void {
  writeToLocalStorage(PINNED_STORAGE_KEY, [...ids])
}

/**
 * Headless chat-history state manager. Pure UI logic — the caller injects
 * `fetchThreads` and `deleteThread` callbacks so this hook never embeds
 * URLs, auth headers or fetch wiring. Manages pinned threads in
 * localStorage and the threads list (loading/error/data).
 */
export function useChatHistory({
  enabled = false,
  fetchThreads: fetchThreadsCb,
  deleteThread: deleteThreadCb,
}: UseChatHistoryOptions): UseChatHistoryReturn {
  const [threads, setThreads] = useState<ChatThread[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(readPinnedIds)

  const fetchThreads = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await fetchThreadsCb()
      setThreads(data)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch chat history"
      setError(message)
      setThreads([])
    } finally {
      setIsLoading(false)
    }
  }, [fetchThreadsCb])

  useEffect(() => {
    if (enabled) {
      void fetchThreads()
    }
  }, [enabled, fetchThreads])

  const pinThread = useCallback((id: string) => {
    setPinnedIds((prev) => {
      const next = new Set(prev)
      next.add(id)
      writePinnedIds(next)
      return next
    })
  }, [])

  const unpinThread = useCallback((id: string) => {
    setPinnedIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      writePinnedIds(next)
      return next
    })
  }, [])

  const deleteThread = useCallback(
    async (id: string) => {
      try {
        await deleteThreadCb(id)

        // Optimistically remove from local state
        setThreads((prev) => prev.filter((t) => t.id !== id))

        // Clean up from pinned if it was pinned
        setPinnedIds((prev) => {
          if (!prev.has(id)) return prev
          const next = new Set(prev)
          next.delete(id)
          writePinnedIds(next)
          return next
        })
      } catch {
        // Re-fetch to restore consistent state on failure
        void fetchThreads()
      }
    },
    [deleteThreadCb, fetchThreads]
  )

  return {
    threads,
    isLoading,
    error,
    refetch: fetchThreads,
    pinnedIds,
    pinThread,
    unpinThread,
    deleteThread,
  }
}
