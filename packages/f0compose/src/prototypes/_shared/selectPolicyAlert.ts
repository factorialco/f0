import { hasReceipt } from "./receiptPresence"
import type { PolicyAlertVariant } from "./PolicyAlertCard"
import {
  buildMissingFieldsAlert,
  descriptionResolvesToGreen,
  getMissingRequiredFields,
  wasEverGated,
} from "./requiredFields"

/**
 * Picks a policy-alert variant + copy for an expense row, given the
 * JTBD context the detail page is rendered in.
 *
 * Returns `null` when no alert should be shown for this combination
 * (e.g. My spending > Submitted, or Approve & Pay > Controlling/Pay).
 *
 * The selection is **row-signal driven**, not random:
 *   1. We compute the strongest signal that's true for this row
 *      (e.g. "no receipt attached AND amount > 25€" beats
 *      "late submission" which beats "meal exceeds limit"…).
 *   2. The first matching rule produces the copy. This guarantees
 *      a "No receipt attached" alert never fires on a row whose
 *      receipt panel shows a thumbnail, that "Out of policy:
 *      alcohol" only fires on alcohol categories, and so on.
 *   3. If nothing matches and the row is in a context that should
 *      surface a positive recommendation (Approve > Ready to
 *      approve / My spending > To-Do success), we fall through to
 *      a generic "looks good" copy.
 *
 * The mapping of context → output:
 *   - Approve & Pay > Approve > Needs review (row.alerts.length > 0)
 *       → review (warning) or reject (error), driven by row signals
 *   - Approve & Pay > Approve > Ready to approve (row.alerts.length === 0)
 *       → success ("Approval recommended")
 *   - My spending > Expenses > To-Do (status ∈ draft|changes-requested)
 *       → review / send-for-approval / likely-rejection, driven by
 *         row signals
 *   - My spending > Expenses > Submitted (any other view-mode status)
 *       → no alert
 */

export type PolicyAlertConfig = {
  variant: PolicyAlertVariant
  stripLabel: string
  title: string
  description: string
}

type Context = {
  /** Mirrors `ExpenseDetailPage`'s `tabRole` prop. */
  tabRole: "approval" | "controlling" | "pay" | "view"
  /** Row's status — used to discriminate My spending To-Do vs Submitted. */
  status: string
  /** Whether the row carries compliance alerts (drives the Approve-tab
   *  preset split between Needs review and Ready to approve). */
  hasAlerts: boolean
  /** Stable id used to deterministically derive auxiliary signals. */
  rowId: string
  /** Specific alert kinds on the row, when known. Drives the most
   *  specific copy. Empty array is equivalent to none. The union is
   *  intentionally a superset of the current "timeliness + match"
   *  kinds so newer policy alerts (meal-over-limit, alcohol-detected,
   *  receipt-invalid, missing-merchant, weekend-charge) can flow
   *  through without triggering a TS error; the branch logic below
   *  only special-cases the original three and falls through to the
   *  generic review/recommendation copy for the rest. */
  alertKinds?: ReadonlyArray<
    | "late-submission"
    | "receipt-after-timeframe"
    | "receipt-mismatch"
    | "meal-over-limit"
    | "alcohol-detected"
    | "receipt-invalid"
    | "missing-merchant"
    | "weekend-charge"
    | "declared-split"
  >
  /** Expense category (e.g. "Meals", "Travel"). Used to decide
   *  whether category-specific copy (e.g. alcohol) applies. */
  category?: string
  /** Amount in EUR. Used for limit-based copy. */
  amount?: number
}

// -- Signal helpers --------------------------------------------------

// NOTE: an `isMealCategory` helper used to live here for the legacy
// `amount > 55 && meal` synthetic alert. Removed when meal-over-limit
// switched to an explicit seeded `ExpenseAlert` so the table tag and
// detail card stay in sync. Kept this note so the deletion is
// traceable from grep.

/** Travel categories — used to gate the "alcohol on travel policy"
 *  reject copy so it doesn't fire on a Software subscription. */
function isTravelCategory(category: string | undefined): boolean {
  if (!category) return false
  const c = category.toLowerCase()
  return c.includes("travel") || c.includes("hotel") || c.includes("flight")
}

// -- Approver-side rule pipelines ------------------------------------

function approverWarningOrError(ctx: Context): PolicyAlertConfig | null {
  const receipt = hasReceipt(ctx.rowId)
  const amount = ctx.amount ?? 0
  const kinds = new Set(ctx.alertKinds ?? [])

  // ERRORS — high-confidence policy breaches: recommend rejection.
  if (!receipt && amount > 25) {
    return {
      variant: "error",
      stripLabel: "Rejection recommended",
      title: "No receipt attached",
      description:
        "Policy requires a receipt for any expense above 25€. Without one, this should be rejected and returned to the employee.",
    }
  }
  // Alcohol on travel — gated on the row carrying an explicit
  // `alcohol-detected` alert. The earlier version of this rule
  // synthesised alcohol from `isTravelCategory + amount > 80 + id
  // hash`, which made it fire on rows whose actual alert was
  // something else (e.g. `late-submission`) and overrode the row's
  // real signal. With `alcohol-detected` now in the alert taxonomy
  // this deterministic guess is redundant; this branch only stays
  // here (above the generic alcohol-detected handler below) so the
  // "Travel + alcohol" rejection copy can be tailored when both
  // signals are present.
  if (
    receipt &&
    kinds.has("alcohol-detected") &&
    isTravelCategory(ctx.category)
  ) {
    return {
      variant: "error",
      stripLabel: "Rejection recommended",
      title: "Out of policy: alcohol",
      description:
        "Receipt includes alcohol charges, which the company travel policy doesn't reimburse.",
    }
  }

  // WARNINGS — softer signals: recommend a closer look. All
  // receipt-content rules are gated on `receipt` so they can't fire
  // on a row whose panel shows the empty state.
  if (receipt && kinds.has("receipt-mismatch")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Receipt amount mismatch",
      description:
        "The receipt total doesn't match the expense amount. Worth confirming before approving.",
    }
  }
  // Out-of-policy red flags below — kept as `warning` variant so the
  // approver still has the choice to approve with context, but the
  // stripLabel makes the recommendation clear.
  if (kinds.has("meal-over-limit")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Meal expense over the limit",
      description:
        "This meal is above the per-person limit. Check the attendees and the context before approving.",
    }
  }
  if (kinds.has("alcohol-detected")) {
    return {
      variant: "error",
      stripLabel: "Rejection recommended",
      title: "Alcohol on the receipt",
      description:
        "The receipt includes alcohol charges, which the company policy doesn't reimburse. Returning this to the employee is the safer call.",
    }
  }
  if (kinds.has("weekend-charge")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Weekend charge",
      description:
        "This expense was incurred on a weekend. Confirm the business context before approving.",
    }
  }
  if (kinds.has("receipt-invalid")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Receipt unreadable",
      description:
        "We couldn't parse this receipt — it may be the wrong file or a low-quality scan. Ask the employee for a clearer copy before approving.",
    }
  }
  if (kinds.has("missing-merchant")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Merchant missing from the receipt",
      description:
        "The receipt has no merchant name. Confirm where this expense was incurred before approving.",
    }
  }
  // NOTE: a legacy `isMealCategory(category) && amount > 55` branch
  // used to live here. With `meal-over-limit` in the alert taxonomy
  // (and seeded explicitly on the rows that should carry it) the
  // synthetic rule was firing on every meal >55€ even when the
  // row's actual alert was something else — overriding the row tag
  // shown in the table. Removed in favour of the explicit
  // `meal-over-limit` branch above.
  if (receipt && kinds.has("receipt-after-timeframe")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Receipt attached late",
      description:
        "The receipt was uploaded after the required timeframe. Confirm it's the right document for this transaction.",
    }
  }
  if (kinds.has("late-submission")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Late submission",
      description:
        "Submitted past the company's 14-day window. Check the date stamp matches the receipt.",
    }
  }
  if (!receipt) {
    // Receipt missing but under the strict 25€ threshold — flag for
    // review rather than rejection.
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "No receipt attached",
      description:
        "No receipt is attached. Below the 25€ threshold this can be approved, but it's worth asking the employee to add one.",
    }
  }

  return null
}

// -- Submitter-side rule pipelines -----------------------------------

function submitterAlert(ctx: Context): PolicyAlertConfig | null {
  const receipt = hasReceipt(ctx.rowId)
  const amount = ctx.amount ?? 0
  const kinds = new Set(ctx.alertKinds ?? [])

  // LIKELY REJECTION — strong signals the approver will bounce this.
  if (!receipt && amount > 25) {
    return {
      variant: "error",
      stripLabel: "Likely rejection",
      title: "Add a receipt before submitting",
      description:
        "Above 25€, your approver will need a receipt. Upload one or this will almost certainly come back to you.",
    }
  }
  // Travel + alcohol — gated on an explicit `alcohol-detected` alert
  // on the row. See the matching approver branch for context.
  if (
    receipt &&
    kinds.has("alcohol-detected") &&
    isTravelCategory(ctx.category)
  ) {
    return {
      variant: "error",
      stripLabel: "Likely rejection",
      title: "Out of policy: alcohol",
      description:
        "Your receipt includes alcohol, which isn't covered by the travel policy. Approvers are likely to reject.",
    }
  }

  // REVIEW — fixable issues to address before sending. Receipt-
  // content rules require an actual receipt.
  if (receipt && kinds.has("receipt-mismatch")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Receipt amount doesn't match",
      description:
        "Your receipt total is different from the expense amount. Update one of them so they line up before submitting.",
    }
  }
  // Out-of-policy red flags — surfaced to the submitter as a "likely
  // rejection" or "review recommended" so they fix the issue before
  // sending it off.
  if (kinds.has("meal-over-limit")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Meal looks over the limit",
      description:
        "This meal is above the per-person limit. Add the attendees in the description so your approver can validate the spend.",
    }
  }
  if (kinds.has("alcohol-detected")) {
    return {
      variant: "error",
      stripLabel: "Likely rejection",
      title: "Alcohol on the receipt",
      description:
        "Your receipt includes alcohol, which isn't covered by company policy. Most approvers will return this — split the bill or remove the line if you can.",
    }
  }
  if (kinds.has("weekend-charge")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Weekend charge",
      description:
        "This was charged on a weekend. Add a short note in the description explaining the business context so your approver doesn't bounce it back.",
    }
  }
  if (kinds.has("receipt-invalid")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Receipt looks unreadable",
      description:
        "We couldn't parse this receipt. Replace it with a clearer copy (or the original PDF) before submitting.",
    }
  }
  if (kinds.has("missing-merchant")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Merchant missing from the receipt",
      description:
        "The receipt has no merchant name. Add the merchant in the description so your approver can validate the spend.",
    }
  }
  // See the matching note in `approverWarningOrError` — legacy
  // synthetic meal-limit branch removed in favour of the explicit
  // `meal-over-limit` kind already handled above.
  if (receipt && kinds.has("receipt-after-timeframe")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Receipt added late",
      description:
        "Your receipt was attached after the timeframe. Add a quick note explaining the delay so the approver doesn't bounce it back.",
    }
  }
  if (kinds.has("late-submission")) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Late submission",
      description:
        "This is past the 14-day submission window. Add a short note so your approver knows the context.",
    }
  }
  if (!receipt) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Add a receipt",
      description:
        "Below 25€ a receipt isn't strictly required, but adding one makes approval much faster.",
    }
  }

  return null
}

// -- Public entry point ----------------------------------------------

export function selectPolicyAlert(ctx: Context): PolicyAlertConfig | null {
  // Approve & Pay > Approve tab.
  if (ctx.tabRole === "approval") {
    if (ctx.hasAlerts) {
      // Needs review preset → derive a row-specific warning or
      // rejection from the actual signals on the row.
      return (
        approverWarningOrError(ctx) ?? {
          // Fallback for rows the rules don't catch — should be rare
          // since `hasAlerts` already implies at least one signal.
          variant: "warning",
          stripLabel: "Review recommended",
          title: "Worth a closer look",
          description:
            "A few small signals on this expense — give it a quick review before approving.",
        }
      )
    }
    // Ready to approve preset → all positive.
    return {
      variant: "success",
      stripLabel: "Approval recommended",
      title: "Expense within policy",
      description:
        "Amount, vendor and date all check out. Receipt is attached and matches the expense.",
    }
  }

  // My spending > Expenses, view mode. The To-Do preset is exactly
  // draft + changes-requested per the prototype spec; everything else
  // (pending, approved, in-payroll, paid) is the Submitted preset
  // which has no alerts.
  if (ctx.tabRole === "view") {
    const isToDo =
      ctx.status === "draft" || ctx.status === "changes-requested"
    if (!isToDo) return null
    // GATE: required fields take precedence over every policy-agent
    // recommendation. If the row is missing fields the company
    // considers mandatory, the submitter physically cannot send for
    // approval — surface that fact as a hard error red alert and
    // suppress whatever the agent would otherwise have said. The
    // policy-agent rec only resurfaces once `markFieldsFilled` has
    // been called for this row (after a successful Save in edit mode).
    const missing = getMissingRequiredFields(ctx.rowId)
    if (missing.length > 0) return buildMissingFieldsAlert(missing)
    // GATE CLEARED → GREEN: for a designed subset of the ever-gated
    // rows, completing the description short-circuits to a positive
    // alert. The mental model: those rows' policy warning was
    // exactly "we need attendees / context in the description" — the
    // submitter has now provided it, so the agent confirms it's
    // ready. The complementary subset stays on the regular pipeline
    // below so the demo shows BOTH outcomes.
    if (wasEverGated(ctx.rowId) && descriptionResolvesToGreen(ctx.rowId)) {
      return {
        variant: "success",
        stripLabel: "Send for approval",
        title: "Looks ready to send",
        description:
          "Thanks for adding the context — the description covers what your approver needs. You can submit this for approval.",
      }
    }
    // Derive a row-specific alert; fall through to "looks ready" if
    // no rules match — that's the genuine all-clear case.
    return (
      submitterAlert(ctx) ?? {
        variant: "success",
        stripLabel: "Send for approval",
        title: "Looks ready to send",
        description:
          "Receipt, category and amount all check out. You can submit this for approval.",
      }
    )
  }

  // Manage > Pending Controlling. Designers want the approval-time
  // policy-agent recommendation to persist into the controlling
  // step — the controller benefits from the same context the
  // approver saw (alcohol on receipt, meal over limit, etc.) when
  // deciding whether to code or reject the expense.
  //
  // Audit trail semantics: BOTH the strip label and the body
  // description are shown VERBATIM from what the approver saw, so
  // the controller can tell exactly what the agent's original
  // verdict was. The warning/error descriptions are written
  // approval-side ("should be rejected", "before approving") but
  // the verbs still apply — the controller has the same Approve /
  // Reject affordances. The green description is tense-neutral
  // ("Amount, vendor and date all check out") so it reads
  // identically in both contexts.
  if (ctx.tabRole === "controlling") {
    if (ctx.hasAlerts) {
      return (
        approverWarningOrError(ctx) ?? {
          variant: "warning",
          stripLabel: "Review recommended",
          title: "Worth a closer look",
          description:
            "A few small signals on this expense — give it a quick review before approving.",
        }
      )
    }
    return {
      variant: "success",
      stripLabel: "Approval recommended",
      title: "Expense within policy",
      description:
        "Amount, vendor and date all check out. Receipt is attached and matches the expense.",
    }
  }

  // Pay tab doesn't surface policy alerts — by the time we reach
  // it, the expense is approved and controlled and the agent has
  // nothing further to recommend.
  return null
}
