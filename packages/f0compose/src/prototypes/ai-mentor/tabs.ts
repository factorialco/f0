export type AiMentorTab =
  | "overview"
  | "recommendations"
  | "draft-courses"
  | "career-paths"
  | "company-context"

export const moduleTabs = [
  { id: "overview", label: "Overview" },
  { id: "recommendations", label: "Recommendations" },
  { id: "draft-courses", label: "Draft courses" },
  { id: "career-paths", label: "Career paths" },
  { id: "company-context", label: "Company context" },
] as const
