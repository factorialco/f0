import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { feedbacks, type Feedback } from "@/fixtures/performance"
import { applySort } from "@/lib/applySort"

export function useFeedbackSource() {
  return useDataCollectionSource<Feedback>(
    {
      filters: {
        type: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "praise", label: "Praise" },
              { value: "constructive", label: "Constructive" },
              { value: "request", label: "Request" },
            ],
          },
        },
        visibility: {
          type: "in",
          label: "Visibility",
          options: {
            options: [
              { value: "public", label: "Public" },
              { value: "private", label: "Private" },
              { value: "manager-only", label: "Manager only" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Praise", filter: { type: ["praise"] } },
        { label: "Constructive", filter: { type: ["constructive"] } },
        { label: "Public", filter: { visibility: ["public"] } },
      ],
      sortings: {
        createdAt: { label: "Date" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const typeFilter = Array.isArray(filters?.type)
            ? (filters.type as string[])
            : []
          const visFilter = Array.isArray(filters?.visibility)
            ? (filters.visibility as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = feedbacks
            .filter((f) =>
              typeFilter.length === 0 ? true : typeFilter.includes(f.type)
            )
            .filter((f) =>
              visFilter.length === 0 ? true : visFilter.includes(f.visibility)
            )
            .filter((f) =>
              term === "" ? true : f.content.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (f, field) => {
            switch (field) {
              case "createdAt":
                return f.createdAt
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
        label: "Give feedback",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { type: "separator" },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
