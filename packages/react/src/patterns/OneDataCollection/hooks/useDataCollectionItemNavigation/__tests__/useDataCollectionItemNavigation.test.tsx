import { waitFor } from "@testing-library/react"
import { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  ItemNeighborsFetchOptions,
  ItemNeighborsResponse,
  PaginatedFetchOptions,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import {
  DataCollectionStorage,
  DataCollectionStorageHandler,
  DataCollectionStorageProvider,
} from "@/lib/providers/datacollection"
import { notifyDataCollectionStorageChange } from "@/lib/providers/datacollection/dataCollectionStorageEvents"
import { TestProviders, zeroRenderHook } from "@/testing/test-utils"

import { DataCollectionSourceDefinition } from "../../useDataCollectionSource"
import { useDataCollectionItemNavigation } from "../useDataCollectionItemNavigation"

interface TestRecord extends RecordType {
  id: number
  name: string
  department: string
}

const DEPARTMENTS = ["Engineering", "Design"]

const ALL_ITEMS: TestRecord[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  department: DEPARTMENTS[i % DEPARTMENTS.length],
}))

const testFilters = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS.map((d) => ({ value: d, label: d })),
    },
  },
}

type TestFilters = typeof testFilters

const testSortings = {
  name: { label: "Name" },
} satisfies SortingsDefinition

const PER_PAGE = 10

const makeFetchData = () =>
  vi.fn((options: PaginatedFetchOptions<TestFilters>) => {
    const departments = options.filters.department
    let results = ALL_ITEMS.filter(
      (item) => !departments?.length || departments.includes(item.department)
    )
    if (options.search) {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(options.search!.toLowerCase())
      )
    }
    const currentPage =
      "currentPage" in options.pagination
        ? (options.pagination.currentPage ?? 1)
        : 1
    const start = (currentPage - 1) * PER_PAGE
    return Promise.resolve({
      type: "pages" as const,
      records: results.slice(start, start + PER_PAGE),
      total: results.length,
      perPage: PER_PAGE,
      currentPage,
      pagesCount: Math.ceil(results.length / PER_PAGE),
    })
  })

// Backend-like id-relative neighbors: same filtering/search as fetchData,
// neighbors + 1-indexed position resolved within the filtered set.
const makeFetchItemNeighbors = () =>
  vi.fn(
    (
      options: ItemNeighborsFetchOptions<TestFilters>
    ): Promise<ItemNeighborsResponse<TestRecord>> => {
      const departments = options.filters.department
      let results = ALL_ITEMS.filter(
        (item) => !departments?.length || departments.includes(item.department)
      )
      if (options.search) {
        results = results.filter((item) =>
          item.name.toLowerCase().includes(options.search!.toLowerCase())
        )
      }
      const index = results.findIndex((item) => item.id === Number(options.id))
      if (index === -1) {
        return Promise.resolve({
          previous: null,
          next: null,
          total: results.length,
        })
      }
      return Promise.resolve({
        previous: results[index - 1] ?? null,
        next: results[index + 1] ?? null,
        position: index + 1,
        total: results.length,
      })
    }
  )

const makeSource = (
  fetchData: ReturnType<typeof makeFetchData>,
  fetchItemNeighbors?: ReturnType<typeof makeFetchItemNeighbors>
): DataCollectionSourceDefinition<
  TestRecord,
  TestFilters,
  typeof testSortings
> =>
  ({
    filters: testFilters,
    sortings: testSortings,
    search: { enabled: true, sync: true },
    itemUrl: (item: TestRecord) => `/items/${item.id}`,
    dataAdapter: {
      paginationType: "pages",
      perPage: PER_PAGE,
      fetchData,
      fetchItemNeighbors,
    },
  }) as DataCollectionSourceDefinition<
    TestRecord,
    TestFilters,
    typeof testSortings
  >

const makeStorageHandler = (
  storage: DataCollectionStorage | (() => Promise<DataCollectionStorage>)
): DataCollectionStorageHandler => ({
  get: vi.fn(() =>
    typeof storage === "function" ? storage() : Promise.resolve(storage)
  ),
  set: vi.fn(() => Promise.resolve()),
})

const withStorage = (handler: DataCollectionStorageHandler) => {
  const StorageWrapper = ({ children }: { children: ReactNode }) => (
    <TestProviders>
      <DataCollectionStorageProvider handler={handler}>
        {children}
      </DataCollectionStorageProvider>
    </TestProviders>
  )
  return StorageWrapper
}

describe("useDataCollectionItemNavigation", () => {
  it("fetches exactly once, with the persisted state seeded", async () => {
    const fetchData = makeFetchData()
    const handler = makeStorageHandler({
      filters: { department: ["Engineering"] },
      sortings: { field: "name", order: "desc" },
      search: "user",
    })

    const { result } = zeroRenderHook(
      () =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData),
          collectionId: "test/items/v1",
          activeItemId: 1,
        }),
      { wrapper: withStorage(handler) }
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))

    expect(handler.get).toHaveBeenCalledWith("test/items/v1")
    expect(fetchData).toHaveBeenCalledTimes(1)
    const options = fetchData.mock.calls[0][0]
    expect(options.filters).toEqual({ department: ["Engineering"] })
    expect(options.sortings).toEqual(
      expect.arrayContaining([{ field: "name", order: "desc" }])
    )
    expect(options.search).toBe("user")
    expect(result.current.appliedCollectionState).toEqual({
      filters: { department: ["Engineering"] },
      sortings: { field: "name", order: "desc" },
      search: "user",
    })
  })

  it("falls back to definition defaults when storage is empty", async () => {
    const fetchData = makeFetchData()

    const { result } = zeroRenderHook(() =>
      useDataCollectionItemNavigation({
        source: makeSource(fetchData),
        collectionId: "test/items/v1",
        activeItemId: 1,
      })
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))

    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(fetchData.mock.calls[0][0].filters).toEqual({})
    expect(result.current.appliedCollectionState).toBeNull()
  })

  it("falls back to definition defaults when the handler rejects", async () => {
    const fetchData = makeFetchData()
    const handler = makeStorageHandler(() =>
      Promise.reject(new Error("storage unavailable"))
    )

    const { result } = zeroRenderHook(
      () =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData),
          collectionId: "test/items/v1",
          activeItemId: 1,
        }),
      { wrapper: withStorage(handler) }
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))
    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(result.current.appliedCollectionState).toBeNull()
  })

  it("skips the storage read when restorePersistedState is false", async () => {
    const fetchData = makeFetchData()
    const handler = makeStorageHandler({
      filters: { department: ["Engineering"] },
    })

    const { result } = zeroRenderHook(
      () =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData),
          collectionId: "test/items/v1",
          activeItemId: 1,
          restorePersistedState: false,
        }),
      { wrapper: withStorage(handler) }
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))
    expect(handler.get).not.toHaveBeenCalled()
    expect(fetchData.mock.calls[0][0].filters).toEqual({})
  })

  it("does not fetch while disabled", async () => {
    const fetchData = makeFetchData()
    const handler = makeStorageHandler({})

    const { result } = zeroRenderHook(
      () =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData),
          collectionId: "test/items/v1",
          activeItemId: 1,
          enabled: false,
        }),
      { wrapper: withStorage(handler) }
    )

    await new Promise((resolve) => setTimeout(resolve, 20))
    expect(handler.get).not.toHaveBeenCalled()
    expect(fetchData).not.toHaveBeenCalled()
    expect(result.current.isReady).toBe(false)
  })

  it("exposes navigation with prev/next URLs and a counter", async () => {
    const fetchData = makeFetchData()

    const { result } = zeroRenderHook(() =>
      useDataCollectionItemNavigation({
        source: makeSource(fetchData),
        collectionId: "test/items/v1",
        activeItemId: 2,
        getItemTitle: (item) => item.name,
      })
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))

    expect(result.current.activeIndex).toBe(1)
    expect(result.current.hasPrevious).toBe(true)
    expect(result.current.hasNext).toBe(true)
    expect(result.current.navigation).toEqual({
      previous: { url: "/items/1", title: "User 1" },
      next: { url: "/items/3", title: "User 3" },
      counter: { current: 2, total: 25 },
    })
  })

  it("degrades gracefully when the active item is not in the loaded window", async () => {
    const fetchData = makeFetchData()

    const { result } = zeroRenderHook(() =>
      useDataCollectionItemNavigation({
        source: makeSource(fetchData),
        collectionId: "test/items/v1",
        // Item 25 lives on page 3 — not in the first loaded window
        activeItemId: 25,
      })
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))

    expect(result.current.activeIndex).toBe(-1)
    expect(result.current.hasNext).toBe(false)
    expect(result.current.hasPrevious).toBe(false)
    expect(result.current.navigation).toBeNull()
    // No crash, no loop
    expect(fetchData).toHaveBeenCalledTimes(1)
  })

  it("does not refetch when the active item id changes (loop regression)", async () => {
    const fetchData = makeFetchData()

    const { result, rerender } = zeroRenderHook(
      ({ activeItemId }: { activeItemId: number }) =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData),
          collectionId: "test/items/v1",
          activeItemId,
        }),
      { initialProps: { activeItemId: 1 } }
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))
    expect(fetchData).toHaveBeenCalledTimes(1)

    rerender({ activeItemId: 2 })
    rerender({ activeItemId: 3 })
    await new Promise((resolve) => setTimeout(resolve, 20))

    expect(result.current.activeItemId).toBe(3)
    expect(fetchData).toHaveBeenCalledTimes(1)
  })

  describe("fetchItemNeighbors fallback", () => {
    it("resolves navigation for a deep link beyond the loaded window", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()

      const { result } = zeroRenderHook(() =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData, fetchItemNeighbors),
          collectionId: "test/items/v1",
          // Item 15 lives on page 2 — not in the first loaded window
          activeItemId: 15,
          getItemTitle: (item) => item.name,
        })
      )

      await waitFor(() => expect(result.current.navigation).not.toBeNull())

      expect(result.current.navigation).toEqual({
        previous: { url: "/items/14", title: "User 14" },
        next: { url: "/items/16", title: "User 16" },
        counter: { current: 15, total: 25 },
      })
      expect(result.current.hasPrevious).toBe(true)
      expect(result.current.hasNext).toBe(true)
      // The window fetch ran once; neighbors resolved id-relatively once
      expect(fetchData).toHaveBeenCalledTimes(1)
      expect(fetchItemNeighbors).toHaveBeenCalledTimes(1)
      expect(fetchItemNeighbors.mock.calls[0][0].id).toBe(15)
    })

    it("passes the seeded persisted state to the neighbors fetch", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      const handler = makeStorageHandler({
        filters: { department: ["Engineering"] },
      })

      const { result } = zeroRenderHook(
        () =>
          useDataCollectionItemNavigation({
            source: makeSource(fetchData, fetchItemNeighbors),
            collectionId: "test/items/v1",
            // Engineering = odd ids (13 items); 23 is its 12th — beyond the
            // 10-item window
            activeItemId: 23,
          }),
        { wrapper: withStorage(handler) }
      )

      await waitFor(() => expect(result.current.navigation).not.toBeNull())

      const options = fetchItemNeighbors.mock.calls[0][0]
      expect(options.filters).toEqual({ department: ["Engineering"] })
      expect(result.current.navigation?.counter).toEqual({
        current: 12,
        total: 13,
      })
      expect(result.current.previousItem?.id).toBe(21)
      expect(result.current.nextItem?.id).toBe(25)
    })

    it("fills the missing neighbor at the loaded window edge", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()

      const { result } = zeroRenderHook(() =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData, fetchItemNeighbors),
          collectionId: "test/items/v1",
          // Last item of page 1: previous is in the window, next is not
          activeItemId: 10,
        })
      )

      await waitFor(() => expect(result.current.nextItemUrl).toBe("/items/11"))

      // Window values win where present
      expect(result.current.previousItemUrl).toBe("/items/9")
      expect(result.current.navigation?.counter).toEqual({
        current: 10,
        total: 25,
      })
    })

    it("goToNext/goToPrevious jump to the resolved neighbors off-window", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      const onActiveItemChange = vi.fn()

      const { result } = zeroRenderHook(() =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData, fetchItemNeighbors),
          collectionId: "test/items/v1",
          defaultActiveItemId: 15,
          onActiveItemChange,
        })
      )

      await waitFor(() => expect(result.current.navigation).not.toBeNull())

      result.current.goToNext()
      await waitFor(() => expect(result.current.activeItemId).toBe(16))
      expect(onActiveItemChange).toHaveBeenCalledWith(16)

      await waitFor(() => expect(result.current.navigation).not.toBeNull())
      result.current.goToPrevious()
      await waitFor(() => expect(result.current.activeItemId).toBe(15))
    })

    it("holds the previous navigation while neighbors resolve (no flicker)", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      const navigationSamples: Array<boolean> = []

      const { result } = zeroRenderHook(() => {
        const controller = useDataCollectionItemNavigation({
          source: makeSource(fetchData, fetchItemNeighbors),
          collectionId: "test/items/v1",
          defaultActiveItemId: 15,
        })
        navigationSamples.push(controller.navigation !== null)
        return controller
      })

      await waitFor(() => expect(result.current.navigation).not.toBeNull())
      const readyIndex = navigationSamples.indexOf(true)

      result.current.goToNext()
      await waitFor(() =>
        expect(result.current.navigation?.counter).toEqual({
          current: 16,
          total: 25,
        })
      )

      // Once ready, no render between the hops rendered a null navigation
      expect(navigationSamples.slice(readyIndex)).not.toContain(false)
    })

    it("controlled currentFilters win over the persisted filters", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      const handler = makeStorageHandler({
        filters: { department: ["Engineering"] },
      })

      const { result } = zeroRenderHook(
        () =>
          useDataCollectionItemNavigation({
            source: makeSource(fetchData, fetchItemNeighbors),
            collectionId: "test/items/v1",
            activeItemId: 2,
            currentFilters: { department: ["Design"] },
          }),
        { wrapper: withStorage(handler) }
      )

      await waitFor(() => expect(result.current.isReady).toBe(true))

      // Exactly one fetch, with the override — not the persisted filters
      expect(fetchData).toHaveBeenCalledTimes(1)
      expect(fetchData.mock.calls[0][0].filters).toEqual({
        department: ["Design"],
      })
    })

    it("changing currentFilters re-resolves navigation under the new context", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      const handler = makeStorageHandler({
        filters: { department: ["Engineering"] },
      })

      const { result, rerender } = zeroRenderHook(
        ({
          activeItemId,
          currentFilters,
        }: {
          activeItemId: number
          currentFilters?: { department?: string[] }
        }) =>
          useDataCollectionItemNavigation({
            source: makeSource(fetchData, fetchItemNeighbors),
            collectionId: "test/items/v1",
            activeItemId,
            currentFilters,
          }),
        {
          wrapper: withStorage(handler),
          // Engineering item, persisted Engineering filters
          initialProps: { activeItemId: 1, currentFilters: undefined },
        }
      )

      await waitFor(() => expect(result.current.navigation).not.toBeNull())

      // The user refines the dropdown filters to Design and picks a Design
      // item beyond the new first page (Design = even ids, 12 items; 22 is
      // its 11th)
      rerender({
        activeItemId: 22,
        currentFilters: { department: ["Design"] },
      })

      await waitFor(() =>
        expect(result.current.navigation?.counter).toEqual({
          current: 11,
          total: 12,
        })
      )
      expect(result.current.previousItem?.id).toBe(20)
      expect(result.current.nextItem?.id).toBe(24)
      // The window refetched under the new filters
      expect(
        fetchData.mock.calls[fetchData.mock.calls.length - 1][0].filters
      ).toEqual({ department: ["Design"] })
      // Neighbors resolved under the new filters too
      expect(
        fetchItemNeighbors.mock.calls[
          fetchItemNeighbors.mock.calls.length - 1
        ][0].filters
      ).toEqual({ department: ["Design"] })
    })

    it("does not resolve neighbors when the window already answers", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()

      const { result } = zeroRenderHook(() =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData, fetchItemNeighbors),
          collectionId: "test/items/v1",
          // Mid-window: both neighbors loaded
          activeItemId: 5,
        })
      )

      await waitFor(() => expect(result.current.navigation).not.toBeNull())
      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(fetchItemNeighbors).not.toHaveBeenCalled()
    })
  })

  describe("storage write notifications", () => {
    it("re-seeds and refetches when another consumer writes the persisted state", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      let stored: DataCollectionStorage = {
        filters: { department: ["Design"] },
      }
      const handler = makeStorageHandler(() => Promise.resolve(stored))

      const { result } = zeroRenderHook(
        () =>
          useDataCollectionItemNavigation({
            source: makeSource(fetchData, fetchItemNeighbors),
            collectionId: "test/items/v1",
            // Design item: position 1 of 12 under the persisted filters
            activeItemId: 2,
          }),
        { wrapper: withStorage(handler) }
      )

      await waitFor(() =>
        expect(result.current.navigation?.counter).toEqual({
          current: 1,
          total: 12,
        })
      )

      // e.g. the breadcrumb select's editable filters cleared the filters
      // and wrote through to storage
      stored = { filters: {} }
      notifyDataCollectionStorageChange("test/items/v1")

      // Unfiltered, item 2 is position 2 of 25
      await waitFor(() =>
        expect(result.current.navigation?.counter).toEqual({
          current: 2,
          total: 25,
        })
      )
      expect(fetchData.mock.calls.at(-1)![0].filters).toEqual({})
    })

    it("the controlled currentFilters override still wins after a notified write", async () => {
      const fetchData = makeFetchData()
      const fetchItemNeighbors = makeFetchItemNeighbors()
      let stored: DataCollectionStorage = {}
      const handler = makeStorageHandler(() => Promise.resolve(stored))

      const { result } = zeroRenderHook(
        () =>
          useDataCollectionItemNavigation({
            source: makeSource(fetchData, fetchItemNeighbors),
            collectionId: "test/items/v1",
            activeItemId: 2,
            currentFilters: { department: ["Design"] },
          }),
        { wrapper: withStorage(handler) }
      )

      await waitFor(() =>
        expect(result.current.navigation?.counter).toEqual({
          current: 1,
          total: 12,
        })
      )

      stored = { filters: { department: ["Engineering"] } }
      notifyDataCollectionStorageChange("test/items/v1")
      await new Promise((resolve) => setTimeout(resolve, 20))

      // Every fetch ran under the override; the written filters never leaked
      for (const call of fetchData.mock.calls) {
        expect(call[0].filters).toEqual({ department: ["Design"] })
      }
      expect(result.current.navigation?.counter).toEqual({
        current: 1,
        total: 12,
      })
    })

    it("ignores notifications for other collection ids", async () => {
      const fetchData = makeFetchData()
      const handler = makeStorageHandler({})

      const { result } = zeroRenderHook(
        () =>
          useDataCollectionItemNavigation({
            source: makeSource(fetchData),
            collectionId: "test/items/v1",
            activeItemId: 1,
          }),
        { wrapper: withStorage(handler) }
      )

      await waitFor(() => expect(result.current.isReady).toBe(true))
      expect(handler.get).toHaveBeenCalledTimes(1)

      notifyDataCollectionStorageChange("other/collection/v1")
      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(handler.get).toHaveBeenCalledTimes(1)
      expect(fetchData).toHaveBeenCalledTimes(1)
    })
  })

  it("re-hydrates when the collectionId changes", async () => {
    const fetchData = makeFetchData()
    const handler = makeStorageHandler({
      filters: { department: ["Engineering"] },
    })

    const { result, rerender } = zeroRenderHook(
      ({ collectionId }: { collectionId: string }) =>
        useDataCollectionItemNavigation({
          source: makeSource(fetchData),
          collectionId,
          activeItemId: 1,
        }),
      {
        wrapper: withStorage(handler),
        initialProps: { collectionId: "test/items/v1" },
      }
    )

    await waitFor(() => expect(result.current.isReady).toBe(true))
    expect(handler.get).toHaveBeenCalledTimes(1)

    rerender({ collectionId: "test/items/v2" })
    await waitFor(() =>
      expect(handler.get).toHaveBeenCalledWith("test/items/v2")
    )
    expect(handler.get).toHaveBeenCalledTimes(2)
  })
})
