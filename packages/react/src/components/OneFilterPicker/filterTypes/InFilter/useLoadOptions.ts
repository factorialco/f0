import { RecordType, useData, useDataSource } from "@/hooks/datasource"
import { useCallback, useEffect, useState } from "react"
import { InFilterDefinition } from "."
import { FilterTypeSchema } from "../types"
import { InFilterOptionItem, InFilterOptions } from "./types"

const optionsCache = new Map<string, InFilterOptionItem<unknown>[]>()

export function getCacheKey<T, R extends RecordType = RecordType>(
  schema: FilterTypeSchema<InFilterOptions<T, R>>
): string {
  return JSON.stringify(schema)
}

export async function loadOptions<T>(
  cacheKey: string,
  optionsDef:
    | InFilterOptionItem<T>[]
    | Promise<InFilterOptionItem<T>[]>
    | (() => Promise<InFilterOptionItem<T>[]> | InFilterOptionItem<T>[]),
  cache: boolean = false
): Promise<InFilterOptionItem<T>[]> {
  if (cache && optionsCache.has(cacheKey)) {
    return optionsCache.get(cacheKey) as InFilterOptionItem<T>[]
  }

  const optionsProvider =
    typeof optionsDef === "function" ? optionsDef : () => optionsDef

  const options = await optionsProvider()

  optionsCache.set(cacheKey, options)

  return options
}

export function useLoadOptions<T, R extends RecordType = RecordType>(
  schema: InFilterDefinition<T, R>
) {
  const cacheKey = getCacheKey(schema)

  // Only use state for async options
  const [options, setOptions] = useState<InFilterOptionItem<T>[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const optionsProp =
    "options" in schema.options ? schema.options.options : undefined
  const source = "source" in schema.options ? schema.options.source : undefined

  const dataSource = useDataSource(
    source
      ? {
          ...source,
          search: {
            enabled: true,
            sync: false,
          },
        }
      : {
          dataAdapter: {
            fetchData: async () => ({
              records: [],
            }),
          },
        },
    [source]
  )

  const { data, isInitialLoading, loadMore, isLoadingMore, paginationInfo } =
    useData(dataSource, {}, [source])

  const materializeOptions = useCallback(
    async (clearCache = false) => {
      if (!optionsProp) {
        return
      }

      if (clearCache) {
        optionsCache.delete(cacheKey)
      }
      try {
        setIsLoading(true)
        setError(null)
        const result = await loadOptions(
          cacheKey,
          optionsProp,
          schema.options.cache
        )
        setOptions(result)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load options")
        )
      } finally {
        setIsLoading(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking the schema values
    [JSON.stringify(schema), cacheKey]
  )

  useEffect(() => {
    if ("source" in schema.options && schema.options.mapOptions) {
      try {
        setIsLoading(false)
        setError(null)
        const mappedOptions = data.records.map(schema.options.mapOptions)
        setOptions(mappedOptions)
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to map options from source")
        )
      }
    }
  }, [data.records, schema.options])

  useEffect(() => {
    if (!source) {
      materializeOptions()
    }
  }, [materializeOptions, source])

  const isActuallyLoading = source
    ? isInitialLoading || isLoadingMore
    : isLoading

  return {
    options,
    isLoading: isActuallyLoading,
    error,
    setOptions,
    loadOptions: materializeOptions,
    loadMore: source ? loadMore : undefined,
    hasMore: source
      ? paginationInfo?.type === "infinite-scroll" &&
        "hasMore" in paginationInfo &&
        paginationInfo.hasMore
      : false,
  }
}
