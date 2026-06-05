import { useRef } from "react"

import { useCopilotAction } from "@/copilot"

import {
  applyInterviewAnswers,
  type ApplyInterviewDeps,
} from "../data/applyInterviewAnswers"
import type { usePolicyData } from "../data/usePolicyData"
import type { useExpenseFormsSource } from "../forms/useExpenseFormsSource"
import type { useExpensePolicySetup } from "./useExpensePolicySetup"

/**
 * `applyInterviewAnswers` — the single apply step of the One-led
 * interview. After the user completes the 5-step clarifying question,
 * One calls this ONCE with the chosen option ids per question; the
 * handler maps them to deterministic mutations (reusing the proven Q1–Q3
 * cascade builders + the new Q4 approval / Q5 limits builders), then
 * fires `onComplete` to run the "generating" transition into the editor.
 *
 * Why one tool (not five): fewer LLM round-trips = far less chance of
 * the agent looping or mis-sequencing (a real problem we hit with the
 * per-question tools). One marshals the answers, we do the rest.
 *
 * Option ids are passed as comma-separated strings (CopilotKit-friendly
 * flat params); unknown / custom free-text values are ignored here (the
 * user refines those by co-creating once they land in the editor).
 */

export function useApplyInterviewAnswersAction(args: {
  policyData: ReturnType<typeof usePolicyData>
  formsSource: ReturnType<typeof useExpenseFormsSource>
  setupState: ReturnType<typeof useExpensePolicySetup>
  onComplete: () => void
}): void {
  const { policyData, formsSource, setupState, onComplete } = args

  // Guard against the LLM calling apply more than once for a single
  // interview — a second call would re-apply and re-trigger generation.
  const appliedRef = useRef(false)

  useCopilotAction({
    // MUST match the backend emit: apply-interview-answers/index.ts calls
    // addFrontendToolCall(..., "expensePolicyPrototype.applyInterviewAnswers").
    // Without the prefix the frontend handler never fires (the backend
    // tool still returns success, so One says "done" but nothing applies
    // and the generate→editor transition never runs).
    name: "expensePolicyPrototype.applyInterviewAnswers",
    description:
      "Apply ALL of the user's Expenses-setup interview answers in one call, then generate the starter setup. Pass the chosen option IDS per question (comma-separated where multiple). Call this exactly once, right after the user submits the multi-step interview question. Do not call the per-question apply tools for the interview.",
    available: "enabled",
    parameters: [
      {
        name: "expenseKinds",
        type: "string",
        description:
          "Q1 (multi): comma-separated ids of expense kinds — any of meals, travel, per-diems, office-supplies, fuel, software, training.",
        required: false,
      },
      {
        name: "recordedFields",
        type: "string",
        description:
          "Q2 (multi): comma-separated ids of fields to record — any of project, cost-center, description, internal-reference, nothing-extra.",
        required: false,
      },
      {
        name: "paymentMethod",
        type: "string",
        description:
          "Q3 (single): one of personal-cards, company-cards, mix, cash-advance.",
        required: false,
      },
      {
        name: "approvalPosture",
        type: "string",
        description:
          "Q4 (single): one of manager-all, manager-finance, auto-small, finance-all.",
        required: false,
      },
      {
        name: "spendControl",
        type: "string",
        description:
          "Q5 (single): one of limits, per-diems, per-diem-travel-cap-meals, case-by-case.",
        required: false,
      },
    ],
    handler: async (params: {
      expenseKinds?: string
      recordedFields?: string
      paymentMethod?: string
      approvalPosture?: string
      spendControl?: string
    }) => {
      if (appliedRef.current) {
        return {
          ok: true,
          alreadyApplied: true,
          message:
            "Interview answers were already applied this session — generating is underway. Do NOT call applyInterviewAnswers again.",
        }
      }

      const applied = applyInterviewAnswers(params, {
        policyData,
        formsSource,
        setupState,
      } satisfies ApplyInterviewDeps)

      appliedRef.current = true
      onComplete()

      return {
        ok: true,
        applied,
        message:
          "Applied — the canvas is populated. Now post your ONE recap message and then STOP. It MUST end with this EXACT closing line as its final paragraph: \"Take a look at the canvas and edit anything you like — or just tell me what to change and we'll do it together. When it looks right, hit **Publish changes**.\" The recap is incomplete without that closing line. Never post a second recap in any wording.",
      }
    },
  })
}
