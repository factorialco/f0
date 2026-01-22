import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "../../OneFilterPicker/types"

import { filterDefinition } from "../../OneFilterPicker/__stories__/mockData"
import { F0FilterPickerContent } from "../F0FilterPickerContent"

const simpleFilterDefinition = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "marketing", label: "Marketing" },
        { value: "sales", label: "Sales" },
        { value: "hr", label: "Human Resources" },
        { value: "finance", label: "Finance" },
      ],
    },
  },
  location: {
    type: "in",
    label: "Location",
    options: {
      options: [
        { value: "london", label: "London" },
        { value: "new_york", label: "New York" },
        { value: "tokyo", label: "Tokyo" },
        { value: "remote", label: "Remote" },
      ],
    },
  },
  search: {
    type: "search",
    label: "Search",
  },
} as const satisfies FiltersDefinition

const meta = {
  title: "FilterPickerContent",
  component: F0FilterPickerContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof F0FilterPickerContent>

export default meta
type Story = StoryObj<typeof F0FilterPickerContent>

/**
 * Default F0FilterPickerContent with basic filters.
 */
const DefaultComponent = () => {
  const [filters, setFilters] = useState<
    FiltersState<typeof simpleFilterDefinition>
  >({})

  return (
    <div className="w-[600px]">
      <F0FilterPickerContent
        filters={simpleFilterDefinition}
        value={filters}
        onChange={setFilters}
      />
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <DefaultComponent />,
}

/**
 * F0FilterPickerContent with pre-selected values.
 */
const WithPreselectedValuesComponent = () => {
  const [filters, setFilters] = useState<
    FiltersState<typeof simpleFilterDefinition>
  >({
    department: ["engineering", "marketing"],
    location: ["remote"],
  })

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        The filter with values is automatically selected.
      </p>
      <F0FilterPickerContent
        filters={simpleFilterDefinition}
        value={filters}
        onChange={setFilters}
      />
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const WithPreselectedValues: Story = {
  render: () => <WithPreselectedValuesComponent />,
}

/**
 * F0FilterPickerContent without apply button.
 * When showApplyButton is false, onChange is called immediately on every selection.
 */
const WithoutApplyButtonComponent = () => {
  const [filters, setFilters] = useState<
    FiltersState<typeof simpleFilterDefinition>
  >({})

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        Without the apply button, onChange is called immediately on every
        selection.
      </p>
      <F0FilterPickerContent
        filters={simpleFilterDefinition}
        value={filters}
        onChange={setFilters}
        showApplyButton={false}
      />
      <div className="mt-4 flex justify-end">
        <button
          className="rounded-lg bg-f1-background-secondary px-4 py-2 text-sm"
          onClick={() => setFilters({})}
        >
          Clear All
        </button>
      </div>
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters (updates in real-time):
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const WithoutApplyButton: Story = {
  render: () => <WithoutApplyButtonComponent />,
}

/**
 * F0FilterPickerContent with custom dimensions.
 */
const CustomDimensionsComponent = () => {
  const [filters, setFilters] = useState<
    FiltersState<typeof simpleFilterDefinition>
  >({})

  return (
    <div>
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        Custom width (800px) and height (500px).
      </p>
      <F0FilterPickerContent
        filters={simpleFilterDefinition}
        value={filters}
        onChange={setFilters}
        width={800}
        height={500}
      />
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const CustomDimensions: Story = {
  render: () => <CustomDimensionsComponent />,
}

/**
 * F0FilterPickerContent with custom apply button label.
 */
const CustomApplyLabelComponent = () => {
  const [filters, setFilters] = useState<
    FiltersState<typeof simpleFilterDefinition>
  >({})

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        Custom apply button label.
      </p>
      <F0FilterPickerContent
        filters={simpleFilterDefinition}
        value={filters}
        onChange={setFilters}
        applyButtonLabel="Save Selection"
      />
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const CustomApplyLabel: Story = {
  render: () => <CustomApplyLabelComponent />,
}

/**
 * Example of using F0FilterPickerContent inside a modal-like container.
 * This demonstrates the primary use case for the component.
 */
const InModalComponent = () => {
  const [filters, setFilters] = useState<
    FiltersState<typeof simpleFilterDefinition>
  >({})

  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center bg-f1-background-tertiary p-8">
      <div className="w-[650px] rounded-2xl bg-f1-background p-6 shadow-xl">
        <h2 className="mb-2 text-lg font-semibold">Define Employee Audience</h2>
        <p className="mb-4 text-sm text-f1-foreground-secondary">
          Select the criteria to define which employees will be included.
        </p>
        <F0FilterPickerContent
          filters={simpleFilterDefinition}
          value={filters}
          onChange={setFilters}
          applyButtonLabel="Save Audience"
        />
      </div>
      <div className="mt-4 w-full max-w-[650px]">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const InModal: Story = {
  render: () => <InModalComponent />,
}

// ============================================================================
// WITH COMPLEX FILTER DEFINITION
// ============================================================================

/**
 * F0FilterPickerContent with a complex filter definition including
 * multiple filter types (in, search, date, number).
 */
const ComplexFiltersComponent = () => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {}
  )

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        This example shows F0FilterPickerContent with a complex filter
        definition including multiple filter types.
      </p>
      <F0FilterPickerContent
        filters={filterDefinition}
        value={filters}
        onChange={setFilters}
      />
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const ComplexFilters: Story = {
  render: () => <ComplexFiltersComponent />,
}

/**
 * F0FilterPickerContent with complex filters and pre-selected values.
 */
const ComplexFiltersWithValuesComponent = () => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {
      department: ["engineering", "marketing"],
      name: "John",
    }
  )

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        F0FilterPickerContent with pre-selected values. Notice how the filter
        with values is automatically selected.
      </p>
      <F0FilterPickerContent
        filters={filterDefinition}
        value={filters}
        onChange={setFilters}
      />
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters:
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const ComplexFiltersWithValues: Story = {
  render: () => <ComplexFiltersWithValuesComponent />,
}

/**
 * F0FilterPickerContent with complex filters and without apply button.
 * onChange is called immediately on every selection.
 */
const ComplexFiltersWithoutApplyButtonComponent = () => {
  const [filters, setFilters] = useState<FiltersState<typeof filterDefinition>>(
    {}
  )

  const handleChange = (value: FiltersState<typeof filterDefinition>) => {
    setFilters(value)
    console.log("Filters changed:", value)
  }

  return (
    <div className="w-[600px]">
      <p className="mb-4 text-sm text-f1-foreground-secondary">
        Without the apply button,{" "}
        <code className="text-f1-foreground">onChange</code> is called
        immediately on every selection. This is useful when you want real-time
        updates without an explicit apply action.
      </p>
      <F0FilterPickerContent
        filters={filterDefinition}
        value={filters}
        onChange={handleChange}
        showApplyButton={false}
      />
      <div className="mt-4 flex justify-end">
        <button
          className="rounded-lg bg-f1-background-secondary px-4 py-2 text-sm"
          onClick={() => setFilters({})}
        >
          Clear All
        </button>
      </div>
      <div className="mt-4">
        <p className="mb-1 text-xs font-medium text-f1-foreground-secondary">
          Current Filters (updates in real-time):
        </p>
        <pre className="font-mono rounded bg-f1-background-secondary p-2 text-xs">
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const ComplexFiltersWithoutApplyButton: Story = {
  render: () => <ComplexFiltersWithoutApplyButtonComponent />,
}
