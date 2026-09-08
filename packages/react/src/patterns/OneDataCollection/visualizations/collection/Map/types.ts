import type { ReactNode } from "react"

import { RecordType, SortingsDefinition } from "@/hooks/datasource"
import type {
  F0MapMarkerVariantProps,
  F0MapProjection,
  F0MapViewport,
  F0MapViewportInset,
} from "@/patterns/F0Map"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

/**
 * A record the map cannot place, and why. Returned from `coordinates` instead of
 * a position. The record is not dropped: it is listed under "Not on map" in the
 * side panel and counted on the map surface, so a collection never loses a
 * record just because it has nowhere to draw it.
 */
export type MapUnplaced = {
  /**
   * `incomplete`: the record should have a location and does not - an unfilled
   * or ungeocodable address. Listed with the other unplaced records; it is
   * the case somebody can go and fix, and the hook for telling it apart from a
   * record that is legitimately location-less once that distinction is drawn.
   */
  kind: "incomplete"
}

/**
 * Options for the map visualization. The map is a projection of the collection's
 * records onto coordinates: the only required option is how to read a record's
 * position. Everything about how a marker looks and behaves belongs to `F0Map`.
 */
export type MapVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  /**
   * A record's `[longitude, latitude]`, or what stands in for one when it has
   * none. `null` means "not on the map, no reason given": the record draws no
   * marker but is still listed under "Not on map" in the side panel. A
   * `MapUnplaced` says why. The map does no geocoding: resolve coordinates
   * server-side and read them here.
   */
  coordinates: (record: R) => [number, number] | null | MapUnplaced
  /** Label rendered beside the marker. Omitted means an unlabelled pin. */
  label?: (record: R) => string
  /**
   * Semantic marker variant (`default` / `workplace` / `employee` / ...).
   * Defaults to `default` for every record.
   */
  marker?: (record: R) => F0MapMarkerVariantProps
  /** A record's id. Defaults to `String(record.id)`, like the graph view. */
  getRecordId?: (record: R) => string
  /**
   * Controlled selection: the id of the selected record, or `null` for none.
   * Pass it whenever something outside the map can end the selection - closing
   * the panel you opened from `onSelect`, most of all. Left out, the map keeps
   * its own selection and nothing else can clear it, so the marker would stay
   * marked after its panel was dismissed.
   */
  selectedRecordId?: string | null
  /**
   * Fired when the selection changes: a marker click, a reveal, or `null` when
   * the selection is cleared. Open a side panel from here - and if it is your
   * own chrome rather than the map's `detail` panel, report the region it covers
   * through `viewportInset` so the marker stays visible.
   */
  onSelect?: (record: R | null) => void
  /**
   * Reveal a record: the camera flies to its marker and selects it. This is the
   * channel for an external search - pair it with the collection's
   * `searchSelectionNonce` so picking the same record twice flies again.
   */
  revealRecordId?: string | null
  /**
   * Region of the map covered by external chrome, typically a side panel. The
   * map's own `sidebar` / `detail` panels are folded in for you.
   */
  viewportInset?: F0MapViewportInset
  /** Initial camera. Defaults to framing every marker. */
  initialViewport?: F0MapViewport
  /** Show the navigation controls (locate / fit / zoom). Defaults to `true`. */
  showControls?: boolean
  /**
   * Fired with the panel's new open state when the top-left panel toggle is
   * pressed. The map view always shows that toggle and tracks its state itself;
   * the panel it will open does not exist yet, so nothing else changes when it
   * is pressed.
   */
  onSidebarToggle?: (expanded: boolean) => void
  /** Map projection. Defaults to `"mercator"`. */
  projection?: F0MapProjection
  /**
   * Markers to request in one page. Markers are DOM elements, so this is capped
   * at the map's recommended ceiling; a collection with more records than this
   * shows the first page of them.
   */
  markerLimit?: number
  /** Accessible label for the map region. */
  ariaLabel?: string
  /**
   * Rows of the map's side panel, the one the top-left toggle opens. The panel
   * is split into two sections the visualization renders itself - "Not on map"
   * first, for records `coordinates` could not place, then "On map" - and this
   * is called once per section with that section's records. They are the very
   * records the map is drawing (or failing to draw) markers for - the same
   * page, from the same load - so the list beside the map can never disagree
   * with it. The panel itself is the map's surface; this is what goes inside
   * each section.
   *
   * The visualization owns the panel's scrolling, so return the rows, not a
   * scroll container of your own.
   *
   * `select` drives the same selection a marker click does, so a row in this
   * panel and its pin on the map open the same detail. Selecting a record that
   * is not on the map opens its detail without moving the camera.
   */
  sidebar?: (records: R[], api: MapSidebarApi<R>) => ReactNode
  /**
   * Content of a second panel, sliding in beside the first rather than over it.
   * Called with the selected record - whichever was picked, from a marker or
   * from the list - and shown for as long as something is selected.
   */
  detail?: (record: R, api: MapSidebarApi<R>) => ReactNode
}

/** Selection handles handed to the panels, so their content can drive the map. */
export type MapSidebarApi<R extends RecordType> = {
  /** Select a record (or clear with `null`), exactly as a marker click would. */
  select: (record: R | null) => void
  /** Id of the selected record, or `null`. */
  selectedRecordId: string | null
}
