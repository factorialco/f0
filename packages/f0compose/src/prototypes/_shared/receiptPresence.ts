/**
 * Deterministic "does this row have a receipt attached?" predicate.
 *
 * Lives in `_shared` so the detail page (which renders the receipt
 * panel or the empty state) and `selectPolicyAlert` (which steers
 * "no receipt" copy onto rows that actually have no receipt) agree
 * on the same answer for every row id. Drift between the two would
 * surface as e.g. a "No receipt attached" alert on a row whose
 * receipt panel proudly displays a thumbnail.
 *
 * Rule: ~20% of rows have no receipt. We use a tiny char-sum hash
 * on the row id with a `% 5 === 0` test — same seed model the rest
 * of the prototype uses for stable sprinkling.
 */
export function hasReceipt(rowId: string): boolean {
  const seed = Array.from(rowId).reduce((s, c) => s + c.charCodeAt(0), 0)
  return seed % 5 !== 0
}
