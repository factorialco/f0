import { F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useState } from "react"

import type { PrototypeMeta } from "../types"
import { ExpensesTab } from "./expenses/ExpensesTab"
import { GroupsTab } from "./groups/GroupsTab"
import { expensesSubTabs, moduleTabs } from "./tabs"

/**
 * "My expenses" prototype — employee-facing My Spending main page.
 *
 * Layout matches the real Factorial screen:
 *   - PageHeader with the My Spending module avatar.
 *   - Primary tabs: Expenses · My purchase requests · My cards.
 *   - Secondary tabs (under Expenses): Expenses · Groups.
 *   - Body: OneDataCollection table with preset chips that include counts
 *     (Pending 26, Approved 3, Paid 30), filter row, page-based pagination,
 *     and a blue "New expense" primary CTA on the right.
 *
 * Folder layout:
 *   card-refunds-poc/
 *     CardRefundsPoc.tsx   ← this file (page shell + tab routing)
 *     tabs.ts              ← tab id/label constants
 *     shared/              ← helpers reused across tabs (status maps, formatters)
 *     expenses/            ← Expenses tab: table, columns, source hook
 *     groups/              ← Groups tab: table, columns, source hook
 */
export const meta: PrototypeMeta = {
  slug: "card-refunds-poc",
  title: "Card Refunds (POC)",
  description:
    "Employee-facing My Spending main page. Two sub-tabs (Expenses + Groups), each a OneDataCollection table with quick-filter chips that include inline counts, filters, sorting, page-based pagination, and primary/secondary actions.",
  category: "Other",
  module: "spending",
  audience: ["employee"],
  tags: ["expenses", "spending", "my-spending", "finance"],
  createdAt: "2026-05-06",
}

export default function CardRefundsPoc() {
  const [activeModuleTab, setActiveModuleTab] = useState<string>("expenses")
  const [expensesSubTab, setExpensesSubTab] = useState<string>("expenses")

  // Secondary tabs only show under "Expenses" — keeps the header chrome clean
  // when other module tabs are selected.
  const subTabsSlot =
    activeModuleTab === "expenses" ? (
      <Tabs
        secondary
        tabs={[...expensesSubTabs]}
        activeTabId={expensesSubTab}
        setActiveTabId={setExpensesSubTab}
      />
    ) : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "my_spending",
              name: "My expenses",
              href: "/my-expenses/expenses",
            }}
            actions={[]}
          />
          <Tabs
            tabs={[...moduleTabs]}
            activeTabId={activeModuleTab}
            setActiveTabId={setActiveModuleTab}
          />
          {subTabsSlot}
        </>
      }
    >
      <StandardLayout>
        {activeModuleTab === "expenses" && expensesSubTab === "expenses" && (
          <ExpensesTab />
        )}
        {activeModuleTab === "expenses" && expensesSubTab === "groups" && (
          <GroupsTab />
        )}
        {activeModuleTab !== "expenses" && (
          <F0Text
            content={`The "${
              moduleTabs.find((t) => t.id === activeModuleTab)?.label
            }" tab is part of the prototype scaffold but has no demo content yet.`}
            variant="description"
          />
        )}
      </StandardLayout>
    </Page>
  )
}
