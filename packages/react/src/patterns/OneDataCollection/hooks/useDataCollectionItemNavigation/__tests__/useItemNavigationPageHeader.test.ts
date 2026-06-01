import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import type { DataCollectionItemNavigationControls } from "../types"
import { useItemNavigationPageHeader } from "../useItemNavigationPageHeader"

type TestRecord = { id: number; name: string }

function makeControls(
  overrides: Partial<DataCollectionItemNavigationControls<TestRecord>> = {}
): DataCollectionItemNavigationControls<TestRecord> {
  return {
    activeItemId: 2,
    activeItem: { id: 2, name: "Current" },
    activeItemUrl: "/items/2",
    currentIndex: 1,
    totalCount: 10,
    previousItem: { id: 1, name: "First" },
    nextItem: { id: 3, name: "Third" },
    canGoPrevious: true,
    canGoNext: true,
    goToPrevious: () => {},
    goToNext: () => {},
    isNavigating: false,
    previousItemUrl: "/items/1",
    nextItemUrl: "/items/3",
    ...overrides,
  }
}

describe("useItemNavigationPageHeader", () => {
  it("returns null when controls is null", () => {
    const { result } = zeroRenderHook(() => useItemNavigationPageHeader(null))
    expect(result.current).toBeNull()
  })

  it("maps controls to NavigationProps shape", () => {
    const controls = makeControls()
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls)
    )
    expect(result.current).not.toBeNull()
    expect(result.current?.previous?.url).toBe("/items/1")
    expect(result.current?.next?.url).toBe("/items/3")
    expect(result.current?.counter).toEqual({ current: 2, total: 10 })
  })

  it("uses currentIndex + 1 for counter.current (1-based)", () => {
    const controls = makeControls({ currentIndex: 0, totalCount: 5 })
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls)
    )
    expect(result.current?.counter?.current).toBe(1)
  })

  it("omits previous when previousItemUrl is null", () => {
    const controls = makeControls({ previousItemUrl: null })
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls)
    )
    expect(result.current?.previous).toBeUndefined()
    expect(result.current?.next?.url).toBe("/items/3")
  })

  it("omits next when nextItemUrl is null", () => {
    const controls = makeControls({ nextItemUrl: null })
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls)
    )
    expect(result.current?.previous?.url).toBe("/items/1")
    expect(result.current?.next).toBeUndefined()
  })

  it("uses getItemTitle for previous and next titles", () => {
    const controls = makeControls()
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls, {
        getItemTitle: (item) => item.name,
      })
    )
    expect(result.current?.previous?.title).toBe("First")
    expect(result.current?.next?.title).toBe("Third")
  })

  it("falls back to default titles when getItemTitle is not provided", () => {
    const controls = makeControls()
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls)
    )
    expect(result.current?.previous?.title).toBe("Previous")
    expect(result.current?.next?.title).toBe("Next")
  })

  it("falls back to default titles when getItemTitle returns undefined", () => {
    const controls = makeControls()
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls, {
        getItemTitle: () => undefined,
      })
    )
    expect(result.current?.previous?.title).toBe("Previous")
    expect(result.current?.next?.title).toBe("Next")
  })

  it("handles null previousItem gracefully (falls back to default title)", () => {
    const controls = makeControls({ previousItem: null })
    const { result } = zeroRenderHook(() =>
      useItemNavigationPageHeader(controls, {
        getItemTitle: (item) => item.name,
      })
    )
    expect(result.current?.previous?.title).toBe("Previous")
  })
})
