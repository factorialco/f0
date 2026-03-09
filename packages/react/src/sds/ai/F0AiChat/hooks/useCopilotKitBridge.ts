import {
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { randomId } from "@copilotkit/shared"
import { useEffect } from "react"

import { useAiChat } from "../providers/AiChatStateProvider"
import { convertMastraToAgui } from "../utils/convertMastraToAgui"

/**
 * Bridge between AiChatStateProvider and CopilotKit internals.
 *
 * Must be called inside the CopilotKit provider tree. It connects three
 * CopilotKit imperative functions (reset, sendMessage, loadThread) to
 * AiChatStateProvider's stable refs so they can be invoked from outside
 * the CopilotKit tree.
 */
export function useCopilotKitBridge() {
  const { setClearFunction, setSendMessageFunction, setLoadThreadFunction } =
    useAiChat()
  const { reset, setMessages, sendMessage } = useCopilotChatInternal()
  const { setThreadId, copilotApiConfig } = useCopilotContext()

  // --- Reset / new conversation ---
  useEffect(() => {
    const resetWithNewThread = () => {
      reset()
      setThreadId(randomId())
    }
    setClearFunction(resetWithNewThread)
    return () => {
      setClearFunction(null)
    }
  }, [setClearFunction, reset, setThreadId])

  // --- Send message ---
  useEffect(() => {
    if (sendMessage) {
      setSendMessageFunction(sendMessage)
    }
    return () => {
      setSendMessageFunction(null)
    }
  }, [setSendMessageFunction, sendMessage])

  // --- Load historical thread ---
  useEffect(() => {
    const loadThread = async (threadId: string) => {
      const baseUrl = copilotApiConfig.chatApiEndpoint

      let rawMessages: Parameters<typeof convertMastraToAgui>[0] = []
      try {
        const response = await fetch(
          `${baseUrl}/chat-history/threads/${encodeURIComponent(threadId)}/messages`,
          {
            credentials: "include",
            headers: { ...copilotApiConfig.headers },
          }
        )
        if (response.ok) {
          const data = (await response.json()) as {
            messages: Parameters<typeof convertMastraToAgui>[0]
          }
          rawMessages = data.messages
        }
      } catch {
        // Silently fail — the chat will start empty
      }

      const messages = convertMastraToAgui(rawMessages)

      reset()
      setThreadId(threadId)
      setMessages(messages)

      // CopilotKit's loadAgentState effect fires on threadId change and may
      // overwrite messages with []. Re-apply after it settles.
      // TODO: replace with a proper CopilotKit event once upstream exposes one.
      // Tracked at: https://github.com/CopilotKit/CopilotKit/issues (open issue)
      setTimeout(() => {
        setMessages(messages)
      }, 100)
    }

    setLoadThreadFunction(loadThread)
    return () => {
      setLoadThreadFunction(null)
    }
  }, [setLoadThreadFunction, reset, setThreadId, setMessages, copilotApiConfig])
}
