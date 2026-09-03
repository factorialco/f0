import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"

import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  type MockUser,
} from "../mockData"

// Mock users carry no location, so spread them deterministically across Europe.
const coordinates = (user: MockUser): [number, number] => [
  -9 + ((user.index * 37) % 42),
  37 + ((user.index * 17) % 19),
]

const meta = {
  title: "Data Collection/Visualizations/Map",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Map view visualization. Projects each record onto a coordinate and renders it as a marker, driven by the same toolbar (filters, search, view switcher) as every other view. Reading a record's position is the only required option; everything about how a marker looks belongs to F0Map. The camera follows the collection: applying a filter reframes to the markers left (the set matching every active filter), selecting a marker centres it at the current zoom, and dropping the selection or clearing the search returns to the overview.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * The map alongside a table, both driven by the shared toolbar. Apply a filter
 * and the camera reframes to what is left; clear it and it frames everything
 * again.
 */
export const BasicMapVisualization: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const [users] = useState<MockUser[]>(() => generateMockUsers(40))
    const mockVisualizations = getMockVisualizations({ frozenColumns: 0 })
    const dataAdapter = useMemo(
      () => createDataAdapter({ data: users, paginationType: "pages" }),
      [users]
    )

    return (
      <div className="h-screen">
        <ExampleComponent
          fullHeight
          searchBar
          visualizations={[mockVisualizations.map, mockVisualizations.table]}
          dataAdapter={dataAdapter}
        />
      </div>
    )
  },
}

/**
 * Selecting a marker opens a side panel. The panel reports the region it covers
 * through `viewportInset`, so the camera keeps the selected marker centred in
 * the free area beside it instead of behind it — try selecting a marker on the
 * right-hand side of the map, then closing the panel to zoom back out. A click
 * centres at the current zoom; searching for a record flies to it.
 */
export const WithSidePanel: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => {
    const [users] = useState<MockUser[]>(() => generateMockUsers(40))
    const [selected, setSelected] = useState<MockUser | null>(null)
    const mockVisualizations = getMockVisualizations({ frozenColumns: 0 })
    const dataAdapter = useMemo(
      () => createDataAdapter({ data: users, paginationType: "pages" }),
      [users]
    )

    const panelWidth = 360
    const visualizations = useMemo(
      () => [
        {
          type: "map" as const,
          options: {
            coordinates,
            label: (user: MockUser) => user.name,
            onSelect: setSelected,
            viewportInset: selected ? { right: panelWidth } : undefined,
          },
        },
        mockVisualizations.table,
      ],
      [selected, mockVisualizations.table]
    )

    return (
      <div className="relative flex h-screen">
        <div className="min-w-0 flex-1">
          <ExampleComponent
            fullHeight
            searchBar
            visualizations={visualizations}
            dataAdapter={dataAdapter}
          />
        </div>
        {selected && (
          <div
            className="flex flex-col gap-2 border-0 border-l border-solid border-f1-border-secondary bg-f1-background p-4"
            style={{ width: panelWidth }}
          >
            <p className="m-0 text-lg font-semibold">{selected.name}</p>
            <p className="m-0 text-f1-foreground-secondary">{selected.role}</p>
            <F0Button
              variant="outline"
              size="sm"
              label="Close"
              onClick={() => setSelected(null)}
            />
          </div>
        )}
      </div>
    )
  },
}
