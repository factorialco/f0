import { useCallback, useRef } from "react"

import type {
  ChatDashboardConfig,
  ChatDashboardFilterDefinition,
  ChatDashboardNavigationFilterDefinition,
} from "./types"
import { SNAPSHOT_DATE_FILTER_KEY } from "./snapshot"

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

      // Snapshot dashboards surface a synthetic `__snapshotDate` navigator
      // pill. Strip it from `navigationFilterValues` and promote its value
      // to the top-level `snapshotDate` field so the backend can rewrite
      // per-tool args (e.g. `tenureDateBefore` on `fetchEmployees`). Fall
      // back to the agent-supplied `cfg.snapshotDate` when the picker hasn't
      // been touched.
      let effectiveSnapshotDate: string | undefined = cfg.snapshotDate
      let cleanedNavValues: Record<string, string[]> | undefined =
        navigationFilterValues
      if (
        cfg.snapshot &&
        navigationFilterValues &&
        SNAPSHOT_DATE_FILTER_KEY in navigationFilterValues
      ) {
        const pillValue = navigationFilterValues[SNAPSHOT_DATE_FILTER_KEY]
        if (Array.isArray(pillValue) && pillValue[0]) {
          effectiveSnapshotDate = pillValue[0]
        }
        const { [SNAPSHOT_DATE_FILTER_KEY]: _stripped, ...rest } =
          navigationFilterValues
        cleanedNavValues = rest
      }

      const hasNavValues =
        cleanedNavValues && Object.keys(cleanedNavValues).length > 0

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
        navigationFilterValues: hasNavValues ? cleanedNavValues : undefined,
        ...(cfg.snapshot ? { snapshot: true } : {}),
        ...(cfg.snapshot && effectiveSnapshotDate
          ? { snapshotDate: effectiveSnapshotDate }
          : {}),
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

      // Drop the inflight entry once the request settles so a retry with the
      // same key isn't pinned to a failed promise. Key-guarded to avoid
      // clobbering a newer in-flight request that replaced ours mid-flight.
      promise.finally(() => {
        if (inflightRef.current?.key === requestKey) {
          inflightRef.current = null
        }
      })

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
