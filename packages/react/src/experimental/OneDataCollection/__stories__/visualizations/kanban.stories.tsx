import { granularityDefinitions } from "@/experimental/OneCalendar/granularities"
import { Delete, Pencil, Plus } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "@storybook/test"
import { useMemo, useRef, useState } from "react"
import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  type MockUser,
} from "../mockData"

const meta = {
  title: "Data Collection/Visualizations/Kanban",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Kanban view visualization. Displays records distributed across lanes.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicKanbanVisualization: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    // Increase dataset to demonstrate per-lane infinite scroll
    const [items] = useState<MockUser[]>(() => generateMockUsers(90))
    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })

    // Create a ref to always have access to current items
    const itemsRef = useRef(items)
    itemsRef.current = items

    // Create a dataAdapter that always uses current items via ref
    const dataAdapter = useMemo(() => {
      // Create adapter with initial data but override fetchData to use current ref
      const adapter = createDataAdapter({
        data: items, // Initial data
        paginationType: "infinite-scroll",
        perPage: 10,
        search: "",
      })

      // Override fetchData to always use the most current data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      adapter.fetchData = (options: any) => {
        // Create a fresh adapter with current data for this fetch
        const currentAdapter = createDataAdapter({
          data: itemsRef.current, // Always use current data
          paginationType: "infinite-scroll",
          perPage: 10,
          search: options.search,
        })

        return currentAdapter.fetchData(options)
      }

      return adapter
    }, [items])

    return (
      <ExampleComponent
        visualizations={[mockVisualizations.kanban, mockVisualizations.table]}
        dataAdapter={dataAdapter}
        bulkActions={(_selectedItems) => ({
          primary: [
            {
              label: "Edit Item",
              icon: Pencil,
              onClick: () => console.log("Editing item"),
              id: "edit-item",
            },
          ],
          secondary: [
            {
              label: "Remove Item",
              icon: Delete,
              onClick: () => console.log("Removing item"),
              critical: true,
              id: "remove-item",
            },
          ],
        })}
        primaryActions={() => ({
          label: "New dep.",
          icon: Plus,
          onClick: () => console.log("Adding item"),
        })}
        secondaryActions={() => [
          {
            label: "Send all items to review",
            icon: Pencil,
            onClick: () => console.log("Editing item"),
          },
          {
            label: "Remove all items",
            icon: Delete,
            onClick: () => console.log("Removing item"),
            critical: true,
          },
        ]}
        defaultSelectedItems={{
          allSelected: false,
          items: new Map(
            items
              .slice(0, 3)
              .map((item) => [item.id, { id: item.id, checked: true }])
          ),
          groups: new Map(),
        }}
        fullHeight={true}
        navigationFilters={{
          joinedAt: {
            type: "date-navigator",
            defaultValue: new Date("2021-01-01"),
            granularity: ["day", "week", "month", "year", "range"],
            defaultGranularity: "day",
            min: new Date("2000-01-01"),
            max: new Date("2026-01-01"),
            presets: [
              {
                label: "Today",
                granularity: "day",
                value: granularityDefinitions.day.toRange(new Date()),
              },
            ],
            hideGoToCurrent: false,
          },
        }}
        paginationType="infinite-scroll"
        selectable={(el) => el.id}
        totalItemSummary={(total) => `Total items: ${total}`}
        searchBar
      />
    )
  },
}

export const KanbanWithCreateActions: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [items] = useState<MockUser[]>(() => generateMockUsers(24))
    const mockVisualizations = getMockVisualizations({})

    const handleCreate = (laneId: string) => {
      console.log("Creating item on lane", laneId)
      fn()
    }

    const dataAdapter = useMemo(() => {
      const adapter = createDataAdapter({
        data: items,
        paginationType: "infinite-scroll",
        perPage: 10,
      })

      adapter.fetchData = (options: unknown) => {
        const currentAdapter = createDataAdapter({
          data: items,
          paginationType: "infinite-scroll",
          perPage: 10,
        })

        return currentAdapter.fetchData(options as never)
      }

      return adapter
    }, [items])

    return (
      <ExampleComponent
        visualizations={[
          {
            type: "kanban" as const,
            options: {
              ...(
                mockVisualizations.kanban as Extract<
                  typeof mockVisualizations.kanban,
                  { type: "kanban" }
                >
              ).options,
              onCreate: handleCreate,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        fullHeight
        searchBar
      />
    )
  },
}
