import type { RecordType } from "@/hooks/datasource"
import type { PageBasedPaginatedResponse } from "@/hooks/datasource/types"
import { ChartVerticalBars } from "@/icons/app"
import type {
  F0DataChartFunnelSeries,
  F0DataChartPieSeries,
} from "@/kits/F0DataChart"
import type { PresetsDefinition } from "@/patterns/OneFilterPicker/types"
import type {
  DashboardChartData,
  DashboardCollectionItem,
  DashboardItem,
  DashboardMetricData,
  DashboardMetricItem,
  DashboardTextItem,
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
  employeeSearch: {
    type: "search",
    label: "Employee search",
  },
  reviewDate: {
    type: "date",
    label: "Review date",
    options: {
      mode: "single",
    },
  },
  dateRange: {
    type: "date",
    label: "Date range",
    options: {
      mode: "range",
    },
  },
  salaryExact: {
    type: "number",
    label: "Exact salary",
    options: {
      modes: ["single"],
      min: 0,
      max: 250_000,
    },
  },
  salary: {
    type: "number",
    label: "Salary range",
    options: {
      modes: ["range"],
      min: 0,
      max: 250_000,
      openCloseToggle: true,
    },
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

/**
 * Derives a stable week-seed from the navigation filter's date value.
 * Returns the ISO week number (1-53) so each week produces different but
 * deterministic data. Falls back to the current week when no date filter
 * is active.
 */
function weekSeed(filters: Filters): number {
  const dateNav = filters.date as
    | { value?: { from?: Date | string } }
    | undefined
  const raw = dateNav?.value?.from
  const d = raw ? new Date(raw) : new Date()
  // ISO week number
  const jan1 = new Date(d.getFullYear(), 0, 1)
  const days = Math.floor(
    (d.getTime() - jan1.getTime()) / (24 * 60 * 60 * 1000)
  )
  return Math.floor((days + jan1.getDay() + 1) / 7) + 1
}

/**
 * Simple seeded pseudo-random that produces repeatable values per week.
 * `salt` differentiates charts that share the same week.
 */
function seeded(week: number, salt: number): number {
  const x = Math.sin(week * 9301 + salt * 4973) * 49297
  return x - Math.floor(x) // 0..1
}

/** Returns a deterministic multiplier between `lo` and `hi` for the given week + salt. */
function weekFactor(
  filters: Filters,
  salt: number,
  lo = 0.6,
  hi = 1.4
): number {
  const w = weekSeed(filters)
  return lo + seeded(w, salt) * (hi - lo)
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

  if (!selected) {
    return 1
  }
  if (selected.length === 2) {
    return 1
  }
  if (selected.includes("Active")) {
    return 0.75
  }
  return 0.25
}

// ---------------------------------------------------------------------------
// Week label helper — generates 7 day labels for the selected week
// ---------------------------------------------------------------------------

function weekDayLabels(filters: Filters): string[] {
  const dateNav = filters.date as
    | { value?: { from?: Date | string } }
    | undefined
  const raw = dateNav?.value?.from
  const start = raw ? new Date(raw) : new Date()
  // Snap to Monday
  const day = start.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(start)
  monday.setDate(start.getDate() + diff)

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })
  })
}

// ---------------------------------------------------------------------------
// Chart fetch functions (filter-reactive + week-reactive)
// ---------------------------------------------------------------------------

function fetchHeadcountByDepartment(
  filters: Filters
): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  const wf = weekFactor(filters, 1)
  return delay(800).then(() => ({
    categories: ["Engineering", "Product", "Design", "Marketing"],
    series: [
      {
        name: "Headcount",
        data: [
          {
            value: Math.round(145 * dm.Engineering * sm * wf),
            target: Math.round(160 * dm.Engineering),
          },
          {
            value: Math.round(89 * dm.Product * sm * wf),
            target: Math.round(100 * dm.Product),
          },
          {
            value: Math.round(67 * dm.Design * sm * wf),
            target: Math.round(80 * dm.Design),
          },
          {
            value: Math.round(42 * dm.Marketing * sm * wf),
            target: Math.round(50 * dm.Marketing),
          },
        ],
      },
      {
        name: "Open Positions",
        data: [
          Math.round(12 * dm.Engineering * weekFactor(filters, 10, 0.3, 1.8)),
          Math.round(8 * dm.Product * weekFactor(filters, 11, 0.3, 1.8)),
          Math.round(5 * dm.Design * weekFactor(filters, 12, 0.3, 1.8)),
          Math.round(3 * dm.Marketing * weekFactor(filters, 13, 0.3, 1.8)),
        ],
      },
    ],
  }))
}

function fetchRevenueTrend(filters: Filters): Promise<DashboardChartData> {
  const sm = statusMultiplier(filters)
  const days = weekDayLabels(filters)
  return delay(600).then(() => ({
    categories: days,
    series: [
      {
        name: "Revenue",
        data: days.map((_, i) =>
          Math.round(
            (600_000 + 200_000 * seeded(weekSeed(filters), 20 + i)) * sm
          )
        ),
      },
      {
        name: "Target",
        data: days.map(() => 700_000),
      },
    ],
  }))
}

function fetchCostBreakdown(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const days = weekDayLabels(filters)
  return delay(700).then(() => ({
    categories: days,
    series: [
      {
        name: "Engineering",
        data: days.map((_, i) =>
          Math.round(
            45_000 * dm.Engineering * weekFactor(filters, 30 + i, 0.7, 1.3)
          )
        ),
      },
      {
        name: "Product",
        data: days.map((_, i) =>
          Math.round(
            25_000 * dm.Product * weekFactor(filters, 40 + i, 0.7, 1.3)
          )
        ),
      },
      {
        name: "Design",
        data: days.map((_, i) =>
          Math.round(18_000 * dm.Design * weekFactor(filters, 50 + i, 0.7, 1.3))
        ),
      },
      {
        name: "Marketing",
        data: days.map((_, i) =>
          Math.round(
            14_000 * dm.Marketing * weekFactor(filters, 60 + i, 0.7, 1.3)
          )
        ),
      },
    ],
  }))
}

function fetchHiringFunnel(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const wf = weekFactor(filters, 5)
  const total =
    (240 * dm.Engineering +
      120 * dm.Product +
      80 * dm.Design +
      60 * dm.Marketing) *
    wf
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
          dm.Engineering
            ? Math.round(10 * (3.5 + 1.2 * seeded(weekSeed(filters), 70))) / 10
            : 0,
          dm.Product
            ? Math.round(10 * (3.5 + 1.2 * seeded(weekSeed(filters), 71))) / 10
            : 0,
          dm.Design
            ? Math.round(10 * (3.5 + 1.2 * seeded(weekSeed(filters), 72))) / 10
            : 0,
          dm.Marketing
            ? Math.round(10 * (3.5 + 1.2 * seeded(weekSeed(filters), 73))) / 10
            : 0,
        ],
      },
    ],
  }))
}

// ---------------------------------------------------------------------------
// Metric fetch functions (filter-reactive + week-reactive)
// ---------------------------------------------------------------------------

function fetchTotalHeadcount(filters: Filters): Promise<DashboardMetricData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  const wf = weekFactor(filters, 2)
  const current = Math.round(
    (145 * dm.Engineering +
      89 * dm.Product +
      67 * dm.Design +
      42 * dm.Marketing) *
      sm *
      wf
  )
  const previous = Math.round(
    (130 * dm.Engineering +
      82 * dm.Product +
      60 * dm.Design +
      38 * dm.Marketing) *
      sm *
      wf
  )
  return delay(400).then(() => ({ value: current, previousValue: previous }))
}

function fetchAvgSalary(filters: Filters): Promise<DashboardMetricData> {
  const sm = statusMultiplier(filters)
  const wf = weekFactor(filters, 3, 0.92, 1.08)
  const current = Math.round(72_400 * sm * wf)
  const previous = Math.round(68_900 * sm * wf)
  return delay(400).then(() => ({ value: current, previousValue: previous }))
}

function fetchAttritionMetric(filters: Filters): Promise<DashboardMetricData> {
  const sm = statusMultiplier(filters)
  const wf = weekFactor(filters, 4, 0.5, 1.5)
  const current = Math.round(4.2 * sm * wf * 10) / 10
  const previous = Math.round(5.1 * sm * wf * 10) / 10
  return delay(400).then(() => ({ value: current, previousValue: previous }))
}

// ---------------------------------------------------------------------------
// Pie fetch function
// ---------------------------------------------------------------------------

function fetchHeadcountPie(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const sm = statusMultiplier(filters)
  const wf = weekFactor(filters, 6)
  return delay(500).then(() => ({
    series: {
      name: "Headcount by Department",
      data: [
        {
          value: Math.round(145 * dm.Engineering * sm * wf),
          name: "Engineering",
        },
        { value: Math.round(89 * dm.Product * sm * wf), name: "Product" },
        { value: Math.round(67 * dm.Design * sm * wf), name: "Design" },
        {
          value: Math.round(42 * dm.Marketing * sm * wf),
          name: "Marketing",
        },
      ],
    } as F0DataChartPieSeries,
  }))
}

// ---------------------------------------------------------------------------
// Radar fetch function
// ---------------------------------------------------------------------------

function fetchTeamRadar(filters: Filters): Promise<DashboardChartData> {
  const dm = departmentMultiplier(filters)
  const w = weekSeed(filters)
  const r = (base: number, salt: number) =>
    Math.round(base * (0.7 + 0.6 * seeded(w, salt)))
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
        ? [
            {
              name: "Engineering",
              data: [r(85, 80), r(72, 81), r(90, 82), r(65, 83), r(78, 84)],
            },
          ]
        : []),
      ...(dm.Product
        ? [
            {
              name: "Product",
              data: [r(70, 85), r(88, 86), r(75, 87), r(80, 88), r(82, 89)],
            },
          ]
        : []),
      ...(dm.Design
        ? [
            {
              name: "Design",
              data: [r(78, 90), r(80, 91), r(82, 92), r(75, 93), r(88, 94)],
            },
          ]
        : []),
      ...(dm.Marketing
        ? [
            {
              name: "Marketing",
              data: [r(65, 95), r(85, 96), r(70, 97), r(90, 98), r(76, 99)],
            },
          ]
        : []),
    ],
  }))
}

// ---------------------------------------------------------------------------
// Gauge fetch function
// ---------------------------------------------------------------------------

function fetchHiringGoalGauge(filters: Filters): Promise<DashboardChartData> {
  const progress = Math.round(40 + 50 * seeded(weekSeed(filters), 100))
  return delay(400).then(() => ({
    series: { value: progress, name: "Hiring Goal" },
  }))
}

// ---------------------------------------------------------------------------
// Heatmap fetch function
// ---------------------------------------------------------------------------

const SCATTER_DEPARTMENTS = [
  { name: "Engineering", salaryBase: 52000, count: 26 },
  { name: "Design", salaryBase: 46000, count: 16 },
  { name: "Sales", salaryBase: 41000, count: 20 },
] as const

const SCATTER_FIRST_NAMES = [
  "Ana",
  "Marc",
  "Júlia",
  "Pau",
  "Laia",
  "Oriol",
  "Nuria",
  "Sergi",
]
const SCATTER_LAST_NAMES = ["Ruiz", "Vidal", "Serra", "Bosch", "Roca", "Ferrer"]

/**
 * Deliberate anomalies per department — a senior hire paid well above their
 * tenure, and someone long-serving whose salary never caught up. Spotting these
 * is the whole point of a scatter, so the demo data should contain some.
 */
const SCATTER_OUTLIERS: Record<
  string,
  { x: number; y: number; label: string }[]
> = {
  Engineering: [
    { x: 128000, y: 0.6, label: "Roser Nogué" },
    { x: 37000, y: 13.8, label: "Bernat Illa" },
  ],
  Design: [{ x: 96000, y: 1.4, label: "Ivet Prat" }],
  Sales: [{ x: 34000, y: 11.9, label: "Genís Mas" }],
}

/**
 * Salary against tenure, one point per employee, split by department. Salary
 * rises with tenure plus noise, so the cloud shows the correlation a scatter
 * is meant to reveal.
 */
function fetchSalaryTenureScatter(
  filters: Filters
): Promise<DashboardChartData> {
  const w = weekSeed(filters)
  return delay(600).then(() => ({
    scatterSeries: SCATTER_DEPARTMENTS.map((department, deptIdx) => ({
      name: department.name,
      data: [
        ...Array.from({ length: department.count }, (_, i) => {
          const seed = deptIdx * 100 + i
          const tenure = Math.round(seeded(w, 400 + seed) * 120) / 10
          const salary =
            Math.round(
              (department.salaryBase +
                tenure * 3200 +
                (seeded(w, 700 + seed) - 0.5) * 14000) /
                500
            ) * 500
          return {
            x: salary,
            y: tenure,
            label: `${SCATTER_FIRST_NAMES[i % SCATTER_FIRST_NAMES.length]} ${
              SCATTER_LAST_NAMES[i % SCATTER_LAST_NAMES.length]
            }`,
          }
        }),
        ...(SCATTER_OUTLIERS[department.name] ?? []),
      ],
    })),
  }))
}

function fetchActivityHeatmap(filters: Filters): Promise<DashboardChartData> {
  const w = weekSeed(filters)
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
    data: Array.from({ length: 9 * 5 }, (_, idx) => {
      const x = idx % 9
      const y = Math.floor(idx / 9)
      // Bell-curve-ish: higher activity in mid-morning and mid-afternoon
      const timeBias =
        x <= 2
          ? 0.6 + x * 0.15
          : x <= 5
            ? 1.0 - (x - 3) * 0.05
            : 0.7 - (x - 5) * 0.1
      const value = Math.round(
        25 * timeBias * (0.4 + 1.2 * seeded(w, 200 + idx))
      )
      return [x, y, value] as [number, number, number]
    }),
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

// A summary block the agent would author beside the KPIs it describes: the
// headline reads at KPI size, the body is one sentence of markdown, and each
// button is a question the reader might ask next. The copy is a snapshot, so
// it opts out of dashboard filters and names the period it covers in the body.
const summaryItem: DashboardTextItem = {
  id: "people-summary",
  type: "text",
  title: "Headcount +5%",
  content:
    "Engineering hired **ten people** and Product two this week. Attrition stayed flat at 3.2%.",
  useDashboardFilters: false,
  x: 0,
  y: 0,
  rowSpan: 5,
  actions: [
    { label: "Who are those people?", onClick: () => {} },
    { label: "Which teams are still hiring?", onClick: () => {} },
  ],
}

const metricItems: DashboardMetricItem<DashboardFiltersType>[] = [
  {
    id: "total-headcount",
    title: "Total Headcount",
    type: "metric",
    colSpan: 4,
    x: 4,
    y: 0,
    rowSpan: 3,
    explanation:
      "Total number of employees active in the company **as of the date selected** in the date navigator. Respects all dashboard filters (**department**, **location**, **status**) and updates whenever you move the date or change granularity.",
    fetchData: fetchTotalHeadcount,
  },
  {
    id: "avg-salary",
    title: "Avg. Salary",
    type: "metric",
    colSpan: 4,
    x: 8,
    y: 0,
    rowSpan: 3,
    format: { type: "currency", currency: "EUR" },
    // A KPI takes the same ⓘ as a chart title and a column header: the copy for
    // the one measure its number is read from.
    info: {
      title: "Average base salary",
      description:
        "Mean annual gross base salary across the employees in scope, before bonuses.",
      link: {
        label: "Learn more",
        onClick: () => {},
      },
    },
    fetchData: fetchAvgSalary,
  },
  {
    id: "attrition-rate",
    title: "Attrition Rate",
    type: "metric",
    colSpan: 4,
    x: 12,
    y: 0,
    rowSpan: 3,
    format: { type: "percent" },
    decimals: 1,
    explanation:
      "How many employees left the company this month compared to the **average headcount** of the month.\n\n```\nmonthly attrition = departures in the month / average headcount in the month\naverage headcount in the month = (headcount on day 1 + headcount on the last day) / 2\n```",
    fetchData: fetchAttritionMetric,
  },
]

const collectionItem: DashboardCollectionItem<DashboardFiltersType> = {
  id: "employee-table",
  title: "Employee Directory",
  description: "Paginated list of employees filtered by dashboard filters",
  explanation:
    "All employees that match the active dashboard filters (**department**, **location**, **status**), sorted alphabetically by name.\n\n- One row per active employee.\n- Paginated at **20 rows per page**.\n- Salary is shown in euros, with thousand separators.",
  type: "collection",
  colSpan: 12,
  x: 0,
  y: 38,
  rowSpan: 10,
  createSource: createEmployeeSource,
  visualizations: [employeeTableVisualization],
}

// ---------------------------------------------------------------------------
// Mixed items — full dashboard with all types and filter reactivity
// ---------------------------------------------------------------------------

/**
 * Text items on their own, for the dedicated story. Row 0: no buttons, one
 * button, and three buttons, one of them with a custom icon instead of the
 * default One mark. Row 1: a peer-benchmark block, a body with a link, and a
 * headline long enough to wrap. A bordered metric ends each row so the
 * frameless treatment can be judged against a card.
 */
export const textItems: DashboardItem<DashboardFiltersType>[] = [
  {
    id: "text-note",
    type: "text",
    // Long enough to wrap in a one-slot column: the headline must break onto
    // a second line rather than truncate.
    title: "Churn + Retention across all plans",
    content:
      "Have a high level view on which areas to focus by looking at the key metrics.",
    useDashboardFilters: false,
    x: 0,
    y: 0,
    rowSpan: 5,
  },
  {
    ...summaryItem,
    id: "text-one-question",
    x: 4,
    actions: [{ label: "Who are those people?", onClick: () => {} }],
  },
  {
    id: "text-three-questions",
    type: "text",
    title: "Churn + Retention",
    content:
      "In Q3 2026 net revenue retention is **96.7%**, gross retention **88.4%**, and 0.55% of logos churned.",
    useDashboardFilters: false,
    x: 8,
    y: 0,
    rowSpan: 5,
    actions: [
      { label: "Is NRR above 100%?", onClick: () => {} },
      { label: "Is GRR healthy, above 80%?", onClick: () => {} },
      {
        label: "Break down by plan and segment",
        icon: ChartVerticalBars,
        onClick: () => {},
      },
    ],
  },
  { ...metricItems[0], x: 12, y: 0 },
  // Row 1 — a peer-benchmark block, a body with a link, and a headline long
  // enough to wrap, beside a second bordered metric.
  {
    id: "text-benchmark",
    type: "text",
    title: "Attrition 16.4%",
    content:
      "Worse than the median for Spanish companies with 51 to 200 employees (**13.5%**). Illustrative peer data, 2025.",
    useDashboardFilters: false,
    x: 0,
    y: 1,
    rowSpan: 5,
    actions: [
      { label: "Who left this quarter?", onClick: () => {} },
      { label: "How do peers compare?", onClick: () => {} },
    ],
  },
  {
    id: "text-link",
    type: "text",
    title: "Hiring plan",
    content:
      "Engineering is **12 hires** behind the [Q3 plan](#). Product and Design are on track.",
    useDashboardFilters: false,
    x: 4,
    y: 1,
    rowSpan: 5,
    actions: [{ label: "Which roles are still open?", onClick: () => {} }],
  },
  {
    id: "text-long-headline",
    type: "text",
    title: "Attendance is back to pre-summer levels",
    content: "Average office days per employee rose to **2.4** a week.",
    useDashboardFilters: false,
    x: 8,
    y: 1,
    rowSpan: 5,
    actions: [{ label: "Which offices lead?", onClick: () => {} }],
  },
  { ...metricItems[1], x: 12, y: 1 },
]

/**
 * A summary block beside benchmark KPIs at their default compact height
 * (144px). Two KPIs state the peer median under their value through
 * `DashboardMetricData.comparison`, the third has none; the block reads the
 * row for the user.
 * At that height the block holds one line of copy and one question; longer
 * copy would scroll. Compare with `mixedItems`, where the block's taller row
 * stretches the KPIs to 240px.
 */
/** Explains the reference figure; revealed by the ⓘ after "Peer median". */
const PEER_MEDIAN_INFO =
  "The median of this measure across all companies on Factorial."

export const compactKpiItems: DashboardItem<DashboardFiltersType>[] = [
  {
    id: "compact-summary",
    type: "text",
    title: "Attrition above peers",
    content: "**16.4%** against a 13.5% peer median.",
    useDashboardFilters: false,
    x: 0,
    y: 0,
    rowSpan: 3,
    actions: [{ label: "Who left this quarter?", onClick: () => {} }],
  },
  {
    id: "compact-attrition",
    title: "Attrition Rate",
    type: "metric",
    x: 4,
    y: 0,
    rowSpan: 3,
    format: { type: "percent" },
    decimals: 1,
    fetchData: async () => ({
      value: 16.4,
      comparison: {
        value: 13.5,
        label: "Peer median",
        info: PEER_MEDIAN_INFO,
      },
    }),
  },
  {
    id: "compact-absenteeism",
    title: "Absenteeism Rate",
    type: "metric",
    x: 8,
    y: 0,
    rowSpan: 3,
    format: { type: "percent" },
    decimals: 1,
    fetchData: async () => ({
      value: 3.2,
      comparison: {
        value: 2.8,
        label: "Peer median",
        info: PEER_MEDIAN_INFO,
      },
    }),
  },
  {
    id: "compact-punctuality",
    title: "Punctuality Rate",
    type: "metric",
    x: 12,
    y: 0,
    rowSpan: 3,
    format: { type: "percent" },
    decimals: 1,
    // No benchmark for this measure: the row shows what a KPI without a
    // comparison looks like next to two that have one.
    fetchData: async () => ({ value: 94.1 }),
  },
]

export const mixedItems: DashboardItem<DashboardFiltersType>[] = [
  // Row 0 — summary block + KPI metrics (1 + 3 slots)
  summaryItem,
  ...metricItems,
  // Row 1 — bar (4col) + line (8col)
  {
    id: "headcount",
    title: "Headcount by Department",
    description: "Current headcount and open positions",
    // The ⓘ beside the title explains the figure being plotted — here the
    // measure a semantic dashboard would read from its catalog, with a link
    // through to the full entry.
    info: {
      title: "Active headcount",
      description:
        "Distinct employees with an active contract on the selected date.",
      link: {
        label: "Learn more",
        onClick: () => {},
      },
    },
    explanation:
      "Active employees grouped by **department**, sorted from largest to smallest.\n\n- Only employees with an active contract today are counted.\n- The **target** value overlaid on each bar comes from the company's current hiring plan for that department.",
    type: "chart",
    colSpan: 4,
    x: 0,
    y: 3,
    rowSpan: 7,
    chart: { type: "bar" },
    fetchData: fetchHeadcountByDepartment,
  },
  {
    id: "revenue",
    title: "Revenue Trend",
    description: "Daily revenue vs target for selected week",
    type: "chart",
    colSpan: 8,
    x: 4,
    y: 3,
    rowSpan: 7,
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
  // Row 2 — stacked bar (6col) + horizontal bar (6col)
  {
    id: "cost-breakdown",
    title: "Cost Breakdown",
    description: "Daily cost by department for selected week",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 10,
    rowSpan: 7,
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
    colSpan: 6,
    x: 6,
    y: 10,
    rowSpan: 7,
    chart: {
      type: "bar",
      orientation: "horizontal",
    },
    fetchData: fetchSatisfactionScores,
  },
  // Row 3 — pie + radar + gauge (4col each)
  {
    id: "headcount-pie",
    title: "Headcount Distribution",
    description: "Donut chart of headcount by department",
    type: "chart",
    colSpan: 4,
    x: 0,
    y: 17,
    rowSpan: 7,
    chart: { type: "pie", innerRadius: 60, showPercentage: true },
    fetchData: fetchHeadcountPie,
  },
  {
    id: "team-radar",
    title: "Team Metrics",
    description: "Radar comparison across departments",
    type: "chart",
    colSpan: 4,
    x: 4,
    y: 17,
    rowSpan: 7,
    chart: { type: "radar", showArea: true },
    fetchData: fetchTeamRadar,
  },
  {
    id: "hiring-goal-gauge",
    title: "Hiring Goal",
    description: "Progress toward weekly hiring target",
    type: "chart",
    colSpan: 4,
    x: 8,
    y: 17,
    rowSpan: 7,
    chart: { type: "gauge" },
    fetchData: fetchHiringGoalGauge,
  },
  // Row 4 — heatmap (full width)
  {
    id: "office-activity-summary",
    type: "text",
    title: "Tuesdays are the busiest",
    content:
      "Office attendance peaks on **Tuesday mornings** and drops to a third of that on Fridays. Late afternoons stay quiet all week.",
    useDashboardFilters: false,
    x: 0,
    y: 24,
    rowSpan: 7,
    actions: [
      { label: "Which teams come in on Fridays?", onClick: () => {} },
      { label: "Is this the same in every office?", onClick: () => {} },
    ],
  },
  {
    id: "office-activity",
    title: "Office Activity",
    description: "Hourly activity heatmap across the week",
    type: "chart",
    colSpan: 12,
    x: 4,
    y: 24,
    rowSpan: 7,
    chart: { type: "heatmap" },
    fetchData: fetchActivityHeatmap,
  },
  // Row 5 — salary vs tenure scatter (full width)
  {
    id: "salary-vs-tenure-summary",
    type: "text",
    title: "Pay follows tenure until year six",
    content:
      "Salary rises steadily for the first six years, then flattens. **Design** sits below the trend at every tenure.",
    useDashboardFilters: false,
    x: 0,
    y: 31,
    rowSpan: 7,
    actions: [
      { label: "Who is below the trend line?", onClick: () => {} },
      { label: "How does Design compare to Product?", onClick: () => {} },
    ],
  },
  {
    id: "salary-vs-tenure",
    title: "Salary vs Tenure",
    description: "One point per employee, split by department",
    type: "chart",
    colSpan: 12,
    x: 4,
    y: 31,
    rowSpan: 7,
    chart: {
      type: "scatter",
      xAxisName: "salary",
      yAxisName: "tenure",
      xValueFormatter: (v: number) => `€${Math.round(v / 1000)}k`,
      valueFormatter: (v: number) => `${v} yrs`,
      xTooltipValueFormatter: (v: number) => `€${v.toLocaleString()}`,
      tooltipValueFormatter: (v: number) => `${v} yrs`,
    },
    fetchData: fetchSalaryTenureScatter,
  },
  // Row 6 — employee table (full width)
  collectionItem,
  // Row 6 — hiring funnel (full width)
  {
    id: "hiring-funnel-summary",
    type: "text",
    title: "Offers convert at 61%",
    content:
      "Most candidates drop between screening and interview. Offer acceptance is **61%**, down from 74% last quarter.",
    useDashboardFilters: false,
    x: 0,
    y: 48,
    rowSpan: 7,
    actions: [
      { label: "Which roles lose the most candidates?", onClick: () => {} },
      { label: "Why did offer acceptance fall?", onClick: () => {} },
    ],
  },
  {
    id: "hiring-funnel",
    title: "Hiring Funnel",
    description: "Conversion through hiring stages",
    type: "chart",
    colSpan: 12,
    x: 4,
    y: 48,
    rowSpan: 7,
    chart: {
      type: "funnel",
      valueFormatter: (v: number) => `${v} candidates`,
    },
    fetchData: fetchHiringFunnel,
  },
]
