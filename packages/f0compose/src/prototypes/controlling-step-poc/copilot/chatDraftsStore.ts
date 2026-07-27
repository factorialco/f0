import type {
  ExpenseAlert,
  ExpenseCategory,
  ExpenseStatus,
  Participant,
} from "@/fixtures"

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
  /** Vendor / merchant name (defaults to `provider` when unset). One
   *  can edit it; the detail summary's "Vendor name" row reads it. */
  vendor?: string
  /** Cost-center id (from `costCenters`) once One has coded it. */
  costCenter?: string
  /** Project id (from `projects`) once One has coded it. */
  project?: string
  /** Attendees on a shared meal — filled by the fix/troubleshoot flow
   *  so the `meal-over-limit` alert can clear. */
  participants?: Participant[]
  /** Folder id this draft has been grouped into (see `groupChatDrafts`). */
  groupId?: string
  /** Free-text trip tag used to pre-group related receipts (e.g. the
   *  "Lisbon trip" set). Drives the grouping suggestion copy. */
  tripTag?: string
}

/**
 * A chat-created folder — produced when One groups related drafts
 * (e.g. the three Lisbon-trip receipts). Surfaces as a first-class
 * folder row in the Submit table, same as a fixture `ExpenseGroup`.
 */
export type ChatFolder = {
  /** `chat-folder-<n>` — never collides with fixture `grp-*` ids. */
  id: string
  name: string
  status: ExpenseStatus
  /** Ids of the chat drafts that belong to this folder. */
  memberIds: string[]
}

let drafts: ChatDraftExpense[] = []
let folders: ChatFolder[] = []
let folderSeq = 0
const subscribers = new Set<() => void>()

function notify(): void {
  for (const cb of subscribers) cb()
}

export function getChatDrafts(): ChatDraftExpense[] {
  return drafts
}

export function getChatFolders(): ChatFolder[] {
  return folders
}

export function getChatFolder(id: string): ChatFolder | undefined {
  return folders.find((f) => f.id === id)
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

/**
 * Patch arbitrary fields on a single chat draft. Used by the
 * edit-via-One action, the inline click-to-edit fields on the detail
 * page, and the fix/troubleshoot flow (fills participants/description,
 * clears the alert). Replaces the array reference so subscribers
 * re-render.
 */
export function updateChatDraft(
  id: string,
  patch: Partial<Omit<ChatDraftExpense, "id">>
): void {
  const idx = drafts.findIndex((d) => d.id === id)
  if (idx < 0) return
  drafts = drafts.map((d, i) => (i === idx ? { ...d, ...patch } : d))
  notify()
}

/**
 * Group a set of chat drafts into a new chat folder. Creates the
 * folder row, stamps every member draft with its `groupId`, and
 * notifies once. The folder's status mirrors the members' (all chat
 * drafts start `draft`), so it lands in the To-Do preset alongside
 * the loose receipts.
 */
export function groupChatDrafts(
  ids: string[],
  folderName: string
): ChatFolder | null {
  const members = drafts.filter((d) => ids.includes(d.id))
  if (members.length === 0) return null
  const folder: ChatFolder = {
    id: `chat-folder-${folderSeq++}`,
    name: folderName,
    status: "draft",
    memberIds: members.map((m) => m.id),
  }
  folders = [folder, ...folders]
  drafts = drafts.map((d) =>
    ids.includes(d.id) ? { ...d, groupId: folder.id } : d
  )
  notify()
  return folder
}

/** Promote a chat folder (e.g. on "send for approval"). */
export function setChatFolderStatus(id: string, status: ExpenseStatus): void {
  const idx = folders.findIndex((f) => f.id === id)
  if (idx < 0) return
  folders = folders.map((f, i) => (i === idx ? { ...f, status } : f))
  notify()
}

export function subscribeChatDrafts(cb: () => void): () => void {
  subscribers.add(cb)
  return () => {
    subscribers.delete(cb)
  }
}
