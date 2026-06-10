import {
  F0AvatarList,
  F0Button,
  F0Icon,
  type IconType,
} from "@factorialco/f0-react"
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Coffee,
  CreditCard,
  CrossedCircle,
  Flag,
  Money,
  Pencil,
  Plane,
  Receipt,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type { WfStep, WorkflowDoc } from "../data/approvalWorkflow"
import {
  C,
  deadlineLabel,
  flattenDoc,
  fullName,
  peopleFromPayload,
  roleLabelsFromPayload,
  type FlatRow,
  type Person,
  type ReviewStep,
} from "./ApprovalDiagram"

/**
 * Approval workflow — CARDS view (Rippling-style).
 *
 * A linear, stacked list of rules — one card per root→leaf path of the same
 * generated workflow document the Tree view uses (we reuse `flattenDoc`, so
 * cocreation + generation are untouched; this is purely a second renderer).
 *
 * Because the flow is first-match-wins, branching is expressed as MULTIPLE
 * cards (each a linear IF→THEN), evaluated top to bottom — hence the order
 * number on each card. The Tree view remains the place to SEE the shared-prefix
 * structure; Cards is the per-outcome "who signs off on an expense like this".
 *
 *   Collapsed: order # · condition-derived icon · rule title · approver avatars
 *   Expanded : IF <condition chips, joined by "and">
 *              THEN <approver chips → … → outcome end-chip>
 *              + a per-rule "Edit this rule" (scoped co-creation)
 *
 * Every gray chip is a "variable" token (a thing that could change); the
 * `If` / `and` / `Then` / `→` scaffolding is plain text — visually separating
 * what's editable from the connective glue (inline editing itself is a later
 * pass; for now edits route through One).
 */

/* ── chips + scaffolding ─────────────────────────────────────────────── */

type ChipTone = "neutral" | "approve" | "reject"

function Chip(props: { children: React.ReactNode; tone?: ChipTone; icon?: IconType }) {
  const tones: Record<ChipTone, { bg: string; fg: string; bd: string }> = {
    neutral: { bg: "#eef0f3", fg: C.text, bd: "transparent" },
    approve: { bg: "#ecfdf5", fg: "#047857", bd: "#a7f3d0" },
    reject: { bg: "#fef2f2", fg: "#b91c1c", bd: "#fecaca" },
  }
  const t = tones[props.tone ?? "neutral"]
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 8,
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {props.icon && <F0Icon icon={props.icon} size="xs" color="currentColor" />}
      {props.children}
    </span>
  )
}

function Scaffold(props: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>
      {props.children}
    </span>
  )
}

/* ── derivations ─────────────────────────────────────────────────────── */

/** Condition-derived icon (gray/black on a white tile — no colour circus). */
function iconForConds(condsText: string): IconType {
  const t = condsText.toLowerCase()
  const isNonTravel = /non-?travel/.test(t)
  if (!isNonTravel && /\b(travel|flight|trip|airfare|hotel|lodging)\b/.test(t))
    return Plane
  if (/\b(meal|lunch|dinner|food|hospitalit|restaurant|alcohol|catering)\b/.test(t))
    return Coffee
  if (/\b(entity|german|germany|spain|france|italy|country|region|compliance|local)\b/.test(t))
    return Flag
  if (/\b(card|corporate)\b/.test(t)) return CreditCard
  if (/€|eur|amount|over|under|above|below|limit|\d/.test(t)) return Money
  return Receipt
}

/** Split a role label ("Employee's manager", "Finance") into a Person so the
 *  avatar shows sensible initials. Named people already arrive as Person. */
function labelToPerson(label: string): Person {
  const parts = label.trim().split(/\s+/)
  return { firstName: parts[0] ?? label, lastName: parts.slice(1).join(" ") }
}

/** Full display label for a review step — named people first, then role(s).
 *  Mirrors the Tree's ReviewCard title so both views read identically. */
function reviewLabel(step: ReviewStep): string {
  const people = peopleFromPayload(step.payload).map(fullName)
  const roles = roleLabelsFromPayload(step.payload)
  const parts = [...people, ...roles]
  return parts.length ? parts.join(", ") : "A reviewer"
}

/** One avatar per approver step — the named person, else initials of the role. */
function reviewAvatar(step: ReviewStep): Person {
  const people = peopleFromPayload(step.payload)
  if (people.length) return people[0]!
  const roles = roleLabelsFromPayload(step.payload)
  return labelToPerson(roles[0] ?? "Reviewer")
}

type Outcome = { tone: ChipTone; label: string; icon: IconType } | null

function terminalOutcome(step: WfStep | null): Outcome {
  if (!step || !("handler" in step)) return null
  if (step.handler === "auto_approve")
    return { tone: "approve", label: "Auto-approve", icon: CheckCircle }
  if (step.handler === "auto_reject")
    return { tone: "reject", label: "Auto-reject", icon: CrossedCircle }
  if (step.handler === "auto_decline")
    return { tone: "reject", label: "Auto-decline", icon: CrossedCircle }
  return null
}

type CardModel = {
  title: string
  conds: string[]
  isElse: boolean
  reviews: ReviewStep[]
  avatars: Person[]
  outcome: Outcome
  icon: IconType
}

function toCard(row: FlatRow): CardModel {
  const isElse = row.conds.length === 0
  const title = isElse ? "Any other expense" : row.conds.join(" · ")
  return {
    title,
    conds: row.conds,
    isElse,
    reviews: row.reviews,
    avatars: row.reviews.map(reviewAvatar),
    outcome: terminalOutcome(row.terminal),
    icon: iconForConds(row.conds.join(" ")),
  }
}

/* ── card ────────────────────────────────────────────────────────────── */

function RuleCard(props: {
  card: CardModel
  index: number
  onEdit: (ruleTitle: string) => void
}) {
  const { card, index } = props
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Collapsed header — click anywhere to expand. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          padding: "12px 14px",
          background: "transparent",
          border: 0,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Order number — first-match-wins precedence. */}
        <span
          style={{
            flexShrink: 0,
            width: 22,
            height: 22,
            borderRadius: 999,
            background: "#f1f2f4",
            color: C.muted,
            fontSize: 12,
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {index + 1}
        </span>
        {/* Condition icon tile. */}
        <span
          style={{
            flexShrink: 0,
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "#f7f7f8",
            border: `1px solid ${C.border}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <F0Icon icon={card.icon} size="md" color="default" />
        </span>
        {/* Title. */}
        <span
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: 15,
            fontWeight: 600,
            color: C.text,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {card.title}
        </span>
        {/* Approver avatars (who signs off). */}
        {card.avatars.length > 0 && (
          <span style={{ flexShrink: 0 }}>
            <F0AvatarList
              type="person"
              size="sm"
              max={4}
              avatars={card.avatars.map((p) => ({
                firstName: p.firstName,
                lastName: p.lastName,
              }))}
            />
          </span>
        )}
        <F0Icon
          icon={open ? ChevronUp : ChevronDown}
          size="sm"
          color="default"
        />
      </button>

      {/* Expanded body — IF / THEN. */}
      {open && (
        <div style={{ padding: "0 16px 16px 16px" }}>
          <div style={{ height: 1, background: C.border, margin: "2px 0 14px" }} />

          {/* IF */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            {card.isElse ? (
              <>
                <Scaffold>Otherwise</Scaffold>
                <Chip>Any other expense</Chip>
              </>
            ) : (
              <>
                <Scaffold>If</Scaffold>
                {card.conds.map((c, i) => (
                  <span
                    key={i}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                  >
                    {i > 0 && <Scaffold>and</Scaffold>}
                    <Chip>{c}</Chip>
                  </span>
                ))}
              </>
            )}
          </div>

          {/* THEN */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Scaffold>Then</Scaffold>
            {card.reviews.map((r, i) => {
              const dl = deadlineLabel(r.payload)
              return (
                <span
                  key={i}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  {i > 0 && <Scaffold>→</Scaffold>}
                  <Chip icon={dl ? Clock : undefined}>{reviewLabel(r)}</Chip>
                </span>
              )
            })}
            {card.outcome && (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                {card.reviews.length > 0 && <Scaffold>→</Scaffold>}
                <Chip tone={card.outcome.tone} icon={card.outcome.icon}>
                  {card.outcome.label}
                </Chip>
              </span>
            )}
          </div>

          {/* Per-rule edit — scoped co-creation. */}
          <div style={{ marginTop: 16 }}>
            <F0Button
              variant="outline"
              size="sm"
              icon={Pencil}
              label="Edit this rule"
              onClick={() => props.onEdit(card.title)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

/* ── entry ───────────────────────────────────────────────────────────── */

export function ApprovalCards(props: {
  doc: WorkflowDoc
  busy?: boolean
  onEditRule: (ruleTitle: string) => void
}) {
  const cards = flattenDoc(props.doc).map(toCard)

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          opacity: props.busy ? 0.55 : 1,
          pointerEvents: props.busy ? "none" : "auto",
          transition: "opacity 150ms",
        }}
      >
        {cards.map((card, i) => (
          <RuleCard
            key={i}
            card={card}
            index={i}
            onEdit={props.onEditRule}
          />
        ))}
      </div>

      {props.busy && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#111827",
            color: "#fff",
            borderRadius: 999,
            padding: "6px 14px",
            fontSize: 13,
            fontWeight: 600,
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
          }}
        >
          One is updating your flow…
        </div>
      )}
    </div>
  )
}
