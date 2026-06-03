import type { PolicyAlertConfig } from "./selectPolicyAlert"

/**
 * "Required fields" gating layer.
 *
 * Sits ABOVE the policy-agent alert pipeline (`selectPolicyAlert`)
 * for submitter rows in the To-Do preset. The rule is simple: if a
 * draft expense is missing fields the company considers mandatory,
 * the submitter cannot Send for approval — full stop, regardless of
 * what the policy agent would otherwise recommend.
 *
 * UX consequences (implemented in `ExpenseDetailPage.tsx` +
 * `SubmitterEditForm.tsx`):
 *
 *   1. The detail page swaps the policy-agent alert for an error
 *      red "Can't send this expense" alert listing the missing
 *      fields. The alert exposes a Review button (eye icon) that
 *      opens the edit form scrolled to the first missing field.
 *   2. The header's `Send for approval` primary action is rendered
 *      with `disabled: true` + a tooltip naming the missing fields.
 *   3. In edit mode, the submitter form marks each missing field
 *      with the standard F0FormField error state (red border +
 *      error message). The header's Save button refuses to exit
 *      edit mode until all required fields validate.
 *   4. After Save, the row is marked filled in this in-memory map
 *      (see `markFieldsFilled`) and the alert reverts to whatever
 *      the policy agent would have recommended (success / review /
 *      likely-rejection / null).
 *
 * Why a separate module rather than extending the row type:
 *   - The row shape lives in `shared/rows.ts` (and ultimately in
 *     `@/fixtures`) and is consumed by every tab + side panel.
 *     Adding a `missingFields` field there would force every list
 *     column / cell to think about it. This module isolates the
 *     concern to the surfaces that actually care (the detail page
 *     + the alert pipeline).
 *   - Prototyping requirement: the user wanted to seed the flow on
 *     a single random row first and expand later. A separate
 *     module makes the seed list a one-line edit.
 *
 * Persistence: the "filled" mutation is in-memory only (a Set
 * scoped to the module). Reload resets it. Per the user's spec —
 * good enough for a demo.
 */

export type RequiredField = "project" | "description"

const REQUIRED_FIELD_LABELS: Record<RequiredField, string> = {
  project: "Project",
  description: "Description",
}

/**
 * Initial seed of rows that start with missing required fields.
 *
 * Seeded by a deterministic predicate over the row id rather than
 * a hardcoded id list — `controlling-step-poc` synthesizes draft
 * ids of the form `draft-exp-NNN` by re-casting the first 13
 * pending fixtures (sorted by alert count ASC). Picking specific
 * suffixes here works regardless of which pending rows happen to
 * land in the draft pool.
 *
 * To expand the seed: widen the predicate (e.g. add another
 * suffix) or hardcode additional ids in `INITIAL_MISSING`.
 */
function initialMissingFor(rowId: string): RequiredField[] {
  // Seed any draft whose id ends in "1" (so `draft-exp-001`,
  // `draft-exp-011`, `draft-exp-021`…) so we always have a handful
  // of gated rows in the To-Do preset rather than just one. Picks a
  // few at a time on purpose so the demo still shows the all-clear /
  // review / likely-rejection alerts on the rest of the preset.
  //
  // Why only `description` (and not `project`): the canonical
  // F0Select listbox triggers an infinite re-render loop in
  // F0AiChat's form-registry when it opens inside this prototype.
  // The loop is unrelated to the gating feature, but until it's
  // fixed in `factorial-agent`/`packages/react` we can't safely
  // surface Project as a required-but-missing field — the user
  // would crash the page the moment they tried to fill it in. Once
  // the listbox loop is fixed, add `"project"` back here.
  if (!rowId.startsWith("draft-")) return []
  if (!rowId.endsWith("1")) return []
  return ["description"]
}

/**
 * A row is "ever-gated" if its initial seed required at least one
 * field. Used by the policy-alert pipeline to know whether the
 * description the submitter just filled in was the answer to a
 * required-fields gate (in which case some warnings — like
 * "add the attendees in the description" — have effectively been
 * addressed and we can promote the alert to green) versus a casual
 * note on a row that was never required-gated.
 */
export function wasEverGated(rowId: string): boolean {
  return initialMissingFor(rowId).length > 0
}

/**
 * Subset of ever-gated rows whose policy alert should turn green
 * once the description has been filled in (i.e. once the gate is
 * cleared). The other half of the ever-gated population stays on
 * the regular policy-agent pipeline so the demo shows BOTH
 * outcomes: "filled description → success" AND "filled description
 * → still review-recommended for other reasons".
 *
 * Deterministic predicate on the row id (no random / global state)
 * so the user can re-open the same row and get the same alert.
 *
 * Picks every other ever-gated row: ids ending in `01`, `21`, `41`,
 * `61`, `81` turn green; ids ending in `11`, `31`, `51`, `71`, `91`
 * stay on the regular pipeline. With the current draft pool of 13
 * rows this typically lands on `draft-exp-001` (green after save)
 * and `draft-exp-011` (still review-recommended), giving us one of
 * each.
 */
export function descriptionResolvesToGreen(rowId: string): boolean {
  if (!wasEverGated(rowId)) return false
  // `rowId` looks like `draft-exp-001`. Read the second-to-last
  // digit: even → green, odd → keep warning.
  const secondToLast = rowId.charAt(rowId.length - 2)
  const n = Number.parseInt(secondToLast, 10)
  if (Number.isNaN(n)) return false
  return n % 2 === 0
}

// Mutable runtime state. Two maps:
//   `filled` — rowIds the user has saved during this session. Wins
//              over `initialMissingFor`.
//   `overrides` — rowIds with explicit overrides (currently unused;
//                 kept as a hook for future "force-mark missing"
//                 flows from a debug panel, etc.).
const filled = new Set<string>()

/**
 * Returns the list of required fields currently missing on a row.
 *
 * Pure-ish: reads from `initialMissingFor` (a stable function of
 * the rowId) and the in-memory `filled` set. Returning a fresh
 * array is intentional — callers iterate it in render and we don't
 * want them holding a reference to a mutable internal value.
 */
export function getMissingRequiredFields(rowId: string): RequiredField[] {
  if (filled.has(rowId)) return []
  return initialMissingFor(rowId)
}

/**
 * Mark a row as having all its required fields filled. Called
 * after a successful Save in edit mode. No-ops if the row has no
 * required-fields entry to begin with.
 */
export function markFieldsFilled(rowId: string): void {
  filled.add(rowId)
}

/**
 * Build the "Can't send this expense" alert config from a missing-
 * fields list. The alert is always `error` red — its purpose is to
 * block the primary action, not to recommend, so a softer variant
 * would mis-signal the user.
 */
export function buildMissingFieldsAlert(
  missing: RequiredField[]
): PolicyAlertConfig {
  const labels = missing.map((f) => REQUIRED_FIELD_LABELS[f])
  const list = humanList(labels)
  return {
    variant: "error",
    stripLabel: "Action required",
    title: "Can't send this expense",
    description: `${list} ${missing.length === 1 ? "is" : "are"} required before you can submit. Click Review to fill ${missing.length === 1 ? "it" : "them"} in.`,
  }
}

/**
 * Humanizes a list of labels. ["Project"] → "Project",
 * ["Project", "Description"] → "Project and Description",
 * ["A", "B", "C"] → "A, B and C". No Oxford comma — matches the
 * rest of the prototype's copy.
 */
function humanList(items: string[]): string {
  if (items.length === 0) return ""
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
}

/**
 * Helper for the header tooltip: short version of the missing list
 * suitable for a button tooltip.
 *
 *   ["project"]                  → "Fill in Project to send"
 *   ["project", "description"]   → "Fill in Project and Description to send"
 */
export function missingFieldsTooltip(missing: RequiredField[]): string {
  const labels = missing.map((f) => REQUIRED_FIELD_LABELS[f])
  return `Fill in ${humanList(labels)} to send`
}

export { REQUIRED_FIELD_LABELS }
