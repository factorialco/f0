import { describe, expect, it, vi } from "vitest"
import { Observable } from "zen-observable-ts"

import { PromiseState } from "@/lib/promise-to-observable"

import { adaptDataAdapterToInfiniteScroll } from "../adaptDataAdapterToInfiniteScroll"
import {
  DataAdapter,
  InfiniteScrollPaginatedResponse,
  PageBasedPaginatedResponse,
  PaginatedFetchOptions,
} from "../types"

type TestRecord = { id: number; name: string }
type TestFilters = {
  search: { type: "search"; label: string }
}

const RECORDS: TestRecord[] = [
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
]

const pageResponse = (
  currentPage: number
): PageBasedPaginatedResponse<TestRecord> => ({
  type: "pages",
  records: RECORDS,
  total: 50,
  perPage: 10,
  currentPage,
  pagesCount: 5,
})

const fetchOptions = (
  cursor: string | null
): PaginatedFetchOptions<TestFilters> => ({
  filters: {},
  sortings: [],
  pagination: { cursor, perPage: 10 },
})

describe("adaptDataAdapterToInfiniteScroll", () => {
  it("returns non-pages adapters untouched (same reference)", () => {
    const infiniteScroll: DataAdapter<TestRecord, TestFilters> = {
      paginationType: "infinite-scroll",
      fetchData: () => ({
        type: "infinite-scroll",
        records: RECORDS,
        total: 2,
        perPage: 10,
        cursor: null,
        hasMore: false,
      }),
    }
    expect(adaptDataAdapterToInfiniteScroll(infiniteScroll)).toBe(
      infiniteScroll
    )

    const noPagination: DataAdapter<TestRecord, TestFilters> = {
      fetchData: () => ({ records: RECORDS }),
    }
    expect(adaptDataAdapterToInfiniteScroll(noPagination)).toBe(noPagination)
  })

  it("maps null and '0' cursors to page 1", async () => {
    const fetchData = vi.fn((options: PaginatedFetchOptions<TestFilters>) =>
      pageResponse(
        "currentPage" in options.pagination
          ? (options.pagination.currentPage ?? 1)
          : 1
      )
    )
    const adapted = adaptDataAdapterToInfiniteScroll<TestRecord, TestFilters>({
      paginationType: "pages",
      perPage: 10,
      fetchData,
    })

    await adapted.fetchData(fetchOptions(null))
    await adapted.fetchData(fetchOptions("0"))

    expect(fetchData).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        pagination: { currentPage: 1, perPage: 10 },
      })
    )
    expect(fetchData).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        pagination: { currentPage: 1, perPage: 10 },
      })
    )
  })

  it("maps a numeric cursor to that page and converts the response", async () => {
    const fetchData = vi.fn(() => pageResponse(3))
    const adapted = adaptDataAdapterToInfiniteScroll<TestRecord, TestFilters>({
      paginationType: "pages",
      perPage: 10,
      fetchData,
    })

    const response = (await adapted.fetchData(
      fetchOptions("3")
    )) as InfiniteScrollPaginatedResponse<TestRecord>

    expect(fetchData).toHaveBeenCalledWith(
      expect.objectContaining({
        pagination: { currentPage: 3, perPage: 10 },
      })
    )
    expect(response).toEqual({
      type: "infinite-scroll",
      records: RECORDS,
      total: 50,
      perPage: 10,
      cursor: "4",
      hasMore: true,
      summaries: undefined,
    })
  })

  it("reports hasMore false on the last page", async () => {
    const adapted = adaptDataAdapterToInfiniteScroll<TestRecord, TestFilters>({
      paginationType: "pages",
      fetchData: () => pageResponse(5),
    })

    const response = (await adapted.fetchData(
      fetchOptions("5")
    )) as InfiniteScrollPaginatedResponse<TestRecord>

    expect(response.hasMore).toBe(false)
  })

  it("maps promise-returning fetchData", async () => {
    const adapted = adaptDataAdapterToInfiniteScroll<TestRecord, TestFilters>({
      paginationType: "pages",
      fetchData: () => Promise.resolve(pageResponse(2)),
    })

    const response = (await adapted.fetchData(
      fetchOptions("2")
    )) as InfiniteScrollPaginatedResponse<TestRecord>

    expect(response.type).toBe("infinite-scroll")
    expect(response.cursor).toBe("3")
  })

  it("maps observable fetchData, passing loading/error states through", async () => {
    const error = new Error("boom")
    const adapted = adaptDataAdapterToInfiniteScroll<TestRecord, TestFilters>({
      paginationType: "pages",
      fetchData: () =>
        new Observable((subscriber) => {
          subscriber.next({ loading: true, data: null })
          subscriber.next({ loading: false, data: pageResponse(1) })
          subscriber.next({ loading: false, error })
          subscriber.complete()
        }),
    })

    const result = adapted.fetchData(fetchOptions(null))
    expect(result).toBeInstanceOf(Observable)

    const emissions: PromiseState<unknown>[] = []
    await new Promise<void>((resolve) => {
      ;(result as Observable<PromiseState<unknown>>).subscribe({
        next: (state) => emissions.push(state),
        complete: resolve,
      })
    })

    expect(emissions[0]).toEqual({
      loading: true,
      error: undefined,
      data: null,
    })
    expect(emissions[1].data).toMatchObject({
      type: "infinite-scroll",
      cursor: "2",
      hasMore: true,
    })
    expect(emissions[2]).toEqual({ loading: false, error, data: null })
  })

  it("maps foreign observables (different class identity, e.g. Apollo's zen-observable copy)", async () => {
    // Observable-like with `subscribe`/`map` but NOT an instance of this
    // package's Observable class — like an Apollo observable built from the
    // consumer app's own zen-observable copy. Detection must be duck-typed,
    // not `instanceof`.
    const foreignObservable = {
      map(fn: (state: PromiseState<unknown>) => PromiseState<unknown>) {
        return new Observable<PromiseState<unknown>>((subscriber) => {
          subscriber.next(fn({ loading: false, data: pageResponse(1) }))
          subscriber.complete()
        })
      },
      subscribe() {
        throw new Error("not used: map() already returns a real Observable")
      },
    }
    expect(foreignObservable).not.toBeInstanceOf(Observable)

    const adapted = adaptDataAdapterToInfiniteScroll<TestRecord, TestFilters>({
      paginationType: "pages",
      fetchData: () =>
        foreignObservable as unknown as Observable<
          PromiseState<PageBasedPaginatedResponse<TestRecord>>
        >,
    })

    const result = adapted.fetchData(fetchOptions(null))
    // Regression: with `instanceof` detection the foreign observable fell
    // through to the sync branch and came back as `{ records: undefined }`.
    expect(result).toBeInstanceOf(Observable)

    const emissions: PromiseState<unknown>[] = []
    await new Promise<void>((resolve) => {
      ;(result as Observable<PromiseState<unknown>>).subscribe({
        next: (state) => emissions.push(state),
        complete: resolve,
      })
    })

    expect(emissions[0].data).toMatchObject({
      type: "infinite-scroll",
      records: RECORDS,
      cursor: "2",
      hasMore: true,
    })
  })
})
