import { useCallback, useMemo, useRef, useState } from "react"

import type { DynamicVisualizationGrammar, OrgVisualizationSpec } from "./types"
import { buildColorMap, buildScale } from "./lib/colors"
import { normalizeOrgSpec } from "./lib/grammar"
import { runLayout } from "./lib/layouts"
import type { PositionedElement } from "./lib/layouts"
import { OrgChartNode } from "./OrgChartNode"

interface DynamicVisualizationEngineProps {
  data: Record<string, unknown>[]
  spec: OrgVisualizationSpec | DynamicVisualizationGrammar
}

const READABLE_VIEWBOX_WIDTH = 1200
const READABLE_VIEWBOX_HEIGHT = 700

function clamp(value: number, min: number, max: number): number {
  if (max < min) return min
  return Math.min(Math.max(value, min), max)
}

function getReadableViewBox(params: {
  bounds: {
    minX: number
    minY: number
    maxX: number
    maxY: number
    width: number
    height: number
  }
  elements: PositionedElement[]
  padding: number
  nodeWidth: number
  nodeHeight: number
}): { x: number; y: number; width: number; height: number } {
  const { bounds, elements, padding, nodeWidth, nodeHeight } = params
  const fullWidth = Math.max(
    bounds.width + padding * 2,
    nodeWidth + padding * 2
  )
  const fullHeight = Math.max(
    bounds.height + padding * 2,
    nodeHeight + padding * 2
  )

  if (
    fullWidth <= READABLE_VIEWBOX_WIDTH &&
    fullHeight <= READABLE_VIEWBOX_HEIGHT
  ) {
    return {
      x: bounds.minX - padding,
      y: bounds.minY - padding,
      width: fullWidth,
      height: fullHeight,
    }
  }

  const width = Math.min(fullWidth, READABLE_VIEWBOX_WIDTH)
  const height = Math.min(fullHeight, READABLE_VIEWBOX_HEIGHT)
  const rootElement =
    elements.find((element) => element.type === "node" && !element.parentId) ??
    elements[0]
  const focusX = rootElement
    ? rootElement.x + rootElement.width / 2
    : bounds.minX + bounds.width / 2
  const focusY = rootElement
    ? rootElement.y + rootElement.height / 2
    : bounds.minY + bounds.height / 2
  const minX = bounds.minX - padding
  const maxX = bounds.maxX + padding - width
  const minY = bounds.minY - padding
  const maxY = bounds.maxY + padding - height

  return {
    x: clamp(focusX - width / 2, minX, maxX),
    y: clamp(focusY - height / 2, minY, maxY),
    width,
    height,
  }
}

function getEdgePath(
  parent: PositionedElement,
  child: PositionedElement,
  style: NonNullable<DynamicVisualizationGrammar["edges"]>["style"]
): string {
  const px = parent.x + parent.width / 2
  const py = parent.y + parent.height
  const cx = child.x + child.width / 2
  const cy = child.y

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

export function DynamicVisualizationEngine({
  data,
  spec: rawSpec,
}: DynamicVisualizationEngineProps) {
  const grammar = useMemo(() => normalizeOrgSpec(rawSpec), [rawSpec])
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [selectedElement, setSelectedElement] = useState<PositionedElement>()
  const dragRef = useRef<{
    active: boolean
    startX: number
    startY: number
    panX: number
    panY: number
  } | null>(null)

  // Run layout algorithm
  const layoutResult = useMemo(() => {
    const layoutConfig: Record<string, unknown> = {
      ...grammar.layout,
    }
    return runLayout(grammar.layout.algorithm, data, layoutConfig)
  }, [data, grammar.layout])

  const { elements, bounds } = layoutResult

  // Extract edges from tree layout
  const edges = useMemo(() => {
    if (grammar.layout.algorithm !== "tree") return []
    const firstElement = elements[0]
    if (!firstElement) return []
    return (
      (firstElement.data.__edges as Array<{
        parent: PositionedElement
        child: PositionedElement
      }>) || []
    )
  }, [elements, grammar.layout.algorithm])

  // Color/size/opacity scales
  const colorMap = useMemo(() => {
    const encoding = grammar.visualEncoding?.colorBy
      ? grammar.visualEncoding.colorBy
      : grammar.nodes.background?.colorBy
        ? {
            field: grammar.nodes.background.colorBy,
            palette: "categorical" as const,
          }
        : undefined
    if (!encoding) return undefined
    const values = data.map(
      (r) => r[encoding.field] as string | number | null | undefined
    )
    return buildColorMap(values, encoding.palette ?? "categorical")
  }, [data, grammar.visualEncoding?.colorBy, grammar.nodes.background?.colorBy])

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
  const viewBox = getReadableViewBox({
    bounds,
    elements,
    padding,
    nodeWidth: grammar.nodes.width ?? 220,
    nodeHeight: grammar.nodes.height ?? 100,
  })

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

  return (
    <div className="h-full w-full overflow-hidden relative bg-f1-background-secondary">
      <svg
        className="h-full w-full cursor-grab active:cursor-grabbing"
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
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
          {/* Edges (tree layout only) */}
          {edges.map(({ parent, child }) => (
            <path
              key={`edge-${parent.id}-${child.id}`}
              className={grammar.edges?.animated ? "animated-edge" : undefined}
              d={getEdgePath(parent, child, grammar.edges?.style ?? "bezier")}
              fill="none"
              stroke={grammar.edges?.color ?? "#cbd5e1"}
              strokeWidth={grammar.edges?.width ?? 2}
            />
          ))}

          {/* Elements */}
          {elements.map((element) => {
            if (element.type === "label") {
              return (
                <text
                  key={element.id}
                  x={element.x + element.width / 2}
                  y={element.y + element.height / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-f1-foreground"
                >
                  {(element.data.name as string) ?? ""}
                </text>
              )
            }

            // Node rendering
            const colorField =
              grammar.nodes.background?.colorBy ??
              grammar.visualEncoding?.colorBy?.field
            const bgColor = colorField
              ? colorMap?.get(element.data[colorField] as string | number)
              : grammar.nodes.background?.color
            const borderColor = grammar.nodes.border?.colorBy
              ? colorMap?.get(
                  element.data[grammar.nodes.border.colorBy] as string | number
                )
              : grammar.nodes.border?.color
            const scale =
              sizeScale(
                Number(
                  element.data[grammar.visualEncoding?.sizeBy?.field ?? ""] ?? 0
                )
              ) || 1
            const opacity =
              opacityScale(
                Number(
                  element.data[
                    grammar.visualEncoding?.opacityBy?.field ?? ""
                  ] ?? 0
                )
              ) || 1

            // Apply conditional styles
            let conditionalBg = bgColor
            let conditionalBorder = borderColor
            let conditionalBorderWidth = grammar.nodes.border?.width
            for (const style of grammar.nodes.conditionalStyles ?? []) {
              if (evaluateCondition(style.condition, element.data)) {
                if (style.backgroundColor) conditionalBg = style.backgroundColor
                if (style.borderColor) conditionalBorder = style.borderColor
                if (style.borderWidth)
                  conditionalBorderWidth = style.borderWidth
              }
            }

            const tooltipTitle = buildTooltipTitle(
              element.data,
              grammar.interactivity.tooltip
            )

            const nodeWidth = grammar.nodes.width ?? 220
            const nodeHeight = grammar.nodes.height ?? 100
            const renderWidth = nodeWidth * scale
            const renderHeight = nodeHeight * scale

            return (
              <g
                key={element.id}
                transform={`translate(${element.x}, ${element.y})`}
                opacity={opacity}
                role={grammar.interactivity.tooltip ? "button" : undefined}
                tabIndex={0}
                onClick={(event) => {
                  event.stopPropagation()
                  setSelectedElement(element)
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setSelectedElement(element)
                  }
                }}
              >
                {tooltipTitle && <title>{tooltipTitle}</title>}
                <foreignObject
                  x={0}
                  y={0}
                  width={renderWidth}
                  height={renderHeight}
                >
                  <OrgChartNode
                    data={element.data}
                    fields={grammar.nodes.fields}
                    overlays={grammar.overlays}
                    avatarColumn={grammar.nodes.avatar?.column}
                    backgroundColor={conditionalBg}
                    borderColor={conditionalBorder}
                    borderWidth={conditionalBorderWidth}
                    nodeWidth={nodeWidth}
                    nodeHeight={nodeHeight}
                    scale={scale}
                  />
                </foreignObject>
              </g>
            )
          })}
        </g>
      </svg>

      {selectedElement && (
        <div className="absolute left-4 top-4 max-w-xs rounded-lg border border-f1-border bg-f1-background p-3 text-xs text-f1-foreground shadow-lg">
          <div className="mb-1 font-semibold">
            {String(
              selectedElement.data.fullName ??
                selectedElement.data.personName ??
                selectedElement.data.name ??
                selectedElement.id
            )}
          </div>
          <div className="text-f1-foreground-secondary">
            {String(
              selectedElement.data.jobTitle ??
                selectedElement.data.role ??
                selectedElement.data.team ??
                "Selected node"
            )}
          </div>
        </div>
      )}

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
