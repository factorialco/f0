import { DateRange } from "@/components/OneCalendar/types"
import { SortingsDefinition, SortingsState } from "@/hooks/datasource"
import { NumberFilterValue } from "@/patterns/OneFilterPicker/filterTypes/NumberFilter/NumberFilter"
import {
  FilterDefinition,
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { getDataCollectionStorageKey } from "./dataCollectionStorageKey"
import { DataCollectionStorage } from "./types"

/**
 * Every data collection URL param shares this prefix, so each filter is its own
 * readable param — e.g. `?dc_id=people/v1&dc_department=Sales&dc_search=ada`
 * instead of a single JSON blob.
 */
export const DATA_COLLECTION_URL_PARAM_PREFIX = "dc_"

/**
 * The reserved (non-filter) param names. Individual filters are encoded as
 * `dc_<filterKey>`; these three names are written last (via `set`) so that on
 * the rare clash where a filter key is exactly `id`, `search` or `sort`, the
 * reserved param wins.
 */
export const DATA_COLLECTION_URL_PARAMS = {
  id: "dc_id",
  search: "dc_search",
  sortings: "dc_sort",
} as const

/** Separator for range-style values (number / date ranges): `from..to`. */
const RANGE_SEPARATOR = ".."
/**
 * Suffix marking a range bound as *exclusive* (strict). No marker means the
 * bound is inclusive, so `1000..5000` is `≥1000 and ≤5000` while
 * `1000*..5000*` is `>1000 and <5000` — keeping the URL clean (`*` is one of the
 * few punctuation chars URLSearchParams leaves unescaped) while still
 * distinguishing the open/closed bounds.
 */
const EXCLUSIVE_BOUND = "*"
const SORTINGS_NONE = "none"

/**
 * Maximum number of values a single filter may contribute to the URL.
 *
 * A multi-select (`in`) filter materializes one URL param per selected value,
 * so "select all" over a large or paginated data source would otherwise dump
 * hundreds of ids into the query string (bloated, and beyond browser/server URL
 * length limits). Past this cap the filter is left out of the URL — it is still
 * applied in-memory and persisted via storage, just not shareable through the
 * URL. Deliberately conservative; tune if a use case needs more.
 */
export const MAX_URL_FILTER_VALUES = 25

const filterParamName = (key: string): string =>
  `${DATA_COLLECTION_URL_PARAM_PREFIX}${key}`

/** The subset of a data collection's state we read from / write to the URL. */
export type DataCollectionUrlState<
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
> = Pick<
  DataCollectionStorage<CurrentFiltersState>,
  "filters" | "search" | "sortings"
>

export type DataCollectionUrlParams<
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
> = {
  id: string
  state: DataCollectionUrlState<CurrentFiltersState>
}

/** How {@link syncDataCollectionUrlParams} should update the browser history. */
export type DataCollectionUrlHistoryMode = "replace" | "push" | "none"

/* ------------------------------------------------------------------ */
/* Search params helpers                                               */
/* ------------------------------------------------------------------ */

const toSearchParams = (input?: string | URLSearchParams): URLSearchParams => {
  if (input instanceof URLSearchParams) return input
  if (typeof input === "string") return new URLSearchParams(input)
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search)
  }
  return new URLSearchParams()
}

const deleteDataCollectionParams = (params: URLSearchParams): void => {
  const keys = new Set(
    [...params.keys()].filter((key) =>
      key.startsWith(DATA_COLLECTION_URL_PARAM_PREFIX)
    )
  )
  keys.forEach((key) => params.delete(key))
}

/* ------------------------------------------------------------------ */
/* Sortings (`field:order`)                                            */
/* ------------------------------------------------------------------ */

const parseSortings = (raw: string): SortingsState<SortingsDefinition> => {
  const trimmed = raw.trim()
  if (trimmed === "" || trimmed === SORTINGS_NONE || trimmed === "null") {
    return null
  }
  const [field, order] = trimmed.split(":")
  if (!field) return null
  return { field, order: order === "desc" ? "desc" : "asc" }
}

const serializeSortings = (
  sortings: SortingsState<SortingsDefinition>
): string =>
  sortings ? `${String(sortings.field)}:${sortings.order}` : SORTINGS_NONE

/* ------------------------------------------------------------------ */
/* Per-filter value <-> param values                                   */
/* ------------------------------------------------------------------ */

const isoDate = (date: Date): string => date.toISOString().slice(0, 10)

/**
 * Encodes a single filter value into the list of param values to emit for its
 * `dc_<key>` param. Multi-select (`in`) values become repeated params; ranges
 * become `from..to`. Returns `[]` when there is nothing to emit.
 *
 * Driven by the value shape, so encoding needs no filter definition — only
 * {@link decodeFilterValue} does, to restore the right type.
 */
const encodeFilterValue = (value: unknown): string[] => {
  if (value === undefined || value === null) return []

  // `in` filter → repeated params, e.g. dc_department=A&dc_department=B
  if (Array.isArray(value)) {
    return value
      .filter((entry) => entry !== undefined && entry !== null)
      .map(String)
  }

  if (typeof value === "string") return value === "" ? [] : [value]
  if (typeof value === "number") return [String(value)]
  if (value instanceof Date) return [isoDate(value)]

  if (typeof value === "object") {
    const record = value as Record<string, unknown>

    // search filter with the strict toggle → { value: string; strict: boolean }.
    // Only the search term is reflected (the strict flag is not round-tripped).
    if (typeof record.value === "string" && "strict" in record) {
      return record.value === "" ? [] : [record.value]
    }

    // number filter
    if (record.mode === "single") {
      const single = record.value
      return single === undefined || single === null ? [] : [String(single)]
    }
    if (record.mode === "range") {
      const from = record.from as
        | { value?: number; closed?: boolean }
        | undefined
      const to = record.to as { value?: number; closed?: boolean } | undefined
      if (from?.value == null && to?.value == null) return []
      const bound = (
        b: { value?: number; closed?: boolean } | undefined
      ): string =>
        b?.value == null
          ? ""
          : `${b.value}${b.closed === false ? EXCLUSIVE_BOUND : ""}`
      return [`${bound(from)}${RANGE_SEPARATOR}${bound(to)}`]
    }

    // date range { from: Date, to?: Date }
    if (record.from instanceof Date || record.to instanceof Date) {
      const from = record.from instanceof Date ? isoDate(record.from) : ""
      const to = record.to instanceof Date ? isoDate(record.to) : ""
      return [`${from}${RANGE_SEPARATOR}${to}`]
    }
  }

  return []
}

const decodeBound = (
  part: string
): { value: number | undefined; closed: boolean } => {
  const exclusive = part.endsWith(EXCLUSIVE_BOUND)
  const raw = exclusive ? part.slice(0, -EXCLUSIVE_BOUND.length) : part
  return {
    value: raw === "" ? undefined : Number(raw),
    // No marker → inclusive (closed). `*` marker → exclusive (open).
    closed: !exclusive,
  }
}

const decodeNumber = (raw: string): NumberFilterValue => {
  if (raw.includes(RANGE_SEPARATOR)) {
    const [from, to] = raw.split(RANGE_SEPARATOR)
    return {
      mode: "range",
      from: decodeBound(from ?? ""),
      to: decodeBound(to ?? ""),
    }
  }
  const parsed = Number(raw)
  return { mode: "single", value: Number.isNaN(parsed) ? undefined : parsed }
}

const decodeDate = (raw: string): Date | DateRange | undefined => {
  if (raw.includes(RANGE_SEPARATOR)) {
    const [from, to] = raw.split(RANGE_SEPARATOR)
    if (!from) return undefined
    return to
      ? { from: new Date(from), to: new Date(to) }
      : { from: new Date(from) }
  }
  return raw ? new Date(raw) : undefined
}

/**
 * Restores a filter value from its param value(s), using the filter's declared
 * `type` so each filter ends up with the right shape (array / string / number /
 * date).
 */
const decodeFilterValue = (type: string, values: string[]): unknown => {
  switch (type) {
    case "in":
      return values
    case "search":
      return values[0]
    case "number":
      return decodeNumber(values[0] ?? "")
    case "date":
      return decodeDate(values[0] ?? "")
    default:
      return values.length > 1 ? values : values[0]
  }
}

/* ------------------------------------------------------------------ */
/* Read: URL -> state                                                  */
/* ------------------------------------------------------------------ */

/**
 * Parses the data collection identifier and state out of URL query params.
 *
 * @param input - A query string, a `URLSearchParams`, or omitted to read from
 *                `window.location.search`.
 * @param filtersDefinition - Needed to decode the `dc_<filterKey>` params back
 *                into correctly-typed filter values. Omit to skip filters.
 * @returns `{ id, state }`, or `null` when no `dc_id` is present.
 */
export const parseDataCollectionUrlParams = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  input?: string | URLSearchParams,
  filtersDefinition?: FiltersDefinition
): DataCollectionUrlParams<CurrentFiltersState> | null => {
  const params = toSearchParams(input)
  const id = params.get(DATA_COLLECTION_URL_PARAMS.id)
  if (!id) return null

  const state: DataCollectionUrlState<CurrentFiltersState> = {}

  if (params.has(DATA_COLLECTION_URL_PARAMS.search)) {
    state.search = params.get(DATA_COLLECTION_URL_PARAMS.search) ?? undefined
  }

  if (params.has(DATA_COLLECTION_URL_PARAMS.sortings)) {
    state.sortings = parseSortings(
      params.get(DATA_COLLECTION_URL_PARAMS.sortings) ?? ""
    )
  }

  if (filtersDefinition) {
    const filters: Record<string, unknown> = {}
    let hasFilters = false
    for (const [key, definition] of Object.entries(filtersDefinition)) {
      const name = filterParamName(key)
      if (!params.has(name)) continue
      filters[key] = decodeFilterValue(
        (definition as FilterDefinition).type,
        params.getAll(name)
      )
      hasFilters = true
    }
    if (hasFilters) state.filters = filters as CurrentFiltersState
  }

  return { id, state }
}

/* ------------------------------------------------------------------ */
/* Write: state -> URL                                                 */
/* ------------------------------------------------------------------ */

/** Dev warning, emitted once per filter key, when a filter is too big for the URL. */
const oversizedFilterWarned = new Set<string>()
const warnOversizedFilter = (key: string, count: number): void => {
  if (oversizedFilterWarned.has(key)) return
  oversizedFilterWarned.add(key)
  // eslint-disable-next-line no-console -- intentional dev guidance
  console.warn(
    `[OneDataCollection] Filter "${key}" has ${count} selected values, ` +
      `over the URL limit of ${MAX_URL_FILTER_VALUES}; it will not be reflected ` +
      `in the URL (still applied in-memory and persisted via storage).`
  )
}

/** Whether a filter value is non-empty and small enough to put in the URL. */
const isUrlSerializableFilter = (value: unknown): boolean => {
  const length = encodeFilterValue(value).length
  return length > 0 && length <= MAX_URL_FILTER_VALUES
}

const writeStateToParams = <
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
>(
  params: URLSearchParams,
  id: string,
  state: DataCollectionUrlState<CurrentFiltersState>
): void => {
  // Filters first (via `append`, so multi-select keeps repeated params); the
  // reserved params below are written with `set` and therefore win on a clash.
  if (state.filters) {
    for (const [key, value] of Object.entries(state.filters)) {
      const encoded = encodeFilterValue(value)
      // Skip filters that would dump an unbounded number of values (e.g.
      // "select all" over a large/paginated source) into the URL.
      if (encoded.length > MAX_URL_FILTER_VALUES) {
        warnOversizedFilter(key, encoded.length)
        continue
      }
      encoded.forEach((entry) => params.append(filterParamName(key), entry))
    }
  }

  params.set(DATA_COLLECTION_URL_PARAMS.id, id)

  if (state.search) {
    params.set(DATA_COLLECTION_URL_PARAMS.search, state.search)
  }
  if (state.sortings) {
    params.set(
      DATA_COLLECTION_URL_PARAMS.sortings,
      serializeSortings(state.sortings)
    )
  }
}

const hasActiveState = <
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
>(
  state: DataCollectionUrlState<CurrentFiltersState>
): boolean =>
  !!state.search ||
  !!state.sortings ||
  (!!state.filters && Object.values(state.filters).some(isUrlSerializableFilter))

/**
 * Builds a fresh `URLSearchParams` encoding a data collection `id` and state,
 * symmetric with {@link parseDataCollectionUrlParams}. Always sets `dc_id`.
 */
export const buildDataCollectionUrlParams = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  id: string,
  state: DataCollectionUrlState<CurrentFiltersState> = {}
): URLSearchParams => {
  const params = new URLSearchParams()
  writeStateToParams(params, id, state)
  return params
}

/**
 * Writes a data collection's current filters/search/sortings onto an existing
 * query string, preserving any unrelated params. Every `dc_`-prefixed param is
 * rebuilt from `state`, so cleared filters drop out and an entirely empty state
 * leaves the URL free of `dc_` params (rather than a bare `?dc_id=<id>`).
 */
export const setDataCollectionUrlParams = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  current: string | URLSearchParams | undefined,
  id: string,
  state: DataCollectionUrlState<CurrentFiltersState>
): URLSearchParams => {
  // Clone so we never mutate a caller-owned URLSearchParams (e.g. the live one).
  const params = new URLSearchParams(toSearchParams(current))
  deleteDataCollectionParams(params)
  if (hasActiveState(state)) {
    writeStateToParams(params, id, state)
  }
  return params
}

/**
 * Reflects a data collection's current filters/search/sortings into the URL.
 *
 * Pairs with {@link parseDataCollectionUrlParams} (which reads the other way).
 * `OneDataCollection` wires this up by default when an `id` is set.
 *
 * @returns The resulting query string (no leading `?`), or `null` under SSR.
 */
export const syncDataCollectionUrlParams = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  id: string,
  state: DataCollectionUrlState<CurrentFiltersState>,
  options?: { history?: DataCollectionUrlHistoryMode }
): string | null => {
  if (typeof window === "undefined") return null

  const params = setDataCollectionUrlParams(window.location.search, id, state)
  const query = params.toString()
  const url = query
    ? `${window.location.pathname}?${query}`
    : window.location.pathname

  const mode = options?.history ?? "replace"
  if (mode === "push") {
    window.history.pushState(null, "", url)
  } else if (mode === "replace") {
    window.history.replaceState(null, "", url)
  }

  return query
}

/* ------------------------------------------------------------------ */
/* Storage writer (mirrors readDataCollectionStorage)                  */
/* ------------------------------------------------------------------ */

/**
 * Synchronously persists a OneDataCollection's state to localStorage, mirroring
 * `readDataCollectionStorage`. Uses the same `datacollection-` prefixed key as
 * `dataCollectionLocalStorageHandler` so the component hydrates from it.
 *
 * @param id - The OneDataCollection `id`, WITHOUT the `datacollection-` prefix.
 */
export const writeDataCollectionStorage = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  id: string,
  storage: DataCollectionStorage<CurrentFiltersState>
): void => {
  try {
    localStorage.setItem(
      getDataCollectionStorageKey(id),
      JSON.stringify(storage)
    )
  } catch {
    // Best-effort: storage may be unavailable (private mode, quota, SSR).
  }
}
