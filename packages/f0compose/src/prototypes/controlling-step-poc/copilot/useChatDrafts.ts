import { useSyncExternalStore } from "react"

import {
  getChatDrafts,
  getChatFolders,
  subscribeChatDrafts,
  type ChatDraftExpense,
  type ChatFolder,
} from "./chatDraftsStore"

/**
 * Reactive subscription to the chat drafts store. Components that
 * need to react when the AI chat creates new draft rows call this
 * hook; they re-render on every store mutation.
 *
 * The reference returned is stable per-mutation (the store replaces
 * its internal array on every write, so `useSyncExternalStore`'s
 * shallow check fires a re-render).
 */
export function useChatDrafts(): ChatDraftExpense[] {
  return useSyncExternalStore(subscribeChatDrafts, getChatDrafts, getChatDrafts)
}

/** Reactive subscription to the chat-created folders. */
export function useChatFolders(): ChatFolder[] {
  return useSyncExternalStore(
    subscribeChatDrafts,
    getChatFolders,
    getChatFolders
  )
}
