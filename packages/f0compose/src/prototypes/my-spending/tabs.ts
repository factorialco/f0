/**
 * Tab navigation for the My Spending module — mirrors the real Factorial
 * "My expenses" navigation.
 *
 * Primary tabs sit on the page header just under the title. Only "Expenses"
 * has demo content; the other two are part of the navigation scaffold.
 */
export const moduleTabs = [
  { id: "expenses", label: "Expenses" },
  { id: "purchase-requests", label: "My purchase requests" },
  { id: "cards", label: "My cards" },
] as const

/** Secondary tabs only appear under "Expenses". */
export const expensesSubTabs = [
  { id: "expenses", label: "Expenses" },
  { id: "groups", label: "Groups" },
] as const

export type ModuleTabId = (typeof moduleTabs)[number]["id"]
export type ExpensesSubTabId = (typeof expensesSubTabs)[number]["id"]
