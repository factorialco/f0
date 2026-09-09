import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { Expense } from "../mocks/expenses"
import type { Language, SpendingStrings } from "../state"

import { formatAmount, formatDate } from "./format"
import { expenseStatusVariant } from "./statusVariants"

/** Splits a shared employee's `fullName` into first / last for the person cell. */
function nameParts(fullName: string): { firstName: string; lastName: string } {
  const [firstName, ...rest] = fullName.split(" ")
  return { firstName, lastName: rest.join(" ") }
}

/**
 * Column definitions for the company-wide Expenses table, matching the
 * Spending screenshot: Owner (avatar + name), Status, Document date, Amount,
 * Category, Alerts, Group, Sync status. Headers come from `t` so the chat can
 * translate them. Empty columns (Group / Sync status) return `undefined`, which
 * OneDataCollection renders as "-".
 */
export function expensesColumns(t: SpendingStrings, language: Language) {
  return [
    {
      id: "owner",
      label: t.colOwner,
      sorting: "owner",
      render: (item: Expense) => {
        const employee = findEmployee(item.ownerId)
        const { firstName, lastName } = nameParts(employee?.fullName ?? "—")
        return {
          type: "person" as const,
          value: { firstName, lastName, src: employee?.avatarUrl },
        }
      },
    },
    {
      id: "status",
      label: t.colStatus,
      render: (item: Expense) => ({
        type: "status" as const,
        value: {
          label: t.status[item.status],
          status: expenseStatusVariant(item.status),
        },
      }),
    },
    {
      id: "documentDate",
      label: t.colDocumentDate,
      sorting: "documentDate",
      render: (item: Expense) => formatDate(item.documentDate, language),
    },
    {
      id: "amount",
      label: t.colAmount,
      sorting: "amount",
      render: (item: Expense) => formatAmount(item.amount, item.currency),
    },
    {
      id: "category",
      label: t.colCategory,
      render: (item: Expense) => t.category[item.category],
    },
    {
      id: "alerts",
      label: t.colAlerts,
      render: (item: Expense) =>
        item.alert === "duplicate"
          ? {
              type: "alertTag" as const,
              value: { level: "warning" as const, label: t.alertDuplicate },
            }
          : undefined,
    },
    {
      id: "group",
      label: t.colGroup,
      render: () => undefined,
    },
    {
      id: "syncStatus",
      label: t.colSyncStatus,
      render: () => undefined,
    },
  ]
}
