import { useSyncExternalStore } from "react"

import type { ChatId, ChatMessage } from "./chats"

/**
 * What you have typed, and what you have sent, per conversation.
 *
 * A module store rather than `useState` inside the composer because the
 * chat panel REMOUNTS on its own: maximizing swaps it into a different
 * React tree (Home's early return renders `MaximizedChat`), and opening a
 * third chat re-chunks the index-keyed columns. Component state dies on
 * both, so a half-written message would vanish when you maximized the
 * window you were writing in. Same reason `surveyDraft` exists.
 *
 * Session-only, like the other stores here — a reload starts the day over.
 */

let drafts: Record<string, string> = {}
const draftListeners = new Set<() => void>()

export function setDraft(id: ChatId, text: string) {
  drafts = { ...drafts, [id]: text }
  draftListeners.forEach((listener) => listener())
}

export function useDraft(id: ChatId): string {
  return useSyncExternalStore(
    (listener) => {
      draftListeners.add(listener)
      return () => {
        draftListeners.delete(listener)
      }
    },
    () => drafts[id] ?? ""
  )
}

// Stable identity for chats with nothing sent — useSyncExternalStore
// re-renders on every changed snapshot reference, so this must not be a
// fresh [] on each read.
const NONE: ChatMessage[] = []
let sent: Record<string, ChatMessage[]> = {}
const sentListeners = new Set<() => void>()

/** Append your own message to a thread. */
export function sendMessage(id: ChatId, body: string) {
  const text = body.trim()
  if (!text) return
  const thread = sent[id] ?? NONE
  sent = {
    ...sent,
    [id]: [...thread, { id: `${id}-sent-${thread.length}`, body }],
  }
  drafts = { ...drafts, [id]: "" }
  sentListeners.forEach((listener) => listener())
  draftListeners.forEach((listener) => listener())
}

export function useSentMessages(id: ChatId): ChatMessage[] {
  return useSyncExternalStore(
    (listener) => {
      sentListeners.add(listener)
      return () => {
        sentListeners.delete(listener)
      }
    },
    () => sent[id] ?? NONE
  )
}
