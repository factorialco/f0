import { useCopilotReadable } from "@/copilot"

import type { Category, PaymentMethod, Subcategory } from "../data/types"
import type { FieldRow } from "../forms/fields"
import type { NavEntryId } from "../nav/navConfig"
import type { PolicyView } from "../views/viewRouter"
import type { WizardState } from "../wizard/useWizardState"

import type { SetupAnswers } from "./useExpensePolicySetup"

/**
 * Expose page state to the One chat panel so the agent has context
 * about what the admin is configuring. Visual-recreation scope only —
 * no actions are wired (BR-008).
 *
 * Surfaces:
 *  - the left-nav section (Expense forms / Rates / Approval flows),
 *  - the current URL view,
 *  - **the co-creation wizard's progress** (handoff §2.6) — which
 *    outer / inner steps are done, current, or pending. The agent
 *    uses this to refuse to jump ahead and to call `completeStep` /
 *    `completeSubStep` at the right moment,
 *  - the field configuration for the forms table,
 *  - the global Categories / Subcategories / Payment methods lists.
 *
 * This lets the agent answer "how many categories are visible?" or
 * "what's the parent of the 'Hotels' subcategory?" without the user
 * having to spell it out, AND know whether it's currently inside
 * Regular / Per diem / Mileage of the Expense forms wizard.
 */
export function useExposeContext(args: {
  activeNavId: NavEntryId
  rows: FieldRow[]
  view: PolicyView
  categories: Category[]
  subcategories: Subcategory[]
  paymentMethods: PaymentMethod[]
  wizard: WizardState
  setupAnswers: SetupAnswers
}) {
  useCopilotReadable({
    description:
      "The Expense Policy settings page. The admin is configuring the company's global expense policy through a sequential wizard: Expense forms (Regular → Per diem → Mileage) → Rates → Approval flows → Certified documents. The admin completes steps in order; the agent must not jump ahead. The `setup` block reflects the answers the user has given so far in the chat co-creation script; the agent uses these to decide whether to ask the next question, re-ask one, or render the summary.",
    value: {
      activeSection: args.activeNavId,
      currentView: serializeView(args.view),
      wizard: {
        currentOuterStep: args.wizard.currentOuterStep,
        currentFormSubStep: args.wizard.currentFormSubStep,
        outerDone: args.wizard.outerDone,
        formSubDone: args.wizard.formSubDone,
      },
      setup: {
        q1Answered: args.setupAnswers.q1 !== null,
        q2Answered: args.setupAnswers.q2 !== null,
        q3Answered: args.setupAnswers.q3 !== null,
        q1Selected: args.setupAnswers.q1?.selected ?? [],
        q1Custom: args.setupAnswers.q1?.custom ?? null,
        q2Selected: args.setupAnswers.q2?.selected ?? [],
        q2Custom: args.setupAnswers.q2?.custom ?? null,
        q3Selected: args.setupAnswers.q3?.selected ?? null,
        q3Custom: args.setupAnswers.q3?.custom ?? null,
        perDiemEnabled: args.setupAnswers.perDiemEnabled,
        mileageEnabled: args.setupAnswers.mileageEnabled,
      },
      expenseForms: args.rows.map((r) =>
        r.kind === "locked"
          ? {
              field: r.label,
              type: r.type,
              visible: true,
              requirement: r.requirement,
              locked: true,
              expandable: r.expandable ?? false,
              modalTarget: r.modalTarget ?? null,
            }
          : {
              field: r.label,
              type: r.type,
              visible: r.visible,
              requirement: r.requirement,
              locked: false,
              expandable: r.expandable ?? false,
              modalTarget: r.modalTarget ?? null,
            }
      ),
      categories: args.categories.map((c) => ({
        id: c.id,
        name: c.name,
        visible: c.visible,
        subcategoryCount: args.subcategories.filter(
          (s) => s.categoryId === c.id
        ).length,
      })),
      subcategories: args.subcategories.map((s) => ({
        id: s.id,
        name: s.name,
        categoryId: s.categoryId,
        categoryName:
          args.categories.find((c) => c.id === s.categoryId)?.name ?? null,
      })),
      paymentMethods: args.paymentMethods.map((p) => ({
        id: p.id,
        name: p.name,
      })),
    },
  })
}

function serializeView(view: PolicyView): string {
  switch (view.kind) {
    case "forms-summary":
      return "expense-forms summary (3-card landing for Regular / Per diem / Mileage)"
    case "forms-detail":
      return `expense-forms detail editor for form type "${view.formType}"`
  }
}
