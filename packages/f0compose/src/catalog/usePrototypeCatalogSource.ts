import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import { allPrototypes } from "@/prototypes/registry"
import type { Audience, Category, PrototypeMeta } from "@/prototypes/types"
import { applySort } from "@/lib/applySort"

/**
 * Source for the catalog home — every registered prototype as a card.
 * Implements the canonical mandatory four: filters + search + sort + pagination.
 */

const audienceOptions: { value: Audience; label: string }[] = [
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
  { value: "manager", label: "Manager" },
]

export function usePrototypeCatalogSource() {
  // Category options come from whatever categories actually appear in the
  // registry — keeps the filter chip list synced with reality.
  const categoryOptions = Array.from(
    new Set(allPrototypes.map((p) => p.category))
  )
    .sort((a, b) => a.localeCompare(b))
    .map((c) => ({ value: c, label: c }))

  return useDataCollectionSource<PrototypeMeta>(
    {
      search: { enabled: true, sync: true },
      filters: {
        category: {
          type: "in",
          label: "Category",
          options: { options: categoryOptions },
        },
        audience: {
          type: "in",
          label: "Audience",
          options: { options: audienceOptions },
        },
      },
      sortings: {
        title: { label: "Title" },
        createdAt: { label: "Date added" },
      },
      itemUrl: (m) => `/p/${m.slug}`,
      dataAdapter: {
        paginationType: "pages",
        perPage: 12,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedCategories = Array.isArray(filters?.category)
            ? (filters.category as Category[])
            : []
          const wantedAudiences = Array.isArray(filters?.audience)
            ? (filters.audience as Audience[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = allPrototypes
            .filter((m) =>
              wantedCategories.length === 0
                ? true
                : wantedCategories.includes(m.category)
            )
            .filter((m) =>
              wantedAudiences.length === 0
                ? true
                : m.audience.some((a) => wantedAudiences.includes(a))
            )
            .filter((m) =>
              term === ""
                ? true
                : m.title.toLowerCase().includes(term) ||
                  m.description.toLowerCase().includes(term) ||
                  (m.tags ?? []).some((t) => t.toLowerCase().includes(term))
            )

          const sorted = applySort(filtered, sortings, (m, field) => {
            switch (field) {
              case "title":
                return m.title.toLowerCase()
              case "createdAt":
                return Date.parse(m.createdAt)
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 12
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
    },
    []
  )
}
