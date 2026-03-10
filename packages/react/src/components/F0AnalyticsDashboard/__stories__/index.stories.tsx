import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AnalyticsDashboard } from "../index"
import type { DashboardItem } from "../types"
import {
  fetchBarData,
  fetchDonutData,
  fetchFunnelData,
  fetchGaugeCustomRangeData,
  fetchGaugeData,
  fetchGaugeLowData,
  fetchHeatmapAttendanceData,
  fetchHeatmapData,
  fetchHorizontalBarData,
  fetchLineData,
  fetchMetricCurrency,
  fetchMetricDown,
  fetchMetricUp,
  fetchOnboardingFunnelData,
  fetchPieData,
  fetchRadarData,
  fetchRadarNoAreaData,
  fetchSmoothLineData,
  fetchStackedBarData,
  fetchStepLineData,
} from "./mockData"
import { dashboardFilters, dashboardPresets, mixedItems } from "./mockDataMixed"

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  component: F0AnalyticsDashboard,
  title: "F0AnalyticsDashboard",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0AnalyticsDashboard>

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Bar Charts
// ---------------------------------------------------------------------------

/**
 * **BarChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * { type: "bar", orientation?: "vertical" | "horizontal", stacked?: boolean }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { categories: string[], series: { name: string, data: (number | { value, target?, color? })[] }[] }
 * ```
 */
export const BarCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "bar-default",
        title: "Headcount by Department",
        description: "Default vertical bar with targets",
        type: "chart",
        chart: { type: "bar" },
        fetchData: fetchBarData,
      },
      {
        id: "bar-horizontal",
        title: "Satisfaction Scores",
        description: "Horizontal bar chart",
        type: "chart",
        chart: { type: "bar", orientation: "horizontal" },
        fetchData: fetchHorizontalBarData,
      },
      {
        id: "bar-stacked",
        title: "Cost Breakdown",
        description: "Stacked bar with value formatter",
        type: "chart",
        chart: {
          type: "bar",
          stacked: true,
          valueFormatter: (v: number) => `$${Math.round(v / 1_000)}k`,
        },
        fetchData: fetchStackedBarData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Line Charts
// ---------------------------------------------------------------------------

/**
 * **LineChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * { type: "line", lineType?: "linear" | "smooth" | "step", showArea?: boolean, showDots?: boolean }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { categories: string[], series: { name: string, data: (number | { value })[], color?, dashed? }[] }
 * ```
 */
export const LineCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "line-area-dots",
        title: "Revenue Trend",
        description: "Area fill with dots",
        type: "chart",
        chart: {
          type: "line",
          showArea: true,
          showDots: true,
          valueFormatter: (v: number) =>
            v >= 1_000_000
              ? `$${(v / 1_000_000).toFixed(1)}M`
              : `$${Math.round(v / 1_000)}k`,
        },
        fetchData: fetchLineData,
      },
      {
        id: "line-smooth",
        title: "Attrition Rate",
        description: "Smooth line with area",
        type: "chart",
        chart: {
          type: "line",
          lineType: "smooth",
          showArea: true,
          valueFormatter: (v: number) => `${v}%`,
        },
        fetchData: fetchSmoothLineData,
      },
      {
        id: "line-step",
        title: "Deployments",
        description: "Step line (no area)",
        type: "chart",
        chart: { type: "line", lineType: "step", showArea: false },
        fetchData: fetchStepLineData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Funnel Charts
// ---------------------------------------------------------------------------

/**
 * **FunnelChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * {
 *   type: "funnel",
 *   orient?: "horizontal" | "vertical",
 *   sort?: "descending" | "ascending" | "none",
 *   gap?: number,
 *   showConversion?: boolean,
 *   colorScale?: boolean,
 *   valueFormatter?: (v: number) => string,
 * }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { series: { name: string, data: { value: number, name: string, color? }[] } }
 * ```
 */
export const FunnelCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "funnel-horizontal",
        title: "Hiring Funnel",
        description: "Horizontal (default) with conversion labels",
        type: "chart",
        colSpan: 3,
        chart: {
          type: "funnel",
          valueFormatter: (v: number) => `${v} candidates`,
        },
        fetchData: fetchFunnelData,
      },
      {
        id: "funnel-vertical",
        title: "Onboarding Funnel",
        description: "Vertical with color scale",
        type: "chart",
        colSpan: 1,
        chart: { type: "funnel", orient: "vertical", colorScale: true },
        fetchData: fetchOnboardingFunnelData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Pie Charts
// ---------------------------------------------------------------------------

/**
 * **PieChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * { type: "pie", innerRadius?: number, showPercentage?: boolean, showLabels?: boolean }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { series: { name: string, data: { value: number, name: string, color? }[] } }
 * ```
 */
export const PieCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "pie-full",
        title: "Headcount by Department",
        description: "Full pie chart",
        type: "chart",
        chart: { type: "pie" },
        fetchData: fetchPieData,
      },
      {
        id: "pie-donut",
        title: "Gender Distribution",
        description: "Donut (innerRadius: 60) with percentages",
        type: "chart",
        chart: { type: "pie", innerRadius: 60, showPercentage: true },
        fetchData: fetchDonutData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Radar Charts
// ---------------------------------------------------------------------------

/**
 * **RadarChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * { type: "radar", showArea?: boolean, showLabels?: boolean }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { indicators: { name: string, max?: number }[], series: { name: string, data: number[], color? }[] }
 * ```
 */
export const RadarCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "radar-area",
        title: "Team Metrics",
        description: "Multi-series radar with area fill",
        type: "chart",
        chart: { type: "radar", showArea: true },
        fetchData: fetchRadarData,
      },
      {
        id: "radar-no-area",
        title: "Year-over-Year Comparison",
        description: "Radar without area fill",
        type: "chart",
        chart: { type: "radar", showArea: false },
        fetchData: fetchRadarNoAreaData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Gauge Charts
// ---------------------------------------------------------------------------

/**
 * **GaugeChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * { type: "gauge", min?: number, max?: number, color?: ChartColorToken, valueFormatter?: (v: number) => string }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { series: { value: number, name?: string } }
 * ```
 */
export const GaugeCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "gauge-default",
        title: "Hiring Goal",
        description: "Default gauge (0-100)",
        type: "chart",
        chart: { type: "gauge" },
        fetchData: fetchGaugeData,
      },
      {
        id: "gauge-custom-range",
        title: "Budget Used",
        description: "Custom range (0-200) with formatter",
        type: "chart",
        chart: {
          type: "gauge",
          min: 0,
          max: 200,
          valueFormatter: (v: number) => `${v}k €`,
        },
        fetchData: fetchGaugeCustomRangeData,
      },
      {
        id: "gauge-color",
        title: "Attrition Risk",
        description: "Custom color token",
        type: "chart",
        chart: { type: "gauge", color: "radical" },
        fetchData: fetchGaugeLowData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Heatmap Charts
// ---------------------------------------------------------------------------

/**
 * **HeatmapChartConfig** reference.
 *
 * Config shape:
 * ```ts
 * { type: "heatmap", min?: number, max?: number, showLabels?: boolean, showVisualMap?: boolean, valueFormatter?: (v: number) => string }
 * ```
 *
 * fetchData returns:
 * ```ts
 * { xCategories: string[], yCategories: string[], data: [xIndex: number, yIndex: number, value: number][] }
 * ```
 */
export const HeatmapCharts: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "heatmap-activity",
        title: "Office Activity",
        description: "Activity heatmap with labels",
        type: "chart",
        colSpan: 3,
        chart: { type: "heatmap", showLabels: true },
        fetchData: fetchHeatmapData,
      },
      {
        id: "heatmap-attendance",
        title: "Attendance Rate",
        description: "With visual map and percentage formatter",
        type: "chart",
        colSpan: 2,
        chart: {
          type: "heatmap",
          showVisualMap: true,
          valueFormatter: (v: number) => `${v}%`,
        },
        fetchData: fetchHeatmapAttendanceData,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Metrics
// ---------------------------------------------------------------------------

/**
 * **DashboardMetricItem** reference.
 *
 * Config shape:
 * ```ts
 * { type: "metric", format?: MetricFormat, decimals?: number }
 * ```
 *
 * MetricFormat variants:
 * - `{ type: "number" }` — plain number (default)
 * - `{ type: "currency", currency?: string }` — e.g. "EUR", "USD"
 * - `{ type: "percent" }` — percentage
 * - `{ type: "custom", prefix?, suffix? }` — custom formatting
 *
 * fetchData returns:
 * ```ts
 * { value: number, previousValue?: number }
 * ```
 */
export const Metrics: Story = {
  render: () => {
    const items: DashboardItem[] = [
      {
        id: "metric-number",
        title: "Total Headcount",
        type: "metric",
        fetchData: fetchMetricUp,
      },
      {
        id: "metric-currency",
        title: "Avg. Salary",
        type: "metric",
        format: { type: "currency", currency: "EUR" },
        fetchData: fetchMetricCurrency,
      },
      {
        id: "metric-percent",
        title: "Attrition Rate",
        type: "metric",
        format: { type: "percent" },
        decimals: 1,
        fetchData: fetchMetricDown,
      },
    ]
    return <F0AnalyticsDashboard items={items} />
  },
}

// ---------------------------------------------------------------------------
// Collection
// ---------------------------------------------------------------------------

/**
 * **DashboardCollectionItem** reference.
 *
 * Config shape:
 * ```ts
 * { type: "collection", createSource: (filters) => DataCollectionSourceDefinition, visualizations: [...] }
 * ```
 *
 * See the MixedDashboard story for a full collection example with filter reactivity.
 * This story uses the mixed dashboard's collection item standalone.
 */
export const Collection: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems.filter((item) => item.type === "collection")}
    />
  ),
}

// ---------------------------------------------------------------------------
// Mixed Dashboard
// ---------------------------------------------------------------------------

/**
 * Full dashboard with charts, metrics, collection, and filter reactivity.
 * Demonstrates all item types coexisting with shared dashboard filters.
 * Filtering by department/status updates both charts and the employee table.
 */
export const MixedDashboard: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
    />
  ),
}
