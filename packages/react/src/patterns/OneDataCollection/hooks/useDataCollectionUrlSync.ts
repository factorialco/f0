import { useEffect, useState } from "react"
import { useDeepCompareEffect } from "@reactuses/core"

import {
  FiltersDefinition,
  FiltersState,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource"
import {
  parseDataCollectionUrlParams,
  syncDataCollectionUrlParams,
} from "@/lib/providers/datacollection/dataCollectionUrlParams"

type UseDataCollectionUrlSyncOptions = {
  /** The OneDataCollection `id`; required to address its `?dc_id=<id>` params. */
  id: string | undefined
  /** When true, no reading from or writing to the URL happens. */
  disabled: boolean
  /** Storage hydration gate — we apply the URL only after it resolves. */
  storageReady: boolean
  /** Needed to decode `dc_<filterKey>` params back into typed filter values. */
  filtersDefinition: FiltersDefinition | undefined
  filters: FiltersState<FiltersDefinition>
  search: string | undefined
  sortings: SortingsState<SortingsDefinition>
  setFilters: (value: FiltersState<FiltersDefinition>) => void
  setSearch: (value: string | undefined) => void
  setSortings: (value: SortingsState<SortingsDefinition>) => void
}

/**
 * Keeps a OneDataCollection's filters/search/sortings in two-way sync with the
 * URL query params (see `dataCollectionUrlParams`):
 *
 * - **URL → collection:** once, after storage has hydrated (so the URL takes
 *   precedence over persisted state), any `dc`-addressed params matching this
 *   collection's `id` are applied to the current state.
 * - **collection → URL:** thereafter, every change to filters/search/sortings is
 *   reflected back into the URL via `history.replaceState`.
 *
 * The "apply once, then write" ordering avoids the pre-hydration empty snapshot
 * clobbering freshly-loaded params: writing only starts after the URL has been
 * read and applied (which flips `urlApplied` in the same render as the applied
 * state, so the first write re-affirms the URL rather than wiping it).
 */
export const useDataCollectionUrlSync = ({
  id,
  disabled,
  storageReady,
  filtersDefinition,
  filters,
  search,
  sortings,
  setFilters,
  setSearch,
  setSortings,
}: UseDataCollectionUrlSyncOptions): void => {
  const active = !disabled && !!id
  const [urlApplied, setUrlApplied] = useState(false)

  // URL → collection (run once, after hydration so the URL wins over storage).
  useEffect(() => {
    if (!active || !storageReady || urlApplied) return

    const parsed = parseDataCollectionUrlParams(
      typeof window !== "undefined" ? window.location.search : "",
      filtersDefinition
    )
    if (parsed && parsed.id === id) {
      const { state } = parsed
      // Only the params present in the URL override the current state.
      if ("filters" in state) {
        setFilters((state.filters ?? {}) as FiltersState<FiltersDefinition>)
      }
      if ("search" in state) setSearch(state.search)
      if ("sortings" in state) setSortings(state.sortings ?? null)
    }

    // Enable writing in the same render as the applied state, so the first
    // write reflects the URL we just read rather than the prior snapshot.
    setUrlApplied(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- apply once when ready
  }, [active, storageReady, id])

  // collection → URL.
  useDeepCompareEffect(() => {
    if (!active || !urlApplied || !id) return
    syncDataCollectionUrlParams(id, { filters, search, sortings })
  }, [active, urlApplied, id, filters, search, sortings])
}
