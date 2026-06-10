/**
 * Left-nav data model.
 *
 * The nav is split into two sections:
 *
 *  - **Core setup**: the three landing surfaces that already have
 *    working views (Expense types, Approval flows, Certified
 *    documents). These are the only ids the rest of the prototype
 *    branches on by name; renaming the section label here does not
 *    affect routing.
 *
 *  - **Policy rules**: five forthcoming surfaces (Meals &
 *    hospitality, Travel, Reimbursements, Receipts & evidence,
 *    Exceptions). They have no real views yet — clicking renders a
 *    "Coming soon" placeholder canvas. Adding the ids ahead of the
 *    views keeps the nav structure stable so we can design the
 *    surfaces one at a time without churning the type union.
 *
 * `NavEntryId` is the union of every id across both sections so the
 * top-level `useState<NavEntryId>` in ExpensePolicySettings.tsx can
 * hold any selected entry. `coreNavIds` / `policyRuleNavIds` are
 * narrow runtime guards used by the renderer to decide which canvas
 * to mount.
 */

export type CoreNavId =
  | "expense-forms"
  | "approval-flows"
  | "certified-documents"

export type PolicyRuleNavId =
  | "policy-meals"
  | "policy-travel"
  | "policy-reimbursements"
  | "policy-receipts"
  | "policy-exceptions"

/**
 * Standalone ids — clickable rail entries that live outside the Core
 * setup and Policy rules sections and have their own dedicated view.
 * Currently just Card controls, which renders an empty state à la
 * Exceptions. Routed by an explicit branch in
 * ExpensePolicySettings.tsx, NOT via `isPolicyRuleNav`.
 */
export type StandaloneNavId = "card-controls"

export type NavEntryId = CoreNavId | PolicyRuleNavId | StandaloneNavId

export type NavEntry = {
  id: NavEntryId
  label: string
  /**
   * When true the entry renders greyed-out and is not clickable — a
   * visual placeholder for a forthcoming surface that has no view yet
   * (e.g. "Card controls"). Disabled entries are skipped by the
   * section predicates and never become the active selection.
   */
  disabled?: boolean
}

export type NavSection = {
  id: "core-setup" | "policy-rules"
  label: string
  entries: NavEntry[]
}

/**
 * Core setup entries — these have real views wired in
 * ExpensePolicySettings.tsx. The id `"expense-forms"` is legacy
 * (predates the "Expense types" rename); ids stay stable so URL
 * params and existing logic keep working.
 */
export const coreNavSection: NavSection = {
  id: "core-setup",
  label: "Core setup",
  entries: [
    { id: "expense-forms", label: "Expense types" },
    { id: "approval-flows", label: "Approval flows" },
    { id: "certified-documents", label: "Certified documents" },
  ],
}

/**
 * Policy rules entries — placeholders. No view exists yet; the
 * renderer mounts a `PolicyRulePlaceholder` canvas for any of these
 * ids. We'll design each surface in subsequent passes.
 */
export const policyRulesSection: NavSection = {
  id: "policy-rules",
  label: "Policy rules",
  entries: [
    { id: "policy-meals", label: "Meals & hospitality" },
    { id: "policy-travel", label: "Travel" },
    { id: "policy-reimbursements", label: "Reimbursements" },
    { id: "policy-receipts", label: "Receipts & evidence" },
    { id: "policy-exceptions", label: "Exceptions" },
  ],
}

/**
 * Standalone entries — clickable, but not part of the Core setup or
 * Policy rules sections, so they're invisible to `isPolicyRuleNav`.
 * The canvas renderer routes them with an explicit branch (Card
 * controls → CardControlsView, an empty state). They only surface in
 * the flat `navEntriesInOrder` list the rail iterates.
 */
export const standaloneNavEntries: NavEntry[] = [
  { id: "card-controls", label: "Card controls" },
]

/**
 * The order in which sections render in the left nav. A divider is
 * drawn between consecutive sections by the renderer.
 */
export const navSections: NavSection[] = [coreNavSection, policyRulesSection]

/**
 * The flat presentation order of the rail (the only order the user
 * sees — section labels aren't rendered). This follows the *lifecycle
 * of building a policy* rather than the legacy settings-vs-rules
 * boundary:
 *
 *   1. Expense types        — what can be expensed (the foundation)
 *   2–5. Meals → Travel →
 *        Reimbursements →
 *        Receipts           — the spending rules & limits
 *   6. Approval flows       — who signs off (references the categories
 *                             & amounts defined above, so it reads
 *                             better here than second)
 *   7. Certified documents  — compliance/legal layer
 *   8. Exceptions           — overrides / edge cases, last
 *
 * Section membership (coreNavSection / policyRulesSection) is left
 * untouched so `isPolicyRuleNav` and other predicates keep working;
 * this array only governs visual order. Entries are looked up from the
 * sections so labels never drift.
 */
const NAV_ORDER: NavEntryId[] = [
  "expense-forms",
  "policy-meals",
  "policy-travel",
  "policy-reimbursements",
  "card-controls",
  "policy-receipts",
  "approval-flows",
  "certified-documents",
  "policy-exceptions",
]

const ALL_ENTRIES: NavEntry[] = [
  ...coreNavSection.entries,
  ...policyRulesSection.entries,
  ...standaloneNavEntries,
]

export const navEntriesInOrder: NavEntry[] = NAV_ORDER.map(
  (id) => ALL_ENTRIES.find((e) => e.id === id)!
)

/**
 * Runtime predicates — narrow a NavEntryId down to a section so the
 * canvas renderer can pick the right surface (core view vs the
 * shared placeholder). Centralised here so the lists in
 * navConfig.ts are the single source of truth.
 */
const POLICY_RULE_IDS: ReadonlySet<NavEntryId> = new Set(
  policyRulesSection.entries.map((e) => e.id)
)

export function isPolicyRuleNav(id: NavEntryId): id is PolicyRuleNavId {
  return POLICY_RULE_IDS.has(id)
}

/**
 * Legacy export — preserved so callers that imported the flat list
 * before sections existed don't break. New code should iterate
 * `navSections` instead.
 */
export const coreNavEntries: NavEntry[] = coreNavSection.entries
