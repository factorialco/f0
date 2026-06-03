import { useCallback, useState } from "react"

import {
  seedApprovalFlows,
  seedCategories,
  seedEntities,
  seedPaymentMethods,
  seedRates,
  seedSubcategories,
  seedUsers,
} from "./seeds"
import type {
  ApprovalFlow,
  ApprovalStep,
  ApprovalTrigger,
  Approver,
  ApproverRole,
  Category,
  LegalEntity,
  PaymentMethod,
  Rate,
  RateFormType,
  RateScope,
  Subcategory,
  User,
} from "./types"

/**
 * Single source of truth for the global policy lists. Visual-only —
 * nothing is persisted (BR-008 / AC-006).
 *
 * Empty-name behaviour (revised): new rows are created with an empty
 * name and no placeholder is shown. Committing an empty name (Enter
 * or blur) deletes the row instead of keeping an "Untitled X" stub.
 * The same applies when renaming an existing row to blank.
 *
 * - add{Category, Subcategory, PaymentMethod}: append an empty-named
 *   row and return its id so the caller can flag it for inline edit.
 * - rename*: commit a name change. Empty input → delete the row.
 * - delete*: immediate, no confirmation modal (§8). Deleting a
 *   category cascades to all its subcategories (§8).
 * - toggleCategoryVisible: flip a category's `visible` flag (§4).
 */
export function usePolicyData() {
  const [categories, setCategories] = useState<Category[]>(seedCategories)
  const [subcategories, setSubcategories] = useState<Subcategory[]>(
    seedSubcategories
  )
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(
    seedPaymentMethods
  )
  const [rates, setRates] = useState<Rate[]>(seedRates)
  // Approval flows + the fixture user directory used by the named-
  // approver picker. `users` is exposed read-only — the agent / UI
  // can reference users by id but slice 1 doesn't add/remove them.
  const [approvalFlows, setApprovalFlows] =
    useState<ApprovalFlow[]>(seedApprovalFlows)
  const [users] = useState<User[]>(seedUsers)
  const [entities] = useState<LegalEntity[]>(seedEntities)

  // ── Global policy toggles ────────────────────────────────────────
  // Cross-form settings that aren't tied to any single form type.
  // Currently a single boolean: expense groups (whether employees
  // can bundle multiple expenses into a single submission). Lives
  // on `usePolicyData` so it sits alongside the other policy lists
  // — when more global toggles arrive they slot in here.
  const [expenseGroupsEnabled, setExpenseGroupsEnabled] = useState(true)

  // ── Categories ───────────────────────────────────────────────────
  const addCategory = useCallback((): string => {
    const id = `cat-new-${Date.now()}`
    setCategories((prev) => [...prev, { id, name: "", visible: true }])
    return id
  }, [])

  const renameCategory = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setCategories((prev) => prev.filter((c) => c.id !== id))
      setSubcategories((prev) => prev.filter((s) => s.categoryId !== id))
      return
    }
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name: trimmed } : c))
    )
  }, [])

  const deleteCategory = useCallback((id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id))
    // Cascading delete (spec §8): remove this category's subcategories.
    setSubcategories((prev) => prev.filter((s) => s.categoryId !== id))
  }, [])

  const toggleCategoryVisible = useCallback((id: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c))
    )
  }, [])

  /**
   * Bulk-replace setters used by the co-creation cascades
   * (`data/cascades.ts`). The Q1 cascade computes a brand new
   * Category + Subcategory list (visibility flipped, seed subcategory
   * bundles assembled per chosen kind); applying it as a single
   * replace keeps the cascade pure and idempotent. Same idea for Q3
   * → payment methods.
   *
   * Manual edits applied between cascades are overwritten — spec §8
   * explicitly mandates that re-asking a clarifying question hard-
   * resets to defaults.
   */
  const replaceCategories = useCallback((next: Category[]) => {
    setCategories(next)
  }, [])

  const replaceSubcategories = useCallback((next: Subcategory[]) => {
    setSubcategories(next)
  }, [])

  const replacePaymentMethods = useCallback((next: PaymentMethod[]) => {
    setPaymentMethods(next)
  }, [])

  // ── Subcategories ────────────────────────────────────────────────
  const addSubcategory = useCallback((categoryId: string): string => {
    const id = `sub-new-${Date.now()}`
    setSubcategories((prev) => [...prev, { id, categoryId, name: "" }])
    return id
  }, [])

  const renameSubcategory = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setSubcategories((prev) => prev.filter((s) => s.id !== id))
      return
    }
    setSubcategories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name: trimmed } : s))
    )
  }, [])

  const deleteSubcategory = useCallback((id: string) => {
    setSubcategories((prev) => prev.filter((s) => s.id !== id))
  }, [])

  // ── Payment methods ──────────────────────────────────────────────
  const addPaymentMethod = useCallback((): string => {
    const id = `pm-new-${Date.now()}`
    setPaymentMethods((prev) => [...prev, { id, name: "" }])
    return id
  }, [])

  const renamePaymentMethod = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setPaymentMethods((prev) => prev.filter((p) => p.id !== id))
      return
    }
    setPaymentMethods((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: trimmed } : p))
    )
  }, [])

  const deletePaymentMethod = useCallback((id: string) => {
    setPaymentMethods((prev) => prev.filter((p) => p.id !== id))
  }, [])

  // ── Rates ────────────────────────────────────────────────────────
  // Rates live on a single global list discriminated by `formType`.
  // Setters target rows by id; the form-scoped views filter the list
  // before rendering. Empty-name commit deletes the row (same
  // pattern as subcategories / payment methods) so admins can back
  // out of an accidental "Add rate" without an explicit delete.
  const addRate = useCallback((formType: RateFormType): string => {
    const id = `rate-new-${Date.now()}`
    setRates((prev) => [
      ...prev,
      {
        id,
        formType,
        name: "",
        amount: 0,
        // Default currency mirrors the seed values — slice 1 keeps
        // it at EUR; later we'll plumb the company default through
        // policy data and use that.
        currency: "EUR",
        scope: { kind: "everyone" },
      },
    ])
    return id
  }, [])

  const renameRate = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setRates((prev) => prev.filter((r) => r.id !== id))
      return
    }
    setRates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, name: trimmed } : r))
    )
  }, [])

  const setRateAmount = useCallback((id: string, amount: number) => {
    // Allow 0 but coerce NaN to 0 — protects the visual layer from
    // an empty input briefly producing NaN before the user types a
    // digit. Negative values are allowed at the type level (some
    // policies might want negative adjustments) but the input ui
    // never produces them today.
    const safe = Number.isFinite(amount) ? amount : 0
    setRates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, amount: safe } : r))
    )
  }, [])

  const setRateCurrency = useCallback((id: string, currency: string) => {
    setRates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, currency } : r))
    )
  }, [])

  const setRateScope = useCallback((id: string, scope: RateScope) => {
    setRates((prev) => prev.map((r) => (r.id === id ? { ...r, scope } : r)))
  }, [])

  const deleteRate = useCallback((id: string) => {
    setRates((prev) => prev.filter((r) => r.id !== id))
  }, [])

  // ── Approval flows ───────────────────────────────────────────────
  //
  // Each setter is keyed on flow id (and step id for inner ops) so
  // the consumer can mutate any flow without lifting more state. We
  // never re-sort on mutation — the canvas relies on stable order
  // (flows by `priority` ascending, steps by array index).
  //
  // A new flow lands with the catch-all trigger and a single default
  // step (Direct manager) so the canvas always has something to
  // render. Empty flows are technically representable but feel like
  // a bug to the user; we'd rather start opinionated.

  const addFlow = useCallback(
    (options?: { initialRole?: ApproverRole }): string => {
      const id = `flow-new-${Date.now()}`
      // Default to "manager" (matches the legacy no-arg behaviour
      // used by the manual "+ New flow" button). The agent passes
      // `initialRole: "self"` for the auto-approve recipe so the
      // newly-created flow already has the right approver and the
      // agent doesn't have to read the step id back mid-turn.
      const role: ApproverRole = options?.initialRole ?? "manager"
      setApprovalFlows((prev) => [
        ...prev,
        {
          id,
          name: "New flow",
          // Highest existing priority + 100 keeps the new flow at the
          // bottom of the match order (least specific). Admins can
          // chat-promote it later. `100` floor matches the seed gap so
          // we don't accidentally collide with `flow-standard`.
          priority:
            prev.reduce((max, f) => Math.max(max, f.priority), 0) + 100 || 100,
          trigger: {
            amount: {},
            categoryIds: [],
            scope: { kind: "everyone" },
          },
          steps: [
            {
              id: `step-new-${Date.now()}`,
              approver: { kind: "role", role },
            },
          ],
        },
      ])
      return id
    },
    []
  )

  const renameFlow = useCallback((id: string, nextName: string) => {
    // Empty name → keep as "Untitled flow" rather than deleting.
    // Flows feel weightier than rates/subcategories; an admin would
    // be surprised by an accidental delete.
    const trimmed = nextName.trim()
    const finalName = trimmed === "" ? "Untitled flow" : trimmed
    setApprovalFlows((prev) =>
      prev.map((f) => (f.id === id ? { ...f, name: finalName } : f))
    )
  }, [])

  const deleteFlow = useCallback((id: string) => {
    setApprovalFlows((prev) => prev.filter((f) => f.id !== id))
  }, [])

  const setFlowTrigger = useCallback(
    (id: string, trigger: ApprovalTrigger) => {
      setApprovalFlows((prev) =>
        prev.map((f) => (f.id === id ? { ...f, trigger } : f))
      )
    },
    []
  )

  const setFlowPriority = useCallback((id: string, priority: number) => {
    setApprovalFlows((prev) =>
      prev.map((f) => (f.id === id ? { ...f, priority } : f))
    )
  }, [])

  // Freeform-first writer: sets the human WHEN/THEN narrative plus
  // One's feasibility verdict + note on a rule. This is the surface
  // behind co-creation of things the structured fields can't hold
  // ("last Friday of the month", "Abigail's cat") — the rule still
  // exists as text and One annotates how real it is. Pass only the
  // fields you want to change; omit (undefined) to leave as-is, or
  // pass an empty string to clear when/then/note.
  const setFlowNarrative = useCallback(
    (
      id: string,
      patch: {
        when?: string
        then?: string
        feasibility?: ApprovalFlow["feasibility"]
        note?: string
      }
    ) => {
      setApprovalFlows((prev) =>
        prev.map((f) =>
          f.id === id
            ? {
                ...f,
                ...(patch.when !== undefined
                  ? { when: patch.when.trim() || undefined }
                  : {}),
                ...(patch.then !== undefined
                  ? { then: patch.then.trim() || undefined }
                  : {}),
                ...(patch.feasibility !== undefined
                  ? { feasibility: patch.feasibility }
                  : {}),
                ...(patch.note !== undefined
                  ? { note: patch.note.trim() || undefined }
                  : {}),
              }
            : f
        )
      )
    },
    []
  )

  // Create-or-replace a whole rule in one shot. Backs the agent's
  // single `upsertApprovalRule` co-creation tool: if the id exists we
  // replace that rule wholesale, otherwise we append it.
  const upsertFlow = useCallback((flow: ApprovalFlow) => {
    setApprovalFlows((prev) => {
      const exists = prev.some((f) => f.id === flow.id)
      return exists
        ? prev.map((f) => (f.id === flow.id ? flow : f))
        : [...prev, flow]
    })
  }, [])

  // Bulk-replace the whole approval workflow. Used by the interview to
  // lay down a clean starter set of ordered rules (mirrors
  // replaceCategories / replacePaymentMethods), discarding the seed
  // flows so the generated policy reflects only the user's answers.
  const replaceApprovalFlows = useCallback((next: ApprovalFlow[]) => {
    setApprovalFlows(next)
  }, [])

  const addStep = useCallback((flowId: string): string => {
    const stepId = `step-new-${Date.now()}`
    setApprovalFlows((prev) =>
      prev.map((f) =>
        f.id === flowId
          ? {
              ...f,
              steps: [
                ...f.steps,
                {
                  id: stepId,
                  // New steps default to Direct manager — same as
                  // the default for new flows. Admins almost always
                  // change this immediately via the step modal but
                  // the default keeps the canvas non-broken.
                  approver: { kind: "role", role: "manager" },
                },
              ],
            }
          : f
      )
    )
    return stepId
  }, [])

  const updateStep = useCallback(
    (
      flowId: string,
      stepId: string,
      patch: { approver?: Approver; label?: string }
    ) => {
      setApprovalFlows((prev) =>
        prev.map((f) =>
          f.id === flowId
            ? {
                ...f,
                steps: f.steps.map(
                  (s): ApprovalStep =>
                    s.id === stepId
                      ? {
                          ...s,
                          ...(patch.approver !== undefined
                            ? { approver: patch.approver }
                            : {}),
                          // Allow clearing the label by passing
                          // empty string; treat undefined as "don't
                          // touch". Stored as `undefined` when blank
                          // so canvas can fall back to approver
                          // display name.
                          ...(patch.label !== undefined
                            ? { label: patch.label.trim() || undefined }
                            : {}),
                        }
                      : s
                ),
              }
            : f
        )
      )
    },
    []
  )

  const deleteStep = useCallback((flowId: string, stepId: string) => {
    setApprovalFlows((prev) =>
      prev.map((f) =>
        f.id === flowId
          ? { ...f, steps: f.steps.filter((s) => s.id !== stepId) }
          : f
      )
    )
  }, [])

  return {
    categories,
    subcategories,
    paymentMethods,
    rates,
    approvalFlows,
    users,
    entities,
    expenseGroupsEnabled,
    setExpenseGroupsEnabled,
    addCategory,
    renameCategory,
    deleteCategory,
    toggleCategoryVisible,
    replaceCategories,
    replaceSubcategories,
    replacePaymentMethods,
    addSubcategory,
    renameSubcategory,
    deleteSubcategory,
    addPaymentMethod,
    renamePaymentMethod,
    deletePaymentMethod,
    addRate,
    renameRate,
    setRateAmount,
    setRateCurrency,
    setRateScope,
    deleteRate,
    addFlow,
    renameFlow,
    deleteFlow,
    replaceApprovalFlows,
    setFlowTrigger,
    setFlowPriority,
    setFlowNarrative,
    upsertFlow,
    addStep,
    updateStep,
    deleteStep,
  }
}

export type PolicyData = ReturnType<typeof usePolicyData>
