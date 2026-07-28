import { useEffect, useRef, useState } from "react"

import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { SelectableTotalOptions } from "./types"

/**
 * Resolves the consumer-provided count of selectable items for the current
 * filters/search. Undefined while it is in flight, when the source doesn't
 * provide the callback, or when the count fails — callers must be able to
 * render without a number.
 */
export const useSelectableTotal = <Filters extends FiltersDefinition>({
  fetchSelectableTotal,
  filters,
  search,
}: {
  fetchSelectableTotal?: (
    options: SelectableTotalOptions<Filters>
  ) => Promise<number>
  filters: FiltersState<Filters>
  search: string | undefined
}): number | undefined => {
  const [total, setTotal] = useState<number>()

  // Consumers pass this inline (`fetchSelectableTotal={() => count(...)}`), so
  // depending on its identity would refetch on every render. Only the query it
  // is scoped to should retrigger it.
  const fetchRef = useRef(fetchSelectableTotal)
  fetchRef.current = fetchSelectableTotal
  const isEnabled = !!fetchSelectableTotal

  useEffect(() => {
    const fetchTotal = fetchRef.current
    if (!fetchTotal) {
      // A source can drop the callback (e.g. it's conditional). Keeping the
      // last resolved count would leave a number on screen that nothing backs.
      setTotal(undefined)
      return
    }

    // The count only means anything for one filter/search combination, so a
    // response for the previous one must never overwrite the current state.
    let stale = false
    setTotal(undefined)

    fetchTotal({ filters, search })
      .then((value) => {
        if (!stale) setTotal(value)
      })
      .catch(() => {
        if (!stale) setTotal(undefined)
      })

    return () => {
      stale = true
    }
  }, [isEnabled, filters, search])

  return total
}

/**
 * Whether any of these records fails the `selectable` predicate.
 *
 * Always derived from the fetched records, never from a rendered-row registry:
 * a registry can hold lazily-loaded nested children, so its size says nothing
 * about whether the loaded top-level rows are all selectable.
 */
export const hasNonSelectableRecords = <R>(
  records: R[] | undefined,
  selectable: ((item: R) => string | number | undefined) | undefined
): boolean =>
  !!selectable && (records ?? []).some((item) => selectable(item) === undefined)

/**
 * Sticky within one filter/search combination: once a non-selectable row has
 * been seen, `paginationInfo.total` has been proven wrong as a selectable
 * total, and paging onto a fully-selectable page doesn't make it right again.
 * Resets when the query changes, since that's a different dataset.
 *
 * A ref rather than state: the value is only ever read during a render that is
 * already happening because the page or the query changed, so nothing needs to
 * be re-rendered when it flips.
 */
export const useHasNonSelectableRows = (
  pageHasNonSelectableRows: boolean,
  queryKey: string
): boolean => {
  const seenRef = useRef(false)
  const queryKeyRef = useRef(queryKey)

  if (queryKeyRef.current !== queryKey) {
    queryKeyRef.current = queryKey
    seenRef.current = false
    // The rows still on screen belong to the previous query — the fetch for the
    // new one hasn't resolved yet — so this render's evidence says nothing
    // about the new dataset. Taking it would carry "seen" across queries and
    // strand the new one on the unknown-total path forever. The next render,
    // once the new records land, provides the real answer.
    return false
  }

  if (pageHasNonSelectableRows) seenRef.current = true

  return seenRef.current
}

/**
 * The total to show for a cross-page "select all", or undefined when no honest
 * number is available.
 *
 * `paginationInfo.total` counts every record, selectable or not, so it can only
 * stand in for the selectable total while every loaded row is selectable. Once
 * we can see non-selectable rows, only a consumer-provided count is trustworthy
 * — otherwise the UI must drop the number instead of showing a wrong one.
 */
export const resolveSelectableTotal = ({
  fetchedTotal,
  paginationTotal,
  hasNonSelectableRows,
}: {
  fetchedTotal: number | undefined
  paginationTotal: number | undefined
  hasNonSelectableRows: boolean
}): number | undefined =>
  fetchedTotal ?? (hasNonSelectableRows ? undefined : paginationTotal)
