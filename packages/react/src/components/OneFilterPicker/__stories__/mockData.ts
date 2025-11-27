import {
  createDataSourceDefinition,
  type PaginatedFetchOptions,
} from "@/hooks/datasource"
import { InFilterOptions } from "../filterTypes/InFilter/types"
import { FiltersDefinition, PresetsDefinition } from "../types"

export const filterDefinition: FiltersDefinition = {
  date: {
    type: "date",
    label: "Date",
    options: {},
  },
  dateRange: {
    type: "date",
    label: "Date Range",
    options: {
      mode: "range",
    },
  },
  dateWeek: {
    type: "date",
    label: "Date Week",
    options: {
      view: "week",
    },
  },
  dateRangeWeek: {
    type: "date",
    label: "Date Range Week",
    options: {
      mode: "range",
      view: "week",
    },
  },
  dateMonth: {
    type: "date",
    label: "Date Month",
    options: {
      view: "month",
    },
  },
  dateMonthRange: {
    type: "date",
    label: "Date Month Range",
    options: {
      view: "month",
      mode: "range",
    },
  },
  dateQuarter: {
    type: "date",
    label: "Date Quarter",
    options: {
      view: "quarter",
    },
  },
  dateHalfYear: {
    type: "date",
    label: "Date Half Year",
    options: {
      view: "halfyear",
    },
  },
  dateYear: {
    type: "date",
    label: "Date Year",
    options: {
      view: "year",
    },
  },
  department: {
    type: "in",
    label: "Department",
    options: {
      options: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
          {
            value: "engineering",
            label: "Engineering",
          },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "hr", label: "Human Resources" },
          { value: "finance", label: "Finance" },
        ]
      },
    },
  },
  name: {
    type: "search",
    label: "Employee name",
  },
  manager: {
    type: "in",
    label: "Manager",
    options: {
      options: [
        { value: "alice", label: "Alice Johnson" },
        { value: "bob", label: "Bob Smith" },
        { value: "carol", label: "Carol Williams" },
        { value: "dave", label: "Dave Brown" },
      ],
    },
  },
  location: {
    type: "in",
    label: "Office location",
    options: {
      options: [
        { value: "london", label: "London" },
        { value: "new_york", label: "New York" },
        { value: "tokyo", label: "Tokyo" },
        { value: "remote", label: "Remote" },
      ],
    },
  },
  role: {
    type: "in",
    label: "Role",
    options: {
      options: [
        { value: "engineer", label: "Software Engineer" },
        { value: "designer", label: "Product Designer" },
        { value: "manager", label: "Product Manager" },
        { value: "analyst", label: "Data Analyst" },
        { value: "marketer", label: "Marketing Specialist" },
        { value: "sales", label: "Sales Representative" },
        { value: "hr", label: "Human Resources Specialist" },
        { value: "finance", label: "Financial Analyst" },
        { value: "customer_support", label: "Customer Support Specialist" },
        { value: "legal", label: "Legal Counsel" },
        { value: "operations", label: "Operations Manager" },
        { value: "research", label: "Research Scientist" },
        { value: "product", label: "Product Manager" },
        { value: "security", label: "Security Specialist" },
        { value: "other", label: "Other" },
      ],
    },
  },
  salary: {
    type: "number",
    label: "Salary",
    options: {
      modes: ["range", "single"],
      min: 0,
      openCloseToggle: true,
    },
  },
}

// Define sample presets for use in stories
export const samplePresets: PresetsDefinition<typeof filterDefinition> = [
  {
    label: "Engineering Team",
    filter: {
      department: ["engineering"],
      role: ["engineer", "manager"],
    },
  },
  {
    label: "Remote Workers",
    filter: {
      location: ["remote"],
    },
  },
  {
    label: "Alice's Team",
    filter: {
      manager: ["alice"],
    },
  },
]

// Additive presets that merge with existing filters instead of replacing them
export const additivePresets: PresetsDefinition<typeof filterDefinition> = [
  {
    label: "London Office",
    filter: {
      location: ["london"],
    },
    mode: "additive",
  },
  {
    label: "New York Office",
    filter: {
      location: ["new_york"],
    },
    mode: "additive",
  },
  {
    label: "Remote",
    filter: {
      location: ["remote"],
    },
    mode: "additive",
  },
]

export const generateCountries = () => {
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
    { value: "br", label: "Brazil" },
    { value: "ar", label: "Argentina" },
    { value: "uk", label: "United Kingdom" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "it", label: "Italy" },
    { value: "es", label: "Spain" },
    { value: "pt", label: "Portugal" },
    { value: "ru", label: "Russia" },
    { value: "cn", label: "China" },
    { value: "jp", label: "Japan" },
    { value: "kr", label: "South Korea" },
    { value: "in", label: "India" },
    { value: "au", label: "Australia" },
    { value: "nz", label: "New Zealand" },
    { value: "za", label: "South Africa" },
    { value: "eg", label: "Egypt" },
    { value: "ng", label: "Nigeria" },
    { value: "ke", label: "Kenya" },
    { value: "sa", label: "Saudi Arabia" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "il", label: "Israel" },
    { value: "tr", label: "Turkey" },
    { value: "th", label: "Thailand" },
    { value: "vn", label: "Vietnam" },
    { value: "my", label: "Malaysia" },
    { value: "sg", label: "Singapore" },
    { value: "id", label: "Indonesia" },
    { value: "ph", label: "Philippines" },
    { value: "se", label: "Sweden" },
    { value: "no", label: "Norway" },
    { value: "dk", label: "Denmark" },
    { value: "fi", label: "Finland" },
    { value: "nl", label: "Netherlands" },
    { value: "be", label: "Belgium" },
    { value: "ch", label: "Switzerland" },
    { value: "at", label: "Austria" },
    { value: "gr", label: "Greece" },
    { value: "pl", label: "Poland" },
    { value: "cz", label: "Czech Republic" },
    { value: "hu", label: "Hungary" },
    { value: "ro", label: "Romania" },
    { value: "bg", label: "Bulgaria" },
    { value: "hr", label: "Croatia" },
    { value: "rs", label: "Serbia" },
    { value: "ua", label: "Ukraine" },
  ]
  return countries
}

export const getPresetMock = (itemsCount: boolean = false) => {
  return samplePresets.map((preset, index) => ({
    ...preset,
    itemsCount: itemsCount ? () => index * 12 : undefined,
  }))
}

// Mock data for source-based pagination
const generateMockUsers = (count: number) => {
  const users = []
  for (let i = 0; i < count; i++) {
    users.push({
      id: `user-${i}`,
      name: `User ${i}`,
      email: `user${i}@example.com`,
    })
  }
  return users
}

const DataSourceFilterOptions: InFilterOptions<
  string,
  { id: string; name: string; email: string }
> = {
  source: createDataSourceDefinition({
    dataAdapter: {
      fetchData: async (options: PaginatedFetchOptions<FiltersDefinition>) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        const allUsers = generateMockUsers(100) // 100 total users
        let filteredUsers = allUsers

        // Apply search filter
        if (options.search) {
          const searchTerm = options.search.toLowerCase()
          filteredUsers = allUsers.filter(
            (user) =>
              user.name.toLowerCase().includes(searchTerm) ||
              user.email.toLowerCase().includes(searchTerm)
          )
        }

        // Apply pagination
        const perPage = options.pagination?.perPage || 20
        const cursor = options.pagination?.cursor
          ? parseInt(options.pagination.cursor)
          : 0
        const startIndex = cursor
        const endIndex = startIndex + perPage

        const paginatedUsers = filteredUsers.slice(startIndex, endIndex)
        const hasMore = endIndex < filteredUsers.length
        const nextCursor = hasMore ? endIndex.toString() : null

        return {
          records: paginatedUsers,
          total: filteredUsers.length,
          perPage,
          type: "infinite-scroll" as const,
          cursor: nextCursor,
          hasMore,
        }
      },
      paginationType: "infinite-scroll" as const,
      perPage: 20,
    },
    search: {
      enabled: true,
      sync: true,
    },
  }),
  mapOptions: (user: { id: string; name: string; email: string }) => ({
    value: user.id,
    label: user.name,
  }),
}

// Create a mock data source with pagination
export const sourceBasedDefinition: FiltersDefinition = {
  users: {
    type: "in",
    label: "Users (Paginated)",
    options: DataSourceFilterOptions as unknown as InFilterOptions<string>,
  },
}
