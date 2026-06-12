import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

import { RecordType } from "@/hooks/datasource"
import { ChildrenResponse } from "@/hooks/datasource/types/nested.typings"

interface NestedDataContextValue<R extends RecordType> {
  fetchedData: Record<string, ChildrenResponse<R>>
  updateFetchedData: (rowId: string, data: ChildrenResponse<R>) => void
  clearFetchedData: () => void
  /** Persisted expansion state so rows stay open across parent re-renders (e.g. GraphQL refetch) */
  expandedRowIds: Record<string, boolean>
  setRowExpanded: (rowId: string, expanded: boolean) => void
}

const NestedDataContext = createContext<
  NestedDataContextValue<RecordType> | undefined
>(undefined)

/**
 * Creates the nested-data state (fetched children + expansion state).
 * Exposed so the table can own the state and read it (e.g. to include
 * expanded children in select-all), while still providing it through
 * NestedDataProvider via the `value` prop.
 */
export const useNestedDataState = <
  R extends RecordType,
>(): NestedDataContextValue<R> => {
  const [fetchedData, setFetchedData] = useState<
    Record<string, ChildrenResponse<R>>
  >({})

  const updateFetchedData = useCallback(
    (rowId: string, data: ChildrenResponse<R>) => {
      setFetchedData((prev) => ({
        ...prev,
        [rowId]: data,
      }))
    },
    []
  )

  const [expandedRowIds, setExpandedRowIdsState] = useState<
    Record<string, boolean>
  >({})

  const clearFetchedData = useCallback(() => {
    setFetchedData({})
    setExpandedRowIdsState({})
  }, [])

  const setRowExpanded = useCallback((rowId: string, expanded: boolean) => {
    setExpandedRowIdsState((prev) => {
      if (expanded) return { ...prev, [rowId]: true }
      const next = { ...prev }
      delete next[rowId]
      return next
    })
  }, [])

  return useMemo(
    () => ({
      fetchedData,
      updateFetchedData,
      clearFetchedData,
      expandedRowIds,
      setRowExpanded,
    }),
    [
      fetchedData,
      updateFetchedData,
      clearFetchedData,
      expandedRowIds,
      setRowExpanded,
    ]
  )
}

export const NestedDataProvider = <R extends RecordType>({
  children,
  value,
}: {
  children: ReactNode
  /** Externally-owned state (from useNestedDataState). When omitted, the provider owns its own. */
  value?: NestedDataContextValue<R>
}) => {
  const ownValue = useNestedDataState<R>()

  return (
    <NestedDataContext.Provider
      value={(value ?? ownValue) as NestedDataContextValue<RecordType>}
    >
      {children}
    </NestedDataContext.Provider>
  )
}

export const useNestedDataContext = <R extends RecordType>() => {
  const context = useContext(NestedDataContext)
  if (!context) {
    throw new Error(
      "useNestedDataContext must be used within NestedDataProvider"
    )
  }
  return context as NestedDataContextValue<R>
}
