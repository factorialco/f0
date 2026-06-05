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

export type WfEmployeeSegment = { name: string }

export type WfRequestReviewPayload = {
  employee_segments: WfEmployeeSegment[]
  /** Deadline magnitude, e.g. 3 (with `due_on_unit`). */
  due_on_value?: number
  /** Deadline unit, e.g. "days". */
  due_on_unit?: string
}

export type WfProgram = {
  /** The raw expression (hidden in the UI — plumbing). */
  expression: string
  inputs?: Record<string, unknown>
  output?: Record<string, unknown>
}

export type WfWhen = {
  /** Id of the upstream factor_program step that produced `variable`. */
  source: string
  variable: string
  op: string
  value: unknown
}

export type WfCase = {
  /** Human label shown in the UI (e.g. "Below €10"). */
  label: string
  when: WfWhen
  steps: WfStep[]
}

export type WfStep =
  | { id?: string; title: string; handler: "auto_approve" }
  | { id?: string; title: string; handler: "auto_decline" }
  | {
      id?: string
      title: string
      handler: "request_review"
      payload: WfRequestReviewPayload
    }
  | {
      id?: string
      title: string
      handler: "factor_program"
      payload: { program: WfProgram }
    }
  | { id?: string; title: string; cases: WfCase[]; default?: { steps: WfStep[] } }
  | { title: string; type: "terminate" }

export type WorkflowDoc = { steps: WfStep[] }

/* ── Type guards ─────────────────────────────────────────────────────── */

export function isTerminate(
  s: WfStep
): s is { title: string; type: "terminate" } {
  return "type" in s && s.type === "terminate"
}
export function isRouter(
  s: WfStep
): s is { id?: string; title: string; cases: WfCase[]; default?: { steps: WfStep[] } } {
  return "cases" in s
}
export function isHandler(
  s: WfStep
): s is Extract<WfStep, { handler: string }> {
  return "handler" in s
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
      approvers: step.payload.employee_segments.map(segmentLabel),
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
 * Default seed = the screenshot's example: below €10 auto-approves,
 * everything else goes to the employee's manager (due in 3 days). Shows
 * off every card type (condition, branch, auto-approve, review+deadline).
 */
export const SEED_APPROVAL_WORKFLOW: WorkflowDoc = {
  steps: [
    {
      id: "check_amount",
      title: "Check if the expense is below €10",
      handler: "factor_program",
      payload: {
        program: {
          expression:
            '{ "below_10_eur": expensable.amount != null && expensable.currency == "EUR" && expensable.amount < 1000 }',
        },
      },
    },
    {
      title: "Route based on amount",
      cases: [
        {
          label: "Below €10",
          when: {
            source: "check_amount",
            variable: "below_10_eur",
            op: "eq",
            value: true,
          },
          steps: [
            { title: "Auto-approve", handler: "auto_approve" },
            { title: "End", type: "terminate" },
          ],
        },
      ],
      default: {
        steps: [
          {
            title: "Manager approval",
            handler: "request_review",
            payload: {
              employee_segments: [{ name: "employee_manager" }],
              due_on_value: 3,
              due_on_unit: "days",
            },
          },
          { title: "End", type: "terminate" },
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
