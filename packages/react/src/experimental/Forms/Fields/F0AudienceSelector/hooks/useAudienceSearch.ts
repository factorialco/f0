import { useEffect, useMemo, useRef, useState } from "react"
import { useDebounceCallback } from "usehooks-ts"

import {
  getDataSourcePaginationType,
  useData,
  useDataSource,
  type BaseDataAdapter,
  type BaseFetchOptions,
  type DataAdapter,
  type FiltersDefinition,
  type PaginatedDataAdapter,
  type PaginatedFetchOptions,
  type RecordType,
} from "@/hooks/datasource"

import type { AudienceOptionItem } from "../internal-types"
import {
  audienceEntityKey,
  type F0AudienceOption,
  type F0AudienceSelectorSource,
} from "../types"

const DEFAULT_DEBOUNCE_MS = 300

/**
 * Narrows the consumer's data adapter into the selector's search engine:
 * debounced query, loading states and infinite-scroll come from the standard
 * datasource hooks; an empty query never reaches the consumer's `fetchData`
 * (the `suggestions` prop owns that state).
 */
export function useAudienceSearch<R extends RecordType>({
  source,
  mapEntity,
  listboxId,
  selectedKeys,
}: {
  source: F0AudienceSelectorSource<R>
  mapEntity: (item: R) => F0AudienceOption
  listboxId: string
  selectedKeys: ReadonlySet<string>
}) {
  const paginationType = getDataSourcePaginationType(source.dataAdapter)
  if (paginationType === "pages") {
    throw new Error(
      "F0AudienceSelector only supports `infinite-scroll` or `no-pagination` data adapters"
    )
  }

  const gatedAdapter = useMemo<DataAdapter<R, FiltersDefinition>>(() => {
    const adapter = source.dataAdapter
    // Wrap the consumer's adapter so an empty query short-circuits to an empty
    // result of the adapter's own pagination shape — the consumer's fetchData
    // is never called without a query.
    if (adapter.paginationType === "infinite-scroll") {
      const paginated = adapter as PaginatedDataAdapter<R, FiltersDefinition>
      return {
        ...paginated,
        fetchData: (options: PaginatedFetchOptions<FiltersDefinition>) =>
          options.search?.trim()
            ? paginated.fetchData(options)
            : {
                records: [],
                total: 0,
                perPage: paginated.perPage ?? 0,
                type: "infinite-scroll" as const,
                cursor: null,
                hasMore: false,
              },
      }
    }
    // Base (and explicit "no-pagination") adapters both fetch with
    // BaseFetchOptions and return a plain record list.
    const base = adapter as BaseDataAdapter<
      R,
      FiltersDefinition,
      BaseFetchOptions<FiltersDefinition>
    >
    return {
      ...base,
      fetchData: (options: BaseFetchOptions<FiltersDefinition>) =>
        options.search?.trim() ? base.fetchData(options) : { records: [] },
    }
  }, [source.dataAdapter])

  const localSource = useDataSource<R>(
    {
      dataAdapter: gatedAdapter,
      search: { enabled: true, sync: true },
    },
    [gatedAdapter]
  )
  const { setCurrentSearch, currentSearch } = localSource

  const { data, isLoading, isLoadingMore, loadMore, paginationInfo } =
    useData<R>(localSource)

  const [query, setQueryState] = useState("")

  const debouncedSetSearch = useDebounceCallback(
    setCurrentSearch,
    source.search?.debounceTime ?? DEFAULT_DEBOUNCE_MS
  )

  // Cancel pending trailing-edge timers on true unmount only (see the same
  // workaround in F0Select: usehooks-ts' internal unmount cleanup cancels a
  // different debounce instance than the one callers invoke).
  const debouncedSetSearchRef = useRef(debouncedSetSearch)
  debouncedSetSearchRef.current = debouncedSetSearch
  useEffect(() => {
    return () => {
      debouncedSetSearchRef.current.cancel()
    }
  }, [])

  const setQuery = (value: string) => {
    setQueryState(value)
    if (value.trim()) {
      debouncedSetSearch(value)
    } else {
      // Clearing must be instant so suggestions reappear without lag
      debouncedSetSearch.cancel()
      setCurrentSearch(undefined)
    }
  }

  const options = useMemo<AudienceOptionItem[]>(() => {
    const seen = new Set<string>()
    const items: AudienceOptionItem[] = []
    data.records.forEach((record) => {
      const option = mapEntity(record)
      const key = audienceEntityKey(option.entity)
      // Adapters merging several backend queries may repeat an entity
      if (seen.has(key)) {
        return
      }
      seen.add(key)
      items.push({
        option,
        key,
        domId: `${listboxId}-option-${items.length}`,
        selected: selectedKeys.has(key),
        disabled: !!option.disabledReason,
      })
    })
    return items
  }, [data.records, mapEntity, listboxId, selectedKeys])

  const isSearching = query.trim().length > 0
  // While the debounce is pending the fetched records belong to a previous
  // query — surface that gap as loading instead of flashing stale results.
  const isDebouncing =
    isSearching && query.trim() !== (currentSearch ?? "").trim()

  const hasMore =
    paginationInfo?.type === "infinite-scroll" ? paginationInfo.hasMore : false

  return {
    query,
    setQuery,
    isSearching,
    options,
    isLoading: isLoading || isDebouncing,
    isLoadingMore,
    loadMore,
    hasMore,
  }
}
