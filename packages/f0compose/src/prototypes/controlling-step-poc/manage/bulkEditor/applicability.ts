/**
 * Bulk Editor — column applicability matrix.
 *
 * DT-001 (default visibility): every controlling field is visible by
 * default EXCEPT `tags`, which is opt-in via the column picker. The
 * row identity columns (Provider, Date, Amount) are always shown and
 * always read-only.
 *
 * DT-002 (per-row applicability): VAT rate doesn't apply to mileage
 * or per-diem expenses (they're tax-handled separately, and they're
 * modelled as `ExpenseCategory` values — `"Mileage"`, `"Per diem"`).
 * Every other controlling field applies to every category. Cells
 * that are non-applicable render as a dimmed "N/A" and silently
 * skip when caught in a multi-cell apply.
 */
import type { ExpenseCategory } from "@/fixtures"
import { subcategoriesByCategory } from "@/fixtures"

export type EditableColumnId =
  | "category"
  | "subcategory"
  | "costCenter"
  | "project"
  | "vatRate"
  | "description"
  | "tags"

export type ReadOnlyColumnId = "provider" | "date" | "amount"
export type ColumnId = ReadOnlyColumnId | EditableColumnId

export const READONLY_COLUMNS: ReadOnlyColumnId[] = [
  "provider",
  "date",
  "amount",
]

export const EDITABLE_COLUMNS: EditableColumnId[] = [
  "category",
  "subcategory",
  "costCenter",
  "project",
  "vatRate",
  "description",
  // Tags column intentionally omitted — DT-001 keeps it off by
  // default. It stays in the `EditableColumnId` union (state hook,
  // fixtures, mock descriptions still reference it) but won't
  // render until a column picker re-enables it.
]

export const COLUMN_LABEL: Record<ColumnId, string> = {
  provider: "Provider",
  date: "Date",
  amount: "Amount",
  category: "Category",
  subcategory: "Subcategory",
  costCenter: "Cost center",
  project: "Project",
  vatRate: "VAT rate",
  description: "Note",
  tags: "Tags",
}

/** DT-001: Tags hidden by default; everything else visible. */
export const DEFAULT_VISIBLE_EDITABLE: Record<EditableColumnId, boolean> = {
  category: true,
  subcategory: true,
  costCenter: true,
  project: true,
  vatRate: true,
  description: true,
  tags: false,
}

/**
 * DT-002: VAT rate doesn't apply to mileage / per-diem categories;
 * everything else applies to every category.
 */
export function isApplicable(
  columnId: EditableColumnId,
  category: ExpenseCategory | undefined
): boolean {
  if (columnId === "vatRate") {
    return category !== "Mileage" && category !== "Per diem"
  }
  return true
}

/**
 * Value-level applicability for bulk apply. Used by `applyToAll` /
 * `applyToRows` to skip rows that would receive a value that makes
 * no sense for them — specifically:
 *   - Subcategory: only write to rows whose category's subcategory
 *     list contains the picked subcategory. Bulk-setting "On-call
 *     meal" on a Hotel row would silently store an orphan value the
 *     row's select can't render (it'd appear blank). We skip these
 *     rows so the user sees exactly which rows actually got the
 *     value applied, and the rest stay at their original.
 *   - VAT rate: re-uses `isApplicable` (Mileage / Per diem skipped).
 *   - Everything else: any value applies to any row.
 */
export function isValueApplicable(
  columnId: EditableColumnId,
  category: ExpenseCategory | undefined,
  value: unknown
): boolean {
  if (!isApplicable(columnId, category)) return false
  if (columnId === "subcategory" && typeof value === "string" && value !== "") {
    const list = category ? subcategoriesByCategory[category] : undefined
    if (!list || !list.includes(value)) return false
  }
  return true
}
