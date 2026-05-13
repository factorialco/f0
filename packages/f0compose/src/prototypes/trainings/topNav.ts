/**
 * Top-level Trainings sub-navigation, mirroring the real Factorial
 * sidebar entries: Trainings / Requests / Budgets / Insights.
 *
 * Each entry maps to a separate prototype route so the user can move
 * between them like in production. Mount with `<Tabs />` and a per-tab
 * `onClick` that navigates.
 */
export type TrainingsTopNavId =
  | "trainings"
  | "requests"
  | "budgets"
  | "insights"

export const trainingsTopNav: {
  id: TrainingsTopNavId
  label: string
  href: string
}[] = [
  { id: "trainings", label: "Courses", href: "/p/trainings" },
  { id: "requests", label: "Requests", href: "/p/trainings-requests" },
  { id: "budgets", label: "Budgets", href: "/p/trainings-budgets" },
  { id: "insights", label: "Insights", href: "/p/trainings-insights" },
]
