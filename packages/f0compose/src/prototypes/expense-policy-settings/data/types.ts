/**
 * Domain types for the global policy data (shared across all expense
 * forms — Regular, Per diem, Mileage — per spec §10).
 */

export type Category = {
  id: string
  name: string
  visible: boolean
}

export type Subcategory = {
  id: string
  categoryId: string
  name: string
}

export type PaymentMethod = {
  id: string
  name: string
}

/**
 * Form-type discriminator for `Rate.formType`. Mirrors the wizard's
 * `FormSubStepId` for the two forms that actually carry rates today
 * (Regular doesn't have rates — it picks an amount per expense).
 *
 * Kept as a string literal (not imported from `wizard/`) so this
 * file stays leaf-level. The `useExpenseFormsSource` consumers
 * already use the same string set.
 */
export type RateFormType = "per-diem" | "mileage"

/**
 * Audience scope for a Rate. Three shapes, discriminated by `kind`:
 *
 *  - `everyone`     — default; rate applies to every employee.
 *  - `entities`     — rate applies only to the listed legal entities.
 *  - `people`       — rate applies only to the listed person ids.
 *
 * For slice 1 the entity / people ids are placeholders (no real
 * picker UI yet — the chat handles those flows). The data shape is
 * future-proof so the agent can fill the arrays without a schema
 * change later.
 */
export type RateScope =
  | { kind: "everyone" }
  | { kind: "entities"; entityIds: readonly string[] }
  | { kind: "people"; personIds: readonly string[] }

/**
 * A single rate row inside a form's Rates modal. Visual-only state
 * (BR-008) — nothing is persisted across reloads.
 *
 * `amount` is stored as a number (not a formatted string) so we can
 * round-trip safely through inline inputs. `currency` is an ISO 4217
 * code; the picker offers a small subset of common codes in slice 1.
 */
export type Rate = {
  id: string
  formType: RateFormType
  name: string
  amount: number
  currency: string
  scope: RateScope
}

/* ────────────────────────────────────────────────────────────────────
 * Approval flows
 *
 * One flow = a linear sequence of approval steps that runs when a
 * submitted expense matches the flow's trigger. Multiple flows live
 * side by side, ordered by `priority` (lower = checked first); the
 * first matching flow wins. Slice 1 has no branching inside a flow
 * (a step has exactly one approver) — chat handles edge cases.
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Factorial-native approver roles, mirroring the company's existing
 * "By role" picker (Approval flow modal screenshot). Each role
 * resolves to a real person at runtime — e.g. `"manager"` becomes
 * the submitter's direct manager. The prototype only stores the
 * role token; the resolution is a backend concern.
 *
 *  - `self`              — submitter approves their own expense
 *                          (used for low-trust auto-approve-like UX,
 *                          but slice 1 doesn't expose it as an
 *                          auto-approve toggle).
 *  - `manager`           — direct manager (most common first step).
 *  - `time-off-approver` — secondary approver configured on the
 *                          employee record. Useful when manager is
 *                          on PTO; outside slice 1 scope but listed
 *                          for parity with the Factorial picker.
 *  - `admins`            — any user with the Admin role.
 *  - `team`              — the submitter's team (any member can
 *                          approve).
 *  - `team-lead`         — the submitter's team lead (single
 *                          person, resolved per submitter).
 */
export type ApproverRole =
  | "self"
  | "manager"
  | "time-off-approver"
  | "admins"
  | "team"
  | "team-lead"

/**
 * A single approver. Three shapes:
 *
 *  - `role` — Factorial-native role token (see `ApproverRole` above).
 *    Resolved per submitter at runtime.
 *  - `user` — a specific named person (e.g. "Sarah Chen, CFO"). The
 *    `userId` references a fixture in `seedUsers`.
 *  - `relation` — an OPEN, dynamic approver that doesn't (yet) exist
 *    as a first-class Factorial role: "Project manager", "Cost-centre
 *    owner", "Budget holder", "Department head"… The `relation` is a
 *    free-form slug the agent can invent on the fly; `label` is the
 *    human display string. This is the prototype's way of expressing
 *    approver concepts Factorial can't model today — co-creation can
 *    set one even though there's no preset for it.
 *
 * A step still has exactly one approver (no any-of / all-of yet). The
 * shape leaves room for `{ kind: "group"; groupId }` later without a
 * migration.
 */
export type Approver =
  | { kind: "role"; role: ApproverRole }
  | { kind: "user"; userId: string }
  | { kind: "relation"; relation: string; label: string }

export type ApprovalStep = {
  id: string
  approver: Approver
  /**
   * Optional human label that describes the *intent* of this step
   * (e.g. "Business approval", "Policy compliance", "Sign-off").
   * Falls back to the approver's display name when absent — the
   * canvas always shows something meaningful in the title slot.
   */
  label?: string
}

/**
 * Filter conditions that decide whether a flow applies to a given
 * expense. All conditions are optional and AND'd together. A flow
 * with every condition empty is the catch-all default.
 *
 * Amount band uses `min` (inclusive) / `max` (exclusive) so adjacent
 * bands tile without overlap:
 *   { max: 100 }           — under €100
 *   { min: 100, max: 1000 } — €100–€999.99
 *   { min: 1000 }          — €1,000 and above
 *
 * `categoryIds` (any-of) and `scope` (audience filter) reuse the
 * same shapes as Rates so the agent can copy patterns across.
 */
/**
 * Approval scope = who a rule applies to. Reuses the Rates `RateScope`
 * variants (everyone / entities / explicit people) and adds one more:
 *
 *  - `attributes` — a NAMED, dynamic filter ("team is Product AND
 *    country is Spain"). Unlike `people` (a frozen list of ids), this
 *    matches by employee attributes, so it reads as a legible rule and
 *    would auto-update as people join/leave. This is the shape behind
 *    "auto-approve … from the product team in Spain".
 *
 * Kept separate from `RateScope` so the Rates surface (which only
 * speaks everyone/entities/people) stays untouched.
 */
export type ApprovalScope =
  | RateScope
  | {
      kind: "attributes"
      team?: string
      country?: Country
      department?: Department
    }

export type ApprovalTrigger = {
  amount: { min?: number; max?: number }
  categoryIds: readonly string[]
  scope: ApprovalScope
}

/**
 * One's honest verdict on whether a rule can actually be enforced —
 * the "alignment" surface. The whole point of co-creation here is that
 * you can ask for ANYTHING ("on the last Friday of the month, Abigail's
 * cat approves"); One captures it as a rule but tells the truth about
 * how real it is, and keeps suggesting until you align.
 *
 *  - `supported`       — maps cleanly to levers the system enforces
 *                        (amount, team/country, a real person/role).
 *  - `needs-setup`     — plausible, but needs something that doesn't
 *                        exist yet ("Project manager" as an approver,
 *                        a category that isn't created).
 *  - `not-enforceable` — captured as intent, but the system can't act
 *                        on it automatically (temporal whimsy, a cat).
 *                        One renders it AND explains in `note`.
 */
export type RuleFeasibility = "supported" | "needs-setup" | "not-enforceable"

/**
 * How a rule participates in resolving an expense's approval chain
 * (approval model v2). Real policies mix two kinds:
 *
 *  - `route` (default) — an escalation/routing rule. The FIRST matching
 *    route rule sets the base outcome: an ordered approver chain, or
 *    auto-approve (a single `self` step), or auto-decline. Route rules
 *    are mutually exclusive — first match wins, the rest are skipped.
 *  - `require` — a MANDATORY reviewer. Whenever its condition matches,
 *    its approver(s) are ALWAYS added to the chain, independent of which
 *    route rule won and independent of amount ("John must approve any
 *    expense from the Mexico entity"). A matching require rule overrides
 *    auto-approve — a required control beats convenience.
 *
 * Resolution lives in the pure `resolveApprovalChain` (data/resolveApprovalChain.ts);
 * the workflow UI tags each rule Route vs Always require.
 */
export type ApprovalRuleKind = "route" | "require"

export type ApprovalFlow = {
  id: string
  name: string
  /**
   * v2: route (first-match base chain) vs require (always-added
   * mandatory reviewer). Absent ⇒ "route" (back-compat with slice-1
   * seeds and the interview's starter rules).
   */
  ruleKind?: ApprovalRuleKind
  /**
   * Freeform-first content. `when` / `then` are the human-readable
   * heart of the rule — natural language One authored from whatever
   * you said, even if it doesn't map to the structured fields below.
   * The structured `trigger` / `steps` are OPTIONAL enrichment One
   * fills when it can (for clean chips + approver pills); they are
   * never required and never the cage.
   */
  when?: string
  then?: string
  /** One's feasibility verdict + commentary (the alignment surface). */
  feasibility?: RuleFeasibility
  note?: string
  trigger: ApprovalTrigger
  steps: readonly ApprovalStep[]
  /**
   * Match order when multiple flows could apply to the same expense.
   * Lower number = checked first; the first match wins. Slice 1
   * seeds use 100, 200, 300… so admins can insert flows between
   * existing ones without reshuffling.
   */
  priority: number
}

/**
 * A real person available as an approver. Drawn from a fixture list
 * in slice 1 (`seedUsers`) — the agent can extend it via chat. The
 * shape matches what a real Factorial employee picker would return,
 * so the prototype's wiring won't need to change when this goes
 * production.
 */
export type User = {
  id: string
  name: string
  /**
   * Role / title shown as a secondary line on the avatar card
   * (e.g. "CFO", "Finance Lead"). Display-only.
   */
  title: string
  /**
   * Department the employee belongs to. Used by the agent to resolve
   * scopes like "Germany sales team" → users where
   * department="Sales" AND country="Germany".
   */
  department: Department
  /** Sub-team within a department (e.g. "Enterprise Sales"). */
  team: string
  /** ISO country name (e.g. "Germany", "Spain", "USA", "France"). */
  country: Country
  /** Legal entity the employee is contracted under. */
  entityId: string
}

export type Department =
  | "Sales"
  | "Engineering"
  | "Finance"
  | "Operations"
  | "Legal"
  | "Marketing"
  | "People"

export type Country = "Germany" | "Spain" | "USA" | "France" | "UK"

/**
 * Legal entity for cross-border companies. Rates can be scoped to a
 * specific entity (e.g. €60/day per-diem applies only to employees
 * contracted under Factorial Germany GmbH).
 */
export type LegalEntity = {
  id: string
  name: string
  country: Country
}

