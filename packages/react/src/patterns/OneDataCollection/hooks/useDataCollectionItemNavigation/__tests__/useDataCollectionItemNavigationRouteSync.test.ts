import { describe, expect, it, vi } from "vitest"
import { act } from "@testing-library/react"

import { zeroRenderHook } from "@/testing/test-utils"

import type {
  DataCollectionItemNavigationController,
  UseDataCollectionItemNavigationRouteSyncProps,
} from "../types"
import { useDataCollectionItemNavigationRouteSync } from "../useDataCollectionItemNavigationRouteSync"

type TestRecord = { id: string; name: string }

const createItemNavigation = ({
  activeItemId = null,
  openItem = vi.fn(),
  closeItem = vi.fn(),
}: {
  activeItemId?: string | number | symbol | null
  openItem?: (id: string | number | symbol) => void
  closeItem?: () => void
} = {}): DataCollectionItemNavigationController<TestRecord> =>
  ({
    activeItemId,
    activeItem: null,
    activeIndex: activeItemId == null ? -1 : 0,
    absoluteIndex: activeItemId == null ? null : 0,
    loadedItemsCount: 0,
    totalItems: undefined,
    previousItem: null,
    nextItem: null,
    activeItemUrl:
      activeItemId == null ? null : `/items/${String(activeItemId)}`,
    goToNext: vi.fn(),
    goToPrevious: vi.fn(),
    hasNext: false,
    hasPrevious: false,
    setActiveItemId: vi.fn(),
    isNavigating: false,
    nextItemUrl: null,
    previousItemUrl: null,
    isReady: true,
    controls:
      activeItemId == null
        ? null
        : {
            activeItemId,
            activeItem: {
              id: String(activeItemId),
              name: String(activeItemId),
            },
            activeItemUrl: `/items/${String(activeItemId)}`,
            currentIndex: 0,
            totalCount: 1,
            previousItem: null,
            nextItem: null,
            canGoPrevious: false,
            canGoNext: false,
            goToPrevious: vi.fn(),
            goToNext: vi.fn(),
            isNavigating: false,
            previousItemUrl: null,
            nextItemUrl: null,
          },
    openItem,
    closeItem,
    resetSnapshot: vi.fn(),
  }) satisfies DataCollectionItemNavigationController<TestRecord>

const defaultProps = (
  overrides: Partial<
    UseDataCollectionItemNavigationRouteSyncProps<TestRecord>
  > = {}
): UseDataCollectionItemNavigationRouteSyncProps<TestRecord> => ({
  itemNavigation: createItemNavigation(),
  routeId: "item-a",
  ...overrides,
})

describe("useDataCollectionItemNavigationRouteSync", () => {
  it("does not infer active route id from navigation when route is closed on mount", () => {
    const itemNavigation = createItemNavigation({ activeItemId: "item-a" })
    const { result } = zeroRenderHook(() =>
      useDataCollectionItemNavigationRouteSync(
        defaultProps({ itemNavigation, routeId: null })
      )
    )

    expect(result.current.activeRouteId).toBeNull()
    expect(result.current.activeItemId).toBeNull()
    expect(result.current.controls).toBeNull()
  })

  it("closes and masks item navigation when the route is closed", () => {
    const closeItem = vi.fn()
    const { result, rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({ activeItemId: "item-a" }),
          routeId: "item-a",
        }),
      }
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-a",
          closeItem,
        }),
        routeId: null,
      })
    )

    expect(closeItem).toHaveBeenCalledTimes(1)
    expect(result.current.activeRouteId).toBeNull()
    expect(result.current.activeItemId).toBeNull()
    expect(result.current.controls).toBeNull()
  })

  it("opens a navigation session when the route id changes", () => {
    const openItem = vi.fn()
    const { result, rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({ openItem }),
          routeId: "item-a",
        }),
      }
    )

    expect(openItem).toHaveBeenCalledWith("item-a")
    expect(result.current.activeRouteId).toBe("item-a")

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({ openItem }),
        routeId: "item-b",
      })
    )

    expect(openItem).toHaveBeenCalledWith("item-b")
    expect(openItem).toHaveBeenCalledTimes(2)
    expect(result.current.activeRouteId).toBe("item-b")
  })

  it("does not reopen the routed item when only the controller identity changes", () => {
    const openInitialItem = vi.fn()
    const openUpdatedItem = vi.fn()
    const { rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({
            activeItemId: "item-a",
            openItem: openInitialItem,
          }),
          routeId: "item-a",
        }),
      }
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-b",
          openItem: openUpdatedItem,
        }),
        routeId: "item-a",
      })
    )

    expect(openInitialItem).toHaveBeenCalledWith("item-a")
    expect(openUpdatedItem).not.toHaveBeenCalled()
  })

  it("calls onRouteIdChange when item navigation moves to another item", () => {
    const onRouteIdChange = vi.fn()
    const { result, rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({ activeItemId: "item-a" }),
          routeId: "item-a",
          onRouteIdChange,
        }),
      }
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({ activeItemId: "item-b" }),
        routeId: "item-a",
        onRouteIdChange,
      })
    )

    expect(onRouteIdChange).toHaveBeenCalledWith("item-b", "item-b")
    expect(result.current.activeRouteId).toBe("item-b")
  })

  it("ignores stale active item changes while a route-open is pending", () => {
    const onRouteIdChange = vi.fn()
    const openItem = vi.fn()
    const { result, rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({
            activeItemId: "item-a",
            openItem,
          }),
          routeId: "item-a",
          onRouteIdChange,
        }),
      }
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-a",
          openItem,
        }),
        routeId: "item-c",
        onRouteIdChange,
      })
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-b",
          openItem,
        }),
        routeId: "item-c",
        onRouteIdChange,
      })
    )

    expect(onRouteIdChange).not.toHaveBeenCalled()
    expect(result.current.activeRouteId).toBe("item-c")

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-c",
          openItem,
        }),
        routeId: "item-c",
        onRouteIdChange,
      })
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-d",
          openItem,
        }),
        routeId: "item-c",
        onRouteIdChange,
      })
    )

    expect(onRouteIdChange).toHaveBeenCalledWith("item-d", "item-d")
    expect(result.current.activeRouteId).toBe("item-d")
  })

  it("supports numeric item IDs with parse and format callbacks", () => {
    const openItem = vi.fn()
    const onRouteIdChange = vi.fn()
    const { result, rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({ openItem }),
          routeId: "42",
          parseRouteId: Number,
          formatItemId: (id) => `record-${String(id)}`,
          onRouteIdChange,
        }),
      }
    )

    expect(openItem).toHaveBeenCalledWith(42)
    expect(result.current.activeRouteId).toBe("42")

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({ activeItemId: 42, openItem }),
        routeId: "42",
        parseRouteId: Number,
        formatItemId: (id) => `record-${String(id)}`,
        onRouteIdChange,
      })
    )

    act(() => {
      rerender(
        defaultProps({
          itemNavigation: createItemNavigation({ activeItemId: 43, openItem }),
          routeId: "42",
          parseRouteId: Number,
          formatItemId: (id) => `record-${String(id)}`,
          onRouteIdChange,
        })
      )
    })

    expect(onRouteIdChange).toHaveBeenCalledWith("record-43", 43)
    expect(result.current.activeRouteId).toBe("record-43")
  })

  it("ignores stale route echoes that no longer match the current navigation item", () => {
    const openItem = vi.fn()
    const onRouteIdChange = vi.fn()
    const { result, rerender } = zeroRenderHook(
      (props: UseDataCollectionItemNavigationRouteSyncProps<TestRecord>) =>
        useDataCollectionItemNavigationRouteSync(props),
      {
        initialProps: defaultProps({
          itemNavigation: createItemNavigation({
            activeItemId: "item-a",
            openItem,
          }),
          routeId: "item-a",
          onRouteIdChange,
        }),
      }
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-b",
          openItem,
        }),
        routeId: "item-a",
        onRouteIdChange,
      })
    )

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-c",
          openItem,
        }),
        routeId: "item-a",
        onRouteIdChange,
      })
    )

    expect(onRouteIdChange).toHaveBeenNthCalledWith(1, "item-b", "item-b")
    expect(onRouteIdChange).toHaveBeenNthCalledWith(2, "item-c", "item-c")
    expect(result.current.activeRouteId).toBe("item-c")

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-c",
          openItem,
        }),
        routeId: "item-b",
        onRouteIdChange,
      })
    )

    expect(openItem).not.toHaveBeenCalledWith("item-b")
    expect(result.current.activeRouteId).toBe("item-c")

    rerender(
      defaultProps({
        itemNavigation: createItemNavigation({
          activeItemId: "item-c",
          openItem,
        }),
        routeId: "item-c",
        onRouteIdChange,
      })
    )

    expect(openItem).not.toHaveBeenCalledWith("item-c")
    expect(result.current.activeRouteId).toBe("item-c")
  })

  it("returns controls from the item navigation controller", () => {
    const itemNavigation = createItemNavigation({ activeItemId: "item-a" })
    const { result } = zeroRenderHook(() =>
      useDataCollectionItemNavigationRouteSync(
        defaultProps({ itemNavigation, routeId: "item-a" })
      )
    )

    expect(result.current.controls).toBe(itemNavigation.controls)
    expect(result.current.activeItemId).toBe("item-a")
  })
})
