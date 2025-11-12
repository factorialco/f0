import { PromiseState } from "@/lib/promise-to-observable"
import { useEffect, useMemo, useState } from "react"
import { Observable } from "zen-observable-ts"

import { SummariesDefinition } from "@/experimental/OneDataCollection/summary.ts"
import { cn } from "@/lib/utils"
import { generateMockUsers, MockUser } from "@/mocks"
export { generateMockUsers, type MockUser }

import {
  FilterDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker"
import {
  BulkActionsDefinition,
  DataCollectionBaseFetchOptions,
  DataCollectionDataAdapter,
  useDataCollectionSource,
} from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import {
  GroupingDefinition,
  GroupingState,
  SortingsStateMultiple,
} from "@/hooks/datasource"
import {
  BaseResponse,
  InfiniteScrollPaginatedResponse,
  OnSelectItemsCallback,
  PaginatedResponse,
  PaginationType,
  RecordType,
  SelectedItemsState,
  SortingsState,
} from "@/hooks/datasource/types"
import { SearchOptions } from "@/hooks/datasource/types/search.typings"
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
} from "@/icons/app"
import { DEPARTMENTS_MOCK } from "@/mocks"
import { OneDataCollection } from ".."
import {
  PrimaryActionsDefinitionFn,
  SecondaryActionItem,
  SecondaryActionsDefinition,
} from "../actions"
import {
  DataCollectionStatusComplete,
  DataCollectionStorageFeaturesDefinition,
} from "../hooks/useDataColectionStorage/types"
import { ItemActionsDefinition } from "../item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../navigationFilters/types"
import { OnBulkActionCallback } from "../types"
import { Visualization, VisualizationType } from "../visualizations/collection"

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

/**
 * MockDataCache - Simulates Apollo cache behavior with observable pattern
 * Updates data mutations and notifies subscribers when data changes
 *
 * @example
 * const cache = new MockDataCache(mockUsers)
 * cache.subscribe(() => console.log('Data changed!'))
 * cache.updateItemDepartment('user-1', 'Engineering')
 *
 * KNOWN ISSUE - Selection State Not Preserved Across Lane Moves:
 * ==============================================================
 * When moving items between Kanban lanes, selection state is lost.
 *
 * Root Cause:
 * - Each lane has its own independent `useSelectable` instance
 * - Selection state is stored per-lane in `itemsState` Map
 * - When an item moves from Lane A → Lane B:
 *   * Lane A: Has the item selected in its local state
 *   * Lane B: Has no knowledge of the selection (empty state for that item)
 * - No mechanism exists to sync selection state between lanes
 *
 * Why This Happens with Apollo Too:
 * - Apollo cache preserves object references but doesn't automatically
 *   sync React component state (which is what `useSelectable` manages)
 * - The issue is architectural: selection state needs to be global,
 *   not scoped per-lane
 *
 * Potential Solutions (for future PR):
 * 1. Make selection state global at DataCollection level
 * 2. Sync selection state between lanes when items move
 * 3. Use defaultSelectedItems to persist state across lane changes
 *
 * This mock correctly simulates Apollo cache behavior. The selection
 * issue is a system design limitation that also exists in production.
 */
export class MockDataCache<T extends MockUser> {
  // Map of id -> object for efficient updates
  private dataMap: Map<string, T>
  private subscribers: Set<() => void> = new Set()

  constructor(initialData: T[]) {
    // Initialize cache with data
    this.dataMap = new Map(initialData.map((item) => [item.id, item]))
  }

  getData(): T[] {
    // Return array of objects from cache
    return Array.from(this.dataMap.values())
  }

  /**
   * Subscribe to cache changes - simulates Apollo's cache.watch
   * Returns unsubscribe function
   */
  subscribe(callback: () => void): () => void {
    this.subscribers.add(callback)
    return () => {
      this.subscribers.delete(callback)
    }
  }

  /**
   * Notify all subscribers that data has changed
   */
  private notify() {
    this.subscribers.forEach((callback) => callback())
  }

  updateItemDepartment(itemId: string, newDepartment: string): T | null {
    const item = this.dataMap.get(itemId)
    if (!item) return null

    // Update the cached object
    item.department = newDepartment as (typeof DEPARTMENTS_MOCK)[number]

    // Notify subscribers that cache has changed (simulates Apollo)
    this.notify()

    return item
  }

  reset(newData: T[]) {
    this.dataMap = new Map(newData.map((item) => [item.id, item]))
    this.notify()
  }
}

// Mock data
export const mockUsers = generateMockUsers(10)

export const getMockVisualizations = (options?: {
  // @deprecated
  frozenColumns?: 0 | 1 | 2
  table?: {
    frozenColumns?: 0 | 1 | 2
    allowColumnHiding?: boolean
    allowColumnReordering?: boolean
    noSorting?: boolean
  }
  cache?: MockDataCache<MockUser>
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
      allowColumnHiding: options?.table?.allowColumnHiding,
      allowColumnReordering: options?.table?.allowColumnReordering,
      frozenColumns:
        options?.table?.frozenColumns ?? options?.frozenColumns ?? 0,
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
          id: "name",
          sorting: options?.table?.noSorting ? undefined : "name",
          hidden: options?.table?.allowColumnHiding ? true : undefined,
          order: options?.table?.allowColumnReordering ? 3 : undefined,
        },
        {
          label: "Email",
          render: (item) => item.email,
          sorting: options?.table?.noSorting ? undefined : "email",
          id: "email",
        },
        {
          label: "Role",
          render: (item) => item.role,
          sorting: options?.table?.noSorting ? undefined : "role",
          id: "role",
          order: options?.table?.allowColumnReordering ? 2 : undefined,
          noHiding: options?.table?.allowColumnHiding,
        },
        {
          id: "department",
          label: "Department",
          render: (item) => item.department,
          sorting: options?.table?.noSorting ? undefined : "department",
          order: options?.table?.allowColumnReordering ? 4 : undefined,
        },
        {
          id: "email2",
          label: "Email 2",
          render: (item) => item.email,
          sorting: options?.table?.noSorting ? undefined : "email",
          order: options?.table?.allowColumnReordering ? 1 : undefined,
        },
        {
          id: "role2",
          label: "Role 2",
          render: (item) => item.role,
          sorting: options?.table?.noSorting ? undefined : "role",
        },
        {
          id: "department2",
          label: "Department 2",
          render: (item) => item.department,
          sorting: options?.table?.noSorting ? undefined : "department",
          order: options?.table?.allowColumnReordering ? 10 : undefined,
        },
        {
          id: "email3",
          label: "Email 3",
          render: (item) => item.email,
          sorting: options?.table?.noSorting ? undefined : "email",
        },
        {
          id: "role3",
          label: "Role 3",
          render: (item) => item.role,
          sorting: options?.table?.noSorting ? undefined : "role",
        },
        {
          label: "Department 3",
          render: (item) => item.department,
          sorting: options?.table?.noSorting ? undefined : "department",
          id: "department3",
        },
        {
          label: "Email 4",
          render: (item) => item.email,
          sorting: options?.table?.noSorting ? undefined : "email",
          id: "email4",
        },
        {
          label: "Role 4",
          render: (item) => item.role,
          sorting: options?.table?.noSorting ? undefined : "role",
          id: "role4",
        },
        {
          label: "Long",
          render: () => ({
            type: "longText",
            value: {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis eu elit in pharetra. Proin id eleifend nibh, id tincidunt nisi. Donec pellentesque erat risus, a ullamcorper nulla ullamcorper quis. Nam vulputate pharetra elit eget ullamcorper. Nulla ullamcorper lacus purus, interdum tristique neque tincidunt ut. Quisque tristique condimentum ultrices. Ut eget efficitur nisl, et aliquam orci. Nulla nec efficitur erat, a maximus ex. Suspendisse ornare nibh risus, lacinia hendrerit ex consectetur sit amet. Suspendisse at urna leo. Aenean at commodo nunc, nec mattis velit. Pellentesque viverra tincidunt odio, sed efficitur sem scelerisque nec. Integer volutpat ligula non justo aliquet placerat. Nam arcu massa, finibus et hendrerit non, iaculis in libero. Quisque non vestibulum risus.",
              lines: 4,
            },
          }),
          id: "longText",
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
          sorting: options?.table?.noSorting ? undefined : "permissions.read",
          id: "permissions",
          order: options?.table?.allowColumnReordering ? 4 : undefined,
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
          hide: (item) => !item.email,
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
          label: "Manager",
          icon: Person,
          render: (item) => ({
            type: "person",
            value: {
              firstName: item.manager.split(" ")[0],
              lastName: item.manager.split(" ")[1],
            },
          }),
          hide: (item) => item.name.startsWith("D"),
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
          label: "Teammates",
          render: (item) => ({
            type: "avatarList",
            value: {
              max: 1,
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
          label: "Manager",
          render: (item) => ({
            type: "person",
            value: {
              firstName: item.manager.split(" ")[0],
              lastName: item.manager.split(" ")[1],
            },
          }),
          hide: (item) => item.name.startsWith("D"),
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
      onCreate: (a) => {
        console.log("onCreate", a)
      },
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
      onMove: options?.cache
        ? async (
            _fromLaneId: string,
            toLaneId: string,
            sourceRecord: MockUser,
            _destinyRecord: {
              record: MockUser
              position: "above" | "below"
            } | null
          ): Promise<MockUser> => {
            // Map lane ID to department
            console.log(
              "onMove",
              _fromLaneId,
              toLaneId,
              sourceRecord,
              _destinyRecord
            )

            const laneToDepartment: Record<string, string> = {
              eng: "Engineering",
              prod: "Product",
              design: "Design",
              other: "Marketing",
            }

            const newDepartment = laneToDepartment[toLaneId]

            // Update cache IMMEDIATELY (before async delay) - simulates Apollo Optimistic Response
            if (newDepartment && options.cache) {
              options.cache.updateItemDepartment(sourceRecord.id, newDepartment)
            }

            // Simulate API call delay AFTER cache update (very short for better UX)
            await new Promise((resolve) => setTimeout(resolve, 50))

            if (newDepartment) {
              // Return the updated record
              return {
                ...sourceRecord,
                department: newDepartment as (typeof DEPARTMENTS_MOCK)[number],
              }
            }

            // Fallback if no cache
            return sourceRecord
          }
        : undefined,
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
  }: DataCollectionBaseFetchOptions<
    FiltersType,
    NavigationFiltersDefinition
  >) =>
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

export const createPromiseDataFetch = (
  delay = 500,
  cache?: MockDataCache<MockUser>
) => {
  return (
    options: DataCollectionBaseFetchOptions<
      FiltersType,
      NavigationFiltersDefinition
    >
  ) => {
    const {
      filters,
      sortings: sortingsState,
      search,
      navigationFilters,
    } = options

    return new Promise<BaseResponse<MockUser>>((resolve) => {
      setTimeout(() => {
        // Use cache if provided, otherwise use static mockUsers
        const sourceData = cache ? cache.getData() : mockUsers
        const filteredData = filterUsers(
          sourceData,
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
}

// Utility functions for data fetching
export type FiltersType = typeof filters

// Example component using useDataCollectionSource
export const ExampleComponent = ({
  useObservable = false,
  usePresets = false,
  frozenColumns = 0,
  selectable,
  defaultSelectedItems,
  bulkActions,
  currentGrouping,
  currentSortings,
  currentNavigationFilters,
  grouping,
  noSorting = false,
  navigationFilters,
  totalItemSummary,
  visualizations,
  fullHeight,
  dataAdapter,
  primaryActions,
  secondaryActions,
  searchBar = false,
  id,
  storage,
  /**
   * mocks the table column ordering and hidding
   */
  tableAllowColumnReordering = false,
  tableAllowColumnHiding = false,
  onStateChange,
  currentFilters,
  /**
   * Enable Apollo-like cache behavior for testing optimistic updates
   */
  enableCache = true,
  hideFilters,
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
  id?: string
  storage?:
    | false
    | {
        features?: DataCollectionStorageFeaturesDefinition
      }
  dataAdapter?: DataCollectionDataAdapter<
    MockUser,
    FiltersType,
    NavigationFiltersDefinition
  >
  defaultSelectedItems?: SelectedItemsState
  selectable?: (item: MockUser) => string | number | undefined
  bulkActions?: BulkActionsDefinition<MockUser, FiltersType>
  onSelectItems?: OnSelectItemsCallback<MockUser, FiltersType>
  onBulkAction?: OnBulkActionCallback<MockUser, FiltersType>
  navigationFilters?: NavigationFiltersDefinition
  totalItemSummary?: true | ((totalItems: number) => string)
  grouping?: GroupingDefinition<MockUser> | undefined
  currentGrouping?: GroupingState<MockUser, GroupingDefinition<MockUser>>
  noSorting?: boolean
  paginationType?: PaginationType
  primaryActions?: PrimaryActionsDefinitionFn
  secondaryActions?: SecondaryActionsDefinition
  searchBar?: boolean | SearchOptions
  tableAllowColumnReordering?: boolean
  tableAllowColumnHiding?: boolean
  onStateChange?: (
    state: DataCollectionStatusComplete<FiltersState<typeof filters>>
  ) => void
  enableCache?: boolean
  hideFilters?: boolean
  currentFilters?: FiltersState<FiltersType>
  currentSortings?: SortingsState<typeof sortings>
  currentNavigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>
}) => {
  // Create a cache instance to simulate Apollo cache behavior
  const cache = useMemo(() => {
    const c = enableCache ? new MockDataCache(mockUsers) : undefined
    console.log(
      "[ExampleComponent] Cache created:",
      !!c,
      "with",
      mockUsers.length,
      "users"
    )
    return c
  }, [enableCache])

  // Subscribe to cache changes and force refetch (simulates Apollo cache.watch)
  const [cacheVersion, setCacheVersion] = useState(0)

  useEffect(() => {
    if (!cache) return

    const unsubscribe = cache.subscribe(() => {
      setCacheVersion((v) => v + 1)
    })

    return unsubscribe
  }, [cache])

  const mockVisualizations = getMockVisualizations({
    table: {
      frozenColumns,
      allowColumnHiding: tableAllowColumnHiding,
      allowColumnReordering: tableAllowColumnReordering,
    },
    cache,
  })

  // Create dataAdapter that responds to cache changes
  // By including cacheVersion in the useMemo deps and in the returned object,
  // we ensure that useData detects the change and triggers a refetch
  const dataAdapterMemoized = useMemo(() => {
    if (dataAdapter) return dataAdapter

    return {
      fetchData: useObservable
        ? createObservableDataFetch()
        : createPromiseDataFetch(100, cache),
      // Include cacheVersion as a property so dataAdapter reference changes
      _cacheVersion: cacheVersion,
    }
  }, [dataAdapter, useObservable, cache, cacheVersion])

  const dataSource = useDataCollectionSource(
    {
      filters: hideFilters ? undefined : filters,
      currentFilters,
      currentSortings,
      navigationFilters,
      currentNavigationFilters,
      presets: usePresets ? filterPresets : undefined,
      sortings: noSorting ? undefined : sortings,
      grouping,
      currentGrouping: currentGrouping,
      primaryActions,
      secondaryActions,
      itemOnClick: (item) => () => console.log(`Clicking ${item.name}`),
      itemUrl: (item) => `/users/${item.id}`,
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
          enabled:
            item.department === "Engineering" && item.status === "active",
        },
      ],
      selectable,
      defaultSelectedItems,
      bulkActions,
      totalItemSummary,
      search:
        searchBar === true
          ? {
              enabled: true,
              sync: true,
              debounceTime: 300,
            }
          : typeof searchBar === "object"
            ? searchBar
            : undefined,
      dataAdapter: dataAdapterMemoized,
      lanes: [
        { id: "eng", filters: { department: ["Engineering"] } },
        { id: "prod", filters: { department: ["Product"] } },
        { id: "design", filters: { department: ["Design"] } },
        { id: "other", filters: { department: ["Marketing"] } },
      ],
    },
    [cacheVersion]
  ) // Pass cacheVersion as dependency to force refetch on cache changes

  return (
    <div
      className={cn("space-y-4", fullHeight && "max-h-full w-full bg-[#fff]")}
    >
      <OneDataCollection
        id={id}
        storage={storage}
        fullHeight={fullHeight}
        source={dataSource}
        onStateChange={(state) => {
          console.log("State changed", "->", state)
          onStateChange?.(state)
        }}
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
}: DataAdapterOptions<TRecord>): DataCollectionDataAdapter<
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
    const adapter: DataCollectionDataAdapter<
      TRecord,
      TFilters,
      TNavigationFilters
    > = {
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
    const adapter: DataCollectionDataAdapter<
      TRecord,
      TFilters,
      TNavigationFilters
    > = {
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
  const adapter: DataCollectionDataAdapter<
    TRecord,
    TFilters,
    TNavigationFilters
  > = {
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
export const buildSecondaryActions = (): SecondaryActionItem[] => {
  return [
    // Action with description
    {
      label: "Edit",
      icon: Pencil,
      onClick: () => console.log(`Another user action`),
      description: "User actions",
    },
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

export const getMockVisualizationsWithCreate = (
  params: { onCreate: (laneId: string) => void } & Parameters<
    typeof getMockVisualizations
  >[0]
) => {
  const { onCreate, ...rest } = params
  const base = getMockVisualizations(rest)

  return {
    ...base,
    kanban: {
      type: "kanban" as const,
      options: {
        ...(base.kanban.type === "kanban" ? base.kanban.options : {}),
        onCreate,
      },
    },
  }
}
