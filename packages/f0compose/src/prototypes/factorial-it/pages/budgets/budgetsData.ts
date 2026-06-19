// ── Types ─────────────────────────────────────────────────────────────────────

export type BudgetPace = "over" | "watch" | "on-track"

export type TeamBudget = {
  id: string
  ownerFirstName: string
  ownerLastName: string
  team: string
  apps: number
  annualBudget: number
  spentYtd: number
}

// ── Dataset ─────────────────────────────────────────────────────────────────
// Today is 2026-06-01 — ~40% of the year elapsed.

// Ordered by pace severity (over → watch → on-track), then variance descending within each group.
export const teamBudgets: TeamBudget[] = [
  {
    id: "marketing",
    ownerFirstName: "Pablo", ownerLastName: "Núñez",
    team: "Marketing",
    apps: 4, annualBudget: 20000, spentYtd: 10500,
  },
  {
    id: "engineering",
    ownerFirstName: "Diego", ownerLastName: "Ramos",
    team: "Engineering",
    apps: 3, annualBudget: 56000, spentYtd: 25500,
  },
  {
    id: "people",
    ownerFirstName: "Javier", ownerLastName: "Moreno",
    team: "People / HR",
    apps: 3, annualBudget: 26000, spentYtd: 10800,
  },
  {
    id: "sales",
    ownerFirstName: "Lucia", ownerLastName: "Vidal",
    team: "Sales",
    apps: 3, annualBudget: 82000, spentYtd: 33000,
  },
  {
    id: "design",
    ownerFirstName: "Marta", ownerLastName: "Soto",
    team: "Design",
    apps: 3, annualBudget: 50000, spentYtd: 18500,
  },
  {
    id: "it",
    ownerFirstName: "Anna", ownerLastName: "López",
    team: "IT / Company-wide",
    apps: 5, annualBudget: 64000, spentYtd: 24000,
  },
  {
    id: "finance",
    ownerFirstName: "Carmen", ownerLastName: "Ruiz",
    team: "Finance",
    apps: 3, annualBudget: 40000, spentYtd: 14000,
  },
]

// ── Helpers ─────────────────────────────────────────────────────────────────

export function formatEur(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function consumptionPct(b: TeamBudget): number {
  return Math.round((b.spentYtd / b.annualBudget) * 100)
}

export const paceLabels: Record<BudgetPace, string> = {
  over: "Over pace",
  watch: "Watch",
  "on-track": "On track",
}

export const paceLevels: Record<BudgetPace, "critical" | "warning" | "positive"> = {
  over: "critical",
  watch: "warning",
  "on-track": "positive",
}

// ── Pace helpers ─────────────────────────────────────────────────────────────

export const YEAR_ELAPSED_PCT = 40

export function paceVariancePct(b: TeamBudget): number {
  const expected = b.annualBudget * (YEAR_ELAPSED_PCT / 100)
  return Math.round(((b.spentYtd - expected) / expected) * 1000) / 10
}

export function computePace(b: TeamBudget): BudgetPace {
  const v = paceVariancePct(b)
  if (v > 10) return "over"
  if (v >= 0) return "watch"
  return "on-track"
}

export function remainingBudget(b: TeamBudget): number {
  return b.annualBudget - b.spentYtd
}

export function projectedYearEnd(b: TeamBudget): number {
  return Math.round(b.spentYtd / (YEAR_ELAPSED_PCT / 100))
}

// ── KPI summary ───────────────────────────────────────────────────────────────

export const BUDGET_SUMMARY = (() => {
  const totalAnnual = teamBudgets.reduce((s, b) => s + b.annualBudget, 0)
  const spentYtd = teamBudgets.reduce((s, b) => s + b.spentYtd, 0)
  // Linear run-rate projection from spend-to-date over the elapsed fraction.
  const projected = Math.round(spentYtd / (YEAR_ELAPSED_PCT / 100))
  const teamsOffPace = teamBudgets.filter((b) => computePace(b) !== "on-track").length
  // How far spend is below the "on pace" point (year-elapsed % of budget).
  const onPacePoint = (totalAnnual * YEAR_ELAPSED_PCT) / 100
  const vsPacePct = Math.round(((spentYtd - onPacePoint) / onPacePoint) * 100)
  return {
    totalAnnual,
    spentYtd,
    projected,
    teamsOffPace,
    yearElapsedPct: YEAR_ELAPSED_PCT,
    vsPacePct,
  }
})()
