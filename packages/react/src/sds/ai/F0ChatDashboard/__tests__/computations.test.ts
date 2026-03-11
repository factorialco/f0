import { describe, expect, it } from "vitest"

import type {
  ChatDashboardDataset,
  ChatDashboardFilterDefinition,
  ChartComputation,
  CollectionComputation,
  MetricComputation,
} from "../types"
import {
  computeChartData,
  computeCollectionRows,
  computeMetricData,
  filterRows,
  getUniqueValues,
} from "../computations"

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const employeeDataset: ChatDashboardDataset = {
  columns: ["department", "name", "salary", "contract"],
  rows: [
    {
      department: "Engineering",
      name: "Alice",
      salary: 80000,
      contract: "Full-time",
    },
    {
      department: "Engineering",
      name: "Bob",
      salary: 90000,
      contract: "Full-time",
    },
    {
      department: "Engineering",
      name: "Charlie",
      salary: 75000,
      contract: "Part-time",
    },
    {
      department: "Sales",
      name: "Diana",
      salary: 60000,
      contract: "Full-time",
    },
    { department: "Sales", name: "Eve", salary: 65000, contract: "Contractor" },
    {
      department: "Marketing",
      name: "Frank",
      salary: 55000,
      contract: "Full-time",
    },
  ],
}

const datasets: Record<string, ChatDashboardDataset> = {
  employees: employeeDataset,
}

// ---------------------------------------------------------------------------
// filterRows
// ---------------------------------------------------------------------------

describe("filterRows", () => {
  it("returns all rows when no filters are provided", () => {
    const result = filterRows(
      employeeDataset.rows,
      "employees",
      undefined,
      undefined
    )
    expect(result).toHaveLength(6)
  })

  it("filters rows by a single column value", () => {
    const filterDefs: Record<string, ChatDashboardFilterDefinition> = {
      dept: {
        type: "in",
        label: "Department",
        column: "department",
        datasetId: "employees",
      },
    }
    const filterValues = { dept: ["Engineering"] }
    const result = filterRows(
      employeeDataset.rows,
      "employees",
      filterDefs,
      filterValues
    )
    expect(result).toHaveLength(3)
    expect(result.every((r) => r.department === "Engineering")).toBe(true)
  })

  it("filters with multiple values (OR within a filter)", () => {
    const filterDefs: Record<string, ChatDashboardFilterDefinition> = {
      dept: {
        type: "in",
        label: "Department",
        column: "department",
        datasetId: "employees",
      },
    }
    const filterValues = { dept: ["Engineering", "Sales"] }
    const result = filterRows(
      employeeDataset.rows,
      "employees",
      filterDefs,
      filterValues
    )
    expect(result).toHaveLength(5)
  })

  it("applies AND logic across multiple filters", () => {
    const filterDefs: Record<string, ChatDashboardFilterDefinition> = {
      dept: {
        type: "in",
        label: "Department",
        column: "department",
        datasetId: "employees",
      },
      contract: {
        type: "in",
        label: "Contract",
        column: "contract",
        datasetId: "employees",
      },
    }
    const filterValues = { dept: ["Engineering"], contract: ["Full-time"] }
    const result = filterRows(
      employeeDataset.rows,
      "employees",
      filterDefs,
      filterValues
    )
    expect(result).toHaveLength(2)
  })

  it("ignores filters targeting a different datasetId", () => {
    const filterDefs: Record<string, ChatDashboardFilterDefinition> = {
      dept: {
        type: "in",
        label: "Department",
        column: "department",
        datasetId: "other",
      },
    }
    const filterValues = { dept: ["Engineering"] }
    const result = filterRows(
      employeeDataset.rows,
      "employees",
      filterDefs,
      filterValues
    )
    expect(result).toHaveLength(6)
  })
})

// ---------------------------------------------------------------------------
// computeChartData — single series
// ---------------------------------------------------------------------------

describe("computeChartData", () => {
  it("computes single series with count aggregation", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories).toContain("Engineering")
    expect(result.categories).toContain("Sales")
    expect(result.categories).toContain("Marketing")
    expect(result.series).toHaveLength(1)

    const engIdx = result.categories.indexOf("Engineering")
    expect(result.series[0].data[engIdx]).toBe(3)
  })

  it("computes single series with sum aggregation", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "salary",
      aggregation: "sum",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    const engIdx = result.categories.indexOf("Engineering")
    expect(result.series[0].data[engIdx]).toBe(245000)
  })

  it("sorts by value descending", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
      sortBy: "value",
      sortOrder: "desc",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories[0]).toBe("Engineering")
    expect(result.series[0].data[0]).toBe(3)
  })

  it("sorts by category ascending", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
      sortBy: "category",
      sortOrder: "asc",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories[0]).toBe("Engineering")
    expect(result.categories[1]).toBe("Marketing")
    expect(result.categories[2]).toBe("Sales")
  })

  it("limits the number of categories", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
      sortBy: "value",
      sortOrder: "desc",
      limit: 2,
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories).toHaveLength(2)
    expect(result.series[0].data).toHaveLength(2)
  })

  it("returns empty for missing dataset", () => {
    const computation: ChartComputation = {
      datasetId: "nonexistent",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories).toEqual([])
    expect(result.series).toEqual([])
  })

  it("sorts multi-series by category ascending", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
      series: "contract",
      sortBy: "category",
      sortOrder: "asc",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories[0]).toBe("Engineering")
    expect(result.categories[1]).toBe("Marketing")
    expect(result.categories[2]).toBe("Sales")
  })

  it("sorts multi-series by category descending", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
      series: "contract",
      sortBy: "category",
      sortOrder: "desc",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories[0]).toBe("Sales")
    expect(result.categories[1]).toBe("Marketing")
    expect(result.categories[2]).toBe("Engineering")
  })

  // Multi-series
  it("computes multi-series data split by series column", () => {
    const computation: ChartComputation = {
      datasetId: "employees",
      xAxis: "department",
      yAxis: "*",
      aggregation: "count",
      series: "contract",
    }
    const result = computeChartData(computation, datasets, undefined, undefined)
    expect(result.categories.length).toBeGreaterThanOrEqual(2)
    expect(result.series.length).toBeGreaterThanOrEqual(2)

    const ftSeries = result.series.find((s) => s.name === "Full-time")
    expect(ftSeries).toBeDefined()
  })
})

// ---------------------------------------------------------------------------
// computeMetricData
// ---------------------------------------------------------------------------

describe("computeMetricData", () => {
  it("computes count aggregation", () => {
    const computation: MetricComputation = {
      datasetId: "employees",
      aggregation: "count",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result.value).toBe(6)
  })

  it("computes avg aggregation", () => {
    const computation: MetricComputation = {
      datasetId: "employees",
      aggregation: "avg",
      column: "salary",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    const expected = (80000 + 90000 + 75000 + 60000 + 65000 + 55000) / 6
    expect(result.value).toBeCloseTo(expected)
  })

  it("computes min aggregation", () => {
    const computation: MetricComputation = {
      datasetId: "employees",
      aggregation: "min",
      column: "salary",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result.value).toBe(55000)
  })

  it("computes max aggregation", () => {
    const computation: MetricComputation = {
      datasetId: "employees",
      aggregation: "max",
      column: "salary",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result.value).toBe(90000)
  })

  it("computes countDistinct aggregation", () => {
    const computation: MetricComputation = {
      datasetId: "employees",
      aggregation: "countDistinct",
      column: "department",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result.value).toBe(3)
  })

  it("returns 0 for countDistinct without column", () => {
    const computation: MetricComputation = {
      datasetId: "employees",
      aggregation: "countDistinct",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result.value).toBe(0)
  })

  it("returns 0 for missing dataset", () => {
    const computation: MetricComputation = {
      datasetId: "nonexistent",
      aggregation: "count",
    }
    const result = computeMetricData(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result.value).toBe(0)
  })
})

// ---------------------------------------------------------------------------
// computeCollectionRows
// ---------------------------------------------------------------------------

describe("computeCollectionRows", () => {
  it("returns all rows without sorting or limit", () => {
    const computation: CollectionComputation = { datasetId: "employees" }
    const result = computeCollectionRows(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result).toHaveLength(6)
  })

  it("sorts by numeric column descending", () => {
    const computation: CollectionComputation = {
      datasetId: "employees",
      sortBy: "salary",
      sortOrder: "desc",
    }
    const result = computeCollectionRows(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result[0].salary).toBe(90000)
    expect(result[result.length - 1].salary).toBe(55000)
  })

  it("sorts by string column ascending", () => {
    const computation: CollectionComputation = {
      datasetId: "employees",
      sortBy: "name",
      sortOrder: "asc",
    }
    const result = computeCollectionRows(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result[0].name).toBe("Alice")
  })

  it("limits the number of rows", () => {
    const computation: CollectionComputation = {
      datasetId: "employees",
      sortBy: "salary",
      sortOrder: "desc",
      limit: 3,
    }
    const result = computeCollectionRows(
      computation,
      datasets,
      undefined,
      undefined
    )
    expect(result).toHaveLength(3)
  })
})

// ---------------------------------------------------------------------------
// getUniqueValues
// ---------------------------------------------------------------------------

describe("getUniqueValues", () => {
  it("returns sorted unique values for a column", () => {
    const result = getUniqueValues(datasets, "employees", "department")
    expect(result).toEqual(["Engineering", "Marketing", "Sales"])
  })

  it("returns empty array for missing dataset", () => {
    const result = getUniqueValues(datasets, "nonexistent", "department")
    expect(result).toEqual([])
  })
})
