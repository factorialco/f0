import { createDataSourceDefinition, FiltersState } from "@/hooks/datasource"

// Departments/Teams with numeric IDs
const DEPARTMENTS = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Product" },
  { id: 3, name: "Design" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "Sales" },
  { id: 6, name: "Customer Success" },
  { id: 7, name: "Finance" },
  { id: 8, name: "HR" },
  { id: 9, name: "Operations" },
  { id: 10, name: "Legal" },
  { id: 11, name: "IT" },
  { id: 12, name: "Data" },
  { id: 13, name: "Security" },
  { id: 14, name: "Research & Development" },
  { id: 15, name: "Quality Assurance" },
  { id: 16, name: "Facilities" },
  { id: 17, name: "Procurement" },
  { id: 18, name: "Communications" },
  { id: 19, name: "Learning & Development" },
  { id: 20, name: "Business Development" },
  { id: 21, name: "Partnerships" },
  { id: 22, name: "Customer Experience" },
  { id: 23, name: "Technical Support" },
  { id: 24, name: "Analytics" },
  { id: 25, name: "Content" },
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
  IT: [
    "IT Manager",
    "Systems Administrator",
    "Network Engineer",
    "IT Support Specialist",
    "Cloud Engineer",
  ],
  Data: [
    "Data Engineer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "BI Developer",
  ],
  Security: [
    "Security Engineer",
    "Security Analyst",
    "CISO",
    "Penetration Tester",
    "Security Architect",
  ],
  "Research & Development": [
    "R&D Manager",
    "Research Scientist",
    "Innovation Lead",
    "Prototype Engineer",
  ],
  "Quality Assurance": [
    "QA Lead",
    "Test Engineer",
    "Automation Engineer",
    "Quality Manager",
  ],
  Facilities: [
    "Facilities Manager",
    "Office Manager",
    "Maintenance Coordinator",
    "Space Planner",
  ],
  Procurement: [
    "Procurement Manager",
    "Purchasing Specialist",
    "Vendor Manager",
    "Supply Chain Analyst",
  ],
  Communications: [
    "Communications Manager",
    "PR Specialist",
    "Internal Communications Lead",
    "Social Media Manager",
  ],
  "Learning & Development": [
    "L&D Manager",
    "Training Specialist",
    "Instructional Designer",
    "Learning Coordinator",
  ],
  "Business Development": [
    "Business Development Manager",
    "BD Representative",
    "Strategic Partnerships Manager",
    "Growth Specialist",
  ],
  Partnerships: [
    "Partnerships Manager",
    "Partner Success Manager",
    "Alliance Manager",
    "Channel Manager",
  ],
  "Customer Experience": [
    "CX Manager",
    "Customer Insights Analyst",
    "Voice of Customer Lead",
    "Experience Designer",
  ],
  "Technical Support": [
    "Technical Support Manager",
    "Support Engineer",
    "Technical Account Manager",
    "Escalation Specialist",
  ],
  Analytics: [
    "Analytics Manager",
    "Business Intelligence Analyst",
    "Reporting Specialist",
    "Insights Lead",
  ],
  Content: [
    "Content Manager",
    "Copywriter",
    "Content Strategist",
    "Editorial Lead",
    "Video Producer",
  ],
}

// Office locations with numeric IDs
const OFFICES = [
  { id: 101, name: "Barcelona HQ" },
  { id: 102, name: "Madrid" },
  { id: 103, name: "London" },
  { id: 104, name: "New York" },
  { id: 105, name: "San Francisco" },
  { id: 106, name: "Berlin" },
  { id: 107, name: "Remote" },
] as const

// Legal entities with numeric IDs
const LEGAL_ENTITIES = [
  { id: 201, name: "Factorial HR SL" },
  { id: 202, name: "Factorial Inc" },
  { id: 203, name: "Factorial UK Ltd" },
  { id: 204, name: "Factorial GmbH" },
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
  const lastNameIndex1 = Math.floor(seededRandom(seed + 1) * LAST_NAMES.length)
  const lastNameIndex2 = Math.floor(seededRandom(seed + 9) * LAST_NAMES.length)
  const departmentIndex = Math.floor(
    seededRandom(seed + 2) * DEPARTMENTS.length
  )
  const officeIndex = Math.floor(seededRandom(seed + 3) * OFFICES.length)
  const entityIndex = Math.floor(seededRandom(seed + 4) * LEGAL_ENTITIES.length)

  const firstName = FIRST_NAMES[firstNameIndex]
  const lastName1 = LAST_NAMES[lastNameIndex1]
  const lastName2 = LAST_NAMES[lastNameIndex2]
  const lastName = `${lastName1} ${lastName2}`
  const department = DEPARTMENTS[departmentIndex]
  const office = OFFICES[officeIndex]
  const legalEntity = LEGAL_ENTITIES[entityIndex]
  const titles = JOB_TITLES[department.name]
  const titleIndex = Math.floor(seededRandom(seed + 5) * titles.length)

  return {
    id,
    value: String(id),
    firstName,
    lastName,
    label: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName1.toLowerCase()}@factorial.co`,
    avatar: {
      type: "person" as const,
      firstName,
      lastName: lastName1,
    },
    departmentId: department.id,
    departmentName: department.name,
    jobTitle: titles[titleIndex],
    officeId: office.id,
    officeName: office.name,
    legalEntityId: legalEntity.id,
    legalEntityName: legalEntity.name,
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

// Filter definitions - value is numeric ID, label is the display text
export const employeeFiltersDefinition = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS.map((dept) => ({
        value: String(dept.id),
        label: dept.name,
      })),
    },
  },
  office: {
    type: "in" as const,
    label: "Office",
    options: {
      options: OFFICES.map((office) => ({
        value: String(office.id),
        label: office.name,
      })),
    },
  },
  legalEntity: {
    type: "in" as const,
    label: "Legal Entity",
    options: {
      options: LEGAL_ENTITIES.map((entity) => ({
        value: String(entity.id),
        label: entity.name,
      })),
    },
  },
}

type EmployeeFilters = typeof employeeFiltersDefinition

export type Employee = ReturnType<typeof generateEmployee>

/**
 * Apply filters to employee list
 * Filters use string IDs that match the numeric IDs
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
      if (!filters.department.includes(String(employee.departmentId))) {
        return false
      }
    }

    if (
      filters.office &&
      Array.isArray(filters.office) &&
      filters.office.length > 0
    ) {
      if (!filters.office.includes(String(employee.officeId))) {
        return false
      }
    }

    if (
      filters.legalEntity &&
      Array.isArray(filters.legalEntity) &&
      filters.legalEntity.length > 0
    ) {
      if (!filters.legalEntity.includes(String(employee.legalEntityId))) {
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
      employee.departmentName.toLowerCase().includes(searchLower)
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
  roleId: e.jobTitle, // Using job title as ID since we don't have separate IDs for job titles
  workplace: e.officeName,
  workplaceId: e.officeId,
  legalEntity: e.legalEntityName,
  legalEntityId: e.legalEntityId,
  description: `${e.jobTitle} - ${e.departmentName}`,
}))

export type MockItem = (typeof mockItems)[number]

// Create unique office options from OFFICES with numeric IDs
const officeFilterOptions = OFFICES.map((office) => ({
  value: String(office.id),
  label: office.name,
}))

// Create unique legal entity options from LEGAL_ENTITIES with numeric IDs
const legalEntityFilterOptions = LEGAL_ENTITIES.map((entity) => ({
  value: String(entity.id),
  label: entity.name,
}))

// Create unique job title options (using title as both value and label since we don't have IDs for these)
const jobTitleFilterOptions = [
  ...new Set(mockItems.map((item) => item.role)),
].map((role) => ({
  value: role,
  label: role,
}))

export const mockFiltersDefinition = {
  role: {
    type: "in" as const,
    label: "Job Title",
    options: {
      options: jobTitleFilterOptions,
    },
  },
  workplace: {
    type: "in" as const,
    label: "Office",
    options: {
      options: officeFilterOptions,
    },
  },
  legalEntity: {
    type: "in" as const,
    label: "Legal Entity",
    options: {
      options: legalEntityFilterOptions,
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
    // Role filter uses role name as value (no separate ID)
    if (
      filters.role &&
      Array.isArray(filters.role) &&
      filters.role.length > 0
    ) {
      if (!filters.role.includes(item.role)) return false
    }
    // Workplace filter uses numeric ID
    if (
      filters.workplace &&
      Array.isArray(filters.workplace) &&
      filters.workplace.length > 0
    ) {
      if (!filters.workplace.includes(String(item.workplaceId))) return false
    }
    // Legal entity filter uses numeric ID
    if (
      filters.legalEntity &&
      Array.isArray(filters.legalEntity) &&
      filters.legalEntity.length > 0
    ) {
      if (!filters.legalEntity.includes(String(item.legalEntityId)))
        return false
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
