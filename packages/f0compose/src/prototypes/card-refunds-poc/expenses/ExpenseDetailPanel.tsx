import { F0Box, F0TagStatus, F0Text } from "@factorialco/f0-react"
import { Tabs } from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import type { Expense } from "@/fixtures"

import {
  alertCopy,
  cellLabel,
  formatDate,
  formatEUR,
} from "../shared/expenseStatus"

/**
 * Expense detail side panel — mirrors the real `dev_expenses_f0_sidepanel`
 * implementation. Wide panel with tabs: Detail, Comments, Alerts, Accounting.
 * Background list remains interactive.
 */

const panelTabs = [
  { id: "detail", label: "Detail" },
  { id: "comments", label: "Comments" },
  { id: "alerts", label: "Alerts" },
  { id: "accounting", label: "Accounting" },
]

export function ExpenseDetailPanel({ expense }: { expense: Expense }) {
  const [activeTab, setActiveTab] = useState("detail")

  return (
    <F0Box display="flex" flexDirection="column" gap="none">
      {/* Header: provider + total amount */}
      <F0Box display="flex" flexDirection="column" gap="xs" padding="md">
        <F0Text content={expense.provider} variant="label" />
        <F0Text content={formatEUR(expense.amount)} variant="body" />
        <F0TagStatus
          text={cellLabel[expense.status]}
          variant={tagVariant(expense.status)}
        />
      </F0Box>

      {/* Tabs */}
      <Tabs
        secondary
        tabs={[...panelTabs]}
        activeTabId={activeTab}
        setActiveTabId={setActiveTab}
      />

      {/* Tab content */}
      <F0Box padding="md">
        {activeTab === "detail" && <DetailTab expense={expense} />}
        {activeTab === "comments" && <CommentsTab />}
        {activeTab === "alerts" && <AlertsTab expense={expense} />}
        {activeTab === "accounting" && <AccountingTab />}
      </F0Box>
    </F0Box>
  )
}

function tagVariant(status: Expense["status"]) {
  const map: Record<
    Expense["status"],
    "neutral" | "info" | "positive" | "warning" | "critical"
  > = {
    draft: "neutral",
    "changes-requested": "warning",
    pending: "warning",
    approved: "positive",
    controlled: "info",
    "in-payroll": "info",
    paid: "positive",
    refunded: "info",
    "partially-refunded": "warning",
  }
  return map[status]
}

function DetailTab({ expense }: { expense: Expense }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <DetailRow label="Amount" value={formatEUR(expense.amount)} />
      <DetailRow label="Category" value={expense.category} />
      <DetailRow label="Created on" value={formatDate(expense.createdAt)} />
      <DetailRow label="Status" value={cellLabel[expense.status]} />
      <DetailRow label="Group" value={expense.groupId ?? "Ungrouped"} />
      {/* Receipt placeholder */}
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text content="Receipt" variant="label" />
        <F0Box
          background="secondary"
          borderRadius="md"
          padding="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <F0Text content="receipt_image.jpg" variant="description" />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

function CommentsTab() {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Text
        content="No comments yet. Comments from the approval flow will appear here."
        variant="description"
      />
    </F0Box>
  )
}

function AlertsTab({ expense }: { expense: Expense }) {
  if (expense.alerts.length === 0) {
    return (
      <F0Text
        content="No alerts for this expense."
        variant="description"
      />
    )
  }
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      {expense.alerts.map((alert) => (
        <F0Box
          key={alert}
          display="flex"
          flexDirection="column"
          gap="xs"
          padding="sm"
          background={
            alertCopy[alert].level === "critical" ? "critical" : "warning"
          }
          borderRadius="md"
        >
          <F0Text content={alertCopy[alert].label} variant="body" />
        </F0Box>
      ))}
    </F0Box>
  )
}

function AccountingTab() {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Text
        content="No journal entries linked to this expense."
        variant="description"
      />
    </F0Box>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={label} variant="label" />
      <F0Text content={value} variant="body" />
    </F0Box>
  )
}
