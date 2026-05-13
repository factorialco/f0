/**
 * Tab IDs for the unified Spending page (Spec A revision 2).
 *
 * Tab row 1 (primary):
 *   - submit  → personal lifecycle (Expenses · Purchase Requests · Cards)
 *   - manage  → review / approve / pay
 *
 * Tab row 2 inside Submit:
 *   - expenses           → expenses table (Drafts/Submitted presets, folders)
 *   - purchase-requests  → embeds the existing Purchase Requests page
 *   - cards              → embeds the existing Cards page
 *
 * Tab row 2 inside Manage:
 *   - pending-approval     → approve/reject
 *   - pending-controlling  → coding (deferred design)
 *   - pay                  → Send to Pay / SEPA / Sync ERP
 *   - all                  → unified view across the lifecycle
 */
export const PRIMARY_TABS = [
  { id: "submit", label: "My spending" },
  { id: "manage", label: "Approve & Pay" },
] as const

export const SUBMIT_SUB_TABS = [
  { id: "expenses", label: "Expenses" },
  { id: "purchase-requests", label: "Purchase requests" },
  { id: "cards", label: "Cards" },
] as const

export const MANAGE_SUB_TABS = [
  { id: "pending-approval", label: "Approve" },
  { id: "pending-controlling", label: "Control" },
  { id: "pay", label: "Pay" },
  { id: "all", label: "Export" },
] as const

export type PrimaryTabId = (typeof PRIMARY_TABS)[number]["id"]
export type SubmitSubTabId = (typeof SUBMIT_SUB_TABS)[number]["id"]
export type ManageSubTabId = (typeof MANAGE_SUB_TABS)[number]["id"]
