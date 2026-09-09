import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { ArrowCycle, Delete } from "@factorialco/f0-react/icons/app"

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { applySort } from "@/prototypes/home/hub/reference/lib/applySort"

import type { DocNode } from "../mocks/documents"

const STR = {
  en: {
    name: "Name",
    deletedOn: "Deleted on",
    restore: "Restore",
    deleteForever: "Delete forever",
  },
  es: {
    name: "Nombre",
    deletedOn: "Eliminado el",
    restore: "Restaurar",
    deleteForever: "Eliminar definitivamente",
  },
} as const

/**
 * useDataCollectionSource for Trash — the soft-deleted documents. Row actions
 * restore a document back to its folder or delete it forever (both mutate the
 * live store, so the Library re-renders too).
 */
export function useTrashSource(
  nodes: DocNode[],
  restoreNode: (id: string) => void,
  deleteForever: (id: string) => void,
  locale: AppLocale = "en"
) {
  const t = STR[locale]
  return useDataCollectionSource<DocNode>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        name: { label: t.name },
        deletedAt: { label: t.deletedOn },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 12,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()

          const filtered = nodes
            .filter((n) => n.deleted)
            .filter((n) =>
              term === "" ? true : n.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (n, field) => {
            switch (field) {
              case "name":
                return n.name.toLowerCase()
              case "deletedAt":
                return n.deletedAt ?? null
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
      itemActions: (item: DocNode) => [
        {
          label: t.restore,
          icon: ArrowCycle,
          onClick: () => restoreNode(item.id),
        },
        { type: "separator" },
        {
          label: t.deleteForever,
          icon: Delete,
          onClick: () => deleteForever(item.id),
          critical: true,
        },
      ],
    },
    [nodes, restoreNode, deleteForever, locale]
  )
}
