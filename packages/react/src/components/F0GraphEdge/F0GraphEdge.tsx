import {
  BaseEdge,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  type EdgeProps,
} from "@xyflow/react"

import type { F0GraphEdgeProps } from "./types"

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

export function F0GraphEdge({
  variant = "default",
  animated = false,
  strokeWidth: propStrokeWidth = 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- React Flow passes `type` as the edge type key (e.g. "graphEdge"), ignore it
  type: _rfType,
  ...edgeProps
}: F0GraphEdgeProps & EdgeProps) {
  const strokeWidth =
    (edgeProps.style?.strokeWidth as number | undefined) ?? propStrokeWidth
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
  const showDot = edgeProps.data?.showDot !== false

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

F0GraphEdge.displayName = "F0GraphEdge"
