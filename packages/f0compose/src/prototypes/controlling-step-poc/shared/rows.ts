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
import type { ChatDraftExpense } from "../copilot/chatDraftsStore"

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

export function expenseToRow(e: Expense): SpendingRow {
  return {
    id: e.id,
    kind: "expense",
    name: e.provider,
    description: e.category,
    status: e.status,
    amount: e.amount,
    date: e.createdAt,
    alerts: e.alerts,
    controlling: e.controlling,
    foreignCurrency: e.foreignCurrency,
    participants: e.participants,
    split: e.split ?? null,
    paymentMethod: e.paymentMethod,
    reimbursable: e.reimbursable,
    ownerEmployeeId: e.ownerEmployeeId,
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
 * The chat draft already carries every field the table needs; this
 * is a thin shape-adapter rather than a "fetch by id" lookup.
 */
export function chatDraftToRow(d: ChatDraftExpense): SpendingRow {
  return {
    id: d.id,
    kind: "expense",
    name: d.provider,
    description: d.category,
    status: d.status,
    amount: d.amount,
    date: d.date,
    alerts: d.alerts,
  }
}

/** Filter a row list to a set of allowed statuses. */
export function rowsInStatus(
  rows: SpendingRow[],
  statuses: ExpenseStatus[]
): SpendingRow[] {
  return rows.filter((r) => statuses.includes(r.status))
}
