import { useCallback, useEffect, useState } from "react"

import { useCopilotContext } from "@copilotkit/react-core"

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

const PINNED_STORAGE_KEY = "f0-ai-pinned-threads"

function readPinnedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(PINNED_STORAGE_KEY)
    if (!raw) return new Set()
    const parsed: unknown = JSON.parse(raw)
    if (Array.isArray(parsed)) return new Set(parsed as string[])
    return new Set()
  } catch {
    return new Set()
  }
}

function writePinnedIds(ids: Set<string>): void {
  try {
    localStorage.setItem(PINNED_STORAGE_KEY, JSON.stringify([...ids]))
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

/**
 * Hook to fetch the authenticated user's chat history threads from the
 * Mastra backend. The chat history endpoints are nested under the same
 * CopilotKit runtime path (e.g. /copilotkit/chat-history/threads), so
 * they are covered by the same proxy configuration.
 *
 * Also manages pinned threads in localStorage and thread deletion via
 * the backend DELETE endpoint.
 *
 * Fetches when `enabled` is true (default). Call `refetch()` to manually
 * trigger a reload, e.g. when the chat history dialog opens.
 */
export function useChatHistory({
  enabled = false,
}: { enabled?: boolean } = {}): UseChatHistoryReturn {
  const { copilotApiConfig } = useCopilotContext()
  const baseUrl = copilotApiConfig.chatApiEndpoint

  const [threads, setThreads] = useState<ChatThread[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(readPinnedIds)

  const fetchThreads = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${baseUrl}/chat-history/threads`, {
        credentials: "include",
        headers: {
          ...copilotApiConfig.headers,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch chat history: ${response.status}`)
      }

      const data = (await response.json()) as { threads: ChatThread[] }
      setThreads(data.threads)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch chat history"
      setError(message)
      setThreads([])
    } finally {
      setIsLoading(false)
    }
  }, [baseUrl, copilotApiConfig.headers])

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
        const response = await fetch(`${baseUrl}/chat-history/threads/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            ...copilotApiConfig.headers,
          },
        })

        if (!response.ok && response.status !== 204) {
          throw new Error(`Failed to delete thread: ${response.status}`)
        }

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
    [baseUrl, copilotApiConfig.headers, fetchThreads]
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
