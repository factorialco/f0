import type { Decorator, Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, within } from "storybook/test"
import { IconType } from "@/components/F0Icon"
import { inputFieldStatus } from "@/components/F0InputField"
import {
  createDataSourceDefinition,
  FiltersDefinition,
  RecordType,
} from "@/hooks/datasource"
import { SelectedItemsDetailedStatus } from "@/hooks/datasource/types/selection.typings"
import { Appearance, Circle, Desktop, Placeholder, Plus } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Select, selectSizes, selectVariants } from ".."
import {
  Employee,
  employeeNestedPaginatedSource,
  employeeNonPaginatedSource,
  getEmployeeById,
  MockItem,
  mockItems,
} from "./mocks"

const icons: Record<string, IconType> = {
  light: Circle,
  dark: Appearance,
  system: Desktop,
}

/**
 * The value the grouping stories start out with.
 *
 * Grouping sorts the first page by the group field, so a record with a low id
 * is not on it — the trigger has no label for the selection and falls back to
 * "…". `defaultItem` is how a consumer names a pre-selected value the first
 * page does not carry, so the stories that ship with one selected pass it.
 */
const GROUPED_PRESELECTED_VALUE = "42"

const groupedPreselectedItem = () => {
  const item = mockItems.find((i) => i.value === GROUPED_PRESELECTED_VALUE)
  return item
    ? {
        value: item.value,
        label: item.label,
        avatar: item.avatar,
        description: item.description,
      }
    : undefined
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
      test: "todo",
    },
    docs: {
      description: {
        component:
          "<p>Renders a select input field with a list of options to choose from.</p>" +
          "<p>The list is virtualized so it can handle a large number of items.</p>" +
          '<p>Use <code>variant="field"</code> for forms and labeled inputs. Use <code>variant="inline"</code> for detail rows: the selection reads as plain text — avatar and icon included — until the row sets <code>editing</code>, and only then does it become the dropdown. Inline selects are single-value and non-clearable; their required <code>label</code> provides the accessible name and becomes the visible empty-state fallback when no <code>placeholder</code> is provided. <code>editing</code> is controlled and the component never changes it: it reports <code>commit</code>, <code>escape</code> and <code>popupClose</code> through <code>onDismiss</code> and keeps the dropdown open until the owner says otherwise.</p>' +
          "<p>Options support three kinds of annotations: <code>description</code> for prose rendered as a second line, <code>metadata</code> for a short typed token rendered next to the label (e.g. a dial code), and <code>tag</code> for chips rendered at the end of the row.</p>",
      },
    },
  },
  argTypes: {
    variant: {
      control: "radio",
      options: selectVariants,
      description:
        "Field renders the standard form control. Inline renders a detail-row control that reads as text at rest and fills its container in both axes. It does not support clearing, multiple selection, list mode, preview/apply behavior, custom triggers, or field validation props.",
      table: {
        type: { summary: selectVariants.join(" | ") },
        defaultValue: { summary: "field" },
      },
    },
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
      options: selectSizes,
      if: { arg: "variant", neq: "inline" },
      description:
        "Size of the field select. Inline selects have no size of their own: they fill the box the row declares.",
      table: { defaultValue: { summary: "sm" } },
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    open: {
      control: "boolean",
      description:
        "Controls whether the select dropdown is open. The inline variant takes this from `editing` instead, and falls back to `open` only when `editing` is not passed.",
    },
    editing: {
      control: "boolean",
      if: { arg: "variant", eq: "inline" },
      description:
        "Inline only. Whether the dropdown is the presentation right now. Controlled: the component never changes it, it reports what the user did through `onDismiss` and keeps the dropdown open until the owner says otherwise.",
      table: { defaultValue: { summary: "false" } },
    },
    onDismiss: {
      if: { arg: "variant", eq: "inline" },
      description:
        "Inline only. Called with `commit` when an option is selected (the value still arrives through `onChange`), `escape` when Escape is pressed, and `popupClose` when the popup closes without a selection.",
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
        "  tag?: string | { type: 'dot'; text: string; color: NewColor } | { type: 'person'; name: string; src?: string } | { type: 'status'; text: string; variant: StatusVariant }\n" +
        "  icon?: IconType\n" +
        "  item?: unknown\n" +
        "  disabled?: boolean\n" +
        "}```",
    },
    onChange: {
      description:
        "Function to handle the change event. Returns the value of the selected option, and the item object if it exists",
    },
    withApplySelection: {
      description:
        "When true in multi-select mode, selection changes are staged until Apply is clicked. Clicking Apply confirms the selection through `onChange`, while clicking outside or Cancel discards the staged changes.",
    },
    applySelectionLabel: {
      description:
        'Custom label for the apply button in the apply-selection footer. Defaults to the translated "Apply selection". Only has an effect when `withApplySelection` is enabled.',
      control: "text",
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
        "  disabled?: boolean\n" +
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
        if (!selectionStatus) {
          return "No selection yet"
        }
        const { allSelected, selectedIds, itemsStatus } = selectionStatus

        if (allSelected === true) {
          return "All selected"
        }

        if (allSelected === "indeterminate") {
          const uncheckedIds = itemsStatus
            .filter((item: { checked: boolean }) => !item.checked)
            .map(
              (item: { item: { value?: string } }) => item.item?.value ?? "?"
            )
          return `All selected except: ${uncheckedIds.slice(0, 10).join(", ")}${uncheckedIds.length > 10 ? "..." : ""}`
        }

        if (selectedIds.length === 0) {
          return "No items selected"
        }
        return `Selected: ${selectedIds.slice(0, 10).join(", ")}${selectedIds.length > 10 ? "..." : ""}`
      }

      const getFiltersDisplay = () => {
        if (!selectionStatus?.filters) {
          return ""
        }
        const activeFilters = Object.entries(selectionStatus.filters)
          .filter(
            ([, value]) => value !== undefined && value !== null && value !== ""
          )
          .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
        if (activeFilters.length === 0) {
          return ""
        }
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
                {selectionStatus ? (
                  <p>Total: {selectionStatus.selectedCount}</p>
                ) : null}
                {getFiltersDisplay() ? (
                  <p>Filters: {getFiltersDisplay()}</p>
                ) : null}
              </>
            ) : (
              <>
                Selected: {JSON.stringify(truncatedValue, null, 2)}
                {args.multiple ? ` - Total: ${localValue?.length ?? 0}` : null}
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

export const WithMetadata: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`metadata` renders a short token next to the option label, in secondary color, without affecting the single-line row height — unlike `description`, which renders as a stacked second line. " +
          "It is a strictly typed union: each variant carries semantics the component can validate (e.g. `dialCode` warns in development unless the value matches `+` followed by 1–4 digits), so option data stays structured instead of being folded into the label string. " +
          "New variants (e.g. currency or locale codes) should be added to `F0SelectItemMetadata` as concrete use cases appear.",
      },
    },
  },
  args: {
    label: "Select a country",
    value: undefined,
    placeholder: undefined,
    options: [
      {
        value: "es",
        label: "Spain",
        metadata: { type: "dialCode", dialCode: "+34" },
      },
      {
        value: "de",
        label: "Germany",
        metadata: { type: "dialCode", dialCode: "+49" },
      },
      {
        value: "kr",
        label: "South Korea",
        metadata: { type: "dialCode", dialCode: "+82" },
      },
    ],
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

export const WithDotTags: Story = {
  args: {
    label: "Select a status",
    placeholder: "Select a status",
    onChange: fn(),
    options: [
      {
        value: "active",
        label: "Active",
        description: "Active description",
        tag: {
          type: "dot",
          text: "Active",
          color: "viridian",
        },
      },
      {
        value: "pending",
        label: "Pending",
        tag: {
          type: "dot",
          text: "Pending",
          color: "yellow",
        },
      },
      {
        value: "inactive",
        label: "Inactive",
        icon: Appearance,
        tag: "Disabled",
      },

      {
        value: "inactive",
        label: "Inactive",
        description: "Inactive description",
        icon: Desktop,
        tag: "Disabled",
      },
    ],
  },
}

export const WithPersonTags: Story = {
  args: {
    label: "Select a reviewer",
    placeholder: "Select a reviewer",
    onChange: fn(),
    options: [
      {
        value: "isabella",
        label: "Isabella Tangari",
        description: "Product Designer",
        tag: {
          type: "person",
          name: "Marta Serrano",
        },
      },
      {
        value: "saul",
        label: "Saul Dominguez",
        tag: {
          type: "person",
          name: "Eliseo Quintanilla",
        },
      },
      {
        value: "inactive",
        label: "Inactive",
        icon: Appearance,
        tag: "Disabled",
      },
    ],
  },
}

export const WithIconTags: Story = {
  args: {
    label: "Select a theme",
    placeholder: "Select a theme",
    onChange: fn(),
    options: [
      {
        value: "light",
        label: "Light",
        description: "Bright workspace theme",
        tag: {
          type: "icon",
          text: "Light",
          icon: Circle,
        },
      },
      {
        value: "dark",
        label: "Dark",
        description: "Low-light interface theme",
        tag: {
          type: "icon",
          text: "Dark",
          icon: Appearance,
        },
      },
      {
        value: "system",
        label: "System",
        tag: {
          type: "icon",
          text: "System",
          icon: Desktop,
        },
      },
    ],
  },
}

export const WithStatusTags: Story = {
  args: {
    label: "Status",
    placeholder: "Select a status",
    onChange: fn(),
    value: "pending",
    options: [
      {
        value: "draft",
        label: "Draft",
        tag: { type: "status", text: "Draft", variant: "neutral" },
      },
      {
        value: "pending",
        label: "Pending",
        tag: { type: "status", text: "Pending", variant: "warning" },
      },
      {
        value: "approved",
        label: "Approved",
        tag: { type: "status", text: "Approved", variant: "positive" },
      },
      {
        value: "rejected",
        label: "Rejected",
        tag: { type: "status", text: "Rejected", variant: "critical" },
      },
    ],
  },
}

export const WithPersonAvatar: Story = {
  args: {
    label: "Select a reviewer",
    placeholder: "Select a reviewer",
    onChange: fn(),
    value: "isabella",
    options: [
      {
        value: "isabella",
        label: "Isabella Tangari",
        description: "Product Designer",
        avatar: {
          type: "person",
          firstName: "Isabella",
          lastName: "Tangari",
        },
      },
      {
        value: "saul",
        label: "Saul Dominguez",
        avatar: {
          type: "person",
          firstName: "Saul",
          lastName: "Dominguez",
        },
      },
      {
        value: "marta",
        label: "Marta Serrano",
        avatar: {
          type: "person",
          firstName: "Marta",
          lastName: "Serrano",
        },
      },
    ],
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
    source: employeeNestedPaginatedSource,
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
    value: GROUPED_PRESELECTED_VALUE,
    // Without this the trigger reads "…": grouping sorts the first page by the
    // group field, so this record is not in it and there is no label to show.
    defaultItem: groupedPreselectedItem(),
    source: createDataSourceDefinition<MockItem>({
      grouping: {
        mandatory: true,
        collapsible: true,
        groupBy: {
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.role === groupId).length,
          },
          workplace: {
            name: "Workplace",
            label: (groupId) => groupId,
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

export const WithDataSourceGroupingDefaultOpen: Story = {
  args: {
    label: "Data Source Grouping (Default Open)",
    placeholder: "Select a value",
    showSearchBox: true,
    onChange: fn(),
    value: GROUPED_PRESELECTED_VALUE,
    defaultItem: groupedPreselectedItem(),
    source: createDataSourceDefinition<MockItem>({
      grouping: {
        mandatory: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.role === groupId).length,
          },
        },
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options) => {
          const { search, pagination } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const pageSize = pagination.perPage ?? 10
              const cursor = "cursor" in pagination ? pagination.cursor : null
              const nextCursor = cursor ? Number(cursor) + pageSize : pageSize
              const results = mockItems.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )
              resolve({
                type: "infinite-scroll" as const,
                cursor: String(nextCursor),
                perPage: pageSize,
                hasMore: nextCursor < results.length,
                records: results.slice(cursor ? Number(cursor) : 0, nextCursor),
                total: results.length,
              })
            }, 100)
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

/**
 * Grouping nested more than one level deep. The `grouping.groupBy` map is the
 * same one a single-level select uses — the extra levels are chosen in the
 * grouping STATE, where `thenBy` names further fields of that map in the order
 * they nest. Each level reuses its field's own `name` and `label`.
 *
 * The records themselves are listed under the deepest level only, and a
 * sub-group's counter is the number of records in THAT branch (five offices'
 * worth of Engineers is not what "Barcelona" under "Engineer" means).
 */
export const WithMultiLevelGrouping: Story = {
  args: {
    label: "Multi-level grouping",
    placeholder: "Select a value",
    showSearchBox: true,
    onChange: fn(),
    source: createDataSourceDefinition<MockItem>({
      grouping: {
        mandatory: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          legalEntity: {
            name: "Legal entity",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.legalEntity === groupId).length,
          },
          workplace: {
            name: "Workplace",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.workplace === groupId).length,
          },
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.role === groupId).length,
          },
        },
      },
      // Legal entity → workplace → role.
      defaultGrouping: {
        field: "legalEntity",
        thenBy: [{ field: "workplace" }, { field: "role" }],
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options) => {
          const { search, pagination } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const pageSize = pagination.perPage ?? 50
              const cursor = "cursor" in pagination ? pagination.cursor : null
              const nextCursor = cursor ? Number(cursor) + pageSize : pageSize
              const results = mockItems.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )
              resolve({
                type: "infinite-scroll" as const,
                cursor: String(nextCursor),
                perPage: pageSize,
                hasMore: nextCursor < results.length,
                records: results.slice(cursor ? Number(cursor) : 0, nextCursor),
                total: results.length,
              })
            }, 100)
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

/**
 * The hierarchy shape: pick a TASK, with its project and subproject as the two
 * levels of header above it.
 *
 * Three things this story exists to show, because each is easy to get wrong:
 *
 * 1. Group by ID, label by NAME. "Backend" is a subproject of both Apollo and
 *    Zephyr — grouping by name would fuse them into one list. The `groupBy`
 *    fields are dotted paths to the ids (`project.id`), and each level's
 *    `label` resolves the id it is handed. `label` may return a promise, so a
 *    name that has to be fetched is a valid answer here.
 * 2. The row's own label is short ("Ship the public API") because the headers
 *    above it supply the rest. The TRIGGER has no headers, so `getSelectedLabel`
 *    puts the path back on — leaf first, ancestors in parentheses — otherwise a
 *    chosen task reads as a bare verb once the dropdown closes. It builds that
 *    from the RECORD, so it still reads correctly for a selection whose group
 *    is not in the loaded page.
 * 3. `hideSelector` takes the grouping picker and its direction toggle away.
 *    The hierarchy is what this select IS, so there is nothing here for the
 *    user to choose — and the picker offers one field, which would drop the
 *    `thenBy` chain and flatten the tree.
 * 4. A real book of work is NOT uniform, and the list says so. A task with a
 *    project but no subproject is a row of its project, above the subproject
 *    headings; one with no project at all belongs to no group and leads the
 *    list, with no heading over it. Neither is filed under the value it is
 *    missing — a record with nothing at a level belongs to the level above.
 */
const PROJECTS = [
  { id: "p1", name: "Apollo" },
  { id: "p2", name: "Zephyr" },
]

const SUBPROJECTS = [
  { id: "s1", projectId: "p1", name: "Backend" },
  { id: "s2", projectId: "p1", name: "Web" },
  { id: "s3", projectId: "p2", name: "Backend" },
  { id: "s4", projectId: "p2", name: "Mobile" },
]

type ProjectTask = {
  id: string
  title: string
  assignee: string
  project: { id: string; name: string }
  subproject: { id: string; name: string }
}

const TASK_TITLES: Record<string, string[]> = {
  s1: ["Ship the public API", "Add a response cache", "Retire the v1 routes"],
  s2: ["Dark mode", "Empty states for the dashboard"],
  s3: ["Rate limits per tenant", "Backfill the audit log"],
  s4: ["Offline queue", "Push notification opt-in", "Biometric unlock"],
}

const ASSIGNEES = ["Ada", "Grace", "Hedy", "Katherine", "Radia"]

/** Nothing at this level — the record belongs to the level above. */
const NONE = { id: "", name: "" }

const projectTasks: ProjectTask[] = [
  // Belongs to no project at all: it leads the list, under no heading.
  {
    id: "loose-1",
    title: "Write the incident post-mortem",
    assignee: "Radia",
    project: NONE,
    subproject: NONE,
  },
  ...SUBPROJECTS.flatMap((subproject, index) => {
    const project = PROJECTS.find((p) => p.id === subproject.projectId)!
    return TASK_TITLES[subproject.id].map((title, taskIndex) => ({
      id: `${subproject.id}-${taskIndex}`,
      title,
      assignee: ASSIGNEES[(index + taskIndex) % ASSIGNEES.length],
      project: { id: project.id, name: project.name },
      subproject: { id: subproject.id, name: subproject.name },
    }))
  }),
  // In a project but in none of its subprojects: a row of Apollo itself,
  // sitting above the Backend and Web headings.
  {
    id: "p1-loose",
    title: "Plan the Apollo roadmap",
    assignee: "Ada",
    project: { id: "p1", name: "Apollo" },
    subproject: NONE,
  },
]

const nameById = (entities: { id: string; name: string }[], groupId: unknown) =>
  entities.find((entity) => entity.id === groupId)?.name ?? `${groupId}`

export const WithProjectHierarchyGrouping: Story = {
  args: {
    label: "Task",
    placeholder: "Pick a task",
    showSearchBox: true,
    onChange: fn(),
    source: createDataSourceDefinition<ProjectTask>({
      grouping: {
        mandatory: true,
        // The hierarchy is the point of this select, not a view the user picks.
        // The selector could only take it apart: choosing a field there replaces
        // the whole grouping, `thenBy` included, and there is no way back to
        // project > subproject from it.
        hideSelector: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          "project.id": {
            name: "Project",
            label: (groupId) => nameById(PROJECTS, groupId),
            itemCount: (groupId) =>
              projectTasks.filter((task) => task.project.id === groupId).length,
          },
          "subproject.id": {
            name: "Subproject",
            label: (groupId) => nameById(SUBPROJECTS, groupId),
          },
        },
      },
      // Project → subproject, with the tasks themselves as the rows.
      defaultGrouping: {
        field: "project.id",
        thenBy: [{ field: "subproject.id" }],
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: ({ search, pagination }) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const pageSize = pagination.perPage ?? 50
              const cursor = "cursor" in pagination ? pagination.cursor : null
              const nextCursor = cursor ? Number(cursor) + pageSize : pageSize
              const results = projectTasks.filter(
                (task) =>
                  !search ||
                  task.title.toLowerCase().includes(search.toLowerCase())
              )
              resolve({
                type: "infinite-scroll" as const,
                cursor: String(nextCursor),
                perPage: pageSize,
                hasMore: nextCursor < results.length,
                records: results.slice(cursor ? Number(cursor) : 0, nextCursor),
                total: results.length,
              })
            }, 100)
          }),
      },
    }),
    getSelectedLabel: ({ item }: { item?: ProjectTask }) =>
      item
        ? `${item.title} (${item.subproject.name}, ${item.project.name})`
        : "",
    mapOptions: (task: ProjectTask) => ({
      value: task.id,
      label: task.title,
      description: task.assignee,
      item: task,
    }),
  },
}

/**
 * A grouping and a sorting the PRODUCT decides, not the user.
 *
 * `hideSelector` on the grouping definition takes the picker away and leaves
 * the grouping in force — pair it with `mandatory: true` and a
 * `defaultGrouping`, or the state can still arrive as "no grouping" with no
 * control left to leave it. Two `groupBy` fields are declared here precisely to
 * show the picker is hidden because it was asked to be, not because there was
 * nothing to choose between.
 *
 * The sorting is fixed by `defaultSortings` alone: F0Select has never rendered
 * a sorting control, so a sorting set on the source is already one the user
 * cannot reach. Grouping appends its own field to what the adapter is asked to
 * sort by, so a group's records arrive together.
 */
export const WithFixedGroupingAndSorting: Story = {
  args: {
    label: "Employee",
    placeholder: "Select an employee",
    showSearchBox: true,
    onChange: fn(),
    source: createDataSourceDefinition<MockItem>({
      grouping: {
        mandatory: true,
        hideSelector: true,
        collapsible: true,
        defaultOpenGroups: true,
        groupBy: {
          workplace: {
            name: "Workplace",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.workplace === groupId).length,
          },
          role: {
            name: "Role",
            label: (groupId) => groupId,
          },
        },
      },
      defaultGrouping: { field: "workplace" },
      sortings: { label: { label: "Name" } },
      defaultSortings: { field: "label", order: "asc" },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: ({ search, pagination, sortings }) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const pageSize = pagination.perPage ?? 50
              const cursor = "cursor" in pagination ? pagination.cursor : null
              const nextCursor = cursor ? Number(cursor) + pageSize : pageSize
              const results = [...mockItems]
                .filter(
                  (item) =>
                    !search ||
                    item.label.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  for (const { field, order } of sortings ?? []) {
                    const key = field as keyof MockItem
                    const comparison = String(a[key]).localeCompare(
                      String(b[key])
                    )
                    if (comparison !== 0) {
                      return order === "desc" ? -comparison : comparison
                    }
                  }
                  return 0
                })
              resolve({
                type: "infinite-scroll" as const,
                cursor: String(nextCursor),
                perPage: pageSize,
                hasMore: nextCursor < results.length,
                records: results.slice(cursor ? Number(cursor) : 0, nextCursor),
                total: results.length,
              })
            }, 100)
          }),
      },
    }),
    mapOptions: (item: MockItem) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
    }),
  },
}
export const WithManyCollapsibleGroups: Story = {
  args: {
    label: "Many Collapsible Groups",
    placeholder: "Select a value",
    showSearchBox: true,
    onChange: fn(),
    source: createDataSourceDefinition<MockItem>({
      grouping: {
        mandatory: true,
        collapsible: true,
        defaultOpenGroups: false,
        groupBy: {
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockItems.filter((item) => item.role === groupId).length,
          },
        },
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options) => {
          const { search, pagination } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const pageSize = pagination.perPage ?? 50
              const cursor = "cursor" in pagination ? pagination.cursor : null
              const nextCursor = cursor ? Number(cursor) + pageSize : pageSize
              const results = mockItems.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )
              resolve({
                type: "infinite-scroll" as const,
                cursor: String(nextCursor),
                perPage: pageSize,
                hasMore: nextCursor < results.length,
                records: results.slice(cursor ? Number(cursor) : 0, nextCursor),
                total: results.length,
              })
            }, 100)
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
    source: employeeNestedPaginatedSource,
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
 * Multiple selection with paginated data and a selection preview panel on the right.
 * The preview shows selected items with avatars and allows inline deselection.
 * Filters use inline (dual-pane) mode when preview is enabled.
 */
export const MultiplePaginatedWithPreview: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
    showPreview: true,
    value: ["3", "42", "500", "1200"],
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
    source: employeeNestedPaginatedSource,
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

export const MultiplePaginatedWithApply: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
    value: ["3", "42", "500", "1200"],
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
    source: employeeNestedPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
    }),
    onChange: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
    }),
    withApplySelection: true,
  },
}

export const MultipleWithApply: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
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
    withApplySelection: true,
  },
}

/**
 * Apply-selection footer with a custom apply-button label. Consumers pass an
 * already-translated string; the default is "Apply selection". Clicking Cancel
 * closes the dropdown and discards the staged selection.
 */
export const MultipleWithApplyCustomLabel: Story = {
  args: {
    label: "Select Team Members",
    placeholder: "Search employees...",
    multiple: true,
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
    withApplySelection: true,
    applySelectionLabel: "Add to schedule",
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
    showPreview: true,
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
    source: employeeNestedPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
    }),
    onSelectItems: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
    }),
    hideLabel: true,
  },
  render: (args) => {
    return (
      <div className="flex h-[400px] w-[600px] flex-row">
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
 * Multi-select with preserved selections (default behavior).
 *
 * Selections persist across search and filter changes — the normal
 * selector workflow. Try this:
 * 1. Select a few employees
 * 2. Type in the search box to filter
 * 3. Select another employee from the filtered results
 * 4. Clear the search — all selections are still there
 * 5. Use a filter (e.g. department) — selections still preserved
 */
export const MultiplePreserveSelections: Story = {
  args: {
    label: "Preserve Selections (default)",
    placeholder: "Search employees...",
    multiple: true,
    clearable: true,
    showSearchBox: true,
    source: employeeNestedPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
    onSelectItems: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
    }),
  },
}

/**
 * Multi-select that clears selections on dataset changes.
 *
 * When `preserveSelectionOnDatasetChange` is false, selections are
 * cleared whenever the user searches, filters, or sorts. Try the
 * same workflow as above — selections will be lost on each change.
 */
export const MultipleClearSelectionsOnDatasetChange: Story = {
  args: {
    label: "Clear Selections on change",
    placeholder: "Search employees...",
    multiple: true,
    clearable: true,
    showSearchBox: true,
    preserveSelectionOnDatasetChange: false,
    source: employeeNestedPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
    onSelectItems: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
    }),
  },
}

/**
 * Multi-select with "Select all" + filters, `preserveSelectionOnDatasetChange: true`.
 *
 * Use this to verify the select-all behavior:
 * 1. Apply a Department filter, then click "Select all" — it selects the
 *    currently filtered set.
 * 2. Change or clear the filter — the select-all is dropped (it was scoped to
 *    the previous query); the count resets to 0.
 * 3. By contrast, MANUALLY ticking individual rows and then changing the filter
 *    keeps those rows selected — `preserveSelectionOnDatasetChange` governs
 *    manual selection only.
 */
export const MultipleSelectAllWithFilters: Story = {
  args: {
    label: "Select Team Members (preserve + select all)",
    placeholder: "Search employees...",
    multiple: true,
    clearable: true,
    showSearchBox: true,
    preserveSelectionOnDatasetChange: true,
    source: employeeNestedPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
    onSelectItems: fn((selectionStatus) => {
      console.log("selectionStatus", selectionStatus)
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
    source: employeeNestedPaginatedSource,
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

export const CustomTriggerFillsContainerHeight: Story = {
  // A regression guard, not documentation
  tags: ["!dev"],
  args: {
    label: "Choose a color",
    onChange: fn(),
    value: "red",
    options: [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
    ],
  },
  render: ({ value, options, onChange, ...args }) => (
    <div className="flex h-10 items-center" data-testid="fixed-height-field">
      <div className="h-full shrink-0">
        <F0Select
          label="Choose a color"
          value={value}
          options={options}
          onChange={onChange}
          {...args}
        >
          <span className="flex h-full items-center px-2">Red</span>
        </F0Select>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    /*
     * A custom trigger sizes its content against the consumer's container, so
     * every wrapper F0Select renders in between has to pass that height
     * through — a wrapper that swallows it still renders a valid DOM, so this
     * has to be real pixels. 1px tolerance for subpixel display scaling.
     */
    const trigger = canvas.getByRole("combobox")
    const fieldHeight = canvas
      .getByTestId("fixed-height-field")
      .getBoundingClientRect().height
    // Without layout (0 vs 0) the comparison below would pass vacuously
    await expect(fieldHeight).toBeGreaterThan(0)
    const drift = Math.abs(trigger.getBoundingClientRect().height - fieldHeight)
    await expect(drift).toBeLessThanOrEqual(1)
  },
}

export const WithOnCreate: Story = {
  args: {
    label: "Select Employee",
    placeholder: "Search employees...",
    showSearchBox: true,
    onChange: fn(),
    source: employeeNonPaginatedSource,
    mapOptions: (item: Employee) => ({
      value: item.value,
      label: item.label,
      avatar: item.avatar,
      description: `${item.jobTitle} · ${item.departmentName}`,
    }),
    onCreate: (_value: string) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 500)
      })
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({
    a11y: {
      test: "error",
    },
  }),
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
      { name: "Default", props: { ...base } },
      { name: "Disabled", props: { ...base, disabled: true } },
      { name: "Required", props: { ...base, required: true } },
      { name: "Hidden label", props: { ...base, hideLabel: true } },
      { name: "Legacy error", props: { ...base, error: "Error message" } },
      {
        name: "Error status",
        props: {
          ...base,
          status: { type: "error" as const, message: "Error message" },
        },
      },
      {
        name: "Warning status",
        props: {
          ...base,
          status: { type: "warning" as const, message: "Warning message" },
        },
      },
      {
        name: "Info status",
        props: {
          ...base,
          status: { type: "info" as const, message: "Info message" },
        },
      },
      { name: "Hint", props: { ...base, hint: "Hint message" } },
    ]
    return (
      <div className="flex flex-col gap-4">
        {selectSizes.map((size) => (
          <section key={size}>
            <h2 className="mb-3 text-lg font-semibold">Size: {size}</h2>
            <div className="flex flex-col gap-4">
              <F0Select
                size={size}
                label={`Empty select, ${size}`}
                onChange={fn()}
                options={[]}
              />
              {snapshotVariants.map((variant) => (
                <F0Select
                  key={`${size}-${variant.name}`}
                  size={size}
                  {...variant.props}
                  label={`${variant.name} select, ${size}`}
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
