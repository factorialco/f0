import { useSyncExternalStore } from "react"

import {
  getChatDrafts,
  subscribeChatDrafts,
  type ChatDraftExpense,
} from "./chatDraftsStore"

/**
 * Reactive subscription to the chat drafts store. Components that
 * need to react when the AI chat creates new draft rows call this
 * hook; they re-render on every store mutation.
 *
 * The reference returned is stable per-mutation (the store's
 * internal array is mutated in place but `useSyncExternalStore`'s
 * shallow check is fine because the array itself is a new identity
 * after `unshift`).
 */
export function useChatDrafts(): ChatDraftExpense[] {
  return useSyncExternalStore(subscribeChatDrafts, getChatDrafts, getChatDrafts)
}
