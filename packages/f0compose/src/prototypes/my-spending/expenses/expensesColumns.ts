import type { Expense } from "@/fixtures"

import {
  alertCopy,
  cellLabel,
  formatDate,
  formatEUR,
  statusDotColor,
} from "../shared/expenseStatus"

/**
 * Columns for the My expenses table — mirrors the production screen:
 * Provider / Status / Created on / Amount / Category / Alerts / Group.
 *
 * Renders return either a plain string or a compound `{ type, value }` cell.
 * Cell value shapes confirmed in
 * `packages/react/src/ui/value-display/types/{tag,dotTag,alertTag,text}/*.tsx`.
 */
export const expensesColumns = [
  {
    id: "provider",
    label: "Provider",
    sorting: "provider",
    render: (e: Expense) => e.provider,
  },
  {
    id: "status",
    label: "Status",
    render: (e: Expense) => ({
      type: "dotTag" as const,
      value: { label: cellLabel[e.status], color: statusDotColor[e.status] },
    }),
  },
  {
    id: "createdAt",
    label: "Created on",
    sorting: "createdAt",
    render: (e: Expense) => formatDate(e.createdAt),
  },
  {
    id: "amount",
    label: "Amount",
    sorting: "amount",
    render: (e: Expense) => formatEUR(e.amount),
  },
  {
    id: "category",
    label: "Category",
    render: (e: Expense) => ({
      type: "tag" as const,
      value: { label: e.category },
    }),
  },
  {
    id: "alerts",
    label: "Alerts",
    render: (e: Expense) => {
      if (e.alerts.length === 0) return "—"
      // Show the highest-severity alert first; the rest are summarized
      // verbally (cell types render a single value — keeping it simple).
      const primary = [...e.alerts].sort((a, b) =>
        alertCopy[b].level.localeCompare(alertCopy[a].level)
      )[0]
      return {
        type: "alertTag" as const,
        value: {
          label: alertCopy[primary].label,
          level: alertCopy[primary].level,
        },
      }
    },
  },
  {
    id: "group",
    label: "Group",
    render: (e: Expense) => e.groupId ?? "—",
  },
]
