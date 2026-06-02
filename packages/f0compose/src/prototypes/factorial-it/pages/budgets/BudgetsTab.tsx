import { F0Box, F0Heading, F0Text, F0TagStatus, StandardLayout } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import { budgetsColumns } from "./budgetsColumns"
import { BUDGET_SUMMARY, formatEur } from "./budgetsData"
import { useBudgetsSource } from "./useBudgetsSource"

function Kpi({
  label,
  value,
  children,
}: {
  label: string
  value: string
  children?: React.ReactNode
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={label} variant="description" />
      <F0Heading content={value} variant="heading-large" as="h2" />
      {children}
    </F0Box>
  )
}

export function BudgetsTab() {
  const source = useBudgetsSource()
  const s = BUDGET_SUMMARY

  return (
    <StandardLayout>
      <F0Box
        display="grid"
        columns="1"
        sm={{ columns: "2" }}
        lg={{ columns: "4" }}
        gap="xl"
        paddingY="md"
      >
        <Kpi label="Total annual budget" value={formatEur(s.totalAnnual)} />

        <Kpi label="Spent year-to-date" value={formatEur(s.spentYtd)}>
          <F0Box display="flex" alignItems="center" gap="sm">
            <F0TagStatus
              variant="positive"
              text={`${s.vsPacePct}% vs pace`}
            />
            <F0Text
              content={`${s.yearElapsedPct}% of the year elapsed`}
              variant="description"
            />
          </F0Box>
        </Kpi>

        <Kpi label="Projected year-end" value={formatEur(s.projected)} />

        <Kpi label="Teams off pace" value={String(s.teamsOffPace)} />
      </F0Box>

      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: { columns: budgetsColumns },
          },
        ]}
      />
    </StandardLayout>
  )
}
