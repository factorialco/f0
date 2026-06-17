/** Sub-tabs inside a review detail (Insights is the default). */
export const reviewDetailTabs = [
  { id: "insights", label: "Insights" },
  { id: "answers", label: "Answers" },
  { id: "heatmap", label: "Heatmap" },
  { id: "personal-results", label: "Personal results" },
  { id: "team-insights", label: "Team insights" },
] as const

export type ReviewDetailTabId = (typeof reviewDetailTabs)[number]["id"]
