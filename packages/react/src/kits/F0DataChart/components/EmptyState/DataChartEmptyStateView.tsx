import { useI18n } from "@/lib/providers/i18n"

import type { F0DataChartEmptyStateProps, F0DataChartProps } from "../../types"

import { DataChartEmptyState } from "./EmptyState"

interface DataChartEmptyStateViewProps {
  /**
   * @deprecated No longer used — the empty state renders text only. Remove the prop.
   * @removeIn 5.0.0
   * @migration https://github.com/factorialco/f0/blob/main/packages/react/docs/migrations/f0-datachart-emptystate-charttype-removal.md
   */
  chartType?: F0DataChartProps["type"]
  emptyState?: F0DataChartEmptyStateProps
}

/**
 * Resolves an `F0DataChartEmptyStateProps` config (i18n defaults + overrides
 * + render-prop) into rendered output. Used internally by `F0DataChart` and
 * reused by dashboard wrappers when data is absent.
 */
export const DataChartEmptyStateView = ({
  emptyState,
}: DataChartEmptyStateViewProps) => {
  const i18n = useI18n()

  if (emptyState?.render) return <>{emptyState.render()}</>

  const defaults = i18n.dataChart.emptyState

  return (
    <DataChartEmptyState
      content={emptyState?.title ?? defaults.title}
      description={emptyState?.description ?? defaults.description}
    />
  )
}
