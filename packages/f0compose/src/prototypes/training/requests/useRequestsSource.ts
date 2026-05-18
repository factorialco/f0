import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import { type TrainingRequest, trainingRequests } from "@/fixtures"
import { applySort } from "@/lib/applySort"

/**
 * useDataCollectionSource for the Training Requests table.
 */
export function useRequestsSource() {
  return useDataCollectionSource<TrainingRequest>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "pending", label: "Pending" },
              { value: "approved", label: "Approved" },
              { value: "rejected", label: "Rejected" },
              { value: "cancelled", label: "Cancelled" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Pending", filter: { status: ["pending"] } },
        { label: "Approved", filter: { status: ["approved"] } },
      ],
      sortings: {
        employeeName: { label: "Employee" },
        requestedAt: { label: "Requested on" },
        estimatedCost: { label: "Estimated cost" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = trainingRequests
            .filter((r) =>
              statusFilter.length === 0
                ? true
                : statusFilter.includes(r.status)
            )
            .filter((r) =>
              term === ""
                ? true
                : r.employeeName.toLowerCase().includes(term) ||
                  r.trainingName.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "employeeName":
                return r.employeeName.toLowerCase()
              case "requestedAt":
                return Date.parse(r.requestedAt)
              case "estimatedCost":
                return r.estimatedCost
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
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
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Approve", onClick: () => {} },
        { label: "Reject", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
