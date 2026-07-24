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
  /**
   * Ids of threads with an in-flight pin/unpin/delete request. Use it to show a
   * per-row loading affordance (e.g. a spinner where the actions sit) while the
   * backend confirms. Only populated for host-backed actions: a synchronous,
   * localStorage-only pin (no `pinThread`/`unpinThread` callback) is never
   * pending.
   */
  pendingIds: Set<string>
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
  /**
   * Optional async persisters for the pin state (e.g. a Stream-backed mutation
   * in the host app). When provided, pin/unpin become host-backed: the change
   * is applied optimistically (the row moves between groups at once), the id is
   * marked in `pendingIds` while the request is in flight, and the change is
   * rolled back if the callback rejects. When omitted, the pin state is kept
   * locally in localStorage as before — synchronous and never pending.
   */
  pinThread?: (id: string) => Promise<void>
  unpinThread?: (id: string) => Promise<void>
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
  pinThread: pinThreadCb,
  unpinThread: unpinThreadCb,
}: UseChatHistoryOptions): UseChatHistoryReturn {
  const [threads, setThreads] = useState<ChatThread[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(readPinnedIds)
  const [pendingIds, setPendingIds] = useState<Set<string>>(() => new Set())

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

  // Toggle the local pinned set (the optimistic UI source of truth) and mirror
  // it to localStorage so the pin state survives reloads.
  const setPinnedLocal = useCallback((id: string, pinned: boolean) => {
    setPinnedIds((prev) => {
      if (pinned === prev.has(id)) return prev
      const next = new Set(prev)
      if (pinned) next.add(id)
      else next.delete(id)
      writePinnedIds(next)
      return next
    })
  }, [])

  const markPending = useCallback((id: string, pending: boolean) => {
    setPendingIds((prev) => {
      if (pending === prev.has(id)) return prev
      const next = new Set(prev)
      if (pending) next.add(id)
      else next.delete(id)
      return next
    })
  }, [])

  // Optimistic pin/unpin: move the row at once, then (host-backed only) persist
  // in the background, rolling back and clearing pending on failure.
  const applyPin = useCallback(
    (id: string, pinned: boolean) => {
      const persist = pinned ? pinThreadCb : unpinThreadCb
      setPinnedLocal(id, pinned)

      if (!persist) return // localStorage-only mode: nothing async to await.

      markPending(id, true)
      persist(id)
        .catch(() => setPinnedLocal(id, !pinned))
        .finally(() => markPending(id, false))
    },
    [pinThreadCb, unpinThreadCb, setPinnedLocal, markPending]
  )

  const pinThread = useCallback((id: string) => applyPin(id, true), [applyPin])

  const unpinThread = useCallback(
    (id: string) => applyPin(id, false),
    [applyPin]
  )

  const deleteThread = useCallback(
    async (id: string) => {
      // Mark pending up front so the row shows a spinner while the backend
      // confirms; the row only leaves the list once the delete succeeds.
      markPending(id, true)
      try {
        await deleteThreadCb(id)

        // Remove from local state on success.
        setThreads((prev) => prev.filter((t) => t.id !== id))

        // Clean up from pinned if it was pinned.
        setPinnedIds((prev) => {
          if (!prev.has(id)) return prev
          const next = new Set(prev)
          next.delete(id)
          writePinnedIds(next)
          return next
        })
      } catch {
        // Re-fetch to restore consistent state on failure.
        void fetchThreads()
      } finally {
        markPending(id, false)
      }
    },
    [deleteThreadCb, fetchThreads, markPending]
  )

  return {
    threads,
    isLoading,
    error,
    refetch: fetchThreads,
    pinnedIds,
    pendingIds,
    pinThread,
    unpinThread,
    deleteThread,
  }
}
