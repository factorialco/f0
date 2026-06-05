/**
 * Report modal — a single F0AnalyticsDashboard with the locations as presets
 * on top (All / Barcelona / Madrid / Berlin). Selecting a preset re-fetches
 * every widget, so the charts always reflect the chosen location (no stray
 * per-location legend). Layout, all within the dashboard:
 *   - Row 0: three KPI data points (avg pay, market avg, levels below market)
 *   - Row 1: per-level table (Mercer code, ranges, confidence)
 *   - Row 2: bar (you vs market by level) + gauge (overall positioning)
 *   - Row 3: line (where you sit in the market P25–P75 range)
 *
 * Numbers are illustrative — all sourced from `analysisData`.
 */
import { useMemo } from "react"
import { F0AnalyticsDashboard, F0Dialog } from "@factorialco/f0-react"
import type { DashboardItem } from "@factorialco/f0-react"

import {
  analysisLocations,
  confidenceVariant,
  formatCompact,
  type Confidence,
  type RoleAnalysis,
} from "../shared/analysisData"

type Props = {
  isOpen: boolean
  onClose: () => void
  analysis: RoleAnalysis
}

const reportFilters = {
  location: {
    type: "in",
    label: "Location",
    options: {
      options: analysisLocations.map((l) => ({ value: l, label: l })),
    },
  },
} as const

type ReportFilters = typeof reportFilters

const reportPresets = [
  { label: "All locations", filter: {} },
  ...analysisLocations.map((l) => ({ label: l, filter: { location: [l] } })),
]

function selectedLocations(filters: { location?: unknown }): string[] {
  const loc = filters?.location
  return Array.isArray(loc) && loc.length > 0
    ? (loc as string[])
    : analysisLocations
}

type TableRow = {
  id: string
  level: string
  mercerCode: string
  marketMedian: number
  marketP25: number
  marketP75: number
  yourMin: number
  yourMax: number
  confidence: Confidence
}

export function ReportModal({ isOpen, onClose, analysis }: Props) {
  const { role, rows, levelDetails } = analysis

  const locMedian = (level: string, loc: string): number | null => {
    const l = levelDetails[level]?.salariesByLocation.find(
      (s) => s.location === loc
    )
    return l ? Math.round((l.min + l.max) / 2) : null
  }
  // Your median for a level, averaged across the selected locations.
  const yourMed = (level: string, locs: string[]): number => {
    const ms = locs
      .map((loc) => locMedian(level, loc))
      .filter((v): v is number => v != null)
    return ms.length ? Math.round(ms.reduce((a, b) => a + b, 0) / ms.length) : 0
  }
  const avg = (xs: number[]) =>
    xs.length ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : 0

  const items = useMemo<DashboardItem<ReportFilters>[]>(
    () => [
      // ── Row 0: KPI data points ───────────────────────────────────
      {
        id: "avg-pay",
        title: "Average pay",
        description: "Your median pay, averaged across all levels.",
        type: "metric",
        format: { type: "currency", currency: "EUR" },
        colSpan: 4,
        x: 0,
        y: 0,
        rowSpan: 3,
        fetchData: async (filters) => {
          const locs = selectedLocations(filters)
          return { value: avg(rows.map((r) => yourMed(r.level, locs))) }
        },
      },
      {
        id: "market-avg",
        title: "Market average",
        description: "Mercer market median, averaged across all levels.",
        type: "metric",
        format: { type: "currency", currency: "EUR" },
        colSpan: 4,
        x: 4,
        y: 0,
        rowSpan: 3,
        fetchData: async () => ({
          value: avg(rows.map((r) => r.marketMedian)),
        }),
      },
      {
        id: "below-market",
        title: "Levels below market",
        description: "Levels whose median pay is under the market median.",
        type: "metric",
        format: { type: "number" },
        colSpan: 4,
        x: 8,
        y: 0,
        rowSpan: 3,
        fetchData: async (filters) => {
          const locs = selectedLocations(filters)
          let count = 0
          for (const r of rows) {
            if (yourMed(r.level, locs) < r.marketMedian) count += 1
          }
          return { value: count }
        },
      },
      // ── Row 1: per-level table (near the top) ────────────────────
      {
        id: "levels-table",
        title: "All levels",
        description: "Mercer code, market range and confidence per level.",
        type: "collection",
        colSpan: 12,
        x: 0,
        y: 3,
        rowSpan: 8,
        createSource: (filters) => {
          const locs = selectedLocations(filters)
          const records: TableRow[] = rows.map((r) => {
            let yourMin = r.yourMin
            let yourMax = r.yourMax
            if (locs.length === 1) {
              const l = levelDetails[r.level]?.salariesByLocation.find(
                (s) => s.location === locs[0]
              )
              if (l) {
                yourMin = l.min
                yourMax = l.max
              }
            }
            return {
              id: r.level,
              level: r.level,
              mercerCode: r.mercerCode,
              marketMedian: r.marketMedian,
              marketP25: r.marketP25,
              marketP75: r.marketP75,
              yourMin,
              yourMax,
              confidence: r.confidence,
            }
          })
          return {
            dataAdapter: {
              paginationType: "pages" as const,
              perPage: 10,
              fetchData: () => ({
                type: "pages" as const,
                records,
                total: records.length,
                currentPage: 1,
                perPage: 10,
                pagesCount: 1,
              }),
            },
          }
        },
        visualizations: [
          {
            type: "table" as const,
            options: {
              columns: [
                { id: "level", label: "Level", render: (i: TableRow) => i.level },
                {
                  id: "mercerCode",
                  label: "Mercer code",
                  render: (i: TableRow) => i.mercerCode,
                },
                {
                  id: "marketMedian",
                  label: "Market median",
                  render: (i: TableRow) => formatCompact(i.marketMedian),
                },
                {
                  id: "marketRange",
                  label: "Market range (P25–P75)",
                  render: (i: TableRow) =>
                    `${formatCompact(i.marketP25)} – ${formatCompact(i.marketP75)}`,
                },
                {
                  id: "yourRange",
                  label: "Your range",
                  render: (i: TableRow) =>
                    `${formatCompact(i.yourMin)} – ${formatCompact(i.yourMax)}`,
                },
                {
                  id: "confidence",
                  label: "Confidence",
                  render: (i: TableRow) => ({
                    type: "status" as const,
                    value: {
                      label: i.confidence,
                      status: confidenceVariant(i.confidence),
                    },
                  }),
                },
              ],
            },
          },
        ],
      },
      // ── Row 2: bar (you vs market) + gauge (overall) ─────────────
      {
        id: "by-level",
        title: "Your pay vs Mercer market, by level",
        description: "Median pay per level for the selected location.",
        type: "chart",
        chart: { type: "bar", valueFormatter: (v: number) => formatCompact(v) },
        colSpan: 8,
        x: 0,
        y: 11,
        rowSpan: 7,
        fetchData: async (filters) => {
          const locs = selectedLocations(filters)
          return {
            categories: rows.map((r) => r.level),
            series: [
              { name: "Your median", data: rows.map((r) => yourMed(r.level, locs)) },
              {
                name: "Mercer market median",
                data: rows.map((r) => r.marketMedian),
              },
            ],
          }
        },
      },
      {
        id: "positioning",
        title: "Overall vs market",
        description: "Your average pay as a % of the market average.",
        type: "chart",
        chart: {
          type: "gauge",
          min: 70,
          max: 130,
          valueFormatter: (v: number) => `${v}%`,
        },
        colSpan: 4,
        x: 8,
        y: 11,
        rowSpan: 7,
        fetchData: async (filters) => {
          const locs = selectedLocations(filters)
          const avgY = avg(rows.map((r) => yourMed(r.level, locs)))
          const avgM = avg(rows.map((r) => r.marketMedian))
          return {
            series: {
              value: avgM ? Math.round((avgY / avgM) * 100) : 100,
              name: "vs market",
            },
          }
        },
      },
      // ── Row 3: line — where you sit in the market range ──────────
      {
        id: "spread",
        title: "Where you sit in the market range",
        description: "Your median against the Mercer P25–median–P75 spread.",
        type: "chart",
        chart: { type: "line", valueFormatter: (v: number) => formatCompact(v) },
        colSpan: 12,
        x: 0,
        y: 18,
        rowSpan: 7,
        fetchData: async (filters) => {
          const locs = selectedLocations(filters)
          return {
            categories: rows.map((r) => r.level),
            series: [
              {
                name: "Market P25",
                data: rows.map((r) => r.marketP25),
                dashed: true,
              },
              {
                name: "Market median",
                data: rows.map((r) => r.marketMedian),
              },
              {
                name: "Market P75",
                data: rows.map((r) => r.marketP75),
                dashed: true,
              },
              { name: "Your median", data: rows.map((r) => yourMed(r.level, locs)) },
            ],
          }
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [analysis]
  )

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="xl"
      title={`Mercer Salary Benchmark — ${role.title}`}
      description="Your pay vs Mercer market data, all levels. Pick a location above. Numbers are illustrative."
      primaryAction={{ label: "Close", onClick: onClose }}
    >
      <F0AnalyticsDashboard
        filters={reportFilters}
        presets={reportPresets}
        items={items}
      />
    </F0Dialog>
  )
}
