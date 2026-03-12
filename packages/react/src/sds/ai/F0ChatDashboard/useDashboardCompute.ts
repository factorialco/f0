import { useCallback, useRef } from "react"

import type { ChatDashboardConfig } from "./types"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ChartResult = {
  categories: string[]
  series: Array<{ name: string; data: number[] }>
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

type ComputeResponse = {
  results: Record<string, ItemResult>
  filterOptions?: Record<string, string[]>
}

type ApiConfig = {
  baseUrl: string
  headers: Record<string, string>
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
    filterValues: Record<string, unknown[]>
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

  const fetchItem = useCallback(
    (
      itemId: string,
      filterValues: Record<string, unknown[]>
    ): Promise<ItemResult> => {
      const requestKey = `${refreshKeyRef.current}:${JSON.stringify(filterValues)}`

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

      // Convert filterValues to string[]
      const stringFilterValues: Record<string, string[]> = {}
      for (const [key, vals] of Object.entries(filterValues)) {
        if (Array.isArray(vals) && vals.length > 0) {
          stringFilterValues[key] = vals.map(String)
        }
      }

      const body = {
        fetchSpecs: cfg.fetchSpecs,
        items: cfg.items,
        filters: cfg.filters,
        filterValues:
          Object.keys(stringFilterValues).length > 0
            ? stringFilterValues
            : undefined,
      }

      const promise = fetch(`${api.baseUrl}/dashboard/compute`, {
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

  return { fetchItem, getFilterOptions }
}
