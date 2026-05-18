import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import type { Benefit } from "../compensationFixtures"
import { benefits } from "../compensationFixtures"
import { applySort } from "@/lib/applySort"

export function useBenefitsSource() {
  return useDataCollectionSource<Benefit>(
    {
      filters: {
        category: {
          type: "in",
          label: "Category",
          options: {
            options: [
              { value: "health", label: "Health" },
              { value: "retirement", label: "Retirement" },
              { value: "wellness", label: "Wellness" },
              { value: "education", label: "Education" },
              { value: "transport", label: "Transport" },
              { value: "meal", label: "Meal" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Health", filter: { category: ["health"] } },
        { label: "Wellness", filter: { category: ["wellness"] } },
      ],
      sortings: {
        name: { label: "Benefit" },
        monthlyCost: { label: "Monthly cost" },
        renewalDate: { label: "Renewal date" },
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

          const filtered = benefits
            .filter((b) =>
              catFilter.length === 0 ? true : catFilter.includes(b.category)
            )
            .filter((b) =>
              term === "" ? true : b.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (b, field) => {
            switch (field) {
              case "name":
                return b.name.toLowerCase()
              case "monthlyCost":
                return b.monthlyCost
              case "renewalDate":
                return b.renewalDate
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
      primaryActions: () => ({
        label: "New benefit",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "Edit", onClick: () => {} },
        { label: "Deactivate", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
