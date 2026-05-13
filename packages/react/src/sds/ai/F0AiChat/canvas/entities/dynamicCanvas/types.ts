import type { CanvasContentBase } from "../../../types"

/**
 * Describes how to obtain a dataset server-side. Mirrored from the dashboard
 * fetch-spec pattern so `queryData` + `displayVisualization` compose the same
 * way as `queryData` + `displayDashboard`.
 */
export interface VisualizationFetchSpec {
  fetch: Array<{ toolId: string; args: Record<string, unknown> }>
  query: string | null
  columnLabels?: Record<string, string>
}

export type VisualizationFetchSpecs = Record<string, VisualizationFetchSpec>

export interface VisualizationApiConfig {
  baseUrl: string
  headers: Record<string, string>
  runtimeFetch?: typeof fetch
}

export type DynamicCanvasContent = CanvasContentBase & {
  type: "dynamicCanvas"
  renderer: string
  specVersion?: string
  spec: Record<string, unknown>

  /**
   * Inline data — used for Storybook, tests, and direct agent emissions
   * when the dataset is small. If `datasetId` is also present, the
   * compute hook prefers the server path and falls back to inline data
   * only when the fetch fails.
   */
  data?: Record<string, unknown>[]

  /**
   * Dataset reference — the production path. The agent stores data via
   * `queryData` (which writes to DuckDB and populates `fetchSpecs` in
   * requestContext) then emits `datasetId` here. The frontend fetches
   * raw rows from the compute endpoint.
   */
  datasetId?: string

  /**
   * Fetch specs resolved by the agent tool from requestContext. Required
   * when `datasetId` is set — the frontend uses this to hydrate the
   * dataset server-side before running the layout algorithm.
   */
  fetchSpecs?: VisualizationFetchSpecs

  /** API configuration for the compute endpoint. */
  apiConfig?: VisualizationApiConfig
}
