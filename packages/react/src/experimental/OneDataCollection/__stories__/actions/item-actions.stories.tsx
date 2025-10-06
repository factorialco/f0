import { Ai, Download, Pencil, Upload } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import { OneDataCollection } from "../.."
import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "../../item-actions"

const meta = {
  title: "Data Collection/Item Actions",
  tags: ["no-sidebar", "internal"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: [
          "Data collection actions are a way to add actions to a data collection. There actions are displayed in the top right button or top right actions menu (three dots). The actions are data collection specific and are not related to the items in the collection. (check Item Actions for item specific actions)",
          "The actions are defined in the `itemActions` prop of the `OneDataCollection` component.",
          "You can define the type action: 'primary', 'secondary', 'other', but the visualizacion will depend on the view. For example, in a table, there are no distinction between types, but in a card view, the primary action and the secondary ones will be displayed in the card footer and the other actions will be displayed in the card actions menu.",
        ]
          .map((p) => <p key={p}>{p}</p>)
          .join(""),
      },
    },
  },
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

const createUserActions = (): ItemActionsDefinition<
  (typeof mockUsers)[number]
> => {
  return (user: (typeof mockUsers)[number]) => {
    if (user.id === "user-1") {
      return undefined
    }
    return [
      // Basic action with icon
      {
        label: "View Profile",
        icon: Ai,
        onClick: () => console.log(`Viewing ${user.name}'s profile`),
      },

      // Action with description
      {
        label: "Edit User",
        icon: Pencil,
        onClick: () => console.log(`Editing ${user.name}`),
        description: "Modify user information",
        enabled: user.permissions.canEdit,
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
}

// Basic story showing all action types
export const BasicActionsExample: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
      itemActions: createUserActions(),
    })

    return (
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Items Actions Example</h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example demonstrates various types of actions that can be used
            in Collections. Click in the top right button or top right actions
            menu (three dots) to see the available actions for the data
            collection.
          </p>
        </div>

        <OneDataCollection
          source={dataSource}
          visualizations={[
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
          ]}
        />
      </div>
    )
  },
}

// Example showing how actions can be used with card visualization
export const CardActionsExample: Story = {
  parameters: {
    a11y: {
      skipCi: true,
    },
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: () => {
    const dataSource = useDataCollectionSource({
      dataAdapter: {
        fetchData: () => Promise.resolve({ records: mockUsers }),
      },
      itemActions: createUserActions(),
    })

    return (
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Card Item Actions Example
          </h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example shows how actions work with card visualization.
          </p>
        </div>

        <OneDataCollection
          source={dataSource}
          visualizations={[
            {
              type: "card",
              options: {
                title: (item) => item.name,
                cardProperties: [
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
          ]}
        />
      </div>
    )
  },
}
