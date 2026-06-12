import { useCallback, useLayoutEffect, useRef, useState } from "react"

import { FiltersDefinition, FiltersState, RecordType } from "@/hooks/datasource"
import { Link } from "@/lib/linkHandler"
import { useDataCollectionStorage } from "@/lib/providers/datacollection"
import { notifyDataCollectionStorageChange } from "@/lib/providers/datacollection/dataCollectionStorageEvents"
import {
  mergeDataCollectionFilters,
  readDataCollectionStorage,
} from "@/lib/providers/datacollection/readDataCollectionStorage"

import { BreadcrumbCollectionSelectItemType } from "../../types"
import { BreadcrumbSelect } from "../BreadcrumbSelect"
import { buildCollectionBoundSource } from "./buildCollectionBoundSource"

/**
 * Internal renderer for `type: "collection-select"` breadcrumb items.
 *
 * Loop-safety by construction — the footgun this kills is: app re-renders →
 * new inline item/source/adapter identities → F0Select's fetch effects
 * re-fire → state update → render → infinite refetch loop. Every link in
 * that chain is cut:
 *
 * 1. The persisted collection state is read exactly once (state initializer).
 * 2. `item.source` is captured on mount; later identity changes are ignored.
 *    `Breadcrumbs` keys items by `id`, so giving the item a new `id`
 *    remounts and re-captures — the documented way to swap sources.
 * 3. The seeded definition (and thus its dataAdapter) is built once, so the
 *    reference handed to F0Select never changes.
 * 4. `mapOptions`/`getItemHref`/`onSelect` are wrapped in stable callbacks
 *    reading the latest values from a ref.
 * 5. Picking the already-current value is a no-op, and F0Select itself never
 *    emits before user interaction — mount/data-load cannot navigate.
 */
export function BreadcrumbCollectionSelect({
  item,
}: {
  item: BreadcrumbCollectionSelectItemType
}) {
  // One-shot persisted snapshot + mount-stable source capture
  const [seededSource] = useState(() =>
    buildCollectionBoundSource(
      item.source,
      readDataCollectionStorage(item.collectionId),
      { seed: item.seed, showFilters: item.showFilters }
    )
  )

  const latestRef = useRef(item)
  latestRef.current = item

  const storageHandler = useDataCollectionStorage()
  const storageHandlerRef = useRef(storageHandler)
  storageHandlerRef.current = storageHandler

  const stableMapOptions = useCallback(
    (record: RecordType) => latestRef.current.mapOptions(record),
    []
  )

  // Editable filters (`showFilters`) write through to the collection's
  // persisted state: the dropdown's filter picker edits "the list's filters",
  // not a transient local copy. The write keeps every other persisted piece
  // (sortings, search, settings, …) and updates the same slot
  // `resolveDataCollectionFilters` reads, then notifies live collection-bound
  // consumers (e.g. useDataCollectionItemNavigation re-seeds so prev/next +
  // counter follow, and a later remount of this select re-seeds correctly).
  const stableOnFiltersChange = useCallback(
    (filters: FiltersState<FiltersDefinition>) => {
      const current = latestRef.current
      current.onFiltersChange?.(filters)
      if (!current.showFilters) return
      const persist = async () => {
        // NOTE: must await (not .then) — the default noop handler returns a
        // plain object typed as a Promise.
        const stored = await storageHandlerRef.current.get(current.collectionId)
        await storageHandlerRef.current.set(
          current.collectionId,
          mergeDataCollectionFilters(stored ?? {}, filters)
        )
        notifyDataCollectionStorageChange(current.collectionId)
      }
      // Storage unavailable/unreadable → the dropdown still filters in-memory.
      persist().catch(() => {})
    },
    []
  )

  // Programmatic navigation goes through a hidden Link so the app's
  // LinkProvider (SPA routing) is honored — same pattern PageHeader's
  // PageAction uses. Without a provider it falls back to a plain anchor.
  const [pendingHref, setPendingHref] = useState<string | null>(null)
  const navRef = useRef<HTMLAnchorElement>(null)
  useLayoutEffect(() => {
    if (!pendingHref) return
    navRef.current?.click()
    setPendingHref(null)
  }, [pendingHref])

  const handleChange = useCallback((value: string, record?: RecordType) => {
    const current = latestRef.current
    if (value === undefined || value === current.value) return
    const href = current.getItemHref?.(value, record)
    if (href) setPendingHref(href)
    current.onSelect?.(value, record)
  }, [])

  return (
    <>
      <BreadcrumbSelect<string, RecordType>
        label={item.label}
        hideLabel
        source={seededSource}
        mapOptions={stableMapOptions}
        defaultItem={item.defaultItem}
        clearable={false}
        onChange={handleChange}
        value={item.value}
        showSearchBox={item.searchbox}
        onFiltersChange={stableOnFiltersChange}
      />
      {pendingHref && (
        <Link
          href={pendingHref}
          ref={navRef}
          tabIndex={-1}
          aria-hidden
          className="hidden"
        />
      )}
    </>
  )
}
