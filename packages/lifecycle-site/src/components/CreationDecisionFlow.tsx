import {
  Background,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

const W = 270
const EW = 240
const EX = 360
const GAP = 150

const gate =
  "rounded-xl border-2 border-white/15 bg-surface2 px-4 py-3 text-sm font-medium text-ink shadow-sm"
const action =
  "rounded-xl border-2 border-accent/30 bg-accent/5 px-4 py-3 text-sm font-medium text-ink shadow-sm"
const exitGreen =
  "rounded-xl border-2 border-stable/40 bg-stable/5 px-4 py-3 text-sm font-medium text-stable shadow-sm"
const exitBlue =
  "rounded-xl border-2 border-blue-400/40 bg-blue-400/5 px-4 py-3 text-sm text-blue-300 shadow-sm"
const exitGrey =
  "rounded-xl border-2 border-white/10 bg-paper px-4 py-3 text-sm text-muted shadow-sm"

const nodes: Node[] = [
  {
    id: "start",
    position: { x: 0, y: 0 },
    data: { label: "I want to create something new in F0" },
    style: { width: W },
    className:
      "rounded-xl border-2 border-accent/50 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent shadow-sm",
  },
  {
    id: "q-exists",
    position: { x: 0, y: GAP },
    data: { label: "Does something similar already exist in F0?" },
    style: { width: W },
    className: gate,
  },
  {
    id: "q-extend",
    position: { x: 0, y: GAP * 2 },
    data: { label: "Can it be extended without breaking other users?" },
    style: { width: W },
    className: gate,
  },
  {
    id: "q-teams",
    position: { x: 0, y: GAP * 3 },
    data: { label: "Will ≥2 teams need this generically?" },
    style: { width: W },
    className: gate,
  },
  {
    id: "proposal",
    position: { x: 0, y: GAP * 4 },
    data: { label: "Open a Proposal issue" },
    style: { width: W },
    className: action,
  },
  {
    id: "review",
    position: { x: 0, y: GAP * 5 },
    data: { label: "Foundations reviews & triages" },
    style: { width: W },
    className: action,
  },
  {
    id: "build",
    position: { x: 0, y: GAP * 6 },
    data: { label: "Build in src/experimental/ → promote to stable" },
    style: { width: W },
    className:
      "rounded-xl border-2 border-stable/60 bg-stable/10 px-4 py-3 text-sm font-semibold text-stable shadow-sm",
  },
  // Exit nodes (right column)
  {
    id: "exit-use",
    position: { x: EX, y: GAP },
    data: { label: "Use it as-is — or open an Enhancement issue" },
    style: { width: EW },
    className: exitGreen,
  },
  {
    id: "exit-enhance",
    position: { x: EX, y: GAP * 2 },
    data: { label: "Open an Enhancement issue in F0" },
    style: { width: EW },
    className: exitBlue,
  },
  {
    id: "exit-monolith",
    position: { x: EX, y: GAP * 3 },
    data: { label: "Keep it in your product codebase" },
    style: { width: EW },
    className: exitGrey,
  },
  {
    id: "exit-declined",
    position: { x: EX, y: GAP * 5 },
    data: { label: "Declined or needs more info — comment on the issue" },
    style: { width: EW },
    className: exitGrey,
  },
]

const edgeOpts = {
  labelStyle: { fill: "#f4f4f5", fontSize: 11 },
  labelBgStyle: { fill: "#1f1f1f" },
  labelBgPadding: [6, 3] as [number, number],
  labelBgBorderRadius: 4,
}

const edges: Edge[] = [
  { id: "e-start-q1", source: "start", target: "q-exists", ...edgeOpts },
  { id: "e-q1-yes", source: "q-exists", target: "exit-use", label: "Yes →", ...edgeOpts },
  { id: "e-q1-no", source: "q-exists", target: "q-extend", label: "No", ...edgeOpts },
  { id: "e-q2-yes", source: "q-extend", target: "exit-enhance", label: "Yes →", ...edgeOpts },
  { id: "e-q2-no", source: "q-extend", target: "q-teams", label: "No", ...edgeOpts },
  { id: "e-q3-no", source: "q-teams", target: "exit-monolith", label: "No →", ...edgeOpts },
  { id: "e-q3-yes", source: "q-teams", target: "proposal", label: "Yes", ...edgeOpts },
  { id: "e-proposal-review", source: "proposal", target: "review", ...edgeOpts },
  { id: "e-review-declined", source: "review", target: "exit-declined", label: "Declined →", ...edgeOpts },
  { id: "e-review-build", source: "review", target: "build", label: "Accepted ✓", ...edgeOpts },
]

export function CreationDecisionFlow() {
  return (
    <div className="h-[900px] rounded-2xl border border-white/10 bg-surface">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={24} size={1} color="#2a2a2a" />
      </ReactFlow>
    </div>
  )
}
