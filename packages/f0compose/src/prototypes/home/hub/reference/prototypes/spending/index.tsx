import { CardsBody } from "./pages/CardsBody"
import { ExpensesBody } from "./pages/ExpensesBody"
import { SpendingLayout } from "./pages/SpendingLayout"

export const meta = {
  slug: "spending",
  title: "Spending",
  description:
    "Admin Spending → Expenses: the company-wide expenses list with module tabs, an All / My expenses toggle, Pending / Approved / Paid presets (live counts), duplicate alerts, an inline Approve row action, and a OneDataCollection table (owner, status, document date, amount, category, alerts, group, sync status). Chat surfaces duplicates and translates the screen.",
  category: "Other",
  module: "my-spending",
  audience: ["admin"],
  tags: ["spending", "expenses", "finance", "co-creation"],
  createdAt: "2026-06-24",
}

export const routes = [
  {
    element: <SpendingLayout />,
    handle: { crumb: meta.title },
    children: [
      { index: true, element: <ExpensesBody />, handle: { crumb: "Expenses" } },
      { path: "cards", element: <CardsBody />, handle: { crumb: "Cards" } },
    ],
  },
]
