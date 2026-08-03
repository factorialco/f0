import type { Meta, StoryObj } from "@storybook/react-vite"

import { ForwardedRef, useCallback, useState } from "react"

import { F0AiChatProvider } from "@/kits/ai/F0AiChat"
import { FiltersDefinition, FiltersState } from "@/patterns/OneFilterPicker"
import { useDataCollectionItemNavigation } from "@/patterns/OneDataCollection/hooks/useDataCollectionItemNavigation"
import {
  BaseFetchOptions,
  ItemNeighborsFetchOptions,
  ItemNeighborsResponse,
  PageBasedPaginatedResponse,
  PaginatedFetchOptions,
  RecordType,
} from "@/hooks/datasource"
import { LinkProps, LinkProvider } from "@/lib/linkHandler"
import { writeDataCollectionStorage } from "@/lib/providers/datacollection/dataCollectionUrlParams"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { FIRST_NAMES_MOCK, getMockValue, SURNAMES_MOCK } from "@/mocks"

import { ChartLine } from "../../../../icons/ai"
import { EllipsisHorizontal, Settings } from "../../../../icons/app"
import { PageHeader } from "./index"

const meta = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <F0AiChatProvider enabled>
        <div className="bg-f1-background">
          <Story />
        </div>
      </F0AiChatProvider>
    ),
  ],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof PageHeader>

const defaultModule = {
  name: "Time Tracking",
  href: "/time-tracking",
  id: "time-tracking" as const,
}

const defaultActions = [
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "More options",
    icon: EllipsisHorizontal,
    actions: [
      {
        label: "Download",
        href: "/download",
      },
      {
        label: "Export",
        href: "/export",
      },
    ],
  },
]

const defaultNavigation = {
  previous: {
    url: "/previous",
    title: "Previous Employee: John Smith",
  },
  next: {
    url: "/next",
    title: "Next Employee: Sarah Johnson",
  },
  counter: {
    current: 1,
    total: 30,
  },
}

export const Default: Story = {
  args: {
    module: defaultModule,
  },
}

export const WithOnClickAction: Story = {
  args: {
    module: defaultModule,
    actions: [
      {
        label: "Run",
        icon: Settings,
        onClick: () => {
          // eslint-disable-next-line no-alert
          alert("Run clicked")
        },
      },
    ],
  },
}

export const WithActions: Story = {
  args: {
    module: defaultModule,
    actions: defaultActions,
  },
}

export const WithAIDashboardLaunch: Story = {
  args: {
    module: {
      name: "Trainings",
      href: "/trainings",
      id: "company_trainings" as const,
    },
    actions: [
      {
        label: "Settings",
        icon: Settings,
        href: "/trainings/settings",
      },
      {
        variant: "ai",
        label: "Learn how your employees complete trainings",
        icon: ChartLine,
        onClick: () => {
          // In product code this calls
          // `useOpenDashboardAction().openDashboard("trainings")`,
          // which opens One and renders the dashboard inline via the
          // `displayDashboard` tool call.
          // eslint-disable-next-line no-alert
          alert("openDashboard('trainings')")
        },
      },
    ],
  },
}

export const WithStatus: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Published",
      variant: "positive",
    },
  },
}

export const WithStatusVariants: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This document is not yet published",
    },
  },
}

export const WithNavigation: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
  },
}

export const WithNavigationDisabled: Story = {
  args: {
    module: defaultModule,
    navigation: {
      next: {
        url: "/next",
        title: "Next Employee: Sarah Johnson",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
  },
}

export const WithBreadcrumbs: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees_collection", label: "Company", href: "/employees" },
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
  },
}

export const WithSelectBreadcrumb: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      {
        type: "select",
        id: "employee",
        label: "Ainhoa Aznar Lago",
        searchbox: true,
        options: Array.from({ length: 10 }, (_, idx) => ({
          value: idx.toString(),
          label: `Offer ${idx}`,
        })),
        value: "1",
        onChange: (value) => {
          console.log("WithSelectBreadcrumb value", value)
        },
      },
    ],
  },
}

const collectionEmployees = Array.from({ length: 60 }, (_, i) => ({
  id: `${i + 1}`,
  name: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  department: i % 2 === 0 ? "Engineering" : "Design",
}))

const EMPLOYEES_COLLECTION_ID = "storybook/pageheader-employees/v1"
const EMPLOYEES_PER_PAGE = 10

// The server-side query the mock "backend" applies on both endpoints: the
// same filters, search, and sorting.
const queryEmployees = (options: BaseFetchOptions<FiltersDefinition>) => {
  const departments = options.filters.department as string[] | undefined
  const search = options.search?.toLowerCase()
  let results = collectionEmployees.filter(
    (employee) =>
      !departments?.length || departments.includes(employee.department)
  )
  if (search) {
    results = results.filter((employee) =>
      employee.name.toLowerCase().includes(search)
    )
  }
  const sorting = options.sortings.find((s) => s.field === "name")
  if (sorting) {
    results = [...results].sort(
      (a, b) =>
        a.name.localeCompare(b.name) * (sorting.order === "asc" ? 1 : -1)
    )
  }
  return results
}

// One declaration, two consumers: the breadcrumb jump-to select and the
// item-navigation hook feeding the header arrows both fetch from this source,
// seeded with the same persisted collection state.
const employeesSource = {
  filters: {
    department: {
      type: "in" as const,
      label: "Department",
      options: {
        options: [
          { value: "Engineering", label: "Engineering" },
          { value: "Design", label: "Design" },
        ],
      },
    },
  },
  sortings: { name: { label: "Name" } },
  itemUrl: (employee: RecordType) => `#/employees/${employee.id}`,
  dataAdapter: {
    paginationType: "pages" as const,
    perPage: EMPLOYEES_PER_PAGE,
    fetchData: (options: PaginatedFetchOptions<FiltersDefinition>) => {
      const results = queryEmployees(options)
      const currentPage =
        "currentPage" in options.pagination
          ? (options.pagination.currentPage ?? 1)
          : 1
      const start = (currentPage - 1) * EMPLOYEES_PER_PAGE
      return new Promise<PageBasedPaginatedResponse<RecordType>>((resolve) =>
        setTimeout(
          () =>
            resolve({
              type: "pages" as const,
              records: results.slice(start, start + EMPLOYEES_PER_PAGE),
              total: results.length,
              perPage: EMPLOYEES_PER_PAGE,
              currentPage,
              pagesCount: Math.ceil(results.length / EMPLOYEES_PER_PAGE),
            }),
          100
        )
      )
    },
    // The id-relative capability a real backend implements with cursor-by-id
    // args (e.g. afterEmployeeId/beforeEmployeeId): the neighbors + position
    // of an item under the same filters/sort, no page walking. Powers the
    // header arrows beyond the loaded page and on deep links.
    fetchItemNeighbors: (
      options: ItemNeighborsFetchOptions<FiltersDefinition>
    ) => {
      const results = queryEmployees(options)
      const index = results.findIndex(
        (employee) => employee.id === String(options.id)
      )
      return new Promise<ItemNeighborsResponse<RecordType>>((resolve) =>
        setTimeout(
          () =>
            resolve(
              index === -1
                ? { previous: null, next: null, total: results.length }
                : {
                    previous: results[index - 1] ?? null,
                    next: results[index + 1] ?? null,
                    position: index + 1,
                    total: results.length,
                  }
            ),
          100
        )
      )
    },
  },
}

const firstFilteredEmployee = [...collectionEmployees]
  .filter((employee) => employee.department === "Engineering")
  .sort((a, b) => a.name.localeCompare(b.name))[0]

const CollectionBoundPageHeaderDemo = () => {
  const [activeId, setActiveId] = useState(firstFilteredEmployee.id)

  // The user can refine the filters inside the breadcrumb dropdown
  // (`showFilters`); feeding them back to the navigation hook keeps the
  // arrows + counter walking that same refined context.
  const [navigationFilters, setNavigationFilters] = useState<
    FiltersState<FiltersDefinition> | undefined
  >(undefined)

  // Both controls navigate by URL: the header arrows through the source's
  // `itemUrl`, the breadcrumb select through `getItemHref`. The story plays
  // the app router's role with a LinkProvider that turns those navigations
  // into state updates.
  const linkComponent = useCallback(
    (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
      <a
        ref={ref}
        {...props}
        onClick={(event) => {
          props.onClick?.(event)
          event.preventDefault()
          const id = props.href?.match(/^#\/employees\/(\d+)$/)?.[1]
          if (id) setActiveId(id)
        }}
      />
    ),
    []
  )

  // Definition-fed prev/next: reads the persisted filters/sortings through
  // the storage handler, seeds the source, returns render-ready
  // `NavigationProps` — no mounted list needed.
  const { navigation } = useDataCollectionItemNavigation({
    source: employeesSource,
    collectionId: EMPLOYEES_COLLECTION_ID,
    activeItemId: activeId,
    currentFilters: navigationFilters,
    getItemTitle: (employee) => String(employee.name),
  })

  // A real detail page knows its current record; the story reads it from the
  // mock so the crumb label is right even before the navigation data loads.
  const activeEmployee = collectionEmployees.find(
    (employee) => employee.id === activeId
  )

  return (
    <LinkProvider component={linkComponent}>
      <PageHeader
        module={defaultModule}
        navigation={navigation ?? undefined}
        breadcrumbs={[
          { id: "employees", label: "Employees", href: "/employees" },
          {
            type: "collection-select",
            id: "employee",
            label: activeEmployee?.name ?? "Employee",
            collectionId: EMPLOYEES_COLLECTION_ID,
            searchbox: true,
            showFilters: true,
            source: employeesSource,
            mapOptions: (item) => ({
              value: String(item.id),
              label: String(item.name),
              description: String(item.department),
              item,
            }),
            value: activeId,
            getItemHref: (value) => `#/employees/${value}`,
            onFiltersChange: setNavigationFilters,
          },
        ]}
      />
    </LinkProvider>
  )
}

/**
 * The full detail-page wiring, collection-bound end to end: the breadcrumb
 * jump-to select AND the header prev/next arrows + counter are fed from the
 * same declared `source` + `collectionId` — no mounted list needed (works on
 * direct links). The persisted list state (department = Engineering, sorted
 * by name) is written to localStorage before rendering: the dropdown lists
 * only Engineering employees (and exposes the department filter in-dropdown
 * via `showFilters`), and the arrows walk the same filtered, sorted set with
 * a correct `current/total` counter, navigating through each item's
 * `itemUrl`.
 *
 * The data behaves like a real backend: pages of 10 (the 30 matching
 * employees span 3 pages) and an id-relative `fetchItemNeighbors` capability.
 * Past the loaded page — or landing deep via a direct link — the arrows and
 * counter keep working through neighbors resolution instead of page walking.
 *
 * Refining the filters inside the dropdown flows back through
 * `onFiltersChange` → the hook's `currentFilters`, so after jumping to an
 * item from the refined list the arrows and counter walk that same refined
 * set (e.g. switch the department filter to Design and pick someone — the
 * counter becomes n/30 of the Design set).
 */
export const WithCollectionBoundSelectBreadcrumb: Story = {
  render: () => {
    writeDataCollectionStorage(EMPLOYEES_COLLECTION_ID, {
      filters: { department: ["Engineering"] },
      sortings: { field: "name", order: "asc" },
    })
    return <CollectionBoundPageHeaderDemo />
  },
  args: {
    module: defaultModule,
  },
}

export const WithEverything: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
  },
}

export const WithProductUpdate: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
    productUpdates: {
      isVisible: true,
      hasUnread: true,
      label: "Latest from Projects",
      updatesPageUrl: "https://factorialmakers.atlassian.net/browse/FCT-24580",
      emptyScreen: {
        title: "There aren’t updates for Projects yet",
        description:
          "Check out our product updates page to see past launches and what’s coming.",
        buttonText: "Go to Updates",
      },
      errorScreen: {
        title: "Something went wrong",
        description:
          "We couldn’t load the latest updates. Please check your connection and try again.",
        buttonText: "Try again",
      },
      getUpdates: async () => {
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve([
                {
                  title: "Project timetable with absence information",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  mediaUrl:
                    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                  updated: "4 mar 2025",
                  unread: true,
                },
                {
                  title: "Project timetable with absence information",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  mediaUrl: "https://placecats.com/neo/1416/797/",
                  updated: "4 mar 2025",
                  unread: true,
                },
                {
                  title: "New Client section",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "3 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  unread: true,
                },
                {
                  title: "Spending tab in projects",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "2 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                },
                {
                  title: "New Client section",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "3 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  unread: true,
                },
                {
                  title: "Spending tab in projects",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "2 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                },
              ]),
            1000
          )
        })
      },

      onItemClick: () => {
        alert("onItemClick")
      },
      onHeaderClick: () => {
        alert("onHeaderClick")
      },
      currentModule: defaultModule.name,
      crossSelling: {
        isVisible: true,
        sectionTitle: "Discover other products",
        onClose: () => {
          alert("onClose")
        },
        products: [
          {
            title: "Factorial Next: AI Edition 2025",
            description:
              "Join the event to discover ONE, our most important launch yet. Live on 7 Oct at 16:30 (Spain)",
            onClick: () => {
              alert("onClick")
            },
            onClose: () => {
              alert("onClose")
            },
            dismissable: false,
            trackVisibility: (open) => {
              console.log("trackOpenChange", open)
            },
            type: "one-campaign",
          },
          {
            title: "Benefits",
            description:
              "Improve your team’s salary without impacting your budget through flexible compensation.",
            onClick: () => {
              alert("onClick")
            },
            onClose: () => {
              alert("onClose")
            },
            module: "project_management",
            dismissable: false,
            trackVisibility: (open) => {
              console.log("trackOpenChange", open)
            },
          },
          {
            title: "Projects",
            description: "Improve your.",
            onClick: () => {
              alert("onClick")
            },
            onClose: () => {
              alert("onClose")
            },
            module: "project_management",
            dismissable: false,
            trackVisibility: (open) => {
              console.log("trackOpenChange", open)
            },
          },
        ],
      },
    },
  },
}

export const WithFavorites: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
  },
  render: (props) => {
    const [isMarked, setIsMarked] = useState(false)

    return (
      <PageHeader
        {...props}
        favorites={{
          isMarked,
          label: "Mark as favorite",
          onChange: () => setIsMarked((current) => !current),
        }}
      />
    )
  },
}

export const Embedded: Story = {
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
  },
}

export const EmbeddedWithLoading: Story = {
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "loading", loading: true },
    ],
  },
}

export const WithOneSwitchCustomTooltip: Story = {
  args: {
    module: defaultModule,
    oneSwitchTooltip: {
      whenEnabled: "This is a custom tooltip",
    },
  },
}

export const WithOneSwitchTooltipAlwaysVisible: Story = {
  args: {
    module: defaultModule,
    oneSwitchTooltip: { whenEnabled: "Ask me anything" },
    oneSwitchAutoOpen: true,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    module: {
      name: "Trainings",
      href: "/trainings",
      id: "company_trainings" as const,
    },
    actions: [
      {
        label: "Settings",
        icon: Settings,
        href: "/trainings/settings",
      },
      {
        variant: "ai",
        label: "Learn how your employees complete trainings",
        icon: ChartLine,
        onClick: () => {},
      },
    ],
  },
}
