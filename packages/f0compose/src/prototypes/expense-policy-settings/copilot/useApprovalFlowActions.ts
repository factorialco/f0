import { useCopilotAction } from "@/copilot"

import type {
  Approver,
  ApproverRole,
  ApprovalTrigger,
} from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

/**
 * Silent frontend actions for the **Approval flows** chat section
 * (chat spec §5). The agent calls these in response to free-text
 * edits like *"add a team lead step before manager"* or *"make the
 * high value threshold €2,000"*. Each action mutates `policyData`
 * and returns a concise confirmation the agent can weave into its
 * 1-line acknowledgement bubble.
 *
 * Why per-mutation actions rather than one big "replaceFlow":
 *  - Spec §5 emphasises one narrow edit per turn. Per-action handlers
 *    let the agent acknowledge exactly what changed ("Added Team
 *    lead as step 1") without re-emitting the whole flow.
 *  - Approver shape is a discriminated union (`role` | `user`). A
 *    single bag-of-params action would force the agent to construct
 *    the union object; splitting into role-vs-user actions keeps the
 *    payload flat and the agent's prompt simple.
 *
 * `available: "enabled"` (no render): these are pure state mutations.
 * The canvas re-renders against `policyData` and the agent's text
 * bubble is the response — no inline UI is needed.
 *
 * Allowed approver roles must match `ApproverRole` in `data/types.ts`.
 * Unknown role strings are rejected with `{ ok: false, error }` so
 * the agent self-corrects rather than mutating to an invalid state.
 */
export function useApprovalFlowActions(args: { policyData: PolicyData }): void {
  const { policyData } = args

  const ALLOWED_ROLES: readonly ApproverRole[] = [
    "self",
    "manager",
    "time-off-approver",
    "admins",
    "team",
    "team-lead",
  ]

  function parseApprover(
    kind: string,
    role: string | undefined,
    userId: string | undefined,
    relation?: string | undefined,
    relationLabel?: string | undefined
  ): { ok: true; approver: Approver } | { ok: false; error: string } {
    if (kind === "role") {
      if (!role) return { ok: false, error: "Missing role for kind=role" }
      if (!(ALLOWED_ROLES as readonly string[]).includes(role)) {
        return {
          ok: false,
          error: `Unknown role "${role}". Allowed: ${ALLOWED_ROLES.join(", ")}`,
        }
      }
      return { ok: true, approver: { kind: "role", role: role as ApproverRole } }
    }
    if (kind === "user") {
      if (!userId) return { ok: false, error: "Missing userId for kind=user" }
      return { ok: true, approver: { kind: "user", userId } }
    }
    if (kind === "relation") {
      // Open/dynamic approver — anything that isn't a preset role or a
      // specific person ("Project manager", "Cost-centre owner",
      // "Abigail's cat"). `relation` is a free-form slug; `label` is
      // the human display string (defaults to the relation if absent).
      if (!relation && !relationLabel) {
        return { ok: false, error: "Missing relation/label for kind=relation" }
      }
      const slug = (relation || relationLabel || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
      return {
        ok: true,
        approver: {
          kind: "relation",
          relation: slug || "custom",
          label: relationLabel || relation || "Custom approver",
        },
      }
    }
    return { ok: false, error: `Unknown approver kind "${kind}"` }
  }

  // ── Create flow ────────────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.createApprovalFlow",
    description:
      "Create a new approval flow with a default single step (role 'manager') and no trigger conditions. Optionally pass `initialRole` to set the default step's role at creation time — handy for auto-approve (`initialRole: 'self'`) so you don't need a follow-up updateApprovalStep call. Returns the new flow's id so the agent can target it in follow-up calls (renameApprovalFlow, addApprovalStep, setFlowTrigger).",
    available: "enabled",
    parameters: [
      {
        name: "initialRole",
        type: "string",
        description:
          "Optional. One of: self, manager, time-off-approver, admins, team, team-lead. Defaults to 'manager'. Use 'self' to create an auto-approve flow in a single tool call.",
        required: false,
      },
    ],
    handler: ({ initialRole }) => {
      // Validate optional role; on bad input, fall back silently to
      // the default rather than rejecting — the agent can always fix
      // the step afterwards with updateApprovalStep.
      const role =
        typeof initialRole === "string" &&
        (ALLOWED_ROLES as readonly string[]).includes(initialRole)
          ? (initialRole as ApproverRole)
          : undefined
      const id = policyData.addFlow(role ? { initialRole: role } : undefined)
      return { ok: true, flowId: id }
    },
  })

  // ── Rename flow ────────────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.renameApprovalFlow",
    description:
      "Rename an existing approval flow. Empty names become 'Untitled flow'.",
    available: "enabled",
    parameters: [
      { name: "flowId", type: "string", required: true },
      { name: "nextName", type: "string", required: true },
    ],
    handler: ({ flowId, nextName }) => {
      policyData.renameFlow(flowId as string, nextName as string)
      return { ok: true }
    },
  })

  // ── Delete flow ────────────────────────────────────────────────────
  useCopilotAction({
    name: "deleteApprovalFlow",
    description:
      "Delete an approval flow. Use sparingly — confirm with the user first when the flow has non-default steps or a non-trivial trigger.",
    available: "enabled",
    parameters: [{ name: "flowId", type: "string", required: true }],
    handler: ({ flowId }) => {
      policyData.deleteFlow(flowId as string)
      return { ok: true }
    },
  })

  // ── Set flow trigger ───────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.setFlowTrigger",
    description:
      "Replace a rule's WHEN conditions. amountMin / amountMax are in expense currency (numbers, omit either bound). categoryIds is a flat list; empty means 'any category'. scopeKind selects who the rule applies to: 'everyone' | 'people' | 'entities' | 'attributes'. For 'people'/'entities' pass scopeIds. For 'attributes' (the PREFERRED way to express a group like 'the product team in Spain') pass scopeTeam / scopeCountry / scopeDepartment — it stays a legible, dynamic filter instead of a frozen list of names.",
    available: "enabled",
    parameters: [
      { name: "flowId", type: "string", required: true },
      { name: "amountMin", type: "number", required: false },
      { name: "amountMax", type: "number", required: false },
      { name: "categoryIds", type: "string[]", required: false },
      {
        name: "scopeKind",
        type: "string",
        description: "everyone | people | entities | attributes",
        required: false,
      },
      { name: "scopeIds", type: "string[]", required: false },
      {
        name: "scopeTeam",
        type: "string",
        description: "For scopeKind=attributes: team name, e.g. 'Product'",
        required: false,
      },
      {
        name: "scopeCountry",
        type: "string",
        description:
          "For scopeKind=attributes: country, one of Germany | Spain | USA | France | UK",
        required: false,
      },
      {
        name: "scopeDepartment",
        type: "string",
        description:
          "For scopeKind=attributes: department, e.g. 'Sales' | 'Engineering' | 'Finance'",
        required: false,
      },
    ],
    handler: ({
      flowId,
      amountMin,
      amountMax,
      categoryIds,
      scopeKind,
      scopeIds,
      scopeTeam,
      scopeCountry,
      scopeDepartment,
    }) => {
      const amount: { min?: number; max?: number } = {}
      if (typeof amountMin === "number") amount.min = amountMin
      if (typeof amountMax === "number") amount.max = amountMax

      const ids = (categoryIds as string[] | undefined) ?? []
      const kind = (scopeKind as string | undefined) ?? "everyone"
      const sids = (scopeIds as string[] | undefined) ?? []

      let scope: ApprovalTrigger["scope"]
      if (kind === "entities") scope = { kind: "entities", entityIds: sids }
      else if (kind === "people") scope = { kind: "people", personIds: sids }
      else if (kind === "attributes")
        scope = {
          kind: "attributes",
          ...(typeof scopeTeam === "string" && scopeTeam
            ? { team: scopeTeam }
            : {}),
          ...(typeof scopeCountry === "string" && scopeCountry
            ? { country: scopeCountry as never }
            : {}),
          ...(typeof scopeDepartment === "string" && scopeDepartment
            ? { department: scopeDepartment as never }
            : {}),
        }
      else scope = { kind: "everyone" }

      policyData.setFlowTrigger(flowId as string, {
        amount,
        categoryIds: ids,
        scope,
      })
      return { ok: true }
    },
  })

  // ── Add step ───────────────────────────────────────────────────────
  useCopilotAction({
    name: "addApprovalStep",
    description:
      "Append a new approval step to a flow. The new step defaults to the 'manager' role. Use updateApprovalStep immediately after to set the approver or label.",
    available: "enabled",
    parameters: [{ name: "flowId", type: "string", required: true }],
    handler: ({ flowId }) => {
      const stepId = policyData.addStep(flowId as string)
      return { ok: true, stepId }
    },
  })

  // ── Update step ────────────────────────────────────────────────────
  useCopilotAction({
    name: "updateApprovalStep",
    description:
      "Update an approval step's approver. `approverKind` is 'role' | 'user' | 'relation'. For 'role' pass `role` (self, manager, time-off-approver, admins, team, team-lead). For 'user' pass `userId` (a real person resolved from users[]). For 'relation' pass `relation` (a free-form approver concept that ISN'T a Factorial role or a specific person — e.g. 'project-manager', 'cost-centre-owner', even 'abigails-cat') plus `relationLabel` for display. Use 'relation' for anything the system can't natively model, and pair it with setRuleNarrative feasibility='needs-setup' or 'not-enforceable'. `label` is the step's intent title; omit to clear.",
    available: "enabled",
    parameters: [
      { name: "flowId", type: "string", required: true },
      { name: "stepId", type: "string", required: true },
      {
        name: "approverKind",
        type: "string",
        description: "'role' | 'user' | 'relation'",
        required: false,
      },
      { name: "role", type: "string", required: false },
      { name: "userId", type: "string", required: false },
      {
        name: "relation",
        type: "string",
        description: "For kind=relation: free-form slug, e.g. 'project-manager'",
        required: false,
      },
      {
        name: "relationLabel",
        type: "string",
        description: "For kind=relation: human display, e.g. 'Project manager'",
        required: false,
      },
      { name: "label", type: "string", required: false },
    ],
    handler: ({
      flowId,
      stepId,
      approverKind,
      role,
      userId,
      relation,
      relationLabel,
      label,
    }) => {
      const patch: { approver?: Approver; label?: string } = {}
      if (typeof approverKind === "string") {
        const parsed = parseApprover(
          approverKind,
          typeof role === "string" ? role : undefined,
          typeof userId === "string" ? userId : undefined,
          typeof relation === "string" ? relation : undefined,
          typeof relationLabel === "string" ? relationLabel : undefined
        )
        if (!parsed.ok) return parsed
        patch.approver = parsed.approver
      }
      if (typeof label === "string") patch.label = label
      policyData.updateStep(flowId as string, stepId as string, patch)
      return { ok: true }
    },
  })

  // ── Delete step ────────────────────────────────────────────────────
  useCopilotAction({
    name: "deleteApprovalStep",
    description:
      "Remove a step from a flow. The flow must keep at least one step; the underlying mutation tolerates an empty result but a flow with no approvers is meaningless.",
    available: "enabled",
    parameters: [
      { name: "flowId", type: "string", required: true },
      { name: "stepId", type: "string", required: true },
    ],
    handler: ({ flowId, stepId }) => {
      policyData.deleteStep(flowId as string, stepId as string)
      return { ok: true }
    },
  })

  // ── Set rule narrative (freeform WHEN/THEN + feasibility) ──────────
  // The heart of open-ended co-creation. After (or instead of) wiring
  // up structured trigger/steps, the agent records the rule in plain
  // language AND its honest feasibility. This is what lets the user
  // ask for ANYTHING ("on the last Friday of the month, Abigail's cat
  // approves") — the rule is captured as text and the agent flags how
  // real it is rather than silently dropping it.
  useCopilotAction({
    name: "expensePolicyPrototype.setRuleNarrative",
    description:
      "Record the human-readable summary of a rule and how enforceable it is. `when` = the condition in plain language ('Amount under €200 from the Product team in Spain', 'Last Friday of every month'). `then` = the outcome in plain language ('Auto-approve', \"Abigail's cat approves\"). `feasibility`: 'supported' (maps cleanly to amount/team/country/real person or role), 'needs-setup' (plausible but needs something that doesn't exist yet, e.g. a 'Project manager' approver or an uncreated category), or 'not-enforceable' (captured as intent but the system can't act on it automatically — temporal scheduling, a pet). `note` = your short alignment message shown under the rule when feasibility isn't 'supported' (explain why + offer a realistic alternative). ALWAYS call this when creating or editing a rule so the card reads naturally and tells the truth. Pair structured tools (setFlowTrigger / updateApprovalStep) with this whenever the request maps to them.",
    available: "enabled",
    parameters: [
      { name: "flowId", type: "string", required: true },
      { name: "when", type: "string", required: false },
      { name: "then", type: "string", required: false },
      {
        name: "feasibility",
        type: "string",
        description: "supported | needs-setup | not-enforceable",
        required: false,
      },
      { name: "note", type: "string", required: false },
    ],
    handler: ({ flowId, when, then, feasibility, note }) => {
      const allowed = ["supported", "needs-setup", "not-enforceable"]
      const f =
        typeof feasibility === "string" && allowed.includes(feasibility)
          ? (feasibility as "supported" | "needs-setup" | "not-enforceable")
          : undefined
      policyData.setFlowNarrative(flowId as string, {
        ...(typeof when === "string" ? { when } : {}),
        ...(typeof then === "string" ? { then } : {}),
        ...(f !== undefined ? { feasibility: f } : {}),
        ...(typeof note === "string" ? { note } : {}),
      })
      return { ok: true }
    },
  })

  // ── Upsert a whole rule (the primary co-creation tool) ────────────
  // One expresses an entire rule in a single call: conditions +
  // approver chain + freeform when/then + feasibility. Create when
  // ruleId is omitted, edit when present. This is far more reliable
  // than chaining create→trigger→step→narrative across a turn.
  useCopilotAction({
    name: "expensePolicyPrototype.upsertApprovalRule",
    description:
      "Create or edit one rule in the approval workflow in a single call.",
    available: "enabled",
    parameters: [
      { name: "ruleId", type: "string", required: false },
      { name: "name", type: "string", required: true },
      { name: "when", type: "string", required: false },
      { name: "then", type: "string", required: false },
      { name: "feasibility", type: "string", required: false },
      { name: "note", type: "string", required: false },
      { name: "amountMin", type: "number", required: false },
      { name: "amountMax", type: "number", required: false },
      { name: "scopeKind", type: "string", required: false },
      { name: "scopeIds", type: "string[]", required: false },
      { name: "scopeTeam", type: "string", required: false },
      { name: "scopeCountry", type: "string", required: false },
      { name: "scopeDepartment", type: "string", required: false },
      { name: "approversJson", type: "string", required: false },
      { name: "ruleKind", type: "string", required: false },
    ],
    handler: (args) => {
      const a = args as Record<string, unknown>
      const get = (k: string) => a[k]
      const str = (k: string) =>
        typeof get(k) === "string" ? (get(k) as string) : undefined
      const num = (k: string) =>
        typeof get(k) === "number" ? (get(k) as number) : undefined

      // Amount band
      const amount: { min?: number; max?: number } = {}
      const amountMin = num("amountMin")
      const amountMax = num("amountMax")
      if (typeof amountMin === "number") amount.min = amountMin
      if (typeof amountMax === "number") amount.max = amountMax

      // Scope
      const kind = str("scopeKind") ?? "everyone"
      const sids = (get("scopeIds") as string[] | undefined) ?? []
      let scope: ApprovalTrigger["scope"]
      if (kind === "entities") scope = { kind: "entities", entityIds: sids }
      else if (kind === "people") scope = { kind: "people", personIds: sids }
      else if (kind === "attributes")
        scope = {
          kind: "attributes",
          ...(str("scopeTeam") ? { team: str("scopeTeam") } : {}),
          ...(str("scopeCountry")
            ? { country: str("scopeCountry") as never }
            : {}),
          ...(str("scopeDepartment")
            ? { department: str("scopeDepartment") as never }
            : {}),
        }
      else scope = { kind: "everyone" }

      // Approver chain → steps
      let approvers: Array<Record<string, unknown>> = []
      const aj = str("approversJson")
      if (aj) {
        try {
          const parsed = JSON.parse(aj)
          if (Array.isArray(parsed)) approvers = parsed
        } catch {
          /* ignore malformed */
        }
      }
      const stamp = Date.now()
      const steps = approvers
        .map((ap, i) => {
          const parsed = parseApprover(
            typeof ap.kind === "string" ? ap.kind : "role",
            typeof ap.role === "string" ? ap.role : undefined,
            typeof ap.userId === "string" ? ap.userId : undefined,
            typeof ap.relation === "string" ? ap.relation : undefined,
            typeof ap.label === "string" ? ap.label : undefined
          )
          if (!parsed.ok) return null
          return {
            id: `step-${stamp}-${i}`,
            approver: parsed.approver,
            ...(typeof ap.stepLabel === "string" && ap.stepLabel
              ? { label: ap.stepLabel }
              : {}),
          }
        })
        .filter((s): s is NonNullable<typeof s> => s !== null)

      // A rule with no approvers is meaningless — default to manager.
      if (steps.length === 0) {
        steps.push({
          id: `step-${stamp}-0`,
          approver: { kind: "role", role: "manager" },
        })
      }

      // Feasibility
      const fRaw = str("feasibility")
      const feasibility =
        fRaw === "supported" ||
        fRaw === "needs-setup" ||
        fRaw === "not-enforceable"
          ? fRaw
          : undefined

      // Resolve the target rule. With a ruleId → edit it. Without one →
      // create, BUT if a non-default rule with the same name already
      // exists, treat it as an edit so the agent re-calling the tool in
      // one turn updates in place instead of duplicating the row.
      const name = str("name") ?? "New rule"
      const ruleId = str("ruleId")
      const existing = ruleId
        ? policyData.approvalFlows.find((f) => f.id === ruleId)
        : policyData.approvalFlows.find(
            (f) =>
              f.name.trim().toLowerCase() === name.trim().toLowerCase() &&
              f.id !== "flow-standard"
          )
      const effectiveId = existing?.id ?? `rule-${stamp}`
      const priority = existing?.priority ?? 40

      // v2: route (first-match base chain) vs require (always-added
      // mandatory reviewer). Default to route. Require rules stack onto
      // the resolved chain regardless of amount — see resolveApprovalChain.
      const rkRaw = str("ruleKind")
      const ruleKind = rkRaw === "require" ? "require" : "route"

      policyData.upsertFlow({
        id: effectiveId,
        name,
        ruleKind,
        ...(str("when") ? { when: str("when") } : {}),
        ...(str("then") ? { then: str("then") } : {}),
        ...(feasibility ? { feasibility } : {}),
        ...(str("note") ? { note: str("note") } : {}),
        trigger: { amount, categoryIds: [], scope },
        steps,
        priority,
      })
      return { ok: true, ruleId: effectiveId }
    },
  })

  // ── Mark approval flows section complete ───────────────────────────
  // Spec §5: when the user signals they're done with approval flows
  // (explicitly or by navigating to certified docs), the agent should
  // confirm and transition. This action lets the agent flip the
  // wizard's `outerDone` for "approval-flows" — paired with the
  // existing `completeStep` action from `useWizardCompletionActions`.
  // We don't duplicate it here; the agent uses that one (declared in
  // wizard/useWizardCompletionActions.ts) with `stepId: "approval-flows"`.
}
