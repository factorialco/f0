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
import { cn } from "@/lib/utils"

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
  const { graphNode, renderNode, ariaLevel, ariaSetSize, ariaPosInSet } =
    data as GraphNodeData
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

  // No `aria-owns` from here. React Flow renders every node as a flat sibling,
  // so parent/child links used to be declared with `aria-owns`. It also culls
  // off-screen nodes, which left those references pointing at ids that no
  // longer existed (36 of 123 dead on the LargeTree story). `F0GraphView` now
  // exposes one `role="tree"` that owns the rendered items directly and depth
  // travels on `aria-level` / `aria-setsize` / `aria-posinset`, which are
  // computed before culling and so stay accurate. The `ariaOwns` prop on
  // `F0GraphNode` is still honoured for consumers rendering their own canvas.
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
  const buttonRefCallback = focusCtx
    ? (el: HTMLElement | null) => focusCtx.registerNodeRef(id, el)
    : undefined

  const ariaLabel = i18n.t("actions.expand")

  // The wrapper is layout only. Every interactive attribute lives on the button
  // inside `F0GraphExpander`, which is a real `<button>` and therefore already
  // handles Enter / Space natively.
  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      <div
        className="pointer-events-auto flex items-start justify-center"
        style={{ width: parentWidth, height: 80 }}
      >
        <F0GraphExpander
          ref={buttonRefCallback}
          count={count}
          expanded={expanded}
          tabIndex={isFocused ? 0 : -1}
          ariaLabel={ariaLabel}
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
  const buttonRefCallback = focusCtx
    ? (el: HTMLElement | null) => focusCtx.registerNodeRef(id, el)
    : undefined

  const ariaLabel = collapseLabel ?? i18n.actions.collapse

  // As in the expander: the wrapper is layout only and the button owns every
  // interactive attribute. The reveal uses `opacity` rather than `visibility`
  // because a `visibility: hidden` button cannot take focus, which is why the
  // wrapper used to carry the tabindex in the first place.
  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      <div
        className="group pointer-events-auto flex items-start justify-center pt-2"
        style={{ width: parentWidth, height: 80 }}
      >
        {/*
          `opacity` rather than `visibility`, because a `visibility: hidden`
          button cannot take focus and the button now owns the roving tabindex.
          `pointer-events-none` comes along with it so the hidden state stays
          non-interactive exactly as `visibility: hidden` was, and there is no
          transition, so the reveal snaps on hover the way it always has.
        */}
        <div
          className={cn(
            "backdrop-blur-[120px]",
            "group-hover:pointer-events-auto group-hover:opacity-100",
            "focus-within:pointer-events-auto focus-within:opacity-100",
            isFocused ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <F0Button
            ref={buttonRefCallback}
            variant="neutral"
            size={zoomCtx.zoomLevel === "compact" ? "lg" : "md"}
            icon={Minimize}
            hideLabel
            label={ariaLabel}
            aria-expanded={true}
            tabIndex={isFocused ? 0 : -1}
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
