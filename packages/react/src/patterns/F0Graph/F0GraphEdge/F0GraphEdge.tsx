import {
  BaseEdge,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  type EdgeProps,
} from "@xyflow/react"
import { memo } from "react"

import type { F0GraphEdgeProps } from "./types"

import { useF0GraphZoomInternal } from "../context/zoom"

// Opaque equivalents of alpha tokens (pre-blended on white) to avoid
// intersection artifacts from per-edge compositing.
const strokeColors = {
  default: "#CDD4DD", // neutral-30 (rgba(5,38,87,0.20)) on white
  highlighted: "hsl(var(--neutral-100))",
  dimmed: "#CDD4DD",
} as const

const MARKER_ID = "f0-edge-dot"
const MARKER_SIZE = 5

const pathGetters = {
  smoothstep: getSmoothStepPath,
  straight: getStraightPath,
  bezier: getBezierPath,
} as const

export function F0GraphEdgeInner({
  variant = "default",
  animated = false,
  strokeWidth: propStrokeWidth = 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- React Flow passes `type` as the edge type key (e.g. "graphEdge"), ignore it
  type: _rfType,
  ...edgeProps
}: F0GraphEdgeProps & EdgeProps) {
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
    (edgeProps.data?.pathType as keyof typeof pathGetters) ?? "smoothstep"

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
          opacity: variant === "dimmed" ? 0.3 : undefined,
          animation: animated ? "f0-edge-flow 1s linear infinite" : undefined,
        }}
      />
    </>
  )
}

F0GraphEdgeInner.displayName = "F0GraphEdge"

export const F0GraphEdge = memo(F0GraphEdgeInner, (prev, next) => {
  if (prev.id !== next.id) return false
  if (prev.data?.showDot !== next.data?.showDot) return false
  if (prev.sourceX !== next.sourceX) return false
  if (prev.sourceY !== next.sourceY) return false
  if (prev.targetX !== next.targetX) return false
  if (prev.targetY !== next.targetY) return false
  if (prev.sourcePosition !== next.sourcePosition) return false
  if (prev.targetPosition !== next.targetPosition) return false
  return true
})

F0GraphEdge.displayName = "F0GraphEdge"
