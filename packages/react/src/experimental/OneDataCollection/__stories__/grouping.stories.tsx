import { Delete, Download, Pencil, Star } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"

import { useDataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { GroupingDefinition } from "@/hooks/datasource"
import { OneDataCollection } from ".."
import {
  createDataAdapter,
  ExampleComponent,
  filterPresets,
  filters,
  generateMockUsers,
  MockUser,
  mockUsers,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Grouping",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Grouping is a feature that allows you to group data by a specific field. This is useful for displaying data in a more organized way.",
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
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta

type Story = StoryObj<typeof meta>

// Examples with multiple visualizations
export const WithGrouping: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      currentGrouping={{
        field: "role",
        order: "desc",
      }}
      grouping={{
        mandatory: true,
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId).length
            },
          },
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) => {
              return mockUsers.filter((user) => user.role === groupId).length
            },
          },
          "permissions.read": {
            name: "Read",
            label: (groupId) => (groupId ? "Read Access" : "No Access"),
            itemCount: (groupId) => {
              return mockUsers.filter((user) => user.permissions?.read === groupId).length
            },
          },
          "permissions.write": {
            name: "Write",
            label: (groupId) => (groupId ? "Write Access" : "No Write Access"),
            itemCount: (groupId) => {
              return mockUsers.filter((user) => user.permissions?.read === groupId).length
            },
          },
        },
      }}
    />
  ),
}

export const WithOptionalGrouping: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      grouping={{
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId).length
            },
          },
        },
      }}
    />
  ),
}

export const CollapsibleGrouping: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      grouping={{
        collapsible: true,
        mandatory: true,
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId).length
            },
          },
        },
      }}
    />
  ),
}

export const CollapsibleGroupingWithDefaultOpenGroups: Story = {
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const grouping: GroupingDefinition<MockUser> = {
      mandatory: true,
      collapsible: true,
      groupBy: {
        department: {
          name: "Department",
          label: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return groupId
          },
          itemCount: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            return paginatedMockUsers.filter((user) => user.department === groupId).length
          },
        },
        role: {
          name: "Role",
          label: (groupId) => groupId,
          itemCount: (groupId) => {
            return paginatedMockUsers.filter((user) => user.role === groupId).length
          },
        },
      },
    }

    const source = useDataCollectionSource({
      selectable: (item) => item.id,
      filters,
      presets: filterPresets,
      sortings,
      grouping,
      currentGrouping: {
        field: "department",
        order: "asc",
      },
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
          {
            type: "card",
            options: {
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

export const WithPaginationAndGrouping: Story = {
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const grouping: GroupingDefinition<(typeof mockUsers)[number]> = {
      mandatory: true,
      collapsible: true,
      groupBy: {
        department: {
          name: "Department",
          label: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return groupId
          },
          itemCount: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            return paginatedMockUsers.filter((user) => user.department === groupId).length
          },
        },
        role: {
          name: "Role",
          label: (groupId) => groupId,
          itemCount: (groupId) => {
            return paginatedMockUsers.filter((user) => user.role === groupId).length
          },
        },
      },
    }

    const dataAdapter = createDataAdapter({
      data: paginatedMockUsers,
      delay: 500,
      paginationType: "pages",
    })

    const source = useDataCollectionSource({
      selectable: (item) => item.id,
      filters,
      presets: filterPresets,
      sortings,
      grouping,
      currentGrouping: {
        field: "department",
        order: "asc",
      },
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
      dataAdapter,
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
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

export const WithInfiniteScrollPaginationAndGrouping: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50)

    const grouping: GroupingDefinition<(typeof mockUsers)[number]> = {
      mandatory: true,
      collapsible: true,
      groupBy: {
        department: {
          name: "Department",
          label: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return groupId
          },
          itemCount: async (groupId) => {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            return paginatedMockUsers.filter((user) => user.department === groupId).length
          },
        },
        role: {
          name: "Role",
          label: (groupId) => groupId,
          itemCount: (groupId) => {
            return paginatedMockUsers.filter((user) => user.role === groupId).length
          },
        },
      },
    }

    const source = useDataCollectionSource({
      selectable: (item) => item.id,
      filters,
      presets: filterPresets,
      sortings,
      grouping: {
        ...grouping,
        defaultOpenGroups: ["Engineering"],
      },
      currentGrouping: {
        field: "department",
        order: "asc",
      },
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
              cardProperties: [
                { label: "Email", render: (item) => item.email },
                { label: "Role", render: (item) => item.role },
                { label: "Department", render: (item) => item.department },
              ],
              title: (item) => item.name,
            },
          },
        ]}
      />
    )
  },
}

export const SelectableGrouping: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      selectable={(item) => item.id}
      grouping={{
        mandatory: true,
        collapsible: true,
        defaultOpenGroups: ["Engineering"],
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId).length
            },
          },
        },
      }}
    />
  ),
}

export const SelectableGroupingAndActions: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      selectable={(item) => item.id}
      bulkActions={({ allSelected }) => {
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
      grouping={{
        mandatory: true,
        collapsible: true,
        defaultOpenGroups: ["Engineering"],
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: async (groupId) => {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return mockUsers.filter((user) => user.department === groupId).length
            },
          },
        },
      }}
    />
  ),
}
