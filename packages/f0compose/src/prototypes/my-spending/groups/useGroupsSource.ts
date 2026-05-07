import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add, Settings } from "@factorialco/f0-react/icons/app"

import {
  type ExpenseGroup,
  type ExpenseStatus,
  expenseGroups,
  groupCountsByStatus,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { presetLabel } from "../shared/expenseStatus"

/**
 * Source for "My expenses > Groups". Mirrors the production screen:
 *   - Quick-filter chips with inline counts (Draft 1 / Pending 2 / …).
 *   - Filter by status; search by group name.
 *   - Pagination: page-based, 10 rows per page.
 *   - Primary action "Add group", secondary action "Settings".
 *   - Per-row action "View".
 */

const allStatuses: ExpenseStatus[] = [
  "draft",
  "pending",
  "approved",
  "in-payroll",
]

export function useGroupsSource() {
  return useDataCollectionSource<ExpenseGroup>(
    {
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
      },
      presets: allStatuses.map((status) => ({
        label: presetLabel[status],
        filter: { status: [status] },
        itemsCount: () => groupCountsByStatus[status],
      })),
      sortings: {
        name: { label: "Name" },
        expenseCount: { label: "Expenses" },
        amount: { label: "Amount" },
        reportDate: { label: "Report date" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatuses = Array.isArray(filters?.status)
            ? (filters.status as ExpenseStatus[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = expenseGroups
            .filter((g) =>
              wantedStatuses.length === 0
                ? true
                : wantedStatuses.includes(g.status)
            )
            .filter((g) =>
              term === "" ? true : g.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (g, field) => {
            switch (field) {
              case "name":
                return g.name.toLowerCase()
              case "expenseCount":
                return g.expenseCount
              case "amount":
                return g.amount
              case "reportDate":
                return Date.parse(g.reportDate)
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 10
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
        label: "Add group",
        icon: Add,
        onClick: () => {},
      }),
      secondaryActions: () => [
        { label: "Settings", icon: Settings, onClick: () => {} },
      ],
      itemActions: () => [{ label: "View", onClick: () => {} }],
    },
    []
  )
}
