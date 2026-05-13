import { hasReceipt } from "./receiptPresence"
import type { PolicyAlertVariant } from "./PolicyAlertCard"

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
   *  specific copy. Empty array is equivalent to none. */
  alertKinds?: ReadonlyArray<
    "late-submission" | "receipt-after-timeframe" | "receipt-mismatch"
  >
  /** Expense category (e.g. "Meals", "Travel"). Used to decide
   *  whether category-specific copy (e.g. alcohol) applies. */
  category?: string
  /** Amount in EUR. Used for limit-based copy. */
  amount?: number
}

// -- Signal helpers --------------------------------------------------

/** Likely meal-context categories. We treat any category whose label
 *  hints at food/dining as "meal" for the per-person-limit rule. */
function isMealCategory(category: string | undefined): boolean {
  if (!category) return false
  const c = category.toLowerCase()
  return (
    c.includes("meal") ||
    c.includes("food") ||
    c.includes("dining") ||
    c.includes("restaurant")
  )
}

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
  // Alcohol on travel — only if there IS a receipt (the rule infers
  // the breach from receipt contents). Deterministic gate so it
  // doesn't fire on every >80€ travel row.
  if (
    receipt &&
    isTravelCategory(ctx.category) &&
    amount > 80 &&
    ctx.rowId.charCodeAt(ctx.rowId.length - 1) % 3 === 0
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
  if (isMealCategory(ctx.category) && amount > 55) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Meal limit exceeded",
      description:
        "This meal is above the 55€ per-person/day limit. Check the attendees before approving.",
    }
  }
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
  if (
    receipt &&
    isTravelCategory(ctx.category) &&
    amount > 80 &&
    ctx.rowId.charCodeAt(ctx.rowId.length - 1) % 3 === 0
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
  if (isMealCategory(ctx.category) && amount > 55) {
    return {
      variant: "warning",
      stripLabel: "Review recommended",
      title: "Meal looks above the per-person limit",
      description:
        "Add the attendees in the description so your approver can validate the 55€ per-person/day limit.",
    }
  }
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

  // Controlling and Pay tabs don't surface policy alerts — those
  // JTBDs are post-approval and the agent has nothing to recommend.
  return null
}
