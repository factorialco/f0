import { Meta, StoryObj } from "@storybook/react-vite"

import { Page } from "@/patterns/Navigation/Page"

import { ExampleComponent, getMockVisualizations } from "./mockData"

/**
 * A collection mounted flush inside `Page`, the way a full-bleed product page
 * does it (no layout gutter between the page frame and the table). The page
 * frame has to stay visible along the table's edge: a table paints opaque
 * layers right up to it — header cells always, sticky parent rows once a nested
 * row is expanded, and frozen columns once the table is scrolled sideways.
 */
const meta = {
  title: "Data Collection/Inside Page",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// `frozenColumns` has to go in the visualization options: the `ExampleComponent`
// prop of the same name is only read when the component builds its own
// visualizations, so an explicit `visualizations` array would freeze nothing.
const nestedFrozenTable = () =>
  getMockVisualizations({
    table: {
      frozenColumns: 2,
      noSorting: true,
      allowColumnHiding: true,
      allowColumnReordering: true,
      nestedRecords: true,
      applyLongText: false,
    },
  }).table

const Collection = () => (
  <ExampleComponent
    frozenColumns={2}
    tableAllowColumnReordering
    tableAllowColumnHiding
    noSorting
    storage={false}
    visualizations={[nestedFrozenTable()]}
    id="employees/inside-page"
    nestedRecords
    fullHeight
  />
)

/**
 * Expand a row and scroll sideways: the page frame must remain visible on all
 * four edges.
 */
export const NestedFrozenTableInsidePage: Story = {
  render: () => (
    <div className="h-screen w-screen p-4">
      <Page>
        <Collection />
      </Page>
    </div>
  ),
}

/** The same collection with a header, so the frame is checked below it too. */
export const NestedFrozenTableInsidePageWithHeader: Story = {
  render: () => (
    <div className="h-screen w-screen p-4">
      <Page
        header={<div className="px-6 py-4 text-lg font-semibold">Roles</div>}
      >
        <Collection />
      </Page>
    </div>
  ),
}
