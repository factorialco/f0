import { type Viewport, useReactFlow, useStoreApi } from "@xyflow/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { FIT_VIEW_PADDING_LOOSE, FIT_VIEW_PADDING_TIGHT } from "../constants"
import type {
  PositionedNode,
  ViewportInset,
  ZoomLevel,
  ZoomPreset,
  ZoomThresholds,
} from "../types"
import { useGraphZoomLevel } from "./useGraphZoomLevel"

interface UseGraphViewportOptions {
  defaultZoom: number
  zoomPreset?: ZoomPreset
  zoomThresholds?: ZoomThresholds
  currentUserNodeId?: string
  onZoomLevelChange?: (level: ZoomLevel) => void
  onViewportChange?: (viewport: { x: number; y: number; zoom: number }) => void
  /**
   * When node-array windowing is active, off-screen nodes aren't in React
   * Flow's store, so id-based `fitView` can't target them. These let navigation
   * fall back to the full layout: `fitBounds` for fit-all, `setCenter` for
   * fly-to. Omitted (windowing off) → the plain React Flow paths are used.
   */
  nodeWindowingActive?: boolean
  getContentBounds?: () => {
    x: number
    y: number
    width: number
    height: number
  } | null
  getNodePosition?: (id: string) => PositionedNode | undefined
  /**
   * Region of the canvas (screen px) occluded by external chrome (a side panel).
   * All fly-to paths shift their target so the node lands in the free area. Read
   * through a ref so it never changes the handlers' identity.
   */
  viewportInset?: ViewportInset
}

export interface UseGraphViewportResult {
  /**
   * Derived, DISCRETE zoom step. The continuous zoom factor is deliberately not
   * exposed: it changes every zoom frame, and anything that renders from it
   * re-renders at frame rate. Consumers that need to react to zoom want this.
   */
  zoomLevel: ZoomLevel
  /**
   * True once React Flow has emitted its first viewport update (i.e. the
   * initial `fitView` has settled). Node-array windowing waits for this so the
   * mount-time fit sees every node and frames the whole graph before the
   * camera starts driving which nodes are materialized.
   */
  viewportReady: boolean
  handleViewportChange: (vp: Viewport) => void
  handleZoomIn: () => void
  handleZoomOut: () => void
  handleFitView: () => void
  handleFocusUser: () => void
  /**
   * Fly to a node using its full-layout position, so it works even when the
   * node is windowed out of React Flow's store. Centers the node in the free
   * region when a `viewportInset` is set. `zoom` defaults to the graph's
   * `defaultZoom`. Returns false if the position is unknown (caller should fall
   * back to an id-based fit).
   */
  centerOnNode: (nodeId: string, duration: number, zoom?: number) => boolean
  /**
   * Build a React Flow `fitView` padding that layers the current `viewportInset`
   * on top of a symmetric base fraction, so id-based fits also clear the panel.
   * Returns the plain `base` (identical to before) when there is no inset.
   */
  getFitPadding: (base: number) => number | ViewportInsetPadding
  /** True when a non-zero `viewportInset` is currently set. */
  hasViewportInset: boolean
}

/** Per-side fitView padding (fractions), returned by {@link getFitPadding}. */
interface ViewportInsetPadding {
  top: number
  right: number
  bottom: number
  left: number
}

/** True when any side of the inset actually occludes part of the canvas. */
function insetOccludes(inset?: ViewportInset): boolean {
  return (
    !!inset &&
    ((inset.top ?? 0) > 0 ||
      (inset.right ?? 0) > 0 ||
      (inset.bottom ?? 0) > 0 ||
      (inset.left ?? 0) > 0)
  )
}

/**
 * Tracks the viewport zoom (and derived discrete `zoomLevel`), fires the
 * zoom-level / viewport change callbacks, and exposes the control-bar handlers
 * (zoom in/out, fit, find-me).
 */
export function useGraphViewport({
  defaultZoom,
  zoomPreset,
  zoomThresholds,
  currentUserNodeId,
  onZoomLevelChange,
  onViewportChange,
  nodeWindowingActive = false,
  getContentBounds,
  getNodePosition,
  viewportInset,
}: UseGraphViewportOptions): UseGraphViewportResult {
  const reactFlow = useReactFlow()
  const storeApi = useStoreApi()

  // Read the inset through a ref so the fly-to handlers keep a stable identity
  // even when the consumer passes a fresh object every render (the careful
  // `centerOnNode` identity guarantees the fly effects rely on must not churn).
  const insetRef = useRef(viewportInset)
  insetRef.current = viewportInset
  const hasViewportInset = insetOccludes(viewportInset)

  // Viewport zoom (tracked via onViewportChange to avoid useViewport churn).
  const [currentZoom, setCurrentZoom] = useState(defaultZoom)

  const zoomLevel = useGraphZoomLevel(currentZoom, {
    preset: zoomPreset,
    thresholds: zoomThresholds,
  })

  const prevZoomLevel = useRef(zoomLevel)
  useEffect(() => {
    if (prevZoomLevel.current !== zoomLevel) {
      prevZoomLevel.current = zoomLevel
      onZoomLevelChange?.(zoomLevel)
    }
  }, [zoomLevel, onZoomLevelChange])

  const [viewportReady, setViewportReady] = useState(false)

  // React Flow calls this on every camera frame. Both setters used to run
  // unconditionally, and React only *may* skip re-rendering when a state value
  // is unchanged — it can still re-run the component body once before bailing
  // out. Measured on a 4s pan: 180 renders of F0GraphView against 81 actual
  // value changes, the ~100 remainder being these no-op writes (during a pan the
  // zoom never changes, and `viewportReady` is already true after the first
  // frame). The refs make the no-op case cost nothing.
  const viewportReadyRef = useRef(false)
  const zoomRef = useRef(defaultZoom)

  const handleViewportChange = useCallback(
    (vp: Viewport) => {
      if (!viewportReadyRef.current) {
        viewportReadyRef.current = true
        setViewportReady(true)
      }
      if (vp.zoom !== zoomRef.current) {
        zoomRef.current = vp.zoom
        setCurrentZoom(vp.zoom)
      }
      onViewportChange?.({ x: vp.x, y: vp.y, zoom: vp.zoom })
    },
    [onViewportChange]
  )

  const handleZoomIn = useCallback(() => {
    reactFlow.zoomIn({ duration: 300 })
  }, [reactFlow])

  const handleZoomOut = useCallback(() => {
    reactFlow.zoomOut({ duration: 300 })
  }, [reactFlow])

  // Layer the current inset (screen px) onto a symmetric base fraction, so
  // id-based fits frame their content in the free area rather than behind the
  // panel. Each side's px is converted to a fraction of the container dimension
  // it applies to (width for left/right, height for top/bottom) and added to the
  // base. With no inset, returns the plain `base` — byte-for-byte the old call.
  const getFitPadding = useCallback(
    (base: number): number | ViewportInsetPadding => {
      const inset = insetRef.current
      if (!insetOccludes(inset)) return base
      const { width, height } = storeApi.getState()
      const fx = width > 0 ? width : 1
      const fy = height > 0 ? height : 1
      return {
        top: base + (inset!.top ?? 0) / fy,
        right: base + (inset!.right ?? 0) / fx,
        bottom: base + (inset!.bottom ?? 0) / fy,
        left: base + (inset!.left ?? 0) / fx,
      }
    },
    [storeApi]
  )

  const handleFitView = useCallback(() => {
    // Windowing: the store only holds on-screen nodes, so id-less fitView would
    // fit the window, not the graph. Fit the full layout bounds instead.
    const bounds = nodeWindowingActive ? getContentBounds?.() : null
    if (bounds) {
      reactFlow.fitBounds(bounds, {
        duration: 400,
        padding: getFitPadding(FIT_VIEW_PADDING_TIGHT),
      })
      return
    }
    reactFlow.fitView({
      duration: 400,
      padding: getFitPadding(FIT_VIEW_PADDING_TIGHT),
    })
  }, [reactFlow, nodeWindowingActive, getContentBounds, getFitPadding])

  // Fly to a node by its full-layout position (works even when windowing has
  // dropped it from React Flow's store). Returns false when the position is
  // unknown so callers can fall back to an id-based fitView.
  //
  // `zoom` defaults to `defaultZoom` (the graph's initial zoom) rather than
  // keeping whatever the user had panned/zoomed to: navigating to a person
  // ("Find me" / search reveal) should land on the initial org-chart zoom state,
  // not stay stuck at an arbitrary deep zoom. The click path passes a closer zoom.
  //
  // When a `viewportInset` is set, the target is shifted so the node lands in the
  // middle of the region NOT covered by the panel: a right-hand panel moves the
  // target right by half its width (in flow units), so the node ends up centered
  // in the visible area beside it. The side is encoded by the inset keys, so RTL
  // is just a `left` inset — no extra direction handling here.
  const centerOnNode = useCallback(
    (nodeId: string, duration: number, zoom: number = defaultZoom): boolean => {
      const pos = getNodePosition?.(nodeId)
      if (!pos) return false
      const inset = insetRef.current
      const shiftX = ((inset?.right ?? 0) - (inset?.left ?? 0)) / 2 / zoom
      const shiftY = ((inset?.bottom ?? 0) - (inset?.top ?? 0)) / 2 / zoom
      reactFlow.setCenter(
        pos.x + pos.width / 2 + shiftX,
        pos.y + pos.height / 2 + shiftY,
        { duration, zoom }
      )
      return true
    },
    [reactFlow, getNodePosition, defaultZoom]
  )

  const handleFocusUser = useCallback(() => {
    if (!currentUserNodeId) return
    // Windowing: the target may be off-screen and absent from the store, so
    // center on its layout position instead of an id-based fitView.
    if (nodeWindowingActive && centerOnNode(currentUserNodeId, 400)) return
    reactFlow.fitView({
      nodes: [{ id: currentUserNodeId }],
      duration: 400,
      padding: getFitPadding(FIT_VIEW_PADDING_LOOSE),
    })
  }, [
    currentUserNodeId,
    reactFlow,
    nodeWindowingActive,
    centerOnNode,
    getFitPadding,
  ])

  return {
    zoomLevel,
    viewportReady,
    handleViewportChange,
    handleZoomIn,
    handleZoomOut,
    handleFitView,
    handleFocusUser,
    centerOnNode,
    getFitPadding,
    hasViewportInset,
  }
}
