import { Meta, StoryObj } from "@storybook/react-vite"

import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary.ts"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { Ai, Delete, Download, Pencil, Person, Upload } from "@/icons/app"

import {
  DataCollectionSource,
  useDataCollectionSource,
} from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { GroupingDefinition } from "../../types"
import { Visualization } from "../../visualizations/collection/types"
import { buildSecondaryActions } from "../mockData"

const meta = {
  title: "Data Collection/Collection Actions",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Mock data with various states to demonstrate conditional actions
const mockUsers = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
    department: "Engineering",
    status: "active",
    isStarred: true,
    permissions: {
      canEdit: true,
      canDelete: true,
      canShare: true,
    },
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
    department: "Product",
    status: "active",
    isStarred: false,
    permissions: {
      canEdit: true,
      canDelete: false,
      canShare: true,
    },
  },
  {
    id: "user-3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Designer",
    department: "Design",
    status: "inactive",
    isStarred: false,
    permissions: {
      canEdit: false,
      canDelete: false,
      canShare: true,
    },
  },
  {
    id: "user-4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Marketing Lead",
    department: "Marketing",
    status: "active",
    isStarred: true,
    permissions: {
      canEdit: true,
      canDelete: true,
      canShare: false,
    },
  },
]

function BaseStory<
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<(typeof mockUsers)[number]>,
  NavigationFilters extends NavigationFiltersDefinition,
>({
  dataSource,
  visualizations,
}: {
  dataSource: DataCollectionSource<
    (typeof mockUsers)[number],
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    GroupingDefinition<(typeof mockUsers)[number]>
  >
  visualizations?: ReadonlyArray<
    Visualization<
      (typeof mockUsers)[number],
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      GroupingDefinition<(typeof mockUsers)[number]>
    >
  >
}) {
  return (
    <div className="space-y-8">
      <OneDataCollection
        source={dataSource}
        visualizations={
          visualizations ?? [
            {
              type: "table",
              options: {
                columns: [
                  { label: "Name", render: (item) => item.name },
                  { label: "Email", render: (item) => item.email },
                  { label: "Role", render: (item) => item.role },
                  { label: "Department", render: (item) => item.department },
                  {
                    label: "Status",
                    render: (item) => ({
                      type: "status",
                      value: {
                        status:
                          item.status === "active" ? "positive" : "warning",
                        label: item.status,
                      },
                    }),
                  },
                ],
              },
            },
          ]
        }
      />
    </div>
  )
}

// Basic story showing all action types
export const BasicActionsExample: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
      primaryActions: () => ({
        label: "Create user",
        icon: Ai,
        onClick: () =>
          new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
            console.log(`Creating a user`)
          ),
      }),
      secondaryActions: {
        expanded: 0,
        actions: buildSecondaryActions,
      },
    })

    return <BaseStory dataSource={dataSource} />
  },
}

// Basic story showing all action types
export const MultiplePrimaryActionsExample: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
      primaryActions: () => [
        {
          label: "Create user",
          icon: Ai,
          onClick: () => console.log(`Creating a user`),
        },
        {
          label: "Create admin",
          icon: Person,
          onClick: () => console.log(`Creating a admin`),
          disabled: true,
        },
      ],
      secondaryActions: {
        expanded: 0,
        actions: buildSecondaryActions,
      },
    })

    return <BaseStory dataSource={dataSource} />
  },
}

// Basic story showing all action types
export const WithExpandedActionsExample: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ],
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters }) =>
          Promise.resolve({
            records: mockUsers.filter((user) =>
              filters.status?.includes(user.status)
            ),
          }),
      },
      primaryActions: () => ({
        label: "Create user",
        icon: Ai,
        onClick: () => console.log(`Creating a user`),
      }),
      secondaryActions: {
        expanded: 1,
        actions: buildSecondaryActions,
      },
    })

    dataSource.setCurrentFilters({
      status: ["active"],
    })

    return <BaseStory dataSource={dataSource} />
  },
}

// Basic story showing all action types
export const WithGroupedExpandedActionsExample: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ],
          },
        },
      },
      dataAdapter: {
        fetchData: ({ filters }) =>
          Promise.resolve({
            records: mockUsers.filter((user) =>
              filters.status?.includes(user.status)
            ),
          }),
      },
      primaryActions: () => ({
        label: "Create user",
        icon: Ai,
        onClick: () => console.log(`Creating a user`),
      }),
      secondaryActions: {
        expanded: 2,
        actions: () => [
          [
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
          ],
          [
            {
              label: "Delete all",
              icon: Delete,
              onClick: () => console.log(`Delete`),
              description: "User actions",
            },
          ],
        ],
      },
    })

    dataSource.setCurrentFilters({
      status: ["active"],
    })

    return <BaseStory dataSource={dataSource} />
  },
}

// Basic story showing all action types
export const HiddenLabelExpandedActionsExample: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
      primaryActions: () => ({
        label: "Create user",
        icon: Ai,
        onClick: () => console.log(`Creating a user`),
      }),
      secondaryActions: {
        expanded: 1,
        actions: () => {
          const actions = buildSecondaryActions()
          actions.forEach((action) => {
            action.hideLabelWhenExpanded = true
          })
          return actions
        },
      },
    })

    return <BaseStory dataSource={dataSource} />
  },
}

// Example showing how actions can be used with card visualization
export const CardActionsExample: Story = {
  parameters: {
    a11y: {
      skipCi: true,
    },
  },
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
      primaryActions: () => ({
        label: "Create user",
        icon: Ai,
        onClick: () => console.log(`Creating a user`),
      }),
      secondaryActions: {
        expanded: 1,
        actions: () => {
          const actions = buildSecondaryActions()
          actions.forEach((action) => {
            action.hideLabelWhenExpanded = true
          })
          return actions
        },
      },
    })

    return (
      <BaseStory
        dataSource={dataSource}
        visualizations={[
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Name", render: (item) => item.name },
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
                { label: "Status", render: (item) => item.status },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}
