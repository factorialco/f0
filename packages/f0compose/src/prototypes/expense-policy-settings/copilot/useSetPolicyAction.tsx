import { useRef } from "react"

import { useCopilotAction } from "@/copilot"

import type { PolicyDoc } from "../policy-rules/types"

/**
 * Generic co-creation apply-action for any policy-rules section (Meals, Travel,
 * Reimbursements, Receipts). The backend `generateMealsPolicy` /
 * `generatePolicySection` tools force a validated `{ groups: [...] }` object and
 * bridge it to `expensePolicyPrototype.set<Section>Policy`; this parses + swaps
 * it into state and the rule-list re-renders.
 *
 * Loop-breaker: One tends to re-call the generate tool across frontend
 * round-trips, and each regeneration can differ slightly, so an identical-doc
 * check alone misses it. We refuse ANY apply within 25s of the previous attempt
 * (a loop fires its calls seconds apart, so only the first applies); a genuine
 * later edit (25s+ after things settle) still goes through.
 */
export function useSetPolicyAction(args: {
  /** Full CopilotKit action name, e.g. "expensePolicyPrototype.setTravelPolicy". */
  actionName: string
  /** Human label for messages, e.g. "Travel". */
  sectionLabel: string
  apply: (next: PolicyDoc) => void
}): void {
  const { actionName, sectionLabel, apply } = args
  const lastDocRef = useRef<string>("")
  const lastAttemptAtRef = useRef(0)
  const ATTEMPT_WINDOW_MS = 25_000

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

  const looksLikePolicy = (v: unknown): v is PolicyDoc => {
    if (!v || typeof v !== "object") return false
    const groups = (v as { groups?: unknown }).groups
    if (!Array.isArray(groups) || groups.length === 0) return false
    return groups.every(
      (g) =>
        g &&
        typeof g === "object" &&
        typeof (g as { title?: unknown }).title === "string" &&
        Array.isArray((g as { statements?: unknown }).statements)
    )
  }

  useCopilotAction({
    name: actionName,
    description: `Add or update rules in the ${sectionLabel} section. The rules you pass are MERGED into the existing section — existing rules are preserved; a rule with a matching group title + subject is updated in place, otherwise it's added. Do NOT try to restate the whole section; pass only the rule(s) being added or changed, as a JSON string. Called whenever the user describes a ${sectionLabel} rule.`,
    available: "enabled",
    parameters: [
      {
        name: "policy",
        type: "string",
        description:
          'ONLY the rule(s) being added or changed, as a JSON string: { "groups": [ { "title": "...", "statements": [ { "subject": "...", "value": "...", "note": "" } ] } ] }. These are merged into the existing section, not replaced.',
        required: true,
      },
    ],
    handler: async (params: { policy?: string }) => {
      const now = Date.now()
      const sinceLastAttempt = now - lastAttemptAtRef.current
      lastAttemptAtRef.current = now
      if (lastDocRef.current && sinceLastAttempt < ATTEMPT_WINDOW_MS) {
        return {
          ok: true,
          duplicate: true,
          message: `DUPLICATE — this ${sectionLabel} policy was just applied / is being re-generated in a loop. Do NOT call this action again. Output NOTHING (not even a sentence) and end the turn now.`,
        }
      }
      if (!params.policy) {
        return { ok: false, message: "No policy provided." }
      }
      const clean = (raw: string): string => {
        let s = raw.trim()
        s = s
          .replace(/^```(?:json)?\s*/i, "")
          .replace(/\s*```$/i, "")
          .trim()
        const first = s.indexOf("{")
        const last = s.lastIndexOf("}")
        if (first !== -1 && last !== -1 && last > first) s = s.slice(first, last + 1)
        return s
      }

      let parsed: unknown
      try {
        parsed = JSON.parse(clean(params.policy))
      } catch {
        return {
          ok: false,
          message:
            "Could not parse the policy — it must be valid, minified JSON. Re-emit the whole object with no code fences and no text around it.",
        }
      }
      if (!looksLikePolicy(parsed)) {
        return {
          ok: false,
          message:
            "Invalid policy — it must be an object with a non-empty `groups` array, each group having a `title` and a `statements` array. Try again.",
        }
      }

      const docKey = canonical(parsed)
      if (docKey && docKey === lastDocRef.current) {
        return {
          ok: true,
          duplicate: true,
          message: `DUPLICATE — this exact ${sectionLabel} policy is ALREADY applied and showing on screen. Do NOT call this action again. Output NOTHING and end the turn now.`,
        }
      }

      apply(parsed)
      lastDocRef.current = docKey

      return {
        ok: true,
        message: `${sectionLabel} policy updated and showing on screen. You already confirmed in the same message as the tool call — output NOTHING now and end the turn. Do NOT call this action again.`,
      }
    },
  })
}
