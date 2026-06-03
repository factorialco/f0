import type {
  ApprovalFlow,
  ApprovalTrigger,
  Approver,
  User,
} from "./types"

/**
 * resolveApprovalChain — the pure heart of approval model v2.
 *
 * Given an expense and the ordered rule list, it returns how the expense
 * is approved: auto-approved, auto-declined, or routed through an ordered,
 * de-duplicated approver chain. This is the single source of truth the
 * "Run a test" experience consumes (we ship the LOGIC; the test UI is
 * designed separately). No React, no side effects — trivially testable.
 *
 * Algorithm (matches the agreed design / Ramp-style spend tools):
 *   1. Walk rules by priority. Accumulate approvers from EVERY matching
 *      `require` rule (mandatory reviewers — entity controller, legal…).
 *   2. The FIRST matching `route` rule sets the base outcome:
 *        - single `self` step      → auto-approve (empty base chain)
 *        - flagged decline         → auto-decline
 *        - otherwise               → its ordered approver chain
 *      Remaining route rules are skipped (first match wins).
 *   3. Final chain = mandatory approvers + base chain, de-duped, ordered
 *      by approver precedence.
 *   4. A matching mandatory reviewer OVERRIDES auto-approve (a required
 *      control beats convenience). Auto-decline is a hard stop and wins.
 *   5. No route rule matched at all → "no-rule" (shouldn't happen once a
 *      no-condition Default exists, but surfaced rather than hidden).
 *
 * Relation approvers (e.g. "Project manager") are kept in the chain as-is
 * unless a `resolveApprover` is supplied to map them to a real person —
 * shared with the projects/manager work so the chain can show who'd
 * actually sign off.
 */

export type ChainExpense = {
  amount: number
  /** Category id (matches `categories[].id`); omit for "uncategorised". */
  categoryId?: string | null
  /** The submitting employee's id (resolved against `users[]`). */
  submitterId: string
}

export type ChainOutcome =
  | "auto-approve"
  | "auto-decline"
  | "route"
  | "no-rule"

export type ResolvedChain = {
  outcome: ChainOutcome
  /** Ordered, de-duplicated approver chain (empty for approve/decline). */
  approvers: Approver[]
  /** The route rule that set the base outcome (null if none matched). */
  routeRuleId: string | null
  /** Mandatory `require` rules that matched and contributed approvers. */
  requireRuleIds: string[]
}

/** Lower number = earlier in the chain. Mirrors org seniority. */
const PRECEDENCE: Record<string, number> = {
  self: 0,
  manager: 1,
  "team-lead": 2,
  team: 3,
  "time-off-approver": 4,
  relation: 5,
  user: 6,
  admins: 7,
}

function approverRank(a: Approver): number {
  if (a.kind === "role") return PRECEDENCE[a.role] ?? 5
  if (a.kind === "relation") return PRECEDENCE.relation
  return PRECEDENCE.user
}

/** Stable identity for de-duplication. */
function approverKey(a: Approver): string {
  if (a.kind === "role") return `role:${a.role}`
  if (a.kind === "user") return `user:${a.userId}`
  return `relation:${a.relation}`
}

function isSelfStep(flow: ApprovalFlow): boolean {
  return (
    flow.steps.length === 1 &&
    flow.steps[0].approver.kind === "role" &&
    flow.steps[0].approver.role === "self"
  )
}

function isDeclineFlow(flow: ApprovalFlow): boolean {
  const text = `${flow.name} ${flow.then ?? ""} ${
    flow.steps[0]?.label ?? ""
  }`.toLowerCase()
  return (
    text.includes("decline") ||
    text.includes("reject") ||
    text.includes("block")
  )
}

function matchesTrigger(
  trigger: ApprovalTrigger,
  expense: ChainExpense,
  submitter: User | undefined
): boolean {
  // Amount band — min inclusive, max exclusive (tiles without overlap).
  const { min, max } = trigger.amount
  if (min !== undefined && expense.amount < min) return false
  if (max !== undefined && expense.amount >= max) return false

  // Category — any-of; empty means "any category".
  if (trigger.categoryIds.length > 0) {
    if (!expense.categoryId) return false
    if (!trigger.categoryIds.includes(expense.categoryId)) return false
  }

  // Audience scope.
  const scope = trigger.scope
  if (scope.kind === "everyone") return true
  if (scope.kind === "people") return scope.personIds.includes(expense.submitterId)
  if (scope.kind === "entities") {
    return submitter ? scope.entityIds.includes(submitter.entityId) : false
  }
  // attributes — every specified attribute must match the submitter.
  if (!submitter) return false
  if (scope.team && submitter.team !== scope.team) return false
  if (scope.country && submitter.country !== scope.country) return false
  if (scope.department && submitter.department !== scope.department) return false
  return true
}

export function resolveApprovalChain(
  expense: ChainExpense,
  rules: readonly ApprovalFlow[],
  users: readonly User[],
  resolveApprover?: (approver: Approver, expense: ChainExpense) => Approver
): ResolvedChain {
  const submitter = users.find((u) => u.id === expense.submitterId)
  const sorted = [...rules].sort((a, b) => a.priority - b.priority)

  const requireRuleIds: string[] = []
  const requireApprovers: Approver[] = []
  let routeRuleId: string | null = null
  let baseOutcome: ChainOutcome = "no-rule"
  let baseChain: Approver[] = []

  for (const rule of sorted) {
    if (!matchesTrigger(rule.trigger, expense, submitter)) continue

    if (rule.ruleKind === "require") {
      requireRuleIds.push(rule.id)
      for (const step of rule.steps) requireApprovers.push(step.approver)
      continue
    }

    // route rule — first match sets the base outcome, then stop routing.
    if (routeRuleId === null) {
      routeRuleId = rule.id
      if (isDeclineFlow(rule)) {
        baseOutcome = "auto-decline"
      } else if (isSelfStep(rule)) {
        baseOutcome = "auto-approve"
      } else {
        baseOutcome = "route"
        baseChain = rule.steps.map((s) => s.approver)
      }
    }
  }

  // Auto-decline is a hard stop — nothing else matters.
  if (baseOutcome === "auto-decline") {
    return { outcome: "auto-decline", approvers: [], routeRuleId, requireRuleIds }
  }

  // Combine mandatory reviewers with the base chain. A matching require
  // rule overrides auto-approve (the required control must still happen).
  const combined = [...requireApprovers, ...baseChain]
  if (combined.length === 0) {
    // Either a clean auto-approve, or no rule matched at all.
    return {
      outcome: baseOutcome === "no-rule" ? "no-rule" : "auto-approve",
      approvers: [],
      routeRuleId,
      requireRuleIds,
    }
  }

  // De-dupe (keep first occurrence) then order by precedence, optionally
  // resolving relation/role approvers to concrete people.
  const seen = new Set<string>()
  const deduped: Approver[] = []
  for (const a of combined) {
    const resolved = resolveApprover ? resolveApprover(a, expense) : a
    const key = approverKey(resolved)
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(resolved)
  }
  deduped.sort((a, b) => approverRank(a) - approverRank(b))

  return {
    outcome: "route",
    approvers: deduped,
    routeRuleId,
    requireRuleIds,
  }
}
