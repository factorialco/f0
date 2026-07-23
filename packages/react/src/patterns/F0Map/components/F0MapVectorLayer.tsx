import type {
  ExpressionSpecification,
  GeoJSONSource,
  Map as MaplibreMap,
  MapLayerMouseEvent,
} from "maplibre-gl"
import { useEffect, useMemo, useRef } from "react"

import { arcLineString } from "../utils/arc"
import type { F0MapArc, F0MapLineStyle, F0MapRoute } from "../types"

import { markerColorTriplet } from "./internal/BaseMapMarker"

const SOURCE = "f0-map-lines"
const SOLID = "f0-map-lines-solid"
const DASHED = "f0-map-lines-dashed"
/**
 * Bottom-most line layer id, exported so lower decorations (the
 * current-location dot) can insert themselves beneath the lines.
 */
export const LINES_BOTTOM_LAYER_ID = SOLID
/** The two interactive line layers. */
const INTERACTIVE_LAYERS = [SOLID, DASHED] as const

/** "H S% L%" (the sanctioned f0 triplet form) -> a MapLibre-parseable color. */
const toCss = (triplet: string) => `hsl(${triplet.replace(/ /g, ", ")})`

const resolveColor = (style: F0MapLineStyle, isDark: boolean) =>
  style.color ?? toCss(markerColorTriplet(style.variant ?? "radical", isDark))

// Hover emphasis color: the hue's other theme step - darker (`.70`) on the
// light theme, brighter (`.50`) on dark, so hover always gains contrast. A
// custom `color` can't be derived from, so it stays unchanged on hover.
const resolveHoverColor = (style: F0MapLineStyle, isDark: boolean) =>
  style.color ?? toCss(markerColorTriplet(style.variant ?? "radical", !isDark))

type LineKind = "route" | "arc"

interface LineProps {
  id: string
  kind: LineKind
  color: string
  hoverColor: string
  width: number
  opacity: number
  dashed: boolean
  [key: string]: unknown
}

interface LineFeature {
  type: "Feature"
  id: string
  properties: LineProps
  geometry: { type: "LineString"; coordinates: [number, number][] }
}

interface LineCollection {
  type: "FeatureCollection"
  features: LineFeature[]
}

const feature = (
  id: string,
  kind: LineKind,
  coordinates: [number, number][],
  style: F0MapLineStyle,
  isDark: boolean
): LineFeature => ({
  type: "Feature",
  // Top-level id (via `promoteId`) is what `setFeatureState` keys on for hover.
  id,
  properties: {
    id,
    kind,
    color: resolveColor(style, isDark),
    hoverColor: resolveHoverColor(style, isDark),
    width: style.width ?? 3,
    opacity: style.opacity ?? 1,
    dashed: style.dashed ?? false,
  },
  geometry: { type: "LineString", coordinates },
})

const buildCollection = (
  routes: F0MapRoute[],
  arcs: F0MapArc[],
  isDark: boolean
): LineCollection => ({
  type: "FeatureCollection",
  features: [
    ...routes.map((r) => feature(r.id, "route", r.coordinates, r, isDark)),
    ...arcs.map((a) =>
      feature(a.id, "arc", arcLineString(a.from, a.to, a.curvature), a, isDark)
    ),
  ],
})

// Hover emphasis, per kind: routes widen (a wider road reads naturally),
// arcs recolor to their stronger hue step instead (widening a dashed curve
// makes the dashes blobby). Both go fully opaque.
const HOVER: ExpressionSpecification = [
  "boolean",
  ["feature-state", "hover"],
  false,
]
const HOVER_ROUTE: ExpressionSpecification = [
  "all",
  HOVER,
  ["==", ["get", "kind"], "route"],
]
const HOVER_ARC: ExpressionSpecification = [
  "all",
  HOVER,
  ["==", ["get", "kind"], "arc"],
]
const WIDTH_EXPR: ExpressionSpecification = [
  "case",
  HOVER_ROUTE,
  ["*", ["get", "width"], 1.6],
  ["get", "width"],
]
const COLOR_EXPR: ExpressionSpecification = [
  "case",
  HOVER_ARC,
  ["get", "hoverColor"],
  ["get", "color"],
]
const OPACITY_EXPR: ExpressionSpecification = [
  "case",
  HOVER,
  1,
  ["get", "opacity"],
]

export interface F0MapVectorLayerProps {
  map: MaplibreMap
  routes: F0MapRoute[]
  arcs: F0MapArc[]
  isDark: boolean
  /** Fired when a route line is clicked. Presence enables hover + click. */
  onRouteClick?: (id: string) => void
  /** Fired when an arc line is clicked. Presence enables hover + click. */
  onArcClick?: (id: string) => void
}

/**
 * Draws routes and arcs as GL line layers on the map canvas (unlike the DOM
 * markers). One GeoJSON source feeds two layers - solid and dashed, split by
 * the `dashed` flag because `line-dasharray` can't be data-driven per feature.
 * A theme swap (`map.setStyle`) wipes every custom source and layer, so this
 * re-adds them once the swapped style loads, from the latest data held in a
 * ref - the one thing this layer must never get wrong.
 */
export const F0MapVectorLayer = ({
  map,
  routes,
  arcs,
  isDark,
  onRouteClick,
  onArcClick,
}: F0MapVectorLayerProps) => {
  const collection = useMemo(
    () => buildCollection(routes, arcs, isDark),
    [routes, arcs, isDark]
  )
  // The creation / re-add path reads the latest data without re-binding.
  const collectionRef = useRef(collection)
  collectionRef.current = collection

  const interactive = Boolean(onRouteClick || onArcClick)
  const clickRef = useRef({ onRouteClick, onArcClick })
  clickRef.current = { onRouteClick, onArcClick }

  // Create layers + wire interactions. Re-adds after a style swap; does not
  // depend on the data (that is pushed via `setData` below).
  useEffect(() => {
    const ensure = () => {
      if (!map.isStyleLoaded() || map.getSource(SOURCE)) return
      map.addSource(SOURCE, {
        type: "geojson",
        promoteId: "id",
        data: collectionRef.current,
      })
      const main = (extra: object) => ({
        type: "line" as const,
        source: SOURCE,
        layout: { "line-cap": "round" as const, "line-join": "round" as const },
        paint: {
          "line-color": COLOR_EXPR,
          "line-width": WIDTH_EXPR,
          "line-opacity": OPACITY_EXPR,
          ...extra,
        },
      })
      map.addLayer({
        id: SOLID,
        filter: ["!=", ["get", "dashed"], true],
        ...main({}),
      })
      map.addLayer({
        id: DASHED,
        filter: ["==", ["get", "dashed"], true],
        ...main({ "line-dasharray": [1.5, 2.8] }),
      })
    }

    const sync = () => {
      // A render can hand this effect a map that was just `remove()`d (its
      // replacement arrives on the next render); every style accessor throws
      // on it, so bail - the fresh map re-runs this effect from scratch.
      if (!map.style) return
      ensure()
      const source = map.getSource(SOURCE) as GeoJSONSource | undefined
      source?.setData(collectionRef.current)
    }
    sync()
    // `styledata` alone is not enough: during the initial load it only fires
    // while the style is still loading (isStyleLoaded() false → ensure bails)
    // and never again after it finishes - the layers would never be added.
    // `load` (initial) and `style.load` (after every setStyle swap) are the
    // "style is ready" signals; sync is idempotent so listening to all three
    // is safe.
    map.on("load", sync)
    map.on("style.load", sync)
    map.on("styledata", sync)

    // Hover highlight + cursor + click, only when a handler wants them.
    let hovered: string | number | undefined
    const clearHover = () => {
      if (hovered !== undefined)
        map.setFeatureState({ source: SOURCE, id: hovered }, { hover: false })
      hovered = undefined
    }
    const onMove = (event: MapLayerMouseEvent) => {
      const f = event.features?.[0]
      if (!f || f.id === undefined) return
      if (hovered !== undefined && hovered !== f.id) clearHover()
      hovered = f.id
      map.setFeatureState({ source: SOURCE, id: hovered }, { hover: true })
      map.getCanvas().style.cursor = "pointer"
    }
    const onLeave = () => {
      clearHover()
      map.getCanvas().style.cursor = ""
    }
    const onClick = (event: MapLayerMouseEvent) => {
      const props = event.features?.[0]?.properties as LineProps | undefined
      if (!props) return
      const { onRouteClick: r, onArcClick: a } = clickRef.current
      if (props.kind === "route") r?.(props.id)
      else a?.(props.id)
    }
    if (interactive) {
      for (const id of INTERACTIVE_LAYERS) {
        map.on("mousemove", id, onMove)
        map.on("mouseleave", id, onLeave)
        map.on("click", id, onClick)
      }
    }

    return () => {
      map.off("load", sync)
      map.off("style.load", sync)
      map.off("styledata", sync)
      if (interactive) {
        for (const id of INTERACTIVE_LAYERS) {
          map.off("mousemove", id, onMove)
          map.off("mouseleave", id, onLeave)
          map.off("click", id, onClick)
        }
      }
      // After `map.remove()` the style is gone and even `getLayer` throws
      // (it dereferences `map.style`), so bail before touching anything.
      if (!map.style) return
      for (const id of [DASHED, SOLID]) {
        if (map.getLayer(id)) map.removeLayer(id)
      }
      if (map.getSource(SOURCE)) map.removeSource(SOURCE)
    }
  }, [map, interactive])

  // Push data on change (routes / arcs / theme). The re-add path above uses the
  // same ref, so a style swap mid-flight can't strand stale colors. Same
  // dead-map guard as `sync`.
  useEffect(() => {
    if (!map.style) return
    const source = map.getSource(SOURCE) as GeoJSONSource | undefined
    source?.setData(collection)
  }, [map, collection])

  return null
}
