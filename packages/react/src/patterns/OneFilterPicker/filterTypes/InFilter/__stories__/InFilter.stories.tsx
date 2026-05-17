import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import {
  generateMockUsers,
  MockUser,
} from "@/patterns/OneDataCollection/__stories__/mockData"
import { createDataSourceDefinition } from "@/hooks/datasource"

import type { InFilterOptionItem, InFilterOptions } from "../types"

import { InFilter } from "../InFilter"

const meta = {
  title: "FilterPicker/Filters/InFilter",
  component: InFilter,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="border-f1-border-primary w-[300px] rounded-md border p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InFilter>

export default meta

type Story = StoryObj<typeof InFilter>

// Static options example
export const Default: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        options: [
          { value: "engineering", label: "Engineering" },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "hr", label: "Human Resources" },
        ],
      },
    },
    value: ["engineering"],
    onChange: () => {},
  },
}

// With selected values
export const WithSelectedValues: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        options: [
          { value: "engineering", label: "Engineering" },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "hr", label: "Human Resources" },
        ],
      },
    },
    value: ["engineering", "marketing"],
    onChange: () => {},
  },
}

// Interactive example
const InteractiveExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "engineering",
  ])

  const handleChange = (value: string[]) => {
    setSelectedValues(value)
  }

  return (
    <InFilter<string>
      schema={{
        label: "Department",
        options: {
          options: [
            { value: "engineering", label: "Engineering" },
            { value: "marketing", label: "Marketing" },
            { value: "sales", label: "Sales" },
            { value: "hr", label: "Human Resources" },
          ],
        },
      }}
      value={selectedValues}
      onChange={handleChange}
    />
  )
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
}

// Async options example with immediate resolution
const AsyncOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleChange = (value: string[]) => {
    setSelectedValues(value)
  }

  return (
    <InFilter<string>
      schema={{
        label: "Users",
        options: {
          options: async () => {
            // Simulate API call with a small delay
            return new Promise<InFilterOptionItem<string>[]>((resolve) => {
              setTimeout(() => {
                resolve([
                  { value: "user1", label: "John Doe" },
                  { value: "user2", label: "Jane Smith" },
                  { value: "user3", label: "Bob Johnson" },
                  { value: "user4", label: "Alice Williams" },
                ])
              }, 5000)
            })
          },
        },
      }}
      value={selectedValues}
      onChange={handleChange}
    />
  )
}

export const AsyncOptions: Story = {
  render: () => <AsyncOptionsExample />,
}

// Async options with search example
const AsyncOptionsWithSearchExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [options, setOptions] = useState<InFilterOptionItem<string>[]>([])
  const [filteredOptions, setFilteredOptions] = useState<
    InFilterOptionItem<string>[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  const handleChange = (value: string[]) => {
    setSelectedValues(value)
  }

  // Load options
  useEffect(() => {
    const loadOptions = async () => {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const allOptions = [
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
          { value: "in", label: "India" },
          { value: "au", label: "Australia" },
        ]

        setOptions(allOptions)
        setFilteredOptions(allOptions)
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [])

  // Filter options based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredOptions(filtered)
    }
  }, [searchTerm, options])

  return (
    <div className="flex flex-col gap-3">
      <F1SearchBox
        placeholder="Search countries..."
        value={searchTerm}
        onChange={setSearchTerm}
        clearable
      />

      <InFilter<string>
        schema={{
          label: "Countries",
          options: {
            options: isLoading
              ? async () => {
                  // This will show loading state
                  await new Promise((resolve) => setTimeout(resolve, 500))
                  return []
                }
              : filteredOptions,
          },
        }}
        value={selectedValues}
        onChange={handleChange}
      />
    </div>
  )
}

export const AsyncOptionsWithSearch: Story = {
  render: () => <AsyncOptionsWithSearchExample />,
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates how to implement search functionality with async options. The search is performed client-side after the options are loaded.",
      },
    },
  },
}

// Async options example with longer delay
const SlowAsyncOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleChange = (value: string[]) => {
    setSelectedValues(value)
  }

  return (
    <InFilter<string>
      schema={{
        label: "Countries",
        options: {
          options: async () => {
            // Simulate slow API call
            return new Promise<InFilterOptionItem<string>[]>((resolve) => {
              setTimeout(() => {
                resolve([
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "ca", label: "Canada" },
                  { value: "au", label: "Australia" },
                  { value: "jp", label: "Japan" },
                ])
              }, 3000)
            })
          },
        },
      }}
      value={selectedValues}
      onChange={handleChange}
    />
  )
}

export const SlowAsyncOptions: Story = {
  render: () => <SlowAsyncOptionsExample />,
}

// Async options example with error
const ErrorAsyncOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleChange = (value: string[]) => {
    setSelectedValues(value)
  }

  return (
    <InFilter<string>
      schema={{
        label: "Products",
        options: {
          options: async () => {
            // Simulate API error
            return new Promise<InFilterOptionItem<string>[]>((_, reject) => {
              setTimeout(() => {
                reject(new Error("Failed to fetch products"))
              }, 1000)
            })
          },
        },
      }}
      value={selectedValues}
      onChange={handleChange}
    />
  )
}

export const AsyncOptionsWithError: Story = {
  render: () => <ErrorAsyncOptionsExample />,
}

// Empty options example
export const EmptyOptions: Story = {
  args: {
    schema: {
      label: "Categories",
      options: {
        options: [],
      },
    },
    value: [],
    onChange: () => {},
  },
}

// Sync function options example
export const SyncFunctionOptions: Story = {
  args: {
    schema: {
      label: "Priorities",
      options: {
        options: [
          { value: "high", label: "High" },
          { value: "medium", label: "Medium" },
          { value: "low", label: "Low" },
        ],
      },
    },
    value: [],
    onChange: () => {},
  },
}

const mockUsers: MockUser[] = generateMockUsers(30)

const dataSourceFilterOptions: InFilterOptions<string, MockUser> = {
  source: createDataSourceDefinition({
    dataAdapter: {
      fetchData: async ({ pagination, search }) => {
        const { cursor, perPage = 10 } = pagination
        const startIndex = cursor ? parseInt(cursor) : 0
        const endIndex = startIndex + perPage

        const users = search
          ? mockUsers.filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
          : mockUsers

        const paginatedUsers = users.slice(startIndex, endIndex)
        const hasMore = endIndex < users.length
        const nextCursor = hasMore ? endIndex.toString() : null

        return {
          records: paginatedUsers,
          total: users.length,
          perPage,
          type: "infinite-scroll",
          cursor: nextCursor,
          hasMore,
        }
      },
      paginationType: "infinite-scroll",
      perPage: 10,
    },
  }),
  mapOptions: (item: MockUser) => ({
    value: item.id,
    label: item.name,
  }),
}

export const WithDataSource: Story = {
  args: {
    schema: {
      label: "Countries",
      options: dataSourceFilterOptions,
    },
    value: [],
    onChange: () => {},
  },
}

// --- Hierarchical / nested-selection examples ----------------------------
//
// A 3-level options tree (family → function → role). Each level lives under a
// different `filterKey`, which is how the widget keeps selections at different
// depths in separate `FiltersState` entries.
const jobStructureOptions: InFilterOptionItem<string>[] = [
  {
    value: "engineering",
    label: "Engineering",
    children: {
      filterKey: "function",
      options: [
        {
          value: "backend",
          label: "Backend",
          children: {
            filterKey: "role",
            options: [
              { value: "be-senior", label: "Senior" },
              { value: "be-junior", label: "Junior" },
            ],
          },
        },
        {
          value: "frontend",
          label: "Frontend",
          children: {
            filterKey: "role",
            options: [
              { value: "fe-senior", label: "Senior" },
              { value: "fe-junior", label: "Junior" },
            ],
          },
        },
      ],
    },
  },
  {
    value: "marketing",
    label: "Marketing",
    children: {
      filterKey: "function",
      options: [
        { value: "growth", label: "Growth" },
        { value: "brand", label: "Brand" },
      ],
    },
  },
]

/**
 * Mounts InFilter for a hierarchical tree by maintaining a tiny `FiltersState`
 * locally and routing both the own-key setter (`onChange`) and the
 * sibling-key setter (`onFilterChange`) back into the same state map. This
 * mirrors how FiltersControls wires the real picker.
 */
const HierarchicalHarness = ({
  nestedSelection,
}: {
  nestedSelection?: "independent" | "exclusive"
}) => {
  const ownKey = "family"
  const [state, setState] = useState<Record<string, string[]>>({})

  const writeKey = (key: string, value: unknown) =>
    setState((prev) => ({ ...prev, [key]: value as string[] }))

  return (
    <div className="flex flex-col gap-2">
      <InFilter<string>
        schema={{
          label: "Job structure",
          nestedSelection,
          options: { options: jobStructureOptions },
        }}
        value={state[ownKey] ?? []}
        onChange={(v) => writeKey(ownKey, v)}
        onFilterChange={writeKey}
        allFiltersValue={state}
        filterKey={ownKey}
      />
      <pre className="text-f1-foreground-secondary rounded bg-f1-background-secondary p-2 text-xs">
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export const HierarchicalIndependent: Story = {
  render: () => <HierarchicalHarness />,
  parameters: {
    docs: {
      description: {
        story:
          "Default behavior (`nestedSelection: 'independent'`). Selections at each level are stored independently — picking 'Engineering' and 'Engineering > Backend' leaves both in state, which produces redundant chips and forces consumers to dedupe downstream. Use the JSON readout under the widget to inspect `FiltersState` as you click.",
      },
    },
  },
}

export const HierarchicalExclusive: Story = {
  render: () => <HierarchicalHarness nestedSelection="exclusive" />,
  parameters: {
    docs: {
      description: {
        story:
          "With `nestedSelection: 'exclusive'`, selecting an option auto-clears its ancestors and descendants from their respective filter keys. Pick 'Engineering', then expand and pick 'Backend' — the family entry empties. Pick 'Engineering' again — the function entry empties. Sibling subtrees (e.g. Marketing) are not touched.",
      },
    },
  },
}
