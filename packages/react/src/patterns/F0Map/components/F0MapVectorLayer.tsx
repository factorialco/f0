import { useEffect, useMemo, useRef } from "react"
import type { MapAdapter, MapLine } from "../providers/types"
import type { F0MapArc, F0MapLineStyle, F0MapRoute } from "../types"
import { arcLineString } from "../utils/arc"
import { markerColorTriplet } from "./internal/BaseMapMarker"

/** "H S% L%" (the sanctioned f0 triplet form) -> a parseable CSS color. */
const toCss = (triplet: string) => `hsl(${triplet.replace(/ /g, ", ")})`

const resolveColor = (style: F0MapLineStyle, isDark: boolean) =>
  style.color ?? toCss(markerColorTriplet(style.variant ?? "radical", isDark))

// Hover emphasis color: the hue's other theme step - darker (`.70`) on the
// light theme, brighter (`.50`) on dark, so hover always gains contrast. A
// custom `color` can't be derived from, so it stays unchanged on hover.
const resolveHoverColor = (style: F0MapLineStyle, isDark: boolean) =>
  style.color ?? toCss(markerColorTriplet(style.variant ?? "radical", !isDark))

type LineKind = "route" | "arc"

/**
 * Routes widen on hover (a wider road reads naturally); arcs recolor to their
 * stronger hue step instead, because widening a dashed curve makes the dashes
 * blobby. Both go fully opaque.
 */
const toLine = (
  id: string,
  kind: LineKind,
  coordinates: [number, number][],
  style: F0MapLineStyle,
  isDark: boolean
): MapLine => {
  const width = style.width ?? 3
  return {
    id,
    coordinates,
    color: resolveColor(style, isDark),
    width,
    opacity: style.opacity ?? 1,
    dashed: style.dashed ?? false,
    hover:
      kind === "route"
        ? { width: width * 1.6, opacity: 1 }
        : { color: resolveHoverColor(style, isDark), opacity: 1 },
  }
}

export interface F0MapVectorLayerProps {
  adapter: MapAdapter
  routes: F0MapRoute[]
  arcs: F0MapArc[]
  isDark: boolean
  /** Fired when a route line is clicked. Presence enables hover + click. */
  onRouteClick?: (id: string) => void
  /** Fired when an arc line is clicked. Presence enables hover + click. */
  onArcClick?: (id: string) => void
}

/**
 * Hands the adapter the routes and arcs to draw beneath the markers. Everything
 * about how they are drawn - and re-drawn after a theme swap - belongs to the
 * adapter; this resolves the palette and the hover policy.
 */
export const F0MapVectorLayer = ({
  adapter,
  routes,
  arcs,
  isDark,
  onRouteClick,
  onArcClick,
}: F0MapVectorLayerProps) => {
  const lines = useMemo(
    () => [
      ...routes.map((r) => toLine(r.id, "route", r.coordinates, r, isDark)),
      ...arcs.map((a) =>
        toLine(a.id, "arc", arcLineString(a.from, a.to, a.curvature), a, isDark)
      ),
    ],
    [routes, arcs, isDark]
  )

  // Which handler a click belongs to. Ids are unique across both kinds: they
  // share one source, and its feature state is keyed by id alone.
  const kinds = useMemo(
    () =>
      new Map<string, LineKind>([
        ...routes.map((r) => [r.id, "route"] as const),
        ...arcs.map((a) => [a.id, "arc"] as const),
      ]),
    [routes, arcs]
  )

  const clickRef = useRef({ onRouteClick, onArcClick, kinds })
  clickRef.current = { onRouteClick, onArcClick, kinds }
  const interactive = Boolean(onRouteClick || onArcClick)

  useEffect(() => {
    adapter.setLines(
      lines,
      interactive
        ? {
            onClick: (id: string) => {
              const {
                onRouteClick: r,
                onArcClick: a,
                kinds: k,
              } = clickRef.current
              if (k.get(id) === "arc") {
                a?.(id)
              } else {
                r?.(id)
              }
            },
          }
        : undefined
    )
  }, [adapter, lines, interactive])

  useEffect(() => () => adapter.setLines([]), [adapter])

  return null
}
