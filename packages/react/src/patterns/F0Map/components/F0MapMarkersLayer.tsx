import maplibregl from "maplibre-gl"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"

import { FLY_OPTS } from "../constants"
import { useClusters } from "../hooks/useClusters"
import {
  boxesOverlap,
  measureLabel,
  useLabelCollision,
  type Box,
} from "../hooks/useLabelCollision"
import { useZoomAtLeast } from "../hooks/useZoomAtLeast"
import type { F0MapPoint } from "../types"

import { F0MapCluster } from "./internal/F0MapCluster"
import { F0MapMarker, type F0MapMarkerVariantProps } from "./F0MapMarker"
import {
  getMarkerMetrics,
  getSelectedHeadGroupY,
  SELECTED_DOT_R,
  type BaseMapMarkerSize,
} from "./internal/BaseMapMarker"

// At/above this zoom the basemap starts drawing individual POI names, so the
// markers step up a size to keep their weight against the busier map.
const POI_LABEL_ZOOM = 16

/**
 * When a marker is selected it grows to `xl` and lifts onto a pin (head above
 * the point) with its label dropped below. Any *other* marker whose head sits
 * under that enlarged head or its dropped label is folded to a dot so the two
 * don't clash. Returns the ids to collapse. Geometry comes from BaseMapMarker's
 * exported selected-pin constants, so the footprint can't drift from what the
 * marker actually renders.
 */
const selectionCollapsedIds = (
  map: maplibregl.Map,
  selected: F0MapPoint,
  others: F0MapPoint[],
  size: BaseMapMarkerSize
): Set<string> => {
  const sel = map.project(selected.coordinates)
  const xl = getMarkerMetrics("xl")
  const base = getMarkerMetrics(size)
  const headTop = sel.y + getSelectedHeadGroupY()
  const headBox: Box = { x: sel.x - xl.d / 2, y: headTop, w: xl.d, h: xl.d }
  // Dropped label sits just below the dot, centred on the point. Measured with
  // the same canvas measurement the collision pass uses.
  const labelW = selected.label ? measureLabel(selected.label, base.label) : 0
  const labelBox: Box = {
    x: sel.x - labelW / 2,
    y: sel.y + SELECTED_DOT_R,
    w: labelW,
    h: base.lineH,
  }
  const d = base.d
  const collapsed = new Set<string>()
  for (const p of others) {
    const s = map.project(p.coordinates)
    const head: Box = { x: s.x - d / 2, y: s.y - d / 2, w: d, h: d }
    if (
      boxesOverlap(head, headBox) ||
      (labelW > 0 && boxesOverlap(head, labelBox))
    )
      collapsed.add(p.id)
  }
  return collapsed
}

/**
 * Which singles fold out of the selected marker's way, recomputed on zoom /
 * resize (relative screen distances change with zoom; a pan shifts every
 * marker equally, so overlaps are unaffected). State only changes when the id
 * set actually differs, so zoom frames don't re-render the layer.
 */
const useSelectionCollapse = (
  map: maplibregl.Map,
  selectedPoint: F0MapPoint | undefined,
  singles: F0MapPoint[],
  size: BaseMapMarkerSize
): Set<string> | null => {
  const [ids, setIds] = useState<Set<string> | null>(null)

  useEffect(() => {
    if (!selectedPoint || !singles.some((p) => p.id === selectedPoint.id)) {
      // Nothing selected, or the selection is swallowed into a cluster (its
      // enlarged head isn't rendered) - nothing should fold.
      setIds(null)
      return
    }
    let raf = 0
    const recompute = () => {
      const next = selectionCollapsedIds(
        map,
        selectedPoint,
        singles.filter((p) => p.id !== selectedPoint.id),
        size
      )
      setIds((prev) => {
        const same =
          prev !== null &&
          prev.size === next.size &&
          [...next].every((id) => prev.has(id))
        return same ? prev : next
      })
    }
    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(recompute)
    }
    schedule()
    map.on("zoom", schedule)
    map.on("resize", schedule)
    return () => {
      cancelAnimationFrame(raf)
      map.off("zoom", schedule)
      map.off("resize", schedule)
    }
  }, [map, selectedPoint, singles, size])

  return ids
}

/**
 * Fly to a cluster's bounds so its members come into view. Uses
 * `cameraForBounds`, which guarantees every point stays on screen - a tighter
 * padding than the idle fit zooms in a touch more (helping sub-clusters resolve)
 * without ever pushing the outermost points out of the viewport, which a raw
 * zoom overshoot would (a "cluster of clusters" would frame the empty middle).
 */
const expandCluster = (
  map: maplibregl.Map,
  bounds: [[number, number], [number, number]],
  reduceMotion: boolean
) => {
  const cam = map.cameraForBounds(bounds, { padding: 64, maxZoom: 16 })
  if (!cam?.center) return
  const zoom = cam.zoom ?? map.getZoom()
  if (reduceMotion) {
    map.jumpTo({ center: cam.center, zoom })
    return
  }
  map.flyTo({ ...FLY_OPTS, center: cam.center, zoom })
}

/** Extracts just the variant half of a point for spreading into F0MapMarker. */
const variantProps = (point: F0MapPoint): F0MapMarkerVariantProps => {
  const {
    id: _id,
    coordinates: _coordinates,
    label: _label,
    ...variant
  } = point
  return variant
}

/** One maplibre DOM marker that portals React content into it. */
const MapMarkerPortal = ({
  map,
  coordinates,
  selected,
  children,
}: {
  map: maplibregl.Map
  coordinates: [number, number]
  selected: boolean
  children: React.ReactNode
}) => {
  const [el] = useState(() => document.createElement("div"))
  const markerRef = useRef<maplibregl.Marker | null>(null)

  useEffect(() => {
    // Marker elements live inside the map's canvas container, so clicks on
    // them bubble into the map's own click handler (which clears the
    // selection). Stop them here so selecting a marker sticks.
    const stop = (event: MouseEvent) => event.stopPropagation()
    el.style.cursor = "pointer"
    el.addEventListener("click", stop)
    const marker = new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat(coordinates)
      .addTo(map)
    markerRef.current = marker
    return () => {
      el.removeEventListener("click", stop)
      marker.remove()
      markerRef.current = null
    }
    // Created once; `coordinates` is handled by the next effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, el])

  useEffect(() => {
    markerRef.current?.setLngLat(coordinates)
  }, [coordinates])

  // Selected marker floats above the rest.
  useEffect(() => {
    el.style.zIndex = selected ? "2" : ""
  }, [el, selected])

  return createPortal(children, el)
}

export interface F0MapMarkersLayerProps {
  map: maplibregl.Map
  points: F0MapPoint[]
  selectedId: string | null
  /** Emphasised (not selected) marker: floats above and keeps its label. */
  highlightedId?: string | null
  onSelect: (id: string) => void
}

export const F0MapMarkersLayer = ({
  map,
  points,
  selectedId,
  highlightedId,
  onSelect,
}: F0MapMarkersLayerProps) => {
  const i18n = useI18n()
  const reduceMotion = useReducedMotion()
  // Clustering is always on - markers gather when zoomed out and separate as
  // you zoom in. It is intrinsic to the map, not a mode the caller opts into.
  const { clusters, singles } = useClusters(map, points, true)
  // Markers bump one size step up once POI names appear (see POI_LABEL_ZOOM).
  const poiZoom = useZoomAtLeast(map, POI_LABEL_ZOOM)
  const sizeStep: BaseMapMarkerSize = poiZoom ? "lg" : "md"
  // Only the un-clustered points participate in label collision.
  const placements = useLabelCollision(map, singles, sizeStep)

  const pointById = new Map(points.map((p) => [p.id, p]))
  // While any cluster is on screen, drop the leftover single markers' labels -
  // a pile plus a ring of labelled dots reads as clutter. Labels return once you
  // zoom in far enough that the clusters break apart (and for the selection).
  const hasClusters = clusters.length > 0

  // Fold any single marker sitting under the selected marker's enlarged head or
  // dropped label down to a dot, so the active marker never clashes with a
  // neighbour.
  const selectedPoint = selectedId ? pointById.get(selectedId) : undefined
  const collapsedIds = useSelectionCollapse(
    map,
    selectedPoint,
    singles,
    sizeStep
  )

  return (
    // One AnimatePresence over both lists so a single leaving (becoming a
    // cluster) fades out while the cluster fades in - a soft crossfade.
    <AnimatePresence>
      {clusters.map((c) => (
        <MapMarkerPortal
          key={c.id}
          map={map}
          coordinates={c.coordinates}
          selected={false}
        >
          {/* Cluster pops in - scales up from 0.8 with a slight overshoot - a
              touch slower than a marker fades out, so the pile springs in just
              after the pins have cleared. (Markers themselves only diffuse.)
              This is the cluster's ONLY mount animation - the component itself
              doesn't animate, so the two never stack. */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.12 } }}
            transition={{ duration: 0.3, ease: [0.34, 1.7, 0.5, 1] }}
            className="flex leading-none"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            <F0MapCluster
              count={c.count}
              members={c.pointIds
                .map((id) => pointById.get(id))
                .filter((p): p is F0MapPoint => Boolean(p))
                .map(variantProps)}
              onClick={() => expandCluster(map, c.bounds, reduceMotion)}
            />
          </motion.span>
        </MapMarkerPortal>
      ))}
      {singles.map((point) => {
        // `null` = the collision pass found no side that fits: degrade to a
        // marker without its label (never merge - merging is clustering's job).
        const placement = placements[point.id]
        const collapsed = collapsedIds?.has(point.id) ?? false
        const highlighted = highlightedId === point.id
        return (
          <MapMarkerPortal
            key={point.id}
            map={map}
            coordinates={point.coordinates}
            selected={selectedId === point.id || highlighted}
          >
            {/* Diffuse in on appear (a soft dissolve, no scale); on becoming a
                cluster, fade out fast - quicker than the cluster fades in.
                Inner AnimatePresence still crossfades the size step. */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.12, ease: "easeIn" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ position: "absolute", left: 0, top: 0 }}
            >
              <AnimatePresence initial={false}>
                <motion.span
                  key={sizeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  // `flex` + zero line-height: without it the marker's
                  // inline-flex root sits on a text baseline, offsetting the
                  // head from the origin.
                  className="flex leading-none"
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <F0MapMarker
                    {...variantProps(point)}
                    size={sizeStep}
                    label={point.label}
                    showLabel={
                      selectedId === point.id ||
                      highlighted ||
                      (!hasClusters && placement !== null)
                    }
                    labelPlacement={placement ?? "right"}
                    selected={selectedId === point.id}
                    collapsed={collapsed}
                    onClick={() => onSelect(point.id)}
                    // A marker whose label is hidden would otherwise be an
                    // unnamed button.
                    ariaLabel={point.label ?? i18n.map.unnamedLocation}
                  />
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </MapMarkerPortal>
        )
      })}
    </AnimatePresence>
  )
}
