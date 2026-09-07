import { describe, expect, it, vi } from "vitest"

import {
  ExportPaginationError,
  ExportRowLimitExceededError,
  fetchAllStateAwareRecords,
} from "../utils/collectionExport"

describe("fetchAllStateAwareRecords", () => {
  it("prefers exportFetchData and preserves the active collection state", async () => {
    const fetchData = vi.fn()
    const exportFetchData = vi
      .fn()
      .mockResolvedValue({ records: [{ id: "1" }] })

    await fetchAllStateAwareRecords({
      dataAdapter: { fetchData, exportFetchData },
      currentFilters: { team: ["Engineering"] },
      currentSortings: { field: "name", order: "asc" },
      currentGrouping: { field: "department", order: "desc" },
      currentSearch: "Ada",
      currentNavigationFilters: { date: "2026-08-06" },
    })

    expect(fetchData).not.toHaveBeenCalled()
    expect(exportFetchData).toHaveBeenCalledWith({
      filters: { team: ["Engineering"] },
      sortings: [
        { field: "name", order: "asc" },
        { field: "department", order: "desc" },
      ],
      search: "Ada",
      navigationFilters: { date: "2026-08-06" },
    })
  })

  it("resolves observable-backed collection responses", async () => {
    const unsubscribe = vi.fn()
    const fetchData = vi.fn(() => ({
      subscribe(observer: {
        next: (state: unknown) => void
        complete: () => void
      }) {
        queueMicrotask(() => {
          observer.next({ loading: false, data: { records: [{ id: "1" }] } })
        })
        return { unsubscribe }
      },
    }))

    await expect(
      fetchAllStateAwareRecords({ dataAdapter: { fetchData } })
    ).resolves.toEqual([{ id: "1" }])
    expect(unsubscribe).toHaveBeenCalledTimes(1)
  })

  it.each([
    [
      "an emitted error state",
      (observer: {
        next: (state: unknown) => void
        error: (error: unknown) => void
        complete: () => void
      }) => observer.next({ loading: false, error: new Error("State failed") }),
      "State failed",
    ],
    [
      "an emitted state without data",
      (observer: {
        next: (state: unknown) => void
        error: (error: unknown) => void
        complete: () => void
      }) => observer.next({ loading: false }),
      "Observable resolved with no data",
    ],
    [
      "a subscription error",
      (observer: {
        next: (state: unknown) => void
        error: (error: unknown) => void
        complete: () => void
      }) => observer.error(new Error("Subscription failed")),
      "Subscription failed",
    ],
    [
      "completion without data",
      (observer: {
        next: (state: unknown) => void
        error: (error: unknown) => void
        complete: () => void
      }) => observer.complete(),
      "Observable completed without emitting data",
    ],
  ])("rejects observable responses with %s", async (_, emit, message) => {
    const fetchData = vi.fn(() => ({
      subscribe(observer: {
        next: (state: unknown) => void
        error: (error: unknown) => void
        complete: () => void
      }) {
        emit(observer)
        return { unsubscribe: vi.fn() }
      },
    }))

    await expect(
      fetchAllStateAwareRecords({ dataAdapter: { fetchData } })
    ).rejects.toThrow(message)
  })

  it("treats explicit no-pagination adapters as unpaginated", async () => {
    const fetchData = vi.fn().mockResolvedValue({ records: [{ id: "1" }] })

    await fetchAllStateAwareRecords({
      dataAdapter: { paginationType: "no-pagination", fetchData },
    })

    expect(fetchData).toHaveBeenCalledWith({
      filters: undefined,
      sortings: [],
      search: undefined,
      navigationFilters: undefined,
    })
  })

  it("rejects an unpaginated export instead of silently truncating rows", async () => {
    const records = Array.from({ length: 10_001 }, (_, index) => ({
      id: index,
    }))

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: {
          fetchData: vi.fn().mockResolvedValue({ records }),
        },
      })
    ).rejects.toBeInstanceOf(ExportRowLimitExceededError)
  })

  it("rejects infinite-scroll pagination when the backend repeats a cursor", async () => {
    const fetchData = vi.fn().mockResolvedValue({
      records: [{ id: "1" }],
      hasMore: true,
      cursor: "repeated-cursor",
    })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "infinite-scroll", fetchData },
      })
    ).rejects.toBeInstanceOf(ExportPaginationError)
    expect(fetchData).toHaveBeenCalledTimes(2)
  })

  it("exports every page from a valid infinite-scroll source", async () => {
    const fetchData = vi
      .fn()
      .mockResolvedValueOnce({
        records: [{ id: "1" }],
        hasMore: true,
        cursor: "next-page",
      })
      .mockResolvedValueOnce({
        records: [{ id: "2" }],
        hasMore: false,
        cursor: null,
      })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "infinite-scroll", fetchData },
      })
    ).resolves.toEqual([{ id: "1" }, { id: "2" }])
    expect(fetchData).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        pagination: { cursor: "next-page", perPage: 100 },
      })
    )
  })

  it("rejects infinite-scroll pagination when more rows exist without a cursor", async () => {
    const fetchData = vi.fn().mockResolvedValue({
      records: [{ id: "1" }],
      hasMore: true,
    })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "infinite-scroll", fetchData },
      })
    ).rejects.toBeInstanceOf(ExportPaginationError)
    expect(fetchData).toHaveBeenCalledTimes(1)
  })

  it("rejects a paginated export when more rows remain past the limit", async () => {
    const page = Array.from({ length: 100 }, (_, index) => ({ id: index }))
    const fetchData = vi.fn().mockResolvedValue({
      records: page,
      pagesCount: 101,
    })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "pages", fetchData },
      })
    ).rejects.toBeInstanceOf(ExportRowLimitExceededError)
    expect(fetchData).toHaveBeenCalledTimes(100)
  })

  it("rejects a paginated export when a page is missing before the declared end", async () => {
    const fetchData = vi
      .fn()
      .mockResolvedValueOnce({ records: [{ id: "1" }], pagesCount: 3 })
      .mockResolvedValueOnce({ records: [], pagesCount: 3 })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "pages", fetchData },
      })
    ).rejects.toBeInstanceOf(ExportPaginationError)
    expect(fetchData).toHaveBeenCalledTimes(2)
  })

  it("rejects a final page that pushes the export above the row limit", async () => {
    const page = Array.from({ length: 5_001 }, (_, index) => ({ id: index }))
    const fetchData = vi.fn().mockResolvedValue({
      records: page,
      pagesCount: 2,
    })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "pages", fetchData },
      })
    ).rejects.toBeInstanceOf(ExportRowLimitExceededError)
    expect(fetchData).toHaveBeenCalledTimes(2)
  })

  it("rejects infinite scroll when more rows remain at the limit", async () => {
    const page = Array.from({ length: 5_000 }, (_, index) => ({ id: index }))
    let cursorIndex = 0
    const fetchData = vi.fn().mockImplementation(() => {
      cursorIndex += 1
      return Promise.resolve({
        records: page,
        hasMore: true,
        cursor: `cursor-${cursorIndex}`,
      })
    })

    await expect(
      fetchAllStateAwareRecords({
        dataAdapter: { paginationType: "infinite-scroll", fetchData },
      })
    ).rejects.toBeInstanceOf(ExportRowLimitExceededError)
    expect(fetchData).toHaveBeenCalledTimes(2)
  })
})
