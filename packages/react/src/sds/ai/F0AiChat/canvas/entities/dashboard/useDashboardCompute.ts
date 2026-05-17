import { useCallback, useRef } from "react"

import type {
  ChatDashboardConfig,
  ChatDashboardFilterDefinition,
  ChatDashboardNavigationFilterDefinition,
} from "./types"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ChartResult = {
  categories?: string[]
  indicators?: Array<{ name: string; max?: number }>
  series?:
    | Array<{ name: string; data: number[] }>
    | { name: string; data: Array<{ name: string; value: number }> }
    | { value: number; name?: string }
  xCategories?: string[]
  yCategories?: string[]
  data?: [number, number, number][]
  min?: number
  max?: number
}

type MetricResult = {
  value: number
}

type CollectionResult = {
  rows: Record<string, unknown>[]
  total: number
}

export type ItemResult = {
  chart?: ChartResult
  metric?: MetricResult
  collection?: CollectionResult
  error?: string
}

/**
 * Filter options per filter id:
 * - `in` filters → array of distinct string values
 * - `numericRange` filters → `{ min, max }` bounds
 */
export type DashboardFilterOptions = Record<
  string,
  string[] | { min: number; max: number }
>

type ComputeResponse = {
  results: Record<string, ItemResult>
  filterOptions?: DashboardFilterOptions
  /**
   * Filter definitions derived deterministically by the compute layer from
   * the SQL types of columns shared across dashboard datasets. The agent no
   * longer authors these — they live exclusively on the compute response.
   */
  filters?: Record<string, ChatDashboardFilterDefinition>
  navigationFilters?: Record<string, ChatDashboardNavigationFilterDefinition>
}

type ApiConfig = {
  baseUrl: string
  headers: Record<string, string>
  runtimeFetch?: typeof fetch
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Provides a `fetchItem` function that triggers a batch compute request
 * and returns the result for a specific item.
 *
 * Multiple concurrent calls with the same filter state share one request.
 * When filters change, a new request is made and the previous one is aborted.
 */
export function useDashboardCompute(
  config: ChatDashboardConfig,
  apiConfig: ApiConfig,
  refreshKey: number
): {
  fetchItem: (
    itemId: string,
    filterValues: Record<string, unknown[]>,
    navigationFilterValues?: Record<string, string[]>
  ) => Promise<ItemResult>
  getFilterOptions: () => DashboardFilterOptions | undefined
  getDerivedFilters: () => {
    filters?: Record<string, ChatDashboardFilterDefinition>
    navigationFilters?: Record<string, ChatDashboardNavigationFilterDefinition>
  }
} {
  // Track the in-flight request so concurrent fetchItem calls share it
  const inflightRef = useRef<{
    key: string
    promise: Promise<ComputeResponse>
    controller: AbortController
  } | null>(null)

  // Cache last response for filter options
  const lastResponseRef = useRef<ComputeResponse | undefined>()

  // Stable refs
  const configRef = useRef(config)
  configRef.current = config
  const apiConfigRef = useRef(apiConfig)
  apiConfigRef.current = apiConfig
  const refreshKeyRef = useRef(refreshKey)
  refreshKeyRef.current = refreshKey

  const fetchItem = useCallback(
    (
      itemId: string,
      filterValues: Record<string, unknown[]>,
      navigationFilterValues?: Record<string, string[]>
    ): Promise<ItemResult> => {
      const requestKey = `${refreshKeyRef.current}:${JSON.stringify(filterValues)}:${JSON.stringify(navigationFilterValues ?? {})}`

      // Reuse in-flight request if it matches
      if (inflightRef.current?.key === requestKey) {
        return inflightRef.current.promise.then(
          (res) => res.results[itemId] ?? { error: "No result for item" }
        )
      }

      // Cancel previous request
      inflightRef.current?.controller.abort()

      const controller = new AbortController()
      const cfg = configRef.current
      const api = apiConfigRef.current
      const runtimeFetch = api.runtimeFetch ?? fetch

      // Convert filterValues to string[]
      const stringFilterValues: Record<string, string[]> = {}
      for (const [key, vals] of Object.entries(filterValues)) {
        if (Array.isArray(vals) && vals.length > 0) {
          stringFilterValues[key] = vals.map(String)
        }
      }

      const hasNavValues =
        navigationFilterValues && Object.keys(navigationFilterValues).length > 0

      // Filter definitions are derived server-side from dataset column types;
      // the request only carries the user's active values, keyed by the
      // stable filter ids the compute response returns. `snapshot` and
      // `dateNavigatorColumn` shape which filters the compute layer derives,
      // so they travel with every request when set.
      const body = {
        fetchSpecs: cfg.fetchSpecs,
        items: cfg.items,
        filterValues:
          Object.keys(stringFilterValues).length > 0
            ? stringFilterValues
            : undefined,
        navigationFilterValues: hasNavValues
          ? navigationFilterValues
          : undefined,
        ...(cfg.snapshot ? { snapshot: true } : {}),
        ...(cfg.dateNavigatorColumn
          ? { dateNavigatorColumn: cfg.dateNavigatorColumn }
          : {}),
      }

      const promise = runtimeFetch(`${api.baseUrl}/dashboard/compute`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...api.headers,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      }).then(async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => "")
          throw new Error(`Dashboard compute failed: ${res.status} ${text}`)
        }
        const data = (await res.json()) as ComputeResponse
        lastResponseRef.current = data
        return data
      })

      inflightRef.current = { key: requestKey, promise, controller }

      return promise.then(
        (res) => res.results[itemId] ?? { error: "No result for item" }
      )
    },
    []
  )

  const getFilterOptions = useCallback(
    () => lastResponseRef.current?.filterOptions,
    []
  )

  const getDerivedFilters = useCallback(
    () => ({
      filters: lastResponseRef.current?.filters,
      navigationFilters: lastResponseRef.current?.navigationFilters,
    }),
    []
  )

  return { fetchItem, getFilterOptions, getDerivedFilters }
}
