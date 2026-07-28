import { describe, expect, it } from "vitest"

import { shouldAutoSizePerPage } from "../useAutoPerPage"

describe("shouldAutoSizePerPage", () => {
  const pages = { paginationType: "pages" as const }

  it("auto-sizes a full-height page-based collection with perPage unset", () => {
    // The case the API should just handle: fullHeight + no perPage → auto.
    expect(shouldAutoSizePerPage({ ...pages }, true)).toBe(true)
    expect(shouldAutoSizePerPage({ ...pages, perPage: undefined }, true)).toBe(
      true
    )
  })

  it("auto-sizes when perPage is explicitly 'auto' and fullHeight", () => {
    expect(shouldAutoSizePerPage({ ...pages, perPage: "auto" }, true)).toBe(
      true
    )
  })

  it("respects a numeric perPage (never auto-sizes)", () => {
    expect(shouldAutoSizePerPage({ ...pages, perPage: 20 }, true)).toBe(false)
  })

  it("does not auto-size without fullHeight, even if perPage is unset", () => {
    expect(shouldAutoSizePerPage({ ...pages }, false)).toBe(false)
    expect(shouldAutoSizePerPage({ ...pages }, undefined)).toBe(false)
    // Explicit "auto" without fullHeight also can't be measured → no auto.
    expect(shouldAutoSizePerPage({ ...pages, perPage: "auto" }, false)).toBe(
      false
    )
  })

  it("only applies to page-based pagination", () => {
    expect(
      shouldAutoSizePerPage({ paginationType: "infinite-scroll" }, true)
    ).toBe(false)
    // A non-paginated adapter has no paginationType.
    expect(shouldAutoSizePerPage({}, true)).toBe(false)
  })
})
