import type {
  BaseResponse,
  PaginatedResponse,
  RecordType,
  SortingsStateMultiple,
} from "@/hooks/datasource"
import type { PromiseState } from "@/lib/promise-to-observable"

// Mirrors OneDataCollection's export limits so table-only and multi-widget
// dashboards have the same bounded behavior.
const MAX_EXPORT_ROWS = 10_000
const EXPORT_PAGE_SIZE = 100

export class ExportRowLimitExceededError extends Error {
  constructor() {
    super(`The export exceeds the ${MAX_EXPORT_ROWS}-row limit`)
    this.name = "ExportRowLimitExceededError"
  }
}

export class ExportPaginationError extends Error {
  constructor() {
    super("The export could not retrieve every page")
    this.name = "ExportPaginationError"
  }
}

/** Minimum source state required to reproduce the collection visible at click-time. */
export type DownloadableSource = {
  dataAdapter: {
    paginationType?: "pages" | "infinite-scroll" | "no-pagination" | undefined
    fetchData: (params: Record<string, unknown>) => unknown
    exportFetchData?: (params: Record<string, unknown>) => unknown
  }
  currentFilters?: unknown
  currentSortings?: { field: string; order: "asc" | "desc" } | null
  currentGrouping?: { field: string; order?: "asc" | "desc" } | null
  currentSearch?: string
  currentNavigationFilters?: unknown
}

async function resolvePromiseLike<T>(
  value: T | Promise<T> | { subscribe?: unknown }
): Promise<T> {
  if (value && typeof (value as Promise<T>).then === "function") {
    return value as Promise<T>
  }

  if (
    value &&
    typeof (value as { subscribe?: unknown }).subscribe === "function"
  ) {
    const observable = value as {
      subscribe: (observer: {
        next: (state: PromiseState<T>) => void
        error: (error: unknown) => void
        complete: () => void
      }) => { unsubscribe: () => void }
    }

    return new Promise<T>((resolve, reject) => {
      let subscription: { unsubscribe: () => void } | undefined
      let settled = false
      subscription = observable.subscribe({
        next(state) {
          if (state.loading || settled) return
          settled = true
          subscription?.unsubscribe()
          if (state.error) reject(state.error)
          else if (state.data != null) resolve(state.data)
          else reject(new Error("Observable resolved with no data"))
        },
        error(error) {
          if (settled) return
          settled = true
          reject(error instanceof Error ? error : new Error(String(error)))
        },
        complete() {
          if (settled) return
          settled = true
          reject(new Error("Observable completed without emitting data"))
        },
      })
      if (settled) subscription.unsubscribe()
    })
  }

  return value as T
}

/** Fetch the complete bounded collection using its filters and pagination contract. */
export async function fetchAllStateAwareRecords(
  source: DownloadableSource
): Promise<RecordType[]> {
  const { dataAdapter } = source
  const sortings: SortingsStateMultiple = [
    ...(source.currentSortings
      ? [
          {
            field: source.currentSortings.field,
            order: source.currentSortings.order,
          },
        ]
      : []),
    ...(source.currentGrouping
      ? [
          {
            field: source.currentGrouping.field,
            order: source.currentGrouping.order ?? "asc",
          },
        ]
      : []),
  ]
  const baseParams = {
    filters: source.currentFilters,
    sortings,
    search: source.currentSearch,
    navigationFilters: source.currentNavigationFilters,
  }
  const fetchFn = dataAdapter.exportFetchData ?? dataAdapter.fetchData

  if (
    !dataAdapter.paginationType ||
    dataAdapter.paginationType === "no-pagination"
  ) {
    const response = (await resolvePromiseLike(
      fetchFn(baseParams) as unknown
    )) as BaseResponse<RecordType>
    const records = response.records ?? []
    if (records.length > MAX_EXPORT_ROWS) {
      throw new ExportRowLimitExceededError()
    }
    return records
  }

  if (dataAdapter.paginationType === "pages") {
    const all: RecordType[] = []
    let currentPage = 1
    while (all.length < MAX_EXPORT_ROWS) {
      const response = (await resolvePromiseLike(
        fetchFn({
          ...baseParams,
          pagination: { currentPage, perPage: EXPORT_PAGE_SIZE },
        }) as unknown
      )) as PaginatedResponse<RecordType>
      if (!response.records || response.records.length === 0) {
        if ("pagesCount" in response && currentPage < response.pagesCount) {
          throw new ExportPaginationError()
        }
        break
      }
      all.push(...response.records)
      if (all.length > MAX_EXPORT_ROWS) {
        throw new ExportRowLimitExceededError()
      }
      if (
        all.length >= MAX_EXPORT_ROWS &&
        (!("pagesCount" in response) || currentPage < response.pagesCount)
      ) {
        throw new ExportRowLimitExceededError()
      }
      if ("pagesCount" in response && currentPage >= response.pagesCount) break
      currentPage += 1
    }
    return all
  }

  const all: RecordType[] = []
  let cursor: string | null = null
  while (all.length < MAX_EXPORT_ROWS) {
    const response = (await resolvePromiseLike(
      fetchFn({
        ...baseParams,
        pagination: { cursor, perPage: EXPORT_PAGE_SIZE },
      }) as unknown
    )) as PaginatedResponse<RecordType>
    if (!response.records || response.records.length === 0) {
      if ("hasMore" in response && response.hasMore) {
        throw new ExportPaginationError()
      }
      break
    }

    const hasMore = "hasMore" in response && response.hasMore
    const nextCursor = "cursor" in response ? (response.cursor ?? null) : null
    if (hasMore && (!nextCursor || nextCursor === cursor)) {
      throw new ExportPaginationError()
    }

    all.push(...response.records)
    if (all.length > MAX_EXPORT_ROWS) {
      throw new ExportRowLimitExceededError()
    }
    if (all.length >= MAX_EXPORT_ROWS && hasMore) {
      throw new ExportRowLimitExceededError()
    }
    if ("hasMore" in response && !hasMore) break
    if (!("cursor" in response)) break
    if (!nextCursor || nextCursor === cursor) {
      throw new ExportPaginationError()
    }
    cursor = nextCursor
  }
  return all
}
