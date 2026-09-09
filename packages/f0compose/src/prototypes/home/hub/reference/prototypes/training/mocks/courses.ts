/**
 * Mock data for the Training module — modelled after the real Factorial
 * Training course catalog (course name, internal code, participants, validity,
 * catalog visibility, status, requirement, categories, axes, competencies).
 *
 * `CURRENT_USER_ID` is the signed-in admin. The "My courses" view filters to
 * courses they own (`ownerId`).
 */

export type CourseStatus = "published" | "draft"
export type CourseRequirement = "mandatory" | "not-mandatory"

export type Course = {
  id: string
  name: string
  /** Internal reference code, or null when none is set. */
  internalCode: string | null
  /** Number of enrolled participants. */
  participants: number
  /** People whose course validity has expired. */
  validityExpired: number
  /** Whether the course is shown on the company catalog. */
  onCatalog: boolean
  status: CourseStatus
  requirement: CourseRequirement
  /** Catalog categories (empty in the reference data). */
  categories: string[]
  /** Development axes the course maps to (empty in the reference data). */
  axes: string[]
  /** Competencies the course develops (rendered as a tag list). */
  competencies: string[]
  /** Author — "Created by me" filters to courses owned by the current user. */
  ownerId: string
  /** Whether the current user is enrolled — "Assigned to me" filters on this. */
  assignedToMe: boolean
}

/**
 * The signed-in user. "Created by me" filters to courses they own (`ownerId`);
 * "Assigned to me" filters to courses they're enrolled in (`assignedToMe`).
 */
export const CURRENT_USER_ID = "emp-001"

export const courses: Course[] = [
  {
    id: "crs-iso9001",
    name: "Fundamentos de la gestión de calidad con ISO 9001",
    internalCode: "ISO9001-2026",
    participants: 22,
    validityExpired: 0,
    onCatalog: true,
    status: "published",
    requirement: "mandatory",
    categories: [],
    axes: [],
    competencies: ["Gestión de cumplimiento."],
    ownerId: "emp-001",
    assignedToMe: true,
  },
  {
    id: "crs-merchandising",
    name: "Merchandising visual y organización de tiendas",
    internalCode: "40001",
    participants: 21,
    validityExpired: 0,
    onCatalog: true,
    status: "published",
    requirement: "not-mandatory",
    categories: [],
    axes: [],
    competencies: [
      "Creatividad",
      "Pensamiento estratégico",
      "Orientación al cliente",
    ],
    ownerId: "emp-003",
    assignedToMe: true,
  },
  {
    id: "crs-conflictos",
    name: "Resolución de conflictos y dinámicas de equipo",
    internalCode: "60001",
    participants: 21,
    validityExpired: 0,
    onCatalog: true,
    status: "published",
    requirement: "not-mandatory",
    categories: [],
    axes: [],
    competencies: [
      "Liderazgo de equipos",
      "Comunicación efectiva",
      "Gestión de equipos",
    ],
    ownerId: "emp-001",
    assignedToMe: false,
  },
  {
    id: "crs-onboarding",
    name: "Onboarding: bienvenida y cultura de empresa",
    internalCode: "ONB-2026",
    participants: 48,
    validityExpired: 2,
    onCatalog: true,
    status: "published",
    requirement: "mandatory",
    categories: [],
    axes: [],
    competencies: ["Cultura de empresa", "Comunicación efectiva"],
    ownerId: "emp-002",
    assignedToMe: true,
  },
  {
    id: "crs-excel",
    name: "Excel avanzado para análisis de datos",
    internalCode: "EXC-2026",
    participants: 15,
    validityExpired: 0,
    onCatalog: true,
    status: "draft",
    requirement: "not-mandatory",
    categories: [],
    axes: [],
    competencies: ["Análisis de datos", "Productividad"],
    ownerId: "emp-001",
    assignedToMe: false,
  },
  {
    id: "crs-gdpr",
    name: "Protección de datos y RGPD en el puesto de trabajo",
    internalCode: "RGPD-2026",
    participants: 33,
    validityExpired: 5,
    onCatalog: true,
    status: "published",
    requirement: "mandatory",
    categories: [],
    axes: [],
    competencies: ["Gestión de cumplimiento."],
    ownerId: "emp-004",
    assignedToMe: false,
  },
]
