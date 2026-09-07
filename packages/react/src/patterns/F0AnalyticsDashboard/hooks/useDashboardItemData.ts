import { useCallback, useEffect, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

/**
 * Return type of the useDashboardItemData hook.
 */
export interface DashboardItemDataState<T> {
  /** Resolved data, undefined while loading or on error */
  data: T | undefined
  /** Whether a fetch is in progress with nothing to show meanwhile */
  isLoading: boolean
  /** Whether a fetch is in progress while the previous result stays on screen */
  isRefreshing: boolean
  /** The most recent error, if any */
  error: Error | undefined
  /** Re-trigger the fetch with the current filters */
  retry: () => void
}

/**
 * Generic async data hook for a single dashboard item.
 *
 * Calls `fetchData(filters)` whenever the filters change, managing
 * loading / error / data states and protecting against stale responses
 * via an incrementing request counter. A `dataKey` change refetches the same
 * question, keeping the previous result on screen as `isRefreshing`.
 */
export function useDashboardItemData<Filters extends FiltersDefinition, T>(
  fetchData: (filters: FiltersState<Filters>) => Promise<T>,
  filters: FiltersState<Filters>,
  enabled: boolean,
  refreshKey = "",
  dataKey = ""
): DashboardItemDataState<T> {
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  // Incrementing counter to discard stale responses
  const requestIdRef = useRef(0)

  const dataRef = useRef(data)
  dataRef.current = data

  // Stable reference to the latest fetchData function
  const fetchDataRef = useRef(fetchData)
  fetchDataRef.current = fetchData

  // Stable reference to the latest filters
  const filtersRef = useRef(filters)
  filtersRef.current = filters

  const doFetch = useCallback(
    (soft = false) => {
      const id = ++requestIdRef.current
      // Nothing fetched yet means nothing to keep.
      const keepPrevious = soft && dataRef.current !== undefined
      setIsLoading(!keepPrevious)
      setIsRefreshing(keepPrevious)
      setError(undefined)

      const effectiveFilters = enabled
        ? filtersRef.current
        : ({} as FiltersState<Filters>)

      fetchDataRef
        .current(effectiveFilters)
        .then((result) => {
          // Only apply if this is still the latest request
          if (id === requestIdRef.current) {
            setData(result)
            setIsLoading(false)
            setIsRefreshing(false)
          }
        })
        .catch((err: unknown) => {
          if (id === requestIdRef.current) {
            setError(err instanceof Error ? err : new Error(String(err)))
            setIsLoading(false)
            setIsRefreshing(false)
          }
        })
    },
    [enabled]
  )

  // Re-fetch whenever effective dashboard filters or the caller's semantic
  // dependency changes. `fetchData` itself intentionally stays behind a ref:
  // consumers frequently recreate it while rendering, which must not produce
  // a request loop. Dashboard items pass their controlled item-filter state as
  // `refreshKey`, so rebuilding the closure after an item filter applies does
  // fetch fresh data without remounting the dashboard.
  // When disabled, use a static key so dashboard filter changes don't refetch.
  const filtersKey = enabled ? JSON.stringify(filters) : "disabled"

  const questionKey = `${filtersKey}|${refreshKey}`
  const previousQuestionKeyRef = useRef<string | null>(null)

  useEffect(() => {
    // Mount included, since the ref starts unset.
    const soft = previousQuestionKeyRef.current === questionKey
    previousQuestionKeyRef.current = questionKey
    doFetch(soft)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionKey, dataKey, doFetch])

  const retry = useCallback(() => {
    doFetch()
  }, [doFetch])

  return { data, isLoading, isRefreshing, error, retry }
}
