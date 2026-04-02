import { describe, expect, it } from "vitest"

import { getColsHiddenFromDefinition } from "../useColums"

describe("getColsHiddenFromDefinition", () => {
  it("should return ids of columns marked as hidden", () => {
    const columns = [
      { id: "column1", hidden: false },
      { id: "column2", hidden: true },
      { id: "column3", hidden: true },
      { id: "column4", hidden: false },
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column2", "column3"])
  })

  it("should return empty array when no columns are hidden", () => {
    const columns = [
      { id: "column1", hidden: false },
      { id: "column2", hidden: false },
      { id: "column3" }, // hidden property undefined (falsy)
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual([])
  })

  it("should return all column ids when all columns are hidden", () => {
    const columns = [
      { id: "column1", hidden: true },
      { id: "column2", hidden: true },
      { id: "column3", hidden: true },
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column1", "column2", "column3"])
  })

  it("should handle empty columns array", () => {
    const columns: Array<{ id: string; hidden?: boolean }> = []

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual([])
  })

  it("should handle single column that is hidden", () => {
    const columns = [{ id: "column1", hidden: true }]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column1"])
  })

  it("should handle single column that is not hidden", () => {
    const columns = [{ id: "column1", hidden: false }]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual([])
  })

  it("should handle columns without hidden property (defaults to falsy)", () => {
    const columns = [
      { id: "column1" }, // hidden property not defined
      { id: "column2", hidden: true },
      { id: "column3" }, // hidden property not defined
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column2"])
  })

  it("should preserve order of hidden columns", () => {
    const columns = [
      { id: "column3", hidden: true },
      { id: "column1", hidden: false },
      { id: "column5", hidden: true },
      { id: "column2", hidden: true },
      { id: "column4", hidden: false },
    ]

    const result = getColsHiddenFromDefinition(columns)

    // Should maintain the order from the original array
    expect(result).toEqual(["column3", "column5", "column2"])
  })

  it("should handle columns with only some having hidden property", () => {
    const columns = [
      { id: "column1", hidden: true },
      { id: "column2" }, // no hidden property
      { id: "column3", hidden: false },
      { id: "column4" }, // no hidden property
      { id: "column5", hidden: true },
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column1", "column5"])
  })

  it("should handle mixed data types while filtering by hidden", () => {
    const columns = [
      { id: "column1", hidden: true, order: 1, width: 100 },
      { id: "column2", hidden: false, order: 2, width: 200 },
      { id: "column3", hidden: true, sticky: true, info: "Additional info" },
      { id: "column4", hidden: undefined }, // undefined should be falsy
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column1", "column3"])
  })

  it("should handle boolean-like values correctly", () => {
    const columns = [
      { id: "column1", hidden: true },
      { id: "column2", hidden: false },
      { id: "column3" }, // undefined (falsy)
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column1"])
  })

  it("should handle large number of columns efficiently", () => {
    const columns = Array.from({ length: 1000 }, (_, i) => ({
      id: `column${i}`,
      hidden: i % 3 === 0, // every third column is hidden
    }))

    const result = getColsHiddenFromDefinition(columns)

    // Should return every third column (0, 3, 6, 9, ...)
    const expectedHiddenCount = Math.ceil(1000 / 3)
    expect(result).toHaveLength(expectedHiddenCount)
    expect(result[0]).toBe("column0")
    expect(result[1]).toBe("column3")
    expect(result[2]).toBe("column6")
  })

  it("should respect noHiding property - hidden but noHiding should not be returned", () => {
    const columns = [
      { id: "column1", hidden: true, noHiding: true }, // should NOT be hidden
      { id: "column2", hidden: true, noHiding: false }, // should be hidden
      { id: "column3", hidden: true }, // noHiding undefined, should be hidden
      { id: "column4", hidden: false, noHiding: true }, // should NOT be hidden
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column2", "column3"])
  })

  it("should handle undefined hidden and noHiding properties", () => {
    const columns = [
      { id: "column1" }, // both undefined
      { id: "column2", hidden: undefined, noHiding: undefined },
      { id: "column3", hidden: true, noHiding: undefined },
      { id: "column4", hidden: undefined, noHiding: true },
    ]

    const result = getColsHiddenFromDefinition(columns)

    expect(result).toEqual(["column3"])
  })
})
