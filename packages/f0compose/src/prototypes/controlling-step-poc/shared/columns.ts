import { applySort } from "@/lib/applySort"
import type { ExpenseStatus } from "@/fixtures"

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
    render: (item: SpendingRow) => item.description,
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
    render: (item: SpendingRow) => ({
      type: "amount" as const,
      value: {
        amount: item.amount,
        currency: { symbol: "€", symbolPosition: "right" as const, decimalPlaces: 2 },
      },
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
  }
) {
  const { search, sortings, pagination, statusFilter } = args
  const term = (search ?? "").toLowerCase().trim()
  const filtered = rows
    .filter((r) =>
      statusFilter && statusFilter.length > 0
        ? statusFilter.includes(r.status)
        : true
    )
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
