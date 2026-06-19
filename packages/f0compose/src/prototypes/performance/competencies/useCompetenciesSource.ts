import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { competencies, type Competency } from "@/fixtures/performance"
import { applySort } from "@/lib/applySort"

export function useCompetenciesSource() {
  return useDataCollectionSource<Competency>(
    {
      filters: {
        category: {
          type: "in",
          label: "Category",
          options: {
            options: [
              { value: "technical", label: "Technical" },
              { value: "leadership", label: "Leadership" },
              { value: "communication", label: "Communication" },
              { value: "execution", label: "Execution" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Technical", filter: { category: ["technical"] } },
        { label: "Leadership", filter: { category: ["leadership"] } },
        { label: "Communication", filter: { category: ["communication"] } },
      ],
      sortings: {
        name: { label: "Name" },
        category: { label: "Category" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const catFilter = Array.isArray(filters?.category)
            ? (filters.category as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = competencies
            .filter((c) =>
              catFilter.length === 0 ? true : catFilter.includes(c.category)
            )
            .filter((c) =>
              term === ""
                ? true
                : c.name.toLowerCase().includes(term) ||
                  c.description.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "name":
                return c.name.toLowerCase()
              case "category":
                return c.category
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
        label: "New competency",
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
