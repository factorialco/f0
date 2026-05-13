export type AiMentorTab =
  | "trainings"
  | "requests"
  | "budgets"
  | "insights"
  | "ai-mentor-settings"

export const moduleTabs = [
  { id: "trainings", label: "Trainings" },
  { id: "requests", label: "Requests" },
  { id: "budgets", label: "Budgets" },
  { id: "insights", label: "Insights" },
  { id: "ai-mentor-settings", label: "AI Mentor settings" },
] as const
