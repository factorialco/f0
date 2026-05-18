import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import type { CompensationReview } from "../compensationFixtures"
import { compensationReviews } from "../compensationFixtures"
import { applySort } from "@/lib/applySort"

export function useCompensationReviewsSource() {
  return useDataCollectionSource<CompensationReview>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "draft", label: "Draft" },
              { value: "in-progress", label: "In progress" },
              { value: "completed", label: "Completed" },
              { value: "approved", label: "Approved" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "In progress", filter: { status: ["in-progress"] } },
        { label: "Approved", filter: { status: ["approved"] } },
        { label: "Draft", filter: { status: ["draft"] } },
      ],
      sortings: {
        current: { label: "Current salary" },
        proposed: { label: "Proposed salary" },
        effectiveDate: { label: "Effective date" },
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

          const filtered = compensationReviews
            .filter((r) =>
              statusFilter.length === 0 ? true : statusFilter.includes(r.status)
            )
            .filter((r) => {
              if (term === "") return true
              const emp = r.employeeId
              return emp.toLowerCase().includes(term) || r.reason.toLowerCase().includes(term)
            })

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "current":
                return r.currentSalary
              case "proposed":
                return r.proposedSalary
              case "effectiveDate":
                return r.effectiveDate
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

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      itemActions: () => [
        { label: "Review", onClick: () => {} },
        { label: "Approve", onClick: () => {} },
        { type: "separator" },
        { label: "Reject", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
