export type DetailTabId =
  | "overview"
  | "contentOverview"
  | "participants"
  | "trainingClasses"
  | "attachments"
  | "documents"
  | "surveys"
  | "fundae"

export const detailTabs: { id: DetailTabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "contentOverview", label: "Content overview" },
  { id: "participants", label: "Participants" },
  { id: "trainingClasses", label: "Classes" },
  { id: "attachments", label: "Attachments" },
  { id: "documents", label: "Documents" },
  { id: "surveys", label: "Surveys" },
  { id: "fundae", label: "Fundae" },
]
