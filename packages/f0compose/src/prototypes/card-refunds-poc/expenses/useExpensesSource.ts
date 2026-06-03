import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  Delete,
  Download,
  Pencil,
} from "@factorialco/f0-react/icons/app"

import {
  type Expense,
  type ExpenseStatus,
  expenseCountsByStatus,
  expenses,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { presetLabel } from "../shared/expenseStatus"

/**
 * Source for "My expenses > Expenses". Mirrors the production screen:
 *   - Quick-filter chips with inline counts ("Pending 26", "Paid 30") via
 *     `presets[].itemsCount` (see OneFilterPicker/types.ts:104-107).
 *   - Filters: status (in), category (in), createdAt (date range).
 *   - Search by provider name.
 *   - Sort by createdAt / amount / provider.
 *   - Primary action "New expense" (matches the blue CTA on the right).
 *   - Per-row actions: View / Edit / Download receipt / Delete (critical).
 */

const allStatuses: ExpenseStatus[] = [
  "draft",
  "pending",
  "approved",
  "in-payroll",
]

const categoryOptions = [
  { value: "Meals", label: "Meals" },
  { value: "Taxis", label: "Taxis" },
  { value: "Travel", label: "Travel" },
  { value: "Hotel", label: "Hotel" },
  { value: "Shopping", label: "Shopping" },
  { value: "Office", label: "Office" },
  { value: "Software", label: "Software" },
] as const

type DateRange = { from: Date; to?: Date }
type DateFilterValue = Date | DateRange | undefined

function isDateRange(v: unknown): v is DateRange {
  return typeof v === "object" && v !== null && "from" in v
}

function inDateRange(iso: string, value: DateFilterValue): boolean {
  if (!value) return true
  const d = new Date(iso + "T00:00:00Z").getTime()
  if (value instanceof Date) return value.toISOString().slice(0, 10) === iso
  if (isDateRange(value)) {
    const from = value.from.getTime()
    const to = value.to ? value.to.getTime() : Number.POSITIVE_INFINITY
    return d >= from && d <= to
  }
  return true
}

export function useExpensesSource(onItemClick?: (item: Expense) => void) {
  return useDataCollectionSource<Expense>(
    {
      itemOnClick: onItemClick
        ? (item: Expense) =>
            item.children ? undefined : () => onItemClick(item)
        : undefined,
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: allStatuses.map((s) => ({
              value: s,
              label: presetLabel[s],
            })),
          },
        },
        category: {
          type: "in",
          label: "Category",
          options: { options: [...categoryOptions] },
        },
        createdAt: {
          type: "date",
          label: "Created on",
          options: { mode: "range", view: "day" },
        },
      },
      // Quick-filter chips above the table — exact order from the screenshot.
      // `itemsCount` populates the inline number ("Pending 26").
      presets: allStatuses.map((status) => ({
        label: presetLabel[status],
        filter: { status: [status] },
        itemsCount: () => expenseCountsByStatus[status],
      })),
      sortings: {
        createdAt: { label: "Created on" },
        amount: { label: "Amount" },
        provider: { label: "Provider" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatuses = Array.isArray(filters?.status)
            ? (filters.status as ExpenseStatus[])
            : []
          const wantedCategories = Array.isArray(filters?.category)
            ? (filters.category as Expense["category"][])
            : []
          const dateValue = filters?.createdAt as DateFilterValue
          const term = (search ?? "").toLowerCase().trim()

          const filtered = expenses
            .filter((e) =>
              wantedStatuses.length === 0
                ? true
                : wantedStatuses.includes(e.status)
            )
            .filter((e) =>
              wantedCategories.length === 0
                ? true
                : wantedCategories.includes(e.category)
            )
            .filter((e) => inDateRange(e.createdAt, dateValue))
            .filter((e) =>
              term === "" ? true : e.provider.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (e, field) => {
            switch (field) {
              case "createdAt":
                return Date.parse(e.createdAt)
              case "amount":
                return e.amount
              case "provider":
                return e.provider.toLowerCase()
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 25
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)

          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New expense",
        icon: Add,
        onClick: () => {},
      }),
      itemsWithChildren: (item: Expense) => Boolean(item.children?.length),
      childrenCount: ({ item }: { item: Expense }) => item.children?.length,
      fetchChildren: ({ item }: { item: Expense }) =>
        item.children
          ? { records: item.children, type: "basic" as const }
          : { records: [] },
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Edit", icon: Pencil, onClick: () => {} },
        { label: "Download receipt", icon: Download, onClick: () => {} },
        { type: "separator" },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => {},
          critical: true,
        },
      ],
    },
    []
  )
}
