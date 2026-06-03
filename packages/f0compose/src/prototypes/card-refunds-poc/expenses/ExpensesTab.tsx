import { F0Dialog } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useSearchParams } from "react-router-dom"

import { expenses } from "@/fixtures"

import { formatEUR } from "../shared/expenseStatus"
import { ExpenseDetailPanel } from "./ExpenseDetailPanel"
import { expensesColumns } from "./expensesColumns"
import { useExpensesSource } from "./useExpensesSource"

/**
 * "My expenses > Expenses" tab body.
 *
 * Clicking a row sets `?expense=<id>` in the URL, opening a wide right-anchored
 * side panel with tabs (Detail, Comments, Alerts, Accounting) — matching the
 * real `dev_expenses_f0_sidepanel` feature flag implementation.
 */
export function ExpensesTab() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedId = searchParams.get("expense")
  const selected = selectedId
    ? expenses.find((e) => e.id === selectedId) ?? null
    : null

  const openDetail = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("expense", id)
    setSearchParams(next)
  }
  const closeDetail = () => {
    const next = new URLSearchParams(searchParams)
    next.delete("expense")
    setSearchParams(next)
  }

  const source = useExpensesSource((item) => openDetail(item.id))

  return (
    <>
      <OneDataCollection
        source={source}
        visualizations={[
          { type: "table", options: { columns: expensesColumns } },
        ]}
      />
      <F0Dialog
        isOpen={selected !== null}
        onClose={closeDetail}
        position="right"
        width="lg"
        title={selected?.provider ?? ""}
        description={
          selected ? `${formatEUR(selected.amount)} · ${selected.category}` : ""
        }
      >
        {selected && <ExpenseDetailPanel expense={selected} />}
      </F0Dialog>
    </>
  )
}
