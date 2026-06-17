import { waitFor } from "@testing-library/react"
import { describe, expect, expectTypeOf, it, vi } from "vitest"

import { DataCollectionDataAdapter } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { zeroRenderHook } from "@/testing/test-utils"

import {
  DataAdapter,
  ItemNeighborsFetchOptions,
  ItemNeighborsResponse,
  PaginatedDataAdapter,
  PaginatedFetchOptions,
} from "../../types/fetch.typings"
import { SortingsStateMultiple } from "../../types/sortings.typings"
import { useItemNeighbors } from "../useItemNeighbors"

type TestRecord = { id: number; name: string }

type TestFilters = {
  department: { type: "in"; label: string; options: { options: [] } }
}

const ITEMS: TestRecord[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}))

const NO_SORTINGS: SortingsStateMultiple = []

const neighborsOf = (id: number): ItemNeighborsResponse<TestRecord> => {
  const index = ITEMS.findIndex((item) => item.id === id)
  return {
    previous: index > 0 ? ITEMS[index - 1] : null,
    next: index >= 0 && index < ITEMS.length - 1 ? ITEMS[index + 1] : null,
    position: index + 1,
    total: ITEMS.length,
  }
}

const makeAdapter = (
  fetchItemNeighbors?: (
    options: ItemNeighborsFetchOptions<
      TestFilters,
      PaginatedFetchOptions<TestFilters>
    >
  ) =>
    | ItemNeighborsResponse<TestRecord>
    | Promise<ItemNeighborsResponse<TestRecord>>
): DataAdapter<TestRecord, TestFilters> => ({
  paginationType: "pages",
  perPage: 10,
  fetchData: () => ({
    type: "pages",
    records: ITEMS.slice(0, 10),
    total: ITEMS.length,
    perPage: 10,
    currentPage: 1,
    pagesCount: 2,
  }),
  fetchItemNeighbors,
})

describe("useItemNeighbors", () => {
  it("reports isSupported false and stays idle when the capability is absent", async () => {
    const { result } = zeroRenderHook(() =>
      useItemNeighbors({
        dataAdapter: makeAdapter(undefined),
        id: 5,
        filters: {},
        sortings: NO_SORTINGS,
      })
    )

    expect(result.current.isSupported).toBe(false)
    expect(result.current.neighbors).toBeNull()
    expect(result.current.isResolving).toBe(false)
  })

  it("does not fetch when disabled or when id is null", async () => {
    const fetchItemNeighbors = vi.fn(() => neighborsOf(5))

    const { rerender } = zeroRenderHook(
      ({ id, enabled }: { id: number | null; enabled: boolean }) =>
        useItemNeighbors({
          dataAdapter: makeAdapter(fetchItemNeighbors),
          id,
          filters: {},
          sortings: NO_SORTINGS,
          enabled,
        }),
      { initialProps: { id: null as number | null, enabled: true } }
    )

    rerender({ id: 5, enabled: false })
    await new Promise((resolve) => setTimeout(resolve, 10))
    expect(fetchItemNeighbors).not.toHaveBeenCalled()
  })

  it("resolves neighbours and passes filters/sortings/search through", async () => {
    const fetchItemNeighbors = vi.fn(
      (options: ItemNeighborsFetchOptions<TestFilters>) =>
        neighborsOf(Number(options.id))
    )
    const sortings: SortingsStateMultiple = [{ field: "name", order: "asc" }]

    const { result } = zeroRenderHook(() =>
      useItemNeighbors({
        dataAdapter: makeAdapter(fetchItemNeighbors),
        id: 5,
        filters: { department: ["Engineering"] },
        sortings,
        search: "item",
      })
    )

    await waitFor(() => expect(result.current.neighbors).not.toBeNull())

    expect(fetchItemNeighbors).toHaveBeenCalledWith({
      id: 5,
      filters: { department: ["Engineering"] },
      sortings,
      search: "item",
    })
    expect(result.current.neighbors).toEqual({
      previous: ITEMS[3],
      next: ITEMS[5],
      position: 5,
      total: 20,
    })
    expect(result.current.isResolving).toBe(false)
  })

  it("drops stale responses when the id changes mid-flight (race)", async () => {
    const deferred = new Map<
      number,
      (value: ItemNeighborsResponse<TestRecord>) => void
    >()
    const fetchItemNeighbors = vi.fn(
      (options: ItemNeighborsFetchOptions<TestFilters>) =>
        new Promise<ItemNeighborsResponse<TestRecord>>((resolve) => {
          deferred.set(Number(options.id), resolve)
        })
    )

    const { result, rerender } = zeroRenderHook(
      ({ id }: { id: number }) =>
        useItemNeighbors({
          dataAdapter: makeAdapter(fetchItemNeighbors),
          id,
          filters: {},
          sortings: NO_SORTINGS,
        }),
      { initialProps: { id: 5 } }
    )

    rerender({ id: 6 })
    await waitFor(() => expect(deferred.has(6)).toBe(true))

    // Resolve the second request first, then the (stale) first one
    deferred.get(6)!(neighborsOf(6))
    await waitFor(() => expect(result.current.neighbors).not.toBeNull())
    deferred.get(5)!(neighborsOf(5))
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(result.current.neighbors).toEqual(neighborsOf(6))
  })

  it("serves repeated ids from cache and clears it when filters change", async () => {
    const fetchItemNeighbors = vi.fn(
      (options: ItemNeighborsFetchOptions<TestFilters>) =>
        Promise.resolve(neighborsOf(Number(options.id)))
    )

    const { result, rerender } = zeroRenderHook(
      ({ id, filters }: { id: number; filters: { department?: string[] } }) =>
        useItemNeighbors({
          dataAdapter: makeAdapter(fetchItemNeighbors),
          id,
          filters,
          sortings: NO_SORTINGS,
        }),
      { initialProps: { id: 5, filters: {} } }
    )

    await waitFor(() => expect(result.current.neighbors).not.toBeNull())
    rerender({ id: 6, filters: {} })
    await waitFor(() =>
      expect(result.current.neighbors).toEqual(neighborsOf(6))
    )
    expect(fetchItemNeighbors).toHaveBeenCalledTimes(2)

    // Back to a visited id: served synchronously from cache, no extra fetch
    rerender({ id: 5, filters: {} })
    await waitFor(() =>
      expect(result.current.neighbors).toEqual(neighborsOf(5))
    )
    expect(fetchItemNeighbors).toHaveBeenCalledTimes(2)

    // Context change clears the cache: the same id fetches again
    rerender({ id: 5, filters: { department: ["Engineering"] } })
    await waitFor(() => expect(fetchItemNeighbors).toHaveBeenCalledTimes(3))
  })

  it("exposes errors and calls onError, without caching them", async () => {
    const onError = vi.fn()
    const failure = new Error("backend down")
    const fetchItemNeighbors = vi.fn(() => Promise.reject(failure))

    const { result } = zeroRenderHook(() =>
      useItemNeighbors({
        dataAdapter: makeAdapter(fetchItemNeighbors),
        id: 5,
        filters: {},
        sortings: NO_SORTINGS,
        onError,
      })
    )

    await waitFor(() => expect(result.current.error).not.toBeNull())
    expect(result.current.error).toEqual({
      message: "Error fetching item neighbors",
      cause: failure,
    })
    expect(result.current.neighbors).toBeNull()
    expect(onError).toHaveBeenCalledWith({
      message: "Error fetching item neighbors",
      cause: failure,
    })
  })

  it("cancels the in-flight request on unmount", async () => {
    let resolveFetch:
      | ((value: ItemNeighborsResponse<TestRecord>) => void)
      | undefined
    const fetchItemNeighbors = vi.fn(
      () =>
        new Promise<ItemNeighborsResponse<TestRecord>>((resolve) => {
          resolveFetch = resolve
        })
    )

    const { unmount } = zeroRenderHook(() =>
      useItemNeighbors({
        dataAdapter: makeAdapter(fetchItemNeighbors),
        id: 5,
        filters: {},
        sortings: NO_SORTINGS,
      })
    )

    await waitFor(() => expect(fetchItemNeighbors).toHaveBeenCalled())
    unmount()
    // Settling after unmount must not throw or update state
    resolveFetch?.(neighborsOf(5))
    await new Promise((resolve) => setTimeout(resolve, 10))
  })
})

describe("fetchItemNeighbors contract (types)", () => {
  it("is available on both DataAdapter variants", () => {
    const paginated: PaginatedDataAdapter<TestRecord, TestFilters> = {
      paginationType: "pages",
      fetchData: () => ({
        type: "pages",
        records: [],
        total: 0,
        perPage: 10,
        currentPage: 1,
        pagesCount: 0,
      }),
      fetchItemNeighbors: () => ({ previous: null, next: null }),
    }
    expectTypeOf(paginated.fetchItemNeighbors).not.toBeNever()

    const adapter: DataAdapter<TestRecord, TestFilters> = {
      fetchData: () => ({ records: [] }),
      fetchItemNeighbors: () => ({ previous: null, next: null }),
    }
    expect(adapter.fetchItemNeighbors).toBeDefined()
  })

  it("flows navigationFilters through DataCollectionDataAdapter options", () => {
    type CollectionAdapter = DataCollectionDataAdapter<TestRecord, TestFilters>
    type NeighborOptions = Parameters<
      NonNullable<CollectionAdapter["fetchItemNeighbors"]>
    >[0]

    expectTypeOf<NeighborOptions>().toHaveProperty("id")
    expectTypeOf<NeighborOptions>().toHaveProperty("filters")
    expectTypeOf<NeighborOptions>().toHaveProperty("navigationFilters")
  })
})
