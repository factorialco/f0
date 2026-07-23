import { Meta, StoryObj } from "@storybook/react-vite"

import { F0Box } from "@/lib/F0Box"

import { getAutoPerPageMinHeight } from "../hooks/useAutoPerPage"
import {
  buildSecondaryActions,
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
} from "./mockData"

// A `perPage: "auto"` collection reserves the height of its minimum page so
// siblings can't squeeze it out of view: it keeps its minimum page (scrolling
// internally) and the page scrolls instead of the collection disappearing.
const autoCollectionSlot = {
  className: "flex-1",
  style: { minHeight: getAutoPerPageMinHeight() },
}

// A row of summary cards standing in for "other content" around a collection.
const SummaryCards = () => {
  const cards = [
    { label: "Total employees", value: "300" },
    { label: "Departments", value: "4" },
    { label: "New this month", value: "12" },
    { label: "Turnover", value: "2.1%" },
  ]
  return (
    <F0Box display="flex" flexDirection="row" gap="xl">
      {cards.map((card) => (
        <F0Box
          key={card.label}
          display="flex"
          flexDirection="column"
          gap="sm"
          padding="lg"
          background="secondary"
          borderRadius="md"
          grow
        >
          <span className="text-f1-foreground-secondary">{card.label}</span>
          <span className="text-2xl font-semibold">{card.value}</span>
        </F0Box>
      ))}
    </F0Box>
  )
}

const makeAutoAdapter = () =>
  createDataAdapter({
    data: generateMockUsers(300),
    delay: 500,
    paginationType: "pages",
    perPage: "auto",
  })

const meta = {
  title: "Data Collection/Full height",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "calc(100vh - 2rem)",
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
  render: () => {
    // Page-based with perPage "auto" is the recommended default for a
    // full-height collection: the page size fits the available height and it
    // paginates properly across every visualization (including editable table),
    // while never rendering all 300 rows at once (the table doesn't virtualize).
    const dataAdapter = createDataAdapter({
      data: generateMockUsers(300),
      delay: 500,
      paginationType: "pages",
      perPage: "auto",
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        fullHeight
        dataAdapter={dataAdapter}
        totalItemSummary={(totalItems) => `Total items: ${totalItems}`}
        secondaryActions={{
          expanded: 0,
          actions: buildSecondaryActions,
        }}
      />
    )
  },
}

export const WithPagination: Story = {
  ...Basic,
  render: () => {
    const paginatedMockUsers = generateMockUsers(300)
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

/**
 * `perPage: "auto"` derives the page size from the available vertical space
 * (exactly the rows that fit, up to 30). The top collection fills the remaining
 * viewport height and sizes its page to it; the bottom one keeps a fixed page
 * size of 5 and takes its natural height.
 */
export const AutoPageSizeWithFixedSibling: Story = {
  ...Basic,
  render: () => {
    const autoAdapter = createDataAdapter({
      data: generateMockUsers(300),
      delay: 500,
      paginationType: "pages",
      perPage: "auto",
    })
    const fixedAdapter = createDataAdapter({
      data: generateMockUsers(300),
      delay: 500,
      paginationType: "pages",
      perPage: 5,
    })

    return (
      <div className="flex h-full w-full flex-col gap-4">
        <div {...autoCollectionSlot}>
          <ExampleComponent fullHeight dataAdapter={autoAdapter} />
        </div>
        <div>
          <ExampleComponent dataAdapter={fixedAdapter} />
        </div>
      </div>
    )
  },
}

/**
 * Auto page size with other content on top: a horizontal F0Box with summary
 * cards takes its natural height, and the collection derives its page size
 * from whatever vertical space remains below it.
 */
export const AutoPageSizeWithContentOnTop: Story = {
  ...Basic,
  render: () => (
    <div className="flex h-full w-full flex-col gap-4">
      <SummaryCards />
      <div {...autoCollectionSlot}>
        <ExampleComponent fullHeight dataAdapter={makeAutoAdapter()} />
      </div>
    </div>
  ),
}

/**
 * Auto page size with other content below it: the collection fills the space
 * above the summary cards, which keep their natural height pinned at the
 * bottom.
 */
export const AutoPageSizeWithContentBelow: Story = {
  ...Basic,
  render: () => (
    <div className="flex h-full w-full flex-col gap-4">
      <div {...autoCollectionSlot}>
        <ExampleComponent fullHeight dataAdapter={makeAutoAdapter()} />
      </div>
      <SummaryCards />
    </div>
  ),
}

/**
 * Two auto-sized collections wrapping other content: one on top, a row of
 * summary cards in the middle, and another at the bottom. Each collection
 * measures its own slot, so they split the remaining space independently.
 */
export const AutoPageSizeAroundContent: Story = {
  ...Basic,
  render: () => (
    <div className="flex h-full w-full flex-col gap-4">
      <div {...autoCollectionSlot}>
        <ExampleComponent fullHeight dataAdapter={makeAutoAdapter()} />
      </div>
      <SummaryCards />
      <div {...autoCollectionSlot}>
        <ExampleComponent fullHeight dataAdapter={makeAutoAdapter()} />
      </div>
    </div>
  ),
}

/**
 * Two collections with `perPage: "auto"` splitting the viewport. Each one
 * measures only its own container, so they resolve their page sizes
 * independently — no coordination between collections is needed.
 */
export const AutoPageSizeBoth: Story = {
  ...Basic,
  render: () => (
    <div className="flex h-full w-full flex-col gap-4">
      <div {...autoCollectionSlot}>
        <ExampleComponent fullHeight dataAdapter={makeAutoAdapter()} />
      </div>
      <div {...autoCollectionSlot}>
        <ExampleComponent fullHeight dataAdapter={makeAutoAdapter()} />
      </div>
    </div>
  ),
}

/**
 * When the auto-sized collection is squeezed by its siblings and there is
 * (almost) no vertical space left, its flex slot still reserves the minimum
 * height, so it stays visible showing the rows that fit that reserved space
 * while the page scrolls — it never disappears. On very tall containers the
 * page size caps at 30.
 */
export const AutoPageSizeWithNoSpaceLeft: Story = {
  ...Basic,
  render: () => {
    const makeFixedAdapter = () =>
      createDataAdapter({
        data: generateMockUsers(300),
        delay: 500,
        paginationType: "pages",
        perPage: 5,
      })
    const autoAdapter = createDataAdapter({
      data: generateMockUsers(300),
      delay: 500,
      paginationType: "pages",
      perPage: "auto",
    })

    return (
      <div className="flex h-full w-full flex-col gap-4">
        <div>
          <ExampleComponent dataAdapter={makeFixedAdapter()} />
        </div>
        <div>
          <ExampleComponent dataAdapter={makeFixedAdapter()} />
        </div>
        <div {...autoCollectionSlot}>
          <ExampleComponent fullHeight dataAdapter={autoAdapter} />
        </div>
      </div>
    )
  },
}

export const WithPaginationAndGrouping: Story = {
  ...WithPagination,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  render: () => {
    const paginatedMockUsers = generateMockUsers(300)
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
