import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import {
  PageHeaderItemNavigationInput,
  usePageHeaderItemNavigation,
} from "../usePageHeaderItemNavigation"

type TestRecord = { id: number; name: string }

function makeInput(
  overrides: Partial<PageHeaderItemNavigationInput<TestRecord>> = {}
): PageHeaderItemNavigationInput<TestRecord> {
  return {
    activeIndex: 1,
    absoluteIndex: 1,
    totalItems: 10,
    previousItem: { id: 1, name: "First" },
    nextItem: { id: 3, name: "Third" },
    previousItemUrl: "/items/1",
    nextItemUrl: "/items/3",
    ...overrides,
  }
}

describe("usePageHeaderItemNavigation", () => {
  it("returns null when input is null", () => {
    const { result } = zeroRenderHook(() => usePageHeaderItemNavigation(null))
    expect(result.current).toBeNull()
  })

  it("maps the navigation result to NavigationProps", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(makeInput())
    )
    expect(result.current?.previous?.url).toBe("/items/1")
    expect(result.current?.next?.url).toBe("/items/3")
    expect(result.current?.counter).toEqual({ current: 2, total: 10 })
  })

  it("uses getItemTitle for the link titles", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(makeInput(), {
        getItemTitle: (item) => item.name,
      })
    )
    expect(result.current?.previous?.title).toBe("First")
    expect(result.current?.next?.title).toBe("Third")
  })

  it("falls back to Previous/Next titles when getItemTitle is absent", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(makeInput())
    )
    expect(result.current?.previous?.title).toBe("Previous")
    expect(result.current?.next?.title).toBe("Next")
  })

  it("omits links whose URL is null", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(
        makeInput({ previousItemUrl: null, previousItem: null })
      )
    )
    expect(result.current?.previous).toBeUndefined()
    expect(result.current?.next?.url).toBe("/items/3")
  })

  it("omits the counter when the absolute index is unknown", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(makeInput({ absoluteIndex: null }))
    )
    expect(result.current?.counter).toBeUndefined()
  })

  it("omits the counter when the total is unknown", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(makeInput({ totalItems: undefined }))
    )
    expect(result.current?.counter).toBeUndefined()
  })

  it("returns null when fully degraded (no links, no counter)", () => {
    const { result } = zeroRenderHook(() =>
      usePageHeaderItemNavigation(
        makeInput({
          activeIndex: -1,
          absoluteIndex: null,
          totalItems: undefined,
          previousItem: null,
          nextItem: null,
          previousItemUrl: null,
          nextItemUrl: null,
        })
      )
    )
    expect(result.current).toBeNull()
  })
})
