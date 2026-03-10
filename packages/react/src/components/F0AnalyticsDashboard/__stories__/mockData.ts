import type {
  F0DataChartFunnelSeries,
  F0DataChartPieSeries,
} from "../../F0DataChart"
import type { DashboardChartData, DashboardMetricData } from "../types"

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const resolve = <T>(data: T, ms = 300): Promise<T> =>
  new Promise((r) => setTimeout(() => r(data), ms))

// ---------------------------------------------------------------------------
// Bar data
// ---------------------------------------------------------------------------

export function fetchBarData(): Promise<DashboardChartData> {
  return resolve({
    categories: ["Engineering", "Product", "Design", "Marketing"],
    series: [
      {
        name: "Headcount",
        data: [
          { value: 145, target: 160 },
          { value: 89, target: 100 },
          { value: 67, target: 80 },
          { value: 42, target: 50 },
        ],
      },
    ],
  })
}

export function fetchStackedBarData(): Promise<DashboardChartData> {
  return resolve({
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      {
        name: "Engineering",
        data: [320_000, 340_000, 310_000, 350_000],
      },
      {
        name: "Product",
        data: [180_000, 190_000, 175_000, 195_000],
      },
      {
        name: "Design",
        data: [120_000, 130_000, 125_000, 135_000],
      },
      {
        name: "Marketing",
        data: [95_000, 100_000, 92_000, 105_000],
      },
    ],
  })
}

export function fetchHorizontalBarData(): Promise<DashboardChartData> {
  return resolve({
    categories: ["Engineering", "Product", "Design", "Marketing"],
    series: [
      {
        name: "Satisfaction",
        data: [4.2, 3.8, 4.5, 3.9],
      },
    ],
  })
}

// ---------------------------------------------------------------------------
// Line data
// ---------------------------------------------------------------------------

export function fetchLineData(): Promise<DashboardChartData> {
  return resolve({
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [
          4_200_000, 5_100_000, 4_800_000, 6_300_000, 7_100_000, 6_900_000,
        ],
      },
      {
        name: "Target",
        data: [
          5_000_000, 5_000_000, 5_000_000, 6_000_000, 6_000_000, 6_000_000,
        ],
      },
    ],
  })
}

export function fetchSmoothLineData(): Promise<DashboardChartData> {
  return resolve({
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Attrition %",
        data: [2.1, 1.8, 2.5, 1.9, 2.3, 2.0],
      },
    ],
  })
}

export function fetchStepLineData(): Promise<DashboardChartData> {
  return resolve({
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Deployments",
        data: [3, 3, 5, 5, 2],
      },
    ],
  })
}

// ---------------------------------------------------------------------------
// Funnel data
// ---------------------------------------------------------------------------

export function fetchFunnelData(): Promise<DashboardChartData> {
  return resolve({
    series: {
      name: "Hiring Pipeline",
      data: [
        { value: 500, name: "Applied" },
        { value: 325, name: "Phone Screen" },
        { value: 175, name: "Technical" },
        { value: 90, name: "Onsite" },
        { value: 50, name: "Offer" },
        { value: 30, name: "Hired" },
      ],
    } as F0DataChartFunnelSeries,
  })
}

export function fetchOnboardingFunnelData(): Promise<DashboardChartData> {
  return resolve({
    series: {
      name: "Onboarding",
      data: [
        { value: 100, name: "Invited" },
        { value: 85, name: "Registered" },
        { value: 72, name: "Profile Complete" },
        { value: 58, name: "First Task" },
        { value: 45, name: "Active (30d)" },
      ],
    } as F0DataChartFunnelSeries,
  })
}

// ---------------------------------------------------------------------------
// Pie data
// ---------------------------------------------------------------------------

export function fetchPieData(): Promise<DashboardChartData> {
  return resolve({
    series: {
      name: "Headcount by Department",
      data: [
        { value: 120, name: "Engineering" },
        { value: 45, name: "Product" },
        { value: 60, name: "Sales" },
        { value: 30, name: "HR" },
        { value: 25, name: "Marketing" },
      ],
    } as F0DataChartPieSeries,
  })
}

export function fetchDonutData(): Promise<DashboardChartData> {
  return resolve({
    series: {
      name: "Gender Distribution",
      data: [
        { value: 145, name: "Women", color: "barbie" },
        { value: 130, name: "Men", color: "malibu" },
        { value: 5, name: "Non-binary", color: "purple" },
      ],
    } as F0DataChartPieSeries,
  })
}

// ---------------------------------------------------------------------------
// Radar data
// ---------------------------------------------------------------------------

export function fetchRadarData(): Promise<DashboardChartData> {
  return resolve({
    indicators: [
      { name: "Performance", max: 100 },
      { name: "Engagement", max: 100 },
      { name: "Retention", max: 100 },
      { name: "Growth", max: 100 },
      { name: "Satisfaction", max: 100 },
    ],
    series: [
      { name: "Engineering", data: [85, 72, 90, 65, 78] },
      { name: "Product", data: [70, 88, 75, 80, 82] },
    ],
  })
}

export function fetchRadarNoAreaData(): Promise<DashboardChartData> {
  return resolve({
    indicators: [
      { name: "Performance", max: 100 },
      { name: "Engagement", max: 100 },
      { name: "Retention", max: 100 },
      { name: "Growth", max: 100 },
    ],
    series: [
      { name: "2024", data: [80, 65, 90, 55], color: "viridian" },
      { name: "2025", data: [70, 78, 85, 72], color: "barbie" },
    ],
  })
}

// ---------------------------------------------------------------------------
// Gauge data
// ---------------------------------------------------------------------------

export function fetchGaugeData(): Promise<DashboardChartData> {
  return resolve({ series: { value: 72, name: "Hiring Goal" } })
}

export function fetchGaugeCustomRangeData(): Promise<DashboardChartData> {
  return resolve({ series: { value: 142, name: "Budget Used" } })
}

export function fetchGaugeLowData(): Promise<DashboardChartData> {
  return resolve({ series: { value: 28, name: "Attrition Risk" } })
}

// ---------------------------------------------------------------------------
// Heatmap data
// ---------------------------------------------------------------------------

export function fetchHeatmapData(): Promise<DashboardChartData> {
  return resolve({
    xCategories: [
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
    ],
    yCategories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: { value: 0 },
    data: [
      [0, 0, 5],
      [1, 0, 12],
      [2, 0, 18],
      [3, 0, 15],
      [4, 0, 8],
      [5, 0, 20],
      [6, 0, 22],
      [7, 0, 14],
      [8, 0, 6],
      [0, 1, 8],
      [1, 1, 15],
      [2, 1, 25],
      [3, 1, 20],
      [4, 1, 10],
      [5, 1, 18],
      [6, 1, 24],
      [7, 1, 16],
      [8, 1, 9],
      [0, 2, 6],
      [1, 2, 10],
      [2, 2, 20],
      [3, 2, 18],
      [4, 2, 12],
      [5, 2, 22],
      [6, 2, 19],
      [7, 2, 11],
      [8, 2, 4],
      [0, 3, 9],
      [1, 3, 14],
      [2, 3, 22],
      [3, 3, 16],
      [4, 3, 7],
      [5, 3, 15],
      [6, 3, 20],
      [7, 3, 13],
      [8, 3, 5],
      [0, 4, 3],
      [1, 4, 8],
      [2, 4, 14],
      [3, 4, 12],
      [4, 4, 6],
      [5, 4, 10],
      [6, 4, 12],
      [7, 4, 7],
      [8, 4, 2],
    ],
  })
}

export function fetchHeatmapAttendanceData(): Promise<DashboardChartData> {
  return resolve({
    xCategories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    yCategories: ["Engineering", "Design", "Product", "Sales"],
    series: { value: 0 },
    data: [
      [0, 0, 95],
      [1, 0, 92],
      [2, 0, 88],
      [3, 0, 91],
      [4, 0, 94],
      [5, 0, 90],
      [0, 1, 90],
      [1, 1, 88],
      [2, 1, 85],
      [3, 1, 87],
      [4, 1, 92],
      [5, 1, 89],
      [0, 2, 88],
      [1, 2, 90],
      [2, 2, 86],
      [3, 2, 89],
      [4, 2, 91],
      [5, 2, 87],
      [0, 3, 92],
      [1, 3, 94],
      [2, 3, 90],
      [3, 3, 93],
      [4, 3, 96],
      [5, 3, 91],
    ],
  })
}

// ---------------------------------------------------------------------------
// Metric data
// ---------------------------------------------------------------------------

export function fetchMetricUp(): Promise<DashboardMetricData> {
  return resolve({ value: 343, previousValue: 310 })
}

export function fetchMetricDown(): Promise<DashboardMetricData> {
  return resolve({ value: 4.2, previousValue: 5.1 })
}

export function fetchMetricCurrency(): Promise<DashboardMetricData> {
  return resolve({ value: 72_400, previousValue: 68_900 })
}
