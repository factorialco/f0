import { F0AvatarList, F0AvatarPerson, F0Button, F0Icon } from "@factorialco/f0-react"
import { Tooltip } from "@factorialco/f0-react/dist/experimental"
import { CheckCircle, Clock, CrossedCircle, Minus, Person, Plus, Receipt } from "@factorialco/f0-react/icons/app"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

import {
  isRouter,
  isTerminate,
  type WfRequestReviewPayload,
  type WfStep,
  type WorkflowDoc,
} from "../data/approvalWorkflow"

/**
 * Approval workflow — LEFT-TO-RIGHT diagram on a fixed COLUMN GRID.
 *
 * The tree is flattened to root→leaf paths (one row per path — i.e. the
 * "first match wins" decision list). Columns are role-ranked and fixed:
 *
 *   [ Start ] [ Condition ] [ Review 1 ] … [ Review N ] [ Outcome ]
 *
 * so every outcome left-aligns, every first reviewer aligns, etc. — no
 * zig-zag. A branch with fewer reviewers leaves those cells empty and the
 * connector passes straight through. Connectors are drawn by a MEASURED SVG
 * overlay (reads each card's real rect), so lines always meet the cards.
 * Read-only; editing is prompt-based via One.
 */

export const C = {
  // Slightly darker than before so connector lines stay visible against the
  // dotted gray canvas background.
  rail: "#a3a9b4",
  border: "#e5e7eb",
  text: "#111827",
  muted: "#6b7280",
  cond: "#0f172a",
  reviewBg: "#eef2ff",
  approveBg: "#ecfdf5",
  rejectBg: "#fef2f2",
  startBg: "#eef1f6",
}

// Dotted "canvas" background — light Factorial gray base + subtle dot grid,
// echoing the workflow-builder canvas. Cards sit white on top of this.
export const CANVAS_BG: React.CSSProperties = {
  backgroundColor: "var(--f1-background-secondary, #f3f4f6)",
  backgroundImage: "radial-gradient(#cdd2da 1.4px, transparent 1.4px)",
  backgroundSize: "22px 22px",
}

/* ── label helpers ───────────────────────────────────────────────────── */

const TEAM_LABELS: Record<number, string> = { 6: "Finance team" }
const PERSON_LABELS: Record<number, string> = { 209: "Elissa Marini" }
const REF_LABELS: Record<string, string> = {
  owner_manager_manager_id: "Manager's manager",
  owner_manager_id: "Employee's manager",
}

function segmentLabel(s: { name: string; input?: { team_id?: number } }): string {
  switch (s.name) {
    case "employee_manager":
      return "Employee's manager"
    case "employee_manager_manager":
      return "Manager's manager"
    case "anyone_in_team":
      return s.input?.team_id != null
        ? TEAM_LABELS[s.input.team_id] ?? `Team #${s.input.team_id}`
        : "A team"
    case "finance":
      return "Finance"
    case "admins":
      return "Admins"
    default:
      return s.name.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  }
}

export type Person = { firstName: string; lastName: string }

function parseName(full: string): Person {
  const parts = full.trim().split(/\s+/)
  return { firstName: parts[0] ?? full, lastName: parts.slice(1).join(" ") }
}

export function fullName(p: Person): string {
  return p.lastName ? `${p.firstName} ${p.lastName}` : p.firstName
}

/** Specific, NAMED people set as reviewers (reviewer_names, or reviewer_ids we
 *  can resolve to a known person). These get avatars + names on the card — the
 *  whole point being that when you single someone out, you can see who. */
export function peopleFromPayload(p: WfRequestReviewPayload): Person[] {
  const names: string[] = [...(p.reviewer_names ?? [])]
  if (Array.isArray(p.reviewer_ids)) {
    p.reviewer_ids.forEach((id) => {
      const label = PERSON_LABELS[id]
      if (label) names.push(label)
    })
  }
  return names.map(parseName)
}

/** Role/segment reviewers (manager, finance, a team, a computed ref) — shown as
 *  a labelled role with the generic person icon, not a personal avatar. */
export function roleLabelsFromPayload(p: WfRequestReviewPayload): string[] {
  const out: string[] = []
  ;(p.employee_segments ?? []).forEach((s) => out.push(segmentLabel(s)))
  if (Array.isArray(p.reviewer_ids)) {
    p.reviewer_ids.forEach((id) => {
      if (!PERSON_LABELS[id]) out.push(`Reviewer #${id}`)
    })
  } else if (p.reviewer_ids && typeof p.reviewer_ids === "object") {
    out.push(REF_LABELS[p.reviewer_ids.name] ?? "A computed reviewer")
  }
  return out
}

export function deadlineLabel(p: WfRequestReviewPayload): string | null {
  if (p.due_on_value == null || !p.due_on_unit) return null
  const unit = p.due_on_value === 1 ? p.due_on_unit.replace(/s$/, "") : p.due_on_unit
  return `${p.due_on_value} ${unit} to review`
}

function reasonText(r: unknown): string | null {
  if (!r) return null
  if (typeof r === "string") return r
  if (typeof r === "object" && "value" in (r as object)) {
    return String((r as { value: unknown }).value)
  }
  return null
}

/* ── flatten the tree to root→leaf paths ─────────────────────────────── */

export type ReviewStep = Extract<WfStep, { handler: "request_review" }>
export type FlatRow = { conds: string[]; reviews: ReviewStep[]; terminal: WfStep | null }

export function flattenDoc(doc: WorkflowDoc): FlatRow[] {
  const rows: FlatRow[] = []
  const walk = (steps: WfStep[], conds: string[], prefixReviews: ReviewStep[]) => {
    const reviews = [...prefixReviews]
    for (const s of steps) {
      if (isTerminate(s)) break
      if ("handler" in s && s.handler === "factor_program") continue
      if (isRouter(s)) {
        for (const c of s.cases) walk(c.steps, [...conds, c.label], reviews)
        if (s.default) walk(s.default.steps, conds, reviews)
        return
      }
      if ("handler" in s) {
        if (s.handler === "request_review") {
          reviews.push(s as ReviewStep)
        } else if (
          s.handler === "auto_approve" ||
          s.handler === "auto_reject" ||
          s.handler === "auto_decline"
        ) {
          rows.push({ conds, reviews: [...reviews], terminal: s })
          return
        }
      }
    }
    rows.push({ conds, reviews: [...reviews], terminal: null })
  }
  walk(doc.steps, [], [])
  return rows
}

/* ── primitives ──────────────────────────────────────────────────────── */

const ellipsis: React.CSSProperties = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  // Prevent text-selection from scrolling the overflow (which made a clicked
  // truncated label appear to "un-truncate"). Labels are display-only.
  userSelect: "none",
}

function IconTile(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  color: React.ComponentProps<typeof F0Icon>["color"]
  bg: string
}) {
  return (
    <span
      style={{
        width: 26,
        height: 26,
        borderRadius: 8,
        background: props.bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <F0Icon icon={props.icon} color={props.color} size="sm" />
    </span>
  )
}

const NODE_W = 230

export function NodeCard(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  iconColor: React.ComponentProps<typeof F0Icon>["color"]
  iconBg: string
  title: string
  eyebrow?: string
  /** Optional leading visual that replaces the icon tile (e.g. an avatar). */
  leading?: React.ReactNode
  children?: React.ReactNode
}) {
  const titleRef = useRef<HTMLSpanElement>(null)
  const truncated = useIsTruncated(titleRef, props.title)
  const card = (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
        padding: "11px 13px",
        width: NODE_W,
        display: "flex",
        flexDirection: "column",
        gap: props.children ? 8 : 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0 }}>
        {props.leading ?? (
          <IconTile icon={props.icon} color={props.iconColor} bg={props.iconBg} />
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0 }}>
          {props.eyebrow && (
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 800,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: C.muted,
                lineHeight: 1.1,
              }}
            >
              {props.eyebrow}
            </span>
          )}
          <span ref={titleRef} style={{ fontWeight: 700, fontSize: 13.5, color: C.text, ...ellipsis }}>
            {props.title}
          </span>
        </div>
      </div>
      {props.children}
    </div>
  )
  return truncated ? (
    <Tooltip label={props.title} instant>
      {card}
    </Tooltip>
  ) : (
    card
  )
}

/** True when the ref'd text element is actually overflowing (ellipsised). */
function useIsTruncated(
  ref: React.RefObject<HTMLElement>,
  dep: string
): boolean {
  const [truncated, setTruncated] = useState(false)
  useLayoutEffect(() => {
    const el = ref.current
    if (el) setTruncated(el.scrollWidth > el.clientWidth + 1)
  }, [ref, dep])
  return truncated
}

function SubRow(props: {
  children: React.ReactNode
  icon?: React.ComponentProps<typeof F0Icon>["icon"]
  title?: string
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: C.muted }}>
      {props.icon && <F0Icon icon={props.icon} color="default" size="sm" />}
      <span style={ellipsis}>{props.children}</span>
    </div>
  )
}

export function ConditionPill(props: { label: string; tone: "if" | "else" }) {
  const isElse = props.tone === "else"
  const labelRef = useRef<HTMLSpanElement>(null)
  const truncated = useIsTruncated(labelRef, props.label)
  const pill = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 13px",
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        background: "#fff",
        width: 220,
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 0.5, color: C.muted, flexShrink: 0 }}>
        {isElse ? "ELSE" : "IF"}
      </span>
      <span ref={labelRef} style={{ fontSize: 13, fontWeight: 600, color: C.cond, ...ellipsis }}>
        {props.label}
      </span>
    </div>
  )
  return truncated ? (
    <Tooltip label={props.label} instant>
      {pill}
    </Tooltip>
  ) : (
    pill
  )
}

export function ReviewCard(props: { step: ReviewStep }) {
  const payload = props.step.payload
  const people = peopleFromPayload(payload)
  const roles = roleLabelsFromPayload(payload)
  const deadline = deadlineLabel(payload)
  const fallback = payload.fallback_employee_segments?.map(segmentLabel).join(", ")

  // The card is titled by WHO reviews — the condition already lives in the IF
  // pill, so a "Manager review (> €1,000)" title would just repeat it. Named
  // people come first (with avatars), then any role(s).
  const titleParts = [...people.map(fullName), ...roles]
  const title = titleParts.length ? titleParts.join(", ") : "A reviewer"

  // When specific people are set, show their avatar(s) in the leading slot so
  // you can see exactly who — a single F0AvatarPerson, or an F0AvatarList for
  // a group. Pure role reviewers keep the generic person icon.
  let leading: React.ReactNode
  if (people.length === 1) {
    leading = (
      <F0AvatarPerson
        firstName={people[0].firstName}
        lastName={people[0].lastName}
        size="sm"
      />
    )
  } else if (people.length > 1) {
    leading = (
      <F0AvatarList
        type="person"
        size="sm"
        max={3}
        avatars={people.map((p) => ({
          firstName: p.firstName,
          lastName: p.lastName,
        }))}
      />
    )
  }

  return (
    <NodeCard
      icon={Person}
      iconColor="info"
      iconBg={C.reviewBg}
      eyebrow="Approval"
      title={title}
      leading={leading}
    >
      {deadline && <SubRow icon={Clock}>{deadline}</SubRow>}
      {fallback && <SubRow title={`Falls back to ${fallback}`}>Falls back to {fallback}</SubRow>}
    </NodeCard>
  )
}

export function TerminalCard(props: { step: WfStep }) {
  const s = props.step
  if ("handler" in s && s.handler === "auto_approve") {
    return <NodeCard icon={CheckCircle} iconColor="positive" iconBg={C.approveBg} title="Auto-approve" />
  }
  const reason = "handler" in s ? reasonText((s as { payload?: { reason?: unknown } }).payload?.reason) : null
  return (
    <NodeCard icon={CrossedCircle} iconColor="warning" iconBg={C.rejectBg} title="Auto-reject">
      {reason && (
        <SubRow title={reason}>{reason}</SubRow>
      )}
    </NodeCard>
  )
}

/** Show the explicit terminal outcome node whenever the document has one.
 *  This MUST mirror the nested renderer (ApprovalDiagramNested), so the
 *  Current/Old toggle renders the SAME flow two ways — same set of nodes,
 *  different layout. (Previously the flat view hid auto-approve on any path
 *  that passed through a reviewer, which made the same doc look like a
 *  different, shorter flow than the nested view.) */
function showsTerminal(r: FlatRow): boolean {
  if (!r.terminal || !("handler" in r.terminal)) return false
  return true
}

/* ── entry: grid + measured connectors ───────────────────────────────── */

export function ApprovalDiagram(props: { doc: WorkflowDoc; busy?: boolean }) {
  const rows = flattenDoc(props.doc)
  const maxReviews = rows.reduce((m, r) => Math.max(m, r.reviews.length), 0)
  const hasCompute = props.doc.steps.some((s) => "handler" in s && s.handler === "factor_program")

  const innerRef = useRef<HTMLDivElement>(null)
  // The scrollable canvas — target for both drag-to-pan and pinch-to-zoom.
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
  // Buttons step by 0.1 (and round to keep tidy values).
  const setZoomClamped = (z: number) =>
    setZoom(clampZoom(Math.round(z * 10) / 10))

  // ── Pinch-to-zoom (trackpad) ──────────────────────────────────────────
  // A trackpad pinch arrives as a `wheel` event with `ctrlKey: true`. We
  // intercept ONLY those (so normal two-finger scroll still scrolls the
  // canvas) and preventDefault to stop the browser zooming the whole tab.
  // Native listener with { passive: false } — React's onWheel is passive and
  // can't preventDefault.
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

  // ── Drag-to-pan ───────────────────────────────────────────────────────
  // Click-and-hold anywhere on the canvas to drag the view around (the cards
  // are read-only, so there's nothing else to click). Implemented by moving
  // the scroll container's scroll offset; pointer capture keeps it smooth even
  // if the cursor leaves the element mid-drag.
  const panRef = useRef<{ x: number; y: number; sl: number; st: number } | null>(
    null
  )
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

  // ── Busy overlay visibility ───────────────────────────────────────────
  // We DON'T just mirror `busy` (which stays true until One finishes its whole
  // reply, including the recap streamed AFTER the apply). Instead we hide the
  // overlay the moment the NEW workflow actually appears — i.e. as soon as
  // `doc` changes after busy began — so it never lingers over the fresh diagram.
  const [overlay, setOverlay] = useState(false)
  const busyStartDocRef = useRef(props.doc)
  useEffect(() => {
    if (props.busy) {
      busyStartDocRef.current = props.doc
      setOverlay(true)
    } else {
      setOverlay(false)
    }
    // React only to the busy edge; `doc` is captured intentionally at that point.
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
        return {
          left: r.left - base.left,
          right: r.right - base.left,
          cy: r.top - base.top + r.height / 2,
        }
      }
      const plain: string[] = []
      const arrowed: string[] = []
      // Small breathing gap so a connector "just meets" a card rather
      // than tucking under its border. Matches ApprovalDiagramNested.
      const GAP = 6

      const start = rect("start")
      const conds = rows.map((_, i) => rect(`c${i}`)).filter(Boolean) as NonNullable<ReturnType<typeof rect>>[]
      if (start && conds.length) {
        const busX = (start.right + conds[0].left) / 2
        const cys = [start.cy, ...conds.map((c) => c.cy)]
        const minY = Math.min(...cys)
        const maxY = Math.max(...cys)
        plain.push(`M ${start.right + GAP} ${start.cy} L ${busX} ${start.cy}`)
        plain.push(`M ${busX} ${minY} L ${busX} ${maxY}`)
        conds.forEach((c) => arrowed.push(`M ${busX} ${c.cy} L ${c.left - GAP} ${c.cy}`))
      }

      // within-row: connect consecutive present nodes (straight horizontals)
      rows.forEach((r, i) => {
        const seq = [`c${i}`, ...r.reviews.map((_, k) => `v${i}_${k}`), `o${i}`]
        const present = seq.map(rect).filter(Boolean) as NonNullable<ReturnType<typeof rect>>[]
        for (let k = 1; k < present.length; k++) {
          const a = present[k - 1]
          const b = present[k]
          arrowed.push(`M ${a.right + GAP} ${a.cy} L ${b.left - GAP} ${b.cy}`)
        }
      })

      // base.width/height is the SCALED bounding box (innerRef carries the
      // zoom transform), so the overlay SVG — a sibling, NOT inside the scaled
      // element — is sized + drawn in the same scaled pixel space and aligns.
      setConn({ w: base.width, h: base.height, plain, arrowed })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (innerRef.current) ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [props.doc, rows.length, maxReviews, zoom])

  // grid columns: condition | review×N | outcome
  const gridTemplateColumns = `auto repeat(${maxReviews}, auto) auto`
  const outcomeCol = 2 + maxReviews

  return (
    <div style={{ position: "relative" }}>
      <style>{`@keyframes epsSpin { to { transform: rotate(360deg) } }`}</style>
      {/* zoom controls — top-left of the canvas, vertically stacked, f0
          icon-only buttons (stay put while the canvas pans). */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <F0Button
          variant="outline"
          size="md"
          icon={Plus}
          label="Zoom in"
          hideLabel
          onClick={() => setZoomClamped(zoom + 0.1)}
          disabled={zoom >= 1.5}
        />
        <F0Button
          variant="outline"
          size="md"
          icon={Minus}
          label="Zoom out"
          hideLabel
          onClick={() => setZoomClamped(zoom - 0.1)}
          disabled={zoom <= 0.5}
        />
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
          // Fill down to near the bottom of the viewport (the header stack above
          // is ~305px), leaving a little bottom padding. A SMALL flow sits
          // centered in this area; the diagram grows outward as it gets taller.
          minHeight: "calc(100vh - 320px)",
          padding: "24px 16px",
          // Drag-to-pan affordance; suppress text selection while dragging.
          cursor: panning ? "grabbing" : "grab",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        {/* sizer carries the SCALED dimensions so the scroll area is correct.
            `margin: auto` in the flex container centers it both ways when it
            fits, and falls back to scroll-from-start when it overflows (flex
            auto-margins don't clip the start the way justify/align center can). */}
        <div
          style={{
            position: "relative",
            width: conn.w || undefined,
            height: conn.h || undefined,
            margin: "auto",
          }}
        >
          {/* connector overlay — sibling of the scaled content, sized to the
              scaled box, so it is NOT scaled twice. */}
          <svg
            width={conn.w}
            height={conn.h}
            style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", overflow: "visible" }}
          >
            <defs>
              {/* Rounded chevron arrowhead — matches ApprovalDiagramNested
                  so Current/Old toggle connectors look identical. */}
              <marker
                id="eps-arrow"
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
                markerEnd="url(#eps-arrow)"
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
            {/* Start node */}
            <div ref={setRef("start")} style={{ marginRight: 44, flexShrink: 0 }}>
              <NodeCard icon={Receipt} iconColor="info" iconBg={C.startBg} title="Expense submitted">
                {hasCompute && <SubRow>Reads amount, type, project, entity…</SubRow>}
              </NodeCard>
            </div>

            {/* grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns,
                columnGap: 44,
                rowGap: 18,
                alignItems: "center",
              }}
            >
              {rows.map((r, i) => {
                const condLabel = r.conds.length ? r.conds.join(" · ") : "Any other expense"
                const tone: "if" | "else" = r.conds.length ? "if" : "else"
                return (
                  <div key={i} style={{ display: "contents" }}>
                    <div ref={setRef(`c${i}`)} style={{ gridColumn: 1, gridRow: i + 1, justifySelf: "start" }}>
                      <ConditionPill label={condLabel} tone={tone} />
                    </div>
                    {r.reviews.map((rv, k) => (
                      <div
                        key={k}
                        ref={setRef(`v${i}_${k}`)}
                        style={{ gridColumn: 2 + k, gridRow: i + 1, justifySelf: "start" }}
                      >
                        <ReviewCard step={rv} />
                      </div>
                    ))}
                    {r.terminal && showsTerminal(r) && (
                      <div
                        ref={setRef(`o${i}`)}
                        style={{ gridColumn: outcomeCol, gridRow: i + 1, justifySelf: "start" }}
                      >
                        <TerminalCard step={r.terminal} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Busy overlay — shown while One is working, so the user knows the flow
          may be regenerating. Non-destructive: the current diagram stays
          visible (dimmed) underneath; it just signals activity. */}
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
                animation: "epsSpin 0.7s linear infinite",
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

