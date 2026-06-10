import { F0Button } from "@factorialco/f0-react"
import { Minus, Plus, Receipt } from "@factorialco/f0-react/icons/app"
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

import {
  isRouter,
  isTerminate,
  type WfStep,
  type WorkflowDoc,
} from "../data/approvalWorkflow"
import {
  C,
  CANVAS_BG,
  ConditionPill,
  NodeCard,
  ReviewCard,
  type ReviewStep,
  TerminalCard,
} from "./ApprovalDiagram"

/**
 * EXPERIMENTAL alternate layout — a NESTED tree (matches the "group by entity,
 * then by amount" mock). The primary axis becomes parent group nodes that
 * branch into their sub-rules, rather than the flat one-row-per-rule list.
 *
 * Built alongside `ApprovalDiagram` (untouched) and selected by a toggle, so we
 * can compare both side by side and bin this if the nesting reads worse at
 * scale. Reuses the same cards + measured-SVG connector style.
 */

/* ── build the doc into a recursive branch tree ──────────────────────────
 * Unlike `flattenDoc` (which collapses nesting into combined labels), this
 * preserves the hierarchy: each switch level becomes a set of child branches.
 */
type Branch = {
  id: string
  label: string
  reviews: ReviewStep[]
  terminal: WfStep | null
  children: Branch[]
}

type RawBranch = Omit<Branch, "id" | "children"> & { children: RawBranch[] }

function buildSeq(steps: WfStep[]): {
  reviews: ReviewStep[]
  terminal: WfStep | null
  children: RawBranch[]
} {
  const reviews: ReviewStep[] = []
  let terminal: WfStep | null = null
  for (const s of steps) {
    if (isTerminate(s)) break
    if ("handler" in s && s.handler === "factor_program") continue
    if (isRouter(s)) {
      // Keep the reviews collected before this switch AT THIS level — they're a
      // shared prefix that renders ONCE as a node feeding the branch fan (a
      // hoisted "team lead", not a copy duplicated onto every child branch).
      const mk = (label: string, sub: ReturnType<typeof buildSeq>): RawBranch => ({
        label,
        reviews: sub.reviews,
        terminal: sub.terminal,
        children: sub.children,
      })
      const children = [
        ...s.cases.map((c) => mk(c.label, buildSeq(c.steps))),
        // Match the flat view's catch-all wording so List/Tree differ only by layout.
        ...(s.default ? [mk("Any other expense", buildSeq(s.default.steps))] : []),
      ]
      return { reviews, terminal: null, children }
    }
    if ("handler" in s) {
      if (s.handler === "request_review") {
        reviews.push(s as ReviewStep)
      } else if (
        s.handler === "auto_approve" ||
        s.handler === "auto_reject" ||
        s.handler === "auto_decline"
      ) {
        terminal = s
        break
      }
    }
  }
  return { reviews, terminal, children: [] }
}

function assignIds(raw: RawBranch, id: string): Branch {
  return {
    id,
    label: raw.label,
    reviews: raw.reviews,
    terminal: raw.terminal,
    children: raw.children.map((c, i) => assignIds(c, `${id}.${i}`)),
  }
}

function buildTree(doc: WorkflowDoc): {
  topChildren: Branch[]
  rootReviews: ReviewStep[]
  rootTerminal: WfStep | null
} {
  const root = buildSeq(doc.steps)
  return {
    topChildren: root.children.map((c, i) => assignIds(c, `b${i}`)),
    rootReviews: root.reviews,
    rootTerminal: root.terminal,
  }
}

/** Outcome node only for automatic outcomes (mirrors the flat diagram). */
function showsTerminalFor(reviews: ReviewStep[], terminal: WfStep | null): boolean {
  if (!terminal || !("handler" in terminal)) return false
  if (terminal.handler === "auto_approve") return reviews.length === 0
  return true
}
function showsTerminal(b: Branch): boolean {
  return showsTerminalFor(b.reviews, b.terminal)
}

const CHAIN_GAP = 44
const FAN_GAP = 56

function BranchNode(props: {
  branch: Branch
  setRef: (id: string) => (el: HTMLDivElement | null) => void
}) {
  const { branch, setRef } = props
  const isGroup = branch.children.length > 0
  const showOutcome = !isGroup && showsTerminal(branch)
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div ref={setRef(branch.id)} style={{ flexShrink: 0 }}>
        <ConditionPill
          label={branch.label || "Any other expense"}
          tone={branch.label && branch.label !== "Any other expense" ? "if" : "else"}
        />
      </div>

      {branch.reviews.map((rv, k) => (
        <div key={k} ref={setRef(`${branch.id}~r${k}`)} style={{ marginLeft: CHAIN_GAP, flexShrink: 0 }}>
          <ReviewCard step={rv} />
        </div>
      ))}

      {showOutcome && branch.terminal && (
        <div ref={setRef(`${branch.id}~o`)} style={{ marginLeft: CHAIN_GAP, flexShrink: 0 }}>
          <TerminalCard step={branch.terminal} />
        </div>
      )}

      {isGroup && (
        <div style={{ marginLeft: FAN_GAP, display: "flex", flexDirection: "column", gap: 16 }}>
          {branch.children.map((c) => (
            <BranchNode key={c.id} branch={c} setRef={setRef} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── connector derivation (pure, from tree structure) ────────────────────── */

type Conn = { chains: string[][]; fans: { from: string; to: string[] }[] }

function deriveConnectors(
  topChildren: Branch[],
  rootReviews: ReviewStep[],
  rootTerminal: WfStep | null
): Conn {
  const chains: string[][] = []
  const fans: { from: string; to: string[] }[] = []
  // The start node + any hoisted top-level reviews form a single chain that
  // feeds the first branch fan (or the lone outcome on a no-branch flow).
  const rootChain = ["start", ...rootReviews.map((_, k) => `root~r${k}`)]
  const tail = rootChain[rootChain.length - 1]
  if (rootChain.length > 1) chains.push(rootChain)
  if (topChildren.length) {
    fans.push({ from: tail, to: topChildren.map((b) => b.id) })
  } else if (showsTerminalFor(rootReviews, rootTerminal)) {
    chains.push([tail, "root~o"])
  }
  const walk = (b: Branch) => {
    const chain = [b.id, ...b.reviews.map((_, k) => `${b.id}~r${k}`)]
    if (b.children.length === 0) {
      if (showsTerminal(b)) chain.push(`${b.id}~o`)
      if (chain.length > 1) chains.push(chain)
    } else {
      if (chain.length > 1) chains.push(chain)
      fans.push({ from: chain[chain.length - 1], to: b.children.map((c) => c.id) })
      b.children.forEach(walk)
    }
  }
  topChildren.forEach(walk)
  return { chains, fans }
}

/* ── entry ───────────────────────────────────────────────────────────────── */

export function ApprovalDiagramNested(props: { doc: WorkflowDoc; busy?: boolean }) {
  // Memoize so the tree + connector lists are STABLE refs across renders —
  // otherwise the measure effect (which depends on `connectors`) re-runs every
  // render → setConn → re-render → infinite loop ("max update depth").
  const { topChildren, rootReviews, rootTerminal } = useMemo(
    () => buildTree(props.doc),
    [props.doc]
  )
  const connectors = useMemo(
    () => deriveConnectors(topChildren, rootReviews, rootTerminal),
    [topChildren, rootReviews, rootTerminal]
  )

  const innerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const setRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      if (el) nodeRefs.current.set(id, el)
      else nodeRefs.current.delete(id)
    },
    []
  )

  const [conn, setConn] = useState<{ w: number; h: number; plain: string[]; arrowed: string[] }>(
    { w: 0, h: 0, plain: [], arrowed: [] }
  )
  const [zoom, setZoom] = useState(1)
  const clampZoom = (z: number) => Math.min(1.5, Math.max(0.5, z))
  const setZoomClamped = (z: number) => setZoom(clampZoom(Math.round(z * 10) / 10))

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return
      e.preventDefault()
      setZoom((z) => Math.round(clampZoom(z - e.deltaY * 0.01) * 100) / 100)
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  const panRef = useRef<{ x: number; y: number; sl: number; st: number } | null>(null)
  const [panning, setPanning] = useState(false)
  const onPanStart = (e: React.PointerEvent) => {
    const el = canvasRef.current
    if (!el || e.button !== 0) return
    panRef.current = { x: e.clientX, y: e.clientY, sl: el.scrollLeft, st: el.scrollTop }
    setPanning(true)
    el.setPointerCapture?.(e.pointerId)
  }
  const onPanMove = (e: React.PointerEvent) => {
    const el = canvasRef.current
    const p = panRef.current
    if (!el || !p) return
    el.scrollLeft = p.sl - (e.clientX - p.x)
    el.scrollTop = p.st - (e.clientY - p.y)
  }
  const onPanEnd = (e: React.PointerEvent) => {
    panRef.current = null
    setPanning(false)
    canvasRef.current?.releasePointerCapture?.(e.pointerId)
  }

  const [overlay, setOverlay] = useState(false)
  const busyStartDocRef = useRef(props.doc)
  useEffect(() => {
    if (props.busy) {
      busyStartDocRef.current = props.doc
      setOverlay(true)
    } else {
      setOverlay(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.busy])
  useEffect(() => {
    if (props.doc !== busyStartDocRef.current) setOverlay(false)
  }, [props.doc])

  useLayoutEffect(() => {
    const measure = () => {
      const inner = innerRef.current
      if (!inner) return
      const base = inner.getBoundingClientRect()
      const rect = (id: string) => {
        const el = nodeRefs.current.get(id)
        if (!el) return null
        const r = el.getBoundingClientRect()
        return { left: r.left - base.left, right: r.right - base.left, cy: r.top - base.top + r.height / 2 }
      }
      const plain: string[] = []
      const arrowed: string[] = []
      // Small breathing gap so a connector "just meets" a card rather
      // than tucking under its border — pull each segment back from the
      // source's right edge and stop short of the target's left edge.
      const GAP = 6

      connectors.chains.forEach((ids) => {
        const pts = ids.map(rect)
        for (let k = 1; k < pts.length; k++) {
          const a = pts[k - 1]
          const b = pts[k]
          if (a && b)
            arrowed.push(`M ${a.right + GAP} ${a.cy} L ${b.left - GAP} ${b.cy}`)
        }
      })

      connectors.fans.forEach(({ from, to }) => {
        const f = rect(from)
        const tos = to.map(rect).filter(Boolean) as NonNullable<ReturnType<typeof rect>>[]
        if (!f || !tos.length) return
        const busX = (f.right + Math.min(...tos.map((t) => t.left))) / 2
        const cys = [f.cy, ...tos.map((t) => t.cy)]
        plain.push(`M ${f.right + GAP} ${f.cy} L ${busX} ${f.cy}`)
        plain.push(`M ${busX} ${Math.min(...cys)} L ${busX} ${Math.max(...cys)}`)
        tos.forEach((t) => arrowed.push(`M ${busX} ${t.cy} L ${t.left - GAP} ${t.cy}`))
      })

      setConn({ w: base.width, h: base.height, plain, arrowed })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (innerRef.current) ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [props.doc, zoom, connectors])

  return (
    <div style={{ position: "relative" }}>
      <style>{`@keyframes epsSpinN { to { transform: rotate(360deg) } }`}</style>
      <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2, display: "flex", flexDirection: "column", gap: 6 }}>
        <F0Button variant="outline" size="md" icon={Plus} label="Zoom in" hideLabel onClick={() => setZoomClamped(zoom + 0.1)} disabled={zoom >= 1.5} />
        <F0Button variant="outline" size="md" icon={Minus} label="Zoom out" hideLabel onClick={() => setZoomClamped(zoom - 0.1)} disabled={zoom <= 0.5} />
      </div>

      <div
        ref={canvasRef}
        onPointerDown={onPanStart}
        onPointerMove={onPanMove}
        onPointerUp={onPanEnd}
        onPointerCancel={onPanEnd}
        style={{
          ...CANVAS_BG,
          borderRadius: 14,
          border: `1px solid ${C.border}`,
          overflow: "auto",
          display: "flex",
          minHeight: "calc(100vh - 320px)",
          padding: "24px 16px",
          cursor: panning ? "grabbing" : "grab",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        <div style={{ position: "relative", width: conn.w || undefined, height: conn.h || undefined, margin: "auto" }}>
          <svg
            width={conn.w}
            height={conn.h}
            style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", overflow: "visible" }}
          >
            <defs>
              {/* Rounded chevron arrowhead (open "›" with round tips)
                  instead of a sharp filled triangle — softer, friendlier
                  connectors. markerUnits defaults to strokeWidth so the
                  head scales with the 2px line. */}
              <marker
                id="eps-arrow-n"
                markerWidth="7"
                markerHeight="7"
                refX="4.4"
                refY="3.5"
                orient="auto"
              >
                <path
                  d="M1.5,1.5 L5,3.5 L1.5,5.5"
                  fill="none"
                  stroke={C.rail}
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>
            {conn.plain.map((d, i) => (
              <path
                key={`p${i}`}
                d={d}
                stroke={C.rail}
                strokeWidth={1.25}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            {conn.arrowed.map((d, i) => (
              <path
                key={`a${i}`}
                d={d}
                stroke={C.rail}
                strokeWidth={1.25}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#eps-arrow-n)"
              />
            ))}
          </svg>

          <div
            ref={innerRef}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
              display: "inline-flex",
              alignItems: "center",
              minWidth: "min-content",
              padding: "6px 4px",
            }}
          >
            <div ref={setRef("start")} style={{ marginRight: FAN_GAP, flexShrink: 0 }}>
              <NodeCard icon={Receipt} iconColor="info" iconBg={C.startBg} title="Expense submitted" />
            </div>

            {/* Hoisted top-level reviews (an approver common to the whole flow). */}
            {rootReviews.map((rv, k) => (
              <div key={k} ref={setRef(`root~r${k}`)} style={{ marginRight: FAN_GAP, flexShrink: 0 }}>
                <ReviewCard step={rv} />
              </div>
            ))}

            {topChildren.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {topChildren.map((b) => (
                  <BranchNode key={b.id} branch={b} setRef={setRef} />
                ))}
              </div>
            ) : showsTerminalFor(rootReviews, rootTerminal) && rootTerminal ? (
              <div ref={setRef("root~o")} style={{ flexShrink: 0 }}>
                <TerminalCard step={rootTerminal} />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 14,
            background: "rgba(248,249,251,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#fff",
              border: `1px solid ${C.border}`,
              borderRadius: 999,
              padding: "9px 16px",
              boxShadow: "0 4px 14px rgba(16,24,40,0.10)",
              fontSize: 13,
              fontWeight: 600,
              color: C.text,
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                border: "2px solid #d4d9e1",
                borderTopColor: "#4b5563",
                animation: "epsSpinN 0.7s linear infinite",
                flexShrink: 0,
              }}
            />
            One is updating your flow…
          </div>
        </div>
      )}
    </div>
  )
}
