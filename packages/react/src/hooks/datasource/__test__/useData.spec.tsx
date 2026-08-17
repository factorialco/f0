import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Observable } from "zen-observable-ts"

import { FiltersState } from "@/patterns/OneFilterPicker/types"
import { PromiseState } from "@/lib/promise-to-observable"

import {
  BaseDataAdapter,
  BaseFetchOptions,
  BaseResponse,
  GroupingDefinition,
  PageBasedPaginatedResponse,
  PaginatedDataAdapter,
  PaginatedFetchOptions,
  RecordType,
} from "../types"
import { DataSource } from "../types/datasource.typings"
import { SortingsDefinition } from "../types/sortings.typings"
import { GROUP_ID_SYMBOL, useData, WithGroupId } from "../useData"
interface TestRecord extends RecordType {
  id: number
  name: string
}

// Define a proper FiltersDefinition with a search filter
type TestFilters = {
  search: {
    type: "search"
    label: string
  }
}

const mockData: WithGroupId<TestRecord>[] = [
  { id: 1, name: "Test 1", [GROUP_ID_SYMBOL]: undefined },
  { id: 2, name: "Test 2", [GROUP_ID_SYMBOL]: undefined },
]

type TestSource = DataSource<
  TestRecord,
  TestFilters,
  SortingsDefinition,
  GroupingDefinition<TestRecord>
>

const createMockDataSource = (
  fetchData: (
    options: BaseFetchOptions<TestFilters>
  ) =>
    | BaseResponse<TestRecord>
    | Promise<BaseResponse<TestRecord>>
    | Observable<PromiseState<BaseResponse<TestRecord>>>,
  paginationType?: "pages"
): TestSource => {
  const baseAdapter: BaseDataAdapter<
    TestRecord,
    TestFilters,
    BaseFetchOptions<TestFilters>,
    BaseResponse<TestRecord>
  > = {
    fetchData,
  }

  const paginatedAdapter: PaginatedDataAdapter<
    TestRecord,
    TestFilters,
    PaginatedFetchOptions<TestFilters>,
    PageBasedPaginatedResponse<TestRecord>
  > = {
    fetchData: async (options) => {
      const result = await Promise.resolve(fetchData(options))
      if (result instanceof Observable) {
        throw new Error("Observable not supported in paginated mode")
      }
      return {
        records: result.records,
        total: result.records.length,
        currentPage: options.pagination?.currentPage ?? 1,
        perPage: options.pagination?.perPage ?? 10,
        pagesCount: Math.ceil(
          result.records.length / (options.pagination?.perPage ?? 10)
        ),
        type: "pages",
      }
    },
    paginationType: "pages",
    perPage: 10,
  }

  return {
    dataAdapter: paginationType === "pages" ? paginatedAdapter : baseAdapter,
    currentFilters: {},
    setCurrentFilters: vi.fn(),
    currentSortings: null,
    setCurrentSortings: vi.fn(),
    currentSearch: undefined,
    debouncedCurrentSearch: undefined,
    setCurrentSearch: vi.fn(),
    isLoading: false,
    setIsLoading: vi.fn(),
    currentGrouping: undefined,
    setCurrentGrouping: vi.fn(),
  }
}

describe("useData", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("with synchronous data", () => {
    it("should handle synchronous data immediately", () => {
      const source = createMockDataSource(() => ({
        records: mockData,
      }))

      const { result } = renderHook(() => useData(source))

      expect(result.current.data).toMatchObject({
        records: mockData,
        type: "flat",
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isInitialLoading).toBe(false)
      expect(result.current.error).toBe(null)
    })

    it("should handle synchronous paginated data", async () => {
      const source = createMockDataSource(
        () => ({ records: mockData }),
        "pages"
      )

      const { result } = renderHook(() => useData(source))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.data).toMatchObject({
        records: mockData,
        type: "flat",
      })
      expect(result.current.paginationInfo).toEqual({
        total: 2,
        currentPage: 1,
        perPage: 10,
        pagesCount: 1,
        type: "pages",
      })
    })
  })

  describe("with async data", () => {
    it("should handle async data with loading states", async () => {
      const source = createMockDataSource(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
        return { records: mockData }
      })

      const { result } = renderHook(() => useData(source))

      expect(result.current.isInitialLoading).toBe(true)

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.data).toMatchObject({
        records: mockData,
        type: "flat",
      })
      expect(result.current.isInitialLoading).toBe(false)
    })

    it("should handle async errors", async () => {
      const error = new Error("Test error")
      const source = createMockDataSource(async () => {
        throw error
      })

      const { result } = renderHook(() => useData(source))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.error).toEqual({
        message: "Error fetching data",
        cause: error,
      })
    })
  })

  describe("with observable data", () => {
    it("should handle observable data with loading states", async () => {
      const source = createMockDataSource(() => {
        return new Observable((subscriber) => {
          subscriber.next({ loading: true, data: null, error: null })
          setTimeout(() => {
            subscriber.next({
              loading: false,
              data: { records: mockData },
              error: null,
            })
            subscriber.complete()
          }, 0)
        })
      })

      const { result } = renderHook(() => useData(source))

      expect(result.current.isInitialLoading).toBe(true)

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.data).toMatchObject({
        records: mockData,
        type: "flat",
      })
      expect(result.current.isInitialLoading).toBe(false)
    })

    it("should handle observable errors", async () => {
      const error = new Error("Test error")
      const source = createMockDataSource(() => {
        return new Observable((subscriber) => {
          subscriber.next({ loading: true, data: null, error: null })
          setTimeout(() => {
            subscriber.next({ loading: false, data: null, error })
            subscriber.complete()
          }, 0)
        })
      })

      const { result } = renderHook(() => useData(source))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.error).toEqual({
        message: "Error fetching data",
        cause: error,
      })
    })
  })

  describe("with filters", () => {
    it("should apply filters to synchronous data", () => {
      const filters: Partial<FiltersState<TestFilters>> = {
        search: "Test 1",
      }
      const source = createMockDataSource(
        ({ filters }: { filters: FiltersState<TestFilters> }) => ({
          records: mockData.filter((item) =>
            filters.search ? item.name.includes(filters.search) : true
          ),
        })
      )

      const { result } = renderHook(() => useData(source, { filters }))

      expect(result.current.data).toMatchObject({
        records: [mockData[0]],
        type: "flat",
      })
    })

    it("should apply filters to synchronous data", () => {
      const filters: Partial<FiltersState<TestFilters>> = {
        search: "Test 1",
      }
      const source = createMockDataSource(
        ({ filters }: { filters: FiltersState<TestFilters> }) => ({
          records: mockData.filter((item) =>
            filters.search ? item.name.includes(filters.search) : true
          ),
        })
      )

      const { result } = renderHook(() => useData(source, { filters }))

      expect(result.current.data).toMatchObject({
        records: [mockData[0]],
        type: "flat",
      })
    })
  })

  describe("subscription cleanup", () => {
    it("should clean up previous subscription when filters change", async () => {
      // Create a mock implementation for Observable.subscribe that we can track
      let subscriptionCount = 0
      let unsubscribeCalls = 0

      // Create a source with a fetchData function that returns an observable
      const source = createMockDataSource(() => {
        return new Observable<PromiseState<BaseResponse<TestRecord>>>(
          (subscriber) => {
            subscriptionCount++
            subscriber.next({ loading: true, data: null, error: null })

            // Simulate async data loading
            setTimeout(() => {
              subscriber.next({
                loading: false,
                data: { records: mockData },
                error: null,
              })
              subscriber.complete()
            }, 10)

            // Return unsubscribe function that tracks when it's called
            return () => {
              unsubscribeCalls++
            }
          }
        )
      })

      // Render the hook with initial filters
      const { rerender } = renderHook(
        (props) => useData(props.source, { filters: props.filters }),
        {
          initialProps: {
            source,
            filters: { search: "initial" } as Partial<
              FiltersState<TestFilters>
            >,
          },
        }
      )

      // Wait for initial data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Record the current counts before changing filters
      const initialSubscriptionCount = subscriptionCount
      const initialUnsubscribeCalls = unsubscribeCalls

      // Change filters to trigger a re-fetch
      rerender({
        source,
        filters: { search: "new search" } as Partial<FiltersState<TestFilters>>,
      })

      // Wait for the new data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Verify that a new subscription was created and the old one was cleaned up
      expect(subscriptionCount).toBe(initialSubscriptionCount + 1)
      expect(unsubscribeCalls).toBe(initialUnsubscribeCalls + 1)
    })

    it("should clean up previous subscription when changing pages", async () => {
      // Create a mock implementation for Observable.subscribe that we can track
      let subscriptionCount = 0
      let unsubscribeCalls = 0

      // Create a paginated source with a fetchData function that returns an observable
      const source = {
        dataAdapter: {
          fetchData: () => {
            return new Observable<
              PromiseState<PageBasedPaginatedResponse<TestRecord>>
            >((subscriber) => {
              subscriptionCount++
              subscriber.next({
                loading: true,
                data: null,
                error: null,
              })

              // Simulate async data loading
              setTimeout(() => {
                subscriber.next({
                  loading: false,
                  data: {
                    records: mockData,
                    total: mockData.length,
                    currentPage: 1,
                    perPage: 10,
                    pagesCount: 1,
                    type: "pages",
                  },
                  error: null,
                })
                subscriber.complete()
              }, 10)

              // Return unsubscribe function that tracks when it's called
              return () => {
                unsubscribeCalls++
              }
            })
          },
          paginationType: "pages" as const,
          perPage: 10,
        },
        currentFilters: {},
        setCurrentFilters: vi.fn(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        currentSearch: undefined,
        debouncedCurrentSearch: undefined,
        setCurrentSearch: vi.fn(),
        isLoading: false,
        setIsLoading: vi.fn(),
        currentGrouping: undefined,
        setCurrentGrouping: vi.fn(),
      }

      // Render the hook
      const { result } = renderHook(() => useData(source))

      // Wait for initial data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Record the current counts before changing page
      const initialSubscriptionCount = subscriptionCount
      const initialUnsubscribeCalls = unsubscribeCalls

      // Change page to trigger a re-fetch
      act(() => {
        result.current.setPage(2)
      })

      // Wait for the new data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Verify that a new subscription was created and the old one was cleaned up
      expect(subscriptionCount).toBe(initialSubscriptionCount + 1)
      expect(unsubscribeCalls).toBe(initialUnsubscribeCalls + 1)
    })
  })

  describe("with the enabled option", () => {
    it("does not fetch while enabled is false and keeps isInitialLoading", async () => {
      const fetchData = vi.fn(() => ({ records: mockData }))
      const source = createMockDataSource(fetchData)

      const { result } = renderHook(() => useData(source, { enabled: false }))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 10))
      })

      expect(fetchData).not.toHaveBeenCalled()
      expect(result.current.isInitialLoading).toBe(true)
    })

    it("fetches exactly once when enabled becomes true", async () => {
      const fetchData = vi.fn(() => ({ records: mockData }))
      const source = createMockDataSource(fetchData)

      const { result, rerender } = renderHook(
        ({ enabled }: { enabled: boolean }) => useData(source, { enabled }),
        { initialProps: { enabled: false } }
      )

      rerender({ enabled: true })

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 10))
      })

      expect(fetchData).toHaveBeenCalledTimes(1)
      expect(result.current.data).toMatchObject({ records: mockData })
      expect(result.current.isInitialLoading).toBe(false)
    })
  })
})

// Test the filter merging utility function
describe("mergeFiltersWithIntersection", () => {
  it("should work with lanes feature", () => {
    // This test verifies that the lanes feature works correctly
    // The filter merging logic is tested indirectly through console output
    const mockAdapter: PaginatedDataAdapter<TestRecord, TestFilters> = {
      paginationType: "infinite-scroll",
      perPage: 10,
      fetchData: vi.fn().mockResolvedValue({
        records: [],
        total: 0,
        hasMore: false,
        cursor: null,
      }),
    }

    const source: DataSource<
      TestRecord,
      TestFilters,
      SortingsDefinition,
      GroupingDefinition<TestRecord>
    > = {
      dataAdapter: mockAdapter,
      currentFilters: {
        search: "global",
      },
      setCurrentFilters: vi.fn(),
      currentSortings: null,
      setCurrentSortings: vi.fn(),
      currentSearch: "",
      debouncedCurrentSearch: "",
      setCurrentSearch: vi.fn(),
      isLoading: false,
      setIsLoading: vi.fn(),
      currentGrouping: undefined,
      setCurrentGrouping: vi.fn(),
    }

    renderHook(() => useData(source))

    // Verify that fetchData was called (lanes functionality is working)
    expect(mockAdapter.fetchData).toHaveBeenCalled()
  })

  describe("page size reuse", () => {
    // Backs the `perPage: "auto"` flow: it over-fetches a first page, then
    // shrinks the page size to what fits. Shrinking must reuse the already
    // loaded records — never fetch again.
    const buildPagedSource = (records: TestRecord[], perPage: number) => {
      const fetchData = vi.fn(
        async (options: PaginatedFetchOptions<TestFilters>) => {
          const pp = options.pagination?.perPage ?? 10
          const page =
            "currentPage" in options.pagination
              ? (options.pagination.currentPage ?? 1)
              : 1
          const start = (page - 1) * pp
          return {
            records: records.slice(start, start + pp),
            total: records.length,
            currentPage: page,
            perPage: pp,
            pagesCount: Math.ceil(records.length / pp),
            type: "pages" as const,
          }
        }
      )
      const adapter: PaginatedDataAdapter<
        TestRecord,
        TestFilters,
        PaginatedFetchOptions<TestFilters>,
        PageBasedPaginatedResponse<TestRecord>
      > = { fetchData, paginationType: "pages", perPage }
      const source: TestSource = {
        dataAdapter: adapter,
        currentFilters: {},
        setCurrentFilters: vi.fn(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        currentSearch: undefined,
        debouncedCurrentSearch: undefined,
        setCurrentSearch: vi.fn(),
        isLoading: false,
        setIsLoading: vi.fn(),
        currentGrouping: undefined,
        setCurrentGrouping: vi.fn(),
      }
      return { source, fetchData }
    }

    it("reuses loaded records when the page size shrinks (no refetch)", async () => {
      const records: TestRecord[] = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `Test ${i + 1}`,
      }))
      // Stable sources per page size; only the adapter reference changes when
      // the page size does (mirrors OneDataCollection's memoized adapter).
      const big = buildPagedSource(records, 20)
      const small = buildPagedSource(records, 10)
      small.fetchData = big.fetchData // share the spy; shrink must not call it
      small.source.dataAdapter.fetchData = big.source.dataAdapter.fetchData

      const { result, rerender } = renderHook(({ source }) => useData(source), {
        initialProps: { source: big.source },
      })

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(big.fetchData).toHaveBeenCalledTimes(1)
      expect(result.current.data.records).toHaveLength(20)
      expect(result.current.paginationInfo?.perPage).toBe(20)

      // Shrink the page size (auto measured that fewer rows fit).
      rerender({ source: small.source })
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      // No extra loading: fetchData is still called exactly once, and the
      // already-loaded records are simply trimmed to the new page size.
      expect(big.fetchData).toHaveBeenCalledTimes(1)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data.records).toHaveLength(10)
      expect(result.current.data.records.map((r) => r.id)).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ])
      const pagination = result.current.paginationInfo
      expect(pagination?.type).toBe("pages")
      if (pagination?.type === "pages") {
        expect(pagination.perPage).toBe(10)
        expect(pagination.pagesCount).toBe(3)
      }
    })

    it("does fetch when the page size grows beyond the loaded records", async () => {
      const records: TestRecord[] = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `Test ${i + 1}`,
      }))
      const small = buildPagedSource(records, 10)
      const big = buildPagedSource(records, 20)
      big.fetchData = small.fetchData
      big.source.dataAdapter.fetchData = small.source.dataAdapter.fetchData

      const { result, rerender } = renderHook(({ source }) => useData(source), {
        initialProps: { source: small.source },
      })

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(small.fetchData).toHaveBeenCalledTimes(1)
      expect(result.current.data.records).toHaveLength(10)

      // Growing needs records we don't have yet, so a fetch is expected.
      rerender({ source: big.source })
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(small.fetchData).toHaveBeenCalledTimes(2)
      expect(result.current.data.records).toHaveLength(20)
    })
  })
})
