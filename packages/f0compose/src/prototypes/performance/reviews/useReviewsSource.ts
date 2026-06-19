import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { performanceCycles, type PerformanceCycle } from "@/fixtures/performance"
import { applySort } from "@/lib/applySort"

/**
 * useDataCollectionSource for the Reviews (cycles) table:
 * - Status filter + presets (Active / Draft / Finished / All)
 * - Search by name
 * - Sort by name / createdOn / startDate
 * - Page-based pagination
 */
export function useReviewsSource() {
  return useDataCollectionSource<PerformanceCycle>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "draft", label: "Draft" },
              { value: "finished", label: "Finished" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        { label: "Draft", filter: { status: ["draft"] } },
        { label: "Finished", filter: { status: ["finished"] } },
      ],
      sortings: {
        name: { label: "Name" },
        createdOn: { label: "Created on" },
        startDate: { label: "Start date" },
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

          const filtered = performanceCycles
            .filter((c) =>
              statusFilter.length === 0 ? true : statusFilter.includes(c.status)
            )
            .filter((c) =>
              term === "" ? true : c.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "name":
                return c.name.toLowerCase()
              case "createdOn":
                return c.createdOn
              case "startDate":
                return c.startDate ?? ""
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
      primaryActions: () => ({
        label: "New review",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Duplicate", onClick: () => {} },
        { type: "separator" },
        { label: "Archive", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
