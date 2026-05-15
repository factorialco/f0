import { useCopilotContext } from "@copilotkit/react-core"
import { useCallback } from "react"

import {
  type ChatThread,
  F0AiChatHistory,
  useChatHistory,
} from "../../F0AiChatHistory"

import { useAiChat } from "../providers/AiChatStateProvider"

type ConnectedChatHistoryProps = {
  onClose: () => void
  onSelectThread: (threadId: string, title: string) => void
  onNewChat: () => void
}

/**
 * Internal wrapper that wires F0AiChatHistory to the CopilotKit chat-history
 * endpoints. Builds the fetch callbacks (URL + auth headers + runtime fetch)
 * here so the headless package stays a pure UI module with zero URL/auth
 * knowledge.
 */
export const ConnectedChatHistory = ({
  onClose,
  onSelectThread,
  onNewChat,
}: ConnectedChatHistoryProps) => {
  const { copilotApiConfig } = useCopilotContext()
  const { runtimeFetch } = useAiChat()
  const baseUrl = copilotApiConfig.chatApiEndpoint
  const headers = copilotApiConfig.headers

  const fetchThreads = useCallback(async (): Promise<ChatThread[]> => {
    const response = await runtimeFetch(`${baseUrl}/chat-history/threads`, {
      credentials: "include",
      headers: { ...headers },
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch chat history: ${response.status}`)
    }
    const data = (await response.json()) as { threads: ChatThread[] }
    return data.threads
  }, [baseUrl, headers, runtimeFetch])

  const deleteThread = useCallback(
    async (id: string): Promise<void> => {
      const response = await runtimeFetch(
        `${baseUrl}/chat-history/threads/${id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: { ...headers },
        }
      )
      if (!response.ok && response.status !== 204) {
        throw new Error(`Failed to delete thread: ${response.status}`)
      }
    },
    [baseUrl, headers, runtimeFetch]
  )

  const {
    threads,
    isLoading,
    error,
    pinnedIds,
    pinThread,
    unpinThread,
    deleteThread: handleDeleteThread,
  } = useChatHistory({ enabled: true, fetchThreads, deleteThread })

  return (
    <F0AiChatHistory
      onClose={onClose}
      onSelectThread={onSelectThread}
      onNewChat={onNewChat}
      threads={threads}
      isLoading={isLoading}
      error={error}
      pinnedIds={pinnedIds}
      onPinThread={pinThread}
      onUnpinThread={unpinThread}
      onDeleteThread={handleDeleteThread}
    />
  )
}
