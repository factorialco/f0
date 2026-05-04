import type { F0DataChartEmptyStateProps, F0DataChartProps } from "../../types"

import { DataChartEmptyState } from "./EmptyState"

interface DataChartEmptyStateViewProps {
  /** The chart variant — drives the background skeleton illustration. */
  chartType: F0DataChartProps["type"]
  emptyState?: F0DataChartEmptyStateProps
}

/**
 * Default copy for the chart empty state. Hardcoded (not i18n) to keep the
 * chart-specific phrasing decoupled from the broader collections empty-state
 * copy. Consumers can override via `emptyState.title` / `emptyState.description`.
 */
const DEFAULT_COPY = {
  title: "No data available",
  description: "Try a different date or fewer filters",
}

/**
 * Resolves an `F0DataChartEmptyStateProps` config (defaults + overrides +
 * render-prop) into rendered output. Used internally by `F0DataChart` and
 * reused by dashboard wrappers when data is absent.
 */
export const DataChartEmptyStateView = ({
  chartType,
  emptyState,
}: DataChartEmptyStateViewProps) => {
  if (emptyState?.render) return <>{emptyState.render()}</>

  return (
    <DataChartEmptyState
      chartType={chartType}
      content={emptyState?.title ?? DEFAULT_COPY.title}
      description={emptyState?.description ?? DEFAULT_COPY.description}
    />
  )
}
