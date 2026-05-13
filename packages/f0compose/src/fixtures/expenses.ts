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

export type ExpenseAlert =
  /** Submitted past the company's submission window. */
  | "late-submission"
  /** Receipt attached after the required timeframe. */
  | "receipt-after-timeframe"
  /** Receipt amount differs from the expense amount. */
  | "receipt-mismatch"

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

  // Controlling fields:
  // - `approved`  → partially coded (category only). Finance still has work to do.
  // - `controlled`→ fully coded; ready for Pay.
  // - everything else → no controlling block.
  let controlling: ControllingFields | undefined
  if (status === "approved") {
    controlling = { category }
  } else if (status === "controlled") {
    const subcats = subcategoriesByCategory[category]
    controlling = {
      category,
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

  return {
    id: `exp-${String(seq + 1).padStart(3, "0")}`,
    provider,
    status,
    createdAt: addDays(TODAY, -daysAgo),
    amount,
    category,
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
  // Insert near the top so it's visible without paginating.
  return [refunded, partialRefund, ...base]
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
