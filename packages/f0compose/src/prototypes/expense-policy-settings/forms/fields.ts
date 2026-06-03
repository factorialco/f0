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

export type ModalTarget = "subcategories" | "payment-methods" | "rates"

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
 * Form types we have field lists for. Matches `FormSubStepId` from
 * the wizard — kept as a parallel type alias rather than imported
 * because `fields.ts` should stay leaf-level (no cycles with
 * `wizard/`). The runtime guard in `useExpenseFormsSource` enforces
 * the mapping.
 */
export type ExpenseFormType = "regular" | "per-diem" | "mileage"

/**
 * Spec §1 / §2 field list for the **Regular** expense form. The
 * locked rows mirror the top block in the Figma reference
 * (system-required fields).
 *
 * Category is locked (always shown, required) AND `expandable` —
 * clicking the row expands nested category rows inline. Subcategory
 * and Payment method are `editable` AND modal-bound — clicking the
 * row opens the corresponding management modal while the Switch /
 * Required-Optional cells remain interactive.
 */
export const regularFields: FieldRow[] = [
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
  // Order mirrors the form preview (top → bottom) so toggling a
  // field shows the change in the admin's eye-line instead of off-
  // screen. Sequence: Expense info (subcategory) → Payment info
  // (payment-method, reimbursable-amount, reimbursable-currency,
  // exchange-rate) → Tax (tax-type) → Budget/Project (projects;
  // budgets is locked) → Cost centers → Additional info
  // (description, internal-reference).
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
    id: "projects",
    label: "Project",
    kind: "editable",
    visible: true,
    requirement: "required",
    type: "Single choice",
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

/**
 * Field list for the **Mileage** form (spec §"Mileage form").
 *
 * Locked block (always shown):
 *  - Measurement unit, Total distance, Currency, Fixed value per
 *    kilometer, Total to reimburse, Date — all required.
 *  - Budgets — locked but optional.
 *
 * Editable block (shown by default, all optional):
 *  - Subcategory (modal-bound, shares the global Subcategories list
 *    with the Regular form per BR-XX confirmation).
 *  - Origin, Destination, Cost centers, Projects, Description,
 *    Document, Internal reference.
 *
 * No Category row and no Payment method row — Mileage has neither
 * concept in this prototype's data model.
 */
export const mileageFields: FieldRow[] = [
  // ── Locked block — "Always shown" ─────────────────────────────────
  {
    id: "measurement-unit",
    label: "Measurement unit",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
  },
  {
    id: "total-distance",
    label: "Total distance",
    kind: "locked",
    requirement: "required",
    type: "Number",
  },
  {
    id: "currency",
    label: "Currency",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
  },
  {
    id: "fixed-value-per-kilometer",
    label: "Fixed value per kilometer",
    kind: "locked",
    requirement: "required",
    type: "Single choice",
    // Modal-bound: opens the Rates modal scoped to the mileage
    // formType. The row stays locked (admins can't remove the
    // concept of "fixed value per km" from the mileage form) but
    // clicking the row label drills into rate management.
    modalTarget: "rates",
  },
  {
    id: "total-to-reimburse",
    label: "Total to reimburse",
    kind: "locked",
    requirement: "required",
    type: "Number",
  },
  {
    id: "date",
    label: "Date",
    kind: "locked",
    requirement: "required",
    type: "Date",
  },
  {
    id: "budgets",
    label: "Budgets",
    kind: "locked",
    requirement: "optional",
    type: "Single choice",
  },

  // ── Editable block — Show/Hide + Required/Optional ────────────────
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
    id: "origin",
    label: "Origin",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Text",
  },
  {
    id: "destination",
    label: "Destination",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Text",
  },
  {
    id: "cost-centers",
    label: "Cost centers",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Single choice",
  },
  {
    id: "projects",
    label: "Projects",
    kind: "editable",
    visible: true,
    requirement: "optional",
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
    id: "document",
    label: "Document",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "File",
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

/**
 * Field list for the **Per diem** form (spec §"Per diem form").
 *
 * Locked block (always shown):
 *  - Departure date, Return date, Per diem rates — all required.
 *  - Budgets — locked but optional.
 *
 * Editable block (shown by default, all optional):
 *  - Subcategory (modal-bound, shares the global Subcategories
 *    list).
 *  - Origin, Destination, Cost centers, Projects, Description,
 *    Upload the receipt (File), Internal reference.
 *
 * No Category and no Payment method rows. "Per diem rates" is typed
 * as Number per the spec literal — conceptually a lookup, but we
 * stay faithful to the table until that surface is built.
 */
export const perDiemFields: FieldRow[] = [
  // ── Locked block — "Always shown" ─────────────────────────────────
  {
    id: "departure-date",
    label: "Departure date",
    kind: "locked",
    requirement: "required",
    type: "Date",
  },
  {
    id: "return-date",
    label: "Return date",
    kind: "locked",
    requirement: "required",
    type: "Date",
  },
  {
    id: "per-diem-rates",
    label: "Per diem rates",
    kind: "locked",
    requirement: "required",
    // Flipped from "Number" → "Single choice" because the value is
    // now picked from a managed list (the Rates modal) instead of a
    // free-form amount typed inline. Mirrors the mileage form's
    // `fixed-value-per-kilometer` row.
    type: "Single choice",
    modalTarget: "rates",
  },
  {
    id: "budgets",
    label: "Budgets",
    kind: "locked",
    requirement: "optional",
    type: "Single choice",
  },

  // ── Editable block — Show/Hide + Required/Optional ────────────────
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
    id: "origin",
    label: "Origin",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Text",
  },
  {
    id: "destination",
    label: "Destination",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Text",
  },
  {
    id: "cost-centers",
    label: "Cost centers",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "Single choice",
  },
  {
    id: "projects",
    label: "Projects",
    kind: "editable",
    visible: true,
    requirement: "optional",
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
    id: "upload-the-receipt",
    label: "Upload the receipt",
    kind: "editable",
    visible: true,
    requirement: "optional",
    type: "File",
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

/**
 * Lookup table consumed by `useExpenseFormsSource(formType)`. Keys
 * match `FormSubStepId` exactly so the wizard can drive it.
 */
export const fieldsByFormType: Record<ExpenseFormType, FieldRow[]> = {
  regular: regularFields,
  "per-diem": perDiemFields,
  mileage: mileageFields,
}
