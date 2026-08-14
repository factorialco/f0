import type maplibregl from "maplibre-gl"
import { useEffect, useState } from "react"

import {
  getMarkerMetrics,
  type BaseMapMarkerLabelPlacement,
  type BaseMapMarkerSize,
} from "../components/internal/BaseMapMarker"
import type { F0MapPoint } from "../types"

const GAP_EXTRA_BOTTOM = 4 // matches the marker's extra separation below
const MAX_LINES = 4
const ORDER: BaseMapMarkerLabelPlacement[] = ["right", "bottom", "left", "top"]

// Markers whose heads sit within `head diameter × CONNECT_FACTOR` of each other
// are treated as one connected pocket for labelling: it is all-or-nothing. If
// any member's label can't be placed without collision, the whole pocket drops
// its labels (even members that had room elsewhere), so a dense area declutters
// to clean dots as a group instead of a scattered few keeping their text.
const CONNECT_FACTOR = 1.7

/** Screen-space rectangle. Shared with the layer's selection-collapse pass. */
export interface Box {
  x: number
  y: number
  w: number
  h: number
}
export const boxesOverlap = (a: Box, b: Box) =>
  a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y

// Reused offscreen context for measuring label widths.
let measureCtx: CanvasRenderingContext2D | null = null
export const measureLabel = (text: string, fontPx: number): number => {
  if (!measureCtx && typeof document !== "undefined") {
    measureCtx = document.createElement("canvas").getContext("2d")
  }
  if (!measureCtx) return text.length * fontPx * 0.55
  measureCtx.font = `600 ${fontPx}px Inter, system-ui, sans-serif`
  return measureCtx.measureText(text).width
}

// Label box for a given placement, relative to a head centered at (cx, cy).
const labelBox = (
  placement: BaseMapMarkerLabelPlacement,
  cx: number,
  cy: number,
  point: F0MapPoint,
  size: BaseMapMarkerSize
): Box => {
  const m = getMarkerMetrics(size)
  const raw = measureLabel(point.label ?? "", m.label) + 2
  const half = m.d / 2
  if (placement === "right" || placement === "left") {
    const w = raw
    const h = m.lineH
    const x = placement === "right" ? cx + half + m.gap : cx - half - m.gap - w
    return { x, y: cy - h / 2, w, h }
  }
  // top / bottom: wrap within maxLabelW, up to MAX_LINES lines.
  const w = Math.min(raw, m.maxLabelW)
  const lines = Math.min(Math.ceil(raw / m.maxLabelW), MAX_LINES)
  const h = lines * m.lineH
  const gapBelow = m.gap + GAP_EXTRA_BOTTOM
  const y =
    placement === "bottom" ? cy + half + gapBelow : cy - half - m.gap - h
  return { x: cx - w / 2, y, w, h }
}

/**
 * Resolved label placement per point id. `null` means no side fits without
 * overlapping another marker or label - the label degrades (hides) and only
 * the marker shows. Merging markers is NOT this layer's job: that's zoom-based
 * clustering, which reacts to marker heads crowding, not labels.
 */
export type LabelPlacements = Record<string, BaseMapMarkerLabelPlacement | null>

/**
 * Resolves each labeled point's placement so labels avoid other markers' heads
 * and each other. Recomputes on map move/zoom/resize and when points change.
 * Collision handling lives here (not in the marker) because only the map knows
 * every marker's on-screen position.
 */
export const useLabelCollision = (
  map: maplibregl.Map | null,
  points: F0MapPoint[],
  size: BaseMapMarkerSize = "md"
): LabelPlacements => {
  const [placements, setPlacements] = useState<LabelPlacements>({})

  useEffect(() => {
    if (!map) {
      setPlacements({})
      return
    }

    let raf = 0
    const recompute = () => {
      const d = getMarkerMetrics(size).d
      const heads: Box[] = []
      const center: Array<{ x: number; y: number }> = []
      for (const p of points) {
        const pt = map.project(p.coordinates)
        heads.push({ x: pt.x - d / 2, y: pt.y - d / 2, w: d, h: d })
        center.push({ x: pt.x, y: pt.y })
      }

      // Connectivity: union markers whose heads sit close together into pockets.
      const n = points.length
      const parent = Array.from({ length: n }, (_, i) => i)
      const find = (x: number): number => {
        while (parent[x] !== x) x = parent[x] = parent[parent[x]]
        return x
      }
      const connectR2 = (d * CONNECT_FACTOR) ** 2
      for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
          const dx = center[i].x - center[j].x
          const dy = center[i].y - center[j].y
          if (dx * dx + dy * dy <= connectR2) {
            const ra = find(i)
            const rb = find(j)
            if (ra !== rb) parent[ra] = rb
          }
        }

      // Place each label on the first side that clears every head and every
      // already-placed label; `null` means no side fits (a collision).
      const next: LabelPlacements = {}
      const placedLabels: Box[] = []
      for (let i = 0; i < n; i++) {
        const p = points[i]
        if (!p.label) continue
        const s = center[i]
        const preferred: BaseMapMarkerLabelPlacement = "right"
        const candidates = [preferred, ...ORDER.filter((o) => o !== preferred)]

        let chosen: BaseMapMarkerLabelPlacement | null = null
        for (const placement of candidates) {
          const box = labelBox(placement, s.x, s.y, p, size)
          const hitsHead = heads.some((h) => boxesOverlap(box, h))
          const hitsLabel = placedLabels.some((l) => boxesOverlap(box, l))
          if (!hitsHead && !hitsLabel) {
            chosen = placement
            placedLabels.push(box)
            break
          }
        }
        next[p.id] = chosen
      }

      // Propagate collisions across each connected pocket: if any member's label
      // collided (null), the whole pocket drops its labels - even members that
      // found room - so a dense area declutters together, not piecemeal.
      const collidedPocket = new Set<number>()
      for (let i = 0; i < n; i++)
        if (points[i].label && next[points[i].id] === null)
          collidedPocket.add(find(i))
      for (let i = 0; i < n; i++)
        if (points[i].label && collidedPocket.has(find(i)))
          next[points[i].id] = null

      // Bail out when nothing moved enough to change a placement (the common
      // case per frame): keeping the previous object's identity stops the
      // marker layer re-rendering during pan/zoom.
      setPlacements((prev) => {
        const keys = Object.keys(next)
        const same =
          keys.length === Object.keys(prev).length &&
          keys.every((k) => prev[k] === next[k])
        return same ? prev : next
      })
    }

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(recompute)
    }

    schedule()
    map.on("move", schedule)
    map.on("zoom", schedule)
    map.on("resize", schedule)
    return () => {
      cancelAnimationFrame(raf)
      map.off("move", schedule)
      map.off("zoom", schedule)
      map.off("resize", schedule)
    }
  }, [map, points, size])

  return placements
}
