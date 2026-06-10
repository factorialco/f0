/**
 * Approval workflow document — the REAL shape expenses approval uses
 * behind the scenes (the JSON One emits into the "Approval Flow" setting).
 *
 * A workflow is `{ steps: WfStep[] }`, executed top-to-bottom. A step is:
 *  - an ACTION (`handler`): `auto_approve`, `request_review` (who +
 *    deadline), or `factor_program` (a computed check that outputs a
 *    variable for a later branch to read).
 *  - a ROUTER (`cases` + `default`): reads a variable computed upstream
 *    (`when.source` → that step's `id`) and runs the matching case's
 *    steps, else the default's.
 *  - a TERMINATE (`type: "terminate"`): the end of a path.
 *
 * These types mirror that JSON 1:1 so the document is the source of
 * truth. The VIEW deliberately abstracts the plumbing (factor_program
 * internals, terminate, the when-wiring, ids) into a scannable
 * condition → branches → actions card tree — see `flattenWorkflow`.
 */

/**
 * An approver segment. `employee_manager` / `employee_manager_manager` are
 * relative to the spender; `anyone_in_team` targets a team by id; other named
 * segments may carry an `input`. (Superset of the simple interview shape.)
 */
export type WfEmployeeSegment = {
  name: string
  input?: { team_id?: number } & Record<string, unknown>
}

/** Reviewer ids resolved from a computed variable (e.g. the manager's manager). */
export type WfReviewerRef = { kind: "reference"; source: string; name: string }

export type WfRequestReviewPayload = {
  /** Relative/team segments. Optional when `reviewer_ids` is used instead. */
  employee_segments?: WfEmployeeSegment[]
  /** Explicit reviewer user-ids (literal array) OR a reference to a computed id. */
  reviewer_ids?: number[] | WfReviewerRef
  /** Named reviewers when no directory id is available (the user just named
   *  a person). Shown verbatim — no lookup/email needed. */
  reviewer_names?: string[]
  /** Segments used when a referenced reviewer can't be resolved. */
  fallback_employee_segments?: WfEmployeeSegment[]
  /** Deadline magnitude, e.g. 7 (with `due_on_unit`). */
  due_on_value?: number
  /** Deadline unit, e.g. "days". */
  due_on_unit?: string
}

/** Auto-reject reason — a plain string or a literal-wrapped value. */
export type WfReason = string | { kind: "literal"; value: string }

export type WfProgram = {
  /** The raw expression (hidden in the UI — plumbing). */
  expression: string
  inputs?: Record<string, unknown>
  inputsSchema?: Record<string, unknown>
  output?: Record<string, unknown>
}

/** A single condition leaf: `variable <op> value`, read from a compute step. */
export type WfCondition = {
  /** Id of the upstream factor_program step that produced `variable`. */
  source: string
  variable: string
  op: "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | string
  value: unknown
}

/** A `when` is a single condition OR a compound of conditions. */
export type WfWhen =
  | WfCondition
  | { all_of: WfWhen[] }
  | { any_of: WfWhen[] }

export type WfCase = {
  /** Human label shown in the UI (e.g. "Over €1,000 · Italy"). */
  label: string
  when: WfWhen
  steps: WfStep[]
}

/** A branch/router node. `handler: "switch"` is explicit in production docs;
 *  the simpler interview docs omit it (detected by the presence of `cases`). */
export type WfSwitch = {
  id?: string
  title?: string
  handler?: "switch"
  cases: WfCase[]
  default?: { steps: WfStep[] }
}

export type WfTerminate = { title?: string; type: "terminate" }

export type WfStep =
  | { id?: string; title?: string; handler: "auto_approve" }
  | { id?: string; title?: string; handler: "auto_decline" }
  | { id?: string; title?: string; handler: "auto_reject"; payload?: { reason?: WfReason } }
  | {
      id?: string
      title?: string
      handler: "request_review"
      payload: WfRequestReviewPayload
    }
  | {
      id?: string
      title?: string
      handler: "factor_program"
      payload: { program: WfProgram; inputs?: Record<string, unknown> }
    }
  | WfSwitch
  | WfTerminate

export type WorkflowDoc = { steps: WfStep[] }

/* ── Type guards ─────────────────────────────────────────────────────── */

export function isTerminate(s: WfStep): s is WfTerminate {
  return "type" in s && s.type === "terminate"
}
export function isRouter(s: WfStep): s is WfSwitch {
  return "cases" in s
}
export function isHandler(
  s: WfStep
): s is Extract<WfStep, { handler: string }> {
  return "handler" in s && (s as { handler?: string }).handler !== "switch"
}

/** True for a compound (`all_of`/`any_of`) when. */
export function isCompoundWhen(
  w: WfWhen
): w is { all_of: WfWhen[] } | { any_of: WfWhen[] } {
  return "all_of" in w || "any_of" in w
}

/* ── Flatten the document into a scannable render model ──────────────────
 *
 * The view shouldn't expose factor_program + router as two raw steps, the
 * when-wiring, terminates, or ids. `flattenWorkflow` walks the document
 * and produces a tidy tree the cards render directly:
 *
 *   RenderNode =
 *     | Action  (auto-approve / auto-decline / request-review + deadline)
 *     | Branch  (a condition with labelled branches, each a RenderNode[])
 *
 * factor_program steps are consumed into the condition label of the
 * router that reads them; terminate steps are dropped.
 * ──────────────────────────────────────────────────────────────────── */

export type RenderAction =
  | { kind: "auto-approve" }
  | { kind: "auto-decline" }
  | {
      kind: "review"
      /** Human approver(s), e.g. "Employee's manager". */
      approvers: string[]
      /** e.g. "Due in 3 days" — omitted when no deadline. */
      deadline?: string
    }

/**
 * One row of the flattened decision list. `conditions` are the case
 * labels along the path to this outcome (most-specific last); empty means
 * the catch-all "any other expense". `actions` is the ordered outcome
 * (one action, or a chain like Manager → Finance). This flat shape is
 * what the cards render — NO nested condition cards.
 */
export type RenderClause = {
  conditions: string[]
  actions: RenderAction[]
}

const SEGMENT_LABELS: Record<string, string> = {
  employee_manager: "Employee's manager",
  employee: "The employee",
  finance: "Finance",
  admins: "Admins",
}

function segmentLabel(s: WfEmployeeSegment): string {
  return SEGMENT_LABELS[s.name] ?? humanize(s.name)
}

function humanize(token: string): string {
  return token.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

function deadlineLabel(p: WfRequestReviewPayload): string | undefined {
  if (p.due_on_value == null || !p.due_on_unit) return undefined
  const unit =
    p.due_on_value === 1 ? p.due_on_unit.replace(/s$/, "") : p.due_on_unit
  return `Due in ${p.due_on_value} ${unit}`
}

function actionForStep(
  step: Extract<WfStep, { handler: string }>
): RenderAction | null {
  if (step.handler === "auto_approve") return { kind: "auto-approve" }
  if (step.handler === "auto_decline") return { kind: "auto-decline" }
  if (step.handler === "request_review") {
    return {
      kind: "review",
      approvers: (step.payload.employee_segments ?? []).map(segmentLabel),
      deadline: deadlineLabel(step.payload),
    }
  }
  return null
}

/**
 * Walk the workflow tree into a FLAT list of clauses (a decision list),
 * collapsing the nested factor_program + router "else-if" chains so the
 * UI never nests condition-cards inside condition-cards.
 *
 * - factor_program steps are plumbing → skipped (the router's `case.label`
 *   carries the human condition).
 * - A router fans into one path per case (the case label is appended to
 *   the condition trail) plus its `default` (adds NO label — it's the
 *   "else" continuation of the ladder).
 * - Actions seen before a router (e.g. a manager review that always runs
 *   first, then escalates by amount) are carried onto every downstream
 *   path so the chain reads correctly.
 * - Each terminal path emits one clause { conditions, actions }.
 */
function collectClauses(
  steps: WfStep[],
  conditions: string[],
  prefix: RenderAction[],
  out: RenderClause[]
): void {
  const actions = [...prefix]
  for (const step of steps) {
    if (isTerminate(step)) break
    if (isHandler(step)) {
      if (step.handler === "factor_program") continue // plumbing
      const a = actionForStep(step)
      if (a) actions.push(a)
      continue
    }
    if (isRouter(step)) {
      for (const c of step.cases) {
        collectClauses(c.steps, [...conditions, c.label], actions, out)
      }
      if (step.default) {
        collectClauses(step.default.steps, conditions, actions, out)
      }
      return // the router consumes the remainder of this sequence
    }
  }
  out.push({ conditions, actions })
}

export function flattenWorkflow(doc: WorkflowDoc): RenderClause[] {
  const out: RenderClause[] = []
  collectClauses(doc.steps, [], [], out)
  // Drop empty paths (a bare terminate with nothing to do).
  return out.filter((c) => c.actions.length > 0 || c.conditions.length > 0)
}

/* ── Seed ────────────────────────────────────────────────────────────── */

/**
 * Default seed = a small, sensible starter flow: under €50 auto-approves,
 * everything else goes to the Manager then Finance (7-day SLA). This is what
 * the Approval flows screen shows by default and what "Use defaults" seeds —
 * a clean base for the user to co-create on top of.
 */
export const SEED_APPROVAL_WORKFLOW: WorkflowDoc = {
  steps: [
    {
      id: "compute",
      title: "Compute routing flags",
      handler: "factor_program",
      payload: {
        program: { expression: "{ small: expensable.amount < 5000 }" },
      },
    },
    {
      title: "Route by amount",
      handler: "switch",
      cases: [
        {
          label: "Under €50",
          when: { source: "compute", variable: "small", op: "eq", value: true },
          steps: [
            { handler: "auto_approve" },
            { type: "terminate" },
          ],
        },
      ],
      default: {
        steps: [
          {
            handler: "request_review",
            title: "Manager",
            payload: {
              employee_segments: [{ name: "employee_manager" }],
              due_on_value: 7,
              due_on_unit: "days",
            },
          },
          {
            handler: "request_review",
            title: "Finance",
            payload: {
              employee_segments: [{ name: "finance" }],
              due_on_value: 7,
              due_on_unit: "days",
            },
          },
          { type: "terminate" },
        ],
      },
    },
  ],
}

/* ── Starter documents from the interview's approval question (Q4) ──────
 *
 * Maps the Q4 posture to a workflow document so the interview populates
 * the same approval screen co-creation edits. Mirrors the old
 * `buildApprovalIntent` postures, expressed in the real document shape.
 * ──────────────────────────────────────────────────────────────────── */

export type ApprovalPosture =
  | "manager-all"
  | "manager-finance"
  | "auto-small"
  | "finance-all"

const END: WfStep = { title: "End", type: "terminate" }

const autoApproveSteps = (): WfStep[] => [
  { title: "Auto-approve", handler: "auto_approve" },
  END,
]
const managerSteps = (): WfStep[] => [
  {
    title: "Manager approval",
    handler: "request_review",
    payload: {
      employee_segments: [{ name: "employee_manager" }],
      due_on_value: 3,
      due_on_unit: "days",
    },
  },
  END,
]
const managerThenFinanceSteps = (): WfStep[] => [
  {
    title: "Manager approval",
    handler: "request_review",
    payload: {
      employee_segments: [{ name: "employee_manager" }],
      due_on_value: 3,
      due_on_unit: "days",
    },
  },
  {
    title: "Finance review",
    handler: "request_review",
    payload: {
      employee_segments: [{ name: "finance" }],
      due_on_value: 5,
      due_on_unit: "days",
    },
  },
  END,
]
const financeSteps = (): WfStep[] => [
  {
    title: "Finance review",
    handler: "request_review",
    payload: {
      employee_segments: [{ name: "finance" }],
      due_on_value: 5,
      due_on_unit: "days",
    },
  },
  END,
]

export function buildApprovalWorkflow(posture: ApprovalPosture): WorkflowDoc {
  switch (posture) {
    case "manager-all":
      return { steps: managerSteps() }
    case "finance-all":
      return { steps: financeSteps() }
    case "auto-small":
      return {
        steps: [
          {
            id: "check_amount",
            title: "Check if the expense is under €200",
            handler: "factor_program",
            payload: {
              program: {
                expression:
                  '{ "under_200": expensable.amount != null && expensable.amount < 20000 }',
              },
            },
          },
          {
            title: "Route based on amount",
            cases: [
              {
                label: "Under €200",
                when: {
                  source: "check_amount",
                  variable: "under_200",
                  op: "eq",
                  value: true,
                },
                steps: autoApproveSteps(),
              },
            ],
            default: { steps: managerSteps() },
          },
        ],
      }
    case "manager-finance":
      // "Everything goes through the manager, then finance" — ONE flat rule
      // for ALL expenses, no amount tiering. Manager → Finance, every time.
      return { steps: managerThenFinanceSteps() }
  }
}

/* ── Complex reference workflow ──────────────────────────────────────────
 *
 * A well-formed document that captures the 10-rule Spanish-co/Italian-sub
 * policy used to develop the diagram renderer (the hardest realistic case).
 * Mirrors the shape real production One emits: a `compute` factor_program
 * (plumbing, hidden in the UI) followed by priority-ordered `switch` nodes
 * with compound `when`s, escalation chains, reject + reviewer references.
 * Used as the dev/demo seed so the visual is proven before the LLM wiring.
 * ──────────────────────────────────────────────────────────────────── */

const REVIEW_7D = (
  title: string,
  payload: WfRequestReviewPayload
): WfStep => ({
  handler: "request_review",
  title,
  payload: { due_on_value: 7, due_on_unit: "days", ...payload },
})

const MANAGER = (title: string): WfStep =>
  REVIEW_7D(title, { employee_segments: [{ name: "employee_manager" }] })

const FINANCE_TEAM_ID = 6

export const EXAMPLE_COMPLEX_WORKFLOW: WorkflowDoc = {
  steps: [
    {
      id: "compute",
      title: "Compute routing flags",
      handler: "factor_program",
      payload: {
        program: {
          expression:
            "{ amount_cents, currency, delegated, too_old, currency_mismatch, is_billable_project, is_mileage, mileage_km, mileage_round_trip, is_perdiem, perdiem_long_trip, is_italian_entity, owner_manager_manager_id }",
        },
      },
    },
    {
      id: "general",
      title: "General rules — applied first, in order",
      handler: "switch",
      cases: [
        {
          label: "Delegated submission",
          when: { source: "compute", variable: "delegated", op: "eq", value: true },
          steps: [
            MANAGER("Spender's manager review (delegated submission)"),
            { handler: "auto_approve" },
            { type: "terminate" },
          ],
        },
        {
          label: "Older than 60 days",
          when: { source: "compute", variable: "too_old", op: "eq", value: true },
          steps: [
            {
              handler: "auto_reject",
              payload: {
                reason: {
                  kind: "literal",
                  value:
                    "Submitted more than 60 days after the expense date — outside the reimbursement window.",
                },
              },
            },
            { type: "terminate" },
          ],
        },
        {
          label: "Currency ≠ entity currency",
          when: { source: "compute", variable: "currency_mismatch", op: "eq", value: true },
          steps: [
            REVIEW_7D("Finance review (currency mismatch)", {
              employee_segments: [
                { name: "anyone_in_team", input: { team_id: FINANCE_TEAM_ID } },
              ],
            }),
            { handler: "auto_approve" },
            { type: "terminate" },
          ],
        },
      ],
      default: {
        steps: [
          {
            id: "business",
            title: "Project, normal & per-diem rules",
            handler: "switch",
            cases: [
              {
                label: "Per-diem · trip longer than 10 days",
                when: {
                  all_of: [
                    { source: "compute", variable: "is_perdiem", op: "eq", value: true },
                    { source: "compute", variable: "perdiem_long_trip", op: "eq", value: true },
                  ],
                },
                steps: [
                  MANAGER("Manager review (per-diem trip > 10 days)"),
                  { handler: "auto_approve" },
                  { type: "terminate" },
                ],
              },
              {
                label: "Billable project · €500 or less",
                when: {
                  all_of: [
                    { source: "compute", variable: "is_billable_project", op: "eq", value: true },
                    { source: "compute", variable: "amount_cents", op: "lte", value: 50000 },
                  ],
                },
                steps: [{ handler: "auto_approve" }, { type: "terminate" }],
              },
              {
                label: "Billable project · over €500",
                when: {
                  all_of: [
                    { source: "compute", variable: "is_billable_project", op: "eq", value: true },
                    { source: "compute", variable: "amount_cents", op: "gt", value: 50000 },
                  ],
                },
                steps: [
                  MANAGER("Manager review (billable project > €500)"),
                  { handler: "auto_approve" },
                  { type: "terminate" },
                ],
              },
              {
                label: "Over €5,000",
                when: { source: "compute", variable: "amount_cents", op: "gt", value: 500000 },
                steps: [
                  MANAGER("Manager review (> €5,000)"),
                  REVIEW_7D("Manager's manager review (> €5,000)", {
                    reviewer_ids: {
                      kind: "reference",
                      source: "compute",
                      name: "owner_manager_manager_id",
                    },
                    fallback_employee_segments: [
                      { name: "anyone_in_team", input: { team_id: FINANCE_TEAM_ID } },
                    ],
                  }),
                  { handler: "auto_approve" },
                  { type: "terminate" },
                ],
              },
              {
                label: "Over €1,000 · Italian entity",
                when: {
                  all_of: [
                    { source: "compute", variable: "amount_cents", op: "gt", value: 100000 },
                    { source: "compute", variable: "is_italian_entity", op: "eq", value: true },
                  ],
                },
                steps: [
                  MANAGER("Manager review (> €1,000)"),
                  REVIEW_7D("Italian country lead review — Elissa Marini", {
                    reviewer_ids: [209],
                  }),
                  { handler: "auto_approve" },
                  { type: "terminate" },
                ],
              },
              {
                label: "Over €1,000",
                when: { source: "compute", variable: "amount_cents", op: "gt", value: 100000 },
                steps: [
                  MANAGER("Manager review (> €1,000)"),
                  { handler: "auto_approve" },
                  { type: "terminate" },
                ],
              },
              {
                label: "€75 – €1,000",
                when: {
                  all_of: [
                    { source: "compute", variable: "amount_cents", op: "gte", value: 7500 },
                    { source: "compute", variable: "amount_cents", op: "lte", value: 100000 },
                  ],
                },
                steps: [
                  MANAGER("Manager review (€75–€1,000)"),
                  { handler: "auto_approve" },
                  { type: "terminate" },
                ],
              },
              {
                label: "Under €75 · mileage",
                when: {
                  all_of: [
                    { source: "compute", variable: "amount_cents", op: "lt", value: 7500 },
                    { source: "compute", variable: "is_mileage", op: "eq", value: true },
                  ],
                },
                steps: [
                  {
                    id: "mileage",
                    title: "Mileage under €75",
                    handler: "switch",
                    cases: [
                      {
                        label: "Under 100 km · one-way",
                        when: {
                          all_of: [
                            { source: "compute", variable: "mileage_km", op: "gte", value: 0 },
                            { source: "compute", variable: "mileage_km", op: "lt", value: 100 },
                            { source: "compute", variable: "mileage_round_trip", op: "eq", value: false },
                          ],
                        },
                        steps: [{ handler: "auto_approve" }, { type: "terminate" }],
                      },
                    ],
                    default: {
                      steps: [
                        MANAGER("Manager review (mileage exception)"),
                        { handler: "auto_approve" },
                        { type: "terminate" },
                      ],
                    },
                  },
                ],
              },
              {
                label: "Under €75",
                when: {
                  all_of: [
                    { source: "compute", variable: "amount_cents", op: "lt", value: 7500 },
                    { source: "compute", variable: "is_mileage", op: "eq", value: false },
                  ],
                },
                steps: [{ handler: "auto_approve" }, { type: "terminate" }],
              },
            ],
            default: {
              steps: [
                MANAGER("Manager review"),
                { handler: "auto_approve" },
                { type: "terminate" },
              ],
            },
          },
        ],
      },
    },
  ],
}
