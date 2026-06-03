import type { ExpenseAlert, ExpenseCategory, ExpenseStatus } from "@/fixtures"

/**
 * Chat-created drafts store.
 *
 * Holds the rows produced by the AI chat (typically by dropping
 * receipts into the chat and letting the agent extract their fields).
 * Lives outside React state so the data survives navigation between
 * sub-tabs of the prototype — `useSubmitExpensesRows` and friends
 * pull from this module on every render, merge the drafts ahead of
 * the seeded fixtures, and the new rows show up everywhere the table
 * is mounted.
 *
 * Why a module-scoped store + subscribers rather than React context:
 *  - The chat lives outside the prototype's component tree (it's
 *    rendered by `ApplicationFrame` via `FactorialShell`). A React
 *    context wrapping the prototype wouldn't be reachable from the
 *    chat's `useCopilotAction` hooks, which run inside the chat's
 *    own provider.
 *  - A module-scoped store is reachable from anywhere via plain
 *    imports, no provider gymnastics required.
 *  - Subscribers are notified with `useSyncExternalStore` so the
 *    merge into `useSubmitExpensesRows` re-renders the table
 *    immediately when the agent creates new drafts.
 *
 * Reference identity: mutations replace the internal array reference
 * (rather than mutating in place) so React's shallow snapshot check
 * in `useSyncExternalStore` actually triggers a re-render.
 *
 * Persistence is intentionally session-only (no localStorage). A
 * prototype refresh wipes the state — matches the rest of the demo's
 * mutation model (filled-fields gate, bulk-edit selection, etc.).
 */
export type ChatDraftExpense = {
  /** `chat-draft-<ts>-<i>` — always unique, never collides with fixture ids. */
  id: string
  provider: string
  status: ExpenseStatus
  /** ISO YYYY-MM-DD. */
  date: string
  amount: number
  category: ExpenseCategory
  alerts: ExpenseAlert[]
  /** Free-text description (used by the required-fields gate). */
  description?: string
  /** Receipt thumbnail data URL — pulled from the chat upload so the
   *  detail page's receipt panel can render the real receipt the
   *  agent saw. Optional: agent-generated drafts without an
   *  attachment fall through to the synthetic SVG receipt. */
  receiptDataUrl?: string
  /** Original filename from the chat upload — surfaced on the
   *  detail page so the user recognises which receipt produced
   *  which row. */
  receiptFilename?: string
}

let drafts: ChatDraftExpense[] = []
const subscribers = new Set<() => void>()

function notify(): void {
  for (const cb of subscribers) cb()
}

export function getChatDrafts(): ChatDraftExpense[] {
  return drafts
}

export function addChatDrafts(next: ChatDraftExpense[]): void {
  if (next.length === 0) return
  drafts = [...next, ...drafts]
  notify()
}

/**
 * Promote a chat draft (or any row id matching a chat draft) to a
 * different status. Used when the user confirms "send for approval"
 * in the chat — the draft flips from `draft` to `pending`.
 */
export function setChatDraftStatus(
  id: string,
  status: ExpenseStatus
): void {
  const idx = drafts.findIndex((d) => d.id === id)
  if (idx < 0) return
  drafts = drafts.map((d, i) => (i === idx ? { ...d, status } : d))
  notify()
}

export function subscribeChatDrafts(cb: () => void): () => void {
  subscribers.add(cb)
  return () => {
    subscribers.delete(cb)
  }
}
