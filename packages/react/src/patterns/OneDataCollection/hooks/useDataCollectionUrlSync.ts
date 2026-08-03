import { useDeepCompareEffect } from "@reactuses/core"
import { useCallback, useEffect, useState } from "react"
import { useDebounceCallback } from "usehooks-ts"

import {
  FiltersDefinition,
  FiltersState,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource"
import {
  type DataCollectionUrlState,
  parseDataCollectionUrlParams,
  syncDataCollectionUrlParams,
} from "@/lib/providers/datacollection/dataCollectionUrlParams"

/**
 * Debounce (ms) for the collection → URL write. The search box updates
 * `currentSearch` on every keystroke, and each write is a `history.replaceState`
 * — which the browser Sentry SDK treats as a navigation and rotates the session
 * on, so an un-debounced write spams two session envelopes per letter. Coalesce
 * a burst of changes into a single write once the user pauses.
 */
const URL_SYNC_DEBOUNCE_MS = 300

type UseDataCollectionUrlSyncOptions = {
  /**
   * When true, no reading from or writing to the URL happens. URL syncing is on
   * by default for *any* collection (an `id` is not required) — params are not
   * scoped to a collection, so a single URL-synced collection per page is
   * assumed.
   */
  disabled: boolean
  /** Storage hydration gate — we apply the URL only after it resolves. */
  storageReady: boolean
  /** Needed to decode `dc_<filterKey>` params back into typed filter values. */
  filtersDefinition: FiltersDefinition | undefined
  filters: FiltersState<FiltersDefinition>
  search: string | undefined
  sortings: SortingsState<SortingsDefinition>
  /** Index of the active visualization. */
  visualization: number
  /**
   * Ordered visualization type/keys (e.g. `["table", "kanban"]`), used to map
   * the index to/from the readable `dc_visualization` value, only synced
   * when there is more than one visualization. Duplicate types resolve to the
   * first matching index on read.
   */
  visualizationKeys: readonly string[]
  /** Id of the selected preset (absent when none is selected). */
  selectedPresetId: string | undefined
  setFilters: (value: FiltersState<FiltersDefinition>) => void
  setSearch: (value: string | undefined) => void
  setSortings: (value: SortingsState<SortingsDefinition>) => void
  setVisualization: (value: number) => void
  setSelectedPresetId: (value: string | undefined) => void
}

/**
 * Keeps a OneDataCollection's filters/search/sortings/visualization in two-way
 * sync with the URL query params (see `dataCollectionUrlParams`):
 *
 * - **URL → collection:** once, after storage has hydrated (so the URL takes
 *   precedence over persisted state), the `dc_`-prefixed params are applied to
 *   the current state.
 * - **collection → URL:** thereafter, every change to filters/search/sortings is
 *   reflected back into the URL via `history.replaceState`.
 *
 * The "apply once, then write" ordering avoids the pre-hydration empty snapshot
 * clobbering freshly-loaded params: writing only starts after the URL has been
 * read and applied (which flips `urlApplied` in the same render as the applied
 * state, so the first write re-affirms the URL rather than wiping it).
 */
export const useDataCollectionUrlSync = ({
  disabled,
  storageReady,
  filtersDefinition,
  filters,
  search,
  sortings,
  visualization,
  visualizationKeys,
  selectedPresetId,
  setFilters,
  setSearch,
  setSortings,
  setVisualization,
  setSelectedPresetId,
}: UseDataCollectionUrlSyncOptions): void => {
  const active = !disabled
  // Only sync the visualization when there is a real choice to reflect.
  const syncVisualization = visualizationKeys.length > 1
  const [urlApplied, setUrlApplied] = useState(false)

  // URL → collection (run once, after hydration so the URL wins over storage).
  useEffect(() => {
    if (!active || !storageReady || urlApplied) return

    const state = parseDataCollectionUrlParams(
      typeof window !== "undefined" ? window.location.search : "",
      filtersDefinition
    )
    // Only the params present in the URL override the current state.
    if ("filters" in state) {
      setFilters((state.filters ?? {}) as FiltersState<FiltersDefinition>)
    }
    if ("search" in state) setSearch(state.search)
    if ("sortings" in state) setSortings(state.sortings ?? null)
    // Map the readable view key back to its index; ignore unknown keys.
    if (syncVisualization && state.visualization !== undefined) {
      const index = visualizationKeys.indexOf(state.visualization)
      if (index >= 0) setVisualization(index)
    }
    // Restore the selected preset marker; its captured filters/sorting/view are
    // carried by the other params, so we only mark the selection here.
    if (state.preset !== undefined) setSelectedPresetId(state.preset)

    // Enable writing in the same render as the applied state, so the first
    // write reflects the URL we just read rather than the prior snapshot.
    setUrlApplied(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- apply once when ready
  }, [active, storageReady])

  // collection → URL. Debounced (see URL_SYNC_DEBOUNCE_MS): a burst of changes —
  // above all typing in the search box — collapses into a single
  // `history.replaceState` instead of one per keystroke, so the browser Sentry
  // session isn't rotated (two session envelopes) on every letter.
  // Stable identity (empty deps): `useDebounceCallback` re-creates its debounced
  // instance whenever `func` changes, so an inline arrow here would yield a new
  // `debouncedSync` every render — re-running the effect below and cancelling
  // the pending write on each render, which under frequent re-renders would
  // never let it fire. `syncDataCollectionUrlParams` reads `window.location`
  // itself and takes the full state as its argument, so it needs no deps.
  const syncToUrl = useCallback(
    (state: DataCollectionUrlState<FiltersState<FiltersDefinition>>) =>
      syncDataCollectionUrlParams(state),
    []
  )
  const debouncedSync = useDebounceCallback(syncToUrl, URL_SYNC_DEBOUNCE_MS)

  useDeepCompareEffect(() => {
    if (!active || !urlApplied) return
    debouncedSync({
      filters,
      search,
      sortings,
      // Omit the default (first) view; reflect others by their type/key.
      visualization:
        syncVisualization && visualization > 0
          ? visualizationKeys[visualization]
          : undefined,
      preset: selectedPresetId,
    })
    // Cancel a still-pending write when deps change or on unmount, so a stale
    // snapshot can't land after a newer one — and, on unmount, can't stamp this
    // collection's `dc_` params onto the page we navigated to. Each change
    // re-schedules with the latest state, so coalescing is preserved.
    return () => debouncedSync.cancel()
  }, [
    active,
    urlApplied,
    filters,
    search,
    sortings,
    visualization,
    visualizationKeys,
    syncVisualization,
    selectedPresetId,
    debouncedSync,
  ])
}
