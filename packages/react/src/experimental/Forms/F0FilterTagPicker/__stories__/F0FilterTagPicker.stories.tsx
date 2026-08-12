import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { createDataSourceDefinition } from "@/hooks/datasource"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type {
  F0FilterTagPickerFiltersDefinition,
  F0FilterTagPickerMode,
  F0FilterTagPickerProps,
  F0FilterTagPickerValue,
} from "../types"

import {
  F0FilterTagPicker,
  f0FilterTagPickerModes,
  filterTagPickerValueToFiltersState,
} from "../index"

const filters = {
  location: {
    type: "in",
    label: "Location",
    options: {
      options: [
        { value: "barcelona", label: "Barcelona" },
        { value: "madrid", label: "Madrid" },
        { value: "london", label: "London" },
        { value: "lisbon", label: "Lisbon" },
      ],
    },
  },
  team: {
    type: "in",
    label: "Teams",
    options: {
      options: async () => [
        { value: "people", label: "People" },
        { value: "platform", label: "Platform" },
        { value: "payroll", label: "Payroll" },
      ],
    },
  },
  role: {
    type: "in",
    label: "Role",
    options: {
      options: [
        { value: "software-engineer", label: "Software engineer" },
        { value: "product-designer", label: "Product designer" },
        { value: "support-agent", label: "Customer support agent" },
        { value: "people-partner", label: "People partner" },
      ],
    },
  },
  workplace: {
    type: "in",
    label: "Workplace",
    options: {
      options: [
        { value: "office", label: "Office based" },
        { value: "hybrid", label: "Hybrid" },
        { value: "remote", label: "Remote" },
      ],
    },
  },
} satisfies F0FilterTagPickerFiltersDefinition

type Filters = typeof filters
type StoryProps = F0FilterTagPickerProps<Filters>

const mixedValue = [
  { type: "text", value: "People in " },
  { type: "filter", filterKey: "location", value: "madrid" },
  { type: "text", value: " or " },
  { type: "filter", filterKey: "location", value: "barcelona" },
  { type: "text", value: " who work as " },
  { type: "filter", filterKey: "role", value: "software-engineer" },
  { type: "text", value: " in the " },
  { type: "filter", filterKey: "team", value: "platform" },
  { type: "text", value: " team with a " },
  { type: "filter", filterKey: "workplace", value: "hybrid" },
  { type: "text", value: " setup." },
] satisfies F0FilterTagPickerValue<Filters>

function PickerDemo<Definition extends F0FilterTagPickerFiltersDefinition>({
  filters: pickerFilters,
  initialValue,
  label,
  mode = "mixed",
  disabled,
  categoryColors,
  placeholder,
  dataTestId,
  onChange,
}: {
  filters: Definition
  initialValue: F0FilterTagPickerValue<Definition>
  label: string
  mode?: F0FilterTagPickerMode
  disabled?: boolean
  categoryColors?: F0FilterTagPickerProps<Definition>["categoryColors"]
  placeholder?: string
  dataTestId?: string
  onChange?: F0FilterTagPickerProps<Definition>["onChange"]
}) {
  const [currentValue, setCurrentValue] =
    useState<F0FilterTagPickerValue<Definition>>(initialValue)

  return (
    <div className="flex w-full max-w-3xl flex-col gap-4">
      <F0FilterTagPicker
        filters={pickerFilters}
        value={currentValue}
        onChange={(nextValue) => {
          setCurrentValue(nextValue)
          onChange?.(nextValue)
        }}
        label={label}
        mode={mode}
        disabled={disabled}
        categoryColors={categoryColors}
        placeholder={placeholder}
        dataTestId={dataTestId}
      />
      <div className="grid gap-3 @xl:grid-cols-2">
        <div className="rounded-lg bg-f1-background-secondary p-3">
          <div className="mb-1 text-xs font-medium text-f1-foreground-secondary">
            Ordered tokens
          </div>
          <pre className="m-0 whitespace-pre-wrap text-xs">
            {JSON.stringify(currentValue, null, 2)}
          </pre>
        </div>
        <div className="rounded-lg bg-f1-background-secondary p-3">
          <div className="mb-1 text-xs font-medium text-f1-foreground-secondary">
            Derived FiltersState
          </div>
          <pre className="m-0 whitespace-pre-wrap text-xs">
            {JSON.stringify(
              filterTagPickerValueToFiltersState(currentValue),
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: "F0FilterTagPicker",
  component: F0FilterTagPicker,
  tags: ["experimental", "!autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      story: { inline: false, height: "640px" },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[560px] w-[min(780px,calc(100vw-48px))] items-start bg-f1-background pt-32">
        <Story />
      </div>
    ),
  ],
  args: {
    filters,
    value: [],
    onChange: fn(),
    label: "Who should belong to this team?",
    mode: "mixed",
  },
  argTypes: {
    filters: {
      control: false,
      description: 'Filter definitions restricted to type: "in".',
    },
    value: {
      control: "object",
      description: "Controlled ordered text and filter tokens.",
    },
    onChange: {
      control: false,
      description: "Called immediately after every document change.",
    },
    mode: {
      control: "inline-radio",
      options: f0FilterTagPickerModes,
      description:
        "Persists free text in mixed mode or uses it only for searching in tags mode.",
    },
    categoryColors: {
      control: "object",
      description: "Optional stable color overrides by filter key.",
    },
    placeholder: {
      control: "text",
      description: "Optional free-text and search prompt.",
    },
    dataTestId: {
      control: "text",
      description: "Optional test identifier for the component root.",
    },
  },
  render: (args) => (
    <PickerDemo
      filters={args.filters}
      initialValue={args.value}
      label={args.label}
      mode={args.mode}
      disabled={args.disabled}
      categoryColors={args.categoryColors}
      placeholder={args.placeholder}
      dataTestId={args.dataTestId}
      onChange={args.onChange}
    />
  ),
} satisfies Meta<StoryProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MixedTextAndFilters: Story = {
  tags: ["no-sidebar"],
  args: { value: mixedValue },
}

const tagsOnlyValue = mixedValue.filter(
  (token) => token.type === "filter"
) satisfies F0FilterTagPickerValue<Filters>

export const Modes: Story = {
  tags: ["no-sidebar"],
  args: {},
  render: () => (
    <div className="flex w-full flex-col gap-8">
      <PickerDemo
        filters={filters}
        initialValue={mixedValue}
        label="Mixed text and tags"
        mode="mixed"
      />
      <PickerDemo
        filters={filters}
        initialValue={tagsOnlyValue}
        label="Tags only"
        mode="tags"
      />
    </div>
  ),
}

type Employee = { id: number; name: string }
const people = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Margaret Hamilton" },
]
const remoteFilters = {
  person: {
    type: "in",
    label: "Person",
    options: {
      source: createDataSourceDefinition<Employee>({
        dataAdapter: {
          fetchData: async ({ search }) => ({
            records: people.filter((person) =>
              person.name.toLowerCase().includes(search?.toLowerCase() ?? "")
            ),
          }),
        },
      }),
      mapOptions: (person: Employee) => ({
        value: person.id,
        label: person.name,
      }),
      getLabel: (value: unknown) =>
        people.find((person) => person.id === value)?.name ?? String(value),
    },
  },
} satisfies F0FilterTagPickerFiltersDefinition

export const RemoteSource: Story = {
  tags: ["no-sidebar"],
  args: {},
  render: () => (
    <PickerDemo
      filters={remoteFilters}
      initialValue={[
        { type: "text", value: "Invite " },
        { type: "filter", filterKey: "person", value: 1 },
        { type: "text", value: " and " },
      ]}
      label="Add specific people"
    />
  ),
}

const failingFilters = {
  team: {
    type: "in",
    label: "Teams",
    options: {
      options: async () => {
        throw new Error("Could not load teams")
      },
    },
  },
} satisfies F0FilterTagPickerFiltersDefinition

export const ErrorAndRetry: Story = {
  tags: ["no-sidebar"],
  args: {},
  render: () => (
    <PickerDemo
      filters={failingFilters}
      initialValue={[]}
      label="Employee filters"
    />
  ),
}

const loadingFilters = {
  team: {
    type: "in",
    label: "Teams",
    options: {
      options: () =>
        new Promise<Array<{ value: string; label: string }>>(() => {}),
    },
  },
} satisfies F0FilterTagPickerFiltersDefinition

export const Loading: Story = {
  tags: ["no-sidebar"],
  args: {},
  render: () => (
    <PickerDemo
      filters={loadingFilters}
      initialValue={[]}
      label="Employee filters"
    />
  ),
}

const hierarchicalFilters = {
  office: {
    type: "in",
    label: "Office",
    options: {
      options: [
        {
          value: "barcelona-hq",
          label: "Barcelona HQ",
          children: {
            filterKey: "space",
            options: [
              { value: "floor-1", label: "Floor 1" },
              { value: "floor-2", label: "Floor 2" },
            ],
          },
        },
      ],
    },
  },
  space: {
    type: "in",
    label: "Space",
    options: { options: [] },
  },
} satisfies F0FilterTagPickerFiltersDefinition

export const HierarchicalOptions: Story = {
  tags: ["no-sidebar"],
  args: {},
  render: () => (
    <PickerDemo
      filters={hierarchicalFilters}
      initialValue={[]}
      label="Choose an office or space"
    />
  ),
}

export const Disabled: Story = {
  tags: ["no-sidebar"],
  args: {
    value: mixedValue,
    disabled: true,
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  args: {},
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[740px] flex-col gap-8">
      <PickerDemo
        filters={filters}
        initialValue={mixedValue}
        label="Mixed employee intent"
      />
      <PickerDemo
        filters={filters}
        initialValue={mixedValue}
        label="Custom category colors"
        categoryColors={{
          team: "viridian",
          workplace: "yellow",
          location: "malibu",
          role: "purple",
        }}
      />
      <PickerDemo
        filters={filters}
        initialValue={tagsOnlyValue}
        label="Tags only"
        mode="tags"
      />
      <PickerDemo
        filters={filters}
        initialValue={mixedValue}
        label="Disabled employee intent"
        disabled
      />
    </div>
  ),
}
