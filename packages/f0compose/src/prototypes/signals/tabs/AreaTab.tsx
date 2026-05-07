import type { DashboardItem } from "@factorialco/f0-react"

import {
  F0AnalyticsDashboard,
  F0Heading,
  F0Text,
  OneEmptyState,
} from "@factorialco/f0-react"
import { useMemo } from "react"

import { findEmployee } from "@/fixtures"

import type { SignalAreaId } from "../shared/types"

import { StatusPill } from "../components/StatusPill"
import { findArea } from "../shared/areas"
import { employeeSignals } from "../shared/data"

type Props = {
  areaId: SignalAreaId
  onSelectEmployee: (employeeId: string) => void
}

/**
 * Per-area drill-down. Top half is an `F0AnalyticsDashboard` with three
 * KPIs and a per-employee bar chart; below that we render a clickable list
 * (the dashboard's item types don't support row-level click handlers).
 */
export function AreaTab({ areaId, onSelectEmployee }: Props) {
  const area = findArea(areaId)

  const slice = useMemo(() => {
    if (!area) return []
    return employeeSignals
      .map((s) => {
        const a = s.areas.find((x) => x.areaId === areaId)
        if (!a || a.score < 0) return null
        return { employeeId: s.employeeId, area: a }
      })
      .filter((x): x is NonNullable<typeof x> => x !== null)
  }, [area, areaId])

  const items = useMemo<DashboardItem[]>(() => {
    if (!area || slice.length === 0) return []

    const scores = slice.map((s) => s.area.score)
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    const healthy = slice.filter((s) => s.area.status === "healthy").length
    const critical = slice.filter((s) => s.area.status === "critical").length
    const ranked = [...slice].sort((a, b) => b.area.score - a.area.score)

    return [
      {
        id: `${areaId}-avg`,
        title: `${area.shortName} average`,
        description: `Mean ${area.shortName.toLowerCase()} score across the team.`,
        type: "metric",
        colSpan: 4,
        x: 0,
        y: 0,
        rowSpan: 3,
        format: { type: "custom", suffix: "/100" },
        useDashboardFilters: false,
        fetchData: async () => ({ value: avg, previousValue: avg - 3 }),
      },
      {
        id: `${areaId}-healthy`,
        title: "Healthy",
        description: "Employees scoring 70 or above in this area.",
        type: "metric",
        colSpan: 4,
        x: 4,
        y: 0,
        rowSpan: 3,
        useDashboardFilters: false,
        fetchData: async () => ({
          value: healthy,
          previousValue: Math.max(0, healthy - 1),
        }),
      },
      {
        id: `${areaId}-critical`,
        title: "Critical",
        description: "Employees scoring under 40 in this area.",
        type: "metric",
        colSpan: 4,
        x: 8,
        y: 0,
        rowSpan: 3,
        useDashboardFilters: false,
        fetchData: async () => ({
          value: critical,
          previousValue: critical,
        }),
      },
      {
        id: `${areaId}-ranking`,
        title: `Score per employee — ${area.name}`,
        description: "Sorted from highest to lowest battery score.",
        type: "chart",
        colSpan: 12,
        x: 0,
        y: 3,
        rowSpan: 8,
        chart: { type: "bar", orientation: "horizontal" },
        useDashboardFilters: false,
        fetchData: async () => ({
          categories: ranked.map(
            (r) => findEmployee(r.employeeId)?.preferredName ?? r.employeeId
          ),
          series: [
            { name: area.shortName, data: ranked.map((r) => r.area.score) },
          ],
        }),
      },
    ]
  }, [area, areaId, slice])

  if (!area) return null

  if (!area.activated) {
    return (
      <OneEmptyState
        emoji="✨"
        title={`Activate ${area.name}`}
        description="Add Compensation Insights to see market benchmarks, pay-equity analytics and predictive raise recommendations across your team."
        actions={[
          { label: "Request demo", onClick: () => undefined },
          {
            label: "Learn more",
            onClick: () => undefined,
            variant: "outline",
          },
        ]}
      />
    )
  }

  if (slice.length === 0) {
    return (
      <OneEmptyState
        emoji="📊"
        title="No data yet"
        description="There aren't enough signals in this area to compute scores. Check back after the next sync."
      />
    )
  }

  const ranked = [...slice].sort((a, b) => b.area.score - a.area.score)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <F0Heading content={area.name} variant="heading" />
        <F0Text content={area.description} variant="description" />
      </div>

      <F0AnalyticsDashboard items={items} />

      <div className="flex flex-col gap-2">
        <F0Heading content="Signals by employee" variant="heading" />
        {ranked.map((r) => {
          const e = findEmployee(r.employeeId)
          if (!e) return null
          return (
            <button
              key={r.employeeId}
              type="button"
              onClick={() => onSelectEmployee(r.employeeId)}
              className="border-f1-border-secondary bg-f1-background hover:bg-f1-background-secondary flex items-center justify-between gap-3 rounded-md border p-3 text-left"
            >
              <div className="flex flex-col">
                <F0Text content={e.fullName} variant="label" />
                <F0Text content={r.area.headline} variant="description" />
              </div>
              <div className="flex items-center gap-3">
                <StatusPill status={r.area.status} />
                <F0Text content={`${r.area.score}/100`} variant="body" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
