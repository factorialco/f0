import {
  Background,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

const W = 320
const CENTER = 0
const EXIT_X = 400

const startCls =
  "rounded-xl border-2 border-accent/50 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent shadow-sm"
const triageCls =
  "rounded-xl border-2 border-accent/60 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent shadow-sm"
const step =
  "rounded-xl border-2 border-white/15 bg-surface2 px-4 py-3 text-sm font-medium text-ink shadow-sm"
const action =
  "rounded-xl border-2 border-accent/30 bg-accent/5 px-4 py-3 text-sm font-medium text-ink shadow-sm"
const exitGrey =
  "rounded-xl border-2 border-white/10 bg-paper px-4 py-3 text-sm text-muted shadow-sm"
const stableNode =
  "rounded-xl border-2 border-stable/60 bg-stable/10 px-4 py-3 text-sm font-semibold text-stable shadow-sm"

const nodes: Node[] = [
  {
    id: "start",
    position: { x: CENTER, y: 0 },
    data: { label: "I want to add or change something in F0" },
    style: { width: W },
    className: startCls,
  },
  {
    id: "triage",
    position: { x: CENTER, y: 130 },
    data: {
      label: "Triage with Claude first — with the system context, does this belong in F0, and where (core / kit / sds)?",
    },
    style: { width: W },
    className: triageCls,
  },
  {
    id: "exit",
    position: { x: EXIT_X, y: 150 },
    data: { label: "Already exists / can be extended, or it's product-only → use it or keep it in your codebase" },
    style: { width: 280 },
    className: exitGrey,
  },
  {
    id: "propose",
    position: { x: CENTER, y: 300 },
    data: {
      label: "Low effort? Bring a proposal — a PR via the Composer (it detects placement and can create the component in F0) or a Figma design",
    },
    style: { width: W },
    className: action,
  },
  {
    id: "support",
    position: { x: CENTER, y: 460 },
    data: { label: "Post it in #f0-support — the Foundations channel: they give feedback and guide you" },
    style: { width: W },
    className: step,
  },
  {
    id: "iterate",
    position: { x: CENTER, y: 590 },
    data: { label: "Proposal → PR, with the final review on the PR" },
    style: { width: W },
    className: action,
  },
  {
    id: "merge",
    position: { x: CENTER, y: 720 },
    data: { label: "Merges as experimental" },
    style: { width: W },
    className: action,
  },
  {
    id: "stable",
    position: { x: CENTER, y: 850 },
    data: { label: "Adoption drives promotion → Stable" },
    style: { width: W },
    className: stableNode,
  },
]

const edgeOpts = {
  labelStyle: { fill: "#f4f4f5", fontSize: 11 },
  labelBgStyle: { fill: "#1f1f1f" },
  labelBgPadding: [6, 3] as [number, number],
  labelBgBorderRadius: 4,
}

const edges: Edge[] = [
  { id: "e-start-triage", source: "start", target: "triage", ...edgeOpts },
  { id: "e-triage-exit", source: "triage", target: "exit", label: "Not in F0", ...edgeOpts },
  { id: "e-triage-propose", source: "triage", target: "propose", label: "Belongs in F0", ...edgeOpts },
  { id: "e-propose-support", source: "propose", target: "support", ...edgeOpts },
  { id: "e-support-iterate", source: "support", target: "iterate", ...edgeOpts },
  { id: "e-iterate-merge", source: "iterate", target: "merge", ...edgeOpts },
  { id: "e-merge-stable", source: "merge", target: "stable", ...edgeOpts },
]

export function CreationDecisionFlow() {
  return (
    <div className="h-[900px] rounded-2xl border border-white/10 bg-surface">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.08 }}
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
