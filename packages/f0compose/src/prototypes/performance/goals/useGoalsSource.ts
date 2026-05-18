import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { goals } from "@/fixtures/performance"
import type { Goal } from "@/fixtures/types"
import { applySort } from "@/lib/applySort"

export function useGoalsSource() {
  return useDataCollectionSource<Goal>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "on-track", label: "On track" },
              { value: "at-risk", label: "At risk" },
              { value: "completed", label: "Completed" },
              { value: "abandoned", label: "Abandoned" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "On track", filter: { status: ["on-track"] } },
        { label: "At risk", filter: { status: ["at-risk"] } },
        { label: "Completed", filter: { status: ["completed"] } },
      ],
      sortings: {
        title: { label: "Title" },
        dueDate: { label: "Due date" },
        progress: { label: "Progress" },
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

          const filtered = goals
            .filter((g) =>
              statusFilter.length === 0 ? true : statusFilter.includes(g.status)
            )
            .filter((g) =>
              term === "" ? true : g.title.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (g, field) => {
            switch (field) {
              case "title":
                return g.title.toLowerCase()
              case "dueDate":
                return g.dueDate
              case "progress":
                return g.progress
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
        label: "New goal",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Edit", onClick: () => {} },
        { type: "separator" },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
