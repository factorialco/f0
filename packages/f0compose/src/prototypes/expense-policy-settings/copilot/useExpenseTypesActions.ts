import { useCopilotAction } from "@/copilot"

import type { PolicyData } from "../data/usePolicyData"
import type { RateFormType, RateScope } from "../data/types"

// Cross-turn loop guard for create/delete ops (categories, subcategories,
// payment methods, rates). The agent re-calls these across the frontend-tool
// round-trip, which can spawn fresh orchestrator turns — so per-turn/backend
// guards reset and never catch it (and for *create* ops the re-call adds a
// DUPLICATE row, not just a no-op). This module lives in the browser for the
// whole session, so a module-level dedupe of the SAME op+args reliably stops
// a repeat, and its return reaches the LLM so the STOP sticks (same approach
// as usePolicyRulesActions.setPolicyRule).
const recentOps = new Map<string, number>()
const OP_DEDUPE_MS = 25_000
function isRecentOp(key: string): boolean {
  const now = Date.now()
  const last = recentOps.get(key)
  recentOps.set(key, now)
  return last !== undefined && now - last < OP_DEDUPE_MS
}
const OP_DONE =
  "Applied — the change is now live in the UI and you have already confirmed it in your tool-call message. Do NOT call this tool again and do NOT write another message (no restatement). Output NOTHING and end the turn."

/**
 * Silent frontend actions for the **Expense Types** section
 * (Categories + Subcategories lists). The agent calls these in
 * response to free-text edits like *"add a category called Travel"*
 * or *"hide Office supplies"*.
 *
 * Each handler is a thin wrapper around `policyData` mutations. The
 * `addCategory` / `addSubcategory` handlers compose two underlying
 * calls (create + rename) so the agent passes the name in one call —
 * the data hook itself only creates blank rows.
 *
 * Names are bridged from backend tool stubs in factorial-agent under
 * `tools/expense-policy-prototype/*`; each backend tool emits the
 * matching `expensePolicyPrototype.*` frontend tool call.
 */
export function useExpenseTypesActions(args: { policyData: PolicyData }): void {
  const { policyData } = args
  // ── Categories ─────────────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.addCategory",
    description:
      "Create a new expense category with the given name. Returns the new category id.",
    available: "enabled",
    parameters: [{ name: "name", type: "string", required: true }],
    handler: ({ name }) => {
      const nm = String(name ?? "").trim()
      // Idempotent + loop-guarded: a category with this name already
      // exists (or the same add just ran) → return it, don't duplicate.
      const existing = policyData.categories.find(
        (c) => c.name.trim().toLowerCase() === nm.toLowerCase()
      )
      if (existing || isRecentOp(`addcat:${nm.toLowerCase()}`)) {
        return {
          ok: true,
          duplicate: true,
          categoryId: existing?.id,
          message: `A category named "${nm}" already exists — STOP: do NOT call addCategory again. Do NOT write another message — output NOTHING and end the turn.`,
        }
      }
      const id = policyData.addCategory()
      policyData.renameCategory(id, nm)
      return { ok: true, categoryId: id, message: OP_DONE }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.renameCategory",
    description: "Rename an existing expense category.",
    available: "enabled",
    parameters: [
      { name: "categoryId", type: "string", required: true },
      { name: "name", type: "string", required: true },
    ],
    handler: ({ categoryId, name }) => {
      policyData.renameCategory(categoryId as string, name as string)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.deleteCategory",
    description: "Delete an expense category and its subcategories.",
    available: "enabled",
    parameters: [{ name: "categoryId", type: "string", required: true }],
    handler: ({ categoryId }) => {
      policyData.deleteCategory(categoryId as string)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.setCategoryVisible",
    description:
      "Show or hide an expense category. Pass visible=true to show, false to hide.",
    available: "enabled",
    parameters: [
      { name: "categoryId", type: "string", required: true },
      { name: "visible", type: "boolean", required: true },
    ],
    handler: ({ categoryId, visible }) => {
      const current = policyData.categories.find((c) => c.id === categoryId)
      // The underlying mutation flips; only call when state mismatches the
      // requested value so repeated calls are idempotent.
      if (current && current.visible !== visible) {
        policyData.toggleCategoryVisible(categoryId as string)
      }
      return { ok: true }
    },
  })

  // ── Subcategories ──────────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.addSubcategory",
    description: "Create a new subcategory under an existing category.",
    available: "enabled",
    parameters: [
      { name: "categoryId", type: "string", required: true },
      { name: "name", type: "string", required: true },
    ],
    handler: ({ categoryId, name }) => {
      const cid = String(categoryId ?? "")
      const nm = String(name ?? "").trim()
      // Idempotent + loop-guarded: same-named subcategory under this
      // category already exists (or the same add just ran) → no-op.
      // This is what stops the agent's re-call from adding a duplicate.
      const existing = policyData.subcategories.find(
        (s) =>
          s.categoryId === cid &&
          s.name.trim().toLowerCase() === nm.toLowerCase()
      )
      if (existing || isRecentOp(`addsub:${cid}:${nm.toLowerCase()}`)) {
        return {
          ok: true,
          duplicate: true,
          subcategoryId: existing?.id,
          message: `"${nm}" already exists under that category — STOP: do NOT call addSubcategory again. Do NOT write another message — output NOTHING and end the turn.`,
        }
      }
      const id = policyData.addSubcategory(cid)
      policyData.renameSubcategory(id, nm)
      return { ok: true, subcategoryId: id, message: OP_DONE }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.renameSubcategory",
    description: "Rename a subcategory.",
    available: "enabled",
    parameters: [
      { name: "subcategoryId", type: "string", required: true },
      { name: "name", type: "string", required: true },
    ],
    handler: ({ subcategoryId, name }) => {
      policyData.renameSubcategory(subcategoryId as string, name as string)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.deleteSubcategory",
    description: "Delete a subcategory.",
    available: "enabled",
    parameters: [{ name: "subcategoryId", type: "string", required: true }],
    handler: ({ subcategoryId }) => {
      policyData.deleteSubcategory(subcategoryId as string)
      return { ok: true }
    },
  })

  // ── Payment methods ────────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.addPaymentMethod",
    description: "Create a new payment method with the given name.",
    available: "enabled",
    parameters: [{ name: "name", type: "string", required: true }],
    handler: ({ name }) => {
      const nm = String(name ?? "").trim()
      const existing = policyData.paymentMethods.find(
        (p) => p.name.trim().toLowerCase() === nm.toLowerCase()
      )
      if (existing || isRecentOp(`addpm:${nm.toLowerCase()}`)) {
        return {
          ok: true,
          duplicate: true,
          paymentMethodId: existing?.id,
          message: `A payment method named "${nm}" already exists — STOP: do NOT call addPaymentMethod again. Do NOT write another message — output NOTHING and end the turn.`,
        }
      }
      const id = policyData.addPaymentMethod()
      policyData.renamePaymentMethod(id, nm)
      return { ok: true, paymentMethodId: id, message: OP_DONE }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.renamePaymentMethod",
    description: "Rename a payment method.",
    available: "enabled",
    parameters: [
      { name: "paymentMethodId", type: "string", required: true },
      { name: "name", type: "string", required: true },
    ],
    handler: ({ paymentMethodId, name }) => {
      policyData.renamePaymentMethod(paymentMethodId as string, name as string)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.deletePaymentMethod",
    description: "Delete a payment method.",
    available: "enabled",
    parameters: [{ name: "paymentMethodId", type: "string", required: true }],
    handler: ({ paymentMethodId }) => {
      policyData.deletePaymentMethod(paymentMethodId as string)
      return { ok: true }
    },
  })

  // ── Rates ──────────────────────────────────────────────────────────
  useCopilotAction({
    name: "expensePolicyPrototype.addRate",
    description:
      "Create a new per-diem or mileage rate. Default scope is 'everyone' — use setRateScope to restrict afterwards.",
    available: "enabled",
    parameters: [
      { name: "formType", type: "string", required: true, description: "per-diem | mileage" },
      { name: "name", type: "string", required: true },
      { name: "amount", type: "number", required: true },
      { name: "currency", type: "string", required: false },
    ],
    handler: ({ formType, name, amount, currency }) => {
      const ft = formType as RateFormType
      // Loop guard: a repeat of the SAME rate (formType+name+amount) within
      // the window is the agent looping — don't add a duplicate, hard-stop.
      if (isRecentOp(`add:${ft}:${name}:${amount}`)) {
        return {
          ok: true,
          duplicate: true,
          message: `A "${name}" rate was just added — STOP: do NOT call addRate again. Do NOT write another message — output NOTHING and end the turn.`,
        }
      }
      const id = policyData.addRate(ft)
      policyData.renameRate(id, name as string)
      if (typeof amount === "number") policyData.setRateAmount(id, amount)
      if (typeof currency === "string" && currency.length > 0) {
        policyData.setRateCurrency(id, currency)
      }
      return { ok: true, rateId: id, message: OP_DONE }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.setRateAmount",
    description: "Change the amount of an existing rate.",
    available: "enabled",
    parameters: [
      { name: "rateId", type: "string", required: true },
      { name: "amount", type: "number", required: true },
    ],
    handler: ({ rateId, amount }) => {
      policyData.setRateAmount(rateId as string, amount as number)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.setRateCurrency",
    description: "Change the currency of an existing rate.",
    available: "enabled",
    parameters: [
      { name: "rateId", type: "string", required: true },
      { name: "currency", type: "string", required: true },
    ],
    handler: ({ rateId, currency }) => {
      policyData.setRateCurrency(rateId as string, currency as string)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.setRateScope",
    description:
      "Restrict a rate to specific people or entities. scopeKind='everyone' clears the scope.",
    available: "enabled",
    parameters: [
      { name: "rateId", type: "string", required: true },
      { name: "scopeKind", type: "string", required: true, description: "everyone | people | entities" },
      { name: "personIds", type: "string[]", required: false },
      { name: "entityIds", type: "string[]", required: false },
    ],
    handler: ({ rateId, scopeKind, personIds, entityIds }) => {
      let scope: RateScope
      if (scopeKind === "people") {
        scope = { kind: "people", personIds: (personIds as string[] | undefined) ?? [] }
      } else if (scopeKind === "entities") {
        scope = { kind: "entities", entityIds: (entityIds as string[] | undefined) ?? [] }
      } else {
        scope = { kind: "everyone" }
      }
      policyData.setRateScope(rateId as string, scope)
      return { ok: true }
    },
  })

  useCopilotAction({
    name: "expensePolicyPrototype.deleteRate",
    description: "Delete a per-diem or mileage rate.",
    available: "enabled",
    parameters: [{ name: "rateId", type: "string", required: true }],
    handler: ({ rateId }) => {
      const id = rateId as string
      // Loop guard: re-deleting the same id (already gone) is the agent
      // looping — hard-stop instead of silently "succeeding" forever.
      if (isRecentOp(`del:${id}`)) {
        return {
          ok: true,
          duplicate: true,
          message: `That rate was just deleted — STOP: do NOT call deleteRate again. Do NOT write another message — output NOTHING and end the turn.`,
        }
      }
      policyData.deleteRate(id)
      return { ok: true, message: OP_DONE }
    },
  })
}
