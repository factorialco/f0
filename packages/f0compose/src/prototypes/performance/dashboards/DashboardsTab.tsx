import { F0Box, F0DataChart } from "@factorialco/f0-react"

import { DashboardWidget } from "./DashboardWidget"
import { KpiCard } from "./KpiCard"
import {
  competencyRadar,
  dashboardKpis,
  feedbackByType,
  goalProgress,
  goalsByStatus,
  participationByCycle,
  ratingsDistribution,
} from "./dashboardMetrics"

const percentFormatter = (v: number) => `${v}%`

export function DashboardsTab() {
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {/* KPI row */}
      <F0Box
        display="grid"
        columns="1"
        sm={{ columns: "2" }}
        lg={{ columns: "4" }}
        gap="lg"
      >
        {dashboardKpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </F0Box>

      {/* Charts */}
      <F0Box display="grid" columns="1" lg={{ columns: "2" }} gap="lg">
        <DashboardWidget
          title="Participación por ciclo"
          description="Tasa de finalización de los últimos ciclos de review."
        >
          <F0DataChart
            type="line"
            categories={participationByCycle.categories}
            series={participationByCycle.series}
            showArea
            showDots
            valueFormatter={percentFormatter}
          />
        </DashboardWidget>

        <DashboardWidget
          title="Distribución de ratings"
          description="Reviews por calificación en el ciclo actual."
        >
          <F0DataChart
            type="bar"
            categories={ratingsDistribution.categories}
            series={ratingsDistribution.series}
            showLabels
          />
        </DashboardWidget>

        <DashboardWidget
          title="Objetivos por estado"
          description="Reparto de objetivos según su estado actual."
        >
          <F0DataChart
            type="pie"
            innerRadius={60}
            showPercentage
            series={goalsByStatus}
          />
        </DashboardWidget>

        <DashboardWidget
          title="Progreso por objetivo"
          description="Porcentaje de avance de cada objetivo."
        >
          <F0DataChart
            type="bar"
            orientation="horizontal"
            categories={goalProgress.categories}
            series={goalProgress.series}
            showLabels
            valueFormatter={percentFormatter}
          />
        </DashboardWidget>

        <DashboardWidget
          title="Competencias: actual vs objetivo"
          description="Nivel medio por categoría (1 novel – 4 experto)."
        >
          <F0DataChart
            type="radar"
            indicators={competencyRadar.indicators}
            series={competencyRadar.series}
            showArea
          />
        </DashboardWidget>

        <DashboardWidget
          title="Feedback por tipo"
          description="Volumen de feedback recibido por categoría."
        >
          <F0DataChart
            type="bar"
            categories={feedbackByType.categories}
            series={feedbackByType.series}
            showLabels
          />
        </DashboardWidget>
      </F0Box>
    </F0Box>
  )
}
