/**
 * Tab IDs for the unified Spending page (Spec A revision 3 — admin
 * IA restructure).
 *
 * Tab row 1 (primary) — 4 top-level surfaces, one per spend
 * instrument. Only the Expenses tab is fully wired in this
 * prototype; the others are placement-only stubs that explain
 * the production page would live here unchanged.
 *
 *   - expenses                 → out-of-pocket / per diem / mileage
 *   - purchase-invoices        → vendor invoices (stub)
 *   - purchase-requests-orders → POs & PRs (stub)
 *   - cards                    → company-card transactions (stub)
 *
 * Tab row 2 inside Expenses — 6 lifecycle stops, ordered left → right
 * the way an expense actually flows through the company:
 *
 *   - submit          → personal lifecycle (To do + Submitted)
 *   - approve         → manager review (was Approve & Pay > Approve)
 *   - control         → finance coding (was Approve & Pay > Control)
 *   - pending-payment → approved + controlled, awaiting payment
 *   - ready-to-export → terminal preset chips view (was Export)
 *   - archive         → all expenses, no filter
 *
 * Default landing for cold links is `expenses > submit`. Sub-tab
 * visibility no longer depends on whether the user has a queue —
 * the IA is symmetric and the same tabs render for every audience.
 * Production gating lives behind a permission flag we don't model
 * here.
 */
export const PRIMARY_TABS = [
  { id: "expenses", label: "Expenses" },
  { id: "purchase-invoices", label: "Purchase invoices" },
  { id: "purchase-requests-orders", label: "Procurement" },
  { id: "cards", label: "Cards" },
] as const

/**
 * Sub-tabs that render under the Expenses primary tab. The order
 * follows the lifecycle (submit → approve → control → pay → export
 * → archive) so a left-to-right scan reads as the expense's
 * journey through the company.
 *
 * Sub-tab IDs use the lifecycle vocabulary directly (`submit`,
 * `approve`, `control`, `pending-payment`, `ready-to-export`,
 * `archive`) instead of the legacy `pending-approval` /
 * `pending-controlling` / `pay` / `all` names. The legacy IDs
 * remain referenced internally as ManageVariant in
 * useManageSource as a compatibility layer.
 */
export const EXPENSES_SUB_TABS = [
  { id: "submit", label: "Submit" },
  { id: "approve", label: "Approve" },
  { id: "control", label: "Control" },
  { id: "pending-payment", label: "Pending payment" },
  { id: "ready-to-export", label: "Ready to export" },
  { id: "archive", label: "Archive" },
] as const

export type PrimaryTabId = (typeof PRIMARY_TABS)[number]["id"]
export type ExpensesSubTabId = (typeof EXPENSES_SUB_TABS)[number]["id"]

/**
 * Legacy alias preserved so the rest of the codebase (variant
 * dispatch in `useManageSource`, copilot context exposure, etc.)
 * can keep its current vocabulary. Structurally identical to
 * `ManageVariant`; re-exported here so consumers don't have to
 * cross-import between `./manage/useManageSource` and `./tabs`.
 */
import type { ManageVariant } from "./manage/useManageSource"
export type ManageSubTabId = ManageVariant

/**
 * Translate a public sub-tab id into the internal manage variant
 * that drives `useManageSource`. Submit is handled separately
 * (the dedicated `SubmitExpensesTab` component), so we only map
 * the 5 manage-flavoured sub-tabs here.
 *
 * `ready-to-export` reuses the legacy `all` variant: the user
 * confirmed this should be a 1:1 lift of the current Export-tab
 * surface (no status filter, full preset chip set per status).
 *
 * `pending-payment` and `archive` are new variants that the
 * source layer handles natively — see useManageSource.
 */
export function subTabToManageVariant(
  sub: ExpensesSubTabId
): ManageVariant | null {
  switch (sub) {
    case "submit":
      return null // submit has its own tab component
    case "approve":
      return "pending-approval"
    case "control":
      return "pending-controlling"
    case "pending-payment":
      return "pending-payment"
    case "ready-to-export":
      return "all" // legacy "Export" tab body, no status filter
    case "archive":
      return "archive"
  }
}
