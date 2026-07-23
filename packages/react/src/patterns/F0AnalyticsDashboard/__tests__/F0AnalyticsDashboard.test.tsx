import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import {
  screen,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { F0AnalyticsDashboard } from "../F0AnalyticsDashboard"
import type { DashboardMetricItem } from "../types"

const filters = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "sales", label: "Sales" },
      ],
    },
  },
} as const satisfies FiltersDefinition

type DashboardFilters = FiltersState<typeof filters>

function getVisibleByText(text: string): HTMLElement {
  const matches = screen.getAllByText(text)
  return (
    matches.find((element) => !element.closest('[aria-hidden="true"]')) ??
    matches[0]
  )
}

function metricItem(
  fetchData: DashboardMetricItem<typeof filters>["fetchData"]
): DashboardMetricItem<typeof filters> {
  return {
    id: "headcount",
    title: "Headcount",
    type: "metric",
    fetchData,
  }
}

describe("F0AnalyticsDashboard report filters", () => {
  it("uses default filters in uncontrolled mode and refetches after Clear", async () => {
    const user = userEvent.setup()
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })
    const onFiltersChange = vi.fn()

    render(
      <F0AnalyticsDashboard
        filters={filters}
        defaultFilters={{ department: ["engineering"] }}
        onFiltersChange={onFiltersChange}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() =>
      expect(fetchData).toHaveBeenLastCalledWith({
        department: ["engineering"],
      })
    )
    expect(fetchData).toHaveBeenCalledTimes(1)

    const trigger = screen.getByRole("button", {
      name: "Filters. Active filters: Department",
    })
    expect(within(trigger).getByText("1")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Clear" }))

    await waitFor(() => expect(fetchData).toHaveBeenLastCalledWith({}))
    expect(fetchData).toHaveBeenCalledTimes(2)
    expect(onFiltersChange).toHaveBeenCalledWith({})
    expect(screen.getByRole("button", { name: "Filters" })).toBeInTheDocument()
  })

  it("emits every controlled transition and waits for the value prop before updating", async () => {
    const user = userEvent.setup()
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })
    const onFiltersChange = vi.fn()
    const activeFilters: DashboardFilters = {
      department: ["engineering"],
    }

    const { rerender } = render(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={activeFilters}
        onFiltersChange={onFiltersChange}
        presets={[
          {
            label: "Sales only",
            filter: { department: ["sales"] },
          },
        ]}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1))

    await user.click(
      screen.getByRole("button", {
        name: "Filters. Active filters: Department",
      })
    )
    await user.click(screen.getByRole("checkbox", { name: "Sales" }))
    await user.click(screen.getByRole("button", { name: "Apply filters" }))

    expect(onFiltersChange).toHaveBeenLastCalledWith({
      department: ["engineering", "sales"],
    })
    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(
      screen.getByRole("button", {
        name: "Filters. Active filters: Department",
      })
    ).toBeInTheDocument()

    await user.click(
      await screen.findByRole("button", {
        name: "Close: Department: Engineering",
      })
    )
    expect(onFiltersChange).toHaveBeenLastCalledWith({})

    await user.click(getVisibleByText("Sales only"))
    expect(onFiltersChange).toHaveBeenLastCalledWith({
      department: ["sales"],
    })

    rerender(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={{ department: ["sales"] }}
        onFiltersChange={onFiltersChange}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() =>
      expect(fetchData).toHaveBeenLastCalledWith({ department: ["sales"] })
    )
    expect(fetchData).toHaveBeenCalledTimes(2)
  })

  it("prefers a controlled value over default filters", async () => {
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })

    render(
      <F0AnalyticsDashboard
        filters={filters}
        defaultFilters={{ department: ["engineering"] }}
        filtersValue={{ department: ["sales"] }}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() =>
      expect(fetchData).toHaveBeenCalledWith({ department: ["sales"] })
    )
  })

  it("emits controlled changes for an empty dashboard", async () => {
    const user = userEvent.setup()
    const onFiltersChange = vi.fn()

    render(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={{ department: ["engineering"] }}
        onFiltersChange={onFiltersChange}
        items={[]}
      />
    )

    await user.click(screen.getByRole("button", { name: "Clear" }))

    expect(onFiltersChange).toHaveBeenCalledWith({})
  })
})
