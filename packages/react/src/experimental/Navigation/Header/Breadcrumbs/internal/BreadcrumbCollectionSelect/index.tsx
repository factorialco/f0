import { useCallback, useLayoutEffect, useRef, useState } from "react"

import { RecordType } from "@/hooks/datasource"
import { Link } from "@/lib/linkHandler"
import { readDataCollectionStorage } from "@/lib/providers/datacollection/readDataCollectionStorage"

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
      item.seed
    )
  )

  const latestRef = useRef(item)
  latestRef.current = item

  const stableMapOptions = useCallback(
    (record: RecordType) => latestRef.current.mapOptions(record),
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
