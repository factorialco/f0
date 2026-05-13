import { avatarFor } from "./helpers"

export type TrainingStatus = "active" | "draft"
export type TrainingType = "internal" | "external"

export type TrainingCategory = {
  id: string
  name: string
}

export type TrainingClass = {
  id: string
  trainingId: string
  name: string
  startDate: string | null
  endDate: string | null
  sessionCount: number
  participantCount: number
  completedAttendancesCount: number
  totalAttendancesCount: number
  participants: Array<{ firstName: string; lastName: string; src: string }>
  // Fundae (Spain subsidies) — class-level
  fundaeConfig?: { codigoGrupo?: string | null } | null
  cost?: string | null
  indirectCost?: string | null
  salaryCost?: string | null
}

export type ParticipantStatus = "completed" | "in_progress" | "not_started" | "expired"

export type TrainingParticipant = {
  id: string
  trainingId: string
  classId: string | null
  employeeId: string
  employeeName: string
  employeeAvatar: string
  status: ParticipantStatus
  certificateCount: number
  sessionsAttended: number
  sessionsTotal: number
  attendancePercentage: number
  completionDate: string | null
  dueDate: string | null
  knowledgeTestPassed: boolean | null
  completedModules: number
  totalModules: number
}

export type Training = {
  id: string
  name: string
  code: string | null
  status: TrainingStatus
  type: TrainingType
  externalProvider: string | null
  isMandatory: boolean
  catalog: boolean
  year: number
  totalDuration: number
  totalCost: number
  totalSalaryCost: number
  totalSubsidizedCost: number
  subsidized: boolean
  validFor: number | null
  categories: TrainingCategory[]
  description: string
  objectives: string
  participantCount: number
  expiredParticipantCount: number
  groupNames: string[]
  participantAvatars: Array<{ firstName: string; lastName: string; src: string }>
  instructorAvatars: Array<{ firstName: string; lastName: string; src: string }>
  publishedAsFreeCourse: boolean
  isSessionsRequired: boolean
  isModulesRequired: boolean
  knowledgeTestRequired: boolean
  courseValidityEnabled: boolean
  classes: TrainingClass[]
  // Upstream parity additions
  thumbnail?: string | null
  fundaeSubsidized?: boolean
  codigoCurso?: string | null
  perfil?: string | null
  expediente?: string | null
  processId?: string | null
  workflowName?: string | null
  competencyIds?: string[]
  axes?: Array<{ id: string; name: string }>
  learningPlatformLink?: string | null
  scoreSatisfaction?: number | null
  scoreEffectiveness?: number | null
  scoreKnowledge?: number | null
  // FR/ES region flags used by conditional sections
  countryHint?: "es" | "fr" | "other"
}

export const trainingCategories: TrainingCategory[] = [
  { id: "cat-001", name: "Leadership" },
  { id: "cat-002", name: "Technical Skills" },
  { id: "cat-003", name: "Compliance" },
  { id: "cat-004", name: "Soft Skills" },
  { id: "cat-005", name: "Onboarding" },
  { id: "cat-006", name: "Health & Safety" },
]

export const trainings: Training[] = [
  {
    id: "trn-001",
    name: "Management Fundamentals",
    code: "MGT-101",
    status: "active",
    type: "internal",
    externalProvider: null,
    isMandatory: true,
    catalog: true,
    year: 2026,
    totalDuration: 8,
    totalCost: 1200,
    totalSalaryCost: 4800,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: 2,
    categories: [trainingCategories[0], trainingCategories[3]],
    description:
      "A foundational course covering core management principles, team dynamics, and effective decision-making in fast-paced environments.",
    objectives:
      "Participants will learn to lead teams effectively, manage conflicts constructively, and apply data-driven decision-making frameworks.",
    participantCount: 18,
    expiredParticipantCount: 0,
    groupNames: ["Engineering", "Product"],
    participantAvatars: [
      { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
      { firstName: "Bernat", lastName: "Puig", src: avatarFor("emp-004") },
      { firstName: "Carmen", lastName: "López", src: avatarFor("emp-005") },
      { firstName: "Dídac", lastName: "Mas", src: avatarFor("emp-006") },
      { firstName: "Elena", lastName: "Ferrer", src: avatarFor("emp-007") },
    ],
    instructorAvatars: [
      { firstName: "Javier", lastName: "Molina", src: avatarFor("emp-001") },
      { firstName: "Laura", lastName: "Soler", src: avatarFor("emp-002") },
    ],
    publishedAsFreeCourse: false,
    isSessionsRequired: true,
    isModulesRequired: false,
    knowledgeTestRequired: false,
    courseValidityEnabled: true,
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    fundaeSubsidized: true,
    codigoCurso: "00142",
    perfil: "Empresa Bonificada",
    processId: "wf-mgmt-foundations",
    workflowName: "Management onboarding workflow",
    competencyIds: ["comp-001", "comp-002"],
    axes: [{ id: "axis-001", name: "Strategic" }],
    learningPlatformLink: null,
    scoreSatisfaction: 4.6,
    scoreEffectiveness: 4.4,
    scoreKnowledge: 4.2,
    countryHint: "es",
    classes: [
      {
        id: "cls-001a",
        trainingId: "trn-001",
        name: "Group A – Q1",
        startDate: "2026-02-10",
        endDate: "2026-02-28",
        sessionCount: 4,
        participantCount: 9,
        completedAttendancesCount: 32,
        totalAttendancesCount: 36,
        fundaeConfig: { codigoGrupo: "00001" },
        cost: "1200",
        indirectCost: "180",
        salaryCost: "2350",
        participants: [
          { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
          { firstName: "Bernat", lastName: "Puig", src: avatarFor("emp-004") },
          { firstName: "Carmen", lastName: "López", src: avatarFor("emp-005") },
        ],
      },
      {
        id: "cls-001b",
        trainingId: "trn-001",
        name: "Group B – Q2",
        startDate: "2026-04-07",
        endDate: "2026-04-25",
        sessionCount: 4,
        participantCount: 9,
        completedAttendancesCount: 0,
        totalAttendancesCount: 36,
        fundaeConfig: { codigoGrupo: "" },
        cost: "",
        indirectCost: "",
        salaryCost: "",
        participants: [
          { firstName: "Dídac", lastName: "Mas", src: avatarFor("emp-006") },
          { firstName: "Elena", lastName: "Ferrer", src: avatarFor("emp-007") },
        ],
      },
    ],
  },
  {
    id: "trn-002",
    name: "GDPR Compliance 2026",
    code: "LEGAL-002",
    status: "active",
    type: "internal",
    externalProvider: null,
    isMandatory: true,
    catalog: false,
    year: 2026,
    totalDuration: 2,
    totalCost: 0,
    totalSalaryCost: 1200,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: 1,
    categories: [trainingCategories[2]],
    description:
      "Annual mandatory refresher on GDPR obligations, data subject rights, and breach reporting procedures.",
    objectives:
      "All employees will be able to identify personal data, apply data minimisation principles, and report incidents correctly.",
    participantCount: 20,
    expiredParticipantCount: 3,
    groupNames: ["All employees"],
    participantAvatars: [
      { firstName: "Javier", lastName: "Molina", src: avatarFor("emp-001") },
      { firstName: "Laura", lastName: "Soler", src: avatarFor("emp-002") },
      { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
    ],
    instructorAvatars: [
      { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
    ],
    publishedAsFreeCourse: false,
    isSessionsRequired: true,
    isModulesRequired: false,
    knowledgeTestRequired: true,
    courseValidityEnabled: true,
    classes: [
      {
        id: "cls-002a",
        trainingId: "trn-002",
        name: "Full company – March",
        startDate: "2026-03-03",
        endDate: "2026-03-03",
        sessionCount: 1,
        participantCount: 20,
        completedAttendancesCount: 17,
        totalAttendancesCount: 20,
        participants: [
          { firstName: "Javier", lastName: "Molina", src: avatarFor("emp-001") },
          { firstName: "Laura", lastName: "Soler", src: avatarFor("emp-002") },
          { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
          { firstName: "Bernat", lastName: "Puig", src: avatarFor("emp-004") },
          { firstName: "Carmen", lastName: "López", src: avatarFor("emp-005") },
        ],
      },
    ],
  },
  {
    id: "trn-003",
    name: "React Advanced Patterns",
    code: "ENG-201",
    status: "active",
    type: "external",
    externalProvider: "Frontend Masters",
    isMandatory: false,
    catalog: true,
    year: 2026,
    totalDuration: 16,
    totalCost: 3800,
    totalSalaryCost: 9600,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: null,
    categories: [trainingCategories[1]],
    description:
      "Deep-dive into advanced React concepts: render optimisation, concurrent features, compound components, and state architecture.",
    objectives:
      "Engineers will be able to build highly performant React applications and mentor juniors on architecture best practices.",
    participantCount: 8,
    expiredParticipantCount: 0,
    groupNames: ["Engineering"],
    participantAvatars: [
      { firstName: "Dídac", lastName: "Mas", src: avatarFor("emp-006") },
      { firstName: "Elena", lastName: "Ferrer", src: avatarFor("emp-007") },
    ],
    instructorAvatars: [],
    publishedAsFreeCourse: false,
    isSessionsRequired: false,
    isModulesRequired: true,
    knowledgeTestRequired: false,
    courseValidityEnabled: false,
    classes: [
      {
        id: "cls-003a",
        trainingId: "trn-003",
        name: "Self-paced cohort",
        startDate: "2026-01-15",
        endDate: "2026-03-15",
        sessionCount: 0,
        participantCount: 8,
        completedAttendancesCount: 0,
        totalAttendancesCount: 0,
        participants: [
          { firstName: "Dídac", lastName: "Mas", src: avatarFor("emp-006") },
          { firstName: "Elena", lastName: "Ferrer", src: avatarFor("emp-007") },
        ],
      },
    ],
  },
  {
    id: "trn-004",
    name: "New Employee Orientation",
    code: "HR-001",
    status: "active",
    type: "internal",
    externalProvider: null,
    isMandatory: true,
    catalog: true,
    year: 2026,
    totalDuration: 4,
    totalCost: 0,
    totalSalaryCost: 600,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: null,
    categories: [trainingCategories[4]],
    description:
      "Welcome programme for all new hires covering Factorial culture, tools, processes, and first-month expectations.",
    objectives:
      "New employees will leave orientation with clarity on their role, team contacts, and the resources available to them.",
    participantCount: 5,
    expiredParticipantCount: 0,
    groupNames: ["All employees"],
    participantAvatars: [
      { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
    ],
    instructorAvatars: [
      { firstName: "Laura", lastName: "Soler", src: avatarFor("emp-002") },
    ],
    publishedAsFreeCourse: false,
    isSessionsRequired: false,
    isModulesRequired: false,
    knowledgeTestRequired: false,
    courseValidityEnabled: false,
    classes: [
      {
        id: "cls-004a",
        trainingId: "trn-004",
        name: "April cohort",
        startDate: "2026-04-01",
        endDate: "2026-04-01",
        sessionCount: 1,
        participantCount: 5,
        completedAttendancesCount: 5,
        totalAttendancesCount: 5,
        participants: [
          { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
        ],
      },
    ],
  },
  {
    id: "trn-005",
    name: "Fire Safety & Evacuation",
    code: "HSE-010",
    status: "active",
    type: "internal",
    externalProvider: null,
    isMandatory: true,
    catalog: false,
    year: 2026,
    totalDuration: 1,
    totalCost: 250,
    totalSalaryCost: 800,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: null,
    categories: [trainingCategories[5]],
    description:
      "Biannual fire safety briefing covering evacuation routes, extinguisher use, and assembly points.",
    objectives:
      "Employees will know their nearest exit, how to raise the alarm, and how to use a fire extinguisher safely.",
    participantCount: 20,
    expiredParticipantCount: 7,
    groupNames: ["All employees"],
    participantAvatars: [
      { firstName: "Javier", lastName: "Molina", src: avatarFor("emp-001") },
      { firstName: "Laura", lastName: "Soler", src: avatarFor("emp-002") },
      { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
      { firstName: "Bernat", lastName: "Puig", src: avatarFor("emp-004") },
    ],
    instructorAvatars: [
      { firstName: "Elena", lastName: "Ferrer", src: avatarFor("emp-007") },
    ],
    publishedAsFreeCourse: false,
    isSessionsRequired: true,
    isModulesRequired: false,
    knowledgeTestRequired: false,
    courseValidityEnabled: false,
    classes: [
      {
        id: "cls-005a",
        trainingId: "trn-005",
        name: "Morning session",
        startDate: "2026-05-06",
        endDate: "2026-05-06",
        sessionCount: 1,
        participantCount: 10,
        completedAttendancesCount: 9,
        totalAttendancesCount: 10,
        participants: [
          { firstName: "Javier", lastName: "Molina", src: avatarFor("emp-001") },
          { firstName: "Laura", lastName: "Soler", src: avatarFor("emp-002") },
        ],
      },
      {
        id: "cls-005b",
        trainingId: "trn-005",
        name: "Afternoon session",
        startDate: "2026-05-06",
        endDate: "2026-05-06",
        sessionCount: 1,
        participantCount: 10,
        completedAttendancesCount: 8,
        totalAttendancesCount: 10,
        participants: [
          { firstName: "Ana", lastName: "García", src: avatarFor("emp-003") },
          { firstName: "Bernat", lastName: "Puig", src: avatarFor("emp-004") },
        ],
      },
    ],
  },
  {
    id: "trn-006",
    name: "Public Speaking & Presentation Skills",
    code: null,
    status: "draft",
    type: "external",
    externalProvider: "Dale Carnegie",
    isMandatory: false,
    catalog: false,
    year: 2026,
    totalDuration: 12,
    totalCost: 2200,
    totalSalaryCost: 0,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: null,
    categories: [trainingCategories[3]],
    description:
      "Intensive workshop on structuring compelling presentations, managing nerves, and adapting messages to different audiences.",
    objectives:
      "Participants will be able to deliver clear, confident, and engaging presentations in any business context.",
    participantCount: 0,
    expiredParticipantCount: 0,
    groupNames: [],
    participantAvatars: [],
    instructorAvatars: [],
    publishedAsFreeCourse: false,
    isSessionsRequired: false,
    isModulesRequired: false,
    knowledgeTestRequired: false,
    courseValidityEnabled: false,
    classes: [],
  },
  {
    id: "trn-007",
    name: "Data Analysis with Python",
    code: "ENG-150",
    status: "draft",
    type: "external",
    externalProvider: "Coursera",
    isMandatory: false,
    catalog: false,
    year: 2026,
    totalDuration: 20,
    totalCost: 600,
    totalSalaryCost: 0,
    totalSubsidizedCost: 0,
    subsidized: false,
    validFor: null,
    categories: [trainingCategories[1]],
    description:
      "Hands-on course covering pandas, matplotlib, and scikit-learn for data wrangling and exploratory analysis.",
    objectives:
      "Participants will perform end-to-end data analysis tasks using Python and communicate findings visually.",
    participantCount: 0,
    expiredParticipantCount: 0,
    groupNames: [],
    participantAvatars: [],
    instructorAvatars: [],
    publishedAsFreeCourse: false,
    isSessionsRequired: false,
    isModulesRequired: true,
    knowledgeTestRequired: true,
    courseValidityEnabled: false,
    classes: [],
  },
]

export const trainingParticipants: TrainingParticipant[] = [
  // trn-001: Management Fundamentals
  {
    id: "tp-001",
    trainingId: "trn-001",
    classId: "cls-001a",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    status: "completed",
    certificateCount: 1,
    sessionsAttended: 4,
    sessionsTotal: 4,
    attendancePercentage: 100,
    completionDate: "2026-02-28",
    dueDate: "2027-02-28",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-002",
    trainingId: "trn-001",
    classId: "cls-001a",
    employeeId: "emp-004",
    employeeName: "Bernat Puig",
    employeeAvatar: avatarFor("emp-004"),
    status: "completed",
    certificateCount: 1,
    sessionsAttended: 4,
    sessionsTotal: 4,
    attendancePercentage: 100,
    completionDate: "2026-02-28",
    dueDate: "2027-02-28",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-003",
    trainingId: "trn-001",
    classId: "cls-001a",
    employeeId: "emp-005",
    employeeName: "Carmen López",
    employeeAvatar: avatarFor("emp-005"),
    status: "in_progress",
    certificateCount: 0,
    sessionsAttended: 2,
    sessionsTotal: 4,
    attendancePercentage: 50,
    completionDate: null,
    dueDate: "2026-04-25",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-004",
    trainingId: "trn-001",
    classId: "cls-001b",
    employeeId: "emp-006",
    employeeName: "Dídac Mas",
    employeeAvatar: avatarFor("emp-006"),
    status: "not_started",
    certificateCount: 0,
    sessionsAttended: 0,
    sessionsTotal: 4,
    attendancePercentage: 0,
    completionDate: null,
    dueDate: "2026-06-30",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-005",
    trainingId: "trn-001",
    classId: "cls-001b",
    employeeId: "emp-007",
    employeeName: "Elena Ferrer",
    employeeAvatar: avatarFor("emp-007"),
    status: "not_started",
    certificateCount: 0,
    sessionsAttended: 0,
    sessionsTotal: 4,
    attendancePercentage: 0,
    completionDate: null,
    dueDate: "2026-06-30",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  // trn-002: GDPR
  {
    id: "tp-006",
    trainingId: "trn-002",
    classId: "cls-002a",
    employeeId: "emp-001",
    employeeName: "Javier Molina",
    employeeAvatar: avatarFor("emp-001"),
    status: "completed",
    certificateCount: 1,
    sessionsAttended: 1,
    sessionsTotal: 1,
    attendancePercentage: 100,
    completionDate: "2026-03-03",
    dueDate: "2027-03-03",
    knowledgeTestPassed: true,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-007",
    trainingId: "trn-002",
    classId: "cls-002a",
    employeeId: "emp-002",
    employeeName: "Laura Soler",
    employeeAvatar: avatarFor("emp-002"),
    status: "completed",
    certificateCount: 0,
    sessionsAttended: 1,
    sessionsTotal: 1,
    attendancePercentage: 100,
    completionDate: "2026-03-03",
    dueDate: "2027-03-03",
    knowledgeTestPassed: false,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-008",
    trainingId: "trn-002",
    classId: "cls-002a",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    status: "expired",
    certificateCount: 1,
    sessionsAttended: 1,
    sessionsTotal: 1,
    attendancePercentage: 100,
    completionDate: "2025-03-01",
    dueDate: "2026-03-01",
    knowledgeTestPassed: true,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-009",
    trainingId: "trn-002",
    classId: "cls-002a",
    employeeId: "emp-004",
    employeeName: "Bernat Puig",
    employeeAvatar: avatarFor("emp-004"),
    status: "expired",
    certificateCount: 1,
    sessionsAttended: 1,
    sessionsTotal: 1,
    attendancePercentage: 100,
    completionDate: "2025-03-01",
    dueDate: "2026-03-01",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  {
    id: "tp-010",
    trainingId: "trn-002",
    classId: "cls-002a",
    employeeId: "emp-005",
    employeeName: "Carmen López",
    employeeAvatar: avatarFor("emp-005"),
    status: "expired",
    certificateCount: 0,
    sessionsAttended: 1,
    sessionsTotal: 1,
    attendancePercentage: 100,
    completionDate: "2025-03-01",
    dueDate: "2026-03-01",
    knowledgeTestPassed: null,
    completedModules: 0,
    totalModules: 0,
  },
  // trn-003: React Advanced Patterns (modules-based)
  {
    id: "tp-011",
    trainingId: "trn-003",
    classId: "cls-003a",
    employeeId: "emp-006",
    employeeName: "Dídac Mas",
    employeeAvatar: avatarFor("emp-006"),
    status: "in_progress",
    certificateCount: 0,
    sessionsAttended: 0,
    sessionsTotal: 0,
    attendancePercentage: 0,
    completionDate: null,
    dueDate: null,
    knowledgeTestPassed: null,
    completedModules: 7,
    totalModules: 12,
  },
  {
    id: "tp-012",
    trainingId: "trn-003",
    classId: "cls-003a",
    employeeId: "emp-007",
    employeeName: "Elena Ferrer",
    employeeAvatar: avatarFor("emp-007"),
    status: "completed",
    certificateCount: 1,
    sessionsAttended: 0,
    sessionsTotal: 0,
    attendancePercentage: 0,
    completionDate: "2026-03-10",
    dueDate: null,
    knowledgeTestPassed: null,
    completedModules: 12,
    totalModules: 12,
  },
]

export function findTraining(id: string): Training | undefined {
  return trainings.find((t) => t.id === id)
}

export function participantsForTraining(trainingId: string): TrainingParticipant[] {
  return trainingParticipants.filter((p) => p.trainingId === trainingId)
}

export { avatarFor }
