import { F0BigNumber, F0Box } from "@factorialco/f0-react"

import type { DashboardKpi } from "./dashboardMetrics"

/**
 * A single KPI tile: bordered card wrapping F0BigNumber, which renders the
 * label, the big value, and a trend chip computed from `comparison`.
 */
export function KpiCard({ kpi }: { kpi: DashboardKpi }) {
  return (
    <F0Box
      padding="md"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
    >
      <F0BigNumber
        label={kpi.label}
        value={
          kpi.units
            ? {
                value: kpi.value,
                units: kpi.units,
                unitsPosition: kpi.unitsPosition ?? "append",
              }
            : kpi.value
        }
        comparison={kpi.comparison}
        comparisonHint={kpi.comparisonHint}
        trend={{ show: true, invertStatus: kpi.invertStatus ?? false }}
      />
    </F0Box>
  )
}
