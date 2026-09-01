import { addDays, TODAY } from "./helpers"

/**
 * Expense fixtures for the My Spending prototype. Volumes match the screenshot
 * the prototype mirrors: 0 draft / 26 pending / 3 approved / 30 in-payroll.
 */

export type ExpenseStatus = "draft" | "pending" | "approved" | "in-payroll"

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
    out.push(
      makeExpense({
        seq: i,
        status: "pending",
        daysAgo: 1 + Math.floor(rand() * 14),
        rand,
      })
    )
  }
  // 3 approved — last 30 days
  for (let i = 0; i < 3; i++) {
    out.push(
      makeExpense({
        seq: 26 + i,
        status: "approved",
        daysAgo: 5 + Math.floor(rand() * 25),
        rand,
      })
    )
  }
  // 30 in-payroll — older, between 30 and 360 days
  for (let i = 0; i < 30; i++) {
    out.push(
      makeExpense({
        seq: 29 + i,
        status: "in-payroll",
        daysAgo: 30 + Math.floor(rand() * 330),
        rand,
      })
    )
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
  // Sprinkle alerts on a minority of expenses (~25%).
  const alerts: ExpenseAlert[] = []
  const r = rand()
  if (r < 0.08) alerts.push("receipt-mismatch")
  else if (r < 0.18) alerts.push("receipt-after-timeframe")
  else if (r < 0.25) alerts.push("late-submission")
  return {
    id: `exp-${String(seq + 1).padStart(3, "0")}`,
    provider,
    status,
    createdAt: addDays(TODAY, -daysAgo),
    amount,
    category,
    alerts,
    groupId: null,
  }
}

export const expenses: Expense[] = buildExpenses()

/** Counts by status — used by preset chips. Computed once at module load. */
export const expenseCountsByStatus: Record<ExpenseStatus, number> =
  expenses.reduce(
    (acc, e) => {
      acc[e.status] = (acc[e.status] ?? 0) + 1
      return acc
    },
    { draft: 0, pending: 0, approved: 0, "in-payroll": 0 } as Record<
      ExpenseStatus,
      number
    >
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
    { draft: 0, pending: 0, approved: 0, "in-payroll": 0 } as Record<
      ExpenseStatus,
      number
    >
  )
