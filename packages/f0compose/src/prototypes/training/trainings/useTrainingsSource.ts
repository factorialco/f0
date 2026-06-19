import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { type Training, trainings } from "@/fixtures"
import { applySort } from "@/lib/applySort"

/**
 * useDataCollectionSource for the Trainings list table:
 * - Status filter + presets (Active / Draft / All)
 * - Type filter (Mandatory / Non-mandatory)
 * - Search by name or code
 * - Sort by name / participants
 * - Page-based pagination (20 / page)
 */
export function useTrainingsSource() {
  return useDataCollectionSource<Training>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
        type: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "mandatory", label: "Mandatory" },
              { value: "non-mandatory", label: "Non-mandatory" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        {
          label: "Expired participants",
          filter: { status: ["active"] },
        },
      ],
      sortings: {
        name: { label: "Name" },
        participants: { label: "Participants" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const typeFilter = Array.isArray(filters?.type)
            ? (filters.type as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = trainings
            .filter((t) =>
              statusFilter.length === 0 ? true : statusFilter.includes(t.status)
            )
            .filter((t) =>
              typeFilter.length === 0 ? true : typeFilter.includes(t.type)
            )
            .filter((t) =>
              term === ""
                ? true
                : t.name.toLowerCase().includes(term) ||
                  t.code.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (t, field) => {
            switch (field) {
              case "name":
                return t.name.toLowerCase()
              case "participants":
                return t.participants
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
        label: "Add training",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "View details", onClick: () => {} },
        { label: "Duplicate", onClick: () => {} },
        { label: "Show in catalog", onClick: () => {} },
        { type: "separator" },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
