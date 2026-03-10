import type {
  AggregationType,
  ChatDashboardDataset,
  ChatDashboardFilterDefinition,
  ChartComputation,
  CollectionComputation,
  MetricComputation,
} from "./types"

// ---------------------------------------------------------------------------
// Row type alias
// ---------------------------------------------------------------------------

type Row = Record<string, unknown>

// ---------------------------------------------------------------------------
// Filtering — apply active "in" filter values to raw rows
// ---------------------------------------------------------------------------

/**
 * Filters rows from a specific dataset using the currently active filter
 * values. Only filters whose `datasetId` matches the target dataset are
 * applied. Filters are combined with AND logic (all must match).
 */
export function filterRows(
  rows: Row[],
  datasetId: string,
  filterDefs: Record<string, ChatDashboardFilterDefinition> | undefined,
  filterValues: Record<string, unknown[] | undefined> | undefined
): Row[] {
  if (!filterDefs || !filterValues) return rows

  // Collect active filters that target this dataset
  const activeFilters: Array<{ column: string; values: unknown[] }> = []
  for (const [key, def] of Object.entries(filterDefs)) {
    if (def.datasetId !== datasetId) continue
    const vals = filterValues[key]
    if (!vals || vals.length === 0) continue
    activeFilters.push({ column: def.column, values: vals })
  }

  if (activeFilters.length === 0) return rows

  return rows.filter((row) =>
    activeFilters.every(({ column, values }) => {
      const cellValue = row[column]
      return values.some(
        (v) => v === cellValue || String(v) === String(cellValue)
      )
    })
  )
}

// ---------------------------------------------------------------------------
// Aggregation helpers
// ---------------------------------------------------------------------------

function toNumber(value: unknown): number | null {
  if (typeof value === "number") return value
  if (typeof value === "string") {
    const n = Number(value)
    return Number.isNaN(n) ? null : n
  }
  return null
}

function aggregate(
  rows: Row[],
  column: string | undefined,
  aggregation: AggregationType
): number {
  if (aggregation === "count") {
    return rows.length
  }

  if (aggregation === "countDistinct") {
    const unique = new Set(rows.map((r) => r[column ?? ""]))
    return unique.size
  }

  const numbers = rows
    .map((r) => toNumber(r[column ?? ""]))
    .filter((n): n is number => n !== null)

  if (numbers.length === 0) return 0

  switch (aggregation) {
    case "sum":
      return numbers.reduce((a, b) => a + b, 0)
    case "avg":
      return numbers.reduce((a, b) => a + b, 0) / numbers.length
    case "min":
      return Math.min(...numbers)
    case "max":
      return Math.max(...numbers)
    default:
      return 0
  }
}

// ---------------------------------------------------------------------------
// Group-by helper
// ---------------------------------------------------------------------------

function groupBy(rows: Row[], column: string): Map<string, Row[]> {
  const groups = new Map<string, Row[]>()
  for (const row of rows) {
    const key = String(row[column] ?? "")
    const group = groups.get(key)
    if (group) {
      group.push(row)
    } else {
      groups.set(key, [row])
    }
  }
  return groups
}

// ---------------------------------------------------------------------------
// Chart computation
// ---------------------------------------------------------------------------

export interface ComputedChartData {
  categories: string[]
  series: Array<{ name: string; data: number[] }>
}

export function computeChartData(
  computation: ChartComputation,
  datasets: Record<string, ChatDashboardDataset>,
  filterDefs: Record<string, ChatDashboardFilterDefinition> | undefined,
  filterValues: Record<string, unknown[] | undefined> | undefined
): ComputedChartData {
  const dataset = datasets[computation.datasetId]
  if (!dataset) return { categories: [], series: [] }

  const filtered = filterRows(
    dataset.rows,
    computation.datasetId,
    filterDefs,
    filterValues
  )

  // No series split — single aggregation per xAxis group
  if (!computation.series) {
    const groups = groupBy(filtered, computation.xAxis)
    let entries = [...groups.entries()].map(([category, rows]) => ({
      category,
      value: aggregate(rows, computation.yAxis, computation.aggregation),
    }))

    // Sort
    if (computation.sortBy === "value") {
      entries.sort((a, b) =>
        computation.sortOrder === "asc" ? a.value - b.value : b.value - a.value
      )
    } else if (computation.sortBy === "category") {
      entries.sort((a, b) =>
        computation.sortOrder === "desc"
          ? b.category.localeCompare(a.category)
          : a.category.localeCompare(b.category)
      )
    }

    // Limit
    if (computation.limit && computation.limit > 0) {
      entries = entries.slice(0, computation.limit)
    }

    return {
      categories: entries.map((e) => e.category),
      series: [
        {
          name: computation.yAxis === "*" ? "Count" : computation.yAxis,
          data: entries.map((e) => e.value),
        },
      ],
    }
  }

  // Multi-series: split by the series column
  const xGroups = groupBy(filtered, computation.xAxis)
  const seriesValues = new Set<string>()
  for (const row of filtered) {
    seriesValues.add(String(row[computation.series] ?? ""))
  }

  let categories = [...xGroups.keys()]

  // Build series data
  const seriesArray = [...seriesValues].map((seriesName) => {
    const data = categories.map((cat) => {
      const catRows = xGroups.get(cat) ?? []
      const seriesRows = catRows.filter(
        (r) => String(r[computation.series!] ?? "") === seriesName
      )
      return aggregate(seriesRows, computation.yAxis, computation.aggregation)
    })
    return { name: seriesName, data }
  })

  // Sort by total value across all series
  if (computation.sortBy === "value") {
    const totals = categories.map((_, i) =>
      seriesArray.reduce((sum, s) => sum + s.data[i], 0)
    )
    const indices = categories.map((_, i) => i)
    indices.sort((a, b) =>
      computation.sortOrder === "asc"
        ? totals[a] - totals[b]
        : totals[b] - totals[a]
    )
    categories = indices.map((i) => categories[i])
    for (const s of seriesArray) {
      s.data = indices.map((i) => s.data[i])
    }
  }

  // Limit
  if (computation.limit && computation.limit > 0) {
    categories = categories.slice(0, computation.limit)
    for (const s of seriesArray) {
      s.data = s.data.slice(0, computation.limit)
    }
  }

  return { categories, series: seriesArray }
}

// ---------------------------------------------------------------------------
// Metric computation
// ---------------------------------------------------------------------------

export interface ComputedMetricData {
  value: number
  previousValue?: number
}

export function computeMetricData(
  computation: MetricComputation,
  datasets: Record<string, ChatDashboardDataset>,
  filterDefs: Record<string, ChatDashboardFilterDefinition> | undefined,
  filterValues: Record<string, unknown[] | undefined> | undefined
): ComputedMetricData {
  const dataset = datasets[computation.datasetId]
  if (!dataset) return { value: 0 }

  const filtered = filterRows(
    dataset.rows,
    computation.datasetId,
    filterDefs,
    filterValues
  )

  return {
    value: aggregate(filtered, computation.column, computation.aggregation),
  }
}

// ---------------------------------------------------------------------------
// Collection computation
// ---------------------------------------------------------------------------

export function computeCollectionRows(
  computation: CollectionComputation,
  datasets: Record<string, ChatDashboardDataset>,
  filterDefs: Record<string, ChatDashboardFilterDefinition> | undefined,
  filterValues: Record<string, unknown[] | undefined> | undefined
): Row[] {
  const dataset = datasets[computation.datasetId]
  if (!dataset) return []

  let rows = filterRows(
    dataset.rows,
    computation.datasetId,
    filterDefs,
    filterValues
  )

  // Sort
  if (computation.sortBy) {
    const col = computation.sortBy
    const desc = computation.sortOrder === "desc"
    rows = [...rows].sort((a, b) => {
      const va = a[col]
      const vb = b[col]
      const na = toNumber(va)
      const nb = toNumber(vb)
      if (na !== null && nb !== null) {
        return desc ? nb - na : na - nb
      }
      const sa = String(va ?? "")
      const sb = String(vb ?? "")
      return desc ? sb.localeCompare(sa) : sa.localeCompare(sb)
    })
  }

  // Limit
  if (computation.limit && computation.limit > 0) {
    rows = rows.slice(0, computation.limit)
  }

  return rows
}

// ---------------------------------------------------------------------------
// Unique values extraction for InFilter options
// ---------------------------------------------------------------------------

export function getUniqueValues(
  datasets: Record<string, ChatDashboardDataset>,
  datasetId: string,
  column: string
): string[] {
  const dataset = datasets[datasetId]
  if (!dataset) return []

  const unique = new Set<string>()
  for (const row of dataset.rows) {
    const val = row[column]
    if (val != null && val !== "") {
      unique.add(String(val))
    }
  }

  return [...unique].sort()
}
