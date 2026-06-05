import { useCopilotAction } from "@/copilot"

import type { WorkflowDoc } from "../data/approvalWorkflow"
import type { usePolicyData } from "../data/usePolicyData"

/**
 * `expensePolicyPrototype.setApprovalWorkflow` — co-creation for the
 * approval flow. One generates the WHOLE workflow document (the real
 * `{ steps: [...] }` JSON, same as the live product) and calls this with
 * it; we parse and swap it in, and the Approval flows screen re-renders.
 *
 * Whole-document replace (not granular edits) matches how the real One
 * works — it emits the full JSON each time. The `document` arrives as a
 * JSON string (CopilotKit-friendly flat param); we parse + sanity-check
 * it has a `steps` array before applying.
 */
export function useSetApprovalWorkflowAction(args: {
  policyData: ReturnType<typeof usePolicyData>
}): void {
  const { policyData } = args

  useCopilotAction({
    name: "expensePolicyPrototype.setApprovalWorkflow",
    description:
      "Replace the entire expense approval workflow with a new document. Pass the full workflow JSON (a { steps: [...] } object) as a string. Call this whenever the user creates or changes their approval flow.",
    available: "enabled",
    parameters: [
      {
        name: "document",
        type: "string",
        description:
          "The full approval workflow document as a JSON string: { \"steps\": [...] } using handlers auto_approve / auto_decline / request_review (payload.employee_segments + due_on_value/due_on_unit) / factor_program (payload.program.expression), router steps ({ cases:[{label,when:{source,variable,op,value},steps}], default:{steps} }), and terminate steps ({ type:\"terminate\" }).",
        required: true,
      },
    ],
    handler: async (params: { document?: string }) => {
      if (!params.document) {
        return { ok: false, message: "No document provided." }
      }
      let parsed: unknown
      try {
        parsed = JSON.parse(params.document)
      } catch {
        return {
          ok: false,
          message:
            "Could not parse the document — it must be valid JSON: { \"steps\": [...] }. Try again.",
        }
      }
      if (
        typeof parsed !== "object" ||
        parsed === null ||
        !Array.isArray((parsed as { steps?: unknown }).steps)
      ) {
        return {
          ok: false,
          message:
            "Invalid workflow — the top level must be an object with a `steps` array. Try again.",
        }
      }

      policyData.setApprovalWorkflow(parsed as WorkflowDoc)

      return {
        ok: true,
        message:
          "Approval workflow updated and showing on the Approval flows screen. You already confirmed in the same message as the tool call — output NOTHING now and end the turn. Do NOT call setApprovalWorkflow again.",
      }
    },
  })
}
