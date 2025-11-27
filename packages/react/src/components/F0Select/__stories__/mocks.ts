import { createDataSourceDefinition, FiltersState } from "@/hooks/datasource"
import { DEPARTMENTS_MOCK, MOCK_ICONS, ROLES_MOCK } from "@/mocks"

// Extended name lists for more variety
const FIRST_NAMES = [
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
  "Emma",
  "Lucas",
  "Sofia",
  "Diego",
  "Isabella",
  "Mateo",
  "Valentina",
  "Sebastian",
  "Camila",
  "Daniel",
  "Victoria",
  "Gabriel",
  "Martina",
  "Pablo",
  "Lucia",
  "Alejandro",
  "Julia",
  "Adrian",
  "Paula",
  "Hugo",
  "Clara",
  "Leo",
  "Alba",
  "Marc",
  "Noa",
  "Ivan",
  "Carla",
  "Alex",
]

const SURNAMES = [
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
  "Walker",
  "Young",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Gomez",
]

/**
 * Generate a unique name using prime number offsets to avoid repetition patterns
 */
const generateUniqueName = (index: number): string => {
  // Use prime numbers to create better distribution
  const firstNameIndex =
    (index * 7 + Math.floor(index / FIRST_NAMES.length)) % FIRST_NAMES.length
  const surnameIndex =
    (index * 11 + Math.floor(index / SURNAMES.length) * 3) % SURNAMES.length
  return `${FIRST_NAMES[firstNameIndex]} ${SURNAMES[surnameIndex]}`
}

export const mockItems = Array.from({ length: 1000 }, (_, i) => ({
  value: `option-${i}`,
  label: generateUniqueName(i),
  icon: MOCK_ICONS[i % MOCK_ICONS.length],
  role: ROLES_MOCK[i % ROLES_MOCK.length],
  department: DEPARTMENTS_MOCK[i % DEPARTMENTS_MOCK.length],
  description: `Description for option ${i}`,
}))

// Get unique roles and departments for filter options
const uniqueRoles = [...new Set(mockItems.map((item) => item.role))]
const uniqueDepartments = [...new Set(mockItems.map((item) => item.department))]

// Filter definitions that actually match the data
export const mockFiltersDefinition = {
  role: {
    type: "in" as const,
    label: "Role",
    options: {
      options: uniqueRoles.map((role) => ({
        value: role,
        label: role,
      })),
    },
  },
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: uniqueDepartments.map((dept) => ({
        value: dept,
        label: dept,
      })),
    },
  },
}

// Type for our filters
type MockFilters = typeof mockFiltersDefinition

/**
 * Helper function to apply filters to the mock data
 */
const applyFilters = (
  items: typeof mockItems,
  filters?: FiltersState<MockFilters>
): typeof mockItems => {
  if (!filters) return items

  return items.filter((item) => {
    // Filter by role
    if (
      filters.role &&
      Array.isArray(filters.role) &&
      filters.role.length > 0
    ) {
      if (!filters.role.includes(item.role)) {
        return false
      }
    }

    // Filter by department
    if (
      filters.department &&
      Array.isArray(filters.department) &&
      filters.department.length > 0
    ) {
      if (!filters.department.includes(item.department)) {
        return false
      }
    }

    return true
  })
}

export type MockItem = (typeof mockItems)[number]

export const mockPaginatedSource = createDataSourceDefinition<
  MockItem,
  MockFilters
>({
  filters: mockFiltersDefinition,
  dataAdapter: {
    paginationType: "infinite-scroll",
    fetchData: (options) => {
      const { search, pagination, filters } = options
      return new Promise((resolve) => {
        // Fast response for fluid experience (50-100ms)
        setTimeout(
          () => {
            const pageSize = pagination.perPage ?? 20
            const cursor = "cursor" in pagination ? pagination.cursor : null
            const startIndex = cursor ? Number(cursor) : 0
            const nextCursor = startIndex + pageSize

            // First apply filters
            let results = applyFilters(mockItems, filters)

            // Then apply search
            if (search) {
              const searchLower = search.toLowerCase()
              results = results.filter(
                (item) =>
                  item.label.toLowerCase().includes(searchLower) ||
                  item.description.toLowerCase().includes(searchLower)
              )
            }

            const paginatedResults = results.slice(startIndex, nextCursor)

            const res = {
              type: "infinite-scroll" as const,
              cursor: String(nextCursor),
              perPage: pageSize,
              hasMore: nextCursor < results.length,
              records: paginatedResults,
              total: results.length,
            }
            resolve(res)
          },
          50 + Math.random() * 50
        )
      })
    },
  },
})

export const mockNonPaginatedSource = createDataSourceDefinition<
  MockItem,
  MockFilters
>({
  filters: mockFiltersDefinition,
  dataAdapter: {
    fetchData: (options) => {
      const { search, filters } = options
      return new Promise((resolve) => {
        setTimeout(() => {
          // First apply filters to first 100 items
          let results = applyFilters(mockItems.slice(0, 100), filters)

          // Then apply search
          if (search) {
            const searchLower = search.toLowerCase()
            results = results.filter((item) =>
              item.label.toLowerCase().includes(searchLower)
            )
          }

          const res = {
            records: results,
          }
          resolve(res)
        }, 50)
      })
    },
  },
})
