import { waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { createDataSourceDefinition } from "@/hooks/datasource"
import { screen, zeroRender as render } from "@/testing/test-utils"

import { F0Select } from "../index"

vi.mock("@/patterns/OneFilterPicker", () => ({
  OneFilterPicker: () => <div data-testid="injected-filter-picker" />,
}))

vi.mock("../components/ActiveFiltersChips", () => ({
  ActiveFiltersChips: () => <div data-testid="injected-active-filters" />,
}))

vi.mock(
  "@/patterns/OneDataCollection/Settings/components/GroupingSelector",
  () => ({
    GroupingSelector: ({ SelectComponent }: { SelectComponent: unknown }) => (
      <div
        data-testid="injected-grouping-selector"
        data-has-select-component={SelectComponent != null}
      />
    ),
  })
)

describe("F0Select runtime dependencies", () => {
  it("wires filters, active chips, and the static grouping select", async () => {
    const user = userEvent.setup()
    const records = [{ id: "1", name: "Ada", department: "Engineering" }]
    const source = createDataSourceDefinition({
      filters: {
        name: { type: "search", label: "Name" },
      },
      defaultFilters: { name: "Ada" },
      grouping: {
        mandatory: false,
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => String(groupId),
            itemCount: () => records.length,
          },
          name: {
            name: "Name",
            label: (groupId) => String(groupId),
            itemCount: () => records.length,
          },
        },
      },
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: async () => ({
          type: "infinite-scroll" as const,
          cursor: undefined,
          perPage: 100,
          hasMore: false,
          records,
          total: records.length,
        }),
      },
    })

    render(
      <F0Select
        label="Employees"
        source={source}
        mapOptions={(record) => ({
          value: record.id,
          label: record.name,
          item: record,
        })}
      />
    )

    await user.click(screen.getByRole("combobox", { name: "Employees" }))

    await waitFor(() => {
      expect(screen.getByTestId("injected-filter-picker")).toBeInTheDocument()
    })
    expect(screen.getByTestId("injected-active-filters")).toBeInTheDocument()
    expect(screen.getByTestId("injected-grouping-selector")).toHaveAttribute(
      "data-has-select-component",
      "true"
    )
  })
})
