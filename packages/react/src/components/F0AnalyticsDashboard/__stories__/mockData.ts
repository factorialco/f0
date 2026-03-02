import type { PresetsDefinition } from "@/components/OneFilterPicker/types"
import type { RecordType } from "@/hooks/datasource"
import type { PageBasedPaginatedResponse } from "@/hooks/datasource/types"

import type { F0DataChartFunnelSeries } from "../../F0DataChart"
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
// Chart fetchData functions
// ---------------------------------------------------------------------------

export function fetchHeadcountByDepartment(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  return delay(300).then(() => ({
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

export function fetchRevenueTrend(
  filters: Filters
): Promise<DashboardChartData> {
  const sm = statusMultiplier(filters)
  return delay(250).then(() => ({
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

export function fetchCostBreakdown(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  return delay(350).then(() => ({
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

export function fetchAttritionRate(
  filters: Filters
): Promise<DashboardChartData> {
  const sm = statusMultiplier(filters)
  return delay(200).then(() => ({
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Attrition %",
        data: [
          Math.round(2.1 * 100 * sm) / 100,
          Math.round(1.8 * 100 * sm) / 100,
          Math.round(2.5 * 100 * sm) / 100,
          Math.round(1.9 * 100 * sm) / 100,
          Math.round(2.3 * 100 * sm) / 100,
          Math.round(2.0 * 100 * sm) / 100,
        ],
      },
    ],
  }))
}

export function fetchSatisfactionScores(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  return delay(280).then(() => ({
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

export function fetchHiringPipeline(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  return delay(320).then(() => ({
    categories: [
      "Applied",
      "Phone Screen",
      "Technical",
      "Onsite",
      "Offer",
      "Hired",
    ],
    series: [
      {
        name: "Engineering",
        data: [
          Math.round(240 * dm.Engineering),
          Math.round(180 * dm.Engineering),
          Math.round(95 * dm.Engineering),
          Math.round(42 * dm.Engineering),
          Math.round(28 * dm.Engineering),
          Math.round(18 * dm.Engineering),
        ],
      },
      {
        name: "Product",
        data: [
          Math.round(120 * dm.Product),
          Math.round(85 * dm.Product),
          Math.round(50 * dm.Product),
          Math.round(22 * dm.Product),
          Math.round(14 * dm.Product),
          Math.round(8 * dm.Product),
        ],
      },
    ],
  }))
}

export function fetchSlowData(_filters: Filters): Promise<DashboardChartData> {
  return delay(10_000).then(() => ({
    categories: ["A", "B", "C"],
    series: [{ name: "Data", data: [1, 2, 3] }],
  }))
}

export function fetchSlowFunnelData(
  _filters: Filters
): Promise<DashboardChartData> {
  return delay(10_000).then(() => ({
    series: {
      name: "Pipeline",
      data: [
        { value: 500, name: "Stage 1" },
        { value: 350, name: "Stage 2" },
        { value: 200, name: "Stage 3" },
        { value: 120, name: "Stage 4" },
        { value: 60, name: "Stage 5" },
      ],
    } as F0DataChartFunnelSeries,
  }))
}

// ---------------------------------------------------------------------------
// Funnel fetchData functions
// ---------------------------------------------------------------------------

export function fetchHiringFunnel(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const total =
    240 * dm.Engineering + 120 * dm.Product + 80 * dm.Design + 60 * dm.Marketing
  return delay(280).then(() => ({
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

export function fetchOnboardingFunnel(
  _filters: Filters
): Promise<DashboardChartData> {
  return delay(250).then(() => ({
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
  }))
}

// ---------------------------------------------------------------------------
// Metric fetchData functions
// ---------------------------------------------------------------------------

export function fetchTotalHeadcount(
  filters: Filters
): Promise<DashboardMetricData> {
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
  return delay(200).then(() => ({ value: current, previousValue: previous }))
}

export function fetchAvgSalary(filters: Filters): Promise<DashboardMetricData> {
  const sm = statusMultiplier(filters)
  const current = Math.round(72_400 * sm)
  const previous = Math.round(68_900 * sm)
  return delay(180).then(() => ({ value: current, previousValue: previous }))
}

export function fetchAttritionMetric(
  filters: Filters
): Promise<DashboardMetricData> {
  const sm = statusMultiplier(filters)
  const current = Math.round(4.2 * sm * 10) / 10
  const previous = Math.round(5.1 * sm * 10) / 10
  return delay(220).then(() => ({ value: current, previousValue: previous }))
}

// ---------------------------------------------------------------------------
// Collection mock data — 32 employees for meaningful pagination
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
    "Engineering Manager",
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

function generateEmployees(): Employee[] {
  const firstNames = [
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
    "Quinn",
    "Rita",
    "Sam",
    "Tina",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yara",
    "Zach",
    "Aria",
    "Blake",
    "Chloe",
    "Derek",
    "Elena",
    "Felix",
  ]
  const lastNames = [
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
    "King",
    "Wright",
    "Lopez",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
  ]

  return firstNames.map((firstName, i) => {
    const lastName = lastNames[i]
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
}

const MOCK_EMPLOYEES = generateEmployees()

const PER_PAGE = 5

/**
 * Creates a paginated DataCollectionSourceDefinition that filters employees
 * by the dashboard-level filters.
 */
export function createEmployeeSource(filters: Filters) {
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

            // Apply dashboard-level department filter
            const deptFilter = (filters.department ?? dcFilters.department) as
              | string[]
              | undefined
            if (deptFilter && deptFilter.length > 0) {
              filtered = filtered.filter((e) =>
                deptFilter.includes(e.department)
              )
            }

            // Apply dashboard-level status filter
            const statusFilter = (filters.status ?? dcFilters.status) as
              | string[]
              | undefined
            if (statusFilter && statusFilter.length > 0) {
              filtered = filtered.filter((e) => statusFilter.includes(e.status))
            }

            // Paginate
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

/**
 * Table visualization for employee collection — 6 columns.
 */
export const employeeTableVisualization = {
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

// ---------------------------------------------------------------------------
// Pre-built dashboard item configs
// ---------------------------------------------------------------------------

export const chartItems: DashboardItem<DashboardFiltersType>[] = [
  ...metricItems,
  {
    id: "headcount",
    title: "Headcount by Department",
    description: "Current employee count and open positions per department",
    type: "chart",
    colSpan: 1,
    chart: { type: "bar" },
    fetchData: fetchHeadcountByDepartment,
  },
  {
    id: "revenue",
    title: "Revenue Trend",
    description: "Monthly revenue vs target",
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
    id: "attrition",
    title: "Attrition Rate",
    description: "Monthly attrition percentage",
    type: "chart",
    colSpan: 1,
    chart: {
      type: "line",
      lineType: "smooth",
      showArea: true,
      valueFormatter: (v: number) => `${v}%`,
    },
    fetchData: fetchAttritionRate,
  },
  {
    id: "satisfaction",
    title: "Satisfaction Scores",
    description: "Average satisfaction by department (1-5)",
    type: "chart",
    colSpan: 1,
    chart: {
      type: "bar",
      orientation: "horizontal",
    },
    fetchData: fetchSatisfactionScores,
  },
  {
    id: "hiring-funnel",
    title: "Hiring Funnel",
    description: "Candidates at each hiring stage",
    type: "chart",
    colSpan: 2,
    chart: {
      type: "funnel",
      valueFormatter: (v: number) => `${v} candidates`,
    },
    fetchData: fetchHiringFunnel,
  },
]

export const collectionItem: DashboardCollectionItem<DashboardFiltersType> = {
  id: "employee-table",
  title: "Employee Directory",
  description: "Paginated list of employees filtered by dashboard filters",
  type: "collection",
  colSpan: 3,
  createSource: createEmployeeSource,
  visualizations: [employeeTableVisualization],
}

/**
 * Full mixed dashboard: charts on top row, a wide chart + a narrow chart,
 * then the paginated employee table spanning the full width, then one more
 * chart row at the bottom.
 */
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

  // Row 2 — costs + attrition
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
    id: "attrition",
    title: "Attrition Rate",
    description: "Monthly attrition percentage",
    type: "chart",
    colSpan: 1,
    chart: {
      type: "line",
      lineType: "smooth",
      showArea: true,
      valueFormatter: (v: number) => `${v}%`,
    },
    fetchData: fetchAttritionRate,
  },

  // Row 3 — full-width paginated employee table
  collectionItem,

  // Row 4 — hiring pipeline + satisfaction
  {
    id: "hiring-pipeline",
    title: "Hiring Pipeline",
    description: "Candidates at each stage by department",
    type: "chart",
    colSpan: 2,
    chart: {
      type: "bar",
      stacked: false,
    },
    fetchData: fetchHiringPipeline,
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

  // Row 5 — funnels
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

export const loadingItems: DashboardItem<DashboardFiltersType>[] = [
  {
    id: "slow-metric-1",
    title: "Total Headcount",
    type: "metric",
    fetchData: () => delay(10_000).then(() => ({ value: 343 })),
  },
  {
    id: "slow-metric-2",
    title: "Avg. Salary",
    type: "metric",
    format: { type: "currency", currency: "EUR" },
    fetchData: () =>
      delay(10_000).then(() => ({ value: 72_400, previousValue: 68_900 })),
  },
  {
    id: "slow-metric-3",
    title: "Attrition Rate",
    type: "metric",
    format: { type: "percent" },
    decimals: 1,
    fetchData: () =>
      delay(10_000).then(() => ({ value: 4.2, previousValue: 5.1 })),
  },
  {
    id: "slow-bar",
    title: "Headcount by Department",
    description: "Current employee count and open positions per department",
    type: "chart",
    colSpan: 1,
    chart: { type: "bar" },
    fetchData: fetchSlowData,
  },
  {
    id: "slow-line",
    title: "Revenue Trend",
    description: "Monthly revenue vs target",
    type: "chart",
    colSpan: 2,
    chart: { type: "line", showArea: true, showDots: true },
    fetchData: fetchSlowData,
  },
  {
    id: "slow-cost",
    title: "Cost Breakdown",
    description: "Quarterly cost by department",
    type: "chart",
    colSpan: 2,
    chart: { type: "bar", stacked: true },
    fetchData: fetchSlowData,
  },
  {
    id: "slow-attrition",
    title: "Attrition Rate",
    description: "Monthly attrition percentage",
    type: "chart",
    colSpan: 1,
    chart: { type: "line", lineType: "smooth", showArea: true },
    fetchData: fetchSlowData,
  },
  {
    id: "slow-funnel",
    title: "Hiring Funnel",
    description: "Conversion through hiring stages",
    type: "chart",
    colSpan: 3,
    chart: {
      type: "funnel",
      valueFormatter: (v: number) => `${v} candidates`,
    },
    fetchData: fetchSlowFunnelData,
  },
]
