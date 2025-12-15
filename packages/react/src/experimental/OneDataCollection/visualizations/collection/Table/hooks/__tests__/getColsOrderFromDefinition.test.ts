import { describe, expect, it } from "vitest"
import { getColsOrderFromDefinition } from "../useColums"

describe("getColsOrderFromDefinition", () => {
  it("should return columns in order when all columns have order property", () => {
    const columns = [
      { id: "column3", order: 3 },
      { id: "column1", order: 1 },
      { id: "column2", order: 2 },
    ]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column1", "column2", "column3"])
  })

  it("should place columns without order at the end", () => {
    const columns = [
      { id: "column3", order: 2 },
      { id: "column4" }, // no order
      { id: "column1", order: 1 },
      { id: "column2" }, // no order
    ]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column1", "column3", "column4", "column2"])
  })

  it("should handle columns with same order value", () => {
    const columns = [
      { id: "column2", order: 1 },
      { id: "column1", order: 1 },
      { id: "column3", order: 2 },
    ]

    const result = getColsOrderFromDefinition(columns)

    // When order is the same, original array order is maintained
    expect(result).toEqual(["column2", "column1", "column3"])
  })

  it("should handle empty columns array", () => {
    const columns: Array<{ id: string; order?: number }> = []

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual([])
  })

  it("should handle single column", () => {
    const columns = [{ id: "column1", order: 1 }]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column1"])
  })

  it("should handle single column without order", () => {
    const columns = [{ id: "column1" }]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column1"])
  })

  it("should handle negative order values", () => {
    const columns = [
      { id: "column1", order: -1 },
      { id: "column2", order: 0 },
      { id: "column3", order: 1 },
    ]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column1", "column2", "column3"])
  })

  it("should handle large order values", () => {
    const columns = [
      { id: "column1", order: 1000 },
      { id: "column2", order: 999 },
      { id: "column3" }, // no order - should be at end with value columns.length (3)
    ]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column3", "column2", "column1"])
  })

  it("should handle columns with mixed order and no order", () => {
    const columns = [
      { id: "column5" }, // no order
      { id: "column2", order: 2 },
      { id: "column6" }, // no order
      { id: "column1", order: 1 },
      { id: "column3", order: 3 },
    ]

    const result = getColsOrderFromDefinition(columns)

    // Ordered columns first, then non-ordered in original order
    expect(result).toEqual(["column1", "column2", "column3", "column5", "column6"])
  })

  it("should use columns.length as fallback value for undefined order", () => {
    const columns = [
      { id: "column1", order: 10 },
      { id: "column2" }, // order undefined, should use columns.length (3)
      { id: "column3", order: 2 },
    ]

    const result = getColsOrderFromDefinition(columns)

    // column2 should be treated as order: 3 (columns.length)
    expect(result).toEqual(["column3", "column2", "column1"])
  })

  it("should handle zero order value", () => {
    const columns = [
      { id: "column1", order: 1 },
      { id: "column2", order: 0 },
      { id: "column3" }, // undefined order
    ]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column2", "column1", "column3"])
  })

  it("should handle decimal order values", () => {
    const columns = [
      { id: "column1", order: 1.5 },
      { id: "column2", order: 1.2 },
      { id: "column3", order: 2.1 },
    ]

    const result = getColsOrderFromDefinition(columns)

    expect(result).toEqual(["column2", "column1", "column3"])
  })
})
