import type { DashboardItem } from "@factorialco/f0-react"

import {
  F0AnalyticsDashboard,
  F0Alert,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import { useMemo } from "react"

import { findEmployee } from "@/fixtures"

import type { EmployeeSignals, SignalAreaStatus } from "../shared/types"

import { findArea, SIGNAL_AREAS } from "../shared/areas"
import { employeeSignals, signalAlerts, signalContests } from "../shared/data"

type Props = {
  onSelectEmployee: (employeeId: string) => void
}

function bucketize(scores: number[]): { name: string; value: number }[] {
  const buckets = [
    { name: "0–20", min: 0, max: 20 },
    { name: "21–40", min: 21, max: 40 },
    { name: "41–60", min: 41, max: 60 },
    { name: "61–80", min: 61, max: 80 },
    { name: "81–100", min: 81, max: 100 },
  ]
  return buckets.map((b) => ({
    name: b.name,
    value: scores.filter((s) => s >= b.min && s <= b.max).length,
  }))
}

function countByStatus(
  signals: EmployeeSignals[]
): Record<SignalAreaStatus, number> {
  const acc: Record<SignalAreaStatus, number> = {
    healthy: 0,
    warning: 0,
    critical: 0,
    no_data: 0,
    product_not_activated: 0,
  }
  signals.forEach((s) => {
    acc[s.overallStatus] += 1
  })
  return acc
}

/**
 * Overview tab — built on top of `F0AnalyticsDashboard`. The dashboard owns
 * the responsive grid, headers, item heights and per-item menus; we just
 * declare the items (metrics + charts) and ship sync `fetchData` returning
 * the precomputed data slices.
 *
 * Below the dashboard we render the alerts/contests panels with the
 * employee drill-down handler — these need access to `onSelectEmployee` and
 * don't fit the chart/metric/collection types of the dashboard.
 */
export function OverviewTab({ onSelectEmployee }: Props) {
  const items = useMemo<DashboardItem[]>(() => {
    const allScores = employeeSignals.map((s) => s.overall)
    const avg = Math.round(
      allScores.reduce((a, b) => a + b, 0) / Math.max(1, allScores.length)
    )
    const counts = countByStatus(employeeSignals)
    const histogram = bucketize(allScores)

    const top = [...employeeSignals]
      .sort((a, b) => b.overall - a.overall)
      .slice(0, 12)
    const activeAreas = SIGNAL_AREAS.filter((a) => a.activated)
    const heatmapData: [number, number, number][] = []
    top.forEach((s, y) => {
      activeAreas.forEach((area, x) => {
        const found = s.areas.find((ar) => ar.areaId === area.id)
        heatmapData.push([x, y, found?.score ?? 0])
      })
    })

    return [
      // Row 0 — KPI metrics
      {
        id: "kpi-avg",
        title: "Team average",
        description: "Composite battery score across all activated areas.",
        type: "metric",
        colSpan: 3,
        x: 0,
        y: 0,
        rowSpan: 3,
        format: { type: "custom", suffix: "/100" },
        useDashboardFilters: false,
        fetchData: async () => ({ value: avg, previousValue: avg - 4 }),
      },
      {
        id: "kpi-healthy",
        title: "Healthy",
        description: "Employees scoring 70 or above.",
        type: "metric",
        colSpan: 3,
        x: 3,
        y: 0,
        rowSpan: 3,
        useDashboardFilters: false,
        fetchData: async () => ({
          value: counts.healthy,
          previousValue: counts.healthy - 1,
        }),
      },
      {
        id: "kpi-warning",
        title: "Warning",
        description: "Employees in the 40–69 band.",
        type: "metric",
        colSpan: 3,
        x: 6,
        y: 0,
        rowSpan: 3,
        useDashboardFilters: false,
        fetchData: async () => ({
          value: counts.warning,
          previousValue: counts.warning + 1,
        }),
      },
      {
        id: "kpi-critical",
        title: "Critical",
        description: "Employees scoring under 40.",
        type: "metric",
        colSpan: 3,
        x: 9,
        y: 0,
        rowSpan: 3,
        useDashboardFilters: false,
        fetchData: async () => ({
          value: counts.critical,
          previousValue: counts.critical,
        }),
      },
      // Row 1 — distribution + status mix
      {
        id: "score-distribution",
        title: "Score distribution",
        description: "How the team splits across battery score ranges.",
        type: "chart",
        colSpan: 6,
        x: 0,
        y: 3,
        rowSpan: 7,
        chart: { type: "bar" },
        useDashboardFilters: false,
        fetchData: async () => ({
          categories: histogram.map((b) => b.name),
          series: [{ name: "Employees", data: histogram.map((b) => b.value) }],
        }),
      },
      {
        id: "status-mix",
        title: "Status mix",
        description: "Share of healthy / warning / critical employees.",
        type: "chart",
        colSpan: 6,
        x: 6,
        y: 3,
        rowSpan: 7,
        chart: { type: "pie", innerRadius: 50, showPercentage: true },
        useDashboardFilters: false,
        fetchData: async () => ({
          series: {
            name: "Status",
            data: [
              { name: "Healthy", value: counts.healthy, color: "grass" },
              { name: "Warning", value: counts.warning, color: "orange" },
              { name: "Critical", value: counts.critical, color: "red" },
            ],
          },
        }),
      },
      // Row 2 — heatmap full width
      {
        id: "heatmap",
        title: "Top 12 employees × area scores",
        description: "Cell color encodes the per-area battery score.",
        type: "chart",
        colSpan: 12,
        x: 0,
        y: 10,
        rowSpan: 10,
        chart: { type: "heatmap", showLabels: true, showVisualMap: true },
        useDashboardFilters: false,
        fetchData: async () => ({
          xCategories: activeAreas.map((a) => a.shortName),
          yCategories: top.map(
            (s) => findEmployee(s.employeeId)?.preferredName ?? s.employeeId
          ),
          data: heatmapData,
        }),
      },
    ]
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <F0AnalyticsDashboard items={items} />

      {/* Alerts + contests live outside the dashboard so they can dispatch
          the drill-down callback. The dashboard's item types don't fit a
          callback-driven alert list. */}
      <div className="flex flex-col gap-2">
        <F0Heading content="Active alerts" variant="heading" />
        {signalAlerts.length === 0 ? (
          <F0Text
            content="No active alerts. The team is in good shape."
            variant="description"
          />
        ) : (
          signalAlerts.slice(0, 6).map((alert) => {
            const e = findEmployee(alert.employeeId)
            const area = findArea(alert.areaId)
            return (
              <F0Alert
                key={alert.id}
                variant={alert.severity === "critical" ? "critical" : "warning"}
                title={`${e?.fullName ?? "Employee"} · ${area?.name ?? alert.areaId}`}
                description={alert.description}
                action={{
                  label: "View",
                  onClick: () => onSelectEmployee(alert.employeeId),
                }}
              />
            )
          })
        )}
      </div>

      {signalContests.length > 0 && (
        <div className="flex flex-col gap-2">
          <F0Heading content="Open contests" variant="heading" />
          {signalContests.map((c) => {
            const e = findEmployee(c.employeeId)
            const area = findArea(c.areaId)
            return (
              <F0Alert
                key={c.id}
                variant="info"
                title={`${e?.fullName ?? "Employee"} contested ${area?.name ?? c.areaId}`}
                description={c.reason}
                action={{
                  label: "Review",
                  onClick: () => onSelectEmployee(c.employeeId),
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
