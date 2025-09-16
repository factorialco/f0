import { PromiseState } from "@/lib/promise-to-observable"
import { Observable } from "zen-observable-ts"

import { NewColor } from "@/components/tags/F0TagDot"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary.ts"
import { cn } from "@/lib/utils"

import {
  FilterDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker"
import { OneDataCollection, useDataSource } from ".."
import {
  Ai,
  Briefcase,
  Building,
  CheckCircle,
  Delete,
  Download,
  Envelope,
  Pencil,
  Person,
  Star,
  Upload,
} from "../../../icons/app"
import {
  PrimaryActionsDefinition,
  SecondaryActionsDefinition,
  SecondaryActionsItemDefinition,
} from "../actions"
import { GroupingDefinition, GroupingState } from "../grouping"
import { ItemActionsDefinition } from "../item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../navigationFilters/types"
import { SortingsStateMultiple } from "../sortings"
import {
  BaseFetchOptions,
  BaseResponse,
  BulkActionDefinition,
  DataAdapter,
  InfiniteScrollPaginatedResponse,
  OnBulkActionCallback,
  OnSelectItemsCallback,
  PaginatedResponse,
  PaginationType,
  RecordType,
  SelectedItemsState,
} from "../types"
import { Visualization, VisualizationType } from "../visualizations/collection"

export const DEPARTMENTS_MOCK = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
] as const

export const MANAGERS_MOCK = [
  "Eliseo Juan",
  "Arnau Smith",
  "Daniel Johnson",
  "Lilian Williams",
] as const

// Example filter definition
export const filters = {
  search: {
    type: "search",
    label: "Search",
  },
  department: {
    type: "in",
    label: "Department",
    options: {
      options: DEPARTMENTS_MOCK.map((value) => ({ value, label: value })),
    },
  },
} as const

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

// Define presets for the filters
export const filterPresets: PresetsDefinition<typeof filters> = [
  {
    label: "Engineering Team",
    filter: {
      department: ["Engineering"],
    },
  },
  {
    label: "Product Team",
    filter: {
      department: ["Product"],
    },
  },
  {
    label: "Design Team",
    filter: {
      department: ["Design"],
    },
  },
  {
    label: "Marketing Team",
    filter: {
      department: ["Marketing"],
    },
  },
]

export type MockUser = {
  index: number
  id: string
  name: string
  image: (typeof IMAGE_MOCK)[number]
  email: string
  role: string
  department: (typeof DEPARTMENTS_MOCK)[number]
  manager: (typeof MANAGERS_MOCK)[number]
  status: string
  isStarred: boolean
  salary: number | undefined
  joinedAt: Date
  permissions: {
    read?: boolean
    write?: boolean
    delete: boolean
  }
}

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

export const ROLES_MOCK = [
  "Senior Engineer",
  "Product Manager",
  "Designer",
  "Marketing Lead",
  "Software Engineer",
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

export const generateMockUsers = (count: number): MockUser[] => {
  return Array.from({ length: count }).map((_, index) => {
    const department = DEPARTMENTS_MOCK[index % DEPARTMENTS_MOCK.length]
    const name = `${FIRST_NAMES_MOCK[index % FIRST_NAMES_MOCK.length]} ${SURNAMES_MOCK[index % SURNAMES_MOCK.length]}`
    const email = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`
    return {
      index,
      id: `user-${index + 1}`,
      name,
      email,
      image: IMAGE_MOCK[index % IMAGE_MOCK.length],
      role: ROLES_MOCK[index % ROLES_MOCK.length],
      department,
      status: STATUS_MOCK[index % STATUS_MOCK.length],
      manager: MANAGERS_MOCK[index % MANAGERS_MOCK.length],
      isStarred: index % 3 === 0,
      href: `/users/user-${index + 1}`,
      salary: SALARY_MOCK[index % SALARY_MOCK.length],
      joinedAt: START_DATE_MOCK[index % START_DATE_MOCK.length],
      permissions: {
        read: index % 2 === 0,
        write: index % 3 === 0,
        delete: index % 4 === 0,
      },
    }
  })
}

// Mock data
export const mockUsers = generateMockUsers(10)

export const getMockVisualizations = (options?: {
  frozenColumns?: 0 | 1 | 2
}): Record<
  Exclude<VisualizationType, "custom">,
  Visualization<
    MockUser,
    FiltersType,
    typeof sortings,
    SummariesDefinition,
    ItemActionsDefinition<MockUser>,
    NavigationFiltersDefinition,
    GroupingDefinition<MockUser>
  >
> => ({
  table: {
    type: "table",
    options: {
      frozenColumns: options?.frozenColumns,
      columns: [
        {
          label: "Name",
          width: 140,
          render: (item) => ({
            type: "person",
            value: {
              firstName: item.name.split(" ")[0],
              lastName: item.name.split(" ")[1],
            },
          }),
          sorting: "name",
        },
        {
          label: "Email",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department",
          render: (item) => item.department,
          sorting: "department",
        },
        {
          label: "Email 2",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 2",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department 2",
          render: (item) => item.department,
          sorting: "department",
        },
        {
          label: "Email 3",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 3",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department 3",
          render: (item) => item.department,
          sorting: "department",
        },
        {
          label: "Email 4",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 4",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department 4",
          render: (item) => item.department,
          sorting: "department",
        },
        {
          label: "Permissions",
          render: (item) =>
            [
              item.permissions?.read ? "Read" : "",
              item.permissions?.write ? "Write" : "",
              item.permissions?.delete ? "Delete" : "",
            ]
              .filter(Boolean)
              .join(", "),
          sorting: "permissions.read",
        },
      ],
    },
  },
  card: {
    type: "card",
    options: {
      title: (item) => item.name,
      description: (item) => item.role,
      avatar: (item) => ({
        type: "person",
        firstName: item.name.split(" ")[0],
        lastName: item.name.split(" ")[1],
      }),
      image: (item) => item.image,
      cardProperties: [
        {
          label: "Email",
          icon: Envelope,
          render: (item) => item.email,
        },
        {
          label: "Role",
          icon: Briefcase,
          render: (item) => item.role,
        },
        {
          label: "Department",
          icon: Building,
          render: (item) => item.department,
        },
        {
          label: "Teammates",
          icon: Person,
          render: (item) => ({
            type: "avatarList",
            value: {
              avatarList: [
                {
                  type: "person",
                  firstName: item.name,
                  lastName: "Doe",
                  src: "/avatars/person01.jpg",
                },
                {
                  type: "person",
                  firstName: "Dani",
                  lastName: "Moreno",
                  src: "/avatars/person04.jpg",
                },
                {
                  type: "person",
                  firstName: "Sergio",
                  lastName: "Carracedo",
                  src: "/avatars/person05.jpg",
                },
              ],
            },
          }),
        },
        {
          label: "Status",
          icon: CheckCircle,
          render: (item) => ({
            type: "status",
            value: {
              status: item.status === "active" ? "positive" : "critical",
              label: item.status.charAt(0).toUpperCase() + item.status.slice(1),
            },
          }),
        },
      ],
    },
  },
  list: {
    type: "list",
    options: {
      itemDefinition: (item) => ({
        title: item.name,
        description: [item.email, item.role],
        avatar: {
          type: "person",
          firstName: item.name.split(" ")[0],
          lastName: item.name.split(" ")[1],
          badge: {
            type: "module",
            module: "inbox",
            tooltip: "Inbox",
          },
        },
      }),
      fields: [
        {
          label: "Email",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Email 2",
          render: (item) => item.email,
          sorting: "email",
        },
        {
          label: "Role 2",
          render: (item) => item.role,
          sorting: "role",
        },
        {
          label: "Department",
          render: (item) => ({
            type: "dotTag",
            value: {
              color: "yellow",
              label: item.department,
            },
          }),
        },
      ],
    },
  },
  kanban: {
    type: "kanban",
    options: {
      lanes: [
        {
          id: "eng",
          title: "Engineering",
          variant: "info",
        },
        {
          id: "prod",
          title: "Product",
          variant: "neutral",
        },
        {
          id: "design",
          title: "Design",
          variant: "positive",
        },
        {
          id: "other",
          title: "Other",
          variant: "warning",
        },
      ],
      title: (u) => u.name,
      description: (u) => u.role,
      avatar: (u) => ({
        type: "person",
        firstName: u.name.split(" ")[0] ?? "",
        lastName: u.name.split(" ")[1] ?? "",
      }),
      metadata: (u) => [
        { icon: Envelope, property: { type: "text", value: u.email } },
        { icon: Building, property: { type: "text", value: u.department } },
        { icon: Briefcase, property: { type: "text", value: u.role } },
        { icon: Star, property: { type: "text", value: u.id } },
      ],
    },
  },
})
// Example of using the object-based approach (recommended)
export const sortings = {
  name: {
    label: "Name",
  },
  email: {
    label: "Email",
  },
  department: {
    label: "Department",
  },
  role: {
    label: "Role",
  },
  salary: {
    label: "Salary",
  },
  "permissions.read": {
    label: "Read",
  },
  "permissions.write": {
    label: "Write",
  },
  "permissions.delete": {
    label: "Delete",
  },
} as const

// Helper function to filter users based on filters
export const filterUsers = (
  users: MockUser[],
  filterValues: FiltersState<typeof filters>,
  sortingState: SortingsStateMultiple,
  navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>,
  search?: string
) => {
  let filteredUsers = [...users]

  const searchValue = filterValues.search
  if (typeof searchValue === "string") {
    const searchLower = searchValue.toLowerCase()
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
    )
  }

  if (sortingState) {
    sortingState.reverse().forEach(({ field, order }) => {
      filteredUsers = filteredUsers.sort((a, b) => {
        const aValue = a[field as keyof MockUser]
        const bValue = b[field as keyof MockUser]

        // Handle string comparisons
        if (typeof aValue === "string" && typeof bValue === "string") {
          return order === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        }

        // Handle number comparisons
        if (typeof aValue === "number" && typeof bValue === "number") {
          return order === "asc" ? aValue - bValue : bValue - aValue
        }

        // Handle boolean comparisons
        if (typeof aValue === "boolean" && typeof bValue === "boolean") {
          // false comes before true when ascending
          return order === "asc"
            ? aValue === bValue
              ? 0
              : aValue
                ? 1
                : -1
            : aValue === bValue
              ? 0
              : aValue
                ? -1
                : 1
        }

        // Default case: use string representation
        return order === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue))
      })
    })
  }

  // Handle department filter
  const departmentFilterValues = filterValues.department
  if (Array.isArray(departmentFilterValues)) {
    filteredUsers = filteredUsers.filter((user) =>
      departmentFilterValues.some((d) => d === user.department)
    )
  }

  if (search) {
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (navigationFilters) {
    filteredUsers = filteredUsers.filter((user) => {
      return (
        !navigationFilters.date ||
        (navigationFilters.date.value.from <= user.joinedAt &&
          navigationFilters.date.value.to >= user.joinedAt)
      )
    })
  }

  return filteredUsers
}

export const createObservableDataFetch = (delay = 0) => {
  return ({
    filters,
    sortings: sortingsState,
    navigationFilters,
  }: BaseFetchOptions<FiltersType, NavigationFiltersDefinition>) =>
    new Observable<PromiseState<BaseResponse<MockUser>>>((observer) => {
      observer.next({
        loading: true,
        error: null,
        data: null,
      })

      const timeoutId = setTimeout(() => {
        const filteredData = filterUsers(
          mockUsers,
          filters,
          sortingsState,
          navigationFilters
        )

        // Calculate summaries like in createPromiseDataFetch
        const summaries = {
          salary: filteredData.reduce((total, user) => {
            return total + (user.salary || 0)
          }, 0),
          userCount: filteredData.length,
          averageSalary:
            filteredData.filter((user) => user.salary !== undefined).length > 0
              ? filteredData.reduce(
                  (sum, user) => sum + (user.salary || 0),
                  0
                ) /
                filteredData.filter((user) => user.salary !== undefined).length
              : 0,
        }

        observer.next({
          loading: false,
          error: null,
          data: {
            records: filteredData,
            summaries: summaries as unknown as MockUser,
          },
        })
        observer.complete()
      }, delay)

      return () => clearTimeout(timeoutId)
    })
}

export const createPromiseDataFetch = (delay = 500) => {
  return ({
    filters,
    sortings: sortingsState,
    search,
    navigationFilters,
  }: BaseFetchOptions<FiltersType, NavigationFiltersDefinition>) =>
    new Promise<BaseResponse<MockUser>>((resolve) => {
      setTimeout(() => {
        const filteredData = filterUsers(
          mockUsers,
          filters,
          sortingsState,
          navigationFilters,
          search
        )

        const summaries = {
          salary: filteredData.reduce((total, user) => {
            return total + (user.salary || 0)
          }, 0),

          userCount: filteredData.length,

          averageSalary:
            filteredData.filter((user) => user.salary !== undefined).length > 0
              ? filteredData.reduce(
                  (sum, user) => sum + (user.salary || 0),
                  0
                ) /
                filteredData.filter((user) => user.salary !== undefined).length
              : 0,
        }

        resolve({
          records: filteredData,
          summaries: summaries as unknown as (typeof mockUsers)[number],
        })
      }, delay)
    })
}

// Utility functions for data fetching
export type FiltersType = typeof filters

// Example component using useDataSource
export const ExampleComponent = ({
  useObservable = false,
  usePresets = false,
  frozenColumns = 0,
  selectable,
  defaultSelectedItems,
  bulkActions,
  currentGrouping,
  grouping,
  navigationFilters,
  totalItemSummary,
  visualizations,
  fullHeight,
  dataAdapter,
  primaryActions,
  secondaryActions,
  searchBar = false,
}: {
  useObservable?: boolean
  usePresets?: boolean
  frozenColumns?: 0 | 1 | 2
  fullHeight?: boolean
  visualizations?: ReadonlyArray<
    Visualization<
      MockUser,
      FiltersType,
      typeof sortings,
      SummariesDefinition,
      ItemActionsDefinition<MockUser>,
      NavigationFiltersDefinition,
      GroupingDefinition<MockUser>
    >
  >
  dataAdapter?: DataAdapter<MockUser, FiltersType, NavigationFiltersDefinition>
  defaultSelectedItems?: SelectedItemsState
  selectable?: (item: MockUser) => string | number | undefined
  bulkActions?: (
    selectedItems: Parameters<OnBulkActionCallback<MockUser, FiltersType>>[1]
  ) =>
    | {
        primary?: BulkActionDefinition[]
        secondary?: BulkActionDefinition[]
      }
    | { warningMessage: string }
  onSelectItems?: OnSelectItemsCallback<MockUser, FiltersType>
  onBulkAction?: OnBulkActionCallback<MockUser, FiltersType>
  navigationFilters?: NavigationFiltersDefinition
  totalItemSummary?: (totalItems: number) => string
  grouping?: GroupingDefinition<MockUser> | undefined
  currentGrouping?: GroupingState<MockUser, GroupingDefinition<MockUser>>
  paginationType?: PaginationType
  primaryActions?: PrimaryActionsDefinition
  secondaryActions?: SecondaryActionsDefinition
  searchBar?: boolean
}) => {
  const mockVisualizations = getMockVisualizations({
    frozenColumns,
  })

  const dataSource = useDataSource({
    filters,
    navigationFilters,
    presets: usePresets ? filterPresets : undefined,
    sortings,
    grouping,
    currentGrouping: currentGrouping,
    primaryActions,
    secondaryActions,
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(`Editing ${item.name}`),
        description: "Modify user information",
        type: "primary",
      },
      {
        label: "View Profile",
        icon: Ai,
        onClick: () => console.log(`Viewing ${item.name}'s profile`),
      },
      { type: "separator" },
      {
        label: item.isStarred ? "Remove Star" : "Star User",
        icon: Star,
        onClick: () => console.log(`Toggling star for ${item.name}`),
        description: item.isStarred
          ? "Remove from favorites"
          : "Add to favorites",
      },
      {
        label: "Delete",
        icon: Delete,
        onClick: () => console.log(`Deleting ${item.name}`),
        critical: true,
        description: "Permanently remove user",
        enabled: item.department === "Engineering" && item.status === "active",
      },
    ],
    selectable,
    defaultSelectedItems,
    bulkActions,
    totalItemSummary,
    search: searchBar
      ? {
          enabled: true,
          sync: true,
          debounceTime: 300,
        }
      : undefined,
    dataAdapter: dataAdapter ?? {
      fetchData: useObservable
        ? createObservableDataFetch()
        : createPromiseDataFetch(),
    },
    lanes: [
      { id: "eng", filters: { department: ["Engineering"] } },
      { id: "prod", filters: { department: ["Product"] } },
      { id: "design", filters: { department: ["Design"] } },
      { id: "other", filters: { department: ["Marketing"] } },
    ],
  })

  return (
    <div
      className={cn(
        "space-y-4",
        fullHeight && "max-h-full max-w-full bg-[#fff]"
      )}
    >
      <OneDataCollection
        fullHeight={fullHeight}
        source={dataSource}
        onSelectItems={(selectedItems) =>
          console.log("Selected items", "->", selectedItems)
        }
        onBulkAction={(action, selectedItems) =>
          console.log(`Bulk action: ${action}`, "->", selectedItems)
        }
        visualizations={
          visualizations ?? [
            mockVisualizations.table,
            mockVisualizations.card,
            mockVisualizations.list,
            mockVisualizations.kanban,
          ]
        }
      />
    </div>
  )
}

interface DataAdapterOptions<TRecord> {
  data: TRecord[]
  delay?: number
  useObservable?: boolean
  paginationType?: PaginationType
  perPage?: number
  search?: string
}

export function createDataAdapter<
  TRecord extends RecordType & {
    name: string
    email: string
    department: (typeof DEPARTMENTS_MOCK)[number]
    salary?: number
  },
  TFilters extends Record<string, FilterDefinition>,
  TNavigationFilters extends NavigationFiltersDefinition,
>({
  data,
  delay = 500,
  useObservable = false,
  paginationType,
  perPage = 20,
  search = "",
}: DataAdapterOptions<TRecord>): DataAdapter<
  TRecord,
  TFilters,
  TNavigationFilters
> {
  // Create a function to calculate summaries for a dataset
  const calculateSummaries = (records: TRecord[]): Partial<TRecord> => {
    // Calculate the sum of all salaries
    const totalSalary = records.reduce((total, record) => {
      return total + (record.salary || 0)
    }, 0)

    // Return a record-like object with the calculated summaries
    return {
      salary: totalSalary, // Cast to any as TRecord might have different types
      // Add other summary calculations as needed
    } as Partial<TRecord>
  }

  const filterData = (
    records: TRecord[],
    filters: FiltersState<TFilters>,
    sortingsState: SortingsStateMultiple,
    pagination?: {
      currentPage?: number
      perPage?: number
      cursor?: string | null
    }
  ): TRecord[] | PaginatedResponse<TRecord> | BaseResponse<TRecord> => {
    let filteredRecords = [...records]

    // Apply text search if available
    if (
      "search" in filters &&
      typeof filters.search === "string" &&
      filters.search.trim() !== ""
    ) {
      const searchTerm = (filters.search as string).toLowerCase()
      filteredRecords = filteredRecords.filter(
        (record) =>
          record.name.toLowerCase().includes(searchTerm) ||
          record.email.toLowerCase().includes(searchTerm) ||
          record.department.toLowerCase().includes(searchTerm)
      )
    }

    if (search) {
      const searchTerm = search.toLowerCase()
      filteredRecords = filteredRecords.filter(
        (record) =>
          record.name.toLowerCase().includes(searchTerm) ||
          record.email.toLowerCase().includes(searchTerm) ||
          record.department.toLowerCase().includes(searchTerm)
      )
    }

    // Apply department filter if provided
    if ("department" in filters && Array.isArray(filters.department)) {
      filteredRecords = filteredRecords.filter((record) =>
        (filters.department as string[]).includes(record.department)
      )
    }

    // Apply sorting if available
    if (sortingsState) {
      sortingsState.reverse().forEach(({ field, order }) => {
        const sortField = field as keyof TRecord
        const sortDirection = order

        filteredRecords.sort((a, b) => {
          const aValue = a[sortField]
          const bValue = b[sortField]

          // Handle string comparisons
          if (typeof aValue === "string" && typeof bValue === "string") {
            return sortDirection === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue)
          }

          // Handle number comparisons
          if (typeof aValue === "number" && typeof bValue === "number") {
            return sortDirection === "asc" ? aValue - bValue : bValue - aValue
          }

          // Handle boolean comparisons
          if (typeof aValue === "boolean" && typeof bValue === "boolean") {
            return sortDirection === "asc"
              ? aValue === bValue
                ? 0
                : aValue
                  ? 1
                  : -1
              : aValue === bValue
                ? 0
                : aValue
                  ? -1
                  : 1
          }

          // Default case: use string representation
          return sortDirection === "asc"
            ? String(aValue).localeCompare(String(bValue))
            : String(bValue).localeCompare(String(aValue))
        })
      })
    }

    // Calculate summaries for the ENTIRE dataset (not just the paginated portion)
    const summaries = calculateSummaries(filteredRecords)

    // Apply pagination if needed
    if (pagination && paginationType === "pages") {
      const { currentPage = 1 } = pagination
      const pageSize = pagination.perPage || perPage
      const startIndex = (currentPage - 1) * pageSize
      const paginatedRecords = filteredRecords.slice(
        startIndex,
        startIndex + pageSize
      )

      return {
        type: "pages",
        records: paginatedRecords,
        total: filteredRecords.length,
        currentPage,
        perPage: pageSize,
        pagesCount: Math.ceil(filteredRecords.length / pageSize),
        summaries: summaries as TRecord, // Include summaries
      }
    } else if (pagination && paginationType === "infinite-scroll") {
      const pageSize = pagination.perPage || perPage

      const cursor = "cursor" in pagination ? pagination.cursor : null

      const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

      const paginatedRecords = filteredRecords.slice(
        Number(cursor) || 0,
        nextCursor
      )

      return {
        type: "infinite-scroll" as const,
        records: paginatedRecords,
        total: filteredRecords.length,
        cursor: String(nextCursor),
        perPage: pageSize,
        hasMore: nextCursor < filteredRecords.length,
        summaries: summaries as TRecord, // Include summaries
      }
    }

    return filteredRecords
  }

  if (paginationType === "pages") {
    const adapter: DataAdapter<TRecord, TFilters, TNavigationFilters> = {
      paginationType: "pages",
      perPage,
      fetchData: ({ filters, sortings, pagination }) => {
        if (useObservable) {
          return new Observable<PromiseState<PaginatedResponse<TRecord>>>(
            (observer) => {
              observer.next({
                loading: true,
                error: null,
                data: null,
              })

              setTimeout(() => {
                const fetch = () =>
                  filterData(
                    data,
                    filters,
                    sortings,
                    pagination
                  ) as PaginatedResponse<TRecord>

                try {
                  observer.next({
                    loading: false,
                    error: null,
                    data: fetch(),
                  })
                  observer.complete()
                } catch (error) {
                  observer.next({
                    loading: false,
                    error:
                      error instanceof Error ? error : new Error(String(error)),
                    data: null,
                  })
                  observer.complete()
                }
              }, delay)
            }
          )
        }

        return new Promise<PaginatedResponse<TRecord>>((resolve, reject) => {
          setTimeout(() => {
            try {
              resolve(
                filterData(
                  data,
                  filters,
                  sortings,
                  pagination
                ) as PaginatedResponse<TRecord>
              )
            } catch (error) {
              reject(error)
            }
          }, delay)
        })
      },
    }

    return adapter
  } else if (paginationType === "infinite-scroll") {
    const adapter: DataAdapter<TRecord, TFilters, TNavigationFilters> = {
      paginationType: "infinite-scroll",
      perPage,
      fetchData: ({ filters, sortings, pagination }) => {
        if (useObservable) {
          return new Observable<PromiseState<PaginatedResponse<TRecord>>>(
            (observer) => {
              observer.next({
                loading: true,
                error: null,
                data: null,
              })

              setTimeout(() => {
                const fetch = () =>
                  filterData(
                    data,
                    filters,
                    sortings,
                    pagination
                  ) as InfiniteScrollPaginatedResponse<TRecord>

                const fetchData = fetch()

                try {
                  observer.next({
                    loading: false,
                    error: null,
                    data: fetchData,
                  })
                  observer.complete()
                } catch (error) {
                  observer.next({
                    loading: false,
                    error:
                      error instanceof Error ? error : new Error(String(error)),
                    data: null,
                  })
                  observer.complete()
                }
              }, delay)
            }
          )
        }

        return new Promise<PaginatedResponse<TRecord>>((resolve, reject) => {
          setTimeout(() => {
            try {
              const result = filterData(
                data,
                filters,
                sortings,
                pagination
              ) as InfiniteScrollPaginatedResponse<TRecord>
              resolve(result)
            } catch (error) {
              reject({
                loading: false,
                error:
                  error instanceof Error ? error : new Error(String(error)),
                data: null,
              })
            }
          }, delay)
        })
      },
    }
    return adapter
  }

  // Not paginated
  const adapter: DataAdapter<TRecord, TFilters, TNavigationFilters> = {
    fetchData: ({ filters, sortings }) => {
      if (useObservable) {
        return new Observable<PromiseState<BaseResponse<TRecord>>>(
          (observer) => {
            observer.next({
              loading: true,
              error: null,
              data: null,
            })

            setTimeout(() => {
              try {
                const fetch = () =>
                  filterData(data, filters, sortings) as TRecord[]

                const summaries = calculateSummaries(fetch())
                observer.next({
                  loading: false,
                  error: null,
                  data: { records: fetch(), summaries: summaries as TRecord },
                })
                observer.complete()
              } catch (error) {
                observer.next({
                  loading: false,
                  error:
                    error instanceof Error ? error : new Error(String(error)),
                  data: null,
                })
                observer.complete()
              }
            }, delay)
          }
        )
      }

      return new Promise<BaseResponse<TRecord>>((resolve, reject) => {
        setTimeout(() => {
          try {
            const result = filterData(data, filters, sortings)
            // If the result is an array, we need to wrap it with summaries
            const recordsData = Array.isArray(result)
              ? result
              : "records" in result
                ? result.records
                : []
            const summaries = calculateSummaries(recordsData)
            resolve({
              records: recordsData,
              summaries: summaries as TRecord,
            })
          } catch (error) {
            reject(error)
          }
        }, delay)
      })
    },
  }

  return adapter
}

// Example of a comprehensive actions definition with various types of actions
export const buildSecondaryActions = (): SecondaryActionsItemDefinition[] => {
  return [
    // Action with description
    {
      label: "Edit",
      icon: Pencil,
      onClick: () => console.log(`Another user action`),
      description: "User actions",
    },

    // Separator between action groups
    { type: "separator" },
    {
      label: "Export",
      icon: Upload,
      onClick: () => console.log(`Downloading users`),
      description: "Download users",
    },
    {
      label: "Import",
      icon: Download,
      onClick: () => console.log(`Importing users`),
      description: "Import users",
    },
  ]
}
