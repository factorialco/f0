import { waitFor } from "@testing-library/react"
import { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  PaginatedFetchOptions,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import {
  DataCollectionStorage,
  DataCollectionStorageHandler,
  DataCollectionStorageProvider,
} from "@/lib/providers/datacollection"
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

const makeSource = (
  fetchData: ReturnType<typeof makeFetchData>
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
