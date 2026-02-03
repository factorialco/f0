import type { Decorator, Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, within } from "storybook/test"

import { IconType } from "@/components/F0Icon"
import {
  createDataSourceDefinition,
  FiltersDefinition,
  RecordType,
} from "@/hooks/datasource"
import { SelectedItemsDetailedStatus } from "@/hooks/datasource/types/selection.typings"
import { Appearance, Circle, Desktop, Placeholder, Plus } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"
import { inputFieldStatus } from "@/ui/InputField"

import { F0Select, selectSizes } from "../index"
import {
  Employee,
  employeeNonPaginatedSource,
  employeePaginatedSource,
  getEmployeeById,
  MockItem,
  mockItems,
} from "./mocks"

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
  title: "Select",
  component: F0Select,
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
        "  disabled?: boolean\n" +
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
    ...dataTestIdArgs,
  },
  args: {
    label: "Select a theme",
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
  decorators: [
    ((Story, { args }) => {
      const [localValue, setLocalValue] = useState(
        args.value as string | undefined
      )
      const [searchValue, setSearchValue] = useState("")
      const [selectionStatus, setSelectionStatus] = useState<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SelectedItemsDetailedStatus<any, any> | undefined
      >(undefined)

      const handleOnChange = (value: string) => {
        setLocalValue(value)
      }

      const handleOnSearchChange = (value: string) => {
        setSearchValue(value)
      }

      const handleOnSelectItems = (
        status: SelectedItemsDetailedStatus<RecordType, FiltersDefinition>
      ) => {
        setSelectionStatus(status)
        // @ts-expect-error - onSelectItems is not typed correctly
        args.onSelectItems?.(status)
      }

      const truncatedValue = (localValue || []).slice(0, 50)
      const isMultiplePaginated = args.multiple && args.source

      const getSelectionDisplay = () => {
        if (!selectionStatus) return "No selection yet"
        const { allSelected, selectedIds, itemsStatus } = selectionStatus

        if (allSelected === true) return "All selected"

        if (allSelected === "indeterminate") {
          const uncheckedIds = itemsStatus
            .filter((item: { checked: boolean }) => !item.checked)
            .map(
              (item: { item: { value?: string } }) => item.item?.value ?? "?"
            )
          return `All selected except: ${uncheckedIds.slice(0, 10).join(", ")}${uncheckedIds.length > 10 ? "..." : ""}`
        }

        if (selectedIds.length === 0) return "No items selected"
        return `Selected: ${selectedIds.slice(0, 10).join(", ")}${selectedIds.length > 10 ? "..." : ""}`
      }

      const getFiltersDisplay = () => {
        if (!selectionStatus?.filters) return ""
        const activeFilters = Object.entries(selectionStatus.filters)
          .filter(
            ([, value]) => value !== undefined && value !== null && value !== ""
          )
          .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
        if (activeFilters.length === 0) return ""
        return `Filters: ${activeFilters.join(", ")}`
      }

      return (
        <>
          <Story
            args={
              {
                ...args,
                value: localValue,
                onChange: handleOnChange,
                searchValue: searchValue,
                onSearchChange: handleOnSearchChange,
                ...(isMultiplePaginated
                  ? { onSelectItems: handleOnSelectItems }
                  : {}),
              } as typeof args
            }
          />
          <div className="mt-10">
            {isMultiplePaginated ? (
              <>
                <p>{getSelectionDisplay()}</p>
                {selectionStatus && (
                  <p>Total: {selectionStatus.selectedCount}</p>
                )}
                {getFiltersDisplay() && <p>Filters: {getFiltersDisplay()}</p>}
              </>
            ) : (
              <>
                Selected: {JSON.stringify(truncatedValue, null, 2)}
                {args.multiple && ` - Total: ${localValue?.length ?? 0}`}
              </>
            )}
          </div>
        </>
      )
    }) satisfies Decorator,
    (Story) => (
      <div
        className="w-[330px]"
        onClick={() => {
          console.log("click was received in elements below the select")
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Select a theme",
    value: undefined,
    placeholder: undefined,
  },
}

export const WithDataTestId: Story = {
  args: {
    label: "Select with Test ID",
    dataTestId: "my-test-select",
    value: undefined,
    placeholder: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-select")).toBeInTheDocument()
  },
}

export const WithPreselectedValue: Story = {
  args: {
    label: "Select a theme",
    value: "dark",
  },
}

export const WithDisabledOptions: Story = {
  args: {
    label: "Select a theme",
    placeholder: "Select a theme",
    onChange: fn(),
    options: items.map((item, index) => {
      return {
        value: item.id,
        label: item.name,
        icon: icons[item.id],
        description: item.description,
        tag: item.tag,
        item,
        disabled: index === 1,
      }
    }),
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
    value: "dark",
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
        <F0Select
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
    label: "Select a theme",
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

export const LargeList: Story = {
  args: {
    ...WithSearchBox.args,
    label: "Select a theme",
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
    label: "Select Employee",
    placeholder: "Search employees...",
    showSearchBox: true,
    onChange: fn(),
    value: "5",
    source: employeeNonPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
  },
}

export const WithDataSourcePaginated: Story = {
  args: {
    label: "Select Employee",
    placeholder: "Search employees...",
    showSearchBox: true,
    onChange: fn(),
    value: "42",
    defaultItem: (() => {
      const emp = getEmployeeById(42)
      return emp
        ? {
            value: emp.value,
            label: emp.label,
            avatar: emp.avatar,
            description: `${emp.jobTitle} · ${emp.departmentName}`,
          }
        : undefined
    })(),
    source: employeePaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
  },
}

export const WithDataSourceGrouping: Story = {
  args: {
    label: "Data Source Grouping",
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
          workplace: {
            name: "Workplace",
            label: (groupId) => `${groupId}`,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.workplace === groupId).length,
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
      avatar: item.avatar,
      description: item.description,
    }),
  },
}

export const MultipleNotPaginated: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
    value: ["2", "5", "12"],
    clearable: true,
    showSearchBox: true,
    source: employeeNonPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
  },
}

/**
 * Multiple selection with paginated data (2,847 employees).
 * Use `defaultItem` to provide labels for pre-selected values not in the first page.
 * Try the "Select All" to select all employees - the checkbox will show indeterminate state
 * when some but not all are selected.
 */
export const MultiplePaginated: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
    value: ["3", "42", "500", "1200"],
    // Provide defaultItem for values not in the first page
    defaultItem: (() => {
      const ids = [42, 500, 1200]
      return ids
        .map((id) => {
          const emp = getEmployeeById(id)
          return emp
            ? {
                value: emp.value,
                label: emp.label,
                avatar: emp.avatar,
              }
            : null
        })
        .filter(Boolean)
    })(),
    clearable: true,
    showSearchBox: true,
    source: employeePaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
    }),
    onSelectItems: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
    }),
  },
}

/**
 * Multiple selection with paginated data (2,847 employees).
 * Use `defaultItem` to provide labels for pre-selected values not in the first page.
 * Try the "Select All" to select all employees - the checkbox will show indeterminate state
 * when some but not all are selected.
 */
export const MultiplePaginatedAsList: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
    value: ["3", "42", "500", "1200"],
    showSearchBox: true,
    asList: true,
    // Provide defaultItem for values not in the first page
    defaultItem: (() => {
      const ids = [42, 500, 1200]
      return ids
        .map((id) => {
          const emp = getEmployeeById(id)
          return emp
            ? {
                value: emp.value,
                label: emp.label,
                avatar: emp.avatar,
              }
            : null
        })
        .filter(Boolean)
    })(),
    clearable: true,
    source: employeePaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
    }),
    onSelectItems: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
    }),
    disableSelectAll: true,
    hideLabel: true,
  },
  render: (args) => {
    return (
      <div className="flex h-[400px] flex-row">
        <F0Select {...(args as any)} />
      </div>
    )
  },
}

export const AsList: Story = {
  args: {
    label: "Select a theme",
    value: "dark",
    asList: true,
  },
  render: (args) => {
    return (
      <div className="flex h-max w-[300px]">
        <F0Select {...(args as any)} />
      </div>
    )
  },
}

/**
 * Multiple selection with manual selection only (no "Select All" button).
 * The `disableSelectAll` prop removes the "Select All" functionality,
 * forcing users to select items one by one. The `allSelected` state will
 * always be false, even when all items are selected manually.
 *
 * **Try this**: Select all items manually and check the console -
 * `selectionStatus.allChecked` will remain `false` even when all are selected.
 */
export const MultipleManualSelectionOnly: Story = {
  args: {
    label: "Select Team Members (Manual Only)",
    placeholder: "Search employees...",
    multiple: true,
    disableSelectAll: true,
    value: ["2", "5"],
    clearable: true,
    showSearchBox: true,
    source: employeeNonPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
  },
}

/**
 * Single select with paginated data and filters.
 * Use `defaultItem` to provide label for pre-selected value not in the first page.
 * Filter by department, office, or legal entity to narrow down results.
 */
export const SingleSelectWithFilters: Story = {
  args: {
    label: "Select Employee",
    placeholder: "Choose an employee...",
    showSearchBox: true,
    clearable: true,
    value: "250",
    // Provide defaultItem for value not in the first page
    defaultItem: (() => {
      const emp = getEmployeeById(250)
      return emp
        ? {
            value: emp.value,
            label: emp.label,
            description: `${emp.jobTitle} · ${emp.officeName}`,
            avatar: emp.avatar,
          }
        : undefined
    })(),
    source: employeePaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      description: `${item.jobTitle} · ${item.officeName}`,
      avatar: item.avatar,
    }),
  },
}

export const WithCustomTrigger: Story = {
  args: {
    label: "With Custom Trigger",
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
    <F0Select
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
    </F0Select>
  ),
}

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({})),
  args: {
    label: "Label text here",
  },
  render: () => {
    const base = {
      multiple: false as const,
      clearable: true,
      icon: Placeholder,
      labelIcon: Placeholder,
      label: "Label text here",
    }
    const snapshotVariants = [
      { ...base },
      { ...base, disabled: true },
      { ...base, readonly: true },
      { ...base, required: true },
      { ...base, hideLabel: true },
      { ...base, error: true },
      { ...base, status: { type: "error" as const, message: "Error message" } },
      {
        ...base,
        status: { type: "warning" as const, message: "Warning message" },
      },
      { ...base, status: { type: "info" as const, message: "Info message" } },
      { ...base, hint: "Hint message" },
      { ...base },
    ]
    return (
      <div className="flex flex-col gap-4">
        {selectSizes.map((size) => (
          <section key={size}>
            <h4 className="mb-3 text-lg font-semibold">Size: {size}</h4>
            <div className="flex flex-col gap-4">
              <F0Select
                size={size}
                label="Label text here"
                onChange={fn()}
                options={[]}
              />
              {snapshotVariants.map((variant, index) => (
                <F0Select
                  key={`${size}-${index}`}
                  size={size}
                  {...variant}
                  onChange={fn()}
                  options={[]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    )
  },
}
