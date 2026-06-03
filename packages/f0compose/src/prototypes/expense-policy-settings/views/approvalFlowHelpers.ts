import type {
  ApprovalFlow,
  ApprovalTrigger,
  Approver,
  ApproverRole,
  User,
} from "../data/types"

/**
 * Helpers shared across the approval-flow views.
 *
 * Kept in a separate module so `ApprovalFlowCanvas`, `ApprovalStepCard`,
 * `ApprovalStepModal`, and `ApprovalFlowsView` all derive labels the
 * same way — the canvas's title slot, the modal's placeholder hint,
 * and the agent's context payload (useExposeContext) need to agree.
 */

/**
 * Human-readable label for a Factorial approver role. Matches the
 * "Add approval level" picker (screenshot reference) verbatim so
 * admins coming from that UI recognise each option.
 */
export function approverRoleLabel(role: ApproverRole): string {
  switch (role) {
    case "self":
      return "Self approval"
    case "manager":
      return "Manager"
    case "time-off-approver":
      return "Time off approver"
    case "admins":
      return "Admins"
    case "team":
      return "Team"
    case "team-lead":
      return "Team lead"
  }
}

/**
 * Display name for an approver shown on the canvas card. Roles use
 * their Factorial label; named users use "Name · Title" so the card
 * surface communicates both who they are and their seniority.
 */
export function approverDisplayName(
  approver: Approver,
  users: readonly User[]
): string {
  if (approver.kind === "role") {
    return approverRoleLabel(approver.role)
  }
  if (approver.kind === "relation") {
    // Open/dynamic approver (e.g. "Project manager") — the label is
    // authoritative; there's no role token or fixture to resolve.
    return approver.label
  }
  const user = users.find((u) => u.id === approver.userId)
  return user ? `${user.name} · ${user.title}` : "Unknown person"
}

/**
 * Short, human-readable summary of a flow's trigger condition.
 * Surfaced as a chip-row at the top of each flow on the canvas so
 * admins see at a glance which expenses the flow applies to:
 *
 *   "Applies to all expenses"
 *   "Applies when amount ≥ €1,000"
 *   "Applies when amount €100 – €999.99"
 *   "Applies when amount ≤ €99.99 and category is Travel"
 *
 * Currency is fixed to EUR for slice 1 to match the seed rates —
 * production would thread the company currency through.
 */
export function triggerSummary(
  trigger: ApprovalTrigger,
  categoryNames: ReadonlyMap<string, string>
): string {
  const parts: string[] = []
  const { min, max } = trigger.amount
  if (min !== undefined && max !== undefined) {
    parts.push(`amount €${min} – €${(max - 0.01).toFixed(2)}`)
  } else if (min !== undefined) {
    parts.push(`amount ≥ €${min}`)
  } else if (max !== undefined) {
    parts.push(`amount ≤ €${(max - 0.01).toFixed(2)}`)
  }
  if (trigger.categoryIds.length > 0) {
    const labels = trigger.categoryIds
      .map((id) => categoryNames.get(id) ?? id)
      .join(", ")
    parts.push(`category is ${labels}`)
  }
  if (trigger.scope.kind === "entities") {
    const n = trigger.scope.entityIds.length
    parts.push(n === 1 ? "1 entity" : `${n} entities`)
  } else if (trigger.scope.kind === "people") {
    const n = trigger.scope.personIds.length
    parts.push(n === 1 ? "1 person" : `${n} people`)
  }
  if (parts.length === 0) return "Applies to all expenses"
  return `Applies when ${parts.join(" and ")}`
}

/**
 * Stable sort comparator for flows by priority (ascending — lower
 * number checked first). Falls back to id for deterministic ordering
 * when two flows share a priority (shouldn't happen in slice 1 seeds
 * but guards future edge cases).
 */
export function compareFlowsByPriority(
  a: ApprovalFlow,
  b: ApprovalFlow
): number {
  if (a.priority !== b.priority) return a.priority - b.priority
  return a.id.localeCompare(b.id)
}

/* ────────────────────────────────────────────────────────────────────
 * Trigger condition rendering
 *
 * Two related concerns:
 *
 *  1. **Condition chips** — the AND-rows shown beneath a flow card
 *     (and on the detail view's trigger card), matching the
 *     screenshot 2 layout:
 *         [AND]  Amount ≥ €1,000
 *         [AND]  Category is Travel
 *     The first row drops the leading AND prefix (no preceding
 *     condition to join with). We return a structured list so the
 *     view layer can render the prefix as its own chip.
 *
 *  2. **Empty fallback** — when no conditions are set, we still
 *     want a positive statement. "Applies to all expenses" is the
 *     same copy the chat uses, so admins recognise it.
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Structured trigger conditions for the AND-row visual treatment.
 * Returns one entry per condition (amount band, category list,
 * audience scope). Empty list ⇒ catch-all flow.
 */
export function triggerConditionList(
  trigger: ApprovalTrigger,
  categoryNames: ReadonlyMap<string, string>
): readonly { id: string; label: string; value: string }[] {
  const out: { id: string; label: string; value: string }[] = []
  const { min, max } = trigger.amount
  if (min !== undefined && max !== undefined) {
    out.push({
      id: "amount",
      label: "Amount",
      value: `€${min} – €${(max - 0.01).toFixed(2)}`,
    })
  } else if (min !== undefined) {
    out.push({ id: "amount", label: "Amount", value: `≥ €${min}` })
  } else if (max !== undefined) {
    out.push({
      id: "amount",
      label: "Amount",
      value: `≤ €${(max - 0.01).toFixed(2)}`,
    })
  }
  if (trigger.categoryIds.length > 0) {
    const labels = trigger.categoryIds
      .map((id) => categoryNames.get(id) ?? id)
      .join(", ")
    out.push({ id: "category", label: "Category", value: labels })
  }
  if (trigger.scope.kind === "entities") {
    const n = trigger.scope.entityIds.length
    out.push({
      id: "scope",
      label: "Scope",
      value: n === 1 ? "1 entity" : `${n} entities`,
    })
  } else if (trigger.scope.kind === "people") {
    const n = trigger.scope.personIds.length
    out.push({
      id: "scope",
      label: "Scope",
      value: n === 1 ? "1 person" : `${n} people`,
    })
  } else if (trigger.scope.kind === "attributes") {
    // Named dynamic filter → one chip per attribute, so
    // "team Product · country Spain" reads as two legible conditions.
    const { team, country, department } = trigger.scope
    if (department) out.push({ id: "department", label: "Department", value: department })
    if (team) out.push({ id: "team", label: "Team", value: team })
    if (country) out.push({ id: "country", label: "Country", value: country })
  }
  return out
}

/* ────────────────────────────────────────────────────────────────────
 * Rule outcome
 *
 * The friendly rule list shows each rule as WHEN (conditions) → THEN
 * (outcome). The outcome is derived from the steps:
 *
 *   - a single `self` step          → "Auto-approve" (green pill)
 *   - a single `admins` step flagged → "Auto-decline" (we treat a
 *     one-step admins flow whose name/label says "decline" as a block)
 *   - anything else                  → the ordered approver chain
 * ──────────────────────────────────────────────────────────────────── */

export type FlowOutcome =
  | { kind: "auto-approve" }
  | { kind: "auto-decline" }
  | { kind: "steps" }

export function flowOutcome(flow: ApprovalFlow): FlowOutcome {
  if (flow.steps.length === 1) {
    const only = flow.steps[0]
    if (only.approver.kind === "role" && only.approver.role === "self") {
      return { kind: "auto-approve" }
    }
    const decideText = `${flow.name} ${only.label ?? ""}`.toLowerCase()
    if (
      only.approver.kind === "role" &&
      only.approver.role === "admins" &&
      (decideText.includes("decline") || decideText.includes("block") || decideText.includes("reject"))
    ) {
      return { kind: "auto-decline" }
    }
  }
  return { kind: "steps" }
}

/**
 * A flow is the catch-all "Default" rule when it has no conditions at
 * all (any amount, any category, applies to everyone). Pinned to the
 * bottom of the rule list as the fallback.
 */
export function isDefaultFlow(flow: ApprovalFlow): boolean {
  // A mandatory "require" rule is never the catch-all Default, even with
  // no conditions — it stacks onto the chain rather than being the base.
  if (flow.ruleKind === "require") return false
  const t = flow.trigger
  return (
    t.amount.min === undefined &&
    t.amount.max === undefined &&
    t.categoryIds.length === 0 &&
    t.scope.kind === "everyone"
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Step icon tint
 *
 * Maps an approver onto an `IconBadge`-style colour token so step
 * cards aren't a uniform grey wall (screenshot reference: tinted
 * rounded-square icon badges on otherwise white cards). The mapping
 * is conventional, not semantic:
 *
 *   manager / team-lead          → info     (blue)   — single decision-maker
 *   admins                       → promote  (violet) — gatekeeper / policy
 *   team / time-off-approver     → positive (green)  — collective / fallback
 *   self                         → warning  (yellow) — light caution: self-approve
 *   named user                   → info     (blue)   — same as manager (single person)
 *
 * Returning the f1-* token names directly lets the call site map
 * them onto either F0 component colour props or inline custom
 * styles (the IconBadge variants aren't always pluggable into
 * F0Avatar's icon variant).
 * ──────────────────────────────────────────────────────────────────── */

export type StepTintToken = "info" | "promote" | "positive" | "warning"

export function stepTintForApprover(approver: Approver): StepTintToken {
  if (approver.kind === "user") return "info"
  // Novel/dynamic approvers stand out in violet — they're the
  // "not-in-Factorial-today" concepts the prototype is showing off.
  if (approver.kind === "relation") return "promote"
  switch (approver.role) {
    case "manager":
    case "team-lead":
      return "info"
    case "admins":
      return "promote"
    case "team":
    case "time-off-approver":
      return "positive"
    case "self":
      return "warning"
  }
}
