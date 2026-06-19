import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { expensesColumns } from "./expensesColumns"
import { useExpensesSource } from "./useExpensesSource"

/**
 * "Mis gastos > Gastos" tab body — the OneDataCollection table mirrored
 * from the production screen. All chrome (search, sort, filter pickers,
 * preset chips with counts, primary CTA) is rendered by OneDataCollection
 * itself; this component just wires source ↔ columns.
 */
export function ExpensesTab() {
  const source = useExpensesSource()
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: expensesColumns } },
      ]}
    />
  )
}
