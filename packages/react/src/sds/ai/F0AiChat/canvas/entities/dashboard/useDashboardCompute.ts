import { useCallback, useRef } from "react"

import type { ChatDashboardConfig, DashboardFetchSpec } from "./types"

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
  /** Per-item failure message. When set, the other slices are absent. */
  error?: string
  /**
   * Stable reason classifier so consumers can branch on failure mode without
   * pattern-matching on `error` strings. Mirrors the agent contract:
   *   - `dataset_failed`: a fetch / SQL / materialize error in the recipe
   *   - `unrepairable`: the recipe references a tool the agent could not heal
   */
  reason?: "dataset_failed" | "unrepairable" | string
}

/**
 * Per-source failure surfaced by the agent's self-heal pass. Mirrors the
 * structure produced by `dashboard-recipe-repair` on the agent side.
 */
export type DashboardRepairFailure = {
  datasetId: string
  sourceIndex: number
  toolId: string
  reason: string
}

type ComputeResponse = {
  results: Record<string, ItemResult>
  filterOptions?: Record<string, string[]>
  /**
   * Present only when the agent's Phase 0 self-heal applied at least one
   * change. Consumers should swap `config.fetchSpecs` to this value and
   * re-persist the recipe so future opens skip the repair round-trip.
   */
  repairedSpecs?: Record<string, DashboardFetchSpec>
  /**
   * Present only when one or more sources could not be repaired. Items
   * pointing at the affected datasets will surface as
   * `{ error, reason: 'unrepairable' }` in `results`.
   */
  repairFailures?: DashboardRepairFailure[]
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
 *
 * When the server responds with `repairedSpecs` (the agent's self-heal pass
 * mutated the recipe), `onRepair` is invoked once per response so the caller
 * can persist the new recipe via the existing dashboard save path.
 */
export function useDashboardCompute(
  config: ChatDashboardConfig,
  apiConfig: ApiConfig,
  refreshKey: number,
  onRepair?: (
    repairedSpecs: Record<string, DashboardFetchSpec>,
    repairFailures: DashboardRepairFailure[] | undefined
  ) => void
): {
  fetchItem: (
    itemId: string,
    filterValues: Record<string, unknown[]>,
    navigationFilterValues?: Record<string, string[]>
  ) => Promise<ItemResult>
  getFilterOptions: () => Record<string, string[]> | undefined
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
  const onRepairRef = useRef(onRepair)
  onRepairRef.current = onRepair

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

      const body = {
        fetchSpecs: cfg.fetchSpecs,
        items: cfg.items,
        filters: cfg.filters,
        filterValues:
          Object.keys(stringFilterValues).length > 0
            ? stringFilterValues
            : undefined,
        navigationFilters: cfg.navigationFilters,
        navigationFilterValues: hasNavValues
          ? navigationFilterValues
          : undefined,
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
        // Notify the caller about agent-side recipe repairs so it can persist
        // the new recipe. Best-effort: a throw inside the callback must not
        // poison the per-item result resolution chained below.
        if (data.repairedSpecs && onRepairRef.current) {
          try {
            onRepairRef.current(data.repairedSpecs, data.repairFailures)
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn("[Dashboard] onRepair callback threw", err)
          }
        }
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

  return { fetchItem, getFilterOptions }
}
