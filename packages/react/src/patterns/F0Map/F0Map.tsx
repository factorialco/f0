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

import { RECOMMENDED_MAX_MARKERS } from "./constants"
import { useCurrentLocation } from "./hooks/useCurrentLocation"
import { useIsDarkContext } from "./hooks/useIsDarkContext"
import { createMaplibreAdapter } from "./providers/maplibre"
import type { MapAdapter, MapEvent } from "./providers/types"
import { f0MapStyles, type F0MapStyle } from "./styles"
import type {
  F0MapArc,
  F0MapPoint,
  F0MapRoute,
  F0MapViewport,
  F0MapViewportInset,
} from "./types"
import {
  F0MapControls,
  type F0MapControlLabels,
} from "./components/F0MapControls"
import { F0MapList } from "./components/F0MapList"
import { F0MapMarkersLayer } from "./components/F0MapMarkersLayer"
import { F0MapVectorLayer } from "./components/F0MapVectorLayer"
import { CurrentLocationLayer } from "./components/internal/CurrentLocationLayer"
import { F0MapSkeleton } from "./F0MapSkeleton"

/** Compare an inset by value: a consumer may rebuild the object every render. */
const insetSignature = (inset: F0MapViewportInset | undefined) =>
  JSON.stringify([
    inset?.top ?? 0,
    inset?.right ?? 0,
    inset?.bottom ?? 0,
    inset?.left ?? 0,
  ])

/** Subscribe for a single firing. */
const once = (adapter: MapAdapter, event: MapEvent, handler: () => void) => {
  const off = adapter.on(event, () => {
    off()
    handler()
  })
  return off
}

/** City-level default view (Barcelona) used when no `initialViewport` is given. */
const DEFAULT_VIEWPORT: Required<F0MapViewport> = {
  center: [2.154, 41.39],
  zoom: 11,
}

/**
 * Map projection. `"globe"` renders the world as a 3D sphere (adaptive: it
 * eases into a flat mercator view as you zoom in).
 */
export type F0MapProjection = "mercator" | "globe"

/** Imperative handle exposed via `ref`. */
export interface F0MapHandle {
  /**
   * The rendering engine's own map object, as an escape hatch. Typed `unknown`
   * on purpose: what comes back depends on the provider, so narrowing it is a
   * deliberate decision at the call site instead of an implicit dependency on
   * whichever engine F0Map happens to use. `null` until the map has mounted.
   */
  getNativeMap: () => unknown
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
  /**
   * Polylines drawn through their given coordinates, exactly as provided (no
   * routing is computed - pass server-side / routing-engine output). Rendered
   * as GL lines beneath the markers.
   */
  routes?: F0MapRoute[]
  /**
   * Curved connections between two coordinates (the flight-path look). `F0Map`
   * computes the curve from each arc's `from` / `to`.
   */
  arcs?: F0MapArc[]
  /** Fired when a route line is clicked. Providing it enables hover + click. */
  onRouteClick?: (id: string) => void
  /** Fired when an arc line is clicked. Providing it enables hover + click. */
  onArcClick?: (id: string) => void
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
   * Region of the map covered by external chrome, typically a side panel opened
   * over it. Every camera move re-targets so the point lands centred in the free
   * area beside the panel, and changing the value re-centres the current view -
   * so opening, resizing or closing a panel keeps the selection visible. The
   * consumer supplies it; the map has no notion of the panel.
   */
  viewportInset?: F0MapViewportInset
  /**
   * Re-center the camera on a marker when it is clicked, at the current zoom,
   * so a selection never sits behind a panel opened over the map (it lands in
   * the free area left by `viewportInset`). Defaults to `false`, which leaves
   * the camera where it is. Zoom is untouched - use the `focusMarker` handle for
   * the "take me there" flight that also zooms in.
   */
  centerOnMarkerClick?: boolean
  /**
   * Frame all markers on load. Defaults to `true` when no `initialViewport` is
   * given, `false` otherwise (an explicit viewport wins).
   */
  fitToMarkers?: boolean
  /** Initial camera. Defaults to a city-level view. Read once on mount. */
  initialViewport?: F0MapViewport
  /** Light/dark style pair. Defaults to the f0-themed OpenFreeMap styles. */
  mapStyle?: F0MapStyle
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
   * Enable the current-location feature. Defaults to `false`, in which case the
   * map never touches geolocation. When `true`, the dot auto-shows only if the
   * browser permission is *already* granted (never prompting on load); the
   * "locate me" control is the only thing that requests permission on demand.
   */
  showCurrentLocation?: boolean
  /**
   * Edge-to-edge presentation. `false` (default) frames the map as a card -
   * large rounded corners, a secondary border, and controls inset 16px. `true`
   * drops the frame so the map bleeds to its container's edges, with controls
   * inset 24px.
   */
  fullScreen?: boolean
  /**
   * Map projection. `"mercator"` (default) is the flat web map; `"globe"`
   * renders the world as a 3D sphere at low zoom and eases into mercator as you
   * zoom in - best for a world-scale view. Changing it re-projects live.
   */
  projection?: F0MapProjection
  /** Show the skeleton instead of the map. */
  loading?: boolean
  /** Accessible label for the map region. */
  ariaLabel?: string
  /** @private */
  className?: string
}

/** Every coordinate the camera should frame: marker points plus line vertices. */
const framedCoords = (
  points: F0MapPoint[],
  routes: F0MapRoute[],
  arcs: F0MapArc[]
): [number, number][] => [
  ...points.map((p) => p.coordinates),
  ...routes.flatMap((r) => r.coordinates),
  ...arcs.flatMap((a) => [a.from, a.to]),
]

const fitToPoints = (
  adapter: MapAdapter,
  points: F0MapPoint[],
  animate: boolean,
  routes: F0MapRoute[] = [],
  arcs: F0MapArc[] = [],
  inset?: F0MapViewportInset,
  gutter = 64
) => {
  const coords = framedCoords(points, routes, arcs)
  if (coords.length === 0) return
  const options = { inset, gutter, animate }
  if (coords.length === 1) {
    const target = { center: coords[0], zoom: 14 }
    if (animate) adapter.easeTo(target, options)
    else adapter.jumpTo(target, options)
    return
  }
  adapter.fitCoordinates(coords, { ...options, maxZoom: 15 })
}

/**
 * The camera's last commanded state: framing every marker, flying to a point at
 * a known zoom, or nothing in particular (a click, which only re-centers).
 */
type CameraIntent = { kind: "fit" } | { kind: "flight"; zoom: number } | null

/**
 * Center on a point at the current zoom. Separate from `focusPoint` because a
 * click means "show me this in context", while a reveal from an external search
 * means "take me there".
 */
const centerPoint = (
  adapter: MapAdapter,
  point: F0MapPoint,
  animate: boolean,
  inset?: F0MapViewportInset
) => {
  adapter.centerInFreeRegion(point.coordinates, { inset, gutter: 0, animate })
}

/**
 * Center on a single point, zooming in when the camera isn't already close.
 * Returns the zoom it commanded, so a camera move that lands mid-flight can
 * carry on to it instead of freezing wherever the animation had reached.
 */
const focusPoint = (
  adapter: MapAdapter,
  point: F0MapPoint,
  animate: boolean,
  inset?: F0MapViewportInset
) => {
  const zoom = Math.max(adapter.getZoom(), 15)
  adapter.easeTo(
    { center: point.coordinates, zoom },
    { inset, gutter: 0, animate }
  )
  return zoom
}

/** Fly to a point and report the intent, for a later padding change to redo. */
const flightIntent = (
  adapter: MapAdapter,
  point: F0MapPoint,
  animate: boolean,
  inset?: F0MapViewportInset
): CameraIntent => ({
  kind: "flight",
  zoom: focusPoint(adapter, point, animate, inset),
})

const F0MapBase = forwardRef<F0MapHandle, F0MapProps>(function F0Map(
  {
    markers = [],
    routes = [],
    arcs = [],
    onRouteClick,
    onArcClick,
    selectedMarkerId,
    defaultSelectedMarkerId = null,
    onMarkerSelect,
    highlightedId = null,
    viewportInset,
    centerOnMarkerClick = false,
    fitToMarkers,
    initialViewport,
    mapStyle = f0MapStyles,
    interactive = true,
    gestureHandling = "cooperative",
    minZoom,
    maxZoom = 18,
    showControls = true,
    controlLabels,
    showCurrentLocation = false,
    fullScreen = false,
    projection = "mercator",
    loading = false,
    ariaLabel,
    dataTestId,
    className,
  },
  ref
) {
  const i18n = useI18n()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const adapterRef = useRef<MapAdapter | null>(null)
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
  // Theme always follows the app: the nearest `.dark` ancestor, observed live so
  // a theme toggle restyles the map without a reload (see the style-swap effect).
  const isDark = isDarkContext
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
  const insetRef = useRef(viewportInset)
  insetRef.current = viewportInset
  const selectedIdRef = useRef(selectedId)
  selectedIdRef.current = selectedId
  // What the camera was last told to do. A padding change has to *redo* that
  // with the new free area: `easeTo` without a `zoom` targets whatever the zoom
  // happens to be when it runs, so a padding change landing mid-animation would
  // freeze the camera there and abandon the flight (or the fit) halfway.
  const cameraIntentRef = useRef<CameraIntent>(null)
  const routesRef = useRef(routes)
  routesRef.current = routes
  const arcsRef = useRef(arcs)
  arcsRef.current = arcs
  const projectionRef = useRef(projection)
  projectionRef.current = projection
  const selectRef = useRef(selectMarker)
  selectRef.current = selectMarker

  // Only the marker-click path centers: the imperative handle and the marker
  // list already fly to their target, and a background click deselects.
  const handleMarkerClick = useCallback(
    (id: string | null) => {
      if (centerOnMarkerClick && id) {
        const adapter = adapterRef.current
        const point = markersRef.current.find(
          (candidate) => candidate.id === id
        )
        if (adapter && point) {
          // A click has no zoom intent: nothing to redo but the centering.
          cameraIntentRef.current = null
          centerPoint(adapter, point, !reduceMotion, insetRef.current)
        }
      }
      selectRef.current(id)
    },
    [centerOnMarkerClick, reduceMotion]
  )
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

  // Current location: gated entirely by `showCurrentLocation`. When on, the dot
  // auto-shows only if permission is already granted; the locate control is the
  // only thing that prompts. When off, no geolocation happens at all.
  const { coords: currentLocation, request: requestLocation } =
    useCurrentLocation(showCurrentLocation)

  // Control handlers (wired to the adapter via refs).
  const handleZoomIn = useCallback(() => adapterRef.current?.zoomIn(), [])
  const handleZoomOut = useCallback(() => adapterRef.current?.zoomOut(), [])
  const handleFit = useCallback(() => {
    cameraIntentRef.current = { kind: "fit" }
    if (adapterRef.current)
      fitToPoints(
        adapterRef.current,
        markersRef.current,
        !reduceMotion,
        routesRef.current,
        arcsRef.current,
        insetRef.current
      )
  }, [reduceMotion])
  const handleLocate = useCallback(() => {
    requestLocation((c) =>
      adapterRef.current?.flyTo(
        { center: c, zoom: Math.max(adapterRef.current.getZoom(), 13) },
        { inset: insetRef.current, gutter: 0, animate: !reduceMotion }
      )
    )
  }, [requestLocation, reduceMotion])

  // Activating a list item selects the marker and flies to it (how keyboard /
  // screen-reader users navigate; the map has no focusable pins).
  const handleListSelect = useCallback(
    (id: string) => {
      const adapter = adapterRef.current
      const point = markersRef.current.find((p) => p.id === id)
      if (adapter && point)
        cameraIntentRef.current = flightIntent(
          adapter,
          point,
          !reduceMotion,
          insetRef.current
        )
      selectMarker(id)
    },
    [reduceMotion, selectMarker]
  )

  useImperativeHandle(
    ref,
    () => ({
      getNativeMap: () => adapterRef.current?.native() ?? null,
      focusMarker: (id) => {
        const adapter = adapterRef.current
        const point = markersRef.current.find((p) => p.id === id)
        if (!adapter || !point) return
        cameraIntentRef.current = flightIntent(
          adapter,
          point,
          !reduceMotion,
          insetRef.current
        )
        selectRef.current(id)
      },
      fitToMarkers: () => {
        cameraIntentRef.current = { kind: "fit" }
        if (adapterRef.current)
          fitToPoints(
            adapterRef.current,
            markersRef.current,
            !reduceMotion,
            routesRef.current,
            arcsRef.current,
            insetRef.current
          )
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
    let adapter: MapAdapter
    try {
      adapter = createMaplibreAdapter({
        container,
        style: styleRef.current,
        center: viewport.center,
        zoom: viewport.zoom ?? DEFAULT_VIEWPORT.zoom,
        minZoom,
        maxZoom,
        interactive,
        cooperativeGestures: gestureHandling === "cooperative",
      })
    } catch {
      // The engine could not start (no WebGL): fall back to the list view.
      setWebglFailed(true)
      return
    }
    adapterRef.current = adapter
    // The marker, line and current-location layers still take the engine's own
    // map; they move behind the port next.
    setMapInstance(adapter.native() as maplibregl.Map)
    // A previous run may have failed (and set the list fallback) with props
    // that made creation throw; this run succeeded, so clear it.
    setWebglFailed(false)

    // Errors before the map is ready mean the style/tiles failed to come up -
    // surface the retry banner. Transient per-tile errors after are ignored
    // (they don't break the map).
    let ready = false
    const offReady = once(adapter, "ready", () => {
      ready = true
      setTileError(false)
      adapter.resize()
      if (shouldFit)
        fitToPoints(
          adapter,
          markersRef.current,
          false,
          routesRef.current,
          arcsRef.current,
          insetRef.current
        )
      adapter.setGlobeProjection(projectionRef.current === "globe")
    })
    const offError = adapter.on("error", () => {
      if (!ready) setTileError(true)
    })
    // Background click clears the selection (marker clicks are DOM events on
    // the marker element and never reach the canvas).
    const offClick = adapter.on("click", () => selectRef.current(null))

    return () => {
      offReady()
      offError()
      offClick()
      adapterRef.current = null
      setMapInstance(null)
      adapter.destroy()
    }
  }, [loading, interactive, gestureHandling, minZoom, maxZoom, shouldFit])

  // Theme swap: a full setStyle, kept separate from the creation effect. A
  // setStyle can reset the projection to the new style's default, so re-apply
  // it once the swapped style has loaded. `style.load` (not `styledata`, which
  // fires as soon as the new style STARTS loading) is the done signal -
  // setProjection hard-throws on a style that is still loading.
  useEffect(() => {
    const adapter = adapterRef.current
    if (!adapter || appliedStyleRef.current === style) return
    appliedStyleRef.current = style
    adapter.applyStyle(style)
    once(adapter, "styled", () =>
      adapter.setGlobeProjection(projectionRef.current === "globe")
    )
  }, [style])

  // Re-project live when the `projection` prop changes. The initial
  // application is left to the creation effect's ready handler; this only
  // matters for post-mount changes.
  useEffect(() => {
    adapterRef.current?.setGlobeProjection(projection === "globe")
  }, [projection])

  // Reveal: fly to a newly highlighted marker (external search selecting a
  // result). Only fires when the id changes to a real marker.
  useEffect(() => {
    if (!highlightedId) return
    const adapter = adapterRef.current
    const point = markersRef.current.find((p) => p.id === highlightedId)
    if (adapter && point)
      cameraIntentRef.current = flightIntent(
        adapter,
        point,
        !reduceMotion,
        insetRef.current
      )
  }, [highlightedId, reduceMotion])

  // Re-centre when the panel covering the map opens, resizes or closes. Camera
  // padding is part of MapLibre's transform, so easing it with no `center`
  // slides the current view into the free area and holds it there. Skipped on
  // mount: the creation effect's fit already frames with the inset applied.
  // Compared by value, not identity: a consumer that rebuilds the inset object
  // every render must not re-ease the camera on each one.
  const appliedInsetRef = useRef<string | null>(null)
  useEffect(() => {
    const signature = insetSignature(viewportInset)
    if (signature === appliedInsetRef.current) return

    const isFirstRun = appliedInsetRef.current === null
    appliedInsetRef.current = signature
    if (isFirstRun) return

    const adapter = adapterRef.current
    if (!adapter) return

    // With a marker selected, re-center on it: the point of the inset is to keep
    // *that* marker clear of the panel, and the current view may have been
    // panned since. Otherwise just slide the view into the free area.
    const selected = markersRef.current.find(
      (point) => point.id === selectedIdRef.current
    )
    const intent = cameraIntentRef.current
    if (selected) {
      adapter.easeTo(
        {
          center: selected.coordinates,
          // Carry on to a flight's target; otherwise leave the zoom alone, so
          // opening a panel over a click-selection never zooms.
          ...(intent?.kind === "flight" ? { zoom: intent.zoom } : {}),
        },
        { inset: viewportInset, gutter: 0, animate: !reduceMotion }
      )
      return
    }

    // Nothing selected any more. If the camera was last framing every marker -
    // the zoom-out that follows dismissing a panel - frame them again with the
    // freed-up space, rather than freezing that fit part-way through.
    if (intent?.kind === "fit") {
      fitToPoints(
        adapter,
        markersRef.current,
        !reduceMotion,
        routesRef.current,
        arcsRef.current,
        viewportInset
      )
      return
    }

    adapter.setFreeRegion({
      inset: viewportInset,
      gutter: 0,
      animate: !reduceMotion,
    })
  }, [viewportInset, reduceMotion])

  const hasLines = routes.length > 0 || arcs.length > 0

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
            // Re-assert the detected theme on the container so every DOM
            // overlay (controls, markers, list, banners) swaps its tokens along
            // with the tiles and the two can never disagree. Harmless when a
            // `.dark` ancestor already set it.
            isDark && "dark",
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

          {/* Bottom of the overlay stack: a GL circle under the lines and under
              every DOM marker. The sr-only span keeps the announcement the
              canvas can't provide. */}
          {!webglFailed && mapInstance && currentLocation && (
            <>
              <CurrentLocationLayer
                map={mapInstance}
                coords={currentLocation}
              />
              <span className="sr-only">{i18n.map.currentLocation}</span>
            </>
          )}
          {!webglFailed && mapInstance && hasLines && (
            <F0MapVectorLayer
              map={mapInstance}
              routes={routes}
              arcs={arcs}
              isDark={isDark}
              onRouteClick={onRouteClick}
              onArcClick={onArcClick}
            />
          )}
          {!webglFailed && mapInstance && markers.length > 0 && (
            <F0MapMarkersLayer
              map={mapInstance}
              points={markers}
              selectedId={selectedId}
              highlightedId={highlightedId}
              onSelect={handleMarkerClick}
            />
          )}
          {!webglFailed && mapInstance && showControls && interactive && (
            <div
              className={cn(
                "absolute z-10",
                fullScreen ? "bottom-6 left-6" : "bottom-2 left-2"
              )}
            >
              <F0MapControls
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onFit={markers.length > 0 || hasLines ? handleFit : undefined}
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
                  const adapter = adapterRef.current
                  if (!adapter) return
                  setTileError(false)
                  adapter.applyStyle(styleRef.current)
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
