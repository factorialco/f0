import type {
  ControllingFields,
  Expense,
  ExpenseAlert,
  ExpenseGroup,
  ExpenseStatus,
} from "@/fixtures"

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

/** Filter a row list to a set of allowed statuses. */
export function rowsInStatus(
  rows: SpendingRow[],
  statuses: ExpenseStatus[]
): SpendingRow[] {
  return rows.filter((r) => statuses.includes(r.status))
}
