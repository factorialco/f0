import { useCallback, useMemo, useRef, useState } from "react"

import type { NormalizedGrammar, OrgChartGrammar } from "./types"
import { buildTreeLayout, type TreeNode } from "./lib/layout"
import { buildColorMap, buildScale } from "./lib/colors"
import { normalizeGrammar } from "./lib/grammar"
import { OrgChartNode } from "./OrgChartNode"

interface OrgChartEngineProps {
  data: Record<string, unknown>[]
  grammar: OrgChartGrammar
}

function isHorizontal(
  orientation: OrgChartGrammar["layout"]["orientation"]
): boolean {
  return orientation === "left-to-right" || orientation === "right-to-left"
}

/**
 * Evaluate a simple conditional expression against row data.
 * Supports: field > value, field < value, field >= value, field <= value,
 * field == value, field != value (where value is number, string, or boolean)
 */
function evaluateCondition(
  condition: string,
  data: Record<string, unknown>
): boolean {
  const ops = [">=", "<=", "!=", "==", ">", "<"]
  for (const op of ops) {
    const idx = condition.indexOf(op)
    if (idx === -1) continue
    const left = condition.slice(0, idx).trim()
    const right = condition.slice(idx + op.length).trim()
    const leftVal = data[left]
    const rightVal =
      right === "true"
        ? true
        : right === "false"
          ? false
          : right === "null"
            ? null
            : !Number.isNaN(Number(right)) && right !== ""
              ? Number(right)
              : right.replace(/^["']|["']$/g, "")
    switch (op) {
      case ">=":
        return Number(leftVal) >= Number(rightVal)
      case "<=":
        return Number(leftVal) <= Number(rightVal)
      case "!=":
        return leftVal !== rightVal
      case "==":
        return leftVal === rightVal
      case ">":
        return Number(leftVal) > Number(rightVal)
      case "<":
        return Number(leftVal) < Number(rightVal)
    }
  }
  return false
}

function buildTooltipTitle(
  data: Record<string, unknown>,
  tooltipConfig: Array<{ column: string; label?: string }> | undefined
): string | undefined {
  if (!tooltipConfig || tooltipConfig.length === 0) return undefined
  return tooltipConfig
    .map(({ column, label }) => {
      const value = data[column]
      const displayValue =
        value == null
          ? "—"
          : typeof value === "boolean"
            ? value
              ? "Yes"
              : "No"
            : String(value)
      return `${label ?? column}: ${displayValue}`
    })
    .join("\n")
}

function transformPoint(
  x: number,
  y: number,
  orientation: OrgChartGrammar["layout"]["orientation"],
  _nodeWidth: number,
  nodeHeight: number
): { x: number; y: number } {
  switch (orientation) {
    case "left-to-right":
      return { x: y + nodeHeight, y: x }
    case "right-to-left":
      return { x: -(y + nodeHeight), y: x }
    case "bottom-up":
      return { x, y: -(y + nodeHeight) }
    case "top-down":
    default:
      return { x, y }
  }
}

function getEdgePath(
  parent: TreeNode,
  child: TreeNode,
  style: NormalizedGrammar["edges"]["style"],
  nodeWidth: number,
  nodeHeight: number,
  orientation: NormalizedGrammar["layout"]["orientation"]
): string {
  const horizontal = isHorizontal(orientation)
  const pw = horizontal ? nodeHeight : nodeWidth
  const ph = horizontal ? nodeWidth : nodeHeight

  const p = transformPoint(parent.x, parent.y, orientation, pw, ph)
  const c = transformPoint(child.x, child.y, orientation, pw, ph)

  const px = p.x + (horizontal ? ph : pw) / 2
  const py = p.y + (horizontal ? pw : ph)
  const cx = c.x + (horizontal ? ph : pw) / 2
  const cy = c.y

  switch (style) {
    case "straight":
      return `M ${px} ${py} L ${cx} ${cy}`
    case "orthogonal": {
      const midY = (py + cy) / 2
      return `M ${px} ${py} L ${px} ${midY} L ${cx} ${midY} L ${cx} ${cy}`
    }
    case "step": {
      return `M ${px} ${py} L ${px} ${cy} L ${cx} ${cy}`
    }
    case "bezier":
    default: {
      const dy = cy - py
      const c1y = py + dy * 0.5
      const c2y = cy - dy * 0.5
      return `M ${px} ${py} C ${px} ${c1y}, ${cx} ${c2y}, ${cx} ${cy}`
    }
  }
}

export function OrgChartEngine({
  data,
  grammar: rawGrammar,
}: OrgChartEngineProps) {
  const grammar = useMemo(
    () => normalizeGrammar(rawGrammar) as NormalizedGrammar,
    [rawGrammar]
  )
  const svgRef = useRef<SVGSVGElement>(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [collapsed, setCollapsed] = useState<Set<string>>(() => {
    const s = new Set<string>()
    if (
      grammar.interactivity.collapsible &&
      grammar.interactivity.initialDepth !== undefined
    ) {
      const maxDepth = grammar.interactivity.initialDepth
      const nodes = buildTreeLayout(data, "id", "managerId", grammar.layout)
      for (const node of nodes) {
        if (node.depth >= maxDepth) {
          s.add(node.id)
        }
      }
    }
    return s
  })
  const dragRef = useRef<{
    active: boolean
    startX: number
    startY: number
    panX: number
    panY: number
  } | null>(null)

  const visibleData = useMemo(() => {
    if (collapsed.size === 0) return data
    const visible = new Set<string>()

    function walk(id: string | null) {
      if (id === null) {
        for (const row of data) {
          if (row.managerId == null || row.managerId === "") {
            visible.add(String(row.id))
            if (!collapsed.has(String(row.id))) {
              walk(String(row.id))
            }
          }
        }
        return
      }
      for (const row of data) {
        if (String(row.managerId) === id) {
          visible.add(String(row.id))
          if (!collapsed.has(String(row.id))) {
            walk(String(row.id))
          }
        }
      }
    }

    walk(null)
    return data.filter((r) => visible.has(String(r.id)))
  }, [data, collapsed])

  const nodes = useMemo(
    () => buildTreeLayout(visibleData, "id", "managerId", grammar.layout),
    [visibleData, grammar.layout]
  )

  const bounds = useMemo(() => {
    if (nodes.length === 0) {
      return { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 }
    }
    const horizontal = isHorizontal(grammar.layout.orientation)
    let minX = Infinity
    let minY = Infinity
    let maxX = -Infinity
    let maxY = -Infinity

    for (const node of nodes) {
      const pos = transformPoint(
        node.x,
        node.y,
        grammar.layout.orientation,
        grammar.layout.nodeWidth,
        grammar.layout.nodeHeight
      )
      minX = Math.min(minX, pos.x)
      minY = Math.min(minY, pos.y)
      maxX = Math.max(
        maxX,
        pos.x +
          (horizontal ? grammar.layout.nodeHeight : grammar.layout.nodeWidth)
      )
      maxY = Math.max(
        maxY,
        pos.y +
          (horizontal ? grammar.layout.nodeWidth : grammar.layout.nodeHeight)
      )
    }

    return {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY,
    }
  }, [nodes, grammar.layout])

  const colorMap = useMemo(() => {
    const encoding = grammar.visualEncoding?.colorBy
    if (!encoding) return undefined
    const values = data.map(
      (r) => r[encoding.field] as string | number | null | undefined
    )
    return buildColorMap(values, encoding.palette ?? "categorical")
  }, [data, grammar.visualEncoding?.colorBy])

  const sizeScale = useMemo(() => {
    const encoding = grammar.visualEncoding?.sizeBy
    if (!encoding) return () => 1
    const values = data
      .map((r) => Number(r[encoding.field]))
      .filter((v) => !Number.isNaN(v))
    return buildScale(values, encoding.range)
  }, [data, grammar.visualEncoding?.sizeBy])

  const opacityScale = useMemo(() => {
    const encoding = grammar.visualEncoding?.opacityBy
    if (!encoding) return () => 1
    const values = data
      .map((r) => Number(r[encoding.field]))
      .filter((v) => !Number.isNaN(v))
    return buildScale(values, encoding.range)
  }, [data, grammar.visualEncoding?.opacityBy])

  const padding = 60
  const viewBoxWidth = Math.max(
    bounds.width + padding * 2,
    grammar.layout.nodeWidth + padding * 2
  )
  const viewBoxHeight = Math.max(
    bounds.height + padding * 2,
    grammar.layout.nodeHeight + padding * 2
  )
  const viewBoxX = bounds.minX - padding
  const viewBoxY = bounds.minY - padding

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!grammar.interactivity.zoom) return
      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.9 : 1.1
      setZoom((z) => Math.min(Math.max(z * delta, 0.1), 5))
    },
    [grammar.interactivity.zoom]
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!grammar.interactivity.pan) return
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        panX: pan.x,
        panY: pan.y,
      }
    },
    [grammar.interactivity.pan, pan]
  )

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragRef.current?.active) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    setPan({
      x: dragRef.current.panX + dx,
      y: dragRef.current.panY + dy,
    })
  }, [])

  const handleMouseUp = useCallback(() => {
    if (dragRef.current) {
      dragRef.current.active = false
    }
  }, [])

  const toggleCollapse = useCallback(
    (id: string) => {
      if (!grammar.interactivity.collapsible) return
      setCollapsed((prev) => {
        const next = new Set(prev)
        if (next.has(id)) {
          next.delete(id)
        } else {
          next.add(id)
        }
        return next
      })
    },
    [grammar.interactivity.collapsible]
  )

  const nodeById = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes])

  const visibleEdges = useMemo(() => {
    const edges: Array<{ parent: TreeNode; child: TreeNode }> = []
    for (const node of nodes) {
      if (
        node.parent &&
        nodeById.has(node.parent.id) &&
        nodeById.has(node.id)
      ) {
        edges.push({ parent: node.parent, child: node })
      }
    }
    return edges
  }, [nodes, nodeById])

  return (
    <div className="h-full w-full overflow-hidden relative bg-f1-background-secondary">
      <svg
        ref={svgRef}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <defs>
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -20; }
            }
            .animated-edge {
              stroke-dasharray: 5 5;
              animation: dash 1s linear infinite;
            }
          `}</style>
        </defs>
        <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
          {/* Edges */}
          {visibleEdges.map(({ parent, child }) => (
            <path
              key={`edge-${parent.id}-${child.id}`}
              className={grammar.edges.animated ? "animated-edge" : undefined}
              d={getEdgePath(
                parent,
                child,
                grammar.edges.style,
                grammar.layout.nodeWidth,
                grammar.layout.nodeHeight,
                grammar.layout.orientation
              )}
              fill="none"
              stroke={grammar.edges.color ?? "#cbd5e1"}
              strokeWidth={grammar.edges.width ?? 2}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node) => {
            const colorField =
              grammar.nodes.background?.colorBy ??
              grammar.visualEncoding?.colorBy?.field
            const bgColor = colorField
              ? colorMap?.get(node.data[colorField] as string | number)
              : grammar.nodes.background?.color
            const borderColor = grammar.nodes.border?.colorBy
              ? colorMap?.get(
                  node.data[grammar.nodes.border.colorBy] as string | number
                )
              : grammar.nodes.border?.color
            const scale =
              sizeScale(
                Number(
                  node.data[grammar.visualEncoding?.sizeBy?.field ?? ""] ?? 0
                )
              ) || 1
            const opacity =
              opacityScale(
                Number(
                  node.data[grammar.visualEncoding?.opacityBy?.field ?? ""] ?? 0
                )
              ) || 1
            const hasChildren = node.children.length > 0

            // Apply conditional styles
            let conditionalBg = bgColor
            let conditionalBorder = borderColor
            let conditionalBorderWidth = grammar.nodes.border?.width
            for (const style of grammar.nodes.conditionalStyles ?? []) {
              if (evaluateCondition(style.condition, node.data)) {
                if (style.backgroundColor) conditionalBg = style.backgroundColor
                if (style.borderColor) conditionalBorder = style.borderColor
                if (style.borderWidth)
                  conditionalBorderWidth = style.borderWidth
              }
            }

            const tooltipTitle = buildTooltipTitle(
              node.data,
              grammar.interactivity.tooltip
            )

            const pos = transformPoint(
              node.x,
              node.y,
              grammar.layout.orientation,
              grammar.layout.nodeWidth,
              grammar.layout.nodeHeight
            )

            const renderWidth = grammar.layout.nodeWidth * scale
            const renderHeight = grammar.layout.nodeHeight * scale

            return (
              <g
                key={node.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                opacity={opacity}
                onClick={() => toggleCollapse(node.id)}
                className="cursor-pointer"
              >
                {tooltipTitle && <title>{tooltipTitle}</title>}
                <foreignObject
                  x={0}
                  y={0}
                  width={renderWidth}
                  height={renderHeight}
                >
                  <OrgChartNode
                    data={node.data}
                    fields={grammar.nodes.fields}
                    overlays={grammar.overlays}
                    backgroundColor={conditionalBg}
                    borderColor={conditionalBorder}
                    borderWidth={conditionalBorderWidth}
                    nodeWidth={grammar.layout.nodeWidth}
                    nodeHeight={grammar.layout.nodeHeight}
                    scale={scale}
                  />
                </foreignObject>
                {hasChildren && grammar.interactivity.collapsible && (
                  <g
                    transform={`translate(${renderWidth / 2 - 8}, ${renderHeight - 8})`}
                  >
                    <circle
                      r="8"
                      fill="white"
                      stroke="#94a3b8"
                      strokeWidth={1.5}
                    />
                    <text
                      y={1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={10}
                      fill="#64748b"
                      fontWeight="bold"
                    >
                      {collapsed.has(node.id) ? "+" : "−"}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </g>
      </svg>

      {/* Zoom controls */}
      {(grammar.interactivity.zoom || grammar.interactivity.pan) && (
        <div className="absolute bottom-4 right-4 flex flex-col gap-1">
          {grammar.interactivity.zoom && (
            <>
              <button
                className="w-8 h-8 rounded bg-white shadow border border-f1-border text-f1-foreground hover:bg-f1-background-secondary flex items-center justify-center text-sm font-bold"
                onClick={() => setZoom((z) => Math.min(z * 1.2, 5))}
              >
                +
              </button>
              <button
                className="w-8 h-8 rounded bg-white shadow border border-f1-border text-f1-foreground hover:bg-f1-background-secondary flex items-center justify-center text-sm font-bold"
                onClick={() => setZoom((z) => Math.max(z / 1.2, 0.1))}
              >
                −
              </button>
            </>
          )}
          <button
            className="w-8 h-8 rounded bg-white shadow border border-f1-border text-f1-foreground hover:bg-f1-background-secondary flex items-center justify-center text-xs"
            onClick={() => {
              setZoom(1)
              setPan({ x: 0, y: 0 })
            }}
          >
            ⌖
          </button>
        </div>
      )}
    </div>
  )
}
