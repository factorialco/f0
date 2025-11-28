import { createDataSourceDefinition, FiltersState } from "@/hooks/datasource"

// Departments/Teams
const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Customer Success",
  "Finance",
  "HR",
  "Operations",
  "Legal",
] as const

// Job titles by department
const JOB_TITLES: Record<string, string[]> = {
  Engineering: [
    "Software Engineer",
    "Senior Software Engineer",
    "Staff Engineer",
    "Engineering Manager",
    "Tech Lead",
    "DevOps Engineer",
    "QA Engineer",
  ],
  Product: [
    "Product Manager",
    "Senior Product Manager",
    "Product Owner",
    "Product Analyst",
  ],
  Design: [
    "Product Designer",
    "Senior Product Designer",
    "UX Researcher",
    "Design Lead",
  ],
  Marketing: [
    "Marketing Manager",
    "Content Specialist",
    "Growth Manager",
    "Brand Designer",
  ],
  Sales: [
    "Account Executive",
    "Sales Manager",
    "Sales Development Rep",
    "Enterprise Sales",
  ],
  "Customer Success": [
    "Customer Success Manager",
    "Support Specialist",
    "Implementation Manager",
  ],
  Finance: ["Financial Analyst", "Accountant", "Finance Manager", "Controller"],
  HR: ["HR Manager", "Recruiter", "People Partner", "Talent Acquisition"],
  Operations: [
    "Operations Manager",
    "Project Manager",
    "Business Analyst",
    "Coordinator",
  ],
  Legal: ["Legal Counsel", "Compliance Officer", "Contract Manager"],
}

// Office locations
const OFFICES = [
  "Barcelona HQ",
  "Madrid",
  "London",
  "New York",
  "San Francisco",
  "Berlin",
  "Remote",
] as const

// Legal entities
const LEGAL_ENTITIES = [
  "Factorial HR SL",
  "Factorial Inc",
  "Factorial UK Ltd",
  "Factorial GmbH",
] as const

// Extended name lists for variety
const FIRST_NAMES = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Oliver",
  "Isabella",
  "Lucas",
  "Sophia",
  "Mason",
  "Mia",
  "Ethan",
  "Charlotte",
  "Aiden",
  "Amelia",
  "Caden",
  "Harper",
  "Grayson",
  "Evelyn",
  "Jackson",
  "Aria",
  "Sebastian",
  "Scarlett",
  "Mateo",
  "Grace",
  "Daniel",
  "Chloe",
  "Michael",
  "Victoria",
  "Henry",
  "Riley",
  "Alexander",
  "Zoey",
  "William",
  "Lily",
  "Benjamin",
  "Luna",
  "James",
  "Layla",
  "Elijah",
  "Penelope",
  "Leo",
  "Camila",
  "Julian",
  "Hannah",
  "David",
  "Nora",
  "Gabriel",
  "Stella",
  "Samuel",
  "Zoe",
  "Carlos",
  "María",
  "Pablo",
  "Lucía",
  "Diego",
  "Martina",
  "Alejandro",
  "Valentina",
  "Adrián",
  "Paula",
  "Hugo",
  "Alba",
  "Marc",
  "Carla",
  "Ivan",
  "Elena",
  "Arnau",
  "Clara",
  "Pol",
  "Júlia",
  "Jan",
  "Laia",
  "Max",
  "Anna",
]

const LAST_NAMES = [
  "García",
  "Rodríguez",
  "Martínez",
  "López",
  "González",
  "Hernández",
  "Pérez",
  "Sánchez",
  "Ramírez",
  "Torres",
  "Flores",
  "Rivera",
  "Gómez",
  "Díaz",
  "Reyes",
  "Cruz",
  "Morales",
  "Ortiz",
  "Gutiérrez",
  "Chávez",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Robinson",
  "Clark",
  "Lewis",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "King",
  "Wright",
  "Scott",
  "Green",
  "Baker",
  "Adams",
  "Müller",
  "Schmidt",
  "Schneider",
  "Fischer",
  "Weber",
  "Meyer",
  "Wagner",
  "Becker",
  "Schulz",
  "Hoffmann",
]

// Seeded random for consistent data
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

/**
 * Generate employee data with consistent seeding
 */
const generateEmployee = (id: number) => {
  const seed = id * 7919 // Prime number for better distribution

  const firstNameIndex = Math.floor(seededRandom(seed) * FIRST_NAMES.length)
  const lastNameIndex = Math.floor(seededRandom(seed + 1) * LAST_NAMES.length)
  const departmentIndex = Math.floor(
    seededRandom(seed + 2) * DEPARTMENTS.length
  )
  const officeIndex = Math.floor(seededRandom(seed + 3) * OFFICES.length)
  const entityIndex = Math.floor(seededRandom(seed + 4) * LEGAL_ENTITIES.length)

  const firstName = FIRST_NAMES[firstNameIndex]
  const lastName = LAST_NAMES[lastNameIndex]
  const department = DEPARTMENTS[departmentIndex]
  const titles = JOB_TITLES[department]
  const titleIndex = Math.floor(seededRandom(seed + 5) * titles.length)

  return {
    id,
    value: String(id),
    firstName,
    lastName,
    label: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@factorial.co`,
    avatar: {
      type: "person" as const,
      firstName,
      lastName,
    },
    department,
    jobTitle: titles[titleIndex],
    office: OFFICES[officeIndex],
    legalEntity: LEGAL_ENTITIES[entityIndex],
    hireDate: new Date(
      2018 + Math.floor(seededRandom(seed + 6) * 6),
      Math.floor(seededRandom(seed + 7) * 12),
      1 + Math.floor(seededRandom(seed + 8) * 28)
    ).toISOString(),
  }
}

// Total employees in the "database"
const TOTAL_EMPLOYEES = 2000

// Generate all employees (lazy - only on first access)
let _allEmployees: ReturnType<typeof generateEmployee>[] | null = null
const getAllEmployees = () => {
  if (!_allEmployees) {
    _allEmployees = Array.from({ length: TOTAL_EMPLOYEES }, (_, i) =>
      generateEmployee(i + 1)
    )
  }
  return _allEmployees
}

// Filter definitions
export const employeeFiltersDefinition = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS.map((dept) => ({
        value: dept,
        label: dept,
      })),
    },
  },
  office: {
    type: "in" as const,
    label: "Office",
    options: {
      options: OFFICES.map((office) => ({
        value: office,
        label: office,
      })),
    },
  },
  legalEntity: {
    type: "in" as const,
    label: "Legal Entity",
    options: {
      options: LEGAL_ENTITIES.map((entity) => ({
        value: entity,
        label: entity,
      })),
    },
  },
}

type EmployeeFilters = typeof employeeFiltersDefinition

export type Employee = ReturnType<typeof generateEmployee>

/**
 * Apply filters to employee list
 */
const applyFilters = (
  employees: Employee[],
  filters?: FiltersState<EmployeeFilters>
): Employee[] => {
  if (!filters) return employees

  return employees.filter((employee) => {
    if (
      filters.department &&
      Array.isArray(filters.department) &&
      filters.department.length > 0
    ) {
      if (!filters.department.includes(employee.department)) {
        return false
      }
    }

    if (
      filters.office &&
      Array.isArray(filters.office) &&
      filters.office.length > 0
    ) {
      if (!filters.office.includes(employee.office)) {
        return false
      }
    }

    if (
      filters.legalEntity &&
      Array.isArray(filters.legalEntity) &&
      filters.legalEntity.length > 0
    ) {
      if (!filters.legalEntity.includes(employee.legalEntity)) {
        return false
      }
    }

    return true
  })
}

/**
 * Apply search to employee list
 */
const applySearch = (employees: Employee[], search?: string): Employee[] => {
  if (!search) return employees

  const searchLower = search.toLowerCase().trim()
  return employees.filter(
    (employee) =>
      employee.label.toLowerCase().includes(searchLower) ||
      employee.email.toLowerCase().includes(searchLower) ||
      employee.jobTitle.toLowerCase().includes(searchLower) ||
      employee.department.toLowerCase().includes(searchLower)
  )
}

/**
 * Simulate network latency (realistic API response times)
 */
const simulateLatency = (): Promise<void> => {
  // Simulate realistic API latency: 100-300ms
  const latency = 100 + Math.random() * 200
  return new Promise((resolve) => setTimeout(resolve, latency))
}

/**
 * Paginated data source for employees
 * Simulates a real API with cursor-based pagination
 */
export const employeePaginatedSource = createDataSourceDefinition<
  Employee,
  EmployeeFilters
>({
  filters: employeeFiltersDefinition,
  dataAdapter: {
    paginationType: "infinite-scroll",
    fetchData: async (options) => {
      const { search, pagination, filters } = options

      await simulateLatency()

      const pageSize = pagination.perPage ?? 25
      const cursor = "cursor" in pagination ? pagination.cursor : null
      const offset = cursor ? Number(cursor) : 0

      // Get all employees and apply filters/search
      let results = getAllEmployees()
      results = applyFilters(results, filters)
      results = applySearch(results, search)

      // Paginate
      const paginatedResults = results.slice(offset, offset + pageSize)
      const nextOffset = offset + pageSize

      return {
        type: "infinite-scroll" as const,
        cursor: String(nextOffset),
        perPage: pageSize,
        hasMore: nextOffset < results.length,
        records: paginatedResults,
        total: results.length,
      }
    },
  },
})

/**
 * Non-paginated data source (loads all at once, limited to 100)
 */
export const employeeNonPaginatedSource = createDataSourceDefinition<
  Employee,
  EmployeeFilters
>({
  filters: employeeFiltersDefinition,
  dataAdapter: {
    fetchData: async (options) => {
      const { search, filters } = options

      await simulateLatency()

      // Limit to first 100 employees for non-paginated
      let results = getAllEmployees().slice(0, 100)
      results = applyFilters(results, filters)
      results = applySearch(results, search)

      return {
        records: results,
      }
    },
  },
})

/**
 * Helper to get employee by ID (for defaultItem lookups)
 */
export const getEmployeeById = (id: number): Employee | undefined => {
  return getAllEmployees().find((e) => e.id === id)
}

/**
 * Helper to get multiple employees by IDs
 */
export const getEmployeesByIds = (ids: number[]): Employee[] => {
  const employees = getAllEmployees()
  return ids
    .map((id) => employees.find((e) => e.id === id))
    .filter((e): e is Employee => e !== undefined)
}

// ============================================
// Legacy exports for backwards compatibility
// ============================================

export const mockItems = getAllEmployees().map((e) => ({
  value: e.value,
  label: e.label,
  avatar: e.avatar,
  role: e.jobTitle,
  workplace: e.office,
  legalEntity: e.legalEntity,
  description: `${e.jobTitle} - ${e.department}`,
}))

export type MockItem = (typeof mockItems)[number]

export const mockFiltersDefinition = {
  role: {
    type: "in" as const,
    label: "Job Title",
    options: {
      options: [...new Set(mockItems.map((item) => item.role))].map((role) => ({
        value: role,
        label: role,
      })),
    },
  },
  workplace: {
    type: "in" as const,
    label: "Office",
    options: {
      options: [...new Set(mockItems.map((item) => item.workplace))].map(
        (workplace) => ({
          value: workplace,
          label: workplace,
        })
      ),
    },
  },
  legalEntity: {
    type: "in" as const,
    label: "Legal Entity",
    options: {
      options: [...new Set(mockItems.map((item) => item.legalEntity))].map(
        (legalEntity) => ({
          value: legalEntity,
          label: legalEntity,
        })
      ),
    },
  },
}

type MockFilters = typeof mockFiltersDefinition

const applyMockFilters = (
  items: typeof mockItems,
  filters?: FiltersState<MockFilters>
): typeof mockItems => {
  if (!filters) return items

  return items.filter((item) => {
    if (
      filters.role &&
      Array.isArray(filters.role) &&
      filters.role.length > 0
    ) {
      if (!filters.role.includes(item.role)) return false
    }
    if (
      filters.workplace &&
      Array.isArray(filters.workplace) &&
      filters.workplace.length > 0
    ) {
      if (!filters.workplace.includes(item.workplace)) return false
    }
    if (
      filters.legalEntity &&
      Array.isArray(filters.legalEntity) &&
      filters.legalEntity.length > 0
    ) {
      if (!filters.legalEntity.includes(item.legalEntity)) return false
    }
    return true
  })
}

export const mockPaginatedSource = createDataSourceDefinition<
  MockItem,
  MockFilters
>({
  filters: mockFiltersDefinition,
  dataAdapter: {
    paginationType: "infinite-scroll",
    fetchData: async (options) => {
      const { search, pagination, filters } = options

      await simulateLatency()

      const pageSize = pagination.perPage ?? 25
      const cursor = "cursor" in pagination ? pagination.cursor : null
      const offset = cursor ? Number(cursor) : 0

      let results = applyMockFilters(mockItems, filters)

      if (search) {
        const searchLower = search.toLowerCase()
        results = results.filter(
          (item) =>
            item.label.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
        )
      }

      const paginatedResults = results.slice(offset, offset + pageSize)
      const nextOffset = offset + pageSize

      return {
        type: "infinite-scroll" as const,
        cursor: String(nextOffset),
        perPage: pageSize,
        hasMore: nextOffset < results.length,
        records: paginatedResults,
        total: results.length,
      }
    },
  },
})

export const mockNonPaginatedSource = createDataSourceDefinition<
  MockItem,
  MockFilters
>({
  filters: mockFiltersDefinition,
  dataAdapter: {
    fetchData: async (options) => {
      const { search, filters } = options

      await simulateLatency()

      let results = applyMockFilters(mockItems.slice(0, 100), filters)

      if (search) {
        const searchLower = search.toLowerCase()
        results = results.filter((item) =>
          item.label.toLowerCase().includes(searchLower)
        )
      }

      return {
        records: results,
      }
    },
  },
})
