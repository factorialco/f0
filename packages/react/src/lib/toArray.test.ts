import { describe, expect, test } from "vitest"
import { toArray } from "./toArray"

describe("toArray", () => {
  test("returns an empty array when value is undefined", () => {
    const result = toArray(undefined)
    expect(result).toEqual([])
  })

  test("returns the same array when value is already an array", () => {
    const input = [1, 2, 3]
    const result = toArray(input)
    expect(result).toEqual([1, 2, 3])
    expect(result).toBe(input)
  })

  test("wraps a single primitive value in an array", () => {
    const result = toArray(42)
    expect(result).toEqual([42])
  })

  test("wraps a single string value in an array", () => {
    const result = toArray("hello")
    expect(result).toEqual(["hello"])
  })

  test("wraps a single object value in an array", () => {
    const obj = { id: 1, name: "test" }
    const result = toArray(obj)
    expect(result).toEqual([obj])
  })

  test("wraps a single boolean value in an array", () => {
    const result = toArray(true)
    expect(result).toEqual([true])
  })

  test("wraps null in an array", () => {
    const result = toArray(null)
    expect(result).toEqual([null])
  })

  test("handles empty array correctly", () => {
    const result = toArray([])
    expect(result).toEqual([])
  })

  test("handles array of objects", () => {
    const input = [{ id: 1 }, { id: 2 }]
    const result = toArray(input)
    expect(result).toEqual(input)
  })

  test("handles array of mixed types", () => {
    const input = [1, "two", { three: 3 }, true, null]
    const result = toArray(input)
    expect(result).toEqual(input)
  })

  test("preserves type information for strings", () => {
    const result = toArray<string>("test")
    expect(result).toEqual(["test"])
    // Type assertion to verify TypeScript type is correct
    const _typeCheck: string[] = result
    expect(_typeCheck).toBeDefined()
  })

  test("preserves type information for numbers", () => {
    const result = toArray<number>(123)
    expect(result).toEqual([123])
    // Type assertion to verify TypeScript type is correct
    const _typeCheck: number[] = result
    expect(_typeCheck).toBeDefined()
  })
})
