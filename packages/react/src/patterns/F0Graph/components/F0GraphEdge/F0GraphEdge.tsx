import {
  BaseEdge,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  type EdgeProps,
} from "@xyflow/react"
import { memo } from "react"

import type { EdgeVariant, F0GraphEdgeProps } from "./types"

import { useF0GraphZoomInternal } from "../../contexts"

// Semantic edge stroke colors. Defined as CSS vars on .f0-graph in
// F0Graph.css so they flip automatically in dark mode and stay aligned
// with the f1Colors token map.
const strokeColors = {
  default: "var(--f0-graph-edge-default)", // f1-border
  hover: "var(--f0-graph-edge-hover)", // f1-border-hover
  highlighted: "var(--f0-graph-edge-highlighted)", // f1-border-selected-bold (viridian secondary)
  dimmed: "var(--f0-graph-edge-default)",
} as const

const MARKER_ID = "f0-edge-dot"
const MARKER_SIZE = 5

const pathGetters = {
  smoothstep: getSmoothStepPath,
  straight: getStraightPath,
  bezier: getBezierPath,
} as const

export function F0GraphEdgeBase({
  variant: variantProp,
  strokeWidth: propStrokeWidth = 1,
  pathType: pathTypeProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- React Flow passes `type` as the edge type key (e.g. "graphEdge"), ignore it
  type: _rfType,
  ...edgeProps
}: F0GraphEdgeProps & EdgeProps) {
  // When F0GraphEdgeBase is registered directly as a React Flow edge type
  // (the default path, no `renderEdge` override), RF passes only raw
  // EdgeProps — `variant` is not a top-level prop, it lives in `data.variant`.
  // Fall back to `data.variant` so all four variants render their distinct
  // stroke colors instead of always defaulting to "default".
  const variantData = (edgeProps.data as { variant?: EdgeVariant } | undefined)
    ?.variant
  const variant: EdgeVariant = variantProp ?? variantData ?? "default"
  // Derive stroke width from zoom context (Fix 4) with fallback to prop/style
  const zoomCtx = useF0GraphZoomInternal()
  const zoomDerivedStrokeWidth = zoomCtx
    ? zoomCtx.zoomLevel === "detail"
      ? 1
      : zoomCtx.zoomLevel === "compact"
        ? 2
        : 4
    : undefined
  const strokeWidth =
    zoomDerivedStrokeWidth ??
    (edgeProps.style?.strokeWidth as number | undefined) ??
    propStrokeWidth
  const showDot = edgeProps.data?.showDot !== false
  const pathType =
    pathTypeProp ??
    (edgeProps.data?.pathType as keyof typeof pathGetters | undefined) ??
    "smoothstep"

  // When source and target are nearly aligned on the cross-axis,
  // use a straight line to avoid smoothstep introducing a tiny jog ("wiggle")
  const isVertical =
    edgeProps.sourcePosition === "bottom" || edgeProps.sourcePosition === "top"
  const crossAxisDelta = isVertical
    ? Math.abs(edgeProps.sourceX - edgeProps.targetX)
    : Math.abs(edgeProps.sourceY - edgeProps.targetY)
  const usesStraightSnap = crossAxisDelta < 2

  const getPath = usesStraightSnap
    ? getStraightPath
    : (pathGetters[pathType] ?? pathGetters.smoothstep)
  const [edgePath] = getPath({
    sourceX: edgeProps.sourceX,
    sourceY: edgeProps.sourceY,
    targetX: edgeProps.targetX,
    targetY: edgeProps.targetY,
    sourcePosition: edgeProps.sourcePosition,
    targetPosition: edgeProps.targetPosition,
    borderRadius: 10,
  })

  const color = strokeColors[variant]

  return (
    <>
      {showDot && (
        <defs>
          <marker
            id={`${MARKER_ID}-${edgeProps.id}`}
            viewBox={`0 0 ${MARKER_SIZE * 2} ${MARKER_SIZE * 2}`}
            refX={MARKER_SIZE}
            refY={MARKER_SIZE}
            markerWidth={MARKER_SIZE}
            markerHeight={MARKER_SIZE}
          >
            <circle
              cx={MARKER_SIZE}
              cy={MARKER_SIZE}
              r={MARKER_SIZE * 0.8}
              fill={color}
            />
          </marker>
        </defs>
      )}
      <BaseEdge
        id={edgeProps.id}
        path={edgePath}
        markerEnd={showDot ? `url(#${MARKER_ID}-${edgeProps.id})` : undefined}
        style={{
          stroke: color,
          strokeWidth,
          opacity: variant === "dimmed" ? 0.5 : undefined,
        }}
      />
    </>
  )
}

F0GraphEdgeBase.displayName = "F0GraphEdge"

export const F0GraphEdge = memo(F0GraphEdgeBase, (prev, next) => {
  if (prev.id !== next.id) return false
  if (prev.variant !== next.variant) return false
  if (prev.strokeWidth !== next.strokeWidth) return false
  if (prev.data?.variant !== next.data?.variant) return false
  if (prev.data?.showDot !== next.data?.showDot) return false
  if (prev.data?.pathType !== next.data?.pathType) return false
  if (prev.style?.strokeWidth !== next.style?.strokeWidth) return false
  if (prev.sourceX !== next.sourceX) return false
  if (prev.sourceY !== next.sourceY) return false
  if (prev.targetX !== next.targetX) return false
  if (prev.targetY !== next.targetY) return false
  if (prev.sourcePosition !== next.sourcePosition) return false
  if (prev.targetPosition !== next.targetPosition) return false
  return true
})

F0GraphEdge.displayName = "F0GraphEdge"
