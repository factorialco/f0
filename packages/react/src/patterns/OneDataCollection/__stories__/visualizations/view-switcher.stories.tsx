import { Meta, StoryObj } from "@storybook/react-vite"

import { Plus } from "@/icons/app"

import { ExampleComponent, getMockVisualizations } from "../mockData"

const meta = {
  title: "Data Collection/Visualizations/View switcher",
  parameters: {
    layout: "padded",
    // Async data makes the collection body unstable for Chromatic, as in every
    // other Data Collection story. F0SegmentedControl's own `IconOnly` story
    // carries the visual-regression duty for the control itself.
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        component:
          "The header control that switches between visualizations. Segments " +
          "are icon-only where the pointer can hover, and hovering one names " +
          "it; on touch, where no tooltip can open, the name stays on screen. " +
          "Each view's icon is fixed in the registry and never customizable, " +
          "so no two views share a glyph.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Every view whose icon has to stay distinguishable, side by side: Table,
 * Card, List and Kanban. Card and Kanban are the pair worth looking at — they
 * shared one glyph until the switcher went icon-only.
 *
 * The search field and the primary action are here on purpose: the switcher's
 * visual weight is only judgeable next to the rest of the header.
 */
export const AllViews: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[
          mockVisualizations.table,
          mockVisualizations.card,
          mockVisualizations.list,
          mockVisualizations.kanban,
        ]}
        searchBar
        primaryActions={() => ({
          label: "New employee",
          icon: Plus,
          onClick: () => {},
        })}
      />
    )
  },
}

/**
 * The everyday case: two views, so the control is as small as it gets. Table
 * and Graph is the pair the org-chart collections ship.
 */
export const TwoViews: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.table, mockVisualizations.graph]}
        searchBar
      />
    )
  },
}
