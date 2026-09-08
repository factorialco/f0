import "maplibre-gl/dist/maplibre-gl.css"
import "./F0Map.css"
import maplibregl from "maplibre-gl"
import {
  forwardRef,
  type ReactNode,
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
import {
  F0MapControls,
  type F0MapControlLabels,
} from "./components/F0MapControls"
import { F0MapList } from "./components/F0MapList"
import { F0MapMarkersLayer } from "./components/F0MapMarkersLayer"
import {
  F0MapSidebar,
  mapPanelOffset,
  mapPanelShift,
} from "./components/F0MapSidebar"
import { F0MapSidebarToggle } from "./components/F0MapSidebarToggle"
import { F0MapVectorLayer } from "./components/F0MapVectorLayer"
import { CurrentLocationLayer } from "./components/internal/CurrentLocationLayer"
import { MapControlCard } from "./components/internal/MapControlCard"
import {
  MAP_CONTROL_INSET,
  MAP_PANEL,
  MAP_PANEL_TIMING,
} from "./components/internal/mapSurface"
import { FLY_OPTS, RECOMMENDED_MAX_MARKERS } from "./constants"
import { F0MapSkeleton } from "./F0MapSkeleton"
import { useCurrentLocation } from "./hooks/useCurrentLocation"
import { useIsDarkContext } from "./hooks/useIsDarkContext"
import { f0MapStyles, type F0MapStylePair } from "./styles"
import type {
  F0MapArc,
  F0MapPoint,
  F0MapRoute,
  F0MapViewport,
  F0MapViewportInset,
} from "./types"

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
   * Region of the map covered by *external* chrome - a side panel the consumer
   * opens over it. Every camera move re-targets so the point lands centred in
   * the free area beside it, and changing the value re-centres the current view,
   * so opening, resizing or closing that chrome keeps the selection visible.
   *
   * The map's own panels (`sidebar`, `detail`) need no reporting: it knows their
   * geometry and folds them in itself. Both are measured from the same edges, so
   * on each edge the wider of the two claims wins rather than the two stacking.
   */
  viewportInset?: F0MapViewportInset
  /**
   * Re-center the camera on a marker when it is clicked, at the current zoom,
   * so a selection never sits behind a panel opened over the map (it lands in
   * the free area left by the open panels and `viewportInset`). Defaults to
   * `false`, which leaves the camera where it is. Zoom is untouched - use the
   * `focusMarker` handle for the "take me there" flight that also zooms in.
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
  mapStyle?: F0MapStylePair
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
   * large rounded corners and a secondary border. `true` drops the frame so the
   * map bleeds to its container's edges. The overlay controls sit 8px off the
   * edges either way.
   */
  fullScreen?: boolean
  /**
   * Renders the panel toggle in the top-left corner, on the same control
   * treatment as the navigation controls. Presence-driven, like `onFit`: pass a
   * handler to show the button. `F0Map` draws no panel of its own - the
   * consumer owns whatever the button opens.
   */
  onSidebarToggle?: () => void
  /**
   * Whether the panel the toggle controls is open. Drives which way the icon's
   * arrow points. Defaults to `false`.
   */
  sidebarExpanded?: boolean
  /**
   * Content placed beside the panel toggle, on the same control card, for a
   * control that belongs with it - a count that opens the panel, say. Follows
   * the toggle: shown while the panel is closed, hidden under it once open.
   * Opaque to the map; whatever is passed is the consumer's.
   */
  sidebarToggleAddon?: ReactNode
  /**
   * Content of the side panel the toggle opens. The panel is the map's own
   * surface, sized and animated here; this is what goes inside it.
   */
  sidebar?: ReactNode
  /**
   * Content of a second panel, on the same surface, sliding in beside the first
   * rather than over it - a detail view for whatever was picked in the list or
   * on the map. Shown while `detailOpen` is true.
   */
  detail?: ReactNode
  /**
   * Whether the detail panel is open. Defaults to `false`. Pressing Escape
   * inside the map ends the selection, so a detail panel driven by it closes
   * on Escape without the consumer wiring anything.
   */
  detailOpen?: boolean
  /**
   * Clear the selection when the map background is clicked. Defaults to `true`.
   * Set `false` when the selection opens something that must be dismissed
   * deliberately - a detail panel shouldn't vanish on a stray click on the map.
   */
  clearSelectionOnBackgroundClick?: boolean
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

/**
 * MapLibre camera padding: the inset a side panel covers, plus a uniform base
 * so a fit never puts markers flush against the edges. Passed on every camera
 * move, which is also what keeps a still camera shifted while a panel is open.
 */
const cameraPadding = (
  inset: F0MapViewportInset | undefined,
  base: number
): Required<F0MapViewportInset> => ({
  top: base + (inset?.top ?? 0),
  right: base + (inset?.right ?? 0),
  bottom: base + (inset?.bottom ?? 0),
  left: base + (inset?.left ?? 0),
})

/**
 * The camera's total occlusion: the consumer's external chrome merged with the
 * map's own open panels. Both are measured from the same edges, so they overlap
 * rather than stack - on each edge the wider claim wins. Merged here rather
 * than left to the consumer: the map owns the panels' geometry, so a consumer
 * that had to report it would be duplicating numbers it can't see.
 */
const mergeInsets = (
  external: F0MapViewportInset | undefined,
  own: F0MapViewportInset
): F0MapViewportInset => ({
  top: Math.max(external?.top ?? 0, own.top ?? 0),
  right: Math.max(external?.right ?? 0, own.right ?? 0),
  bottom: Math.max(external?.bottom ?? 0, own.bottom ?? 0),
  left: Math.max(external?.left ?? 0, own.left ?? 0),
})

const fitToPoints = (
  map: maplibregl.Map,
  points: F0MapPoint[],
  animate: boolean,
  routes: F0MapRoute[] = [],
  arcs: F0MapArc[] = [],
  inset?: F0MapViewportInset,
  base = 64
) => {
  const coords = framedCoords(points, routes, arcs)
  if (coords.length === 0) {
    return
  }
  const padding = cameraPadding(inset, base)
  if (coords.length === 1) {
    const opts = { center: coords[0], zoom: 14, padding }
    if (animate) {
      map.easeTo(opts)
    } else {
      map.jumpTo(opts)
    }
    return
  }
  const bounds = new maplibregl.LngLatBounds()
  coords.forEach((c) => bounds.extend(c))
  map.fitBounds(bounds, { padding, maxZoom: 15, animate })
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
  map: maplibregl.Map,
  point: F0MapPoint,
  animate: boolean,
  inset?: F0MapViewportInset
) => {
  map.easeTo({
    center: point.coordinates,
    padding: cameraPadding(inset, 0),
    animate,
  })
}

/**
 * Center on a single point, zooming in when the camera isn't already close.
 * Returns the zoom it commanded, so a camera move that lands mid-flight can
 * carry on to it instead of freezing wherever the animation had reached.
 */
const focusPoint = (
  map: maplibregl.Map,
  point: F0MapPoint,
  animate: boolean,
  inset?: F0MapViewportInset
) => {
  const zoom = Math.max(map.getZoom(), 15)
  map.easeTo({
    center: point.coordinates,
    zoom,
    padding: cameraPadding(inset, 0),
    animate,
  })
  return zoom
}

/** Fly to a point and report the intent, for a later padding change to redo. */
const flightIntent = (
  map: maplibregl.Map,
  point: F0MapPoint,
  animate: boolean,
  inset?: F0MapViewportInset
): CameraIntent => ({
  kind: "flight",
  zoom: focusPoint(map, point, animate, inset),
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
    onSidebarToggle,
    sidebarExpanded = false,
    sidebarToggleAddon,
    sidebar,
    detail,
    detailOpen = false,
    clearSelectionOnBackgroundClick = true,
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
      if (selectedMarkerId === undefined) {
        setInternalSelected(id)
      }
      onMarkerSelect?.(id)
    },
    [selectedMarkerId, onMarkerSelect]
  )

  // The detail panel sits beside the list panel while that one is open, and
  // takes its place at the map's edge when opened on its own.
  const listPanelOpen = sidebarExpanded
  const detailPanelOpen = detailOpen && Boolean(detail)
  const listOffset = mapPanelOffset([])
  // With the list open the detail sits beside it; on its own it takes the map's
  // edge, where the toggle floats over its top corner - so it starts below the
  // toggle rather than under it.
  const detailOffset = mapPanelOffset(
    listPanelOpen ? [MAP_PANEL.listWidth] : []
  )
  const detailOffsetY = listPanelOpen
    ? MAP_PANEL.inset
    : MAP_PANEL.inset + MAP_PANEL.toggleSize + MAP_PANEL.gap
  // Rightmost edge the controls have to clear, or null when nothing is open.
  const rightmostPanelEdge = detailPanelOpen
    ? detailOffset + MAP_PANEL.detailWidth
    : listPanelOpen
      ? listOffset + MAP_PANEL.listWidth
      : null

  // What the map's own panels take away from the camera: everything left of
  // their outer edge, plus the shared gap so a centred marker lands beside the
  // panel rather than against it - the same clearance the controls keep.
  // Rebuilt every render; the effect that reacts to it compares by value, so a
  // fresh object costs nothing.
  const cameraInset = mergeInsets(viewportInset, {
    left: rightmostPanelEdge === null ? 0 : rightmostPanelEdge + MAP_PANEL.gap,
  })

  // Latest values read by map event handlers without re-binding.
  const markersRef = useRef(markers)
  markersRef.current = markers
  const insetRef = useRef(cameraInset)
  insetRef.current = cameraInset
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
  const clearSelectionOnBackgroundClickRef = useRef(
    clearSelectionOnBackgroundClick
  )
  clearSelectionOnBackgroundClickRef.current = clearSelectionOnBackgroundClick

  // Only the marker-click path centers: the imperative handle and the marker
  // list already fly to their target, and a background click deselects.
  const handleMarkerClick = useCallback(
    (id: string | null) => {
      if (centerOnMarkerClick && id) {
        const map = mapRef.current
        const point = markersRef.current.find(
          (candidate) => candidate.id === id
        )
        if (map && point) {
          // A click has no zoom intent: nothing to redo but the centering.
          cameraIntentRef.current = null
          centerPoint(map, point, !reduceMotion, insetRef.current)
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
    if (
      warnedMarkerCount.current ||
      markers.length <= RECOMMENDED_MAX_MARKERS
    ) {
      return
    }
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

  // Control handlers (wired to the MapLibre instance via refs).
  const handleZoomIn = useCallback(() => mapRef.current?.zoomIn(), [])
  const handleZoomOut = useCallback(() => mapRef.current?.zoomOut(), [])
  const handleFit = useCallback(() => {
    // A fit ends any flight: there is no single target zoom any more.
    cameraIntentRef.current = { kind: "fit" }
    if (mapRef.current) {
      fitToPoints(
        mapRef.current,
        markersRef.current,
        !reduceMotion,
        routesRef.current,
        arcsRef.current,
        insetRef.current
      )
    }
  }, [reduceMotion])
  const handleLocate = useCallback(() => {
    requestLocation((c) =>
      mapRef.current?.flyTo({
        ...FLY_OPTS,
        center: c,
        zoom: Math.max(mapRef.current.getZoom(), 13),
        padding: cameraPadding(insetRef.current, 0),
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
      if (map && point) {
        cameraIntentRef.current = flightIntent(
          map,
          point,
          !reduceMotion,
          insetRef.current
        )
      }
      selectMarker(id)
    },
    [reduceMotion, selectMarker]
  )

  // Escape ends the selection, which is what closes the detail panel: the
  // keyboard counterpart to a background click, and the only way out when the
  // consumer has turned that click off - which is exactly what a detail panel
  // does.
  //
  // On the document rather than the map's own container, because a click is
  // how a selection is usually made and it does not reliably leave focus
  // inside the map (clicking a panel row lands it back on `body`), so a
  // container-scoped handler would simply never hear the key. Bound only while
  // something is selected, so the map is deaf to Escape the rest of the time,
  // and skipped when something nearer has already claimed the press -
  // `preventDefault` then marks it spent so one press doesn't also close a
  // dialog around the map.
  useEffect(() => {
    if (selectedId === null) {
      return
    }

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) {
        return
      }

      event.preventDefault()
      selectMarker(null)
    }

    const doc = containerRef.current?.ownerDocument ?? document
    doc.addEventListener("keydown", onKeyDown)
    return () => doc.removeEventListener("keydown", onKeyDown)
  }, [selectedId, selectMarker])

  useImperativeHandle(
    ref,
    () => ({
      getMap: () => mapRef.current,
      focusMarker: (id) => {
        const map = mapRef.current
        const point = markersRef.current.find((p) => p.id === id)
        if (!map || !point) {
          return
        }
        cameraIntentRef.current = flightIntent(
          map,
          point,
          !reduceMotion,
          insetRef.current
        )
        selectRef.current(id)
      },
      fitToMarkers: () => {
        cameraIntentRef.current = { kind: "fit" }
        if (mapRef.current) {
          fitToPoints(
            mapRef.current,
            markersRef.current,
            !reduceMotion,
            routesRef.current,
            arcsRef.current,
            insetRef.current
          )
        }
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
    if (loading) {
      return
    }
    const container = containerRef.current
    if (!container) {
      return
    }

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
      if (shouldFit) {
        fitToPoints(
          map,
          markersRef.current,
          false,
          routesRef.current,
          arcsRef.current,
          insetRef.current
        )
      }
      map.setProjection({ type: projectionRef.current })
    })
    const handleError = () => {
      if (!loaded) {
        setTileError(true)
      }
    }
    map.on("error", handleError)
    // Background click clears the selection (marker clicks are DOM events on
    // the marker element and never reach the canvas) - unless the consumer has
    // opted out, because a panel the selection opened has to be dismissed
    // deliberately rather than by a stray click on the map.
    const handleBackgroundClick = () => {
      if (!clearSelectionOnBackgroundClickRef.current) {
        return
      }
      selectRef.current(null)
    }
    map.on("click", handleBackgroundClick)

    return () => {
      mapRef.current = null
      setMapInstance(null)
      map.remove()
    }
  }, [loading, interactive, gestureHandling, minZoom, maxZoom, shouldFit])

  // Theme swap: a full setStyle, kept separate from the creation effect. A
  // setStyle can reset the projection to the new style's default, so re-apply
  // it once the swapped style has loaded. `style.load` (not `styledata`, which
  // fires as soon as the new style STARTS loading) is the done signal -
  // setProjection hard-throws on a style that is still loading.
  useEffect(() => {
    const map = mapRef.current
    if (!map || appliedStyleRef.current === style) {
      return
    }
    appliedStyleRef.current = style
    map.setStyle(style)
    map.once("style.load", () =>
      map.setProjection({ type: projectionRef.current })
    )
  }, [style])

  // Re-project live when the `projection` prop changes. The initial application
  // is left to the creation effect's load handler; this only matters for
  // post-mount changes. `isStyleLoaded()` can report true while the style is
  // still finalising (and setProjection then throws anyway), so the guard is
  // the try - a mid-load failure is safely dropped because the pending load /
  // style.load handlers re-apply `projectionRef` when the style is ready.
  useEffect(() => {
    const map = mapRef.current
    if (!map) {
      return
    }
    try {
      map.setProjection({ type: projection })
    } catch {
      // Style mid-load; the load handler applies the projection.
    }
  }, [projection])

  // Reveal: fly to a newly highlighted marker (external search selecting a
  // result). Only fires when the id changes to a real marker.
  useEffect(() => {
    if (!highlightedId) {
      return
    }
    const map = mapRef.current
    const point = markersRef.current.find((p) => p.id === highlightedId)
    if (map && point) {
      cameraIntentRef.current = flightIntent(
        map,
        point,
        !reduceMotion,
        insetRef.current
      )
    }
  }, [highlightedId, reduceMotion])

  // Re-centre when the space the camera has changes: one of the map's own
  // panels sliding in or out, or the consumer's chrome opening, resizing or
  // closing. Camera padding is part of MapLibre's transform, so easing it with
  // no `center` slides the current view into the free area and holds it there.
  // Skipped on mount: the creation effect's fit already frames with the inset
  // applied. Compared by value, not identity: the merged inset is a fresh
  // object every render and must not re-ease the camera on each one.
  const appliedInsetRef = useRef<string | null>(null)
  useEffect(() => {
    const padding = cameraPadding(cameraInset, 0)
    const signature = JSON.stringify(padding)
    if (signature === appliedInsetRef.current) {
      return
    }

    const isFirstRun = appliedInsetRef.current === null
    appliedInsetRef.current = signature
    if (isFirstRun) {
      return
    }

    const map = mapRef.current
    if (!map) {
      return
    }

    // With a marker selected, re-center on it: the point of the inset is to keep
    // *that* marker clear of the panel, and the current view may have been
    // panned since. Otherwise just slide the view into the free area.
    const selected = markersRef.current.find(
      (point) => point.id === selectedIdRef.current
    )
    const intent = cameraIntentRef.current
    if (selected) {
      map.easeTo({
        center: selected.coordinates,
        padding,
        // Carry on to a flight's target; otherwise leave the zoom alone, so
        // opening a panel over a click-selection never zooms.
        ...(intent?.kind === "flight" ? { zoom: intent.zoom } : {}),
        animate: !reduceMotion,
      })
      return
    }

    // Nothing selected any more. If the camera was last framing every marker -
    // the zoom-out that follows dismissing a panel - frame them again with the
    // freed-up space, rather than freezing that fit part-way through.
    if (intent?.kind === "fit") {
      fitToPoints(
        map,
        markersRef.current,
        !reduceMotion,
        routesRef.current,
        arcsRef.current,
        cameraInset
      )
      return
    }

    map.easeTo({ padding, animate: !reduceMotion })
  }, [cameraInset, reduceMotion])

  const hasLines = routes.length > 0 || arcs.length > 0

  // Both overlay stacks step aside for the open panels by the same distance.
  // Translated rather than re-positioned: `left` would lay out and paint every
  // frame.
  const controlsShift = mapPanelShift(MAP_CONTROL_INSET, rightmostPanelEdge)

  // They travel on the timing of whatever displaced them - a panel arriving or
  // one leaving - so the two move as one thing rather than the controls running
  // ahead of the panel pushing them. Every panel shares a curve and a duration
  // per direction, so matching the direction is exact lockstep, which is also
  // what keeps a panel from overlapping a control still in flight.
  //
  // The direction has to be known in the same commit that moves them: a CSS
  // transition reads its duration when it starts, so learning it in an effect
  // is too late. Hence deriving it during render, keyed on the value itself - a
  // re-render with an unchanged shift leaves the history alone, so this
  // survives being called twice for one commit (StrictMode does exactly that,
  // and a plain `ref.current = shift` reads as "no change" the second time
  // round).
  const shiftHistory = useRef({ from: controlsShift, to: controlsShift })
  if (shiftHistory.current.to !== controlsShift) {
    shiftHistory.current = { from: shiftHistory.current.to, to: controlsShift }
  }
  const controlsTiming =
    controlsShift > shiftHistory.current.from
      ? MAP_PANEL_TIMING.enter
      : MAP_PANEL_TIMING.exit

  const controlsClassName = "absolute left-2 z-10"
  // The controls' whole animation is travel, so reduced motion has nothing
  // gentler to keep: they take their new position outright.
  const controlsStyle = {
    transform: `translateX(${controlsShift}px)`,
    transitionProperty: reduceMotion ? "none" : "transform",
    transitionDuration: controlsTiming.duration,
    transitionTimingFunction: controlsTiming.easing,
  }

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
          {!webglFailed && mapInstance && currentLocation ? (
            <>
              <CurrentLocationLayer
                map={mapInstance}
                coords={currentLocation}
              />
              <span className="sr-only">{i18n.map.currentLocation}</span>
            </>
          ) : null}
          {!webglFailed && mapInstance && hasLines ? (
            <F0MapVectorLayer
              map={mapInstance}
              routes={routes}
              arcs={arcs}
              isDark={isDark}
              onRouteClick={onRouteClick}
              onArcClick={onArcClick}
            />
          ) : null}
          {!webglFailed && mapInstance && markers.length > 0 ? (
            <F0MapMarkersLayer
              map={mapInstance}
              points={markers}
              selectedId={selectedId}
              highlightedId={highlightedId}
              onSelect={handleMarkerClick}
            />
          ) : null}
          {/* Rendered before the toggle and the list panel: with equal
              z-index, paint order follows DOM order, so both sit above it. */}
          {!webglFailed && mapInstance && detail ? (
            <F0MapSidebar
              open={detailPanelOpen}
              offsetX={detailOffset}
              offsetY={detailOffsetY}
              width={MAP_PANEL.detailWidth}
              // Appears beside the list rather than from the map's edge, so it
              // grows into place instead of crossing the panel next to it.
              entrance="grow"
              // The detail content brings its own header and section insets.
              disableContentPadding
              ariaLabel={i18n.map.detailPanel}
            >
              {detail}
            </F0MapSidebar>
          ) : null}

          {/* The map's own toggle. Never moves: it sits at the map's corner
              whatever is open, riding over the detail panel and disappearing
              under the list panel - which is the one that replaces it.

              Rendered between the two panels, so with equal z-index paint order
              puts it above the detail and below the list. And it stays mounted
              rather than unmounting when the list covers it: with nothing there
              the pointer would land on the canvas and take the map's grab
              cursor, and a cursor only re-resolves on the next mouse move, so
              it would sit wrong until you twitched. */}
          {!webglFailed && mapInstance && onSidebarToggle ? (
            <div
              className={cn(
                "absolute left-2 top-2 z-10",
                listPanelOpen && "opacity-0"
              )}
              style={{
                transitionProperty: reduceMotion ? "none" : "opacity",
                transitionDuration: listPanelOpen
                  ? MAP_PANEL_TIMING.enter.duration
                  : MAP_PANEL_TIMING.exit.duration,
                transitionTimingFunction: MAP_PANEL_TIMING.enter.easing,
              }}
            >
              <div
                // Two cards, the shared gap apart: the toggle on its own, the
                // addon on its own, so each reads as one control.
                className="flex items-start gap-2"
                // The addon shares the toggle's fate while the panel covers
                // them: still there for the cursor, out of reach for the
                // keyboard and assistive tech. `inert` is set by hand, as the
                // panel does: React's types do not know it yet.
                aria-hidden={listPanelOpen || undefined}
                ref={(node) => {
                  if (listPanelOpen) {
                    node?.setAttribute("inert", "")
                  } else {
                    node?.removeAttribute("inert")
                  }
                }}
              >
                <F0MapSidebarToggle
                  expanded={false}
                  onToggle={onSidebarToggle}
                  // The panel's own toggle has taken over; this one only stays
                  // to hold the cursor, so it must not be tabbable or
                  // announced.
                  inactive={listPanelOpen}
                />
                {sidebarToggleAddon ? (
                  <MapControlCard>{sidebarToggleAddon}</MapControlCard>
                ) : null}
              </div>
            </div>
          ) : null}

          {!webglFailed && mapInstance && onSidebarToggle ? (
            <F0MapSidebar
              open={listPanelOpen}
              offsetX={listOffset}
              width={MAP_PANEL.listWidth}
              // Once the panel is open the toggle belongs to it, sitting in its
              // header rather than travelling with the map's controls.
              headerAction={
                <F0MapSidebarToggle
                  expanded
                  onToggle={onSidebarToggle}
                  // Inside the panel there is no map to lift it off, so no
                  // card - just the button.
                  bare
                  dataTestId="map-panel-toggle-open"
                />
              }
            >
              {sidebar}
            </F0MapSidebar>
          ) : null}

          {!webglFailed && mapInstance && showControls && interactive ? (
            <div
              className={cn(controlsClassName, "bottom-2")}
              style={controlsStyle}
            >
              <F0MapControls
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onFit={markers.length > 0 || hasLines ? handleFit : undefined}
                onLocate={handleLocate}
                labels={controlLabels}
              />
            </div>
          ) : null}

          {tileError && !webglFailed ? (
            <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 border-b border-solid border-f1-border-secondary bg-f1-background px-4 py-2 text-sm text-f1-foreground">
              <span>{i18n.map.loadError}</span>
              <button
                type="button"
                onClick={() => {
                  const map = mapRef.current
                  if (!map) {
                    return
                  }
                  setTileError(false)
                  map.setStyle(styleRef.current)
                }}
                className="font-medium underline"
              >
                {i18n.map.retry}
              </button>
            </div>
          ) : null}

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
