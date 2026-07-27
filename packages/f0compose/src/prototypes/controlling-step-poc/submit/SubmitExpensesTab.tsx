import { F0Box } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { useChatRuntime } from "@/chat"

import { submitColumns } from "../shared/columns"
import {
  NEW_FOLDER_PROMPT,
  NEW_MILEAGE_PROMPT,
  NEW_PER_DIEM_PROMPT,
  NEW_REGULAR_EXPENSE_PROMPT,
} from "../copilot/oneEntryPoints"
import { useOnePromo } from "../copilot/useOnePromo"
import type { SpendingRow } from "../shared/rows"
import { SubmitWithOnePromo } from "./SubmitWithOnePromo"
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
 *     `?expense=<id>` and render the full-page detail view.
 *
 * Creating expenses is One-centric: there are no entry forms. Receipts
 * are dropped straight into the One chat (the composer's attach), or you
 * pick an entry from the New-expense dropdown — every option posts a
 * kickoff to One. Dropping 1 receipt or 10 is the same gesture, so there
 * is a single receipt flow (not a per-count path): "Skip the form" and
 * "Regular expense" both route to the receipt → drafts flow; Mileage /
 * Per diem / Folder route to their type-specific One flows.
 */
export function SubmitExpensesTab(props: {
  folderHref: (folderId: string) => string
  onExpenseClick: (expenseId: string) => void
}) {
  const rows = useSubmitExpensesRows()
  // Drive the already-mounted Factorial One panel imperatively: each
  // entry posts a kickoff message the simulated runtime routes to the
  // matching action.
  const { sendMessage } = useChatRuntime()
  // Orchestrated visibility (see useOnePromo / ONE_PROMO_TIMING.md):
  // the banner shows during discovery and retires on dismiss or first
  // One use.
  const { showBanner, dismissBanner } = useOnePromo()
  const kickoff = (prompt: string) => {
    sendMessage(prompt)
    dismissBanner()
  }
  // "Skip the form" (dropdown + promo CTA) and "Regular expense" are the
  // same receipt → drafts flow — One drafts whatever receipts you drop.
  const submitWithOne = () => kickoff(NEW_REGULAR_EXPENSE_PROMPT)
  const source = useSubmitExpensesSource({
    rows,
    onNewExpense: () => kickoff(NEW_REGULAR_EXPENSE_PROMPT),
    onNewMileage: () => kickoff(NEW_MILEAGE_PROMPT),
    onNewPerDiem: () => kickoff(NEW_PER_DIEM_PROMPT),
    onNewFolder: () => kickoff(NEW_FOLDER_PROMPT),
    onSubmitWithOne: submitWithOne,
    folderHref: props.folderHref,
  })
  return (
    <F0Box display="flex" flexDirection="column">
      {showBanner && (
        // Center the banner in the tabs→table gap. The layout already
        // adds ~16px above, so a small top margin + a larger bottom
        // margin makes the effective top/bottom roughly equal (~24px).
        <div style={{ marginTop: 8, marginBottom: 24 }}>
          <SubmitWithOnePromo
            onSubmitWithOne={submitWithOne}
            onDismiss={dismissBanner}
          />
        </div>
      )}
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
            options: { columns: [...submitColumns] },
          },
        ]}
      />
    </F0Box>
  )
}
