import { describe, expect, it } from "vitest"

import { fuzzyMatch } from "./fuzzyMatch"

describe("fuzzyMatch", () => {
  it("matches everything for an empty or whitespace query", () => {
    expect(fuzzyMatch("", "Roger Campos")).toBe(true)
    expect(fuzzyMatch("   ", "Roger Campos")).toBe(true)
  })

  it("matches a contiguous substring", () => {
    expect(fuzzyMatch("camp", "Roger Campos")).toBe(true)
  })

  it("matches a non-contiguous subsequence", () => {
    expect(fuzzyMatch("rcm", "Roger Campos")).toBe(true)
  })

  it("is case-insensitive", () => {
    expect(fuzzyMatch("ROGER", "roger campos")).toBe(true)
  })

  it("is accent-insensitive in both directions", () => {
    expect(fuzzyMatch("raul", "Raúl Sigüenza")).toBe(true)
    expect(fuzzyMatch("raúl", "Raul Siguenza")).toBe(true)
  })

  it("returns false when characters are out of order", () => {
    expect(fuzzyMatch("mcr", "Roger Campos")).toBe(false)
  })

  it("returns false when a character is missing", () => {
    expect(fuzzyMatch("xyz", "Roger Campos")).toBe(false)
  })
})
