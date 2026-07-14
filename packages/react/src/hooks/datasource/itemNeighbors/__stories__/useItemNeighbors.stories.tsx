import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ChevronLeft, ChevronRight } from "@/icons/app"

import {
  DataAdapter,
  ItemNeighborsFetchOptions,
  ItemNeighborsResponse,
} from "../../types/fetch.typings"
import { useItemNeighbors } from "../useItemNeighbors"

const meta = {
  title: "Datasource/useItemNeighbors",
  parameters: {
    layout: "padded",
    a11y: { skipCi: true },
    docs: {
      description: {
        component:
          "Id-relative neighbour resolution through the optional `fetchItemNeighbors` capability on `DataAdapter`. Built for detail pages opened via a **direct link**: the item may live deep in the collection, on a page that was never loaded — instead of walking pages, the adapter asks the backend for the immediate neighbours (and position/total for the counter) under the current filters.",
      },
    },
  },
  tags: ["experimental", "!autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type Employee = {
  id: number
  name: string
  department: string
}

const DEPARTMENTS = ["Engineering", "Design", "Product", "Marketing"]

const EMPLOYEES: Employee[] = Array.from({ length: 80 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: DEPARTMENTS[i % DEPARTMENTS.length],
}))

const filters = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS.map((d) => ({ value: d, label: d })),
    },
  },
}

type Filters = typeof filters

const filteredEmployees = (departments: string[] | undefined) =>
  EMPLOYEES.filter(
    (employee) =>
      !departments?.length || departments.includes(employee.department)
  )

// The app-side implementation of the capability: in a real app this is the
// GraphQL `afterId`/`beforeId` + `first: 1` + `totalCount` cursor query.
const fetchItemNeighbors = async (
  options: ItemNeighborsFetchOptions<Filters>
): Promise<ItemNeighborsResponse<Employee>> => {
  await new Promise((resolve) => setTimeout(resolve, 400))
  const results = filteredEmployees(options.filters.department)
  const index = results.findIndex(
    (employee) => employee.id === Number(options.id)
  )
  if (index === -1) {
    return { previous: null, next: null, total: results.length }
  }
  return {
    previous: index > 0 ? results[index - 1] : null,
    next: index < results.length - 1 ? results[index + 1] : null,
    position: index + 1,
    total: results.length,
  }
}

const makeAdapter = (
  withCapability: boolean
): DataAdapter<Employee, Filters> => ({
  paginationType: "pages",
  perPage: 10,
  fetchData: (options) => {
    const results = filteredEmployees(options.filters.department)
    const currentPage =
      "currentPage" in options.pagination
        ? (options.pagination.currentPage ?? 1)
        : 1
    return {
      type: "pages",
      records: results.slice((currentPage - 1) * 10, currentPage * 10),
      total: results.length,
      perPage: 10,
      currentPage,
      pagesCount: Math.ceil(results.length / 10),
    }
  },
  fetchItemNeighbors: withCapability ? fetchItemNeighbors : undefined,
})

const DetailPanel = ({ withCapability }: { withCapability: boolean }) => {
  // Simulates a direct link to an employee deep in the collection (page 7)
  const [activeId, setActiveId] = useState(63)
  const [engineeringOnly, setEngineeringOnly] = useState(false)

  const [adapter] = useState(() => ({
    enabled: makeAdapter(true),
    disabled: makeAdapter(false),
  }))

  const { isSupported, neighbors, isResolving } = useItemNeighbors({
    dataAdapter: withCapability ? adapter.enabled : adapter.disabled,
    id: activeId,
    filters: engineeringOnly ? { department: ["Engineering"] } : {},
    sortings: [],
  })

  const activeEmployee = EMPLOYEES.find((e) => e.id === activeId)

  return (
    <div className="flex max-w-xl flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-f1-foreground">
            {activeEmployee?.name}
          </div>
          <div className="text-sm text-f1-foreground-secondary">
            {activeEmployee?.department}
            {neighbors?.position !== undefined &&
              ` — ${neighbors.position} of ${neighbors.total}`}
          </div>
        </div>
        <div className="flex gap-2">
          <F0Button
            variant="outline"
            size="sm"
            icon={ChevronLeft}
            hideLabel
            label="Previous"
            disabled={!neighbors?.previous || isResolving}
            onClick={() => {
              if (neighbors?.previous) setActiveId(neighbors.previous.id)
            }}
          />
          <F0Button
            variant="outline"
            size="sm"
            icon={ChevronRight}
            hideLabel
            label="Next"
            loading={isResolving}
            disabled={!neighbors?.next || isResolving}
            onClick={() => {
              if (neighbors?.next) setActiveId(neighbors.next.id)
            }}
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-f1-foreground-secondary">
        <input
          type="checkbox"
          checked={engineeringOnly}
          onChange={(event) => setEngineeringOnly(event.target.checked)}
        />
        Engineering only (neighbours and counter follow the filter)
      </label>
      <div className="text-sm text-f1-foreground-secondary">
        {isSupported
          ? "The list was never mounted: neighbours are resolved by id through fetchItemNeighbors. Revisited ids resolve instantly from cache."
          : "This adapter does not implement fetchItemNeighbors — controls stay disabled (the snapshot fallback)."}
      </div>
    </div>
  )
}

export const DirectLink: Story = {
  render: () => <DetailPanel withCapability />,
}

export const CapabilityAbsent: Story = {
  render: () => <DetailPanel withCapability={false} />,
}
