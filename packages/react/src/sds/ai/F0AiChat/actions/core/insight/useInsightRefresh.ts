import { useCopilotContext } from "@copilotkit/react-core"
import { useCallback, useMemo, useRef } from "react"

import type { InsightQueryDataParams, InsightRefreshResult } from "./types"

type ApiConfig = {
  baseUrl: string
  headers: Record<string, string>
}

/**
 * Hook that provides a function to refresh a saved insight by replaying
 * its stored `queryDataParams` against the dashboard compute endpoint.
 *
 * This re-executes the original data-fetching tools and SQL query without
 * re-invoking the LLM, returning the raw rows so the consumer can derive
 * updated highlight values.
 *
 * @example
 * ```tsx
 * const { refreshInsight } = useInsightRefresh()
 *
 * const result = await refreshInsight({
 *   fetch: [{ toolId: "fetchTrainings", args: { status: "active" } }],
 *   query: "SELECT COUNT(*) as total FROM t_0",
 * })
 *
 * // result.rows = [{ total: 42 }]
 * ```
 */
export function useInsightRefresh() {
  const { copilotApiConfig } = useCopilotContext()

  const apiConfig: ApiConfig = useMemo(
    () => ({
      baseUrl: copilotApiConfig.chatApiEndpoint,
      headers: copilotApiConfig.headers as Record<string, string>,
    }),
    [copilotApiConfig.chatApiEndpoint, copilotApiConfig.headers]
  )

  const apiConfigRef = useRef(apiConfig)
  apiConfigRef.current = apiConfig

  const refreshInsight = useCallback(
    async (
      queryDataParams: InsightQueryDataParams
    ): Promise<InsightRefreshResult> => {
      const api = apiConfigRef.current
      const datasetId = "insight_refresh"

      const body = {
        fetchSpecs: {
          [datasetId]: {
            fetch: queryDataParams.fetch,
            query: queryDataParams.query,
          },
        },
        items: [
          {
            id: "insight_data",
            type: "collection" as const,
            computation: {
              datasetId,
            },
          },
        ],
      }

      const response = await fetch(`${api.baseUrl}/dashboard/compute`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...api.headers,
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        const text = await response.text().catch(() => "")
        throw new Error(`Insight refresh failed: ${response.status} ${text}`)
      }

      const data = (await response.json()) as {
        results: Record<
          string,
          { collection?: { rows: Record<string, unknown>[]; total: number } }
        >
      }

      const result = data.results?.insight_data?.collection
      if (!result) {
        throw new Error("Insight refresh returned no data")
      }

      return result
    },
    []
  )

  return { refreshInsight }
}
