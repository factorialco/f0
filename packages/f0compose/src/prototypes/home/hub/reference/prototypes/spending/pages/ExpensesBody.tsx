import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useMemo } from "react"

import { useNavConfig } from "@/prototypes/home/hub/reference/lib/navConfig"

import { useExpensesSource } from "../hooks/useExpensesSource"
import { expensesColumns } from "../lib/expensesColumns"
import { useSpendingState } from "../state"

/**
 * Body of the Spending → Expenses view: the full company-wide expenses table
 * (OneDataCollection) with Pending / Approved / Paid presets, search, filters,
 * sorting and live row actions (inline Approve on hover). The All / My expenses
 * scope toggle lives in the layout header (see SpendingLayout) so it sits flush
 * with the main tabs.
 */
export function ExpensesBody() {
  const { t, state, language, expenses, approveExpense, rejectExpense } =
    useSpendingState()
  const { config } = useNavConfig()

  // Employees only see their own expenses (the scope toggle is hidden for them).
  const scope = config.role === "employee" ? "mine" : state.scope

  const source = useExpensesSource(
    expenses,
    scope,
    state.onlyDuplicates,
    t,
    approveExpense,
    rejectExpense
  )
  const columns = useMemo(() => expensesColumns(t, language), [t, language])

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns } }]}
    />
  )
}
