import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
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
  /** Item ids that start expanded on first render */
  defaultExpandedIds?: Array<string | number>
}

const NestedDataContext = createContext<
  NestedDataContextValue<RecordType> | undefined
>(undefined)

export const NestedDataProvider = <R extends RecordType>({
  children,
  defaultExpandedIds,
}: {
  children: ReactNode
  defaultExpandedIds?: Array<string | number>
}) => {
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
    setExpandedRowIdsState((prev) => ({ ...prev, [rowId]: expanded }))
  }, [])

  return (
    <NestedDataContext.Provider
      value={
        {
          fetchedData,
          updateFetchedData,
          clearFetchedData,
          expandedRowIds,
          setRowExpanded,
          defaultExpandedIds,
        } as NestedDataContextValue<RecordType>
      }
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
