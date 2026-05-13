import { useCallback, useEffect, useRef, useState } from "react"

import type { DynamicCanvasContent, VisualizationApiConfig } from "../types"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type VisualizationComputeResponse = {
  rows: Record<string, unknown>[]
  error?: string
}

export type VisualizationComputeState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; rows: Record<string, unknown>[] }
  | { status: "error"; message: string }

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Fetches raw rows for a dynamic visualization from the server-side compute
 * endpoint, or returns inline data immediately when no `datasetId` is set.
 *
 * Follows the same pattern as `useDashboardCompute`:
 * - `datasetId` + `fetchSpecs` → POST to compute endpoint
 * - `data` inline → return immediately
 * - Caches the last successful response to avoid refetching on re-renders
 */
export function useVisualizationCompute(
  content: DynamicCanvasContent
): VisualizationComputeState {
  const [state, setState] = useState<VisualizationComputeState>({
    status: "idle",
  })

  const abortRef = useRef<AbortController | null>(null)
  const cacheRef = useRef<Map<string, Record<string, unknown>[]> | undefined>()

  const compute = useCallback(async () => {
    // Inline data path — no server round-trip needed
    if (content.data && !content.datasetId) {
      setState({ status: "success", rows: content.data })
      return
    }

    // Server path — datasetId is required
    if (!content.datasetId) {
      setState({
        status: "error",
        message: "No data source provided (datasetId or data required)",
      })
      return
    }

    if (!content.fetchSpecs || !content.apiConfig) {
      // Fall back to inline data if available
      if (content.data) {
        setState({ status: "success", rows: content.data })
        return
      }
      setState({
        status: "error",
        message:
          "Dataset reference requires fetchSpecs and apiConfig (or inline data fallback)",
      })
      return
    }

    const cacheKey = `${content.datasetId}:${JSON.stringify(content.spec)}`
    const cached = cacheRef.current?.get(cacheKey)
    if (cached) {
      setState({ status: "success", rows: cached })
      return
    }

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    setState({ status: "loading" })

    const api: VisualizationApiConfig = content.apiConfig
    const runtimeFetch = api.runtimeFetch ?? fetch

    const body = {
      datasetId: content.datasetId,
      fetchSpecs: content.fetchSpecs,
      spec: content.spec,
    }

    try {
      const res = await runtimeFetch(`${api.baseUrl}/visualization/compute`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...api.headers,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      })

      if (!res.ok) {
        const text = await res.text().catch(() => "")
        throw new Error(`Compute failed: ${res.status} ${text}`)
      }

      const result = (await res.json()) as VisualizationComputeResponse

      if (result.error) {
        throw new Error(result.error)
      }

      const rows = result.rows ?? []

      if (!cacheRef.current) {
        cacheRef.current = new Map()
      }
      cacheRef.current.set(cacheKey, rows)

      setState({ status: "success", rows })
    } catch (err) {
      // AbortError is expected on unmount or when a new request starts
      if (err instanceof Error && err.name === "AbortError") return

      const message = err instanceof Error ? err.message : "Unknown error"

      // Fall back to inline data if the compute fails
      if (content.data) {
        setState({ status: "success", rows: content.data })
        return
      }

      setState({ status: "error", message })
    }
  }, [content])

  useEffect(() => {
    void compute()
    return () => {
      abortRef.current?.abort()
    }
  }, [compute])

  return state
}
