export type ModuleTabId = "trainings" | "requests" | "enrollments" | "enrollments-v2"

export const moduleTabs = [
  { id: "trainings" as const, label: "Trainings" },
  { id: "requests" as const, label: "Requests" },
  { id: "enrollments" as const, label: "Enrollment rules" },
  { id: "enrollments-v2" as const, label: "Enrollment rules v2" },
]

export type CoursesSubTabId = "courses" | "tags" | "survey-templates"

export const coursesSubTabs = [
  { id: "courses" as const, label: "Courses" },
  { id: "tags" as const, label: "Tags" },
  { id: "survey-templates" as const, label: "Survey templates" },
]

export type DetailTabId =
  | "overview"
  | "content"
  | "groups"
  | "participants"
  | "materials"
  | "documents"
  | "surveys"
  | "fundae"

export const detailTabs = [
  { id: "overview" as const, label: "Overview" },
  { id: "content" as const, label: "Content" },
  { id: "groups" as const, label: "Training groups" },
  { id: "participants" as const, label: "Participants" },
  { id: "materials" as const, label: "Materials" },
  { id: "documents" as const, label: "Documents" },
  { id: "surveys" as const, label: "Surveys" },
  { id: "fundae" as const, label: "FUNDAE" },
]
