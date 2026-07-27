import type {
  ControllingFields,
  Expense,
  ExpenseAlert,
  ExpenseGroup,
  ExpenseSplit,
  ExpenseStatus,
  ForeignCurrency,
  Participant,
} from "@/fixtures"
import { CURRENT_USER_ID, employees } from "@/fixtures"
import { hasReceipt } from "@/prototypes/_shared/receiptPresence"

import type { ChatDraftExpense, ChatFolder } from "../copilot/chatDraftsStore"
import { effectiveStatus } from "./statusOverrides"
import { mockDescriptionFor } from "./mockDescriptions"

/**
 * The unified row type for the Submit / Manage data collections.
 *
 * BR-008: folders are first-class rows that live INSIDE the expenses
 * data collection — not in a separate sibling tab. Visually the row
 * shows the folder icon (via the `folder` cell type) and clicking it
 * opens the folder detail sub-screen.
 */
export type SpendingRowKind = "expense" | "folder"

export type SpendingRow = {
  id: string
  kind: SpendingRowKind
  /** Provider name (expense) or folder name. */
  name: string
  /** Expense category (expense rows only) — folders show "Folder · N expenses". */
  description: string
  status: ExpenseStatus
  /** Amount in EUR — for folders, this is the aggregated total (BR-009). */
  amount: number
  /** ISO YYYY-MM-DD. */
  date: string
  /** Number of contained expenses (folders only). */
  expenseCount?: number
  /** Compliance alerts on the row — drives Manage's Needs review preset. */
  alerts: ExpenseAlert[]
  /**
   * Accounting metadata once finance has begun coding. `undefined` for
   * folder rows and for any expense not yet in `approved`/`controlled`.
   * The Pending Controlling side panel reads/writes this block.
   */
  controlling?: ControllingFields
  /**
   * Foreign-currency receipt metadata — present only when the original
   * receipt was issued in a non-EUR currency. Drives the info alert
   * shown below the reimbursable amount in `SubmitterEditForm`. See
   * `ForeignCurrency` for the contract.
   */
  foreignCurrency?: ForeignCurrency
  /**
   * Participants on a shared expense (PSPEC-spending-participants-
   * split). Present only on participant-bearing categories (Meals
   * in v1) when the owner declared participants. Owner is implicit
   * and NOT in this list.
   */
  participants?: Participant[]
  /**
   * Declared split-payment breakdown across the participants list.
   * `null` (or `undefined`) means "no split declared" — the owner
   * pays for the whole receipt. Present only when `participants`
   * is set AND the owner enabled the split toggle.
   */
  split?: ExpenseSplit | null
  /**
   * How the expense was paid. `"factorial-card"` flips the
   * SubmitterEditForm into company-paid mode (paymentMethod locked,
   * reimbursable + split sections hidden). Omitted = defaults to
   * `"personal-card"` in the form.
   */
  paymentMethod?: Expense["paymentMethod"]
  /**
   * Whether the expense is flagged as reimbursable. Forced to
   * `false` for `paymentMethod === "factorial-card"`.
   */
  reimbursable?: boolean
  /**
   * Explicit owner. When omitted, the SubmitterEditForm falls
   * back to the active viewer (Hellen by default). Carried over
   * from `Expense.ownerEmployeeId` so detail pages can decide
   * whether to push a viewer override on open.
   */
  ownerEmployeeId?: string
  /**
   * Optional alternative title for the detail page header.
   * Mirrors `Expense.headerTitleOverride`; the table cell still
   * shows `name` (= provider).
   */
  headerTitleOverride?: string
}

/**
 * Stable pool of "real" employees used to assign an owner to every
 * expense that doesn't already carry one. We drop the synthetic
 * `emp-current` ("Hellen the HR") sentinel — owners should read as
 * regular colleagues, and Hellen is the implicit viewer elsewhere.
 */
const OWNER_POOL = employees.filter((e) => e.id !== "emp-current")

/**
 * Deterministically pick an owner for an expense from its id. The
 * Approve / Pending payment / Ready to export tables surface the
 * owner in the first column (see `ownerColumns` in columns.ts), so
 * every row needs a stable owner — but most fixture expenses don't
 * set `ownerEmployeeId`. We hash the row id into `OWNER_POOL` so the
 * assignment is consistent across renders (never randomised) while
 * still spreading owners across the directory. Rows that already
 * carry an `ownerEmployeeId` keep theirs.
 */
function resolveOwnerEmployeeId(e: Expense): string {
  if (e.ownerEmployeeId) return e.ownerEmployeeId
  let hash = 0
  for (let i = 0; i < e.id.length; i++) {
    hash = (hash * 31 + e.id.charCodeAt(i)) >>> 0
  }
  return OWNER_POOL[hash % OWNER_POOL.length]!.id
}

export function expenseToRow(e: Expense): SpendingRow {
  // Company-card (Factorial card) expenses with no receipt attached
  // carry a `missing-receipt` compliance alert. We derive this from
  // the shared `hasReceipt` predicate so the table tag, the alerts
  // filter and the detail page all agree on the same answer. Append
  // rather than replace so any seeded alerts are preserved, and guard
  // against duplicates in case the fixture already carries the tag.
  const alerts: ExpenseAlert[] =
    e.paymentMethod === "factorial-card" &&
    !hasReceipt(e.id) &&
    !e.alerts.includes("missing-receipt")
      ? [...e.alerts, "missing-receipt"]
      : e.alerts
  // Meal expenses carry a short "user-written" description so the
  // detail Summary's Description row reads like a real submitter note
  // (and pairs with the attendees seeded on meal-over-limit rows)
  // instead of showing "—". Deterministic per id, and we never
  // clobber a description the fixture already set.
  const controlling: ControllingFields | undefined =
    e.category === "Meals"
      ? {
          ...(e.controlling ?? {}),
          description:
            e.controlling?.description && e.controlling.description.length > 0
              ? e.controlling.description
              : mockDescriptionFor(e.id, "Meals"),
        }
      : e.controlling
  return {
    id: e.id,
    kind: "expense",
    name: e.provider,
    description: e.category,
    // Effective status: a session override (e.g. "Mark as controlled") wins
    // over the fixture's status so the row moves between presets live.
    status: effectiveStatus(e.id, e.status),
    amount: e.amount,
    date: e.createdAt,
    alerts,
    controlling,
    foreignCurrency: e.foreignCurrency,
    participants: e.participants,
    split: e.split ?? null,
    paymentMethod: e.paymentMethod,
    reimbursable: e.reimbursable,
    ownerEmployeeId: resolveOwnerEmployeeId(e),
    headerTitleOverride: e.headerTitleOverride,
  }
}

export function folderToRow(g: ExpenseGroup): SpendingRow {
  return {
    id: g.id,
    kind: "folder",
    name: g.name,
    description: `Folder · ${g.expenseCount} expense${g.expenseCount === 1 ? "" : "s"}`,
    status: g.status,
    amount: g.amount,
    date: g.reportDate,
    expenseCount: g.expenseCount,
    alerts: [],
  }
}

/**
 * Map a chat-created draft (produced by the AI chat receipt-drop
 * flow — see `copilot/useBulkCreateExpensesAction.tsx`) into the
 * unified `SpendingRow` shape so it shows up alongside fixture rows
 * in the Submit > Expenses table.
 *
 * The chat draft carries the editable fields One has filled so far
 * (description, project, cost center, vendor, participants). We fold
 * them into the row's `controlling` block + summary fields so a
 * One-created draft opens on the detail page with a full summary —
 * not a skeleton — and the inline click-to-edit / edit-via-One
 * mutations round-trip back to the store.
 */
export function chatDraftToRow(d: ChatDraftExpense): SpendingRow {
  const controlling: ControllingFields | undefined =
    d.description || d.project || d.costCenter
      ? {
          ...(d.description ? { description: d.description } : {}),
          ...(d.project ? { project: d.project } : {}),
          ...(d.costCenter ? { costCenter: d.costCenter } : {}),
        }
      : undefined
  return {
    id: d.id,
    kind: "expense",
    name: d.vendor ?? d.provider,
    description: d.category,
    status: d.status,
    amount: d.amount,
    date: d.date,
    alerts: d.alerts,
    controlling,
    participants: d.participants,
    // Owner is always the logged-in submitter for One-created drafts.
    ownerEmployeeId: CURRENT_USER_ID,
  }
}

/**
 * Map a chat-created folder (produced when One groups related
 * drafts — see `groupChatDrafts`) into a folder `SpendingRow`. The
 * amount aggregates its member drafts so the folder row shows a real
 * running total, mirroring `folderToRow` for fixture groups.
 */
export function chatFolderToRow(
  f: ChatFolder,
  members: ChatDraftExpense[]
): SpendingRow {
  const inFolder = members.filter((m) => f.memberIds.includes(m.id))
  const amount = inFolder.reduce((sum, m) => sum + m.amount, 0)
  // Newest member date as the folder's report date (falls back to today).
  const date =
    inFolder
      .map((m) => m.date)
      .sort()
      .at(-1) ?? new Date().toISOString().slice(0, 10)
  return {
    id: f.id,
    kind: "folder",
    name: f.name,
    description: `Folder · ${inFolder.length} expense${inFolder.length === 1 ? "" : "s"}`,
    status: f.status,
    amount,
    date,
    expenseCount: inFolder.length,
    alerts: [],
  }
}

/** Filter a row list to a set of allowed statuses. */
export function rowsInStatus(
  rows: SpendingRow[],
  statuses: ExpenseStatus[]
): SpendingRow[] {
  return rows.filter((r) => statuses.includes(r.status))
}
