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

export const FIRST_NAMES_MOCK = [
  "Dani",
  "Desirée",
  "Eliseo",
  "Arnau",
  "Carlos",
  "Lilian",
  "Andrea",
  "Mario",
  "Nik",
  "René",
  "Sergio",
  "Saúl",
]

export const SURNAMES_MOCK = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
]

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

export const DEPARTMENTS_MOCK = ["Engineering", "Product", "Design", "Marketing"] as const
export const YEARS_OF_EXPERIENCIE_MOCK = [
  8, 12, 4, 15, 7, 3, 11, 6, 13, 2, 9, 14, 5, 10, 1, 8, 13, 4, 11, 6,
]
export const START_DATE_MOCK = Array.from({ length: 20 }, (_, i) => new Date(2025, 6, 30 + i))

export const PROJECTS_MOCK = ["Project A", "Project B", "Project C", "Project D"]
export const PERFORMANCE_SCORE_MOCK = [
  85, 92, 78, 95, 88, 73, 91, 82, 94, 77, 89, 96, 81, 87, 93, 76, 90, 84, 97, 80,
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
export const CERTIFICATIONS_MOCK = ["AWS, Google Cloud", "Azure, MongoDB", "Kubernetes, Docker"]

export const LANGUAGES_MOCK = ["English, Spanish", "English, French, German", "English, Mandarin"]

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
    const department = getMockValue(DEPARTMENTS_MOCK, index)
    const name = `${getMockValue(FIRST_NAMES_MOCK, index)} ${getMockValue(SURNAMES_MOCK, index)}`
    const email = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`
    return {
      index,
      id: `user-${index + 1}`,
      name,
      email,
      role: getMockValue(ROLES_MOCK, index),
      department,
      status: getMockValue(STATUS_MOCK, index),
      isStarred: index % 3 === 0,
      manager: getMockValue(MANAGERS_MOCK, index),
      image: getMockValue(IMAGE_MOCK, index),
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
export const IMAGE_MOCK = [
  "/avatars/person01.jpg",
  "/avatars/person02.jpg",
  "/avatars/person03.jpg",
  "/avatars/person04.jpg",
  "/avatars/person05.jpg",
  "/avatars/person06.jpg",
  "/avatars/person07.jpg",
  "/avatars/person08.jpg",
]

export const MANAGERS_MOCK = [
  "John Doe",
  "Jane Smith",
  "Michael Brown",
  "Emily Johnson",
  "David Lee",
]
