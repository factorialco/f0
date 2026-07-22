import "maplibre-gl/dist/maplibre-gl.css"
import "./F0Map.css"

import maplibregl from "maplibre-gl"
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import { useReducedMotion } from "@/lib/a11y"
import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { FLY_OPTS, RECOMMENDED_MAX_MARKERS } from "./constants"
import { useCurrentLocation } from "./hooks/useCurrentLocation"
import { useIsDarkContext } from "./hooks/useIsDarkContext"
import { f0MapStyles, type F0MapStylePair } from "./styles"
import type { F0MapPoint, F0MapViewport } from "./types"
import {
  F0MapControls,
  type F0MapControlLabels,
} from "./components/F0MapControls"
import { F0MapList } from "./components/F0MapList"
import { F0MapMarkersLayer } from "./components/F0MapMarkersLayer"
import { F0MapSkeleton } from "./F0MapSkeleton"

/** City-level default view (Barcelona) used when no `initialViewport` is given. */
const DEFAULT_VIEWPORT: Required<F0MapViewport> = {
  center: [2.154, 41.39],
  zoom: 11,
}

/** Imperative handle exposed via `ref`. */
export interface F0MapHandle {
  /** The raw MapLibre instance (escape hatch). `null` until the map has mounted. */
  getMap: () => maplibregl.Map | null
  /** Center on a marker (and select it). Always animates unless reduced-motion. */
  focusMarker: (id: string) => void
  /** Frame all markers in view. */
  fitToMarkers: () => void
  /** Clear the current selection. */
  clearSelection: () => void
}

export interface F0MapProps extends WithDataTestIdProps {
  /**
   * Points to render as markers. Pass a referentially stable array (memoize
   * it): a new identity per render re-binds the clustering and label-collision
   * listeners. Markers are DOM elements - keep counts at workplace scale
   * (~200); beyond that pan/zoom degrades and a warning is logged.
   */
  markers?: F0MapPoint[]
  /** Controlled selected marker id. */
  selectedMarkerId?: string | null
  /** Uncontrolled initial selection. */
  defaultSelectedMarkerId?: string | null
  /** Fired when the selection changes (marker click or background click). */
  onMarkerSelect?: (id: string | null) => void
  /**
   * Emphasise a marker without selecting it - a separate channel for an
   * external search/reveal. The highlighted marker floats above the rest, keeps
   * its label, and the map flies to it when the id changes. Selection (the
   * grown pin) stays driven by `selectedMarkerId`.
   */
  highlightedId?: string | null
  /**
   * Group nearby markers into a clamped pile of their marker heads that expands
   * on click / zoom-in. `true` uses the default radius; pass `{ radius }` (px)
   * to tune density.
   */
  cluster?: boolean | { radius?: number }
  /**
   * Frame all markers on load. Defaults to `true` when no `initialViewport` is
   * given, `false` otherwise (an explicit viewport wins).
   */
  fitToMarkers?: boolean
  /** Initial camera. Defaults to a city-level view. Read once on mount. */
  initialViewport?: F0MapViewport
  /** Light/dark style pair. Defaults to the f0-themed OpenFreeMap styles. */
  mapStyle?: F0MapStylePair
  /** Force a theme; `"auto"` (default) follows the nearest `.dark` ancestor. */
  theme?: "auto" | "light" | "dark"
  /**
   * Allow pan/zoom. Defaults to `true`. Read on mount: changing it recreates
   * the map (and resets the camera), so treat it as static.
   */
  interactive?: boolean
  /**
   * Scroll/touch behaviour. `"cooperative"` (default) lets a plain wheel scroll
   * the page and requires Ctrl/⌘ + wheel (or two fingers) to zoom, so an
   * embedded map never traps the page scroll. `"greedy"` zooms on any wheel.
   * Read on mount, like `interactive`.
   */
  gestureHandling?: "cooperative" | "greedy"
  /**
   * Farthest the user can zoom out. Fitted to the viewport when omitted.
   * Read on mount, like `interactive`.
   */
  minZoom?: number
  /** Closest the user can zoom in. Defaults to `18`. Read on mount. */
  maxZoom?: number
  /**
   * Show the navigation controls (locate, fit, zoom). Defaults to `true`; only
   * rendered when the map is `interactive`.
   */
  showControls?: boolean
  /** Override the controls' labels (tooltips / accessible names). */
  controlLabels?: F0MapControlLabels
  /**
   * Proactively prompt for location permission on load so the current-location
   * dot appears without the user acting. Defaults to `false`. Independently of
   * this, if the user has *already* granted location (here or on another f0
   * map - the opt-in persists), the dot always shows silently. The "locate me"
   * control requests permission on demand.
   */
  showCurrentLocation?: boolean
  /**
   * Edge-to-edge presentation. `false` (default) frames the map as a card -
   * large rounded corners, a secondary border, and controls inset 16px. `true`
   * drops the frame so the map bleeds to its container's edges, with controls
   * inset 24px.
   */
  fullScreen?: boolean
  /** Show the skeleton instead of the map. */
  loading?: boolean
  /** Accessible label for the map region. */
  ariaLabel?: string
  /** @private */
  className?: string
}

const fitToPoints = (
  map: maplibregl.Map,
  points: F0MapPoint[],
  animate: boolean
) => {
  if (points.length === 0) return
  if (points.length === 1) {
    const opts = { center: points[0].coordinates, zoom: 14 }
    if (animate) map.easeTo(opts)
    else map.jumpTo(opts)
    return
  }
  const bounds = new maplibregl.LngLatBounds()
  points.forEach((p) => bounds.extend(p.coordinates))
  map.fitBounds(bounds, { padding: 64, maxZoom: 15, animate })
}

/** Center on a single point, zooming in when the camera isn't already close. */
const focusPoint = (
  map: maplibregl.Map,
  point: F0MapPoint,
  animate: boolean
) => {
  map.easeTo({
    center: point.coordinates,
    zoom: Math.max(map.getZoom(), 15),
    animate,
  })
}

const F0MapBase = forwardRef<F0MapHandle, F0MapProps>(function F0Map(
  {
    markers = [],
    selectedMarkerId,
    defaultSelectedMarkerId = null,
    onMarkerSelect,
    highlightedId = null,
    cluster = false,
    fitToMarkers,
    initialViewport,
    mapStyle = f0MapStyles,
    theme = "auto",
    interactive = true,
    gestureHandling = "cooperative",
    minZoom,
    maxZoom = 18,
    showControls = true,
    controlLabels,
    showCurrentLocation = false,
    fullScreen = false,
    loading = false,
    ariaLabel,
    dataTestId,
    className,
  },
  ref
) {
  const i18n = useI18n()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const [mapInstance, setMapInstance] = useState<maplibregl.Map | null>(null)
  // WebGL missing (map can't be created) -> show the list as the fallback.
  // Tile/style load failure -> a retry banner over the map.
  const [webglFailed, setWebglFailed] = useState(false)
  const [tileError, setTileError] = useState(false)
  const listId = useId()
  const reduceMotion = useReducedMotion()

  // Dark detection needs a callback ref: with `loading` the container doesn't
  // exist on mount, and a plain RefObject effect would never re-run.
  const { containerRef: darkContextRef, isDark: isDarkContext } =
    useIsDarkContext()
  const setContainer = useCallback(
    (element: HTMLDivElement | null) => {
      containerRef.current = element
      darkContextRef(element)
    },
    [darkContextRef]
  )
  const isDark = theme === "auto" ? isDarkContext : theme === "dark"
  const style = isDark ? mapStyle.dark : mapStyle.light

  // Selection (controlled when the prop is set - `null` means "none selected",
  // not "uncontrolled" - internal state only mutates when uncontrolled).
  const [internalSelected, setInternalSelected] = useState<string | null>(
    defaultSelectedMarkerId
  )
  const selectedId =
    selectedMarkerId !== undefined ? selectedMarkerId : internalSelected
  const selectMarker = useCallback(
    (id: string | null) => {
      if (selectedMarkerId === undefined) setInternalSelected(id)
      onMarkerSelect?.(id)
    },
    [selectedMarkerId, onMarkerSelect]
  )

  // Latest values read by map event handlers without re-binding.
  const markersRef = useRef(markers)
  markersRef.current = markers
  const selectRef = useRef(selectMarker)
  selectRef.current = selectMarker
  const shouldFit = fitToMarkers ?? initialViewport === undefined

  // DOM markers degrade beyond workplace scale; warn once so oversized
  // datasets are an explicit decision, not a silent slowdown.
  const warnedMarkerCount = useRef(false)
  useEffect(() => {
    if (warnedMarkerCount.current || markers.length <= RECOMMENDED_MAX_MARKERS)
      return
    warnedMarkerCount.current = true
    console.warn(
      `F0Map: ${markers.length} markers exceeds the recommended maximum of ` +
        `${RECOMMENDED_MAX_MARKERS}. Markers are DOM elements - pan/zoom will ` +
        `degrade. Aggregate or filter the data, or wait for a GL clustering path.`
    )
  }, [markers.length])

  // Current location: auto-shown when `showCurrentLocation` and the user has
  // already opted in; the locate control requests permission on demand.
  const { coords: currentLocation, request: requestLocation } =
    useCurrentLocation(showCurrentLocation)

  // Control handlers (wired to the MapLibre instance via refs).
  const handleZoomIn = useCallback(() => mapRef.current?.zoomIn(), [])
  const handleZoomOut = useCallback(() => mapRef.current?.zoomOut(), [])
  const handleFit = useCallback(() => {
    if (mapRef.current)
      fitToPoints(mapRef.current, markersRef.current, !reduceMotion)
  }, [reduceMotion])
  const handleLocate = useCallback(() => {
    requestLocation((c) =>
      mapRef.current?.flyTo({
        ...FLY_OPTS,
        center: c,
        zoom: Math.max(mapRef.current.getZoom(), 13),
        animate: !reduceMotion,
      })
    )
  }, [requestLocation, reduceMotion])

  // Activating a list item selects the marker and flies to it (how keyboard /
  // screen-reader users navigate; the map has no focusable pins).
  const handleListSelect = useCallback(
    (id: string) => {
      const map = mapRef.current
      const point = markersRef.current.find((p) => p.id === id)
      if (map && point) focusPoint(map, point, !reduceMotion)
      selectMarker(id)
    },
    [reduceMotion, selectMarker]
  )

  useImperativeHandle(
    ref,
    () => ({
      getMap: () => mapRef.current,
      focusMarker: (id) => {
        const map = mapRef.current
        const point = markersRef.current.find((p) => p.id === id)
        if (!map || !point) return
        focusPoint(map, point, !reduceMotion)
        selectRef.current(id)
      },
      fitToMarkers: () => {
        if (mapRef.current)
          fitToPoints(mapRef.current, markersRef.current, !reduceMotion)
      },
      clearSelection: () => selectRef.current(null),
    }),
    [reduceMotion]
  )

  // The creation effect must not depend on the theme (it would tear the map
  // down on toggle), so it reads the current style and viewport through refs.
  const styleRef = useRef(style)
  styleRef.current = style
  const appliedStyleRef = useRef<typeof style | null>(null)
  const viewportRef = useRef(initialViewport ?? DEFAULT_VIEWPORT)

  useEffect(() => {
    if (loading) return
    const container = containerRef.current
    if (!container) return

    appliedStyleRef.current = styleRef.current
    const viewport = viewportRef.current
    let map: maplibregl.Map
    try {
      map = new maplibregl.Map({
        container,
        style: styleRef.current,
        center: viewport.center,
        zoom: viewport.zoom ?? DEFAULT_VIEWPORT.zoom,
        minZoom,
        maxZoom,
        interactive,
        // Plain wheel scrolls the page; Ctrl/⌘ + wheel or two fingers zoom. The
        // hint overlay MapLibre adds is hidden in F0Map.css.
        cooperativeGestures: gestureHandling === "cooperative",
        renderWorldCopies: false,
        attributionControl: { compact: true },
      })
    } catch {
      // No WebGL (or context creation failed): fall back to the list view.
      setWebglFailed(true)
      return
    }
    mapRef.current = map
    setMapInstance(map)
    // A previous run may have failed (and set the list fallback) with props
    // that made creation throw; this run succeeded, so clear it.
    setWebglFailed(false)

    // Unify mouse-wheel and trackpad-pinch zoom at the midpoint of their prior
    // rates (wheel 1/90, pinch 1/40) so both gestures feel the same - neither
    // exaggerated. Default wheel (1/450) feels sluggish; this stays snappier.
    const zoomRate = (1 / 90 + 1 / 40) / 2 // ≈ 1/55
    map.scrollZoom.setWheelZoomRate(zoomRate)
    map.scrollZoom.setZoomRate(zoomRate)

    // Errors before the first `load` mean the style/tiles failed to come up -
    // surface the retry banner. Transient per-tile errors after load are
    // ignored (they don't break the map).
    let loaded = false
    map.once("load", () => {
      loaded = true
      setTileError(false)
      map.resize()
      if (shouldFit) fitToPoints(map, markersRef.current, false)
    })
    const handleError = () => {
      if (!loaded) setTileError(true)
    }
    map.on("error", handleError)
    // Background click clears the selection (marker clicks are DOM events on
    // the marker element and never reach the canvas).
    const handleBackgroundClick = () => selectRef.current(null)
    map.on("click", handleBackgroundClick)

    return () => {
      mapRef.current = null
      setMapInstance(null)
      map.remove()
    }
  }, [loading, interactive, gestureHandling, minZoom, maxZoom, shouldFit])

  // Theme swap: a full setStyle, kept separate from the creation effect.
  useEffect(() => {
    const map = mapRef.current
    if (!map || appliedStyleRef.current === style) return
    appliedStyleRef.current = style
    map.setStyle(style)
  }, [style])

  // Reveal: fly to a newly highlighted marker (external search selecting a
  // result). Only fires when the id changes to a real marker.
  useEffect(() => {
    if (!highlightedId) return
    const map = mapRef.current
    const point = markersRef.current.find((p) => p.id === highlightedId)
    if (map && point) focusPoint(map, point, !reduceMotion)
  }, [highlightedId, reduceMotion])

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      {loading ? (
        <F0MapSkeleton className={className} />
      ) : (
        <div
          ref={setContainer}
          role="region"
          aria-label={ariaLabel ?? i18n.map.region}
          className={cn(
            "f0-map relative h-full w-full overflow-hidden",
            !fullScreen &&
              "rounded-2xl border border-solid border-f1-border-secondary",
            className
          )}
        >
          {/* Keyboard: jump past the opaque canvas straight to the operable
              list. Shown only while focused. */}
          <a
            href={`#${listId}`}
            className="sr-only rounded-md focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-30 focus:bg-f1-background focus:px-3 focus:py-2 focus:text-sm focus:text-f1-foreground focus:shadow-md focus:outline-none focus:ring-1 focus:ring-f1-special-ring"
          >
            {i18n.map.skipToList}
          </a>
          {/* Announces the marker count to screen readers when it changes. */}
          <div role="status" aria-live="polite" className="sr-only">
            {`${markers.length} ${
              markers.length === 1 ? i18n.map.location : i18n.map.locations
            }`}
          </div>

          {!webglFailed &&
            mapInstance &&
            (markers.length > 0 || currentLocation) && (
              <F0MapMarkersLayer
                map={mapInstance}
                points={markers}
                selectedId={selectedId}
                highlightedId={highlightedId}
                onSelect={selectMarker}
                cluster={cluster}
                currentLocation={currentLocation}
              />
            )}
          {!webglFailed && mapInstance && showControls && interactive && (
            <div
              className={cn(
                "absolute z-10",
                fullScreen ? "bottom-6 left-6" : "bottom-4 left-4"
              )}
            >
              <F0MapControls
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onFit={markers.length > 0 ? handleFit : undefined}
                onLocate={handleLocate}
                labels={controlLabels}
              />
            </div>
          )}

          {tileError && !webglFailed && (
            <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 border-b border-solid border-f1-border-secondary bg-f1-background px-4 py-2 text-sm text-f1-foreground">
              <span>{i18n.map.loadError}</span>
              <button
                type="button"
                onClick={() => {
                  const map = mapRef.current
                  if (!map) return
                  setTileError(false)
                  map.setStyle(styleRef.current)
                }}
                className="font-medium underline"
              >
                {i18n.map.retry}
              </button>
            </div>
          )}

          {/* Screen-reader text alternative (always in the DOM), and the visible
              fallback when the map can't render. */}
          <F0MapList
            id={listId}
            label={i18n.map.listLabel}
            points={markers}
            selectedId={selectedId}
            onSelect={handleListSelect}
            visible={webglFailed}
          />
        </div>
      )}
    </DataTestIdWrapper>
  )
})

F0MapBase.displayName = "F0Map"

export const F0Map = F0MapBase
