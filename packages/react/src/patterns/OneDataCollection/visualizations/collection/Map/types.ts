import { RecordType, SortingsDefinition } from "@/hooks/datasource"
import type {
  F0MapMarkerVariantProps,
  F0MapProjection,
  F0MapViewport,
  F0MapViewportInset,
} from "@/patterns/F0Map"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

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
   * A record's `[longitude, latitude]`, or `null` when it has none - those
   * records draw no marker. The map does no geocoding: resolve coordinates
   * server-side and read them here.
   */
  coordinates: (record: R) => [number, number] | null
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
   * the selection is cleared. Open a side panel from here - and report the
   * region it covers through `viewportInset` so the marker stays visible.
   */
  onSelect?: (record: R | null) => void
  /**
   * Reveal a record: the camera flies to its marker and selects it. This is the
   * channel for an external search - pair it with the collection's
   * `searchSelectionNonce` so picking the same record twice flies again.
   */
  revealRecordId?: string | null
  /** Region of the map covered by external chrome, typically a side panel. */
  viewportInset?: F0MapViewportInset
  /** Initial camera. Defaults to framing every marker. */
  initialViewport?: F0MapViewport
  /** Show the navigation controls (locate / fit / zoom). Defaults to `true`. */
  showControls?: boolean
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
}
