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
import { F0Box, F0Heading, F0Text } from "@factorialco/f0-react";
import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type Contract = "full-time" | "part-time";
type NodeState = "idle" | "active" | "dim";

interface SimulationResult {
  activeNodes: Set<string>;
  activeEdges: Set<string>;
  summary: string;
}

interface ChatMessage {
  role: "assistant" | "user";
  text: string;
}

// ---------------------------------------------------------------------------
// Scripted conversation steps
// ---------------------------------------------------------------------------
// Step 1: One asks for inputs (shown immediately on mount)
// Step 2: User types something
// Step 3: One replies with the trace + tree updates
//
// The demo parses the user text client-side and generates step 3 dynamically.
// ---------------------------------------------------------------------------

const OPENING_MESSAGE: ChatMessage = {
  role: "assistant",
  text: 'To simulate this accrual rule I need two things:\n\n**Contract type** — full-time or part-time?\n**Tenure** — how many years has this employee worked?\n\nAnswer in plain text, e.g. "full-time, 7 years".',
};

// ---------------------------------------------------------------------------
// Path computation
// ---------------------------------------------------------------------------
function computeSimulation(
  contract: Contract,
  tenure: number,
): SimulationResult {
  const base = 26;
  const bonus = tenure >= 10 ? 2 : tenure >= 5 ? 1 : 0;
  const total = base + bonus;
  const isPartTime = contract === "part-time";
  const prefix = isPartTime ? "pt" : "ft";

  const activeNodes = new Set([
    "start",
    "contract",
    `${prefix}-tenure`,
    tenure >= 10
      ? `${prefix}-10`
      : tenure >= 5
        ? `${prefix}-5`
        : `${prefix}-base`,
  ]);
  const activeEdges = new Set([
    "e-start-contract",
    isPartTime ? "e-contract-pt" : "e-contract-ft",
    tenure >= 10
      ? `e-${prefix}-10`
      : tenure >= 5
        ? `e-${prefix}-5`
        : `e-${prefix}-base`,
  ]);

  const prorationSuffix = isPartTime ? " × (h/40)" : "";
  const summary = `**${contract}** · **${tenure} yr${tenure !== 1 ? "s" : ""}** tenure → **${total}${prorationSuffix} days**`;

  return { activeNodes, activeEdges, summary };
}

function buildReply(
  contract: Contract,
  tenure: number,
  sim: SimulationResult,
): string {
  const base = 26;
  const bonus = tenure >= 10 ? 2 : tenure >= 5 ? 1 : 0;
  const total = base + bonus;
  const isPartTime = contract === "part-time";
  const tierLabel =
    tenure >= 10
      ? "10+ years tier — +2 days bonus"
      : tenure >= 5
        ? "5+ years tier — +1 day bonus"
        : "No tenure bonus (under 5 years)";

  void sim; // used for side-effect only (tree update)

  return (
    `Here's the evaluation:\n\n` +
    `**Contract:** ${contract}\n` +
    `**Tenure:** ${tenure} year${tenure !== 1 ? "s" : ""}\n\n` +
    `Path taken:\n` +
    `1. Contract type → ${contract}\n` +
    `2. Tenure check → ${tierLabel}\n\n` +
    `**Result: ${total}${isPartTime ? " × (h/40)" : ""} days**\n\n` +
    `The matching path is highlighted in the tree. Try another profile anytime.`
  );
}

function parseInput(
  text: string,
): { contract: Contract; tenure: number } | null {
  const lower = text.toLowerCase();
  const contract: Contract = lower.includes("part") ? "part-time" : "full-time";
  const match = text.match(/\d+/);
  if (!match) return null;
  return { contract, tenure: parseInt(match[0], 10) };
}

// ---------------------------------------------------------------------------
// ReactFlow node / edge data
// ---------------------------------------------------------------------------
const BASE_NODES: Node[] = [
  {
    id: "start",
    type: "simStart",
    position: { x: 240, y: 0 },
    data: {
      label: "Employee starts accrual cycle",
      sublabel: "Hire-anniversary basis",
    },
  },
  {
    id: "contract",
    type: "simDiamond",
    position: { x: 200, y: 110 },
    data: { label: "Contract type?" },
  },
  {
    id: "ft-tenure",
    type: "simDiamond",
    position: { x: 20, y: 290 },
    data: { label: "Tenure?" },
  },
  {
    id: "ft-10",
    type: "simResult",
    position: { x: -120, y: 470 },
    data: { label: "28 days", sublabel: "Base + 10 yr bonus" },
  },
  {
    id: "ft-5",
    type: "simResult",
    position: { x: 20, y: 470 },
    data: { label: "27 days", sublabel: "Base + 5 yr bonus" },
  },
  {
    id: "ft-base",
    type: "simResult",
    position: { x: 160, y: 470 },
    data: { label: "26 days", sublabel: "Base entitlement" },
  },
  {
    id: "pt-tenure",
    type: "simDiamond",
    position: { x: 440, y: 290 },
    data: { label: "Tenure?" },
  },
  {
    id: "pt-10",
    type: "simResult",
    position: { x: 300, y: 470 },
    data: { label: "28 × (h/40)", sublabel: "10 yr, prorated" },
  },
  {
    id: "pt-5",
    type: "simResult",
    position: { x: 440, y: 470 },
    data: { label: "27 × (h/40)", sublabel: "5 yr, prorated" },
  },
  {
    id: "pt-base",
    type: "simResult",
    position: { x: 580, y: 470 },
    data: { label: "26 × (h/40)", sublabel: "Base, prorated" },
  },
];

const BASE_EDGES: Edge[] = [
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
    label: "Full-time",
    type: "smoothstep",
  },
  {
    id: "e-contract-pt",
    source: "contract",
    target: "pt-tenure",
    label: "Part-time",
    type: "smoothstep",
  },
  {
    id: "e-ft-10",
    source: "ft-tenure",
    target: "ft-10",
    label: ">= 10 yrs",
    type: "smoothstep",
  },
  {
    id: "e-ft-5",
    source: "ft-tenure",
    target: "ft-5",
    label: ">= 5 yrs",
    type: "smoothstep",
  },
  {
    id: "e-ft-base",
    source: "ft-tenure",
    target: "ft-base",
    label: "< 5 yrs",
    type: "smoothstep",
  },
  {
    id: "e-pt-10",
    source: "pt-tenure",
    target: "pt-10",
    label: ">= 10 yrs",
    type: "smoothstep",
  },
  {
    id: "e-pt-5",
    source: "pt-tenure",
    target: "pt-5",
    label: ">= 5 yrs",
    type: "smoothstep",
  },
  {
    id: "e-pt-base",
    source: "pt-tenure",
    target: "pt-base",
    label: "< 5 yrs",
    type: "smoothstep",
  },
];

function applyHighlight(sim: SimulationResult | null): {
  nodes: Node[];
  edges: Edge[];
} {
  if (!sim) return { nodes: BASE_NODES, edges: BASE_EDGES };
  return {
    nodes: BASE_NODES.map((n) => ({
      ...n,
      data: {
        ...n.data,
        state: (sim.activeNodes.has(n.id) ? "active" : "dim") as NodeState,
      },
    })),
    edges: BASE_EDGES.map((e) => ({
      ...e,
      animated: sim.activeEdges.has(e.id),
      style: sim.activeEdges.has(e.id)
        ? { strokeWidth: 3, opacity: 1 }
        : { opacity: 0.15 },
      labelStyle: sim.activeEdges.has(e.id)
        ? { fontWeight: 700, fontSize: 11 }
        : { opacity: 0.25, fontSize: 11 },
    })),
  };
}

// ---------------------------------------------------------------------------
// Custom ReactFlow node components
// ---------------------------------------------------------------------------
const TR = "opacity 0.35s ease";

function SimStartNode({
  data,
}: NodeProps & {
  data: { label: string; sublabel?: string; state?: NodeState };
}) {
  const active = data.state === "active";
  return (
    <div
      style={{
        opacity: data.state === "dim" ? 0.25 : 1,
        transition: TR,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: active
          ? "hsl(var(--positive-50) / 0.12)"
          : "hsl(var(--selected-50) / 0.1)",
        border: `2px solid ${active ? "hsl(var(--positive-50))" : "hsl(var(--neutral-30))"}`,
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
          color: "hsl(var(--neutral-100))",
        }}
      >
        {data.label}
      </span>
      {data.sublabel && (
        <span style={{ fontSize: 11, color: "hsl(var(--neutral-50))" }}>
          {data.sublabel}
        </span>
      )}
    </div>
  );
}

function SimDiamondNode({
  data,
}: NodeProps & { data: { label: string; state?: NodeState } }) {
  const active = data.state === "active";
  return (
    <div
      style={{
        opacity: data.state === "dim" ? 0.25 : 1,
        transition: TR,
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
          background: active
            ? "hsl(var(--positive-50) / 0.12)"
            : "hsl(var(--neutral-0))",
          border: `2px solid ${active ? "hsl(var(--positive-50))" : "hsl(var(--neutral-30))"}`,
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
            color: "hsl(var(--neutral-100))",
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

function SimResultNode({
  data,
}: NodeProps & {
  data: { label: string; sublabel?: string; state?: NodeState };
}) {
  const active = data.state === "active";
  return (
    <div
      style={{
        opacity: data.state === "dim" ? 0.25 : 1,
        transition: TR,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: active
          ? "hsl(var(--positive-50) / 0.12)"
          : "hsl(var(--neutral-5))",
        border: `${active ? 2 : 1}px solid ${active ? "hsl(var(--positive-50))" : "hsl(var(--neutral-10))"}`,
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
          color: "hsl(var(--neutral-100))",
        }}
      >
        {data.label}
      </span>
      {data.sublabel && (
        <span style={{ fontSize: 11, color: "hsl(var(--neutral-50))" }}>
          {data.sublabel}
        </span>
      )}
    </div>
  );
}

const nodeTypes = {
  simStart: SimStartNode,
  simDiamond: SimDiamondNode,
  simResult: SimResultNode,
};

// ---------------------------------------------------------------------------
// One chat mock — pixel-faithful replica of F0AiChat
// ---------------------------------------------------------------------------

// Render **bold** markdown inline
function Md({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

// One logo SVG (gradient circle matching the real logo)
function OneLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="url(#oneGrad)" />
      <defs>
        <radialGradient id="oneGrad" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#E57373" />
          <stop offset="50%" stopColor="#9575CD" />
          <stop offset="100%" stopColor="#E51943" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="6" fill="white" fillOpacity="0.9" />
      <circle cx="16" cy="16" r="3" fill="url(#oneGrad)" />
    </svg>
  );
}

function ThinkingDots() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "hsl(var(--neutral-40))",
            animation: `oneDot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes oneDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function OneChat({
  messages,
  thinking,
  input,
  onInput,
  onSend,
}: {
  messages: ChatMessage[];
  thinking: boolean;
  input: string;
  onInput: (v: string) => void;
  onSend: () => void;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const canSend = input.trim().length > 0 && !thinking;

  return (
    <div
      style={{
        width: 360,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        height: 620,
        // Panel: bg-f1-special-page = hsl(var(--page))
        background: "hsl(var(--page))",
        border: "1px solid hsl(var(--neutral-10))",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* ── Header ── */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 12px 10px 14px",
          borderBottom: "1px solid hsl(var(--neutral-10))",
          background: "hsl(var(--page))",
        }}
      >
        {/* Thread title (mimics "New conversation" with chevron) */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 4, minWidth: 0 }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "hsl(var(--neutral-100))",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            New conversation
          </span>
          <span style={{ fontSize: 10, color: "hsl(var(--neutral-40))" }}>
            ▾
          </span>
        </div>
        {/* Right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Expand icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              borderRadius: 6,
              color: "hsl(var(--neutral-50))",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 2h4v4M6 14H2v-4M14 2l-5 5M2 14l5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* Close icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              borderRadius: 6,
              color: "hsl(var(--neutral-50))",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Messages ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 16px 8px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.role === "assistant" ? (
              // Assistant: no bubble, left-aligned, preceded by logo
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <OneLogo size={20} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "hsl(var(--neutral-50))",
                    }}
                  >
                    One
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "hsl(var(--neutral-100))",
                    whiteSpace: "pre-wrap",
                    paddingLeft: 28,
                  }}
                >
                  <Md text={msg.text} />
                </div>
              </div>
            ) : (
              // User: right-aligned bubble — bg-f1-background-tertiary
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    maxWidth: "90%",
                    background: "hsl(var(--neutral-5))",
                    border: "1px solid hsl(var(--neutral-10))",
                    borderRadius: 16,
                    padding: "10px 14px",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "hsl(var(--neutral-100))",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <Md text={msg.text} />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Thinking indicator */}
        {thinking && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <OneLogo size={20} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "hsl(var(--neutral-50))",
                }}
              >
                One
              </span>
            </div>
            <div style={{ paddingLeft: 28 }}>
              <ThinkingDots />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <div style={{ padding: "8px 16px 16px" }}>
        {/* Textarea form — mimics the conic-gradient focus border */}
        <div
          style={{
            border: "1px solid hsl(var(--neutral-30))",
            borderRadius: 8,
            background: "hsl(var(--neutral-0))",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <textarea
            ref={textareaRef}
            rows={2}
            value={input}
            onChange={(e) => onInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder={thinking ? "One is thinking…" : "Message One"}
            style={{
              resize: "none",
              border: "none",
              outline: "none",
              background: "transparent",
              padding: "12px 12px 4px",
              fontFamily: "inherit",
              fontSize: 14,
              lineHeight: "20px",
              color: "hsl(var(--neutral-100))",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          {/* Action bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "4px 8px 8px",
            }}
          >
            <button
              onClick={onSend}
              disabled={!canSend}
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                border: "none",
                cursor: canSend ? "pointer" : "default",
                background: canSend
                  ? "hsl(var(--neutral-100))"
                  : "hsl(var(--neutral-10))",
                color: canSend
                  ? "hsl(var(--neutral-0))"
                  : "hsl(var(--neutral-40))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 13V3M3 8l5-5 5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------
export function SimulateView() {
  const [sim, setSim] = useState<SimulationResult | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleSend = () => {
    const text = input.trim();
    if (!text || thinking) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setThinking(true);

    setTimeout(() => {
      const parsed = parseInput(text);
      if (!parsed) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: 'I need a tenure number too. Try something like "full-time, 7 years" or "part-time, 3 years".',
          },
        ]);
      } else {
        const result = computeSimulation(parsed.contract, parsed.tenure);
        setSim(result);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: buildReply(parsed.contract, parsed.tenure, result),
          },
        ]);
      }
      setThinking(false);
    }, 900);
  };

  const { nodes, edges } = applyHighlight(sim);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "flex-start",
      }}
    >
      {/* Decision tree */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <F0Box display="flex" flexDirection="column" gap="sm">
          <F0Heading
            content="Vacation · Italy — decision tree"
            variant="heading"
            as="h2"
          />
          <F0Text
            content={
              sim
                ? sim.summary
                : "Answer One on the right — the matching path will light up."
            }
            variant="description"
          />
          <div
            style={{
              border: "1px solid hsl(var(--neutral-10))",
              borderRadius: 12,
              overflow: "hidden",
              height: 560,
              background: "hsl(var(--neutral-5))",
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
      </div>

      {/* One chat mock */}
      <OneChat
        messages={messages}
        thinking={thinking}
        input={input}
        onInput={setInput}
        onSend={handleSend}
      />
    </div>
  );
}
