import { describe, expect, it } from "vitest"

import { normalizeEventValue } from "./normalize"

describe("normalizeEventValue", () => {
  it("passes scalars through unchanged", () => {
    expect(normalizeEventValue("onboarding")).toBe("onboarding")
    expect(normalizeEventValue(42)).toBe(42)
    expect(normalizeEventValue(true)).toBe(true)
  })

  it("keeps falsy scalars instead of skipping them", () => {
    expect(normalizeEventValue(0)).toBe(0)
    expect(normalizeEventValue("")).toBe("")
    expect(normalizeEventValue(false)).toBe(false)
  })

  it("returns undefined for null and undefined", () => {
    expect(normalizeEventValue(null)).toBeUndefined()
    expect(normalizeEventValue(undefined)).toBeUndefined()
  })

  it("converts a Date to an ISO string", () => {
    expect(normalizeEventValue(new Date("2025-01-15T00:00:00.000Z"))).toBe(
      "2025-01-15T00:00:00.000Z"
    )
  })

  it("passes scalar arrays through", () => {
    expect(normalizeEventValue(["documents", "timeoff"])).toEqual([
      "documents",
      "timeoff",
    ])
  })

  it("normalizes a date-range object (Dates become ISO strings)", () => {
    expect(
      normalizeEventValue({
        from: new Date("2025-01-01T00:00:00.000Z"),
        to: new Date("2025-02-01T00:00:00.000Z"),
      })
    ).toEqual({
      from: "2025-01-01T00:00:00.000Z",
      to: "2025-02-01T00:00:00.000Z",
    })
  })

  it("normalizes a nested number-range object", () => {
    expect(
      normalizeEventValue({
        mode: "range",
        from: { value: 1, closed: true },
        to: { value: 5, closed: false },
      })
    ).toEqual({
      mode: "range",
      from: { value: 1, closed: true },
      to: { value: 5, closed: false },
    })
  })

  it("drops undefined entries from objects", () => {
    expect(
      normalizeEventValue({
        from: new Date("2025-01-01T00:00:00.000Z"),
        to: undefined,
      })
    ).toEqual({
      from: "2025-01-01T00:00:00.000Z",
    })
  })

  it("returns undefined for non-serializable values", () => {
    expect(normalizeEventValue(() => undefined)).toBeUndefined()
    expect(normalizeEventValue(Symbol("x"))).toBeUndefined()
  })
})
