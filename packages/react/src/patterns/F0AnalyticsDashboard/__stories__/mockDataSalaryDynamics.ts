import type { DashboardChartData, DashboardItem } from "../types"

/**
 * "Average salary dynamics (12 months)" — a verbatim reproduction of a real
 * One report, taken from the agent trace that authored it
 * (`authorSemanticDashboardPreview`, cube `employees`): same item ids, titles,
 * descriptions, chart types, orientation, order and `itemHeight`.
 *
 * The three items the agent produced, in the order it produced them:
 * 1. `avg_salary` by `contract_effective_on` (month) — line, full width
 * 2. `avg_salary` by `location_name` × `employee_gender` — horizontal bar
 * 3. `avg_salary` by `location_name`, ordered desc — horizontal bar
 *
 * The NUMBERS are synthetic (Cube data can't be checked into a story), but
 * their shape is what the real report returns: 29 workplaces on the category
 * axis, three gender series, and salaries in the €18K–€92K band — which is
 * what makes the middle chart's category axis crowded enough to be worth
 * iterating on here.
 */

// ---------------------------------------------------------------------------
// Deterministic value generator
// ---------------------------------------------------------------------------

/** Repeatable pseudo-random in 0..1 — same idiom as `mockDataMixed`. */
function seeded(salt: number): number {
  const x = Math.sin(salt * 9301 + 4973) * 49297
  return x - Math.floor(x)
}

/** A salary in the €18K–€92K band, stable per (workplace, series). */
function salary(workplaceIndex: number, seriesIndex: number): number {
  const spread = seeded(workplaceIndex * 7 + seriesIndex * 131)
  return Math.round((18_000 + spread * 74_000) / 100) * 100
}

// ---------------------------------------------------------------------------
// Value formatting
// ---------------------------------------------------------------------------

/**
 * The real dashboard resolves `avg_salary` to the company currency at fetch
 * time (`buildWidgetValueFormatter` in the monorepo); the axis renders it
 * compacted, as the report screenshots show.
 */
const compactEuros = (value: number): string =>
  value >= 1_000 ? `€${Math.round(value / 1_000)}K` : `€${value}`

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

/**
 * `location_name` values, alphabetically ordered — the order Cube returns them
 * in when the query carries no explicit `order`.
 */
const WORKPLACES: string[] = [
  ...Array.from({ length: 2 }, (_, i) => `Barcelona office ${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `London office ${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `New York office ${i + 1}`),
  ...Array.from({ length: 9 }, (_, i) => `Paris office ${i + 1}`),
  ...Array.from({ length: 2 }, (_, i) => `Tokyo office ${i + 1}`),
]

/** `employee_gender` values, in the order the real legend lists them. */
const GENDERS = ["female", "male", "unspecified"] as const

/** The 12 `contract_effective_on` months the report covers. */
const MONTHS = [
  "Sep 2025",
  "Oct 2025",
  "Nov 2025",
  "Dec 2025",
  "Jan 2026",
  "Feb 2026",
  "Mar 2026",
  "Apr 2026",
  "May 2026",
  "Jun 2026",
  "Jul 2026",
  "Aug 2026",
]

// ---------------------------------------------------------------------------
// Chart data
// ---------------------------------------------------------------------------

const monthlyAverage = (): DashboardChartData => ({
  categories: MONTHS,
  series: [
    {
      name: "Average base salary",
      data: MONTHS.map(
        (_, i) => Math.round((46_000 + seeded(i * 17) * 14_000) / 100) * 100
      ),
    },
  ],
})

const byWorkplaceAndGender = (): DashboardChartData => ({
  categories: WORKPLACES,
  series: GENDERS.map((gender, seriesIndex) => ({
    name: gender,
    data: WORKPLACES.map((_, workplaceIndex) =>
      salary(workplaceIndex, seriesIndex)
    ),
  })),
})

const byWorkplace = (): DashboardChartData => {
  // The third item's querySpec orders by `avg_salary` desc, so the rows arrive
  // sorted — the chart renders whatever order the data comes in.
  const rows = WORKPLACES.map((workplace, workplaceIndex) => ({
    workplace,
    value: Math.round(
      GENDERS.reduce(
        (total, _, seriesIndex) => total + salary(workplaceIndex, seriesIndex),
        0
      ) / GENDERS.length
    ),
  })).sort((a, b) => b.value - a.value)

  return {
    categories: rows.map((row) => row.workplace),
    series: [{ name: "Average base salary", data: rows.map((r) => r.value) }],
  }
}

// ---------------------------------------------------------------------------
// Report filters
// ---------------------------------------------------------------------------

/**
 * The filters the real report derives from its querySpec dimensions
 * (`location_name`, `employee_gender`). The fixture data is static, so
 * applying them exercises the filter bar without changing the charts — the
 * production dashboard refetches from Cube instead.
 */
export const salaryDynamicsFilters = {
  workplace: {
    type: "in",
    label: "Workplace",
    options: {
      options: WORKPLACES.map((workplace) => ({
        value: workplace,
        label: workplace,
      })),
    },
  },
  gender: {
    type: "in",
    label: "Gender",
    options: {
      options: GENDERS.map((gender) => ({ value: gender, label: gender })),
    },
  },
} as const

// ---------------------------------------------------------------------------
// Items
// ---------------------------------------------------------------------------

/** The report's title, as the canvas header shows it. */
export const salaryDynamicsTitle = "Average salary dynamics (12 months)"

export const salaryDynamicsDescription =
  "Average base salary grouped by contract effective month over the last 12 months."

export const salaryDynamicsItems: DashboardItem[] = [
  {
    id: "avg_salary_effective_month_line",
    title: "Average base salary by contract effective month",
    description: "Last 12 months, grouped by contract effective month.",
    type: "chart",
    x: 0,
    y: 0,
    itemHeight: 384,
    chart: {
      type: "line",
      valueFormatter: compactEuros,
    },
    fetchData: async () => monthlyAverage(),
  },
  {
    id: "avg_salary_by_workplace_gender",
    title: "Average base salary by workplace, split by gender",
    description:
      "Workplace breakdown with gender as series (contract effective date in the last 12 months).",
    type: "chart",
    x: 0,
    y: 8,
    itemHeight: 655,
    chart: {
      type: "bar",
      orientation: "horizontal",
      showLabels: true,
      valueFormatter: compactEuros,
    },
    fetchData: async () => byWorkplaceAndGender(),
  },
  {
    id: "avg_salary_by_workplace",
    title: "Average base salary by workplace",
    description:
      "Average base salary broken down by workplace (contract effective date in the last 12 months).",
    type: "chart",
    x: 0,
    y: 16,
    itemHeight: 520,
    chart: {
      type: "bar",
      orientation: "horizontal",
      showLabels: true,
      valueFormatter: compactEuros,
    },
    fetchData: async () => byWorkplace(),
  },
]
