import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { Select, SelectItemObject, SelectProps } from "../index"

import { IconType } from "@/components/F0Icon"
import { createDataSourceDefinition } from "@/hooks/datasource"
import { Appearance, Circle, Desktop, Plus } from "@/icons/app"
import {
  DEPARTMENTS_MOCK,
  FIRST_NAMES_MOCK,
  getMockValue,
  MOCK_ICONS,
  ROLES_MOCK,
  SURNAMES_MOCK,
} from "@/mocks"

import { inputFieldStatus } from "@/ui/InputField"
import { useState } from "react"

// Wraps the Select component with a hook to show the selected value
const SelectWithHooks = (props: SelectProps<string>) => {
  const { label, ...restProps } = props
  const [localValue, setLocalValue] = useState(props.value)
  const [, setSearchValue] = useState("")
  // Sets a click handler to change the label's value
  const handleOnChange = (
    value: string,
    item?: unknown,
    option?: SelectItemObject<string>
  ) => {
    setLocalValue(value)
    console.log(
      "selected value:",
      value,
      "- original item:",
      item,
      "- selection option:",
      option
    )
  }

  const handleOnSearchChange = (value: string) => {
    setSearchValue(value)
    console.log("searchValue", value)
  }

  return (
    <div className="w-48">
      <Select
        label={label ?? "The label"}
        {...restProps}
        value={localValue}
        onChange={handleOnChange}
        onSearchChange={handleOnSearchChange}
      />
    </div>
  )
}

const icons: Record<string, IconType> = {
  light: Circle,
  dark: Appearance,
  system: Desktop,
}
const items = [
  {
    id: "light",
    name: "Light",
    description: "A bright and airy theme for a visually appealing interface",
    extra: 123,
  },
  {
    id: "dark",
    name: "Dark",
    description: "A sleek and modern theme for a sophisticated look",
    tag: "Paid",
  },
  {
    id: "system",
    name: "System with a long label can overflow",
    description: "A theme that adapts to the system's default appearance",
    tag: "Unpaid",
  },
]

const meta: Meta = {
  title: "Input/Select",
  component: SelectWithHooks,
  parameters: {
    a11y: {
      skipCi: true,
    },
    docs: {
      description: {
        component:
          "<p>Renders an select input field with a list of options to choose from.</p>" +
          "<p>The list is virtualized so can handle large amount of items</p>",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label of the select",
      required: true,
    },
    placeholder: {
      description: "Placeholder of the select",
    },
    value: {
      description: "Current selected value of the select",
    },
    defaultItem: {
      description: "Default item to be selected when component mounts",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      defaultValue: "sm",
      description: "Size of the select",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    open: {
      control: "boolean",
      description: "Controls whether the select dropdown is open",
    },
    hideLabel: {
      control: "boolean",
      description:
        "Whether to hide the label visually (still accessible to screen readers)",
    },
    clearable: {
      control: "boolean",
      description: "Whether the select value can be cleared",
    },
    icon: {
      description: "Icon to display inside the select input",
    },
    labelIcon: {
      description: "Icon to display next to the label",
    },
    error: {
      description:
        "Error message to display below the select, This is a shortcut for status.type = 'error'",
    },
    status: {
      description:
        "Status of the select and a message to display below the select",
      control: "select",
      options: inputFieldStatus,
      defaultValue: "default",
    },
    hint: {
      description:
        "Hint to display below the select, This is a shortcut for status.type = 'default'. Error status overwrites hint",
    },
    children: {
      description:
        "Custom trigger content for the select. When provided, replaces the default input field trigger",
    },
    showSearchBox: {
      description:
        "Shows a search box. The component will filter the items by name and by description unless searchFunc will be in use",
    },
    searchValue: {
      description: "Default value for the search box",
    },
    searchEmptyMessage: {
      description: "Message to show when filter returns no results",
    },
    searchBoxPlaceholder: {
      description: "Placeholder for the search box",
    },
    searchFn: {
      description:
        "Function to filter the options. If not provided, the component will filter the options by label. Only applies when options are passed in the options prop, not when a data source is used (use fetchData options for this)",
      table: {
        type: {
          summary:
            "(option: SelectItemObject<string>, search?: string) => boolean | undefined",
        },
      },
    },
    onSearchChange: {
      description: "Function called when the search input value changes",
    },
    onOpenChange: {
      description:
        "Function called when the select dropdown open state changes",
    },
    options: {
      description:
        "<p>Array of options to show in the select. Each option can its an object of type `SelectItemObject` or `'separator'`" +
        " to render a separator line</p>" +
        "```typescript\n" +
        "type SelectItemObject<T> = {\n" +
        "  value: T\n" +
        "  label: string\n" +
        "  description?: string\n" +
        "  avatar?: AvatarVariant\n" +
        "  icon?: IconType\n" +
        "  item?: unknown\n" +
        "}```",
    },
    onChange: {
      description:
        "Function to handle the change event. Returns the value of the selected option, and the item object if it exists",
    },
    actions: {
      description:
        "<p>List of action buttons that will be displayed at the bottom of the select dropdown. Each action should have a label, onClick handler, optional icon, and variant.</p>" +
        "```typescript\n" +
        "type Action = {\n" +
        "  label: string\n" +
        "  onClick: () => void\n" +
        "  icon?: IconType\n" +
        "  variant?: 'ghost' | 'critical'\n" +
        "}```",
    },
    loading: {
      control: "boolean",
      description:
        "Whether the select is loading. If true, the select will be disabled",
    },
  },
  args: {
    placeholder: "Select a theme",
    onChange: fn(),
    value: "light",
    options: items.map((item) => {
      return {
        value: item.id,
        label: item.name,
        icon: icons[item.id],
        description: item.description,
        tag: item.tag,
        item,
      }
    }),
    disabled: false,
    showSearchBox: false,
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof SelectWithHooks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Select a theme",
    value: undefined,
    placeholder: undefined,
  },
}

export const WithPreselectedValue: Story = {
  args: {
    label: "Select a theme",
    value: "dark",
  },
}

export const WithPlaceholder: Story = {
  args: {
    label: "Select a theme",
    placeholder: "Select a theme",
    value: undefined,
  },
}

export const WithHiddenLabel: Story = {
  args: {
    label: "Select a theme",
    hideLabel: true,
  },
}

export const WithIcon: Story = {
  args: {
    label: "Select a theme",
    icon: Desktop,
  },
}

export const WithLabelIcon: Story = {
  args: {
    label: "Select a theme",
    labelIcon: Circle,
  },
}

export const SizeMd: Story = {
  args: {
    label: "Select a theme",
    icon: Desktop,
    size: "md",
  },
}

export const WithError: Story = {
  args: {
    label: "Select a theme",
    error: "Error message",
  },
}

export const WithWarning: Story = {
  args: {
    label: "Select a theme",
    status: {
      type: "warning",
      message: "Warning message",
    },
  },
}

export const WithInfo: Story = {
  args: {
    label: "Select a theme",
    status: {
      type: "info",
      message: "Info message",
    },
  },
}

export const WithHint: Story = {
  args: {
    label: "Select a theme",
    hint: "Hint message",
  },
}

export const Clearable: Story = {
  args: {
    label: "Select a theme",
    clearable: true,
  },
}

export const WithSearchBox: Story = {
  args: {
    searchEmptyMessage: "No results found",
    searchBoxPlaceholder: "Search for a theme",
  },
  render: (args) => {
    return (
      <>
        <Select
          showSearchBox
          label="Select a theme"
          onChange={fn()}
          searchFn={(option, searchValue) => {
            console.log("searchFn", option, searchValue)
            return (
              option.type === "separator" ||
              !searchValue ||
              option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
              option.description
                ?.toLowerCase()
                .includes(searchValue.toLowerCase())
            )
          }}
          options={args.options}
        />
      </>
    )
  },
}

export const WithActions: Story = {
  args: {
    showSearchBox: true,
    searchEmptyMessage: "No results found",
    searchBoxPlaceholder: "Search for a theme",
    actions: [
      {
        label: "Create new option",
        onClick: fn(),
        icon: Plus,
        variant: "ghost",
      },
    ],
  },
}

const mockItems = Array.from({ length: 10000 }, (_, i) => ({
  value: `option-${i}`,
  label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  icon: getMockValue(MOCK_ICONS, i),
  role: getMockValue(ROLES_MOCK, i),
  department: getMockValue(DEPARTMENTS_MOCK, i),
  description: `Description for option ${i}`,
}))

type MockItem = (typeof mockItems)[number]

export const LargeList: Story = {
  args: {
    ...WithSearchBox.args,
    value: "option-4",
    options: [
      ...(meta.args?.options || []),
      { type: "separator" },
      ...mockItems,
    ],
  },
}

export const WithDataSourceNotPaginated: Story = {
  args: {
    placeholder: "Select a value",
    showSearchBox: true,
    onChange: fn(),
    value: "option-2",
    source: createDataSourceDefinition<MockItem>({
      dataAdapter: {
        fetchData: (options) => {
          const { search } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const results = mockItems.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )

              const res = {
                records: results,
              }
              resolve(res)
            }, 100)
          })
        },
      },
    }),
    mapOptions: (item: (typeof mockItems)[number]) => ({
      value: item.value,
      label: item.label,
      icon: item.icon,
      description: item.description,
    }),
  },
}

export const WithDataSourcePaginated: Story = {
  args: {
    placeholder: "Select a value",
    showSearchBox: true,
    onChange: fn(),
    value: "option-2",
    source: createDataSourceDefinition<MockItem>({
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "eliseo-vargas", label: "Elise Vargas" },
              { value: "alexander-smith", label: "Alexander Smith" },
              { value: "bob-johnson", label: "Bob Johnson" },
              { value: "carol-williams", label: "Carol Williams" },
              { value: "dave-brown", label: "Dave Brown" },
              { value: "saul-vargas", label: "Saul Vargas" },
              { value: "michael-johnson", label: "Michael Johnson" },
              { value: "john-williams", label: "John Williams" },
              { value: "jane-brown", label: "Jane Brown" },
              { value: "jose-martinez", label: "Jose Martinez" },
              { value: "james-smith", label: "James Smith" },
              { value: "david-williams", label: "David Williams" },
              { value: "william-brown", label: "William Brown" },
              { value: "emily-martinez", label: "Emily Martinez" },
              { value: "luis-garcia", label: "Luis Garcia" },
              { value: "robert-martinez", label: "Robert Martinez" },
              { value: "joseph-smith", label: "Joseph Smith" },
              { value: "daniel-williams", label: "Daniel Williams" },
              { value: "patrick-brown", label: "Patrick Brown" },
              { value: "charles-martinez", label: "Charles Martinez" },
              { value: "anthony-smith", label: "Anthony Smith" },
            ],
          },
        },
        date: {
          type: "date",
          label: "Date",
          options: {
            minDate: new Date("2021-01-01"),
            maxDate: new Date("2021-12-31"),
            mode: "range",
            view: "year",
          },
        },
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options) => {
          const { search, pagination } = options
          return new Promise((resolve) => {
            setTimeout(
              () => {
                const pageSize = pagination.perPage ?? 10
                const cursor = "cursor" in pagination ? pagination.cursor : null
                const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

                const results = mockItems.filter(
                  (item) =>
                    !search ||
                    item.label.toLowerCase().includes(search.toLowerCase()) ||
                    item.description
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )

                const paginatedResults = results.slice(
                  cursor ? Number(cursor) : 0,
                  nextCursor
                )

                const res = {
                  type: "infinite-scroll" as const,
                  cursor: String(nextCursor),
                  perPage: pageSize,
                  hasMore: nextCursor < results.length,
                  records: paginatedResults,
                  total: results.length,
                }
                resolve(res)
              },
              1000 + Math.random() * 500
            )
          })
        },
      },
    }),
    mapOptions: (item: MockItem) => ({
      value: item.value,
      label: item.label,
      icon: item.icon,
      description: item.description,
    }),
  },
}

export const WithDataSourceGrouping: Story = {
  args: {
    placeholder: "Select a value",
    showSearchBox: true,
    onChange: fn(),
    value: "option-2",
    source: createDataSourceDefinition<MockItem>({
      grouping: {
        mandatory: true,
        collapsible: true,
        groupBy: {
          role: {
            name: "Role",
            label: (groupId) => `${groupId}`,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.role === groupId).length,
          },
          department: {
            name: "Department",
            label: (groupId) => `${groupId}`,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.department === groupId).length,
          },
        },
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options) => {
          const { search, pagination, sortings } = options
          return new Promise((resolve) => {
            setTimeout(
              () => {
                const pageSize = pagination.perPage ?? 10
                const cursor = "cursor" in pagination ? pagination.cursor : null
                const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

                const sortField = sortings?.[0]?.field as keyof MockItem
                const results = mockItems
                  .sort((a, b) => {
                    return (
                      (a[sortField] as string)?.localeCompare(
                        b[sortField] as string
                      ) ?? 0
                    )
                  })
                  .filter(
                    (item) =>
                      !search ||
                      item.label.toLowerCase().includes(search.toLowerCase())
                  )

                const paginatedResults = results.slice(
                  cursor ? Number(cursor) : 0,
                  nextCursor
                )

                const res = {
                  type: "infinite-scroll" as const,
                  cursor: String(nextCursor),
                  perPage: pageSize,
                  hasMore: nextCursor < results.length,
                  records: paginatedResults,
                  total: results.length,
                }
                resolve(res)
              },
              100 + Math.random() * 100
            )
          })
        },
      },
    }),
    mapOptions: (item: MockItem) => ({
      value: item.value,
      label: item.label,
      icon: item.icon,
      description: item.description,
    }),
  },
}

export const WithCustomTrigger: Story = {
  args: {
    placeholder: "Choose a color",
    onChange: fn(),
    value: "red",
    options: [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { type: "separator" },
      { value: "blue", label: "Blue" },
    ],
  },
  render: ({ value, options, placeholder, onChange, ...args }) => (
    <Select
      label="Choose a color"
      value={value}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      {...args}
    >
      <div className="flex h-24 w-24 items-center rounded-md border border-solid border-f1-border bg-f1-background-secondary p-2 text-center transition-colors hover:bg-f1-background-secondary-hover">
        {placeholder}
      </div>
    </Select>
  ),
}
