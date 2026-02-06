import { describe, expect, it } from "vitest"

import { hasPlaceholder, isShowingPlaceholder, resolveValue } from "./utils"

describe("hasPlaceholder", () => {
  it("should return true when object has placeholder property with string value", () => {
    const obj = { placeholder: "Some placeholder" }
    expect(hasPlaceholder(obj)).toBe(true)
  })

  it("should return false when object does not have placeholder property", () => {
    const obj = { someOtherProp: "value" }
    expect(hasPlaceholder(obj)).toBe(false)
  })

  it("should return false when placeholder property is not a string", () => {
    const obj = { placeholder: 123 }
    expect(hasPlaceholder(obj)).toBe(false)
  })

  it("should return false for null input", () => {
    expect(hasPlaceholder(null)).toBe(false)
  })

  it("should return false for undefined input", () => {
    expect(hasPlaceholder(undefined)).toBe(false)
  })

  it("should return false for primitive values", () => {
    expect(hasPlaceholder(123)).toBe(false)
    expect(hasPlaceholder("string")).toBe(false)
    expect(hasPlaceholder(true)).toBe(false)
  })
})

describe("isShowingPlaceholder", () => {
  it("should return true when object has placeholder property and specified key with undefined value", () => {
    const obj = { text: undefined, placeholder: "Some placeholder" }
    expect(isShowingPlaceholder(obj, "text")).toBe(true)
  })

  it("should return false when object has placeholder but specified key has defined value", () => {
    const obj = { text: "Hello", placeholder: "Some placeholder" }
    expect(isShowingPlaceholder(obj, "text")).toBe(false)
  })

  it("should return false when object has no placeholder property", () => {
    const obj = { text: undefined }
    expect(isShowingPlaceholder(obj, "text")).toBe(false)
  })

  it("should return false when specified key doesn't exist in object", () => {
    const obj = { placeholder: "Some placeholder" }
    expect(isShowingPlaceholder(obj, "nonExistentKey")).toBe(true)
  })

  it("should return false for non-object values", () => {
    expect(isShowingPlaceholder("string", "text")).toBe(false)
    expect(isShowingPlaceholder(123, "text")).toBe(false)
    expect(isShowingPlaceholder(null, "text")).toBe(false)
    expect(isShowingPlaceholder(undefined, "text")).toBe(false)
  })
})

describe("resolveValue", () => {
  it("should return primitive value if args is a primitive", () => {
    expect(resolveValue("hello", "text")).toBe("hello")
    expect(resolveValue(123, "number")).toBe(123)
    expect(resolveValue(true, "boolean")).toBe(true)
  })

  it("should return property value if it exists and is defined", () => {
    const obj = { text: "Hello world" }
    expect(resolveValue(obj, "text")).toBe("Hello world")
  })

  it("should return placeholder if property value is undefined", () => {
    const obj = { text: undefined, placeholder: "Some placeholder" }
    expect(resolveValue(obj, "text")).toBe("Some placeholder")
  })

  it("should return placeholder if property doesn't exist", () => {
    const obj = { placeholder: "Some placeholder" }
    expect(resolveValue(obj, "text")).toBe("Some placeholder")
  })

  it("should return undefined if property value is undefined and no placeholder", () => {
    const obj = { text: undefined }
    expect(resolveValue(obj, "text")).toBeUndefined()
  })

  it("should return undefined if property doesn't exist and no placeholder", () => {
    const obj = { someOtherProp: "value" }
    expect(resolveValue(obj, "text")).toBeUndefined()
  })

  it("should return undefined for null or undefined input", () => {
    expect(resolveValue(null, "text")).toBeUndefined()
    expect(resolveValue(undefined, "text")).toBeUndefined()
  })

  it("should handle complex objects correctly", () => {
    const date = new Date()
    const obj = { date, placeholder: "No date" }
    expect(resolveValue(obj, "date")).toStrictEqual(date)

    const objWithUndefined = { date: undefined, placeholder: "No date" }
    expect(resolveValue(objWithUndefined, "date")).toBe("No date")
  })
})
