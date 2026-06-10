import { useRef } from "react"

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
  // Loop-breaker. One tends to re-call setApprovalWorkflow on every frontend
  // round-trip (the backend per-turn guard resets each round-trip, since each
  // is a fresh request). This ref lives in the browser component and persists
  // across those round-trips, so we can hard-stop a rapid duplicate: a second
  // call within a few seconds is treated as a loop, NOT re-applied, and One is
  // told to output nothing and end the turn.
  const lastApplyAtRef = useRef(0)
  // Stronger loop-breaker: the canonical (key-sorted) JSON of the last applied
  // document. A loop re-emits the SAME document, so re-applying an identical
  // doc — at ANY interval, even minutes apart once a recap stream is slow — is
  // a duplicate. This catches loops the 5s time-window misses, and turns the
  // "success" reply (which encourages One to keep going) into a "stop" reply.
  const lastDocRef = useRef<string>("")

  // Canonical JSON (recursively key-sorted) so re-orderings still compare equal.
  const canonical = (v: unknown): string => {
    const sort = (x: unknown): unknown => {
      if (Array.isArray(x)) return x.map(sort)
      if (x && typeof x === "object") {
        return Object.keys(x as Record<string, unknown>)
          .sort()
          .reduce<Record<string, unknown>>((acc, k) => {
            acc[k] = sort((x as Record<string, unknown>)[k])
            return acc
          }, {})
      }
      return x
    }
    try {
      return JSON.stringify(sort(v))
    } catch {
      return ""
    }
  }

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
          "The full approval workflow document as a JSON string: { \"steps\": [...] }, evaluated top-to-bottom (first match wins). Step kinds: factor_program (a 'compute' step, payload.program.expression — plumbing/hidden); switch ({ handler:\"switch\", cases:[{ label, when, steps }], default:{ steps } } — nestable); request_review (payload: employee_segments [{ name:\"employee_manager\"|\"employee_manager_manager\"|\"finance\"|\"admins\"|\"anyone_in_team\" (+input.team_id) }] AND/OR reviewer_ids ([userId,...] or { kind:\"reference\", source, name }) AND/OR reviewer_names ([\"First Last\"] — for people the user named who aren't in the directory, NO email/id needed) + optional fallback_employee_segments; due_on_value/due_on_unit); auto_approve; auto_reject (payload.reason { kind:\"literal\", value }); terminate ({ type:\"terminate\" }). `when` is { source, variable, op (eq|ne|gt|gte|lt|lte), value } or { all_of:[...] } / { any_of:[...] }. Amounts in CENTS.",
        required: true,
      },
    ],
    handler: async (params: { document?: string }) => {
      // Loop-breaker: a call within 5s of the last successful apply is a
      // duplicate (One re-firing on the round-trip), not a real new edit.
      // Real user edits are seconds/minutes apart. Refuse without re-applying.
      if (Date.now() - lastApplyAtRef.current < 5000) {
        return {
          ok: true,
          duplicate: true,
          message:
            "DUPLICATE — this approval workflow was just applied a moment ago. Do NOT call setApprovalWorkflow again. Output NOTHING (not even a sentence) and end the turn now.",
        }
      }
      if (!params.document) {
        return { ok: false, message: "No document provided." }
      }
      // One sometimes wraps the JSON in ```json fences or adds a stray
      // sentence before/after it. Be forgiving: strip fences, then slice to
      // the outermost { ... } before parsing.
      const cleanDocument = (raw: string): string => {
        let s = raw.trim()
        // Strip a leading/trailing markdown code fence if present.
        s = s
          .replace(/^```(?:json)?\s*/i, "")
          .replace(/\s*```$/i, "")
          .trim()
        // Slice from the first "{" to the last "}" (drops any prose around it).
        const first = s.indexOf("{")
        const last = s.lastIndexOf("}")
        if (first !== -1 && last !== -1 && last > first) {
          s = s.slice(first, last + 1)
        }
        return s
      }

      let parsed: unknown
      try {
        parsed = JSON.parse(cleanDocument(params.document))
      } catch {
        return {
          ok: false,
          message:
            "Could not parse the document — it must be valid, COMPACT (single-line, minified) JSON: {\"steps\":[...]}. Re-emit the whole document minified, with no code fences and no text around it.",
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

      // Identical-document guard: if this exact flow is already applied, it's a
      // loop — refuse without re-applying and tell One to stop.
      const docKey = canonical(parsed)
      if (docKey && docKey === lastDocRef.current) {
        return {
          ok: true,
          duplicate: true,
          message:
            "DUPLICATE — this exact approval workflow is ALREADY applied and showing on screen. Do NOT call setApprovalWorkflow again. Output NOTHING (not even a sentence) and end the turn now.",
        }
      }

      policyData.setApprovalWorkflow(parsed as WorkflowDoc)
      lastApplyAtRef.current = Date.now()
      lastDocRef.current = docKey

      return {
        ok: true,
        message:
          "Approval workflow updated and showing on the Approval flows screen. You already confirmed in the same message as the tool call — output NOTHING now and end the turn. Do NOT call setApprovalWorkflow again.",
      }
    },
  })
}
