import type { PresetsDefinition } from "@/components/OneFilterPicker/types"
import type { RecordType } from "@/hooks/datasource"
import type { PageBasedPaginatedResponse } from "@/hooks/datasource/types"

import type {
  F0DataChartFunnelSeries,
  F0DataChartPieSeries,
} from "../../F0DataChart"
import type {
  DashboardChartData,
  DashboardCollectionItem,
  DashboardItem,
  DashboardMetricData,
  DashboardMetricItem,
} from "../types"

// ---------------------------------------------------------------------------
// Filter definitions
// ---------------------------------------------------------------------------

const DEPARTMENTS = ["Engineering", "Product", "Design", "Marketing"] as const

const STATUSES = ["Active", "Inactive"] as const

export const dashboardFilters = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: DEPARTMENTS.map((d) => ({ value: d, label: d })),
    },
  },
  status: {
    type: "in",
    label: "Status",
    options: {
      options: STATUSES.map((s) => ({ value: s, label: s })),
    },
  },
  dateRange: {
    type: "date",
    label: "Date range",
  },
} as const

export type DashboardFiltersType = typeof dashboardFilters

export const dashboardPresets: PresetsDefinition<DashboardFiltersType> = [
  {
    label: "Engineering Team",
    filter: { department: ["Engineering"] },
  },
  {
    label: "Product Team",
    filter: { department: ["Product"] },
  },
  {
    label: "All Active",
    filter: { status: ["Active"] },
  },
  {
    label: "Design & Marketing",
    filter: { department: ["Design", "Marketing"] },
  },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Filters = Record<string, unknown>

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function departmentMultiplier(filters: Filters): Record<string, number> {
  const selected =
    Array.isArray(filters.department) && filters.department.length > 0
      ? (filters.department as string[])
      : null

  return {
    Engineering: selected ? (selected.includes("Engineering") ? 1 : 0) : 1,
    Product: selected ? (selected.includes("Product") ? 1 : 0) : 1,
    Design: selected ? (selected.includes("Design") ? 1 : 0) : 1,
    Marketing: selected ? (selected.includes("Marketing") ? 1 : 0) : 1,
  }
}

function statusMultiplier(filters: Filters): number {
  const selected =
    Array.isArray(filters.status) && filters.status.length > 0
      ? (filters.status as string[])
      : null

  if (!selected) return 1
  if (selected.length === 2) return 1
  if (selected.includes("Active")) return 0.75
  return 0.25
}

// ---------------------------------------------------------------------------
// Chart fetch functions (filter-reactive)
// ---------------------------------------------------------------------------

function fetchHeadcountByDepartment(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  return delay(800).then(() => ({
    categories: ["Engineering", "Product", "Design", "Marketing"],
    series: [
      {
        name: "Headcount",
        data: [
          {
            value: Math.round(145 * dm.Engineering * sm),
            target: Math.round(160 * dm.Engineering),
          },
          {
            value: Math.round(89 * dm.Product * sm),
            target: Math.round(100 * dm.Product),
          },
          {
            value: Math.round(67 * dm.Design * sm),
            target: Math.round(80 * dm.Design),
          },
          {
            value: Math.round(42 * dm.Marketing * sm),
            target: Math.round(50 * dm.Marketing),
          },
        ],
      },
      {
        name: "Open Positions",
        data: [
          Math.round(12 * dm.Engineering),
          Math.round(8 * dm.Product),
          Math.round(5 * dm.Design),
          Math.round(3 * dm.Marketing),
        ],
      },
    ],
  }))
}

function fetchRevenueTrend(filters: Filters): Promise<DashboardChartData> {
  const sm = statusMultiplier(filters)
  return delay(600).then(() => ({
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [
          Math.round(4_200_000 * sm),
          Math.round(5_100_000 * sm),
          Math.round(4_800_000 * sm),
          Math.round(6_300_000 * sm),
          Math.round(7_100_000 * sm),
          Math.round(6_900_000 * sm),
        ],
      },
      {
        name: "Target",
        data: [
          5_000_000, 5_000_000, 5_000_000, 6_000_000, 6_000_000, 6_000_000,
        ],
      },
    ],
  }))
}

function fetchCostBreakdown(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  return delay(700).then(() => ({
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      {
        name: "Engineering",
        data: [
          Math.round(320_000 * dm.Engineering),
          Math.round(340_000 * dm.Engineering),
          Math.round(310_000 * dm.Engineering),
          Math.round(350_000 * dm.Engineering),
        ],
      },
      {
        name: "Product",
        data: [
          Math.round(180_000 * dm.Product),
          Math.round(190_000 * dm.Product),
          Math.round(175_000 * dm.Product),
          Math.round(195_000 * dm.Product),
        ],
      },
      {
        name: "Design",
        data: [
          Math.round(120_000 * dm.Design),
          Math.round(130_000 * dm.Design),
          Math.round(125_000 * dm.Design),
          Math.round(135_000 * dm.Design),
        ],
      },
      {
        name: "Marketing",
        data: [
          Math.round(95_000 * dm.Marketing),
          Math.round(100_000 * dm.Marketing),
          Math.round(92_000 * dm.Marketing),
          Math.round(105_000 * dm.Marketing),
        ],
      },
    ],
  }))
}

function fetchHiringFunnel(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const total =
    240 * dm.Engineering + 120 * dm.Product + 80 * dm.Design + 60 * dm.Marketing
  return delay(900).then(() => ({
    series: {
      name: "Hiring Pipeline",
      data: [
        { value: Math.round(total), name: "Applied" },
        { value: Math.round(total * 0.65), name: "Phone Screen" },
        { value: Math.round(total * 0.35), name: "Technical" },
        { value: Math.round(total * 0.18), name: "Onsite" },
        { value: Math.round(total * 0.1), name: "Offer" },
        { value: Math.round(total * 0.06), name: "Hired" },
      ],
    } as F0DataChartFunnelSeries,
  }))
}

function fetchSatisfactionScores(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  return delay(500).then(() => ({
    categories: ["Engineering", "Product", "Design", "Marketing"],
    series: [
      {
        name: "Score",
        data: [
          dm.Engineering ? 4.2 : 0,
          dm.Product ? 3.8 : 0,
          dm.Design ? 4.5 : 0,
          dm.Marketing ? 3.9 : 0,
        ],
      },
    ],
  }))
}

// ---------------------------------------------------------------------------
// Metric fetch functions (filter-reactive)
// ---------------------------------------------------------------------------

function fetchTotalHeadcount(filters: Filters): Promise<DashboardMetricData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  const current = Math.round(
    (145 * dm.Engineering +
      89 * dm.Product +
      67 * dm.Design +
      42 * dm.Marketing) *
      sm
  )
  const previous = Math.round(
    (130 * dm.Engineering +
      82 * dm.Product +
      60 * dm.Design +
      38 * dm.Marketing) *
      sm
  )
  return delay(400).then(() => ({ value: current, previousValue: previous }))
}

function fetchAvgSalary(filters: Filters): Promise<DashboardMetricData> {
  const sm = statusMultiplier(filters)
  const current = Math.round(72_400 * sm)
  const previous = Math.round(68_900 * sm)
  return delay(400).then(() => ({ value: current, previousValue: previous }))
}

function fetchAttritionMetric(filters: Filters): Promise<DashboardMetricData> {
  const sm = statusMultiplier(filters)
  const current = Math.round(4.2 * sm * 10) / 10
  const previous = Math.round(5.1 * sm * 10) / 10
  return delay(400).then(() => ({ value: current, previousValue: previous }))
}

// ---------------------------------------------------------------------------
// Pie fetch function
// ---------------------------------------------------------------------------

function fetchHeadcountPie(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  return delay(500).then(() => ({
    series: {
      name: "Headcount by Department",
      data: [
        { value: Math.round(145 * dm.Engineering * sm), name: "Engineering" },
        { value: Math.round(89 * dm.Product * sm), name: "Product" },
        { value: Math.round(67 * dm.Design * sm), name: "Design" },
        { value: Math.round(42 * dm.Marketing * sm), name: "Marketing" },
      ],
    } as F0DataChartPieSeries,
  }))
}

// ---------------------------------------------------------------------------
// Radar fetch function
// ---------------------------------------------------------------------------

function fetchTeamRadar(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  return delay(600).then(() => ({
    indicators: [
      { name: "Performance", max: 100 },
      { name: "Engagement", max: 100 },
      { name: "Retention", max: 100 },
      { name: "Growth", max: 100 },
      { name: "Satisfaction", max: 100 },
    ],
    series: [
      ...(dm.Engineering
        ? [{ name: "Engineering", data: [85, 72, 90, 65, 78] }]
        : []),
      ...(dm.Product ? [{ name: "Product", data: [70, 88, 75, 80, 82] }] : []),
      ...(dm.Design ? [{ name: "Design", data: [78, 80, 82, 75, 88] }] : []),
      ...(dm.Marketing
        ? [{ name: "Marketing", data: [65, 85, 70, 90, 76] }]
        : []),
    ],
  }))
}

// ---------------------------------------------------------------------------
// Gauge fetch function
// ---------------------------------------------------------------------------

function fetchHiringGoalGauge(_filters: Filters): Promise<DashboardChartData> {
  return delay(400).then(() => ({
    series: { value: 72, name: "Hiring Goal" },
  }))
}

// ---------------------------------------------------------------------------
// Heatmap fetch function
// ---------------------------------------------------------------------------

function fetchActivityHeatmap(_filters: Filters): Promise<DashboardChartData> {
  return delay(700).then(() => ({
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
    ] as [number, number, number][],
  }))
}

// ---------------------------------------------------------------------------
// Collection — 16 employees
// ---------------------------------------------------------------------------

interface Employee extends RecordType {
  id: string
  name: string
  email: string
  role: string
  department: (typeof DEPARTMENTS)[number]
  salary: number
  status: (typeof STATUSES)[number]
  startDate: string
}

const ROLES: Record<(typeof DEPARTMENTS)[number], string[]> = {
  Engineering: [
    "Frontend Engineer",
    "Backend Engineer",
    "Staff Engineer",
    "SRE",
  ],
  Product: [
    "Product Manager",
    "Product Designer",
    "Product Analyst",
    "Head of Product",
  ],
  Design: ["UI Designer", "UX Researcher", "Design Lead", "Brand Designer"],
  Marketing: [
    "Content Strategist",
    "Growth Manager",
    "Marketing Analyst",
    "SEO Specialist",
  ],
}

const FIRST_NAMES = [
  "Alice",
  "Bob",
  "Carol",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
  "Iris",
  "Jack",
  "Karen",
  "Leo",
  "Mia",
  "Noah",
  "Olivia",
  "Paul",
]

const LAST_NAMES = [
  "Johnson",
  "Smith",
  "Williams",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Taylor",
  "Anderson",
  "Thomas",
  "Martinez",
  "Garcia",
  "Lee",
  "Clark",
  "Hall",
  "Young",
]

const MOCK_EMPLOYEES: Employee[] = FIRST_NAMES.map((firstName, i) => {
  const lastName = LAST_NAMES[i]
  const dept = DEPARTMENTS[i % DEPARTMENTS.length]
  const roles = ROLES[dept]
  const role = roles[i % roles.length]
  const isActive = i % 5 !== 0

  return {
    id: String(i + 1),
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
    role,
    department: dept,
    salary: 80_000 + Math.round((i * 3_721) % 70_000),
    status: isActive ? ("Active" as const) : ("Inactive" as const),
    startDate: `${2020 + (i % 5)}-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
  }
})

const PER_PAGE = 5

function createEmployeeSource(filters: Filters) {
  return {
    dataAdapter: {
      paginationType: "pages" as const,
      perPage: PER_PAGE,
      fetchData: ({
        filters: dcFilters,
        sortings: _sortings,
        pagination,
      }: {
        filters: Record<string, unknown>
        sortings: unknown
        pagination: { currentPage: number; perPage?: number }
      }) => {
        return new Promise<PageBasedPaginatedResponse<Employee>>((resolve) => {
          setTimeout(() => {
            let filtered = [...MOCK_EMPLOYEES]

            const deptFilter = (filters.department ?? dcFilters.department) as
              | string[]
              | undefined
            if (deptFilter && deptFilter.length > 0) {
              filtered = filtered.filter((e) =>
                deptFilter.includes(e.department)
              )
            }

            const statusFilter = (filters.status ?? dcFilters.status) as
              | string[]
              | undefined
            if (statusFilter && statusFilter.length > 0) {
              filtered = filtered.filter((e) => statusFilter.includes(e.status))
            }

            const page = pagination?.currentPage ?? 1
            const perPage = pagination?.perPage ?? PER_PAGE
            const startIndex = (page - 1) * perPage
            const pageRecords = filtered.slice(startIndex, startIndex + perPage)

            resolve({
              type: "pages",
              records: pageRecords,
              total: filtered.length,
              currentPage: page,
              perPage,
              pagesCount: Math.ceil(filtered.length / perPage),
            })
          }, 200)
        })
      },
    },
  }
}

const employeeTableVisualization = {
  type: "table" as const,
  options: {
    columns: [
      {
        id: "name",
        label: "Name",
        width: 180,
        render: (item: Employee) => ({
          type: "person" as const,
          value: {
            firstName: item.name.split(" ")[0],
            lastName: item.name.split(" ")[1],
          },
        }),
      },
      {
        id: "email",
        label: "Email",
        render: (item: Employee) => item.email,
      },
      {
        id: "role",
        label: "Role",
        render: (item: Employee) => item.role,
      },
      {
        id: "department",
        label: "Department",
        render: (item: Employee) => item.department,
      },
      {
        id: "salary",
        label: "Salary",
        render: (item: Employee) => `$${item.salary.toLocaleString()}`,
      },
      {
        id: "status",
        label: "Status",
        render: (item: Employee) => item.status,
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// Pre-built metric items
// ---------------------------------------------------------------------------

const metricItems: DashboardMetricItem<DashboardFiltersType>[] = [
  {
    id: "total-headcount",
    title: "Total Headcount",
    type: "metric",
    fetchData: fetchTotalHeadcount,
  },
  {
    id: "avg-salary",
    title: "Avg. Salary",
    type: "metric",
    format: { type: "currency", currency: "EUR" },
    fetchData: fetchAvgSalary,
  },
  {
    id: "attrition-rate",
    title: "Attrition Rate",
    type: "metric",
    format: { type: "percent" },
    decimals: 1,
    fetchData: fetchAttritionMetric,
  },
]

const collectionItem: DashboardCollectionItem<DashboardFiltersType> = {
  id: "employee-table",
  title: "Employee Directory",
  description: "Paginated list of employees filtered by dashboard filters",
  type: "collection",
  colSpan: 3,
  createSource: createEmployeeSource,
  visualizations: [employeeTableVisualization],
}

// ---------------------------------------------------------------------------
// Mixed items — full dashboard with all types and filter reactivity
// ---------------------------------------------------------------------------

export const mixedItems: DashboardItem<DashboardFiltersType>[] = [
  // Row 1 — KPI metrics
  ...metricItems,
  // Row 2 — overview charts
  {
    id: "headcount",
    title: "Headcount by Department",
    description: "Current headcount and open positions",
    type: "chart",
    colSpan: 1,
    chart: { type: "bar" },
    fetchData: fetchHeadcountByDepartment,
  },
  {
    id: "revenue",
    title: "Revenue Trend",
    description: "Monthly revenue vs target (H1)",
    type: "chart",
    colSpan: 2,
    chart: {
      type: "line",
      showArea: true,
      showDots: true,
      valueFormatter: (v: number) =>
        v >= 1_000_000
          ? `$${(v / 1_000_000).toFixed(1)}M`
          : `$${Math.round(v / 1_000)}k`,
    },
    fetchData: fetchRevenueTrend,
  },
  // Row 3 — costs + satisfaction
  {
    id: "cost-breakdown",
    title: "Cost Breakdown",
    description: "Quarterly cost by department",
    type: "chart",
    colSpan: 2,
    chart: {
      type: "bar",
      stacked: true,
      valueFormatter: (v: number) => `$${Math.round(v / 1_000)}k`,
    },
    fetchData: fetchCostBreakdown,
  },
  {
    id: "satisfaction",
    title: "Satisfaction Scores",
    description: "Average score by department (1-5)",
    type: "chart",
    colSpan: 1,
    chart: {
      type: "bar",
      orientation: "horizontal",
    },
    fetchData: fetchSatisfactionScores,
  },
  // Row 4 — pie + radar + gauge
  {
    id: "headcount-pie",
    title: "Headcount Distribution",
    description: "Donut chart of headcount by department",
    type: "chart",
    colSpan: 1,
    chart: { type: "pie", innerRadius: 60, showPercentage: true },
    fetchData: fetchHeadcountPie,
  },
  {
    id: "team-radar",
    title: "Team Metrics",
    description: "Radar comparison across departments",
    type: "chart",
    colSpan: 1,
    chart: { type: "radar", showArea: true },
    fetchData: fetchTeamRadar,
  },
  {
    id: "hiring-goal-gauge",
    title: "Hiring Goal",
    description: "Progress toward quarterly hiring target",
    type: "chart",
    colSpan: 1,
    chart: { type: "gauge" },
    fetchData: fetchHiringGoalGauge,
  },
  // Row 5 — heatmap
  {
    id: "office-activity",
    title: "Office Activity",
    description: "Hourly activity heatmap across the week",
    type: "chart",
    colSpan: 3,
    chart: { type: "heatmap", showLabels: true },
    fetchData: fetchActivityHeatmap,
  },
  // Row 6 — employee table
  collectionItem,
  // Row 7 — hiring funnel
  {
    id: "hiring-funnel",
    title: "Hiring Funnel",
    description: "Conversion through hiring stages",
    type: "chart",
    colSpan: 3,
    chart: {
      type: "funnel",
      valueFormatter: (v: number) => `${v} candidates`,
    },
    fetchData: fetchHiringFunnel,
  },
]
