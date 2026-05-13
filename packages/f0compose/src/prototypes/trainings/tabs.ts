export type DetailTabId =
  | "overview"
  | "content"
  | "groups"
  | "participants"
  | "attachments"
  | "documents"
  | "costs"
  | "surveys"
  | "fundae"

export const detailTabs: { id: DetailTabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "content", label: "Content" },
  { id: "groups", label: "Groups" },
  { id: "participants", label: "Participants" },
  { id: "attachments", label: "Materials" },
  { id: "documents", label: "Documents" },
  { id: "costs", label: "Costs" },
  { id: "surveys", label: "Surveys" },
  { id: "fundae", label: "Fundae" },
]
