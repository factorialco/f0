import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import { roles, type Role } from "../shared/data"

export function useRolesSource() {
  return useDataCollectionSource<Role>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        name: { label: "Puesto" },
        rate: { label: "Tarifa" },
        people: { label: "Personas" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = roles.filter((r) =>
            term === "" ? true : r.name.toLowerCase().includes(term)
          )
          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "name":
                return r.name.toLowerCase()
              case "rate":
                return r.rate
              case "people":
                return r.peopleCount
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
        label: "Nuevo puesto",
        icon: Add,
        onClick: () => {},
      }),
      itemActions: () => [
        { label: "Editar tarifa", onClick: () => {} },
        { type: "separator" as const },
        { label: "Eliminar", onClick: () => {}, critical: true },
      ],
    },
    []
  )
}
