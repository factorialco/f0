import { useCopilotAction } from "@/copilot"

import {
  buildQ1Intent,
  buildQ2Intent,
  buildQ3Intent,
  type Q1OptionId,
  type Q2OptionId,
  type Q3OptionId,
} from "../data/cascades"
import type { PolicyData } from "../data/usePolicyData"
import type { useExpenseFormsSource } from "../forms/useExpenseFormsSource"

import type { ExpensePolicySetup } from "./useExpensePolicySetup"

/**
 * Three silent frontend actions (`available: "enabled"`, no `render`)
 * the Mastra `expensePolicySetup` skill calls after each
 * `askClarifyingQuestion`. They:
 *
 *  1. Decode the option-id list (and optional custom free-text) the
 *     agent passes.
 *  2. Run the corresponding cascade from `data/cascades.ts` to compute
 *     the new policy snapshot.
 *  3. Apply the snapshot via `policyData` (bulk replace) +
 *     `formsSource` (per-field visibility).
 *  4. Stash the answers in `setupState` so the agent can read them
 *     back via the readable context (and the §8 re-ask loop can
 *     hard-reset).
 *
 * The handlers return `{ ok: true, summary }` so the agent has a
 * concise confirmation to weave into its next bubble.
 *
 * Option ids must match the union types in `data/cascades.ts`
 * EXACTLY — the agent emits them by id. Unknown ids are dropped with
 * a warning in the response so the agent self-corrects.
 *
 * No-render: the ClarifyingQuestion panel itself is rendered by F0's
 * built-in `useClarifyingQuestionAction`. These apply-tools just
 * mutate state — they fire in the turn immediately after the user
 * submits, and produce no chat UI.
 */
export function useExpensePolicySetupActions(args: {
  policyData: PolicyData
  formsSource: ReturnType<typeof useExpenseFormsSource>
  setupState: ExpensePolicySetup
}): void {
  const { policyData, formsSource, setupState } = args

  // ── Q1 ─────────────────────────────────────────────────────────────
  useCopilotAction({
    name: "applyExpenseTypesAnswer",
    description:
      "Apply the cascade for Q1 (which kinds of expenses do employees submit). Toggles category visibility, seeds subcategories, and activates Per diem / Mileage forms as required. Call this in the turn immediately after the user submits the matching askClarifyingQuestion. Do not produce a chat reply alongside this call — the next bubble belongs to Q2.",
    available: "enabled",
    parameters: [
      {
        name: "selected",
        type: "string[]",
        description:
          "Canonical option ids the user picked. Allowed values: meals, travel, per-diems, office-supplies, fuel, software, training.",
        required: true,
      },
      {
        name: "custom",
        type: "string",
        description:
          "Free-text answer from the 'type your own' escape, or empty string. Stored verbatim for the summary; cascade ignores it (custom categories are not supported in slice 1).",
        required: false,
      },
    ],
    handler: ({ selected, custom }) => {
      const allowed: Q1OptionId[] = [
        "meals",
        "travel",
        "per-diems",
        "office-supplies",
        "fuel",
        "software",
        "training",
      ]
      const cleaned = (selected as string[]).filter((s): s is Q1OptionId =>
        (allowed as string[]).includes(s)
      )
      const dropped = (selected as string[]).filter(
        (s) => !(allowed as string[]).includes(s)
      )
      const intent = buildQ1Intent(cleaned)
      policyData.replaceCategories(intent.categories)
      policyData.replaceSubcategories(intent.subcategories)
      setupState.setQ1(
        cleaned,
        typeof custom === "string" && custom.trim() !== "" ? custom : null,
        intent.activation
      )
      return {
        ok: true,
        applied: cleaned,
        droppedUnknownIds: dropped,
        perDiemEnabled: intent.activation.perDiemEnabled,
        mileageEnabled: intent.activation.mileageEnabled,
      }
    },
  })

  // ── Q2 ─────────────────────────────────────────────────────────────
  useCopilotAction({
    name: "applyExtraFieldsAnswer",
    description:
      "Apply the cascade for Q2 (what other info should employees include). Each selected field becomes visible + Optional on all three forms; unselected fields are hidden. Selecting 'nothing-extra' hides all four. Call this in the turn immediately after the user submits the matching askClarifyingQuestion.",
    available: "enabled",
    parameters: [
      {
        name: "selected",
        type: "string[]",
        description:
          "Allowed values: project, cost-center, description, internal-reference, nothing-extra.",
        required: true,
      },
      {
        name: "custom",
        type: "string",
        description:
          "Free-text answer if the user typed their own, or empty string. Stored for the summary; cascade ignores it.",
        required: false,
      },
    ],
    handler: ({ selected, custom }) => {
      const allowed: Q2OptionId[] = [
        "project",
        "cost-center",
        "description",
        "internal-reference",
        "nothing-extra",
      ]
      const cleaned = (selected as string[]).filter((s): s is Q2OptionId =>
        (allowed as string[]).includes(s)
      )
      const dropped = (selected as string[]).filter(
        (s) => !(allowed as string[]).includes(s)
      )
      const intent = buildQ2Intent(cleaned)
      for (const [fieldId, visible] of Object.entries(intent.fieldVisibility)) {
        // Q2 cascade only touches the Regular form's field visibility.
        // Per diem / Mileage edits flow through their own editors.
        formsSource.setVisible("regular", fieldId, visible)
      }
      setupState.setQ2(
        cleaned,
        typeof custom === "string" && custom.trim() !== "" ? custom : null
      )
      return {
        ok: true,
        applied: cleaned,
        droppedUnknownIds: dropped,
        fieldVisibility: intent.fieldVisibility,
      }
    },
  })

  // ── Q3 ─────────────────────────────────────────────────────────────
  useCopilotAction({
    name: "applyPaymentMethodsAnswer",
    description:
      "Apply the cascade for Q3 (how employees pay). Replaces the global Payment methods list. Call this in the turn immediately after the user submits the matching askClarifyingQuestion. Then call renderRegularSummary so the user sees the recap.",
    available: "enabled",
    parameters: [
      {
        name: "selected",
        type: "string",
        description:
          "Single canonical id. Allowed values: personal-cards, company-cards, mix, cash-advance.",
        required: true,
      },
      {
        name: "custom",
        type: "string",
        description:
          "Free-text answer if the user typed their own, or empty string. Stored for the summary; cascade falls back to 'personal-cards'.",
        required: false,
      },
    ],
    handler: ({ selected, custom }) => {
      const allowed: Q3OptionId[] = [
        "personal-cards",
        "company-cards",
        "mix",
        "cash-advance",
      ]
      const isAllowed = (allowed as string[]).includes(selected as string)
      const finalId = (isAllowed ? selected : "personal-cards") as Q3OptionId
      const intent = buildQ3Intent(finalId)
      policyData.replacePaymentMethods(intent.paymentMethods)
      setupState.setQ3(
        isAllowed ? finalId : null,
        typeof custom === "string" && custom.trim() !== "" ? custom : null
      )
      return {
        ok: true,
        applied: finalId,
        fellBackToDefault: !isAllowed,
        paymentMethods: intent.paymentMethods.map((p) => p.name),
      }
    },
  })
}
