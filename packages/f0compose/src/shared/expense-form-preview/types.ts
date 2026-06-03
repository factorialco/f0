/**
 * Section-level admin state for the Expense Form Preview.
 *
 * Three states, mapping to what the submitter actually sees:
 *  - `required`: section expanded, fields rendered, required asterisks
 *    on required fields. Submitter must fill in to submit.
 *  - `optional`: section collapsed with a `v Show` (Expand) chevron;
 *    submitter can expand and fill in but can submit without.
 *  - `hidden`: section omitted entirely; submitter never sees it.
 *
 * The submitter form (`SubmitterEditForm`) is rendered intact in the
 * preview; the admin chrome lives in an overlay column anchored to
 * each section's DOM element via the F0Form anchor convention
 * (`forms.<formName>.<sectionId>`). Hidden/Optional behaviour is
 * applied via CSS targeting those same anchors \u2014 no fork of the
 * submitter form is needed.
 */

export type SectionId =
  | "expense"
  | "document"
  | "attendees"
  | "payment"
  | "tax"
  | "budget"
  | "costCenters"
  | "additional"
  | "files"

export type SectionState = "required" | "optional" | "hidden"

export type SectionAdminState = Record<SectionId, SectionState>

/**
 * Section ids the admin can control, in render order. Mirrors the
 * `sections` declaration order in `SubmitterEditForm`. Attendees is
 * included even though it only renders for participant-bearing
 * categories \u2014 when the preview's stub row is Meals, all six show.
 */
export const SECTION_IDS: readonly SectionId[] = [
  "expense",
  "document",
  "attendees",
  "payment",
  "tax",
  "budget",
  "costCenters",
  "additional",
  "files",
] as const

export const SECTION_LABELS: Record<SectionId, string> = {
  expense: "Expense information",
  document: "Document information",
  attendees: "Attendees",
  payment: "Payment",
  tax: "Tax type",
  budget: "Budget and project",
  costCenters: "Cost centers",
  additional: "Additional information",
  files: "Files",
}

/**
 * Field-level "Always shown" (locked) rules from the legacy field
 * table. A locked field:
 *
 *  - Cannot be hidden by the admin (it is rendered regardless of the
 *    section's state).
 *  - Has a frozen requirement (Required or Optional per the legacy
 *    table) that ignores the section's Required/Optional flip.
 *  - Displays a small \ud83d\udd12 indicator next to its label so the admin
 *    sees at a glance which fields are immutable.
 *
 * Sections that contain ANY locked field cannot themselves be set
 * to Hidden \u2014 the segmented control will hide the Hidden option.
 * Sections that contain ONLY locked fields (Expense, Files) lose
 * the segmented control entirely and render a single "\ud83d\udd12 Always
 * shown" badge instead, with the section state frozen at the
 * locked field's requirement.
 *
 * Keys are `<sectionId>.<fieldName>` to scope per section since
 * `category`, `payment`, etc. could collide otherwise.
 */
export type FieldRequirement = "required" | "optional"

export const FIELD_LOCKS: Record<string, FieldRequirement> = {
  // Expense info
  "expense.documentType": "required",
  "expense.category": "required",
  // Document info
  "document.documentDate": "required",
  "document.receiptAmount": "required",
  "document.documentCurrency": "required",
  // Payment
  "payment.payment": "required",
  // Budget and project
  "budget.budgets": "optional",
  // Files
  "files.attachments": "optional",
}

/**
 * Helper: is this specific field locked?
 */
export function isFieldLocked(
  sectionId: SectionId,
  fieldName: string
): FieldRequirement | undefined {
  return FIELD_LOCKS[`${sectionId}.${fieldName}`]
}

/**
 * Helper: classify a section by its lock composition.
 *
 *  - `"full"`: every field in the section is locked. Render the
 *    "\ud83d\udd12 Always shown" badge instead of the segmented control. Pin
 *    the section state to the locked field's requirement.
 *  - `"partial"`: some but not all fields are locked. Keep the
 *    segmented control, but remove the Hidden option (since locked
 *    fields cannot be hidden).
 *  - `"none"`: no locked fields. Full segmented control.
 *
 * The caller passes the list of field names that exist in the
 * section schema so this helper stays declarative.
 */
export function classifySectionLock(
  sectionId: SectionId,
  fieldNames: readonly string[]
): { kind: "full" | "partial" | "none"; frozenState?: SectionState } {
  if (fieldNames.length === 0) return { kind: "none" }
  const locked = fieldNames.map((f) => isFieldLocked(sectionId, f))
  const lockedCount = locked.filter(Boolean).length
  if (lockedCount === 0) return { kind: "none" }
  if (lockedCount === fieldNames.length) {
    // Fully locked. The frozen section state mirrors the locked
    // field's requirement \u2014 Required if any locked field is
    // required, otherwise Optional. (All-locked-and-mixed is not a
    // shape that exists in the current legacy table, but we degrade
    // safely toward Required in that hypothetical.)
    const anyRequired = locked.some((r) => r === "required")
    return {
      kind: "full",
      frozenState: anyRequired ? "required" : "optional",
    }
  }
  return { kind: "partial" }
}

/**
 * Defaults: everything Required (matches current submitter behaviour
 * exactly). The admin can downgrade individual sections from there.
 *
 * NOTE: this is the safe baseline. We will compute a more sensible
 * "expense best practices" default in a follow-up pass once the
 * field set is locked.
 */
export const DEFAULT_SECTION_STATE: SectionAdminState = {
  expense: "required",
  document: "required",
  attendees: "required",
  payment: "required",
  tax: "required",
  budget: "required",
  costCenters: "required",
  additional: "required",
  files: "optional",
}
