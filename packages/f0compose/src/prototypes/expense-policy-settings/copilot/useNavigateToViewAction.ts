import { useCopilotAction } from "@/copilot"

import type { FormSubStepId } from "../wizard/useWizardState"
import type { PolicyView } from "../views/viewRouter"

const FORM_TYPES: readonly FormSubStepId[] = ["regular", "per-diem", "mileage"]

/**
 * Lets One drive the prototype's URL: when the admin asks the agent
 * to navigate, it calls this action with the target view and we
 * mutate the URL via `setView`.
 *
 * Iterated UX: only two URL-routable views remain —
 * `forms-summary` (landing) and `forms-detail` (per form type).
 * Categories live inline (no URL), and Subcategories / Payment
 * methods open as modals on top of `forms-detail` (also no URL).
 * The agent doesn't need to navigate to those — it just guides the
 * user to click the relevant row.
 */
export function useNavigateToViewAction(args: {
  setView: (next: PolicyView) => void
}): void {
  const { setView } = args

  useCopilotAction({
    name: "navigatePolicyView",
    description:
      "Switch the Expense Policy settings page to a specific sub-view. Use this when the user wants to return to the forms summary, or open the editor for a particular form type.",
    available: "frontend",
    parameters: [
      {
        name: "target",
        type: "string",
        description:
          "Which sub-view to open. One of: 'forms-summary' (the 3-card landing for Expense forms), 'forms-detail' (the editor for one form type — requires formType).",
        required: true,
      },
      {
        name: "formType",
        type: "string",
        description:
          "Required when target is 'forms-detail'. One of: 'regular', 'per-diem', 'mileage'.",
        required: false,
      },
    ],
    handler: ({ target, formType }) => {
      switch (target) {
        case "forms-summary":
          setView({ kind: "forms-summary" })
          return
        case "forms-detail": {
          const valid =
            typeof formType === "string" &&
            (FORM_TYPES as readonly string[]).includes(formType)
          if (!valid) {
            // No / bogus formType: land on the summary so the agent
            // can re-orient rather than crash on an unknown editor.
            setView({ kind: "forms-summary" })
            return
          }
          setView({
            kind: "forms-detail",
            formType: formType as FormSubStepId,
          })
          return
        }
        default:
          setView({ kind: "forms-summary" })
      }
    },
  })
}
