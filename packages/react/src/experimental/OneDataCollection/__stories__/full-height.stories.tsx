import { Meta, StoryObj } from "@storybook/react-vite"

import {
  buildSecondaryActions,
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
} from "./mockData"

const meta = {
  title: "Data collection/Full height",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "470px",
          width: "100%",
          display: "flex",
          overflow: "auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      fullHeight
      totalItemSummary={(totalItems) => `Total items: ${totalItems}`}
      secondaryActions={{
        expanded: 0,
        actions: buildSecondaryActions,
      }}
    />
  ),
}

export const WithPagination: Story = {
  ...Basic,
  render: () => {
    const paginatedMockUsers = generateMockUsers(50)
    const dataAdapter = createDataAdapter({
      data: paginatedMockUsers,
      delay: 500,
      paginationType: "pages",
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        fullHeight
        dataAdapter={dataAdapter}
      />
    )
  },
}

export const WithPaginationAndGrouping: Story = {
  ...WithPagination,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  render: () => {
    const paginatedMockUsers = generateMockUsers(50)
    const dataAdapter = createDataAdapter({
      data: paginatedMockUsers,
      delay: 500,
      paginationType: "pages",
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        fullHeight
        selectable={(item) => item.index}
        grouping={{
          collapsible: true,
          mandatory: true,
          groupBy: {
            department: {
              name: "Department",
              label: (groupId) => groupId,
            },
          },
        }}
        dataAdapter={dataAdapter}
      />
    )
  },
}
