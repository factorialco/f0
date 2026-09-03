import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import {
  F0Map,
  type F0MapHandle,
  type F0MapPoint,
  F0MapSkeleton,
  RECOMMENDED_MAX_MARKERS,
} from "@/patterns/F0Map"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

import { useDataCollectionData } from "../../../hooks/useDataCollectionData"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { MapVisualizationOptions } from "./types"

export type { MapVisualizationOptions } from "./types"

export type MapCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  MapVisualizationOptions<Record, Filters, Sortings>
>

export const MapCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  coordinates,
  label,
  marker,
  getRecordId,
  onSelect,
  revealRecordId,
  searchSelectionNonce,
  viewportInset,
  initialViewport,
  showControls,
  projection,
  markerLimit,
  ariaLabel,
  onLoadData,
  onLoadError,
}: MapCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  // A map is a single canvas, not a paginated surface: it asks for one page big
  // enough to hold every marker it can usefully draw, rather than the page size
  // a table would use. Capped at the map's own ceiling because markers are DOM
  // elements.
  const markerPageSize = Math.min(
    markerLimit ?? RECOMMENDED_MAX_MARKERS,
    RECOMMENDED_MAX_MARKERS
  )
  const mapDataAdapter = useMemo(() => {
    if (source.dataAdapter.paginationType !== "pages") return source.dataAdapter
    return { ...source.dataAdapter, perPage: markerPageSize }
  }, [source.dataAdapter, markerPageSize])

  const { data, paginationInfo, isInitialLoading } = useDataCollectionData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >({ ...source, dataAdapter: mapDataAdapter }, { onError: onLoadError })

  const records = data.records

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || records.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data: records,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mirrors the other visualizations: react to the data, not to filter identity
  }, [paginationInfo?.total, records])

  const recordId = useCallback(
    (record: Record) => (getRecordId ? getRecordId(record) : String(record.id)),
    [getRecordId]
  )

  // Records without coordinates are dropped rather than pinned at [0, 0].
  const points = useMemo<F0MapPoint[]>(() => {
    const markers: F0MapPoint[] = []
    for (const record of records) {
      const position = coordinates(record)
      if (!position) continue
      markers.push({
        id: recordId(record),
        coordinates: position,
        label: label?.(record),
        ...(marker?.(record) ?? { variant: "default" }),
      })
    }
    return markers
  }, [records, coordinates, label, marker, recordId])

  // Selection lives here so a marker click can hand the consumer the whole
  // record (for a side panel) while `F0Map` only ever deals in ids.
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectRecord = useCallback(
    (id: string | null) => {
      setSelectedId(id)
      if (!onSelect) return
      onSelect(
        id ? (records.find((record) => recordId(record) === id) ?? null) : null
      )
    },
    [onSelect, records, recordId]
  )

  // Leaving the map drops the selection. The consumer opens its panel from
  // `onSelect`, and this component unmounts when the user switches to another
  // visualization - without this the panel would stay open over that view, and
  // come back on return.
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect
  useEffect(() => () => onSelectRef.current?.(null), [])

  const mapRef = useRef<F0MapHandle>(null)

  // Filters narrow the markers, so the camera reframes to what is left - with
  // two filters applied at once that is the set matching both. The fit waits for
  // the new markers instead of firing on the filter change, which lands a frame
  // earlier while the old ones are still drawn. The first pass only records the
  // filters: framing the initial load is F0Map's own job.
  const filterSignature = JSON.stringify(source.currentFilters ?? {})
  const framedFiltersRef = useRef<string | null>(null)
  const refitPendingRef = useRef(false)
  useEffect(() => {
    if (framedFiltersRef.current === null) {
      framedFiltersRef.current = filterSignature
      return
    }
    if (framedFiltersRef.current === filterSignature) return

    framedFiltersRef.current = filterSignature
    refitPendingRef.current = true
  }, [filterSignature])
  useEffect(() => {
    if (!refitPendingRef.current) return

    refitPendingRef.current = false
    mapRef.current?.fitToMarkers()
  }, [points])

  // Zoom back out to the overview once the reason to be zoomed in is gone:
  // the selection dropped (its panel closed) or the search cleared.
  const previousSelectedRef = useRef<string | null>(null)
  useEffect(() => {
    const previous = previousSelectedRef.current
    previousSelectedRef.current = selectedId
    if (previous && !selectedId) mapRef.current?.fitToMarkers()
  }, [selectedId])

  const search = source.currentSearch
  const previousSearchRef = useRef(search)
  useEffect(() => {
    const previous = previousSearchRef.current
    previousSearchRef.current = search
    if (previous && !search) mapRef.current?.fitToMarkers()
  }, [search])

  // A reveal is a one-shot event, not a piece of state: fly to the marker and
  // select it. `searchSelectionNonce` is what lets the same record be revealed
  // twice in a row, since the id alone would not change.
  const revealedRef = useRef<string | null>(null)
  useEffect(() => {
    if (!revealRecordId) return
    const signature = `${revealRecordId}:${searchSelectionNonce ?? 0}`
    if (revealedRef.current === signature) return
    if (!points.some((point) => point.id === revealRecordId)) return

    revealedRef.current = signature
    mapRef.current?.focusMarker(revealRecordId)
    selectRecord(revealRecordId)
  }, [revealRecordId, searchSelectionNonce, points, selectRecord])

  if (isInitialLoading) {
    return (
      <div className="flex h-full min-h-0 flex-1 flex-col">
        <F0MapSkeleton />
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <F0Map
        ref={mapRef}
        markers={points}
        selectedMarkerId={selectedId}
        onMarkerSelect={selectRecord}
        // A selection opens the consumer's panel, so the marker it refers to has
        // to stay visible beside it.
        centerOnMarkerClick
        viewportInset={viewportInset}
        initialViewport={initialViewport}
        showControls={showControls}
        projection={projection}
        ariaLabel={ariaLabel}
        fullScreen
      />
    </div>
  )
}
