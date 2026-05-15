import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { Check, Pencil } from "@factorialco/f0-react/icons/app"

import { useCopilotAction } from "@/copilot"

import type { ExpensePolicySetup } from "./useExpensePolicySetup"

/**
 * `renderRegularSummary` — inline chat tool the agent calls after Q3
 * to recap the answers and offer two CTAs:
 *
 *  - "Looks good" → fires `completeSubStep("regular")` via the agent
 *    (the action's onClick `sendMessage`s a confirmation; the agent
 *    is instructed to call `completeSubStep` in response).
 *  - "Make changes" → opens a follow-up clarifying-question listing
 *    the three questions; the user picks one to re-answer. Slice 1
 *    delegates this to the agent: the button posts a user message
 *    "I want to change my answers" and the skill's system prompt
 *    walks the user through the re-ask loop (hard-reset to defaults
 *    per spec §8 happens server-side via the cascade tools).
 *
 * The summary content is read from `setupState.answers`. If the agent
 * triggers this action before all three are answered, we paint a
 * dimmed "Still gathering details…" placeholder rather than crash.
 */
export function useRenderRegularSummaryAction(args: {
  setupState: ExpensePolicySetup
  onLooksGood: () => void
  onMakeChanges: () => void
}): void {
  const { setupState, onLooksGood, onMakeChanges } = args

  useCopilotAction({
    name: "renderRegularSummary",
    description:
      "Render the Regular expense form summary card in chat after Q1–Q3 are answered. Shows what was configured and offers two CTAs: 'Looks good' (advances the wizard) and 'Make changes' (re-asks one of the questions).",
    available: "frontend",
    parameters: [],
    render: () => {
      const { q1, q2, q3 } = setupState.answers
      const ready = q1 !== null && q2 !== null && q3 !== null
      return (
        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          padding="md"
          background="secondary"
          borderRadius="md"
        >
          <F0Heading content="Regular expense form — recap" variant="heading" />
          {!ready ? (
            <F0Text
              content="Still gathering details…"
              variant="description"
            />
          ) : (
            <F0Box display="flex" flexDirection="column" gap="sm">
              <SummaryLine
                label="Expense kinds"
                value={renderQ1(q1)}
              />
              <SummaryLine
                label="Extra info"
                value={renderQ2(q2)}
              />
              <SummaryLine
                label="Payment"
                value={renderQ3(q3)}
              />
            </F0Box>
          )}
          <F0Box display="flex" flexDirection="row" gap="sm">
            <F0Button
              variant="default"
              size="md"
              label="Looks good"
              icon={Check}
              onClick={onLooksGood}
            />
            <F0Button
              variant="outline"
              size="md"
              label="Make changes"
              icon={Pencil}
              onClick={onMakeChanges}
            />
          </F0Box>
        </F0Box>
      )
    },
  })
}

function SummaryLine(props: { label: string; value: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={props.label} variant="label" />
      <F0Text content={props.value} variant="body" />
    </F0Box>
  )
}

const Q1_LABEL: Record<string, string> = {
  meals: "Meals",
  travel: "Travel",
  "per-diems": "Per diems",
  "office-supplies": "Office supplies",
  fuel: "Fuel",
  software: "Software",
  training: "Training",
}

function renderQ1(
  q1: NonNullable<ExpensePolicySetup["answers"]["q1"]>
): string {
  const labels = q1.selected.map((id) => Q1_LABEL[id] ?? id)
  if (q1.custom) labels.push(`"${q1.custom}" (custom)`)
  return labels.length > 0 ? labels.join(", ") : "None"
}

const Q2_LABEL: Record<string, string> = {
  project: "Project",
  "cost-center": "Cost center",
  description: "Description",
  "internal-reference": "Internal reference",
  "nothing-extra": "Nothing extra",
}

function renderQ2(
  q2: NonNullable<ExpensePolicySetup["answers"]["q2"]>
): string {
  if (q2.selected.includes("nothing-extra")) return "Nothing extra"
  const labels = q2.selected.map((id) => Q2_LABEL[id] ?? id)
  if (q2.custom) labels.push(`"${q2.custom}" (custom)`)
  return labels.length > 0 ? labels.join(", ") : "None"
}

const Q3_LABEL: Record<string, string> = {
  "personal-cards": "Personal cards",
  "company-cards": "Company cards",
  mix: "Mix of personal + company",
  "cash-advance": "Cash advance",
}

function renderQ3(
  q3: NonNullable<ExpensePolicySetup["answers"]["q3"]>
): string {
  const main = q3.selected ? Q3_LABEL[q3.selected] : null
  if (q3.custom) {
    return main ? `${main} — "${q3.custom}"` : `"${q3.custom}" (custom)`
  }
  return main ?? "None"
}
