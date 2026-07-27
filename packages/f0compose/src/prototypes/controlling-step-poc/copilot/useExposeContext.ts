import { useMemo } from "react"

import { useCopilotReadable } from "@/copilot"

import type { SpendingRow } from "../shared/rows"

/**
 * Expose the prototype's current state to the agent so it can make
 * informed decisions about which tool to call.
 *
 * What we surface:
 *   - The active primary tab + sub-tab (so the agent knows whether
 *     the user is in submitter or manager mode).
 *   - A trimmed list of the rows the user is looking at (id, status,
 *     amount, merchant). NOT the full row — `description`, `alerts`
 *     and analytics-only fields are intentionally omitted to keep
 *     the context window small.
 *
 * The agent already knows the "expense skill" semantics from its
 * system prompt (it has prepareExpensesFromReceipts, bulkCreate,
 * sendToReview, …). What it doesn't know is *which rows exist in
 * this UI right now* — that's the gap this readable fills.
 */
type Args = {
  primaryTab: string
  subTab: string
  rows: SpendingRow[]
}

export function useExposeContext({ primaryTab, subTab, rows }: Args): void {
  const trimmed = useMemo(
    () =>
      rows.slice(0, 25).map((r) => ({
        id: r.id,
        kind: r.kind,
        merchant: r.name,
        status: r.status,
        amount: r.amount,
        date: r.date,
      })),
    [rows]
  )

  useCopilotReadable({
    description:
      "Current screen the user is looking at in the Spending prototype, plus the top rows they can see in the table.",
    value: {
      activeTab: `${primaryTab} > ${subTab}`,
      visibleRows: trimmed,
    },
  })
}
