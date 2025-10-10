import { SummariesDefinition } from "@/experimental/OneDataCollection/summary.ts"
import { GroupingDefinition } from "@/hooks/datasource"
import {
  Add,
  Ai,
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle,
  Delete,
  Download,
  Envelope,
  Pencil,
  Person,
  Placeholder,
  Share,
  Star,
  Target,
  Upload,
} from "@/icons/app"
import {
  CERTIFICATIONS_MOCK,
  DEPARTMENTS_MOCK,
  DOT_TAG_COLORS_MOCK,
  EDUCATION_MOCK,
  getMockValue,
  LANGUAGES_MOCK,
  PERFORMANCE_LITERAL_MOCK,
  PROJECTS_MOCK,
  START_DATE_MOCK,
  TEAMS_MOCK,
  YEARS_OF_EXPERIENCIE_MOCK,
} from "@/mocks"
import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"
import { useDataCollectionData } from "../hooks/useDataCollectionData/useDataCollectionData"
import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import {
  createDataAdapter,
  createPromiseDataFetch,
  ExampleComponent,
  filterPresets,
  filters,
  filterUsers,
  generateMockUsers,
  getMockVisualizations,
  MockUser,
  mockUsers,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Miscellaneous",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "This component is used to display a collection of data with filtering and visualization capabilities.",
      },
    },
  },
  argTypes: {
    useObservable: {
      control: "boolean",
      description: "Use Observable for data fetching",
    },
    usePresets: {
      control: "boolean",
      description: "Include filter presets",
    },
    onSelectItems: {
      action: "onSelectItems",
      description:
        "<p>Callback triggered when items are selected. It gets if `allItemsCheck` is checked(boolean | 'indeterminate', indeterminate means at least one item was delected), `itemsStatus` return the list of know items (if the datacollection is async we don't all the items) and the check status for each item, and `filters` the current filters state.</p>" +
        "‼️ If the datacollection is async, the `itemsStatus` will return the items that are known at the moment of the callback execution, that means when the `allChecked` is not false you need to apply the selection logic in the backend for all the items (using the filters state) and removing the items which status is `checked: false`, but in this case never use the `itemsStatus` ",
    },
    onBulkAction: {
      action: "onBulkAction",
      description:
        "<p>Callback triggered when a bulk action is performed. It gets the action name, and the same args as `inSelectItems`. ‼️ Please check the `onSelectItems` docs for more information.</p>",
    },
    onStateChange: {
      action: "onStateChange",
      description:
        "<p>Callback triggered when the state of the data collection changes. It gets the new state.</p>",
    },
  },
  tags: ["autodocs", "experimental", "internal"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Simplest: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: ({ filters, sortings, search }) => {
          return createPromiseDataFetch()({
            filters,
            sortings,
            search,
            navigationFilters: {},
          })
        },
      },
    })

    return (
      <div className="space-y-4">
        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
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
                    info: "Team that the employee belongs to",
                  },
                  {
                    label: "Salary",
                    render: (item) => ({
                      type: "amount",
                      value: item.salary,
                    }),
                    align: "right",
                    sorting: "salary",
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

// Basic examples with single visualization
export const BasicTableView: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings: {
        name: {
          label: "Name",
        },
        email: {
          label: "Email",
        },
        role: {
          label: "Role",
        },
        department: {
          label: "Department",
        },
        salary: {
          label: "Salary",
        },
      },
      search: {
        enabled: true,
      },
      dataAdapter: {
        fetchData: ({ filters, sortings, search }) => {
          filters.department?.map((department) => {
            console.log("department", department)
          })
          return createPromiseDataFetch()({
            filters,
            sortings,
            search,
            navigationFilters: {},
          })
        },
      },
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
          description: "Modify user information",
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
      primaryActions: () => ({
        label: "New employee",
        icon: Add,
        onClick: () => console.log(`Primary action`),
      }),
      secondaryActions: () => [
        {
          label: "Export",
          icon: Upload,
          onClick: () => console.log(`Export`),
        },
        {
          label: "Import",
          icon: Download,
          onClick: () => console.log(`Import`),
        },
      ],
    })

    return (
      <div className="space-y-4">
        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
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
                    info: "Team that the employee belongs to",
                  },
                  {
                    label: "Salary",
                    render: (item) => ({
                      type: "amount",
                      value: item.salary,
                    }),
                    align: "right",
                    sorting: "salary",
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

// Basic examples with single visualization
export const WithLinkedItems: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      itemUrl: (item) => {
        if (item.id === "user-1") return undefined
        return `/users/${item.id}`
      },
      sortings: {
        name: {
          label: "Name",
        },
        email: {
          label: "Email",
        },
        role: {
          label: "Role",
        },
        department: {
          label: "Department",
        },
        salary: {
          label: "Salary",
        },
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      selectable: (item) => item.id,
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
          type: "secondary",
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
    })

    return (
      <div className="space-y-4">
        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (item) => ({
                      type: "person",
                      value: {
                        firstName: item.name.split(" ")[0],
                        lastName: item.name.split(" ")[1],
                        badge: {
                          type: "module",
                          module: "inbox",
                          tooltip: "Inbox",
                        },
                      },
                    }),
                    width: 100,
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
                ],
              },
            },
            {
              type: "card",
              options: {
                title: (item) => item.name,
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
                    label: "Manager",
                    icon: Person,
                    render: (item) => ({
                      type: "person",
                      value: {
                        firstName: item.manager.split(" ")[0],
                        lastName: item.manager.split(" ")[1],
                      },
                    }),
                  },
                ],
              },
            },
          ]}
        />
      </div>
    )
  },
}

export const BasicCardView: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const dataSource = useDataCollectionSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      itemUrl: (item) => `/users/${item.id}`,
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
        },
        {
          label: "Share",
          icon: Share,
          onClick: () => console.log(`Sharing ${item.name}`),
        },
      ],
      secondaryActions: () => [
        {
          label: "Import",
          icon: Download,
          onClick: () => console.log(`Import`),
        },
        {
          label: "Export",
          icon: Upload,
          onClick: () => console.log(`Export`),
        },
      ],
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[mockVisualizations.card]}
      />
    )
  },
}

// Examples with different property renderers
export const RendererTypes: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      search: {
        enabled: true,
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                      badge:
                        item.index % 3 === 0
                          ? {
                              type: "module",
                              module: "inbox",
                            }
                          : item.index % 3 === 1
                            ? {
                                type: "warning",
                                icon: Placeholder,
                              }
                            : undefined,
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
                  label: "Company",
                  render: () => ({
                    type: "avatarList",
                    value: {
                      type: "company",
                      avatarList: [
                        {
                          type: "company",
                          name: "Test company",
                          src: "https://cdn.join-staging.com/products/controlling_portal_de_icon.jpeg",
                        },
                      ],
                    },
                  }),
                },
                {
                  label: "Role",
                  render: (item) => ({
                    type: "status",
                    value: {
                      status: "info",
                      label: item.role,
                    },
                  }),
                  sorting: "role",
                },
                {
                  label: "DotTag",
                  render: (item) => ({
                    type: "dotTag",
                    value: {
                      label: item.email,
                      color: getMockValue(DOT_TAG_COLORS_MOCK, item.index),
                    },
                  }),
                  sorting: "email",
                },
                {
                  label: "Department",
                  render: (item) => ({
                    type: "tag",
                    value: {
                      label: item.department,
                      icon: Target,
                    },
                  }),
                  sorting: "department",
                },
                {
                  label: "Teamates",
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
                  sorting: "department",
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const CustomCardProperties: Story = {
  parameters: {
    a11y: {
      skipCi: true,
    },
  },
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                {
                  label: "Role",
                  icon: Briefcase,
                  render: (item) => item.role,
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
                      status:
                        item.status === "active" ? "positive" : "critical",
                      label:
                        item.status.charAt(0).toUpperCase() +
                        item.status.slice(1),
                    },
                  }),
                },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

// Examples with multiple visualizations
export const SwitchableVisualizations: Story = {
  render: () => <ExampleComponent />,
}

export const WithSelectableAndBulkActions: Story = {
  render: () => (
    <ExampleComponent
      selectable={(item) => item.id}
      bulkActions={({ allSelected, selectedCount }) => {
        if (selectedCount === 2) {
          return {
            warningMessage: "Selected items have different action options",
          }
        }

        return {
          primary: [
            {
              label: allSelected ? "Edit All" : "Edit",
              icon: Pencil,
              id: "edit-all",
            },
            {
              label: "Download",
              icon: Download,
              id: "download",
            },
            {
              label: allSelected ? "Delete All" : "Delete",
              icon: Delete,
              id: "delete-all",
              critical: true,
            },
            {
              label: "Another primary action",
              icon: Delete,
              id: "delete-all2",
            },
          ],
          secondary: [
            ...(allSelected
              ? [
                  {
                    label: "Star All",
                    icon: Star,
                    id: "star-all",
                  },
                ]
              : [
                  {
                    label: "Star",
                    icon: Star,
                    id: "star",
                  },
                ]),
            ...(allSelected === "indeterminate"
              ? [
                  {
                    label: "Apply to all except unselected",
                    icon: Star,
                    id: "star-all",
                  },
                ]
              : []),
          ],
        }
      }}
    />
  ),
}

export const WithSelectableAndDefaultSelectedItems: Story = {
  render: () => (
    <ExampleComponent
      selectable={(item) => item.id}
      defaultSelectedItems={{
        allSelected: false,
        items: [
          { id: mockUsers[0].id, checked: true },
          { id: mockUsers[1].id, checked: false },
          { id: mockUsers[2].id, checked: true },
        ],
      }}
    />
  ),
}
export const WithSelectableAndDefaultSelectedGroups: Story = {
  render: () => (
    <ExampleComponent
      selectable={(item) => item.id}
      grouping={{
        collapsible: true,
        mandatory: true,
        defaultOpenGroups: ["group1", "group2"],
        groupBy: {
          department: {
            name: "department",
            label: (department) => department,
          },
        },
      }}
      defaultSelectedItems={{
        allSelected: false,
        items: [
          { id: mockUsers[0].id, checked: true },
          { id: mockUsers[2].id, checked: true },
        ],
        groups: [{ groupId: "Product", checked: true }],
      }}
    />
  ),
}

const JsonVisualization = ({
  source,
}: {
  source: ReturnType<
    typeof useDataCollectionSource<
      (typeof mockUsers)[number],
      typeof filters,
      typeof sortings,
      SummariesDefinition,
      ItemActionsDefinition<(typeof mockUsers)[number]>,
      NavigationFiltersDefinition,
      GroupingDefinition<(typeof mockUsers)[number]>
    >
  >
}) => {
  const { data, isLoading } = useDataCollectionData(source)

  if (isLoading) {
    return (
      <pre className="bg-muted overflow-auto rounded-lg p-4">
        <code>Loading...</code>
      </pre>
    )
  }

  return (
    <pre className="overflow-auto rounded-lg bg-f1-background-info p-4">
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  )
}

export const WithCustomJsonView: Story = {
  render: () => {
    type MockUser = (typeof mockUsers)[number]
    type MockActions = ItemActionsDefinition<MockUser>

    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const dataSource = useDataCollectionSource<
      MockUser,
      typeof filters,
      typeof sortings,
      SummariesDefinition,
      MockActions,
      NavigationFiltersDefinition,
      GroupingDefinition<MockUser>
    >({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "custom",
            label: "JSON View",
            icon: Ai,
            component: ({ source }) => <JsonVisualization source={source} />,
          },
          mockVisualizations.table,
          mockVisualizations.card,
          mockVisualizations.list,
        ]}
      />
    )
  },
}

// Example usage with table visualization
export const WithTableVisualization: Story = {
  render: () => {
    const source = useDataCollectionSource({
      filters,
      sortings,
      defaultSorting: {
        field: "name",
        order: "asc",
      },
      dataAdapter: createDataAdapter({
        data: mockUsers,
        delay: 500,
      }),
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
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
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example usage with card visualization
export const WithCardVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const source = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter({
        data: mockUsers,
        delay: 1000,
        useObservable: true,
      }),
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[mockVisualizations.card]}
      />
    )
  },
}

// Example usage with multiple visualizations
export const WithMultipleVisualizations: Story = {
  render: () => {
    const source = useDataCollectionSource({
      filters,
      sortings,
      dataAdapter: createDataAdapter({
        data: mockUsers,
        delay: 500,
      }),
      lanes: [
        { id: "eng", filters: { department: ["Engineering"] } },
        { id: "prod", filters: { department: ["Product"] } },
        { id: "design", filters: { department: ["Design"] } },
        { id: "other", filters: { department: ["Marketing"] } },
      ],
    })

    const visualizations = Object.values(
      getMockVisualizations({
        frozenColumns: 0,
      })
    )

    return <OneDataCollection source={source} visualizations={visualizations} />
  },
}

export const WithPagesPagination: Story = {
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const source = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      selectable: (item) => (item.id !== "user-1a" ? item.id : undefined),
      bulkActions: (allSelected) => {
        return {
          primary: [
            {
              label: allSelected ? "Delete All" : "Delete",
              icon: Delete,
              id: "delete-all",
            },
          ],
        }
      },
      dataAdapter: createDataAdapter({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "pages",
      }),
    })

    return (
      <OneDataCollection
        source={source}
        onSelectItems={(selectedItems) => {
          console.log("Selected items", "->", selectedItems)
        }}
        onBulkAction={(action, selectedItems) => {
          console.log(`Bulk action: ${action}`, "->", selectedItems)
        }}
        visualizations={[
          mockVisualizations.table,
          mockVisualizations.card,
          mockVisualizations.list,
        ]}
      />
    )
  },
}

export const WithInfiniteScrollPagination: Story = {
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const source = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      selectable: (item) => (item.id !== "user-1a" ? item.id : undefined),
      bulkActions: (allSelected) => {
        return {
          primary: [
            {
              label: allSelected ? "Delete All" : "Delete",
              icon: Delete,
              id: "delete-all",
            },
          ],
        }
      },
      dataAdapter: createDataAdapter({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "infinite-scroll",
        perPage: 10,
      }),
    })

    return (
      <div className="space-y-4" style={{ height: "500px", overflow: "auto" }}>
        <OneDataCollection
          source={source}
          onSelectItems={(selectedItems) => {
            console.log("Selected items", "->", selectedItems)
          }}
          onBulkAction={(action, selectedItems) => {
            console.log(`Bulk action: ${action}`, "->", selectedItems)
          }}
          visualizations={[
            mockVisualizations.table,
            mockVisualizations.card,
            mockVisualizations.list,
          ]}
        />
      </div>
    )
  },
}

// This is a test to see if the table visualization works with one column
export const WithInfiniteScrollPaginationOneCol: Story = {
  render: () => {
    const [presetsLoading, setPresetsLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setPresetsLoading(false)
      }, 2000)
    }, [])

    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const source = useDataCollectionSource({
      filters,
      presets: filterPresets,
      presetsLoading,
      sortings,
      selectable: (item) => (item.id !== "user-1a" ? item.id : undefined),
      bulkActions: (allSelected) => {
        return {
          primary: [
            {
              label: allSelected ? "Delete All" : "Delete",
              icon: Delete,
              id: "delete-all",
            },
          ],
        }
      },
      dataAdapter: createDataAdapter({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "infinite-scroll",
        perPage: 10,
      }),
    })

    return (
      <div className="space-y-4" style={{ height: "500px", overflow: "auto" }}>
        <OneDataCollection
          source={source}
          onSelectItems={(selectedItems) => {
            console.log("Selected items", "->", selectedItems)
          }}
          onBulkAction={(action, selectedItems) => {
            console.log(`Bulk action: ${action}`, "->", selectedItems)
          }}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [{ label: "Name", render: (item) => item.name }],
              },
            },
            mockVisualizations.card,
            mockVisualizations.list,
          ]}
        />
      </div>
    )
  },
}

export const WithSynchronousData: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    const source = useDataCollectionSource<
      MockUser,
      typeof filters,
      typeof sortings,
      SummariesDefinition,
      ItemActionsDefinition<MockUser>,
      NavigationFiltersDefinition,
      GroupingDefinition<MockUser>
    >({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: ({ filters, sortings, navigationFilters }) => {
          // Ensure sortings are properly applied
          return {
            records: filterUsers(
              mockUsers,
              filters,
              sortings,
              navigationFilters
            ),
          }
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          mockVisualizations.table,
          mockVisualizations.list,
          mockVisualizations.card,
        ]}
      />
    )
  },
}

export const WithAdvancedActions: Story = {
  render: () => {
    const source = useDataCollectionSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
      itemActions: (item) => [
        // Basic actions
        {
          label: "View Details",
          icon: Ai,
          onClick: () => console.log(`Viewing ${item.name}`),
          description: "See complete user information",
        },
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
        },
        { type: "separator" },
        // Conditional actions based on item state
        ...(item.status === "active"
          ? [
              {
                label: "Deactivate User",
                icon: Delete,
                onClick: () => console.log(`Deactivating ${item.name}`),
                description: "Temporarily disable account",
              } as const,
            ]
          : [
              {
                label: "Activate User",
                icon: ArrowRight,
                onClick: () => console.log(`Activating ${item.name}`),
                description: "Re-enable account",
              } as const,
            ]),
        // Conditional visibility
        {
          label: "Download Data",
          icon: Download,
          onClick: () => console.log(`Downloading data for ${item.name}`),
          enabled: item.status === "active",
        },
        // Critical action with confirmation
        {
          label: "Delete Permanently",
          icon: Delete,
          onClick: () => {
            if (confirm(`Are you sure you want to delete ${item.name}?`)) {
              console.log(`Deleting ${item.name}`)
            }
          },
          critical: true,
          description: "This action cannot be undone",
          enabled: item.department === "Engineering",
        },
        // Toggle action
        {
          label: item.isStarred ? "Remove Star" : "Add Star",
          icon: Star,
          onClick: () => console.log(`Toggling star for ${item.name}`),
          description: item.isStarred
            ? "Remove from favorites"
            : "Add to favorites",
        },
        // Copy action
        {
          label: "Duplicate User",
          icon: Share,
          onClick: () => console.log(`Duplicating ${item.name}`),
          description: "Create a copy of this user",
        },
      ],
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
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
                { label: "Status", render: (item) => item.status },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Search functionality demonstration
export const WithSyncSearch: Story = {
  render: () => {
    const mockUserData = [
      {
        id: "user-1",
        name: "John Doe",
        email: "john@example.com",
        role: "Senior Engineer",
        department: getMockValue(DEPARTMENTS_MOCK as unknown as string[], 0),
        status: "active",
        isStarred: true,
      },
      {
        id: "user-2",
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Product Manager",
        department: getMockValue(DEPARTMENTS_MOCK as unknown as string[], 1),
        status: "active",
        isStarred: false,
      },
      {
        id: "user-3",
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "UX Designer",
        department: getMockValue(DEPARTMENTS_MOCK as unknown as string[], 2),
        status: "active",
        isStarred: false,
      },
      {
        id: "user-4",
        name: "Bob Brown",
        email: "bob@example.com",
        role: "Developer",
        department: getMockValue(DEPARTMENTS_MOCK as unknown as string[], 0),
        status: "inactive",
        isStarred: true,
      },
      {
        id: "user-5",
        name: "Emma Wilson",
        email: "emma@example.com",
        role: "Marketing Lead",
        department: getMockValue(DEPARTMENTS_MOCK as unknown as string[], 3),
        status: "active",
        isStarred: false,
      },
    ]

    // TODO allow to infer the type of the data source
    const source = useDataCollectionSource<
      (typeof mockUserData)[number],
      typeof filters,
      typeof sortings,
      SummariesDefinition,
      ItemActionsDefinition<(typeof mockUserData)[number]>,
      NavigationFiltersDefinition,
      GroupingDefinition<(typeof mockUserData)[number]>
    >({
      filters,
      sortings,
      search: {
        enabled: true,
        // Set sync to true to see immediate search results without debounce
        sync: true,
      },
      dataAdapter: {
        fetchData: ({ filters, sortings, search }) => {
          // Store mock data in a local variable for filtering

          // Apply search filter if search term is provided
          let filteredUsers = [...mockUserData]

          if (search) {
            const searchLower = search.toLowerCase()
            filteredUsers = filteredUsers.filter(
              (user) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.role.toLowerCase().includes(searchLower) ||
                user.department.toLowerCase().includes(searchLower)
            )
            console.log(
              `Searching for: "${search}" - Found ${filteredUsers.length} results`
            )
          }

          // Apply department filter if provided
          const departmentFilter = filters.department as string[] | undefined
          if (departmentFilter && departmentFilter.length > 0) {
            filteredUsers = filteredUsers.filter((user) =>
              departmentFilter.includes(user.department)
            )
          }

          // Apply sorting if provided
          if (sortings) {
            sortings.forEach(({ field, order }) => {
              filteredUsers.sort((a, b) => {
                const aValue = a[field as keyof (typeof mockUserData)[number]]
                const bValue = b[field as keyof (typeof mockUserData)[number]]

                if (typeof aValue === "string" && typeof bValue === "string") {
                  return order === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue)
                }

                return 0
              })
            })
          }

          return { records: filteredUsers }
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
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
              ],
            },
          },
          {
            type: "card",
            options: {
              title: (item) => item.name,
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
                      status:
                        item.status === "active" ? "positive" : "critical",
                      label:
                        item.status.charAt(0).toUpperCase() +
                        item.status.slice(1),
                    },
                  }),
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

// Example with async search functionality
export const WithAsyncSearch: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    type MockUser = (typeof mockUsers)[number]
    type MockActions = ItemActionsDefinition<MockUser>

    const source = useDataCollectionSource<
      MockUser,
      typeof filters,
      typeof sortings,
      SummariesDefinition,
      MockActions,
      NavigationFiltersDefinition,
      GroupingDefinition<MockUser>
    >({
      filters,
      sortings,
      search: {
        enabled: true,
        // Set sync to false to simulate async search with debounce
        sync: false,
        // Set debounce time to 300ms
        debounceTime: 300,
      },
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
          description: "Modify user information",
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
      ],
      dataAdapter: {
        fetchData: ({ filters, sortings, search }) => {
          // Simulate an API call with a delay
          return new Promise((resolve) => {
            setTimeout(() => {
              const mockUserData = generateMockUsers(20)
              let filteredUsers = [...mockUserData]

              if (search) {
                const searchLower = search.toLowerCase()
                filteredUsers = filteredUsers.filter(
                  (user) =>
                    user.name.toLowerCase().includes(searchLower) ||
                    user.email.toLowerCase().includes(searchLower) ||
                    user.role.toLowerCase().includes(searchLower) ||
                    user.department.toLowerCase().includes(searchLower)
                )
                console.log(
                  `Async search for: "${search}" - Found ${filteredUsers.length} results`
                )
              }

              // Apply department filter if provided
              const departmentFilter = filters.department as
                | string[]
                | undefined
              if (departmentFilter && departmentFilter.length > 0) {
                filteredUsers = filteredUsers.filter((user) =>
                  departmentFilter.includes(user.department)
                )
              }

              // Apply sorting if provided
              if (sortings) {
                sortings.forEach(({ field, order }) => {
                  const direction = order

                  filteredUsers.sort((a, b) => {
                    const aValue = a[field as keyof MockUser]
                    const bValue = b[field as keyof MockUser]

                    if (
                      typeof aValue === "string" &&
                      typeof bValue === "string"
                    ) {
                      return direction === "asc"
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue)
                    }

                    return 0
                  })
                })
              }

              resolve({ records: filteredUsers })
            }, 1000) // Simulate 1 second delay for API response
          })
        },
      },
    })

    return (
      <OneDataCollection
        source={source}
        visualizations={[
          mockVisualizations.table,
          mockVisualizations.card,
          mockVisualizations.list,
        ]}
      />
    )
  },
}

// Example showcasing table column properties (width, info, sticky, hidden)
export const TableColumnProperties: Story = {
  render: () => {
    // Generate more mock users for this example to better demonstrate scrolling with sticky columns
    const extendedMockUsers = generateMockUsers(50).map((mockUser, index) => ({
      ...mockUser,
      status: index % 4 === 0 ? "inactive" : "active",
      isStarred: index % 5 === 0,
      salary: 50000 + index * 1000,
      location:
        index % 3 === 0 ? "Remote" : index % 3 === 1 ? "Office" : "Hybrid",
      startDate: getMockValue(START_DATE_MOCK, index)
        .toISOString()
        .split("T")[0],
      performance: getMockValue(PERFORMANCE_LITERAL_MOCK, index),
      yearsExperience: getMockValue(YEARS_OF_EXPERIENCIE_MOCK, index),
      team: getMockValue(TEAMS_MOCK, index),
      certifications: getMockValue(CERTIFICATIONS_MOCK, index),
      education: getMockValue(EDUCATION_MOCK, index),
      languages: getMockValue(LANGUAGES_MOCK, index),
      projects: getMockValue(PROJECTS_MOCK, index),
      performanceScore: getMockValue(PERFORMANCE_LITERAL_MOCK, index),
      lastReview: new Date(2023, index % 12, 1 + (index % 28))
        .toISOString()
        .split("T")[0],
      nextReview: new Date(2024, index % 12, 1 + (index % 28))
        .toISOString()
        .split("T")[0],
    }))

    // Define extended sortings for the example
    const extendedSortings = {
      name: { label: "Name" },
      email: { label: "Email" },
      role: { label: "Role" },
      department: { label: "Department" },
      salary: { label: "Salary" },
      location: { label: "Location" },
      startDate: { label: "Start Date" },
      performance: { label: "Performance" },
      yearsExperience: { label: "Experience" },
      team: { label: "Team" },
      certifications: { label: "Certifications" },
      education: { label: "Education" },
      languages: { label: "Languages" },
      projects: { label: "Projects" },
      performanceScore: { label: "Score" },
      lastReview: { label: "Last Review" },
      nextReview: { label: "Next Review" },
    } as const

    // Create a custom data adapter for the extended data structure
    const dataAdapter = createDataAdapter<
      (typeof extendedMockUsers)[number],
      typeof filters,
      NavigationFiltersDefinition
    >({
      data: extendedMockUsers,
      delay: 300,
    })

    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings: extendedSortings,
      dataAdapter,
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "ID",
                  render: (item) => item.id,
                  hidden: true, // This column will be hidden
                },
                {
                  label: "Name",
                  render: (item) => item.name,
                  sorting: "name",
                  width: 100,
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                  sorting: "email",
                  width: 150,
                },
                {
                  label: "Role",
                  render: (item) => item.role,
                  sorting: "role",
                  width: 100,
                },
                {
                  label: "Department",
                  render: (item) => item.department,
                  sorting: "department",
                },
                {
                  label: "Years Experience",
                  render: (item) => item.yearsExperience,
                  sorting: "yearsExperience",
                },
                {
                  label: "Team",
                  render: (item) => item.team,
                  sorting: "team",
                },
                {
                  label: "Salary",
                  render: (item) => `$${item.salary.toLocaleString()}`,
                  sorting: "salary",
                  info: "Annual gross salary before taxes and deductions", // Info tooltip
                },
                {
                  label: "Location",
                  render: (item) => item.location,
                  sorting: "location",
                },
                {
                  label: "Start Date",
                  render: (item) => item.startDate,
                  sorting: "startDate",
                },
                {
                  label: "Certifications",
                  render: (item) => item.certifications,
                  sorting: "certifications",
                },
                {
                  label: "Education",
                  render: (item) => item.education,
                  sorting: "education",
                },
                {
                  label: "Languages",
                  render: (item) => ({
                    type: "tagList",
                    value: {
                      type: "raw",
                      tags: item.languages.split(",").map((language) => ({
                        text: language,
                        description: language,
                      })),
                      max: 2,
                    },
                  }),
                  sorting: "languages",
                  width: 360, // Wider column for longer text
                },
                {
                  label: "Projects",
                  render: (item) => item.projects,
                  sorting: "projects",
                },
                {
                  label: "Performance",
                  render: (item) => item.performance,
                  sorting: "performance",
                  info: "Based on the last annual performance review", // Info tooltip
                },
                {
                  label: "Score",
                  render: (item) => item.performanceScore,
                  sorting: "performanceScore",
                },
                {
                  label: "Last Review",
                  render: (item) => item.lastReview,
                  sorting: "lastReview",
                },
                {
                  label: "Next Review",
                  render: (item) => item.nextReview,
                  sorting: "nextReview",
                },
              ],
            },
          },
        ]}
      />
    )
  },
}

export const TableWithNoFiltersAndSearch: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      sortings: {
        name: { label: "Name" },
        email: { label: "Email" },
        role: { label: "Role" },
        department: { label: "Department" },
      },
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
          description: "Modify user information",
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
        },
      ],
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
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
              ],
            },
          },
        ]}
      />
    )
  },
}

export const TableWithNoFilters: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      sortings: {
        name: { label: "Name" },
        email: { label: "Email" },
        role: { label: "Role" },
        department: { label: "Department" },
      },
      search: {
        enabled: true,
        sync: false,
        debounceTime: 300,
      },
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () => console.log(`Editing ${item.name}`),
          description: "Modify user information",
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
        },
      ],
      dataAdapter: {
        fetchData: ({ search }) => {
          let filteredUsers = [...mockUsers]

          if (search) {
            const searchLower = search.toLowerCase()
            filteredUsers = filteredUsers.filter(
              (user) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.role.toLowerCase().includes(searchLower) ||
                user.department.toLowerCase().includes(searchLower)
            )
          }

          return Promise.resolve({ records: filteredUsers })
        },
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
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
              ],
            },
          },
        ]}
      />
    )
  },
}

export const TableWithSecondaryActions: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      sortings: {
        name: { label: "Name" },
        email: { label: "Email" },
        role: { label: "Role" },
        department: { label: "Department" },
      },
      secondaryActions: () => [
        {
          label: "View Profile",
          icon: Ai,
          onClick: () => console.log(`Viewing profile`),
        },
      ],
      dataAdapter: {
        fetchData: ({ search }) => {
          let filteredUsers = [...mockUsers]

          if (search) {
            const searchLower = search.toLowerCase()
            filteredUsers = filteredUsers.filter(
              (user) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.role.toLowerCase().includes(searchLower) ||
                user.department.toLowerCase().includes(searchLower)
            )
          }

          return Promise.resolve({ records: filteredUsers })
        },
      },
    })

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
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
              ],
            },
          },
        ]}
      />
    )
  },
}
