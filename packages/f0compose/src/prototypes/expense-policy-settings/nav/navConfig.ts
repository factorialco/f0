export type NavEntryId =
  | "expense-forms"
  | "rates"
  | "approval-flows"
  | "certified-documents"

export type NavEntry = {
  id: NavEntryId
  label: string
}

/**
 * Left navigation pane entries. Per the user's direction, only one
 * group is shown (`Core sections`) — the spec's optional second group
 * (`Recommended actions`) is omitted.
 */
export const coreNavEntries: NavEntry[] = [
  { id: "expense-forms", label: "Expense forms" },
  { id: "rates", label: "Rates" },
  { id: "approval-flows", label: "Approval flows" },
  { id: "certified-documents", label: "Certified documents" },
]
