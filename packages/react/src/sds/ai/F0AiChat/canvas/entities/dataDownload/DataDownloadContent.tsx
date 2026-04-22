import { useCallback, useMemo } from "react"

import type { RecordType } from "@/hooks/datasource"

import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type { DataDownloadCanvasContent } from "../../../types"
import { useDataDownloadView } from "./DataDownloadContext"

const PER_PAGE = 25

export function DataDownloadContent({
  content,
}: {
  content: DataDownloadCanvasContent
  refreshKey?: number
}) {
  const { dataset } = content
  const { columns, rows, columnLabels } = dataset

  const sortings = useMemo(
    () =>
      Object.fromEntries(
        columns.map((col) => [col, { label: columnLabels?.[col] ?? col }])
      ),
    [columns, columnLabels]
  )

  const dataAdapter = useMemo(
    () => ({
      paginationType: "pages" as const,
      perPage: PER_PAGE,
      fetchData: (options: any) => {
        let filtered = [...rows] as RecordType[]

        // Search across all columns
        if (options.search?.trim()) {
          const term = (options.search as string).toLowerCase()
          filtered = filtered.filter((row) =>
            columns.some((col) => {
              const val = row[col]
              return val != null && String(val).toLowerCase().includes(term)
            })
          )
        }

        // Sort
        if (options.sortings?.length) {
          for (const { field, order } of [
            ...(options.sortings as { field: string; order: string }[]),
          ].reverse()) {
            filtered.sort((a, b) => {
              const aVal = a[field]
              const bVal = b[field]
              if (aVal == null && bVal == null) return 0
              if (aVal == null) return 1
              if (bVal == null) return -1
              if (typeof aVal === "number" && typeof bVal === "number") {
                return order === "asc" ? aVal - bVal : bVal - aVal
              }
              const cmp = String(aVal).localeCompare(String(bVal))
              return order === "asc" ? cmp : -cmp
            })
          }
        }

        // Paginate
        const page = (options.pagination?.currentPage as number) ?? 1
        const perPage = (options.pagination?.perPage as number) ?? PER_PAGE
        const start = (page - 1) * perPage
        const records = filtered.slice(start, start + perPage)

        return {
          records,
          total: filtered.length,
          perPage,
          type: "pages" as const,
          currentPage: page,
          pagesCount: Math.ceil(filtered.length / perPage),
        }
      },
    }),
    [rows, columns]
  )

  const { setViewState } = useDataDownloadView()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStateChange = useCallback(
    (state: any) => {
      const tableSettings = state.settings?.visualization?.table
      const hiddenColumns =
        (tableSettings?.hidden as string[] | undefined) ?? []
      const columnOrder = (tableSettings?.order as string[] | undefined) ?? []
      const sortings = state.sortings
        ? [state.sortings].flat().filter(Boolean)
        : []
      setViewState({
        search: state.search as string | undefined,
        sortings,
        hiddenColumns,
        columnOrder,
      })
    },
    [setViewState]
  )

  const source = useDataCollectionSource<RecordType>(
    {
      dataAdapter: dataAdapter,
      sortings,
      search: { enabled: true },
    },
    [rows, columns, sortings]
  )

  const visualizations = useMemo(
    () => [
      {
        type: "table" as const,
        options: {
          allowColumnHiding: true,
          allowColumnReordering: true,
          columns: columns.map((col) => ({
            id: col,
            label: columnLabels?.[col] ?? col,
            sorting: col,
            render: (item: RecordType) => {
              const value = item[col]
              return value == null ? "" : String(value)
            },
          })),
        },
      },
    ],
    [columns, columnLabels]
  )

  return (
    <div className="h-full flex-1 pt-5">
      <OneDataCollection
        fullHeight
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        source={source as any}
        visualizations={visualizations}
        storage={false}
        onStateChange={handleStateChange}
      />
    </div>
  )
}
