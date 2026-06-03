import {
  controllingTags,
  costCenters,
  projects,
  subcategoriesByCategory,
  vatRates,
} from "./controlling"
import { addDays, TODAY } from "./helpers"

/**
 * Expense fixtures for the My Spending prototype. Volumes match the screenshot
 * the prototype mirrors: 0 draft / 26 pending / 3 approved / 30 in-payroll.
 */

export type ExpenseStatus =
  | "draft"
  /**
   * Approver returned the expense to the submitter for fixes (missing
   * receipt, wrong amount, etc.). The submitter sees these alongside
   * drafts in the "To-Do" preset because both require their action
   * before the expense can be submitted again.
   */
  | "changes-requested"
  | "pending"
  | "approved"
  /**
   * Approved AND coded by finance — accounting fields filled in. Lives
   * between Approved and Sent-to-Pay in the lifecycle. Soft-sequential:
   * an expense MAY skip Controlled and be paid directly (Spec A BR-007).
   */
  | "controlled"
  /**
   * Transmitted to payroll/SEPA, awaiting payment confirmation. The
   * "in-flight" intermediate state.
   */
  | "in-payroll"
  /**
   * Payment confirmed — the employee has been reimbursed. Terminal
   * state. Distinguished from `in-payroll` so the Pay tab can show a
   * green "Paid" preset that doesn't conflate with mid-flight rows.
   */
  | "paid"
  | "refunded"
  | "partially-refunded"

/**
 * Accounting metadata attached to an expense once finance has coded it
 * (or partially coded it before Marking as controlled). All fields
 * optional — finance can save partial values per Spec D BR-011.
 */
export type ControllingFields = {
  /** Re-states the row's category for the controlling form. */
  category?: ExpenseCategory
  /** Subcategory string from `subcategoriesByCategory[category]`. */
  subcategory?: string
  /** Cost center id from `costCenters`. */
  costCenter?: string
  /** Project id from `projects`. */
  project?: string
  /** VAT rate id from `vatRates`. */
  vatRate?: string
  /** Free-text accounting note. */
  description?: string
  /** Tag ids from `controllingTags`. */
  tags?: string[]
}

export type ExpenseCategory =
  | "Meals"
  | "Taxis"
  | "Travel"
  | "Shopping"
  | "Hotel"
  | "Office"
  | "Software"
  | "Mileage"
  | "Per diem"

export type ExpenseAlert =
  /** Submitted past the company's submission window. */
  | "late-submission"
  /** Receipt attached after the required timeframe. */
  | "receipt-after-timeframe"
  /** Receipt amount differs from the expense amount. */
  | "receipt-mismatch"
  /** Meal expense above the company per-person limit. */
  | "meal-over-limit"
  /** Alcohol detected on receipt — typically non-reimbursable. */
  | "alcohol-detected"
  /** Receipt image unreadable / wrong format / OCR failed. */
  | "receipt-invalid"
  /** Receipt has no merchant name extracted. */
  | "missing-merchant"
  /** Charge fell on a weekend — often flagged for managerial review. */
  | "weekend-charge"
  /**
   * Submitter declared this expense as a shared/split receipt. The
   * tag is informational (variant "info"), not a warning — it tells
   * approvers that other rows referencing the same receipt are an
   * expected consequence of the split, not a duplicate.
   */
  | "declared-split"

/**
 * Participants on a shared expense — modeled per PSPEC-spending-
 * participants-split. Internal participants are real employees who
 * are asked to confirm attendance and may receive a reimbursable
 * share. External participants are a headcount only (no identity,
 * no reimbursement, no notification).
 */
export type Participant =
  | {
      kind: "internal"
      /** References `employees[*].id`. */
      employeeId: string
      /** Live attendance confirmation status, set by the participant. */
      confirmation: "pending" | "confirmed" | "declined"
    }
  | {
      kind: "external"
      /** Stable id within the parent expense for React keys. */
      id: string
    }

export type SplitMode = "equal" | "by-amount"

/**
 * Declared split on a shared receipt. `shares[*].employeeId === null`
 * represents the aggregated external-participants row (greyed, never
 * reimbursable). The remaining entries map to internal participants
 * by `employeeId`. Sum of `amount` must equal the receipt total.
 */
export type ExpenseSplit = {
  mode: SplitMode
  shares: Array<{
    /** Internal participant employee id, or `null` for the external aggregate. */
    employeeId: string | null
    /** Reimbursable share in EUR. External row is always 0. */
    amount: number
  }>
}

/**
 * Foreign-currency metadata. Present only when the receipt was issued
 * in a currency OTHER than the company's reimbursement currency (EUR
 * for this prototype). The Expense's top-level `amount` always lives
 * in EUR — these fields capture the original document amount plus
 * the exchange rate used to compute the EUR figure, so the submitter
 * + approver can audit the conversion. Surfaced in the SubmitterEditForm
 * as an info alert directly below the reimbursable amount/currency
 * row (mirroring the per-diem rate alert).
 *
 * The PRD acceptance criteria covered:
 *   - Exchange rate display (`exchangeRate` — EUR per 1 unit of origin).
 *   - Exchange rate date (`exchangeRateDate` — ISO).
 *   - Source attribution (`exchangeRateSource` — short label, e.g. "ECB").
 */
export type ForeignCurrency = {
  /** Amount as it appears on the original receipt. */
  originalAmount: number
  /** ISO 4217 currency code of the original receipt. */
  originalCurrency: "USD" | "GBP" | "CHF" | "JPY"
  /** Rate used: 1 unit of `originalCurrency` = `exchangeRate` EUR. */
  exchangeRate: number
  /** Date the rate was sampled (typically the transaction date). */
  exchangeRateDate: string
  /** Provider attribution, e.g. "European Central Bank". */
  exchangeRateSource: string
  /**
   * Optional URL where the rate can be verified. When set, the
   * `SubmitterEditForm`'s foreign-currency info alert renders the
   * source attribution as a "Source" link (audit-friendly) rather
   * than as plain text in the description. Leave undefined for
   * the plain-text treatment.
   */
  exchangeRateSourceUrl?: string
}

/**
 * Whether this row is a regular receipt-based expense, a mileage
 * claim, or a per-diem claim. Drives field applicability in the
 * bulk-edit spreadsheet (e.g. VAT rate doesn't apply to mileage /
 * per-diem rows — see Spec E DT-002).
 */
/**
 * Mileage and per-diem claims are modelled as ordinary
 * `ExpenseCategory` values (`"Mileage"`, `"Per diem"`) rather than a
 * separate `expenseType` field. Anything that needs to special-case
 * them (e.g. Spec E DT-002 — VAT rate doesn't apply) should branch
 * on `category` directly.
 */

export type Expense = {
  id: string
  provider: string
  status: ExpenseStatus
  /** ISO date YYYY-MM-DD — when the expense was created. */
  createdAt: string
  /** Amount in EUR (number; cents are decimal). */
  amount: number
  category: ExpenseCategory
  alerts: ExpenseAlert[]
  /** Group/bundle this expense belongs to (null = ungrouped). */
  groupId: string | null
  /**
   * Nested rows shown when this row is expanded. Used today for refunded
   * expenses, where the parent row summarises the net result and the children
   * break down original charge + refund. `null`/`undefined` = no children.
   */
  children?: Expense[]
  /**
   * If true, this row represents a refund line (positive amount, displayed
   * green with a leading `+`). Always lives inside a parent's `children`.
   */
  isRefund?: boolean
  /** True for rows returned by `fetchChildren` — used to suppress status in the table. */
  isChild?: boolean
  /**
   * Accounting metadata. Populated for `approved` (partial) and
   * `controlled` (typically complete) rows. `undefined` for everything
   * else.
   */
  controlling?: ControllingFields
  /**
   * Foreign-currency receipt metadata. Optional — only present on
   * rows that were paid in a non-EUR currency. See the
   * `ForeignCurrency` type for the contract. When present, the
   * top-level `amount` is the EUR-converted figure (so existing
   * totals + summaries keep working unchanged); the originals + rate
   * live here for audit display.
   */
  foreignCurrency?: ForeignCurrency
  /**
   * How the expense was paid. Drives the visibility of the
   * reimbursable checkbox + amount and the split toggle in the
   * SubmitterEditForm. `"factorial-card"` = company-paid (not
   * out-of-pocket); reimbursable + split are hidden and the payment
   * method select is disabled. Anything else is treated as
   * out-of-pocket. Omitted = defaults to `"personal-card"` in the
   * form.
   */
  paymentMethod?:
    | "personal-card"
    | "company-card"
    | "cash"
    | "bank-transfer"
    | "factorial-card"
  /**
   * Whether the expense is flagged as reimbursable. Defaults to
   * `true` in the form when omitted. Forced to `false` (and the
   * checkbox hidden) when `paymentMethod === "factorial-card"`.
   */
  reimbursable?: boolean
  /**
   * Who shared this expense. Internal participants are real
   * employees who get a confirmation invite; external participants
   * are headcount only. Owner is always implicit (derived from the
   * row's owner) and NOT included in this list. Present only for
   * participant-bearing categories (Meals by default) where the
   * submitter has declared participants.
   */
  participants?: Participant[]
  /**
   * Declared split-payment breakdown across the participants list.
   * When present, the receipt total was paid in parts and the
   * approver queue surfaces a `declared-split` info tag to suppress
   * future duplicate-receipt detection on related rows.
   */
  split?: ExpenseSplit
  /**
   * Explicit owner — the employee whose expense this is. When
   * omitted, prototypes fall back to the active viewer (Hellen
   * by default). Set explicitly for fixtures that need to
   * represent a different person's spend, e.g. Alan Turing
   * owning `Greystone Brunch House 2` so that opening it can
   * push an Alan POV override.
   */
  ownerEmployeeId?: string
  /**
   * Optional alternative title for the detail page header. The
   * table cell still renders `provider`; if `headerTitleOverride`
   * is set, the detail page shows it instead. Used when a
   * provider name carries a disambiguating suffix in the list
   * ("Greystone Brunch House 2") that shouldn't appear in the
   * detail header.
   */
  headerTitleOverride?: string
}

// All provider names below are fictional — invented for prototype purposes.
const providers = [
  "Birch & Beam Café",
  "Lakeside Bistro",
  "Tide Lane Eatery",
  "Copperleaf Kitchen",
  "Marble & Mint Diner",
  "Roving Fork Co.",
  "Greystone Brunch House",
  "Quickline Cabs Ltd.",
  "Northwind Taxi Co.",
  "Skylane Rides",
  "Citystream Transit",
  "Wayloop Transport",
  "Skyfern Airways",
  "Silverpath Rail",
  "Junction Rail Lines",
  "The Brindle Hotel",
  "Fernlight Suites",
  "Cobblestone Inn",
  "Northway Stores",
  "Halcyon Goods",
  "Pellon Office Supplies",
  "Axiom Labs Inc.",
  "Quanta Studio",
  "Veridian Soft Co.",
] as const

const categories: ExpenseCategory[] = [
  "Meals",
  "Meals",
  "Meals",
  "Taxis",
  "Taxis",
  "Travel",
  "Hotel",
  "Shopping",
  "Office",
  "Software",
]

/** Pseudo-random generator with a fixed seed → deterministic fixtures. */
function lcg(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function buildExpenses(): Expense[] {
  const rand = lcg(424242)
  const out: Expense[] = []

  // 26 pending — created within the last 14 days
  for (let i = 0; i < 26; i++) {
    out.push(makeExpense({
      seq: i,
      status: "pending",
      daysAgo: 1 + Math.floor(rand() * 14),
      rand,
    }))
  }
  // 12 approved — last 30 days. The Pending Controlling tab uses these
  // (plus the controlled set below) as its dataset; bumping the count
  // from 3 → 12 ensures both presets have meaningful volume.
  for (let i = 0; i < 12; i++) {
    out.push(makeExpense({
      seq: 26 + i,
      status: "approved",
      daysAgo: 5 + Math.floor(rand() * 25),
      rand,
    }))
  }
  // 6 controlled — already coded by finance, ready to be paid. Lives in
  // both `Pending Controlling > Controlled` preset and `Pay > Unpaid`.
  for (let i = 0; i < 6; i++) {
    out.push(makeExpense({
      seq: 38 + i,
      status: "controlled",
      daysAgo: 8 + Math.floor(rand() * 30),
      rand,
    }))
  }
  // 12 in-payroll — recently transmitted, awaiting confirmation.
  for (let i = 0; i < 12; i++) {
    out.push(makeExpense({
      seq: 44 + i,
      status: "in-payroll",
      daysAgo: 30 + Math.floor(rand() * 60),
      rand,
    }))
  }
  // 18 paid — terminal state, older. The Pay tab's `Paid` preset uses
  // these as the green-status set so finance can clearly tell what's
  // actually been reimbursed vs what's still mid-flight.
  for (let i = 0; i < 18; i++) {
    out.push(makeExpense({
      seq: 56 + i,
      status: "paid",
      daysAgo: 90 + Math.floor(rand() * 270),
      rand,
    }))
  }

  return out
}

function makeExpense(args: {
  seq: number
  status: ExpenseStatus
  daysAgo: number
  rand: () => number
}): Expense {
  const { seq, status, daysAgo, rand } = args
  const provider = providers[seq % providers.length]
  const category = categories[seq % categories.length]
  const amount = Math.round((5 + rand() * 195) * 100) / 100
  // Sprinkle alerts. Pending expenses get a much higher rate (~60%)
  // because they drive Approve & Pay > Approve's Needs review preset
  // — we want a meaningful 10-15 expense backlog there. Other
  // statuses keep the lighter ~25% rate so post-approval tabs stay
  // mostly clean.
  const alerts: ExpenseAlert[] = []
  const r = rand()
  const isPending = status === "pending"
  const t1 = isPending ? 0.2 : 0.08
  const t2 = isPending ? 0.4 : 0.18
  const t3 = isPending ? 0.6 : 0.25
  if (r < t1) alerts.push("receipt-mismatch")
  else if (r < t2) alerts.push("receipt-after-timeframe")
  else if (r < t3) alerts.push("late-submission")

  // Second alert roll — out-of-policy / data-quality signals that
  // can stack on top of (or replace) a timeliness alert. The Alerts
  // filter in Submit > Expenses depends on a healthy spread across
  // these so each option in the dropdown actually narrows the table
  // to a non-empty set. We key off `seq` for deterministic coverage
  // rather than the random roll so the seeded distribution is
  // stable across renders.
  //
  // Distribution (mod 17 over the seq space):
  //   0     → meal-over-limit (forced; amount also pushed > €60)
  //   1     → alcohol-detected (meals/shopping flavour)
  //   2     → receipt-invalid
  //   3     → missing-merchant
  //   4     → weekend-charge
  //   5..16 → no extra alert
  //
  // Pending rows get the full spread; post-approval statuses see
  // fewer of these (we filter at sprinkle time) so the Pay tab
  // stays mostly clean.
  let amountAdjusted = amount
  const bucket = seq % 17
  const allowExtra = isPending || bucket % 2 === 0
  if (allowExtra) {
    if (bucket === 0) {
      // Meal limit is €50/person — bump the amount to make the
      // signal honest, and force category to Meals.
      amountAdjusted = Math.round((65 + rand() * 80) * 100) / 100
      alerts.push("meal-over-limit")
    } else if (bucket === 1) {
      alerts.push("alcohol-detected")
    } else if (bucket === 2) {
      alerts.push("receipt-invalid")
    } else if (bucket === 3) {
      alerts.push("missing-merchant")
    } else if (bucket === 4) {
      alerts.push("weekend-charge")
    }
  }

  // For bucket 0 we want the Meals category to make the
  // "Meal limit exceeded" tag self-explanatory on the row. Otherwise
  // sprinkle Mileage / Per diem categories deterministically across
  // the pool so the Pending Controlling bulk editor demo has
  // non-applicable VAT cells to show. Distribution: ~1 in 6 rows is
  // Mileage, ~1 in 6 is Per diem, the rest keep their original
  // category.
  const typeBucket = seq % 6
  const finalCategory: ExpenseCategory =
    bucket === 0
      ? "Meals"
      : typeBucket === 1
        ? "Mileage"
        : typeBucket === 4
          ? "Per diem"
          : category

  // Controlling fields:
  // - `approved`  → partially coded (category only). Finance still has work to do.
  // - `controlled`→ fully coded; ready for Pay.
  // - everything else → no controlling block.
  let controlling: ControllingFields | undefined
  if (status === "approved") {
    controlling = { category: finalCategory }
  } else if (status === "controlled") {
    const subcats = subcategoriesByCategory[finalCategory]
    controlling = {
      category: finalCategory,
      subcategory: subcats[Math.floor(rand() * subcats.length)],
      costCenter: costCenters[Math.floor(rand() * costCenters.length)].id,
      project: projects[Math.floor(rand() * projects.length)].id,
      vatRate: vatRates[Math.floor(rand() * vatRates.length)].id,
      description: `Coded on ${addDays(TODAY, -Math.floor(rand() * 5))}.`,
      tags: [
        controllingTags[Math.floor(rand() * controllingTags.length)].id,
      ],
    }
  }

  // Sprinkled categories: Mileage + Per diem are picked above via
  // `typeBucket` so the controlling block built from
  // `subcategoriesByCategory[finalCategory]` sees the right
  // subcategory pool.

  return {
    id: `exp-${String(seq + 1).padStart(3, "0")}`,
    provider,
    status,
    createdAt: addDays(TODAY, -daysAgo),
    amount: amountAdjusted,
    category: finalCategory,
    alerts,
    groupId: null,
    controlling,
  }
}

export const expenses: Expense[] = (() => {
  const base = buildExpenses()
  // One refunded expense — a €100 charge fully refunded by the merchant
  // before payroll ran, so the employee was never reimbursed. The parent
  // row shows the NET amount (€0) plus a blue "Refunded" status tag, and
  // expanding reveals the breakdown: the original pending charge and the
  // +€100 refund that cancelled it out.
  const refundedDate = addDays(TODAY, -7)
  const refunded: Expense = {
    id: "exp-refunded-001",
    provider: "Skyfern Airways",
    status: "refunded",
    createdAt: refundedDate,
    amount: 100,
    category: "Travel",
    alerts: [],
    groupId: null,
    children: [
      {
        id: "exp-refunded-001-original",
        provider: "Skyfern Airways",
        status: "pending",
        createdAt: refundedDate,
        amount: 100,
        category: "Travel",
        alerts: [],
        groupId: null,
        isChild: true,
      },
      {
        id: "exp-refunded-001-refund",
        provider: "Skyfern Airways",
        status: "refunded",
        createdAt: addDays(refundedDate, 2),
        amount: 100,
        category: "Travel",
        alerts: [],
        groupId: null,
        isRefund: true,
        isChild: true,
      },
    ],
  }

  // Partial refund — Roving Fork Co. had a €100 charge, €40 refunded by merchant.
  // Parent shows the net owed (€40) with "Partially refunded" tag.
  const partialRefundDate = addDays(TODAY, -5)
  const partialRefund: Expense = {
    id: "exp-partial-refund-001",
    provider: "Roving Fork Co.",
    status: "partially-refunded",
    createdAt: partialRefundDate,
    amount: 40,
    category: "Meals",
    alerts: [],
    groupId: null,
    children: [
      {
        id: "exp-partial-refund-001-original",
        provider: "Roving Fork Co.",
        status: "pending",
        createdAt: partialRefundDate,
        amount: 100,
        category: "Meals",
        alerts: [],
        groupId: null,
        isChild: true,
      },
      {
        id: "exp-partial-refund-001-refund",
        provider: "Roving Fork Co.",
        status: "partially-refunded",
        createdAt: addDays(partialRefundDate, 1),
        amount: 60,
        category: "Meals",
        alerts: [],
        groupId: null,
        isRefund: true,
        isChild: true,
      },
    ],
  }
  // Declared-split demo row — a €72.70 team dinner where 4 internal
  // colleagues and 1 external guest joined the owner. Split equally
  // across 6 people (owner + 4 internal + 1 external row). The
  // `declared-split` alert flags this row in the approver queue.
  const splitDate = addDays(TODAY, -3)
  const declaredSplitDemo: Expense = {
    id: "exp-split-001",
    provider: "Greystone Brunch House",
    status: "pending",
    createdAt: splitDate,
    amount: 72.7,
    category: "Meals",
    alerts: [],
    groupId: null,
    // Empty default state for the participants+split demo. The
    // edit form starts with: owner only, externals = 0, split
    // toggle OFF. This lets us exercise the empty-state CTA and
    // the full add-participants → enable-split flow from scratch.
    participants: [],
  }

  // Factorial-card meal demo — same Meals/participants flow as
  // `exp-split-001` but paid on a company-issued Factorial card
  // instead of out-of-pocket. Exercises the "company-paid" branch
  // of the SubmitterEditForm where:
  //   - `paymentMethod` is locked to "factorial-card" (select disabled)
  //   - `reimbursable` checkbox + `reimbursableAmount` field are hidden
  //   - the "Shared expense" toggle + split breakdown are hidden
  //   - participants picker + externals count are still visible
  // The receipt amount itself still drives any future split math
  // (the user can flip the row back to a personal payment to verify
  // the split table pulls from receipt total, not reimbursable).
  const factorialCardMealDate = addDays(TODAY, -2)
  const factorialCardMealDemo: Expense = {
    id: "exp-fc-meal-001",
    provider: "Birch & Beam Café",
    status: "pending",
    createdAt: factorialCardMealDate,
    amount: 58.4,
    category: "Meals",
    alerts: [],
    groupId: null,
    participants: [],
    paymentMethod: "factorial-card",
    reimbursable: false,
  }

  // Scenario C demo row: Alan Turing's copy of the same Greystone
  // group brunch that Hellen submitted. In Hellen's My Spending
  // table the row reads "Greystone Brunch House 2" (the trailing
  // "2" disambiguates her existing Greystone row); the detail
  // page header drops the suffix via `headerTitleOverride` so it
  // reads "Greystone Brunch House" — Alan only has one. Opening
  // this expense pushes an Alan-Turing viewer override, surfaces
  // a positive F0Alert "Hellen already submitted this as a group"
  // with an outlined "Pre-fill" action that hydrates Alan's
  // participants/externals/split from Hellen's submission for
  // `exp-fc-meal-001`.
  const greystoneAlanDate = addDays(TODAY, -2)
  const greystoneBrunchAlanDemo: Expense = {
    id: "exp-fc-meal-002",
    provider: "Greystone Brunch House 2",
    headerTitleOverride: "Greystone Brunch House",
    ownerEmployeeId: "emp-003",
    status: "draft",
    createdAt: greystoneAlanDate,
    amount: 58.4,
    category: "Meals",
    alerts: [],
    groupId: null,
    participants: [],
    paymentMethod: "personal-card",
    reimbursable: true,
  }

  // Insert near the top so it's visible without paginating.
  const all = [
    refunded,
    partialRefund,
    declaredSplitDemo,
    factorialCardMealDemo,
    greystoneBrunchAlanDemo,
    ...base,
  ]

  // Foreign-currency demo row. We tag exactly ONE pending fixture
  // (Skyfern Airways — airline charge from a US business trip) with
  // a USD→EUR conversion overlay so:
  //
  //   - The SubmitterEditForm renders an info alert below the
  //     reimbursable amount row in EDIT view, with a "Source"
  //     link pointing at the ECB daily-rate page (audit-friendly).
  //
  //   - The summary ReadView renders the Reimbursable amount row
  //     with a muted secondary line underneath
  //     ("$482.50 USD × €0.92"), surfacing the FX context to
  //     approvers without crowding the table.
  //
  // The overlay travels with the expense across every tab that
  // reads the `expenses` fixture (Submit > To-Do, Manage >
  // Pending Approval, Control, etc.) — both `useSubmitExpensesSource`
  // (which casts pending into drafts) and `useManageSource`
  // (which reads `expenses` directly) preserve the
  // `foreignCurrency` field through their spreads.
  //
  // Why `exp-013` specifically: the providers list places "Skyfern
  // Airways" at seq=12 (id padded as `exp-013`), which is naturally
  // a `pending` fixture. We force its alert list to empty so the
  // sorted `pendingPool` in useSubmitExpensesSource (sorted by fewest
  // alerts) lands it firmly inside the first-13 slice — making it a
  // `draft` in Submit > To-Do.
  //
  // Rate: 1 USD = 0.92 EUR on 14 May 2026, sourced from the
  // European Central Bank. The top-level `amount` is recomputed
  // as the EUR equivalent so existing totals stay honest; the
  // original USD figure + rate live in `foreignCurrency`.
  const targetId = "exp-013"
  const FOREIGN_ORIGINAL_USD = 482.5
  const FOREIGN_RATE = 0.92
  const FOREIGN_DATE = "2026-05-14"
  const foreignified = all.map((e) => {
    if (e.id !== targetId) return e
    return {
      ...e,
      amount:
        Math.round(FOREIGN_ORIGINAL_USD * FOREIGN_RATE * 100) / 100,
      alerts: [],
      foreignCurrency: {
        originalAmount: FOREIGN_ORIGINAL_USD,
        originalCurrency: "USD" as const,
        exchangeRate: FOREIGN_RATE,
        exchangeRateDate: FOREIGN_DATE,
        exchangeRateSource: "European Central Bank",
        // Canonical ECB daily-rate page for USD/EUR. Triggers the
        // "Source" link treatment in the edit-view info alert.
        exchangeRateSourceUrl:
          "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html",
      },
    }
  })
  return foreignified
})()

/** Counts by status — used by preset chips. Computed once at module load. */
export const expenseCountsByStatus: Record<ExpenseStatus, number> =
  expenses.reduce(
    (acc, e) => {
      acc[e.status] = (acc[e.status] ?? 0) + 1
      return acc
    },
    {
      draft: 0,
      "changes-requested": 0,
      pending: 0,
      approved: 0,
      controlled: 0,
      "in-payroll": 0,
      paid: 0,
      refunded: 0,
      "partially-refunded": 0,
    } as Record<ExpenseStatus, number>
  )

/**
 * Expense groups — used by the "Groups" sub-tab. A group bundles multiple
 * expenses into a single "report" that travels through the same status
 * pipeline (draft → pending → approved → in-payroll).
 */
export type ExpenseGroup = {
  id: string
  name: string
  status: ExpenseStatus
  /** Number of expenses in the group (the "Expenses" column). */
  expenseCount: number
  /** Total amount in EUR. */
  amount: number
  /** Subset of `amount` that's reimbursable to the employee. */
  reimbursableAmount: number
  /** Date the group/report was filed. ISO YYYY-MM-DD. */
  reportDate: string
}

// All group names are fictional — invented for prototype purposes.
const groupSeeds: Array<
  Omit<ExpenseGroup, "id" | "reportDate"> & { daysAgo: number }
> = [
  {
    name: "Sample Initiative",
    status: "in-payroll",
    expenseCount: 5,
    amount: 89.44,
    reimbursableAmount: 89.44,
    daysAgo: 415,
  },
  {
    name: "Q1 partner offsite",
    status: "in-payroll",
    expenseCount: 12,
    amount: 1840.5,
    reimbursableAmount: 1640.5,
    daysAgo: 90,
  },
  {
    name: "Northbridge client visit",
    status: "approved",
    expenseCount: 8,
    amount: 612.3,
    reimbursableAmount: 612.3,
    daysAgo: 22,
  },
  {
    name: "Helix conference travel",
    status: "approved",
    expenseCount: 14,
    amount: 2350.0,
    reimbursableAmount: 2100.0,
    daysAgo: 35,
  },
  {
    name: "March on-call meals",
    status: "pending",
    expenseCount: 6,
    amount: 142.8,
    reimbursableAmount: 142.8,
    daysAgo: 8,
  },
  {
    name: "Spring team gathering",
    status: "pending",
    expenseCount: 4,
    amount: 320.0,
    reimbursableAmount: 320.0,
    daysAgo: 4,
  },
  {
    name: "New laptop setup",
    status: "draft",
    expenseCount: 2,
    amount: 1899.99,
    reimbursableAmount: 1899.99,
    daysAgo: 1,
  },
]

export const expenseGroups: ExpenseGroup[] = groupSeeds.map((g, i) => ({
  id: `grp-${String(i + 1).padStart(3, "0")}`,
  name: g.name,
  status: g.status,
  expenseCount: g.expenseCount,
  amount: g.amount,
  reimbursableAmount: g.reimbursableAmount,
  reportDate: addDays(TODAY, -g.daysAgo),
}))

/** Counts by status for the Groups preset chips. */
export const groupCountsByStatus: Record<ExpenseStatus, number> =
  expenseGroups.reduce(
    (acc, g) => {
      acc[g.status] = (acc[g.status] ?? 0) + 1
      return acc
    },
    {
      draft: 0,
      "changes-requested": 0,
      pending: 0,
      approved: 0,
      controlled: 0,
      "in-payroll": 0,
      paid: 0,
      refunded: 0,
      "partially-refunded": 0,
    } as Record<ExpenseStatus, number>
  )
