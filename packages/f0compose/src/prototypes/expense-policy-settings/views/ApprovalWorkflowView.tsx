import { F0Box, F0Button, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import { Add, ArrowRight, CheckCircle, CrossedCircle, Person } from "@factorialco/f0-react/icons/app"

import { useAiChat } from "@/copilot"

import {
  flattenWorkflow,
  type RenderAction,
  type RenderClause,
} from "../data/approvalWorkflow"
import type { PolicyData } from "../data/usePolicyData"

/**
 * Approval flows — renders the real approval **workflow document** as a
 * FLAT decision list of f0 Cards (one card per rule), NOT a nested tree.
 *
 * The document's nested factor_program + router "else-if" chains (how
 * amount tiers are actually stored) are flattened by `flattenWorkflow`
 * into ordered clauses — "When <condition> → <outcome>" — so the screen
 * reads top-to-bottom like a rule list instead of cards-within-cards.
 * Plumbing (factor_program internals, the when-wiring, terminate, ids) is
 * hidden; review deadlines are surfaced. Editing hands to One, which
 * regenerates the whole document.
 */
export function ApprovalWorkflowView(props: { policyData: PolicyData }) {
  const { approvalWorkflow } = props.policyData
  const { sendMessage } = useAiChat()
  const askOne = (content: string) => sendMessage(content)

  const clauses = flattenWorkflow(approvalWorkflow)

  return (
    <div className="approval-flow-cards">
      {/* Tighten the f0 Card footer (the Edit row): trim its top gap
          (mt-4 + pt-4 ≈ 32px) and bottom. Scoped to this view. */}
      <style>{
        ".approval-flow-cards [class*=\"border-t-f1-border-secondary\"]{margin-top:6px !important;padding-top:8px !important;padding-bottom:2px !important;}"
      }</style>
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Text
          variant="description"
          content="This is your expense approval flow, read top to bottom — the first rule that matches decides what happens. Ask One to add or change anything in plain language."
        />

        <F0Box display="flex" flexDirection="column" gap="md">
          {clauses.map((clause, i) => (
            <ClauseCard
              key={i}
              clause={clause}
              last={i === clauses.length - 1}
              onEdit={() => askOne("I want to change my expense approval flow.")}
            />
          ))}

          <F0Box>
            <F0Button
              variant="outline"
              size="lg"
              icon={Add}
              label="Add a rule"
              onClick={() =>
                askOne(
                  "Add a rule to my expense approval flow. Ask me for the condition (amount, category, team…) and what should happen."
                )
              }
            />
          </F0Box>
        </F0Box>
      </F0Box>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────── */

/** One rule: a condition (title) → its outcome chain (inline, flat). */
function ClauseCard(props: {
  clause: RenderClause
  last: boolean
  onEdit: () => void
}) {
  const { clause, last } = props
  const title =
    clause.conditions.length > 0
      ? clause.conditions.join(" · ")
      : last
        ? "Any other expense"
        : "All expenses"

  return (
    <F0Card title={title} secondaryActions={[{ label: "Edit", onClick: props.onEdit }]}>
      <F0Box display="flex" flexDirection="row" alignItems="center" gap="xs" flexWrap="wrap">
        {clause.actions.map((action, i) => (
          <F0Box
            key={i}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="xs"
          >
            {i > 0 && <F0Icon icon={ArrowRight} color="default" size="sm" />}
            <ActionPill action={action} />
          </F0Box>
        ))}
      </F0Box>
    </F0Card>
  )
}

/** A single outcome step as a compact inline pill (no nested card). */
function ActionPill(props: { action: RenderAction }) {
  const { action } = props
  const { icon, color, label } = describe(action)
  return (
    <F0Box
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      gap="xs"
      paddingX="sm"
      paddingY="xs"
      borderRadius="sm"
      background="secondary"
    >
      <F0Icon icon={icon} color={color} size="sm" />
      <F0Text variant="small" content={label} />
    </F0Box>
  )
}

function describe(action: RenderAction): {
  icon: Parameters<typeof F0Icon>[0]["icon"]
  color: "positive" | "warning" | "default"
  label: string
} {
  switch (action.kind) {
    case "auto-approve":
      return { icon: CheckCircle, color: "positive", label: "Auto-approve" }
    case "auto-decline":
      return { icon: CrossedCircle, color: "warning", label: "Auto-decline" }
    case "review": {
      const who = action.approvers.join(" & ") || "A reviewer"
      const label = action.deadline ? `${who} · ${action.deadline}` : who
      return { icon: Person, color: "default", label }
    }
  }
}
