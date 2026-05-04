import { useI18n } from "@/lib/providers/i18n"

import type { F0DataChartEmptyStateProps, F0DataChartProps } from "../../types"

import { DataChartEmptyState } from "./EmptyState"

interface DataChartEmptyStateViewProps {
  /** The chart variant — drives the background skeleton illustration. */
  chartType: F0DataChartProps["type"]
  emptyState?: F0DataChartEmptyStateProps
}

/**
 * Resolves an `F0DataChartEmptyStateProps` config (i18n defaults + overrides
 * + render-prop) into rendered output. Used internally by `F0DataChart` and
 * reused by dashboard wrappers when data is absent.
 */
export const DataChartEmptyStateView = ({
  chartType,
  emptyState,
}: DataChartEmptyStateViewProps) => {
  const i18n = useI18n()

  if (emptyState?.render) return <>{emptyState.render()}</>

  const defaults = i18n.dataChart.emptyState

  return (
    <DataChartEmptyState
      chartType={chartType}
      content={emptyState?.title ?? defaults.title}
      description={emptyState?.description ?? defaults.description}
    />
  )
}
