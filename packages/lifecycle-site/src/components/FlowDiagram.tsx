import {
  Background,
  ReactFlow,
  type Edge,
  type Node,
  type NodeMouseHandler,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { phases } from "../data/phases"

const nodeBase =
  "rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm font-medium shadow-sm"

const nodes: Node[] = [
  {
    id: "idea",
    position: { x: 0, y: 80 },
    data: { label: "Idea" },
    type: "default",
    style: { width: 120 },
    className: nodeBase,
  },
  ...phases.map((p, i) => ({
    id: p.id,
    position: { x: 180 + i * 200, y: i % 2 === 0 ? 0 : 160 },
    data: { label: `${p.number}. ${p.title}` },
    type: "default",
    style: { width: 180 },
    className: nodeBase,
  })),
  {
    id: "stable",
    position: { x: 180 + phases.length * 200, y: 80 },
    data: { label: "Stable" },
    type: "default",
    style: { width: 140 },
    className: `${nodeBase} !border-stable`,
  },
  {
    id: "deprecated",
    position: { x: 180 + phases.length * 200 + 200, y: 80 },
    data: { label: "Deprecated" },
    type: "default",
    style: { width: 140 },
    className: `${nodeBase} !border-deprecated`,
  },
  {
    id: "removed",
    position: { x: 180 + phases.length * 200 + 400, y: 80 },
    data: { label: "Removed" },
    type: "default",
    style: { width: 120 },
    className: `${nodeBase} opacity-60`,
  },
]

const edges: Edge[] = [
  { id: "e-idea-problem", source: "idea", target: "problem", animated: true },
  ...phases.slice(0, -1).map((p, i) => ({
    id: `e-${p.id}-${phases[i + 1].id}`,
    source: p.id,
    target: phases[i + 1].id,
    animated: true,
  })),
  { id: "e-promote-stable", source: "promote", target: "stable", animated: true },
  { id: "e-stable-deprecated", source: "stable", target: "deprecated", label: "after ≥1 quarter" },
  { id: "e-deprecated-removed", source: "deprecated", target: "removed", label: "@removeIn version" },
]

export function FlowDiagram() {
  const handleNodeClick: NodeMouseHandler = (_evt, node) => {
    const target = document.getElementById(`phase-${node.id}`)
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="h-[420px] rounded-2xl border border-ink/10 bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnScroll
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={24} size={1} color="#e5e7eb" />
      </ReactFlow>
      <p className="border-t border-ink/10 px-4 py-2 text-xs text-muted">
        Click any phase node to jump to its details below.
      </p>
    </div>
  )
}
