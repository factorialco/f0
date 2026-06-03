import { useCopilotReadable } from "@/copilot"

import type { Entity } from "../certified-documents/types"
import type {
  ApprovalFlow,
  Category,
  LegalEntity,
  PaymentMethod,
  Rate,
  Subcategory,
  User,
} from "../data/types"
import type { FieldRow } from "../forms/fields"
import type { NavEntryId } from "../nav/navConfig"
import type { PolicyRulesData } from "../policy-rules/types"
import type { PolicyView } from "../views/viewRouter"
import type { WizardState } from "../wizard/useWizardState"

import type { SetupAnswers } from "./useExpensePolicySetup"

/**
 * Expose page state to the One chat panel so the agent has context
 * about what the admin is configuring. Visual-recreation scope only —
 * no actions are wired (BR-008).
 *
 * Surfaces:
 *  - the left-nav section (Expense types / Approval flows / Certified documents),
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
 * Regular / Per diem / Mileage of the Expense types wizard.
 */
export function useExposeContext(args: {
  activeNavId: NavEntryId
  rows: FieldRow[]
  view: PolicyView
  categories: Category[]
  subcategories: Subcategory[]
  paymentMethods: PaymentMethod[]
  rates: Rate[]
  approvalFlows: ApprovalFlow[]
  users: User[]
  entities: LegalEntity[]
  wizard: WizardState
  setupAnswers: SetupAnswers
  // Certified-documents entities. Used to compute the section's
  // completion status for the chat-agenda projection so the agent
  // can answer "are we done?" / decide whether to move on to the
  // next core section.
  certificationEntities: readonly Entity[]
  // Current Policy-rules values (meals/travel/reimbursements/receipts/
  // exceptions). Projected below keyed by the SAME field names
  // `setPolicyRule` accepts, so One can read a current value and edit it
  // with the matching key.
  policyRules: PolicyRulesData
}) {
  // ── Agenda projection (chat spec §3 "Chat keeps an agenda") ─────
  // Per chat spec, One internally tracks which core sections are
  // complete, which was the last guided, and what's next. We
  // compute the three section states here so the agent can read a
  // single `agenda` block instead of inferring completion from raw
  // wizard/setup/cert state.
  //
  // Completion heuristics:
  //   - expense-forms: all three sub-steps marked done in
  //     `wizard.formSubDone` (regular + per-diem + mileage). Q1/Q2/Q3
  //     answered is a *necessary* but not sufficient signal: the
  //     admin still has to look-good through Regular, Per diem, and
  //     Mileage before the section is complete.
  //   - approval-flows: completion is *explicit* — the agent calls
  //     `completeStep("approval-flows")` once the user signals
  //     they're done. We don't auto-complete on "has ≥1 flow"
  //     because the default seeds would mark it done on page load.
  //     Until the agent flips it, status reads as "current" once
  //     expense-forms is done, "blocked" before.
  //   - certified-documents: complete when at least one entity is
  //     active. (Per PM: enabling for one country counts; there's
  //     no "I'm done" signal for this section because each entity
  //     activation is its own commit.)
  //
  // `current` is the first section that isn't `complete` — keeps the
  // agent's "what's next?" answer trivial.
  const expenseFormsComplete =
    args.wizard.formSubDone.includes("regular") &&
    args.wizard.formSubDone.includes("per-diem") &&
    args.wizard.formSubDone.includes("mileage")
  const approvalFlowsComplete = args.wizard.outerDone.includes("approval-flows")
  const certifiedDocsComplete = args.certificationEntities.some(
    (e) => e.certificationStatus === "active"
  )
  const sectionStatuses: ReadonlyArray<{
    id: NavEntryId
    label: string
    status: "complete" | "current" | "blocked"
  }> = [
    {
      id: "expense-forms",
      label: "Expense types",
      status: expenseFormsComplete ? "complete" : "current",
    },
    {
      id: "approval-flows",
      label: "Approval flows",
      status: approvalFlowsComplete
        ? "complete"
        : expenseFormsComplete
          ? "current"
          : "blocked",
    },
    {
      id: "certified-documents",
      label: "Certified documents",
      status: certifiedDocsComplete
        ? "complete"
        : expenseFormsComplete && approvalFlowsComplete
          ? "current"
          : "blocked",
    },
  ]
  const nextSection =
    sectionStatuses.find((s) => s.status !== "complete")?.id ?? null
  const coreComplete = sectionStatuses.every((s) => s.status === "complete")

  // DEBUG: verify users[] actually reaches the readable
  if (typeof window !== "undefined") {
    ;(window as unknown as { __policyDebug?: unknown }).__policyDebug = {
      userCount: args.users.length,
      hasAmadeu: args.users.some((u) =>
        u.name.toLowerCase().includes("amadeu")
      ),
      sampleNames: args.users.slice(0, 5).map((u) => u.name),
    }
  }

  useCopilotReadable({
    description:
      "The Expense Policy settings page. The admin is configuring the company's global expense policy across three sections: Expense types (Regular → Per diem → Mileage), Approval flows, and Certified documents. Every entity the user can reference — employees, categories, payment methods, flows, rates, entities — is in this readable state below. Use `users[]` as the employee directory: match by name and call the appropriate frontend tool directly. The `agenda` block tracks per-section completion; `setup` tracks the cold-start clarifying answers; `wizard` tracks which sub-step is current. The user can navigate freely between sections.",
    value: {
      activeSection: args.activeNavId,
      currentView: serializeView(args.view),
      // Agenda projection consumed by the chat (spec §3). The agent
      // SHOULD prefer this block over re-deriving completion from
      // wizard/setup/cert state — the heuristics live here so the
      // agent + the prototype agree on what "done" means.
      agenda: {
        sections: sectionStatuses,
        nextSection,
        coreComplete,
      },
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
      // Rates are form-scoped: each entry carries its `formType`
      // (`"per-diem"` or `"mileage"`). The agent uses these when
      // answering "how many per-diem rates are configured?" or
      // when reading scope state to drive scope-configuration
      // turns (the scope chip in `RatesView` posts a user message
      // and expects the agent to pick up context here).
      rates: args.rates.map((r) => ({
        id: r.id,
        formType: r.formType,
        name: r.name,
        amount: r.amount,
        currency: r.currency,
        scope:
          r.scope.kind === "everyone"
            ? { kind: "everyone" as const }
            : r.scope.kind === "entities"
              ? {
                  kind: "entities" as const,
                  entityIds: r.scope.entityIds,
                }
                : {
                  kind: "people" as const,
                  personIds: r.scope.personIds,
                },
      })),
      // Approval flows — priority-ordered linear chains. The agent
      // uses this to answer "what approves expenses over €1k?" or
      // to configure trigger conditions when the user clicks the
      // trigger chip (which posts a request without inline-editing
      // the trigger UI). Each step's approver is serialized in its
      // discriminated-union shape so the agent can reason about
      // role vs. user without resolving names.
      approvalFlows: args.approvalFlows.map((f) => ({
        id: f.id,
        name: f.name,
        priority: f.priority,
        // Freeform-first: the human WHEN/THEN One authored, plus its
        // feasibility verdict + note. These are the source of truth;
        // the structured trigger/steps below are optional enrichment.
        when: f.when ?? null,
        then: f.then ?? null,
        feasibility: f.feasibility ?? "supported",
        note: f.note ?? null,
        trigger: {
          amount: f.trigger.amount,
          categoryIds: f.trigger.categoryIds,
          scope:
            f.trigger.scope.kind === "everyone"
              ? { kind: "everyone" as const }
              : f.trigger.scope.kind === "entities"
                ? {
                    kind: "entities" as const,
                    entityIds: f.trigger.scope.entityIds,
                  }
                : f.trigger.scope.kind === "people"
                  ? {
                      kind: "people" as const,
                      personIds: f.trigger.scope.personIds,
                    }
                  : {
                      kind: "attributes" as const,
                      team: f.trigger.scope.team ?? null,
                      country: f.trigger.scope.country ?? null,
                      department: f.trigger.scope.department ?? null,
                    },
        },
        steps: f.steps.map((s) => ({
          id: s.id,
          label: s.label ?? null,
          approver:
            s.approver.kind === "role"
              ? { kind: "role" as const, role: s.approver.role }
              : s.approver.kind === "user"
                ? { kind: "user" as const, userId: s.approver.userId }
                : {
                    kind: "relation" as const,
                    relation: s.approver.relation,
                    label: s.approver.label,
                  },
        })),
      })),
      // Named users available in this prototype. These ARE the
      // employees / approvers for the entire policy session — there
      // is no separate Factorial auth or directory lookup. ~100
      // seats spread across countries + departments + teams so the
      // agent can resolve scopes like "Germany sales team" or
      // "everyone in Finance" with a filter on this list. When the
      // admin says "auto-approve for {Name}", match on `name` (case-
      // insensitive) and use the returned `id`. For team/country
      // scopes, filter by `department` + `country` + `team` and pass
      // every matching `id` to setRateScope or setFlowTrigger.
      users: args.users.map((u) => ({
        id: u.id,
        name: u.name,
        title: u.title,
        department: u.department,
        team: u.team,
        country: u.country,
        entityId: u.entityId,
      })),
      // Current Policy-rules values, keyed by the SAME field names
      // `setPolicyRule` accepts — so One can read "what's the alcohol
      // cap now?" and edit it with the matching key.
      policyRules: {
        // Meals
        mealSoloInOfficeCap: args.policyRules.meals.caps.solo.inOffice,
        mealSoloTravellingCap: args.policyRules.meals.caps.solo.travelling,
        mealTeamCap: args.policyRules.meals.caps.team,
        mealClientCap: args.policyRules.meals.caps.client,
        mealHospitalityCap: args.policyRules.meals.caps.hospitality,
        alcoholAllowance: args.policyRules.meals.alcohol.allowance,
        alcoholCapPercent: args.policyRules.meals.alcohol.capPercent,
        attendeesClient: args.policyRules.meals.attendees.client,
        attendeesTeam: args.policyRules.meals.attendees.team,
        teamMealThreshold: args.policyRules.meals.attendees.teamMealThreshold,
        itemizedForClientMeals:
          args.policyRules.meals.documentation.itemizedForClientMeals,
        itemizedThreshold: args.policyRules.meals.documentation.itemizedThreshold,
        // Travel
        perDiemDomesticMeals: args.policyRules.travel.perDiems.domestic.meals,
        perDiemDomesticLodging: args.policyRules.travel.perDiems.domestic.lodging,
        perDiemDomesticIncidentals:
          args.policyRules.travel.perDiems.domestic.incidentals,
        perDiemInternationalMeals:
          args.policyRules.travel.perDiems.international.meals,
        perDiemInternationalLodging:
          args.policyRules.travel.perDiems.international.lodging,
        perDiemInternationalIncidentals:
          args.policyRules.travel.perDiems.international.incidentals,
        flightAdvanceDays: args.policyRules.travel.booking.flightAdvanceDays,
        flightClass: args.policyRules.travel.booking.flightClass,
        hotelMaxStars: args.policyRules.travel.booking.hotelMaxStars,
        mileageRate: args.policyRules.travel.mileage.rate,
        // Reimbursements
        submissionWindowDays:
          args.policyRules.reimbursements.timing.submissionWindowDays,
        approvalSlaDays: args.policyRules.reimbursements.timing.approvalSlaDays,
        defaultCurrency: args.policyRules.reimbursements.currency.defaultCurrency,
        fxSource: args.policyRules.reimbursements.currency.fxSource,
        corporateCardAutoImport:
          args.policyRules.reimbursements.paymentMethods.corporateCardAutoImport,
        personalCardManual:
          args.policyRules.reimbursements.paymentMethods.personalCardManual,
        // Receipts
        receiptsRequiredAbove: args.policyRules.receipts.requiredAbove,
        receiptsItemizedAbove: args.policyRules.receipts.itemizedAbove,
        receiptsRetentionYears: args.policyRules.receipts.retentionYears,
        receiptFormatPhoto: args.policyRules.receipts.formats.photo,
        receiptFormatPdf: args.policyRules.receipts.formats.pdf,
        receiptFormatEmailForward: args.policyRules.receipts.formats.emailForward,
        affidavitAllowed: args.policyRules.receipts.affidavitAllowed,
        // Exceptions
        overrideApproverRole: args.policyRules.exceptions.overrides.approverRole,
        justificationRequired:
          args.policyRules.exceptions.overrides.justificationRequired,
        logRetentionDays: args.policyRules.exceptions.audit.logRetentionDays,
        auditVisibleTo: args.policyRules.exceptions.audit.visibleTo,
        autoExpiryDays: args.policyRules.exceptions.audit.autoExpiryDays,
      },
      // Legal entities the company operates under. Use these as
      // targets when the admin scopes a rate or flow by entity
      // (e.g. "for our Germany entity") via scopeKind='entities'.
      entities: args.entities.map((e) => ({
        id: e.id,
        name: e.name,
        country: e.country,
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
    case "flow-detail":
      return `approval-flow detail timeline for flow "${view.flowId}"`
  }
}
