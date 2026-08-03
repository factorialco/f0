import type { F0DataChartEmptyStateProps } from "@/kits/F0DataChart"

import { useI18n } from "@/lib/providers/i18n"

/**
 * Text-only empty state for dashboard widgets that have no chart to hand the
 * job to.
 *
 * Chart items delegate to the kit's `DataChartEmptyStateView` so they inherit
 * whatever it renders; that component draws a chart-type skeleton behind the
 * message, which is meaningless on a KPI tile. This resolves the same
 * `F0DataChartEmptyStateProps` contract — identical default copy, same
 * `render` escape hatch — and renders the message alone.
 */
export function DashboardEmptyState({
  emptyState,
}: {
  emptyState?: F0DataChartEmptyStateProps
}) {
  const i18n = useI18n()

  if (emptyState?.render) return <>{emptyState.render()}</>

  const defaults = i18n.dataChart.emptyState
  const description = emptyState?.description ?? defaults.description

  return (
    <div className="flex h-full w-full items-center justify-center px-4 pb-4">
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-lg font-medium text-f1-foreground">
          {emptyState?.title ?? defaults.title}
        </p>
        {description && (
          <p className="text-md max-w-sm text-f1-foreground-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
