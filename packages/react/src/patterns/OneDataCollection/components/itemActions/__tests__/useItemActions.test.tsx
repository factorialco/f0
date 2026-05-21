import { describe, expect, it, vi } from "vitest"

import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useItemActions } from "../useItemActions"

type Person = {
  id: number
  name: string
}

type TestSource = DataCollectionSource<
  Person,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  NavigationFiltersDefinition,
  GroupingDefinition<Person>
>

const person: Person = {
  id: 1,
  name: "John Doe",
}

const createSource = (
  itemActions: ItemActionsDefinition<Person>
): TestSource => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  currentSortings: null,
  setCurrentSortings: vi.fn(),
  currentNavigationFilters: {},
  setCurrentNavigationFilters: vi.fn(),
  navigationFilters: undefined,
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  dataAdapter: {
    fetchData: async () => ({ records: [person] }),
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  itemActions,
})

describe("useItemActions", () => {
  it("hides the mobile ellipsis when the only action is hidden from the mobile dropdown", () => {
    const source = createSource(() => [
      {
        label: "Open",
        type: "primary",
        hideInMobileDropdown: true,
        onClick: vi.fn(),
      },
    ])

    const { result } = renderHook(() =>
      useItemActions({ source, item: person })
    )

    expect(result.current.hasItemActions).toBe(true)
    expect(result.current.hasMobileItemActions).toBe(false)
    expect(result.current.mobileDropdownItemActions).toEqual([])
  })

  it("keeps other mobile actions but removes the hidden navigation action", () => {
    const source = createSource(() => [
      {
        label: "Duplicate",
        type: "primary",
        onClick: vi.fn(),
      },
      {
        label: "Open",
        type: "primary",
        hideInMobileDropdown: true,
        onClick: vi.fn(),
      },
      {
        label: "Archive",
        type: "secondary",
        onClick: vi.fn(),
      },
    ])

    const { result } = renderHook(() =>
      useItemActions({ source, item: person })
    )

    expect(result.current.hasMobileItemActions).toBe(true)
    expect(result.current.mobileDropdownItemActions).toEqual([
      expect.objectContaining({ label: "Duplicate", type: "item" }),
      expect.objectContaining({ label: "Archive", type: "item" }),
    ])
    expect(
      result.current.mobileDropdownItemActions.some(
        (action) => action.type !== "separator" && action.label === "Open"
      )
    ).toBe(false)
  })
})
