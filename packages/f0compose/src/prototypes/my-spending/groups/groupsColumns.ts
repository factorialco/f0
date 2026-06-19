import type { ExpenseGroup } from "@/fixtures"

import {
  cellLabel,
  formatDate,
  formatEUR,
  statusDotColor,
} from "../shared/expenseStatus"

/**
 * Columns for the My expenses > Groups table:
 * Name / Status / Expenses / Amount / Reimbursable amount / Report date.
 *
 * Renders return either a plain string or `{ type, value }` cell — never JSX.
 */
export const groupsColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    render: (g: ExpenseGroup) => g.name,
  },
  {
    id: "status",
    label: "Status",
    render: (g: ExpenseGroup) => ({
      type: "dotTag" as const,
      value: { label: cellLabel[g.status], color: statusDotColor[g.status] },
    }),
  },
  {
    id: "expenseCount",
    label: "Expenses",
    sorting: "expenseCount",
    render: (g: ExpenseGroup) => String(g.expenseCount),
  },
  {
    id: "amount",
    label: "Amount",
    sorting: "amount",
    render: (g: ExpenseGroup) => formatEUR(g.amount),
  },
  {
    id: "reimbursableAmount",
    label: "Reimbursable amount",
    render: (g: ExpenseGroup) => formatEUR(g.reimbursableAmount),
  },
  {
    id: "reportDate",
    label: "Report date",
    sorting: "reportDate",
    render: (g: ExpenseGroup) => formatDate(g.reportDate),
  },
]
