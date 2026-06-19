import {
  type TeamBudget,
  computePace,
  consumptionPct,
  formatEur,
  paceLabels,
  paceLevels,
  paceVariancePct,
  projectedYearEnd,
} from "./budgetsData"

export const budgetsColumns = [
  {
    id: "team",
    label: "Team",
    sorting: "team",
    render: (item: TeamBudget) => ({
      type: "team" as const,
      value: { name: item.team },
    }),
  },
  {
    id: "pace",
    label: "Pace",
    sorting: "pace",
    render: (item: TeamBudget) => {
      const pace = computePace(item)
      const vPct = paceVariancePct(item)
      const sign = vPct >= 0 ? "+" : "−"
      const label = `${paceLabels[pace]} ${sign}${Math.abs(vPct)}%`
      return {
        type: "alertTag" as const,
        value: { level: paceLevels[pace], label },
      }
    },
  },
  {
    id: "annualBudget",
    label: "Annual budget",
    sorting: "annualBudget",
    render: (item: TeamBudget) => formatEur(item.annualBudget),
  },
  {
    id: "projected",
    label: "Projected year-end",
    sorting: "projected",
    render: (item: TeamBudget) => formatEur(projectedYearEnd(item)),
  },
  {
    id: "consumption",
    label: "Budget used",
    sorting: "consumption",
    render: (item: TeamBudget) => {
      const pct = consumptionPct(item)
      const color = pct > 80 ? "critical" : pct > 50 ? "warning" : "positive"
      return {
        type: "progressBar" as const,
        value: { value: pct, max: 100, label: `${pct}%`, color },
      }
    },
  },
  {
    id: "apps",
    label: "Applications",
    sorting: "apps",
    render: (item: TeamBudget) => `${item.apps} apps`,
  },
]
