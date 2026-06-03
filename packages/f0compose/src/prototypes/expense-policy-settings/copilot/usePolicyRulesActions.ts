import { useCopilotAction } from "@/copilot"

import type {
  AlcoholAllowance,
  AttendeeRequirement,
  FlightClass,
  FxSource,
  OverrideRole,
} from "../policy-rules/types"
import type { PolicyRulesHandle } from "../policy-rules/usePolicyRulesData"

/**
 * Co-creation for the Policy-rules sections (Meals & hospitality, Travel,
 * Reimbursements, Receipts & evidence, Exceptions).
 *
 * One generic `setPolicyRule({ field, value })` tool instead of ~35
 * per-field tools: the handler dispatches `field` to the matching
 * `usePolicyRulesData` setter and coerces `value` (number / boolean /
 * enum / string). This is what makes the per-card "Edit" buttons (and
 * free-text like "set the mileage rate to €0.40") actually mutate state.
 *
 * Field keys are the contract with the skill — keep them in sync with
 * the skill's policy-rules section (expensePolicySetup.ts).
 */
const DONE_MSG =
  "Applied — the change is now live in the UI and you have already confirmed it in your tool-call message. Do NOT call setPolicyRule again and do NOT write another message (no 'Update applied', no restatement). Output NOTHING and end the turn."

// Cross-turn loop guard. The agent re-calls setPolicyRule across the
// frontend-tool round-trip (each emission re-invokes the orchestrator).
// Backend guards reset every turn (requestContext + re-imported modules),
// but THIS module lives in the browser for the whole session, so a
// module-level dedupe reliably catches a repeat of the SAME field+value
// — and the handler's return reaches the LLM, so the STOP sticks.
const recentPolicyRuleApplies = new Map<string, number>()
const POLICY_RULE_DEDUPE_MS = 25_000

export function usePolicyRulesActions(args: { rules: PolicyRulesHandle }): void {
  const { rules } = args

  const numberSetters: Record<string, (n: number) => void> = {
    mealSoloInOfficeCap: rules.setSoloInOfficeCap,
    mealSoloTravellingCap: rules.setSoloTravellingCap,
    mealTeamCap: (n) => rules.setMealCap("team", n),
    mealClientCap: (n) => rules.setMealCap("client", n),
    mealHospitalityCap: (n) => rules.setMealCap("hospitality", n),
    alcoholCapPercent: rules.setAlcoholCapPercent,
    teamMealThreshold: rules.setTeamMealThreshold,
    itemizedThreshold: rules.setItemizedThreshold,
    perDiemDomesticMeals: (n) => rules.setPerDiem("domestic", "meals", n),
    perDiemDomesticLodging: (n) => rules.setPerDiem("domestic", "lodging", n),
    perDiemDomesticIncidentals: (n) =>
      rules.setPerDiem("domestic", "incidentals", n),
    perDiemInternationalMeals: (n) =>
      rules.setPerDiem("international", "meals", n),
    perDiemInternationalLodging: (n) =>
      rules.setPerDiem("international", "lodging", n),
    perDiemInternationalIncidentals: (n) =>
      rules.setPerDiem("international", "incidentals", n),
    flightAdvanceDays: rules.setFlightAdvanceDays,
    hotelMaxStars: rules.setHotelMaxStars,
    mileageRate: rules.setMileageRate,
    submissionWindowDays: rules.setSubmissionWindowDays,
    approvalSlaDays: rules.setApprovalSlaDays,
    receiptsRequiredAbove: rules.setReceiptsRequiredAbove,
    receiptsItemizedAbove: rules.setReceiptsItemizedAbove,
    receiptsRetentionYears: rules.setReceiptsRetentionYears,
    logRetentionDays: rules.setLogRetentionDays,
    autoExpiryDays: rules.setAutoExpiryDays,
  }

  const boolSetters: Record<string, (b: boolean) => void> = {
    itemizedForClientMeals: rules.setItemizedForClientMeals,
    corporateCardAutoImport: rules.setCorporateCardAutoImport,
    personalCardManual: rules.setPersonalCardManual,
    affidavitAllowed: rules.setAffidavitAllowed,
    justificationRequired: rules.setJustificationRequired,
    receiptFormatPhoto: (b) => rules.setReceiptFormat("photo", b),
    receiptFormatPdf: (b) => rules.setReceiptFormat("pdf", b),
    receiptFormatEmailForward: (b) => rules.setReceiptFormat("emailForward", b),
  }

  const enumSetters: Record<
    string,
    { allowed: readonly string[]; set: (v: string) => void }
  > = {
    alcoholAllowance: {
      allowed: ["client-only", "any-meal", "never"],
      set: (v) => rules.setAlcoholAllowance(v as AlcoholAllowance),
    },
    attendeesClient: {
      allowed: ["always", "over-threshold", "never"],
      set: (v) => rules.setAttendeeRequirement("client", v as AttendeeRequirement),
    },
    attendeesTeam: {
      allowed: ["always", "over-threshold", "never"],
      set: (v) => rules.setAttendeeRequirement("team", v as AttendeeRequirement),
    },
    flightClass: {
      allowed: ["economy", "premium-economy", "business"],
      set: (v) => rules.setFlightClass(v as FlightClass),
    },
    fxSource: {
      allowed: ["submission-date", "expense-date", "monthly-average"],
      set: (v) => rules.setFxSource(v as FxSource),
    },
    overrideApproverRole: {
      allowed: ["manager", "finance", "admin"],
      set: (v) => rules.setOverrideApproverRole(v as OverrideRole),
    },
    auditVisibleTo: {
      allowed: ["manager", "finance", "admin"],
      set: (v) => rules.setAuditVisibleTo(v as OverrideRole),
    },
  }

  const stringSetters: Record<string, (s: string) => void> = {
    defaultCurrency: rules.setDefaultCurrency,
  }

  useCopilotAction({
    name: "expensePolicyPrototype.setPolicyRule",
    description:
      "Change ONE field in a Policy-rules section (Meals & hospitality, Travel, Reimbursements, Receipts, Exceptions). Pass the exact `field` key and a `value`. Numbers may include symbols (e.g. '40', '€40', '0.40', '15%'). Booleans accept yes/no/true/false. Enums must be one of the allowed values for that field. See the skill's policy-rules field list.",
    available: "enabled",
    parameters: [
      {
        name: "field",
        type: "string",
        description: "The policy-rule field key (see the skill's list).",
        required: true,
      },
      {
        name: "value",
        type: "string",
        description: "The new value (number, yes/no, or an allowed enum).",
        required: true,
      },
    ],
    handler: ({ field, value }) => {
      const f = String(field ?? "").trim()
      const raw = String(value ?? "").trim()

      // Loop guard: if the SAME field+value was applied moments ago, the
      // agent is re-calling in a loop — don't re-apply, return a hard STOP
      // (which the LLM sees and honors). Survives across turns because
      // this module persists for the browser session.
      const dedupeKey = `${f}=${raw}`
      const now = Date.now()
      const last = recentPolicyRuleApplies.get(dedupeKey)
      if (last !== undefined && now - last < POLICY_RULE_DEDUPE_MS) {
        return {
          ok: true,
          duplicate: true,
          message: `${f} is ALREADY set to "${raw}" — you just applied this. STOP: do NOT call setPolicyRule again and do NOT write another message. Output NOTHING and end the turn.`,
        }
      }
      recentPolicyRuleApplies.set(dedupeKey, now)

      if (f in numberSetters) {
        const n = parseFloat(raw.replace(/[^0-9.\-]/g, ""))
        if (Number.isNaN(n)) {
          return { ok: false, error: `"${raw}" is not a number for ${f}.` }
        }
        numberSetters[f]!(n)
        return { ok: true, field: f, applied: n, message: DONE_MSG }
      }
      if (f in boolSetters) {
        const b = /^(true|yes|on|1|required|allowed|enabled|allow)$/i.test(raw)
        boolSetters[f]!(b)
        return { ok: true, field: f, applied: b, message: DONE_MSG }
      }
      if (f in enumSetters) {
        const spec = enumSetters[f]!
        const v = raw.toLowerCase()
        if (!spec.allowed.includes(v)) {
          return {
            ok: false,
            error: `"${raw}" is not allowed for ${f}. Allowed: ${spec.allowed.join(", ")}.`,
          }
        }
        spec.set(v)
        return { ok: true, field: f, applied: v, message: DONE_MSG }
      }
      if (f in stringSetters) {
        stringSetters[f]!(raw)
        return { ok: true, field: f, applied: raw, message: DONE_MSG }
      }
      return { ok: false, error: `Unknown policy-rule field "${f}".` }
    },
  })
}
