import { Tabs } from "@factorialco/f0-react/dist/experimental"
import { useCallback } from "react"

import { useNavConfig } from "@/prototypes/home/hub/reference/lib/navConfig"
import { useLocation } from "@/prototypes/home/hub/reference/router"

import { useSpendingState, type Scope } from "../state"

/**
 * Spending sub-navigation. The module tabs (Expenses, Cards, Purchase invoices,
 * …) now live in the left sidebar menu, so all that remains here is the scope
 * toggle (All / My expenses) — promoted to the PRIMARY tab row. It shows only on
 * the Expenses table: Cards uses in-collection filter chips, and employees are
 * pinned to "mine". Scope is co-created state (the chat can drive it).
 */
export function SpendingTabs() {
  const { t, state, setState } = useSpendingState()
  const { config } = useNavConfig()
  const { pathname } = useLocation()
  const isEmployee = config.role === "employee"
  const onCards = pathname.startsWith("/p/spending/cards")

  // Stable setter so the Tabs' internal "active changed" effect doesn't re-fire
  // every render (returns the same state ref when unchanged → React bails out).
  const setScope = useCallback(
    (id: string) =>
      setState((prev) =>
        prev.scope === id ? prev : { ...prev, scope: id as Scope }
      ),
    [setState]
  )

  if (isEmployee || onCards) return null

  return (
    <Tabs
      secondary
      key={state.scope}
      activeTabId={state.scope}
      setActiveTabId={setScope}
      tabs={[
        { id: "all", label: t.scopeAll, onClick: () => setScope("all") },
        { id: "mine", label: t.scopeMine, onClick: () => setScope("mine") },
      ]}
    />
  )
}
