import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react"

import { RecordType } from "@/hooks/datasource"
import { ChildrenResponse } from "@/hooks/datasource/types/nested.typings"

/**
 * How rows start out when the user has not touched them yet.
 *
 * - `true` / `false` — every row, or none (the default).
 * - a number — expand rows shallower than that depth, so `1` opens the
 *   top-level rows and reveals depth 1.
 * - a predicate — anything else, e.g. `(node) => node.type !== "role"`.
 *
 * The policy is re-evaluated per row rather than resolved into a set of ids up
 * front: rows evaluate it as they mount, so an expanded row's children evaluate
 * it in turn and the cascade falls out of the component tree. That works the
 * same whether the tree is already in memory or fetched lazily.
 */
export type DefaultExpandedPolicy<R extends RecordType> =
  | boolean
  | number
  | ((record: R, context: { depth: number }) => boolean)

interface NestedDataContextValue<R extends RecordType> {
  fetchedData: Record<string, ChildrenResponse<R>>
  updateFetchedData: (rowId: string, data: ChildrenResponse<R>) => void
  clearFetchedData: () => void
  /**
   * Rows the user has explicitly opened or closed, persisted here so they
   * survive a row unmounting (collapsing a parent) or the parent re-rendering
   * (e.g. a GraphQL refetch).
   *
   * Tri-state on purpose: an ABSENT entry means "the user has not decided", and
   * only then does `isExpandedByDefault` get a say. Recording the `false`
   * instead of deleting the entry is what keeps a deliberate collapse from
   * being immediately undone by the default policy.
   */
  expandedRowIds: Record<string, boolean>
  setRowExpanded: (rowId: string, expanded: boolean) => void
  isExpandedByDefault: (record: R, depth: number) => boolean
}

const NestedDataContext = createContext<
  NestedDataContextValue<RecordType> | undefined
>(undefined)

export const NestedDataProvider = <R extends RecordType>({
  children,
  defaultExpanded = false,
}: {
  children: ReactNode
  defaultExpanded?: DefaultExpandedPolicy<R>
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

  // Records the `false` rather than dropping the entry — see `expandedRowIds`.
  const setRowExpanded = useCallback((rowId: string, expanded: boolean) => {
    setExpandedRowIdsState((prev) => ({ ...prev, [rowId]: expanded }))
  }, [])

  const isExpandedByDefault = useCallback(
    (record: R, depth: number) => {
      if (typeof defaultExpanded === "function")
        return defaultExpanded(record, { depth })
      if (typeof defaultExpanded === "number") return depth < defaultExpanded
      return defaultExpanded
    },
    [defaultExpanded]
  )

  return (
    <NestedDataContext.Provider
      value={
        {
          fetchedData,
          updateFetchedData,
          clearFetchedData,
          expandedRowIds,
          setRowExpanded,
          isExpandedByDefault,
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
