import {
  F0Alert,
  F0AvatarEmoji,
  F0AvatarList,
  F0Box,
  F0Card,
  F0DataChart,
  F0BigNumber,
  F0Button,
  F0ButtonToggle,
  F0Dialog,
  F0Form,
  F0FormField,
  F0Heading,
  F0Icon,
  NotesTextEditor,
  useF0Form,
  useF0FormDefinition,
  f0FormField,
  F0Select,
  F0TagRaw,
  F0TagStatus,
  F0Text,
  StandardLayout,
  TwoColumnLayout,
  type F0Field,
  type IconType,
} from "@factorialco/f0-react"
import {
  CalendarEvent,
  DetailsItem,
  OneDataCollection,
  Page,
  PageHeader,
  NumberInput,
  ResourceHeader,
  SectionHeader,
  Switch,
  Tabs,
  ToggleGroup,
  ToggleGroupItem,
  Widget,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  AcademicCap,
  Archive,
  Bell,
  BookOpen,
  CalendarArrowRight,
  ChartLine,
  CheckCircle,
  CheckDouble,
  Comment,
  Cross,
  Delete,
  Download,
  DollarBill,
  Envelope,
  EyeInvisible,
  EyeVisible,
  ExternalLink,
  Feed,
  File,
  Files,
  Hub,
  InProgressTask,
  Laptop,
  Link,
  LogoAvatar,
  Microphone,
  MicrophoneNegative,
  Settings,
  Sliders,
  Sparkles,
  Desktop,
  People,
  Upload,
  VideoRecorder,
  VideoRecorderNegative,
} from "@factorialco/f0-react/icons/app"
import {
  type ComponentProps,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  useCallback,
  useEffect,
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
type SessionSidepanelTabId = "details" | "notes" | "attendance" | "transcript"
type LiveSessionPanelId = "chat" | "notes" | null
type LiveSessionRole = "participant" | "instructor"
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
  | "session-waiting-room"
  | "session-room"
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
const LIVE_SESSION_COMPACT_PANEL_WIDTH = 420
const LIVE_SESSION_NOTES_PANEL_WIDTH = 612
type SortingsState = { field: string; order: "asc" | "desc" }[]
type FetchOptions = {
  filters?: Record<string, unknown>
  search?: string
  sortings?: SortingsState
  pagination?: { perPage?: number; currentPage?: number }
}
type StateSetter<T> = (value: T | ((current: T) => T)) => void

type ExactCourse = Omit<Training, "categories" | "objectives" | "totalCost"> & {
  catalogVisible: boolean
  competencies: string[]
  categories: string[]
  participants: number
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
type SessionModalityValue = "hybrid" | "virtual" | "onsite"
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
  statusLabel: string
  scheduleLabel: string
  liveDurationSeconds?: number
  type: "self-paced" | "scheduled"
  modality: "Virtual" | "On-site" | "Hybrid"
  // Where an online session runs. "external" (own link) and on-site sessions
  // can't be auto-tracked, so attendance is manual. Defaults to "factorial".
  host?: "factorial" | "external"
  liveState: "completed" | "live" | "waiting"
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
type CourseModuleRow = {
  id: string
  title: string
  blocks: number
  status: "completed" | "in_progress" | "not_started"
}
type MyCertificateRow = {
  id: string
  name: string
  type: string
  updatedAt: string
}

export const meta: PrototypeMeta = {
  slug: "training-live-session-participant",
  title: "Training Live Session Participant",
  description:
    "Participant live-session flow from My trainings: course list, course detail, sessions tab and session sidepanel.",
  category: "Talent",
  module: "my-training",
  audience: ["employee"],
  tags: ["training", "my-trainings", "live-sessions", "participant"],
  createdAt: "2026-05-28",
}

const prototypeSlug = "training-live-session-participant"
const instructorPrototypeSlug = "training-live-session-instructor"
const getPrototypeSlug = (role: LiveSessionRole) => role === "instructor" ? instructorPrototypeSlug : prototypeSlug
const getActivePrototypeSlug = () => {
  if (typeof window === "undefined") return prototypeSlug
  return window.location.pathname.includes(`/p/${instructorPrototypeSlug}`) ? getPrototypeSlug("instructor") : getPrototypeSlug("participant")
}

const moduleInfo = {
  id: "company_trainings" as const,
  name: "Trainings",
  get href() {
    return `/p/${getActivePrototypeSlug()}`
  },
}

const routes = {
  get home() {
    return `/p/${getActivePrototypeSlug()}`
  },
  get courses() {
    return `/p/${getActivePrototypeSlug()}`
  },
  get budgets() {
    return `/p/${getActivePrototypeSlug()}?tab=budgets`
  },
  get surveyTemplates() {
    return `/p/${getActivePrototypeSlug()}?sub=survey-templates`
  },
  get myCourses() {
    return `/p/${getActivePrototypeSlug()}?view=free-course`
  },
  course: (courseId: string, tab: CourseDetailTabId = "overview") =>
    `/p/${getActivePrototypeSlug()}?view=detail&course=${encodeURIComponent(courseId)}&dtab=${tab}`,
  group: (courseId: string, groupName: string, tab: GroupDetailTabId = "sessions") =>
    `/p/${getActivePrototypeSlug()}?view=group-detail&course=${encodeURIComponent(courseId)}&group=${encodeURIComponent(groupName)}&gtab=${tab}`,
  budget: (budgetId: string) =>
    `/p/${getActivePrototypeSlug()}?view=budget-detail&budget=${encodeURIComponent(budgetId)}`,
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


const sessionModalityOptions: Array<{
  value: SessionModalityValue
  label: string
  description: string
  icon: IconType
}> = [
  { value: "virtual", label: "Virtual", description: "Online only", icon: VideoRecorder },
  { value: "hybrid", label: "Hybrid", description: "Online + location", icon: Laptop },
  { value: "onsite", label: "On-site", description: "Physical location", icon: People },
]

// Online sessions: where the video call lives. Factorial = built-in call;
// External = the instructor pastes their own link (and we then lose the
// in-Factorial call features).
const videoCallOptions: Array<{ value: "factorial" | "external"; label: string; description: string; icon: IconType }> = [
  { value: "factorial", label: "In Factorial", description: "Runs in Factorial", icon: LogoAvatar },
  { value: "external", label: "Externally hosted", description: "Runs outside Factorial", icon: ExternalLink },
]

function SessionToggleField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 11 }}>
      <label className="text-base font-medium leading-normal text-f1-foreground-secondary">{label}</label>
      {children}
    </F0BoxWithClassName>
  )
}

function SessionOptionGroup<TValue extends string>({
  value,
  options,
  onChange,
  columns,
}: {
  value: TValue
  options: Array<{ value: TValue; label: string; description: string; icon: IconType }>
  onChange: (value: TValue) => void
  columns: "2" | "3"
}) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) onChange(nextValue as TValue)
      }}
      className={columns === "2" ? "grid w-full grid-cols-2 gap-3" : "grid w-full grid-cols-3 gap-3"}
    >
      {options.map((option) => {
        const selected = option.value === value

        return (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            className={selected
              ? "h-auto justify-between gap-2 rounded-md border border-solid border-f1-border-selected bg-f1-background-selected-secondary px-3 py-3 text-f1-foreground-selected shadow-none data-[state=on]:bg-f1-background-selected-secondary data-[state=on]:text-f1-foreground-selected focus-visible:outline-none"
              : "h-auto justify-between gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-3 text-f1-foreground hover:border-f1-border-hover hover:bg-f1-background-hover focus-visible:outline-none"}
          >
            <F0Box display="flex" alignItems="center" gap="md">
              <F0Icon icon={option.icon} size="sm" color="currentColor" />
              <F0Box display="flex" flexDirection="column" gap="none">
                <F0Text content={option.label} variant="body" />
                <F0Text content={option.description} variant="small" />
              </F0Box>
            </F0Box>
            {selected ? <F0Icon icon={CheckCircle} size="sm" color="currentColor" /> : null}
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}

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
  const validityExpired = index < 3 ? 0 : training.expiredParticipantCount

  return {
    ...training,
    id: index === 0 ? "7" : index === 1 ? "5" : index === 2 ? "6" : training.id,
    name,
    code,
    status: index < 8 ? "active" : training.status,
    participants: index < 3 ? (index === 0 ? 24 : 23) : training.participantCount,
    validityExpired,
    catalogVisible: index < 8 ? true : training.catalog,
    requirement: index === 0 ? "mandatory" : "not-mandatory",
    campus: index < 8,
    provider: index < 8 ? "Factorial campus" : "Internal",
    duration: index === 0 ? "10h 0m" : index === 1 ? "6h 30m" : "4h 0m",
    groups: index === 0 ? ["Edición 2026", "Edición 2026 - Grupo B"] : ["Default group"],
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
    effectiveDate: "1 Jan 2026 - 31 Dec 2026",
    trainingGroups: 2,
    movements: [
      {
        id: "movement-qc-1",
        trainingId: "7",
        trainingName: "Fundamentos de la gestión de calidad con ISO 9001",
        groupName: "Edición 2026 - Grupo B",
        groupStatus: "finished",
        startDate: "01/01/2026",
        endDate: "12/31/2026",
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
        groupName: "Edición 2026",
        groupStatus: "finished",
        startDate: "01/01/2026",
        endDate: "12/31/2026",
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
    effectiveDate: "1 Jan 2026",
    trainingGroups: 0,
    movements: [],
  },
]

const groupSessions: GroupSessionRow[] = [
  {
    id: "session-1",
    name: "Fundamentos ISO 9001",
    date: "15 Jun 2026, 10:00 - 11:00",
    statusLabel: "Live",
    scheduleLabel: "15 Jun 2026, 10:00 - 11:00",
    liveDurationSeconds: 18 * 60 + 23,
    type: "scheduled",
    modality: "Virtual",
    liveState: "live",
  },
  {
    id: "session-3",
    name: "Introducción a ISO 9001",
    date: "10 Jun 2026, 10:00 - 11:00",
    statusLabel: "Ended",
    scheduleLabel: "10 Jun 2026, 10:00 - 11:00",
    liveDurationSeconds: 60 * 60,
    type: "scheduled",
    modality: "Virtual",
    liveState: "completed",
  },
  {
    id: "session-2",
    name: "Q&A final",
    date: "15 Jun 2026, 11:30 - 12:30",
    statusLabel: "Starts soon",
    scheduleLabel: "15 Jun 2026, 11:30 - 12:30",
    type: "scheduled",
    modality: "Virtual",
    liveState: "waiting",
  },
  {
    id: "session-4",
    name: "Repaso con consultor externo",
    date: "16 Jun 2026, 10:00 - 11:00",
    statusLabel: "Starts soon",
    scheduleLabel: "16 Jun 2026, 10:00 - 11:00",
    type: "scheduled",
    modality: "Virtual",
    host: "external",
    liveState: "waiting",
  },
  {
    id: "session-5",
    name: "Práctica en planta",
    date: "17 Jun 2026, 09:00 - 11:00",
    statusLabel: "Starts soon",
    scheduleLabel: "17 Jun 2026, 09:00 - 11:00",
    type: "scheduled",
    modality: "On-site",
    liveState: "waiting",
  },
  {
    id: "session-6",
    name: "Taller presencial inicial",
    date: "9 Jun 2026, 09:00 - 11:00",
    statusLabel: "Ended",
    scheduleLabel: "9 Jun 2026, 09:00 - 11:00",
    type: "scheduled",
    modality: "On-site",
    liveState: "completed",
  },
]

const calendarEventColor = "hsl(var(--info-50))"
const calendarEventActionClassName = "cursor-pointer rounded-sm transition-colors hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-f1-border-info"
const aiActBannerImageUrl = "/@fs/Users/jon.saenz/code/factorial/frontend/src/modules/trainings/lib/assets/lmsUpsellBanner.png"
const getNextSession = (endedSessionIds: string[] = []) =>
  groupSessions.find((session) => session.liveState === "live" && !endedSessionIds.includes(session.id)) ??
  groupSessions.find((session) => session.liveState === "waiting" && !endedSessionIds.includes(session.id)) ??
  null
const getSessionCalendarDescription = (session: GroupSessionRow) =>
  session.liveState === "live"
    ? "Live now"
    : session.liveState === "completed"
      ? "Ended"
      : session.scheduleLabel
const getSessionCalendarDate = (session: GroupSessionRow) =>
  session.liveState === "completed"
    ? new Date(2026, 5, 10, 10)
    : session.liveState === "live"
      ? new Date(2026, 5, 15, 10)
      : new Date(2026, 5, 15, 11, 30)
const getSessionStatus = (session: GroupSessionRow) =>
  session.liveState === "live"
    ? { label: "Started", status: "warning" as const }
    : session.liveState === "completed"
      ? { label: "Completed", status: "positive" as const }
      : { label: "Not started", status: "neutral" as const }

const myTrainingModules: CourseModuleRow[] = [
  { id: "module-1", title: "Introduction and learning objectives", blocks: 3, status: "completed" },
  { id: "module-2", title: "Quality principles in daily operations", blocks: 5, status: "in_progress" },
  { id: "module-3", title: "Final knowledge check", blocks: 4, status: "not_started" },
]

const myTrainingMaterials: CourseResourceRow[] = [
  { id: "material-1", name: "Course syllabus.pdf", type: "PDF", updatedAt: "2 Jan 2026" },
  { id: "material-2", name: "ISO 9001 quick reference", type: "Link", updatedAt: "2 Jan 2026" },
  { id: "material-3", name: "Process improvement worksheet.xlsx", type: "Spreadsheet", updatedAt: "5 Jan 2026" },
]

const myTrainingCertificates: MyCertificateRow[] = [
  { id: "certificate-1", name: "ISO 9001 completion certificate.pdf", type: "Certificate", updatedAt: "31 Jan 2026" },
]

// A live session lasts ~1h (this one runs 10:00–11:00). Rule: whoever joined the
// live room counts as "Attended", with the time they were present out of 60 min.
// Someone who never joined is "Not attended" (0m). The instructor can still
// override any row from the end-session modal or the Attendance tab.
const sessionAttendance: SessionAttendanceRow[] = [
  { id: "att-1", name: "Calvino Collins", attendance: "Attended", completedHours: "60m/60m" },
  { id: "att-2", name: "Clara Castillo", attendance: "Attended", completedHours: "41m/60m" },
  { id: "att-3", name: "Cristóbal Cárdenas", attendance: "Attended", completedHours: "58m/60m" },
  { id: "att-4", name: "Emilia Estrada", attendance: "Not attended", completedHours: "0m/60m" },
  { id: "att-5", name: "Hellen Howard", attendance: "Attended", completedHours: "60m/60m" },
  { id: "att-6", name: "Margarita Márquez", attendance: "Attended", completedHours: "33m/60m" },
  { id: "att-7", name: "Natalia Navarro", attendance: "Attended", completedHours: "57m/60m" },
  { id: "att-8", name: "Nicolás Núñez", attendance: "Not attended", completedHours: "0m/60m" },
  { id: "att-9", name: "Noé Navarro", attendance: "Attended", completedHours: "60m/60m" },
  { id: "att-10", name: "Nora Nieto", attendance: "Not attended", completedHours: "0m/60m" },
  { id: "att-11", name: "Scott Santos", attendance: "Attended", completedHours: "59m/60m" },
  { id: "att-12", name: "Samantha Suárez", attendance: "Attended", completedHours: "38m/60m" },
  { id: "att-13", name: "Susana Stanley", attendance: "Attended", completedHours: "9m/60m" },
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
  "session-waiting-room",
  "session-room",
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

type MyTrainingsViewId = "overview" | "course-detail" | "session-room" | "session-waiting-room"
type MyTrainingDetailTabId = "overview" | "content" | "materials" | "sessions" | "certificates"

const myTrainingsSlug = "training-live-session-participant"
const myTrainingsModuleInfo = {
  id: "my_trainings" as const,
  name: "My trainings",
  href: `/p/${myTrainingsSlug}`,
}

const myTrainingDetailTabs: { id: MyTrainingDetailTabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "content", label: "Content" },
  { id: "materials", label: "Materials" },
  { id: "sessions", label: "Sessions" },
  { id: "certificates", label: "Certificates" },
]

export default function TrainingLiveSessionParticipant() {
  return <ParticipantMyTrainingsLiveSessions />
}

function ParticipantMyTrainingsLiveSessions() {
  const [searchParams, setSearchParams] = useSearchParams()
  const view = getValidParam(searchParams.get("view"), new Set<string>(["overview", "course-detail", "session-room", "session-waiting-room"]), "overview") as MyTrainingsViewId
  const selectedCourse = exactCourses.find((course) => course.id === searchParams.get("course")) ?? exactCourses[0]
  const selectedSession = groupSessions.find((session) => session.id === searchParams.get("session")) ?? null
  const groupName = searchParams.get("group") ?? selectedCourse.groups[0] ?? "Training group"

  const goToCourse = (courseId: string, tab: MyTrainingDetailTabId = "overview") => setSearchParams({ view: "course-detail", course: courseId, tab })
  const goToSession = (sessionId: string) => setSearchParams({ view: "course-detail", course: selectedCourse.id, tab: "sessions", group: groupName, session: sessionId })
  const closeSession = () => setSearchParams({ view: "course-detail", course: selectedCourse.id, tab: "sessions", group: groupName })
  const joinSession = (session: GroupSessionRow) => setSearchParams({ view: session.liveState === "waiting" ? "session-waiting-room" : "session-room", course: selectedCourse.id, group: groupName, session: session.id })
  const backToSession = () => setSearchParams({ view: "course-detail", course: selectedCourse.id, tab: "sessions", group: groupName, session: (selectedSession ?? groupSessions[0]).id })

  if ((view === "session-room" || view === "session-waiting-room") && selectedSession) {
    if (view === "session-waiting-room") return <SessionWaitingRoomScreen course={selectedCourse} groupName={groupName} session={selectedSession} onExit={backToSession} />
    return <SessionRoomScreen course={selectedCourse} groupName={groupName} session={selectedSession} role="participant" onExit={backToSession} />
  }

  if (view === "course-detail") {
    return (
      <ParticipantMyTrainingCourseDetail
        course={selectedCourse}
        groupName={groupName}
        sidepanelSession={selectedSession}
        onBack={() => setSearchParams({})}
        onTabChange={(tab) => goToCourse(selectedCourse.id, tab)}
        onOpenSession={goToSession}
        onCloseSession={closeSession}
        onJoinSession={joinSession}
      />
    )
  }

  return <ParticipantMyTrainingsOverview onOpenSession={(sessionId) => setSearchParams({ view: "course-detail", course: selectedCourse.id, tab: "sessions", group: groupName, session: sessionId })} />
}

function ParticipantMyTrainingsOverview({ onOpenSession }: { onOpenSession: (sessionId: string) => void }) {
  const nextSession = getNextSession()
  const source = useDataCollectionSource<ExactCourse>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          label: "Status",
          type: "in",
          options: {
            options: [
              { label: "Not started", value: "not_started" },
              { label: "Started", value: "started" },
              { label: "Completed", value: "completed" },
              { label: "Partially completed", value: "partially_completed" },
              { label: "Absent", value: "missing" },
            ],
          },
        },
        creationYear: {
          label: "Year",
          type: "in",
          options: {
            options: ["2026", "2025", "2024", "2023"].map((year) => ({ label: year, value: year })),
          },
        },
      },
      sortings: {
        isMandatory: { label: "Mandatory" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 12,
        fetchData: ({ filters, search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const statuses = Array.isArray(filters?.status) ? filters.status : []
          const filtered = exactCourses.filter((course) => {
            const status = course.id === "7" ? "started" : course.status === "active" ? "not_started" : "completed"
            return (term === "" || course.name.toLowerCase().includes(term)) && (statuses.length === 0 || statuses.includes(status))
          })
          return paginateRecords(filtered, pagination, 12)
        },
      },
      itemUrl: (course) => `/p/${myTrainingsSlug}?view=course-detail&course=${course.id}`,
      totalItemSummary: (total) => `${total} courses`,
    },
    []
  )

  return (
    <Page header={<PageHeader module={myTrainingsModuleInfo} />}>
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
            {nextSession ? (
              <Widget header={{ title: "Next session" }}>
                <F0BoxWithClassName
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${nextSession.name}`}
                  width="full"
                  minHeight={50}
                  className={calendarEventActionClassName}
                  onClick={() => onOpenSession(nextSession.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") onOpenSession(nextSession.id)
                  }}
                >
                  <CalendarEvent
                    title={nextSession.name}
                    description={getSessionCalendarDescription(nextSession)}
                    color={calendarEventColor}
                    isPending={nextSession.liveState !== "live"}
                    toDate={getSessionCalendarDate(nextSession)}
                  />
                </F0BoxWithClassName>
              </Widget>
            ) : null}
            <Widget header={{ title: "Progress" }}>
              <F0Box display="flex" justifyContent="between" alignItems="center" minHeight={50}>
                <F0Box display="flex" flexDirection="column" gap="xs">
                  <F0Text content="Courses completed" variant="description" />
                  <F0Text content="1/3" variant="body" />
                </F0Box>
                <F0AvatarEmoji emoji="🎯" size="xl" />
              </F0Box>
            </Widget>
          </F0Box>
          <OneDataCollection
            id={`${myTrainingsSlug}/my-training-cards/v1`}
            storage={false}
            source={source}
            visualizations={[{ type: "card", options: { title: (course: ExactCourse) => course.name, cardProperties: [
              { label: "", icon: CheckDouble, render: (course: ExactCourse) => ({ type: "text" as const, value: course.id === "7" ? "1 of 2 sessions" : "No progress tracked" }) },
              { label: "", icon: ChartLine, render: (course: ExactCourse) => ({ type: "progressBar" as const, value: { label: course.id === "7" ? "50%" : "0%", value: course.id === "7" ? 50 : 0 } }) },
              { label: "", icon: Feed, render: (course: ExactCourse) => ({ type: "status" as const, value: { label: course.id === "7" ? "Started" : "Not started", status: course.id === "7" ? "warning" : "neutral" } }) },
              { label: "", icon: Hub, render: () => ({ type: "text" as const, value: "Virtual" }) },
            ] } }]}
          />
        </F0Box>
      </StandardLayout>
    </Page>
  )
}

function ParticipantMyTrainingCourseDetail({ course, groupName, sidepanelSession, onTabChange, onOpenSession, onCloseSession, onJoinSession }: { course: ExactCourse; groupName: string; sidepanelSession: GroupSessionRow | null; onBack: () => void; onTabChange: (tab: MyTrainingDetailTabId) => void; onOpenSession: (sessionId: string) => void; onCloseSession: () => void; onJoinSession: (session: GroupSessionRow) => void }) {
  const [searchParams] = useSearchParams()
  const [prejoinSession, setPrejoinSession] = useState<GroupSessionRow | null>(null)
  const activeTab = getValidParam(searchParams.get("tab"), new Set<string>(myTrainingDetailTabs.map((tab) => tab.id)), "overview") as MyTrainingDetailTabId

  return (
    <Page header={<><PageHeader module={myTrainingsModuleInfo} breadcrumbs={[{ id: "overview", label: "Course list", href: `/p/${myTrainingsSlug}` }, { id: course.id, label: course.name }]} /><ResourceHeader title={course.name} status={{ label: "", text: "Started", variant: "warning" }} primaryAction={{ label: "Resume course", icon: AcademicCap, onClick: () => onTabChange("content") }} /><Tabs key={activeTab} tabs={myTrainingDetailTabs.map((tab) => ({ ...tab, onClick: () => onTabChange(tab.id) }))} activeTabId={activeTab} /></>}>
      <StandardLayout>
        <ParticipantMyTrainingTabBody course={course} activeTab={activeTab} onOpenSession={onOpenSession} />
        <ParticipantSessionSidepanel session={sidepanelSession} course={course} groupName={groupName} onClose={onCloseSession} onJoinSession={setPrejoinSession} />
        {prejoinSession ? (
          <SessionPrejoinScreen
            groupName={groupName}
            session={prejoinSession}
            role="participant"
            onBack={() => setPrejoinSession(null)}
            onJoin={() => onJoinSession(prejoinSession)}
          />
        ) : null}
      </StandardLayout>
    </Page>
  )
}

function ParticipantMyTrainingTabBody({ course, activeTab, onOpenSession }: { course: ExactCourse; activeTab: MyTrainingDetailTabId; onOpenSession: (sessionId: string) => void }) {
  if (activeTab === "sessions") return <ParticipantMyTrainingSessionsTab onOpenSession={onOpenSession} />
  if (activeTab === "content") return <ParticipantMyTrainingContentTab />
  if (activeTab === "materials") return <ParticipantMyTrainingMaterialsTab />
  if (activeTab === "certificates") return <ParticipantMyTrainingCertificatesTab />
  return <ParticipantMyTrainingOverviewTab course={course} />
}

function ParticipantMyTrainingOverviewTab({ course }: { course: ExactCourse }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Card title="Description">
        <F0Box padding="lg">
          <F0Text content={course.description} variant="body" />
        </F0Box>
      </F0Card>
      <F0Box display="grid" columns="1" md={{ columns: "2" }} gap="lg">
        <ParticipantInfoCard title="Objectives" items={course.objectives} />
        <ParticipantInfoCard title="Competencies" items={course.competencies} />
      </F0Box>
      <F0Card title="Instructor(s)">
        <F0Box padding="lg">
          <F0AvatarList avatars={[{ type: "person", firstName: "Adam", lastName: "Joseph" }]} size="sm" type="person" max={3} />
        </F0Box>
      </F0Card>
    </F0Box>
  )
}

function ParticipantInfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <F0Card title={title}>
      <F0Box display="flex" flexDirection="column" gap="sm" padding="lg">
        {items.map((item) => <F0Text key={item} content={item} variant="body" />)}
      </F0Box>
    </F0Card>
  )
}

function ParticipantMyTrainingContentTab() {
  const source = useDataCollectionSource<CourseModuleRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = myTrainingModules.filter((module) => term === "" || module.title.toLowerCase().includes(term))
          return paginateRecords(filtered, pagination, 20)
        },
      },
      totalItemSummary: (total) => `${total} modules`,
    },
    []
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <SectionHeader title="Course content" description="Follow the course syllabus and continue where you left off." separator="bottom" />
      <OneDataCollection id={`${myTrainingsSlug}/my-training-content/v1`} storage={false} source={source} visualizations={[{ type: "table", options: { columns: [
        { id: "title", label: "Module", render: (module: CourseModuleRow) => ({ type: "text" as const, value: module.title }) },
        { id: "blocks", label: "Blocks", render: (module: CourseModuleRow) => module.blocks },
        { id: "status", label: "Status", render: (module: CourseModuleRow) => ({ type: "status" as const, value: { label: module.status === "completed" ? "Completed" : module.status === "in_progress" ? "Started" : "Not started", status: module.status === "completed" ? "positive" : module.status === "in_progress" ? "warning" : "neutral" } }) },
      ] } }]} />
    </F0Box>
  )
}

function ParticipantMyTrainingMaterialsTab() {
  const source = useParticipantResourceSource(myTrainingMaterials, "materials")
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <SectionHeader title="Course materials" description="All the resources you need for this course (e.g., the syllabus, slides, readings, and other files)." separator="bottom" />
      <ParticipantResourcesCollection id="materials" source={source} emptyTitle="No materials yet" emptyDescription="All course materials will appear here once uploaded." />
    </F0Box>
  )
}

function ParticipantMyTrainingCertificatesTab() {
  const source = useDataCollectionSource<MyCertificateRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = myTrainingCertificates.filter((certificate) => term === "" || certificate.name.toLowerCase().includes(term))
          return paginateRecords(filtered, pagination, 20)
        },
      },
      primaryActions: () => ({ label: "Upload", icon: Upload, onClick: () => undefined }),
      itemActions: () => [{ label: "Delete", icon: Delete, onClick: () => undefined }],
      totalItemSummary: (total) => `${total} certificates`,
    },
    []
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <SectionHeader title="Course certificates" description="All certificates you've earned for this course, including from previous completions." separator="bottom" />
      <OneDataCollection id={`${myTrainingsSlug}/my-training-certificates/v1`} storage={false} source={source} emptyStates={{ "no-data": { title: "No certificates yet", description: "Once you complete the course, your certificate will appear here." } }} visualizations={[{ type: "table", options: { columns: [
        { id: "name", label: "Name", render: (certificate: MyCertificateRow) => ({ type: "text" as const, value: certificate.name }) },
        { id: "type", label: "Type", render: (certificate: MyCertificateRow) => certificate.type },
        { id: "updatedAt", label: "Updated", render: (certificate: MyCertificateRow) => certificate.updatedAt },
      ] } }]} />
    </F0Box>
  )
}

function useParticipantResourceSource(resources: CourseResourceRow[], collection: string) {
  return useDataCollectionSource<CourseResourceRow>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = resources.filter((resource) => term === "" || resource.name.toLowerCase().includes(term))
          return paginateRecords(filtered, pagination, 20)
        },
      },
      totalItemSummary: (total) => `${total} ${collection}`,
    },
    [collection, resources]
  )
}

function ParticipantResourcesCollection({ id, source, emptyTitle, emptyDescription }: { id: string; source: ReturnType<typeof useDataCollectionSource<CourseResourceRow>>; emptyTitle: string; emptyDescription: string }) {
  return <OneDataCollection id={`${myTrainingsSlug}/my-training-${id}/v1`} storage={false} source={source} emptyStates={{ "no-data": { title: emptyTitle, description: emptyDescription } }} visualizations={[{ type: "table", options: { columns: [
    { id: "name", label: "Name", render: (resource: CourseResourceRow) => ({ type: "text" as const, value: resource.name }) },
    { id: "type", label: "Type", render: (resource: CourseResourceRow) => resource.type },
    { id: "updatedAt", label: "Updated", render: (resource: CourseResourceRow) => resource.updatedAt },
  ] } }]} />
}

function ParticipantMyTrainingSessionsTab({ onOpenSession }: { onOpenSession: (sessionId: string) => void }) {
  const source = useDataCollectionSource<GroupSessionRow>(
    {
      search: { enabled: true, sync: true },
      sortings: { name: { label: "Name" }, startsAt: { label: "Date" } },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, sortings, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = groupSessions.filter((session) => term === "" || session.name.toLowerCase().includes(term))
          const sorted = applySort(filtered, sortings ?? [], (session, field) => field === "name" ? session.name.toLowerCase() : session.date)
          return paginateRecords(sorted, pagination, 20)
        },
      },
      itemUrl: (session) => `/p/${myTrainingsSlug}?view=course-detail&course=${exactCourses[0].id}&tab=sessions&session=${session.id}`,
      itemActions: (session) => [{ label: "View details", icon: EyeVisible, onClick: () => onOpenSession(session.id) }],
      totalItemSummary: (total) => `${total} sessions`,
    },
    [onOpenSession]
  )

  return <OneDataCollection id={`${myTrainingsSlug}/my-training-sessions/v1`} storage={false} source={source} visualizations={[{ type: "table", options: { columns: [
    { id: "name", label: "Name", sorting: "name", render: (session: GroupSessionRow) => ({ type: "text" as const, value: session.name }) },
    { id: "date", label: "Date", sorting: "startsAt", render: (session: GroupSessionRow) => ({ type: "text" as const, value: session.date }) },
    { id: "location", label: "Location", render: (session: GroupSessionRow) => session.modality === "Virtual" ? "-" : session.modality },
    { id: "status", label: "Status", render: (session: GroupSessionRow) => ({ type: "status" as const, value: getSessionStatus(session) }) },
  ] } }]} />
}

function ParticipantSessionSidepanel({ session, course, onClose, onJoinSession }: { session: GroupSessionRow | null; course: ExactCourse; groupName: string; onClose: () => void; onJoinSession: (session: GroupSessionRow) => void }) {
  const [tab, setTab] = useState<"details" | "notes">("details")
  if (!session) return null

  const tabs = [
    { id: "details", label: "Details", onClick: () => setTab("details") },
    { id: "notes", label: "Notes", onClick: () => setTab("notes") },
  ]

  return (
    <F0BoxWithClassName role="presentation" className="fixed inset-0 z-50 pointer-events-none">
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
          <F0BoxWithClassName display="flex" alignItems="center" justifyContent="between" paddingLeft="xl" paddingRight="lg" borderBottom="default" borderColor="secondary" style={{ height: 57 }}>
            <F0Heading content={session.name} variant="heading" as="h2" />
            <F0BoxWithClassName role="button" aria-label="Close" tabIndex={0} onClick={onClose} display="flex" alignItems="center" justifyContent="center" border="default" borderColor="secondary" borderRadius="lg" style={{ width: 32, height: 32, cursor: "pointer" }}>
              <F0Icon icon={Cross} size="md" />
            </F0BoxWithClassName>
          </F0BoxWithClassName>
          <F0BoxWithClassName overflowY="auto" grow>
            <F0BoxWithClassName paddingTop="lg">
              <Tabs key={tab} tabs={tabs} activeTabId={tab} />
            </F0BoxWithClassName>
            <F0BoxWithClassName paddingLeft="xl" paddingRight="xl" style={{ paddingTop: 24 }}>
              {tab === "details" ? (
                <F0Box display="flex" flexDirection="column" gap="3xl">
                  <DetailsItem title="Status" content={{ type: "status-tag", text: getSessionStatus(session).label, variant: getSessionStatus(session).status }} />
                  <F0Box display="grid" columns="2" gap="xl">
                    <DetailsItem title="Course name" content={{ type: "item", text: course.name }} />
                    <DetailsItem title="Type" content={{ type: "raw-tag", text: session.type === "self-paced" ? "Self-paced" : "Scheduled" }} />
                    <DetailsItem title="Date" content={{ type: "item", text: session.scheduleLabel }} />
                    <DetailsItem title="Hour" content={{ type: "item", text: session.scheduleLabel }} />
                    <DetailsItem title="Location" content={{ type: "item", text: "—" }} />
                    <DetailsItem title="Modality" content={{ type: "item", text: session.modality }} />
                    <DetailsItem title="Instructors" content={{ type: "avatar-list", avatarList: { avatars: [{ type: "person", firstName: "Adam", lastName: "Joseph" }], size: "sm", type: "person", max: 3 } }} />
                  </F0Box>
                  <F0Box display="flex" flexDirection="column" gap="sm">
                    <F0Text content="Link" variant="label" />
                    <F0Box display="flex" justifyContent="start"><F0Button label="Join session" icon={VideoRecorder} onClick={() => onJoinSession(session)} /></F0Box>
                  </F0Box>
                  {session.liveState === "waiting" ? <F0Alert variant="info" title="Session hasn’t started yet" description="Click ‘Join session’ and wait for the instructor to start the session." /> : null}
                  <DetailsItem title="Description" content={{ type: "item", text: course.description }} />
                </F0Box>
              ) : (
                <SessionNotesTab session={session} scope="participant" />
              )}
            </F0BoxWithClassName>
          </F0BoxWithClassName>
        </F0Box>
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}


export function TrainingLiveSessionsInstructorExperience() {
  return <TrainingLiveSessionsExperience role="instructor" />
}

function TrainingLiveSessionsExperience({ role }: { role: LiveSessionRole }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [toast, setToast] = useState<ToastId>(null)
  const [courses, setCourses] = useState<ExactCourse[]>(exactCourses)
  const [categories, setCategories] = useState<CategoryRow[]>(initialCategories)
  const [surveyTemplates, setSurveyTemplates] = useState<SurveyTemplateRow[]>(initialSurveyTemplates)
  const [requests, setRequests] = useState<RequestRow[]>(initialRequests)
  const [budgets, setBudgets] = useState<BudgetRow[]>(initialBudgets)
  const [pendingListAction, setPendingListAction] = useState<PendingListAction | null>(null)
  const [endedSessionIds, setEndedSessionIds] = useState<string[]>(["session-3"])

  const activeTab = getValidParam(searchParams.get("tab"), VALID_TABS, "courses") as MainTabId
  const activeSubTab = getValidParam(
    searchParams.get("sub"),
    VALID_SUB_TABS,
    "all"
  ) as CoursesSubTabId
  const view = getView(searchParams.get("view"))
  const selectedCourse = courses.find((course) => course.id === searchParams.get("course"))
  const isNewCourseWizardOpen = view === "new-course"
  const nextSession = role === "instructor" ? getNextSession(endedSessionIds) : null

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

  const goToNextSession = (sessionId: string) => {
    const course = courses.find((item) => item.id === "7") ?? courses[0]
    const groupName = course.groups[0] ?? "Training group"
    setToast(null)
    setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions", session: sessionId, stab: "details" })
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
    return <TrainingGroupDetail course={selectedCourse} groupName={groupName} role={role} endedSessionIds={endedSessionIds} onBack={() => setSearchParams({ view: "detail", course: selectedCourse.id, dtab: "training-groups" })} onToast={setToast} />
  }

  if ((view === "session-waiting-room" || view === "session-room") && selectedCourse) {
    const groupName = searchParams.get("group") ?? selectedCourse.groups[0] ?? "Training group"
    const session = groupSessions.find((item) => item.id === searchParams.get("session")) ?? groupSessions[0]
    const groupParams = { view: "group-detail", course: selectedCourse.id, group: groupName, gtab: "sessions", session: session.id, stab: "details" }
    const endSession = () => {
      setEndedSessionIds((currentIds) => currentIds.includes(session.id) ? currentIds : [...currentIds, session.id])
      // Leave the live room and land on the group's Sessions; the attendance
      // review modal opens there (endReview flag), not over the live room.
      setSearchParams({ view: "group-detail", course: selectedCourse.id, group: groupName, gtab: "sessions", endReview: session.id })
    }
    if (view === "session-waiting-room" && role === "participant") {
      return <SessionWaitingRoomScreen course={selectedCourse} groupName={groupName} session={session} onExit={() => setSearchParams(groupParams)} />
    }
    return <SessionRoomScreen course={selectedCourse} groupName={groupName} session={session} role={role} onExit={() => setSearchParams(groupParams)} onEndSession={role === "instructor" ? endSession : undefined} />
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
        tabs={subTabsWithNav.map((tab) => ({ ...tab, onClick: tab.onClick }))}
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
          <Tabs key={activeTab} tabs={mainTabsWithNav.map((tab) => ({ ...tab, onClick: tab.onClick }))} activeTabId={activeTab} />
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
              nextSession={nextSession}
              onOpenNextSession={goToNextSession}
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
    sessionName: "Fundamentos ISO 9001",
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
  nextSession,
  onOpenNextSession,
  onOpenOne,
  onExport,
  onImport,
  onImportCourses,
  onOpenFreeCourse,
  onCourseClick,
  onOpenAction,
}: {
  courses: ExactCourse[]
  nextSession: GroupSessionRow | null
  onOpenNextSession: (sessionId: string) => void
  onOpenOne: () => void
  onExport: () => void
  onImport: () => void
  onImportCourses: () => void
  onOpenFreeCourse: () => void
  onCourseClick: (courseId: string) => void
  onOpenAction: (dialog: Exclude<ListActionDialogId, null>, courseId?: string) => void
}) {
  const [aiActBannerVisible, setAiActBannerVisible] = useState(true)
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
      {aiActBannerVisible ? (
        <AiActBanner onClick={onOpenFreeCourse} onDismiss={() => setAiActBannerVisible(false)} />
      ) : null}
      {nextSession ? (
        <F0BoxWithClassName display="flex" flexDirection="column" gap="xs" style={{ maxWidth: 420 }}>
          <Widget header={{ title: "Next session" }}>
            <F0BoxWithClassName
              role="button"
              tabIndex={0}
              aria-label={`Open ${nextSession.name}`}
              width="full"
              minHeight={50}
              className={calendarEventActionClassName}
              onClick={() => onOpenNextSession(nextSession.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onOpenNextSession(nextSession.id)
              }}
            >
              <CalendarEvent
                title={nextSession.name}
                description={getSessionCalendarDescription(nextSession)}
                color={calendarEventColor}
                isPending={nextSession.liveState !== "live"}
                toDate={getSessionCalendarDate(nextSession)}
              />
            </F0BoxWithClassName>
          </Widget>
        </F0BoxWithClassName>
      ) : null}
      <OneDataCollection
        id={`${prototypeSlug}/courses/v1`}
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
      itemUrl: (course: ExactCourse) => `${routes.home}?view=detail&course=${course.id}`,
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

function AiActBanner({ onClick, onDismiss }: { onClick: () => void; onDismiss: () => void }) {
  return (
    <F0BoxWithClassName
      display="flex"
      flexDirection="row"
      gap="none"
      border="default"
      borderColor="secondary"
      borderRadius="xl"
      background="primary"
      overflow="hidden"
      position="relative"
      alignItems="stretch"
      style={{ boxShadow: "var(--shadow-sm, 0 1px 2px rgb(0 0 0 / 0.05))", maxHeight: 180 }}
    >
      <F0BoxWithClassName position="absolute" style={{ right: 16, top: 16 }}>
        <F0Button label="Dismiss" hideLabel icon={Cross} variant="ghost" size="sm" onClick={onDismiss} />
      </F0BoxWithClassName>
      <F0BoxWithClassName
        role="img"
        aria-label="EU AI Act Essentials course"
        shrink={false}
        style={{
          backgroundImage: `url(${aiActBannerImageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "hsl(var(--info-50) / 0.15)",
          minHeight: 180,
          width: 320,
        }}
      />
      <F0Box display="flex" flexDirection="column" gap="lg" padding="xl" grow>
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Heading
            content="EU AI Act: train your team before August 2nd or get fined"
            variant="heading"
            as="h3"
          />
          <F0Text
            content="Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work."
            variant="description"
          />
        </F0Box>
        <F0Box display="flex" justifyContent="start">
          <F0Button
            label="View free course"
            icon={ExternalLink}
            variant="outline"
            onClick={onClick}
          />
        </F0Box>
      </F0Box>
    </F0BoxWithClassName>
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
      id={`${prototypeSlug}/categories/v1`}
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
      itemUrl: (template) => `${routes.home}?view=survey-template-detail&template=${template.id}`,
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
      id={`${prototypeSlug}/survey-templates/v1`}
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
      id={`${prototypeSlug}/requests/v1`}
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
      id={`${prototypeSlug}/budgets/v1`}
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
            id={`${prototypeSlug}/budget-${budget.id}/groups/v1`}
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
        id={`${prototypeSlug}/budget-training-group-participants/v1`}
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
          <Tabs key={activeDetailTab} tabs={detailTabsWithNav.map((tab) => ({ ...tab, onClick: tab.onClick }))} activeTabId={activeDetailTab} />
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
            const detail = getCourseActionDetail(activeDialog, course)
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
  if (activeDetailTab === "content") return <CourseContentTab onOpenDialog={onOpenDialog} />
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
      itemUrl: (group) => `${routes.home}?view=group-detail&course=${course.id}&group=${encodeURIComponent(group.name)}`,
      itemActions: () => [
        { label: "Delete", icon: Delete, onClick: () => onOpenDialog("delete-training-group"), critical: true },
      ],
      totalItemSummary: (total: number) => `${total} training groups`,
    },
    [groups, course.id, onOpenDialog, onOpenClassWizard]
  )

  return (
    <OneDataCollection
      id={`${prototypeSlug}/course-groups/v1`}
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
      id={`${prototypeSlug}/course-participants/v1`}
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
        id={`${prototypeSlug}/course-materials/v1`}
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
        id={`${prototypeSlug}/course-documents/v1`}
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

function TrainingGroupDetail({ course, groupName, role, endedSessionIds, onToast }: { course: ExactCourse; groupName: string; role: LiveSessionRole; endedSessionIds: string[]; onBack: () => void; onToast: (toast: ToastId) => void }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeDialog, setActiveDialog] = useState<GroupActionDialogId>(null)
  const [classWizardOpen, setClassWizardOpen] = useState(false)
  const [sessionFormMode, setSessionFormMode] = useState<"new" | null>(null)
  const [editingSession, setEditingSession] = useState<GroupSessionRow | null>(null)
  const [prejoinSession, setPrejoinSession] = useState<GroupSessionRow | null>(null)
  const activeGroupTab = getValidParam(searchParams.get("gtab"), VALID_GROUP_TABS, "sessions") as GroupDetailTabId
  const activeSession = groupSessions.find((session) => session.id === searchParams.get("session")) ?? null
  const activeSessionEnded = activeSession ? endedSessionIds.includes(activeSession.id) : false
  const availableSessionTabs = new Set<string>(["details", "notes", "attendance", "transcript"])
  const activeSessionTab = getValidParam(searchParams.get("stab"), availableSessionTabs, "details") as SessionSidepanelTabId
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

  // Set by ending a session in the live room: show the attendance-review modal
  // here, on the screen after the session, then clear it on confirm.
  const showEndReview = Boolean(searchParams.get("endReview"))
  const closeEndReview = () =>
    setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions" })

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
          <Tabs key={activeGroupTab} tabs={groupTabs.map((tab) => ({ ...tab, onClick: tab.onClick }))} activeTabId={activeGroupTab} />
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
            role={role}
            isEnded={activeSessionEnded}
            activeTab={activeSessionTab}
            onClose={() => setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions" })}
            onTabChange={(tab) => setSearchParams({ view: "group-detail", course: course.id, group: groupName, gtab: "sessions", session: activeSession?.id ?? "session-1", stab: tab })}
            onJoinSession={() => setPrejoinSession(activeSession ?? groupSessions[0])}
          />
          {prejoinSession ? (
            <SessionPrejoinScreen
              groupName={groupName}
              session={prejoinSession}
              role={role}
              onBack={() => setPrejoinSession(null)}
              onJoin={() => setSearchParams({ view: prejoinSession.liveState === "waiting" && role === "participant" ? "session-waiting-room" : "session-room", course: course.id, group: groupName, session: prejoinSession.id })}
            />
          ) : null}
          <EditSessionSidepanel session={editingSession} onClose={() => setEditingSession(null)} onSave={() => setEditingSession(null)} />
          <SessionFormDialog
            mode={sessionFormMode}
            onClose={() => setSessionFormMode(null)}
            onSave={() => {
              setSessionFormMode(null)
              onToast("draft")
            }}
          />
          <EndSessionModal isOpen={showEndReview} onClose={closeEndReview} onConfirm={closeEndReview} />
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
        id={`${prototypeSlug}/group-sessions/v1`}
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
  role,
  isEnded,
  activeTab,
  onClose,
  onTabChange,
  onJoinSession,
}: {
  session: GroupSessionRow | null
  role: LiveSessionRole
  isEnded: boolean
  activeTab: SessionSidepanelTabId
  onClose: () => void
  onTabChange: (tab: SessionSidepanelTabId) => void
  onJoinSession: () => void
}) {
  if (!session) return null

  // Notes and transcript are Factorial-room features. External-link and on-site
  // sessions keep the tabs (so the capability stays discoverable) but show an
  // info panel explaining they're only available when hosted in Factorial.
  const inFactorial = (session.modality === "Virtual" || session.modality === "Hybrid") && session.host !== "external"

  const tabs: { id: SessionSidepanelTabId; label: string; disabled?: boolean; onClick: () => void }[] = [
    { id: "details", label: "Details", onClick: () => onTabChange("details") },
    // Notes are the instructor's private prep/review space; participants don't see them.
    ...(role === "instructor"
      ? [{ id: "notes" as const, label: "Notes", onClick: () => onTabChange("notes") }]
      : []),
    { id: "attendance", label: "Attendance", onClick: () => onTabChange("attendance") },
    { id: "transcript", label: "Transcript", disabled: inFactorial && !isEnded, onClick: () => (inFactorial && !isEnded ? undefined : onTabChange("transcript")) },
  ]

  const visibleTab =
    (activeTab === "transcript" && inFactorial && !isEnded) || (activeTab === "notes" && role !== "instructor")
      ? "details"
      : activeTab

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
            paddingLeft="xl"
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
          <F0BoxWithClassName overflowY="auto" grow>
            <F0BoxWithClassName paddingTop="lg">
              <Tabs
                key={visibleTab}
                tabs={tabs
                  .filter((tab) => tab.disabled !== true)
                  .map((tab) => ({ id: tab.id, label: tab.label, onClick: tab.onClick }))}
                activeTabId={visibleTab}
              />
            </F0BoxWithClassName>
            <F0BoxWithClassName paddingLeft="xl" paddingRight="xl" style={{ paddingTop: 32 }}>
              {visibleTab === "details" ? <SessionDetailsTab session={session} role={role} isEnded={isEnded} onJoinSession={onJoinSession} /> : null}
              {visibleTab === "notes" ? (inFactorial ? <SessionNotesTab session={session} scope={role} /> : <SessionFactorialOnlyNote feature="notes" />) : null}
              {visibleTab === "attendance" ? <SessionAttendanceTable isEnded={isEnded} /> : null}
              {visibleTab === "transcript" ? (inFactorial ? <SessionTranscriptTab session={session} /> : <SessionFactorialOnlyNote feature="transcript" />) : null}
            </F0BoxWithClassName>
          </F0BoxWithClassName>
        </F0Box>
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

const SESSION_INSTRUCTOR_OPTIONS = [
  { value: "adam-joseph", label: "Adam Joseph" },
  { value: "hellen-howard", label: "Hellen Howard" },
  { value: "calvino-collins", label: "Calvino Collins" },
]

const sessionFormSections = {
  schedule: { title: "Schedule" },
  format: { title: "Format" },
  notifications: { title: "Reminders" },
}

const sessionFormSchema = z.object({
  name: f0FormField.text({ label: "Name", section: "schedule", placeholder: "Session name" }),
  date: f0FormField.text({ label: "Date", section: "schedule", row: "schedule-row", placeholder: "dd/mm/yyyy" }),
  startsAt: f0FormField.text({ label: "Starts at", section: "schedule", row: "schedule-row", placeholder: "09:00" }),
  endsAt: f0FormField.text({ label: "Ends at", section: "schedule", row: "schedule-row", placeholder: "11:00" }),
  frequency: f0FormField.select({
    label: "Frequency",
    section: "schedule",
    options: [
      { value: "none", label: "Does not repeat" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
    ],
  }),
  modality: f0FormField(z.string(), {
    label: "Modality",
    section: "format",
    fieldType: "custom",
    customFieldName: "segmented",
    fieldConfig: { options: sessionModalityOptions, columns: "3", title: "Modality" },
  }),
  videoCall: f0FormField(z.string(), {
    label: "Where it's hosted",
    section: "format",
    fieldType: "custom",
    customFieldName: "segmented",
    fieldConfig: { options: videoCallOptions, columns: "2", title: "Where it's hosted" },
    renderIf: ({ values }: { values: Record<string, unknown> }) => values.modality === "virtual" || values.modality === "hybrid",
  }),
  calendar: f0FormField(z.string().optional(), {
    label: "Calendar",
    section: "format",
    fieldType: "custom",
    customFieldName: "calendarField",
  }),
  meetingLink: f0FormField.text({
    label: "Meeting link",
    section: "format",
    optional: true,
    helpText: "Paste the link participants will use to join.",
    renderIf: ({ values }: { values: Record<string, unknown> }) =>
      (values.modality === "virtual" || values.modality === "hybrid") && values.videoCall === "external",
  }),
  location: f0FormField.text({
    label: "Location",
    section: "format",
    optional: true,
    renderIf: ({ values }: { values: Record<string, unknown> }) => values.modality === "hybrid" || values.modality === "onsite",
  }),
  instructors: f0FormField.multiSelect({
    label: "Instructor(s)",
    section: "format",
    optional: true,
    placeholder: "Select who will deliver the course",
    options: SESSION_INSTRUCTOR_OPTIONS,
  }),
  minimumAttendance: f0FormField.percentage({
    label: "Minimum percentage to be marked as attended",
    section: "format",
    min: 1,
    max: 100,
    helpText: "Percentage of the session a participant must attend to count as attended.",
    renderIf: ({ values }: { values: Record<string, unknown> }) =>
      (values.modality === "virtual" || values.modality === "hybrid") && values.videoCall === "factorial",
  }),
  attendanceUpsell: f0FormField(z.string().optional(), {
    label: "Attendance",
    section: "format",
    fieldType: "custom",
    customFieldName: "attendanceUpsell",
    renderIf: ({ values }: { values: Record<string, unknown> }) =>
      !((values.modality === "virtual" || values.modality === "hybrid") && values.videoCall === "factorial"),
  }),
  notifications: f0FormField.boolean({
    label: "Send reminders",
    section: "notifications",
    optional: true,
  }),
  reminderConfig: f0FormField(z.string().optional(), {
    label: "Reminder",
    section: "notifications",
    fieldType: "custom",
    customFieldName: "reminderCard",
    renderIf: { fieldId: "notifications", equalsTo: true },
  }),
})

const sessionFormDefaultValues = {
  name: "Fundamentos ISO 9001",
  date: "",
  startsAt: "09:00",
  endsAt: "11:00",
  frequency: "none",
  modality: "virtual",
  videoCall: "factorial",
  meetingLink: "",
  location: "",
  instructors: [],
  minimumAttendance: 75,
  attendanceUpsell: "",
  calendar: "",
  notifications: false,
  reminderConfig: "",
}

function SessionFormBody({ onClose, onSave }: { onClose: () => void; onSave: () => void }) {
  const formDefinition = useF0FormDefinition({
    name: "create-session",
    schema: sessionFormSchema,
    sections: sessionFormSections,
    defaultValues: sessionFormDefaultValues,
    onSubmit: async () => {
      onSave()
      return { success: true }
    },
    submitConfig: { hideSubmitButton: true },
  })
  const { formRef, submit } = useF0Form()
  const renderCustomField = useCallback(
    (props: { customFieldName?: string; value: unknown; onChange: (value: string) => void; config?: unknown }) => {
      if (props.customFieldName === "segmented") {
        const cfg = props.config as {
          options: Array<{ value: string; label: string; description: string; icon: IconType }>
          columns: "2" | "3"
          title: string
        }
        return (
          <SessionToggleField label={cfg.title}>
            <SessionOptionGroup
              options={cfg.options}
              value={(props.value as string) ?? ""}
              onChange={(value) => props.onChange(value)}
              columns={cfg.columns}
            />
          </SessionToggleField>
        )
      }
      if (props.customFieldName === "reminderCard") return <SessionReminderCard />
      if (props.customFieldName === "calendarField") return <SessionCalendarField />
      if (props.customFieldName === "attendanceUpsell")
        return (
          <F0Alert
            variant="info"
            title="Attendance won't be tracked automatically"
            description="Automatic attendance only works for sessions hosted in Factorial. For this format you'll need to mark attendance manually."
          />
        )
      return null
    },
    []
  )
  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <div className="session-form-compact">
        <style>{".session-form-compact section > .py-5 { padding-top: 10px; padding-bottom: 10px; }"}</style>
        <F0Form formDefinition={formDefinition} formRef={formRef} renderCustomField={renderCustomField} />
      </div>
      <F0Box display="flex" justifyContent="end" gap="md">
        <F0Button label="Cancel" variant="outline" onClick={onClose} />
        <F0Button label="Save" onClick={() => submit()} />
      </F0Box>
    </F0Box>
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
  if (!mode) return null

  return (
    <F0BoxWithClassName
      position="fixed"
      className="fixed inset-0 z-50 flex items-start justify-center bg-f1-background-overlay overflow-y-auto"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <F0BoxWithClassName
        role="dialog"
        aria-label={mode === "new" ? "Create scheduled session" : "Edit scheduled session"}
        background="primary"
        borderRadius="lg"
        className="relative rounded-lg bg-f1-background shadow-2xl"
        style={{ width: 664, backgroundColor: "var(--f1-background, #fff)" }}
      >
        <F0BoxWithClassName style={{ margin: 32, width: 600 }}>
        <F0Box display="flex" flexDirection="column" gap="2xl">
          <F0Box display="flex" alignItems="center" justifyContent="between" gap="md">
            <F0Heading content={mode === "new" ? "Create scheduled session" : "Edit scheduled session"} variant="heading-large" as="h2" />
            <F0BoxWithClassName
              role="button"
              aria-label="Close"
              tabIndex={0}
              onClick={onClose}
              className="flex cursor-pointer items-center justify-center text-f1-foreground-secondary"
              style={{ width: 24, height: 24, flexShrink: 0 }}
            >
              <F0Icon icon={Cross} size="md" />
            </F0BoxWithClassName>
          </F0Box>
          <SessionFormBody onClose={onClose} onSave={onSave} />
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

function SessionDetailsTab({ session, role, isEnded, onJoinSession }: { session: GroupSessionRow; role: LiveSessionRole; isEnded: boolean; onJoinSession: () => void }) {
  // Instructors can enter the room early (up to 5 min before) to set up; the
  // class clock and attendance only start at the scheduled time. So entry is no
  // longer blocked while "waiting" — only an ended session can't be started.
  const isWaitingInstructor = role === "instructor" && session.liveState === "waiting"
  // Only sessions that run online in Factorial have a live room (early entry,
  // camera/mic, auto-attendance). External-link and on-site sessions don't.
  const inFactorial = (session.modality === "Virtual" || session.modality === "Hybrid") && session.host !== "external"

  return (
    <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 32 }}>
      <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 30 }}>
        <F0Box display="grid" columns="2" gap="5xl">
          <DetailsItem title="Type" content={{ type: "raw-tag", text: session.type === "self-paced" ? "Self-paced" : "Scheduled" }} />
          <DetailsItem title="Modality" content={{ type: "item", text: session.modality }} />
        </F0Box>
        <F0Box display="grid" columns="2" gap="5xl">
          <DetailsItem title="Date" content={{ type: "item", text: session.date.split(", ")[0] ?? session.date }} />
          <DetailsItem title="Hour" content={{ type: "item", text: session.date.split(", ")[1] ?? session.scheduleLabel }} />
        </F0Box>
        <F0Box display="grid" columns="2" gap="5xl">
          <DetailsItem title="Location" content={{ type: "item", text: session.modality === "On-site" || session.modality === "Hybrid" ? "Aula 2 · Sede Barcelona" : "—" }} />
          {inFactorial ? (
            <DetailsItem title="Minimum attendance" content={{ type: "item", text: COMPLETION_THRESHOLD_PCT <= 1 ? "1% (just joining)" : `${COMPLETION_THRESHOLD_PCT}% (${thresholdMinutes(COMPLETION_THRESHOLD_PCT, SESSION_DURATION_MIN)} min)` }} />
          ) : (
            <DetailsItem title="Attendance" content={{ type: "item", text: "Marked manually" }} />
          )}
        </F0Box>
        <F0Box display="grid" columns="2" gap="5xl">
          <SessionJoinField session={session} role={role} disabled={isEnded} isEnded={isEnded} onJoinSession={onJoinSession} />
        </F0Box>
        {isEnded ? (
          <F0Alert variant="positive" title="Session ended" description={inFactorial ? "Attendance and transcript are now available for review." : "Mark attendance for this session in the Attendance tab."} />
        ) : null}
        {!isEnded && isWaitingInstructor && inFactorial ? (
          <F0Alert variant="info" title="You can enter to set up 5 minutes before" description="Open the room early to check your camera, mic and notes. The class clock and attendance only start at the scheduled time." />
        ) : null}
      </F0BoxWithClassName>
      <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 24 }}>
        <SessionPlainInfo title="Calendar invite" value="No invites sent" icon={Envelope} />
        <SessionPlainInfo title="Reminders" value="No reminders set" icon={Bell} />
      </F0BoxWithClassName>
    </F0BoxWithClassName>
  )
}

function SessionJoinField({ session, role, disabled, isEnded, onJoinSession }: { session: GroupSessionRow; role: LiveSessionRole; disabled: boolean; isEnded: boolean; onJoinSession: () => void }) {
  const isInstructor = role === "instructor"
  const isOnline = session.modality === "Virtual" || session.modality === "Hybrid"
  const isExternal = isOnline && session.host === "external"
  const inFactorial = isOnline && session.host !== "external"

  // On-site: physical session, nothing to open or join.
  if (!inFactorial && !isExternal) return null

  // External link: it's the instructor's own link, so we just expose it as a
  // plain hyperlink — there's no Factorial room to start or join.
  if (isExternal) {
    return (
      <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 14 }}>
        <F0Text content="Link" variant="body" />
        <F0BoxWithClassName
          role="link"
          aria-label="Open link"
          tabIndex={0}
          display="flex"
          alignItems="center"
          gap="xs"
          className="text-f1-foreground-info"
          style={{ cursor: "pointer", width: "fit-content" }}
        >
          <span className="text-f1-foreground-info underline">Open link</span>
          <F0Icon icon={ExternalLink} size="sm" color="info" />
        </F0BoxWithClassName>
      </F0BoxWithClassName>
    )
  }

  return (
    <F0BoxWithClassName display="flex" flexDirection="column" style={{ gap: 14 }}>
      <F0Text content="Link" variant="body" />
      <F0Box display="flex" justifyContent="start">
        <F0Button label={isEnded ? "Session ended" : isInstructor ? "Start session" : "Join session"} icon={VideoRecorder} size="md" disabled={disabled} onClick={onJoinSession} />
      </F0Box>
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

function SessionPrejoinScreen({
  groupName,
  session,
  role,
  onBack,
  onJoin,
}: {
  groupName: string
  session: GroupSessionRow
  role: LiveSessionRole
  onBack: () => void
  onJoin: () => void
}) {
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true)
  const [cameraEnabled, setCameraEnabled] = useState(true)
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <F0Dialog
      isOpen
      onClose={onBack}
      title={`${session.name} · ${groupName}`}
      width="xl"
      primaryAction={{ label: role === "instructor" ? "Start session" : "Join", onClick: onJoin }}
    >
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0BoxWithClassName display="flex" justifyContent="center" alignItems="center" background="secondary" borderRadius="xl" padding="lg" style={{ height: 432 }}>
          <F0BoxWithClassName style={{ width: "min(100%, 640px)", height: 360 }}>
            <CallParticipantTile displayName="Adam Joseph" initials="AJ" isMuted={!microphoneEnabled} isCameraOff={!cameraEnabled} />
          </F0BoxWithClassName>
        </F0BoxWithClassName>
        <F0Box display="flex" justifyContent="center" gap="md">
          <F0ButtonToggle label={["Turn microphone on", "Turn microphone off"]} icon={[MicrophoneNegative, Microphone]} selected={microphoneEnabled} onSelectedChange={setMicrophoneEnabled} />
          <F0ButtonToggle label={["Turn camera on", "Turn camera off"]} icon={[VideoRecorderNegative, VideoRecorder]} selected={cameraEnabled} onSelectedChange={setCameraEnabled} />
          <F0Button label={settingsOpen ? "Hide device settings" : "Device settings"} hideLabel icon={Settings} variant="outline" onClick={() => setSettingsOpen((current) => !current)} />
        </F0Box>
        <F0Box display="flex" justifyContent="between" alignItems="center" paddingTop="lg" borderTop="default" borderColor="secondary">
          <F0Text content="By joining this meeting, you acknowledge our Privacy Policy." variant="description" />
        </F0Box>
      </F0Box>
      <PrejoinSettingsDialog isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </F0Dialog>
  )
}

function PrejoinSettingsDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [audioInput, setAudioInput] = useState("macbook-microphone")
  const [audioOutput, setAudioOutput] = useState("macbook-speakers")
  const [videoInput, setVideoInput] = useState("facetime-camera")
  const [background, setBackground] = useState("blur")
  const [sounds, setSounds] = useState("true")

  return (
    <F0Dialog isOpen={isOpen} onClose={onClose} title="Settings" width="sm">
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Text content="General" variant="label" />
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Select<string>
            label="Audio input"
            value={audioInput}
            onChange={(value: string) => setAudioInput(value)}
            options={[
              { value: "macbook-microphone", label: "MacBook Pro Microphone" },
              { value: "studio-display-microphone", label: "Studio Display Microphone" },
            ]}
            icon={Microphone}
          />
          <F0Select<string>
            label="Audio output"
            value={audioOutput}
            onChange={(value: string) => setAudioOutput(value)}
            options={[
              { value: "macbook-speakers", label: "MacBook Pro Speakers" },
              { value: "airpods", label: "AirPods Pro" },
            ]}
            icon={Settings}
          />
          <F0Select<string>
            label="Video input"
            value={videoInput}
            onChange={(value: string) => setVideoInput(value)}
            options={[
              { value: "facetime-camera", label: "FaceTime HD Camera" },
              { value: "studio-display-camera", label: "Studio Display Camera" },
            ]}
            icon={VideoRecorder}
          />
        </F0Box>
        <F0Text content="Effects" variant="label" />
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Select<string>
            label="Interactive sounds"
            value={sounds}
            onChange={(value: string) => setSounds(value)}
            options={[
              { value: "true", label: "Enabled" },
              { value: "false", label: "Disabled" },
            ]}
            icon={Bell}
          />
          <F0Select<string>
            label="Background"
            value={background}
            onChange={(value: string) => setBackground(value)}
            options={[
              { value: "disabled", label: "No background effect" },
              { value: "blur", label: "Blur background" },
              { value: "soft-blur", label: "Soft blur" },
            ]}
            icon={VideoRecorder}
          />
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}

function RoomSettingsDialog(props: { isOpen: boolean; onClose: () => void }) {
  return <PrejoinSettingsDialog {...props} />
}

function LiveSessionChatDrawer() {
  return (
    <F0BoxWithClassName background="primary" border="default" borderColor="secondary" borderRadius="xl" display="flex" flexDirection="column" height="full" style={{ overflow: "hidden" }}>
      <F0Box padding="lg">
        <F0Heading content="Chat" variant="heading" as="h3" />
      </F0Box>
      <F0Box display="flex" alignItems="center" justifyContent="center" grow padding="lg">
        <F0Text content="No messages yet" variant="description" />
      </F0Box>
      <F0Box display="flex" alignItems="center" gap="sm" padding="md" borderTop="default" borderColor="secondary">
        <F0BoxWithClassName grow background="secondary" borderRadius="lg" padding="md" style={{ minWidth: 0 }}>
          <F0Text content="Write a message" variant="description" />
        </F0BoxWithClassName>
        <F0Button label="Send" variant="outline" onClick={() => undefined} />
      </F0Box>
    </F0BoxWithClassName>
  )
}

// Per-session notes, PRIVATE to each user: the instructor and each participant
// keep their own notes for the same session, so the store is keyed by
// `${scope}:${session.id}` (scope = the viewer's role). Shared across the three
// moments: prepared before (Notes tab), edited during (notes panel in the live
// room), reviewed after. Prototype-only: no backend, lives in memory.
type NotesEditorContent = NonNullable<ComponentProps<typeof NotesTextEditor>["initialEditorState"]>["content"]
type SessionNotesState = { title: string; content: NotesEditorContent }
const sessionNotesStore: Record<string, SessionNotesState> = {}

function getSessionNotes(key: string, fallbackTitle: string): SessionNotesState {
  if (!sessionNotesStore[key]) {
    sessionNotesStore[key] = { title: fallbackTitle, content: "" }
  }
  return sessionNotesStore[key]
}
function setSessionNotesContent(key: string, content: NotesEditorContent) {
  const current = sessionNotesStore[key] ?? { title: "", content: "" }
  sessionNotesStore[key] = { ...current, content }
}
function setSessionNotesTitle(key: string, title: string) {
  const current = sessionNotesStore[key] ?? { title: "", content: "" }
  sessionNotesStore[key] = { ...current, title }
}

function SessionNotesEditor({ session, scope = "instructor" }: { session: GroupSessionRow; scope?: string }) {
  const key = `${scope}:${session.id}`
  const notes = getSessionNotes(key, session.name)
  return (
    <NotesTextEditor
      titlePlaceholder="Training session notes"
      placeholder="Take notes with rich formatting, including bold text, lists, and links."
      initialEditorState={{ title: notes.title, content: notes.content }}
      metadata={[{ label: "Notes", value: { type: "status", label: "Only visible to you", variant: "neutral" } }]}
      onTitleChange={(title) => setSessionNotesTitle(key, title)}
      onChange={({ json }) => setSessionNotesContent(key, json ?? "")}
    />
  )
}

function SessionFactorialOnlyNote({ feature }: { feature: "notes" | "transcript" }) {
  const title = feature === "notes" ? "Notes are only available in Factorial" : "Transcript is only available in Factorial"
  return (
    <F0Alert
      variant="info"
      title={title}
      description="This session runs outside Factorial, so there's no live room to capture it. Host the session in Factorial to use this."
    />
  )
}

function SessionNotesTab({ session, scope }: { session: GroupSessionRow; scope?: string }) {
  return (
    <F0BoxWithClassName display="flex" flexDirection="column" padding="md" style={{ cursor: "text", minHeight: 420 }}>
      <SessionNotesEditor session={session} scope={scope} />
    </F0BoxWithClassName>
  )
}

function LiveSessionNotesDrawer({ session, scope }: { session: GroupSessionRow; scope?: string }) {
  return (
    <F0BoxWithClassName display="flex" flexDirection="column" height="full" padding="lg" style={{ cursor: "text", minHeight: 0 }}>
      <SessionNotesEditor session={session} scope={scope} />
    </F0BoxWithClassName>
  )
}

function EndSessionModal({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void }) {
  // "quita la x": F0Dialog always renders a close (X) and exposes no prop to
  // hide it, so we hide it for this dialog only. The action is "Confirm attendance".
  useEffect(() => {
    if (!isOpen) return
    let attempts = 0
    const tick = () => {
      let hidden = false
      document.querySelectorAll('[role="dialog"]').forEach((dialog) => {
        if (!/Review attendance/.test(dialog.textContent ?? "")) return
        dialog
          .querySelectorAll<HTMLElement>('button[aria-label="Close"]')
          .forEach((button) => {
            button.style.opacity = "0"
            button.style.pointerEvents = "none"
            hidden = true
          })
      })
      attempts += 1
      if (hidden || attempts > 20) window.clearInterval(id)
    }
    const id = window.setInterval(tick, 50)
    tick()
    return () => window.clearInterval(id)
  }, [isOpen])

  const rows = sessionAttendance.map((row) => ({ ...row, attendance: attendanceFromThreshold(row.completedHours) }))
  const attendedCount = rows.filter((row) => row.attendance === "Attended").length

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Session ended. Review attendance"
      description={`Attendance is automatically calculated from time spent in the session; anyone below ${COMPLETION_THRESHOLD_PCT}% is marked as “Not attended”. You can also edit this later in the Attendance tab.`}
      width="xl"
      primaryAction={{ label: "Confirm attendance", onClick: onConfirm }}
    >
      <F0Box display="flex" flexDirection="column" gap="sm">
        <F0Text variant="description" content={`${attendedCount} of ${rows.length} attended`} />
        <SessionAttendanceTable isEnded variant="modal" />
      </F0Box>
    </F0Dialog>
  )
}

function FullscreenCallSurface({ children }: { children: ReactNode }) {
  return (
    <F0BoxWithClassName
      display="flex"
      flexDirection="column"
      gap="md"
      background="primary"
      padding="md"
      style={{ position: "fixed", inset: 0, zIndex: 50, width: "100vw", height: "100vh" }}
    >
      {children}
    </F0BoxWithClassName>
  )
}

type GreenRoomClock = {
  classStarted: boolean
  secondsToStart: number
  liveSeconds: number
}

// Drives the call header clock. A live session counts up from its elapsed time.
// A waiting session entered early (instructor green room) counts DOWN to the
// scheduled start (hour 0), then flips to counting up — which is when the class
// and attendance start. Demo: the scheduled start is anchored shortly ahead.
function useGreenRoomClock(session: GroupSessionRow): GreenRoomClock {
  const isLive = session.liveState === "live"
  const isWaiting = session.liveState === "waiting"
  const [mountedAt] = useState(() => Date.now())
  const [scheduledStartAt] = useState(() => Date.now() + DEMO_COUNTDOWN_SECONDS * 1000)
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (!isLive && !isWaiting) return undefined
    const interval = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(interval)
  }, [isLive, isWaiting])

  if (isLive) {
    return {
      classStarted: true,
      secondsToStart: 0,
      liveSeconds: (session.liveDurationSeconds ?? 0) + Math.floor((now - mountedAt) / 1000),
    }
  }
  if (isWaiting) {
    const secondsToStart = Math.max(0, Math.round((scheduledStartAt - now) / 1000))
    const classStarted = secondsToStart === 0
    return {
      classStarted,
      secondsToStart,
      liveSeconds: classStarted ? Math.max(0, Math.floor((now - scheduledStartAt) / 1000)) : 0,
    }
  }
  return { classStarted: false, secondsToStart: 0, liveSeconds: 0 }
}

function CallTopBar({
  course,
  groupName,
  session,
  clock,
}: {
  course: ExactCourse
  groupName: string
  session: GroupSessionRow
  clock: GreenRoomClock
}) {
  const isWaiting = session.liveState === "waiting"
  const showLive = session.liveState === "live" || clock.classStarted

  return (
    <F0Box display="flex" justifyContent="between" alignItems="center" gap="lg" background="primary" borderRadius="xl" paddingX="sm" paddingY="xs">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text content={`${course.name} · ${groupName}`} variant="description" />
        <F0Heading content={session.name} variant="heading" as="h1" />
      </F0Box>
      <F0Box display="flex" flexDirection="column" alignItems="end" gap="xs">
        {showLive ? (
          <F0Box display="flex" alignItems="center" gap="md">
            <F0BoxWithClassName display="flex" alignItems="center" gap="sm" background="critical" borderRadius="full" paddingX="md" paddingY="sm">
              <F0BoxWithClassName background="critical-bold" borderRadius="full" style={{ width: 9, height: 9 }} />
              <F0BoxWithClassName className="text-f1-foreground-critical" display="flex">
                <F0Text content="Live" variant="body" />
              </F0BoxWithClassName>
            </F0BoxWithClassName>
            <F0BoxWithClassName height="8" width="0.5" background="tertiary" />
            <F0Text content={formatCallDuration(clock.liveSeconds)} variant="body" />
          </F0Box>
        ) : isWaiting ? (
          <F0Box display="flex" alignItems="center" gap="md">
            <F0Icon icon={CalendarArrowRight} size="md" color="warning" />
            <F0Text content="Session starts in" variant="body" />
            <F0BoxWithClassName height="8" width="0.5" background="tertiary" />
            <F0Text content={formatCallDuration(clock.secondsToStart)} variant="body" />
          </F0Box>
        ) : (
          <F0Box display="flex" alignItems="center" gap="md">
            <F0Icon icon={CalendarArrowRight} size="md" color="warning" />
            <F0Text content={session.statusLabel} variant="body" />
            <F0BoxWithClassName height="8" width="0.5" background="tertiary" />
            <F0Text content={session.scheduleLabel} variant="body" />
          </F0Box>
        )}
      </F0Box>
    </F0Box>
  )
}

function formatCallDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

function SessionWaitingRoomScreen({
  course,
  groupName,
  session,
  onExit,
}: {
  course: ExactCourse
  groupName: string
  session: GroupSessionRow
  onExit: () => void
}) {
  const clock = useGreenRoomClock(session)
  return (
    <FullscreenCallSurface>
      <CallTopBar course={course} groupName={groupName} session={session} clock={clock} />
      <F0BoxWithClassName display="flex" flexDirection="column" gap="lg" grow style={{ minHeight: 0 }}>
        <F0Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="lg" grow>
          <F0BoxWithClassName style={{ width: "min(100%, 560px)", height: 315, transform: "translateY(-20px)" }}>
            <CallParticipantTile displayName="Adam Joseph" initials="AJ" isMuted />
          </F0BoxWithClassName>
          <F0Box display="flex" flexDirection="column" alignItems="center" gap="md">
            <F0Box display="flex" flexDirection="column" alignItems="center" gap="xs">
              <F0Heading content="Session hasn’t started yet" variant="heading" as="h1" />
              <F0Text content="You’ll join automatically when the instructor starts the session or admits you." variant="description" />
            </F0Box>
            <F0Button label="Exit" variant="outline" onClick={onExit} />
          </F0Box>
        </F0Box>
      </F0BoxWithClassName>
    </FullscreenCallSurface>
  )
}

function SessionRoomScreen({
  course,
  groupName,
  session,
  role,
  onExit,
  onEndSession,
}: {
  course: ExactCourse
  groupName: string
  session: GroupSessionRow
  role: LiveSessionRole
  onExit: () => void
  onEndSession?: () => void
}) {
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true)
  const [cameraEnabled, setCameraEnabled] = useState(true)
  const [screenShareEnabled, setScreenShareEnabled] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [activePanel, setActivePanel] = useState<LiveSessionPanelId>(null)
  const isInstructor = role === "instructor"
  const liveParticipants = groupParticipants.slice(0, 10)
  const grid = getCallGrid(liveParticipants.length)
  const activePanelWidth = activePanel === "notes" ? LIVE_SESSION_NOTES_PANEL_WIDTH : LIVE_SESSION_COMPACT_PANEL_WIDTH
  const activePanelStyle: CSSProperties = {
    width: activePanelWidth,
    minWidth: activePanelWidth,
    height: "100%",
    alignSelf: "flex-start",
    overflow: "hidden",
  }
  const togglePanel = (panel: Exclude<LiveSessionPanelId, null>) => setActivePanel((current) => current === panel ? null : panel)
  const clock = useGreenRoomClock(session)
  // Before the class starts (green-room countdown) there is nothing to end yet —
  // the instructor can only Exit the prep room. "End session" appears once live.
  const canEndSession = isInstructor && clock.classStarted

  return (
    <FullscreenCallSurface>
      <CallTopBar course={course} groupName={groupName} session={session} clock={clock} />
      <F0BoxWithClassName display="flex" gap="lg" grow style={{ minHeight: 0, paddingBottom: 88, position: "relative" }}>
        <F0BoxWithClassName display="flex" flexDirection="column" gap="lg" grow style={{ minWidth: 0 }}>
          <F0BoxWithClassName display="grid" gap="md" grow width="full" style={{ minHeight: 0, gridTemplateColumns: `repeat(${grid.columns}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${grid.rows}, minmax(0, 1fr))` }}>
            {liveParticipants.map((participant, index) => (
              <LiveParticipantTile key={participant.id} participant={participant} isSpeaking={index === 0} isMuted={index !== 0 && index % 3 !== 0} />
            ))}
          </F0BoxWithClassName>
        </F0BoxWithClassName>
        {activePanel ? (
          activePanel === "chat" ? (
            <F0BoxWithClassName style={activePanelStyle}>
              <LiveSessionChatDrawer />
            </F0BoxWithClassName>
          ) : (
            <F0BoxWithClassName background="primary" border="default" borderColor="secondary" borderRadius="xl" style={activePanelStyle}>
              <LiveSessionNotesDrawer session={session} scope={role} />
            </F0BoxWithClassName>
          )
        ) : null}
        <F0BoxWithClassName display="flex" justifyContent="center" alignItems="center" gap="md" background="primary" borderRadius="xl" padding="lg" style={{ position: "absolute", left: "50%", bottom: 16, transform: "translateX(-50%)", zIndex: 51 }}>
          <F0ButtonToggle label={["Turn microphone on", "Turn microphone off"]} icon={[MicrophoneNegative, Microphone]} selected={microphoneEnabled} onSelectedChange={setMicrophoneEnabled} />
          <F0ButtonToggle label={["Turn camera on", "Turn camera off"]} icon={[VideoRecorderNegative, VideoRecorder]} selected={cameraEnabled} onSelectedChange={setCameraEnabled} />
          <F0Box height="4" width="0.5" background="secondary" />
          <F0ButtonToggle label={["Open chat", "Close chat"]} icon={[Comment, Comment]} selected={activePanel === "chat"} onSelectedChange={() => togglePanel("chat")} />
          {isInstructor ? (
            <F0ButtonToggle label={["Share screen", "Stop sharing"]} icon={[Desktop, Desktop]} selected={screenShareEnabled} onSelectedChange={setScreenShareEnabled} />
          ) : null}
          {/* Both instructor and participants can take their own private notes. */}
          <F0ButtonToggle label={["Open notes", "Close notes"]} icon={[BookOpen, BookOpen]} selected={activePanel === "notes"} onSelectedChange={() => togglePanel("notes")} />
          <F0Button label="Settings" hideLabel icon={Settings} variant="outline" onClick={() => setSettingsOpen(true)} />
          {/* One CTA only: "Exit". For the instructor once the class is live it
              doubles as ending the session (opens the attendance review); before
              that, and for participants, it just leaves the room. */}
          {isInstructor && canEndSession ? (
            <F0Button label="Exit" variant="critical" onClick={onEndSession} />
          ) : (
            <F0Button label="Exit" variant="critical" onClick={onExit} />
          )}
        </F0BoxWithClassName>
      </F0BoxWithClassName>
      <RoomSettingsDialog isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </FullscreenCallSurface>
  )
}

function LiveParticipantTile({ participant, isSpeaking, isMuted }: { participant: GroupParticipantRow; isSpeaking: boolean; isMuted: boolean }) {
  const displayName = isSpeaking ? "Adam Joseph" : participant.name

  return <CallParticipantTile displayName={displayName} initials={participantInitials(displayName)} isMuted={isMuted} />
}

function CallParticipantTile({ displayName, initials, isMuted = false, isCameraOff = false }: { displayName: string; initials: string; isMuted?: boolean; isCameraOff?: boolean }) {
  return (
    <F0BoxWithClassName background="inverse" borderRadius="xl" padding="xl" display="flex" flexDirection="column" justifyContent="between" gap="xl" height="full" style={{ minHeight: 0 }}>
      <F0Box display="flex" justifyContent="end" alignItems="center" gap="md" height="8">
        {isMuted ? (
          <F0BoxWithClassName display="flex" alignItems="center" justifyContent="center" background="primary" border="default" borderColor="secondary" borderRadius="full" padding="sm">
            <F0Icon icon={MicrophoneNegative} size="sm" />
          </F0BoxWithClassName>
        ) : null}
      </F0Box>
      <F0Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" grow>
        <F0BoxWithClassName
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="primary"
          border="default"
          borderColor="secondary"
          borderRadius="full"
          style={{ width: 72, height: 72 }}
        >
          {isCameraOff ? <F0Icon icon={VideoRecorderNegative} size="lg" /> : <F0Text content={initials} variant="label" />}
        </F0BoxWithClassName>
      </F0Box>
      <F0Text content={displayName} variant="inverse" />
    </F0BoxWithClassName>
  )
}

function getCallGrid(count: number) {
  if (count <= 1) return { columns: 1, rows: 1 }
  if (count <= 2) return { columns: 2, rows: 1 }
  if (count <= 4) return { columns: 2, rows: 2 }
  if (count <= 6) return { columns: 3, rows: 2 }
  if (count <= 9) return { columns: 3, rows: 3 }
  if (count <= 10) return { columns: 5, rows: 2 }
  if (count <= 12) return { columns: 4, rows: 3 }
  return { columns: Math.ceil(Math.sqrt(count)), rows: Math.ceil(count / Math.ceil(Math.sqrt(count))) }
}

function participantInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

function SessionReminderCard() {
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
      <F0Box display="flex" justifyContent="between" alignItems="center">
        <F0Text content="Add reminder" variant="body" />
        <F0Button label="Add reminder" hideLabel icon={Add} variant="outline" onClick={() => undefined} />
      </F0Box>
      <F0Text content="Schedule a reminder to be sent to all assigned employees before the session." variant="body" />
    </F0Box>
  )
}

// Two-step calendar feature. Step 1: connect the calendar (can't be enabled
// until it is). Step 2 (once connected): a toggle to activate it for this
// session — blocks the slot in agendas and emails participants.
function SessionCalendarField() {
  const [connected, setConnected] = useState(false)
  const [active, setActive] = useState(true)

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
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Text content="Connect calendar" variant="body" />
        <F0Text content="Connect it to block the slot in everyone's agenda and email participants about the session." variant="description" />
      </F0Box>
      {!connected ? (
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
          <F0Button label="Connect" variant="outline" onClick={() => setConnected(true)} />
        </F0Box>
      ) : (
        <F0Box display="flex" alignItems="center" justifyContent="between" gap="md">
          <F0Box display="flex" alignItems="center" gap="sm">
            <F0Icon icon={CheckCircle} size="md" color="positive" />
            <F0Text content="Calendar connected" variant="body" />
          </F0Box>
          <Switch title="Add this session to calendars" hideLabel checked={active} onCheckedChange={setActive} />
        </F0Box>
      )}
    </F0Box>
  )
}

function SessionAttendanceTable({ isEnded, variant = "tab" }: { isEnded: boolean; variant?: "tab" | "modal" }) {
  const [rows, setRows] = useState<SessionAttendanceRow[]>(() =>
    isEnded
      ? // Default each status from the session's minimum-attendance threshold
        // (present >= required → Attended). The instructor can override below.
        sessionAttendance.map((row) => ({ ...row, attendance: attendanceFromThreshold(row.completedHours) }))
      : sessionAttendance.map((row) => ({ ...row, attendance: "Pending" as const, completedHours: `0m/${row.completedHours.split("/")[1] ?? "60m"}` }))
  )
  const isModal = variant === "modal"
  const attendanceFilterOptions = isEnded
    ? [
        { value: "Attended", label: "Attended" },
        { value: "Not attended", label: "Not attended" },
      ]
    : [{ value: "Pending", label: "Pending" }]
  const source = useDataCollectionSource<SessionAttendanceRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        attendance: {
          type: "in",
          label: "Attendance",
          options: {
            options: attendanceFilterOptions,
          },
        },
      },
      // The end-session review modal opens pre-filtered to "Not attended" so the
      // instructor lands straight on who needs reviewing. They can clear it.
      defaultFilters: isModal && isEnded ? { attendance: ["Not attended"] } : undefined,
      dataAdapter: {
        paginationType: "pages",
        perPage: 10,
        fetchData: ({ filters, search, pagination }: FetchOptions) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows
            .filter((row) => matchArray(filters?.attendance, row.attendance))
            .filter((row) => term === "" || row.name.toLowerCase().includes(term))
          return paginateRecords(filtered, pagination, 10)
        },
      },
      // Both the Attendance tab and the end-session review modal use the same
      // table: status pills + multi-select + bulk "Mark as attended / not
      // attended", so the instructor edits the same way in both places.
      // Attendance tab (ended): download actions as secondary (the pattern for
      // export here) — the report shown as a visible button, the connectivity
      // log in the actions menu.
      secondaryActions:
        !isModal && isEnded
          ? {
              expanded: 1,
              actions: () => [
                { label: "Attendance report", icon: Download, onClick: () => undefined },
                { label: "Download connectivity log", icon: File, onClick: () => undefined },
              ],
            }
          : undefined,
      selectable: (row: SessionAttendanceRow) => row.id,
      bulkActions: () => ({
        primary: [
          { id: "attended", label: "Mark as attended", icon: CheckCircle },
          { id: "not-attended", label: "Mark as not attended", icon: Cross, critical: true },
        ],
      }),
      totalItemSummary: (total: number) => `${total} participants`,
    },
    [isEnded, rows]
  )

  return (
    <F0BoxWithClassName className={isModal ? "w-full px-6 pb-2" : "ml-4 mt-4 w-[574px]"}>
      <OneDataCollection
        id={`${prototypeSlug}/session-attendance/${variant}/v1`}
        storage={false}
        source={source}
        onBulkAction={(action, selectedItems, clearSelected) => {
          if (action === "attended" || action === "not-attended") {
            const ids = new Set(selectedItems.selectedIds.map(String))
            const nextAttendance: SessionAttendanceRow["attendance"] =
              action === "attended" ? "Attended" : "Not attended"
            setRows((current) =>
              current.map((row) => (ids.has(row.id) ? { ...row, attendance: nextAttendance } : row))
            )
          }
          clearSelected()
        }}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Participant", render: (row: SessionAttendanceRow) => personValue(row.name) },
                { id: "attendance", label: "Attendance", render: (row: SessionAttendanceRow) => ({ type: "status" as const, value: attendanceStatusValue(row.attendance) }) },
                { id: "completedHours", label: `Time in session (of ${SESSION_DURATION_MIN}m)`, render: (row: SessionAttendanceRow) => row.completedHours.split("/")[0] ?? row.completedHours },
              ],
            },
          },
        ]}
      />
    </F0BoxWithClassName>
  )
}

function SessionTranscriptTab({ session }: { session: GroupSessionRow }) {
  return (
    <F0BoxWithClassName className="ml-4 mt-4 w-[574px]" display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Transcript" variant="heading" as="h3" />
        <F0Text content="Review the transcript generated from this completed live session." variant="description" />
      </F0Box>
      <F0Box display="flex" flexDirection="column" gap="md" padding="lg" border="default" borderColor="secondary" borderRadius="lg" background="primary">
        <TranscriptLine time="00:02" speaker="Adam Joseph" text={`Welcome everyone to ${session.name}. Today we will review the core quality principles and answer live questions.`} />
        <TranscriptLine time="06:18" speaker="Emilia Estrada" text="Can you explain how this applies to store operations when we have multiple teams involved?" />
        <TranscriptLine time="08:42" speaker="Adam Joseph" text="The important part is to document the same process steps and assign a single owner for follow-up." />
      </F0Box>
    </F0BoxWithClassName>
  )
}

function TranscriptLine({ time, speaker, text }: { time: string; speaker: string; text: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs" paddingBottom="md" borderBottom="default" borderColor="secondary">
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Text content={time} variant="code" />
        <F0Text content={speaker} variant="label" />
      </F0Box>
      <F0Text content={text} variant="body" />
    </F0Box>
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
      id={`${prototypeSlug}/group-participants/v1`}
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
        id={`${prototypeSlug}/group-materials/v1`}
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
        id={`${prototypeSlug}/group-documents/v1`}
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
      <SidebarField label="Internal code" value={course.code ?? "-"} />
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

// Minimum attendance set when the session is created. Default is 75% of the
// session: a participant must be present for at least that share to count as
// Attended. The instructor can lower it (down to 1% = joining is enough) or
// raise it (RFC: completion_threshold_percentage). Frozen at creation.
const SESSION_DURATION_MIN = 60
const COMPLETION_THRESHOLD_PCT = 75
// Demo only: how far ahead the scheduled start is anchored when an instructor
// enters a waiting session early, so the green-room countdown is watchable and
// then flips to the live class clock. Real scheduling would use the session time.
const DEMO_COUNTDOWN_SECONDS = 75
const thresholdMinutes = (pct: number, durationMin: number) =>
  Math.round((pct / 100) * durationMin)

// Parse the present minutes from a "Xm/Ym" string (e.g. "41m/60m" → 41).
function presentMinutes(completedHours: string): number {
  return Number((completedHours.split("/")[0] ?? "").replace(/[^\d.]/g, "")) || 0
}
// You must have joined (present > 0) and met the minimum. With the default 75%
// the minimum is ~45 min, so a short join does not count as attended.
function attendanceFromThreshold(completedHours: string): "Attended" | "Not attended" {
  const required = thresholdMinutes(COMPLETION_THRESHOLD_PCT, SESSION_DURATION_MIN)
  const present = presentMinutes(completedHours)
  return present > 0 && present >= required ? "Attended" : "Not attended"
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
