import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import { employees, type Employee } from "@/fixtures"
import { applySort } from "@/lib/applySort"

export function usePeopleSource(onOpenPerson: (id: string) => void) {
  return useDataCollectionSource<Employee>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        name: { label: "Nombre" },
        role: { label: "Puesto" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = employees.filter((e) =>
            term === "" ? true : e.fullName.toLowerCase().includes(term)
          )
          const sorted = applySort(filtered, sortings, (e, field) => {
            switch (field) {
              case "name":
                return e.fullName.toLowerCase()
              case "role":
                return e.role.toLowerCase()
              default:
                return null
            }
          })
          const perPage = pagination?.perPage ?? 25
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
      itemOnClick: (item) => () => onOpenPerson(item.id),
      itemActions: (item) => [
        { label: "Ver perfil", onClick: () => onOpenPerson(item.id) },
        { label: "Asignar a proyecto", onClick: () => {} },
      ],
    },
    [onOpenPerson]
  )
}
