import type { useExpenseFormsSource } from "../forms/useExpenseFormsSource"
import type { useExpensePolicySetup } from "../copilot/useExpensePolicySetup"

import { buildApprovalWorkflow } from "./approvalWorkflow"
import {
  buildApprovalIntent,
  buildLimitsIntent,
  buildQ1Intent,
  buildQ2Intent,
  buildQ3Intent,
  type Q1OptionId,
  type Q2OptionId,
  type Q3OptionId,
  type Q4OptionId,
  type Q5OptionId,
} from "./cascades"
import type { usePolicyData } from "./usePolicyData"

/**
 * The deterministic core of the Expenses-setup interview: map the chosen
 * option ids (per question) to policy mutations. Shared by BOTH the
 * agent-driven path (`useApplyInterviewAnswersAction`) and the agent-less
 * demo path (`DemoInterview`), so the starter setup is identical either
 * way.
 *
 * Answers come in as comma-separated id strings (the CopilotKit-friendly
 * shape); unknown / custom values are ignored here — the user refines
 * those by co-creating once they land in the editor.
 */

export const Q1_IDS = new Set<Q1OptionId>([
  "meals",
  "travel",
  "per-diems",
  "office-supplies",
  "fuel",
  "software",
  "training",
])
export const Q2_IDS = new Set<Q2OptionId>([
  "project",
  "cost-center",
  "description",
  "internal-reference",
  "nothing-extra",
])
export const Q3_IDS = new Set<Q3OptionId>([
  "personal-cards",
  "company-cards",
  "mix",
  "cash-advance",
])
export const Q4_IDS = new Set<Q4OptionId>([
  "manager-all",
  "manager-finance",
  "auto-small",
  "finance-all",
])
export const Q5_IDS = new Set<Q5OptionId>([
  "limits",
  "per-diems",
  "per-diem-travel-cap-meals",
  "case-by-case",
])

export const parseCsv = (raw: string | undefined): string[] =>
  (raw ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)

export type InterviewAnswers = {
  expenseKinds?: string
  recordedFields?: string
  paymentMethod?: string
  approvalPosture?: string
  spendControl?: string
}

export type ApplyInterviewDeps = {
  policyData: ReturnType<typeof usePolicyData>
  formsSource: ReturnType<typeof useExpenseFormsSource>
  setupState: ReturnType<typeof useExpensePolicySetup>
}

/** Apply all interview answers. Returns a short list of what changed. */
export function applyInterviewAnswers(
  answers: InterviewAnswers,
  deps: ApplyInterviewDeps
): string[] {
  const { policyData, formsSource, setupState } = deps
  const applied: string[] = []

  // Q1 — expense kinds → categories / subcategories / form activation
  const q1 = parseCsv(answers.expenseKinds).filter((id): id is Q1OptionId =>
    Q1_IDS.has(id as Q1OptionId)
  )
  if (q1.length > 0) {
    const intent = buildQ1Intent(q1)
    policyData.replaceCategories(intent.categories)
    policyData.replaceSubcategories(intent.subcategories)
    setupState.setQ1(q1, "", intent.activation)
    applied.push(`${q1.length} expense kinds`)
  }

  // Q2 — recorded fields → regular-form field visibility
  const q2 = parseCsv(answers.recordedFields).filter((id): id is Q2OptionId =>
    Q2_IDS.has(id as Q2OptionId)
  )
  if (q2.length > 0) {
    const intent = buildQ2Intent(q2)
    Object.entries(intent.fieldVisibility).forEach(([fieldId, visible]) => {
      formsSource.setVisible("regular", fieldId, visible)
    })
    setupState.setQ2(q2, "")
    applied.push("form fields")
  }

  // Q3 — payment → payment methods
  const q3 = answers.paymentMethod?.trim().toLowerCase()
  if (q3 && Q3_IDS.has(q3 as Q3OptionId)) {
    const intent = buildQ3Intent(q3 as Q3OptionId)
    policyData.replacePaymentMethods(intent.paymentMethods)
    setupState.setQ3(q3 as Q3OptionId, "")
    applied.push("payment methods")
  }

  // Q4 — approval posture → starter approval workflow (replace seeds)
  const q4 = answers.approvalPosture?.trim().toLowerCase()
  if (q4 && Q4_IDS.has(q4 as Q4OptionId)) {
    // Legacy model (still exposed in context) + the real workflow document
    // the Approval flows screen now renders.
    policyData.replaceApprovalFlows(buildApprovalIntent(q4 as Q4OptionId))
    policyData.setApprovalWorkflow(buildApprovalWorkflow(q4 as Q4OptionId))
    applied.push("approval workflow")
  }

  // Q5 — spend control → per-diem rate seed
  const q5 = answers.spendControl?.trim().toLowerCase()
  if (q5 && Q5_IDS.has(q5 as Q5OptionId)) {
    const intent = buildLimitsIntent(q5 as Q5OptionId)
    if (intent.addPerDiem) {
      const rateId = policyData.addRate("per-diem")
      policyData.setRateAmount(rateId, intent.perDiemAmount)
      applied.push("per-diem rate")
    }
  }

  return applied
}
