import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { getValueByPath } from "@/lib/objectPaths"
import { PromiseState, promiseToObservable } from "@/lib/promise-to-observable"
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Observable } from "zen-observable-ts"
import {
  BaseFetchOptions,
  GroupingDefinition,
  InfiniteScrollPaginatedResponse,
  PageBasedPaginatedResponse,
  PaginatedResponse,
  PaginationInfo,
  PaginationType,
  PromiseOrObservable,
  RecordType,
  SortingsDefinition,
  SortingsStateMultiple,
} from "./types"
import { DataSource } from "./types/datasource.typings"
import { groupBy } from "./utils"

/**
 * Represents an error that occurred during data fetching
 */
export interface DataError {
  message: string
  cause?: unknown
}

/**
 * Response structure for non-paginated data
 */
type SimpleResult<T> = T[]

/**
 * Hook options for useData
 */
export interface UseDataOptions<
  R extends RecordType,
  Filters extends FiltersDefinition,
> {
  filters?: Partial<FiltersState<Filters>>
  /**
   * A function that is called when an error occurs during data fetching.
   * It is called with the error object.
   * @param error - The error object.
   */
  onError?: (error: DataError) => void
  /**
   * A function that provides the fetch parameters for the data source.
   * It is called before each fetch request and can be used to modify the fetch parameters.
   * @param options - The fetch parameters for the data source.
   * @returns The fetch parameters for the data source.
   */
  fetchParamsProvider?: <O extends BaseFetchOptions<Filters>>(options: O) => O
  /**
   * A function that is called when the data is fetched successfully.
   * It is called with the response data.
   * @param response - The response data.
   */
  onResponse?: (response: PaginatedResponse<R> | SimpleResult<R>) => void
}

/**
 * Symbol used to identify the groupId in the data
 */
export const GROUP_ID_SYMBOL = Symbol("groupId")
export type WithGroupId<RecordType> = RecordType & {
  [GROUP_ID_SYMBOL]: unknown | undefined
}

/**
 * Hook return type for useData
 */
export interface UseDataReturn<R extends RecordType> {
  data: Data<R>
  isInitialLoading: boolean
  isLoading: boolean
  isLoadingMore: boolean
  error: DataError | null
  paginationInfo: PaginationInfo | null

  // For page-based pagination:
  setPage: (page: number) => void

  // For infinite-scroll pagination:
  loadMore: () => void
  totalItems: number | undefined

  // Merged filters (default values and current values)
  mergedFilters: FiltersState<FiltersDefinition>
}

type DataType<T> = PromiseState<T>

export type GroupRecord<RecordType> = {
  key: string
  label: string | Promise<string>
  itemCount: number | undefined | Promise<number | undefined>
  records: RecordType[]
}

export type Data<R extends RecordType> = {
  records: WithGroupId<R>[]
  type: "grouped" | "flat"
  groups: GroupRecord<R>[]
}

/**
 * Custom hook for handling data fetching state
 */
function useDataFetchState<R extends RecordType>() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [data, setData] = useState<R[]>([])
  const [error, setError] = useState<DataError | null>(null)

  return {
    isInitialLoading,
    setIsInitialLoading,
    data,
    setData,
    error,
    setError,
  }
}

/**
 * Custom hook for handling pagination state
 */
function usePaginationState() {
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(
    null
  )
  return { paginationInfo, setPaginationInfo }
}

const defaultFetchDataAndUpdateOptions = <
  Filters extends FiltersDefinition,
  O extends BaseFetchOptions<Filters>,
>(
  options: O
): O => options

const defaultIdProvider = (
  item: RecordType,
  index?: number
): string | number =>
  "id" in item ? `${item.id}` : index || JSON.stringify(item)

/**
 * A core React hook that manages data fetching, state management, and pagination within the Collections ecosystem.
 *
 * ## Why a Separate Hook?
 *
 * `useData` exists as a separate hook for three main reasons:
 *
 * - **Visualization-Specific Needs**: Different visualizations have unique data requirements:
 *   - Card visualizations need grid-aligned pagination (multiples of grid columns)
 *   - Table visualizations work best with row-optimized data fetching
 *   - Custom visualizations may need specialized data transformations
 *
 * - **Separation of Concerns**: Maintains clear boundaries between:
 *   - Data source configuration (managed by `useDataSource`)
 *   - Data fetching & state management (handled by `useData`)
 *   - UI presentation (implemented by visualization components)
 *
 * - **Extensibility**: New visualization types can be added without modifying core data logic,
 *   as each visualization directly controls how it consumes data
 *
 * ## Core Features
 *
 * - Handles multiple data source types seamlessly (synchronous, Promise-based, Observable-based)
 * - Manages pagination state with automatic page handling
 * - Provides consistent loading states (`isInitialLoading`, `isLoading`)
 * - Implements standardized error handling with detailed error information
 * - Performs automatic cleanup of subscriptions to prevent memory leaks
 * - Supports filter application with proper filter state management
 *
 * ## Usage in Visualizations
 *
 * Each visualization component calls `useData` directly to maintain control over its specific data needs:
 *
 * ```tsx
 * // Example: CardCollection customizing pagination before calling useData
 * function CardCollection({ source }) {
 *   // Override source to ensure grid-friendly pagination (multiples of 2,3,4)
 *   const adaptedSource = useMemo(() => ({
 *     ...source,
 *     dataAdapter: {
 *       ...source.dataAdapter,
 *       perPage: source.dataAdapter.perPage ?? 24,
 *     }
 *   }), [source]);
 *
 *   // Let useData handle the data fetching with our customized source
 *   const { data, isInitialLoading, paginationInfo, setPage } = useData(adaptedSource);
 *
 *   // Rendering logic follows...
 * }
 * ```
 *
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing dataAdapter and filter state
 * @param options - Optional configuration including filter overrides
 *
 * @returns {UseDataReturn<R>} An object containing:
 * - data: The current collection records
 * - isInitialLoading: Whether this is the first data load
 * - isLoading: Whether any data fetch is in progress
 * - error: Any error that occurred during data fetching
 * - paginationInfo: Pagination state and metadata if available
 * - setPage: Function to navigate to a specific page
 */
export function useData<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  source: DataSource<R, Filters, Sortings, Grouping>,
  {
    filters,
    onError,
    fetchParamsProvider = defaultFetchDataAndUpdateOptions,
    onResponse,
  }: UseDataOptions<R, Filters> = {},
  // Deps to trigger fetchDataAndUpdate
  deps: unknown[] = []
): UseDataReturn<R> {
  const {
    dataAdapter,
    currentFilters,
    currentSortings,
    search,
    currentSearch,
    isLoading,
    setIsLoading,
    currentGrouping,
    grouping,
    idProvider = defaultIdProvider,
    itemPreFilter,
  } = source

  const cleanup = useRef<(() => void) | undefined>()

  const {
    isInitialLoading,
    setIsInitialLoading,
    data: rawData,
    setData: setRawData,
    error,
    setError,
  } = useDataFetchState<R>()

  const [filteredItemsCount, setFilteredItemsCount] = useState<number>(0)

  const { paginationInfo, setPaginationInfo } = usePaginationState()

  useEffect(() => {
    if (itemPreFilter) {
      setRawData((currentData) => {
        const originalItemsCount = currentData.length
        const filteredData = currentData.filter(itemPreFilter)
        const newItemsCount = filteredData.length
        const filteredItemsCount = originalItemsCount - newItemsCount
        setFilteredItemsCount(filteredItemsCount)
        setPaginationInfo((info) =>
          info
            ? {
                ...info,
                total: info.total - filteredItemsCount,
              }
            : null
        )
        return filteredData
      })
    }
  }, [itemPreFilter, setRawData, setPaginationInfo])

  // We need to use a ref to get the latest paginationInfo value
  // because the paginationInfo is updated asynchronously
  // and we need to use the latest value in the callback functions
  // like loadMore, setPage, etc.
  const paginationInfoRef = useRef(paginationInfo)
  useEffect(() => {
    paginationInfoRef.current = paginationInfo
  }, [paginationInfo])

  const [totalItems, setTotalItems] = useState<number | undefined>(undefined)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const isLoadingMoreRef = useRef(false)

  const mergedFilters = useMemo(() => {
    return { ...currentFilters, ...filters }
  }, [currentFilters, filters])

  const deferredSearch = useDeferredValue(currentSearch)

  // We need to use a ref to get the latest search value
  // because the search value is updated asynchronously
  // and we need to use the latest value in the callback functions
  // like loadMore, setPage, etc.
  const searchValue = useRef<string | undefined>(undefined)
  useEffect(() => {
    searchValue.current = !search?.enabled
      ? undefined
      : search?.sync
        ? currentSearch
        : deferredSearch
  }, [currentSearch, deferredSearch, search?.enabled, search?.sync])

  /**
   * Merges 2 arrays of items using the idProvider to update the existing items
   * and add the new items
   */
  const mergeItems = (
    prevData: R[],
    newData: R[],
    idProvider: (item: R, index?: number) => string | number | symbol
  ): R[] => {
    {
      // The Map order is guaranteed to be the same as the order of the items in the array. Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps
      const idMap = new Map(
        prevData.map((item, index) => [idProvider(item, index), item])
      )

      for (const [index, record] of newData.entries()) {
        const id = idProvider(record, index)
        idMap.set(id, record)
      }

      return Array.from(idMap.values())
    }
  }

  const handleFetchSuccess = useCallback(
    (
      result: PaginatedResponse<R> | SimpleResult<R>,
      appendMode: boolean,
      isLoadingYet?: boolean
    ) => {
      /**
       * Call to the onResponse callback
       */
      onResponse?.(result)

      let records: R[] = []
      if ("records" in result) {
        records = result.records
        // Use a default value of "pages" when paginationType is undefined
        const paginationType: PaginationType | undefined =
          dataAdapter.paginationType

        // Update pagination info based on the pagination type
        if (
          paginationType &&
          ["pages", "infinite-scroll"].includes(paginationType) &&
          paginationType !== "no-pagination"
        ) {
          // For page-based pagination
          const common = {
            total: result.total,
            perPage: result.perPage,
          }
          if (paginationType === "pages") {
            setPaginationInfo({
              ...common,
              type: "pages" as const,
              currentPage: "currentPage" in result ? result.currentPage : 1,
              pagesCount:
                "pagesCount" in result
                  ? result.pagesCount
                  : Math.ceil(result.total / result.perPage),
            })
          } else if (paginationType === "infinite-scroll") {
            setPaginationInfo({
              ...common,
              type: "infinite-scroll" as const,
              cursor:
                "cursor" in result && result.cursor !== undefined
                  ? result.cursor
                  : appendMode
                    ? String(result.perPage)
                    : "0",
              hasMore:
                "hasMore" in result
                  ? result.hasMore
                  : rawData.length + result.records.length < result.total,
            })
          }

          setTotalItems(result.total)
        }
      } else {
        // For non-paginated results, always replace
        records = result
        setTotalItems?.(result.length)
      }

      setRawData(
        appendMode
          ? (prevData) => mergeItems(prevData, records, idProvider)
          : records
      )
      setError(null)
      setIsInitialLoading(false)
      setIsLoading(!!isLoadingYet)
      setIsLoadingMore(false)
      isLoadingMoreRef.current = false
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this callback when data.length changes
    [
      setRawData,
      dataAdapter,
      setPaginationInfo,
      setError,
      setIsInitialLoading,
      setIsLoading,
      setIsLoadingMore,
      setTotalItems,
      isLoadingMoreRef,
    ]
  )

  const data = useMemo(() => {
    // if (hasLanes) return { type: "flat" as const, records: [] }
    // Add the groupId to the data if grouping is enabled
    const data: WithGroupId<R>[] = rawData.map((record) => ({
      ...record,
      [GROUP_ID_SYMBOL]:
        (currentGrouping?.field &&
          getValueByPath(record, currentGrouping.field as string)) ||
        undefined,
    }))

    /**
     * Grouped data
     */
    if (
      currentGrouping &&
      currentGrouping.field &&
      grouping &&
      (grouping.groupBy as Record<string, unknown>)[
        currentGrouping.field as string
      ]
    ) {
      const groupedData = groupBy(data, GROUP_ID_SYMBOL)
      const fieldName = currentGrouping.field as string
      const groupConfig = (grouping.groupBy as Record<string, unknown>)[
        fieldName
      ] as {
        label: (
          groupId: unknown,
          filters: FiltersState<FiltersDefinition>
        ) => string | Promise<string>
        itemCount?: (
          groupId: unknown,
          filters: FiltersState<FiltersDefinition>
        ) => number | undefined | Promise<number | undefined>
      }

      return {
        type: "grouped" as const,
        records: data,
        groups: Array.from(groupedData.entries()).map(
          ([groupKey, groupRecords]) => ({
            key: groupKey,
            label: groupConfig.label(groupKey as unknown, mergedFilters),
            itemCount: groupConfig.itemCount?.(
              groupKey as unknown,
              mergedFilters
            ),
            records: groupRecords,
          })
        ),
      }
    }

    /**
     * Flat data
     */
    return {
      type: "flat" as const,
      records: data,
      groups: [
        {
          key: "all",
          label: "All",
          itemCount: data.length,
          records: data,
        },
      ],
    }
  }, [rawData, currentGrouping, grouping, mergedFilters])

  const handleFetchError = useCallback(
    (error: unknown) => {
      setError({
        message: "Error fetching data",
        cause: error,
      })
      onError?.({
        message: "Error fetching data",
        cause: error,
      })
      setIsInitialLoading(false)
      setIsLoading(false)
      setIsLoadingMore(false)
      // Clear the cleanup reference when an error occurs
      cleanup.current = undefined
      isLoadingMoreRef.current = false
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the onError changes
    [setError, setIsInitialLoading, setIsLoading]
  )

  type ResultType = PaginatedResponse<R> | SimpleResult<R>

  // Define a type for the fetch parameters to make the function more maintainable
  type FetchDataParams<Filters extends FiltersDefinition> = {
    filters: FiltersState<Filters>
    currentPage?: number
    appendMode?: boolean
    cursor?: string | null
    search?: string | undefined
  }

  const fetchDataAndUpdate = useCallback(
    async ({
      filters,
      currentPage = 1,
      search,
      appendMode = false,
      cursor = null,
    }: FetchDataParams<Filters>) => {
      try {
        // Clean up any existing subscription before creating a new one
        if (cleanup.current && paginationInfo?.type === "pages") {
          console.warn("fetchDataAndUpdate cleanup.current")
          cleanup.current()
          cleanup.current = undefined
        }

        const sortings: SortingsStateMultiple = [
          ...(currentSortings
            ? [
                {
                  field: currentSortings.field as string,
                  order: currentSortings.order,
                },
              ]
            : []),
          ...(currentGrouping
            ? [
                {
                  field: currentGrouping.field as string,
                  order: currentGrouping.order ?? "asc",
                },
              ]
            : []),
        ]

        const baseFetchOptions: BaseFetchOptions<Filters> = fetchParamsProvider(
          {
            filters,
            search,
            sortings,
          }
        )

        function fetcher(): PromiseOrObservable<ResultType> {
          setTotalItems(undefined)

          const defaultPerPage = 20

          // Safely access perPage, defaulting to 20 if not available
          const perPageValue =
            "perPage" in dataAdapter && dataAdapter.perPage !== undefined
              ? dataAdapter.perPage
              : defaultPerPage

          // Use appropriate pagination type based on dataAdapter configuration
          return dataAdapter.fetchData({
            ...baseFetchOptions,
            pagination: {
              ...(dataAdapter.paginationType === "pages"
                ? {
                    currentPage,
                    perPage: perPageValue,
                  }
                : dataAdapter.paginationType === "infinite-scroll"
                  ? {
                      cursor,
                      perPage: perPageValue,
                    }
                  : {}),
            },
          }) as PromiseOrObservable<ResultType>
        }

        const result = fetcher()

        // Handle synchronous data
        if (!("then" in result || "subscribe" in result)) {
          handleFetchSuccess(result, appendMode)
          return
        }

        // TODO: check this
        const observable: Observable<DataType<ResultType>> =
          "subscribe" in result ? result : promiseToObservable(result)

        const subscription = observable.subscribe({
          next: (state) => {
            if (state.data) {
              handleFetchSuccess(state.data, appendMode, state.loading)
            } else if (state.loading) {
              setIsLoading(true)
            } else if (state.error) {
              handleFetchError(state.error)
            }
          },
          error: handleFetchError,
          complete: () => {
            cleanup.current = undefined
          },
        })

        cleanup.current = () => subscription.unsubscribe()
      } catch (error) {
        handleFetchError(error)
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetchDataAndUpdateParamsProvider must be stable
    [
      handleFetchError,
      dataAdapter,
      currentSortings,
      currentGrouping,
      handleFetchSuccess,
      setIsLoading,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...deps,
    ]
  )

  // In setPage function
  const setPage = useCallback(
    (page: number) => {
      // Return early if not page-based pagination or trying to set the same page
      if (!isPageBasedPagination(paginationInfo)) {
        return
      }

      setIsLoading(true)
      // Use named parameters with currentPage
      fetchDataAndUpdate({
        filters: mergedFilters,
        currentPage: page,
        search: searchValue.current,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to oberver ref current
    [
      searchValue.current,
      fetchDataAndUpdate,
      mergedFilters,
      setIsLoading,
      paginationInfo,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...deps,
    ]
  )

  // In loadMore function
  const loadMore = useCallback(
    () => {
      const currentPaginationInfo = paginationInfoRef.current
      if (!currentPaginationInfo || isLoading || isLoadingMore) return

      if (!isInfiniteScrollPagination(currentPaginationInfo)) {
        console.warn(
          "loadMore is only applicable for infinite-scroll pagination type"
        )
        return
      }

      if (currentPaginationInfo.hasMore) {
        // Extract the cursor from paginationInfo
        const currentCursor = currentPaginationInfo.cursor

        setIsLoadingMore(true)
        setIsLoading(true)
        isLoadingMoreRef.current = true

        // Use named parameters
        fetchDataAndUpdate({
          filters: mergedFilters,
          appendMode: true,
          cursor: currentCursor,
          search: searchValue.current,
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to oberver ref current
    [
      fetchDataAndUpdate,
      isLoading,
      mergedFilters,
      paginationInfoRef.current,
      searchValue.current,
      isLoadingMore,
      setIsLoading,
      setIsLoadingMore,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...deps,
    ]
  )

  useEffect(
    () => {
      if (!isLoadingMoreRef.current) {
        setIsLoading(true)
        // Explicitly pass 0 as the initial position for infinite scroll
        const initialPosition =
          dataAdapter.paginationType === "infinite-scroll" ? 0 : 1
        fetchDataAndUpdate({
          filters: mergedFilters,
          currentPage: initialPosition,
          search: searchValue.current,
          cursor: dataAdapter.paginationType === "infinite-scroll" ? "0" : null, // Pass "0" as initial cursor
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to oberver ref current
    [
      fetchDataAndUpdate,
      mergedFilters,
      setIsLoading,
      dataAdapter.paginationType,
      searchValue.current,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...deps,
    ]
  )

  useEffect(() => {
    return () => {
      console.warn(
        'unsubscribe on "useData", pagination type: ',
        paginationInfo?.type ?? ""
      )
      if (paginationInfo?.type === "pages") {
        cleanup.current?.()
      }
    }
  }, [paginationInfo?.type])

  const total = totalItems ? totalItems - filteredItemsCount : 0

  return {
    data,
    isInitialLoading,
    isLoading,
    isLoadingMore,
    error,
    paginationInfo,
    setPage,
    loadMore,
    mergedFilters,
    totalItems: total,
  }
}

// Type guard functions to check pagination types
export function isPageBasedPagination<R extends RecordType>(
  pagination: PaginationInfo | null
): pagination is PageBasedPaginatedResponse<R> {
  return pagination !== null && pagination.type === "pages"
}

// Type guard function to check if the pagination is infinite scroll
export function isInfiniteScrollPagination<R extends RecordType>(
  pagination: PaginationInfo | null
): pagination is InfiniteScrollPaginatedResponse<R> {
  return pagination !== null && pagination.type === "infinite-scroll"
}
