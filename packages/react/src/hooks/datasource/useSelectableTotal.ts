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
    if (!fetchTotal) return

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
