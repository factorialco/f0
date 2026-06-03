import { F0Box, F0Button, F0Icon, F0Text } from "@factorialco/f0-react"
import {
  Add,
  ArrowRight,
  CheckCircle,
  CrossedCircle,
  People,
  Person,
  Shield,
  Star,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { useAiChat } from "@/copilot"

import type { ApprovalFlow, Approver, RuleFeasibility } from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

import {
  approverDisplayName,
  compareFlowsByPriority,
  flowOutcome,
  isDefaultFlow,
  triggerConditionList,
} from "./approvalFlowHelpers"

/**
 * Approval workflow — a SINGLE workflow shown as an ordered list of
 * WHEN → THEN rules (Ramp / Procurement-simplified). Rules are
 * evaluated top to bottom; the first match decides how an expense is
 * approved. The catch-all (no conditions) is pinned last as "Default".
 *
 * Freeform-first: each rule's `when` / `then` is natural-language text
 * One authored from whatever the admin said — even things Factorial
 * can't model. Structured chips/approver pills are optional enrichment.
 * A feasibility badge surfaces One's honest verdict ("not enforceable")
 * so the impossible is shown AND flagged rather than silently accepted.
 *
 * Editing is co-creation-first: "Add rule" and per-rule "Edit" hand off
 * to One in the chat, which mutates the same state live.
 */
export function ApprovalWorkflowView(props: { policyData: PolicyData }) {
  const { approvalFlows, categories } = props.policyData
  const { sendMessage } = useAiChat()

  const categoryNames = useMemo(() => {
    const m = new Map<string, string>()
    for (const c of categories) m.set(c.id, c.name)
    return m
  }, [categories])

  const { rules, defaultFlow } = useMemo(() => {
    const sorted = [...approvalFlows].sort(compareFlowsByPriority)
    return {
      rules: sorted.filter((f) => !isDefaultFlow(f)),
      defaultFlow: sorted.find((f) => isDefaultFlow(f)) ?? null,
    }
  }, [approvalFlows])

  // Use sendMessage (not appendMessages) so the "Edit" / "Add rule"
  // CTAs RELIABLY trigger a One turn — appendMessages only adds the
  // bubble and can leave the chat stuck on "Thinking…" without an
  // actual agent run.
  const askOne = (content: string) => sendMessage(content)

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Text
        variant="description"
        content="Rules run top to bottom — the first match decides how an expense is approved. Anything that doesn't match falls to the Default. Ask One to add or change a rule in plain language."
      />

      <F0Box display="flex" flexDirection="column" gap="md">
        {rules.map((flow, i) => (
          <RuleCard
            key={flow.id}
            index={i + 1}
            flow={flow}
            categoryNames={categoryNames}
            policyData={props.policyData}
            onEdit={() => askOne(`I want to change the "${flow.name}" approval rule.`)}
          />
        ))}

        <F0Box>
          <F0Button
            variant="outline"
            size="lg"
            icon={Add}
            label="Add rule"
            onClick={() =>
              askOne(
                "Add a new approval rule. Ask me for the conditions (amount, team, country…) and who should approve."
              )
            }
          />
        </F0Box>
      </F0Box>

      {defaultFlow && (
        <RuleCard
          flow={defaultFlow}
          categoryNames={categoryNames}
          policyData={props.policyData}
          isDefault
          onEdit={() => askOne("I want to change the default approval rule.")}
        />
      )}
    </F0Box>
  )
}

/* ──────────────────────────────────────────────────────────────────── */

function RuleCard(props: {
  flow: ApprovalFlow
  categoryNames: ReadonlyMap<string, string>
  policyData: PolicyData
  index?: number
  isDefault?: boolean
  onEdit: () => void
}) {
  const { flow, categoryNames, isDefault, index, onEdit } = props
  const conditions = triggerConditionList(flow.trigger, categoryNames)
  const outcome = flowOutcome(flow)
  const title = isDefault ? flow.name : `${index}. ${flow.name}`

  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="sm"
      paddingX="lg"
      paddingY="md"
      border="default"
      borderRadius="md"
      background={isDefault ? "secondary" : "primary"}
    >
      {/* Title + kind + feasibility + edit */}
      <F0Box display="flex" flexDirection="row" alignItems="center" gap="sm">
        <F0Box grow>
          <F0Text variant="label" content={title} />
        </F0Box>
        {flow.ruleKind === "require" && !isDefault && <RequireBadge />}
        {flow.feasibility && flow.feasibility !== "supported" && (
          <FeasibilityBadge feasibility={flow.feasibility} />
        )}
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button variant="ghost" size="sm" label="Edit" onClick={onEdit} />
        </div>
      </F0Box>

      {/* WHEN — freeform text if present, else structured chips */}
      <F0Box display="flex" flexDirection="row" alignItems="start" gap="sm" flexWrap="wrap">
        <Eyebrow label={isDefault ? "ELSE" : "WHEN"} />
        {flow.when ? (
          <F0Text variant="body" content={flow.when} />
        ) : isDefault ? (
          <F0Text variant="body" color="muted" content="everything not matched above" />
        ) : conditions.length === 0 ? (
          <Chip content="any expense" />
        ) : (
          conditions.map((c) => <Chip key={c.id} content={`${c.label} ${c.value}`} />)
        )}
      </F0Box>

      {/* THEN — freeform text if present, else structured outcome */}
      <F0Box display="flex" flexDirection="row" alignItems="start" gap="sm" flexWrap="wrap">
        <Eyebrow label={flow.ruleKind === "require" ? "ALWAYS" : "THEN"} />
        {flow.then ? (
          <F0Box display="flex" flexDirection="row" alignItems="center" gap="xs" flexWrap="wrap">
            {outcome.kind === "auto-approve" && (
              <F0Icon icon={CheckCircle} color="positive" size="md" />
            )}
            <F0Text variant="body" content={flow.then} />
          </F0Box>
        ) : (
          <Outcome flow={flow} outcome={outcome} policyData={props.policyData} />
        )}
      </F0Box>

      {/* One's alignment note when something isn't cleanly supported */}
      {flow.note && (
        <F0Box display="flex" flexDirection="row" alignItems="start" gap="sm">
          <Eyebrow label="" />
          <F0Text variant="small" color="muted" content={`One: ${flow.note}`} />
        </F0Box>
      )}
    </F0Box>
  )
}

function Outcome(props: {
  flow: ApprovalFlow
  outcome: ReturnType<typeof flowOutcome>
  policyData: PolicyData
}) {
  const { flow, outcome, policyData } = props

  if (outcome.kind === "auto-approve") {
    return (
      <F0Box display="inline-flex" flexDirection="row" alignItems="center" gap="xs">
        <F0Icon icon={CheckCircle} color="positive" size="md" />
        <F0Text variant="body" content="Auto-approve" />
      </F0Box>
    )
  }
  if (outcome.kind === "auto-decline") {
    return (
      <F0Box display="inline-flex" flexDirection="row" alignItems="center" gap="xs">
        <F0Icon icon={CrossedCircle} color="warning" size="md" />
        <F0Text variant="body" content="Auto-decline" />
      </F0Box>
    )
  }

  return (
    <F0Box display="flex" flexDirection="row" alignItems="center" gap="xs" flexWrap="wrap">
      {flow.steps.map((step, i) => (
        <F0Box key={step.id} display="inline-flex" flexDirection="row" alignItems="center" gap="xs">
          {i > 0 && <F0Icon icon={ArrowRight} color="default" size="sm" />}
          <ApproverPill
            approver={step.approver}
            label={approverDisplayName(step.approver, policyData.users)}
          />
        </F0Box>
      ))}
    </F0Box>
  )
}

function ApproverPill(props: { approver: Approver; label: string }) {
  const { approver, label } = props
  const isRelation = approver.kind === "relation"
  const icon =
    approver.kind === "relation"
      ? Star
      : approver.kind === "role" && approver.role === "admins"
        ? Shield
        : approver.kind === "role" && approver.role === "team"
          ? People
          : Person
  return (
    <F0Box
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      gap="xs"
      paddingX="sm"
      paddingY="xs"
      borderRadius="sm"
      border="default"
      background="primary"
    >
      <F0Icon icon={icon} color={isRelation ? "promote" : "default"} size="sm" />
      <F0Text variant="small" content={label} />
    </F0Box>
  )
}

function RequireBadge() {
  // A mandatory reviewer — its approver is ALWAYS added when the
  // condition matches, regardless of which routing rule wins. Violet to
  // match the "stacks on top" / gatekeeper visual language.
  return (
    <F0Box
      display="inline-flex"
      alignItems="center"
      gap="xs"
      paddingX="sm"
      paddingY="xs"
      borderRadius="sm"
      background="tertiary"
    >
      <F0Icon icon={Shield} color="promote" size="sm" />
      <F0Text variant="small" content="Always require" />
    </F0Box>
  )
}

function FeasibilityBadge(props: { feasibility: RuleFeasibility }) {
  const label =
    props.feasibility === "needs-setup" ? "Needs setup" : "Not enforceable"
  return (
    <F0Box
      display="inline-flex"
      alignItems="center"
      paddingX="sm"
      paddingY="xs"
      borderRadius="sm"
      background="tertiary"
    >
      <F0Text variant="small" content={label} />
    </F0Box>
  )
}

function Chip(props: { content: string }) {
  return (
    <F0Box
      display="inline-flex"
      alignItems="center"
      paddingX="sm"
      paddingY="xs"
      borderRadius="sm"
      background="secondary"
    >
      <F0Text variant="small" content={props.content} />
    </F0Box>
  )
}

function Eyebrow(props: { label: string }) {
  return (
    <div style={{ minWidth: 64, paddingTop: 2 }}>
      <F0Text variant="small" color="muted" content={props.label} />
    </div>
  )
}
