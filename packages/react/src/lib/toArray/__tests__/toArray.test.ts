import { describe, expect, it } from "vitest"
import { toArray } from "../toArray"

describe("toArray", () => {
  it("should return an empty array when value is undefined", () => {
    const result = toArray(undefined)
    expect(result).toEqual([])
  })

  it("should return an empty array when value is null", () => {
    const result = toArray(null)
    expect(result).toEqual([])
  })

  it("should return the same array when value is already an array", () => {
    const input = [1, 2, 3]
    const result = toArray(input)
    expect(result).toEqual([1, 2, 3])
    expect(result).toBe(input) // Should return the same reference
  })

  it("should wrap a single value in an array", () => {
    const result = toArray(42)
    expect(result).toEqual([42])
  })

  it("should wrap a string value in an array", () => {
    const result = toArray("hello")
    expect(result).toEqual(["hello"])
  })

  it("should wrap an object in an array", () => {
    const obj = { id: 1, name: "test" }
    const result = toArray(obj)
    expect(result).toEqual([obj])
  })

  it("should wrap a boolean value in an array", () => {
    expect(toArray(true)).toEqual([true])
    expect(toArray(false)).toEqual([false])
  })

  it("should handle empty arrays", () => {
    const input: number[] = []
    const result = toArray(input)
    expect(result).toEqual([])
    expect(result).toBe(input)
  })

  it("should handle arrays with multiple types", () => {
    const input = [1, "two", { three: 3 }, true]
    const result = toArray(input)
    expect(result).toEqual([1, "two", { three: 3 }, true])
  })

  it("should handle zero as a value", () => {
    const result = toArray(0)
    expect(result).toEqual([0])
  })

  it("should handle empty string as a value", () => {
    const result = toArray("")
    expect(result).toEqual([""])
  })

  it("should preserve type information with generics", () => {
    // String type
    const stringResult: string[] = toArray<string>("test")
    expect(stringResult).toEqual(["test"])

    // Number type
    const numberResult: number[] = toArray<number>(123)
    expect(numberResult).toEqual([123])

    // Custom type
    type User = { id: number; name: string }
    const user: User = { id: 1, name: "John" }
    const userResult: User[] = toArray<User>(user)
    expect(userResult).toEqual([user])
  })
})
