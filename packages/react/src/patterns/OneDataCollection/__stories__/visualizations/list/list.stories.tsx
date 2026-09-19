import { Meta, StoryObj } from "@storybook/react-vite"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { getMockValue, MOCK_ICONS } from "@/mocks"
import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  mockUsers,
} from "../../mockData"

const meta = {
  title: "Data Collection/Visualizations/List",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "List view specific visualization. Displays a list of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicListVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.list]} />
  },
}

// One hue per role, so a column of rows shows the tint doing the job it exists
// for: telling KINDS of row apart at a glance. The Role field still spells the
// role out in text — the colour is the shortcut, never the only signal.
const ROLE_TINTS = ["viridian", "malibu", "purple", "camel"] as const

export const ListVisualizationWithTintedIcons: Story = {
  // The tint is a purely visual, two-theme feature — the dark tile step is only
  // ever exercised by a snapshot.
  parameters: withSnapshot({}),
  render: () => (
    <ExampleComponent
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (item) => ({
              title: item.name,
              description: [item.email, item.role],
              avatar: {
                type: "icon",
                icon: getMockValue(MOCK_ICONS, item.index),
                // A hex is the escape hatch for a colour that is already data.
                color:
                  item.index === 0
                    ? "#4F46E5"
                    : ROLE_TINTS[item.index % ROLE_TINTS.length],
              },
            }),
            fields: [
              { label: "Email", render: (item) => item.email },
              { label: "Role", render: (item) => item.role },
            ],
          },
        },
      ]}
    />
  ),
}

export const ListVisualizationWithGrouping: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        grouping={{
          collapsible: true,
          mandatory: true,
          groupBy: {
            department: {
              name: "Department",
              label: (groupId) => groupId,
              itemCount: async (groupId) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return mockUsers.filter((user) => user.department === groupId)
                  .length
              },
            },
          },
        }}
      />
    )
  },
}

export const ListVisualizationWithGroupingAndAllGroupsOpenByDefault: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        grouping={{
          collapsible: true,
          mandatory: true,
          defaultOpenGroups: true,
          groupBy: {
            department: {
              name: "Department",
              label: (groupId) => groupId,
              itemCount: async (groupId) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return mockUsers.filter((user) => user.department === groupId)
                  .length
              },
            },
          },
        }}
      />
    )
  },
}

export const ListVisualizationWithInfiniteScrollPagination: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        dataAdapter={createDataAdapter({
          data: generateMockUsers(100),
          paginationType: "infinite-scroll",
        })}
        totalItemSummary={(totalItems) => `Total items: ${totalItems}`}
        fullHeight
      />
    )
  },
}

export const ListVisualizationWithRegularPagination: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.list]}
        dataAdapter={createDataAdapter({
          data: generateMockUsers(100),
          paginationType: "pages",
        })}
        totalItemSummary={(totalItems) => `Total items: ${totalItems}`}
        fullHeight
      />
    )
  },
}
