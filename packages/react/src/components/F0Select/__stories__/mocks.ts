import { createDataSourceDefinition, FiltersState } from "@/hooks/datasource"
import {
  DEPARTMENTS_MOCK,
  FIRST_NAMES_MOCK,
  getMockValue,
  MOCK_ICONS,
  ROLES_MOCK,
  SURNAMES_MOCK,
} from "@/mocks"

export const mockItems = Array.from({ length: 1000 }, (_, i) => ({
  value: `option-${i}`,
  label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  icon: getMockValue(MOCK_ICONS, i),
  role: getMockValue(ROLES_MOCK, i),
  department: getMockValue(DEPARTMENTS_MOCK, i),
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
        setTimeout(
          () => {
            const pageSize = pagination.perPage ?? 10
            const cursor = "cursor" in pagination ? pagination.cursor : null
            const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

            // First apply filters
            let results = applyFilters(mockItems, filters)

            // Then apply search
            if (search) {
              results = results.filter(
                (item) =>
                  item.label.toLowerCase().includes(search.toLowerCase()) ||
                  item.description.toLowerCase().includes(search.toLowerCase())
              )
            }

            const paginatedResults = results.slice(
              cursor ? Number(cursor) : 0,
              nextCursor
            )

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
          500 + Math.random() * 300
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
            results = results.filter((item) =>
              item.label.toLowerCase().includes(search.toLowerCase())
            )
          }

          const res = {
            records: results,
          }
          resolve(res)
        }, 100)
      })
    },
  },
})
