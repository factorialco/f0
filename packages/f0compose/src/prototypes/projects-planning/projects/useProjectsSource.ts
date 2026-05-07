import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Add } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import { projects, type Project } from "../shared/data"

export function useProjectsSource(
  onAssignHours: () => void,
  onOpenProject: (id: string) => void
) {
  return useDataCollectionSource<Project>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Estado",
          options: {
            options: [
              { value: "active", label: "Activo" },
              { value: "paused", label: "En pausa" },
              { value: "archived", label: "Archivado" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Activos", filter: { status: ["active"] } },
        { label: "En pausa", filter: { status: ["paused"] } },
        { label: "Archivados", filter: { status: ["archived"] } },
      ],
      sortings: {
        name: { label: "Proyecto" },
        client: { label: "Cliente" },
        tracked: { label: "Horas registradas" },
        rate: { label: "Tarifa" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = projects
            .filter((p) =>
              wanted.length === 0 ? true : wanted.includes(p.status)
            )
            .filter((p) =>
              term === "" ? true : p.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "name":
                return p.name.toLowerCase()
              case "client":
                return (p.client ?? "").toLowerCase()
              case "tracked":
                return p.trackedHours
              case "rate":
                return p.rate
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
        label: "Asignar horas",
        icon: Add,
        onClick: onAssignHours,
      }),
      itemOnClick: (item) => () => onOpenProject(item.id),
      itemActions: (item) => [
        {
          label: "Ver proyecto",
          onClick: () => onOpenProject(item.id),
        },
        { label: "Editar", onClick: () => {} },
        { type: "separator" as const },
        { label: "Archivar", onClick: () => {}, critical: true },
      ],
    },
    [onAssignHours, onOpenProject]
  )
}
