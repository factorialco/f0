import {
  Handle,
  Position,
  type Node as RFNode,
  type NodeProps,
} from "@xyflow/react"
import { type ReactNode, memo } from "react"

import { F0Button } from "@/components/F0Button"
import { Minimize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { F0GraphNodeRenderContext } from "../F0Graph"
import type {
  GraphNodeState,
  GraphNodeVariant,
} from "../components/F0GraphNode"
import type { GraphNode, LayoutDirection, ZoomLevel } from "../types"

function handlePositions(direction: LayoutDirection): {
  source: Position
  target: Position
} {
  switch (direction) {
    case "BT":
      return { source: Position.Top, target: Position.Bottom }
    case "LR":
      return { source: Position.Right, target: Position.Left }
    case "RL":
      return { source: Position.Left, target: Position.Right }
    case "TB":
    default:
      return { source: Position.Bottom, target: Position.Top }
  }
}

import {
  useF0GraphZoomInternal,
  useF0GraphExpandInternal,
  useF0GraphSelectionInternal,
  useF0GraphActionsInternal,
  useF0GraphFocusInternal,
  useF0GraphRenderConfigInternal,
} from "../contexts"
import { F0GraphExpander } from "../components/F0GraphExpander"

// ─── Shared types ──────────────────────────────────────────────

export interface GraphNodeData extends Record<string, unknown> {
  graphNode: GraphNode<unknown>
  renderNode: (
    node: GraphNode<unknown>,
    ctx: F0GraphNodeRenderContext
  ) => ReactNode
  ariaLevel: number
  ariaSetSize: number
  ariaPosInSet: number
  visibleChildIds?: string[]
}

export type GraphRFNode = RFNode<GraphNodeData>

export interface ExpanderNodeData {
  [key: string]: unknown
  count: number
  expanded: boolean
  parentId: string
  parentWidth: number
  /**
   * `true` while the parent has been expanded but its children have not arrived
   * yet (lazy / on-demand loading). The expander stays visible and shows a
   * spinner so the open action gives immediate feedback instead of a blank gap.
   */
  loading?: boolean
}

export type ExpanderRFNode = RFNode<ExpanderNodeData>

export interface CollapserNodeData {
  [key: string]: unknown
  parentId: string
  parentWidth: number
  collapseLabel?: string
}

export type CollapserRFNode = RFNode<CollapserNodeData>

// ─── Constants ─────────────────────────────────────────────────

const EXPANDER_SIZE: Record<ZoomLevel, number> = {
  detail: 32,
  compact: 48,
  dot: 72,
}

// Vertical lane between a node's bottom and its children's top. Matches
// `DEFAULT_RANK_SEP` in useLayoutEngine — keep them in sync.
const NODE_RANK_SEP = 130

// Place the expander/collapser button so it sits exactly in the middle of the
// lane between a node and its children: the button (anchored at the top of its
// wrapper box) is pushed down by half the leftover space. Measured from the
// node's bottom edge.
export const EXPANDER_Y_OFFSET_BY_ZOOM: Record<ZoomLevel, number> = {
  detail: (NODE_RANK_SEP - EXPANDER_SIZE.detail) / 2,
  compact: (NODE_RANK_SEP - EXPANDER_SIZE.compact) / 2,
  dot: (NODE_RANK_SEP - EXPANDER_SIZE.dot) / 2,
}

// ─── F0GraphNodeWrapper ────────────────────────────────────────

function F0GraphNodeWrapperInner({ data, id }: NodeProps<GraphRFNode>) {
  const zoomCtx = useF0GraphZoomInternal()
  const expandCtx = useF0GraphExpandInternal()
  const selectionCtx = useF0GraphSelectionInternal()
  const actionsCtx = useF0GraphActionsInternal()
  const focusCtx = useF0GraphFocusInternal()
  const renderCfg = useF0GraphRenderConfigInternal()
  if (!zoomCtx || !expandCtx || !selectionCtx || !actionsCtx) return null

  const { zoomLevel } = zoomCtx
  const { expandedNodes } = expandCtx
  const { selectedNodes, highlightedNodes } = selectionCtx
  const { toggleExpand, selectNode } = actionsCtx
  const {
    graphNode,
    renderNode,
    ariaLevel,
    ariaSetSize,
    ariaPosInSet,
    visibleChildIds,
  } = data as GraphNodeData
  const { source: sourcePos, target: targetPos } = handlePositions(
    zoomCtx.direction
  )

  const isExpanded = expandedNodes.has(id)
  const isSelected = selectedNodes.has(id)
  const isHighlighted = highlightedNodes.has(id)

  const nodeState: GraphNodeState = isSelected
    ? "selected"
    : isHighlighted
      ? "highlighted"
      : "default"

  const variant: GraphNodeVariant =
    zoomLevel === "dot" ? "dot" : zoomLevel === "compact" ? "compact" : "detail"

  const hasChildren = (graphNode.childrenCount ?? 0) > 0

  const isFocused = focusCtx?.focusedNodeId === id
  const nodeRefCallback = focusCtx
    ? (el: HTMLDivElement | null) => focusCtx.registerNodeRef(id, el)
    : () => {}

  const ariaOwns =
    isExpanded && visibleChildIds && visibleChildIds.length > 0
      ? visibleChildIds.map((cid) => `f0-graph-node-${cid}`).join(" ")
      : undefined

  const ctx: F0GraphNodeRenderContext = {
    zoomLevel,
    variant,
    state: nodeState,
    expanded: isExpanded,
    hasChildren,
    childrenCount: graphNode.childrenCount,
    level: ariaLevel,
    tabIndex: isFocused ? 0 : -1,
    setSize: ariaSetSize,
    posInSet: ariaPosInSet,
    nodeId: id,
    ariaOwns,
    onExpandToggle: () => toggleExpand(id),
    onClick: () => selectNode(id),
    nodeRef: nodeRefCallback,
    visibleTagTypes: renderCfg?.visibleTagTypes,
    deferredLoading: renderCfg?.deferredLoading,
    dataLoading: renderCfg?.dataLoadingEnabled
      ? graphNode.dataLoaded === false
      : undefined,
  }

  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      <div
        className="pointer-events-none flex items-start justify-center"
        style={{ width: "100%" }}
      >
        <div
          className="pointer-events-auto"
          style={{ maxWidth: "calc(100% - 20px)" }}
        >
          {renderNode(graphNode, ctx)}
        </div>
      </div>
      <Handle type="source" position={sourcePos} className="!invisible" />
    </>
  )
}

F0GraphNodeWrapperInner.displayName = "F0GraphNodeWrapper"

export const F0GraphNodeWrapper = memo(
  F0GraphNodeWrapperInner,
  (prev, next) => {
    if (prev.id !== next.id) return false
    const prevData = prev.data as GraphNodeData
    const nextData = next.data as GraphNodeData
    if (prevData.graphNode !== nextData.graphNode) return false
    if (prevData.ariaLevel !== nextData.ariaLevel) return false
    if (prevData.ariaSetSize !== nextData.ariaSetSize) return false
    if (prevData.ariaPosInSet !== nextData.ariaPosInSet) return false
    if (
      (prevData.visibleChildIds?.join(",") ?? "") !==
      (nextData.visibleChildIds?.join(",") ?? "")
    )
      return false
    if (prev.positionAbsoluteX !== next.positionAbsoluteX) return false
    if (prev.positionAbsoluteY !== next.positionAbsoluteY) return false
    return true
  }
)

// ─── F0GraphExpanderWrapper ────────────────────────────────────

function F0GraphExpanderWrapperInner({ data, id }: NodeProps<ExpanderRFNode>) {
  const zoomCtx = useF0GraphZoomInternal()
  const expandCtx = useF0GraphExpandInternal()
  const actionsCtx = useF0GraphActionsInternal()
  const focusCtx = useF0GraphFocusInternal()
  const renderCfg = useF0GraphRenderConfigInternal()
  const i18n = useI18n()
  if (!zoomCtx || !expandCtx || !actionsCtx) return null

  const { count, parentId, parentWidth, loading } = data as ExpanderNodeData
  const expanded = expandCtx.expandedNodes.has(parentId)
  const { source: sourcePos, target: targetPos } = handlePositions(
    zoomCtx.direction
  )

  const isFocused = focusCtx?.focusedNodeId === id
  const wrapperRefCallback = focusCtx
    ? (el: HTMLDivElement | null) => focusCtx.registerNodeRef(id, el)
    : undefined

  const ariaLabel = i18n.t("actions.expand")

  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      <div
        ref={wrapperRefCallback}
        role="button"
        tabIndex={isFocused ? 0 : -1}
        aria-label={ariaLabel}
        aria-expanded={expanded}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            actionsCtx.toggleExpand(parentId)
          }
        }}
        className={cn(
          "pointer-events-auto flex items-start justify-center",
          focusRing()
        )}
        style={{ width: parentWidth, height: 80 }}
      >
        <F0GraphExpander
          count={count}
          expanded={expanded}
          tabIndex={-1}
          onClick={() => actionsCtx.toggleExpand(parentId)}
          loading={loading || renderCfg?.deferredLoading}
        />
      </div>
      <Handle type="source" position={sourcePos} className="!invisible" />
    </>
  )
}

F0GraphExpanderWrapperInner.displayName = "F0GraphExpanderWrapper"

export const F0GraphExpanderWrapper = memo(
  F0GraphExpanderWrapperInner,
  (prev, next) => {
    if (prev.id !== next.id) return false
    const prevData = prev.data as ExpanderNodeData
    const nextData = next.data as ExpanderNodeData
    if (prevData.parentId !== nextData.parentId) return false
    if (prevData.count !== nextData.count) return false
    if (prevData.parentWidth !== nextData.parentWidth) return false
    if (prevData.loading !== nextData.loading) return false
    if (prev.positionAbsoluteX !== next.positionAbsoluteX) return false
    if (prev.positionAbsoluteY !== next.positionAbsoluteY) return false
    return true
  }
)

// ─── F0GraphCollapserWrapper ───────────────────────────────────

function F0GraphCollapserWrapperInner({
  data,
  id,
}: NodeProps<CollapserRFNode>) {
  const zoomCtx = useF0GraphZoomInternal()
  const actionsCtx = useF0GraphActionsInternal()
  const focusCtx = useF0GraphFocusInternal()
  const i18n = useI18n()
  if (!zoomCtx || !actionsCtx) return null

  const { parentId, parentWidth, collapseLabel } = data as CollapserNodeData
  if (zoomCtx.zoomLevel === "dot") return null
  const { source: sourcePos, target: targetPos } = handlePositions(
    zoomCtx.direction
  )

  const isFocused = focusCtx?.focusedNodeId === id
  const wrapperRefCallback = focusCtx
    ? (el: HTMLDivElement | null) => focusCtx.registerNodeRef(id, el)
    : undefined

  const ariaLabel = collapseLabel ?? i18n.actions.collapse

  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      <div
        ref={wrapperRefCallback}
        role="button"
        tabIndex={isFocused ? 0 : -1}
        aria-label={ariaLabel}
        aria-expanded={true}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            actionsCtx.toggleExpand(parentId)
          }
        }}
        className={cn(
          "group pointer-events-auto flex items-start justify-center pt-2",
          focusRing()
        )}
        style={{ width: parentWidth, height: 80 }}
      >
        <div
          className={cn(
            "backdrop-blur-[120px]",
            !isFocused && "invisible group-hover:visible",
            isFocused && "visible"
          )}
        >
          <F0Button
            variant="neutral"
            size={zoomCtx.zoomLevel === "compact" ? "lg" : "md"}
            icon={Minimize}
            hideLabel
            label={ariaLabel}
            onClick={() => actionsCtx.toggleExpand(parentId)}
          />
        </div>
      </div>
      <Handle type="source" position={sourcePos} className="!invisible" />
    </>
  )
}

F0GraphCollapserWrapperInner.displayName = "F0GraphCollapserWrapper"

export const F0GraphCollapserWrapper = memo(
  F0GraphCollapserWrapperInner,
  (prev, next) => {
    if (prev.id !== next.id) return false
    const prevData = prev.data as CollapserNodeData
    const nextData = next.data as CollapserNodeData
    if (prevData.parentId !== nextData.parentId) return false
    if (prevData.parentWidth !== nextData.parentWidth) return false
    if (prevData.collapseLabel !== nextData.collapseLabel) return false
    if (prev.positionAbsoluteX !== next.positionAbsoluteX) return false
    if (prev.positionAbsoluteY !== next.positionAbsoluteY) return false
    return true
  }
)
