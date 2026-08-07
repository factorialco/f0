/**
 * Option lists + default values for the course **Settings** screen
 * (production: `pages/Trainings/EditTraining`). Values mirror the real
 * editable field set across the four sections — Basic information, Internal
 * information, Completion configuration and Relatório Único — sourced from the
 * backend DTOs (`update_basic_info`, `update_internal_info`, `upsert_subsidy`,
 * `training_relatorio_unico_field`) and the frontend `TrainingEditMode` forms.
 */

type Option = { value: string; label: string }

// ---- Basic information -------------------------------------------------------

/** Competencies (m2m `trainings_training_competencies`). */
export const competencyOptions: Option[] = [
  { value: "teamwork", label: "Teamwork" },
  { value: "collaboration", label: "Collaboration" },
  { value: "problem-solving", label: "Problem Solving" },
  { value: "communication", label: "Communication" },
  { value: "critical-thinking", label: "Critical thinking" },
  { value: "leadership", label: "Leadership" },
]

/** Course validity — backend `valid_for` integer, 1–10 years. */
export const validityOptions: Option[] = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1
  return { value: String(n), label: `${n} ${n === 1 ? "year" : "years"}` }
})

// ---- Internal information ----------------------------------------------------

/** Type — backend `external` boolean → Internal / External (`mode`). */
export const typeOptions: Option[] = [
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
]

/** Tags / categories (m2m `trainings_trainings_categories_relations`). */
export const tagOptions: Option[] = [
  { value: "design", label: "Design" },
  { value: "tecnico", label: "Técnico" },
  { value: "compliance", label: "Compliance" },
  { value: "onboarding", label: "Onboarding" },
  { value: "leadership", label: "Leadership" },
]

/** Axes (m2m `trainings_trainings_axes_relations`) — French regulatory reporting. */
export const axisOptions: Option[] = [
  { value: "skills-development", label: "Skills development" },
  { value: "job-adaptation", label: "Adaptation to the job" },
  { value: "certification", label: "Certifying course" },
]

/** FUNDAE profile (`perfil`) — the three company types used to access FUNDAE. */
export const fundaeProfileOptions: Option[] = [
  { value: "empresa-bonificada", label: "Empresa Bonificada" },
  { value: "organizadora", label: "Organizadora" },
  { value: "grupo-empresa", label: "Grupo de Empresa" },
]

/** Workflows the course can be linked to (`process_id`). */
export const workflowOptions: Option[] = [
  { value: "wf-send-certificate", label: "Send course certificate" },
  { value: "wf-certificates", label: "Generate course certificates" },
  { value: "wf-survey", label: "Send post-course questionnaire" },
  { value: "wf-mandatory", label: "Mandatory training reminders" },
]

// ---- Relatório Único (Annex C — Portugal) ------------------------------------

/** Area of education (`education_area`) — representative subset of the catalog. */
export const areaOfEducationOptions: Option[] = [
  { value: "computer-science", label: "Computer science" },
  { value: "accounting-taxation", label: "Accounting and Taxation" },
  { value: "commerce", label: "Commerce" },
  { value: "law", label: "Law" },
  { value: "economics", label: "Economics" },
  { value: "design", label: "Design" },
  { value: "electricity-energy", label: "Electricity and energy" },
  { value: "hospitality-catering", label: "Hospitality and catering" },
  { value: "beauty-care", label: "Beauty care" },
  { value: "chemistry", label: "Chemistry" },
]

/** Course modality (`training_modality`). */
export const modalityOptions: Option[] = [
  { value: "learning-courses", label: "Learning Courses" },
  { value: "adult-training", label: "Education and Training Courses for Adults" },
  { value: "continuous-training", label: "Other Continuous Training Actions Not in the National Catalog of Qualifications" },
]

/** Course initiative (`training_initiative`). */
export const initiativeOptions: Option[] = [
  { value: "employer-responsibility", label: "Employer Responsibility" },
  { value: "another-regime", label: "Another regime" },
  { value: "general-retirement-fund", label: "General retirement fund" },
]

/** Course entity (`training_entity`). */
export const entityOptions: Option[] = [
  { value: "employment-center", label: "Employment Center or Direct Management Vocational Training Center" },
  { value: "employers-assoc", label: "Employer's Associations or Other Business Associations" },
]

/** Type of Certificate/Diploma (`certificate_type`). */
export const certificateOptions: Option[] = [
  { value: "attendance-certificate", label: "Attendance certificate" },
  { value: "higher-education-diploma", label: "Higher Education Diploma" },
]

/** Qualification level (`qualification_level`). */
export const levelOptions: Option[] = [
  { value: "level-1", label: "Level 1" },
  { value: "level-2", label: "Level 2" },
  { value: "level-3", label: "Level 3" },
  { value: "level-4", label: "Level 4" },
]

// ---- FUNDAE field mapping (Settings › Training → FUNDAE) ---------------------

/** The company's own fields (left column), mapped to FUNDAE standard values. */
export const fundaeProfessionalFactorialFields = ["Senior Manager", "Team Lead", "Specialist", "Associate", "Intern"]
export const fundaeEducationFactorialFields = ["PhD", "Master's degree", "Bachelor's degree", "Vocational training", "High school"]

/** FUNDAE standard professional categories (right column options). */
export const fundaeProfessionalOptions: Option[] = [
  { value: "directivo", label: "Directivo" },
  { value: "mandointermedio", label: "Mando intermedio" },
  { value: "tecnico", label: "Técnico" },
  { value: "trabajadorconbajacualificacion", label: "Trabajador con baja cualificación" },
  { value: "trabajadorcualificado", label: "Trabajador cualificado" },
]

/** FUNDAE standard education levels (right column options). */
export const fundaeEducationOptions: Option[] = [
  { value: "menosqueprimaria", label: "Menos que primaria" },
  { value: "educacionprimaria", label: "Educación primaria" },
  { value: "primeraetapasecundaria", label: "Primera etapa secundaria" },
  { value: "segundaetapasecundaria", label: "Segunda etapa secundaria" },
  { value: "educacionpostsecundarianosuperior", label: "Educación postsecundaria no superior" },
  { value: "tecnicosuperior", label: "Técnico superior" },
  { value: "estudiosuniversitariosprimerciclo", label: "Estudios universitarios primer ciclo" },
  { value: "estudiosuniversitariossegundociclo", label: "Estudios universitarios segundo ciclo" },
  { value: "estudiosuniversitariostercerciclo", label: "Estudios universitarios tercer ciclo" },
  { value: "otrastitulaciones", label: "Otras titulaciones" },
]

// ---- Approval flow (Settings › Training → Approval configuration) -------------

/** Approver type — a dynamic relative role, or a specific user. */
export const approverTypeOptions: Option[] = [
  { value: "relative-role", label: "Relative role" },
  { value: "user", label: "User" },
]

/** Relative-role approver options (when approver type = Relative role). */
export const approverRoleOptions: Option[] = [
  { value: "self", label: "Self approval" },
  { value: "manager", label: "Manager" },
  { value: "timeoffmanager", label: "Time off Supervisor" },
  { value: "admins", label: "Admins" },
  { value: "team", label: "Team" },
  { value: "teamlead", label: "Team lead" },
]

/** Approver strategy — `members` is a specific user, the rest are relative roles. */
export type ApproverStrategy = "members" | "self" | "manager" | "timeoffmanager" | "admins" | "team" | "teamlead"

/** A single approver inside an approval level. */
export type Approver = {
  id: string
  strategy: ApproverStrategy
  /** Only for strategy = "members" (a specific employee). */
  firstName?: string
  lastName?: string
}

/** An approval level (step): one or more approvers, "any one approves". */
export type ApprovalLevel = { id: string; approvers: Approver[] }

/** A company approval group routed by membership; holds the default flow's levels. */
export type ApprovalGroup = {
  id: string
  name: string
  description: string
  default: boolean
  autoApproved: boolean
  employeesAssigned: number
  levels: ApprovalLevel[]
}

/** Display name for an approver (role label or the employee's full name). */
export function approverLabel(a: Approver): string {
  if (a.strategy === "members") return `${a.firstName ?? ""} ${a.lastName ?? ""}`.trim()
  return approverRoleOptions.find((o) => o.value === a.strategy)?.label ?? a.strategy
}

/** firstName/lastName pair used to render an approver avatar (initials or photo). */
export function approverAvatarName(a: Approver): { firstName: string; lastName: string } {
  if (a.strategy === "members") return { firstName: a.firstName ?? "", lastName: a.lastName ?? "" }
  const label = approverLabel(a)
  const [first, ...rest] = label.split(" ")
  return { firstName: first, lastName: rest.join(" ") }
}

export const approvalGroupList: ApprovalGroup[] = [
  {
    id: "default",
    name: "Default approval group",
    description: "Course requests from anyone not in another group are routed here.",
    default: true,
    autoApproved: false,
    employeesAssigned: 142,
    levels: [{ id: "l1", approvers: [{ id: "a1", strategy: "admins" }] }],
  },
  {
    id: "managers",
    name: "People managers",
    description: "Requests from team members go to their manager first, then to an admin.",
    default: false,
    autoApproved: false,
    employeesAssigned: 24,
    levels: [
      {
        id: "l1",
        approvers: [
          { id: "a1", strategy: "manager" },
          { id: "a2", strategy: "members", firstName: "Marta", lastName: "Ribó" },
        ],
      },
      { id: "l2", approvers: [{ id: "a3", strategy: "admins" }] },
    ],
  },
  {
    id: "leadership",
    name: "Leadership team",
    description: "Requests from leadership are approved automatically.",
    default: false,
    autoApproved: true,
    employeesAssigned: 6,
    levels: [],
  },
]

// ---- Settings › Training: Classification + Templates lists -------------------

/** Tags (formerly "Categories") — the course classification taxonomy. */
export const tagList = [
  { id: "compliance", name: "Compliance", courses: 12 },
  { id: "ai", name: "Artificial intelligence", courses: 7 },
  { id: "onboarding", name: "Onboarding", courses: 9 },
  { id: "leadership", name: "Leadership", courses: 5 },
  { id: "security", name: "Security", courses: 4 },
  { id: "soft-skills", name: "Soft skills", courses: 6 },
]

/** Axes — French regulatory-reporting classification. */
export const axisList = [
  { id: "skills-development", name: "Skills development", courses: 18 },
  { id: "job-adaptation", name: "Adaptation to the job", courses: 11 },
  { id: "certification", name: "Certifying course", courses: 3 },
]

/** Survey / test templates reusable across courses. */
export type SurveyTemplate = {
  id: string
  name: string
  type: "Satisfaction" | "Effectiveness" | "Knowledge test"
  status: "published" | "draft"
  questions: number
  usedIn: number
  /** Author — demoted from the list to the template detail (provenance, not a list decision). */
  author: string
}
export const surveyTemplateList: SurveyTemplate[] = [
  { id: "t1", name: "Post-course satisfaction", type: "Satisfaction", status: "published", questions: 8, usedIn: 14, author: "Marie Curie" },
  { id: "t2", name: "Effectiveness follow-up (30 days)", type: "Effectiveness", status: "published", questions: 6, usedIn: 9, author: "Ada Lovelace" },
  { id: "t3", name: "Knowledge test — standard", type: "Knowledge test", status: "published", questions: 12, usedIn: 11, author: "Alan Turing" },
  { id: "t4", name: "Manager feedback form", type: "Satisfaction", status: "draft", questions: 5, usedIn: 2, author: "Marie Curie" },
]

// ---- Enrollment --------------------------------------------------------------

/**
 * Automatic-enrollment criteria — the workplace/team/role conditions anyone is
 * matched against (backend `automatic_enrollment_conditions`). Selecting several
 * renders them as chips, mirroring the production criteria picker.
 */
export const enrollmentCriteriaOptions: Option[] = [
  { value: "team-planta", label: "Team: Planta" },
  { value: "team-contabilidad", label: "Team: Contabilidad" },
  { value: "team-engineering", label: "Team: Engineering" },
  { value: "loc-barcelona", label: "Location: Barcelona" },
  { value: "loc-madrid", label: "Location: Madrid" },
  { value: "role-manager", label: "Role: Manager" },
]

/** Existing course groups a matched participant can be auto-enrolled into. */
export const enrollmentGroupOptions: Option[] = [
  { value: "ana-y-jon-1", label: "ana y jon 1" },
  { value: "cohort-q3", label: "Cohort Q3" },
  { value: "new-hires", label: "New hires" },
]

/** People currently matching the default criteria (shown in the match preview). */
export const enrollmentMatchCount = 12
/** Of those matches, how many are already enrolled vs still pending. */
export const enrollmentEnrolled = 9
export const enrollmentNotEnrolled = enrollmentMatchCount - enrollmentEnrolled

// ---- Collaborators (course access — the "Share" model, re-homed to settings) --

/** Direct collaborator roles (production: Can edit / Can view; Owner is protected). */
export const collaboratorRoleOptions: Option[] = [
  { value: "editor", label: "Can edit" },
  { value: "viewer", label: "Can view" },
]

export type Collaborator = {
  id: string
  name: string
  subtitle: string
  role: "owner" | "editor" | "viewer"
}

/** Who has access today — mirrors the production Share modal for this course. */
export const initialCollaborators: Collaborator[] = [
  { id: "c-owner", name: "Ana Torres Bandera", subtitle: "Created this course", role: "owner" },
  { id: "c-aaron", name: "Aaron Caballero", subtitle: "aaron.caballero@factorial.co", role: "editor" },
]

/** People who can still be added as collaborators (not already in the list). */
export const collaboratorCandidateOptions: Option[] = [
  { value: "marie", label: "Marie Curie" },
  { value: "alan", label: "Alan Turing" },
  { value: "ada", label: "Ada Lovelace" },
  { value: "grace", label: "Grace Hopper" },
]

// ---- Default values (the AI Literacy course these fixtures describe) ---------

export const settingsDefaults = {
  basic: {
    name: "Ana Y Jon",
    objectives: "learn about the training product",
    description: "Learn so much",
    competencyIds: ["teamwork", "collaboration", "problem-solving"],
    totalDuration: 72000,
    isMandatory: true,
    validityEnabled: true,
    validFor: "2",
  },
  internal: {
    year: 2026,
    code: "00012",
    type: "internal",
    externalProvider: "",
    tagIds: ["design", "tecnico"],
    axeIds: [] as string[],
    fundaeEnabled: true,
    fundaeCode: "00001",
    fundaeProfile: "empresa-bonificada",
    fundaeFile: "Expendiente",
    workflowEnabled: true,
    workflowId: "wf-send-certificate",
  },
  completion: {
    moduleCompleted: false,
    moduleScore: 80,
    watchFull: false,
    attendance: true,
    attendancePercentage: 100,
    knowledgeTest: false,
    knowledgeScore: 50,
  },
  relatorio: {
    educationArea: undefined as string | undefined,
    modality: undefined as string | undefined,
    initiative: undefined as string | undefined,
    entity: undefined as string | undefined,
    certificate: undefined as string | undefined,
    level: undefined as string | undefined,
  },
  enrollment: {
    automatic: true,
    criteriaIds: ["team-planta", "team-contabilidad"],
    placement: "group" as "group" | "later",
    groupId: "ana-y-jon-1",
  },
}
