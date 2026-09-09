import type { ExpenseStatus } from "../mocks/expenses"

/** `status` cell variants accepted by OneDataCollection. */
export type CellStatus =
  | "positive"
  | "neutral"
  | "info"
  | "warning"
  | "critical"

export function expenseStatusVariant(status: ExpenseStatus): CellStatus {
  switch (status) {
    case "pending":
      return "warning"
    case "approved":
      return "info"
    case "paid":
      return "positive"
  }
}
