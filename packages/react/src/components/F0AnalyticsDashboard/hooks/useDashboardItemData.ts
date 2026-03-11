import { useCallback, useEffect, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

/**
 * Return type of the useDashboardItemData hook.
 */
export interface DashboardItemDataState<T> {
  /** Resolved data, undefined while loading or on error */
  data: T | undefined
  /** Whether a fetch is in progress */
  isLoading: boolean
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
 * via an incrementing request counter.
 */
export function useDashboardItemData<Filters extends FiltersDefinition, T>(
  fetchData: (filters: FiltersState<Filters>) => Promise<T>,
  filters: FiltersState<Filters>,
  enabled: boolean
): DashboardItemDataState<T> {
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>(undefined)

  // Incrementing counter to discard stale responses
  const requestIdRef = useRef(0)

  // Stable reference to the latest fetchData function
  const fetchDataRef = useRef(fetchData)
  fetchDataRef.current = fetchData

  // Stable reference to the latest filters
  const filtersRef = useRef(filters)
  filtersRef.current = filters

  const doFetch = useCallback(() => {
    const id = ++requestIdRef.current
    setIsLoading(true)
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
        }
      })
      .catch((err: unknown) => {
        if (id === requestIdRef.current) {
          setError(err instanceof Error ? err : new Error(String(err)))
          setIsLoading(false)
        }
      })
  }, [enabled])

  // Re-fetch whenever effective filters change (deep comparison via JSON).
  // When disabled, use a static key so filter changes don't trigger refetch.
  const filtersKey = enabled ? JSON.stringify(filters) : "disabled"

  useEffect(() => {
    doFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey, doFetch])

  const retry = useCallback(() => {
    doFetch()
  }, [doFetch])

  return { data, isLoading, error, retry }
}
