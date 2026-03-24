import {
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { randomId } from "@copilotkit/shared"
import { useEffect } from "react"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { fetchThreadMessages } from "../../utils/fetchThreadMessages"

/**
 * Bridges CopilotKit internal functions (reset, loadThread, sendMessage) to
 * the AiChat state provider via refs. Consolidates the three separate
 * injector components into one.
 */
export const CopilotFunctionBridge = () => {
  const {
    setClearFunction,
    setLoadThreadFunction,
    setIsLoadingThread,
    setSendMessageFunction,
  } = useAiChat()
  const { reset, setMessages, sendMessage } = useCopilotChatInternal()
  const { setThreadId, copilotApiConfig, actions } = useCopilotContext()

  // Reset / clear
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

  // Load thread messages
  useEffect(() => {
    setLoadThreadFunction((threadId: string) => {
      setMessages([])
      setIsLoadingThread(true)
      setThreadId(threadId)
      void fetchThreadMessages(
        copilotApiConfig.chatApiEndpoint,
        copilotApiConfig.headers,
        threadId,
        actions as Record<string, { render?: (...args: any[]) => any }>
      )
        .then(
          (msgs) => setMessages(msgs),
          () => {} // Best-effort: if it fails, stay empty
        )
        .finally(() => setIsLoadingThread(false))
    })
    return () => {
      setLoadThreadFunction(null)
    }
  }, [
    setLoadThreadFunction,
    setThreadId,
    setMessages,
    setIsLoadingThread,
    copilotApiConfig,
    actions,
  ])

  // Send message
  useEffect(() => {
    if (sendMessage) {
      setSendMessageFunction(sendMessage)
    }
    return () => {
      setSendMessageFunction(null)
    }
  }, [setSendMessageFunction, sendMessage])

  return null
}
