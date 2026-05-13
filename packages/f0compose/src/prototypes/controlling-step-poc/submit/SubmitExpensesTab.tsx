import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { spendingColumns } from "../shared/columns"
import type { SpendingRow } from "../shared/rows"
import {
  useSubmitExpensesRows,
  useSubmitExpensesSource,
} from "./useSubmitExpensesSource"

/**
 * Submit > Expenses tab — single view for the user's whole personal
 * expense lifecycle. Drafts / Submitted / Pending / Approved / Paid
 * live as presets above the table.
 *
 * Click handling mirrors Manage:
 *   - Folder rows navigate via `folderHref` (handled by the source's
 *     `itemUrl`).
 *   - Expense rows call `onExpenseClick(id)` so the parent can set
 *     `?expense=<id>` and render the full-page detail view. Without
 *     this wiring expense rows in Submit looked clickable (cursor
 *     change from `selectable`) but did nothing — the cause of the
 *     "I can't click on expenses in Submit" report.
 */
export function SubmitExpensesTab(props: {
  folderHref: (folderId: string) => string
  onExpenseClick: (expenseId: string) => void
}) {
  const rows = useSubmitExpensesRows()
  const source = useSubmitExpensesSource({
    rows,
    onNewExpense: () => {},
    onNewMileage: () => {},
    onNewPerDiem: () => {},
    onNewFolder: () => {},
    folderHref: props.folderHref,
  })
  return (
    <OneDataCollection
      source={{
        ...source,
        // Expense rows open the detail page; folder rows fall through
        // to `itemUrl` (returning `undefined` here is critical, see
        // ManageTab for context — a no-op handler blocks navigation).
        itemOnClick: ((item: SpendingRow) =>
          item.kind === "expense"
            ? () => props.onExpenseClick(item.id)
            : undefined) as unknown as (item: SpendingRow) => () => void,
      }}
      visualizations={[
        {
          type: "table",
          options: { columns: [...spendingColumns] },
        },
      ]}
    />
  )
}
