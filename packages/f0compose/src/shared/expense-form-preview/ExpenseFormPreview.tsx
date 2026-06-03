import {
  F0Button,
  F0Form,
  F0Select,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { Add } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { z } from "zod"

import type {
  ExpenseFormType,
  FieldRow,
} from "@/prototypes/expense-policy-settings/forms/fields"

/**
 * Clean submitter-style preview of an Expense form.
 *
 * Renders exactly what an employee sees when filling in the form
 * \u2014 no admin chrome, no section-state controls, no lock icons, no
 * dimming. Driven entirely by the live `FieldRow[]` list from the
 * forms source, so any toggle the admin made in the Configure pane
 * is reflected immediately.
 *
 * Composition: per-section standalone F0Form rendered below a plain
 * section title + description. Required vs Optional is determined
 * by the `FieldRow.requirement` value on visible editable rows, and
 * by the locked row's stored requirement for locked fields. Hidden
 * editable rows are omitted entirely \u2014 if every field in a section
 * is hidden, the section header is omitted too.
 *
 * Three form variants are supported (regular, per-diem, mileage),
 * each with its own section layout. Per-form layout maps the
 * canonical `FieldRow.id` values to a section + row hint so the
 * resulting F0Form mirrors the real submitter form.
 */

/* ────────────────────────────────────────────────────────────────────
 * Section layout per form type
 * ──────────────────────────────────────────────────────────────────── */

type SectionLayout = {
  id: string
  label: string
  description: string
  // Field ids (from `fields.ts`) that belong to this section, in
  // their on-form order. Fields missing from the row list are
  // skipped silently \u2014 lets the same layout serve all three forms
  // where a given field may or may not be present.
  fieldIds: readonly string[]
  // Optional addRowLabel \u2014 if set, an outline `+ <label>` button is
  // rendered below the section. Used for the Tax and Cost centers
  // sections in the Regular form.
  addRowLabel?: string
}

const REGULAR_LAYOUT: SectionLayout[] = [
  {
    id: "expense",
    label: "Expense information",
    description:
      "Add the basic info of your expense for accurate processing.",
    fieldIds: ["document-type", "category", "subcategory"],
  },
  {
    id: "document",
    label: "Document information",
    description: "Obtain this information from your attached document.",
    fieldIds: [
      "document-date",
      "document-total-amount",
      "document-currency",
      "document-number",
      "vendor-name",
      "vendor-tin",
    ],
  },
  {
    id: "payment",
    label: "Payment information",
    description: "Provide information on how and how much you paid.",
    fieldIds: [
      "payment",
      "payment-method",
      "reimbursable-amount",
      "reimbursable-currency",
      "exchange-rate",
    ],
  },
  {
    id: "tax",
    label: "Tax type",
    description: "Add the applicable taxes for this expense.",
    fieldIds: ["tax-type"],
    addRowLabel: "Add tax",
  },
  {
    id: "budget",
    label: "Budget and project",
    description: "Add internal company details to ensure correct processing.",
    fieldIds: ["budgets", "projects"],
  },
  {
    id: "cost-centers",
    label: "Cost centers",
    description: "Select the cost centers for this expense.",
    fieldIds: ["cost-centers"],
    addRowLabel: "Add cost center",
  },
  {
    id: "additional",
    label: "Additional information",
    description: "Add any additional details to help with processing.",
    fieldIds: ["description", "internal-reference"],
  },
  {
    id: "files",
    label: "Files",
    description: "Drag and drop here or click to browse.",
    fieldIds: ["documents"],
  },
]

const PER_DIEM_LAYOUT: SectionLayout[] = [
  {
    id: "dates",
    label: "Dates",
    description: "Set the start and end of the per diem.",
    fieldIds: ["departure-date", "return-date"],
  },
  {
    id: "rate",
    label: "Rate",
    description: "Select the applicable per diem rate.",
    fieldIds: ["per-diem-rates"],
  },
  {
    id: "trip",
    label: "Trip details",
    description: "Where the trip went.",
    fieldIds: ["origin", "destination", "subcategory"],
  },
  {
    id: "budget",
    label: "Budget and project",
    description: "Add internal company details.",
    fieldIds: ["budgets", "cost-centers", "projects"],
  },
  {
    id: "additional",
    label: "Additional information",
    description: "Add any additional details to help with processing.",
    fieldIds: ["description", "internal-reference"],
  },
  {
    id: "files",
    label: "Receipts",
    description: "Drag and drop here or click to browse.",
    fieldIds: ["upload-the-receipt"],
  },
]

const MILEAGE_LAYOUT: SectionLayout[] = [
  {
    id: "trip",
    label: "Trip details",
    description: "Where and how far.",
    fieldIds: [
      "origin",
      "destination",
      "measurement-unit",
      "total-distance",
      "date",
      "subcategory",
    ],
  },
  {
    id: "rate",
    label: "Rate",
    description: "Cost per kilometer used to compute reimbursement.",
    fieldIds: ["fixed-value-per-kilometer", "currency", "total-to-reimburse"],
  },
  {
    id: "budget",
    label: "Budget and project",
    description: "Add internal company details.",
    fieldIds: ["budgets", "cost-centers", "projects"],
  },
  {
    id: "additional",
    label: "Additional information",
    description: "Add any additional details to help with processing.",
    fieldIds: ["description", "internal-reference"],
  },
  {
    id: "files",
    label: "Files",
    description: "Drag and drop here or click to browse.",
    fieldIds: ["document"],
  },
]

const LAYOUT_BY_FORM: Record<ExpenseFormType, SectionLayout[]> = {
  regular: REGULAR_LAYOUT,
  "per-diem": PER_DIEM_LAYOUT,
  mileage: MILEAGE_LAYOUT,
}

/* ────────────────────────────────────────────────────────────────────
 * Field builders \u2014 keyed by FieldRow.id
 *
 * Each builder takes `(label, optional, rowHint?)` and returns the
 * f0FormField config. `rowHint` groups two fields onto one line via
 * F0Form's `row` mechanism (e.g. amount + currency).
 * ──────────────────────────────────────────────────────────────────── */

const CURRENCIES = ["EUR", "USD", "GBP"] as const
const DOCUMENT_TYPES = ["Receipt", "Invoice", "Other"] as const
const PAYMENT_KINDS = [
  { value: "reimbursable", label: "Reimbursable" },
  { value: "non-reimbursable", label: "Non-reimbursable" },
] as const
const PAYMENT_METHODS = [
  { value: "personal-debit", label: "Personal debit card" },
  { value: "personal-credit", label: "Personal credit card" },
  { value: "company-card", label: "Company card" },
  { value: "cash", label: "Cash" },
  { value: "bank-transfer", label: "Bank transfer" },
] as const
const ALL_CATEGORIES = [
  "Refreshments",
  "Meals",
  "Taxis",
  "Travel",
  "Shopping",
  "Hotel",
  "Office",
  "Software",
] as const
const SUBCATEGORIES = ["General", "Other"] as const
const BUDGETS = [
  { value: "marketing-q1", label: "Marketing \u2014 Q1" },
  { value: "engineering-q1", label: "Engineering \u2014 Q1" },
  { value: "sales-travel", label: "Sales travel" },
] as const
const PROJECTS = [
  { value: "p-platform", label: "Platform" },
  { value: "p-onboarding", label: "Onboarding revamp" },
  { value: "p-growth", label: "Growth experiments" },
] as const
const COST_CENTERS_OPTS = [
  { value: "cc-eng", label: "Engineering" },
  { value: "cc-sales", label: "Sales" },
  { value: "cc-marketing", label: "Marketing" },
] as const
const TAX_TYPES = [
  { value: "vat-standard", label: "VAT \u2014 Standard" },
  { value: "vat-reduced", label: "VAT \u2014 Reduced" },
  { value: "exempt", label: "Exempt" },
] as const
const MEASUREMENT_UNITS = [
  { value: "km", label: "Kilometers" },
  { value: "mi", label: "Miles" },
] as const
const PER_DIEM_RATES = [
  { value: "domestic", label: "Domestic" },
  { value: "international", label: "International" },
] as const
const MILEAGE_RATES = [
  { value: "standard", label: "Standard" },
  { value: "premium", label: "Premium" },
] as const

type RowHint = string | undefined
type SelectOption = { value: string; label: string }
type Build = (
  label: string,
  opt: boolean,
  row?: RowHint,
  options?: readonly SelectOption[]
) => unknown

const opt = (o: boolean) => (o ? { optional: true as const } : {})

const BUILDERS: Record<string, Build> = {
  // ── Regular ──
  "document-type": (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select document type",
      options: DOCUMENT_TYPES.map((t) => ({ value: t, label: t })),
      ...opt(o),
    }),
  category: (label, o, _row, options) =>
    f0FormField.select({
      label,
      placeholder: "Select category",
      options: options ?? ALL_CATEGORIES.map((c) => ({ value: c, label: c })),
      ...opt(o),
    }),
  subcategory: (label, o, _row, options) =>
    f0FormField.select({
      label,
      placeholder: "Select subcategory",
      options: options ?? SUBCATEGORIES.map((c) => ({ value: c, label: c })),
      ...opt(o),
    }),
  "document-date": (label, o) =>
    f0FormField.date({ label, ...opt(o) }),
  "document-total-amount": (label, o, row) =>
    f0FormField.number({
      label,
      placeholder: "0",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "document-currency": (label, o, row) =>
    f0FormField.select({
      label,
      placeholder: "Currency",
      options: CURRENCIES.map((c) => ({ value: c, label: c })),
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "document-number": (label, o) =>
    f0FormField.text({ label, placeholder: "T001/121878", ...opt(o) }),
  "vendor-name": (label, o, row) =>
    f0FormField.text({
      label,
      placeholder: "As it is on the document",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "vendor-tin": (label, o, row) =>
    f0FormField.text({
      label,
      placeholder: "Tax identification number",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  payment: (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select option",
      options: PAYMENT_KINDS.map((p) => ({ value: p.value, label: p.label })),
      ...opt(o),
    }),
  "payment-method": (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select option",
      options: PAYMENT_METHODS.map((m) => ({ value: m.value, label: m.label })),
      ...opt(o),
    }),
  "reimbursable-amount": (label, o, row) =>
    f0FormField.number({
      label,
      placeholder: "0",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "reimbursable-currency": (label, o, row) =>
    f0FormField.select({
      label,
      placeholder: "Currency",
      options: CURRENCIES.map((c) => ({ value: c, label: c })),
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "exchange-rate": (label, o) =>
    f0FormField.number({ label, placeholder: "1.0000", ...opt(o) }),
  "tax-type": (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select tax type",
      options: TAX_TYPES.map((t) => ({ value: t.value, label: t.label })),
      ...opt(o),
    }),
  budgets: (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select budget",
      options: BUDGETS.map((b) => ({ value: b.value, label: b.label })),
      ...opt(o),
    }),
  projects: (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select project",
      options: PROJECTS.map((p) => ({ value: p.value, label: p.label })),
      ...opt(o),
    }),
  "cost-centers": (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select cost center",
      options: COST_CENTERS_OPTS.map((c) => ({ value: c.value, label: c.label })),
      ...opt(o),
    }),
  description: (label, o) =>
    f0FormField.textarea({ label, placeholder: "", ...opt(o) }),
  "internal-reference": (label, o) =>
    f0FormField.text({ label, placeholder: "", ...opt(o) }),
  documents: (label, o) =>
    f0FormField.multiFile({
      label,
      description: "Drag and drop here or click to browse.",
      accept: ["image/jpeg", "image/png", "image/heic", "application/pdf"],
      maxSizeMB: 10,
      maxFiles: 10,
      ...opt(o),
    }),

  // ── Per diem ──
  "departure-date": (label, o, row) =>
    f0FormField.date({ label, ...(row ? { row } : {}), ...opt(o) }),
  "return-date": (label, o, row) =>
    f0FormField.date({ label, ...(row ? { row } : {}), ...opt(o) }),
  "per-diem-rates": (label, o, _row, options) =>
    f0FormField.select({
      label,
      placeholder: "Select rate",
      // Live per-diem rates when provided (so rates One adds/deletes show
      // up here); the static pair is only a standalone fallback.
      options:
        options ?? PER_DIEM_RATES.map((r) => ({ value: r.value, label: r.label })),
      ...opt(o),
    }),
  origin: (label, o, row) =>
    f0FormField.text({
      label,
      placeholder: "City or address",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  destination: (label, o, row) =>
    f0FormField.text({
      label,
      placeholder: "City or address",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "upload-the-receipt": (label, o) =>
    f0FormField.multiFile({
      label,
      description: "Drag and drop here or click to browse.",
      accept: ["image/jpeg", "image/png", "image/heic", "application/pdf"],
      maxSizeMB: 10,
      maxFiles: 10,
      ...opt(o),
    }),

  // ── Mileage ──
  "measurement-unit": (label, o, row) =>
    f0FormField.select({
      label,
      placeholder: "Select",
      options: MEASUREMENT_UNITS.map((u) => ({
        value: u.value,
        label: u.label,
      })),
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "total-distance": (label, o, row) =>
    f0FormField.number({
      label,
      placeholder: "0",
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  currency: (label, o, row) =>
    f0FormField.select({
      label,
      placeholder: "Currency",
      options: CURRENCIES.map((c) => ({ value: c, label: c })),
      ...(row ? { row } : {}),
      ...opt(o),
    }),
  "fixed-value-per-kilometer": (label, o) =>
    f0FormField.select({
      label,
      placeholder: "Select rate",
      options: MILEAGE_RATES.map((r) => ({ value: r.value, label: r.label })),
      ...opt(o),
    }),
  "total-to-reimburse": (label, o) =>
    f0FormField.number({ label, placeholder: "0", ...opt(o) }),
  date: (label, o) => f0FormField.date({ label, ...opt(o) }),
  document: (label, o) =>
    f0FormField.multiFile({
      label,
      description: "Drag and drop here or click to browse.",
      accept: ["image/jpeg", "image/png", "image/heic", "application/pdf"],
      maxSizeMB: 10,
      maxFiles: 10,
      ...opt(o),
    }),
}

/**
 * Row hints \u2014 which field ids should be paired side-by-side on the
 * same form line. The hint string just needs to be unique per
 * section; both fields in a row share the same value.
 */
const ROW_HINTS: Record<string, string> = {
  "document-total-amount": "amount-currency",
  "document-currency": "amount-currency",
  "vendor-name": "vendor",
  "vendor-tin": "vendor",
  "reimbursable-amount": "reimb-amount-currency",
  "reimbursable-currency": "reimb-amount-currency",
  "departure-date": "trip-dates",
  "return-date": "trip-dates",
  origin: "od",
  destination: "od",
  "measurement-unit": "unit-distance",
  "total-distance": "unit-distance",
  currency: "currency-total",
}

/* ────────────────────────────────────────────────────────────────────
 * Component
 * ──────────────────────────────────────────────────────────────────── */

function usePreviewUpload() {
  return {
    upload: async () => ({ type: "aborted" as const }),
    progress: 0,
    status: "idle" as const,
  }
}

export function ExpenseFormPreview(props: {
  formType: ExpenseFormType
  rows: readonly FieldRow[]
  // Live policy data — when provided, the Category / Subcategory
  // dropdowns reflect the actual policy (so co-created categories and
  // subcategories show up here) instead of the static placeholder
  // lists. Optional so the component still works standalone.
  categories?: readonly { id: string; name: string; visible?: boolean }[]
  subcategories?: readonly { id: string; categoryId: string; name: string }[]
  // Live per-diem rate entities (already filtered to formType "per-diem"
  // by the caller). When provided, the "Per diem rates" dropdown lists
  // these instead of the static Domestic/International pair — so rates One
  // adds or deletes via co-creation are reflected here.
  perDiemRates?: readonly { id: string; name: string }[]
}) {
  const { formType, rows, categories, subcategories, perDiemRates } = props
  const layout = LAYOUT_BY_FORM[formType]

  // Fallback category options (for sections/forms that have a category
  // field WITHOUT an adjacent subcategory to cascade from).
  const categoryOptions: readonly SelectOption[] | undefined = categories
    ? categories
        .filter((c) => c.visible !== false && c.name.trim() !== "")
        .map((c) => ({ value: c.name, label: c.name }))
    : undefined

  // Live per-diem rate options for the form's rate dropdown.
  const perDiemRateOptions: readonly SelectOption[] | undefined = perDiemRates
    ? perDiemRates
        .filter((r) => r.name.trim() !== "")
        .map((r) => ({ value: r.id, label: r.name }))
    : undefined

  // Index rows by id for O(1) lookup as we walk each section.
  const rowsById = new Map<string, FieldRow>()
  for (const row of rows) rowsById.set(row.id, row)

  // Sections render in their canonical layout order. Required vs
  // optional is communicated purely via the red asterisk on each
  // field label (handled automatically by F0Form via the zod
  // schema's `.optional()` wrapper). We do NOT reorder or collapse
  // optional sections \u2014 doing so collides with locked
  // ("always shown") fields, which must always render even when
  // their section happens to be all-optional otherwise.
  return (
    <div className="pointer-events-none flex flex-col gap-4">
      {layout.map((section) => (
        <PreviewSection
          key={section.id}
          formType={formType}
          section={section}
          rowsById={rowsById}
          categories={categories}
          subcategories={subcategories}
          categoryOptions={categoryOptions}
          perDiemRateOptions={perDiemRateOptions}
        />
      ))}
    </div>
  )
}

// Resolve the ordered list of FieldRow objects that belong to a
// section AND are renderable in the preview. Locked rows are
// always renderable; editable rows are renderable when visible.
function collectVisibleRows(
  section: SectionLayout,
  rowsById: Map<string, FieldRow>
): FieldRow[] {
  return section.fieldIds
    .map((id) => rowsById.get(id))
    .filter((row): row is FieldRow => {
      if (!row) return false
      if (row.kind === "locked") return true
      return row.visible
    })
}

function PreviewSection(props: {
  formType: ExpenseFormType
  section: SectionLayout
  rowsById: Map<string, FieldRow>
  categories?: readonly { id: string; name: string; visible?: boolean }[]
  subcategories?: readonly { id: string; categoryId: string; name: string }[]
  categoryOptions?: readonly SelectOption[]
  perDiemRateOptions?: readonly SelectOption[]
}) {
  const {
    formType,
    section,
    rowsById,
    categories,
    subcategories,
    categoryOptions,
    perDiemRateOptions,
  } = props
  const visibleRows = collectVisibleRows(section, rowsById)

  // Empty section after filtering \u2192 omit the entire header so the
  // preview reads cleanly.
  if (visibleRows.length === 0) return null

  return (
    <div className="flex flex-col gap-3 border-b border-f1-border-secondary pb-4">
      <div className="flex flex-col gap-1">
        <div className="text-lg font-semibold text-f1-foreground">
          {section.label}
        </div>
        <div className="text-sm text-f1-foreground-secondary">
          {section.description}
        </div>
      </div>
      <SectionBody
        formType={formType}
        section={section}
        visibleRows={visibleRows}
        categories={categories}
        subcategories={subcategories}
        categoryOptions={categoryOptions}
        perDiemRateOptions={perDiemRateOptions}
      />
    </div>
  )
}

// Shared body renderer: builds the schema from visible rows and
// mounts an F0Form, plus the optional `+ Add` action row at the
// bottom (e.g. for Tax / Cost centers in the Regular form).
function SectionBody(props: {
  formType: ExpenseFormType
  section: SectionLayout
  visibleRows: readonly FieldRow[]
  categories?: readonly { id: string; name: string; visible?: boolean }[]
  subcategories?: readonly { id: string; categoryId: string; name: string }[]
  categoryOptions?: readonly SelectOption[]
  perDiemRateOptions?: readonly SelectOption[]
}) {
  const {
    formType,
    section,
    visibleRows,
    categories,
    subcategories,
    categoryOptions,
    perDiemRateOptions,
  } = props

  // When this section has BOTH a category and a subcategory field AND we
  // have live policy data, pull those two out of the F0Form and render
  // them as an interactive dependent cascade (pick category → its live
  // subcategories). Everything else stays in the (non-interactive) form.
  const categoryRow = visibleRows.find((r) => r.id === "category")
  const subcategoryRow = visibleRows.find((r) => r.id === "subcategory")
  const useCascade = Boolean(categoryRow && subcategoryRow && categories)

  const shape: z.ZodRawShape = {}
  for (const row of visibleRows) {
    if (useCascade && (row.id === "category" || row.id === "subcategory")) {
      continue // rendered by the cascade below
    }
    const build = BUILDERS[row.id]
    if (!build) continue
    const optional = row.requirement === "optional"
    const rowHint = ROW_HINTS[row.id]
    // Inject live options for the fields that have them: a standalone
    // category field, and the per-diem rate dropdown.
    const options =
      row.id === "category"
        ? categoryOptions
        : row.id === "per-diem-rates"
          ? perDiemRateOptions
          : undefined
    shape[toFieldKey(row.id)] = build(
      row.label,
      optional,
      rowHint,
      options
    ) as z.ZodTypeAny
  }
  const schema = z.object(shape)

  return (
    <>
      <SectionForm
        sectionId={`${formType}-${section.id}`}
        schema={schema}
      />
      {useCascade && categoryRow && subcategoryRow && (
        <CategorySubcategoryCascade
          categories={categories!}
          subcategories={subcategories ?? []}
          categoryLabel={categoryRow.label}
          subcategoryLabel={subcategoryRow.label}
          categoryRequired={categoryRow.requirement !== "optional"}
          subcategoryRequired={subcategoryRow.requirement !== "optional"}
        />
      )}
      {section.addRowLabel && (
        <div className="pointer-events-auto">
          <F0Button
            label={section.addRowLabel}
            variant="outline"
            size="md"
            icon={Add}
            onClick={() => {}}
          />
        </div>
      )}
    </>
  )
}

function SectionForm(props: {
  sectionId: string
  schema: z.ZodObject<z.ZodRawShape>
}) {
  const { formRef } = useF0Form()
  const formDefinition = useF0FormDefinition({
    name: `expense-preview-${props.sectionId}`,
    schema: props.schema,
    defaultValues: {},
    submitConfig: { label: "Save", hideSubmitButton: true as const },
    onSubmit: async () => ({
      success: true as const,
      message: "Preview \u2014 not persisted.",
    }),
  })
  return (
    <F0Form
      formRef={formRef}
      formDefinition={formDefinition}
      useUpload={usePreviewUpload}
    />
  )
}

// FieldRow ids are kebab-case ("document-type"); F0Form keys are
// safer as camelCase identifiers. Convert at the schema boundary.
function toFieldKey(id: string): string {
  return id.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

// Interactive Category → Subcategory cascade. The rest of the preview
// is a static illustration; these two fields are live so you can pick a
// category and see ITS subcategories (reflecting anything co-created via
// One). Subcategory stays empty until a category is chosen.
function CategorySubcategoryCascade(props: {
  categories: readonly { id: string; name: string; visible?: boolean }[]
  subcategories: readonly { id: string; categoryId: string; name: string }[]
  categoryLabel: string
  subcategoryLabel: string
  categoryRequired: boolean
  subcategoryRequired: boolean
}) {
  const [categoryId, setCategoryId] = useState<string>("")
  const [subcategoryId, setSubcategoryId] = useState<string>("")
  const visibleCategories = props.categories.filter(
    (c) => c.visible !== false && c.name.trim() !== ""
  )
  const subs = props.subcategories.filter(
    (s) => s.categoryId === categoryId && s.name.trim() !== ""
  )

  // Rendered as real F0Selects so they match the rest of the form's
  // fields exactly (F0Form renders its own selects via F0Select too).
  // Wrapped in pointer-events-auto because the surrounding preview is
  // intentionally non-interactive — these two are the live exception.
  return (
    <div className="pointer-events-auto flex flex-col gap-3">
      <F0Select
        label={props.categoryLabel}
        placeholder="Select category"
        size="md"
        required={props.categoryRequired}
        options={visibleCategories.map((c) => ({ value: c.id, label: c.name }))}
        value={categoryId || undefined}
        onChange={(value: string) => {
          setCategoryId(value)
          setSubcategoryId("") // reset dependent field when parent changes
        }}
      />
      <F0Select
        label={props.subcategoryLabel}
        placeholder={
          categoryId === ""
            ? "Select a category first"
            : subs.length === 0
              ? "No subcategories yet"
              : "Select subcategory"
        }
        size="md"
        required={props.subcategoryRequired}
        disabled={categoryId === "" || subs.length === 0}
        options={subs.map((s) => ({ value: s.id, label: s.name }))}
        value={subcategoryId || undefined}
        onChange={(value: string) => setSubcategoryId(value)}
      />
    </div>
  )
}
