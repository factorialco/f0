import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { useEffect, useState } from "react"
import { PresetsDefinition } from "../types"
import { InFilterOptions } from "./FilterTypes/InFilter/types"
import * as Filters from "./index"
import { FiltersRootProps } from "./index"
import type { FiltersDefinition, FiltersState } from "./types"
import {
  deserializeFilters,
  getFiltersFromUrl,
  serializeFilters,
  updateUrlWithFilters,
} from "./utils"

const meta = {
  title: "Data Collection/Filters",
  component: (props: FiltersRootProps<FiltersDefinition>) => {
    return (
      <>
        <Filters.Root {...props}>
          <Filters.Controls />
          <Filters.Presets />
          <Filters.ChipsList />
        </Filters.Root>
      </>
    )
  },
} satisfies Meta<typeof Filters>

export default meta

const sampleDefinition: FiltersDefinition = {
  date: {
    type: "date",
    label: "Date",
    options: {},
  },
  dateRange: {
    type: "date",
    label: "Date Range",
    options: {
      mode: "range",
    },
  },
  dateWeek: {
    type: "date",
    label: "Date Week",
    options: {
      view: "week",
    },
  },
  dateRangeWeek: {
    type: "date",
    label: "Date Range Week",
    options: {
      mode: "range",
      view: "week",
    },
  },
  dateMonth: {
    type: "date",
    label: "Date Month",
    options: {
      view: "month",
    },
  },
  dateMonthRange: {
    type: "date",
    label: "Date Month Range",
    options: {
      view: "month",
      mode: "range",
    },
  },
  dateQuarter: {
    type: "date",
    label: "Date Quarter",
    options: {
      view: "quarter",
    },
  },
  dateHalfYear: {
    type: "date",
    label: "Date Half Year",
    options: {
      view: "halfyear",
    },
  },
  dateYear: {
    type: "date",
    label: "Date Year",
    options: {
      view: "year",
    },
  },
  department: {
    type: "in",
    label: "Department",
    options: {
      options: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
          {
            value: "engineering",
            label: "Engineering",
          },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "hr", label: "Human Resources" },
          { value: "finance", label: "Finance" },
        ]
      },
    },
  },
  name: {
    type: "search",
    label: "Employee name",
  },
  manager: {
    type: "in",
    label: "Manager",
    options: {
      options: [
        { value: "alice", label: "Alice Johnson" },
        { value: "bob", label: "Bob Smith" },
        { value: "carol", label: "Carol Williams" },
        { value: "dave", label: "Dave Brown" },
      ],
    },
  },
  location: {
    type: "in",
    label: "Office location",
    options: {
      options: [
        { value: "london", label: "London" },
        { value: "new_york", label: "New York" },
        { value: "tokyo", label: "Tokyo" },
        { value: "remote", label: "Remote" },
      ],
    },
  },
  role: {
    type: "in",
    label: "Role",
    options: {
      options: [
        { value: "engineer", label: "Software Engineer" },
        { value: "designer", label: "Product Designer" },
        { value: "manager", label: "Product Manager" },
        { value: "analyst", label: "Data Analyst" },
        { value: "marketer", label: "Marketing Specialist" },
        { value: "sales", label: "Sales Representative" },
        { value: "hr", label: "Human Resources Specialist" },
        { value: "finance", label: "Financial Analyst" },
        { value: "customer_support", label: "Customer Support Specialist" },
        { value: "legal", label: "Legal Counsel" },
        { value: "operations", label: "Operations Manager" },
        { value: "research", label: "Research Scientist" },
        { value: "product", label: "Product Manager" },
        { value: "security", label: "Security Specialist" },
        { value: "other", label: "Other" },
      ],
    },
  },
}

// Define sample presets for use in stories
const samplePresets: PresetsDefinition<typeof sampleDefinition> = [
  {
    label: "Engineering Team",
    filter: {
      department: ["engineering"],
      role: ["engineer", "manager"],
    },
  },
  {
    label: "Remote Workers",
    filter: {
      location: ["remote"],
    },
  },
  {
    label: "Alice's Team",
    filter: {
      manager: ["alice"],
    },
  },
]

const FiltersWithState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {
      name: "John",
      department: ["engineering"],
    }
  )

  return (
    <Filters.Root
      schema={sampleDefinition}
      filters={filters}
      onChange={setFilters}
    >
      <Filters.Controls />
      <Filters.Presets />
      <Filters.ChipsList />
    </Filters.Root>
  )
}

export const Interactive: StoryObj = {
  render: () => <FiltersWithState />,
}

// Example of pre-populated filters
const FiltersWithInitialState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {
      department: ["engineering", "marketing"],
      name: "John",
      manager: ["alice"],
    }
  )

  return (
    <Filters.Root
      schema={sampleDefinition}
      filters={filters}
      onChange={setFilters}
    >
      <Filters.Controls />
      <Filters.Presets />
      <Filters.ChipsList />
    </Filters.Root>
  )
}

export const WithInitialFilters: StoryObj = {
  render: () => <FiltersWithInitialState />,
}

// Example with presets
const FiltersWithPresets = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {}
  )

  return (
    <Filters.Root
      schema={sampleDefinition}
      filters={filters}
      presets={samplePresets}
      onChange={setFilters}
    >
      <Filters.Controls />
      <Filters.Presets />
      <Filters.ChipsList />
    </Filters.Root>
  )
}

export const WithPresets: StoryObj = {
  render: () => <FiltersWithPresets />,
}

// Example with presets and initial filters
const FiltersWithPresetsAndInitialState = () => {
  const [filters, setFilters] = useState<FiltersState<typeof sampleDefinition>>(
    {
      department: ["engineering"],
      role: ["engineer"],
    }
  )

  return (
    <Filters.Root
      schema={sampleDefinition}
      filters={filters}
      presets={samplePresets}
      onChange={setFilters}
    >
      <Filters.Controls />
      <Filters.Presets />
      <Filters.ChipsList />
    </Filters.Root>
  )
}

export const WithPresetsAndInitialFilters: StoryObj = {
  render: () => <FiltersWithPresetsAndInitialState />,
}

type Story = StoryObj<typeof Filters.Root>

export const Default: Story = {
  args: {
    schema: sampleDefinition,
    filters: {},
    onChange: fn(),
  },
}

/**
 * This example demonstrates how presets can be used to quickly apply
 * predefined filter combinations.
 */
export const WithPresetsArgs: Story = {
  args: {
    schema: sampleDefinition,
    filters: {},
    presets: samplePresets,
    onChange: fn(),
  },
}

/**
 * This example demonstrates how filters can be serialized to and from the URL.
 * Try selecting some filters and notice how the URL updates. You can copy this URL
 * and paste it in a new tab to restore the same filter state.
 */
export const WithUrlSerialization: Story = {
  args: {
    schema: sampleDefinition,
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
        <Filters.Root {...args} filters={filters} onChange={setFilters}>
          <Filters.Controls />
          <Filters.Presets />
          <Filters.ChipsList />
        </Filters.Root>
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
    schema: sampleDefinition,
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
        <Filters.Root
          {...args}
          filters={filters}
          presets={samplePresets}
          onChange={setFilters}
        >
          <Filters.Controls />
          <Filters.Presets />
          <Filters.ChipsList />
        </Filters.Root>
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
        <Filters.Root
          schema={asyncDefinition}
          filters={filters}
          onChange={setFilters}
        >
          <Filters.Controls />
          <Filters.Presets />
          <Filters.ChipsList />
        </Filters.Root>
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

  // Generate a large list of countries
  const generateCountries = () => {
    const countries = [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "br", label: "Brazil" },
      { value: "ar", label: "Argentina" },
      { value: "uk", label: "United Kingdom" },
      { value: "fr", label: "France" },
      { value: "de", label: "Germany" },
      { value: "it", label: "Italy" },
      { value: "es", label: "Spain" },
      { value: "pt", label: "Portugal" },
      { value: "ru", label: "Russia" },
      { value: "cn", label: "China" },
      { value: "jp", label: "Japan" },
      { value: "kr", label: "South Korea" },
      { value: "in", label: "India" },
      { value: "au", label: "Australia" },
      { value: "nz", label: "New Zealand" },
      { value: "za", label: "South Africa" },
      { value: "eg", label: "Egypt" },
      { value: "ng", label: "Nigeria" },
      { value: "ke", label: "Kenya" },
      { value: "sa", label: "Saudi Arabia" },
      { value: "ae", label: "United Arab Emirates" },
      { value: "il", label: "Israel" },
      { value: "tr", label: "Turkey" },
      { value: "th", label: "Thailand" },
      { value: "vn", label: "Vietnam" },
      { value: "my", label: "Malaysia" },
      { value: "sg", label: "Singapore" },
      { value: "id", label: "Indonesia" },
      { value: "ph", label: "Philippines" },
      { value: "se", label: "Sweden" },
      { value: "no", label: "Norway" },
      { value: "dk", label: "Denmark" },
      { value: "fi", label: "Finland" },
      { value: "nl", label: "Netherlands" },
      { value: "be", label: "Belgium" },
      { value: "ch", label: "Switzerland" },
      { value: "at", label: "Austria" },
      { value: "gr", label: "Greece" },
      { value: "pl", label: "Poland" },
      { value: "cz", label: "Czech Republic" },
      { value: "hu", label: "Hungary" },
      { value: "ro", label: "Romania" },
      { value: "bg", label: "Bulgaria" },
      { value: "hr", label: "Croatia" },
      { value: "rs", label: "Serbia" },
      { value: "ua", label: "Ukraine" },
    ]
    return countries
  }

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
      <Filters.Root
        schema={largeAsyncDefinition}
        filters={filters}
        onChange={setFilters}
      >
        <Filters.Controls />
        <Filters.Presets />
        <Filters.ChipsList />
      </Filters.Root>
    </div>
  )
}
export const WithLargeAsyncOptions: Story = {
  render: () => <LargeAsyncOptionsComponent cache={false} />,
}

export const WithLargeAsyncOptionsWithCache: Story = {
  render: () => <LargeAsyncOptionsComponent cache={true} />,
}
