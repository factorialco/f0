import {
  F0Alert,
  F0Box,
  F0Card,
  F0Checkbox,
  F0DataChart,
  F0BigNumber,
  F0Button,
  F0Dialog,
  F0Form,
  f0FormField,
  F0FormField,
  F0Heading,
  F0Select,
  F0Icon,
  F0TagAlert,
  F0TagRaw,
  F0TagStatus,
  F0Text,
  StandardLayout,
  SurveyFormBuilder,
  type SurveyFormBuilderElement,
  TwoColumnLayout,
  type F0Field,
} from "@factorialco/f0-react"
import {
  CardSelectableContainer,
  EntitySelect,
  F0TableOfContent,
  DetailsItemsList,
  OneDataCollection,
  Page,
  PageHeader,
  NumberInput,
  ResourceHeader,
  SectionHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  AcademicCap,
  Add,
  Archive,
  ArrowLeft,
  Bell,
  CalendarArrowRight,
  ChartLine,
  AlertCircle,
  ChevronRight,
  CheckCircle,
  Circle,
  Computer,
  Cross,
  Delete,
  Download,
  DollarBill,
  Ellipsis,
  Envelope,
  EyeInvisible,
  EyeVisible,
  ExternalLink,
  File,
  Files,
  InProgressTask,
  Link,
  LockLocked,
  Pencil,
  Settings,
  Sliders,
  Sparkles,
  Handle,
  People,
  Question,
  Upload,
  Video,
} from "@factorialco/f0-react/icons/app"
import { CheckCircleAnimated } from "@factorialco/f0-react/icons/animated"
import { z } from "zod"
import {
  type ComponentProps,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react"
import { createPortal } from "react-dom"
import { useSearchParams } from "react-router-dom"

import { type Training, trainings } from "@/fixtures"
import { applySort } from "@/lib/applySort"
import {
  COMPLETION_BASELINE,
  changedCriteria,
  type CompletionChange,
  completionDraft,
  CourseSettingsLayout,
  SettingsSectionPage,
  type SettingsSection,
} from "./course-settings/CourseSettings"

import type { PrototypeMeta } from "../types"

type F0BoxWithClassNameProps = ComponentProps<typeof F0Box> & {
  className?: string
  style?: CSSProperties
}

const F0BoxWithClassName = F0Box as ComponentType<F0BoxWithClassNameProps>

type MainTabId = "courses" | "requests" | "budgets" | "insights"
type CoursesSubTabId = "all" | "categories" | "survey-templates"
type MyCoursesTabId = "my-courses" | "catalog" | "my-requests" | "my-surveys"
type CourseDetailTabId =
  | "overview"
  | "content"
  | "training-groups"
  | "participants"
  | "materials"
  | "documents"
  | "surveys"
type GroupDetailTabId = "sessions" | "participants" | "materials" | "documents" | "costs"
type SessionSidepanelTabId = "details" | "attendance"
type ViewId =
  | "list"
  | "detail"
  | "group-detail"
  | "export"
  | "import"
  | "import-courses"
  | "new-course"
  | "discover"
  | "settings"
  | "free-course"
  | "my-course-detail"
  | "budget-detail"
  | "survey-template-detail"
  | "builder"
  | "learner-course"
  | "survey-answer"
  | "team-evals"
  | "end-of-course"
  | "completion-settings"
type ToastId = "copied" | "draft" | "export" | "template" | "settings" | "free-course" | null
type CourseActionDialogId =
  | "course-settings"
  | "revert-course"
  | "edit-content"
  | "delete-training-group"
  | "upload-course-material"
  | "embed-course-material"
  | "download-course-material"
  | "upload-course-document"
  | "download-course-document"
  | "add-course-survey"
  | null
type GroupActionDialogId =
  | "edit-group"
  | "delete-group"
  | "duplicate-session"
  | "delete-session"
  | "add-participants"
  | "delete-participant"
  | "upload-group-material"
  | "embed-group-material"
  | "upload-group-document"
  | "view-budget"
  | "calculate-salary-cost"
  | null
type ListActionDialogId =
  | "duplicate-course"
  | "toggle-catalog-course"
  | "delete-course"
  | "export-connectivity-log"
  | "bulk-archive"
  | "bulk-delete"
  | "bulk-display-catalog"
  | "bulk-hide-catalog"
  | null
type InsightActionDialogId = "date-range" | "trainings-filter" | "teams-filter" | null
type CatalogActionDialogId = "catalog-filters" | "catalog-search" | null
type PendingListAction = {
  dialog: Exclude<ListActionDialogId, null>
  courseId?: string
}
type TrainingActionDialogDetail = {
  title: string
  description: string
  primaryLabel: string
  summaryTitle: string
  summaryItems: string[]
  toast: ToastId
  position?: "center" | "right"
}
type WizardDialogSize = "training" | "group"

const WIZARD_HEIGHT = 720
const WIZARD_BODY_HEIGHT = WIZARD_HEIGHT - 64
type SortingsState = { field: string; order: "asc" | "desc" }[]
type FetchOptions = {
  filters?: Record<string, unknown>
  search?: string
  sortings?: SortingsState
  pagination?: { perPage?: number; currentPage?: number }
}
type StateSetter<T> = (value: T | ((current: T) => T)) => void

type ExactCourse = Training & {
  thumbnail?: string | null
  validityExpired: number
  requirement: "mandatory" | "not-mandatory"
  campus: boolean
  provider: string
  duration: string
  groups: string[]
  objectives: string[]
  description: string
  validity: string
  totalCost: string
  salaryCost: string
  subsidizedCost: string
  creationYear: string
}

type NewCourseValues = Record<string, unknown>
type RenderableField = Exclude<F0Field, { type: "file" }>
type CategoryRow = { id: string; name: string }
type SurveyTemplateRow = {
  id: string
  name: string
  formType: "satisfaction" | "effectiveness" | "knowledge"
  status: "draft" | "active"
  author: string
}
type RequestRow = {
  id: string
  trainingName: string
  requestDate: string
  requestedBy: string
  participants: string[]
  status: "review" | "approved" | "rejected"
}
type BudgetRow = {
  id: string
  name: string
  status: "active" | "archived"
  totalBudget: number
  availableBudget: number
  committedBudget: number
  spentBudget: number
  description?: string
  effectiveDate: string
  trainingGroups: number
  movements: BudgetMovementRow[]
}
type BudgetMovementRow = {
  id: string
  trainingId: string
  trainingName: string
  groupName: string
  groupStatus: "planned" | "finished" | "ongoing"
  startDate: string
  endDate: string
  cost: number
  provider: string
  paymentStatus: "pending" | "paid"
  participants: number
  directCost: number
  indirectCost: number
  salaryCost: number
}
type TrainingGroupRow = {
  id: string
  name: string
  startDate: string
  endDate: string
  sessions: number
  participants: string[]
  completionRate: number
}
type GroupSessionRow = {
  id: string
  name: string
  date: string
  type: "self-paced" | "scheduled"
  modality: "Virtual" | "On-site" | "Hybrid"
}
type SessionAttendanceRow = {
  id: string
  name: string
  attendance: "Attended" | "Not attended" | "Pending"
  completedHours: string
}
type GroupParticipantRow = {
  id: string
  name: string
  team: string
  jobTitle: string
}
type CourseParticipantRow = {
  id: string
  name: string
  status: "Ongoing" | "Completed"
  certificate: string
  completionDate: string
  courseValidity: string
  sessionAttendance: string
  knowledgeTestResults: "Pending" | "Passed"
  moduleProgress: string
}
type CourseResourceRow = {
  id: string
  name: string
  type: string
  updatedAt: string
}

export const meta: PrototypeMeta = {
  slug: "surveys-course",
  title: "Surveys in course content",
  description:
    "Learner Evaluations in Course content (mobile parity), survey answer flow, Team evaluations for managers, and the end-of-course redirect states (waiting/scheduled/required).",
  category: "Talent",
  module: "my-training",
  audience: ["admin"],
  tags: ["training", "quizzes", "knowledge-test", "admin"],
  createdAt: "2026-06-16",
}

// Single source of truth for this prototype's slug. Every internal link and
// data-collection id derives from it, so a copy only needs to change `meta.slug`
// and all navigation follows automatically (no per-clone find-and-replace).
const SLUG = meta.slug

const moduleInfo = {
  id: "company_trainings" as const,
  name: "Trainings",
  href: `/p/${SLUG}`,
}

const routes = {
  home: `/p/${SLUG}`,
  courses: `/p/${SLUG}`,
  budgets: `/p/${SLUG}?tab=budgets`,
  surveyTemplates: `/p/${SLUG}?sub=survey-templates`,
  myCourses: `/p/${SLUG}?view=free-course`,
  course: (courseId: string, tab: CourseDetailTabId = "overview") =>
    `/p/${SLUG}?view=detail&course=${encodeURIComponent(courseId)}&dtab=${tab}`,
  group: (courseId: string, groupName: string, tab: GroupDetailTabId = "sessions") =>
    `/p/${SLUG}?view=group-detail&course=${encodeURIComponent(courseId)}&group=${encodeURIComponent(groupName)}&gtab=${tab}`,
  budget: (budgetId: string) =>
    `/p/${SLUG}?view=budget-detail&budget=${encodeURIComponent(budgetId)}`,
}

const newCourseStepTitles = [
  "Basic information",
  "Admin information",
  "Course completion",
] as const

const basicInformationFields: F0Field[] = [
  { id: "name", type: "text", label: "Course name", placeholder: "Course name" },
  {
    id: "thumbnail",
    type: "file",
    label: "Thumbnail",
    description: "Add an image to show as the course thumbnail in the Catalog.",
    accept: ["image"],
  },
  { id: "objectives", type: "textarea", label: "Objectives", helpText: "Define this course's goals and outcomes", rows: 9 },
  { id: "description", type: "textarea", label: "Description", helpText: "Add information about the content and structure of the course", rows: 9 },
  {
    id: "competencies",
    type: "select",
    label: "Competencies",
    multiple: true,
    helpText: "Select the competencies developed within this course",
    options: [
      { value: "Gestión de cumplimiento.", label: "Gestión de cumplimiento." },
      { value: "Creatividad", label: "Creatividad" },
      { value: "Pensamiento estratégico", label: "Pensamiento estratégico" },
      { value: "Liderazgo de equipos", label: "Liderazgo de equipos" },
    ],
  },
  { id: "hours", type: "number", label: "Hours", min: 0 },
  { id: "minutes", type: "number", label: "Minutes", min: 0, max: 59, maxDecimals: 0 },
  { id: "mandatoryCourse", type: "checkbox", label: "Mandatory course", helpText: "Mark this course as mandatory to track completion and meet compliance requirements." },
  { id: "courseValidity", type: "checkbox", label: "Course validity", helpText: "This course is valid for a limited time and must be retaken afterward." },
]

const adminInformationFields: RenderableField[] = [
  { id: "year", type: "number", label: "Year", maxDecimals: 0 },
  { id: "internalCode", type: "text", label: "Internal code", helpText: "If you use an internal code in other applications or files, add it here as well" },
  {
    id: "type",
    type: "select",
    label: "Type",
    options: [
      { value: "internal", label: "Internal" },
      { value: "external", label: "External" },
    ],
  },
  { id: "externalProvider", type: "text", label: "External provider" },
  {
    id: "tags",
    type: "select",
    label: "Tags",
    multiple: true,
    helpText: "Adding tags facilitates the process of identifying and filtering course",
    options: [
      { value: "Merchandising", label: "Merchandising" },
      { value: "Creatividad", label: "Creatividad" },
      { value: "Gestión de conflictos", label: "Gestión de conflictos" },
    ],
  },
  { id: "subsidized", type: "checkbox", label: "Subsidize this course" },
  { id: "linkedWorkflow", type: "checkbox", label: "Link this course with Workflows" },
]

const courseCompletionFields: RenderableField[] = [
  { id: "completeAllLmsModules", type: "checkbox", label: "Complete all LMS modules", helpText: "Participants must complete all course modules and pass every quiz." },
  { id: "attendSessions", type: "checkbox", label: "Attend sessions" },
  { id: "minimumAttendance", type: "number", label: "Minimum attendance", min: 0, max: 100, helpText: "Set the minimum percentage of sessions in this course each participant needs to attend." },
  { id: "knowledgeTestRequired", type: "checkbox", label: "Pass the knowledge test", helpText: "Participants must pass a test that assesses their understanding of this course's content." },
]

const newTrainingGroupStepTitles = [
  "Details",
  "Sessions",
  "Participants",
  "Costs",
  "Materials",
] as const

const trainingGroupBasicFields: RenderableField[] = [
  { id: "className", type: "text", label: "Group name", placeholder: "Group name" },
  { id: "startDate", type: "date", label: "Start date" },
  { id: "endDate", type: "date", label: "End date" },
  { id: "codigoGrupo", type: "text", label: "Group code" },
  { id: "classDescription", type: "textarea", label: "Description", rows: 5 },
]

const sessionEventFields: RenderableField[] = [
  {
    id: "sessionType",
    type: "select",
    label: "Session type",
    options: [
      { value: "scheduled", label: "Scheduled" },
      { value: "self-paced", label: "Self-paced" },
    ],
  },
  { id: "sessionName", type: "text", label: "Name", placeholder: "Session name" },
  { id: "sessionDate", type: "date", label: "Date" },
  { id: "durationHours", type: "number", label: "Duration hours", min: 0, maxDecimals: 0 },
  { id: "durationMinutes", type: "number", label: "Duration minutes", min: 0, max: 59, maxDecimals: 0 },
  {
    id: "modality",
    type: "select",
    label: "Modality",
    options: [
      { value: "virtual", label: "Virtual" },
      { value: "onsite", label: "On-site" },
      { value: "hybrid", label: "Hybrid" },
    ],
  },
  { id: "sessionLink", type: "text", label: "Link", placeholder: "https://factorialhr.es" },
  { id: "calendarInvites", type: "checkbox", label: "Send calendar invites" },
  { id: "reminders", type: "checkbox", label: "Add reminders" },
]

const groupEmployeesFields: RenderableField[] = [
  {
    id: "employees",
    type: "select",
    label: "Employees",
    multiple: true,
    options: [
      { value: "p-1", label: "Scott Santos" },
      { value: "p-2", label: "Emilia Estrada" },
      { value: "p-3", label: "Samantha Suárez" },
      { value: "p-4", label: "Calvino Collins" },
      { value: "p-5", label: "Cristóbal Cárdenas" },
      { value: "p-6", label: "Clara Castillo" },
      { value: "p-7", label: "Margarita Márquez" },
      { value: "p-8", label: "Hellen Howard" },
    ],
  },
]

const groupCostsFields: RenderableField[] = [
  {
    id: "budget",
    type: "select",
    label: "Training budget",
    options: [
      { value: "9", label: "Quality & Compliance" },
      { value: "10", label: "Staff Development" },
      { value: "11", label: "Archived training budget 2025" },
    ],
  },
  { id: "directCost", type: "number", label: "Direct cost", min: 0 },
  { id: "indirectCost", type: "number", label: "Indirect cost", min: 0 },
  { id: "salaryCost", type: "number", label: "Salary cost", min: 0 },
  { id: "subsidizedCost", type: "number", label: "Subsidized cost", min: 0 },
]

const groupAttachmentsFields: RenderableField[] = [
  { id: "attachmentTitle", type: "text", label: "Attachment title" },
  { id: "notifyParticipants", type: "checkbox", label: "Notify participants" },
]

const costFields = {
  linkedBudget: {
    id: "linkedBudget",
    type: "select",
    label: "Linked budget",
    clearable: true,
    options: [
      { value: "quality-compliance", label: "Quality & Compliance" },
      { value: "none", label: "No budget linked" },
    ],
  },
  paymentStatus: {
    id: "paymentStatus",
    type: "select",
    label: "Payment status",
    options: [
      { value: "pending", label: "Pending" },
      { value: "paid", label: "Paid" },
    ],
  },
} satisfies Record<string, RenderableField>

const createSessionModalFields = {
  type: {
    id: "sessionType",
    type: "select",
    label: "Type",
    options: [
      { value: "scheduled", label: "Scheduled" },
      { value: "self-paced", label: "Self-paced" },
    ],
  },
  name: { id: "sessionName", type: "text", label: "Name" },
  date: { id: "sessionDate", type: "date", label: "Date" },
  startDate: { id: "sessionDate", type: "date", label: "Start date" },
  endDate: { id: "endDate", type: "date", label: "End date" },
  startsAt: { id: "startsAt", type: "text", label: "Starts at", placeholder: "09:00" },
  endsAt: { id: "endsAt", type: "text", label: "Ends at", placeholder: "11:00" },
  hours: { id: "durationHours", type: "number", label: "Hours", min: 0, maxDecimals: 0 },
  minutes: { id: "durationMinutes", type: "number", label: "Minutes", min: 0, max: 59, maxDecimals: 0 },
  modality: {
    id: "modality",
    type: "select",
    label: "Modality",
    options: [
      { value: "hybrid", label: "Hybrid" },
      { value: "virtual", label: "Virtual" },
      { value: "onsite", label: "On-site" },
    ],
  },
  instructors: {
    id: "instructors",
    type: "select",
    label: "Instructor(s)",
    multiple: true,
    helpText: "Select who will deliver the course.",
    options: [
      { value: "hellen", label: "Hellen Howard" },
      { value: "scott", label: "Scott Santos" },
      { value: "emilia", label: "Emilia Estrada" },
    ],
  },
  frequency: {
    id: "frequency",
    type: "select",
    label: "Frequency",
    options: [{ value: "none", label: "Does not repeat" }],
  },
  meetingLink: { id: "meetingLink", type: "text", label: "Meeting link" },
  location: { id: "location", type: "text", label: "Location" },
} satisfies Record<string, RenderableField>

const exportFields: RenderableField[] = [
  { id: "filename", type: "text", label: "Name" },
  {
    id: "exportType",
    type: "select",
    label: "Type",
    options: [
      { value: "employee", label: "Employee summary" },
      { value: "training", label: "Training summary" },
    ],
  },
  {
    id: "format",
    type: "select",
    label: "Format",
    options: [
      { value: "excel", label: "Excel" },
      { value: "csv", label: "CSV" },
    ],
  },
  {
    id: "employeeSelection",
    type: "select",
    label: "Employees",
    multiple: true,
    options: [
      { value: "hellen", label: "Hellen Howard" },
      { value: "laura", label: "Laura Martinez" },
      { value: "marc", label: "Marc Vidal" },
    ],
  },
  { id: "from", type: "date", label: "From" },
  { id: "to", type: "date", label: "To" },
]

const mainTabs = [
  { id: "courses", label: "Courses" },
  { id: "requests", label: "Requests" },
  { id: "budgets", label: "Budgets" },
  { id: "insights", label: "Insights" },
] as const

const coursesSubTabs = [
  { id: "all", label: "All courses" },
  { id: "categories", label: "Categories" },
  { id: "survey-templates", label: "Survey templates" },
] as const

const myCoursesTabs = [
  { id: "my-courses", label: "My courses" },
  { id: "catalog", label: "Catalog" },
  { id: "my-requests", label: "My requests" },
  { id: "my-surveys", label: "My surveys" },
] as const

const exactCourses: ExactCourse[] = trainings.slice(0, 3).map((training, index) => {
  const upstreamNames = [
    "Fundamentos de la gestión de calidad con ISO 9001",
    "Merchandising visual y organización de tiendas",
    "Resolución de conflictos y dinámicas de equipo",
  ]
  const upstreamCodes = ["ISO9001-2026", "40001", "60001"]
  const name = upstreamNames[index] ?? training.name
  const code = upstreamCodes[index] ?? training.code
  const validityExpired = index < 3 ? 0 : training.expiredParticipants

  return {
    ...training,
    id: index === 0 ? "7" : index === 1 ? "5" : index === 2 ? "6" : training.id,
    name,
    code,
    status: index < 8 ? "active" : training.status,
    participants: index < 3 ? (index === 0 ? 24 : 23) : training.participants,
    validityExpired,
    catalogVisible: index < 8 ? true : training.catalogVisible,
    requirement: index === 0 ? "mandatory" : "not-mandatory",
    campus: index < 8,
    provider: index < 8 ? "Factorial campus" : "Internal",
    duration: index === 0 ? "10h 0m" : index === 1 ? "6h 30m" : "4h 0m",
    groups:
      index === 0
        ? ["Edición - enero 2025", "Edición - noviembre 2025"]
        : ["Default group"],
    competencies:
      index === 0
        ? ["Gestión de cumplimiento."]
        : index === 1
          ? ["Creatividad", "Pensamiento estratégico", "Comunicación efectiva"]
          : ["Liderazgo de equipos", "Trabajo en equipo", "Comunicación efectiva"],
    categories:
      index === 0
        ? []
        : index === 1
          ? ["Merchandising", "Creatividad", "Retail"]
          : ["Gestión de conflictos", "Trabajo en equipo", "Liderazgo"],
    objectives: [
      "Understand the purpose and benefits of the course in daily operations.",
      "Recognize the key requirements and how they improve consistency.",
      "Identify simple ways to monitor and improve processes.",
      "Apply the principles in real workplace situations.",
    ],
    description:
      "This course provides a clear, practical introduction focused on concepts that any employee can understand and apply. Participants learn through short examples, activities and completion checks.",
    validity: index === 0 ? "1 year" : "No expiration",
    totalCost: index === 0 ? "40 EUR" : "0 EUR",
    salaryCost: index === 0 ? "7940.40 EUR" : "-",
    subsidizedCost: index === 0 ? "2000 EUR" : "-",
    creationYear: index === 0 ? "2026" : "2025",
  }
})

const exportFieldsWithCourses: RenderableField[] = [
  ...exportFields.slice(0, 3),
  {
    id: "ids",
    type: "select",
    label: "Training",
    multiple: true,
    options: exactCourses.slice(0, 3).map((course) => ({ value: course.id, label: course.name })),
  },
  ...exportFields.slice(3),
]

const initialCategories: CategoryRow[] = [
  { id: "cat-creatividad", name: "Creatividad" },
  { id: "cat-ux", name: "Experiencia de usuario" },
  { id: "cat-conflictos", name: "Gestión de conflictos" },
  { id: "cat-liderazgo", name: "Liderazgo" },
  { id: "cat-merchandising", name: "Merchandising" },
  { id: "cat-trabajo", name: "Trabajo en equipo" },
]

const initialSurveyTemplates: SurveyTemplateRow[] = [
  { id: "tpl-satisfaction", name: "Course satisfaction", formType: "satisfaction", status: "active", author: "Hellen Howard" },
  { id: "tpl-effectiveness", name: "Course effectiveness", formType: "effectiveness", status: "draft", author: "Hellen Howard" },
  { id: "tpl-knowledge", name: "Knowledge test", formType: "knowledge", status: "active", author: "People Ops" },
]

const initialRequests: RequestRow[] = [
  { id: "req-1", trainingName: "Fundamentos de la gestión de calidad con ISO 9001", requestDate: "May 12, 2026", requestedBy: "Laura Martinez", participants: ["Laura Martinez"], status: "review" },
  { id: "req-2", trainingName: "Effective Communication Skills", requestDate: "May 10, 2026", requestedBy: "Marc Vidal", participants: ["Marc Vidal", "Ana Ruiz", "Hellen Howard"], status: "approved" },
  { id: "req-3", trainingName: "Python for Data Analysis", requestDate: "May 8, 2026", requestedBy: "Ana Ruiz", participants: ["Ana Ruiz"], status: "rejected" },
]

const initialBudgets: BudgetRow[] = [
  {
    id: "9",
    name: "Quality & Compliance",
    status: "archived",
    totalBudget: 20000,
    availableBudget: -7980.4,
    committedBudget: 7980.4,
    spentBudget: 7980.4,
    effectiveDate: "1 Jan 2025 - 31 Dec 2025",
    trainingGroups: 2,
    movements: [
      {
        id: "movement-qc-1",
        trainingId: "7",
        trainingName: "Fundamentos de la gestión de calidad con ISO 9001",
        groupName: "Edición - noviembre 2025",
        groupStatus: "finished",
        startDate: "11/01/2025",
        endDate: "11/30/2025",
        cost: 3990.2,
        provider: "Private",
        paymentStatus: "paid",
        participants: 14,
        directCost: 40,
        indirectCost: 0,
        salaryCost: 3950.2,
      },
      {
        id: "movement-qc-2",
        trainingId: "7",
        trainingName: "Fundamentos de la gestión de calidad con ISO 9001",
        groupName: "Edición - enero 2025",
        groupStatus: "finished",
        startDate: "01/01/2025",
        endDate: "01/31/2025",
        cost: 3990.2,
        provider: "Private",
        paymentStatus: "paid",
        participants: 13,
        directCost: 40,
        indirectCost: 0,
        salaryCost: 3950.2,
      },
    ],
  },
  {
    id: "10",
    name: "Staff Development",
    status: "active",
    totalBudget: 20000,
    availableBudget: 13100,
    committedBudget: 6900,
    spentBudget: 4600,
    description: "Budget for retail staff development training groups.",
    effectiveDate: "1 Jan 2026",
    trainingGroups: 3,
    movements: [
      {
        id: "movement-staff-1",
        trainingId: "5",
        trainingName: "Merchandising visual y organización de tiendas",
        groupName: "Edición - diciembre 2026",
        groupStatus: "planned",
        startDate: "12/01/2026",
        endDate: "12/31/2026",
        cost: 2300,
        provider: "Retail Design Pro",
        paymentStatus: "pending",
        participants: 5,
        directCost: 600,
        indirectCost: 250,
        salaryCost: 1450,
      },
      {
        id: "movement-staff-2",
        trainingId: "5",
        trainingName: "Merchandising visual y organización de tiendas",
        groupName: "Edición - febrero 2026",
        groupStatus: "finished",
        startDate: "02/01/2026",
        endDate: "02/28/2026",
        cost: 2300,
        provider: "Retail Design Pro",
        paymentStatus: "paid",
        participants: 10,
        directCost: 700,
        indirectCost: 250,
        salaryCost: 1350,
      },
      {
        id: "movement-staff-3",
        trainingId: "5",
        trainingName: "Merchandising visual y organización de tiendas",
        groupName: "Edición - enero 2026",
        groupStatus: "finished",
        startDate: "01/01/2026",
        endDate: "01/31/2026",
        cost: 2300,
        provider: "Retail Design Pro",
        paymentStatus: "paid",
        participants: 15,
        directCost: 700,
        indirectCost: 250,
        salaryCost: 1350,
      },
    ],
  },
  {
    id: "11",
    name: "Archived training budget 2025",
    status: "archived",
    totalBudget: 12000,
    availableBudget: 0,
    committedBudget: 12000,
    spentBudget: 12000,
    effectiveDate: "1 Jan 2025",
    trainingGroups: 0,
    movements: [],
  },
]

const groupSessions: GroupSessionRow[] = [
  { id: "session-1", name: "Noviembre - Diciembre", date: "2 Jan - 31 Jan, 20h 0m", type: "self-paced", modality: "Virtual" },
]

const sessionAttendance: SessionAttendanceRow[] = [
  { id: "att-1", name: "Calvino Collins", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-2", name: "Clara Castillo", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-3", name: "Cristóbal Cárdenas", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-4", name: "Emilia Estrada", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-5", name: "Hellen Howard", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-6", name: "Margarita Márquez", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-7", name: "Natalia Navarro", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-8", name: "Nicolás Núñez", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-9", name: "Noé Navarro", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-10", name: "Nora Nieto", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-11", name: "Scott Santos", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-12", name: "Samantha Suárez", attendance: "Attended", completedHours: "20h/20h" },
  { id: "att-13", name: "Susana Stanley", attendance: "Attended", completedHours: "20h/20h" },
]

const groupParticipants: GroupParticipantRow[] = [
  { id: "p-1", name: "Scott Santos", team: "Managers", jobTitle: "Manager de ventas, I" },
  { id: "p-2", name: "Emilia Estrada", team: "Managers", jobTitle: "Gerente de tienda digital, I" },
  { id: "p-3", name: "Samantha Suárez", team: "Managers", jobTitle: "Manager de ventas, I" },
  { id: "p-4", name: "Calvino Collins", team: "Managers", jobTitle: "CMO, I" },
  { id: "p-5", name: "Cristóbal Cárdenas", team: "Finanzas", jobTitle: "CFO, I" },
  { id: "p-6", name: "Clara Castillo", team: "Desarrollo", jobTitle: "CTO, I" },
  { id: "p-7", name: "Margarita Márquez", team: "Diseño", jobTitle: "Director de diseño, I" },
  { id: "p-8", name: "Hellen Howard", team: "Managers", jobTitle: "Director de personas, I" },
  { id: "p-9", name: "Susana Stanley", team: "Managers", jobTitle: "Gerente de tienda, I" },
  { id: "p-10", name: "Noé Navarro", team: "Ventas Barcelona", jobTitle: "Asistente de tienda, Junior" },
  { id: "p-11", name: "Laura Martinez", team: "Ventas Barcelona", jobTitle: "Store specialist, I" },
  { id: "p-12", name: "Marc Vidal", team: "Managers", jobTitle: "Retail lead, I" },
  { id: "p-13", name: "Ana Ruiz", team: "Diseño", jobTitle: "Product designer, I" },
]

const courseParticipants: CourseParticipantRow[] = [
  "Alicia Anderson",
  "Amelia Álvarez",
  "Bernarda Barrios",
  "Calvino Collins",
  "Clara Castillo",
  "Cristóbal Cárdenas",
  "Diana Díaz",
  "Emilia Estrada",
  "Esteban Scott",
  "Felicidad Fernández",
  "Hellen Howard",
  "Jaime Juárez",
  "Margarita Márquez",
  "Mateo Santos",
  "Megan Moreno",
  "Natalia Navarro",
  "Nicolás Núñez",
  "Noé Navarro",
  "Nora Nieto",
  "Pedro Precio",
  "Samantha Suárez",
  "Sara Sánchez",
  "Scott Santos",
  "Susana Stanley",
].map((name, index) => ({
  id: `course-participant-${index + 1}`,
  name,
  status: "Ongoing",
  certificate: "-",
  completionDate: "Not set",
  courseValidity: "No date",
  sessionAttendance: "1/1",
  knowledgeTestResults: index % 3 === 0 ? "Pending" : "Passed",
  moduleProgress: "0/3",
}))

const insightTeamCategories = ["Retail", "People", "Operations", "Finance"]
const insightTeamSeries = [{ name: "Headcount", data: [24, 14, 12, 7] }]
const insightGenderSeries = {
  name: "Employees",
  data: [
    { value: 32, name: "Women", color: "barbie" },
    { value: 25, name: "Men", color: "malibu" },
  ],
}
const insightAttendanceSeries = {
  name: "Attendance",
  data: [
    { value: 86, name: "Attended", color: "viridian" },
    { value: 14, name: "Missed", color: "yellow" },
  ],
}

const VALID_TABS = new Set<string>(mainTabs.map((tab) => tab.id))
const VALID_SUB_TABS = new Set<string>(coursesSubTabs.map((tab) => tab.id))
const VALID_DETAIL_TABS = new Set<string>([
  "overview",
  "content",
  "training-groups",
  "participants",
  "materials",
  "documents",
  "surveys",
])
const VALID_GROUP_TABS = new Set<string>(["sessions", "participants", "materials", "documents", "costs"])
const VALID_VIEWS = new Set<string>([
  "detail",
  "group-detail",
  "export",
  "import",
  "import-courses",
  "new-course",
  "discover",
  "settings",
  "free-course",
  "my-course-detail",
  "budget-detail",
  "survey-template-detail",
  "builder",
  "learner-course",
  "survey-answer",
  "team-evals",
  "end-of-course",
  "completion-settings",
])

const columns = [
  {
    id: "course",
    label: "Course",
    sorting: "course",
    width: 360,
    render: (item: ExactCourse) => ({ type: "text" as const, value: item.name }),
  },
  {
    id: "internalCode",
    label: "Internal code",
    width: 120,
    render: (item: ExactCourse) => ({ type: "text" as const, value: item.code }),
  },
  {
    id: "participants",
    label: "Participants",
    sorting: "participants",
    width: 112,
    render: (item: ExactCourse) => ({ type: "number" as const, value: item.participants }),
  },
  {
    id: "validityExpired",
    label: "Validity expired",
    width: 140,
    render: (item: ExactCourse) => ({
      type: "status" as const,
      value: {
        status: item.validityExpired > 0 ? "warning" as const : "positive" as const,
        label: `${item.validityExpired} people`,
      },
    }),
  },
  {
    id: "catalog",
    label: "Catalog",
    width: 120,
    render: (item: ExactCourse) =>
      item.catalogVisible
        ? {
            type: "icon" as const,
            value: { icon: EyeVisible, label: "On catalog" },
          }
        : { type: "text" as const, value: "-" },
  },
  {
    id: "status",
    label: "Status",
    width: 120,
    render: (item: ExactCourse) => ({
      type: "status" as const,
      value: {
        label: item.status === "active" ? "Published" : "Draft",
        status: item.status === "active" ? "positive" : "neutral",
      },
    }),
  },
  {
    id: "requirement",
    label: "Requirement",
    width: 140,
    render: (item: ExactCourse) => ({
      type: "tag" as const,
      value: {
        label: item.requirement === "mandatory" ? "Mandatory" : "Not mandatory",
        customColor: "#fff",
      },
    }),
  },
  {
    id: "categories",
    label: "Categories",
    width: 360,
    render: (item: ExactCourse) =>
      item.categories.length > 0
        ? {
            type: "tagList" as const,
            value: {
              type: "raw" as const,
              tags: item.categories.map((category) => ({
                text: category,
              })),
              max: 3,
            },
          }
        : { type: "text" as const, value: "-" },
  },
  {
    id: "competencies",
    label: "Competencies",
    width: 360,
    render: (item: ExactCourse) =>
      item.competencies.length > 0
        ? {
            type: "tagList" as const,
            value: {
              type: "raw" as const,
              tags: item.competencies.map((competency) => ({
                text: competency,
                customColor: "#fff",
              })),
              max: 3,
            },
          }
        : { type: "text" as const, value: "-" },
  },
]

export default function SurveysCourse() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [toast, setToast] = useState<ToastId>(null)
  const [courses, setCourses] = useState<ExactCourse[]>(exactCourses)
  const [categories, setCategories] = useState<CategoryRow[]>(initialCategories)
  const [surveyTemplates, setSurveyTemplates] = useState<SurveyTemplateRow[]>(initialSurveyTemplates)
  const [requests, setRequests] = useState<RequestRow[]>(initialRequests)
  const [budgets, setBudgets] = useState<BudgetRow[]>(initialBudgets)
  const [pendingListAction, setPendingListAction] = useState<PendingListAction | null>(null)

  const activeTab = getValidParam(searchParams.get("tab"), VALID_TABS, "courses") as MainTabId
  const activeSubTab = getValidParam(
    searchParams.get("sub"),
    VALID_SUB_TABS,
    "all"
  ) as CoursesSubTabId
  const view = getView(searchParams.get("view"))
  const selectedCourse = courses.find((course) => course.id === searchParams.get("course"))
  const isNewCourseWizardOpen = view === "new-course"

  const setTab = (tab: string) => {
    setToast(null)
    if (tab === "courses") setSearchParams({})
    else setSearchParams({ tab })
  }

  const setSubTab = (sub: string) => {
    setToast(null)
    if (sub === "all") setSearchParams({})
    else setSearchParams({ sub })
  }

  const goToList = () => {
    setToast(null)
    setSearchParams({})
  }

  const goToView = (nextView: ViewId, nextToast?: ToastId) => {
    setToast(nextToast ?? null)
    setSearchParams(nextView === "list" ? {} : { view: nextView })
  }

  const goToDetail = (courseId: string) => {
    setToast(null)
    setSearchParams({ view: "detail", course: courseId })
  }

  const handleCreateCourse = (values: NewCourseValues) => {
    const name = typeof values.name === "string" && values.name.trim() ? values.name.trim() : "Untitled course"
    const newCourse: ExactCourse = {
      ...courses[0],
      id: `created-${Date.now()}`,
      name,
      code: typeof values.internalCode === "string" && values.internalCode.trim() ? values.internalCode.trim() : "DRAFT",
      status: "draft",
      participants: 0,
      validityExpired: 0,
      catalogVisible: false,
      requirement: values.mandatoryCourse === true ? "mandatory" : "not-mandatory",
      competencies: Array.isArray(values.competencies) ? values.competencies.filter((item): item is string => typeof item === "string") : [],
      categories: Array.isArray(values.tags) ? values.tags.filter((item): item is string => typeof item === "string") : [],
      creationYear: String(values.year ?? "2026"),
    }
    setCourses((currentCourses) => [newCourse, ...currentCourses])
    setToast("draft")
    setSearchParams({ view: "detail", course: newCourse.id })
  }

  const duplicateCourse = (courseId: string) => {
    const course = courses.find((item) => item.id === courseId)
    if (!course) return
    const duplicated = { ...course, id: `copy-${Date.now()}`, name: `${course.name} (copy)`, status: "draft" as const }
    setCourses((currentCourses) => [duplicated, ...currentCourses])
    setToast("draft")
  }

  const toggleCatalog = (courseId: string) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === courseId ? { ...course, catalogVisible: !course.catalogVisible } : course
      )
    )
    setToast("settings")
  }

  const deleteCourse = (courseId: string) => {
    setCourses((currentCourses) => currentCourses.filter((course) => course.id !== courseId))
    setToast("settings")
  }

  const revertCourseToDraft = (courseId: string) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === courseId ? { ...course, status: "draft" } : course
      )
    )
    setToast("draft")
  }

  const mainTabsWithNav = mainTabs.map((tab) => ({
    ...tab,
    onClick: () => setTab(tab.id),
  }))

  const subTabsWithNav = coursesSubTabs.map((tab) => ({
    ...tab,
    onClick: () => setSubTab(tab.id),
  }))

  if (view === "builder" && selectedCourse) {
    return (
      <CourseContentBuilder
        course={selectedCourse}
        initialItemId={searchParams.get("item") ?? undefined}
        onBack={() => setSearchParams({ view: "detail", course: selectedCourse.id, dtab: "content" })}
      />
    )
  }

  if (view === "detail" && selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        toast={toast}
        onToast={setToast}
        onRevertToDraft={() => revertCourseToDraft(selectedCourse.id)}
      />
    )
  }

  if (view === "group-detail" && selectedCourse) {
    const groupName = searchParams.get("group") ?? selectedCourse.groups[0] ?? "Training group"
    return <TrainingGroupDetail course={selectedCourse} groupName={groupName} onBack={() => setSearchParams({ view: "detail", course: selectedCourse.id, dtab: "training-groups" })} onToast={setToast} />
  }

  if (view === "export") {
    return <ExportScreen toast={toast} onBack={goToList} onToast={setToast} />
  }

  if (view === "import" || view === "import-courses") {
    return (
      <ImportScreen
        mode={view}
        toast={toast}
        onBack={goToList}
        onToast={setToast}
      />
    )
  }

  if (view === "discover") {
    return (
      <DiscoverTrainingScreen onBack={goToList} />
    )
  }

  if (view === "settings") {
    return (
      <TrainingSettingsScreen onBack={goToList} />
    )
  }

  if (view === "learner-course") {
    return <LearnerCourseScreen />
  }

  if (view === "survey-answer") {
    return (
      <SurveyAnswerScreen
        surveyId={searchParams.get("survey") ?? "kt-1"}
        onBack={(target) => setSearchParams({ view: target })}
      />
    )
  }

  if (view === "completion-settings") {
    return <CompletionSettingsScreen />
  }

  if (view === "end-of-course") {
    return <EndOfCourseScreen />
  }

  if (view === "team-evals") {
    return <TeamEvaluationsScreen />
  }

  if (view === "free-course") {
    return <MyCoursesScreen onBack={goToList} />
  }

  if (view === "my-course-detail") {
    return <MyCourseDetailScreen onBack={() => setSearchParams({ view: "free-course" })} />
  }

  if (view === "budget-detail") {
    const budget = budgets.find((item) => item.id === searchParams.get("budget")) ?? budgets[0]
    return <BudgetDetailScreen budget={budget} onUpdateBudgets={setBudgets} />
  }

  if (view === "survey-template-detail") {
    const template = surveyTemplates.find((item) => item.id === searchParams.get("template")) ?? surveyTemplates[0]
    return <SurveyTemplateDetailScreen template={template} onBack={() => setSearchParams({ sub: "survey-templates" })} />
  }

  const subTabsSlot =
    activeTab === "courses" ? (
      <Tabs
        key={activeSubTab}
        secondary
        tabs={subTabsWithNav}
        activeTabId={activeSubTab}
      />
    ) : null

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            actions={[
              {
                label: "Discover Training",
                icon: Sparkles,
                onClick: () => goToView("discover"),
              },
              {
                label: "Settings",
                icon: Settings,
                onClick: () => goToView("settings"),
              },
              {
                label: "Open dashboard",
                icon: Sliders,
                onClick: () => setTab("insights"),
              },
            ]}
          />
          <Tabs key={activeTab} tabs={mainTabsWithNav} activeTabId={activeTab} />
          {subTabsSlot}
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          {toast && <FeedbackBanner toast={toast} />}
          {activeTab === "courses" && activeSubTab === "all" && (
            <CoursesList
              courses={courses}
              onOpenOne={() => goToView("new-course")}
              onExport={() => goToView("export", "export")}
              onImport={() => goToView("import")}
              onImportCourses={() => goToView("import-courses")}
              onOpenFreeCourse={() => goToView("free-course")}
              onCourseClick={goToDetail}
              onOpenAction={(dialog, courseId) => setPendingListAction({ dialog, courseId })}
            />
          )}
          {activeTab === "courses" && activeSubTab === "categories" && (
            <CategoriesTab
              categories={categories}
              onAddCategory={(name) => setCategories((current) => [{ id: `cat-${Date.now()}`, name }, ...current])}
              onDeleteCategory={(categoryId) => setCategories((current) => current.filter((category) => category.id !== categoryId))}
              onSettings={() => goToView("settings")}
            />
          )}
          {activeTab === "courses" && activeSubTab === "survey-templates" && (
            <SurveyTemplatesTab
              templates={surveyTemplates}
              onOpenTemplate={(templateId) => setSearchParams({ view: "survey-template-detail", template: templateId })}
              onCreateTemplate={() => setSurveyTemplates((current) => [{ id: `tpl-${Date.now()}`, name: "Untitled survey template", formType: "satisfaction", status: "draft", author: "Hellen Howard" }, ...current])}
              onToggleTemplate={(templateId) =>
                setSurveyTemplates((current) =>
                  current.map((template) =>
                    template.id === templateId
                      ? { ...template, status: template.status === "active" ? "draft" : "active" }
                      : template
                  )
                )
              }
              onDuplicateTemplate={(templateId) =>
                setSurveyTemplates((current) => {
                  const template = current.find((item) => item.id === templateId)
                  return template
                    ? [{ ...template, id: `tpl-copy-${Date.now()}`, name: `${template.name} (copy)`, status: "draft" }, ...current]
                    : current
                })
              }
              onDeleteTemplate={(templateId) => setSurveyTemplates((current) => current.filter((template) => template.id !== templateId))}
            />
          )}
          {activeTab === "requests" && <RequestsTab requests={requests} onUpdateRequests={setRequests} />}
          {activeTab === "budgets" && <BudgetsTab budgets={budgets} onUpdateBudgets={setBudgets} onOpenBudget={(budgetId) => setSearchParams({ view: "budget-detail", budget: budgetId })} />}
          {activeTab === "insights" && <InsightsTab courses={courses} />}
        </F0Box>
        <TrainingActionDialog
          detail={pendingListAction ? getListActionDetail(pendingListAction, courses) : null}
          onClose={() => setPendingListAction(null)}
          onConfirm={() => {
            if (!pendingListAction) return
            if (pendingListAction.dialog === "duplicate-course" && pendingListAction.courseId) duplicateCourse(pendingListAction.courseId)
            if (pendingListAction.dialog === "toggle-catalog-course" && pendingListAction.courseId) toggleCatalog(pendingListAction.courseId)
            if (pendingListAction.dialog === "delete-course" && pendingListAction.courseId) deleteCourse(pendingListAction.courseId)
            if (pendingListAction.dialog === "bulk-archive") setCourses((currentCourses) => currentCourses.map((course) => ({ ...course, status: "draft" })))
            if (pendingListAction.dialog === "bulk-display-catalog") setCourses((currentCourses) => currentCourses.map((course) => ({ ...course, catalogVisible: true })))
            if (pendingListAction.dialog === "bulk-hide-catalog") setCourses((currentCourses) => currentCourses.map((course) => ({ ...course, catalogVisible: false })))
            if (pendingListAction.dialog === "bulk-delete") setToast("settings")
            if (pendingListAction.dialog === "export-connectivity-log") setToast("export")
            setPendingListAction(null)
          }}
        />
        <NewCourseWizardDialog
          isOpen={isNewCourseWizardOpen}
          onClose={goToList}
          onToast={setToast}
          onCreateCourse={handleCreateCourse}
        />
      </StandardLayout>
    </Page>
  )
}

function NewCourseWizardDialog({
  isOpen,
  onClose,
  onToast,
  onCreateCourse,
}: {
  isOpen: boolean
  onClose: () => void
  onToast: (toast: ToastId) => void
  onCreateCourse: (values: NewCourseValues) => void
}) {
  const [stepIndex, setStepIndex] = useState(0)
  const [values, setValues] = useState<Record<string, unknown>>({
    year: 2026,
    type: "internal",
    competencies: [],
    tags: [],
    mandatoryCourse: false,
    courseValidity: false,
    subsidized: false,
    linkedWorkflow: false,
    completeAllLmsModules: false,
    attendSessions: true,
    minimumAttendance: 100,
    knowledgeTestRequired: false,
  })

  const isLastStep = stepIndex === newCourseStepTitles.length - 1
  const canContinue = stepIndex > 0 || (typeof values.name === "string" && values.name.trim().length > 0)
  const stepFields: F0Field[] = stepIndex === 0 ? basicInformationFields : stepIndex === 1 ? adminInformationFields : courseCompletionFields

  const updateValue = (fieldId: string, value: unknown) => {
    setValues((currentValues) => ({ ...currentValues, [fieldId]: value }))
  }

  const handlePrimaryAction = () => {
    if (!isLastStep) {
      setStepIndex((currentStepIndex) => currentStepIndex + 1)
      return
    }

    onToast("draft")
    onCreateCourse(values)
  }

  const handleClose = () => {
    setStepIndex(0)
    onClose()
  }

  if (!isOpen) return null

  return (
    <F0BoxWithClassName
      position="fixed"
      className="fixed inset-0 z-50 flex items-center justify-center bg-f1-background-overlay"
    >
      <WizardModalFrame>
        <F0Box display="flex" flexDirection="column" height="full">
          <F0BoxWithClassName display="flex" style={{ height: WIZARD_BODY_HEIGHT }}>
            <F0BoxWithClassName
              display="flex"
              flexDirection="column"
              gap="2xl"
              padding="4xl"
              paddingRight="none"
              style={{ width: 320, paddingTop: 60 }}
            >
              <F0Box display="flex" flexDirection="column" gap="md">
                <F0Icon icon={Sliders} size="md" color="critical" />
                <F0Heading content="New course" variant="heading-large" as="h2" />
              </F0Box>
              <F0Box display="flex" flexDirection="column" gap="sm" marginTop="xs">
                {newCourseStepTitles.map((title, index) => (
                  <WizardStepButton
                    key={title}
                    index={index}
                    title={title}
                    active={index === stepIndex}
                    disabled={index > stepIndex}
                    onClick={() => setStepIndex(index)}
                  />
                ))}
              </F0Box>
            </F0BoxWithClassName>
            <F0Box
              display="flex"
              flexDirection="column"
              gap="2xl"
              overflowY="auto"
              paddingTop="4xl"
              paddingLeft="4xl"
              paddingRight="4xl"
              paddingBottom="2xl"
              grow
            >
              <F0BoxWithClassName display="flex" flexDirection="column" gap="sm" style={{ width: 560 }}>
                <F0Heading content={newCourseStepTitles[stepIndex]} variant="heading" as="h2" />
                <F0Text content={getNewCourseStepDescription(stepIndex)} variant="description" />
              </F0BoxWithClassName>
              <F0BoxWithClassName display="flex" flexDirection="column" gap="xl" style={{ width: 560 }}>
                {stepFields.map((field) => (
                  <F0Box key={field.id}>
                    {field.type === "file" ? (
                      <F0FormField field={field} value={values[field.id]} onChange={(value) => updateValue(field.id, value)} initialFiles={[]} />
                    ) : (
                      <F0FormField field={field} value={values[field.id]} onChange={(value) => updateValue(field.id, value)} />
                    )}
                  </F0Box>
                ))}
              </F0BoxWithClassName>
            </F0Box>
          </F0BoxWithClassName>
          <F0BoxWithClassName
            borderTop="default"
            borderColor="secondary"
            display="flex"
            justifyContent="end"
            alignItems="center"
            gap="md"
            paddingRight="3xl"
            style={{ height: 64 }}
          >
            <F0Button
              label={stepIndex === 0 ? "Cancel" : "Previous"}
              hideLabel={stepIndex === 0}
              icon={stepIndex === 0 ? Cross : undefined}
              variant="outline"
              onClick={stepIndex === 0 ? handleClose : () => setStepIndex((currentStepIndex) => currentStepIndex - 1)}
            />
            <F0Button
              label={isLastStep ? "Create" : "Next"}
              onClick={handlePrimaryAction}
              disabled={!canContinue}
            />
          </F0BoxWithClassName>
        </F0Box>
      </WizardModalFrame>
    </F0BoxWithClassName>
  )
}

function WizardModalFrame({ children, size = "training" }: { children: ReactNode; size?: WizardDialogSize }) {
  return (
    <F0BoxWithClassName
      background="primary"
      borderRadius="lg"
      overflow="hidden"
      className="relative overflow-hidden rounded-lg bg-f1-background shadow-2xl"
      style={{ width: size === "training" ? 960 : 920, height: WIZARD_HEIGHT, backgroundColor: "var(--f1-background, #fff)" }}
    >
      {children}
    </F0BoxWithClassName>
  )
}

function NewTrainingGroupWizardDialog({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean
  onClose: () => void
  onCreate: () => void
}) {
  const [stepIndex, setStepIndex] = useState(0)
  const [values, setValues] = useState<Record<string, unknown>>({
    className: "Edición - febrero 2026",
    sessionType: "self-paced",
    sessionName: "Noviembre - Diciembre",
    modality: "virtual",
    employees: [],
    budget: "budget-2",
    calendarInvites: false,
    reminders: false,
    notifyParticipants: false,
  })

  if (!isOpen) return null

  const isLastStep = stepIndex === newTrainingGroupStepTitles.length - 1
  const stepFields = getNewTrainingGroupStepFields(stepIndex)

  const updateValue = (fieldId: string, value: unknown) => {
    setValues((currentValues) => ({ ...currentValues, [fieldId]: value }))
  }

  return (
    <F0BoxWithClassName
      position="fixed"
      className="fixed inset-0 z-50 flex items-center justify-center bg-f1-background-overlay"
    >
      <WizardModalFrame size="group">
        <F0Box display="flex" flexDirection="column" height="full">
          <F0BoxWithClassName display="flex" style={{ height: WIZARD_BODY_HEIGHT }}>
            <F0BoxWithClassName
              display="flex"
              flexDirection="column"
              gap="2xl"
              padding="4xl"
              paddingRight="none"
              style={{ width: 320, paddingTop: 60 }}
            >
              <F0Box display="flex" flexDirection="column" gap="md">
                <F0Icon icon={People} size="md" color="critical" />
                <F0Heading content="Create new group" variant="heading-large" as="h2" />
              </F0Box>
              <F0Box display="flex" flexDirection="column" gap="sm" marginTop="xs">
                {newTrainingGroupStepTitles.map((title, index) => (
                  <WizardStepButton
                    key={title}
                    index={index}
                    title={title}
                    active={index === stepIndex}
                    disabled={index > stepIndex}
                    onClick={() => setStepIndex(index)}
                  />
                ))}
              </F0Box>
            </F0BoxWithClassName>
            <F0Box
              display="flex"
              flexDirection="column"
              gap="2xl"
              overflowY="auto"
              paddingTop="4xl"
              paddingLeft="4xl"
              paddingRight="4xl"
              paddingBottom="2xl"
              grow
            >
              <F0BoxWithClassName display="flex" flexDirection="column" gap="sm" style={{ width: 520 }}>
                <F0Heading content={newTrainingGroupStepTitles[stepIndex]} variant="heading" as="h2" />
                <F0Text content={getNewTrainingGroupStepDescription(stepIndex)} variant="description" />
              </F0BoxWithClassName>
              <F0BoxWithClassName display="flex" flexDirection="column" gap="xl" style={{ width: 520 }}>
                {stepIndex === 4 ? (
                  <F0Alert variant="info" title="Attachments are optional" description="Production opens a file modal from this step. This clone keeps the attachment details in the wizard so the flow stays navigable." />
                ) : null}
                {stepFields.map((field) => (
                  <F0Box key={field.id}>
                    <F0FormField field={field} value={values[field.id]} onChange={(value) => updateValue(field.id, value)} />
                  </F0Box>
                ))}
              </F0BoxWithClassName>
            </F0Box>
          </F0BoxWithClassName>
          <F0BoxWithClassName
            borderTop="default"
            borderColor="secondary"
            display="flex"
            justifyContent="end"
            alignItems="center"
            gap="md"
            paddingRight="3xl"
            style={{ height: 64 }}
          >
            <F0Button
              label={stepIndex === 0 ? "Cancel" : "Previous"}
              hideLabel={stepIndex === 0}
              icon={stepIndex === 0 ? Cross : undefined}
              variant="outline"
              onClick={stepIndex === 0 ? onClose : () => setStepIndex((currentStepIndex) => currentStepIndex - 1)}
            />
            <F0Button
              label={isLastStep ? "Save" : "Next"}
              onClick={isLastStep ? onCreate : () => setStepIndex((currentStepIndex) => currentStepIndex + 1)}
            />
          </F0BoxWithClassName>
        </F0Box>
      </WizardModalFrame>
    </F0BoxWithClassName>
  )
}

function getNewTrainingGroupStepFields(stepIndex: number) {
  if (stepIndex === 0) return trainingGroupBasicFields
  if (stepIndex === 1) return sessionEventFields
  if (stepIndex === 2) return groupEmployeesFields
  if (stepIndex === 3) return groupCostsFields
  return groupAttachmentsFields
}

function getNewTrainingGroupStepDescription(stepIndex: number) {
  if (stepIndex === 0) return "Add the group name, dates and description."
  if (stepIndex === 1) return "Add sessions for this group of participants to attend, such as lectures, discussions, or activities, each with a designated day and time."
  if (stepIndex === 2) return "Select employees to participate in this group."
  if (stepIndex === 3) return "Link a budget and define direct, indirect, salary and subsidized costs."
  return "Add documents, including internal files and useful links, enhancing the learning experience."
}

function WizardStepButton({
  index,
  title,
  active,
  disabled,
  onClick,
}: {
  index: number
  title: string
  active: boolean
  disabled: boolean
  onClick: () => void
}) {
  return (
    <F0Box
      role="button"
      aria-disabled={disabled}
      display="flex"
      alignItems="center"
      gap="md"
      padding="md"
      borderRadius="md"
      background={active ? "secondary" : "transparent"}
      onClick={disabled ? undefined : onClick}
    >
      <F0Box
        width="6"
        height="6"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        background={active ? "inverse-secondary" : "secondary"}
      >
        <F0Text content={String(index + 1)} variant="small" />
      </F0Box>
      <F0Text content={title} variant="body" />
    </F0Box>
  )
}

function getNewCourseStepDescription(stepIndex: number) {
  if (stepIndex === 0) return "Provide details to easily identify this course."
  if (stepIndex === 1) return "Details in this section are for administrative purposes, and this information won't display for participants."
  return "Define the conditions participants must meet to complete the course."
}

function CoursesList({
  courses,
  onOpenOne,
  onExport,
  onImport,
  onImportCourses,
  onOpenFreeCourse,
  onCourseClick,
  onOpenAction,
}: {
  courses: ExactCourse[]
  onOpenOne: () => void
  onExport: () => void
  onImport: () => void
  onImportCourses: () => void
  onOpenFreeCourse: () => void
  onCourseClick: (courseId: string) => void
  onOpenAction: (dialog: Exclude<ListActionDialogId, null>, courseId?: string) => void
}) {
  const source = useCoursesSource({
    courses,
    onOpenOne,
    onExport,
      onImport,
      onImportCourses,
      onCourseClick,
    onOpenAction,
  })

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <AiActBanner onClick={onOpenFreeCourse} />
      <OneDataCollection
        id={`${SLUG}/courses/v1`}
        storage={false}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns,
              frozenColumns: 1,
              allowColumnHiding: true,
              allowColumnReordering: true,
            },
          },
        ]}
        onBulkAction={(action: string) => {
          if (action === "archive") onOpenAction("bulk-archive")
          if (action === "delete") onOpenAction("bulk-delete")
          if (action === "display-catalog") onOpenAction("bulk-display-catalog")
          if (action === "hide-catalog") onOpenAction("bulk-hide-catalog")
        }}
      />
    </F0Box>
  )
}

function useCoursesSource({
  courses,
  onOpenOne,
  onExport,
  onImport,
  onImportCourses,
  onCourseClick,
  onOpenAction,
}: {
  courses: ExactCourse[]
  onOpenOne: () => void
  onExport: () => void
  onImport: () => void
  onImportCourses: () => void
  onCourseClick: (courseId: string) => void
  onOpenAction: (dialog: Exclude<ListActionDialogId, null>, courseId?: string) => void
}) {
  return useDataCollectionSource<ExactCourse>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
        competencies: {
          type: "in",
          label: "Competencies",
          options: {
            options: uniqueOptions(courses.flatMap((course) => course.competencies)),
          },
        },
        categories: {
          type: "in",
          label: "Categories",
          options: {
            options: uniqueOptions(courses.flatMap((course) => course.categories)),
          },
        },
        participant: {
          type: "in",
          label: "Participant",
          options: {
            options: [
              { value: "has-participants", label: "With participants" },
              { value: "empty", label: "Without participants" },
            ],
          },
        },
        creationYear: {
          type: "in",
          label: "Creation year",
          options: {
            options: uniqueOptions(courses.map((course) => course.creationYear)),
          },
        },
        retake: {
          type: "in",
          label: "Retake",
          options: {
            options: [
              { value: "expired", label: "Validity expired" },
              { value: "valid", label: "No expired participants" },
            ],
          },
        },
        mandatory: {
          type: "in",
          label: "Mandatory",
          options: {
            options: [
              { value: "mandatory", label: "Mandatory" },
              { value: "not-mandatory", label: "Not mandatory" },
            ],
          },
        },
        campus: {
          type: "in",
          label: "Factorial campus",
          options: {
            options: [
              { value: "campus", label: "Factorial campus" },
              { value: "internal", label: "Internal" },
            ],
          },
        },
        activeCourses: {
          type: "in",
          label: "Active Courses",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
      },
      currentFilters: {
        status: ["active"],
      },
      presets: [
        { label: "Validity expired", filter: { retake: ["expired"] } },
        { label: "Published", filter: { status: ["active"] } },
        { label: "Factorial campus", filter: { campus: ["campus"] } },
      ],
      sortings: {
        course: { label: "Course" },
        participants: { label: "Participants" },
      },
      search: { enabled: true, sync: true },
      selectable: (course: ExactCourse) => course.id,
      itemUrl: (course: ExactCourse) => `/p/${SLUG}?view=detail&course=${course.id}`,
      itemOnClick: (course: ExactCourse) => () => onCourseClick(course.id),
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const filtered = courses
            .filter((course) => matchArray(filters?.status, course.status))
            .filter((course) => matchAny(filters?.competencies, course.competencies))
            .filter((course) => matchAny(filters?.categories, course.categories))
            .filter((course) => matchParticipant(filters?.participant, course))
            .filter((course) => matchArray(filters?.creationYear, course.creationYear))
            .filter((course) => matchRetake(filters?.retake, course))
            .filter((course) => matchArray(filters?.mandatory, course.requirement))
            .filter((course) =>
              matchArray(filters?.campus, course.campus ? "campus" : "internal")
            )
            .filter((course) => matchArray(filters?.activeCourses, course.status))
            .filter((course) => {
              const term = (search ?? "").toLowerCase().trim()
              if (term === "") return true
              return `${course.name} ${course.code} ${course.provider}`
                .toLowerCase()
                .includes(term)
            })

          const sorted = applySort(filtered, sortings, (course, field) => {
            switch (field) {
              case "course":
                return course.name.toLowerCase()
              case "participants":
                return course.participants
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New course",
        icon: Add,
        onClick: onOpenOne,
      }),
      secondaryActions: {
        expanded: 0,
        actions: () => [
          {
            label: "Export courses",
            description: "Export as CSV or Excel",
            icon: Download,
            onClick: onExport,
          },
          {
            label: "Import courses and participants",
            description: "Import a CSV or Excel file",
            icon: Upload,
            onClick: onImport,
          },
          {
            label: "Import courses",
            description: "Import a CSV or Excel file",
            icon: Upload,
            onClick: onImportCourses,
          },
        ],
      },
      itemActions: (course: ExactCourse) => [
        {
          label: "Duplicate",
          icon: Files,
          onClick: () => onOpenAction("duplicate-course", course.id),
        },
        {
          label: course.catalogVisible ? "Remove from catalog" : "Add to catalog",
          icon: Archive,
          onClick: () => onOpenAction("toggle-catalog-course", course.id),
        },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => onOpenAction("delete-course", course.id),
          critical: true,
        },
        {
          label: "Export connectivity log",
          icon: Download,
          onClick: () => onOpenAction("export-connectivity-log", course.id),
        },
      ],
      bulkActions: () => ({
        primary: [
          {
            label: "Display on catalog",
            icon: EyeVisible,
            id: "display-catalog",
          },
          {
            label: "Hide from catalog",
            icon: EyeInvisible,
            id: "hide-catalog",
          },
          {
            label: "Delete",
            icon: Delete,
            id: "delete",
            critical: true,
          },
        ],
      }),
      totalItemSummary: (total: number) => `${total} courses`,
    },
    [courses, onOpenOne, onExport, onImport, onImportCourses, onCourseClick, onOpenAction]
  )
}

function AiActBanner({ onClick }: { onClick: () => void }) {
  return (
    <F0Box
      display="grid"
      columns="1"
      md={{ columns: "12" }}
      gap="2xl"
      padding="xl"
      border="default"
      borderColor="secondary"
      borderRadius="xl"
      background="secondary"
      alignItems="center"
    >
      <F0Box colSpan="3" />
      <F0Box colSpan="5" display="flex" flexDirection="column" gap="md">
        <F0Heading
          content="EU AI Act: train your team before August 2nd or get fined"
          variant="heading"
          as="h3"
        />
        <F0Text
          content="Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work."
          variant="description"
        />
        <F0Button
          label="View free course"
          icon={ExternalLink}
          variant="outline"
          onClick={onClick}
        />
      </F0Box>
    </F0Box>
  )
}

function CategoriesTab({
  categories,
  onAddCategory,
  onDeleteCategory,
  onSettings,
}: {
  categories: CategoryRow[]
  onAddCategory: (name: string) => void
  onDeleteCategory: (categoryId: string) => void
  onSettings: () => void
}) {
  const source = useDataCollectionSource<CategoryRow>(
    {
      search: { enabled: true, sync: true },
      sortings: { name: { label: "Category name" } },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = categories.filter((category) =>
            term ? category.name.toLowerCase().includes(term) : true
          )
          const sorted = applySort(filtered, sortings, (category, field) => field === "name" ? category.name.toLowerCase() : null)
          return paginateRecords(sorted, pagination, 20)
        },
      },
      primaryActions: () => ({ label: "New category", icon: Add, onClick: () => onAddCategory("New category") }),
      secondaryActions: () => [{ label: "Settings", icon: Settings, onClick: onSettings }],
      itemActions: (category) => [
        { label: "Delete", icon: Delete, onClick: () => onDeleteCategory(category.id), critical: true },
      ],
      totalItemSummary: (total: number) => `${total} categories`,
    },
    [categories, onAddCategory, onDeleteCategory, onSettings]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/categories/v1`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "name", label: "Category name", sorting: "name", render: (category: CategoryRow) => category.name },
            ],
          },
        },
      ]}
    />
  )
}

function SurveyTemplatesTab({
  templates,
  onOpenTemplate,
  onCreateTemplate,
  onToggleTemplate,
  onDuplicateTemplate,
  onDeleteTemplate,
}: {
  templates: SurveyTemplateRow[]
  onOpenTemplate: (templateId: string) => void
  onCreateTemplate: () => void
  onToggleTemplate: (templateId: string) => void
  onDuplicateTemplate: (templateId: string) => void
  onDeleteTemplate: (templateId: string) => void
}) {
  const source = useDataCollectionSource<SurveyTemplateRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: { options: [{ value: "active", label: "Published" }, { value: "draft", label: "Draft" }] },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = templates
            .filter((template) => matchArray(filters?.status, template.status))
            .filter((template) => term ? template.name.toLowerCase().includes(term) : true)
          return paginateRecords(filtered, pagination, 20)
        },
      },
      primaryActions: () => ({ label: "New template", icon: Add, onClick: onCreateTemplate }),
      itemUrl: (template) => `/p/${SLUG}?view=survey-template-detail&template=${template.id}`,
      itemOnClick: (template) => () => onOpenTemplate(template.id),
      itemActions: (template) => [
        { label: template.status === "active" ? "Draft" : "Publish", icon: template.status === "active" ? EyeInvisible : EyeVisible, onClick: () => onToggleTemplate(template.id) },
        { label: "Duplicate", icon: Files, onClick: () => onDuplicateTemplate(template.id) },
        { label: "Delete", icon: Delete, onClick: () => onDeleteTemplate(template.id), critical: true },
      ],
      totalItemSummary: (total: number) => `${total} templates`,
    },
    [templates, onCreateTemplate, onOpenTemplate, onToggleTemplate, onDuplicateTemplate, onDeleteTemplate]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/survey-templates/v1`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "name", label: "Name", render: (template: SurveyTemplateRow) => ({ type: "text" as const, value: { text: template.name } }) },
              { id: "formType", label: "Type", render: (template: SurveyTemplateRow) => ({ type: "dotTag" as const, value: { label: surveyTypeLabel(template.formType), color: surveyTypeColor(template.formType) } }) },
              { id: "status", label: "Status", render: (template: SurveyTemplateRow) => ({ type: "status" as const, value: { label: template.status === "active" ? "Published" : "Draft", status: template.status === "active" ? "positive" : "warning" } }) },
              { id: "author", label: "Author", render: (template: SurveyTemplateRow) => personValue(template.author) },
            ],
          },
        },
      ]}
    />
  )
}

function RequestsTab({
  requests,
  onUpdateRequests,
}: {
  requests: RequestRow[]
  onUpdateRequests: StateSetter<RequestRow[]>
}) {
  const source = useDataCollectionSource<RequestRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        authorEmployeeId: {
          type: "in",
          label: "Applicant",
          options: { options: uniqueNames(requests.map((request) => request.requestedBy)).map((name) => ({ label: name, value: name })) },
        },
        createdAt: {
          type: "date",
          label: "Date",
        },
        competencyId: {
          type: "in",
          label: "Competencies",
          options: { options: uniqueNames(exactCourses.flatMap((course) => course.competencies)).map((competency) => ({ label: competency, value: competency })) },
        },
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "review", label: "Pending review" },
              { value: "approved", label: "Approved" },
              { value: "rejected", label: "Rejected" },
            ],
          },
        },
      },
      sortings: {
        requestDate: { label: "Request date" },
      },
      presets: [
        { label: "Pending", filter: { status: ["review"] } },
        { label: "Approved", filter: { status: ["approved"] } },
        { label: "Rejected", filter: { status: ["rejected"] } },
      ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = requests
            .filter((request) => matchArray(filters?.authorEmployeeId, request.requestedBy))
            .filter((request) => matchArray(filters?.status, request.status))
            .filter((request) => {
              if (term === "") return true
              return `${request.trainingName} ${request.requestedBy}`.toLowerCase().includes(term)
            })
          const sorted = applySort(filtered, sortings, (request, field) => {
            switch (field) {
              case "requestDate":
                return Date.parse(request.requestDate)
              default:
                return null
            }
          })
          return paginateRecords(sorted, pagination, 20)
        },
      },
      secondaryActions: () => [{ label: "Export", icon: Upload, onClick: () => undefined }],
      itemActions: (request) => [
        {
          label: "Approve request",
          icon: CheckCircle,
          onClick: () =>
            onUpdateRequests((current) =>
              current.map((item) => item.id === request.id ? { ...item, status: "approved" } : item)
            ),
        },
        {
          label: "Reject request",
          icon: Cross,
          onClick: () =>
            onUpdateRequests((current) =>
              current.map((item) => item.id === request.id ? { ...item, status: "rejected" } : item)
            ),
          critical: true,
        },
      ],
      totalItemSummary: (total: number) => `${total} requests`,
    },
    [requests, onUpdateRequests]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/requests/v1`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "trainingName", label: "Training name", width: 200, render: (request: RequestRow) => ({ type: "text" as const, value: request.trainingName }) },
              { id: "requestDate", label: "Request date", sorting: "requestDate", render: (request: RequestRow) => ({ type: "text" as const, value: request.requestDate }) },
              { id: "requestedBy", label: "Requested by", render: (request: RequestRow) => personValue(request.requestedBy) },
              { id: "participants", label: "Participants", render: (request: RequestRow) => participantsValue(request.participants) },
              { id: "status", label: "Status", render: (request: RequestRow) => ({ type: "status" as const, value: requestStatusValue(request.status) }) },
            ],
            allowColumnReordering: true,
            allowColumnHiding: true,
          },
        },
      ]}
    />
  )
}

function BudgetsTab({
  budgets,
  onUpdateBudgets,
  onOpenBudget,
}: {
  budgets: BudgetRow[]
  onUpdateBudgets: StateSetter<BudgetRow[]>
  onOpenBudget: (budgetId: string) => void
}) {
  const source = useDataCollectionSource<BudgetRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: { options: [{ value: "active", label: "Active" }, { value: "archived", label: "Archived" }] },
        },
      },
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        { label: "Archived", filter: { status: ["archived"] } },
      ],
      sortings: {
        name: { label: "Name" },
        totalBudget: { label: "Total budget" },
        availableBudget: { label: "Available budget" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = budgets
            .filter((budget) => matchArray(filters?.status, budget.status))
            .filter((budget) => term === "" ? true : budget.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings, (budget, field) => {
            switch (field) {
              case "name":
                return budget.name.toLowerCase()
              case "totalBudget":
                return budget.totalBudget
              case "availableBudget":
                return budget.availableBudget
              default:
                return null
            }
          })
          return paginateRecords(sorted, pagination, 20)
        },
      },
      primaryActions: () => ({
        label: "New budget",
        icon: Add,
        onClick: () =>
          onUpdateBudgets((current) => [
            {
              id: `budget-${Date.now()}`,
              name: "New training budget",
              status: "active",
              totalBudget: 0,
              availableBudget: 0,
              committedBudget: 0,
              spentBudget: 0,
              effectiveDate: "1 Jan 2026",
              trainingGroups: 0,
              movements: [],
            },
            ...current,
          ]),
      }),
      itemUrl: (budget) => routes.budget(budget.id),
      itemOnClick: (budget) => () => onOpenBudget(budget.id),
      itemActions: (budget) => budget.status === "archived" ? [] : [
        {
          label: "Archive",
          icon: Archive,
          onClick: () =>
            onUpdateBudgets((current) =>
              current.map((item) =>
                item.id === budget.id
                  ? { ...item, status: "archived" }
                  : item
              )
            ),
        },
      ],
      totalItemSummary: (total: number) => `${total} budgets`,
    },
    [budgets, onUpdateBudgets, onOpenBudget]
  )

  const budgetSource = source

  return (
    <OneDataCollection
      id={`${SLUG}/budgets/v1`}
      storage={false}
      source={budgetSource}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "name", label: "Budget name", sorting: "name", render: (budget: BudgetRow) => ({ type: "text" as const, value: budget.name }) },
              { id: "status", label: "Status", render: (budget: BudgetRow) => ({ type: "dotTag" as const, value: budgetFinancialStatusValue(budget) }) },
              { id: "totalBudget", label: "Total budget", sorting: "totalBudget", render: (budget: BudgetRow) => ({ type: "text" as const, value: formatCurrency(budget.totalBudget) }) },
              { id: "availableBudget", label: "Available budget", sorting: "availableBudget", render: (budget: BudgetRow) => ({ type: "text" as const, value: formatCurrency(budget.availableBudget) }) },
            ],
          },
        },
        {
          type: "card",
          options: {
            title: (budget: BudgetRow) => budget.name,
            cardProperties: [
              { label: "Status", icon: ChartLine, render: (budget: BudgetRow) => ({ type: "dotTag" as const, value: budgetFinancialStatusValue(budget) }) },
              { label: "Amount", icon: DollarBill, render: (budget: BudgetRow) => ({ type: "text" as const, value: formatCurrency(budget.totalBudget) }) },
              { label: "Progress", icon: InProgressTask, render: (budget: BudgetRow) => budgetProgressValue(budget) },
            ],
          },
        },
      ]}
    />
  )
}

function InsightsTab({ courses }: { courses: ExactCourse[] }) {
  const [activeDialog, setActiveDialog] = useState<InsightActionDialogId>(null)
  const totalCourses = courses.length
  const participants = courses.reduce((total, course) => total + course.participants, 0)
  const totalCost = courses.reduce((total, course) => total + parseCurrencyValue(course.totalCost), 0)
  const salaryCost = courses.reduce((total, course) => total + parseCurrencyValue(course.salaryCost), 0)
  const subsidizedCost = courses.reduce((total, course) => total + parseCurrencyValue(course.subsidizedCost), 0)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0Box display="flex" gap="md" alignItems="center" flexWrap="wrap">
        <F0Button label="from - to" icon={CalendarArrowRight} variant="outline" onClick={() => setActiveDialog("date-range")} />
        <F0Button label="Trainings" icon={File} variant="outline" onClick={() => setActiveDialog("trainings-filter")} />
        <F0Button label="Teams" icon={People} variant="outline" onClick={() => setActiveDialog("teams-filter")} />
      </F0Box>
      <F0Box display="grid" columns="1" md={{ columns: "4" }} gap="lg">
        <InsightNumber title="Courses" value={totalCourses} />
        <InsightNumber title="Total cost" value={`${Math.round(totalCost).toLocaleString("en-US")} EUR`} />
        <InsightNumber title="Salary cost" value={`${Math.round(salaryCost).toLocaleString("en-US")} EUR`} />
        <InsightNumber title="Total subsidized cost" value={`${Math.round(subsidizedCost).toLocaleString("en-US")} EUR`} />
      </F0Box>
      <F0Card title="Employees" description="Average employees per training and total trained employees.">
        <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
          <InsightNumber title="Average employees" value={Math.round(participants / Math.max(totalCourses, 1))} />
          <InsightNumber title="Employees" value={participants} />
        </F0Box>
      </F0Card>
      <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
        <InsightChartCard title="Employees by teams">
          <F0DataChart
            type="bar"
            orientation="horizontal"
            categories={insightTeamCategories}
            series={insightTeamSeries}
            showLegend={false}
            showLabels
          />
        </InsightChartCard>
        <InsightChartCard title="Employees by gender">
          <F0DataChart
            type="pie"
            showPercentage
            series={insightGenderSeries}
          />
        </InsightChartCard>
      </F0Box>
      <F0Card title="Training hours" description="Average hours per employee and total training hours.">
        <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
          <InsightNumber title="Average training hours" value="6h" />
          <InsightNumber title="Total hours" value="342h" />
        </F0Box>
      </F0Card>
      <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
        <InsightChartCard title="Training duration">
          <F0DataChart
            type="bar"
            categories={courses.slice(0, 5).map((course) => course.name)}
            series={[{ name: "Hours", data: [2, 1.5, 4, 3, 1] }]}
            valueFormatter={(value: number) => `${value}h`}
            showLegend={false}
          />
        </InsightChartCard>
        <InsightChartCard title="Average attendance">
          <F0DataChart
            type="pie"
            innerRadius={50}
            showPercentage
            series={insightAttendanceSeries}
          />
        </InsightChartCard>
      </F0Box>
      <TrainingActionDialog
        detail={activeDialog ? getInsightActionDetail(activeDialog) : null}
        onClose={() => setActiveDialog(null)}
        onConfirm={() => setActiveDialog(null)}
      />
    </F0Box>
  )
}

function InsightNumber({ title, value }: { title: string; value: number | string }) {
  return (
    <F0Card compact title={title}>
      {typeof value === "number" ? (
        <F0BigNumber value={value} label={title} comparison={0} />
      ) : (
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading content={value} variant="heading" as="h3" />
          <F0Text content={title} variant="description" />
        </F0Box>
      )}
    </F0Card>
  )
}

function InsightChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <F0Card title={title}>
      <F0Box minHeight="300px">
        {children}
      </F0Box>
    </F0Card>
  )
}

function BudgetDetailScreen({
  budget,
  onUpdateBudgets,
}: {
  budget: BudgetRow
  onUpdateBudgets: StateSetter<BudgetRow[]>
}) {
  const [selectedMovement, setSelectedMovement] = useState<BudgetMovementRow | null>(null)
  const [activeDialog, setActiveDialog] = useState<"add-group" | "export" | "edit" | null>(null)
  const source = useDataCollectionSource<BudgetMovementRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        groupStatus: {
          type: "in",
          label: "Group status",
          options: {
            options: [
              { value: "planned", label: "Planned" },
              { value: "ongoing", label: "Ongoing" },
              { value: "finished", label: "Finished" },
            ],
          },
        },
        status: {
          type: "in",
          label: "Payment status",
          options: { options: [{ value: "pending", label: "Pending" }, { value: "paid", label: "Paid" }] },
        },
      },
      presets: [
        { label: "Pending", filter: { status: ["pending"] } },
        { label: "Paid", filter: { status: ["paid"] } },
      ],
      sortings: {
        trainingGroup: { label: "Training group" },
        startDate: { label: "Start date" },
        cost: { label: "Cost" },
        participants: { label: "Participants" },
      },
      grouping: {
        collapsible: true,
        mandatory: true,
        defaultOpenGroups: true,
        groupBy: {
          trainingId: {
            name: "Training",
            label: (groupId) => budget.movements.find((item) => item.trainingId === groupId)?.trainingName ?? "Training",
            defaultDirection: "asc" as const,
          },
        },
      },
      secondaryActions: {
        expanded: 1,
        actions: () => [
          {
            label: "Add training group",
            onClick: () => setActiveDialog("add-group"),
            disabled: budget.status === "archived",
          },
          {
            label: "Export budget",
            description: "Export all training groups linked to this budget.",
            icon: Upload,
            onClick: () => setActiveDialog("export"),
          },
        ],
      },
      itemOnClick: (item) => () => setSelectedMovement(item),
      itemActions: (item) => [
        {
          label: "Go to training group",
          icon: ExternalLink,
          onClick: () => setSelectedMovement(item),
        },
        ...(budget.status === "active"
          ? [
              {
                label: "Remove group cost",
                icon: Delete,
                critical: true as const,
                onClick: () => setActiveDialog("edit"),
              },
            ]
          : []),
      ],
      totalItemSummary: true,
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = budget.movements
            .filter((item) => matchArray(filters?.groupStatus, item.groupStatus))
            .filter((item) => matchArray(filters?.status, item.paymentStatus))
            .filter((item) =>
              term === ""
                ? true
                : [item.groupName, item.trainingName, item.provider].some((value) => value.toLowerCase().includes(term))
            )
          const sorted = applySort(filtered, sortings, (item, field) => {
            switch (field) {
              case "trainingGroup":
                return item.groupName.toLowerCase()
              case "startDate":
                return Date.parse(item.startDate)
              case "cost":
                return item.cost
              case "participants":
                return item.participants
              default:
                return null
            }
          })
          return paginateRecords(sorted, pagination, 20)
        },
      },
    },
    [budget]
  )
  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "budgets", label: "Budgets", href: routes.budgets },
              { id: budget.id, label: budget.name },
            ]}
          />
          <ResourceHeader
            title={budget.name}
            description={budget.description}
            status={budgetResourceStatus(budget)}
            metadata={[
              {
                label: "Budget type",
                value: { type: "dot-tag" as const, label: "Training", color: "malibu" },
              },
              { label: "Date", value: { type: "date" as const, formattedDate: budget.effectiveDate } },
              { label: "Status", value: { type: "text" as const, content: budget.status === "active" ? "Active" : "Archived" } },
              { label: "Groups", value: { type: "text" as const, content: String(budget.trainingGroups) } },
            ]}
            secondaryActions={[
              {
                label: "Edit",
                icon: Settings,
                onClick: () => setActiveDialog("edit"),
              },
              {
                label: budget.status === "active" ? "Archive" : "Reactivate",
                icon: budget.status === "active" ? Archive : InProgressTask,
                onClick: () =>
                  onUpdateBudgets((current) =>
                    current.map((item) =>
                      item.id === budget.id
                        ? { ...item, status: item.status === "active" ? "archived" : "active" }
                      : item
                    )
                  ),
              },
            ]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="xl" height="full">
          {budget.status === "archived" && (
            <F0Alert
              title="Archived budget"
              description="This budget is in read-only mode. Adding or removing groups is disabled unless the budget is reactivated."
              variant="warning"
            />
          )}
          <F0Box display="grid" columns="1" md={{ columns: "4" }} gap="lg">
            <BudgetWidget title="Total" value={formatCurrency(budget.totalBudget)} />
            <BudgetWidget title="Committed" value={formatCurrency(budget.committedBudget)} />
            <BudgetWidget title="Spent" value={formatCurrency(budget.spentBudget)} />
            <BudgetWidget title="Available" value={formatCurrency(budget.availableBudget)} critical={budget.availableBudget < 0} />
          </F0Box>
          <OneDataCollection
            id={`${SLUG}/budget-${budget.id}/groups/v1`}
            storage={false}
            source={source}
            fullHeight
            visualizations={[
              {
                type: "table",
                options: {
                  columns: [
                    { id: "trainingGroup", label: "Training group", sorting: "trainingGroup", width: 360, render: (item: BudgetMovementRow) => ({ type: "text" as const, value: item.groupName }) },
                    { id: "groupStatus", label: "Group status", render: (item: BudgetMovementRow) => ({ type: "status" as const, value: budgetGroupStatusValue(item.groupStatus) }) },
                    { id: "startDate", label: "Start date", sorting: "startDate", render: (item: BudgetMovementRow) => ({ type: "text" as const, value: item.startDate }) },
                    { id: "endDate", label: "End date", render: (item: BudgetMovementRow) => ({ type: "text" as const, value: item.endDate }) },
                    { id: "cost", label: "Cost", sorting: "cost", render: (item: BudgetMovementRow) => ({ type: "text" as const, value: formatCurrency(item.cost) }) },
                    { id: "provider", label: "Provider", render: (item: BudgetMovementRow) => ({ type: "text" as const, value: item.provider }) },
                    { id: "paymentStatus", label: "Payment status", render: (item: BudgetMovementRow) => ({ type: "status" as const, value: budgetPaymentStatusValue(item.paymentStatus) }) },
                    { id: "participants", label: "Participants", sorting: "participants", render: (item: BudgetMovementRow) => ({ type: "text" as const, value: String(item.participants) }) },
                  ],
                },
              },
            ]}
            emptyStates={{
              "no-data": {
                title: "No training groups linked to this budget",
                description: "Add a training group to start tracking its cost against the budget.",
                emoji: "📚",
                actions: budget.status === "active" ? [{ label: "Add training group", onClick: () => setActiveDialog("add-group") }] : undefined,
              },
            }}
          />
          {selectedMovement && (
            <BudgetTrainingGroupSidepanel
              budget={budget}
              movement={selectedMovement}
              onClose={() => setSelectedMovement(null)}
            />
          )}
          <TrainingActionDialog
            detail={activeDialog ? getBudgetActionDetail(activeDialog, budget) : null}
            onClose={() => setActiveDialog(null)}
            onConfirm={() => setActiveDialog(null)}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function BudgetTrainingGroupSidepanel({
  budget,
  movement,
  onClose,
}: {
  budget: BudgetRow
  movement: BudgetMovementRow
  onClose: () => void
}) {
  const [activeTab, setActiveTab] = useState("cost")
  const totalCost = movement.directCost + movement.indirectCost + movement.salaryCost
  const canEdit = budget.status === "active"
  const tabs = [
    { id: "cost", label: "Cost", onClick: () => setActiveTab("cost") },
    { id: "participants", label: "Participants", onClick: () => setActiveTab("participants") },
  ]

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="right"
      title="Training group details"
      primaryAction={canEdit && activeTab === "cost" ? { label: "Save", onClick: onClose } : undefined}
      otherActions={[
        {
          label: "Go to group costs page",
          icon: ExternalLink,
          onClick: onClose,
        },
      ]}
    >
      <ResourceHeader
        title={movement.groupName}
        description={movement.trainingName}
        status={{
          label: "Payment status",
          text: movement.paymentStatus === "paid" ? "Paid" : "Pending",
          variant: movement.paymentStatus === "paid" ? "positive" : "warning",
        }}
        metadata={[{ label: "Timeframe", value: { type: "text", content: `${movement.startDate} – ${movement.endDate}` } }]}
      />
      <F0BoxWithClassName style={{ marginInline: "-24px" }}>
        <F0Box paddingY="xl">
          <Tabs key={activeTab} tabs={tabs} activeTabId={activeTab} setActiveTabId={setActiveTab} />
        </F0Box>
      </F0BoxWithClassName>
      {activeTab === "cost" ? (
        canEdit ? (
          <F0Box display="flex" flexDirection="column" gap="lg" paddingX="sm">
            <F0FormField field={costFields.paymentStatus} value={movement.paymentStatus} onChange={() => undefined} />
            <BudgetCostInput label="Direct cost" description="Training-related expenses, such as instructor fees, materials, venue, and logistics." value={movement.directCost} />
            <BudgetCostInput label="Indirect cost" description="General business expenses related to training, such as utilities and administrative fees." value={movement.indirectCost} />
            <BudgetCostInput label="Salary cost" description="Cost of all employees' time spent on the course." value={movement.salaryCost} />
            <BudgetTotalCostCard value={formatCurrency(totalCost)} />
          </F0Box>
        ) : (
          <BudgetCostReadOnly movement={movement} />
        )
      ) : (
        <BudgetParticipantsList />
      )}
    </F0Dialog>
  )
}

function BudgetWidget({ title, value, critical = false }: { title: string; value: string; critical?: boolean }) {
  return (
    <F0BoxWithClassName border="default" borderColor="secondary" borderRadius="lg" background="primary" style={{ padding: 16, minHeight: 98 }}>
      <F0Box display="flex" flexDirection="column" gap="sm" justifyContent="center" height="full">
        <F0Text content={title} variant="label" style={{ fontSize: 16, fontWeight: 600, lineHeight: "24px" }} />
        <F0BoxWithClassName style={{ whiteSpace: "nowrap" }}>
          <F0Heading content={value} variant="heading" as="h3" color={critical ? "critical" : undefined} style={{ fontSize: 26, fontWeight: 500, lineHeight: "32px" }} />
        </F0BoxWithClassName>
      </F0Box>
    </F0BoxWithClassName>
  )
}

function BudgetCostReadOnly({ movement }: { movement: BudgetMovementRow }) {
  const totalCost = movement.directCost + movement.indirectCost + movement.salaryCost
  return (
    <F0Box display="flex" flexDirection="column" paddingY="lg" gap="lg">
      <F0Heading content="Cost breakdown" variant="heading" />
      <F0Box border="default" borderRadius="md" borderColor="secondary" flexDirection="column">
        <BudgetCostReadOnlyRow title="Direct cost" description="Training-related expenses, such as instructor fees, materials, venue, and logistics." amount={formatCurrency(movement.directCost)} />
        <BudgetCostReadOnlyRow title="Indirect cost" description="General business expenses related to training, such as utilities and administrative fees." amount={formatCurrency(movement.indirectCost)} withDivider />
        <BudgetCostReadOnlyRow title="Salary cost" description="Cost of all employees' time spent on the course." amount={formatCurrency(movement.salaryCost)} withDivider />
      </F0Box>
      <BudgetTotalCostCard value={formatCurrency(totalCost)} />
    </F0Box>
  )
}

function BudgetCostReadOnlyRow({
  title,
  description,
  amount,
  withDivider = false,
}: {
  title: string
  description: string
  amount: string
  withDivider?: boolean
}) {
  return (
    <F0Box display="grid" columns="12" alignItems="center" padding="lg" borderTop={withDivider ? "default" : undefined} borderColor="secondary" gap="lg">
      <F0Box colSpan="9" display="flex" flexDirection="column" gap="xs">
        <F0Text content={title} variant="label" />
        <F0Text content={description} variant="description" />
      </F0Box>
      <F0BoxWithClassName colSpan="3" display="flex" justifyContent="end" style={{ minWidth: 132, whiteSpace: "nowrap" }}>
        <F0Text content={amount} variant="label" />
      </F0BoxWithClassName>
    </F0Box>
  )
}

function BudgetTotalCostCard({ value }: { value: string }) {
  return (
    <F0Box display="grid" columns="12" alignItems="center" padding="lg" borderRadius="md" background="secondary" gap="lg">
      <F0Box colSpan="8" display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Total cost" variant="heading" />
        <F0Text content="Sum of direct, indirect, and salary costs" variant="description" />
      </F0Box>
      <F0BoxWithClassName colSpan="4" display="flex" justifyContent="end" style={{ minWidth: 132, whiteSpace: "nowrap" }}>
        <F0Heading content={value} variant="heading" />
      </F0BoxWithClassName>
    </F0Box>
  )
}

function BudgetCostInput({ label, description, value }: { label: string; description: string; value: number }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm" padding="lg" border="default" borderColor="secondary" borderRadius="md">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text content={label} variant="label" />
        <F0Text content={description} variant="description" />
      </F0Box>
      <NumberInput label={label} hideLabel value={value} onChange={() => undefined} units="EUR" size="md" maxDecimals={2} locale="en-US" />
    </F0Box>
  )
}

function BudgetParticipantsList() {
  const source = useDataCollectionSource<GroupParticipantRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = groupParticipants.filter((participant) =>
            term === "" ? true : [participant.name, participant.team].some((value) => value.toLowerCase().includes(term))
          )
          return paginateRecords(filtered, pagination, 10)
        },
      },
      totalItemSummary: (total: number) => `${total} participants`,
    },
    []
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" paddingX="sm">
      <OneDataCollection
        id={`${SLUG}/budget-training-group-participants/v1`}
        storage={false}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Name", render: (participant: GroupParticipantRow) => personValue(participant.name) },
                { id: "team", label: "Team", render: (participant: GroupParticipantRow) => ({ type: "text" as const, value: participant.team }) },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function SurveyTemplateDetailScreen({
  template,
  onBack,
}: {
  template: SurveyTemplateRow
  onBack: () => void
}) {
  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "templates", label: "Survey templates", href: routes.surveyTemplates },
              { id: template.id, label: template.name },
            ]}
          />
          <ResourceHeader
            title={template.name}
            description="Edit survey questions and publishing state."
            secondaryActions={[{ label: "Cancel", icon: Cross, onClick: onBack }]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="grid" columns="1" md={{ columns: "3" }} gap="lg">
            <MetricCard title="Form type" value={surveyTypeLabel(template.formType)} description="Template purpose" />
            <MetricCard title="Status" value={template.status === "active" ? "Published" : "Draft"} description="Visible in course surveys" />
            <MetricCard title="Author" value={template.author} description="Template owner" />
          </F0Box>
          <InfoPanel title="Questions" items={["How satisfied are you with this course?", "Was the content useful for your role?", "Would you recommend this course?"]} />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function CourseDetail({
  course,
  toast,
  onToast,
  onRevertToDraft,
}: {
  course: ExactCourse
  toast: ToastId
  onToast: (toast: ToastId) => void
  onRevertToDraft: () => void
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeDialog, setActiveDialog] = useState<CourseActionDialogId>(null)
  const [classWizardOpen, setClassWizardOpen] = useState(false)
  const activeDetailTab = getValidParam(
    searchParams.get("dtab"),
    VALID_DETAIL_TABS,
    "overview"
  ) as CourseDetailTabId
  const detailTabs = [
    { id: "overview", label: "Overview" },
    { id: "content", label: "Content" },
    { id: "training-groups", label: "Training groups" },
    { id: "participants", label: "Participants" },
    { id: "materials", label: "Materials" },
    { id: "documents", label: "Documents" },
    { id: "surveys", label: "Surveys" },
  ]
  const detailTabsWithNav = detailTabs.map((tab) => ({
    ...tab,
    onClick: () => setSearchParams({ view: "detail", course: course.id, dtab: tab.id }),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: routes.courses },
              { id: course.id, label: course.name },
            ]}
            actions={[
              {
                label: "Discover Training",
                icon: Sparkles,
                onClick: () => setSearchParams({ view: "discover" }),
              },
              { label: "Settings", icon: Settings, onClick: () => setSearchParams({ view: "settings" }) },
              { label: "Open dashboard", icon: Sliders, onClick: () => setSearchParams({ tab: "insights" }) },
            ]}
          />
          <ResourceHeader
            title={course.name}
            status={{ label: "Status", text: "Published", variant: "positive" }}
            metadata={[
              { label: "Type", value: { type: "text", content: "Internal" } },
              { label: "Total duration", value: { type: "text", content: course.duration } },
              {
                label: "Training groups",
                value: { type: "text", content: `${course.groups[0]} +${Math.max(course.groups.length - 1, 0)}` },
              },
              { label: "Instructor(s)", value: { type: "text", content: "-" } },
            ]}
            secondaryActions={[
              { label: "Copy link", icon: Link, onClick: () => onToast("copied") },
              {
                label: "Course settings",
                icon: Settings,
                onClick: () => setActiveDialog("course-settings"),
              },
              {
                label: "Revert to draft",
                icon: Archive,
                onClick: () => setActiveDialog("revert-course"),
              },
            ]}
          />
          <Tabs key={activeDetailTab} tabs={detailTabsWithNav} activeTabId={activeDetailTab} />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          {toast && <FeedbackBanner toast={toast} />}
            <CourseDetailTabBody
              course={course}
              activeDetailTab={activeDetailTab}
              onOpenDialog={setActiveDialog}
              onOpenClassWizard={() => setClassWizardOpen(true)}
              onGoToSurveys={() =>
                setSearchParams({ view: "detail", course: course.id, dtab: "surveys" })
              }
          />
        </F0Box>
        <NewTrainingGroupWizardDialog
          isOpen={classWizardOpen}
          onClose={() => setClassWizardOpen(false)}
          onCreate={() => {
            setClassWizardOpen(false)
            onToast("draft")
          }}
        />
        <TrainingActionDialog
          detail={activeDialog ? getCourseActionDetail(activeDialog, course) : null}
          onClose={() => setActiveDialog(null)}
          onConfirm={() => {
            if (activeDialog === "revert-course") onRevertToDraft()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detail: any = getCourseActionDetail(activeDialog, course)
            setActiveDialog(null)
            onToast(detail.toast)
          }}
        />
      </StandardLayout>
    </Page>
  )
}

function CourseDetailTabBody({
  course,
  activeDetailTab,
  onOpenDialog,
  onOpenClassWizard,
  onGoToSurveys,
}: {
  course: ExactCourse
  activeDetailTab: CourseDetailTabId
  onOpenDialog: (dialog: CourseActionDialogId) => void
  onOpenClassWizard: () => void
  onGoToSurveys: () => void
}) {
  if (activeDetailTab === "overview") {
    return <CourseOverviewTab course={course} onGoToSurveys={onGoToSurveys} />
  }
  if (activeDetailTab === "content") return <CourseContentTab />
  if (activeDetailTab === "training-groups") return <CourseGroupsTab course={course} onOpenDialog={onOpenDialog} onOpenClassWizard={onOpenClassWizard} />
  if (activeDetailTab === "participants") return <CourseParticipantsTab />
  if (activeDetailTab === "materials") return <CourseMaterialsTab onOpenDialog={onOpenDialog} />
  if (activeDetailTab === "documents") return <CourseDocumentsTab onOpenDialog={onOpenDialog} />
  return <CourseSurveysTab onOpenDialog={onOpenDialog} />
}

function CourseOverviewTab({
  course,
  onGoToSurveys,
}: {
  course: ExactCourse
  onGoToSurveys: () => void
}) {
  const mainContent = (
    <F0Box display="flex" flexDirection="column" gap="2xl">
        <F0Box
          display="flex"
          justifyContent="between"
          alignItems="center"
          padding="lg"
          border="default"
          borderColor="secondary"
          borderRadius="lg"
          background="warning"
        >
          <F0Box display="flex" alignItems="center" gap="md">
            <F0Icon icon={CheckCircle} size="md" color="warning" />
            <F0Text
              content="Completion settings are stricter than the default course template."
              variant="body"
            />
          </F0Box>
          <F0Button
            label="Manage surveys"
            variant="outline"
            size="sm"
            onClick={onGoToSurveys}
          />
        </F0Box>
        <F0Box display="grid" columns="1" md={{ columns: "3" }} gap="lg">
          <MetricCard title="Course satisfaction" value="-" description="No survey responses yet" />
          <MetricCard title="Course effectiveness" value="-" description="No results yet" />
          <MetricCard title="Knowledge test" value="-" description="No answers yet" />
        </F0Box>
        <InfoSection title="Competencies" items={course.competencies} />
        <InfoSection title="Objectives" items={course.objectives} />
        <InfoSection title="Description" description={course.description} />
        <InfoSection title="Course validity" description={course.validity} />
      </F0Box>
  )

  return (
    <TwoColumnLayout sideContent={<SideInfo course={course} />}>
      {mainContent}
    </TwoColumnLayout>
  )
}

type ContentRow = {
  id: string
  moduleRef: string
  name: string
  type: "Page" | "Video" | "Quiz"
  avgAttempts?: number
  questionFailure?: boolean
}

const TYPE_ICON = { Page: File, Video: Video, Quiz: Question } as const

const CONTENT_MODULES: { id: string; title: string; items: Omit<ContentRow, "moduleRef">[] }[] = [
  {
    id: "m1",
    title: "Módulo 1: Introducción a ISO 9001 y gestión de calidad",
    items: [
      { id: "m1-1", name: "Introducción a ISO 9001", type: "Page" },
      { id: "m1-2", name: "Cuestionario del módulo 1", type: "Quiz", avgAttempts: 1, questionFailure: true },
    ],
  },
  {
    id: "m2",
    title: "Módulo 2: Requisitos clave de ISO 9001",
    items: [{ id: "m2-1", name: "Requisitos clave de ISO 9001", type: "Page" }],
  },
  {
    id: "m3",
    title: "Módulo 3: Implementación y mantenimiento de un sistema de gestión de calidad",
    items: [
      { id: "m3-1", name: "Implementación y mantenimiento de un sistema de gestión de calidad", type: "Page" },
      { id: "m3-2", name: "Módulo 3 - Cuestionario", type: "Quiz", avgAttempts: 2 },
      { id: "m3-3", name: "Cómo prepararte para tu certificación ISO", type: "Video" },
    ],
  },
]

const CONTENT_ROWS: ContentRow[] = CONTENT_MODULES.flatMap((module) =>
  module.items.map((item) => ({ ...item, moduleRef: module.id }))
)
const MODULE_TITLE: Record<string, string> = Object.fromEntries(
  CONTENT_MODULES.map((module) => [module.id, module.title])
)
const MODULE_COUNT: Record<string, number> = Object.fromEntries(
  CONTENT_MODULES.map((module) => [module.id, module.items.length])
)

function CourseContentTab() {
  const [searchParams, setSearchParams] = useSearchParams()
  const courseId = searchParams.get("course") ?? ""
  const source = useDataCollectionSource<ContentRow>(
    {
      grouping: {
        hideSelector: true,
        collapsible: true,
        mandatory: true,
        defaultOpenGroups: true,
        groupBy: {
          moduleRef: {
            name: "Module",
            label: (groupId) => MODULE_TITLE[String(groupId)] ?? String(groupId),
            itemCount: (groupId) => MODULE_COUNT[String(groupId)] ?? 0,
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 50,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords(CONTENT_ROWS, pagination, 50),
      },
    },
    []
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" justifyContent="between" alignItems="center" gap="lg">
        <F0Heading content="Course content" variant="heading" as="h2" />
        <F0Button label="Edit content" icon={Settings} variant="outline" onClick={() => setSearchParams({ view: "builder", course: courseId })} />
      </F0Box>
      <F0BoxWithClassName className="px-12">
      <OneDataCollection
        id={`${SLUG}/course-content/v1`}
        storage={false}
        source={source}
        visualizations={[
          {
            type: "list",
            options: {
              itemDefinition: (item: ContentRow) => ({
                title: item.name,
                description: [item.type],
                avatar: { type: "icon" as const, icon: TYPE_ICON[item.type], "aria-label": item.type },
              }),
              fields: [
                {
                  label: "Attempts",
                  render: (item: ContentRow) =>
                    item.type === "Quiz" && item.avgAttempts !== undefined
                      ? {
                          type: "status" as const,
                          value: {
                            status: "neutral" as const,
                            label: `Avg. ${item.avgAttempts} ${item.avgAttempts === 1 ? "attempt" : "attempts"}`,
                          },
                        }
                      : { type: "text" as const, value: "" },
                },
                {
                  label: "Warning",
                  render: (item: ContentRow) =>
                    item.type === "Quiz" && item.questionFailure
                      ? { type: "alertTag" as const, value: { level: "warning" as const, label: "Often missed" } }
                      : { type: "text" as const, value: "" },
                },
              ],
            },
          },
        ]}
      />
      </F0BoxWithClassName>
    </F0Box>
  )
}

const QUIZ_QUESTIONS: Record<string, SurveyFormBuilderElement[]> = {
  "m1-2": [
    {
      type: "question",
      question: {
        id: "m1-2-q1",
        title: 'What is considered "personal data" under GDPR?',
        type: "select",
        required: true,
        options: [
          {
            value: "o1",
            label: "Any information relating to an identified or identifiable natural person",
            correct: true,
          },
          { value: "o2", label: "Only a person's full legal name" },
          { value: "o3", label: "Only financial account numbers" },
          { value: "o4", label: "Information already published by the government" },
        ],
      },
    },
    {
      type: "question",
      question: {
        id: "m1-2-q2",
        title: "Which of these are valid lawful bases for processing? (select all that apply)",
        type: "multi-select",
        required: true,
        options: [
          { value: "b1", label: "Consent", correct: true },
          { value: "b2", label: "Contractual necessity", correct: true },
          { value: "b3", label: "Legitimate interest", correct: true },
          { value: "b4", label: "Personal curiosity" },
        ],
      },
    },
  ],
  "m3-2": [
    {
      type: "question",
      question: {
        id: "m3-2-q1",
        title: "When does data minimization apply?",
        type: "select",
        required: true,
        options: [
          { value: "a1", label: "Collect only the data needed for the stated purpose", correct: true },
          { value: "a2", label: "Collect as much as possible, just in case" },
          { value: "a3", label: "Only after a data breach" },
        ],
      },
    },
  ],
}

/**
 * Answer analytics per question: the % of learners who chose each option, plus
 * the share who answered the whole question correctly. Drives the per-answer
 * bars and the "Often missed" failure signal.
 */
const QUIZ_STATS: Record<
  string,
  { correctRate: number; options: Record<string, number> }
> = {
  "m1-2-q1": { correctRate: 34, options: { o1: 34, o2: 41, o3: 15, o4: 10 } },
  "m1-2-q2": { correctRate: 61, options: { b1: 88, b2: 76, b3: 64, b4: 12 } },
  "m3-2-q1": { correctRate: 82, options: { a1: 82, a2: 12, a3: 6 } },
}

// A question is critical when more than 60% of learners fail it
// (i.e. fewer than 40% answer it correctly). Same signal as the Content view.
const FAILURE_THRESHOLD = 40

function AnswerBar({ pct, tone }: { pct: number; tone: "correct" | "trap" | "neutral" }) {
  const fill =
    tone === "correct"
      ? "var(--f1-icon-positive, #1f9d6b)"
      : tone === "trap"
        ? "var(--f1-icon-warning, #e0a200)"
        : "var(--f1-icon-secondary, #9aa1ac)"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: 116, flexShrink: 0 }}>
      <div
        style={{
          flex: 1,
          height: 6,
          borderRadius: 999,
          background: "var(--f1-background-secondary, #eceef1)",
          overflow: "hidden",
        }}
      >
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 999, background: fill }} />
      </div>
      <span
        style={{
          width: 34,
          textAlign: "right",
          fontVariantNumeric: "tabular-nums",
          fontWeight: 400,
          fontSize: 13,
          color: "var(--f1-foreground-secondary, #6b7280)",
        }}
      >
        {pct}%
      </span>
    </div>
  )
}

/** Ring + centered %, mirroring f0's RadialProgressChart (an internal kit). */
function RadialPct({ pct, tone }: { pct: number; tone: "correct" | "trap" | "neutral" }) {
  const size = 46
  const stroke = 5
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c * (1 - Math.min(pct, 100) / 100)
  const color =
    tone === "correct"
      ? "var(--f1-icon-positive, #1f9d6b)"
      : tone === "trap"
        ? "var(--f1-icon-warning, #e0a200)"
        : "var(--f1-icon-secondary, #9aa1ac)"
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} stroke="var(--f1-background-secondary, #eceef1)" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          stroke={color}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontVariantNumeric: "tabular-nums",
          fontWeight: tone === "neutral" ? 400 : 600,
          color: tone === "neutral" ? "var(--f1-foreground-secondary, #6b7280)" : undefined,
        }}
      >
        {pct}%
      </span>
    </div>
  )
}

type QuizQuestion = {
  id: string
  title: string
  type?: string
  required?: boolean
  options: { value: string; label: string; correct?: boolean }[]
}

const inputReset: CSSProperties = {
  border: "none",
  outline: "none",
  background: "transparent",
  padding: 0,
  margin: 0,
  width: "100%",
  color: "inherit",
  fontFamily: "inherit",
}

/**
 * Editable quiz surface (this IS the edit mode) with the per-answer learner
 * distribution shown inline: title + options are editable, each option carries
 * its selection % bar, and the question is flagged when it is often missed.
 */
function QuizAnswerEditor({
  elements,
  onChange,
  resetOptions,
  resetQuestions,
}: {
  elements: SurveyFormBuilderElement[]
  onChange: (next: SurveyFormBuilderElement[]) => void
  resetOptions: Set<string>
  resetQuestions: Set<string>
}) {
  const setQuestion = (idx: number, mutate: (q: QuizQuestion) => QuizQuestion) =>
    onChange(
      elements.map((el, i) =>
        i === idx ? ({ ...el, question: mutate((el as { question: QuizQuestion }).question) } as SurveyFormBuilderElement) : el
      )
    )

  const dragRef = useRef<{ q: number; o: number } | null>(null)
  const moveOption = (qIdx: number, from: number, to: number) =>
    setQuestion(qIdx, (qq) => {
      const opts = [...qq.options]
      const [moved] = opts.splice(from, 1)
      opts.splice(to, 0, moved)
      return { ...qq, options: opts }
    })

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {elements.map((el, idx) => {
        if (el.type !== "question") return null
        const q = (el as { question: QuizQuestion }).question
        const stats = QUIZ_STATS[q.id]
        const questionHasData = !!stats && !resetQuestions.has(q.id)
        const correctOption = q.options.find((o) => o.correct)
        const correctPct =
          questionHasData && correctOption ? stats.options[correctOption.value] ?? 0 : 0
        const failing = questionHasData && stats.correctRate < FAILURE_THRESHOLD
        return (
          <div
            key={q.id || idx}
            style={{
              border: "1px solid rgba(0, 10, 30, 0.08)",
              borderRadius: 12,
              padding: 20,
              background: "var(--f1-background, #ffffff)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <input
                value={q.title}
                placeholder="Write the question"
                onChange={(e) => setQuestion(idx, (qq) => ({ ...qq, title: e.target.value }))}
                style={{ ...inputReset, fontSize: 17, fontWeight: 600 }}
              />
              {failing && <F0TagAlert level="warning" text="Often missed" />}
            </div>

            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {q.options.map((option, oIdx) => {
                const optHasData =
                  questionHasData &&
                  stats.options[option.value] !== undefined &&
                  !resetOptions.has(option.value)
                const pct = optHasData ? stats.options[option.value]! : 0
                const tone: "correct" | "trap" | "neutral" = !optHasData
                  ? "neutral"
                  : option.correct
                    ? "correct"
                    : pct > correctPct
                      ? "trap"
                      : "neutral"
                return (
                  <div
                    key={option.value || oIdx}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      const d = dragRef.current
                      if (d && d.q === idx && d.o !== oIdx) moveOption(idx, d.o, oIdx)
                      dragRef.current = null
                    }}
                  >
                    <div
                      draggable
                      onDragStart={() => {
                        dragRef.current = { q: idx, o: oIdx }
                      }}
                      title="Drag to reorder"
                      style={{ width: 16, marginTop: 3, display: "inline-flex", justifyContent: "center", cursor: "grab", flexShrink: 0, color: "var(--f1-icon-tertiary, #c3c8d0)" }}
                    >
                      <F0Icon icon={Handle} size="sm" />
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setQuestion(idx, (qq) => ({
                          ...qq,
                          options: qq.options.map((o, j) => (j === oIdx ? { ...o, correct: !o.correct } : o)),
                        }))
                      }
                      title={option.correct ? "Marked as correct" : "Mark as correct"}
                      style={{ ...inputReset, width: 18, marginTop: 2, display: "inline-flex", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                    >
                      {option.correct ? (
                        <F0Icon icon={CheckCircle} size="sm" color="positive" />
                      ) : (
                        <span
                          style={{
                            width: 11,
                            height: 11,
                            borderRadius: 999,
                            border: "1.5px solid var(--f1-icon-tertiary, #c3c8d0)",
                          }}
                        />
                      )}
                    </button>
                    <textarea
                      value={option.label}
                      placeholder="Answer option"
                      rows={1}
                      ref={(el) => {
                        if (el) {
                          el.style.height = "auto"
                          el.style.height = `${el.scrollHeight}px`
                        }
                      }}
                      onChange={(e) => {
                        e.target.style.height = "auto"
                        e.target.style.height = `${e.target.scrollHeight}px`
                        setQuestion(idx, (qq) => ({
                          ...qq,
                          options: qq.options.map((o, j) => (j === oIdx ? { ...o, label: e.target.value } : o)),
                        }))
                      }}
                      style={{ ...inputReset, flex: 1, minWidth: 0, resize: "none", overflow: "hidden", lineHeight: "1.45", fontWeight: option.correct ? 500 : 400 }}
                    />
                    {optHasData && (
                      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 10, paddingTop: 1 }}>
                        {option.correct && (
                          <span style={{ fontSize: 13, color: "var(--f1-foreground-positive, #1f9d6b)" }}>Correct</span>
                        )}
                        <span
                          style={{
                            fontSize: 13,
                            fontVariantNumeric: "tabular-nums",
                            minWidth: 32,
                            textAlign: "right",
                            color:
                              tone === "trap"
                                ? "var(--f1-foreground-warning, #b7791f)"
                                : "var(--f1-foreground-secondary, #6b7280)",
                          }}
                        >
                          {pct}%
                        </span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setQuestion(idx, (qq) => ({ ...qq, options: qq.options.filter((_, j) => j !== oIdx) }))
                      }
                      title="Remove option"
                      style={{ ...inputReset, width: 18, marginTop: 2, cursor: "pointer", color: "var(--f1-foreground-secondary, #9aa1ac)", flexShrink: 0 }}
                    >
                      <F0Icon icon={Delete} size="sm" />
                    </button>
                  </div>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                setQuestion(idx, (qq) => ({
                  ...qq,
                  options: [...qq.options, { value: `opt-${qq.options.length + 1}-${Math.round(Math.random() * 1e6)}`, label: "" }],
                }))
              }
              style={{
                ...inputReset,
                width: "auto",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 12,
                cursor: "pointer",
                color: "var(--f1-foreground-secondary, #6b7280)",
              }}
            >
              <F0Icon icon={Add} size="sm" />
              <span>Add option</span>
            </button>

            {questionHasData && (
              <div style={{ marginTop: 16 }}>
                <F0Text content="Share of learners who chose each answer" variant="description" />
              </div>
            )}
          </div>
        )
      })}
    </F0Box>
  )
}

function CourseContentBuilder({
  course,
  initialItemId,
  onBack,
}: {
  course: ExactCourse
  initialItemId?: string
  onBack: () => void
}) {
  const [selectedId, setSelectedId] = useState<string>(initialItemId ?? CONTENT_ROWS[0]?.id ?? "")
  const [quizState, setQuizState] =
    useState<Record<string, SurveyFormBuilderElement[]>>(QUIZ_QUESTIONS)
  // Last saved baseline + which answers/questions have had their metrics reset
  // (because their wording was edited). Drives the "No responses yet" state.
  const [savedState, setSavedState] =
    useState<Record<string, SurveyFormBuilderElement[]>>(QUIZ_QUESTIONS)
  const [resetOptions, setResetOptions] = useState<Set<string>>(() => new Set())
  const [resetQuestions, setResetQuestions] = useState<Set<string>>(() => new Set())
  const [confirmSaveOpen, setConfirmSaveOpen] = useState(false)

  const dirty = JSON.stringify(quizState) !== JSON.stringify(savedState)

  // Edited text on answers/questions that still hold learner data → these are
  // what a Save would reset (and what triggers the confirmation dialog).
  const editedWithData = (() => {
    const opts = new Set<string>()
    const ques = new Set<string>()
    for (const qid of Object.keys(quizState)) {
      const cur = quizState[qid] ?? []
      const sav = savedState[qid] ?? []
      cur.forEach((el, i) => {
        if ((el as { type?: string }).type !== "question") return
        const q = (el as { question: QuizQuestion }).question
        const sq = (sav[i] as { question?: QuizQuestion } | undefined)?.question
        if (!sq || !QUIZ_STATS[q.id]) return
        if (q.title !== sq.title && !resetQuestions.has(q.id)) ques.add(q.id)
        q.options.forEach((o) => {
          const so = sq.options.find((x) => x.value === o.value)
          if (
            so &&
            o.label !== so.label &&
            QUIZ_STATS[q.id]?.options[o.value] !== undefined &&
            !resetOptions.has(o.value)
          )
            opts.add(o.value)
        })
      })
    }
    return { opts: [...opts], ques: [...ques] }
  })()
  const saveWouldReset = editedWithData.opts.length > 0 || editedWithData.ques.length > 0

  const commitSave = (applyReset: boolean) => {
    if (applyReset) {
      setResetOptions((prev) => new Set([...prev, ...editedWithData.opts]))
      setResetQuestions((prev) => new Set([...prev, ...editedWithData.ques]))
    }
    setSavedState(quizState)
    setConfirmSaveOpen(false)
  }
  const handleSaveClick = () => (saveWouldReset ? setConfirmSaveOpen(true) : commitSave(false))
  const handleDiscard = () => setQuizState(savedState)

  const tocItems = CONTENT_MODULES.map((module) => ({
    id: module.id,
    label: module.title,
    onClick: () => setSelectedId(module.items[0]?.id ?? module.id),
    children: module.items.map((item) => ({
      id: item.id,
      label: `${item.type}: ${item.name}`,
      icon: TYPE_ICON[item.type],
      onClick: () => setSelectedId(item.id),
    })),
  }))

  const selected = CONTENT_ROWS.find((row) => row.id === selectedId)

  const BORDER = "1px solid rgba(0, 10, 30, 0.08)"

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: routes.courses },
              { id: course.id, label: course.name, href: `/p/${SLUG}?view=detail&course=${course.id}` },
              { id: "content", label: "Course content" },
            ]}
            actions={[
              { label: "Discover Training", icon: Sparkles, onClick: () => {} },
              { label: "Settings", icon: Settings, onClick: () => {} },
              { label: "Open dashboard", icon: Sliders, onClick: () => {} },
            ]}
          />
          <ResourceHeader title={course.name} />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Text
            variant="body"
            content={selected ? `Editing: ${selected.name}` : "Select a block to edit"}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

/** Completion configuration: the cloned settings screen plus the save dialog
 *  that asks what to do with people already graded. Rebuilt after a bad
 *  scripted edit destroyed this region — the surrounding screens (course
 *  detail, group detail, learner views) are still missing and need /rewind. */
function CompletionSettingsScreen() {
  const [searchParams] = useSearchParams()
  const [section, setSection] = useState<SettingsSection>(
    (searchParams.get("sec") as SettingsSection) || "completion"
  )
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [savedToast, setSavedToast] = useState<string | null>(null)
  const [pendingSaved, setPendingSaved] = useState(false)

  // Snapshot taken when Save is pressed: reading the draft during render gives
  // stale values, because the settings state lives inside the cloned section and
  // publishes it after the parent renders.
  const [snapshot, setSnapshot] = useState<Criteria>({ ...COMPLETION_BASELINE })
  const [changes, setChanges] = useState<CompletionChange[]>([])
  const affectedGroups: AffectedGroup[] = buildBaseGroups(snapshot)
  const chosen = affectedGroups.filter((g) => selectedIds.includes(g.id))
  const totalFail = affectedGroups.reduce((a, g) => a + g.wouldFail, 0)
  const wouldFail = chosen.reduce((a, g) => a + g.wouldFail, 0)
  // A group is in the dialog if the change moves anyone in it, in either
  // direction: tightening takes the completion away, loosening hands it out.
  const AFFECTED = affectedGroups.filter((group) => group.wouldFail + group.wouldPass > 0)
  const totalChanges = AFFECTED.reduce((a, g) => a + g.wouldFail + g.wouldPass, 0)
  const wouldPass = chosen.reduce((a, g) => a + g.wouldPass, 0)

  // Variant B (?v=b): the simplified dialog. Knowing who WOULD change means
  // evaluating every person against the old and the new conditions, which is the
  // expensive part; so B only shows what is already in each membership — how many
  // are Completed and how many are in progress.
  const variantB = searchParams.get("v") === "b"
  const REACHED = affectedGroups.filter((g) => g.completed > 0 || g.pending > 0)

  const save = () => {
    setConfirmOpen(false)
    setPendingSaved(true)
    setSavedToast(
      wouldFail === 0
        ? "Settings saved. Nobody who already passed was affected."
        : `Settings saved. ${wouldFail} people no longer pass.`
    )
  }

  return (
    <Page
      header={
        <PageHeader
          module={moduleInfo}
          breadcrumbs={[
            {
              id: "course",
              label: "Fundamentos de la gestión de calidad con ISO 9001",
              href: `/p/${SLUG}?view=detail&course=7`,
            },
            { id: "label", label: "Course settings" },
          ]}
          actions={[{ label: "Back", icon: ArrowLeft, onClick: () => {} }]}
        />
      }
    >
      <CourseSettingsLayout
        saved={pendingSaved}
        active={section}
        onSelect={(id) => setSection(id as SettingsSection)}
        onSave={() => {
          setPendingSaved(true)
          setSavedToast("Settings saved.")
          // Only ask when the change actually reaches people already judged.
          const nextChanges = changedCriteria()
          const nextSnapshot: Criteria = { ...completionDraft }
          // Either direction counts: a change that only loosens used to save in
          // silence, handing out completions with no dialog at all.
          const affectedNow = buildBaseGroups(nextSnapshot).reduce(
            (a, g) => a + g.wouldFail + g.wouldPass,
            0
          )
          setSnapshot(nextSnapshot)
          setChanges(nextChanges)
          // B does not know the impact, so it asks whenever the change reaches a
          // group that has anybody completed or in progress.
          const reachesSomeone = variantB
            ? buildBaseGroups(nextSnapshot).some((g) => g.completed > 0 || g.pending > 0)
            : affectedNow > 0
          if (section === "completion" && nextChanges.length > 0 && reachesSomeone) {
            setPendingSaved(false)
            setSavedToast(null)
            setConfirmOpen(true)
          }
        }}
      >
        <F0Box display="flex" flexDirection="column" gap="lg">
          {savedToast && <F0Alert variant="positive" title={savedToast} description="" />}
          <SettingsSectionPage section={section} />
        </F0Box>
      </CourseSettingsLayout>

      {/* Variant B (?v=b): asks the same question with what is cheap to know —
          which groups the change reaches, and how many people in them are already
          completed or still in progress. No impact figures anywhere. */}
      {variantB && (
        <F0Dialog
          isOpen={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          title={`${REACHED.length} ${REACHED.length === 1 ? "group has" : "groups have"} people who already completed this course or are working on it`}
          description="Do you want the new completion conditions applied to them?"
          width="lg"
          primaryAction={{ label: "Save changes", onClick: save }}
          secondaryAction={{ label: "Cancel", onClick: () => setConfirmOpen(false) }}
        >
          <ReachedGroupsTable
            groups={REACHED}
            selectedIds={selectedIds}
            onSelectedIdsChange={setSelectedIds}
          />
        </F0Dialog>
      )}

      {/* One coloured element carries the attention (the alert), the editions are
          a short list of only those that actually change, and the decision is the
          button. No KPI — a threshold is a setting, not a measurement — and no
          repeated figures. */}
      {!variantB && (
      <F0Dialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        // The title carries the total impact, which can now go both ways: naming
        // only the people already completed was false for a change that loosens.
        // "conditions" is the word the settings screen itself uses.
        title={`Applying the new conditions changes ${totalChanges} ${totalChanges === 1 ? "person" : "people"} in this course`}
        description="Choose the groups where they should apply to the people already in them."
        width="xl"
        primaryAction={{
          label: "Save changes",
          onClick: save,
        }}
        secondaryAction={{ label: "Cancel", onClick: () => setConfirmOpen(false) }}
      >
        <F0Box display="flex" flexDirection="column" gap="md">
          {/* The action IS the control: per edition you pick which minimum governs
              it (50 or 70). Segmented control from the catalog — story
              F0ButtonToggleGroup/Single, `required` so it can never be empty.
              No grey sentence explaining what the checkbox meant. */}
          <AffectedEditionsTable
            // Remount when the criteria change: the children of an expanded group
            // are cached, so without this the rows keep the previous save's people.
            key={JSON.stringify(snapshot)}
            groups={AFFECTED}
            criteria={snapshot}
            selectedIds={selectedIds}
            onSelectedIdsChange={setSelectedIds}
          />

          {/* The title gives the total on the table; this gives the effect of what
              you have actually ticked, which is what you are about to sign. */}
          {chosen.length > 0 && (wouldFail > 0 || wouldPass > 0) && (
            <F0Alert
              // Warning only while something is taken away: a save that only hands
              // the completion out has nothing to warn about.
              variant={wouldFail > 0 ? "warning" : "positive"}
              title={
                [
                  wouldFail > 0 &&
                    `${wouldFail} ${wouldFail === 1 ? "person stops" : "people stop"} being marked as completed`,
                  wouldPass > 0 &&
                    `${wouldPass} ${wouldPass === 1 ? "person becomes" : "people become"} completed`,
                ]
                  .filter(Boolean)
                  .join(" · ") as string
              }
              description=""
            />
          )}
        </F0Box>
      </F0Dialog>
      )}
    </Page>
  )
}

const myTrainingModuleInfo = {
  id: "my_trainings" as const,
  name: "My training",
  href: `/p/${SLUG}?view=learner-course`,
}

/** Learner course detail — Course content tab with modules + Evaluations (mobile parity). */
function LearnerCourseScreen() {
  const [searchParams] = useSearchParams()
  const allDone = searchParams.get("done") === "1"
  const learnerStatus: Record<string, "Completed" | "Pending"> = {
    "m1-1": "Completed",
    "m1-2": "Completed",
    "m2-1": "Completed",
    "m3-1": allDone ? "Completed" : "Pending",
    "m3-2": allDone ? "Completed" : "Pending",
  }

  const contentSource = useDataCollectionSource<ContentRow>(
    {
      grouping: {
        hideSelector: true,
        collapsible: true,
        mandatory: true,
        defaultOpenGroups: true,
        groupBy: {
          moduleRef: {
            name: "Module",
            label: (ref: string) => MODULE_TITLE[ref] ?? ref,
            itemCount: (ref: string) => MODULE_COUNT[ref] ?? 0,
          },
        },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 50,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords(CONTENT_ROWS, pagination, 50),
      },
    },
    []
  )

  // ?ev= controls how a SCHEDULED (not yet materialized) evaluation shows up:
  //   hidden    not listed at all (only what already exists)
  //   info      listed, read-only, with its opening date
  //   clickable listed and takeable now (materialize-on-click)
  const evVariant = searchParams.get("ev") ?? "hidden"
  const evaluations =
    evVariant === "hidden" ? LEARNER_EVALUATIONS : [...LEARNER_EVALUATIONS, ...SCHEDULED_EVALUATIONS]

  const evaluationsSource = useDataCollectionSource<LearnerEvaluation>(
    {
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords(evaluations, pagination, 10),
      },
      itemUrl: (evaluation) =>
        SCHEDULED_IDS.has(evaluation.id) && evVariant === "info"
          ? undefined
          : `/p/${SLUG}?view=survey-answer&survey=${evaluation.id.replace("-2", "-1")}`,
    },
    [evVariant]
  )

  const learnerTabs = [
    { id: "overview", label: "Overview", onClick: () => {} },
    { id: "content", label: "Course content", onClick: () => {} },
    { id: "materials", label: "Materials", onClick: () => {} },
    { id: "sessions", label: "Sessions", onClick: () => {} },
    { id: "certificates", label: "Certificates", onClick: () => {} },
  ]

  return (
    <Page
      header={
        <>
          <PageHeader
            module={myTrainingModuleInfo}
            breadcrumbs={[
              { id: "my-courses", label: "My courses", href: routes.myCourses },
              { id: "course", label: "Fundamentos de la gestión de calidad con ISO 9001" },
            ]}
          />
          <ResourceHeader
            title="Fundamentos de la gestión de calidad con ISO 9001"
            status={
              allDone
                ? { label: "Status", text: "Completed", variant: "positive" }
                : { label: "Status", text: "Ongoing", variant: "info" }
            }
            primaryAction={{ label: allDone ? "Review course" : "Resume course", onClick: () => {} }}
          />
          <Tabs key="content" tabs={learnerTabs} activeTabId="content" />
        </>
      }
    >
      <StandardLayout>
        <NotificationsLayer />
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0BoxWithClassName className="px-12 flex flex-col gap-4">
          <F0Heading content="Modules" variant="heading" as="h2" />
          <OneDataCollection
            id={`${SLUG}/learner-content/v1`}
            storage={false}
            source={contentSource}
            visualizations={[
              {
                type: "list",
                options: {
                  itemDefinition: (item: ContentRow) => ({
                    title: item.name,
                    description: [item.type],
                    avatar: { type: "icon" as const, icon: TYPE_ICON[item.type] },
                  }),
                  fields: [
                    {
                      label: "Status",
                      render: (item: ContentRow) => ({
                        type: "status" as const,
                        value:
                          learnerStatus[item.id] === "Completed"
                            ? { status: "positive" as const, label: "Completed" }
                            : { status: "neutral" as const, label: "Pending" },
                      }),
                    },
                  ],
                },
              },
            ]}
          />
          </F0BoxWithClassName>

          <F0BoxWithClassName className="px-12 flex flex-col gap-4">
            <F0Heading content="Evaluations" variant="heading" as="h2" />
            <div style={{ position: "relative" }}>
            <OneDataCollection
              id={`${SLUG}/learner-evaluations/v1`}
              storage={false}
              source={evaluationsSource}
              visualizations={[
                {
                  type: "list",
                  options: {
                    itemDefinition: (evaluation: LearnerEvaluation) => ({
                      title: evaluation.name,
                      description: [`${evaluation.minutes} mins · ${evaluation.questions} questions`],
                      avatar: { type: "icon" as const, icon: evaluation.kind === "Knowledge test" ? Question : Envelope },
                    }),
                    fields: [
                      {
                        label: "Required",
                        render: (evaluation: LearnerEvaluation) =>
                          evaluation.required
                            ? { type: "alertTag" as const, value: { level: "warning" as const, label: "Required" } }
                            : { type: "text" as const, value: "" },
                      },
                      {
                        label: "Status",
                        render: (evaluation: LearnerEvaluation) =>
                          evaluation.opensAt
                            ? {
                                type: "tag" as const,
                                value: { label: evaluation.opensAt, icon: CalendarArrowRight },
                              }
                            : evaluation.status === "Passed"
                              ? { type: "status" as const, value: { status: "positive" as const, label: "Passed" } }
                              : evaluation.status === "Failed"
                                ? { type: "status" as const, value: { status: "critical" as const, label: "Failed" } }
                                : evaluation.status === "Completed"
                                  ? { type: "status" as const, value: { status: "positive" as const, label: "Completed" } }
                                  : { type: "status" as const, value: { status: "neutral" as const, label: "Not started" } },
                      },
                    ],
                  },
                },
              ]}
            />
            </div>
          </F0BoxWithClassName>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

/** Survey answering — clone of the real fullscreen answer overlay (forms.answerForm). */
const SURVEY_COPY: Record<string, { description: string; section?: string }> = {
  "kt-1": { description: "Assess your knowledge of the course content." },
  "sat-1": { description: "Assess participants' satisfaction with the course taken.", section: "Overall satisfaction" },
  "eff-1": { description: "Assess the impact of the training on the participant's performance.", section: "Overall effectiveness" },
  "eff-2": { description: "Assess the impact of the training on the participant's performance.", section: "Overall effectiveness" },
  "eff-3": { description: "Assess the impact of the training on the participant's performance.", section: "Overall effectiveness" },
}

function SurveyAnswerScreen({
  surveyId,
  onBack,
}: {
  surveyId: string
  onBack: (view: "learner-course" | "team-evals") => void
}) {
  const meta = SURVEY_META[surveyId] ?? SURVEY_META["kt-1"]
  const copy = SURVEY_COPY[surveyId] ?? SURVEY_COPY["kt-1"]
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const done = !!meta.completed

  const questions = meta.elements.flatMap((el: any) =>
    el.type === "question"
      ? [
          {
            id: el.question.id,
            title: el.question.title,
            options: (
              (el.question as { options?: { value: string; label: string }[] }).options ?? []
            ).map((option: any) => ({ value: option.value, label: option.label })),
          },
        ]
      : []
  )

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "var(--f1-background, #ffffff)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderBottom: "1px solid rgba(0, 10, 30, 0.08)",
          flexShrink: 0,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 500 }}>
          <span style={{ width: 26, height: 26, borderRadius: 8, background: "#e51943", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ width: 12, height: 12, borderRadius: 4, background: "#ffffff" }} />
          </span>
          Training
        </span>
        <button
          type="button"
          title="Close"
          onClick={() => onBack(meta.backView)}
          style={{ ...inputReset, width: "auto", cursor: "pointer", padding: 8 }}
        >
          <F0Icon icon={Cross} size="md" />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "88px 24px 48px", display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <F0Heading content={meta.title} variant="heading-large" as="h1" />
            <F0Text content={copy.description} variant="description" />
          </div>

          {copy.section && (
            <span style={{ fontWeight: 600, fontSize: 16, marginTop: 8 }}>{copy.section}</span>
          )}

          {questions.map((question: any) => (
            <div
              key={question.id}
              style={{ border: "1px solid rgba(0, 10, 30, 0.1)", borderRadius: 12, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 14 }}
            >
              <span style={{ fontWeight: 600, fontSize: 15 }}>
                {question.title} <span style={{ color: "#e51943" }}>*</span>
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {question.options.map((option: any) => {
                  const selected = answers[question.id] === option.value
                  return (
                    <button
                      key={option.value}
                      type="button"
                      disabled={done}
                      onClick={() =>
                        setAnswers((current) => ({ ...current, [question.id]: option.value }))
                      }
                      style={{
                        ...inputReset,
                        width: "auto",
                        flex: "1 1 0",
                        minWidth: 96,
                        cursor: done ? "default" : "pointer",
                        padding: "10px 16px",
                        borderRadius: 10,
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: selected ? 600 : 400,
                        border: selected
                          ? "2px solid #0d1424"
                          : "1px solid rgba(0, 10, 30, 0.15)",
                        background: selected ? "var(--f1-background-secondary, #f5f6f8)" : "transparent",
                        opacity: done ? 0.6 : 1,
                      }}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0, 10, 30, 0.08)",
          padding: "12px 24px",
          display: "flex",
          justifyContent: "flex-end",
          flexShrink: 0,
        }}
      >
        <F0Button
          label={done ? "Close" : "Submit"}
          onClick={() => onBack(meta.backView)}
        />
      </div>
    </div>
  )
}

/** Manager-only surface: what "My surveys" becomes — effectiveness pending + history. */
function TeamEvaluationsScreen() {
  const source = useDataCollectionSource<TeamEvaluationRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const rows = TEAM_EVALUATIONS.filter(
            (row) =>
              term === "" ||
              row.participant.toLowerCase().includes(term) ||
              row.course.toLowerCase().includes(term)
          )
          return paginateRecords(rows, pagination, 20)
        },
      },
      itemUrl: (row) => `/p/${SLUG}?view=survey-answer&survey=${row.id}`,
      totalItemSummary: (total: number) => `${total} evaluations`,
    },
    []
  )

  const myTrainingTabs = [
    { id: "my-courses", label: "My courses", onClick: () => {} },
    { id: "catalogue", label: "Catalogue", onClick: () => {} },
    { id: "requests", label: "My training requests", onClick: () => {} },
  ]

  return (
    <Page
      header={
        <>
          <PageHeader
            module={myTrainingModuleInfo}
          />
          <Tabs key="team-evals" tabs={myTrainingTabs} activeTabId="team-evals" />
        </>
      }
    >
      <StandardLayout>
        <NotificationsLayer />
        <F0Box display="flex" flexDirection="column" gap="lg">
          <F0Text
            content="Effectiveness surveys assigned to you about your team members. This tab only appears when you have at least one."
            variant="description"
          />
          <OneDataCollection
            id={`${SLUG}/team-evaluations/v1`}
            storage={false}
            source={source}
            visualizations={[
              {
                type: "table",
                options: {
                  columns: [
                    { id: "survey", label: "Survey", render: (row: TeamEvaluationRow) => row.survey },
                    {
                      id: "status",
                      label: "Status",
                      render: (row: TeamEvaluationRow) => ({
                        type: "status" as const,
                        value:
                          row.status === "Completed"
                            ? { status: "positive" as const, label: "Completed" }
                            : { status: "warning" as const, label: "Pending" },
                      }),
                    },
                    { id: "participant", label: "Participant", render: (row: TeamEvaluationRow) => personValue(row.participant) },
                    { id: "course", label: "Course", render: (row: TeamEvaluationRow) => row.course },
                    { id: "assigned", label: "Assigned date", render: (row: TeamEvaluationRow) => row.assigned },
                  ],
                },
              },
            ]}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function FeedbackBanner({ toast }: { toast: Exclude<ToastId, null> }) {
  const message = {
    copied: "Link copied, matching the production copy-link action.",
    draft: "Course state changed locally for the prototype.",
    export: "Export prepared locally. Production stays on the export route.",
    template: "Template download started locally.",
    settings: "Training settings changed locally for this prototype.",
    "free-course": "Free AI Act course opened locally from the Training catalog.",
  }[toast]

  return (
    <F0Box
      display="flex"
      alignItems="center"
      gap="md"
      padding="lg"
      border="default"
      borderColor="info"
      borderRadius="lg"
      background="info"
    >
      <F0Icon icon={CheckCircle} color="info" />
      <F0Text content={message} variant="body" />
    </F0Box>
  )
}

function getValidParam(value: string | null, validValues: Set<string>, fallback: string) {
  return value && validValues.has(value) ? value : fallback
}

function getView(value: string | null): ViewId {
  return value && VALID_VIEWS.has(value) ? (value as ViewId) : "list"
}

function uniqueOptions(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).map((value) => ({
    value,
    label: value,
  }))
}

function filterValues(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []
}

function matchArray(value: unknown, expected: string) {
  const values = filterValues(value)
  return values.length === 0 ? true : values.includes(expected)
}

function matchAny(value: unknown, expected: string[]) {
  const values = filterValues(value)
  return values.length === 0
    ? true
    : expected.some((item) => values.includes(item))
}

function matchParticipant(value: unknown, course: ExactCourse) {
  const values = filterValues(value)
  if (values.length === 0) return true
  if (values.includes("has-participants") && course.participants > 0) return true
  if (values.includes("empty") && course.participants === 0) return true
  return false
}

function matchRetake(value: unknown, course: ExactCourse) {
  const values = filterValues(value)
  if (values.length === 0) return true
  if (values.includes("expired") && course.validityExpired > 0) return true
  if (values.includes("valid") && course.validityExpired === 0) return true
  return false
}

function paginateRecords<T>(
  records: T[],
  pagination: FetchOptions["pagination"],
  defaultPerPage: number
) {
  const perPage = pagination?.perPage ?? defaultPerPage
  const currentPage = pagination?.currentPage ?? 1
  const total = records.length
  const pagesCount = Math.max(1, Math.ceil(total / perPage))
  const start = (currentPage - 1) * perPage

  return {
    type: "pages" as const,
    records: records.slice(start, start + perPage),
    total,
    perPage,
    currentPage,
    pagesCount,
  }
}

function surveyTypeLabel(type: SurveyTemplateRow["formType"]) {
  if (type === "satisfaction") return "Satisfaction"
  if (type === "effectiveness") return "Effectiveness"
  return "Knowledge"
}

function surveyTypeColor(type: SurveyTemplateRow["formType"]) {
  if (type === "satisfaction") return "yellow"
  if (type === "effectiveness") return "malibu"
  return "purple"
}

function personValue(fullName: string) {
  const [firstName = fullName, ...lastNameParts] = fullName.split(" ")
  return {
    type: "person" as const,
    value: {
      firstName,
      lastName: lastNameParts.join(" "),
    },
  }
}

function participantsValue(participants: string[]) {
  if (participants.length === 0) return { type: "text" as const, value: "-" }
  return {
    type: "avatarList" as const,
    value: {
      type: "person" as const,
      avatarList: participants.map((participant) => {
        const [firstName = participant, ...lastNameParts] = participant.split(" ")
        return {
          firstName,
          lastName: lastNameParts.join(" "),
        }
      }),
      max: 3,
    },
  }
}

function uniqueNames(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)))
}

function requestStatusValue(status: RequestRow["status"]) {
  if (status === "approved") return { label: "Approved", status: "positive" as const }
  if (status === "rejected") return { label: "Rejected", status: "critical" as const }
  return { label: "Pending review", status: "warning" as const }
}

function attendanceStatusValue(status: SessionAttendanceRow["attendance"]) {
  if (status === "Attended") return { label: "Attended", status: "positive" as const }
  if (status === "Not attended") return { label: "Not attended", status: "critical" as const }
  return { label: "Pending", status: "warning" as const }
}

function budgetFinancialStatusValue(budget: BudgetRow) {
  if (budget.totalBudget > 0 && budget.availableBudget < 0) return { label: "Over budget", color: "radical" }
  if (budget.totalBudget > 0 && budget.availableBudget / budget.totalBudget <= 0.2) return { label: "Budget risk", color: "yellow" }
  return { label: "Within budget", color: "viridian" }
}

function budgetResourceStatus(budget: BudgetRow) {
  const status = budgetFinancialStatusValue(budget)
  if (status.label === "Over budget") return { label: status.label, text: status.label, variant: "critical" as const }
  if (status.label === "Budget risk") return { label: status.label, text: status.label, variant: "warning" as const }
  return { label: status.label, text: status.label, variant: "positive" as const }
}

function budgetGroupStatusValue(status: BudgetMovementRow["groupStatus"]) {
  if (status === "planned") return { label: "Planned", status: "neutral" as const }
  if (status === "ongoing") return { label: "Ongoing", status: "info" as const }
  return { label: "Finished", status: "positive" as const }
}

function budgetPaymentStatusValue(status: BudgetMovementRow["paymentStatus"]) {
  if (status === "paid") return { label: "Paid", status: "positive" as const }
  return { label: "Pending", status: "warning" as const }
}

function budgetProgressValue(budget: BudgetRow) {
  const usedBudget = Math.max(0, budget.totalBudget - budget.availableBudget)
  const progressValue = budget.totalBudget > 0 ? (usedBudget / budget.totalBudget) * 100 : 0
  return {
    type: "progressBar" as const,
    value: {
      value: Math.min(progressValue, 100),
      max: 100,
      label: `${Math.round(progressValue)}% allocated`,
    },
  }
}

function formatCurrency(value: number) {
  const sign = value < 0 ? "-" : ""
  const absoluteValue = Math.abs(value)
  const hasDecimals = !Number.isInteger(absoluteValue)
  return `${sign}€${absoluteValue.toLocaleString("en-US", {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  })}`
}

function parseCurrencyValue(value: string) {
  const parsed = Number(value.replace(/[^0-9.-]/g, ""))
  return Number.isFinite(parsed) ? parsed : 0
}


/* ---------------------------------------------------------------------------
   Screens lost to a bad scripted edit (2.900 lines). Stubbed so the prototype
   runs and the completion-settings work is usable; restore with /rewind.
   --------------------------------------------------------------------------- */


function CourseDocumentsTab({ onOpenDialog }: { onOpenDialog: (dialog: CourseActionDialogId) => void }) {
  const source = useDataCollectionSource<CourseResourceRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords([], pagination, 20),
      },
      primaryActions: () => ({ label: "Upload", icon: Upload, onClick: () => onOpenDialog("upload-course-document") }),
    },
    [onOpenDialog]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="3xl">
      <F0BoxWithClassName display="flex" flexDirection="column" gap="xs" style={{ maxWidth: 640 }}>
        <F0Heading content="Course documents" variant="heading" as="h2" />
        <F0Text content="Internal files for this course (e.g., attendance sheets, training records, or compliance documents). These are only visible to training managers and admins." variant="description" />
      </F0BoxWithClassName>
      <OneDataCollection
        id={`${SLUG}/course-documents/v1`}
        storage={false}
        source={source}
        emptyStates={{
          "no-data": {
            emoji: "📄",
            title: "No documents yet",
            description: "Add any course-related documents you want to store here. Participants won’t see them.",
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Name", render: (resource: CourseResourceRow) => resource.name },
                { id: "type", label: "Type", render: (resource: CourseResourceRow) => resource.type },
                { id: "updatedAt", label: "Updated", render: (resource: CourseResourceRow) => resource.updatedAt },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function CourseGroupsTab({
  course,
  onOpenDialog,
  onOpenClassWizard,
}: {
  course: ExactCourse
  onOpenDialog: (dialog: CourseActionDialogId) => void
  onOpenClassWizard: () => void
}) {
  const groups: TrainingGroupRow[] = course.groups.map((group, index) => ({
    id: `${course.id}-${index}`,
    name: group,
    startDate: index === 0 ? "1 Jan 2025" : "1 Nov 2025",
    endDate: index === 0 ? "31 Jan 2025" : "30 Nov 2025",
    sessions: 1,
    participants: index === 0 ? ["Laura Martinez", "Marc Vidal", "Ana Ruiz"] : ["Hellen Howard", "Nora Perez"],
    completionRate: 100,
  }))
  const source = useDataCollectionSource<TrainingGroupRow>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        name: { label: "Training group" },
        startDate: { label: "Start date" },
        endDate: { label: "End date" },
        completionRate: { label: "Group completion rate" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = groups.filter((group) => term === "" || group.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings ?? [], (group, field) => {
            if (field === "name") return group.name.toLowerCase()
            if (field === "startDate") return Date.parse(group.startDate)
            if (field === "endDate") return Date.parse(group.endDate)
            if (field === "completionRate") return group.completionRate
            return null
          })
          return paginateRecords(sorted, pagination, 20)
        },
      },
      primaryActions: () => ({ label: "New training group", icon: Add, onClick: onOpenClassWizard }),
      itemUrl: (group) => `/p/${SLUG}?view=group-detail&course=${course.id}&group=${encodeURIComponent(group.name)}`,
      itemActions: () => [
        { label: "Delete", icon: Delete, onClick: () => onOpenDialog("delete-training-group"), critical: true },
      ],
      totalItemSummary: (total: number) => `${total} training groups`,
    },
    [groups, course.id, onOpenDialog, onOpenClassWizard]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/course-groups/v1`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "name", label: "Training group", sorting: "name", render: (group: TrainingGroupRow) => ({ type: "text" as const, value: group.name }) },
              { id: "startDate", label: "Start date", sorting: "startDate", render: (group: TrainingGroupRow) => group.startDate },
              { id: "endDate", label: "End date", sorting: "endDate", render: (group: TrainingGroupRow) => group.endDate },
              { id: "sessions", label: "Sessions", render: (group: TrainingGroupRow) => group.sessions },
              { id: "participants", label: "Participants", render: (group: TrainingGroupRow) => participantsValue(group.participants) },
              { id: "completionRate", label: "Group completion rate", sorting: "completionRate", render: (group: TrainingGroupRow) => `${group.completionRate}%` },
            ],
            allowColumnReordering: true,
            allowColumnHiding: true,
          },
        },
      ]}
    />
  )
}

function CourseMaterialsTab({ onOpenDialog }: { onOpenDialog: (dialog: CourseActionDialogId) => void }) {
  const source = useDataCollectionSource<CourseResourceRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords([], pagination, 20),
      },
      primaryActions: () => [
        { label: "Upload", icon: Upload, onClick: () => onOpenDialog("upload-course-material") },
      ],
      secondaryActions: { expanded: 1, actions: () => [{ label: "Embed link", icon: Link, onClick: () => onOpenDialog("embed-course-material") }] },
    },
    [onOpenDialog]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="3xl">
      <F0BoxWithClassName display="flex" flexDirection="column" gap="xs" style={{ maxWidth: 640 }}>
        <F0Heading content="Course materials" variant="heading" as="h2" />
        <F0Text content="Files or links shared with participants (e.g., syllabus, slides, readings, and other helpful resources)." variant="description" />
      </F0BoxWithClassName>
      <OneDataCollection
        id={`${SLUG}/course-materials/v1`}
        storage={false}
        source={source}
        emptyStates={{
          "no-data": {
            emoji: "📄",
            title: "No course materials yet",
            description: "Upload files or embed links you want to share with participants.",
          },
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Name", render: (resource: CourseResourceRow) => resource.name },
                { id: "type", label: "Type", render: (resource: CourseResourceRow) => resource.type },
                { id: "updatedAt", label: "Updated", render: (resource: CourseResourceRow) => resource.updatedAt },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function CourseParticipantsTab() {
  const source = useDataCollectionSource<CourseParticipantRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "Ongoing", label: "Ongoing" },
              { value: "Completed", label: "Completed" },
            ],
          },
        },
      },
      sortings: {
        name: { label: "Participant" },
        status: { label: "Status" },
        completionDate: { label: "Completion date" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = courseParticipants
            .filter((participant) => matchArray(filters?.status, participant.status))
            .filter((participant) => term === "" || participant.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings, (participant, field) => {
            if (field === "name") return participant.name.toLowerCase()
            if (field === "status") return participant.status
            if (field === "completionDate") return participant.completionDate
            return null
          })
          return paginateRecords(sorted, pagination, 25)
        },
      },
      selectable: (participant) => participant.id,
      totalItemSummary: (total: number) => `${total} participants`,
    },
    []
  )

  return (
    <OneDataCollection
      id={`${SLUG}/course-participants/v1`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "participant", label: "Participant", sorting: "name", render: (participant: CourseParticipantRow) => personValue(participant.name) },
              { id: "status", label: "Status", sorting: "status", render: (participant: CourseParticipantRow) => ({ type: "status" as const, value: { status: "info", label: participant.status } }) },
              { id: "certificate", label: "Certificate", render: (participant: CourseParticipantRow) => participant.certificate },
              { id: "completionDate", label: "Completion date", sorting: "completionDate", render: (participant: CourseParticipantRow) => participant.completionDate },
              { id: "courseValidity", label: "Course validity", render: (participant: CourseParticipantRow) => participant.courseValidity },
              { id: "sessionAttendance", label: "Session attendance", render: (participant: CourseParticipantRow) => participant.sessionAttendance },
              { id: "knowledgeTestResults", label: "Knowledge test results", render: (participant: CourseParticipantRow) => participant.knowledgeTestResults },
              { id: "moduleProgress", label: "Module progress", render: (participant: CourseParticipantRow) => participant.moduleProgress },
            ],
            allowColumnReordering: true,
            allowColumnHiding: true,
          },
        },
      ]}
    />
  )
}

function CourseSurveysTab({ onOpenDialog }: { onOpenDialog: (dialog: CourseActionDialogId) => void }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" justifyContent="end">
        <F0Button label="Add survey" icon={Add} onClick={() => onOpenDialog("add-course-survey")} />
      </F0Box>
      <F0Box display="grid" columns="1" md={{ columns: "3" }} gap="lg">
        <MetricCard title="Satisfaction survey" value="Draft" description="Survey template attached" />
        <MetricCard title="Effectiveness survey" value="-" description="No survey attached" />
        <MetricCard title="Knowledge test" value="Published" description="Required for completion" />
      </F0Box>
    </F0Box>
  )
}

function DiscoverTrainingScreen({ onBack }: { onBack: () => void }) {
  return (
    <Page
      header={
        <>
          <PageHeader module={moduleInfo} breadcrumbs={[{ id: "courses", label: "Courses", href: routes.courses }, { id: "discover", label: "Discover Training" }]} />
          <ResourceHeader
            title="Discover Training"
            description="Training product updates, best practices and suggested content for admins."
            secondaryActions={[{ label: "Cancel", icon: Cross, onClick: onBack }]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="grid" columns="1" md={{ columns: "3" }} gap="lg">
          <MetricCard title="EU AI Act" value="Required" description="Train your team before August 2nd." />
          <MetricCard title="Catalog updates" value="3" description="New courses suggested for your company." />
          <MetricCard title="Admin guides" value="5" description="Articles to improve completion tracking." />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

/**
 * Redirect flow (LMS → Knowledge Test / Survey) — cloned from Jon's Figma
 * (node 6046-23442, section "LMS"). States via ?st= :
 *   done      no KT required            → "Congratulations!"
 *   required  KT required to complete   → "Content complete!" + required step
 *   optional  KT configured, optional   → "Congratulations!" + optional step
 *   waiting   NEW (automation latency): survey still being created
 *   scheduled NEW (automation): survey programmed for a future date
 */
function EndOfCourseScreen() {
  const [searchParams, setSearchParams] = useSearchParams()
  const st = searchParams.get("st") ?? "required"
  const backToCourse = () => setSearchParams({ view: "learner-course", done: "1" })

  const copy: Record<string, { title: string; sub: string; stepLabel?: string; noteTitle?: string; note?: string }> = {
    done: { title: "Congratulations!", sub: "You have successfully completed the course." },
    required: {
      title: "Content complete!",
      sub: "You have successfully completed all the content modules.",
      stepLabel: "Complete the following step to finish the course:",
    },
    optional: {
      title: "Congratulations!",
      sub: "You have successfully completed the course.",
      stepLabel: "You can complete this optional step:",
    },
    waiting: {
      title: "Content complete!",
      sub: "You have successfully completed all the content modules.",
      noteTitle: "We're preparing your knowledge test",
      note: "It will be ready in about a minute. We'll notify you, and you'll also find it in your course content.",
    },
    scheduled: {
      title: "Congratulations!",
      sub: "You have successfully completed the course.",
      noteTitle: "Your satisfaction survey opens on 4 Aug",
      note: "We'll notify you when it's available.",
    },
  }
  const c = copy[st] ?? copy.required

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "var(--f1-background, #ffffff)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", flexShrink: 0 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--f1-foreground-secondary, #6b7280)" }}>
          Progress
          <span style={{ width: 18, height: 18, borderRadius: 999, border: "3px solid #00b26e", display: "inline-block" }} />
          <span style={{ color: "var(--f1-foreground, #0d1424)", fontWeight: 500 }}>100%</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13, color: "var(--f1-foreground-secondary, #9aa1ac)" }}>
          4/4
          <span style={{ color: "rgba(0,10,30,0.15)" }}>|</span>
          <F0Button label="Exit course" variant="outline" size="sm" onClick={backToCourse} />
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          background: "linear-gradient(180deg, rgba(0,178,110,0.10) 0%, rgba(0,178,110,0) 42%)",
        }}
      >
        <div style={{ maxWidth: 420, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div className="text-f1-icon-positive" style={{ marginBottom: 20 }}>
            <CheckCircleAnimated animate="normal" width={140} height={140} />
          </div>

          <F0Heading content={c.title} variant="heading" as="h1" />
          <div style={{ marginTop: 6, color: "var(--f1-foreground-secondary, #6b7280)", fontSize: 14, lineHeight: 1.5 }}>{c.sub}</div>

          {c.stepLabel && (
            <>
              <div style={{ marginTop: 32, fontSize: 14, color: "var(--f1-foreground, #0d1424)" }}>{c.stepLabel}</div>
              <div
                style={{ marginTop: 12, width: 260, textAlign: "left", background: "#fff", border: "1px solid rgba(0,10,30,0.06)", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", padding: "12px 14px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 13 }}>Knowledge test</span>
                  <span style={{ fontSize: 13, color: "var(--f1-foreground-secondary, #9aa1ac)" }}>Description</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8, fontSize: 13, color: "var(--f1-foreground-secondary, #6b7280)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><F0Icon icon={InProgressTask} size="sm" /> 22 min</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><F0Icon icon={Question} size="sm" /> 11 questions</span>
                </div>
              </div>
            </>
          )}

          {c.note && c.noteTitle && (
            <div style={{ marginTop: 28, textAlign: "left", width: "100%", alignSelf: "stretch" }}>
              <F0Alert variant="info" title={c.noteTitle} description={c.note} />
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 40 }}>
            <F0Button label="Back to home" icon={ArrowLeft} variant="outline" onClick={backToCourse} />
            {(st === "required" || st === "optional") && (
              <F0Button label="Start knowledge test" onClick={() => setSearchParams({ view: "survey-answer", survey: "kt-1" })} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ExportScreen({
  toast,
  onBack,
  onToast,
}: {
  toast: ToastId
  onBack: () => void
  onToast: (toast: ToastId) => void
}) {
  const [values, setValues] = useState<Record<string, unknown>>({
    filename: `training-export-${new Date().toISOString().slice(0, 10)}`,
    exportType: "employee",
    format: "excel",
    ids: [],
    employeeSelection: [],
  })

  return (
    <Page header={<PageHeader module={moduleInfo} breadcrumbs={[{ id: "courses", label: "Courses", href: routes.courses }, { id: "export", label: "Export courses" }]} />}>
      <StandardLayout>
        {toast && <FeedbackBanner toast={toast} />}
        <F0Dialog
          isOpen
          onClose={onBack}
          title="Export courses"
          description="Export trainings according to the selected type, format, people and date range."
          primaryAction={{ label: "Export", onClick: () => onToast("export") }}
          secondaryAction={{ label: "Cancel", onClick: onBack }}
        >
          <F0Box display="flex" flexDirection="column" gap="lg">
            {exportFieldsWithCourses.map((field) => (
              <F0FormField
                key={field.id}
                field={field}
                value={values[field.id]}
                onChange={(value) => setValues((currentValues) => ({ ...currentValues, [field.id]: value }))}
              />
            ))}
          </F0Box>
        </F0Dialog>
      </StandardLayout>
    </Page>
  )
}

function ImportScreen({
  mode,
  toast,
  onBack,
  onToast,
}: {
  mode: "import" | "import-courses"
  toast: ToastId
  onBack: () => void
  onToast: (toast: ToastId) => void
}) {
  const title =
    mode === "import" ? "Course and participant import" : "Course import"

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: routes.courses },
              { id: mode, label: title },
            ]}
          />
          <ResourceHeader
            title={title}
            secondaryActions={[{ label: "Cancel", icon: Cross, onClick: onBack }]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          {toast && <FeedbackBanner toast={toast} />}
          <F0Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="md"
            padding="2xl"
            border="default"
            borderColor="secondary"
            borderRadius="lg"
            background="secondary"
          >
            <F0Icon icon={Upload} size="lg" color="default" />
            <F0Heading
              content="Drag and drop or click here."
              variant="heading"
              as="h2"
            />
            <F0Text
              content="Accepts .xls, .xlsx, and .csv files"
              variant="description"
            />
          </F0Box>
          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Heading content="Use a template" variant="heading" as="h2" />
            <F0Text
              content="Download this template, fill it out with your employees' information and then upload it."
              variant="body"
            />
            <F0Box>
              <F0Button
                label="Download template"
                icon={Download}
                variant="outline"
                onClick={() => onToast("template")}
              />
            </F0Box>
          </F0Box>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="lg"
      padding="lg"
      border="default"
      borderColor="secondary"
      borderRadius="lg"
      background="primary"
    >
      <F0Heading content={title} variant="heading" as="h3" />
      <F0Box display="flex" flexDirection="column" gap="sm">
        {items.map((item) => (
          <F0Box key={item} display="flex" alignItems="center" gap="sm">
            <F0Icon icon={CheckCircle} size="sm" color="positive" />
            <F0Text content={item} variant="body" />
          </F0Box>
        ))}
      </F0Box>
    </F0Box>
  )
}

function InfoSection({
  title,
  items,
  description,
}: {
  title: string
  items?: string[]
  description?: string
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading content={title} variant="heading" as="h3" />
      {items ? (
        <F0Box display="flex" flexWrap="wrap" gap="sm">
          {items.map((item) => (
            <F0TagRaw key={item} text={item} />
          ))}
        </F0Box>
      ) : (
        <F0Text content={description ?? "-"} variant="body" />
      )}
    </F0Box>
  )
}



function MetricCard({
  title,
  value,
  description,
}: {
  title: string
  value: string
  description: string
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="lg"
      border="default"
      borderColor="secondary"
      borderRadius="lg"
      background="primary"
    >
      <F0Text content={title} variant="label" />
      <F0Heading content={value} variant="heading" as="h3" />
      <F0Text content={description} variant="description" />
    </F0Box>
  )
}

function MyCourseDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "my-courses", label: "My courses", href: routes.myCourses },
              { id: "ai-literacy", label: "AI literacy basics" },
            ]}
          />
          <ResourceHeader
            title="AI literacy basics"
            description="Free course from Factorial campus."
            secondaryActions={[{ label: "Cancel", icon: Cross, onClick: onBack }]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="grid" columns="1" md={{ columns: "4" }} gap="lg">
            <MetricCard title="Status" value="Not started" description="Learning status" />
            <MetricCard title="Duration" value="30m" description="Estimated time" />
            <MetricCard title="Provider" value="Factorial campus" description="Course source" />
            <MetricCard title="Requirement" value="Mandatory" description="AI Act training" />
          </F0Box>
          <InfoPanel title="Course content" items={["Introduction to AI literacy", "Risks and responsible use", "Final acknowledgement"]} />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function LearningSection({
  title,
  count,
  onOpenCourse,
}: {
  title: string
  count: string
  onOpenCourse: () => void
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Button label={`${title} ${count}`} variant="outline" onClick={onOpenCourse} />
      <F0Box padding="lg" border="default" borderColor="secondary" borderRadius="lg" background="primary">
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Heading content="AI literacy basics" variant="heading" as="h3" />
          <F0Text content="Free course from Factorial campus" variant="description" />
          <F0Button label="View course" icon={ExternalLink} onClick={onOpenCourse} />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

function getCatalogActionDetail(dialog: CatalogActionDialogId): TrainingActionDialogDetail {
  if (dialog === "catalog-search") {
    return {
      title: "Search catalog",
      description: "Search available courses by name, provider or competency.",
      primaryLabel: "Search",
      summaryTitle: "Search scope",
      summaryItems: ["Course title", "Provider", "Competencies"],
      toast: "settings",
    }
  }

  return {
    title: "Catalog filters",
    description: "Filter courses available to the employee.",
    primaryLabel: "Apply filters",
    summaryTitle: "Available filters",
    summaryItems: ["Requirement", "Duration", "Competencies"],
    toast: "settings",
  }
}

function MyCoursesOverview({ onOpenCourse }: { onOpenCourse: () => void }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Box padding="lg" border="default" borderColor="secondary" borderRadius="lg" background="primary">
        <F0Box display="flex" flexDirection="column" gap="lg">
          <F0Heading content="Progress" variant="heading" as="h3" />
          <F0Box display="grid" columns="1" md={{ columns: "3" }} gap="lg">
            <MetricCard title="Mandatory learning" value="1" description="Course pending" />
            <MetricCard title="Optional learning" value="2" description="Courses available" />
            <MetricCard title="Completed" value="0" description="Courses finished" />
          </F0Box>
        </F0Box>
      </F0Box>
      <LearningSection title="Mandatory learning" count="1" onOpenCourse={onOpenCourse} />
      <LearningSection title="Optional learning" count="2" onOpenCourse={onOpenCourse} />
    </F0Box>
  )
}

function MyCatalogTab({ onOpenCourse }: { onOpenCourse: () => void }) {
  const [activeDialog, setActiveDialog] = useState<CatalogActionDialogId>(null)

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" justifyContent="between" alignItems="center">
        <F0Button label="Filters" icon={Sliders} variant="outline" onClick={() => setActiveDialog("catalog-filters")} />
        <F0Button label="Search" icon={Settings} variant="outline" onClick={() => setActiveDialog("catalog-search")} />
      </F0Box>
      <LearningSection title="Available courses" count="3" onOpenCourse={onOpenCourse} />
      <TrainingActionDialog
        detail={activeDialog ? getCatalogActionDetail(activeDialog) : null}
        onClose={() => setActiveDialog(null)}
        onConfirm={() => setActiveDialog(null)}
      />
    </F0Box>
  )
}

function MyRequestsTab() {
  return (
    <InfoPanel title="My requests" items={["No pending request", "Requests submitted from catalog appear here"]} />
  )
}

function MySurveysTab() {
  return (
    <InfoPanel title="My surveys" items={["No pending survey", "Completed course surveys appear here"]} />
  )
}

function CourseThumbnailField({ course }: { course: ExactCourse }) {
  const thumbnail = course.thumbnail

  return (
    <F0Box display="flex" flexDirection="column" gap="sm">
      <F0Text content="Course thumbnail" variant="label" />
      {thumbnail ? (
        <F0BoxWithClassName
          borderRadius="md"
          role="img"
          aria-label={course.name}
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: 140,
            maxWidth: 360,
          }}
        />
      ) : (
        <F0Text content="-" variant="body" />
      )}
    </F0Box>
  )
}

function SidebarField({ label, value }: { label: string; value: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={label} variant="label" />
      <F0Text content={value} variant="body" />
    </F0Box>
  )
}

function MyCoursesScreen({ onBack }: { onBack: () => void }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeMyTab = getValidParam(
    searchParams.get("mytab"),
    new Set<string>(myCoursesTabs.map((tab) => tab.id)),
    "my-courses"
  ) as MyCoursesTabId
  const tabs = myCoursesTabs.map((tab) => ({
    ...tab,
    onClick: () => setSearchParams({ view: "free-course", mytab: tab.id }),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[{ id: "my-courses", label: "My courses", href: routes.myCourses }]}
            actions={[{ label: "Discover Training", icon: Sparkles, onClick: () => setSearchParams({ view: "discover" }) }]}
          />
          <Tabs key={activeMyTab} tabs={tabs} activeTabId={activeMyTab} />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          {activeMyTab === "my-courses" && <MyCoursesOverview onOpenCourse={() => setSearchParams({ view: "my-course-detail" })} />}
          {activeMyTab === "catalog" && <MyCatalogTab onOpenCourse={() => setSearchParams({ view: "my-course-detail" })} />}
          {activeMyTab === "my-requests" && <MyRequestsTab />}
          {activeMyTab === "my-surveys" && <MySurveysTab />}
          <F0Box>
            <F0Button label="Back to Training" icon={Cross} variant="outline" onClick={onBack} />
          </F0Box>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

type NotiRow = {
  id: string
  icon: typeof Envelope
  title: string
  description: string
  meta: string
  survey?: string
}

const NOTI_TODAY: NotiRow[] = [
  { id: "n-eff", icon: Envelope, title: "New survey for you: Effectiveness survey", description: "Check out the survey details", meta: "Training · 2 hours ago", survey: "eff-1" },
  { id: "n-pay", icon: DollarBill, title: "Action Required: Overdue payments", description: "One or more payments are overdue. Please address them immediately to avoid any disruptions.", meta: "Treasury · 2 hours ago" },
]

const NOTI_LAST_WEEK: NotiRow[] = [
  { id: "n-doc", icon: Files, title: "Test de Verdad LLC has published a new public company document", description: "The document test Factorial.pdf is now available in the Public company documents space", meta: "Documents · July 24th, 2026 at 5:08 PM" },
  { id: "n-sat", icon: Envelope, title: "New survey for you: Training satisfaction survey", description: "Check out the survey details", meta: "Training · July 24th, 2026 at 5:01 PM", survey: "sat-1" },
]

/** Clone of the real Notifications panel (bell at the sidebar footer, next to the user). */
function NotificationsLayer() {
  const [searchParams, setSearchParams] = useSearchParams()
  const open = searchParams.get("noti") === "1"
  const isManager = searchParams.get("as") === "manager"

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll("button"))
    const userButton = buttons.find((b) => (b.textContent ?? "").includes("Hellen the HR"))
    const row = userButton?.closest(".justify-between")
    const rowButtons = row ? Array.from(row.querySelectorAll("button")) : []
    const bell = rowButtons[rowButtons.length - 1]
    if (!bell || bell === userButton) return
    const onClick = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      const params = new URLSearchParams(window.location.search)
      params.set("noti", "1")
      setSearchParams(Object.fromEntries(params.entries()))
    }
    bell.addEventListener("click", onClick, true)
    return () => bell.removeEventListener("click", onClick, true)
  }, [setSearchParams])

  const close = () => {
    const params = new URLSearchParams(window.location.search)
    params.delete("noti")
    setSearchParams(Object.fromEntries(params.entries()))
  }

  const openSurvey = (survey: string) => setSearchParams({ view: "survey-answer", survey })

  if (!open) return null

  const renderRow = (row: NotiRow) => (
    <button
      key={row.id}
      type="button"
      onClick={row.survey ? () => openSurvey(row.survey!) : undefined}
      style={{ ...inputReset, display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 20px", textAlign: "left", cursor: row.survey ? "pointer" : "default", width: "100%" }}
    >
      <span style={{ width: 30, height: 30, borderRadius: 999, border: "1px solid rgba(0,10,30,0.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
        <F0Icon icon={row.icon} size="sm" />
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span style={{ fontWeight: 600, fontSize: 14 }}>{row.title}</span>
        <span style={{ fontSize: 14, color: "var(--f1-foreground-secondary, #6b7280)" }}>{row.description}</span>
        <span style={{ fontSize: 12, color: "var(--f1-foreground-secondary, #9aa1ac)", marginTop: 4 }}>{row.meta}</span>
      </span>
    </button>
  )

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 90 }} onClick={close}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "absolute", top: 12, left: 250, width: 620, maxWidth: "calc(100vw - 270px)", maxHeight: "88vh", overflowY: "auto", background: "var(--f1-background, #ffffff)", borderRadius: 16, border: "1px solid rgba(0,10,30,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px" }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>Notifications</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button type="button" style={{ ...inputReset, width: "auto", cursor: "pointer", padding: 6 }} title="Settings"><F0Icon icon={Settings} size="sm" /></button>
            <button type="button" onClick={close} style={{ ...inputReset, width: "auto", cursor: "pointer", padding: 6 }} title="Close"><F0Icon icon={Cross} size="sm" /></button>
          </span>
        </div>
        <div style={{ padding: "2px 20px 6px", fontSize: 13, color: "var(--f1-foreground-secondary, #6b7280)" }}>Today</div>
        {NOTI_TODAY.filter((row) => (isManager ? true : row.id !== "n-eff")).map(renderRow)}
        <div style={{ borderTop: "1px solid rgba(0,10,30,0.08)", margin: "8px 0" }} />
        <div style={{ padding: "2px 20px 6px", fontSize: 13, color: "var(--f1-foreground-secondary, #6b7280)" }}>Last week</div>
        {NOTI_LAST_WEEK.map(renderRow)}
        <div style={{ height: 12 }} />
      </div>
    </div>
  )
}





function SideInfo({ course }: { course: ExactCourse }) {
  return (
    <F0BoxWithClassName
      display="flex"
      flexDirection="column"
      gap="xl"
      paddingLeft="xl"
      style={{ flex: 1 }}
    >
      <CourseThumbnailField course={course} />
      <SidebarField
        label="Completion settings"
        value="Complete all modules, 100% attendance required, Pass knowledge test"
      />
      <SidebarField label="Subsidy" value="Non-subsidized" />
      <SidebarField label="Workflow" value="Not linked to Workflows" />
      <SidebarField label="Internal code" value={course.code} />
      <SidebarField
        label="Categories"
        value={course.categories.length > 0 ? course.categories.join(", ") : "-"}
      />
      <SidebarField label="Total cost" value={course.totalCost} />
      <SidebarField label="Total salary cost" value={course.salaryCost} />
      <SidebarField label="Subsidized cost" value={course.subsidizedCost} />
      <SidebarField label="Creation year" value={course.creationYear} />
    </F0BoxWithClassName>
  )
}



/** The scenario the group screen shows: the admin raised the knowledge test from
 *  50% to 75% in the course settings. The heavy evaluation happens here, for one
 *  group, when somebody opens it — not for every group on save. */
/** When the conditions were changed and by whom. The banner and the panel are the
 *  only trace a re-check leaves, so without this the record cannot answer the one
 *  question it will get: "why did I lose the course?" */
const CHANGE_STAMP = { date: "6 Aug 2026", by: "Hellen the HR" }

const GROUP_SCENARIO: Criteria = {
  ...COMPLETION_BASELINE,
  // A mixed change on purpose: the quiz minimum goes up (people lose the
  // completion) and the knowledge test goes down (somebody gains it), so the
  // panel shows both directions instead of four identical rows.
  quizMinimum: 90,
  knowledgeMinimum: 40,
  attendanceMinimum: 90,
}

/** Team and job title come with the real table, so the fixtures carry them. */
const PARTICIPANT_TEAMS = ["Quality", "Operations", "Customer Support", "Manufacturing", "Logistics"]
const PARTICIPANT_JOBS = [
  "Quality Technician",
  "Production Operator",
  "Support Specialist",
  "Shift Supervisor",
  "Warehouse Clerk",
]

type ParticipantRow = {
  id: string
  name: string
  team: string
  jobTitle: string
  status: "Completed" | "In progress"
  /** LMS modules finished */
  modules: number
  /** quiz average, % */
  quiz: number
  /** the bars pinned on this membership, not the course's current ones */
  ktMin: number
  quizMin: number
  attMin: number
  ktPending: boolean
  sessionsLeft: number
  /** sessions attended, % */
  attendance: number
  /** knowledge test score, % */
  score: number
  change?: "lose" | "gain"
  conditions: string[]
  /** for the panel: one entry per condition, aligned in columns */
  details: ChangeDetail[]
}

function participantsOfGroup(groupId: string, after: Criteria): ParticipantRow[] {
  const done = FINISHED_PEOPLE.filter((p) => p.group === groupId)
  const ongoing = UNFINISHED_PEOPLE.filter((p) => p.group === groupId)
  const losing = new Set(failingIn(groupId, after).map((p) => p.name))
  const gaining = new Set(gainingIn(groupId, after).map((p) => p.name))

  const row = (p: FinishedPerson, status: ParticipantRow["status"]): ParticipantRow => ({
    id: `${groupId}-${p.name}`,
    name: p.name,
    team: PARTICIPANT_TEAMS[p.name.length % PARTICIPANT_TEAMS.length],
    jobTitle: PARTICIPANT_JOBS[p.score % PARTICIPANT_JOBS.length],
    status,
    modules: p.modulesDone ? COURSE_MODULES : (p.modulesAt ?? 0),
    quiz: p.quiz,
    ktMin: p.ktMin ?? COMPLETION_BASELINE.knowledgeMinimum,
    quizMin: p.quizMin ?? COMPLETION_BASELINE.quizMinimum,
    attMin: p.attMin ?? COMPLETION_BASELINE.attendanceMinimum,
    ktPending: p.ktPending ?? false,
    sessionsLeft: p.sessionsLeft ?? 0,
    attendance: p.attendance,
    score: p.score,
    change: losing.has(p.name) ? "lose" : gaining.has(p.name) ? "gain" : undefined,
    // Only the conditions that move THIS person: the change may touch four, and
    // three of them can be irrelevant to her.
    details: changeDetails(p, COMPLETION_BASELINE, after).filter((detail) =>
      (losing.has(p.name)
        ? reasonsFor(p, COMPLETION_BASELINE, after)
        : gaining.has(p.name)
          ? unblockedFor(p, COMPLETION_BASELINE, after)
          : []
      ).some((r) => r.requirement === detail.condition)
    ),
    conditions: losing.has(p.name)
      ? reasonsFor(p, COMPLETION_BASELINE, after).map((r) => r.requirement)
      : gaining.has(p.name)
        ? unblockedFor(p, COMPLETION_BASELINE, after).map((r) => r.requirement)
        : [],
  })

  return [
    ...done.map((p) => row(p, "Completed")),
    ...ongoing.map((p) => row(p, "In progress")),
  ]
}

/** For the panel: one entry per condition that moves this person — their figure
 *  and how the bar moved, as DATA, so the panel can align it in columns instead
 *  of packing four facts into a sentence. */
type ChangeDetail = {
  condition: string
  value: string
  from: string
  to: string
  /** phrased for the KIND of change: a threshold moves, a requirement switches */
  movement: string
}

function changeDetails(p: FinishedPerson, before: Criteria, after: Criteria): ChangeDetail[] {
  const out: ChangeDetail[] = []
  if (after.knowledge && before.knowledge && after.knowledgeMinimum !== before.knowledgeMinimum)
    out.push({
      condition: "Knowledge test",
      value: `${p.score}%`,
      from: `${before.knowledgeMinimum}%`,
      to: `${after.knowledgeMinimum}%`,
      movement: `${after.knowledgeMinimum > before.knowledgeMinimum ? "raised" : "lowered"} to ${after.knowledgeMinimum}% (was ${before.knowledgeMinimum}%)`,
    })
  if (after.modules && before.modules && after.quizMinimum !== before.quizMinimum)
    out.push({
      condition: "Quiz score",
      value: `${p.quiz}%`,
      from: `${before.quizMinimum}%`,
      to: `${after.quizMinimum}%`,
      movement: `${after.quizMinimum > before.quizMinimum ? "raised" : "lowered"} to ${after.quizMinimum}% (was ${before.quizMinimum}%)`,
    })
  if (after.attendance && before.attendance && after.attendanceMinimum !== before.attendanceMinimum)
    out.push({
      condition: "Attendance",
      value: `${p.attendance}%`,
      from: `${before.attendanceMinimum}%`,
      to: `${after.attendanceMinimum}%`,
      movement: `${after.attendanceMinimum > before.attendanceMinimum ? "raised" : "lowered"} to ${after.attendanceMinimum}% (was ${before.attendanceMinimum}%)`,
    })
  if (after.modules !== before.modules)
    out.push({
      condition: "LMS modules",
      value: `${p.modulesDone ? COURSE_MODULES : (p.modulesAt ?? 0)}/${COURSE_MODULES}`,
      from: before.modules ? "required" : "not required",
      to: after.modules ? "required" : "not required",
      // A requirement does not get "raised": it is switched on or off.
      movement: after.modules ? "are now required" : "are no longer required",
    })
  return out
}

/** The bar next to the value, but only when this person was judged with a
 *  different one than the course now has. Álvaro's case (7-ago): raise the test to
 *  100%, do not apply it to those already completed, and the table shows an 80%
 *  marked Completed under a header saying 100% — "how can he be approved with
 *  8/10?". Annotating every row instead fills the table for nothing when the change
 *  was applied to everybody. */
function withBar(value: string, pinned: number, current: number) {
  return pinned === current ? value : `${value} (min ${pinned}%)`
}

function GroupParticipantsTable({ rows }: { rows: ParticipantRow[] }) {
  // No hardcoded widths: sizing them by hand meant sizing them for the HEADERS,
  // so a column holding "84%" ended up 200px wide. Without widths the table
  // distributes by content. The bar of each condition goes in its own header, in
  // short form — one group, one set of bars (Álvaro's homogeneity rule). No
  // "Modules All 8" anywhere: the cell already says 8/8.
  const bars = {
    quiz: rows[0]?.quizMin ?? COMPLETION_BASELINE.quizMinimum,
    kt: rows[0]?.ktMin ?? COMPLETION_BASELINE.knowledgeMinimum,
    attendance: rows[0]?.attMin ?? COMPLETION_BASELINE.attendanceMinimum,
  }
  const source = useDataCollectionSource<ParticipantRow>(
    {
      // Verbatim from the clone that already existed (GroupParticipantsTab,
      // AutomatedEnrollmentsV2.tsx:5361): search synced to the URL, pages of 10,
      // "Add participants", per-row Delete and the delete-memberships bulk.
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows.filter(
            (participant) =>
              term === "" ||
              [participant.name, participant.team, participant.jobTitle].some((value) =>
                value.toLowerCase().includes(term)
              )
          )
          return paginateRecords(filtered, pagination, 10)
        },
      },
      primaryActions: () => ({ label: "Add participants", icon: Add, onClick: () => {} }),
      itemActions: () => [{ label: "Delete", icon: Delete, onClick: () => {}, critical: true }],
      bulkActions: () => ({
        primary: [{ id: "delete-memberships", label: "Delete", icon: Delete, critical: true }],
      }),
      totalItemSummary: (total: number) => `${total} participants`,
    },
    [rows]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/group-participants/v1`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              // The three columns the real table has today, verbatim
              // (ParticipantsTable/index.tsx:163-200): person, team, job title.
              {
                id: "who",
                label: "Name",
                render: (row: ParticipantRow) => personValue(row.name),
              },
              {
                id: "team",
                label: "Team",
                render: (row: ParticipantRow) => ({
                  type: "text" as const,
                  value: row.team,
                }),
              },
              {
                id: "job",
                label: "Job title",
                render: (row: ParticipantRow) => ({
                  type: "text" as const,
                  value: row.jobTitle,
                }),
              },
              // What this initiative proposes to add.
              {
                id: "status",
                label: "Status",
                render: (row: ParticipantRow) => ({
                  type: "status" as const,
                  value: {
                    status: row.status === "Completed" ? ("positive" as const) : ("info" as const),
                    label: row.status,
                  },
                }),
              },
              {
                id: "lms",
                label: "LMS modules",
                render: (row: ParticipantRow) => ({
                  type: "text" as const,
                  value: `${row.modules}/${COURSE_MODULES}`,
                }),
              },
              {
                id: "quiz",
                label: "Quiz score",
                render: (row: ParticipantRow) => ({
                  type: "text" as const,
                  value: withBar(`${row.quiz}%`, row.quizMin, GROUP_SCENARIO.quizMinimum),
                }),
              },
              {
                id: "attendance",
                label: "Attendance",
                render: (row: ParticipantRow) => ({
                  type: "text" as const,
                  value: `${withBar(`${row.attendance}%`, row.attMin, GROUP_SCENARIO.attendanceMinimum)}${row.sessionsLeft > 0 ? ` · ${row.sessionsLeft} left` : ""}`,
                }),
              },
              {
                // Without this column a row contradicts itself: modules complete,
                // attendance fine, and still "In progress" — because the test is
                // what they miss. Last column keeps no width.
                id: "kt",
                label: "Knowledge test",
                render: (row: ParticipantRow) =>
                  row.ktPending
                    ? // Not taken yet is not a zero.
                      { type: "status" as const, value: { status: "neutral" as const, label: "Pending" } }
                    : {
                        type: "text" as const,
                        value: withBar(`${row.score}%`, row.ktMin, GROUP_SCENARIO.knowledgeMinimum),
                      },
              },
            ],
          },
        },
      ]}
    />
  )
}

/** The whole story for one group: who changes and on which condition. This is
 *  what the simplified save dialog no longer shows, and it lives here because
 *  this is where you can act on a person. */
/** The panel: what changed (once) and then one row per person. Grouping by
 *  condition made a person appear in several groups, so reading "what happened to
 *  Ana" meant scanning the whole table and counting. */
/** The change, as a description list in two columns — label above value, no input
 *  chrome. F0Form's own docs say it outright: "Read-only displays: use a
 *  description list or data table instead". Disabled inputs looked editable but
 *  blocked, which is worse than not showing them. Same pattern as the real
 *  Trainings request sidepanel (RequestDetailSidepanelComponent/shared.tsx:148). */
function ChangeSummary() {
  const items = [
    { title: "Author", content: { type: "item" as const, text: CHANGE_STAMP.by } },
    { title: "Date", content: { type: "item" as const, text: CHANGE_STAMP.date } },
  ]

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {/* The title goes ABOVE the grid: passing it to one of the two lists pushed
          that column down and broke the alignment of the pairs. */}
      {/* A section title is an h2 — the rule this app ships with says it outright
          ("Sections use variant='heading' with as='h2'") and SectionHeader renders
          exactly that. My uppercase label looked like one more field label. */}
      <F0Heading variant="heading" as="h2" content="Change details" />
      <F0Box display="grid" columns="2" gap="xl">
        <DetailsItemsList details={items.filter((_, index) => index % 2 === 0)} />
        <DetailsItemsList details={items.filter((_, index) => index % 2 === 1)} />
      </F0Box>
    </F0Box>
  )
}

function ChangedPeopleTable({ rows }: { rows: ParticipantRow[] }) {
  const source = useDataCollectionSource<ParticipantRow>(
    {
      dataAdapter: { fetchData: () => ({ records: rows }) },
      totalItemSummary: (total: number) => `${total} people`,
    },
    [rows]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/group-changed/v5`}
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                id: "who",
                label: "Participant",
                width: 170,
                render: (row: ParticipantRow) => personValue(row.name),
              },
              {
                id: "change",
                label: "Status change",
                width: 190,
                render: (row: ParticipantRow) => ({
                  type: "alertTag" as const,
                  value: {
                    level: row.change === "lose" ? ("warning" as const) : ("positive" as const),
                    label:
                      row.change === "lose"
                        ? "Completed → In progress"
                        : "In progress → Completed",
                  },
                }),
              },
              {
                // Only the names: the movement of each bar is stated once above, so
                // no tag has to carry a figure.
                id: "conditions",
                label: "Because of",
                // Plain text, not tags: a tagList always reserves the overflow
                // counter (41px), so two pills asked ~326px and inside a 640 panel
                // the second condition kept collapsing into "+1" — hiding the very
                // thing this panel exists to explain.
                render: (row: ParticipantRow) => ({
                  type: "text" as const,
                  value: row.details.map((detail) => detail.condition).join(", "),
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

function TrainingGroupDetail(props: Record<string, unknown>) {
  const [panelOpen, setPanelOpen] = useState(false)
  // The notice is read once: acknowledging it in the panel ends it, banner
  // included. A CTA that only closed the panel would duplicate its X.
  const [noticeRead, setNoticeRead] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const groupName = typeof props.groupName === "string" ? props.groupName : ""
  const groupId =
    Object.entries(GROUP_META).find(([, meta]) => meta.name === groupName)?.[0] ?? "g1"
  const meta = GROUP_META[groupId]
  const activeTab = (searchParams.get("gtab") as GroupDetailTabId) || "participants"

  const rows = participantsOfGroup(groupId, GROUP_SCENARIO)
  // The bars this group was judged with (they are the same for everybody in it).
  const bars = {
    quiz: rows[0]?.quizMin ?? COMPLETION_BASELINE.quizMinimum,
    kt: rows[0]?.ktMin ?? COMPLETION_BASELINE.knowledgeMinimum,
    attendance: rows[0]?.attMin ?? COMPLETION_BASELINE.attendanceMinimum,
  }
  const changed = rows.filter((r) => r.change)
  // The movements themselves, without repeating one per person.
  const movements = changeDetails(FINISHED_PEOPLE[0], COMPLETION_BASELINE, GROUP_SCENARIO)
  const lost = changed.filter((r) => r.change === "lose").length
  const gained = changed.filter((r) => r.change === "gain").length
  const avatars = rows.map((r) => {
    const [firstName = r.name, ...rest] = r.name.split(" ")
    return { type: "person" as const, firstName, lastName: rest.join(" ") }
  })

  // Verbatim from the clone that already existed
  // (f0-factorial-campus/.../AutomatedEnrollmentsV2.tsx:5307): the tabs rewrite
  // the URL with the whole group context.
  const groupTabs = [
    { id: "sessions", label: "Sessions" },
    { id: "participants", label: "Participants" },
    { id: "materials", label: "Materials" },
    { id: "documents", label: "Documents" },
    { id: "costs", label: "Costs" },
  ].map((tab) => ({
    ...tab,
    onClick: () =>
      setSearchParams({ view: "group-detail", course: "7", group: meta.name, gtab: tab.id }),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: routes.courses },
              {
                id: "7",
                label: "Fundamentos de la gestión de calidad con ISO 9001",
                href: routes.course("7", "training-groups"),
              },
              { id: meta.name, label: meta.name },
            ]}
          />
          <ResourceHeader
            title={meta.name}
            metadata={[
              { label: "Start date", value: { type: "text", content: meta.dates.split(" – ")[0] } },
              {
                label: "End date",
                value: { type: "text", content: meta.dates.split(" – ")[1] ?? meta.dates },
              },
              { label: "Participants", value: { type: "list", variant: "person", avatars } },
              {
                label: "Instructor(s)",
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [{ type: "person" as const, firstName: "Marta", lastName: "Sender" }],
                },
              },
              { label: "Training budget", value: { type: "text", content: "Quality & Compliance" } },
            ]}
          />
          <Tabs key={activeTab} tabs={groupTabs} activeTabId={activeTab} />
        </>
      }
    >
      <StandardLayout>
        {activeTab !== "participants" ? (
          <F0Alert
            variant="warning"
            title="This tab was lost to a bad edit of mine"
            description="Only Participants is rebuilt here. /rewind brings the rest back."
          />
        ) : (
          <F0Box display="flex" flexDirection="column" gap="lg">
            {/* The banner only informs — a re-check leaves no trail in v1, so this
                is the one place that says the conditions moved under this group. */}
            {changed.length > 0 && !noticeRead && (
              <F0Alert
                variant="info"
                // One idea and the number in the title (a middot joining two
                // opposite facts was the same vice I had criticised); the
                // breakdown and the stamp go in the secondary line.
                title={`${changed.length} ${changed.length === 1 ? "participant changed" : "participants changed"} status`}
                description={`${[
                  `${lost} ${lost === 1 ? "is" : "are"} no longer Completed`,
                  gained > 0 && `${gained} ${gained === 1 ? "is" : "are"} now Completed`,
                ]
                  .filter(Boolean)
                  .join(", ")} · ${CHANGE_STAMP.date} by ${CHANGE_STAMP.by}`}
                action={{ label: "See who changed", onClick: () => setPanelOpen(true) }}
                onClose={() => setNoticeRead(true)}
              />
            )}

            <GroupParticipantsTable rows={rows} />
          </F0Box>
        )}
      </StandardLayout>

      <F0Dialog
        isOpen={panelOpen}
        onClose={() => setPanelOpen(false)}
        position="right"
        // No width: the catalog default for a side panel is md = 640px, which is
        // exactly what the real session sidepanel uses (measured on the live app:
        // max-w-[640px]). lg made ours 800 and looked nothing like the product.
        title="Participants who changed status"
        description=""
        // "Got it" ends the notice: it closes the panel AND retires the banner.
        // A CTA that only closed the panel would do the same as its X.
        primaryAction={{
          label: "Got it",
          onClick: () => {
            setPanelOpen(false)
            setNoticeRead(true)
          },
        }}
      >
        {/* 24px between the summary block and the table: at 12px they read as one
            lump. */}
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <ChangeSummary />
          <ChangedPeopleTable rows={changed} />
        </F0Box>
      </F0Dialog>
    </Page>
  )
}

function TrainingSettingsScreen({ onBack }: { onBack: () => void }) {
  return (
    <Page
      header={
        <>
          <PageHeader module={moduleInfo} breadcrumbs={[{ id: "courses", label: "Courses", href: routes.courses }, { id: "settings", label: "Settings" }]} />
          <ResourceHeader
            title="Training settings"
            description="Configure catalog visibility, request approvals and completion defaults."
            secondaryActions={[{ label: "Cancel", icon: Cross, onClick: onBack }]}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
          <InfoPanel
            title="Catalog"
            items={["Employees can browse published courses", "Categories are visible in the catalog", "Factorial campus courses are enabled"]}
          />
          <InfoPanel
            title="Requests"
            items={["Employees can request training", "Admins review requests before approval", "Budget assignment is required for paid courses"]}
          />
          <InfoPanel
            title="Completion"
            items={["Courses can require attendance", "Knowledge tests can be mandatory", "Expired validity creates retake alerts"]}
          />
          <InfoPanel
            title="Imports"
            items={["Courses can be imported", "Participants can be imported", "Templates are available from import screens"]}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

/* Helpers and one dialog also lost in the same cut — neutral stubs. */
function TrainingActionDialog({
  detail,
  onClose,
  onConfirm,
}: {
  detail: TrainingActionDialogDetail | null
  onClose: () => void
  onConfirm: () => void
}) {
  if (!detail) return null

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position={detail.position ?? "center"}
      width="md"
      title={detail.title}
      description={detail.description}
      primaryAction={{ label: detail.primaryLabel, onClick: onConfirm }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        <InfoPanel title={detail.summaryTitle} items={detail.summaryItems} />
      </F0Box>
    </F0Dialog>
  )
}
function getListActionDetail(action: PendingListAction, courses: ExactCourse[]): TrainingActionDialogDetail {
  const course = courses.find((item) => item.id === action.courseId)
  const courseName = course?.name ?? "selected courses"

  switch (action.dialog) {
    case "duplicate-course":
      return {
        title: "Duplicate course",
        description: `Create a draft copy of ${courseName}.`,
        primaryLabel: "Duplicate",
        summaryTitle: "Copied data",
        summaryItems: ["Course information", "Content modules", "Completion settings"],
        toast: "draft",
      }
    case "toggle-catalog-course":
      return {
        title: course?.catalogVisible ? "Remove from catalog" : "Add to catalog",
        description: course?.catalogVisible ? `Hide ${courseName} from the employee catalog.` : `Display ${courseName} in the employee catalog.`,
        primaryLabel: course?.catalogVisible ? "Remove from catalog" : "Add to catalog",
        summaryTitle: "Catalog visibility",
        summaryItems: ["Employees see catalog courses", "Admins keep course management access", "Existing participants keep progress"],
        toast: "settings",
      }
    case "delete-course":
      return {
        title: "Delete course",
        description: `Delete ${courseName} from the training catalog.`,
        primaryLabel: "Delete course",
        summaryTitle: "Before deleting",
        summaryItems: ["Course content is removed", "Groups stop being visible", "Historical participant records remain in reports"],
        toast: "settings",
      }
    case "export-connectivity-log":
      return {
        title: "Export connectivity log",
        description: `Download the connectivity log for ${courseName}.`,
        primaryLabel: "Export log",
        summaryTitle: "Export content",
        summaryItems: ["Employee name", "Last access", "Completion status"],
        toast: "export",
      }
    case "bulk-archive":
      return {
        title: "Archive selected courses",
        description: "Move the selected courses to draft for review.",
        primaryLabel: "Archive courses",
        summaryTitle: "Bulk action",
        summaryItems: ["Applies to selected rows", "Catalog visibility can be restored", "Participants keep historical progress"],
        toast: "draft",
      }
    case "bulk-delete":
      return {
        title: "Delete selected courses",
        description: "Delete the selected training courses.",
        primaryLabel: "Delete courses",
        summaryTitle: "Bulk deletion",
        summaryItems: ["Selected rows are affected", "Course groups are removed", "Reports keep historical records"],
        toast: "settings",
      }
    case "bulk-display-catalog":
      return {
        title: "Display on catalog",
        description: "Show selected courses in the employee catalog.",
        primaryLabel: "Display courses",
        summaryTitle: "Visibility update",
        summaryItems: ["Selected published courses become visible", "Employees can request or start them", "Managers can still track progress"],
        toast: "settings",
      }
    case "bulk-hide-catalog":
    default:
      return {
        title: "Hide from catalog",
        description: "Hide selected courses from the employee catalog.",
        primaryLabel: "Hide courses",
        summaryTitle: "Visibility update",
        summaryItems: ["Selected courses disappear from catalog", "Current participants keep access", "Admins can show them again later"],
        toast: "settings",
      }
  }
}
function getInsightActionDetail(dialog: InsightActionDialogId): TrainingActionDialogDetail {
  if (dialog === "date-range") {
    return {
      title: "Date range",
      description: "Filter insights by training activity period.",
      primaryLabel: "Apply range",
      summaryTitle: "Current range",
      summaryItems: ["From 1 Jan 2026", "To 31 Dec 2026", "Includes completed and active courses"],
      toast: "settings",
    }
  }

  if (dialog === "trainings-filter") {
    return {
      title: "Trainings filter",
      description: "Choose which courses are included in the dashboard.",
      primaryLabel: "Apply filter",
      summaryTitle: "Included courses",
      summaryItems: ["Published courses", "Factorial campus courses", "Mandatory compliance courses"],
      toast: "settings",
    }
  }

  return {
    title: "Teams filter",
    description: "Choose which teams are included in the training dashboard.",
    primaryLabel: "Apply filter",
    summaryTitle: "Included teams",
    summaryItems: ["Retail", "People", "Operations", "Finance"],
    toast: "settings",
  }
}
function getCourseActionDetail(dialog: CourseActionDialogId, course: ExactCourse): TrainingActionDialogDetail {
  switch (dialog) {
    case "course-settings":
      return {
        title: "Course settings",
        description: "Review the administrative configuration used by this course.",
        primaryLabel: "Save changes",
        summaryTitle: "Settings",
        summaryItems: ["Internal code and categories", "Course validity and completion rules", "Catalog visibility and linked workflows"],
        toast: "settings",
        position: "right",
      }
    case "revert-course":
      return {
        title: "Revert to draft",
        description: `Move ${course.name} back to draft so it can be edited before publishing again.`,
        primaryLabel: "Revert to draft",
        summaryTitle: "What changes",
        summaryItems: ["The course leaves the published state", "Participants keep their progress", "Admins can edit the course content again"],
        toast: "draft",
      }
    case "edit-content":
      return {
        title: "Edit course content",
        description: "Open the course builder for modules, pages, quizzes and videos.",
        primaryLabel: "Open builder",
        summaryTitle: "Content builder",
        summaryItems: ["3 modules", "5 pages", "2 quizzes", "1 video"],
        toast: "settings",
        position: "right",
      }
    case "delete-training-group":
      return {
        title: "Delete training group",
        description: "Remove this group from the course.",
        primaryLabel: "Delete group",
        summaryTitle: "Before deleting",
        summaryItems: ["Participants are removed from this group", "Session attendance is no longer visible here", "Course content is not deleted"],
        toast: "settings",
      }
    case "upload-course-material":
      return {
        title: "Upload material",
        description: "Add participant-facing files to the course.",
        primaryLabel: "Upload",
        summaryTitle: "Accepted material",
        summaryItems: ["PDF handbooks", "Slide decks", "Reading resources"],
        toast: "draft",
      }
    case "embed-course-material":
      return {
        title: "Embed link",
        description: "Attach an external resource to the course materials.",
        primaryLabel: "Embed link",
        summaryTitle: "Link details",
        summaryItems: ["Resource URL", "Visible title", "Optional description for participants"],
        toast: "draft",
      }
    case "download-course-material":
      return {
        title: "Download material",
        description: "Download the selected participant material.",
        primaryLabel: "Download",
        summaryTitle: "File",
        summaryItems: ["Course handbook.pdf", "Participant material", "Shared with every course group"],
        toast: "export",
      }
    case "upload-course-document":
      return {
        title: "Upload document",
        description: "Add an internal document for training managers and admins.",
        primaryLabel: "Upload",
        summaryTitle: "Internal document",
        summaryItems: ["Certificate templates", "Compliance evidence", "Administrative attachments"],
        toast: "draft",
      }
    case "download-course-document":
      return {
        title: "Download document",
        description: "Download the selected internal course document.",
        primaryLabel: "Download",
        summaryTitle: "File",
        summaryItems: ["Completion certificate template", "Training document", "Visible only to admins"],
        toast: "export",
      }
    case "add-course-survey":
    default:
      return {
        title: "Add survey",
        description: "Attach a satisfaction, effectiveness or knowledge survey to this course.",
        primaryLabel: "Add survey",
        summaryTitle: "Survey options",
        summaryItems: ["Course satisfaction", "Course effectiveness", "Knowledge test"],
        toast: "draft",
        position: "right",
      }
  }
}
function getBudgetActionDetail(dialog: "add-group" | "export" | "edit", budget: BudgetRow): TrainingActionDialogDetail {
  switch (dialog) {
    case "add-group":
      return {
        title: "Add training group",
        description: "Select a training group and assign a cost to this budget.",
        primaryLabel: "Add training group",
        summaryTitle: budget.name,
        summaryItems: ["Search existing training groups", "Assign budgeted cost", "Track payment status from the budget detail"],
        toast: null,
        position: "right",
      }
    case "export":
      return {
        title: "Export budget",
        description: "Export the training groups and costs linked to this budget.",
        primaryLabel: "Export",
        summaryTitle: "Export contents",
        summaryItems: ["Training group", "Group status", "Cost", "Provider", "Payment status", "Participants"],
        toast: "export",
        position: "right",
      }
    case "edit":
      return {
        title: "Edit budget",
        description: "Update the training budget details.",
        primaryLabel: "Save",
        summaryTitle: "Budget settings",
        summaryItems: ["Budget name", "Date", "Status", "Training groups"],
        toast: "settings",
        position: "right",
      }
  }
}

/* --- affected-groups model, rebuilt after the cut --------------------------- */
type AffectedGroup = { id: string; name: string; dates: string; completed: number; notCompleted?: number; pending: number; wouldFail: number; wouldPass: number; reasons?: { requirement: string; value: string }[]; person?: FinishedPerson; direction?: "lose" | "gain" }
type AffectedPerson = { name: string; from: "Passed" | "Failed"; to: "Passed" | "Failed"; reason: string }
type LearnerEvaluation = {
  id: string
  name: string
  kind: "Knowledge test" | "Satisfaction"
  minutes: number
  questions: number
  status: "Not started" | "Passed" | "Failed" | "Completed"
  opensAt?: string
  required?: boolean
}

type TeamEvaluationRow = {
  id: string
  survey: string
  course: string
  participant: string
  assigned: string
  status: "Pending" | "Completed"
}

type AffectedRow = { id: string; kind: "group" | "person"; name: string; why: string; wouldFail: number; change: string }

const OLD_MINIMUM = 50
const TOTAL_FINISHED = 25

const LEARNER_EVALUATIONS: LearnerEvaluation[] = [
  { id: "kt-1", name: "Knowledge check", kind: "Knowledge test", minutes: 8, questions: 11, status: "Not started", required: true },
  { id: "kt-4", name: "Data protection knowledge test", kind: "Knowledge test", minutes: 12, questions: 9, status: "Passed", required: true },
  { id: "kt-3", name: "Compliance knowledge test", kind: "Knowledge test", minutes: 15, questions: 8, status: "Failed", required: true },
  { id: "sat-1", name: "Satisfaction survey", kind: "Satisfaction", minutes: 2, questions: 4, status: "Completed" },
]

/** Scheduled (not materialized yet): shown with the date it opens, not actionable. */
const SCHEDULED_EVALUATIONS: LearnerEvaluation[] = [
  { id: "kt-2", name: "Quality standards knowledge test", kind: "Knowledge test", minutes: 22, questions: 11, status: "Not started", opensAt: "Opens 4 Aug", required: true },
  { id: "sat-2", name: "Satisfaction survey", kind: "Satisfaction", minutes: 2, questions: 4, status: "Not started", opensAt: "Opens when you finish the course" },
]
const SCHEDULED_IDS = new Set(["kt-2", "sat-2"])

const TEAM_EVALUATIONS: TeamEvaluationRow[] = [
  { id: "eff-1", survey: "Effectiveness survey", course: "Fundamentos de la gestión de calidad con ISO 9001", participant: "Laura Martinez", assigned: "21 Jul 2026", status: "Pending" },
  { id: "eff-2", survey: "Effectiveness survey", course: "Harassment Prevention Training", participant: "Marc Vidal", assigned: "14 Jul 2026", status: "Pending" },
  { id: "eff-3", survey: "Effectiveness survey", course: "Inclusive Language", participant: "Ana Ruiz", assigned: "2 Jul 2026", status: "Completed" },
]

const SATISFACTION_QUESTIONS: SurveyFormBuilderElement[] = [
  {
    type: "question",
    question: {
      id: "sat-q1",
      title: "How satisfied are you with this course?",
      type: "select",
      required: true,
      options: [
        { value: "s5", label: "Very satisfied" },
        { value: "s4", label: "Satisfied" },
        { value: "s3", label: "Neutral" },
        { value: "s2", label: "Dissatisfied" },
      ],
    },
  },
  {
    type: "question",
    question: {
      id: "sat-q2",
      title: "The content was clear and useful for my role",
      type: "select",
      required: true,
      options: [
        { value: "a4", label: "Strongly agree" },
        { value: "a3", label: "Agree" },
        { value: "a2", label: "Disagree" },
        { value: "a1", label: "Strongly disagree" },
      ],
    },
  },
]

const EFFECTIVENESS_QUESTIONS: SurveyFormBuilderElement[] = [
  {
    type: "question",
    question: {
      id: "eff-q1",
      title: "Has the participant applied what they learned on the job?",
      type: "select",
      required: true,
      options: [
        { value: "e4", label: "Consistently" },
        { value: "e3", label: "Often" },
        { value: "e2", label: "Occasionally" },
        { value: "e1", label: "Not yet" },
      ],
    },
  },
  {
    type: "question",
    question: {
      id: "eff-q2",
      title: "Overall impact of this training on their performance",
      type: "select",
      required: true,
      options: [
        { value: "i4", label: "High impact" },
        { value: "i3", label: "Moderate impact" },
        { value: "i2", label: "Low impact" },
        { value: "i1", label: "No visible impact" },
      ],
    },
  },
]

const SURVEY_META: Record<
  string,
  { title: string; course: string; elements: SurveyFormBuilderElement[]; backView: "learner-course" | "team-evals"; completed?: boolean }
> = {
  "kt-1": { title: "Knowledge check", course: "Fundamentos de la gestión de calidad con ISO 9001", elements: QUIZ_QUESTIONS["m1-2"], backView: "learner-course" },
  "sat-1": { title: "Satisfaction survey", course: "Fundamentos de la gestión de calidad con ISO 9001", elements: SATISFACTION_QUESTIONS, backView: "learner-course", completed: true },
  "eff-1": { title: "Effectiveness survey · Laura Martinez", course: "Fundamentos de la gestión de calidad con ISO 9001", elements: EFFECTIVENESS_QUESTIONS, backView: "team-evals" },
  "eff-2": { title: "Effectiveness survey · Marc Vidal", course: "Harassment Prevention Training", elements: EFFECTIVENESS_QUESTIONS, backView: "team-evals" },
  "eff-3": { title: "Effectiveness survey · Ana Ruiz", course: "Inclusive Language", elements: EFFECTIVENESS_QUESTIONS, backView: "team-evals", completed: true },
}

type FinishedPerson = {
  name: string
  group: string
  /** knowledge test score */ score: number
  /** session attendance % */ attendance: number
  /** quiz average */ quiz: number
  /** finished every LMS module */ modulesDone: boolean
  /** modules finished, when they did not finish them all */ modulesAt?: number
  /** The minimums PINNED on this membership when it was judged. If the admin
   *  chose not to apply a change to the people already completed, they keep the
   *  old bar — so two rows can be measured against different numbers, which is
   *  why the bar travels with the person (Álvaro, 6-ago). */
  ktMin?: number
  quizMin?: number
  attMin?: number
  /** the test has not been taken yet — that is not a 0, it is Pending */
  ktPending?: boolean
  /** sessions of this group still to be held: a 68% with one left can end at 100% */
  sessionsLeft?: number
}

/** The course has 8 LMS modules — the denominator of the "LMS modules" tag. */
const COURSE_MODULES = 8

/** They are marked completed, so every one of them meets the baseline: modules
 *  finished, quiz ≥ 80, attendance 100%, knowledge test ≥ 50. Their variety is in
 *  the margin above each bar, which is what makes a raise catch some and not
 *  others. Anything else would be a person who completed without meeting the
 *  conditions — impossible in the product. */
const FINISHED_PEOPLE: FinishedPerson[] = [
  { name: "Ana Vidal", group: "g1", score: 52, attendance: 88, quiz: 84, modulesDone: true, ktMin: 50 },
  { name: "Luis Ortega", group: "g1", score: 58, attendance: 100, quiz: 96, modulesDone: true, ktMin: 50 },
  { name: "Marta Ruiz", group: "g1", score: 64, attendance: 76, quiz: 80, modulesDone: true, ktMin: 50 },
  { name: "Jorge Peña", group: "g1", score: 71, attendance: 92, quiz: 88, modulesDone: true, ktMin: 50 },
  { name: "Sara Mora", group: "g1", score: 78, attendance: 100, quiz: 100, modulesDone: true, ktMin: 50 },
  { name: "Iván Bravo", group: "g1", score: 85, attendance: 80, quiz: 82, modulesDone: true, ktMin: 50 },
  { name: "Elena Sanz", group: "g1", score: 92, attendance: 96, quiz: 92, modulesDone: true, ktMin: 50 },
  { name: "Diego Lara", group: "g1", score: 99, attendance: 100, quiz: 86, modulesDone: true, ktMin: 50 },
  { name: "Nuria Lara", group: "g2", score: 51, attendance: 84, quiz: 81, modulesDone: true },
  { name: "Pablo Gil", group: "g2", score: 55, attendance: 100, quiz: 95, modulesDone: true },
  { name: "Clara Soler", group: "g2", score: 60, attendance: 78, quiz: 83, modulesDone: true },
  { name: "Hugo Vidal", group: "g2", score: 66, attendance: 92, quiz: 90, modulesDone: true },
  { name: "Lucía Peña", group: "g2", score: 70, attendance: 100, quiz: 85, modulesDone: true },
  { name: "Marc Ortega", group: "g2", score: 74, attendance: 88, quiz: 100, modulesDone: true },
  { name: "Rosa Mora", group: "g2", score: 79, attendance: 76, quiz: 87, modulesDone: true },
  { name: "Óscar Ruiz", group: "g2", score: 83, attendance: 96, quiz: 82, modulesDone: true },
  { name: "Bea Sanz", group: "g2", score: 88, attendance: 100, quiz: 93, modulesDone: true },
  { name: "Toni Bravo", group: "g2", score: 91, attendance: 80, quiz: 80, modulesDone: true },
  { name: "Alba Gil", group: "g2", score: 95, attendance: 100, quiz: 97, modulesDone: true },
  { name: "Raúl Soler", group: "g2", score: 100, attendance: 90, quiz: 89, modulesDone: true },
  { name: "Eva Vidal", group: "g3", score: 53, attendance: 82, quiz: 83, modulesDone: true },
  { name: "Mateo Lara", group: "g3", score: 62, attendance: 100, quiz: 91, modulesDone: true },
  { name: "Irene Mora", group: "g3", score: 75, attendance: 76, quiz: 80, modulesDone: true },
  { name: "Adrián Sanz", group: "g3", score: 88, attendance: 94, quiz: 95, modulesDone: true },
  { name: "Paula Ruiz", group: "g3", score: 97, attendance: 100, quiz: 99, modulesDone: true },
]

/** People in these groups who are NOT completed. Relaxing a condition can only
 *  change these: the ones already completed keep it. Under the baseline every one
 *  of them misses at least one condition. */
const UNFINISHED_PEOPLE: FinishedPerson[] = [
  // Each one misses exactly what its comment says, and the table now carries the
  // column that shows it, so no row contradicts itself.
  { name: "Nerea Costa", group: "g1", score: 44, attendance: 96, quiz: 92, modulesDone: true }, // knowledge test
  { name: "Bruno Vega", group: "g1", score: 62, attendance: 100, quiz: 76, modulesDone: true }, // quiz score
  { name: "Alicia Roca", group: "g1", score: 0, attendance: 60, quiz: 70, modulesDone: false, modulesAt: 4, ktPending: true, sessionsLeft: 1 }, // everything, and the test not taken yet
  { name: "Tomás Ferrer", group: "g2", score: 48, attendance: 100, quiz: 88, modulesDone: true }, // knowledge test
  { name: "Carla Ruano", group: "g2", score: 55, attendance: 68, quiz: 95, modulesDone: true, sessionsLeft: 1 }, // attendance, with a session still to be held
  { name: "Iker Blanco", group: "g2", score: 20, attendance: 100, quiz: 60, modulesDone: true }, // test + quiz
  { name: "Nadia Prat", group: "g3", score: 45, attendance: 100, quiz: 90, modulesDone: true }, // knowledge test
  { name: "Unai Serra", group: "g3", score: 70, attendance: 100, quiz: 84, modulesDone: false, modulesAt: 5 }, // modules
]

const GROUP_META: Record<string, { name: string; dates: string; pending: number }> = {
  // The same group names the rest of the prototype uses (they come from the real
  // course in the clone), not a second naming scheme invented for this table.
  g1: { name: "Edición - enero 2026", dates: "1 Apr – 30 Jun 2026", pending: 4 },
  g2: { name: "Edición - noviembre 2025", dates: "7 Jan – 28 Mar 2026", pending: 4 },
  g3: { name: "Edición - febrero 2026", dates: "Started 12 Feb 2026", pending: 9 },
}

type Criteria = {
  modules: boolean
  quizMinimum: number
  attendance: boolean
  attendanceMinimum: number
  knowledge: boolean
  knowledgeMinimum: number
}

type StricterCriterion = {
  id: "knowledge" | "modules" | "quiz" | "attendance"
  /** named as the settings card it comes from (course-settings/state.ts:771-787) */
  label: string
  /** the new bar, said in full so each line explains itself */
  need: string
  /** where this person stands, or "" when this criterion is not their problem */
  valueFor: (p: FinishedPerson) => string
}

/** They already completed, so they met the old criteria: only a criterion the
 *  admin just changed AND made stricter can newly fail them. One line per
 *  criterion, and the row grows: no tag has to carry a value, and no column has
 *  to fight for width. */
function stricterCriteria(before: Criteria, after: Criteria): StricterCriterion[] {
  const out: StricterCriterion[] = []
  if (after.knowledge && (!before.knowledge || after.knowledgeMinimum > before.knowledgeMinimum))
    out.push({
      id: "knowledge",
      label: "Knowledge test",
      need: `${after.knowledgeMinimum}%`,
      valueFor: (p) => (p.score < after.knowledgeMinimum ? `${p.score}%` : ""),
    })
  if (after.modules && !before.modules)
    out.push({
      id: "modules",
      label: "LMS modules",
      need: `all ${COURSE_MODULES}`,
      valueFor: (p) => (p.modulesDone ? "" : `${p.modulesAt ?? 0} of ${COURSE_MODULES}`),
    })
  if (after.modules && (!before.modules || after.quizMinimum > before.quizMinimum))
    out.push({
      id: "quiz",
      label: "Quiz score",
      need: `${after.quizMinimum}%`,
      valueFor: (p) => (p.quiz < after.quizMinimum ? `${p.quiz}%` : ""),
    })
  if (after.attendance && (!before.attendance || after.attendanceMinimum > before.attendanceMinimum))
    out.push({
      id: "attendance",
      label: "Attendance",
      need: `${after.attendanceMinimum}%`,
      valueFor: (p) => (p.attendance < after.attendanceMinimum ? `${p.attendance}%` : ""),
    })
  return out
}

/** Width a column needs for its own header, so nothing is ever truncated.
 *  Calibrated against the rendered header font (measured in the DOM: 7.8px per
 *  character) plus the cell's own padding and sort affordance. */
function headerWidth(label: string) {
  return Math.ceil(label.length * 7.8) + 38
}

function reasonsFor(
  p: FinishedPerson,
  before: Criteria,
  after: Criteria
): { requirement: string; value: string }[] {
  return stricterCriteria(before, after)
    .map((c) => ({ requirement: c.label, value: c.valueFor(p) }))
    .filter((r) => r.value !== "")
}

/** Who, among those who already completed, would not meet the criteria now. */
function failingIn(groupId: string, after: Criteria, before: Criteria = COMPLETION_BASELINE) {
  return FINISHED_PEOPLE.filter(
    (p) => p.group === groupId && reasonsFor(p, before, after).length > 0
  )
}

/** Every condition, ANDed — the only way to know whether somebody who is NOT
 *  completed would now be. Losing it only needs the tightened condition; gaining
 *  it needs all of them. */
function meetsAll(p: FinishedPerson, c: Criteria) {
  if (c.modules && (!p.modulesDone || p.quiz < c.quizMinimum)) return false
  if (c.attendance && p.attendance < c.attendanceMinimum) return false
  if (c.knowledge && p.score < c.knowledgeMinimum) return false
  return true
}

/** The mirror of stricterCriteria: what the admin has just relaxed, and which of
 *  those conditions was the one blocking this person. */
function looserCriteria(before: Criteria, after: Criteria): StricterCriterion[] {
  const out: StricterCriterion[] = []
  if (before.knowledge && (!after.knowledge || after.knowledgeMinimum < before.knowledgeMinimum))
    out.push({
      id: "knowledge",
      label: "Knowledge test",
      need: "",
      valueFor: (p) => (p.score < before.knowledgeMinimum ? `${p.score}%` : ""),
    })
  if (before.modules && !after.modules)
    out.push({
      id: "modules",
      label: "LMS modules",
      need: "",
      valueFor: (p) => (!p.modulesDone ? "unfinished" : ""),
    })
  if (before.modules && after.modules && after.quizMinimum < before.quizMinimum)
    out.push({
      id: "quiz",
      label: "Quiz score",
      need: "",
      valueFor: (p) => (p.quiz < before.quizMinimum ? `${p.quiz}%` : ""),
    })
  if (before.attendance && (!after.attendance || after.attendanceMinimum < before.attendanceMinimum))
    out.push({
      id: "attendance",
      label: "Attendance",
      need: "",
      valueFor: (p) => (p.attendance < before.attendanceMinimum ? `${p.attendance}%` : ""),
    })
  return out
}

/** The conditions that were holding this person back and no longer do. */
function unblockedFor(p: FinishedPerson, before: Criteria, after: Criteria) {
  return looserCriteria(before, after)
    .map((c) => ({ requirement: c.label, value: c.valueFor(p) }))
    .filter((r) => r.value !== "")
}

/** Who, among those who are NOT completed, would be completed now. */
function gainingIn(groupId: string, after: Criteria, before: Criteria = COMPLETION_BASELINE) {
  return UNFINISHED_PEOPLE.filter(
    (p) => p.group === groupId && !meetsAll(p, before) && meetsAll(p, after)
  )
}

/** The conditions behind the changes in this group, without listing anybody:
 *  the union of what makes people fall and what unblocks the others. */
function causesIn(groupId: string, after: Criteria, before: Criteria = COMPLETION_BASELINE) {
  const names = [
    ...failingIn(groupId, after, before).flatMap((p) =>
      reasonsFor(p, before, after).map((r) => r.requirement)
    ),
    ...gainingIn(groupId, after, before).flatMap((p) =>
      unblockedFor(p, before, after).map((r) => r.requirement)
    ),
  ]
  return [...new Set(names)]
}

function failingInLegacy(groupId: string, c: Criteria) {
  return FINISHED_PEOPLE.filter(
    (p) =>
      p.group === groupId &&
      // Only the requirements that are switched ON are judged.
      ((c.knowledge && p.score < c.knowledgeMinimum) ||
        (c.modules && p.quiz < c.quizMinimum) ||
        (c.attendance && p.attendance < c.attendanceMinimum) ||
        (c.modules && !p.modulesDone))
  )
}

function buildBaseGroups(c: Criteria): AffectedGroup[] {
  return Object.entries(GROUP_META).map(([id, meta]) => ({
    id,
    name: meta.name,
    dates: meta.dates,
    completed: FINISHED_PEOPLE.filter((p) => p.group === id).length,
    notCompleted: UNFINISHED_PEOPLE.filter((p) => p.group === id).length,
    pending: meta.pending,
    wouldFail: failingIn(id, c).length,
    wouldPass: gainingIn(id, c).length,
  }))
}

function peopleOf(group: AffectedGroup): AffectedPerson[] {
  return failingIn(group.id, { ...completionDraft }).map((person) => ({
    name: person.name,
    from: "Passed" as const,
    to: "Failed" as const,
    reason: `${person.score}%`,
  }))
}

/** Variant B: the groups the change reaches, with what a membership already
 *  records — how many are Completed and how many are still in progress. No
 *  impact figures: knowing those means evaluating every person, which is the
 *  cost B exists to avoid. Counts stay plain text, since nothing here says these
 *  people change. */
function ReachedGroupsTable({
  groups,
  selectedIds,
  onSelectedIdsChange,
}: {
  groups: AffectedGroup[]
  selectedIds: string[]
  onSelectedIdsChange: (ids: string[]) => void
}) {
  const source = useDataCollectionSource<AffectedGroup>(
    {
      dataAdapter: { fetchData: () => ({ records: groups }) },
      totalItemSummary: (total: number) => `${total} groups`,
      selectable: (row) => row.id,
    },
    [groups]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/reached-groups/v1`}
      storage={false}
      source={source}
      onSelectItems={(selected) => onSelectedIdsChange(selected.selectedIds.map(String))}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                id: "who",
                label: "Group",
                width: 240,
                render: (row: AffectedGroup) => ({ type: "text" as const, value: row.name }),
              },
              {
                id: "completed",
                label: "Completed",
                width: 160,
                render: (row: AffectedGroup) => ({
                  type: "text" as const,
                  value: String(row.completed),
                }),
              },
              {
                // "In progress" is how a participant's own record reads; "ongoing"
                // in this product is a state of the GROUP (lib/trainingGroupStatus).
                id: "ongoing",
                label: "In progress",
                render: (row: AffectedGroup) => ({
                  type: "text" as const,
                  value: String(row.pending),
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

/** Every affected group followed by its people, all visible — no expansion. */
/** The editions as the product's collection: checkbox column and select-all come
 *  with the component — no invented bulk button, no hand-built rows. */
function AffectedEditionsTable({
  groups,
  criteria,
  selectedIds,
  onSelectedIdsChange,
}: {
  groups: AffectedGroup[]
  criteria: Criteria
  selectedIds: string[]
  onSelectedIdsChange: (ids: string[]) => void
}) {
  const showLose = groups.some((g) => g.wouldFail > 0)
  const showGain = groups.some((g) => g.wouldPass > 0)
  const tagsOf = (row: AffectedGroup) =>
    row.reasons?.length
      ? {
          type: "tagList" as const,
          value: {
            type: "raw" as const,
            tags: row.reasons.map((r) => ({ text: r.requirement })),
          },
        }
      : { type: "text" as const, value: "" }

  const source = useDataCollectionSource<AffectedGroup>(
    {
      dataAdapter: { fetchData: () => ({ records: groups }) },
      totalItemSummary: (total: number) => `${total} groups`,
      selectable: (row) => (row.wouldFail === -1 ? undefined : row.id),
      // Only the groups expand; a person carries no chevron.
      itemsWithChildren: (item: AffectedGroup) => item.wouldFail !== -1,
      childrenCount: ({ item }: { item: AffectedGroup }) => item.wouldFail + item.wouldPass,
      fetchChildren: async ({ item }: { item: AffectedGroup }) => ({
        records: [
          // Whoever loses the completion, then whoever gains it: the same act does
          // both, so they belong in one list, each under its own column.
          ...failingIn(item.id, criteria).map((person) => ({
            id: `${item.id}-lose-${person.name}`,
            name: person.name,
            person,
            direction: "lose" as const,
            reasons: reasonsFor(person, COMPLETION_BASELINE, criteria),
            dates: "",
            completed: 0,
            pending: 0,
            wouldFail: -1,
            wouldPass: 0,
          })),
          ...gainingIn(item.id, criteria).map((person) => ({
            id: `${item.id}-gain-${person.name}`,
            name: person.name,
            person,
            direction: "gain" as const,
            reasons: unblockedFor(person, COMPLETION_BASELINE, criteria),
            dates: "",
            completed: 0,
            pending: 0,
            wouldFail: -1,
            wouldPass: 0,
          })),
        ],
        type: "basic" as const,
      }),
      // The component's own bulk bar states the selection and the action, so no
      // hand-written line and no invented header button.
    },
    [groups]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/affected-editions/v1`}
      storage={false}
      source={source}
      onSelectItems={(selected) => onSelectedIdsChange(selected.selectedIds.map(String))}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                id: "who",
                label: "Group",
                width: 240,
                render: (row: AffectedGroup) =>
                  row.wouldFail === -1
                    ? personValue(row.name)
                    : { type: "text" as const, value: row.name },
              },
              // One consequence column per direction, and only if it has content.
              // The group cell carries the count, the person cell the conditions
              // behind their own change — so the header states which way each
              // person moves without a second column to name it.
              ...(showLose
                ? [
                    {
                      id: "lose",
                      label: "No longer completed",
                      // No width on the last column: with every column fixed, the
                      // leftover space became a gutter in front of the table.
                      ...(showGain ? { width: 230 } : {}),
                      render: (row: AffectedGroup) =>
                        row.wouldFail === -1
                          ? row.direction === "lose"
                            ? tagsOf(row)
                            : { type: "text" as const, value: "" }
                          : row.wouldFail > 0
                            ? {
                                // A filled tag, not coloured text: in a row the
                                // weight comes from the background. The level is
                                // data — warning where the completion is taken
                                // away, positive where it is handed out.
                                type: "alertTag" as const,
                                value: {
                                  level: "warning" as const,
                                  label: `${row.wouldFail} of ${row.completed}`,
                                },
                              }
                            : { type: "text" as const, value: "" },
                    },
                  ]
                : []),
              ...(showGain
                ? [
                    {
                      id: "gain",
                      label: "Newly completed",
                      render: (row: AffectedGroup) =>
                        row.wouldFail === -1
                          ? row.direction === "gain"
                            ? tagsOf(row)
                            : { type: "text" as const, value: "" }
                          : row.wouldPass > 0
                            ? {
                                type: "alertTag" as const,
                                value: {
                                  level: "positive" as const,
                                  label: `${row.wouldPass} of ${row.notCompleted ?? 0}`,
                                },
                              }
                            : { type: "text" as const, value: "" },
                    },
                  ]
                : []),
            ],
          },
        },
      ]}
    />
  )
}

function AffectedGroupsTable({
  groups,
  selectedIds,
  onSelectedIdsChange,
}: {
  groups: AffectedGroup[]
  selectedIds: string[]
  onSelectedIdsChange: (ids: string[]) => void
}) {
  const groupRows: AffectedRow[] = useMemo(
    () =>
      groups.map((group) => ({
        id: group.id,
        kind: "group" as const,
        name: group.name,
        why: group.dates,
        wouldFail: group.wouldFail,
        change: "",
      })),
    [groups]
  )

  const source = useDataCollectionSource<AffectedRow>(
    {
      dataAdapter: { fetchData: () => ({ records: groupRows }) },
      totalItemSummary: (total: number) => `${total} groups`,
      selectable: (row: AffectedRow) => (row.kind === "group" ? row.id : undefined),
    },
    [groupRows, groups]
  )

  return (
    <OneDataCollection
      id={`${SLUG}/affected-flat/v1`}
      storage={false}
      source={source}
      onSelectItems={(selected) => onSelectedIdsChange(selected.selectedIds.map(String))}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                id: "name",
                label: "Group",
                render: (row: AffectedRow) => ({ type: "text" as const, value: row.name }),
              },
              {
                // The state, and it flips when you tick: the implication shown,
                // not explained.
                id: "governed",
                label: "Judged with",
                render: (row: AffectedRow) => ({
                  type: "text" as const,
                  value: `${selectedIds.includes(row.id) ? completionDraft.knowledgeMinimum : OLD_MINIMUM}%`,
                }),
              },
              {
                id: "cost",
                label: "Lose their pass",
                render: (row: AffectedRow) =>
                  row.wouldFail > 0
                    ? {
                        type: "alertTag" as const,
                        value: {
                          level: "warning" as const,
                          label: `${row.wouldFail} of ${FINISHED_PEOPLE.filter((p) => p.group === row.id).length}`,
                        },
                      }
                    : { type: "text" as const, value: "—" },
              },
            ],
          },
        },
      ]}
    />
  )
}
