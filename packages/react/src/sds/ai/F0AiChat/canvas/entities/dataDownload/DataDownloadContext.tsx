import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
} from "react"

import type { DataDownloadDataset } from "../../../actions/core/dataDownload/types"
import type { DataDownloadCanvasContent } from "../../../types"

type ViewState = {
  search?: string
  sortings?: { field: string; order: string }[]
  hiddenColumns?: string[]
  columnOrder?: string[]
}

type DataDownloadContextValue = {
  content: DataDownloadCanvasContent
  setViewState: (state: ViewState) => void
  getFilteredDataset: () => DataDownloadDataset
}

const Context = createContext<DataDownloadContextValue | null>(null)

export function useDataDownloadView(): DataDownloadContextValue {
  const ctx = useContext(Context)
  if (!ctx)
    throw new Error(
      "useDataDownloadView must be used within DataDownloadProvider"
    )
  return ctx
}

export function DataDownloadProvider({
  content,
  children,
}: {
  content: DataDownloadCanvasContent
  children: ReactNode
}) {
  const viewStateRef = useRef<ViewState>({})

  const setViewState = useCallback((state: ViewState) => {
    viewStateRef.current = state
  }, [])

  const getFilteredDataset = useCallback((): DataDownloadDataset => {
    const { dataset } = content
    const { columns, rows, columnLabels } = dataset
    const { search, sortings, hiddenColumns, columnOrder } =
      viewStateRef.current

    // Filter by search
    let filtered = [...rows]
    if (search?.trim()) {
      const term = search.toLowerCase()
      filtered = filtered.filter((row) =>
        columns.some((col) => {
          const val = row[col]
          return val != null && String(val).toLowerCase().includes(term)
        })
      )
    }

    // Sort
    if (sortings?.length) {
      for (const { field, order } of [...sortings].reverse()) {
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

    // Exclude hidden columns and apply column order
    const hiddenSet = new Set(hiddenColumns ?? [])
    let visibleColumns = columns.filter((col) => !hiddenSet.has(col))

    if (columnOrder?.length) {
      const orderIndex = new Map(columnOrder.map((col, i) => [col, i]))
      visibleColumns = [...visibleColumns].sort((a, b) => {
        const ai = orderIndex.get(a) ?? Infinity
        const bi = orderIndex.get(b) ?? Infinity
        return ai - bi
      })
    }

    return {
      columns: visibleColumns,
      rows: filtered,
      columnLabels,
      totalCount: filtered.length,
    }
  }, [content])

  return (
    <Context.Provider value={{ content, setViewState, getFilteredDataset }}>
      {children}
    </Context.Provider>
  )
}
