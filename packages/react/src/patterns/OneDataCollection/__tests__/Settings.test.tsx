import { act, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, test } from "vitest"

import type { FiltersDefinition } from "@/patterns/OneFilterPicker"

import { aiTranslations } from "@/sds/ai/F0AiChat"
import {
  GroupingDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "@/hooks/datasource"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import {
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider
    translations={{
      ...defaultTranslations,
      ai: {
        ...defaultTranslations.ai,
        ...aiTranslations.ai,
      },
    }}
  >
    {children}
  </I18nProvider>
)

type Person = {
  id: number
  name: string
  department: string
}

const mockData: Person[] = [
  { id: 1, name: "John Doe", department: "Engineering" },
  { id: 2, name: "Alice Brown", department: "Product" },
]

const tableVisualization = {
  type: "table" as const,
  options: {
    columns: [
      {
        label: "Name",
        render: (item: Person) => item.name,
        sorting: "name" as const,
      },
      {
        label: "Department",
        render: (item: Person) => item.department,
      },
    ],
  },
}

describe("OneDataCollection Settings", () => {
  test("Reset to default restores defaultSortings and defaultGrouping", async () => {
    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async () => ({ records: mockData }),
          },
          sortings: {
            name: { label: "Name" },
            department: { label: "Department" },
          },
          defaultSortings: { field: "name", order: "desc" },
          grouping: {
            groupBy: {
              department: {
                name: "Department",
                label: (groupId) => String(groupId),
              },
            },
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[tableVisualization]}
        />
      </TestWrapper>
    )

    expect(result.current.currentSortings).toEqual({
      field: "name",
      order: "desc",
    })
    expect(result.current.currentGrouping).toBeUndefined()

    await act(async () => {
      result.current.setCurrentSortings({ field: "name", order: "asc" })
      result.current.setCurrentGrouping({ field: "department", order: "asc" })
    })

    await waitFor(() => {
      expect(result.current.currentSortings).toEqual({
        field: "name",
        order: "asc",
      })
      expect(result.current.currentGrouping).toEqual({
        field: "department",
        order: "asc",
      })
    })

    const settingsButton = await screen.findByRole("button", {
      name: /settings/i,
    })
    await act(async () => {
      await userEvent.click(settingsButton)
    })

    const resetButton = await screen.findByRole("button", {
      name: /reset to default/i,
    })
    await act(async () => {
      await userEvent.click(resetButton)
    })

    await waitFor(() => {
      expect(result.current.currentSortings).toEqual({
        field: "name",
        order: "desc",
      })
      expect(result.current.currentGrouping).toBeUndefined()
    })
  })

  test("Reset to default restores declared defaults in controlled mode", async () => {
    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async () => ({ records: mockData }),
          },
          sortings: {
            name: { label: "Name" },
            department: { label: "Department" },
          },
          defaultSortings: { field: "name", order: "desc" },
          currentSortings: { field: "department", order: "asc" },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[tableVisualization]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(result.current.currentSortings).toEqual({
        field: "department",
        order: "asc",
      })
    })

    const settingsButton = await screen.findByRole("button", {
      name: /settings/i,
    })
    await act(async () => {
      await userEvent.click(settingsButton)
    })

    const resetButton = await screen.findByRole("button", {
      name: /reset to default/i,
    })
    await act(async () => {
      await userEvent.click(resetButton)
    })

    await waitFor(() => {
      expect(result.current.currentSortings).toEqual({
        field: "name",
        order: "desc",
      })
    })
  })
})
