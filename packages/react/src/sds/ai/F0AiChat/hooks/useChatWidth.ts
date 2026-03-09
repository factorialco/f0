"use client"

import { useEffect, useState } from "react"

import { DEFAULT_CHAT_WIDTH } from "../constants"

const CHAT_WIDTH_STORAGE_KEY = "ONE-ai-chat-width"

const getStoredChatWidth = (): number => {
  if (typeof window === "undefined") return DEFAULT_CHAT_WIDTH
  try {
    const stored = localStorage.getItem(CHAT_WIDTH_STORAGE_KEY)
    if (stored) {
      const parsed = parseInt(stored, 10)
      if (!isNaN(parsed) && parsed >= 300 && parsed <= 712) {
        return parsed
      }
    }
  } catch {
    // localStorage might not be available
  }
  return DEFAULT_CHAT_WIDTH
}

/**
 * Manages the chat panel width with localStorage persistence.
 */
export function useChatWidth() {
  const [chatWidth, setChatWidth] = useState(() => getStoredChatWidth())

  // Persist chat width to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(CHAT_WIDTH_STORAGE_KEY, String(chatWidth))
    } catch {
      // localStorage might not be available
    }
  }, [chatWidth])

  const resetChatWidth = () => {
    setChatWidth(DEFAULT_CHAT_WIDTH)
  }

  return { chatWidth, setChatWidth, resetChatWidth }
}
