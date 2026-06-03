import { useCopilotAction } from "@/copilot"

import type { FormSubStepId } from "../wizard/useWizardState"
import type { PolicyView } from "../views/viewRouter"

const FORM_TYPES: readonly FormSubStepId[] = ["regular", "per-diem", "mileage"]

/**
 * Lets One drive the prototype's URL: when the admin asks the agent
 * to navigate, it calls this action with the target view and we
 * mutate the URL via `setView`.
 *
 * Supported targets:
 *  - `forms-summary` — the 3-card landing under Expense types.
 *  - `forms-detail`  — the per-form-type editor (requires `formType`).
 *  - `flow-detail`   — the editor for a single approval flow
 *    (requires `flowId`). Added so One can drill into a freshly
 *    created flow after `createApprovalFlow` + `setFlowTrigger` +
 *    `updateApprovalStep` so the user lands directly on the
 *    canvas representation of their request.
 *
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
    name: "expensePolicyPrototype.navigatePolicyView",
    description:
      "Switch the Expense Policy settings page to a specific sub-view. Use this when the user wants to return to the forms summary, open the editor for a particular form type, or drill into a specific approval flow you just created.",
    available: "frontend",
    parameters: [
      {
        name: "target",
        type: "string",
        description:
          "Which sub-view to open. One of: 'forms-summary' (the 3-card landing for Expense types), 'forms-detail' (the editor for one expense type — requires formType), 'flow-detail' (the editor for one approval flow — requires flowId).",
        required: true,
      },
      {
        name: "formType",
        type: "string",
        description:
          "Required when target is 'forms-detail'. One of: 'regular', 'per-diem', 'mileage'.",
        required: false,
      },
      {
        name: "flowId",
        type: "string",
        description:
          "Required when target is 'flow-detail'. The id returned by createApprovalFlow (or an existing flow id from the readable approvalFlows list).",
        required: false,
      },
    ],
    handler: ({ target, formType, flowId }) => {
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
        case "flow-detail": {
          if (typeof flowId !== "string" || flowId === "") {
            // No flowId → drop to the forms-summary rather than a
            // broken flow-detail URL. The agent can call again with
            // a valid id (e.g. after createApprovalFlow returns).
            setView({ kind: "forms-summary" })
            return
          }
          setView({ kind: "flow-detail", flowId })
          return
        }
        default:
          setView({ kind: "forms-summary" })
      }
    },
  })
}
