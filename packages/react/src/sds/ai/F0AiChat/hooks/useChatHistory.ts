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
}

/**
 * Hook to fetch the authenticated user's chat history threads from the
 * Mastra backend. The chat history endpoints are nested under the same
 * CopilotKit runtime path (e.g. /copilotkit/chat-history/threads), so
 * they are covered by the same proxy configuration.
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

  return {
    threads,
    isLoading,
    error,
    refetch: fetchThreads,
  }
}
