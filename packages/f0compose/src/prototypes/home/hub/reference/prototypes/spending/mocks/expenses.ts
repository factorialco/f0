/**
 * Mock data specific to the admin Spending prototype — the company-wide
 * Expenses list (every employee's expenses, not just mine). Owners reference
 * the shared `@/mocks` employees by id; everything else (category, amount,
 * document date, status, alerts) is generated deterministically so the preset
 * count badges (Pending / Approved / Paid) always match the rows in the table.
 */

import {
  TODAY,
  addDays,
  employees,
} from "@/prototypes/home/hub/reference/mocks"

export type ExpenseStatus = "pending" | "approved" | "paid"

export type ExpenseCategory =
  | "accommodation"
  | "per_diem"
  | "meals"
  | "transport"
  | "private_transport"
  | "rail_travel"
  | "training"
  | "public_transport"
  | "subscriptions"
  | "tolls"
  | "refreshments"

/** Alert flagged on a row (e.g. a likely duplicate submission). */
export type ExpenseAlert = "duplicate"

export type Expense = {
  id: string
  /** Employee who submitted the expense (shared mock employee id). */
  ownerId: string
  status: ExpenseStatus
  /** ISO date the expense document is dated. */
  documentDate: string
  amount: number
  currency: string
  category: ExpenseCategory
  /** Optional alert badge (undefined → no alert, renders as "-"). */
  alert?: ExpenseAlert
}

const ownerIds = employees.map((e) => e.id)

/** Pool of plausible amounts (in EUR) cycled through deterministically. */
const amounts = [
  759, 74, 174.5, 257, 427, 133.25, 657, 922, 323, 348, 181, 238, 407, 650, 866,
  177, 404, 594, 88.4, 312, 49.9, 1024, 215.75, 63, 142, 519, 276.5, 95,
]

const categories: ExpenseCategory[] = [
  "accommodation",
  "per_diem",
  "meals",
  "transport",
  "private_transport",
  "rail_travel",
  "training",
  "public_transport",
  "subscriptions",
  "tolls",
  "refreshments",
]

/**
 * Builds `count` expenses for a given status. Deterministic: owner, amount,
 * category and date are all derived from the running index. A few pending rows
 * are emitted as adjacent duplicate pairs (same owner + amount + date) and
 * flagged with the `duplicate` alert, mirroring the screenshot.
 */
function build(status: ExpenseStatus, count: number, seed: number): Expense[] {
  const rows: Expense[] = []
  for (let i = 0; i < count; i++) {
    const n = seed + i
    const owner = ownerIds[n % ownerIds.length]
    const amount = amounts[n % amounts.length]
    const category = categories[n % categories.length]
    const documentDate = addDays(TODAY, 60 - n * 3)

    // For pending rows, turn every 4th + 5th entry into a duplicate pair.
    const isDuplicatePair = status === "pending" && i % 5 === 1
    if (isDuplicatePair && i > 0) {
      const prev = rows[rows.length - 1]
      rows[rows.length - 1] = { ...prev, alert: "duplicate" }
      rows.push({
        id: `${status}-${i}`,
        ownerId: prev.ownerId,
        status,
        documentDate: prev.documentDate,
        amount: prev.amount,
        currency: "EUR",
        category: prev.category,
        alert: "duplicate",
      })
      continue
    }

    rows.push({
      id: `${status}-${i}`,
      ownerId: owner,
      status,
      documentDate,
      amount,
      currency: "EUR",
      category,
    })
  }
  return rows
}

export const expenses: Expense[] = [
  ...build("pending", 30, 0),
  ...build("approved", 50, 7),
  ...build("paid", 44, 13),
]

export function findExpense(id: string): Expense | undefined {
  return expenses.find((e) => e.id === id)
}
