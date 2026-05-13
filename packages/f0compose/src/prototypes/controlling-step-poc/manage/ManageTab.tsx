import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { spendingColumns } from "../shared/columns"
import type { SpendingRow } from "../shared/rows"
import { useManageRows, useManageSource } from "./useManageSource"
import type { ManageSubTabId } from "../tabs"

/**
 * Single Manage tab body. Each of the four sub-tabs reuses this
 * component with a different `variant` so the dataset, filters and
 * actions stay consistent.
 *
 * Click handling:
 *   - Folders → navigate via `folderHref` (handled by the source's
 *     `itemUrl`, which leaves expense rows un-linked).
 *   - Expense rows → call `onExpenseClick(id)`. The parent owns the URL
 *     state (`?expense=<id>`) and chooses which side-panel variant to
 *     render based on the active sub-tab.
 *
 * Bulk actions:
 *   - The source declares the actions; the parent handles them via
 *     `onBulkAction`. This is the path that wires Spec D's
 *     `Mark as controlled` and `Bulk edit` into the side-panel layer.
 */
export function ManageTab(props: {
  variant: ManageSubTabId
  folderHref: (folderId: string) => string
  onExpenseClick: (expenseId: string) => void
  onBulkAction: (actionId: string, selectedIds: string[]) => void
}) {
  const rows = useManageRows()
  const source = useManageSource({
    rows,
    variant: props.variant,
    folderHref: props.folderHref,
  })
  return (
    <OneDataCollection
      source={{
        ...source,
        // Only intercept clicks for expense rows (open the detail
        // page). Folder rows fall through to `itemUrl` so the URL
        // navigates to `?folder=<id>`. Returning `undefined` here is
        // critical: if we return a no-op function, OneTable renders
        // an absolute-positioned <button> over the link and the
        // folder navigation gets swallowed by stopPropagation.
        itemOnClick: ((item: SpendingRow) =>
          item.kind === "expense"
            ? () => props.onExpenseClick(item.id)
            : undefined) as unknown as (item: SpendingRow) => () => void,
      }}
      onBulkAction={(actionId, selected, clearSelection) => {
        const ids = selected.itemsStatus
          .filter((s) => s.checked)
          .map((s) => s.item.id)
        props.onBulkAction(actionId, ids)
        // Bulk-edit opens a side panel and the user may cancel — keep
        // the selection so they can retry without re-checking rows.
        if (actionId !== "bulk-edit") {
          clearSelection()
        }
      }}
      visualizations={[
        { type: "table", options: { columns: [...spendingColumns] } },
      ]}
    />
  )
}
