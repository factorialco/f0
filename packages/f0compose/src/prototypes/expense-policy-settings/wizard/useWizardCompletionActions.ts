import { useCopilotAction } from "@/copilot"

import {
  FORM_SUB_STEPS,
  OUTER_STEPS,
  type FormSubStepId,
  type OuterStepId,
  type WizardState,
} from "./useWizardState"

/**
 * Frontend tools the agent calls to advance the wizard.
 *
 * Sequencing constraint (handoff §2.1): a step can only be completed
 * once every earlier step is already done. We enforce that on the
 * frontend too, not just in the system prompt — if the agent
 * misbehaves and calls `completeStep("approval-flows")` before the
 * expense-forms step is finished, the handler refuses and tells the
 * agent why. That keeps the wizard's visual state consistent with
 * the rules.
 *
 * Hard-signal convention: the agent MUST call `completeStep` /
 * `completeSubStep` explicitly to advance (handoff §5 / item 5,
 * "recommendation: hard"). The system prompt makes this part of the
 * per-step protocol so the convo always ends each step with a tool
 * call rather than free-text "OK we're done".
 */
export function useWizardCompletionActions(args: {
  wizard: WizardState
}): void {
  useCopilotAction({
    name: "completeStep",
    description:
      "Mark a top-level wizard step as done. Sequencing is enforced — earlier steps must already be done. Call exactly once per step, after all sub-questions for that step have been answered.",
    available: "enabled",
    parameters: [
      {
        name: "stepId",
        type: "string",
        description: `One of: ${OUTER_STEPS.join(", ")}`,
        required: true,
      },
    ],
    handler: ({ stepId }) => {
      const id = stepId as OuterStepId
      if (!(OUTER_STEPS as readonly string[]).includes(id)) {
        return {
          ok: false,
          reason: `Unknown step "${stepId}". Valid steps: ${OUTER_STEPS.join(", ")}.`,
        }
      }
      // Refuse to mark a step done if any earlier step is still
      // pending. The agent then has to circle back, which keeps the
      // wizard's "completed → readonly" promise honest.
      const idx = OUTER_STEPS.indexOf(id)
      const earlierStillOpen = OUTER_STEPS.slice(0, idx).filter(
        (e) => !args.wizard.outerDone.includes(e)
      )
      if (earlierStillOpen.length > 0) {
        return {
          ok: false,
          reason: `Cannot complete "${id}" yet — earlier steps still open: ${earlierStillOpen.join(", ")}.`,
        }
      }
      args.wizard.completeOuterStep(id)
      return { ok: true, completedStep: id }
    },
  })

  useCopilotAction({
    name: "completeSubStep",
    description:
      "Mark a sub-step inside the Expense types wizard as done (regular, per-diem, or mileage). Earlier sub-steps must already be done. Call exactly once per sub-step.",
    available: "enabled",
    parameters: [
      {
        name: "subStepId",
        type: "string",
        description: `One of: ${FORM_SUB_STEPS.join(", ")}`,
        required: true,
      },
    ],
    handler: ({ subStepId }) => {
      const id = subStepId as FormSubStepId
      if (!(FORM_SUB_STEPS as readonly string[]).includes(id)) {
        return {
          ok: false,
          reason: `Unknown sub-step "${subStepId}". Valid sub-steps: ${FORM_SUB_STEPS.join(", ")}.`,
        }
      }
      const idx = FORM_SUB_STEPS.indexOf(id)
      const earlierStillOpen = FORM_SUB_STEPS.slice(0, idx).filter(
        (e) => !args.wizard.formSubDone.includes(e)
      )
      if (earlierStillOpen.length > 0) {
        return {
          ok: false,
          reason: `Cannot complete "${id}" yet — earlier sub-steps still open: ${earlierStillOpen.join(", ")}.`,
        }
      }
      args.wizard.completeFormSubStep(id)
      return { ok: true, completedSubStep: id }
    },
  })
}
