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
  selectedRecordId,
  onSelect,
  revealRecordId,
  searchSelectionNonce,
  viewportInset,
  initialViewport,
  showControls,
  projection,
  markerLimit,
  ariaLabel,
  sidebar,
  detail,
  onSidebarToggle,
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

  const { data, paginationInfo, isInitialLoading, isLoading } =
    useDataCollectionData<
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

  // Selection is tracked here so a marker click can hand the consumer the whole
  // record (for a side panel) while `F0Map` only ever deals in ids. Controlled
  // when `selectedRecordId` is passed - `null` means "nothing selected", not
  // "uncontrolled" - so the consumer can end a selection its panel started.
  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(
    null
  )
  const selectedId =
    selectedRecordId !== undefined ? selectedRecordId : internalSelectedId

  // Only a flight that zoomed in has a zoom level to undo. A click re-centers
  // at the zoom the user was already on, so dropping it must not yank the
  // camera back out.
  const zoomedIntoSelectionRef = useRef(false)

  const selectRecord = useCallback(
    (id: string | null) => {
      if (selectedRecordId === undefined) setInternalSelectedId(id)
      zoomedIntoSelectionRef.current = false
      if (!onSelect) return
      onSelect(
        id ? (records.find((record) => recordId(record) === id) ?? null) : null
      )
    },
    [onSelect, records, recordId, selectedRecordId]
  )

  // Leaving the map drops the selection. The consumer opens its panel from
  // `onSelect`, and this component unmounts when the user switches to another
  // visualization - without this the panel would stay open over that view, and
  // come back on return.
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect
  useEffect(() => () => onSelectRef.current?.(null), [])

  const mapRef = useRef<F0MapHandle>(null)

  // The panel toggle is always offered by the map view. Its state lives here
  // because the panel it will open does not exist yet - pressing it only flips
  // the icon and notifies the consumer.
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const toggleSidebar = useCallback(() => {
    setSidebarExpanded((expanded) => {
      const next = !expanded
      onSidebarToggle?.(next)
      return next
    })
  }, [onSidebarToggle])

  // Handed to both panels so their content can drive the map's own selection:
  // a row in the list and its pin on the map end up in the same place.
  const sidebarApi = useMemo(
    () => ({
      select: (record: Record | null) => {
        const id = record ? recordId(record) : null
        // Picking from the list flies to the marker, not just marks it: the
        // record may be off screen, and a selection you cannot see is no
        // answer. Same path a search reveal takes.
        if (id) mapRef.current?.focusMarker(id)
        selectRecord(id)
        // Set after `selectRecord`, which resets it: this selection was flown
        // to, so dropping it has a zoom to undo.
        if (id) zoomedIntoSelectionRef.current = true
      },
      selectedRecordId: selectedId,
    }),
    [selectRecord, recordId, selectedId]
  )

  const selectedRecord = selectedId
    ? (records.find((record) => recordId(record) === selectedId) ?? null)
    : null

  // The detail panel has to stay mounted while it slides away, so it keeps
  // rendering the record it was showing until something else is selected.
  // Dropping the content on deselect would unmount the panel mid-transition and
  // it would simply vanish instead of leaving.
  const lastDetailRecord = useRef<Record | null>(null)
  if (selectedRecord) lastDetailRecord.current = selectedRecord
  const detailRecord = selectedRecord ?? lastDetailRecord.current

  // Filters and the search box both narrow the records the collection hands
  // over, so the camera reframes to what is left - with two filters applied at
  // once that is the set matching both, and with a search term that is the
  // matches. Search is part of the query, not a separate gesture: the panel on
  // the right lists the same narrowed records, so the map has to agree with it.
  //
  // The fit cannot fire on the query change itself: the records for the new
  // query are still being fetched, so the markers on screen are the previous
  // ones and the camera would frame those. Waiting on a new `points` identity is
  // not enough either — it changes within the same commit, while the contents
  // are still stale. So the pending fit records the marker set that was on
  // screen and waits for one that is actually different, with nothing in
  // flight. A query that does not change what is shown therefore never moves
  // the camera.
  const markerKey = points.map((point) => point.id).join(",")
  const querySignature = JSON.stringify({
    filters: source.currentFilters ?? {},
    search: source.currentSearch ?? "",
  })
  // Starts unset so the initial load frames itself, which is F0Map's own job.
  const framedQueryRef = useRef<string | null>(null)
  const staleMarkerKeyRef = useRef<string | null>(null)
  useEffect(() => {
    if (framedQueryRef.current === null) {
      framedQueryRef.current = querySignature
      return
    }
    if (framedQueryRef.current === querySignature) return

    framedQueryRef.current = querySignature
    staleMarkerKeyRef.current = markerKey
  }, [querySignature, markerKey])
  useEffect(() => {
    if (staleMarkerKeyRef.current === null || isLoading) return
    // Same markers as before the filter changed: they have not arrived yet, or
    // the filter did not change what is shown and nothing needs reframing.
    if (staleMarkerKeyRef.current === markerKey) return

    staleMarkerKeyRef.current = null
    mapRef.current?.fitToMarkers()
  }, [isLoading, markerKey])

  // Zoom back out once the reason to be zoomed in is gone: the selection
  // dropped (its panel closed) or the search cleared. Only when the camera had
  // actually flown in - after a plain click there is no zoom to undo, and
  // reframing everything would be a jump the user never asked for.
  const previousSelectedRef = useRef<string | null>(null)
  useEffect(() => {
    const previous = previousSelectedRef.current
    previousSelectedRef.current = selectedId
    if (!previous || selectedId) return

    if (zoomedIntoSelectionRef.current) mapRef.current?.fitToMarkers()
    zoomedIntoSelectionRef.current = false
  }, [selectedId])

  const search = source.currentSearch
  const previousSearchRef = useRef(search)
  useEffect(() => {
    const previous = previousSearchRef.current
    previousSearchRef.current = search
    if (!previous || search) return

    // Skipped when clearing the search is already going to widen the marker
    // set: the reframe above is the same movement, and firing both would ease
    // the camera to the same place twice. This one is for the case where the
    // search only ever flew somewhere - the records never changed - and there
    // is a zoom left to undo.
    if (zoomedIntoSelectionRef.current && staleMarkerKeyRef.current === null) {
      mapRef.current?.fitToMarkers()
    }
    zoomedIntoSelectionRef.current = false
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
    // Set after `selectRecord`, which resets it: this selection was flown to,
    // so dropping it has a zoom to undo.
    zoomedIntoSelectionRef.current = true
  }, [revealRecordId, searchSelectionNonce, points, selectRecord])

  // The map runs edge to edge - it is a canvas, not a list of rows, so a
  // horizontal gutter would only shrink the area it has to draw in. The rule on
  // top is what separates it from the toolbar; the other views get that
  // separation from their own header row, a map has no such edge of its own.
  const wrapperClassName =
    "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary"

  if (isInitialLoading) {
    return (
      <div className={wrapperClassName}>
        <F0MapSkeleton />
      </div>
    )
  }

  return (
    <div className={wrapperClassName}>
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
        // Same `records` the markers come from: one fetch, one page, one truth.
        sidebar={sidebar?.(records, sidebarApi)}
        sidebarExpanded={sidebarExpanded}
        onSidebarToggle={toggleSidebar}
        // The detail panel follows the selection, whichever way it was made.
        // Mounted from the first render when a detail renderer exists, empty
        // until something is selected: a CSS transition doesn't run on the
        // frame an element mounts, so a panel that appears only on selection
        // would skip its own entrance the first time.
        detail={
          detail ? (
            detailRecord ? (
              detail(detailRecord, sidebarApi)
            ) : (
              <></>
            )
          ) : null
        }
        detailOpen={Boolean(selectedRecord)}
        // With a detail panel in play, dismissal is its own job: a click on the
        // map must not close it out from under the reader.
        clearSelectionOnBackgroundClick={!detail}
        fullScreen
      />
    </div>
  )
}
