import { Profiler, useCallback, useMemo, useRef, useState } from "react"

import type { F0GraphNodeRenderContext } from "@/patterns/F0Graph/F0Graph"
import type { GraphNode } from "@/patterns/F0Graph/types"

import { F0Graph } from "@/patterns/F0Graph/F0Graph"
import { F0GraphNode } from "@/patterns/F0Graph/F0GraphNode"

import { generateOrgData } from "./generateOrgData"

// ── Portraits (same pool as App.tsx) ────────────────────────────────────
const PORTRAITS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
]

function getPortrait(id: string): string | undefined {
  const hash = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return hash % 2 === 0 ? PORTRAITS[hash % PORTRAITS.length] : undefined
}

// ── Render callback (same logic as App.tsx renderEmployee) ──────────────
function renderNode(
  node: GraphNode<{ name: string; title: string }>,
  ctx: F0GraphNodeRenderContext
) {
  const { name, title } = node.data
  const [firstName = "", lastName = ""] = name.split(" ")
  const portrait = getPortrait(node.id)
  return (
    <F0GraphNode
      {...ctx}
      avatar={{ type: "person", firstName, lastName, src: portrait }}
      title={name}
      subtitle={title}
    />
  )
}

// ── Profiler commit record ──────────────────────────────────────────────
interface ProfilerCommit {
  phase: "mount" | "update" | "nested-update"
  actualDuration: number
}

const EMPTY_DISPLAY = { last10: [] as ProfilerCommit[], avg: 0, max: 0, total: 0 }

export function StressTest() {
  const [expandDepth, setExpandDepth] = useState(1)
  const [remountKey, setRemountKey] = useState(0)
  const commitsRef = useRef<ProfilerCommit[]>([])
  const rafPending = useRef(false)
  const [display, setDisplay] = useState(EMPTY_DISPLAY)

  const nodes = useMemo(() => generateOrgData(2000), [])

  const handleRender = useCallback(
    (
      _id: string,
      phase: "mount" | "update" | "nested-update",
      actualDuration: number,
      _baseDuration: number,
      _startTime: number,
      _commitTime: number
    ) => {
      commitsRef.current = [
        ...commitsRef.current.slice(-99),
        { phase, actualDuration },
      ]
      if (!rafPending.current) {
        rafPending.current = true
        requestAnimationFrame(() => {
          rafPending.current = false
          const all = commitsRef.current
          const avg =
            all.length > 0
              ? all.reduce((s, e) => s + e.actualDuration, 0) / all.length
              : 0
          const max =
            all.length > 0
              ? Math.max(...all.map((e) => e.actualDuration))
              : 0
          setDisplay({
            last10: all.slice(-10),
            avg,
            max,
            total: all.length,
          })
        })
      }
    },
    []
  )

  const resetAndExpand = useCallback(() => {
    commitsRef.current = []
    setDisplay(EMPTY_DISPLAY)
    setExpandDepth(99)
    setRemountKey((k) => k + 1)
  }, [])

  const resetAndCollapse = useCallback(() => {
    commitsRef.current = []
    setDisplay(EMPTY_DISPLAY)
    setExpandDepth(0)
    setRemountKey((k) => k + 1)
  }, [])

  return (
    <div
      className="bg-f1-background text-f1-foreground"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Controls bar */}
      <div
        className="border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
        style={{
          height: 28,
          minHeight: 28,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 8px",
          borderBottom: "1px solid",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
        }}
      >
        <span style={{ fontWeight: "bold" }}>
          Stress Test — {nodes.length.toLocaleString()} nodes
        </span>
        <button
          style={{ fontSize: 10, padding: "1px 6px", cursor: "pointer" }}
          onClick={resetAndExpand}
        >
          Expand All
        </button>
        <button
          style={{ fontSize: 10, padding: "1px 6px", cursor: "pointer" }}
          onClick={resetAndCollapse}
        >
          Collapse All
        </button>
        <div style={{ flex: 1 }} />
        <a href="/" style={{ fontSize: 10, color: "#888" }}>
          ← Playground
        </a>
      </div>

      {/* Graph area */}
      <div style={{ flex: 1, position: "relative" }}>
        <Profiler id="f0graph-stress" onRender={handleRender}>
          <F0Graph
            key={`stress-${expandDepth}-${remountKey}`}
            nodes={nodes}
            renderNode={renderNode}
            defaultExpandDepth={expandDepth}
            fullScreen
          />
        </Profiler>
      </div>

      {/* Profiler stats overlay (fixed, top-right, non-interactive) */}
      <div
        style={{
          position: "fixed",
          top: 36,
          right: 8,
          background: "rgba(0,0,0,0.8)",
          color: "#0f0",
          fontFamily: "monospace",
          fontSize: 11,
          padding: "8px 12px",
          borderRadius: 4,
          lineHeight: 1.6,
          pointerEvents: "none",
          zIndex: 9999,
          minWidth: 220,
        }}
      >
        <div style={{ fontWeight: "bold", marginBottom: 4 }}>
          React.Profiler
        </div>
        <div>Commits: {display.total}</div>
        <div>Avg: {display.avg.toFixed(2)}ms</div>
        <div>Max: {display.max.toFixed(2)}ms</div>
        {display.last10.length > 0 && (
          <>
            <div
              style={{
                borderTop: "1px solid #333",
                marginTop: 4,
                paddingTop: 4,
              }}
            >
              Last {display.last10.length}:
            </div>
            {display.last10.map((e, i) => (
              <div key={i}>
                {e.phase}: {e.actualDuration.toFixed(2)}ms
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
