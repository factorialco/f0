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
 * Three further items are NOT from the trace, all added for geometry coverage:
 * 4. A stacked horizontal bar in a bottom row — one bar per category rather
 *    than one per series, labels inside the segments, a total beside the bar —
 *    against the same category count. It stacks headcount rather than salary,
 *    since stacked averages would sum to a total that means nothing.
 * 5. A three-row horizontal bar, the low-cardinality end: no window, nothing to
 *    expand, and more height than its bars need.
 * 6. The first item's months as a vertical bar — the other orientation, which
 *    windows nothing, keeps its value axis, and puts its labels above the bars.
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

/**
 * Long-named workplaces are salted into the top of the band so they survive the
 * sort and the row window. Charts show their highest rows first, and a long name
 * that only ever appears on row 24 wouldn't exercise the thing it exists for.
 */
function bandPosition(workplaceIndex: number, spread: number): number {
  return isLongNamed(workplaceIndex) ? 0.85 + spread * 0.15 : spread
}

/** A salary in the €18K–€92K band, stable per (workplace, series). */
function salary(workplaceIndex: number, seriesIndex: number): number {
  const spread = seeded(workplaceIndex * 7 + seriesIndex * 131)
  const position = bandPosition(workplaceIndex, spread)
  return Math.round((18_000 + position * 74_000) / 100) * 100
}

/** A headcount of 3–40 people, stable per (workplace, series). */
function headcount(workplaceIndex: number, seriesIndex: number): number {
  const spread = seeded(workplaceIndex * 13 + seriesIndex * 271)
  return 3 + Math.round(bandPosition(workplaceIndex, spread) * 37)
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
 * in when the query carries no explicit `order`. The chart fixtures re-sort them
 * by amount before rendering (see `byTotalDescending`), matching how dashboard
 * series arrive and what the widget's "Top N of M" description claims.
 */
/**
 * Names long enough to outgrow the axis, which real `location_name` values
 * regularly are — the generated "London office 3" shapes are all comfortably
 * short, so on their own they never show what the label gutter does when it has
 * to choose between the name and the bars.
 *
 * They take three of the generated slots rather than adding to them, so the total
 * stays at the 29 the real report returns.
 */
const LONG_WORKPLACES = [
  "Barcelona Poblenou innovation campus",
  "London Shoreditch engineering annex",
  "New York Brooklyn Navy Yard studio",
]

/** Whether a workplace index falls in {@link LONG_WORKPLACES}, which lead the list. */
function isLongNamed(workplaceIndex: number): boolean {
  return workplaceIndex < LONG_WORKPLACES.length
}

const WORKPLACES: string[] = [
  ...LONG_WORKPLACES,
  ...Array.from({ length: 2 }, (_, i) => `Barcelona office ${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `London office ${i + 1}`),
  ...Array.from({ length: 5 }, (_, i) => `New York office ${i + 1}`),
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

/**
 * Orders categories by their total across all series, descending — the order
 * dashboard series arrive in, and what makes the widget's "Top N of M" honest.
 * `value(workplaceIndex, seriesIndex)` supplies the cell.
 */
const byTotalDescending = (
  value: (workplaceIndex: number, seriesIndex: number) => number
): DashboardChartData => {
  const ordered = WORKPLACES.map((workplace, workplaceIndex) => ({
    workplace,
    cells: GENDERS.map((_, seriesIndex) => value(workplaceIndex, seriesIndex)),
  })).sort(
    (a, b) =>
      b.cells.reduce((sum, cell) => sum + cell, 0) -
      a.cells.reduce((sum, cell) => sum + cell, 0)
  )

  return {
    categories: ordered.map((row) => row.workplace),
    series: GENDERS.map((gender, seriesIndex) => ({
      name: gender,
      data: ordered.map((row) => row.cells[seriesIndex] ?? 0),
    })),
  }
}

const byWorkplaceAndGender = (): DashboardChartData => byTotalDescending(salary)

const headcountByWorkplaceAndGender = (): DashboardChartData =>
  byTotalDescending(headcount)

/**
 * Each workplace's average salary across the gender series, highest first. The
 * third item's querySpec orders by `avg_salary` desc, so the rows arrive sorted
 * — the chart renders whatever order the data comes in.
 */
const workplaceAverages = (): { workplace: string; value: number }[] =>
  WORKPLACES.map((workplace, workplaceIndex) => ({
    workplace,
    value: Math.round(
      GENDERS.reduce(
        (total, _, seriesIndex) => total + salary(workplaceIndex, seriesIndex),
        0
      ) / GENDERS.length
    ),
  })).sort((a, b) => b.value - a.value)

/** One series over `rows`, in the order given. */
const workplaceSeries = (
  rows: { workplace: string; value: number }[]
): DashboardChartData => ({
  categories: rows.map((row) => row.workplace),
  series: [{ name: "Average base salary", data: rows.map((row) => row.value) }],
})

const byWorkplace = (): DashboardChartData =>
  workplaceSeries(workplaceAverages())

/**
 * The same measure as {@link byWorkplace} cut to three rows — the
 * low-cardinality end of the same chart. Nothing windows and nothing needs
 * expanding here; what this covers is the opposite squeeze, a widget with more
 * height than three bars need, where the ratio-based gaps let the bars inflate
 * past the thickness floor instead of leaving the widget half empty.
 */
const topThreeWorkplaces = (): DashboardChartData =>
  workplaceSeries(workplaceAverages().slice(0, 3))

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
  {
    id: "headcount_by_workplace_gender_stacked",
    title: "Headcount by workplace, stacked by gender",
    description:
      "Same workplaces and gender series as above, stacked into one bar per workplace.",
    type: "chart",
    // Shares the bottom row with `avg_salary_by_workplace` (same `y`), so the
    // grid splits that row into two equal slots — a half-width horizontal bar,
    // which is where the label gutter and value labels compete for room.
    x: 6,
    y: 16,
    itemHeight: 520,
    chart: {
      type: "bar",
      orientation: "horizontal",
      stacked: true,
      showLabels: true,
      valueFormatter: (value: number) => `${value}`,
    },
    fetchData: async () => headcountByWorkplaceAndGender(),
  },
  {
    id: "avg_salary_top_three_workplaces",
    title: "Average base salary — top three workplaces",
    description:
      "Three rows, so nothing is windowed and there is nothing to expand.",
    type: "chart",
    // Its own row, full width, and deliberately short: three bars in a 240px
    // widget is the case where the chart has height to spare rather than too
    // little, so the bars come out thicker than the floor.
    x: 0,
    y: 24,
    itemHeight: 240,
    chart: {
      type: "bar",
      orientation: "horizontal",
      showLabels: true,
      valueFormatter: compactEuros,
    },
    fetchData: async () => topThreeWorkplaces(),
  },
  {
    id: "avg_salary_effective_month_bar",
    title: "Average base salary by contract effective month",
    description:
      "The first item's data as columns: the vertical geometry, which keeps its value axis.",
    type: "chart",
    // The same 12 months as the line chart at the top, so the two orientations
    // can be read against one measure. Vertical is where the category axis runs
    // out of width rather than height (12 labels, truncate-then-skip) and where
    // labels sit above the bars, clear of the value axis instead of replacing it.
    x: 0,
    y: 32,
    itemHeight: 384,
    chart: {
      type: "bar",
      orientation: "vertical",
      showLabels: true,
      valueFormatter: compactEuros,
    },
    fetchData: async () => monthlyAverage(),
  },
]
