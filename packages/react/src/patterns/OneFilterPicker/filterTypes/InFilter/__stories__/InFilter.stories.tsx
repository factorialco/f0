import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

import { F0SearchInput } from "@/components/F0SearchInput"
import {
  generateMockUsers,
  MockUser,
} from "@/patterns/OneDataCollection/__stories__/mockData"
import { createDataSourceDefinition } from "@/hooks/datasource"

import type { InFilterOptionItem, InFilterOptions } from "../types"

import { InFilter } from "../InFilter"

const meta = {
  title: "Filters/FilterPicker/Filters/InFilter",
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
      <F0SearchInput
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

// Grouped (nested) options example.
//
// A parent option can expose `children`, whose selections are stored under a
// separate `filterKey` (here `"space"`). Expanding a group reveals its children;
// toggling a child is reported through `onFilterChange(filterKey, values)` rather
// than the parent's `onChange`. This is how "in" filters render grouped options
// like the office → floor hierarchy below.
const GroupedOptionsExample = () => {
  // Parent selection (offices) lives in `value`; nested child selections
  // (spaces) live under their own filter key, mirroring how OneFilterPicker
  // stores sibling-filter values.
  const [officeValues, setOfficeValues] = useState<string[]>([])
  const [allFiltersValue, setAllFiltersValue] = useState<
    Record<string, unknown>
  >({ space: [] })

  const groupedOptions: InFilterOptionItem<string>[] = [
    {
      value: "101",
      label: "Barcelona HQ",
      children: {
        filterKey: "space",
        options: [
          { value: "1", label: "Floor 1" },
          { value: "2", label: "Floor 2" },
          { value: "3", label: "Rooftop Terrace" },
        ],
      },
    },
    {
      value: "102",
      label: "Madrid Office",
      children: {
        filterKey: "space",
        options: [
          { value: "4", label: "Floor 1 (Madrid)" },
          { value: "5", label: "Floor 2 (Madrid)" },
        ],
      },
    },
    { value: "103", label: "London (no floors)" },
  ]

  return (
    <InFilter<string>
      schema={{ label: "Office", options: { options: groupedOptions } }}
      value={officeValues}
      onChange={setOfficeValues}
      allFiltersValue={allFiltersValue}
      onFilterChange={(key, value) =>
        setAllFiltersValue((prev) => ({ ...prev, [key]: value }))
      }
    />
  )
}

export const GroupedOptions: Story = {
  render: () => <GroupedOptionsExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Options grouped under expandable parents. Child selections are stored under a separate `filterKey` and reported via `onFilterChange`, so a group's children can drive a sibling filter independently of the parent selection.",
      },
    },
  },
}

// Hierarchical nested options with multiple depth levels.
//
// Reproduces the exact scenario the root-level separator fix targets: a deeply
// nested tree (4 depth levels) where an expanded node sits next to a sibling.
// Only root-level entries render a bottom-border separator, so the expanded
// subtree reads as a single continuous block.
const NestedOptionsExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [allFilters, setAllFilters] = useState<Record<string, unknown>>({})

  const handleChange = (value: string[]) => {
    setSelectedValues(value)
    setAllFilters((prev) => ({ ...prev, team: value }))
  }

  const handleFilterChange = (key: string, value: unknown) => {
    setAllFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <InFilter<string>
      schema={{
        label: "Teams",
        options: {
          options: [
            {
              value: "people",
              label: "People",
              children: {
                filterKey: "teamDepth1",
                options: [
                  {
                    value: "people_2",
                    label: "people_2",
                    children: {
                      filterKey: "teamDepth2",
                      options: [
                        {
                          value: "people_3",
                          label: "people_3",
                          children: {
                            filterKey: "teamDepth3",
                            options: [
                              { value: "people_4", label: "people_4" },
                              { value: "people_4b", label: "people_4b" },
                            ],
                          },
                        },
                        { value: "people_3b", label: "people_3b" },
                      ],
                    },
                  },
                ],
              },
            },
            {
              value: "engineering",
              label: "Engineering",
              children: {
                filterKey: "teamDepth1",
                options: [
                  {
                    value: "frontend",
                    label: "Frontend",
                    children: {
                      filterKey: "teamDepth2",
                      options: [
                        { value: "design-system", label: "Design System" },
                        { value: "web-platform", label: "Web Platform" },
                      ],
                    },
                  },
                  { value: "backend", label: "Backend" },
                  { value: "mobile", label: "Mobile" },
                ],
              },
            },
            { value: "marketing", label: "Marketing" },
          ],
        },
      }}
      value={selectedValues}
      onChange={handleChange}
      onFilterChange={handleFilterChange}
      allFiltersValue={allFilters}
    />
  )
}

export const NestedOptions: Story = {
  render: () => <NestedOptionsExample />,
}
