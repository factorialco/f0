import maplibregl, {
  type ExpressionSpecification,
  type GeoJSONSource,
  type MapLayerMouseEvent,
} from "maplibre-gl"
import type { MapLine } from "../types"

const SOURCE = "f0-map-lines"
const SOLID = "f0-map-lines-solid"
const DASHED = "f0-map-lines-dashed"
/** Lower decorations insert themselves beneath this. */
export const LINES_BOTTOM_LAYER = SOLID
const LAYERS = [DASHED, SOLID] as const

/**
 * Hover emphasis is data-driven rather than per-kind: the caller resolves what
 * a hovered line looks like, so widening a route and recolouring an arc are the
 * same expression with different data.
 */
const HOVERED: ExpressionSpecification = [
  "boolean",
  ["feature-state", "hover"],
  false,
]
const COLOR: ExpressionSpecification = [
  "case",
  HOVERED,
  ["get", "hoverColor"],
  ["get", "color"],
]
const WIDTH: ExpressionSpecification = [
  "case",
  HOVERED,
  ["get", "hoverWidth"],
  ["get", "width"],
]
const OPACITY: ExpressionSpecification = [
  "case",
  HOVERED,
  ["get", "hoverOpacity"],
  ["get", "opacity"],
]

const toFeature = (line: MapLine) => ({
  type: "Feature" as const,
  // Top-level id (via `promoteId`) is what `setFeatureState` keys on.
  id: line.id,
  properties: {
    id: line.id,
    color: line.color,
    hoverColor: line.hover?.color ?? line.color,
    width: line.width,
    hoverWidth: line.hover?.width ?? line.width,
    opacity: line.opacity,
    hoverOpacity: line.hover?.opacity ?? line.opacity,
    dashed: line.dashed,
  },
  geometry: { type: "LineString" as const, coordinates: line.coordinates },
})

export interface LinesController {
  set(lines: MapLine[], onClick?: (id: string) => void): void
  destroy(): void
}

/**
 * Routes and arcs as GL lines. One GeoJSON source feeds two layers, split by
 * `dashed` because `line-dasharray` cannot be data-driven per feature.
 *
 * A `setStyle` wipes every custom source and layer, so this re-adds them from
 * the latest data whenever a style finishes loading - the one thing it must
 * never get wrong.
 */
export const createLines = (map: maplibregl.Map): LinesController => {
  let lines: MapLine[] = []
  let onClick: ((id: string) => void) | undefined
  let bound = false
  let hovered: string | number | undefined

  const data = () => ({
    type: "FeatureCollection" as const,
    features: lines.map(toFeature),
  })

  const addLayers = () => {
    if (!map.isStyleLoaded() || map.getSource(SOURCE)) {
      return
    }
    map.addSource(SOURCE, { type: "geojson", promoteId: "id", data: data() })
    const base = (extra: object) => ({
      type: "line" as const,
      source: SOURCE,
      layout: { "line-cap": "round" as const, "line-join": "round" as const },
      paint: {
        "line-color": COLOR,
        "line-width": WIDTH,
        "line-opacity": OPACITY,
        ...extra,
      },
    })
    map.addLayer({
      id: SOLID,
      filter: ["!=", ["get", "dashed"], true],
      ...base({}),
    })
    map.addLayer({
      id: DASHED,
      filter: ["==", ["get", "dashed"], true],
      ...base({ "line-dasharray": [1.5, 2.8] }),
    })
  }

  const removeLayers = () => {
    if (!map.style) {
      return
    }
    for (const id of LAYERS) {
      if (map.getLayer(id)) {
        map.removeLayer(id)
      }
    }
    if (map.getSource(SOURCE)) {
      map.removeSource(SOURCE)
    }
  }

  const sync = () => {
    // A render can hand this a map that was just `remove()`d; every style
    // accessor throws on it.
    if (!map.style) {
      return
    }
    if (lines.length === 0) {
      removeLayers()
      return
    }
    addLayers()
    const source = map.getSource(SOURCE) as GeoJSONSource | undefined
    source?.setData(data())
  }

  const clearHover = () => {
    if (hovered !== undefined && map.style) {
      map.setFeatureState({ source: SOURCE, id: hovered }, { hover: false })
    }
    hovered = undefined
  }
  const handleMove = (event: MapLayerMouseEvent) => {
    const feature = event.features?.[0]
    if (!feature || feature.id === undefined) {
      return
    }
    if (hovered !== undefined && hovered !== feature.id) {
      clearHover()
    }
    hovered = feature.id
    map.setFeatureState({ source: SOURCE, id: hovered }, { hover: true })
    map.getCanvas().style.cursor = "pointer"
  }
  const handleLeave = () => {
    clearHover()
    map.getCanvas().style.cursor = ""
  }
  const handleClick = (event: MapLayerMouseEvent) => {
    const id = event.features?.[0]?.properties?.id
    if (typeof id === "string") {
      onClick?.(id)
    }
  }

  const bind = (wanted: boolean) => {
    if (wanted === bound) {
      return
    }
    bound = wanted
    for (const id of LAYERS) {
      if (wanted) {
        map.on("mousemove", id, handleMove)
        map.on("mouseleave", id, handleLeave)
        map.on("click", id, handleClick)
      } else {
        map.off("mousemove", id, handleMove)
        map.off("mouseleave", id, handleLeave)
        map.off("click", id, handleClick)
      }
    }
  }

  // `styledata` alone is not enough: on the initial load it only fires while
  // the style is still loading (so `addLayers` bails) and never again once it
  // finishes. `load` and `style.load` are the ready signals; `sync` is
  // idempotent, so listening to all three is safe.
  map.on("load", sync)
  map.on("style.load", sync)
  map.on("styledata", sync)

  return {
    set: (next, handler) => {
      lines = next
      onClick = handler
      bind(Boolean(handler) && next.length > 0)
      sync()
    },
    destroy: () => {
      map.off("load", sync)
      map.off("style.load", sync)
      map.off("styledata", sync)
      bind(false)
      removeLayers()
    },
  }
}
