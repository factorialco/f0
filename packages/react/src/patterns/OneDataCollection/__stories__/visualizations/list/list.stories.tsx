import { Meta, StoryObj } from "@storybook/react-vite"

import { ExternalLink, Pencil } from "@/icons/app"

import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  mockUsers,
  type MockUser,
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

/**
 * `itemDefinition.titleActions` renders declarative actions next to each
 * item's title. When a single action is provided it appears as an icon-only
 * ghost button targeting the title's resource (e.g. "open in a new tab").
 */
export const ListVisualizationWithSingleTitleAction: Story = {
  render: () => (
    <ExampleComponent
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (item: MockUser) => ({
              title: item.name,
              description: [item.email, item.role],
              avatar: {
                type: "person",
                firstName: item.name.split(" ")[0],
                lastName: item.name.split(" ")[1],
              },
              titleActions: [
                {
                  icon: ExternalLink,
                  label: `Open ${item.name}`,
                  href: `#user-${item.index}`,
                  target: "_blank",
                },
              ],
            }),
            fields: [
              {
                label: "Department",
                render: (item: MockUser) => item.department,
              },
              {
                label: "Role",
                render: (item: MockUser) => item.role,
              },
            ],
          },
        },
      ]}
    />
  ),
}

/**
 * When multiple `titleActions` are provided they collapse into an overflow
 * dropdown menu rendered next to the title.
 */
export const ListVisualizationWithMultipleTitleActions: Story = {
  render: () => (
    <ExampleComponent
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (item: MockUser) => ({
              title: item.name,
              description: [item.email, item.role],
              avatar: {
                type: "person",
                firstName: item.name.split(" ")[0],
                lastName: item.name.split(" ")[1],
              },
              titleActions: [
                {
                  icon: ExternalLink,
                  label: "Open",
                  href: `#user-${item.index}`,
                  target: "_blank",
                },
                {
                  icon: Pencil,
                  label: "Edit",
                  onClick: () => console.log("Edit", item.name),
                },
              ],
            }),
            fields: [
              {
                label: "Department",
                render: (item: MockUser) => item.department,
              },
              {
                label: "Role",
                render: (item: MockUser) => item.role,
              },
            ],
          },
        },
      ]}
    />
  ),
}
