/**
 * Local fixtures for the AI Mentor prototype.
 * Not in @/fixtures because this domain doesn't exist yet in production.
 */

// -------------------------------------------------------------------------
// Career paths
// -------------------------------------------------------------------------

export type CompetencyLevel = "basic" | "intermediate" | "advanced" | "expert"

export type Competency = {
  id: string
  name: string
  description: string
}

export type LevelRequirement = {
  competencyId: string
  level: CompetencyLevel
}

export type CareerLevel = {
  id: string
  label: string
  order: number
  requirements: LevelRequirement[]
}

export type CareerPath = {
  id: string
  roleId: string
  roleName: string
  department: string
  levels: CareerLevel[]
  isAiGenerated: boolean
  lastUpdated: string
}

export const competencies: Competency[] = [
  { id: "comp-01", name: "Technical expertise", description: "Depth and breadth of technical knowledge in the domain" },
  { id: "comp-02", name: "Problem solving", description: "Ability to break down complex problems and find pragmatic solutions" },
  { id: "comp-03", name: "Communication", description: "Clear written and verbal communication with peers and stakeholders" },
  { id: "comp-04", name: "Ownership", description: "Taking end-to-end responsibility for outcomes" },
  { id: "comp-05", name: "Collaboration", description: "Working effectively across teams and functions" },
  { id: "comp-06", name: "Mentoring", description: "Guiding and growing more junior team members" },
  { id: "comp-07", name: "Strategy", description: "Connecting day-to-day work to business goals and long-term direction" },
  { id: "comp-08", name: "Negotiation", description: "Influencing outcomes and managing competing interests" },
  { id: "comp-09", name: "Data analysis", description: "Using data to make decisions and measure impact" },
  { id: "comp-10", name: "Customer empathy", description: "Understanding customer needs and translating them into product value" },
]

export const careerPaths: CareerPath[] = [
  {
    id: "cp-01",
    roleId: "role-eng",
    roleName: "Software Engineer",
    department: "Engineering",
    isAiGenerated: true,
    lastUpdated: "2026-04-20",
    levels: [
      {
        id: "lvl-eng-junior",
        label: "Junior",
        order: 1,
        requirements: [
          { competencyId: "comp-01", level: "basic" },
          { competencyId: "comp-02", level: "basic" },
          { competencyId: "comp-03", level: "basic" },
          { competencyId: "comp-05", level: "basic" },
        ],
      },
      {
        id: "lvl-eng-mid",
        label: "Mid",
        order: 2,
        requirements: [
          { competencyId: "comp-01", level: "intermediate" },
          { competencyId: "comp-02", level: "intermediate" },
          { competencyId: "comp-03", level: "intermediate" },
          { competencyId: "comp-04", level: "basic" },
          { competencyId: "comp-05", level: "intermediate" },
        ],
      },
      {
        id: "lvl-eng-senior",
        label: "Senior",
        order: 3,
        requirements: [
          { competencyId: "comp-01", level: "advanced" },
          { competencyId: "comp-02", level: "advanced" },
          { competencyId: "comp-03", level: "advanced" },
          { competencyId: "comp-04", level: "intermediate" },
          { competencyId: "comp-05", level: "advanced" },
          { competencyId: "comp-06", level: "basic" },
        ],
      },
      {
        id: "lvl-eng-staff",
        label: "Staff",
        order: 4,
        requirements: [
          { competencyId: "comp-01", level: "expert" },
          { competencyId: "comp-02", level: "expert" },
          { competencyId: "comp-03", level: "advanced" },
          { competencyId: "comp-04", level: "advanced" },
          { competencyId: "comp-06", level: "intermediate" },
          { competencyId: "comp-07", level: "basic" },
        ],
      },
    ],
  },
  {
    id: "cp-02",
    roleId: "role-sales",
    roleName: "Sales Representative",
    department: "Sales",
    isAiGenerated: false,
    lastUpdated: "2026-03-10",
    levels: [
      {
        id: "lvl-sales-junior",
        label: "Junior",
        order: 1,
        requirements: [
          { competencyId: "comp-03", level: "intermediate" },
          { competencyId: "comp-05", level: "basic" },
          { competencyId: "comp-08", level: "basic" },
          { competencyId: "comp-10", level: "basic" },
        ],
      },
      {
        id: "lvl-sales-mid",
        label: "Mid",
        order: 2,
        requirements: [
          { competencyId: "comp-03", level: "advanced" },
          { competencyId: "comp-05", level: "intermediate" },
          { competencyId: "comp-08", level: "intermediate" },
          { competencyId: "comp-09", level: "basic" },
          { competencyId: "comp-10", level: "intermediate" },
        ],
      },
      {
        id: "lvl-sales-senior",
        label: "Senior",
        order: 3,
        requirements: [
          { competencyId: "comp-03", level: "advanced" },
          { competencyId: "comp-05", level: "advanced" },
          { competencyId: "comp-06", level: "basic" },
          { competencyId: "comp-08", level: "advanced" },
          { competencyId: "comp-09", level: "intermediate" },
          { competencyId: "comp-10", level: "advanced" },
        ],
      },
    ],
  },
  {
    id: "cp-03",
    roleId: "role-designer",
    roleName: "Product Designer",
    department: "Design",
    isAiGenerated: true,
    lastUpdated: "2026-04-15",
    levels: [
      {
        id: "lvl-des-junior",
        label: "Junior",
        order: 1,
        requirements: [
          { competencyId: "comp-01", level: "basic" },
          { competencyId: "comp-03", level: "basic" },
          { competencyId: "comp-05", level: "basic" },
          { competencyId: "comp-10", level: "basic" },
        ],
      },
      {
        id: "lvl-des-mid",
        label: "Mid",
        order: 2,
        requirements: [
          { competencyId: "comp-01", level: "intermediate" },
          { competencyId: "comp-02", level: "intermediate" },
          { competencyId: "comp-03", level: "intermediate" },
          { competencyId: "comp-05", level: "intermediate" },
          { competencyId: "comp-10", level: "intermediate" },
        ],
      },
      {
        id: "lvl-des-senior",
        label: "Senior",
        order: 3,
        requirements: [
          { competencyId: "comp-01", level: "advanced" },
          { competencyId: "comp-02", level: "advanced" },
          { competencyId: "comp-03", level: "advanced" },
          { competencyId: "comp-06", level: "basic" },
          { competencyId: "comp-07", level: "basic" },
          { competencyId: "comp-10", level: "advanced" },
        ],
      },
    ],
  },
]

// -------------------------------------------------------------------------
// AI Mentor recommendations
// -------------------------------------------------------------------------

export type CourseDecision = "existing" | "adapted" | "new"
export type RecommendationStatus =
  | "pending-review"    // draft curso nuevo, espera aprobación L&D
  | "ready"             // listo para asignar
  | "assigned"          // ya asignado al empleado
  | "completed"         // empleado lo ha completado
  | "overridden"        // L&D admin anuló la recomendación

export type AiMentorRecommendation = {
  id: string
  employeeId: string
  cycleId: string
  gapCompetencyId: string
  gapSummary: string          // descripción del gap para la tabla admin
  justification: string       // párrafo personalizado que ve el empleado
  courseDecision: CourseDecision
  courseId: string
  courseTitle: string
  courseDurationMin: number   // minutos
  status: RecommendationStatus
  generatedAt: string
  assignedAt?: string
  completedAt?: string
  employeeSatisfaction?: 1 | 2 | 3 | 4 | 5
}

export const recommendations: AiMentorRecommendation[] = [
  {
    id: "rec-001",
    employeeId: "emp-005",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-06",
    gapSummary: "Lacks mentoring skills needed to progress to Senior level",
    justification:
      "Hola Lin. Basándome en tu última performance review y tus objetivos de este trimestre, tu manager destaca que tienes un dominio técnico sobresaliente del frontend pero que aún no has tomado un rol activo en guiar a otros compañeros del equipo. He preparado para ti un módulo de 40 minutos sobre 'Mentoring técnico para ingenieras senior' con ejemplos prácticos de pair programming y feedback estructurado adaptados al entorno de Factorial.",
    courseDecision: "adapted",
    courseId: "course-004",
    courseTitle: "Technical mentoring for senior engineers",
    courseDurationMin: 40,
    status: "assigned",
    generatedAt: "2026-04-21",
    assignedAt: "2026-04-22",
  },
  {
    id: "rec-002",
    employeeId: "emp-006",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-04",
    gapSummary: "Needs to improve ownership of end-to-end delivery",
    justification:
      "Hola Diego. Tu manager valora tu velocidad de implementación pero señala que en los últimos proyectos has necesitado apoyo constante para cerrar las tareas end-to-end. He preparado un módulo de 35 minutos sobre 'Ownership y entrega end-to-end en equipos de producto' que cubre cómo gestionar dependencias, comunicar blockers y hacer seguimiento hasta el deploy.",
    courseDecision: "existing",
    courseId: "course-007",
    courseTitle: "Ownership and end-to-end delivery",
    courseDurationMin: 35,
    status: "assigned",
    generatedAt: "2026-04-21",
    assignedAt: "2026-04-22",
  },
  {
    id: "rec-003",
    employeeId: "emp-007",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-07",
    gapSummary: "Strategy gap — needs to connect design work to business outcomes",
    justification:
      "Hola Priya. Tu performance review destaca que produces diseños de alta calidad pero que los stakeholders de negocio piden más contexto sobre el impacto esperado de tus propuestas. He creado un módulo de 45 minutos sobre 'Diseño orientado a negocio para product designers' adaptado al sector HR/SaaS y con ejemplos de cómo presentar el valor de tus decisiones de diseño en reuniones con producto y dirección.",
    courseDecision: "new",
    courseId: "course-draft-001",
    courseTitle: "Business-driven design for product designers",
    courseDurationMin: 45,
    status: "pending-review",
    generatedAt: "2026-04-21",
  },
  {
    id: "rec-004",
    employeeId: "emp-009",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-09",
    gapSummary: "Data analysis skills below expected level for Senior PM",
    justification:
      "Hola Chiara. Este trimestre tus goals incluyen lanzar la nueva estrategia de pricing, y tu manager señala que la toma de decisiones podría reforzarse con más análisis cuantitativo. He preparado un módulo de 50 minutos sobre 'Análisis de datos para product managers' con ejemplos de SQL, Amplitude y métricas de retención específicas del contexto SaaS B2B.",
    courseDecision: "adapted",
    courseId: "course-009",
    courseTitle: "Data analysis for product managers",
    courseDurationMin: 50,
    status: "ready",
    generatedAt: "2026-04-21",
  },
  {
    id: "rec-005",
    employeeId: "emp-011",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-08",
    gapSummary: "Negotiation skills needed for cross-functional stakeholder management",
    justification:
      "Hola Sofía. Tu manager valora tu capacidad de gestión del equipo pero señala que en situaciones de conflicto entre stakeholders has tendido a escalar en lugar de resolver directamente. He preparado un módulo de 30 minutos sobre 'Negociación y gestión de conflictos para People Partners' con frameworks prácticos de resolución de conflictos en entornos de RRHH.",
    courseDecision: "existing",
    courseId: "course-002",
    courseTitle: "Negotiation and conflict resolution for HR",
    courseDurationMin: 30,
    status: "completed",
    generatedAt: "2026-01-15",
    assignedAt: "2026-01-16",
    completedAt: "2026-02-10",
    employeeSatisfaction: 5,
  },
  {
    id: "rec-006",
    employeeId: "emp-012",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-03",
    gapSummary: "Communication gap — technical reports lack clarity for non-technical audience",
    justification:
      "Hola Marcus. Tu manager destaca tu excelente gestión de pipeline pero señala que los reportes de recruiting que compartes con dirección a veces son difíciles de interpretar sin contexto técnico. He preparado un módulo de 25 minutos sobre 'Comunicación efectiva con stakeholders no técnicos en recruiting'.",
    courseDecision: "new",
    courseId: "course-draft-002",
    courseTitle: "Communicating recruiting insights to non-technical stakeholders",
    courseDurationMin: 25,
    status: "pending-review",
    generatedAt: "2026-04-21",
  },
  {
    id: "rec-007",
    employeeId: "emp-003",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-07",
    gapSummary: "Strategy gap — needs to develop broader architectural vision",
    justification:
      "Hola Alan. Tu performance review reconoce tu dominio técnico excepcional, pero para progresar a Staff Engineer necesitas demostrar más iniciativa en la dirección técnica de la plataforma a largo plazo. He preparado un módulo de 60 minutos sobre 'Architectural thinking y estrategia técnica para Staff Engineers'.",
    courseDecision: "adapted",
    courseId: "course-011",
    courseTitle: "Architectural thinking for staff engineers",
    courseDurationMin: 60,
    status: "assigned",
    generatedAt: "2026-04-21",
    assignedAt: "2026-04-22",
  },
  {
    id: "rec-008",
    employeeId: "emp-014",
    cycleId: "cyc-001",
    gapCompetencyId: "comp-10",
    gapSummary: "Customer empathy below expected level for Sales Senior",
    justification:
      "Hola Valentina. Tu manager señala que tienes un muy buen pipeline pero que en deals enterprise las objeciones de precio te están costando un 30% de cierre. He preparado un módulo de 45 minutos sobre 'Customer empathy y manejo de objeciones en ventas B2B enterprise' adaptado a los productos de Factorial.",
    courseDecision: "adapted",
    courseId: "course-005",
    courseTitle: "Customer empathy and objection handling in B2B sales",
    courseDurationMin: 45,
    status: "overridden",
    generatedAt: "2026-03-15",
  },
]

// -------------------------------------------------------------------------
// Draft courses (pending L&D review)
// -------------------------------------------------------------------------

export type DraftCourseStatus = "pending" | "approved" | "rejected"

export type DraftCourse = {
  id: string
  recommendationId: string
  title: string
  targetCompetency: string
  learnerRole: string
  learnerLevel: string
  gapContext: string
  proposedModules: string[]
  estimatedDurationMin: number
  status: DraftCourseStatus
  generatedAt: string
  reviewedAt?: string
  reviewedBy?: string
  reviewNotes?: string
}

export const draftCourses: DraftCourse[] = [
  {
    id: "course-draft-001",
    recommendationId: "rec-003",
    title: "Business-driven design for product designers",
    targetCompetency: "Strategy",
    learnerRole: "Product Designer",
    learnerLevel: "Mid",
    gapContext:
      "Learner produces high-quality designs but struggles to articulate business impact to non-design stakeholders. Works in HR/SaaS B2B context.",
    proposedModules: [
      "Module 1: Why design decisions have business consequences (10 min)",
      "Module 2: Metrics that matter in HR SaaS — retention, NPS, activation (15 min)",
      "Module 3: Presenting design rationale to PMs and leadership (12 min)",
      "Module 4: Practical exercise: redesign a feature pitch (8 min)",
    ],
    estimatedDurationMin: 45,
    status: "pending",
    generatedAt: "2026-04-21",
  },
  {
    id: "course-draft-002",
    recommendationId: "rec-006",
    title: "Communicating recruiting insights to non-technical stakeholders",
    targetCompetency: "Communication",
    learnerRole: "Talent Acquisition Lead",
    learnerLevel: "Mid",
    gapContext:
      "Learner produces solid recruiting reports but leadership finds them hard to parse without context. Company is a B2B SaaS with strong data culture.",
    proposedModules: [
      "Module 1: What leadership needs to know — hiring funnel, quality, speed (8 min)",
      "Module 2: Structuring a recruiting update for non-recruiters (10 min)",
      "Module 3: Visual storytelling with data — charts that work in board decks (7 min)",
    ],
    estimatedDurationMin: 25,
    status: "pending",
    generatedAt: "2026-04-21",
  },
]

// -------------------------------------------------------------------------
// Company context
// -------------------------------------------------------------------------

export type CompanyContext = {
  industry: string
  size: string
  keyTools: string[]
  culture: string
  autoPublishAdapted: boolean
  autoPublishExisting: boolean
  requireReviewForNew: boolean
}

export const companyContext: CompanyContext = {
  industry: "HR & Payroll SaaS",
  size: "501–1000 employees",
  keyTools: ["Factorial", "Slack", "Notion", "GitHub", "Amplitude", "Salesforce"],
  culture:
    "High ownership, outcome-driven, distributed-first. We value pragmatism and clear communication over process. People grow by taking on harder problems, not by following rigid ladders.",
  autoPublishAdapted: true,
  autoPublishExisting: true,
  requireReviewForNew: true,
}

// -------------------------------------------------------------------------
// Overview stats for the current cycle
// -------------------------------------------------------------------------

export type CycleStats = {
  cycleId: string
  cycleName: string
  totalEmployeesWithReview: number
  recommendationsGenerated: number
  coursesAssigned: number
  draftsAwaitingReview: number
  coursesCompleted: number
  avgSatisfaction: number | null
  adoptionRate: number | null // 0–100
}

export const currentCycleStats: CycleStats = {
  cycleId: "cyc-001",
  cycleName: "180º Review — March 2026",
  totalEmployeesWithReview: 487,
  recommendationsGenerated: 312,
  coursesAssigned: 298,
  draftsAwaitingReview: 14,
  coursesCompleted: 87,
  avgSatisfaction: 4.3,
  adoptionRate: 29,
}
