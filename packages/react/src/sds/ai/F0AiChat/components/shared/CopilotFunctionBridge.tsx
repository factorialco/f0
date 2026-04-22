import {
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { type Message, randomId } from "@copilotkit/shared"
import { useEffect, useRef } from "react"

import { useAiChat } from "../../providers/AiChatStateProvider"
import type { AppendMessage } from "../../types"
import { fetchThreadMessages } from "../../utils/fetchThreadMessages"

/**
 * Convert AppendMessage (user-facing, no IDs) to CopilotKit Message
 * (with generated IDs for message and each tool call).
 *
 * For tool-result messages (`role: "tool"`), the caller must provide
 * the `toolCallId` that links back to the assistant's tool call.
 */
function toMessage(input: AppendMessage): Message {
  if (input.role === "tool") {
    return {
      id: randomId(),
      role: "tool",
      content: input.content,
      toolCallId: input.toolCallId,
    } as Message
  }

  return {
    id: randomId(),
    role: input.role,
    content: input.content,
    ...(input.toolCalls && {
      toolCalls: input.toolCalls.map((tc) => ({
        id: tc.id ?? randomId(),
        type: "function" as const,
        function: tc.function,
      })),
    }),
  }
}

/**
 * Filter messages that can be persisted to the backend.
 * The backend only accepts `user` and `assistant` roles.
 * Tool-result messages (`role: "tool"`) are CopilotKit client-side
 * bookkeeping — the backend already has tool invocation data from
 * the assistant message's `toolCalls`.
 */
function filterPersistableMessages(messages: Message[]): Message[] {
  return messages.filter((m) => m.role === "user" || m.role === "assistant")
}

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
    setAppendMessagesFunction,
    setReplaceMessagesFunction,
  } = useAiChat()
  const { reset, messages, setMessages, sendMessage, threadId } =
    useCopilotChatInternal()
  const { setThreadId, copilotApiConfig, actions } = useCopilotContext()

  // Keep refs to avoid stale closures in bridged callbacks
  const messagesRef = useRef(messages)
  messagesRef.current = messages
  const threadIdRef = useRef(threadId)
  threadIdRef.current = threadId

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

  // Append messages
  // When appending to an existing conversation, existing messages may have
  // non-serializable properties (generativeUI, render functions) attached by
  // CopilotKit at runtime. setMessages internally uses structuredClone, so we
  // strip those via JSON roundtrip. useLazyToolRenderer re-attaches render
  // functions at render time, so nothing is lost.
  //
  // Messages are also persisted to the backend thread (fire-and-forget) so
  // the agent can see them and they appear when loading chat history.
  useEffect(() => {
    setAppendMessagesFunction((appendMessages, persist) => {
      // Generate IDs for CopilotKit and convert to Message[]
      const hydrated = appendMessages.map(toMessage)

      // Client-side injection
      const current = messagesRef.current
      if (current.length === 0) {
        setMessages(hydrated)
      } else {
        const serializable = JSON.parse(JSON.stringify(current))
        setMessages([...serializable, ...hydrated])
      }

      // Persist to backend thread (best-effort, unless persist=false)
      if (!persist) return
      const currentThreadId = threadIdRef.current
      const persistable = filterPersistableMessages(hydrated)
      if (currentThreadId && persistable.length > 0) {
        void fetch(
          `${copilotApiConfig.chatApiEndpoint}/chat-history/threads/${currentThreadId}/messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(copilotApiConfig.headers as Record<string, string>),
            },
            credentials: "include",
            body: JSON.stringify({ messages: persistable }),
          }
        )
      }
    })
    return () => {
      setAppendMessagesFunction(null)
    }
  }, [setAppendMessagesFunction, setMessages, copilotApiConfig])

  // Replace messages (clear + append atomically)
  // Unlike calling reset() then setMessages(), this does a single
  // setMessages(hydrated) so there is no race condition.
  // A new threadId is assigned so the conversation starts fresh.
  useEffect(() => {
    setReplaceMessagesFunction((replaceMessages) => {
      const hydrated = replaceMessages.map(toMessage)

      // Replace messages without changing threadId to avoid CopilotKit's
      // connectAgent cycle which resets agent state.
      // The threadId will be changed lazily on the next user interaction.
      setMessages(hydrated)

      // Persist to the current thread (filter out tool-result messages)
      const currentThreadId = threadIdRef.current
      const persistable = filterPersistableMessages(hydrated)
      if (currentThreadId && persistable.length > 0) {
        void fetch(
          `${copilotApiConfig.chatApiEndpoint}/chat-history/threads/${currentThreadId}/messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(copilotApiConfig.headers as Record<string, string>),
            },
            credentials: "include",
            body: JSON.stringify({ messages: persistable }),
          }
        )
      }
    })
    return () => {
      setReplaceMessagesFunction(null)
    }
  }, [setReplaceMessagesFunction, setMessages, setThreadId, copilotApiConfig])

  return null
}
