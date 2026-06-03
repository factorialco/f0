import { applySort } from "@/lib/applySort"
import type { ExpenseAlert, ExpenseStatus } from "@/fixtures"
import { costCenters, projects, vatRates } from "@/fixtures"

import { getMissingRequiredFields } from "@/prototypes/_shared/requiredFields"

import { STATUS_LABEL, STATUS_VARIANT } from "./expenseStatus"
import type { SpendingRow } from "./rows"

/**
 * Shared OneDataCollection columns for every Submit/Manage table.
 *
 * Folders and expenses share the same columns by design (BR-008):
 *   - the `name` column uses the `folder` cell type for folder rows and
 *     plain text for expenses, so folders stand out visually as
 *     first-class rows inside the same table.
 *   - all other columns render uniformly.
 */
export const spendingColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    render: (item: SpendingRow) =>
      item.kind === "folder"
        ? ({ type: "folder" as const, value: { name: item.name } })
        : item.name,
  },
  {
    id: "description",
    label: "Category",
    // Expense rows render the category as an outlined F0TagRaw pill
    // (matches every other OneDataCollection in the product). Folder
    // rows reuse `description` as a free-text summary
    // ("Folder · 4 expenses"), so they fall through to plain text.
    render: (item: SpendingRow) =>
      item.kind === "expense"
        ? ({ type: "tag" as const, value: { label: item.description } })
        : item.description,
  },
  {
    id: "date",
    label: "Date",
    sorting: "date",
    render: (item: SpendingRow) => ({
      type: "date" as const,
      value: new Date(item.date),
    }),
  },
  {
    id: "amount",
    label: "Amount",
    sorting: "amount",
    // Designer feedback (2026-05-13): the Amount column should read
    // left-aligned to match its left-aligned header — by default the
    // built-in `type: "amount"` cell renders right-aligned (it
    // delegates to `NumberCell`, which hard-codes `justify-end` in
    // table visualization). Switching to a pre-formatted text cell
    // sidesteps that styling lock without forking the renderer.
    // Format mirrors the original AmountCell defaults: 2 decimals,
    // right-positioned € symbol, en locale grouping.
    render: (item: SpendingRow) => ({
      type: "text" as const,
      value: `${item.amount
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\u00A0€`,
    }),
  },
  {
    id: "status",
    label: "Status",
    render: (item: SpendingRow) => ({
      type: "status" as const,
      value: {
        status: STATUS_VARIANT[item.status],
        label: STATUS_LABEL[item.status],
      },
    }),
  },
] as const

/** Discriminator the Alerts filter uses across UI + paginateRows. */
export type PolicyStateKey =
  | "in-policy"
  | "late-submission"
  | "late-receipt"
  | "receipt-mismatch"
  | "meal-over-limit"
  | "alcohol-detected"
  | "receipt-invalid"
  | "missing-merchant"
  | "weekend-charge"
  | "missing-fields"

/** Shared option set so the source's filter definition and the
 *  paginate-time matcher agree on labels + ids. Ordered by likely
 *  reviewer interest: out-of-policy red flags first, timeliness
 *  issues next, data-quality last, then the clean baseline. */
export const POLICY_STATE_OPTIONS: ReadonlyArray<{
  value: PolicyStateKey
  label: string
}> = [
  { value: "meal-over-limit", label: "Meal limit exceeded" },
  { value: "alcohol-detected", label: "Alcohol" },
  { value: "weekend-charge", label: "Weekend charge" },
  { value: "receipt-mismatch", label: "Receipt mismatch" },
  { value: "receipt-invalid", label: "Invalid receipt" },
  { value: "missing-merchant", label: "Missing merchant" },
  { value: "late-submission", label: "Late submission" },
  { value: "late-receipt", label: "Late receipt" },
  { value: "missing-fields", label: "Missing fields" },
  { value: "in-policy", label: "In policy" },
]

/**
 * Resolve a row to its single dominant policy state. Mirrors the
 * priority used by `alertCellFor` so the filter and the column
 * always agree on which tag a row carries.
 *
 * Priority: out-of-policy red flags > timeliness > data quality >
 * missing required fields > clean.
 *
 * Folder rows have no state of their own and never match an alerts
 * filter (returning `null` excludes them).
 */
export function policyStateFor(row: SpendingRow): PolicyStateKey | null {
  if (row.kind === "folder") return null
  const a = row.alerts
  if (a.includes("meal-over-limit")) return "meal-over-limit"
  if (a.includes("alcohol-detected")) return "alcohol-detected"
  if (a.includes("weekend-charge")) return "weekend-charge"
  if (a.includes("receipt-mismatch")) return "receipt-mismatch"
  if (a.includes("receipt-invalid")) return "receipt-invalid"
  if (a.includes("missing-merchant")) return "missing-merchant"
  if (a.includes("late-submission")) return "late-submission"
  if (a.includes("receipt-after-timeframe")) return "late-receipt"
  if (getMissingRequiredFields(row.id).length > 0) return "missing-fields"
  return "in-policy"
}

/**
 * Short, table-friendly labels for the row-level alerts. The detail
 * page uses longer descriptive sentences (see `alertLabel` in
 * `ExpenseSidePanel`); a column tag has to fit in ~20 chars, so we
 * trim to the essential noun.
 */
const ALERT_TAG_LABEL: Record<ExpenseAlert, string> = {
  "late-submission": "Late submission",
  "receipt-after-timeframe": "Late receipt",
  "receipt-mismatch": "Receipt mismatch",
  "meal-over-limit": "Meal limit exceeded",
  "alcohol-detected": "Alcohol",
  "receipt-invalid": "Invalid receipt",
  "missing-merchant": "Missing merchant",
  "weekend-charge": "Weekend charge",
  // Declared split — informational only (variant "info" in the
  // detail-page alert mapping). The label is short for the column
  // tag; the longer descriptive sentence lives on the detail page.
  "declared-split": "Shared expense",
}

/**
 * "In policy" = no row alerts AND no missing required fields. The
 * latter mirrors the same gate the detail page applies before
 * "Send for approval" un-disables, so a row reading green here
 * matches the row the submitter can actually send.
 *
 * Folder rows have no policy state of their own — they aggregate
 * children — so we don't tag them. Returning `null` from the cell
 * render makes OneDataCollection leave the cell blank.
 */
function alertCellFor(item: SpendingRow) {
  if (item.kind === "folder") {
    // Folder rows aggregate children — no policy state of their own.
    // Returning an empty text cell keeps the row height consistent.
    return { type: "text" as const, value: "" }
  }
  const state = policyStateFor(item)
  if (state === "in-policy" || state === null) {
    return {
      type: "status" as const,
      value: { status: "positive" as const, label: "In policy" },
    }
  }
  if (state === "missing-fields") {
    return {
      type: "status" as const,
      value: { status: "warning" as const, label: "Missing fields" },
    }
  }
  // The remaining states all map directly to a row alert key. Build
  // a small lookup so the cell label stays in lockstep with
  // ALERT_TAG_LABEL.
  const stateToAlert: Record<
    Exclude<PolicyStateKey, "in-policy" | "missing-fields">,
    ExpenseAlert
  > = {
    "late-submission": "late-submission",
    "late-receipt": "receipt-after-timeframe",
    "receipt-mismatch": "receipt-mismatch",
    "meal-over-limit": "meal-over-limit",
    "alcohol-detected": "alcohol-detected",
    "receipt-invalid": "receipt-invalid",
    "missing-merchant": "missing-merchant",
    "weekend-charge": "weekend-charge",
  }
  return {
    type: "status" as const,
    value: {
      status: "warning" as const,
      label: ALERT_TAG_LABEL[stateToAlert[state]],
    },
  }
}

/**
 * Submit > Expenses column set. Same as `spendingColumns` but with
 * an extra second column surfacing the row's policy state at a
 * glance:
 *   - Green "In policy" — no alerts, no missing required fields.
 *   - Warning "<alert label>" — first row-alert, mapped to a short tag.
 *   - Warning "Missing fields" — required-fields gate not yet cleared.
 *   - Blank for folder rows.
 *
 * Kept as a separate export (rather than mutating `spendingColumns`)
 * so the Manage tabs and folder detail page — which serve approver
 * and controller personas — stay untouched.
 */
export const submitColumns = [
  spendingColumns[0],
  {
    id: "policyState",
    label: "Alerts",
    render: alertCellFor,
  },
  ...spendingColumns.slice(1),
] as const

/**
 * Lookup maps for the controlling catalogs. Stored ids round-trip
 * to display labels — the Control DC shows "Engineering · CC-100",
 * "Platform 2026 · PRJ-2026-PLAT", "21%" etc. Built once at module
 * load (catalogs are static fixtures).
 */
const COST_CENTER_LABEL = new Map(
  costCenters.map((c) => [c.id, `${c.name} · ${c.code}`])
)
const PROJECT_LABEL = new Map(
  projects.map((p) => [p.id, `${p.name} · ${p.code}`])
)
const VAT_LABEL = new Map(vatRates.map((v) => [v.id, v.label]))

/**
 * Plain-text cell with a `-` fallback when the controlling field
 * hasn't been coded yet. Mirrors the DC's default empty-cell glyph
 * (single hyphen, not en-dash) so the Control tab reads uniformly
 * regardless of which renderer handles the cell.
 */
function textOrDash(value: string | undefined) {
  return { type: "text" as const, value: value && value.length > 0 ? value : "-" }
}

/**
 * Alerts cell for the Pending Controlling sub-tab. Mirrors the
 * Submit/Manage `alertCellFor` priority but collapses
 * `missing-fields` → `in-policy` because the missing-fields gate is
 * enforced at submission time (a row that reached Pending
 * Controlling has already cleared it from the controller's POV; we
 * don't want to scare reviewers with a red flag they can't act on).
 */
function alertCellForControlling(item: SpendingRow) {
  if (item.kind === "folder") {
    return { type: "text" as const, value: "" }
  }
  const state = policyStateFor(item)
  if (state === "in-policy" || state === null || state === "missing-fields") {
    return {
      type: "status" as const,
      value: { status: "positive" as const, label: "In policy" },
    }
  }
  return alertCellFor(item)
}

/**
 * Manage > Pending Controlling column set. Surfaces the
 * controlling-relevant fields (subcategory, cost center, project,
 * VAT, description) alongside an alerts column so controllers can
 * triage at a glance before opening the side panel.
 *
 * Folder rows reuse the Name cell renderer and fall through to `-`
 * for every controlling field (folders aren't coded).
 */
export const controllingColumns = [
  spendingColumns[0], // Name
  spendingColumns[1], // Category (outlined tag)
  {
    id: "subcategory",
    label: "Subcategory",
    render: (item: SpendingRow) =>
      item.kind === "expense"
        ? textOrDash(item.controlling?.subcategory)
        : textOrDash(undefined),
  },
  {
    id: "costCenter",
    label: "Cost center",
    render: (item: SpendingRow) => {
      if (item.kind !== "expense") return textOrDash(undefined)
      const id = item.controlling?.costCenter
      return textOrDash(id ? COST_CENTER_LABEL.get(id) : undefined)
    },
  },
  {
    id: "project",
    label: "Project",
    render: (item: SpendingRow) => {
      if (item.kind !== "expense") return textOrDash(undefined)
      const id = item.controlling?.project
      return textOrDash(id ? PROJECT_LABEL.get(id) : undefined)
    },
  },
  {
    id: "vatRate",
    label: "VAT rate",
    render: (item: SpendingRow) => {
      if (item.kind !== "expense") return textOrDash(undefined)
      const id = item.controlling?.vatRate
      return textOrDash(id ? VAT_LABEL.get(id) : undefined)
    },
  },
  {
    id: "controllingDescription",
    label: "Description",
    render: (item: SpendingRow) =>
      item.kind === "expense"
        ? textOrDash(item.controlling?.description)
        : textOrDash(undefined),
  },
  spendingColumns[2], // Date
  spendingColumns[3], // Amount
  {
    id: "policyState",
    label: "Alerts",
    render: alertCellForControlling,
  },
  spendingColumns[4], // Status
] as const

/** Canonical sort getter — used by every source hook. */
export function getSpendingSortValue(
  row: SpendingRow,
  field: string
): string | number | null {
  switch (field) {
    case "name":
      return row.name.toLowerCase()
    case "amount":
      return row.amount
    case "date":
      return Date.parse(row.date)
    default:
      return null
  }
}

/** Standard filter → search → sort → paginate body shared by all sources. */
export function paginateRows(
  rows: SpendingRow[],
  args: {
    search: string | undefined
    sortings: Parameters<typeof applySort>[1]
    pagination?: { perPage?: number; currentPage?: number } | undefined
    statusFilter?: ExpenseStatus[]
    /**
     * Optional policy-state filter. Each row is resolved through
     * `policyStateFor` (single dominant state) and kept iff its
     * state is in the supplied list. Folder rows resolve to `null`
     * and are filtered out whenever this is set — designers can re-
     * surface folders by clearing the filter.
     */
    policyFilter?: PolicyStateKey[]
  }
) {
  const { search, sortings, pagination, statusFilter, policyFilter } = args
  const term = (search ?? "").toLowerCase().trim()
  const filtered = rows
    .filter((r) =>
      statusFilter && statusFilter.length > 0
        ? statusFilter.includes(r.status)
        : true
    )
    .filter((r) => {
      if (!policyFilter || policyFilter.length === 0) return true
      const state = policyStateFor(r)
      return state !== null && policyFilter.includes(state)
    })
    .filter((r) =>
      term === ""
        ? true
        : r.name.toLowerCase().includes(term) ||
          r.description.toLowerCase().includes(term)
    )
  const sorted = applySort(filtered, sortings, getSpendingSortValue)
  const perPage = pagination?.perPage ?? 20
  const currentPage = pagination?.currentPage ?? 1
  const total = sorted.length
  const pagesCount = Math.max(1, Math.ceil(total / perPage))
  const start = (currentPage - 1) * perPage
  return {
    type: "pages" as const,
    records: sorted.slice(start, start + perPage),
    total,
    perPage,
    currentPage,
    pagesCount,
  }
}
