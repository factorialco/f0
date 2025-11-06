import { F0Button } from "@/components/F0Button"
import { FiltersState } from "@/components/OneFilterPicker/types"
import { NavigationFiltersState, SortingsState } from "@/experimental"
import { granularityDefinitions } from "@/experimental/OneCalendar/granularities/index"
import { Meta, StoryObj } from "@storybook/react-vite"
import { addDays } from "date-fns"
import { useState } from "react"
import { DataCollectionStatusComplete } from "../../hooks/useDataColectionStorage/types"
import { ExampleComponent, filters, sortings } from "../mockData"

const meta = {
  title: "Data Collection/Navigation Filters",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "<p>Navigation filters are filters that are used to filter the data in the collection but they are not the same as the filters. They are displayed in the top left of the collection. For example, a date navigator is a filter that allows you to filter the data by date, and using the arrow keys you can navigate through the dates.</p>",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "day",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const WeekGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "week",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const MonthGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "month",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const YearGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "year",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const RangeGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: {
          from: new Date(2025, 6, 30),
          to: addDays(new Date(2025, 6, 30), 3),
        },
        defaultGranularity: "range",
        granularity: ["range"],
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 100),
      },
    },
  },
}

export const NoGoToCurrent: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "year",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
        hideGoToCurrent: true,
      },
    },
  },
}

export const MultipleGranularities: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        defaultGranularity: "day",
        granularity: ["day", "week", "month", "year", "range"],
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 100),
      },
    },
  },
}

export const WithPresets: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        defaultGranularity: "day",
        granularity: ["day", "week", "month", "year", "range"],
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 100),
        presets: [
          {
            label: "Today",
            granularity: "day",
            value: granularityDefinitions.day.toRange(new Date(2025, 6, 30)),
          },
          {
            label: "Yesterday",
            granularity: "day",
            value: granularityDefinitions.day.toRange(
              addDays(new Date(2025, 6, 30), -1)
            ),
          },
        ],
      },
    },
  },
}

export const FiltersChangeFromOutsideExample: Story = {
  args: {},
  render: () => {
    const navigationFilters = {
      date: {
        type: "date-navigator" as const,
        defaultValue: new Date(2025, 6, 30),
        granularity: "week",
      },
    }

    const [currentFilters, setFilters] = useState<FiltersState<typeof filters>>(
      {}
    )
    const [currentSortings, setSortings] = useState<SortingsState<
      typeof sortings
    > | null>(null)
    const [currentNavigationFilters, setNavigationFilters] = useState<
      NavigationFiltersState<typeof navigationFilters>
    >({
      date: {
        value: granularityDefinitions.day.toRange(new Date(2025, 6, 30)),
        valueString: "2025-07-30",
        granularity: "day",
      },
    })

    const handleStateChange = (state: DataCollectionStatusComplete) => {
      setFilters(state.filters ?? {})
      setSortings(state.sortings ?? null)
      console.log(state.navigationFilters)
    }

    return (
      <>
        <p className="mb-4 flex gap-2">
          <label>Filters</label>
          <pre>{JSON.stringify(filters, null, 2)}</pre>
          <label>Sortings</label>
          <pre>{JSON.stringify(sortings, null, 2)}</pre>
        </p>
        <div className="mb-4 flex gap-2">
          <F0Button
            variant="outline"
            onClick={() => setFilters({ department: ["Engineering"] })}
            label="Set Filters"
          />
          <F0Button
            variant="outline"
            onClick={() => setFilters({})}
            label="Clear Filters"
          />

          <F0Button
            variant="outline"
            onClick={() => setSortings({ field: "name", order: "asc" })}
            label="Set Sortings"
          />
          <F0Button
            variant="outline"
            onClick={() => setSortings(null)}
            label="Clear Sortings"
          />

          <F0Button
            variant="outline"
            onClick={() =>
              setNavigationFilters({
                date: {
                  value: granularityDefinitions.day.toRange(
                    new Date(2025, 6, 30)
                  ),
                  valueString: "2025-07-30",
                  granularity: "day",
                },
              })
            }
            label="Set Navigation Filters"
          />
        </div>
        <ExampleComponent
          usePresets
          onStateChange={handleStateChange}
          currentFilters={currentFilters}
          currentSortings={currentSortings}
          navigationFilters={navigationFilters}
        />
      </>
    )
  },
}
