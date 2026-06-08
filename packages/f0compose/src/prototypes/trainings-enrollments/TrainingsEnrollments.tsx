import {
  CardSelectableContainer,
  Chip,
  F0Alert,
  F0AvatarList,
  F0Box,
  F0Card,
  F0DataChart,
  F0BigNumber,
  F0Button,
  F0Dialog,
  F0FilterPickerContent,
  F0FormField,
  F0Heading,
  F0Icon,
  F0Link,
  F0Select,
  F0TagRaw,
  F0Text,
  F0WizardForm,
  StandardLayout,
  TwoColumnLayout,
  f0FormField,
  useF0FormDefinition,
  type CustomFieldRenderProps,
  type F0Field,
} from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  NumberInput,
  ResourceHeader,
  SectionHeader,
  Switch,
  Tabs,
  Textarea,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  Archive,
  Bell,
  CalendarArrowRight,
  ChartLine,
  CheckCircle,
  Computer,
  Cross,
  Delete,
  Download,
  DollarBill,
  Envelope,
  EyeInvisible,
  EyeVisible,
  ExternalLink,
  File,
  Files,
  InfoCircle,
  InProgressTask,
  Link,
  Settings,
  Sliders,
  Sparkles,
  People,
  Search,
  Upload,
} from "@factorialco/f0-react/icons/app"
import {
  type ComponentProps,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useSearchParams } from "react-router-dom"
import { z } from "zod"

import { type Training, trainings } from "@/fixtures"
import { applySort } from "@/lib/applySort"

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
  | "edit-course"
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
  | "add-participants"
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

type ExactCourse = Omit<Training, "objectives" | "courseType"> & {
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
  participants: number
  catalogVisible: boolean
  categories: string[]
  competencies: string[]
  courseType?: "no-editions" | "with-editions"
  // People in "Pending group assignment" for this course. Independent of the
  // enrollment mode — manual courses can have pending people too (from requests,
  // manual assignment without a group, etc.).
  pendingCount?: number
  enrollmentRule?: {
    criteria: string[]
    appliesTo: "new-only" | "everyone"
    matchCount: number
    waitlisted?: number
    assignment?: "direct" | "waitlist"
  }
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
  team: string
  status: "Pending" | "Ongoing" | "Completed" | "Dropped out" | "Pending group assignment"
  certificate: string
  completionDate: string
  courseValidity: string
  sessionAttendance: string
  knowledgeTestResults: "Pending" | "Passed" | "Failed" | "-"
  moduleProgress: string
}
type CourseResourceRow = {
  id: string
  name: string
  type: string
  updatedAt: string
}

export const meta: PrototypeMeta = {
  slug: "trainings-enrollments",
  title: "Training + Automated Enrollments",
  description:
    "Training Courses surface with automated enrollment rules: dynamic rules and one-shot enrollments powered by ONE AI-assisted creation.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["training", "courses", "enrollments", "admin", "ai"],
  createdAt: "2026-05-28",
}

const moduleInfo = {
  id: "company_trainings" as const,
  name: "Trainings",
  href: "/p/trainings-enrollments",
}

const routes = {
  home: "/p/trainings-enrollments",
  courses: "/p/trainings-enrollments",
  budgets: "/p/trainings-enrollments?tab=budgets",
  surveyTemplates: "/p/trainings-enrollments?sub=survey-templates",
  myCourses: "/p/trainings-enrollments?view=free-course",
  course: (courseId: string, tab: CourseDetailTabId = "overview") =>
    `/p/trainings-enrollments?view=detail&course=${encodeURIComponent(courseId)}&dtab=${tab}`,
  group: (courseId: string, groupName: string, tab: GroupDetailTabId = "sessions") =>
    `/p/trainings-enrollments?view=group-detail&course=${encodeURIComponent(courseId)}&group=${encodeURIComponent(groupName)}&gtab=${tab}`,
  budget: (budgetId: string) =>
    `/p/trainings-enrollments?view=budget-detail&budget=${encodeURIComponent(budgetId)}`,
}

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

const exactCourses = trainings.slice(0, 4).map((training, index) => {
  const upstreamNames = [
    "Fundamentos de la gestión de calidad con ISO 9001",
    "Merchandising visual y organización de tiendas",
    "Resolución de conflictos y dinámicas de equipo",
  ]
  const upstreamCodes = ["ISO9001-2026", "40001", "60001"]
  const thumbnails = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop",
  ]
  const name = upstreamNames[index] ?? training.name
  const code = upstreamCodes[index] ?? training.code
  const validityExpired = index < 3 ? 0 : training.expiredParticipantCount

  return {
    ...training,
    id: index === 0 ? "7" : index === 1 ? "5" : index === 2 ? "6" : training.id,
    name,
    code,
    status: (index < 8 ? "active" : training.status) as "active" | "draft",
    participants: index < 3 ? (index === 0 ? 24 : 23) : training.participantCount,
    validityExpired,
    catalogVisible: index < 8 ? true : training.catalog,
    thumbnail: thumbnails[index] ?? null,
    requirement: index === 0 ? "mandatory" : "not-mandatory",
    campus: index < 8,
    provider: index < 8 ? "Factorial campus" : "Internal",
    duration: index === 0 ? "10h 0m" : index === 1 ? "6h 30m" : "4h 0m",
    groups:
      index === 0
        ? ["Edición - enero 2025", "Edición - noviembre 2025"]
        : index === 2
          ? ["Edición - Q1 2025", "Edición - Q2 2025"]
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
    courseType: index === 0 || index === 2 ? "with-editions" : "no-editions",
    // Pending group assignment count — independent of mode. Index 0 (automatic)
    // has pending; index 3 (manual) also has pending to show that case.
    pendingCount: index === 0 ? 12 : index === 3 ? 4 : 0,
    enrollmentRule: index === 0 ? {
      criteria: ["Team: Quality & Compliance", "Legal entity: Factorial ES"],
      appliesTo: "everyone",
      matchCount: 35,
      waitlisted: 12,
      assignment: "waitlist",
    } : index === 1 ? {
      criteria: ["Team: Retail"],
      appliesTo: "new-only",
      matchCount: 18,
      assignment: "direct",
    } : index === 2 ? {
      criteria: ["Team: Customer Support", "Workplace: Madrid"],
      appliesTo: "everyone",
      matchCount: 27,
      assignment: "direct",
    } : undefined,
  }
}) as unknown as ExactCourse[]

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

const courseParticipantStatuses: CourseParticipantRow["status"][] = [
  "Ongoing", "Completed", "Ongoing", "Pending", "Completed",
  "Ongoing", "Dropped out", "Completed", "Ongoing", "Pending group assignment",
  "Completed", "Ongoing", "Pending", "Completed", "Ongoing",
  "Completed", "Ongoing", "Pending group assignment", "Completed", "Ongoing",
  "Dropped out", "Completed", "Ongoing", "Pending",
]
const courseParticipantTeams = [
  "Engineering", "Sales", "Marketing", "Product", "Design",
  "Engineering", "HR", "Sales", "Operations", "Engineering",
  "Marketing", "Product", "Finance", "Design", "Engineering",
  "Sales", "HR", "Operations", "Product", "Marketing",
  "Engineering", "Finance", "Sales", "Design",
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
].map((name, index) => {
  const status = courseParticipantStatuses[index] ?? "Ongoing"
  const completed = status === "Completed"
  const dropped = status === "Dropped out"
  const pending = status === "Pending"
  const waitlisted = status === "Pending group assignment"
  return {
    id: `course-participant-${index + 1}`,
    name,
    team: courseParticipantTeams[index] ?? "Engineering",
    status,
    certificate: completed ? "Issued" : "-",
    completionDate: completed ? `2026-0${(index % 5) + 1}-${15 + (index % 12)}` : "Not set",
    courseValidity: completed ? "2027-05-01" : "No date",
    sessionAttendance: dropped || waitlisted || pending ? "-" : `${Math.min(index % 3 + 1, 3)}/3`,
    knowledgeTestResults: completed ? "Passed" : dropped ? "-" : pending || waitlisted ? "-" : index % 4 === 0 ? "Pending" : "Passed",
    moduleProgress: dropped || waitlisted || pending ? "0/3" : `${Math.min(index % 3 + 1, 3)}/3`,
  }
})

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
  "edit-course",
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

export default function TrainingsEnrollments() {
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
    const courseType: "no-editions" | "with-editions" = values.courseType === "with-editions" ? "with-editions" : "no-editions"
    const autoEnroll = values.enableAutoEnrollment !== false
    const { criteria, matchCount } = filterStateSummary(values.audienceCriteria)
    const withEditions = courseType === "with-editions"
    const enrollmentRule = autoEnroll
      ? {
          criteria,
          appliesTo: "everyone" as const,
          matchCount,
          assignment: withEditions ? ("waitlist" as const) : ("direct" as const),
          ...(withEditions ? { waitlisted: matchCount } : {}),
        }
      : undefined
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
      courseType,
      enrollmentRule,
      // A freshly created course has no training group yet → its settings show the
      // "no group" assignment case (warning + create group).
      groups: [],
    }
    setCourses((currentCourses) => [newCourse, ...currentCourses])
    setToast(null)
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

  if (view === "edit-course" && selectedCourse) {
    const sectionParam = searchParams.get("section")
    const initialSection = (["basic", "admin", "completion", "enrollment"] as const).includes(
      sectionParam as EditCourseSection
    )
      ? (sectionParam as EditCourseSection)
      : "basic"
    return (
      <EditCourseSettings
        course={selectedCourse}
        initialSection={initialSection}
        onSave={() => {
          setToast("settings")
          setSearchParams({ view: "detail", course: selectedCourse.id })
        }}
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
  // F0WizardForm (design-system wizard) owns the standard fields. Two steps
  // are rich custom UI: the course-type cards (step 1) and the entire
  // enrollment step (step 4). The enrollment step reacts to `courseType`,
  // chosen in step 1 — a cross-step dependency a schema-driven custom field
  // can't read on its own. We keep that shared state here and read it from
  // refs inside the (memoized) field renderers so the closures always see the
  // latest value.
  const initialEnrollment: Record<string, unknown> = {
    enableAutoEnrollment: false,
    audienceCriteria: {},
    enrollmentAssignment: "waitlist",
    enrollmentAppliesTo: "new-only",
  }
  const [courseType, setCourseType] = useState<string>("with-editions")
  const [enrollment, setEnrollment] = useState<Record<string, unknown>>(initialEnrollment)
  const [audienceError, setAudienceError] = useState(false)
  const [instanceKey, setInstanceKey] = useState(0)

  const courseTypeRef = useRef(courseType)
  courseTypeRef.current = courseType
  const enrollmentRef = useRef(enrollment)
  enrollmentRef.current = enrollment
  const audienceErrorRef = useRef(audienceError)
  audienceErrorRef.current = audienceError

  // F0WizardForm invokes `onSubmit` on render of the last step (not just on the
  // "Create" click), which would flag the audience error prematurely. We only
  // want the error when the user actually clicks the final "Create" button, so
  // we capture real submit clicks here and let onSubmit check this flag.
  const submitClickedRef = useRef(false)
  useEffect(() => {
    if (!isOpen) return
    const onDocClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const button = target?.closest("button")
      if (button && /^(create|submit)$/i.test((button.textContent ?? "").trim())) {
        submitClickedRef.current = true
        // Safety net: clear if no submit actually runs shortly after.
        window.setTimeout(() => {
          submitClickedRef.current = false
        }, 1000)
      }
    }
    document.addEventListener("click", onDocClick, true)
    return () => document.removeEventListener("click", onDocClick, true)
  }, [isOpen])

  // Each time the wizard opens, start fresh: clear the bridge state and remount
  // F0WizardForm (via key) so its fields reset to defaults at step 1.
  const wasOpen = useRef(false)
  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      setCourseType("with-editions")
      setEnrollment({
        enableAutoEnrollment: false,
        audienceCriteria: {},
        enrollmentAssignment: "waitlist",
        enrollmentAppliesTo: "new-only",
      })
      setAudienceError(false)
      setInstanceKey((key) => key + 1)
    }
    wasOpen.current = isOpen
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const updateEnrollment = (field: string, value: unknown) => {
    if (field === "audienceCriteria" || field === "enableAutoEnrollment") setAudienceError(false)
    setEnrollment((current) => ({ ...current, [field]: value }))
  }

  const thumbnailField: F0Field = {
    id: "thumbnail",
    type: "file",
    label: "Thumbnail",
    description: "Add an image to show as the course thumbnail in the Catalog.",
    accept: ["image"],
  }

  // Built once; the custom renderers read live state via refs so the memoized
  // closures never go stale.
  const schema = useMemo(
    () =>
      z.object({
        name: f0FormField(z.string().min(1, "Course name is required"), {
          label: "Course name",
          placeholder: "Course name",
          section: "basic",
        }),
        courseType: f0FormField(z.any(), {
          fieldType: "custom",
          label: "Course type",
          section: "basic",
          render: () => (
            <CourseTypeField
              values={{ courseType: courseTypeRef.current }}
              onUpdate={(_field, value) => setCourseType((value as string) ?? "no-editions")}
            />
          ),
        }),
        thumbnail: f0FormField(z.any().optional(), {
          fieldType: "custom",
          label: "Thumbnail",
          section: "basic",
          render: ({ value, onChange }: CustomFieldRenderProps) => (
            <F0FormField field={thumbnailField} value={value} onChange={onChange} initialFiles={[]} />
          ),
        }),
        objectives: f0FormField(z.string().optional(), {
          fieldType: "textarea",
          label: "Objectives",
          helpText: "Define this course's goals and outcomes",
          section: "basic",
        }),
        description: f0FormField(z.string().optional(), {
          fieldType: "textarea",
          label: "Description",
          helpText: "Add information about the content and structure of the course",
          section: "basic",
        }),
        competencies: f0FormField(z.array(z.string()).optional(), {
          fieldType: "select",
          label: "Competencies",
          helpText: "Select the competencies developed within this course",
          section: "basic",
          options: [
            { value: "Gestión de cumplimiento.", label: "Gestión de cumplimiento." },
            { value: "Creatividad", label: "Creatividad" },
            { value: "Pensamiento estratégico", label: "Pensamiento estratégico" },
            { value: "Liderazgo de equipos", label: "Liderazgo de equipos" },
          ],
        }),
        hours: f0FormField(z.number().min(0).optional(), {
          label: "Hours",
          section: "basic",
        }),
        minutes: f0FormField(z.number().min(0).max(59).optional(), {
          label: "Minutes",
          section: "basic",
        }),
        mandatoryCourse: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Mandatory course",
          helpText: "Mark this course as mandatory to track completion and meet compliance requirements.",
          section: "basic",
        }),
        courseValidity: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Course validity",
          helpText: "This course is valid for a limited time and must be retaken afterward.",
          section: "basic",
        }),
        year: f0FormField(z.number().optional(), {
          label: "Year",
          section: "admin",
        }),
        internalCode: f0FormField(z.string().optional(), {
          label: "Internal code",
          helpText: "If you use an internal code in other applications or files, add it here as well",
          section: "admin",
        }),
        type: f0FormField(z.enum(["internal", "external"]), {
          fieldType: "select",
          label: "Type",
          section: "admin",
          options: [
            { value: "internal", label: "Internal" },
            { value: "external", label: "External" },
          ],
        }),
        externalProvider: f0FormField(z.string().optional(), {
          label: "External provider",
          section: "admin",
        }),
        tags: f0FormField(z.array(z.string()).optional(), {
          fieldType: "select",
          label: "Tags",
          helpText: "Adding tags facilitates the process of identifying and filtering course",
          section: "admin",
          options: [
            { value: "Merchandising", label: "Merchandising" },
            { value: "Creatividad", label: "Creatividad" },
            { value: "Gestión de conflictos", label: "Gestión de conflictos" },
          ],
        }),
        subsidized: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Subsidize this course",
          section: "admin",
        }),
        linkedWorkflow: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Link this course with Workflows",
          section: "admin",
        }),
        completeAllLmsModules: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Complete all LMS modules",
          helpText: "Participants must complete all course modules and pass every quiz.",
          section: "completion",
        }),
        attendSessions: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Attend sessions",
          section: "completion",
        }),
        minimumAttendance: f0FormField(z.number().min(0).max(100).optional(), {
          label: "Minimum attendance",
          helpText: "Set the minimum percentage of sessions in this course each participant needs to attend.",
          section: "completion",
        }),
        knowledgeTestRequired: f0FormField(z.boolean(), {
          fieldType: "checkbox",
          label: "Pass the knowledge test",
          helpText: "Participants must pass a test that assesses their understanding of this course's content.",
          section: "completion",
        }),
        enrollment: f0FormField(z.any(), {
          fieldType: "custom",
          label: "Enrollment",
          section: "enrollment",
          render: () => (
            <InscripcionStep
              values={{ ...enrollmentRef.current, courseType: courseTypeRef.current }}
              onUpdate={updateEnrollment}
              audienceError={audienceErrorRef.current}
            />
          ),
        }),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const formDefinition = useF0FormDefinition({
    name: "new-course",
    schema,
    submitConfig: { label: "Create" },
    defaultValues: {
      name: "",
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
    },
    sections: {
      basic: {
        title: "Basic information",
        description: "Provide details to easily identify this course.",
      },
      admin: {
        title: "Admin information",
        description:
          "Details in this section are for administrative purposes, and this information won't display for participants.",
      },
      completion: {
        title: "Course completion",
        description: "Define the conditions participants must meet to complete the course.",
      },
      enrollment: {
        title: "Enrollment",
        description: inscripcionCopy.step.subtitle,
      },
    },
    onSubmit: ({ data }) => {
      // F0WizardForm calls onSubmit on every render of the last step, not only on
      // the Submit click. We must ONLY act on a genuine Submit click — otherwise
      // selecting a criterion (which passes validation) would create the course
      // and navigate away on the next render. Consume the click flag here.
      const isRealSubmit = submitClickedRef.current
      submitClickedRef.current = false
      if (!isRealSubmit) {
        return { success: false as const }
      }
      const enroll = enrollmentRef.current
      const autoEnrollOn = enroll.enableAutoEnrollment !== false
      const audienceSelected = filterStateSelectedCount(enroll.audienceCriteria) > 0
      if (autoEnrollOn && !audienceSelected) {
        setAudienceError(true)
        return {
          success: false as const,
          message: "Select at least one criterion to enroll people automatically.",
        }
      }
      onToast("draft")
      onCreateCourse({ ...data, courseType: courseTypeRef.current, ...enroll })
      return { success: true as const }
    },
  })

  return (
    <F0WizardForm
      key={instanceKey}
      formDefinition={formDefinition}
      isOpen={isOpen}
      onClose={onClose}
      title="New course"
      width="xl"
    />
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

// ---------------------------------------------------------------------------
// Course type (step 1) + Inscripción (step 4) of the course creation wizard
// ---------------------------------------------------------------------------

// Centralised, translation-ready copy (acts as i18n keys for this prototype).
const inscripcionCopy = {
  courseType: {
    label: "Course type",
    noEditions: {
      title: "One-time",
      description: "Runs once. No separate groups to manage.",
    },
    withEditions: {
      title: "Recurring",
      description: "Runs in separate training groups over time. You create each group.",
    },
  },
  step: {
    title: "Enrollment",
    subtitle: "Define who takes this course.",
  },
  toggle: {
    label: "Automatic enrollment",
    hint: "People who match the criteria are added automatically, now and as new people join.",
  },
  audience: {
    label: "Who should take this course?",
    searchPlaceholder: "Search workplace, team, role…",
    noResults: "No results",
    previewSuffix: "people match",
    emptyHint: "Add one or more — anyone matching will be enrolled.",
    hint: "Since this is a new course, everyone who matches the criteria is enrolled, plus anyone who joins from now on.",
    error: "Select who should take this course, or turn off automatic enrollment.",
    // Multi-group (any / all) vocabulary — never expose "AND" / "OR" as operators.
    groupsHeader: "People who match all of the groups below.",
    groupLabel: "Match any of these",
    andAlso: "and also",
    addCriterion: "or",
    addGroup: "And also must match",
    removeGroup: "Remove group",
    zeroMatch: "No one matches this combination. Check your criteria.",
    // What happens to matching people, by course type (no "rule" wording at creation).
    enrolledNote: "People who match are enrolled right away.",
    waitlistNote: "People who match wait to be assigned to a training group.",
  },
  // "Who does this apply to?" — shown ONLY when a criterion change ADDS people who
  // already match. It names the concrete change rather than a generic warning, and
  // the count of affected people lives here (once), not in a separate alert.
  appliesTo: {
    changeLabel: (added: string) => `You added ${added}. Who should this apply to?`,
    changeHint: (count: number, added: string) =>
      `${count} ${count === 1 ? "person" : "people"} in ${added} ${count === 1 ? "matches" : "match"} but ${count === 1 ? "isn't" : "aren't"} enrolled yet.`,
    newOnly: "New people only",
    addExisting: (count: number) => `Add the ${count} too`,
  },
  // PATTERN B — "people are removed": a criterion was removed/swapped, or automatic
  // enrollment was turned off. Informational note (nobody is unenrolled).
  ruleRemoval: {
    note: (groups: string) => `Already enrolled people stay. ${groups} will no longer be enrolled automatically.`,
    automationOff: "Already enrolled people stay. No one new will be enrolled automatically.",
  },
  assignment: {
    label: "How are people assigned?",
    waitlist: {
      title: "Leave as pending group assignment",
      description: "People stay pending group assignment. You decide when to create the group and assign them.",
    },
    group: {
      title: "Assign to an existing group",
      description: "Matching people are enrolled directly into a group you choose.",
      descriptionNoGroups: "There are no groups yet — this option will be available once you create the first one.",
    },
    warning: "This course doesn't have any groups yet. Matching people will stay pending group assignment until you create a group and assign them. Enrollment is not immediate.",
  },
  manualCallout: "No automatic enrollment. You'll be able to enroll participants manually from the course once it's created, in the Participants tab.",
} as const

const AUDIENCE_PREVIEW_AVATARS = [
  { firstName: "Laura", lastName: "García" },
  { firstName: "Marc", lastName: "López" },
  { firstName: "Anna", lastName: "Martín" },
  { firstName: "Jordi", lastName: "Pujol" },
  { firstName: "Elena", lastName: "Ruiz" },
]

// Step 1 — course type selector (no editions / with editions)
function CourseTypeField({ values, onUpdate }: { values: Record<string, unknown>; onUpdate: (field: string, value: unknown) => void }) {
  const courseType = (values.courseType as string) ?? "no-editions"
  const copy = inscripcionCopy.courseType
  return (
    <div className="flex flex-col gap-2">
      {/* Exact F0 input-field label style (matches the DS <label> markup) so
          "Course type" reads like every other field label. */}
      <span className="text-base font-medium leading-normal text-f1-foreground-secondary">
        {copy.label}
      </span>
      {/* Native F0 CardSelectableContainer in grouped mode: one bordered container
          with the two types as rows (radio + title + description) and a divider
          between — the Factorial pattern for picking one config, compact (not the
          big floating cards) with both descriptions visible. */}
      <CardSelectableContainer
        grouped
        label={copy.label}
        value={courseType}
        onChange={(val) => onUpdate("courseType", val ?? "no-editions")}
        items={[
          { value: "no-editions", title: copy.noEditions.title, description: copy.noEditions.description },
          { value: "with-editions", title: copy.withEditions.title, description: copy.withEditions.description },
        ]}
      />
    </div>
  )
}

// Trigger field ("Search workplace, team, role…" with selected chips). Clicking
// it reveals the faceted panel below — mirrors the real product flow where the
// FilterPickerContent panel opens from a trigger.
function WizardAudienceFilterPicker({
  value,
  onChange,
  error = false,
  pendingNote,
}: {
  value: AudienceFilterState
  onChange: (next: AudienceFilterState) => void
  error?: boolean
  // Discreet note shown under the people-match count explaining what happens to
  // matching people. Differs by course type at creation; settings omits it.
  pendingNote?: string
}) {
  const facetKeys = Object.keys(enrollmentFilterDef)

  // Flatten every facet into a single searchable option list. The option value
  // is namespaced "facetKey::optionValue" so a label shared across facets (e.g.
  // a manager listed under both "Direct reports of" and "All reportees of")
  // stays unique, and the label is prefixed with its facet so the origin is
  // visible inside the dropdown too. Memoized so the array identity is stable:
  // F0Select keys its internal data source on the `options` reference, and the
  // wizard re-renders this step often — a fresh array each render would reset
  // the data source mid-fetch and leave the dropdown empty.
  const selectOptions = useMemo(
    () =>
      facetKeys.flatMap((key, index) => {
        const facet = enrollmentFilterDef[key]
        const items = (facet?.options.options ?? []).map((option) => ({
          value: `${key}::${option.value}`,
          label: `${facet?.label ?? key}: ${option.label}`,
        }))
        return index === 0 ? items : [{ type: "separator" as const }, ...items]
      }),
    // enrollmentFilterDef is a module-level constant → compute once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const selectedValues = facetKeys.flatMap((key) =>
    (value[key] ?? []).map((optionValue) => `${key}::${optionValue}`)
  )

  const handleSelectChange = (next: string[]) => {
    const grouped: AudienceFilterState = {}
    for (const composite of next) {
      const separator = composite.indexOf("::")
      if (separator === -1) continue
      const key = composite.slice(0, separator)
      const optionValue = composite.slice(separator + 2)
      grouped[key] = [...(grouped[key] ?? []), optionValue]
    }
    onChange(grouped)
  }

  const chips = facetKeys.flatMap((key) =>
    (value[key] ?? []).map((optionValue) => ({
      key,
      optionValue,
      facetLabel: enrollmentFilterDef[key]?.label ?? key,
      count: mockAudienceCount(optionValue),
    }))
  )
  const removeChip = (key: string, optionValue: string) => {
    const next = (value[key] ?? []).filter((item) => item !== optionValue)
    const updated: AudienceFilterState = { ...value, [key]: next }
    if (next.length === 0) delete updated[key]
    onChange(updated)
  }
  const total = filterStateSummary(value).matchCount
  return (
    <div className="flex flex-col gap-3">
      <F0Select
        multiple
        options={selectOptions}
        value={selectedValues}
        onChange={handleSelectChange}
        label={inscripcionCopy.audience.label}
        placeholder={inscripcionCopy.audience.searchPlaceholder}
        icon={Search}
        showSearchBox
        searchBoxPlaceholder={inscripcionCopy.audience.searchPlaceholder}
        error={error ? inscripcionCopy.audience.error : false}
      />
      {chips.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {chips.map((chip) => (
            <Chip
              key={`${chip.key}:${chip.optionValue}`}
              label={`${chip.facetLabel}: ${chip.optionValue} · ${chip.count}`}
              onClose={() => removeChip(chip.key, chip.optionValue)}
            />
          ))}
        </div>
      )}
      {chips.length > 0 &&
        (total > 0 ? (
          <F0Box
            display="flex"
            flexDirection="column"
            gap="md"
            padding="lg"
            borderRadius="lg"
            border="default"
            borderColor="secondary"
            background="primary"
          >
            <div className="flex items-center gap-3">
              <F0AvatarList
                size="sm"
                type="person"
                avatars={AUDIENCE_PREVIEW_AVATARS}
                max={4}
                remainingCount={Math.max(total - 4, 0)}
              />
              <F0Text variant="body" content={peopleMatchPhrase(total)} />
            </div>
            {pendingNote && (
              <>
                <div className="h-px w-full bg-f1-border-secondary" />
                <F0Text variant="description" content={pendingNote} />
              </>
            )}
          </F0Box>
        ) : (
          <F0Alert variant="warning" title="" description={inscripcionCopy.audience.zeroMatch} />
        ))}
    </div>
  )
}

// Step 4 — Inscripción (creation wizard). Settings reuses the same picker via
// EditCourseEnrollmentSection, which adds the live-course fields.
function InscripcionStep({ values, onUpdate, audienceError = false }: { values: Record<string, unknown>; onUpdate: (field: string, value: unknown) => void; audienceError?: boolean }) {
  // Toggle defaults ON.
  const autoEnroll = values.enableAutoEnrollment !== false
  // One-time courses enroll matching people right away (always-active group);
  // recurring courses send them to the waitlist until assigned to a group.
  const isRecurring = ((values.courseType as string) ?? "no-editions") === "with-editions"
  const pendingNote = isRecurring
    ? inscripcionCopy.audience.waitlistNote
    : inscripcionCopy.audience.enrolledNote

  return (
    <div className="flex flex-col gap-6">
      {/* Automatic enrollment toggle — switch on the left, then label + description */}
      <div className="flex items-start gap-3">
        <Switch
          checked={autoEnroll}
          onCheckedChange={(checked) => onUpdate("enableAutoEnrollment", checked)}
          title={inscripcionCopy.toggle.label}
          hideLabel
        />
        <div className="flex flex-col gap-0.5">
          <F0Text variant="label" content={inscripcionCopy.toggle.label} />
          <F0Text variant="description" content={inscripcionCopy.toggle.hint} />
        </div>
      </div>

      {autoEnroll ? (
        <WizardAudienceFilterPicker
          value={readAudienceFilterState(values.audienceCriteria)}
          onChange={(next) => onUpdate("audienceCriteria", next)}
          error={audienceError}
          pendingNote={pendingNote}
        />
      ) : (
        <F0Alert variant="info" title="" description={inscripcionCopy.manualCallout} />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Enrollment filter definition — consumed by the assign-participants dialog.
// ---------------------------------------------------------------------------

const enrollmentFilterDefinition = {
  workplace: {
    type: "in",
    label: "Workplaces",
    options: {
      options: [
        { value: "Barcelona", label: "Barcelona" },
        { value: "Madrid", label: "Madrid" },
        { value: "Remote", label: "Remote" },
        { value: "London", label: "London" },
        { value: "Berlin", label: "Berlin" },
      ],
    },
  },
  "legal-entity": {
    type: "in",
    label: "Legal entity",
    options: {
      options: [
        { value: "Factorial SL", label: "Factorial SL" },
        { value: "Factorial GmbH", label: "Factorial GmbH" },
        { value: "Factorial Ltd", label: "Factorial Ltd" },
        { value: "Factorial Inc", label: "Factorial Inc" },
      ],
    },
  },
  "direct-reports": {
    type: "in",
    label: "Direct reports of",
    options: {
      options: [
        { value: "Hellen Howard", label: "Hellen Howard" },
        { value: "Marc López", label: "Marc López" },
        { value: "Laura García", label: "Laura García" },
      ],
    },
  },
  "all-reportees": {
    type: "in",
    label: "All reportees of",
    options: {
      options: [
        { value: "Hellen Howard", label: "Hellen Howard" },
        { value: "Marc López", label: "Marc López" },
        { value: "Laura García", label: "Laura García" },
      ],
    },
  },
  team: {
    type: "in",
    label: "Team",
    options: {
      options: [
        { value: "Engineering", label: "Engineering" },
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Product", label: "Product" },
        { value: "Design", label: "Design" },
        { value: "Finance", label: "Finance" },
        { value: "HR", label: "HR" },
        { value: "Operations", label: "Operations" },
      ],
    },
  },
  "job-catalogue": {
    type: "in",
    label: "Job catalogue",
    options: {
      options: [
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Product Manager", label: "Product Manager" },
        { value: "Designer", label: "Designer" },
        { value: "Data Analyst", label: "Data Analyst" },
        { value: "Account Executive", label: "Account Executive" },
        { value: "Recruiter", label: "Recruiter" },
      ],
    },
  },
} as const satisfies Record<string, { type: string; label: string; options?: { options: { value: string; label: string }[] } }>

const enrollmentFilterDef = enrollmentFilterDefinition as unknown as Record<string, { type: "in"; label: string; options: { options: { value: string; label: string }[] } }>

type AudienceFilterState = Record<string, string[] | undefined>
function readAudienceFilterState(value: unknown): AudienceFilterState {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {}
  return value as AudienceFilterState
}

function filterStateSelectedCount(value: unknown): number {
  return Object.values(readAudienceFilterState(value)).reduce(
    (sum, vals) => sum + (Array.isArray(vals) ? vals.length : 0),
    0
  )
}

// Deterministic, believable per-criterion headcount for the audience preview.
function mockAudienceCount(optionValue: string): number {
  let hash = 0
  for (let i = 0; i < optionValue.length; i++) {
    hash = (hash * 31 + optionValue.charCodeAt(i)) >>> 0
  }
  return 14 + (hash % 33) // 14..46
}

// Deterministic set of people (indices into a fixed population) matched by a
// single criterion. Drawing every criterion from the SAME population lets us
// model the real matching semantics: within one facet criteria are OR'd (union
// of these sets), and across different facets they are AND'd (intersection).
const FILTER_POPULATION_SIZE = 180
function optionPersonSet(facetKey: string, optionValue: string): Set<number> {
  const size = mockAudienceCount(optionValue)
  const key = `${facetKey}::${optionValue}`
  let seed = 0
  for (let i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) >>> 0
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const set = new Set<number>()
  while (set.size < size) set.add(Math.floor(rand() * FILTER_POPULATION_SIZE))
  return set
}

// People matched by the whole audience: OR within each facet (union), AND across
// facets (intersection) — same semantics as the OneFilterPicker.
function filterStatePeopleMatch(state: AudienceFilterState): number {
  const facetKeys = Object.keys(state).filter((key) => (state[key] ?? []).length > 0)
  if (facetKeys.length === 0) return 0
  let matched: Set<number> | null = null
  for (const facetKey of facetKeys) {
    const union = new Set<number>()
    for (const optionValue of state[facetKey] ?? []) {
      for (const idx of optionPersonSet(facetKey, optionValue)) union.add(idx)
    }
    if (matched === null) {
      matched = union
    } else {
      const intersection = new Set<number>()
      for (const idx of matched) if (union.has(idx)) intersection.add(idx)
      matched = intersection
    }
  }
  return matched ? matched.size : 0
}

function filterStateSummary(value: unknown): {
  criteria: string[]
  matchCount: number
} {
  const state = readAudienceFilterState(value)
  const criteria: string[] = []
  for (const key of Object.keys(state)) {
    const vals = state[key]
    if (!Array.isArray(vals) || vals.length === 0) continue
    const label =
      enrollmentFilterDefinition[key as keyof typeof enrollmentFilterDefinition]
        ?.label ?? key
    for (const v of vals) criteria.push(`${label}: ${v}`)
  }
  return { criteria, matchCount: filterStatePeopleMatch(state) }
}

// A single facet-value criterion flattened from a FiltersState, with its display
// label (e.g. "Team: Engineering"). Used to diff the edited audience against the
// course's baseline so we can show the right add/remove edit messages.
type AudienceCriterion = { key: string; value: string; label: string }
function filterStateCriteria(state: AudienceFilterState): AudienceCriterion[] {
  return Object.keys(state).flatMap((key) =>
    (state[key] ?? []).map((value) => ({
      key,
      value,
      label: `${enrollmentFilterDef[key]?.label ?? key}: ${value}`,
    }))
  )
}
// Criteria present in `next` but not in `base` (added — broadens the audience).
function filterStateAdded(base: AudienceFilterState, next: AudienceFilterState): AudienceCriterion[] {
  const baseKeys = new Set(filterStateCriteria(base).map((c) => `${c.key}::${c.value}`))
  return filterStateCriteria(next).filter((c) => !baseKeys.has(`${c.key}::${c.value}`))
}
// Criteria present in `base` but not in `next` (removed).
function filterStateRemoved(base: AudienceFilterState, next: AudienceFilterState): AudienceCriterion[] {
  const nextKeys = new Set(filterStateCriteria(next).map((c) => `${c.key}::${c.value}`))
  return filterStateCriteria(base).filter((c) => !nextKeys.has(`${c.key}::${c.value}`))
}
// Rebuild a FiltersState from a flat criteria list, so we can count the people a
// subset of criteria (e.g. just the added ones) matches.
function audienceStateFromCriteria(criteria: AudienceCriterion[]): AudienceFilterState {
  const state: AudienceFilterState = {}
  for (const c of criteria) state[c.key] = [...(state[c.key] ?? []), c.value]
  return state
}
// "1 person matches" / "N people match" — correct singular/plural.
function peopleMatchPhrase(count: number): string {
  return count === 1 ? "1 person matches" : `${count} people match`
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
        id="trainings-enrollments/courses/v1"
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
      currentFilters: {},
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
      itemUrl: (course: ExactCourse) => `/p/trainings-enrollments?view=detail&course=${course.id}`,
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
    <div className="flex overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background">
      {/* Image */}
      <div
        className="hidden w-72 shrink-0 bg-cover bg-center md:block"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop)" }}
      >
        <div className="flex h-full items-start justify-end p-3">
          <span className="rounded-md bg-f1-background-info/90 px-2 py-1 text-xs font-medium text-f1-foreground-inverse">
            EU AI Act Essentials
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-3 p-6">
        <F0Heading
          content="EU AI Act: train your team before August 2nd or get fined"
          variant="heading"
          as="h3"
        />
        <F0Text
          content="Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work."
          variant="body"
        />
        <div>
          <F0Button
            label="View free course"
            icon={Sparkles}
            variant="outline"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
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
      id="trainings-enrollments/categories/v1"
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
      itemUrl: (template) => `/p/trainings-enrollments?view=survey-template-detail&template=${template.id}`,
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
      id="trainings-enrollments/survey-templates/v1"
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
      id="trainings-enrollments/requests/v1"
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
      id="trainings-enrollments/budgets/v1"
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
            id={`trainings-enrollments/budget-${budget.id}/groups/v1`}
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
        id="trainings-enrollments/budget-training-group-participants/v1"
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

// ---------------------------------------------------------------------------
// Assign Participants Dialog — centered dialog with criteria + manual modes
// ---------------------------------------------------------------------------

const assignableEmployees = [
  { id: "emp-1", name: "Adriana López", team: "Engineering", jobTitle: "Frontend Developer" },
  { id: "emp-2", name: "Bruno García", team: "Sales", jobTitle: "Account Executive" },
  { id: "emp-3", name: "Carmen Ruiz", team: "Marketing", jobTitle: "Content Strategist" },
  { id: "emp-4", name: "Daniel Herrera", team: "Product", jobTitle: "Product Manager" },
  { id: "emp-5", name: "Elena Martín", team: "Design", jobTitle: "UX Designer" },
  { id: "emp-6", name: "Fernando Vega", team: "Engineering", jobTitle: "Backend Developer" },
  { id: "emp-7", name: "Gloria Ramírez", team: "HR", jobTitle: "People Partner" },
  { id: "emp-8", name: "Hugo Delgado", team: "Finance", jobTitle: "Financial Analyst" },
  { id: "emp-9", name: "Isabel Torres", team: "Operations", jobTitle: "Operations Manager" },
  { id: "emp-10", name: "Jorge Morales", team: "Engineering", jobTitle: "DevOps Engineer" },
  { id: "emp-11", name: "Karla Peña", team: "Sales", jobTitle: "Sales Manager" },
  { id: "emp-12", name: "Luis Ortega", team: "Marketing", jobTitle: "Growth Lead" },
  { id: "emp-13", name: "María Jiménez", team: "Product", jobTitle: "Product Designer" },
  { id: "emp-14", name: "Nicolás Reyes", team: "Engineering", jobTitle: "Staff Engineer" },
  { id: "emp-15", name: "Olivia Flores", team: "Design", jobTitle: "Visual Designer" },
]

type AssignMode = "criteria" | "manual"

function AssignParticipantsDialog({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  const [mode, setMode] = useState<AssignMode>("criteria")
  const [criteriaValue, setCriteriaValue] = useState<Record<string, string[] | undefined>>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  if (!isOpen) return null

  // Compute how many employees match the criteria (simulated)
  const criteriaKeys = Object.keys(criteriaValue).filter((k) => {
    const v = criteriaValue[k]
    return Array.isArray(v) ? v.length > 0 : !!v
  })
  const criteriaMatchCount = criteriaKeys.length > 0
    ? criteriaKeys.reduce((sum, key) => {
        const vals = criteriaValue[key]
        return sum + (Array.isArray(vals) ? vals.length * 4 : 3)
      }, 0)
    : 0

  // Manual mode filtering
  const filtered = assignableEmployees.filter(
    (emp) =>
      searchTerm === "" ||
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.team.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleEmployee = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectAll = () => {
    if (selectedIds.size === filtered.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filtered.map((e) => e.id)))
    }
  }

  const totalSelected = mode === "criteria" ? criteriaMatchCount : selectedIds.size
  const hasSelection = totalSelected > 0

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      width="xl"
      title="Assign participants"
      description="Add employees to this course by criteria or individual selection."
      primaryAction={{ label: `Assign${hasSelection ? ` (${totalSelected})` : ""}`, onClick: onConfirm, disabled: !hasSelection }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        {/* Mode toggle tabs */}
        <div className="flex gap-0 border-b border-solid border-f1-border-secondary">
          <button
            onClick={() => setMode("criteria")}
            className={`px-4 py-2.5 text-sm font-medium transition-colors ${
              mode === "criteria"
                ? "border-b-2 border-solid border-f1-border-selected text-f1-foreground"
                : "border-b-2 border-solid border-transparent text-f1-foreground-secondary hover:text-f1-foreground"
            }`}
          >
            By criteria
          </button>
          <button
            onClick={() => setMode("manual")}
            className={`px-4 py-2.5 text-sm font-medium transition-colors ${
              mode === "manual"
                ? "border-b-2 border-solid border-f1-border-selected text-f1-foreground"
                : "border-b-2 border-solid border-transparent text-f1-foreground-secondary hover:text-f1-foreground"
            }`}
          >
            Select individually
          </button>
        </div>

        {/* Criteria mode */}
        {mode === "criteria" && (
          <F0Box display="flex" flexDirection="column" gap="lg">
            <F0Text content="Define criteria to match employees. All matching employees will be assigned to the course." variant="body" />
            <div className="rounded-lg border border-solid border-f1-border-secondary">
              <F0FilterPickerContent
                filters={enrollmentFilterDef}
                value={criteriaValue}
                onChange={setCriteriaValue}
                height={320}
              />
            </div>

            {/* Preview of matching employees */}
            {criteriaMatchCount > 0 && (
              <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary px-4 py-3">
                <F0AvatarList
                  size="sm"
                  type="person"
                  persons={[
                    { firstName: "Adriana", lastName: "López" },
                    { firstName: "Fernando", lastName: "Vega" },
                    { firstName: "Jorge", lastName: "Morales" },
                    { firstName: "Nicolás", lastName: "Reyes" },
                  ]}
                />
                <F0Text content={`${criteriaMatchCount} employees match the selected criteria`} variant="body" />
              </div>
            )}
          </F0Box>
        )}

        {/* Manual mode */}
        {mode === "manual" && (
          <F0Box display="flex" flexDirection="column" gap="md">
            {/* Search */}
            <div className="flex items-center gap-2 rounded-lg border border-solid border-f1-border-secondary px-3 py-2.5">
              <F0Icon icon={People} size="sm" />
              <input
                type="text"
                placeholder="Search by name or team..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent text-sm text-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="text-f1-foreground-secondary hover:text-f1-foreground">
                  <F0Icon icon={Cross} size="sm" />
                </button>
              )}
            </div>

            {/* Select all */}
            <div className="flex items-center justify-between border-b border-solid border-f1-border-secondary pb-2">
              <button onClick={selectAll} className="text-sm font-medium text-f1-foreground-info hover:underline">
                {selectedIds.size === filtered.length && filtered.length > 0 ? "Deselect all" : "Select all"}
              </button>
              <F0Text content={`${filtered.length} employees`} variant="small" />
            </div>

            {/* Employee list */}
            <div className="flex max-h-72 flex-col gap-0.5 overflow-y-auto">
              {filtered.map((emp) => {
                const isSelected = selectedIds.has(emp.id)
                return (
                  <button
                    key={emp.id}
                    onClick={() => toggleEmployee(emp.id)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                      isSelected
                        ? "bg-f1-background-selected"
                        : "hover:bg-f1-background-secondary"
                    }`}
                  >
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border border-solid ${
                      isSelected
                        ? "border-f1-border-selected bg-f1-background-selected-bold"
                        : "border-f1-border-secondary bg-f1-background"
                    }`}>
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="text-sm font-medium text-f1-foreground">{emp.name}</span>
                      <span className="text-xs text-f1-foreground-secondary">{emp.team} · {emp.jobTitle}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected summary */}
            {selectedIds.size > 0 && (
              <div className="flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary px-4 py-3">
                <F0AvatarList
                  size="sm"
                  type="person"
                  persons={Array.from(selectedIds).slice(0, 4).map((id) => {
                    const emp = assignableEmployees.find((e) => e.id === id)
                    const [firstName = "", lastName = ""] = (emp?.name ?? "").split(" ")
                    return { firstName, lastName }
                  })}
                />
                <F0Text content={`${selectedIds.size} employee${selectedIds.size > 1 ? "s" : ""} selected`} variant="body" />
              </div>
            )}
          </F0Box>
        )}
      </F0Box>
    </F0Dialog>
  )
}

// ---------------------------------------------------------------------------
// Settings Enrollment section — the creation wizard's enrollment form reused in
// Course Settings. Two visual levels: "Who should take this course" carries full
// weight; "How are people assigned" is a compact radio list. "Who does this apply
// to" is NOT a permanent field — it surfaces only as the consequence of a criterion
// change. There is intentionally NO Course validity here (it lives in Basic info).
// ---------------------------------------------------------------------------

// Small inline radio dot (no F0 radio primitive is exported; CardSelectable is the
// heavy card variant we're deliberately avoiding for the secondary controls).
function InlineRadio({
  selected,
  label,
  onSelect,
}: {
  selected: boolean
  label: string
  onSelect: () => void
}) {
  return (
    <button type="button" onClick={onSelect} className="flex items-center gap-2 text-left">
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-solid ${selected ? "border-f1-border-selected" : "border-f1-border-secondary"}`}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-f1-background-selected-bold" />}
      </span>
      <F0Text variant="body" content={label} />
    </button>
  )
}

function EditCourseEnrollmentSection({
  values,
  onUpdate,
  audienceError,
  originalAudienceCriteria,
}: {
  values: Record<string, unknown>
  onUpdate: (field: string, value: unknown) => void
  audienceError: boolean
  originalAudienceCriteria: AudienceFilterState
}) {
  const autoEnroll = values.enableAutoEnrollment !== false
  const criteria = readAudienceFilterState(values.audienceCriteria)
  const appliesTo = (values.enrollmentAppliesTo as string) ?? "new-only"

  // Diff against the course's saved criteria to surface the consequence of an edit.
  // (How people are assigned is determined by the course type, not chosen here.)
  const added = filterStateAdded(originalAudienceCriteria, criteria)
  const removed = filterStateRemoved(originalAudienceCriteria, criteria)
  const addedLabels = added.map((c) => c.label).join(", ")
  const removedLabels = removed.map((c) => c.label).join(", ")
  const addedCount = filterStatePeopleMatch(audienceStateFromCriteria(added))

  return (
    <div className="flex flex-col gap-6">
      {/* Automatic enrollment toggle — the switch sits beside a column holding the
          title and hint, so the hint lines up under the title (not under the switch).
          The switch and title share the same line height, so they stay aligned. */}
      <div className="flex items-start gap-3">
        <Switch
          checked={autoEnroll}
          onCheckedChange={(checked) => onUpdate("enableAutoEnrollment", checked)}
          title={inscripcionCopy.toggle.label}
          hideLabel
        />
        <div className="flex flex-col gap-1">
          <F0Text variant="label" content={inscripcionCopy.toggle.label} />
          <F0Text variant="description" content={inscripcionCopy.toggle.hint} />
        </div>
      </div>

      {autoEnroll ? (
        <>
          {/* PRIMARY — Who should take this course? (full weight: picker + chips + count) */}
          <WizardAudienceFilterPicker
            value={criteria}
            onChange={(next) => onUpdate("audienceCriteria", next)}
            error={audienceError}
          />

          {/* Consequence of a criterion change, attached right under the criterion.
              Added → scope question ("applies to"). Removed → reassurance note. */}
          {added.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <F0Text variant="label" content={inscripcionCopy.appliesTo.changeLabel(addedLabels)} />
                <F0Text
                  variant="description"
                  content={inscripcionCopy.appliesTo.changeHint(addedCount, addedLabels)}
                />
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <InlineRadio
                  selected={appliesTo !== "everyone"}
                  label={inscripcionCopy.appliesTo.newOnly}
                  onSelect={() => onUpdate("enrollmentAppliesTo", "new-only")}
                />
                <InlineRadio
                  selected={appliesTo === "everyone"}
                  label={inscripcionCopy.appliesTo.addExisting(addedCount)}
                  onSelect={() => onUpdate("enrollmentAppliesTo", "everyone")}
                />
              </div>
            </div>
          )}
          {removed.length > 0 && (
            <F0Text variant="description" content={inscripcionCopy.ruleRemoval.note(removedLabels)} />
          )}

          {/* How people are assigned is determined by the course type (one-time =
              enrolled right away, recurring = waitlist), not chosen here — so there
              is no "How are people assigned?" section in settings. */}
        </>
      ) : (
        <F0Alert variant="info" title="" description={inscripcionCopy.manualCallout} />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Edit Course Settings — fullscreen settings page
// ---------------------------------------------------------------------------

type EditCourseSection = "basic" | "admin" | "completion" | "enrollment"

function EditCourseSettings({
  course,
  onSave,
  initialSection = "basic",
}: {
  course: ExactCourse
  onSave: () => void
  initialSection?: EditCourseSection
}) {
  const [activeSection, setActiveSection] = useState<EditCourseSection>(initialSection)
  // Shared values so the course type chosen in Basic information drives the Enrollment
  // section exactly like the creation wizard does.
  // Existing courses already have criteria; this baseline (in the same FiltersState
  // model as the creation picker) is what we diff against to decide which edit-mode
  // messages (added / removed) to show.
  const originalAudienceCriteria: AudienceFilterState = course.enrollmentRule
    ? { team: ["Engineering"], workplace: ["Barcelona"] }
    : {}
  const [values, setValues] = useState<Record<string, unknown>>(() => ({
    courseType: course.courseType ?? "no-editions",
    enableAutoEnrollment: Boolean(course.enrollmentRule),
    enrollmentAssignment: course.enrollmentRule?.assignment === "direct" ? "group" : "waitlist",
    audienceCriteria: originalAudienceCriteria,
    enrollmentAppliesTo: course.enrollmentRule?.appliesTo === "everyone" ? "everyone" : "new-only",
  }))

  const [audienceError, setAudienceError] = useState(false)

  const updateValue = (field: string, value: unknown) => {
    // Adding a criterion or turning the toggle off clears the validation error.
    if (field === "audienceCriteria" || field === "enableAutoEnrollment") setAudienceError(false)
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Same rule as the creation wizard: automatic enrollment ON requires a criterion.
    const autoEnrollOn = values.enableAutoEnrollment !== false
    const audienceSelected = filterStateSelectedCount(values.audienceCriteria) > 0
    if (autoEnrollOn && !audienceSelected) {
      setAudienceError(true)
      setActiveSection("enrollment")
      return
    }
    onSave()
  }

  const sections: { id: EditCourseSection; label: string; icon: ComponentProps<typeof F0Icon>["icon"]; isNew?: boolean }[] = [
    { id: "basic", label: "Basic information", icon: InfoCircle },
    { id: "admin", label: "Admin information", icon: File },
    { id: "completion", label: "Completion configuration", icon: CheckCircle },
    { id: "enrollment", label: "Enrollment", icon: People, isNew: true },
  ]

  return (
    <Page
      header={
        <PageHeader
          module={moduleInfo}
          breadcrumbs={[
            { id: "training", label: "Training", href: "/p/trainings-enrollments" },
            { id: "courses", label: "Courses", href: "/p/trainings-enrollments" },
            { id: "course", label: course.name, href: `/p/trainings-enrollments?view=detail&course=${course.id}` },
            { id: "edit", label: "Edit course" },
          ]}
        />
      }
    >
      <StandardLayout>
        <div className="flex gap-8">
          {/* Left sidebar nav */}
          <nav className="flex w-64 shrink-0 flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-f1-background-selected font-medium text-f1-foreground"
                    : "text-f1-foreground-secondary hover:bg-f1-background-secondary"
                }`}
              >
                <F0Icon icon={section.icon} size="sm" />
                <span className="flex-1">{section.label}</span>
                {section.isNew && (
                  <span className="rounded-full bg-f1-background-selected-bold px-2 py-0.5 text-[10px] font-medium text-f1-foreground-inverse">
                    New
                  </span>
                )}
                {activeSection === section.id && (
                  <span className="text-f1-foreground-secondary">›</span>
                )}
              </button>
            ))}
          </nav>

          {/* Right content — capped width so the form reads as a contained block
              instead of stretching to the edge of the page. */}
          <div className="flex min-w-0 max-w-2xl flex-1 flex-col gap-8 pb-20">
            {activeSection === "basic" && <EditCourseBasicSection course={course} values={values} onUpdate={updateValue} />}
            {activeSection === "admin" && <EditCourseAdminSection course={course} />}
            {activeSection === "completion" && <EditCourseCompletionSection />}
            {activeSection === "enrollment" && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <F0Heading content={inscripcionCopy.step.title} variant="heading" as="h2" />
                  <F0Text content={inscripcionCopy.step.subtitle} variant="body" />
                </div>
                <EditCourseEnrollmentSection
                  values={values}
                  onUpdate={updateValue}
                  audienceError={audienceError}
                  originalAudienceCriteria={originalAudienceCriteria}
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="fixed inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3">
          <F0Box display="flex" alignItems="center" gap="sm">
            <F0Icon icon={CheckCircle} size="sm" color="positive" />
            <F0Text content="All changes saved" variant="small" />
          </F0Box>
          <F0Button label="Save" variant="default" size="md" onClick={handleSave} />
        </div>
      </StandardLayout>
    </Page>
  )
}

function EditCourseBasicSection({
  course,
  values,
  onUpdate,
}: {
  course: ExactCourse
  values: Record<string, unknown>
  onUpdate: (field: string, value: unknown) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <F0Heading content="Basic information" variant="heading" as="h2" />
        <F0Text content="Provide details to easily identify this course." variant="body" />
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Course name" variant="label" />
        <F0Text content="Employees will identify this course by its assigned name" variant="small" />
        <div className="rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
          <F0Text content={course.name} variant="body" />
        </div>
      </div>
      <CourseTypeField values={values} onUpdate={onUpdate} />
      <div className="flex flex-col gap-2">
        <F0Text content="Thumbnail" variant="label" />
        <F0Text content="Add an image to show as the course thumbnail in the Catalogue." variant="small" />
        {course.thumbnail ? (
          <div
            className="h-36 max-w-sm rounded-lg border border-solid border-f1-border-secondary bg-cover bg-center"
            style={{ backgroundImage: `url(${course.thumbnail})` }}
          />
        ) : (
          <div className="flex h-36 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-f1-border-secondary">
            <F0Icon icon={Upload} size="md" />
            <F0Text content="Drag and drop or click here" variant="body" />
            <F0Text content="Upload .jpeg, .png, .gif or .webp files up to 200MB." variant="small" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Objectives" variant="label" />
        <F0Text content="Define this course's goals and outcomes." variant="small" />
        <Textarea label="Objectives" hideLabel value={course.objectives.join("\n")} onChange={() => undefined} />
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Description" variant="label" />
        <Textarea label="Description" hideLabel value={course.description} onChange={() => undefined} />
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Competencies" variant="label" />
        <F0Text content="Select competencies to be developed with this course." variant="small" />
        <F0Box display="flex" flexWrap="wrap" gap="sm">
          {course.competencies.map((c) => (
            <F0TagRaw key={c} text={c} />
          ))}
        </F0Box>
      </div>
    </div>
  )
}

function EditCourseAdminSection({ course }: { course: ExactCourse }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <F0Heading content="Admin information" variant="heading" as="h2" />
        <F0Text content="Internal configuration for administrators." variant="body" />
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Internal code" variant="label" />
        <div className="rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
          <F0Text content={course.code} variant="body" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Categories" variant="label" />
        <F0Box display="flex" flexWrap="wrap" gap="sm">
          {course.categories.length > 0
            ? course.categories.map((c) => <F0TagRaw key={c} text={c} />)
            : <F0Text content="No categories assigned" variant="body" />
          }
        </F0Box>
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Requirement" variant="label" />
        <div className="rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
          <F0Text content={course.requirement === "mandatory" ? "Mandatory" : "Not mandatory"} variant="body" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Total cost" variant="label" />
        <div className="rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
          <F0Text content={course.totalCost} variant="body" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Salary cost" variant="label" />
        <div className="rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
          <F0Text content={course.salaryCost} variant="body" />
        </div>
      </div>
    </div>
  )
}

function EditCourseCompletionSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <F0Heading content="Completion configuration" variant="heading" as="h2" />
        <F0Text content="Define what participants need to do to complete this course." variant="body" />
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Completion criteria" variant="label" />
        <F0Box display="flex" flexDirection="column" gap="sm">
          {["Complete all modules", "100% attendance required", "Pass knowledge test"].map((item) => (
            <F0Box key={item} display="flex" alignItems="center" gap="sm">
              <F0Icon icon={CheckCircle} size="sm" color="positive" />
              <F0Text content={item} variant="body" />
            </F0Box>
          ))}
        </F0Box>
      </div>
      <div className="flex flex-col gap-2">
        <F0Text content="Course validity" variant="label" />
        <div className="rounded-lg border border-solid border-f1-border-secondary px-4 py-3">
          <F0Text content="1 year" variant="body" />
        </div>
      </div>
    </div>
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
                onClick: () => setSearchParams({ view: "edit-course", course: course.id }),
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
              onSetUpEnrollment={() =>
                setSearchParams({ view: "edit-course", course: course.id, section: "enrollment" })
              }
              onViewPending={() =>
                setSearchParams({ view: "detail", course: course.id, dtab: "participants", pfilter: "pending" })
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
          detail={activeDialog && activeDialog !== "add-participants" ? getCourseActionDetail(activeDialog, course) : null}
          onClose={() => setActiveDialog(null)}
          onConfirm={() => {
            if (activeDialog === "revert-course") onRevertToDraft()
            const detail = getCourseActionDetail(activeDialog, course)
            setActiveDialog(null)
            onToast(detail.toast)
          }}
        />
        <AssignParticipantsDialog
          isOpen={activeDialog === "add-participants"}
          onClose={() => setActiveDialog(null)}
          onConfirm={() => {
            setActiveDialog(null)
            onToast("settings")
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
  onSetUpEnrollment,
  onViewPending,
}: {
  course: ExactCourse
  activeDetailTab: CourseDetailTabId
  onOpenDialog: (dialog: CourseActionDialogId) => void
  onOpenClassWizard: () => void
  onGoToSurveys: () => void
  onSetUpEnrollment: () => void
  onViewPending: () => void
}) {
  if (activeDetailTab === "overview") {
    return <CourseOverviewTab course={course} onGoToSurveys={onGoToSurveys} onCreateGroup={onOpenClassWizard} onSetUp={onSetUpEnrollment} onViewPending={onViewPending} />
  }
  if (activeDetailTab === "content") return <CourseContentTab onOpenDialog={onOpenDialog} />
  if (activeDetailTab === "training-groups") return <CourseGroupsTab course={course} onOpenDialog={onOpenDialog} onOpenClassWizard={onOpenClassWizard} />
  if (activeDetailTab === "participants") return <CourseParticipantsTab onOpenDialog={onOpenDialog} />
  if (activeDetailTab === "materials") return <CourseMaterialsTab onOpenDialog={onOpenDialog} />
  if (activeDetailTab === "documents") return <CourseDocumentsTab onOpenDialog={onOpenDialog} />
  return <CourseSurveysTab onOpenDialog={onOpenDialog} />
}

function CourseOverviewTab({
  course,
  onGoToSurveys,
  onCreateGroup,
  onSetUp,
  onViewPending,
}: {
  course: ExactCourse
  onGoToSurveys: () => void
  onCreateGroup: () => void
  onSetUp: () => void
  onViewPending: () => void
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
        <InfoSection title="Objectives" items={course.objectives} asTags={false} />
        <InfoSection title="Description" description={course.description} />
        <InfoSection title="Course validity" description={course.validity} />
      </F0Box>
  )

  return (
    <TwoColumnLayout sideContent={<SideInfo course={course} onCreateGroup={onCreateGroup} onSetUp={onSetUp} onViewPending={onViewPending} />}>
      {mainContent}
    </TwoColumnLayout>
  )
}

function CourseContentTab({ onOpenDialog }: { onOpenDialog: (dialog: CourseActionDialogId) => void }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" justifyContent="between" alignItems="center" gap="lg">
        <F0Heading content="Course content" variant="heading" as="h2" />
        <F0Button label="Edit content" icon={Settings} variant="outline" onClick={() => onOpenDialog("edit-content")} />
      </F0Box>
      <CourseModuleCard
        title="Módulo 1: Introducción a ISO 9001 y gestión de calidad"
        items={["Introducción a ISO 9001|Page", "Cuestionario del módulo 1|Quiz"]}
      />
      <CourseModuleCard
        title="Módulo 2: Requisitos clave de ISO 9001"
        items={["Requisitos clave de ISO 9001|Page"]}
      />
      <CourseModuleCard
        title="Módulo 3: Implementación y mantenimiento de un sistema de gestión de calidad"
        items={["Implementación y mantenimiento de un sistema de gestión de calidad|Page", "Módulo 3 - Cuestionario|Quiz", "Cómo prepararte para tu certificación ISO|Video"]}
      />
    </F0Box>
  )
}

function CourseModuleCard({ title, items }: { title: string; items: string[] }) {
  return (
    <F0Card title={title} description={`${items.length}`}>
      <F0Box display="flex" flexDirection="column" gap="sm">
        {items.map((item) => {
          const [name, type] = item.split("|")
          return (
            <F0Box key={item} display="flex" justifyContent="between" alignItems="center" gap="lg" padding="md" border="default" borderColor="secondary" borderRadius="md">
              <F0Text content={name} variant="body" />
              <F0TagRaw text={type} />
            </F0Box>
          )
        })}
      </F0Box>
    </F0Card>
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
  // No-editions courses don't have editions/groups you manage. They run as a single
  // auto-generated group (start date, no end date) where every participant is enrolled.
  const isNoEditions = course.courseType === "no-editions"
  const groups: TrainingGroupRow[] = isNoEditions
    ? [
        {
          id: `${course.id}-default`,
          name: course.groups[0] ?? "Default group",
          startDate: "1 Jan 2025",
          endDate: "—",
          sessions: 1,
          participants: ["Laura Martinez", "Marc Vidal", "Ana Ruiz", "Hellen Howard", "Nora Perez"],
          completionRate: 100,
        },
      ]
    : course.groups.map((group, index) => ({
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
      primaryActions: isNoEditions
        ? undefined
        : () => ({ label: "New training group", icon: Add, onClick: onOpenClassWizard }),
      itemUrl: (group) => `/p/trainings-enrollments?view=group-detail&course=${course.id}&group=${encodeURIComponent(group.name)}`,
      itemActions: isNoEditions
        ? undefined
        : () => [
            { label: "Delete", icon: Delete, onClick: () => onOpenDialog("delete-training-group"), critical: true },
          ],
      totalItemSummary: (total: number) => `${total} training groups`,
    },
    [groups, course.id, onOpenDialog, onOpenClassWizard, isNoEditions]
  )

  return (
    <OneDataCollection
      id="trainings-enrollments/course-groups/v1"
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

function CourseParticipantsTab({ onOpenDialog }: { onOpenDialog: (dialog: CourseActionDialogId) => void }) {
  // The overview's "View pending" link lands here with the pending filter pre-applied.
  const [searchParams] = useSearchParams()
  const pendingPreset = searchParams.get("pfilter") === "pending"
  const statusColor = (status: CourseParticipantRow["status"]): "positive" | "info" | "warning" | "critical" | "neutral" => {
    switch (status) {
      case "Completed": return "positive"
      case "Ongoing": return "info"
      case "Pending": return "neutral"
      case "Pending group assignment": return "warning"
      case "Dropped out": return "critical"
    }
  }

  const source = useDataCollectionSource<CourseParticipantRow>(
    {
      search: { enabled: true, sync: true },
      ...(pendingPreset ? { defaultFilters: { status: ["Pending group assignment"] } } : {}),
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "Pending", label: "Pending" },
              { value: "Ongoing", label: "Ongoing" },
              { value: "Completed", label: "Completed" },
              { value: "Dropped out", label: "Dropped out" },
              { value: "Pending group assignment", label: "Pending group assignment" },
            ],
          },
        },
        team: {
          type: "in",
          label: "Team",
          options: {
            options: [
              { value: "Engineering", label: "Engineering" },
              { value: "Sales", label: "Sales" },
              { value: "Marketing", label: "Marketing" },
              { value: "Product", label: "Product" },
              { value: "Design", label: "Design" },
              { value: "HR", label: "HR" },
              { value: "Finance", label: "Finance" },
              { value: "Operations", label: "Operations" },
            ],
          },
        },
        knowledgeTestResults: {
          type: "in",
          label: "Knowledge test",
          options: {
            options: [
              { value: "Pending", label: "Pending" },
              { value: "Passed", label: "Passed" },
              { value: "Failed", label: "Failed" },
            ],
          },
        },
      },
      sortings: {
        name: { label: "Participant" },
        status: { label: "Status" },
        team: { label: "Team" },
        completionDate: { label: "Completion date" },
      },
      primaryActions: () => ({ label: "Assign participants", icon: Add, onClick: () => onOpenDialog("add-participants") }),
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = courseParticipants
            .filter((participant) => matchArray(filters?.status, participant.status))
            .filter((participant) => matchArray(filters?.team, participant.team))
            .filter((participant) => matchArray(filters?.knowledgeTestResults, participant.knowledgeTestResults))
            .filter((participant) => term === "" || participant.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings, (participant, field) => {
            if (field === "name") return participant.name.toLowerCase()
            if (field === "status") return participant.status
            if (field === "team") return participant.team
            if (field === "completionDate") return participant.completionDate
            return null
          })
          return paginateRecords(sorted, pagination, 25)
        },
      },
      selectable: (participant) => participant.id,
      bulkActions: () => ({ primary: [{ id: "remove", label: "Remove from course", icon: Delete, critical: true }] }),
      totalItemSummary: (total: number) => `${total} participants`,
    },
    []
  )

  return (
    <OneDataCollection
      id="trainings-enrollments/course-participants/v1"
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "participant", label: "Participant", sorting: "name", render: (participant: CourseParticipantRow) => personValue(participant.name) },
              { id: "team", label: "Team", sorting: "team", render: (participant: CourseParticipantRow) => participant.team },
              { id: "status", label: "Status", sorting: "status", render: (participant: CourseParticipantRow) => ({ type: "status" as const, value: { status: statusColor(participant.status), label: participant.status } }) },
              { id: "certificate", label: "Certificate", render: (participant: CourseParticipantRow) => participant.certificate },
              { id: "completionDate", label: "Completion date", sorting: "completionDate", render: (participant: CourseParticipantRow) => participant.completionDate },
              { id: "courseValidity", label: "Course validity", render: (participant: CourseParticipantRow) => participant.courseValidity },
              { id: "sessionAttendance", label: "Session attendance", render: (participant: CourseParticipantRow) => participant.sessionAttendance },
              { id: "knowledgeTestResults", label: "Knowledge test results", render: (participant: CourseParticipantRow) => participant.knowledgeTestResults },
              { id: "moduleProgress", label: "Module progress", render: (participant: CourseParticipantRow) => participant.moduleProgress },
            ],
            frozenColumns: 1,
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
        id="trainings-enrollments/course-materials/v1"
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
        id="trainings-enrollments/course-documents/v1"
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

function TrainingGroupDetail({ course, groupName, onToast }: { course: ExactCourse; groupName: string; onBack: () => void; onToast: (toast: ToastId) => void }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeDialog, setActiveDialog] = useState<GroupActionDialogId>(null)
  const [classWizardOpen, setClassWizardOpen] = useState(false)
  const [sessionFormMode, setSessionFormMode] = useState<"new" | null>(null)
  const [editingSession, setEditingSession] = useState<GroupSessionRow | null>(null)
  const activeGroupTab = getValidParam(searchParams.get("gtab"), VALID_GROUP_TABS, "sessions") as GroupDetailTabId
  const activeSession = groupSessions.find((session) => session.id === searchParams.get("session")) ?? null
  const activeSessionTab = getValidParam(searchParams.get("stab"), new Set<string>(["details", "attendance"]), "details") as SessionSidepanelTabId
  const groupTabs = [
    { id: "sessions", label: "Sessions" },
    { id: "participants", label: "Participants" },
    { id: "materials", label: "Materials" },
    { id: "documents", label: "Documents" },
    { id: "costs", label: "Costs" },
  ].map((tab) => ({
    ...tab,
    onClick: () => setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: tab.id }),
  }))

  const openSessionSidepanel = (sessionId: string) => {
    setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions", session: sessionId, stab: "details" })
  }

  return (
    <Page
      header={
        <>
          <PageHeader
            module={moduleInfo}
            breadcrumbs={[
              { id: "courses", label: "Courses", href: routes.courses },
              { id: course.id, label: course.name, href: routes.course(course.id, "training-groups") },
              { id: groupName, label: groupName },
            ]}
          />
          <ResourceHeader
            title={groupName}
            metadata={[
              { label: "Start date", value: { type: "text", content: "1 Jan 2025" } },
              { label: "End date", value: { type: "text", content: "31 Jan 2025" } },
              { label: "Participants", value: { type: "text", content: " " } },
              { label: "Instructor(s)", value: { type: "text", content: "" } },
              { label: "Training budget", value: { type: "text", content: "Quality & Compliance" } },
            ]}
          />
          <Tabs key={activeGroupTab} tabs={groupTabs} activeTabId={activeGroupTab} />
        </>
      }
    >
      <StandardLayout>
        <TrainingGroupTabBody
          activeGroupTab={activeGroupTab}
          onOpenDialog={setActiveDialog}
              onOpenSessionForm={() => setSessionFormMode("new")}
              onEditSession={() => setEditingSession(groupSessions[0] ?? null)}
              onOpenSession={openSessionSidepanel}
            />
          <NewTrainingGroupWizardDialog
            isOpen={classWizardOpen}
            onClose={() => setClassWizardOpen(false)}
            onCreate={() => {
              setClassWizardOpen(false)
              onToast("draft")
            }}
          />
          <SessionSidepanel
            session={activeSession}
            activeTab={activeSessionTab}
            onClose={() => setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions" })}
            onTabChange={(tab) => setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions", session: activeSession?.id ?? "session-1", stab: tab })}
          />
          <EditSessionSidepanel session={editingSession} onClose={() => setEditingSession(null)} onSave={() => setEditingSession(null)} />
          <SessionFormDialog
            mode={sessionFormMode}
            onClose={() => setSessionFormMode(null)}
            onSave={() => {
              setSessionFormMode(null)
              onToast("draft")
            }}
          />
          <TrainingActionDialog
            detail={activeDialog ? getGroupActionDetail(activeDialog, groupName) : null}
            onClose={() => setActiveDialog(null)}
            onConfirm={() => {
              const detail = getGroupActionDetail(activeDialog, groupName)
              setActiveDialog(null)
              onToast(detail.toast)
            }}
          />
        </StandardLayout>
      </Page>
  )
}

function TrainingGroupTabBody({
  activeGroupTab,
  onOpenDialog,
  onOpenSessionForm,
  onEditSession,
  onOpenSession,
}: {
  activeGroupTab: GroupDetailTabId
  onOpenDialog: (dialog: GroupActionDialogId) => void
  onOpenSessionForm: () => void
  onEditSession: () => void
  onOpenSession: (sessionId: string) => void
}) {
  if (activeGroupTab === "sessions") return <GroupSessionsTab onOpenDialog={onOpenDialog} onOpenSession={onOpenSession} onOpenSessionForm={onOpenSessionForm} onEditSession={onEditSession} />
  if (activeGroupTab === "participants") return <GroupParticipantsTab onOpenDialog={onOpenDialog} />
  if (activeGroupTab === "materials") return <GroupMaterialsTab onOpenDialog={onOpenDialog} />
  if (activeGroupTab === "documents") return <GroupDocumentsTab onOpenDialog={onOpenDialog} />
  return <GroupCostsTab onOpenDialog={onOpenDialog} />
}

function GroupSessionsTab({
  onOpenDialog,
  onOpenSession,
  onOpenSessionForm,
  onEditSession,
}: {
  onOpenDialog: (dialog: GroupActionDialogId) => void
  onOpenSession: (sessionId: string) => void
  onOpenSessionForm: () => void
  onEditSession: () => void
}) {
  const source = useDataCollectionSource<GroupSessionRow>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        name: { label: "Session" },
        date: { label: "Date" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = groupSessions.filter((session) => term === "" || session.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings ?? [], (session, field) => {
            if (field === "name") return session.name.toLowerCase()
            if (field === "date") return session.date
            return null
          })
          return paginateRecords(sorted, pagination, 20)
        },
      },
      primaryActions: () => ({ label: "New session", icon: Add, onClick: onOpenSessionForm }),
      itemOnClick: (session) => () => onOpenSession(session.id),
      itemActions: () => [
        { label: "Edit", icon: Settings, onClick: onEditSession },
        { label: "Duplicate", icon: Files, onClick: () => onOpenDialog("duplicate-session") },
        { label: "Delete", icon: Delete, onClick: () => onOpenDialog("delete-session"), critical: true },
      ],
      totalItemSummary: (total: number) => `${total} sessions`,
    },
    [onOpenDialog, onOpenSession, onOpenSessionForm, onEditSession]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Alert variant="info" title="Connect your calendar" description="Connect your calendar to send invites and schedule training sessions with your team." />
      <OneDataCollection
        id="trainings-enrollments/group-sessions/v1"
        storage={false}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Session", sorting: "name", render: (session: GroupSessionRow) => ({ type: "text" as const, value: session.name }) },
                { id: "date", label: "Date", sorting: "date", render: (session: GroupSessionRow) => session.date },
                { id: "type", label: "Type", render: (session: GroupSessionRow) => ({ type: "dotTag" as const, value: { label: session.type === "self-paced" ? "Self-paced" : "Scheduled", color: session.type === "self-paced" ? "malibu" : "barbie" } }) },
                { id: "modality", label: "Modality", render: (session: GroupSessionRow) => ({ type: "tag" as const, value: { label: session.modality, icon: session.modality === "Virtual" ? Link : People } }) },
              ],
            },
          },
        ]}
      />
    </F0Box>
  )
}

function SessionSidepanel({
  session,
  activeTab,
  onClose,
  onTabChange,
}: {
  session: GroupSessionRow | null
  activeTab: SessionSidepanelTabId
  onClose: () => void
  onTabChange: (tab: SessionSidepanelTabId) => void
}) {
  if (!session) return null

  const tabs = [
    { id: "details", label: "Details", onClick: () => onTabChange("details") },
    { id: "attendance", label: "Attendance", onClick: () => onTabChange("attendance") },
  ]

  return (
    <F0BoxWithClassName
      role="presentation"
      className="fixed inset-0 z-50 pointer-events-none"
    >
      <F0BoxWithClassName
        role="dialog"
        aria-label={session.name}
        background="primary"
        border="default"
        borderColor="secondary"
        borderRadius="md"
        overflow="hidden"
        className="absolute pointer-events-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background shadow-lg"
        style={{ right: 12, top: 12, bottom: 12, width: 640, backgroundColor: "var(--f1-background, #fff)" }}
      >
          <F0Box height="full" display="flex" flexDirection="column">
            <F0BoxWithClassName
            display="flex"
            alignItems="center"
            justifyContent="between"
            paddingLeft="md"
            paddingRight="lg"
            borderBottom="default"
            borderColor="secondary"
            style={{ height: 57 }}
            >
              <F0Heading content={session.name} variant="heading" as="h2" />
              <F0BoxWithClassName
                role="button"
                aria-label="Close"
                tabIndex={0}
                onClick={onClose}
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
                borderColor="secondary"
                borderRadius="lg"
                style={{ width: 32, height: 32, cursor: "pointer" }}
              >
                <F0Icon icon={Cross} size="md" />
              </F0BoxWithClassName>
            </F0BoxWithClassName>
          <F0BoxWithClassName paddingTop="lg" paddingLeft="md" paddingRight="md" overflowY="auto" grow>
            <SessionSidepanelTabs activeTab={activeTab} tabs={tabs} />
            <F0BoxWithClassName style={{ paddingTop: 40 }}>
              {activeTab === "details" ? <SessionDetailsTab session={session} /> : <SessionAttendanceTab />}
            </F0BoxWithClassName>
          </F0BoxWithClassName>
        </F0Box>
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function SessionSidepanelTabs({ activeTab, tabs }: { activeTab: SessionSidepanelTabId; tabs: { id: string; label: string; onClick: () => void }[] }) {
  return (
    <F0BoxWithClassName borderBottom="default" borderColor="secondary" display="flex" style={{ height: 64, gap: 16 }}>
      {tabs.map((tab) => (
        <F0BoxWithClassName
          key={tab.id}
          role="button"
          aria-label={tab.label}
          tabIndex={0}
          onClick={tab.onClick}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="md"
          background={tab.id === activeTab ? "secondary" : "transparent"}
          style={{ height: 32, padding: "0 12px", cursor: "pointer", position: "relative" }}
        >
          <F0Text content={tab.label} variant="body" />
          {tab.id === activeTab ? (
            <F0BoxWithClassName background="inverse" style={{ position: "absolute", left: 0, right: 0, bottom: -17, height: 1 }} />
          ) : null}
        </F0BoxWithClassName>
      ))}
    </F0BoxWithClassName>
  )
}

function SessionFormDialog({
  mode,
  onClose,
  onSave,
}: {
  mode: "new" | null
  onClose: () => void
  onSave: () => void
}) {
  const [values, setValues] = useState<Record<string, unknown>>({
    sessionType: "scheduled",
    sessionName: "Noviembre - Diciembre",
    modality: "hybrid",
    frequency: "none",
    instructors: [],
    durationHours: 0,
    durationMinutes: 0,
    meetingLink: "",
    location: "",
    calendarInvites: false,
    reminders: false,
  })

  if (!mode) return null

  return (
    <F0BoxWithClassName
      position="fixed"
      className="fixed inset-0 z-50 flex items-start justify-center bg-f1-background-overlay overflow-y-auto"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <F0BoxWithClassName
        role="dialog"
        aria-label={mode === "new" ? "Create session" : "Edit session"}
        background="primary"
        borderRadius="lg"
        className="relative rounded-lg bg-f1-background shadow-2xl"
        style={{ width: 664, backgroundColor: "var(--f1-background, #fff)" }}
      >
        <F0BoxWithClassName className="absolute z-10" style={{ right: 16, top: 16 }}>
          <F0BoxWithClassName
            role="button"
            aria-label="Close"
            tabIndex={0}
            onClick={onClose}
            className="flex cursor-pointer items-center justify-center text-f1-foreground-secondary"
            style={{ width: 24, height: 24 }}
          >
            <F0Icon icon={Cross} size="md" />
          </F0BoxWithClassName>
        </F0BoxWithClassName>
        <F0BoxWithClassName style={{ margin: "56px 32px", width: 600 }}>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Heading content={mode === "new" ? "Create session" : "Edit session"} variant="heading-large" as="h2" />
          <F0BoxWithClassName style={{ padding: 16 }}>
          <F0Box display="flex" flexDirection="column" gap="2xl">
            <F0FormField field={createSessionModalFields.type} value={values.sessionType} onChange={(value) => setValues((current) => ({ ...current, sessionType: value }))} />
            <F0FormField field={createSessionModalFields.name} value={values.sessionName} onChange={(value) => setValues((current) => ({ ...current, sessionName: value }))} />
            <F0Box display="grid" columns="3" gap="md">
              <F0FormField field={createSessionModalFields.date} value={values.sessionDate} onChange={(value) => setValues((current) => ({ ...current, sessionDate: value }))} />
              <F0FormField field={createSessionModalFields.startsAt} value={values.startsAt} onChange={(value) => setValues((current) => ({ ...current, startsAt: value }))} />
              <F0FormField field={createSessionModalFields.endsAt} value={values.endsAt} onChange={(value) => setValues((current) => ({ ...current, endsAt: value }))} />
            </F0Box>
            <F0Box display="grid" columns="2" gap="md">
              <F0FormField field={createSessionModalFields.hours} value={values.durationHours} onChange={(value) => setValues((current) => ({ ...current, durationHours: value }))} />
              <F0FormField field={createSessionModalFields.minutes} value={values.durationMinutes} onChange={(value) => setValues((current) => ({ ...current, durationMinutes: value }))} />
            </F0Box>
            <F0FormField field={createSessionModalFields.modality} value={values.modality} onChange={(value) => setValues((current) => ({ ...current, modality: value }))} />
            <F0FormField field={createSessionModalFields.instructors} value={values.instructors} onChange={(value) => setValues((current) => ({ ...current, instructors: value }))} />
            <F0FormField field={createSessionModalFields.frequency} value={values.frequency} onChange={(value) => setValues((current) => ({ ...current, frequency: value }))} />
            <F0Box display="grid" columns="2" gap="md">
              <F0FormField field={createSessionModalFields.meetingLink} value={values.meetingLink} onChange={(value) => setValues((current) => ({ ...current, meetingLink: value }))} />
              <F0FormField field={createSessionModalFields.location} value={values.location} onChange={(value) => setValues((current) => ({ ...current, location: value }))} />
            </F0Box>
            <SessionReminderBlock />
            <SessionCalendarBlock />
          </F0Box>
          </F0BoxWithClassName>
          <F0Box display="flex" justifyContent="end" gap="md">
            <F0Button label="Cancel" variant="outline" onClick={onClose} />
            <F0Button label="Save" onClick={onSave} />
          </F0Box>
        </F0Box>
        </F0BoxWithClassName>
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function EditSessionSidepanel({ session, onClose, onSave }: { session: GroupSessionRow | null; onClose: () => void; onSave: () => void }) {
  if (!session) return null

  return (
    <F0BoxWithClassName role="presentation" className="fixed inset-0 z-50 pointer-events-none">
      <F0BoxWithClassName
        role="dialog"
        aria-label={`Edit ${session.name}`}
        background="primary"
        overflow="hidden"
        className="absolute pointer-events-auto bg-f1-background shadow-lg"
        style={{ right: 0, top: 0, bottom: 0, width: 890, backgroundColor: "var(--f1-background, #fff)" }}
      >
        <F0BoxWithClassName height="full" display="flex" flexDirection="column" style={{ minHeight: 0 }}>
          <F0BoxWithClassName display="flex" alignItems="center" justifyContent="center" paddingLeft="xl" paddingRight="xl" borderBottom="default" borderColor="secondary" style={{ height: 64, minHeight: 64, flexShrink: 0, position: "relative" }}>
            <F0BoxWithClassName style={{ position: "absolute", left: 24, top: 16 }}>
              <LegacyIconButton label="Close" icon={Cross} onClick={onClose} />
            </F0BoxWithClassName>
            <F0Heading content={session.name} variant="heading" as="h2" />
          </F0BoxWithClassName>
          <F0BoxWithClassName padding="xl" overflowY="auto" grow style={{ minHeight: 0 }}>
            <F0BoxWithClassName border="default" borderColor="secondary" borderRadius="lg" padding="lg" style={{ width: 842 }}>
              <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 24 }}>
                <EditSessionField label="Type" value="Self-paced" compact />
                <EditSessionField label="Name" value={session.name} />
                <F0BoxWithClassName display="grid" columns="2" style={{ gap: 12 }}>
                  <EditSessionField label="Start date" value="2 Jan 2025" />
                  <EditSessionField label="End date" value="31 Jan 2025" />
                </F0BoxWithClassName>
                <F0BoxWithClassName display="grid" columns="2" style={{ gap: 12 }}>
                  <EditSessionField label="Hours" value="20" />
                  <EditSessionField label="Minutes" value="0" />
                </F0BoxWithClassName>
                <EditSessionField label="Modality" value="Virtual" compact />
                <F0BoxWithClassName display="grid" columns="2" style={{ gap: 12 }}>
                  <EditSessionField label="Meeting link" value="" />
                  <EditSessionField label="Location" value="" />
                </F0BoxWithClassName>
                <EditSessionReminderBlock />
                <F0Box display="flex" justifyContent="end" gap="md" paddingTop="xl">
                  <F0Button label="Cancel" variant="outline" onClick={onClose} />
                  <F0Button label="Save" onClick={onSave} />
                </F0Box>
              </F0BoxWithClassName>
            </F0BoxWithClassName>
          </F0BoxWithClassName>
        </F0BoxWithClassName>
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function EditSessionField({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 4 }}>
      <F0Text content={label} variant="label" />
      <F0BoxWithClassName
        display="flex"
        alignItems="center"
        borderRadius="md"
        background="primary"
        style={{ height: compact ? 36 : 44, padding: "0 12px", border: "2px solid rgb(226, 226, 229)", borderRadius: 8 }}
      >
        <F0Text content={value} variant="body" />
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function LegacyIconButton({ label, icon, onClick }: { label: string; icon: typeof Cross; onClick?: () => void }) {
  return (
    <F0BoxWithClassName
      role="button"
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ width: 32, height: 32, cursor: "pointer" }}
    >
      <F0Icon icon={icon} size="md" />
    </F0BoxWithClassName>
  )
}

function EditSessionReminderBlock() {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Text content="Reminders" variant="label" />
      <F0BoxWithClassName
        display="flex"
        flexDirection="column"
        border="default"
        borderColor="secondary"
        borderRadius="lg"
        background="primary"
        style={{ minHeight: 90 }}
      >
        <F0BoxWithClassName display="flex" flexDirection="column" gap="sm" style={{ padding: "16px 24px" }}>
          <F0Box display="flex" alignItems="center" justifyContent="between">
            <F0Text content="Add reminder" variant="body" />
            <LegacyIconButton label="Add reminder" icon={Add} />
          </F0Box>
          <F0Text content="Schedule a reminder to be sent to all assigned employees before the session." variant="description" />
        </F0BoxWithClassName>
      </F0BoxWithClassName>
    </F0Box>
  )
}

function SessionDetailsTab({ session }: { session: GroupSessionRow }) {
  return (
    <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 32 }}>
      <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 30 }}>
        <F0Box display="grid" columns="2" gap="5xl">
          <SessionField label="Type" value={session.type === "self-paced" ? "Self-paced" : "Scheduled"} dot />
          <SessionField label="Modality" value={session.modality} icon={Computer} />
        </F0Box>
        <F0Box display="grid" columns="2" gap="5xl">
          <SessionField label="Date" value="2 Jan 2025 -" />
          <SessionField label="Hour" value="20h" />
        </F0Box>
        <F0Box display="grid" columns="2" gap="5xl">
          <SessionField label="Location" value="-" />
          <SessionField label="Link" value="Link" link />
        </F0Box>
      </F0BoxWithClassName>
      <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 24 }}>
        <SessionPlainInfo title="Calendar invite" value="No invites sent" icon={Envelope} />
        <SessionPlainInfo title="Reminders" value="No reminders set" icon={Bell} />
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function SessionField({ label, value, icon, dot = false, link = false }: { label: string; value: string; icon?: typeof Link; dot?: boolean; link?: boolean }) {
  return (
    <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 14 }}>
      <F0Text content={label} variant="body" />
      {dot || icon ? (
        <F0Box display="flex" alignItems="center" gap="sm">
          {dot ? <F0BoxWithClassName background="info" borderRadius="full" style={{ width: 8, height: 8 }} /> : null}
          {icon ? <F0Icon icon={icon} size="sm" /> : null}
          <F0Text content={value} variant="body" />
        </F0Box>
      ) : link ? (
        <F0Box display="flex" alignItems="center" gap="xs">
          <F0Text content={value} variant="body" />
          <F0Icon icon={ExternalLink} size="sm" color="info" />
        </F0Box>
      ) : (
        <F0Text content={value} variant="body" />
      )}
    </F0BoxWithClassName>
  )
}

function SessionPlainInfo({ title, value, icon }: { title: string; value: string; icon: typeof Bell }) {
  return (
    <F0BoxWithClassName
      display="flex"
      flexDirection="column"
      border="default"
      borderColor="secondary"
      borderRadius="lg"
      background="primary"
      style={{ width: "100%", minHeight: 82 }}
    >
      <F0BoxWithClassName display="flex" flexDirection="column" gap="md" style={{ padding: "18px 24px" }}>
        <F0Text content={title} variant="label" />
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Icon icon={icon} size="sm" />
          <F0Text content={value} variant="body" />
        </F0Box>
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function SessionReminderBlock() {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Text content="Reminders" variant="label" />
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
        <F0Box display="flex" justifyContent="between" alignItems="center">
          <F0Text content="Add reminder" variant="body" />
          <F0Button label="Add reminder" hideLabel icon={Add} variant="outline" />
        </F0Box>
        <F0Text
          content="Schedule a reminder to be sent to all assigned employees before the session."
          variant="body"
        />
      </F0Box>
    </F0Box>
  )
}

function SessionCalendarBlock() {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Box
        display="flex"
        justifyContent="between"
        alignItems="center"
        padding="lg"
        border="default"
        borderColor="secondary"
        borderRadius="lg"
        background="primary"
      >
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Send calendar invites" variant="body" />
          <F0Text
            content="Authorize Factorial to access your calendar and schedule trainings."
            variant="description"
          />
        </F0Box>
        <F0TagRaw text="Off" />
      </F0Box>
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="md"
        padding="sm"
        borderRadius="lg"
        background="warning"
      >
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Icon icon={InProgressTask} size="md" color="warning" />
          <F0Box display="flex" flexDirection="column">
            <F0Text content="Calendar not connected" variant="body" />
            <F0Text content={'Click "Connect" to start the process.'} variant="description" />
          </F0Box>
        </F0Box>
        <F0Button label="Connect" variant="outline" />
      </F0Box>
    </F0Box>
  )
}

function SessionAttendanceTab() {
  const source = useDataCollectionSource<SessionAttendanceRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        attendance: {
          type: "in",
          label: "Attendance",
          options: {
            options: [
              { value: "Attended", label: "Attended" },
              { value: "Not attended", label: "Not attended" },
              { value: "Pending", label: "Pending" },
            ],
          },
        },
      },
      sortings: { name: { label: "Name" } },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ filters, search, sortings = [], pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = sessionAttendance
            .filter((row) => matchArray(filters?.attendance, row.attendance))
            .filter((row) => term === "" || row.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings, (row, field) => field === "name" ? row.name.toLowerCase() : null)
          return paginateRecords(sorted, pagination, 10)
        },
      },
      selectable: (row) => row.id,
      bulkActions: () => ({
        primary: [
          { id: "completed", label: "Completed", icon: CheckCircle },
          { id: "started", label: "Started", icon: InProgressTask },
          { id: "absent", label: "Absent", icon: Cross, critical: true },
        ],
      }),
      totalItemSummary: (total: number) => `${total} participants`,
    },
    []
  )

  return (
    <F0BoxWithClassName className="ml-4 mt-4 w-[574px]">
      <OneDataCollection
        id="trainings-enrollments/session-attendance/v1"
        storage={false}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Name", sorting: "name", render: (row: SessionAttendanceRow) => personValue(row.name) },
                { id: "attendance", label: "Attendance", render: (row: SessionAttendanceRow) => ({ type: "status" as const, value: attendanceStatusValue(row.attendance) }) },
                { id: "completedHours", label: "Hours completed", render: (row: SessionAttendanceRow) => row.completedHours },
              ],
            },
          },
        ]}
      />
    </F0BoxWithClassName>
  )
}

function GroupParticipantsTab({ onOpenDialog }: { onOpenDialog: (dialog: GroupActionDialogId) => void }) {
  const source = useDataCollectionSource<GroupParticipantRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = groupParticipants.filter((participant) =>
            term === "" || [participant.name, participant.team, participant.jobTitle].some((value) => value.toLowerCase().includes(term))
          )
          return paginateRecords(filtered, pagination, 10)
        },
      },
      primaryActions: () => ({ label: "Add participants", icon: Add, onClick: () => onOpenDialog("add-participants") }),
      itemActions: () => [{ label: "Delete", icon: Delete, onClick: () => onOpenDialog("delete-participant"), critical: true }],
      bulkActions: () => ({ primary: [{ id: "delete-memberships", label: "Delete", icon: Delete, critical: true }] }),
      totalItemSummary: (total: number) => `${total} participants`,
    },
    [onOpenDialog]
  )

  return (
    <OneDataCollection
      id="trainings-enrollments/group-participants/v1"
      storage={false}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { id: "name", label: "Name", render: (participant: GroupParticipantRow) => personValue(participant.name) },
              { id: "team", label: "Team", render: (participant: GroupParticipantRow) => participant.team },
              { id: "jobTitle", label: "Job title", render: (participant: GroupParticipantRow) => participant.jobTitle },
            ],
          },
        },
      ]}
    />
  )
}

function GroupMaterialsTab({ onOpenDialog }: { onOpenDialog: (dialog: GroupActionDialogId) => void }) {
  const source = useDataCollectionSource<CourseResourceRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords([], pagination, 20),
      },
      primaryActions: () => [{ label: "Upload", icon: Upload, onClick: () => onOpenDialog("upload-group-material") }],
      secondaryActions: { expanded: 1, actions: () => [{ label: "Embed link", icon: Link, onClick: () => onOpenDialog("embed-group-material") }] },
    },
    [onOpenDialog]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="3xl">
      <F0BoxWithClassName display="flex" flexDirection="column" gap="xs" style={{ maxWidth: 640 }}>
        <F0Heading content="Training group materials" variant="heading" as="h2" />
        <F0Text content="Files or links shared with participants of this group (e.g., syllabus, slides, readings, and other helpful resources)." variant="description" />
      </F0BoxWithClassName>
      <OneDataCollection
        id="trainings-enrollments/group-materials/v1"
        storage={false}
        source={source}
        emptyStates={{
          "no-data": {
            emoji: "📄",
            title: "No materials yet",
            description: "Upload files or embed links you want to share with participants of this specific training group.",
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

function GroupDocumentsTab({ onOpenDialog }: { onOpenDialog: (dialog: GroupActionDialogId) => void }) {
  const source = useDataCollectionSource<CourseResourceRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ pagination }: FetchOptions) => paginateRecords([], pagination, 20),
      },
      primaryActions: () => ({ label: "Upload", icon: Upload, onClick: () => onOpenDialog("upload-group-document") }),
    },
    [onOpenDialog]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="3xl">
      <F0BoxWithClassName display="flex" flexDirection="column" gap="xs" style={{ maxWidth: 640 }}>
        <F0Heading content="Training group documents" variant="heading" as="h2" />
        <F0Text content="Internal files for this group (e.g., attendance sheets, training records, or compliance documents). These are only visible to training managers and admins." variant="description" />
      </F0BoxWithClassName>
      <OneDataCollection
        id="trainings-enrollments/group-documents/v1"
        storage={false}
        source={source}
        emptyStates={{
          "no-data": {
            emoji: "📄",
            title: "No documents yet",
            description: "All documents related to this specific group will appear here once uploaded. Participants won’t see them.",
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

function GroupCostsTab({ onOpenDialog }: { onOpenDialog: (dialog: GroupActionDialogId) => void }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <SectionHeader title="Costs" description="Track and manage all costs associated with this training group." />
      <F0Box display="flex" alignItems="center" justifyContent="between" gap="lg" padding="sm" borderRadius="md" background="secondary">
        <F0Box display="flex" alignItems="start" gap="md" grow>
          <F0Icon icon={InProgressTask} size="md" color="warning" />
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="Linked budget is archived" variant="label" />
            <F0Text content="This group is linked to an archived budget. You can still edit costs, but please note that this budget is no longer active." variant="description" />
          </F0Box>
        </F0Box>
        <F0Button label="View budget" size="sm" variant="outline" onClick={() => onOpenDialog("view-budget")} />
      </F0Box>
      <F0Box display="flex" paddingTop="xl" paddingBottom="xl" flexDirection="column" gap="lg">
        <F0Box display="grid" columns="3" gap="md" width="full" alignItems="stretch" paddingBottom="xl">
          <F0Box display="flex" flexDirection="column" padding="md" gap="xs" border="default" borderRadius="md" borderColor="secondary" colSpan="1">
            <F0Text variant="label" content="Total cost of the group" />
            <F0Text variant="description" content="Sum of direct, indirect, and salary costs" />
            <F0Heading variant="heading-large" content="€3,990.20" />
          </F0Box>
          <F0Box display="grid" columns="2" padding="md" gap="md" border="default" borderRadius="md" borderColor="secondary" colSpan="2">
            <F0FormField field={costFields.linkedBudget} value="quality-compliance" onChange={() => undefined} />
            <F0FormField field={costFields.paymentStatus} value="pending" onChange={() => undefined} />
          </F0Box>
        </F0Box>
        <F0Box display="grid" columns="3" gap="xl" width="full" paddingTop="md" paddingBottom="xl">
          <CostFieldCard title="Direct cost" description="Training-related expenses, such as instructor fees, materials, venue, and logistics." emoji="💰" />
          <CostFieldCard title="Indirect cost" description="General business expenses related to training, such as utilities and administrative fees." emoji="🏢" />
          <CostFieldCard title="Salary cost" description="Cost of all employees' time spent on the course." emoji="📝" action="Calculate" onClick={() => onOpenDialog("calculate-salary-cost")} />
        </F0Box>
        <F0Box display="flex" flexDirection="column" gap="xl" width="full" paddingTop="lg">
          <F0Box display="flex" flexDirection="column" gap="lg">
            <F0Heading content="Other costs" variant="heading" as="h2" />
            <F0Text content="This cost is not used to calculate the total cost of the group and it is not included in the budget." variant="description" />
          </F0Box>
          <F0Box display="flex" flexDirection="column" padding="md" gap="lg" width="full" border="default" borderRadius="md" borderColor="secondary">
            <F0Box display="flex" flexDirection="column" gap="xs">
              <F0Text variant="label" content="Subsidized cost" />
              <F0Text variant="description" content="Amount of training expenses covered by financial aid or subsidies for this group." />
            </F0Box>
            <NumberInput label="Subsidized cost" hideLabel value={1000} onChange={() => undefined} units="EUR" size="md" maxDecimals={2} locale="en-US" />
          </F0Box>
        </F0Box>
      </F0Box>
    </F0Box>
  )
}

function CostFieldCard({ title, description, emoji, action, onClick }: { title: string; description: string; emoji: string; action?: string; onClick?: () => void }) {
  return (
    <F0Card title={title} description={description} avatar={{ type: "emoji", emoji }} fullHeight>
      <F0Box display="grid" columns={action ? "3" : "1"} gap="sm" alignItems="stretch" width="full">
        <F0Box colSpan={action ? "2" : "1"}>
          <NumberInput label={title} hideLabel value={0} onChange={() => undefined} units="EUR" size="md" maxDecimals={2} locale="en-US" />
        </F0Box>
        {action && onClick ? (
          <F0Box display="flex" alignItems="stretch">
            <F0Button label={action} variant="outline" onClick={onClick} />
          </F0Box>
        ) : null}
      </F0Box>
    </F0Card>
  )
}

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
      return {
        title: "Add survey",
        description: "Attach a satisfaction, effectiveness or knowledge survey to this course.",
        primaryLabel: "Add survey",
        summaryTitle: "Survey options",
        summaryItems: ["Course satisfaction", "Course effectiveness", "Knowledge test"],
        toast: "draft",
        position: "right",
      }
    case "add-participants":
    default:
      return {
        title: "Assign participants",
        description: "Search and select employees to manually enroll in this course.",
        primaryLabel: "Assign participants",
        summaryTitle: "How it works",
        summaryItems: ["Search employees by name or team", "Select one or multiple people", "Participants are notified by email"],
        toast: "settings",
      }
  }
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

function getGroupActionDetail(dialog: GroupActionDialogId, groupName: string): TrainingActionDialogDetail {
  switch (dialog) {
    case "edit-group":
      return {
        title: "Edit training group",
        description: `Update dates, sessions and assignments for ${groupName}.`,
        primaryLabel: "Save changes",
        summaryTitle: "Group fields",
        summaryItems: ["Name and date range", "Instructor assignment", "Training budget link"],
        toast: "settings",
        position: "right",
      }
    case "delete-group":
      return {
        title: "Delete training group",
        description: `Remove ${groupName} from the course.`,
        primaryLabel: "Delete group",
        summaryTitle: "Before deleting",
        summaryItems: ["Participants are unassigned", "Sessions are removed from this group", "Course content remains available"],
        toast: "settings",
      }
    case "duplicate-session":
      return {
        title: "Duplicate session",
        description: "Create a copy of this session inside the same training group.",
        primaryLabel: "Duplicate",
        summaryTitle: "Copied data",
        summaryItems: ["Name", "Modality", "Session resources"],
        toast: "draft",
      }
    case "delete-session":
      return {
        title: "Delete session",
        description: "Remove the selected session from this training group.",
        primaryLabel: "Delete session",
        summaryTitle: "Before deleting",
        summaryItems: ["Calendar invites are cancelled", "Attendance for this session is removed", "Participants remain in the group"],
        toast: "settings",
      }
    case "add-participants":
      return {
        title: "Add participants",
        description: "Assign employees to this training group.",
        primaryLabel: "Add participants",
        summaryTitle: "Participant selection",
        summaryItems: ["Search employees", "Select teams or people", "Notify selected participants"],
        toast: "draft",
        position: "right",
      }
    case "delete-participant":
      return {
        title: "Remove participant",
        description: "Remove the selected employee from this training group.",
        primaryLabel: "Remove participant",
        summaryTitle: "Impact",
        summaryItems: ["Progress stays in the employee history", "Future session attendance is removed", "The employee can be added again later"],
        toast: "settings",
      }
    case "upload-group-material":
      return {
        title: "Upload group material",
        description: "Share files only with participants in this group.",
        primaryLabel: "Upload",
        summaryTitle: "Material scope",
        summaryItems: ["Visible to this group", "Supports handbooks and slides", "Can be reused in future sessions"],
        toast: "draft",
      }
    case "embed-group-material":
      return {
        title: "Embed group link",
        description: "Share an external resource with this group.",
        primaryLabel: "Embed link",
        summaryTitle: "Link details",
        summaryItems: ["URL", "Title", "Participant-facing description"],
        toast: "draft",
      }
    case "upload-group-document":
      return {
        title: "Upload group document",
        description: "Add an internal document to this training group.",
        primaryLabel: "Upload",
        summaryTitle: "Document scope",
        summaryItems: ["Attendance sheets", "Training evidence", "Compliance records"],
        toast: "draft",
      }
    case "view-budget":
      return {
        title: "Training budget",
        description: "Review the budget linked to this training group.",
        primaryLabel: "Open budget",
        summaryTitle: "Budget status",
        summaryItems: ["Quality & Compliance", "Archived budget", "Costs remain editable"],
        toast: "draft",
      }
    case "calculate-salary-cost":
    default:
      return {
        title: "Calculate salary cost",
        description: "Estimate salary cost from participants and session time.",
        primaryLabel: "Calculate",
        summaryTitle: "Calculation inputs",
        summaryItems: ["Participant salaries", "Training duration", "Attendance percentage"],
        toast: "draft",
      }
  }
}

// "[mode] · [N] pending" line — amber on the pending count, the rest grey.
function EnrollmentModeLine({ mode, count }: { mode: string; count: number }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-1">
      <F0Text content={mode} variant="body" as="span" />
      <F0Text content="·" variant="body" as="span" />
      <span className="text-base font-normal leading-normal text-f1-foreground-warning">
        {`${count} pending`}
      </span>
    </div>
  )
}

// Enrollment status in the course overview sidebar. Read-only and styled exactly
// like the other sidebar fields (bold label + value, no box / dot / edit link).
// The only colour licence is the amber "[N] pending"; action links appear only
// when there's an operational step to take. The overview just COUNTS pending —
// it doesn't compute its cause (that lives in the Participants list).
function EnrollmentSidebarBlock({
  course,
  onViewPending,
  onSetUp,
}: {
  course: ExactCourse
  onViewPending?: () => void
  onSetUp?: () => void
}) {
  const rule = course.enrollmentRule
  const pending = course.pendingCount ?? 0

  // Manual: no automatic rule (also covers "just created, not configured"). Pending
  // can still happen here (requests, manual assignment without a group, etc.).
  if (!rule) {
    return (
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text content="Enrollment" variant="label" />
        {pending > 0 ? (
          <>
            <EnrollmentModeLine mode="Manual" count={pending} />
            <EnrollmentActionLink label="View pending" onClick={onViewPending} />
          </>
        ) : (
          <>
            <F0Text content="Manual · added by hand from Participants" variant="body" />
            <EnrollmentActionLink label="Set up automatic enrollment" onClick={onSetUp} />
          </>
        )}
      </F0Box>
    )
  }

  // Automatic. "Who" summary, truncated by criteria count so it never breaks layout.
  const criteria = rule.criteria
  const audience =
    criteria.length > 2 ? `${criteria[0]} · +${criteria.length - 1} more` : criteria.join(" · ")

  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content="Enrollment" variant="label" />
      {pending > 0 ? (
        <EnrollmentModeLine mode="Automatic" count={pending} />
      ) : (
        <F0Text content="Automatic · active" variant="body" />
      )}
      <F0Text content={audience} variant="body" />
      {pending > 0 && <EnrollmentActionLink label="View pending" onClick={onViewPending} />}
    </F0Box>
  )
}

// Subtle text link (info colour) used only for the operational actions above.
function EnrollmentActionLink({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div className="flex">
      <F0Link variant="link" onClick={() => onClick?.()} append={<F0Icon icon={ExternalLink} size="xs" />}>
        {label}
      </F0Link>
    </div>
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

function InfoSection({
  title,
  items,
  description,
  asTags = true,
}: {
  title: string
  items?: string[]
  description?: string
  asTags?: boolean
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading content={title} variant="heading" as="h3" />
      {items ? (
        asTags ? (
          <F0Box display="flex" flexWrap="wrap" gap="sm">
            {items.map((item) => (
              <F0TagRaw key={item} text={item} />
            ))}
          </F0Box>
        ) : (
          <F0Box display="flex" flexDirection="column" gap="sm">
            {items.map((item) => (
              <F0Text key={item} content={item} variant="body" />
            ))}
          </F0Box>
        )
      ) : (
        <F0Text content={description ?? "-"} variant="body" />
      )}
    </F0Box>
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

function SideInfo({
  course,
  onSetUp,
  onViewPending,
}: {
  course: ExactCourse
  onCreateGroup?: () => void
  onSetUp?: () => void
  onViewPending?: () => void
}) {
  return (
    <F0BoxWithClassName
      display="flex"
      flexDirection="column"
      gap="xl"
      paddingLeft="xl"
      style={{ flex: 1 }}
    >
      <CourseThumbnailField course={course} />
      <EnrollmentSidebarBlock course={course} onViewPending={onViewPending} onSetUp={onSetUp} />
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
