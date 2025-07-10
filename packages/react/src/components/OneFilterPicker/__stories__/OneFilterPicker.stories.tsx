import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"
import { fn } from "storybook/test"
import { InFilterOptions } from "../filterTypes/InFilter/types"
import * as OneFilterPicker from "../index"
import {
  OneFilterPicker as OneFilterPickerComponent,
  OneFilterPickerRootProps,
} from "../index"
import type { FiltersDefinition, FiltersState } from "../types"
import {
  deserializeFilters,
  getFiltersFromUrl,
  serializeFilters,
  updateUrlWithFilters,
} from "../utils"
import {
  filterDefinition,
  generateCountries,
  getPresetMock,
  samplePresets,
} from "./mockData"

const meta = {
  title: "FilterPicker",
  component: (props: OneFilterPickerRootProps<FiltersDefinition>) => {
    return <OneFilterPickerComponent {...props} />
  },
} satisfies Meta

export default meta

const FiltersWithState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {
      name: "John",
      department: ["engineering"],
    }
  )

  return (
    <OneFilterPickerComponent
      filters={filterDefinition}
      value={filters}
      onChange={setFilters}
    ></OneFilterPickerComponent>
  )
}

export const Interactive: StoryObj = {
  render: () => <FiltersWithState />,
}

// Example of pre-populated filters
const FiltersWithInitialState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {
      department: ["engineering", "marketing"],
      name: "John",
      manager: ["alice"],
    }
  )

  return (
    <OneFilterPickerComponent
      filters={filterDefinition}
      value={filters}
      onChange={setFilters}
    ></OneFilterPickerComponent>
  )
}

export const WithInitialFilters: StoryObj = {
  render: () => <FiltersWithInitialState />,
}

// Example with presets
const FiltersWithPresets = ({
  presets = getPresetMock(false),
}: {
  presets?: OneFilterPicker.PresetsDefinition<typeof filterDefinition>
}) => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {}
  )

  return (
    <OneFilterPickerComponent
      filters={filterDefinition}
      value={filters}
      presets={presets}
      onChange={setFilters}
    ></OneFilterPickerComponent>
  )
}

export const WithPresets: StoryObj = {
  render: () => <FiltersWithPresets />,
}

export const WithPreselectedFiltersAndItemCount: StoryObj = {
  render: () => {
    const presets = getPresetMock(true)
    return <FiltersWithPresets presets={presets} />
  },
}

// Example with presets and initial filters
const FiltersWithPresetsAndInitialState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {
      department: ["engineering"],
      role: ["engineer"],
    }
  )

  return (
    <OneFilterPickerComponent
      filters={filterDefinition}
      value={filters}
      presets={samplePresets}
      onChange={setFilters}
    ></OneFilterPickerComponent>
  )
}

export const WithPresetsAndInitialFilters: StoryObj = {
  render: () => <FiltersWithPresetsAndInitialState />,
}

type Story = StoryObj<typeof OneFilterPicker.Root>

export const Default: Story = {
  args: {
    filters: filterDefinition,
    value: {},
    onChange: fn(),
  },
}

/**
 * This example demonstrates how presets can be used to quickly apply
 * predefined filter combinations.
 */
export const WithPresetsArgs: Story = {
  args: {
    filters: filterDefinition,
    value: {},
    presets: samplePresets,
    onChange: fn(),
  },
}

export const WithChildren: Story = {
  args: {
    filters: filterDefinition,
    value: {},
    presets: samplePresets,
    onChange: fn(),
    children: <div>Hello this is my children content</div>,
  },
}

/**
 * This example demonstrates how filters can be serialized to and from the URL.
 * Try selecting some filters and notice how the URL updates. You can copy this URL
 * and paste it in a new tab to restore the same filter state.
 */
export const WithUrlSerialization: Story = {
  args: {
    filters: filterDefinition,
  },
  render: (args) => {
    const [filters, setFilters] = useState(() => {
      // On initial render, try to get filters from URL
      return getFiltersFromUrl() || {}
    })

    const [serializedValue, setSerializedValue] = useState(() =>
      serializeFilters(filters)
    )

    // Update URL and serialized value whenever filters change
    useEffect(() => {
      updateUrlWithFilters(filters)
      setSerializedValue(serializeFilters(filters))
    }, [filters])

    const handleSerializedValueChange = (value: string) => {
      setSerializedValue(value)
      try {
        const newFilters = deserializeFilters(value)
        setFilters(newFilters)
      } catch {
        // If the value is invalid, we just update the input but not the filters
      }
    }

    return (
      <div className="flex w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serialized-filters">Serialized Filters</Label>
          <Input
            id="serialized-filters"
            value={serializedValue}
            onChange={(e) => handleSerializedValueChange(e.target.value)}
            className="font-mono text-sm"
          />
          <p className="text-muted-foreground text-sm">
            This field shows the serialized filter state that would normally be
            in the URL. You can modify it to see how the filters update.
          </p>
        </div>
        <OneFilterPickerComponent
          {...args}
          filters={filterDefinition}
          value={filters}
          onChange={setFilters}
        ></OneFilterPickerComponent>
      </div>
    )
  },
}

/**
 * This example demonstrates how presets can be used together with URL serialization.
 * Clicking on a preset will update both the filters and the URL.
 */
export const WithPresetsAndUrlSerialization: Story = {
  args: {
    filters: filterDefinition,
  },
  render: (args) => {
    const [filters, setFilters] = useState(() => {
      // On initial render, try to get filters from URL
      return getFiltersFromUrl() || {}
    })

    const [serializedValue, setSerializedValue] = useState(() =>
      serializeFilters(filters)
    )

    // Update URL and serialized value whenever filters change
    useEffect(() => {
      updateUrlWithFilters(filters)
      setSerializedValue(serializeFilters(filters))
    }, [filters])

    const handleSerializedValueChange = (value: string) => {
      setSerializedValue(value)
      try {
        const newFilters = deserializeFilters(value)
        setFilters(newFilters)
      } catch {
        // If the value is invalid, we just update the input but not the filters
      }
    }

    return (
      <div className="flex w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serialized-filters">Serialized Filters</Label>
          <Input
            id="serialized-filters"
            value={serializedValue}
            onChange={(e) => handleSerializedValueChange(e.target.value)}
            className="font-mono text-sm"
          />
          <p className="text-muted-foreground text-sm">
            This field shows the serialized filter state that would normally be
            in the URL. You can modify it to see how the filters update.
          </p>
        </div>
        <OneFilterPickerComponent
          {...args}
          filters={filterDefinition}
          value={filters}
          presets={samplePresets}
          onChange={setFilters}
        ></OneFilterPickerComponent>
      </div>
    )
  },
}

/**
 * This example demonstrates how filters can be used with async options.
 * The "Users" filter loads options asynchronously with a simulated delay.
 */
export const WithAsyncOptions: Story = {
  render: () => {
    type AsyncDefinitionType = {
      department: {
        type: "in"
        label: string
        options: InFilterOptions<string>
      }
      users: {
        type: "in"
        label: string
        options: InFilterOptions<string>
      }
      status: {
        type: "in"
        label: string
        options: InFilterOptions<string>
      }
      search: {
        type: "search"
        label: string
      }
    }

    const [filters, setFilters] = useState<FiltersState<AsyncDefinitionType>>(
      {}
    )

    const asyncDefinition: AsyncDefinitionType = {
      department: {
        type: "in",
        label: "Department",
        options: {
          options: async () => {
            // Simulate API call with a delay
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
                  { value: "engineering", label: "Engineering2" },
                  { value: "marketing", label: "Marketing" },
                  { value: "sales", label: "Sales" },
                  { value: "hr", label: "Human Resources" },
                ])
              }, 1500)
            })
          },
        },
      },
      users: {
        type: "in",
        label: "Users",
        options: {
          options: async () => {
            // Simulate API call with a delay
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
                  { value: "user1", label: "John Doe" },
                  { value: "user2", label: "Jane Smith" },
                  { value: "user3", label: "Bob Johnson" },
                  { value: "user4", label: "Alice Williams" },
                  { value: "user5", label: "Michael Brown" },
                ])
              }, 1500)
            })
          },
        },
      },
      status: {
        type: "in",
        label: "Status",
        // Sync function example
        options: {
          options: () => [
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
            { value: "pending", label: "Pending" },
          ],
        },
      },
      search: {
        type: "search",
        label: "Search",
      },
    }

    return (
      <div className="w-[600px]">
        <OneFilterPickerComponent
          filters={asyncDefinition}
          value={filters}
          onChange={setFilters}
        ></OneFilterPickerComponent>
      </div>
    )
  },
}

/**
 * This example demonstrates how filters can be used with a large number of async options,
 * showcasing the search functionality for filtering through many options.
 */

const LargeAsyncOptionsComponent = (props: { cache: boolean }) => {
  type LargeAsyncDefinitionType = {
    countries: {
      type: "in"
      label: string
      options: InFilterOptions<string>
    }
    search: {
      type: "search"
      label: string
    }
  }

  const [filters, setFilters] = useState<
    FiltersState<LargeAsyncDefinitionType>
  >({})

  const largeAsyncDefinition: LargeAsyncDefinitionType = {
    countries: {
      type: "in",
      label: "Countries",
      options: {
        cache: props.cache,
        options: async () => {
          // Simulate API call with a delay
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(generateCountries())
            }, 1000)
          })
        },
      },
    },
    search: {
      type: "search",
      label: "Search",
    },
  }

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        This example loads a large list of countries asynchronously. Open the
        Countries filter and use the search field to filter the options.
      </p>
      {props.cache && (
        <p>
          The options are cached so that the same options are not loaded again
          when the filter is opened.
        </p>
      )}
      <OneFilterPickerComponent
        filters={largeAsyncDefinition}
        value={filters}
        onChange={setFilters}
      ></OneFilterPickerComponent>
    </div>
  )
}
export const WithLargeAsyncOptions: Story = {
  render: () => <LargeAsyncOptionsComponent cache={false} />,
}

export const WithLargeAsyncOptionsWithCache: Story = {
  render: () => <LargeAsyncOptionsComponent cache={true} />,
}
