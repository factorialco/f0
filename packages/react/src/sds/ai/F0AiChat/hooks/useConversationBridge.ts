"use client"

import { type Message, randomId } from "@copilotkit/shared"
import { useRef, useState } from "react"

/**
 * Manages the CopilotKit bridge refs (clear, sendMessage, loadThread)
 * and conversation state (thread title).
 *
 * CopilotKit's imperative functions live inside the `<CopilotKit>` tree,
 * but consumers need to call them from outside. This hook stores them
 * via refs that `useCopilotKitBridge` populates at mount time.
 */
export function useConversationBridge(
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  resetCanvas: () => void
) {
  // Title of the currently loaded historical thread (null = new conversation)
  const [currentThreadTitle, setCurrentThreadTitle] = useState<string | null>(
    null
  )

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)
  // Store the sendMessage function from CopilotKit
  const sendMessageFunctionRef = useRef<((message: Message) => void) | null>(
    null
  )
  // Store the loadThread function from CopilotKit
  const loadThreadFunctionRef = useRef<
    ((threadId: string) => Promise<void>) | null
  >(null)

  const setClearFunction = (clearFn: (() => void) | null) => {
    clearFunctionRef.current = clearFn
  }

  const setLoadThreadFunction = (
    loadFn: ((threadId: string) => Promise<void>) | null
  ) => {
    loadThreadFunctionRef.current = loadFn
  }

  const setSendMessageFunction = (
    sendFn: ((message: Message) => void) | null
  ) => {
    sendMessageFunctionRef.current = sendFn
  }

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
    // Reset thread title for new conversation
    setCurrentThreadTitle(null)
    // Close canvas when starting a new conversation
    resetCanvas()
  }

  const loadThread = async (threadId: string, title?: string) => {
    if (loadThreadFunctionRef.current) {
      await loadThreadFunctionRef.current(threadId)
    }
    // Store the thread title for display in the header
    setCurrentThreadTitle(title ?? null)
    // Close canvas when switching conversations
    resetCanvas()
  }

  const sendMessage = (message: string | Message) => {
    if (!sendMessageFunctionRef.current) {
      return
    }

    // Ensure chat is open when sending a message
    if (!open) {
      setOpen(true)
    }

    const messageToSend: Message =
      typeof message === "string"
        ? {
            id: randomId(),
            role: "user",
            content: message,
          }
        : message

    sendMessageFunctionRef.current?.(messageToSend)
  }

  return {
    currentThreadTitle,
    clear,
    setClearFunction,
    loadThread,
    setLoadThreadFunction,
    sendMessage,
    setSendMessageFunction,
  }
}
