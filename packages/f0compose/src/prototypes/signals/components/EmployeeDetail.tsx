import type { DashboardItem } from "@factorialco/f0-react"

import {
  F0AnalyticsDashboard,
  F0Button,
  F0Heading,
  F0Text,
  OneEmptyState,
} from "@factorialco/f0-react"
import { useMemo } from "react"

import { findEmployee } from "@/fixtures"

import type {
  AreaScore,
  EmployeeSignals,
  SignalAreaStatus,
} from "../shared/types"

import { findArea } from "../shared/areas"
import { StatusPill } from "./StatusPill"

type Props = {
  signals: EmployeeSignals
  onClose: () => void
}

const STATUS_COLOR_TOKEN: Record<
  SignalAreaStatus,
  "grass" | "orange" | "red" | "smoke"
> = {
  healthy: "grass",
  warning: "orange",
  critical: "red",
  no_data: "smoke",
  product_not_activated: "smoke",
}

function AreaRow({ area }: { area: AreaScore }) {
  const meta = findArea(area.areaId)
  if (!meta) return null
  const isInactive =
    area.status === "no_data" || area.status === "product_not_activated"
  return (
    <div className="border-f1-border-secondary bg-f1-background flex items-center justify-between gap-3 rounded-md border p-3">
      <div className="flex flex-col gap-0.5">
        <F0Text content={meta.name} variant="label" />
        <F0Text content={area.headline} variant="description" />
      </div>
      <div className="flex items-center gap-3">
        <StatusPill status={area.status} />
        <F0Text
          content={isInactive ? "—" : `${area.score}/100`}
          variant="body"
        />
      </div>
    </div>
  )
}

/**
 * Sidepanel body shown when a manager drills into an employee. Renders the
 * composite gauge, trend, and per-area radar via `F0AnalyticsDashboard` so
 * the layout, headers and resizing match the Overview tab.
 */
export function EmployeeDetail({ signals, onClose }: Props) {
  const employee = findEmployee(signals.employeeId)

  const items = useMemo<DashboardItem[]>(() => {
    if (!employee) return []
    const trendCategories = Array.from(
      { length: signals.trend.length },
      (_, i) => `M${i + 1}`
    )
    const activeAreas = signals.areas.filter((a) => a.score >= 0)

    return [
      {
        id: "composite-gauge",
        title: "Composite score",
        description: "Weighted across all activated areas.",
        type: "chart",
        colSpan: 6,
        x: 0,
        y: 0,
        rowSpan: 7,
        chart: {
          type: "gauge",
          color: STATUS_COLOR_TOKEN[signals.overallStatus],
          showValue: true,
          valueFormatter: (v: number) => `${v}/100`,
        },
        useDashboardFilters: false,
        fetchData: async () => ({
          series: { value: signals.overall, name: "Overall" },
        }),
      },
      {
        id: "trend-line",
        title: "12-month trend",
        description: "Composite score over the last 12 months.",
        type: "chart",
        colSpan: 6,
        x: 6,
        y: 0,
        rowSpan: 7,
        chart: { type: "line", showArea: true, showDots: true },
        useDashboardFilters: false,
        fetchData: async () => ({
          categories: trendCategories,
          series: [{ name: "Score", data: signals.trend }],
        }),
      },
      {
        id: "radar",
        title: "Area breakdown",
        description: "Battery score per activated area.",
        type: "chart",
        colSpan: 12,
        x: 0,
        y: 7,
        rowSpan: 8,
        chart: { type: "radar", showArea: true },
        useDashboardFilters: false,
        fetchData: async () => ({
          indicators: activeAreas.map((a) => ({
            name: findArea(a.areaId)?.shortName ?? a.areaId,
            max: 100,
          })),
          series: [{ name: "Current", data: activeAreas.map((a) => a.score) }],
        }),
      },
    ]
  }, [employee, signals])

  if (!employee) {
    return (
      <OneEmptyState
        emoji="🤷"
        title="Employee not found"
        description="The selected employee no longer exists in the directory."
      />
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <F0Heading content={employee.fullName} variant="heading" />
          <F0Text content={employee.role} variant="description" />
        </div>
        <StatusPill status={signals.overallStatus} />
      </div>

      <F0AnalyticsDashboard items={items} />

      <div className="flex flex-col gap-2">
        <F0Heading content="Signals by area" variant="heading" />
        {signals.areas.map((a) => (
          <AreaRow key={a.areaId} area={a} />
        ))}
      </div>

      <div className="flex justify-end pt-2">
        <F0Button variant="outline" label="Close" onClick={onClose} />
      </div>
    </div>
  )
}
