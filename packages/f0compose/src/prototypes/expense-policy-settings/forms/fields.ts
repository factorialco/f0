/**
 * Field list for the Expense Forms table.
 *
 * Spec §1 (Type column) and the iterated §2 (inline expansion +
 * modal management) define the canonical shape: every field has a
 * `type` (data type label, not configurable). Three fields —
 * Category, Subcategory, Payment method — get special click
 * behaviour, but the navigation model changed from drill-in views
 * (slice 1 initial) to inline + modal in this iteration:
 *
 *  - Category row → `expandable: true`. Clicking the row expands
 *    nested rows directly under it (one per category) with only the
 *    Show/Hide toggle column populated. Categories themselves are
 *    not renameable/deletable/addable — admins simply toggle which
 *    ones appear in the expense form. The "Type" / "If shown"
 *    columns stay blank on nested rows.
 *  - Subcategory row → `modalTarget: "subcategories"`. Clicking
 *    opens the global Subcategories management modal (editable
 *    table, flat list with a Category column).
 *  - Payment method row → `modalTarget: "payment-methods"`. Same
 *    behaviour with the Payment methods modal.
 *
 * Row kinds:
 *
 * - `locked`: shown unconditionally. Admin cannot toggle visibility
 *   nor change requirement. Renders "🔒 Always shown" in the
 *   Show/Hide column and a static "Required" / "Optional" label in
 *   the "If shown" column (plain text — confirmed with PM).
 *
 * - `editable`: admin controls both `visible` (F0 Switch) and
 *   `requirement` (Required/Optional pill toggle). When `visible` is
 *   false, the "If shown" column is empty.
 *
 * `hasSettings: true` marks Reimbursable amount, which exposes an
 * inline settings cog next to the Switch.
 */

export type FieldRequirement = "required" | "optional"

export type FieldType =
  | "Number"
  | "Date"
  | "Single choice"
  | "Long text"
  | "Text"
  | "File"

export type ModalTarget = "subcategories" | "payment-methods"

type CommonFieldRow = {
  id: string
  label: string
  type: FieldType
  /**
   * Categories row only. When true, clicking the row toggles
   * inline expansion of nested category rows beneath it. Mutually
   * exclusive with `modalTarget` (a row cannot be both expandable
   * and modal-bound).
   */
  expandable?: boolean
  /**
   * Subcategory + Payment method rows. Clicking the row opens the
   * corresponding management modal. Mutually exclusive with
   * `expandable`.
   */
  modalTarget?: ModalTarget
}

export type LockedFieldRow = CommonFieldRow & {
  kind: "locked"
  requirement: FieldRequirement
}

export type EditableFieldRow = CommonFieldRow & {
  kind: "editable"
  visible: boolean
  requirement: FieldRequirement
  hasSettings?: boolean
}

export type FieldRow = LockedFieldRow | EditableFieldRow

/**
 * Spec §1 / §2 field list. The locked rows mirror the top block in
 * the Figma reference (system-required fields).
 *
 * Category is locked (always shown, required) AND `expandable` —
 * clicking the row expands nested category rows inline. Subcategory
 * and Payment method are `editable` AND modal-bound — clicking the
 * row opens the corresponding management modal while the Switch /
 * Required-Optional cells remain interactive.
 */
export const initialFields: FieldRow[] = [
  // ── Locked block — "Always shown" ─────────────────────────────────
  {
    id: "document-currency",
    label: "Document currency",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
  },
  {
    id: "document-total-amount",
    label: "Document total amount",
    kind: "locked",
    requirement: "required",
    type: "Number",
  },
  {
    id: "document-date",
    label: "Document date",
    kind: "locked",
    requirement: "required",
    type: "Date",
  },
  {
    id: "document-type",
    label: "Document type",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
  },
  {
    id: "payment",
    label: "Payment",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
  },
  {
    id: "budgets",
    label: "Budgets",
    kind: "locked",
    requirement: "optional",
    type: "Single choice",
  },
  {
    id: "documents",
    label: "Documents",
    kind: "locked",
    requirement: "optional",
    type: "File",
  },
  {
    id: "category",
    label: "Category",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
    expandable: true,
  },

  // ── Editable block — Show/Hide + Required/Optional ────────────────
  // Subcategory + Payment method open a modal on row click; their
  // Switch / Required-Optional toggles stop propagation so the
  // controls still work without opening the modal.
  {
    id: "subcategory",
    label: "Subcategory",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Single choice",
    modalTarget: "subcategories",
  },
  {
    id: "payment-method",
    label: "Payment method",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Single choice",
    modalTarget: "payment-methods",
  },
  {
    id: "reimbursable-amount",
    label: "Reimbursable amount",
    kind: "editable",
    visible: true,
    requirement: "required",
    hasSettings: true,
    type: "Number",
  },
  {
    id: "reimbursable-currency",
    label: "Reimbursable currency",
    kind: "editable",
    visible: false,
    requirement: "optional",
    type: "Single choice",
  },
  {
    id: "exchange-rate",
    label: "Exchange rate",
    kind: "editable",
    visible: false,
    requirement: "optional",
    type: "Number",
  },
  {
    id: "tax-type",
    label: "Tax type",
    kind: "editable",
    visible: false,
    requirement: "optional",
    type: "Number",
  },
  {
    id: "cost-centers",
    label: "Cost center",
    kind: "editable",
    visible: false,
    requirement: "optional",
    type: "Single choice",
  },
  {
    id: "projects",
    label: "Project",
    kind: "editable",
    visible: true,
    requirement: "required",
    type: "Single choice",
  },
  {
    id: "description",
    label: "Description",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Long text",
  },
  {
    id: "internal-reference",
    label: "Internal reference",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Text",
  },
]
