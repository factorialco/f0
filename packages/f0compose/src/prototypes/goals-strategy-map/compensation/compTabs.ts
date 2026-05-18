export type CompTabId =
  | "incentive-plans"
  | "salary-bands"
  | "compensation-reviews"
  | "equity"
  | "benefits"

export const compTabs: { id: CompTabId; label: string }[] = [
  { id: "incentive-plans", label: "Incentive Plans" },
  { id: "salary-bands", label: "Salary Bands" },
  { id: "compensation-reviews", label: "Comp Reviews" },
  { id: "equity", label: "Equity" },
  { id: "benefits", label: "Benefits" },
]

export const VALID_COMP_TABS = new Set<string>(compTabs.map((t) => t.id))
