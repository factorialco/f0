import {
  Handle,
  Position,
  type Node as RFNode,
  type NodeProps,
} from "@xyflow/react"
import { type CSSProperties, type ReactNode, memo } from "react"

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

import {
  COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM,
  NODE_BOX_INSET,
  NODE_HEIGHT,
  NODE_RANK_SEP,
  STACKED_NODE_HEIGHT,
  STACKED_RANK_SEP_RATIO,
} from "../constants"

/** A React Flow handle's default box, which is square. */
const HANDLE_SIZE = 6

/**
 * Half a React Flow handle.
 *
 * React Flow derives an edge endpoint from the FAR edge of the handle box — the
 * bottom edge for a `Bottom` handle, the top edge for a `Top` one — and its
 * default handle straddles the node's edge, so each endpoint lands half a handle
 * into the gap beyond it. Across a full rank lane that is invisible. Across the
 * 8px gap between two stacked rows it eats three quarters of the connector,
 * leaving a 2px stub. Pinning the box just inside the node's edge puts the
 * endpoint exactly on it, so the line spans the whole gap.
 */
const HANDLE_HALF = HANDLE_SIZE / 2

/**
 * How far the expand/collapse affordance has to move to sit on the lane the eye
 * sees rather than the one the layout reserved.
 *
 * Both buttons are placed from the bottom of the parent's layout box, but a node
 * paints only as tall as its content, and the box carries the tag reservation
 * whether or not this particular node fills it — a card whose tags wrap to fewer
 * lines than the reserved maximum leaves the difference empty beneath itself,
 * and at compact/dot zoom the tags are hidden altogether. Correcting by half of
 * whatever the parent left empty puts the button back on the visual midpoint,
 * and applying it to BOTH buttons is what keeps them in one place across a
 * collapse/expand at every zoom level.
 *
 * Read off React Flow's own measurement, so no second layout pass is needed —
 * and applied as a transform, which cannot feed back into the graph's geometry.
 */
/** Pins a vertical handle so its endpoint sits on the node's edge, not past it. */
const flushHandleStyle = (
  position: Position
): { transform: string } | undefined =>
  position === Position.Bottom || position === Position.Top
    ? { transform: `translate(-${HANDLE_HALF}px, 0px)` }
    : undefined

/**
 * Puts an endpoint on the edge the node paints. The box below `painted` is the
 * tag reservation, which is sized for the fully-wrapped block and stays put at
 * compact/dot zoom where the tags are not drawn at all — an endpoint left on the
 * box hangs below the metadata, or crosses it when wide pills wrap past the
 * estimate. Anchoring on the pill is what lets a connector run node-to-node; the
 * tag block's own backdrop blur crops whatever passes behind it.
 *
 * Measured DOWN from the node's top, not up from its bottom: React Flow only
 * gives the node element a `height` while windowing drives the render, so
 * otherwise it is content-sized and the bottom is wherever this node's pills
 * happen to end. The top is the pill's top in either case.
 */
const paintedHandleStyle = (
  position: Position,
  painted: number,
  reserved: number
): CSSProperties | undefined => {
  if (reserved <= 0) return undefined
  switch (position) {
    case Position.Bottom:
      // Flush like `flushHandleStyle`, free here since `top` is already set:
      // the box goes fully inside the pill, so the endpoint lands on its edge
      // rather than `HANDLE_HALF` past it — which would read as a hanging line.
      return {
        top: painted - HANDLE_SIZE,
        bottom: "auto",
        transform: `translate(-${HANDLE_HALF}px, 0px)`,
      }
    case Position.Left:
    case Position.Right:
      return { top: painted / 2 }
    default:
      return undefined
  }
}

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
  useF0GraphStackHoverInternal,
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
  /** Set when this node is one row of its parent's stacked column. */
  stacked?: boolean
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
  /** Set when this collapser sits over a stacked column, whose lane is shorter. */
  stacked?: boolean
}

export type CollapserRFNode = RFNode<CollapserNodeData>

/** Data for the group node behind a stacked column. */
export interface StackGroupData extends Record<string, unknown> {
  /** Which side the parent card's edge arrives from. */
  direction: LayoutDirection
}

export type StackGroupRFNode = RFNode<StackGroupData>

// ─── Constants ─────────────────────────────────────────────────

/**
 * Height of the expander pill. It is an `md` F0Button at every zoom level (see
 * F0GraphExpander), so this is one number rather than a per-zoom set — a
 * per-zoom guess is what put the expander and the collapser in different places
 * at compact zoom: the offset centred a 48px pill in the lane while the pill
 * being drawn was 32px, lifting it 8px above the collapser, which centres
 * itself on the lane properly at both sizes it uses.
 */
const EXPANDER_SIZE = 32

// Place the expander/collapser button so it sits exactly in the middle of the
// lane between a node and its children: the button (anchored at the top of its
// wrapper box) is pushed down by half the leftover space. Measured from the
// node's bottom edge.
export const EXPANDER_Y_OFFSET_BY_ZOOM: Record<ZoomLevel, number> = {
  detail: (NODE_RANK_SEP - EXPANDER_SIZE) / 2,
  compact: (NODE_RANK_SEP - EXPANDER_SIZE) / 2,
  dot: (NODE_RANK_SEP - EXPANDER_SIZE) / 2,
}

// Same centering, for the shortened lane above a stacked column. Without it the
// affordance would keep the full-lane offset and overlap the first row.
export const STACKED_RANK_SEP = NODE_RANK_SEP * STACKED_RANK_SEP_RATIO
export const EXPANDER_Y_OFFSET_STACKED_BY_ZOOM: Record<ZoomLevel, number> = {
  detail: (STACKED_RANK_SEP - EXPANDER_SIZE) / 2,
  compact: (STACKED_RANK_SEP - EXPANDER_SIZE) / 2,
  dot: (STACKED_RANK_SEP - EXPANDER_SIZE) / 2,
}

/**
 * Height of the collapser's hover area — the band that reveals the button. In a
 * full rank lane this sits comfortably between a node and its children.
 */
export const COLLAPSER_HOVER_HEIGHT = 80

/**
 * The same band over a stacked column, which halves the lane. At full height the
 * box would reach past the end of the lane and cover the top of the first row,
 * and since it is `pointer-events-auto` and above the nodes it would swallow
 * that row's clicks. Clamped to whatever the lane has left below the button's
 * own offset, so hovering the lane still reveals the button while every row
 * stays clickable end to end.
 */
export const collapserHoverHeightStacked = (zoom: ZoomLevel): number =>
  Math.max(
    0,
    Math.floor(
      STACKED_RANK_SEP -
        (EXPANDER_Y_OFFSET_STACKED_BY_ZOOM[zoom] +
          COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM[zoom])
    )
  )

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
    stacked,
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
    stacked: stacked ?? false,
    stackedHeight: renderCfg?.stackedNodeHeight,
    onExpandToggle: () => toggleExpand(id),
    onClick: () => selectNode(id),
    nodeRef: nodeRefCallback,
    visibleTagTypes: renderCfg?.visibleTagTypes,
    deferredLoading: renderCfg?.deferredLoading,
    dataLoading: renderCfg?.dataLoadingEnabled
      ? graphNode.dataLoaded === false
      : undefined,
  }

  const paintedHeight = stacked
    ? (renderCfg?.stackedNodeHeight ?? STACKED_NODE_HEIGHT)
    : (renderCfg?.nodeHeight ?? NODE_HEIGHT)

  const handleStyle = (position: Position): CSSProperties | undefined => {
    const painted = paintedHandleStyle(
      position,
      paintedHeight,
      renderCfg?.tagRowHeight ?? 0
    )
    // A row's 8px gap to the next leaves no room for the half-handle overshoot.
    const flush = stacked ? flushHandleStyle(position) : undefined
    return painted || flush ? { ...painted, ...flush } : undefined
  }

  return (
    <>
      <Handle
        type="target"
        position={targetPos}
        className="!invisible"
        style={handleStyle(targetPos)}
      />
      <div
        className="pointer-events-none flex items-start justify-center"
        style={{ width: "100%" }}
      >
        <div
          className="pointer-events-auto"
          // A card is content-sized inside the inset layout box. A stacked row
          // is width-driven instead — and since it became a sub-flow child its
          // box is already exactly the width it paints (the inset is applied
          // once, when the group box is derived), so it just fills it.
          style={{
            width: stacked ? "100%" : undefined,
            maxWidth: stacked ? undefined : `calc(100% - ${NODE_BOX_INSET}px)`,
          }}
        >
          {renderNode(graphNode, ctx)}
        </div>
      </div>
      <Handle
        type="source"
        position={sourcePos}
        className="!invisible"
        style={handleStyle(sourcePos)}
      />
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
    if (prevData.stacked !== nextData.stacked) return false
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
  const { count, parentId, parentWidth, loading } = data as ExpanderNodeData
  const zoomCtx = useF0GraphZoomInternal()
  const expandCtx = useF0GraphExpandInternal()
  const actionsCtx = useF0GraphActionsInternal()
  const focusCtx = useF0GraphFocusInternal()
  const renderCfg = useF0GraphRenderConfigInternal()
  const i18n = useI18n()
  if (!zoomCtx || !expandCtx || !actionsCtx) return null
  const expanded = expandCtx.expandedNodes.has(parentId)
  const { source: sourcePos, target: targetPos } = handlePositions(
    zoomCtx.direction
  )

  const isFocused = focusCtx?.focusedNodeId === id
  // Register the focusable button itself (not the layout wrapper) so the graph's
  // roving-tabindex focus system moves focus onto the single interactive control.
  const buttonRefCallback = focusCtx
    ? (el: HTMLElement | null) => focusCtx.registerNodeRef(id, el)
    : undefined

  const ariaLabel = i18n.t("actions.expand")

  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      {/* Plain layout box — the interactive control is the native button inside
          F0GraphExpander. A role="button" here would nest interactive controls
          (axe nested-interactive). The button carries the roving tabIndex,
          aria-expanded, aria-label, and native Enter/Space activation. */}
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
  const { parentId, parentWidth, collapseLabel, stacked } =
    data as CollapserNodeData
  const zoomCtx = useF0GraphZoomInternal()
  const actionsCtx = useF0GraphActionsInternal()
  const focusCtx = useF0GraphFocusInternal()
  const stackHoverCtx = useF0GraphStackHoverInternal()
  const i18n = useI18n()
  if (!zoomCtx || !actionsCtx) return null
  if (zoomCtx.zoomLevel === "dot") return null
  const { source: sourcePos, target: targetPos } = handlePositions(
    zoomCtx.direction
  )

  const isFocused = focusCtx?.focusedNodeId === id
  // Register the focusable button itself (not the layout wrapper) so the graph's
  // roving-tabindex focus system moves focus onto the single interactive control.
  const buttonRefCallback = focusCtx
    ? (el: HTMLElement | null) => focusCtx.registerNodeRef(id, el)
    : undefined

  const ariaLabel = collapseLabel ?? i18n.actions.collapse

  // The band's own CSS hover only covers the strip directly under the card. A
  // stacked parent is revealed while the pointer is anywhere in its column too,
  // so there is still an indicator once you have moved into the rows.
  const revealed =
    isFocused ||
    (stacked === true && stackHoverCtx?.hoveredStackParentId === parentId)

  return (
    <>
      <Handle type="target" position={targetPos} className="!invisible" />
      {/* Plain layout box — the interactive control is the native F0Button. A
          role="button" here would nest interactive controls (axe
          nested-interactive). The button carries the roving tabIndex,
          aria-expanded, aria-label, and native Enter/Space activation. `group`
          stays here so the hover-reveal below still keys off it. */}
      <div
        className="group pointer-events-auto flex items-start justify-center pt-2"
        // The band is `pointer-events-auto` and sits above the nodes, so over a
        // stacked column — where the lane is halved — the full-height band would
        // cover the first row and swallow its clicks. Clamped to what the
        // shortened lane has left.
        style={{
          width: parentWidth,
          height: stacked
            ? collapserHoverHeightStacked(zoomCtx.zoomLevel)
            : COLLAPSER_HOVER_HEIGHT,
        }}
      >
        <div
          data-revealed={revealed ? "true" : "false"}
          className={cn(
            "backdrop-blur-[120px]",
            // Exactly one of these, never both: `invisible` and `visible` carry
            // the same specificity, so emitting the pair would leave the winner
            // to Tailwind's stylesheet order rather than to this branch.
            revealed ? "visible" : "invisible group-hover:visible"
          )}
        >
          <F0Button
            ref={buttonRefCallback}
            variant="neutral"
            // Same size as the expander pill at every zoom. A larger button at
            // compact left the two affordances sharing a centre but not a top
            // edge, which reads as the collapsed state sitting lower.
            size="md"
            icon={Minimize}
            hideLabel
            label={ariaLabel}
            aria-label={ariaLabel}
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

/**
 * The group node a stacked column's rows belong to (see
 * https://reactflow.dev/learn/layouting/sub-flows): they are its children, so
 * they are positioned relative to it and travel with it. It paints nothing —
 * the column reads as a group because the rows are connected to each other, not
 * because a surface sits behind them. What it still carries is the geometry:
 * its box is the rows grown by `STACKED_GROUP_PADDING`, which is where each
 * row's offset inside it comes from.
 *
 * Decorative on every axis: no semantics (the rows keep the `treeitem` roles)
 * and `pointer-events-none`, so the gaps between rows stay click-through
 * instead of swallowing canvas pans.
 */
function F0GraphStackGroupWrapperInner(_: NodeProps<RFNode<StackGroupData>>) {
  return <div aria-hidden className="pointer-events-none h-full w-full" />
}

F0GraphStackGroupWrapperInner.displayName = "F0GraphStackGroupWrapper"

export const F0GraphStackGroupWrapper = memo(F0GraphStackGroupWrapperInner)

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
