import { describe, expect, it } from "vitest"

import { calculateVisiblePage } from "../visiblePage"

const pageEl = (offsetTop: number, offsetHeight: number) =>
  ({ offsetTop, offsetHeight }) as HTMLElement

const container = (offsetHeight: number, scrollTop: number) =>
  ({ offsetHeight, scrollTop }) as HTMLElement

describe("calculateVisiblePage", () => {
  it("returns the page with the most visible height", () => {
    const pages = [pageEl(0, 400), pageEl(400, 400)]
    expect(calculateVisiblePage(container(500, 0), pages, 0)).toBe(1)
  })

  it("returns the lower page once it dominates the viewport", () => {
    const pages = [pageEl(0, 400), pageEl(400, 400)]
    expect(calculateVisiblePage(container(500, 450), pages, 0)).toBe(2)
  })

  it("ignores null page refs", () => {
    const pages = [null, pageEl(0, 400)]
    expect(calculateVisiblePage(container(500, 0), pages, 0)).toBe(2)
  })

  it("returns null when there are no pages", () => {
    expect(calculateVisiblePage(container(500, 0), [], 0)).toBeNull()
  })
})
