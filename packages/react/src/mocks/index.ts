import { NewColor } from "@/components/tags/F0TagDot"
import {
  Ai,
  Alert,
  Appearance,
  Circle,
  Delete,
  Desktop,
  Pencil,
  Plus,
  Star,
  Table,
} from "@/icons/app"

import { FAKE_MANAGERS, FAKE_PEOPLE, getFakePerson } from "./people"

// Re-export the canonical roster so existing imports can reach it from @/mocks.
export * from "./people"

export const MOCK_ICONS = [
  Pencil,
  Plus,
  Table,
  Ai,
  Delete,
  Star,
  Alert,
  Desktop,
  Appearance,
  Circle,
]

export const MOCK_EMOJIS = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
]

// Derived from the canonical roster so names stay consistent everywhere.
export const FIRST_NAMES_MOCK = FAKE_PEOPLE.map((person) => person.firstName)

export const SURNAMES_MOCK = FAKE_PEOPLE.map((person) => person.lastName)

export const ROLES_MOCK = [
  "Senior Engineer",
  "Product Manager",
  "Designer",
  "Marketing Lead",
  "Software Engineer",
]

export const COMPANY_NAMES_MOCK = [
  "Factorial",
  "Dazlog",
  "Acme Corp",
  "Example Inc",
  "Test de verdad",
]
export const STATUS_MOCK = ["active", "inactive", "active", "active", "active"]

export const SALARY_MOCK = [
  100000,
  80000,
  90000,
  undefined,
  120000,
  95000,
  85000,
  110000,
  undefined,
  75000,
  130000,
  92000,
  88000,
  undefined,
  115000,
  105000,
  82000,
  98000,
  undefined,
  125000,
  78000,
  108000,
  94000,
  undefined,
  135000,
]

export const DEPARTMENTS_MOCK = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
] as const
export const YEARS_OF_EXPERIENCIE_MOCK = [
  8, 12, 4, 15, 7, 3, 11, 6, 13, 2, 9, 14, 5, 10, 1, 8, 13, 4, 11, 6,
]
export const START_DATE_MOCK = Array.from(
  { length: 20 },
  (_, i) => new Date(2025, 6, 30 + i)
)

export const PROJECTS_MOCK = [
  "Project A",
  "Project B",
  "Project C",
  "Project D",
]
export const PERFORMANCE_SCORE_MOCK = [
  85, 92, 78, 95, 88, 73, 91, 82, 94, 77, 89, 96, 81, 87, 93, 76, 90, 84, 97,
  80,
]

export const DOT_TAG_COLORS_MOCK: NewColor[] = [
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
]

export const PERFORMANCE_LITERAL_MOCK = [
  "Exceptional",
  "Above Average",
  "Average",
  "Below Average",
  "Needs Improvement",
]

export const TEAMS_MOCK = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]
export const CERTIFICATIONS_MOCK = [
  "AWS, Google Cloud",
  "Azure, MongoDB",
  "Kubernetes, Docker",
]

export const LANGUAGES_MOCK = [
  "English, Spanish",
  "English, French, German",
  "English, Mandarin",
]

export const EDUCATION_MOCK = ["Ph.D.", "Master's", "Bachelor's", "Associate's"]

export const getMockValue = <T>(mock: readonly T[], index: number): T => {
  return mock[index % mock.length]
}

export type MockUser = {
  index: number
  id: string
  name: string
  email: string
  role: string
  department: (typeof DEPARTMENTS_MOCK)[number]
  status: string
  isStarred: boolean
  manager: string
  image: string
  salary: number | undefined
  joinedAt: Date
  canBeSelected: boolean
  permissions: {
    read?: boolean
    write?: boolean
    delete: boolean
  }
  children?: MockUser[]
  detailed?: boolean
}

export const generateMockUsers = (count: number): MockUser[] => {
  return Array.from({ length: count }).map((_, index) => {
    // Each index maps to a stable roster person: same name/email/avatar/manager.
    const person = getFakePerson(index)
    const manager = person.managerId
      ? FAKE_PEOPLE.find((candidate) => candidate.id === person.managerId)
      : undefined
    return {
      index,
      id: `user-${index + 1}`,
      name: person.fullName,
      email: person.email,
      role: person.jobTitle,
      department: person.department,
      status: getMockValue(STATUS_MOCK, index),
      isStarred: index % 3 === 0,
      manager: (manager ?? FAKE_MANAGERS[0]).fullName,
      image: person.image,
      href: `/users/user-${index + 1}`,
      salary: getMockValue(SALARY_MOCK, index),
      joinedAt: getMockValue(START_DATE_MOCK, index),
      canBeSelected: index < 1,
      permissions: {
        read: index % 2 === 0,
        write: index % 3 === 0,
        delete: index % 4 === 0,
      },
    }
  })
}

// Avatar paths and manager names, derived from the canonical roster.
export const IMAGE_MOCK = FAKE_PEOPLE.slice(0, 8).map((person) => person.image)

export const MANAGERS_MOCK = FAKE_MANAGERS.map((person) => person.fullName)
