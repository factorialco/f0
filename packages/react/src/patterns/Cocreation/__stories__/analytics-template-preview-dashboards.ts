import type { F0DataChartPieSeries } from "@/kits/F0DataChart"
import type {
  DashboardChartData,
  DashboardItem,
  DashboardMetricData,
} from "@/patterns/F0AnalyticsDashboard"

/**
 * Per-template preview dashboards for the "My Walkthrough v2" story, keyed by
 * template id. Each item set mirrors the REAL production template definition
 * (monorepo `backend/components/one_analytics/config/dashboard_templates/*.yml`
 * — same items, titles, chart types and order), with static mock numbers
 * matching the template-picker preview artwork (312 absences, €102,840 spend,
 * 47 missing clock-ins, 4,033 headcount, …). The production "collection"
 * (table) items are omitted — the preview cares about the KPI/chart shape.
 */

const metric = (value: number): Promise<DashboardMetricData> =>
  Promise.resolve({ value })

const chart = (data: DashboardChartData): Promise<DashboardChartData> =>
  Promise.resolve(data)

const pie = (
  name: string,
  data: { name: string; value: number }[]
): Promise<DashboardChartData> =>
  Promise.resolve({ series: { name, data } as F0DataChartPieSeries })

const euros = (v: number): string => `€${v.toLocaleString("en-US")}`

// ---------------------------------------------------------------------------
// Absences overview — 3 KPIs, 6 charts (absences_overview.yml)
// ---------------------------------------------------------------------------

const absencesOverviewItems: DashboardItem[] = [
  {
    id: "total-absences",
    title: "Total absences",
    description: "Distinct absence records in the selected period.",
    type: "metric",
    colSpan: 4,
    x: 0,
    y: 0,
    rowSpan: 3,
    fetchData: () => metric(312),
  },
  {
    id: "total-absence-days",
    title: "Total absence days",
    description: "Working days lost across the selected absences.",
    type: "metric",
    colSpan: 4,
    x: 4,
    y: 0,
    rowSpan: 3,
    fetchData: () => metric(1_284),
  },
  {
    id: "avg-duration",
    title: "Average duration",
    description: "Average working days per absence record.",
    type: "metric",
    colSpan: 4,
    x: 8,
    y: 0,
    rowSpan: 3,
    decimals: 1,
    fetchData: () => metric(4.1),
  },
  {
    id: "absence-days-by-type",
    title: "Absence days by type",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 3,
    rowSpan: 7,
    chart: { type: "pie", innerRadius: 60 },
    fetchData: () =>
      pie("Absence days by type", [
        { name: "Vacation", value: 512 },
        { name: "Sick leave", value: 306 },
        { name: "Parental leave", value: 148 },
        { name: "Other", value: 89 },
      ]),
  },
  {
    id: "absences-over-time",
    title: "Absences over time",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 3,
    rowSpan: 7,
    chart: { type: "bar", stacked: true },
    fetchData: () =>
      chart({
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        series: [
          { name: "Vacation", data: [40, 52, 38, 64, 49] },
          { name: "Sick leave", data: [22, 18, 25, 30, 20] },
          { name: "Other", data: [8, 10, 7, 12, 9] },
        ],
      }),
  },
  {
    id: "absence-days-by-team",
    title: "Absence days by team",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 10,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal", stacked: true },
    fetchData: () =>
      chart({
        categories: ["Engineering", "Sales", "Operations", "Support"],
        series: [
          { name: "Vacation", data: [168, 122, 101, 58] },
          { name: "Sick leave", data: [72, 58, 49, 32] },
        ],
      }),
  },
  {
    id: "absence-days-by-manager",
    title: "Absence days by manager",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 10,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal", stacked: true },
    fetchData: () =>
      chart({
        categories: ["Dani Moreno", "Nik Lopin", "Saúl Domínguez", "Nora Park"],
        series: [
          { name: "Vacation", data: [96, 84, 71, 55] },
          { name: "Sick leave", data: [41, 36, 28, 22] },
        ],
      }),
  },
  {
    id: "absences-justification",
    title: "Justified vs unjustified",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 17,
    rowSpan: 7,
    chart: { type: "pie", innerRadius: 60 },
    fetchData: () =>
      pie("Justified vs unjustified", [
        { name: "Justified", value: 1_002 },
        { name: "Unjustified", value: 282 },
      ]),
  },
  {
    id: "absence-days-by-location",
    title: "Absence days by location",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 17,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal", stacked: true },
    fetchData: () =>
      chart({
        categories: ["Barcelona", "Madrid", "Mexico City", "Remote"],
        series: [
          { name: "Vacation", data: [201, 142, 96, 73] },
          { name: "Sick leave", data: [88, 61, 40, 30] },
        ],
      }),
  },
]

// ---------------------------------------------------------------------------
// Expenses — 3 KPIs, 2 charts (expenses_overview.yml)
// ---------------------------------------------------------------------------

const expensesOverviewItems: DashboardItem[] = [
  {
    id: "total-spend",
    title: "Total spend",
    description: "Sum of all expenses in the selected period.",
    type: "metric",
    colSpan: 4,
    x: 0,
    y: 0,
    rowSpan: 3,
    format: { type: "currency", currency: "EUR" },
    fetchData: () => metric(102_840),
  },
  {
    id: "total-records",
    title: "Total records",
    description: "Expense records submitted in the selected period.",
    type: "metric",
    colSpan: 4,
    x: 4,
    y: 0,
    rowSpan: 3,
    fetchData: () => metric(1_946),
  },
  {
    id: "avg-per-expense",
    title: "Average expense amount",
    description: "Average amount per expense record.",
    type: "metric",
    colSpan: 4,
    x: 8,
    y: 0,
    rowSpan: 3,
    format: { type: "currency", currency: "EUR" },
    decimals: 1,
    fetchData: () => metric(52.8),
  },
  {
    id: "spend-by-category",
    title: "Spend by category",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 3,
    rowSpan: 7,
    chart: {
      type: "bar",
      orientation: "horizontal",
      valueFormatter: euros,
    },
    fetchData: () =>
      chart({
        categories: ["Travel", "Meals", "Software", "Office"],
        series: [{ name: "Spend", data: [38_420, 24_610, 21_330, 18_480] }],
      }),
  },
  {
    id: "spend-by-legal-entity",
    title: "Spend by legal entity",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 3,
    rowSpan: 7,
    chart: {
      type: "bar",
      orientation: "horizontal",
      valueFormatter: euros,
    },
    fetchData: () =>
      chart({
        categories: ["Factorial Spain", "Factorial Mexico", "Factorial USA"],
        series: [{ name: "Spend", data: [51_210, 28_940, 22_690] }],
      }),
  },
]

// ---------------------------------------------------------------------------
// Missing clock-ins — 2 KPIs, 3 charts (presence_missing_clockins.yml)
// ---------------------------------------------------------------------------

const missingClockinsItems: DashboardItem[] = [
  {
    id: "missing-clockins",
    title: "Missing clock-ins",
    description: "Workdays without a clock-in for the selected week.",
    type: "metric",
    colSpan: 6,
    x: 0,
    y: 0,
    rowSpan: 3,
    fetchData: () => metric(47),
  },
  {
    id: "employees-affected",
    title: "People affected",
    description: "Employees with at least one missing clock-in.",
    type: "metric",
    colSpan: 6,
    x: 6,
    y: 0,
    rowSpan: 3,
    fetchData: () => metric(31),
  },
  {
    id: "missing-clockins-over-time",
    title: "Missing clock-ins over time",
    type: "chart",
    colSpan: 12,
    x: 0,
    y: 3,
    rowSpan: 7,
    chart: { type: "bar" },
    fetchData: () =>
      chart({
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        series: [{ name: "Missing clock-ins", data: [9, 12, 7, 11, 8] }],
      }),
  },
  {
    id: "missing-clockins-by-department",
    title: "Missing clock-ins by department",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 10,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal" },
    fetchData: () =>
      chart({
        categories: ["Operations", "Sales", "Support", "Engineering"],
        series: [{ name: "Missing clock-ins", data: [18, 13, 9, 7] }],
      }),
  },
  {
    id: "missing-clockins-by-location",
    title: "Missing clock-ins by location",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 10,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal" },
    fetchData: () =>
      chart({
        categories: ["Barcelona", "Madrid", "Remote"],
        series: [{ name: "Missing clock-ins", data: [21, 14, 12] }],
      }),
  },
]

// ---------------------------------------------------------------------------
// Workforce snapshot — 4 KPIs, 7 charts (employee_current_lite.yml)
// ---------------------------------------------------------------------------

const workforceSnapshotItems: DashboardItem[] = [
  {
    id: "total-headcount",
    title: "Total headcount",
    description: "Employees active as of the selected date.",
    type: "metric",
    colSpan: 3,
    x: 0,
    y: 0,
    rowSpan: 3,
    fetchData: () => metric(4_033),
  },
  {
    id: "avg-tenure",
    title: "Average tenure",
    description: "Average years since hire.",
    type: "metric",
    colSpan: 3,
    x: 3,
    y: 0,
    rowSpan: 3,
    decimals: 1,
    fetchData: () => metric(3.4),
  },
  {
    id: "avg-salary",
    title: "Average salary (yearly)",
    type: "metric",
    colSpan: 3,
    x: 6,
    y: 0,
    rowSpan: 3,
    format: { type: "currency", currency: "EUR" },
    fetchData: () => metric(20_122),
  },
  {
    id: "avg-age",
    title: "Average age",
    type: "metric",
    colSpan: 3,
    x: 9,
    y: 0,
    rowSpan: 3,
    decimals: 1,
    fetchData: () => metric(43.9),
  },
  {
    id: "headcount-by-gender",
    title: "Headcount by gender",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 3,
    rowSpan: 7,
    chart: { type: "pie", innerRadius: 60 },
    fetchData: () =>
      pie("Headcount by gender", [
        { name: "Female", value: 2_081 },
        { name: "Male", value: 1_896 },
        { name: "Other", value: 56 },
      ]),
  },
  {
    id: "headcount-by-contract-type",
    title: "Headcount by contract type",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 3,
    rowSpan: 7,
    chart: { type: "pie", innerRadius: 60 },
    fetchData: () =>
      pie("Headcount by contract type", [
        { name: "Permanent", value: 3_226 },
        { name: "Temporary", value: 605 },
        { name: "Internship", value: 202 },
      ]),
  },
  {
    id: "headcount-by-location",
    title: "Headcount by location",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 10,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal" },
    fetchData: () =>
      chart({
        categories: ["Barcelona", "Madrid", "Mexico City", "Remote"],
        series: [{ name: "Headcount", data: [1_420, 980, 840, 793] }],
      }),
  },
  {
    id: "headcount-by-legal-entity",
    title: "Headcount by legal entity",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 10,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal" },
    fetchData: () =>
      chart({
        categories: ["Factorial Spain", "Factorial Mexico", "Factorial USA"],
        series: [{ name: "Headcount", data: [2_350, 1_040, 643] }],
      }),
  },
  {
    id: "avg-salary-by-job-title",
    title: "Average salary by job title",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 17,
    rowSpan: 7,
    chart: {
      type: "bar",
      orientation: "horizontal",
      valueFormatter: euros,
    },
    fetchData: () =>
      chart({
        categories: [
          "Engineer",
          "Sales executive",
          "Designer",
          "Support agent",
          "Operations",
        ],
        series: [
          {
            name: "Average salary",
            data: [32_400, 27_800, 26_900, 19_400, 18_200],
          },
        ],
      }),
  },
  {
    id: "headcount-by-job-title",
    title: "Headcount by job title",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 17,
    rowSpan: 7,
    chart: { type: "bar", orientation: "horizontal" },
    fetchData: () =>
      chart({
        categories: [
          "Support agent",
          "Sales executive",
          "Engineer",
          "Operations",
          "Designer",
        ],
        series: [{ name: "Headcount", data: [1_020, 860, 640, 590, 210] }],
      }),
  },
  {
    id: "headcount-by-age-band",
    title: "Headcount by age band",
    type: "chart",
    colSpan: 12,
    x: 0,
    y: 24,
    rowSpan: 7,
    chart: { type: "bar" },
    fetchData: () =>
      chart({
        categories: ["18–25", "26–35", "36–45", "46–55", "56+"],
        series: [{ name: "Headcount", data: [410, 1_530, 1_190, 660, 243] }],
      }),
  },
]

export const TEMPLATE_PREVIEW_DASHBOARDS: Record<string, DashboardItem[]> = {
  "absences-overview": absencesOverviewItems,
  "expenses-overview": expensesOverviewItems,
  "presence-missing-clockins": missingClockinsItems,
  "employee-current-lite": workforceSnapshotItems,
}
