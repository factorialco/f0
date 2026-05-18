import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import type { SalaryBand } from "../compensationFixtures"
import { salaryBands } from "../compensationFixtures"
import { applySort } from "@/lib/applySort"

export function useSalaryBandsSource() {
  return useDataCollectionSource<SalaryBand>(
    {
      filters: {
        department: {
          type: "in",
          label: "Department",
          options: {
            options: [
              { value: "Engineering", label: "Engineering" },
              { value: "Design", label: "Design" },
              { value: "Sales", label: "Sales" },
              { value: "Product", label: "Product" },
            ],
          },
        },
      },
      currentFilters: {},
      sortings: {
        title: { label: "Role" },
        min: { label: "Min salary" },
        max: { label: "Max salary" },
        employees: { label: "Employees" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const deptFilter = Array.isArray(filters?.department)
            ? (filters.department as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = salaryBands
            .filter((b) =>
              deptFilter.length === 0 ? true : deptFilter.includes(b.department)
            )
            .filter((b) =>
              term === "" ? true : b.title.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (b, field) => {
            switch (field) {
              case "title":
                return b.title.toLowerCase()
              case "min":
                return b.minSalary
              case "max":
                return b.maxSalary
              case "employees":
                return b.employeeCount
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
        label: "New band",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "Edit", onClick: () => {} },
        { type: "separator" },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
