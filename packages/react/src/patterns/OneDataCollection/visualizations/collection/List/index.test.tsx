import { screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"
import { zeroRender } from "@/testing/test-utils"

import { DataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { ListCollection } from "./index"

type Person = {
  id: number
  name: string
  email: string
  role: string
}

const testData: Person[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Senior Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Product Manager",
  },
]

const testFields = [
  { label: "Email", render: (item: Person) => item.email },
  { label: "Role", render: (item: Person) => item.role },
]

const createTestSource = (): DataCollectionSource<
  Person,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  NavigationFiltersDefinition,
  GroupingDefinition<Person>
> => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  currentSortings: null,
  setCurrentSortings: vi.fn(),
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  dataAdapter: {
    fetchData: async () => ({ records: testData }),
  },
  currentNavigationFilters: {},
  setCurrentNavigationFilters: vi.fn(),
  navigationFilters: undefined,
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  idProvider: (item) => item.id,
  itemUrl: (item) => `/people/${item.id}`,
})

describe("ListCollection", () => {
  it("publishes data state for item navigation", async () => {
    const onDataStateChange = vi.fn()
    const source = createTestSource()

    zeroRender(
      <ListCollection<
        Person,
        FiltersDefinition,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<Person>,
        NavigationFiltersDefinition,
        GroupingDefinition<Person>
      >
        fields={testFields}
        itemDefinition={(item) => ({ title: item.name })}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
        onDataStateChange={onDataStateChange}
        source={source}
      />
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(onDataStateChange).toHaveBeenLastCalledWith(
        expect.objectContaining({
          source: {
            idProvider: source.idProvider,
            itemUrl: source.itemUrl,
          },
          data: expect.objectContaining({
            records: expect.arrayContaining([
              expect.objectContaining({ id: 1 }),
              expect.objectContaining({ id: 2 }),
            ]),
          }),
          paginationInfo: null,
          setPage: expect.any(Function),
          loadMore: expect.any(Function),
          isLoading: false,
          isLoadingMore: false,
        })
      )
    })
  })
})
