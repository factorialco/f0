import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react";
import { useAiChat } from "@factorialco/f0-react";
import { useCopilotAction } from "@/copilot";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Custom node components
// ---------------------------------------------------------------------------
function StartNode({
  data,
}: NodeProps & { data: { label: string; sublabel?: string } }) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: "var(--f1-color-surface-selected)",
        border: "2px solid var(--f1-color-border-strong)",
        borderRadius: 24,
        padding: "8px 24px",
        minWidth: 220,
        textAlign: "center",
      }}
    >
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      <span
        style={{
          fontWeight: 600,
          fontSize: 13,
          color: "var(--f1-color-text-default)",
        }}
      >
        {data.label}
      </span>
      {data.sublabel && (
        <span style={{ fontSize: 11, color: "var(--f1-color-text-subtle)" }}>
          {data.sublabel}
        </span>
      )}
    </div>
  );
}

function DiamondNode({ data }: NodeProps & { data: { label: string } }) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <div
        style={{
          width: 100,
          height: 100,
          transform: "rotate(45deg)",
          background: "var(--f1-color-surface-default)",
          border: "2px solid var(--f1-color-border-strong)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <span
          style={{
            transform: "rotate(-45deg)",
            display: "block",
            textAlign: "center",
            fontWeight: 600,
            fontSize: 12,
            color: "var(--f1-color-text-default)",
            padding: "0 10px",
            lineHeight: 1.3,
            maxWidth: 80,
          }}
        >
          {data.label}
        </span>
      </div>
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
    </div>
  );
}

function ResultNode({
  data,
}: NodeProps & { data: { label: string; sublabel?: string } }) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: "var(--f1-color-surface-subtle)",
        border: "1px solid var(--f1-color-border-default)",
        borderRadius: 8,
        padding: "8px 16px",
        minWidth: 130,
        textAlign: "center",
      }}
    >
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <span
        style={{
          fontWeight: 700,
          fontSize: 14,
          color: "var(--f1-color-text-default)",
        }}
      >
        {data.label}
      </span>
      {data.sublabel && (
        <span style={{ fontSize: 11, color: "var(--f1-color-text-subtle)" }}>
          {data.sublabel}
        </span>
      )}
    </div>
  );
}

const nodeTypes = {
  start: StartNode,
  diamond: DiamondNode,
  result: ResultNode,
};

// ---------------------------------------------------------------------------
// Node / edge definitions
// ---------------------------------------------------------------------------
const SEED_NODES: Node[] = [
  {
    id: "start",
    type: "start",
    position: { x: 0, y: 0 },
    data: {
      label: "Employee starts accrual cycle",
      sublabel: "Hire-anniversary basis",
    },
  },
  {
    id: "result-base",
    type: "result",
    position: { x: 45, y: 130 },
    data: { label: "26 days", sublabel: "Base entitlement" },
  },
];

const SEED_EDGES: Edge[] = [
  {
    id: "e-start-base",
    source: "start",
    target: "result-base",
    type: "smoothstep",
  },
];

// Full tree — two branches (full-time / part-time), each with three tenure tiers
const FULL_NODES: Node[] = [
  {
    id: "start",
    type: "start",
    position: { x: 240, y: 0 },
    data: {
      label: "Employee starts accrual cycle",
      sublabel: "Hire-anniversary basis",
    },
  },
  {
    id: "contract",
    type: "diamond",
    position: { x: 200, y: 110 },
    data: { label: "Contract type?" },
  },
  // Full-time branch
  {
    id: "ft-tenure",
    type: "diamond",
    position: { x: 20, y: 290 },
    data: { label: "Tenure?" },
  },
  {
    id: "ft-10",
    type: "result",
    position: { x: -120, y: 470 },
    data: { label: "28 days", sublabel: "Base + 10 yr bonus" },
  },
  {
    id: "ft-5",
    type: "result",
    position: { x: 20, y: 470 },
    data: { label: "27 days", sublabel: "Base + 5 yr bonus" },
  },
  {
    id: "ft-base",
    type: "result",
    position: { x: 160, y: 470 },
    data: { label: "26 days", sublabel: "Base entitlement" },
  },
  // Part-time branch
  {
    id: "pt-tenure",
    type: "diamond",
    position: { x: 440, y: 290 },
    data: { label: "Tenure?" },
  },
  {
    id: "pt-10",
    type: "result",
    position: { x: 300, y: 470 },
    data: { label: "28 × (h/40)", sublabel: "10 yr, prorated" },
  },
  {
    id: "pt-5",
    type: "result",
    position: { x: 440, y: 470 },
    data: { label: "27 × (h/40)", sublabel: "5 yr, prorated" },
  },
  {
    id: "pt-base",
    type: "result",
    position: { x: 580, y: 470 },
    data: { label: "26 × (h/40)", sublabel: "Base, prorated" },
  },
];

const FULL_EDGES: Edge[] = [
  {
    id: "e-start-contract",
    source: "start",
    target: "contract",
    type: "smoothstep",
  },
  {
    id: "e-contract-ft",
    source: "contract",
    target: "ft-tenure",
    label: "Full-time (≥ 40 h/wk)",
    type: "smoothstep",
  },
  {
    id: "e-contract-pt",
    source: "contract",
    target: "pt-tenure",
    label: "Part-time (< 40 h/wk)",
    type: "smoothstep",
  },
  {
    id: "e-ft-10",
    source: "ft-tenure",
    target: "ft-10",
    label: "≥ 10 years",
    type: "smoothstep",
  },
  {
    id: "e-ft-5",
    source: "ft-tenure",
    target: "ft-5",
    label: "≥ 5 years",
    type: "smoothstep",
  },
  {
    id: "e-ft-base",
    source: "ft-tenure",
    target: "ft-base",
    label: "< 5 years",
    type: "smoothstep",
  },
  {
    id: "e-pt-10",
    source: "pt-tenure",
    target: "pt-10",
    label: "≥ 10 years",
    type: "smoothstep",
  },
  {
    id: "e-pt-5",
    source: "pt-tenure",
    target: "pt-5",
    label: "≥ 5 years",
    type: "smoothstep",
  },
  {
    id: "e-pt-base",
    source: "pt-tenure",
    target: "pt-base",
    label: "< 5 years",
    type: "smoothstep",
  },
];

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------
type Props = {
  onSimulate: () => void;
};

export function AuthoringView({ onSimulate }: Props) {
  const { setOpen, setPlaceholders, sendMessage } = useAiChat();
  const [state, setState] = useState<"empty" | "seed" | "full">("empty");

  // When the real One agent is connected it can call this action to expand the
  // tree after it has understood the rule description.
  useCopilotAction({
    name: "expandAccrualTree",
    description:
      "Expand the accrual rule decision tree canvas to show the full compiled rule. Call this after you have understood the user's accrual rule description.",
    parameters: [],
    handler: () => {
      setState("full");
    },
  });

  const handleCoCreate = () => {
    setPlaceholders([
      "e.g. Italian employees get 26 days/year, +1 day after 5 years tenure…",
      "e.g. Vacation accrues monthly, hire-date cycle, prorated for part-time…",
    ]);
    setOpen(true);
    setState("seed");
  };

  // Demo helper — lets reviewers see the full tree without a live agent.
  const handleDemoExpand = () => {
    setState("full");
    sendMessage(
      "Build me the accrual rule for Italy: 26 days base, +1 day at 5 years tenure, +2 days at 10 years. Part-time employees are prorated by contracted hours.",
    );
  };

  // ── Empty state ──────────────────────────────────────────────────────────
  if (state === "empty") {
    return (
      <div
        style={{
          border: "2px dashed var(--f1-color-border-default)",
          borderRadius: 12,
          padding: 48,
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          textAlign: "center",
        }}
      >
        <F0Heading
          content="No accrual rule defined"
          variant="heading"
          as="h2"
        />
        <F0Text
          content="Describe the policy in plain language and One will compile it into a structured rule."
          variant="description"
        />
        <F0Button label="Co-create with One" onClick={handleCoCreate} />
      </div>
    );
  }

  // ── Seed / full tree canvas ──────────────────────────────────────────────
  const nodes = state === "seed" ? SEED_NODES : FULL_NODES;
  const edges = state === "seed" ? SEED_EDGES : FULL_EDGES;
  const canvasHeight = state === "seed" ? 260 : 600;

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <F0Heading content="Vacation · Italy" variant="heading" as="h2" />
          <F0Text
            content={
              state === "seed"
                ? "Describe the full rule in One to build the decision tree."
                : "Decision tree compiled by One. Continue editing in the chat."
            }
            variant="description"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          {state === "seed" && (
            <F0Button
              label="Demo: expand tree"
              variant="neutral"
              onClick={handleDemoExpand}
            />
          )}
          <F0Button
            label="Edit with One"
            variant="outline"
            onClick={() => setOpen(true)}
          />
          {state === "full" && (
            <>
              <F0Button
                label="Simulate"
                variant="outline"
                onClick={onSimulate}
              />
              <F0Button label="Publish" />
            </>
          )}
        </div>
      </div>

      {/* ReactFlow canvas */}
      <div
        style={{
          border: "1px solid var(--f1-color-border-default)",
          borderRadius: 12,
          overflow: "hidden",
          height: canvasHeight,
          background: "var(--f1-color-surface-subtle)",
          transition: "height 0.3s ease",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnDrag={true}
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={16} size={1} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </F0Box>
  );
}
