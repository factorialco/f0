import { useEffect, useRef, useState } from "react"

import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import {
  BaseFetchOptions,
  DataAdapter,
  ItemNeighborsId,
  ItemNeighborsResponse,
} from "../types/fetch.typings"
import { RecordType } from "../types/records.typings"
import { SortingsStateMultiple } from "../types/sortings.typings"
import { DataError } from "../useData"
import { resolveItemNeighbors } from "./resolveItemNeighbors"

export interface UseItemNeighborsOptions<
  R extends RecordType,
  Filters extends FiltersDefinition,
> {
  /** The adapter that may implement the `fetchItemNeighbors` capability */
  dataAdapter: DataAdapter<R, Filters>
  /** Active item id. Null disables resolution (symbol ids cannot be used) */
  id: ItemNeighborsId | null
  /** Current filters — same values `fetchData` receives */
  filters: FiltersState<Filters>
  /** Current sortings — same composed array `fetchData` receives */
  sortings: SortingsStateMultiple
  /** Current search — same value `fetchData` receives */
  search?: string
  /**
   * Gate: resolve only while true (e.g. only when the snapshot path failed
   * to locate the item in the loaded window).
   * @default true
   */
  enabled?: boolean
  /**
   * Extends/transforms the options passed to `fetchItemNeighbors`, mirroring
   * `useData`'s option of the same name — e.g. OneDataCollection adds
   * `navigationFilters`. The extended options also key the response cache,
   * so extra context invalidates it correctly.
   */
  fetchParamsProvider?: <O extends BaseFetchOptions<Filters>>(options: O) => O
  onError?: (error: DataError) => void
}

export interface UseItemNeighborsReturn<R extends RecordType> {
  /** True when the adapter implements `fetchItemNeighbors` */
  isSupported: boolean
  /** Resolved neighbours for the CURRENT id+context, or null while unresolved */
  neighbors: ItemNeighborsResponse<R> | null
  isResolving: boolean
  error: DataError | null
}

/** JSON-stringify with sorted object keys, so logically equal filter states
 *  always produce the same request key. */
const stableStringify = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`
  }
  if (value !== null && typeof value === "object") {
    const record = value as Record<string, unknown>
    return `{${Object.keys(record)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`)
      .join(",")}}`
  }
  return JSON.stringify(value) ?? "undefined"
}

const CACHE_MAX_ENTRIES = 50

/**
 * Resolves the previous/next neighbours of an item through the adapter's
 * optional id-relative `fetchItemNeighbors` capability.
 *
 * Built for detail-page navigation on direct links: when the active item is
 * not in any loaded page window, this asks the backend for its immediate
 * neighbours (plus position/total for the counter) under the current
 * filters/sortings/search instead of walking pages.
 *
 * Semantics:
 * - `neighbors` only ever reflects the current `{id, filters, sortings,
 *   search}` — stale responses from superseded requests are dropped.
 * - Responses are cached per request key, so navigating back and forth
 *   between already-visited ids is instant. The cache is cleared whenever
 *   filters/sortings/search change; errors are never cached.
 * - When the capability is absent (`isSupported: false`), disabled, or the
 *   id is null, nothing is fetched and `neighbors` stays null — consumers
 *   keep their fallback behaviour.
 */
export function useItemNeighbors<
  R extends RecordType,
  Filters extends FiltersDefinition,
>({
  dataAdapter,
  id,
  filters,
  sortings,
  search,
  enabled = true,
  fetchParamsProvider,
  onError,
}: UseItemNeighborsOptions<R, Filters>): UseItemNeighborsReturn<R> {
  const isSupported = dataAdapter.fetchItemNeighbors !== undefined

  const baseOptions: BaseFetchOptions<Filters> = { filters, sortings, search }
  const resolvedOptions = fetchParamsProvider
    ? fetchParamsProvider(baseOptions)
    : baseOptions
  const contextKey = stableStringify(resolvedOptions)
  const requestKey = id === null ? null : `${String(id)}|${contextKey}`

  const [resolved, setResolved] = useState<{
    key: string
    neighbors: ItemNeighborsResponse<R>
  } | null>(null)
  const [isResolving, setIsResolving] = useState(false)
  const [error, setError] = useState<{
    key: string
    error: DataError
  } | null>(null)

  // Latest-value refs: the resolution effect is keyed on the request only.
  const adapterRef = useRef(dataAdapter)
  adapterRef.current = dataAdapter
  const onErrorRef = useRef(onError)
  onErrorRef.current = onError
  const optionsRef = useRef(resolvedOptions)
  optionsRef.current = resolvedOptions

  const latestKeyRef = useRef<string | null>(null)
  const cancelRef = useRef<(() => void) | null>(null)
  const cacheRef = useRef(new Map<string, ItemNeighborsResponse<R>>())
  const cacheContextRef = useRef(contextKey)

  // The cache only holds responses for the current filter/sort/search context
  if (cacheContextRef.current !== contextKey) {
    cacheContextRef.current = contextKey
    cacheRef.current.clear()
  }

  useEffect(() => {
    latestKeyRef.current = requestKey
    cancelRef.current?.()
    cancelRef.current = null

    if (!enabled || requestKey === null || id === null) {
      setIsResolving(false)
      return
    }

    const fetchItemNeighbors = adapterRef.current.fetchItemNeighbors
    if (!fetchItemNeighbors) {
      setIsResolving(false)
      return
    }

    const cached = cacheRef.current.get(requestKey)
    if (cached) {
      setResolved({ key: requestKey, neighbors: cached })
      setIsResolving(false)
      return
    }

    setIsResolving(true)
    const { promise, cancel } = resolveItemNeighbors<R>(
      fetchItemNeighbors({ ...optionsRef.current, id })
    )
    cancelRef.current = cancel

    promise.then(
      (response) => {
        if (latestKeyRef.current !== requestKey) return
        cacheRef.current.set(requestKey, response)
        if (cacheRef.current.size > CACHE_MAX_ENTRIES) {
          const oldestKey = cacheRef.current.keys().next().value
          if (oldestKey !== undefined) cacheRef.current.delete(oldestKey)
        }
        setResolved({ key: requestKey, neighbors: response })
        setIsResolving(false)
      },
      (cause) => {
        if (latestKeyRef.current !== requestKey) return
        const dataError: DataError = {
          message: "Error fetching item neighbors",
          cause,
        }
        setError({ key: requestKey, error: dataError })
        setIsResolving(false)
        onErrorRef.current?.(dataError)
      }
    )

    return () => {
      cancelRef.current?.()
      cancelRef.current = null
    }
  }, [requestKey, enabled, isSupported, id])

  const isCurrent = requestKey !== null && enabled && isSupported

  return {
    isSupported,
    neighbors:
      isCurrent && resolved?.key === requestKey ? resolved.neighbors : null,
    isResolving: isCurrent && isResolving,
    error: isCurrent && error?.key === requestKey ? error.error : null,
  }
}
