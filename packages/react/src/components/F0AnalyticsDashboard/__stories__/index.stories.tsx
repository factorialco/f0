import type { Meta, StoryObj } from "@storybook/react-vite"

import type { DashboardItem } from "../types"

import { F0AnalyticsDashboard } from "../index"
import {
  chartItems,
  dashboardFilters,
  dashboardPresets,
  loadingItems,
  mixedItems,
} from "./mockData"

// ---------------------------------------------------------------------------
// Simple — fully self-contained example a developer can copy-paste.
// Everything is defined inline so clicking "Code" shows the full pattern.
// ---------------------------------------------------------------------------

function SimpleStory() {
  // 1. Define filters ----------------------------------------------------------
  const filters = {
    region: {
      type: "in" as const,
      label: "Region",
      options: {
        options: [
          { value: "EMEA", label: "EMEA" },
          { value: "APAC", label: "APAC" },
          { value: "AMER", label: "AMER" },
        ],
      },
    },
  }

  type Filters = typeof filters

  // 2. Static data — in a real app this would come from an API ----------------
  const totalRevenueByRegion: Record<string, number> = {
    EMEA: 750_000,
    APAC: 590_000,
    AMER: 1_070_000,
  }

  const previousRevenueByRegion: Record<string, number> = {
    EMEA: 680_000,
    APAC: 620_000,
    AMER: 980_000,
  }

  const customerCountByRegion: Record<string, number> = {
    EMEA: 2,
    APAC: 1,
    AMER: 3,
  }

  const revenueByRegion: Record<string, number[]> = {
    EMEA: [120, 200, 150, 280],
    APAC: [90, 160, 130, 210],
    AMER: [200, 280, 240, 350],
  }

  const usersByRegion: Record<string, number[]> = {
    EMEA: [400, 450, 420, 500, 570, 560],
    APAC: [350, 380, 360, 420, 480, 470],
    AMER: [450, 520, 500, 580, 670, 660],
  }

  const allCustomers = [
    { id: "1", name: "Acme Corp", revenue: 84_000, region: "AMER" },
    { id: "2", name: "Globex Inc", revenue: 72_500, region: "EMEA" },
    { id: "3", name: "Initech", revenue: 63_200, region: "EMEA" },
    { id: "4", name: "Umbrella Ltd", revenue: 55_000, region: "APAC" },
    { id: "5", name: "Wonka Co", revenue: 48_900, region: "AMER" },
    { id: "6", name: "Stark Industries", revenue: 91_000, region: "AMER" },
  ]

  // Helper — returns selected regions or all if nothing selected
  const activeRegions = (f: { region?: string[] }) => {
    const r = f.region
    return r && r.length > 0 ? r : ["EMEA", "APAC", "AMER"]
  }

  const sumByRegion = (
    f: { region?: string[] },
    data: Record<string, number>
  ) => activeRegions(f).reduce((acc, r) => acc + (data[r] ?? 0), 0)

  // 3. Define items — fetchData uses the filter to slice the data -------------
  const items: DashboardItem<Filters>[] = [
    // --- Row 1: three KPI metrics ---
    {
      id: "total-revenue",
      title: "Total Revenue",
      type: "metric",
      format: { type: "currency", currency: "EUR" },
      fetchData: (f) =>
        Promise.resolve({
          value: sumByRegion(f, totalRevenueByRegion),
          previousValue: sumByRegion(f, previousRevenueByRegion),
        }),
    },
    {
      id: "total-customers",
      title: "Customers",
      type: "metric",
      fetchData: (f) =>
        Promise.resolve({
          value: sumByRegion(f, customerCountByRegion),
        }),
    },
    {
      id: "growth",
      title: "Revenue Growth",
      type: "metric",
      format: { type: "percent" },
      decimals: 1,
      fetchData: (f) => {
        const current = sumByRegion(f, totalRevenueByRegion)
        const previous = sumByRegion(f, previousRevenueByRegion)
        const growth =
          previous > 0 ? ((current - previous) / previous) * 100 : 0
        return Promise.resolve({ value: growth })
      },
    },
    // --- Row 2: charts ---
    {
      id: "revenue",
      title: "Revenue by Region",
      description: "Quarterly revenue breakdown",
      type: "chart",
      colSpan: 1,
      chart: { type: "bar" },
      fetchData: (f) =>
        Promise.resolve({
          categories: ["Q1", "Q2", "Q3", "Q4"],
          series: activeRegions(f).map((region) => ({
            name: region,
            data: revenueByRegion[region] ?? [],
          })),
        }),
    },
    {
      id: "users",
      title: "Monthly Active Users",
      description: "Monthly active users by region",
      type: "chart",
      colSpan: 2,
      chart: { type: "line", showArea: true, showDots: true },
      fetchData: (f) =>
        Promise.resolve({
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          series: activeRegions(f).map((region) => ({
            name: region,
            data: usersByRegion[region] ?? [],
          })),
        }),
    },
    // --- Row 3: funnel ---
    {
      id: "sales-funnel",
      title: "Sales Pipeline",
      description: "Conversion through sales stages",
      type: "chart",
      colSpan: 3,
      chart: {
        type: "funnel",
        valueFormatter: (v: number) =>
          v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`,
      },
      fetchData: (f) => {
        const regions = activeRegions(f)
        const multiplier = regions.length / 3
        return Promise.resolve({
          series: {
            name: "Sales Pipeline",
            data: [
              {
                value: Math.round(850_000 * multiplier),
                name: "Prospects",
              },
              {
                value: Math.round(520_000 * multiplier),
                name: "Qualified",
              },
              {
                value: Math.round(280_000 * multiplier),
                name: "Proposal",
              },
              {
                value: Math.round(150_000 * multiplier),
                name: "Negotiation",
              },
              {
                value: Math.round(95_000 * multiplier),
                name: "Closed Won",
              },
            ],
          },
        })
      },
    },
    {
      id: "customers",
      title: "Top Customers",
      type: "collection",
      colSpan: 3,
      createSource: (f) => ({
        dataAdapter: {
          fetchData: () => {
            const regions = activeRegions(f)
            const filtered = allCustomers.filter((c) =>
              regions.includes(c.region)
            )
            return Promise.resolve({ records: filtered })
          },
        },
      }),
      visualizations: [
        {
          type: "table" as const,
          options: {
            columns: [
              {
                id: "name",
                label: "Customer",
                render: (r: { name: string }) => r.name,
              },
              {
                id: "revenue",
                label: "Revenue",
                render: (r: { revenue: number }) =>
                  `$${r.revenue.toLocaleString()}`,
              },
              {
                id: "region",
                label: "Region",
                render: (r: { region: string }) => r.region,
              },
            ],
          },
        },
      ],
    },
  ]

  // 4. Render — just filters + items, no boilerplate -------------------------
  return <F0AnalyticsDashboard filters={filters} items={items} />
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "F0AnalyticsDashboard",
  tags: ["autodocs", "experimental"],
} satisfies Meta

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/**
 * Fully self-contained example — everything is defined inline so clicking
 * "Show code" reveals the complete usage pattern. Includes one simple
 * filter (Region), two charts (bar + line), a funnel, and one collection table.
 */
export const Simple: Story = {
  render: () => <SimpleStory />,
}

/**
 * Chart widgets including bar, line, and funnel in a 3-column grid.
 * Use the filter bar at the top to filter by department or status —
 * the chart data will update in response to the applied filters.
 */
export const DashboardWithCharts: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={chartItems}
    />
  ),
}

/**
 * A mix of chart widgets (bar, line, funnel) and a paginated data collection table.
 * Demonstrates charts and collections coexisting with shared dashboard filters.
 * Filtering by department will update both the charts and the employee table.
 */
export const DashboardMixed: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
    />
  ),
}

/**
 * Dashboard with intentionally slow-loading chart items (10s delay).
 * Demonstrates the skeleton loading state for chart widgets.
 */
export const DashboardLoading: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={loadingItems}
    />
  ),
}
