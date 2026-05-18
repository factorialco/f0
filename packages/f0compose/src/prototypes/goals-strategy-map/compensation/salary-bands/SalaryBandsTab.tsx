import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { salaryBandsColumns } from "./salaryBandsColumns"
import { useSalaryBandsSource } from "./useSalaryBandsSource"

export function SalaryBandsTab() {
  const source = useSalaryBandsSource()

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: salaryBandsColumns } },
      ]}
    />
  )
}
