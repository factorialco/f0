"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { type F0ChatMessage } from "../types"

type ChatUIContextValue = {
  /** Message being replied to (quoted in the composer), or null. */
  replyTo: F0ChatMessage | null
  setReplyTo: (message: F0ChatMessage | null) => void
  /** Message currently highlighted after a jump (e.g. clicking a reply quote). */
  highlightedId: string | null
  /** Scroll to a message and briefly highlight it. */
  jumpToMessage: (id: string) => void
  /** The message list registers how to scroll to a given message id. */
  registerScrollToMessage: (fn: (id: string) => void) => void
  /** The composer registers how to attach dropped files (window-wide drop). */
  registerFileDropHandler: (fn: (files: File[]) => void) => void
  /** Route files dropped anywhere on the panel to the composer. */
  dropFiles: (files: File[]) => void
}

const ChatUIContext = createContext<ChatUIContextValue | null>(null)

/** Ephemeral, presentation-only chat UI state (reply target, jump-to-message). */
export const ChatUIProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
  const [replyTo, setReplyTo] = useState<F0ChatMessage | null>(null)
  const [highlightedId, setHighlightedId] = useState<string | null>(null)
  const scrollFnRef = useRef<((id: string) => void) | null>(null)
  const dropFnRef = useRef<((files: File[]) => void) | null>(null)
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (highlightTimer.current) clearTimeout(highlightTimer.current)
    },
    []
  )

  const registerScrollToMessage = useCallback((fn: (id: string) => void) => {
    scrollFnRef.current = fn
  }, [])

  const registerFileDropHandler = useCallback((fn: (files: File[]) => void) => {
    dropFnRef.current = fn
  }, [])

  const dropFiles = useCallback((files: File[]) => {
    dropFnRef.current?.(files)
  }, [])

  const jumpToMessage = useCallback((id: string) => {
    scrollFnRef.current?.(id)
    setHighlightedId(id)
    if (highlightTimer.current) clearTimeout(highlightTimer.current)
    highlightTimer.current = setTimeout(() => setHighlightedId(null), 1600)
  }, [])

  const value = useMemo<ChatUIContextValue>(
    () => ({
      replyTo,
      setReplyTo,
      highlightedId,
      jumpToMessage,
      registerScrollToMessage,
      registerFileDropHandler,
      dropFiles,
    }),
    [
      replyTo,
      highlightedId,
      jumpToMessage,
      registerScrollToMessage,
      registerFileDropHandler,
      dropFiles,
    ]
  )
  return (
    <ChatUIContext.Provider value={value}>{children}</ChatUIContext.Provider>
  )
}

export function useChatUI(): ChatUIContextValue {
  const ctx = useContext(ChatUIContext)
  if (!ctx) {
    throw new Error("useChatUI must be used within a ChatUIProvider")
  }
  return ctx
}
