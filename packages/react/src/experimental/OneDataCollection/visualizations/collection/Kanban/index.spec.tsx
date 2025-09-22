import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { KanbanCollection } from "./Kanban"

type Person = RecordType & {
  id: number | string
  name: string
}

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const createSource = (
  data: Person[]
): DataCollectionSource<
  Person,
  TestFilters,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  TestNavigationFilters,
  GroupingDefinition<Person>
> => ({
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
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  dataAdapter: {
    fetchData: async (
      _options: import("@/hooks/datasource").PaginatedFetchOptions<TestFilters>
    ) => ({
      records: data,
      total: data.length,
      perPage: data.length,
      type: "infinite-scroll" as const,
      cursor: null,
      hasMore: false,
    }),
    paginationType: "infinite-scroll",
    perPage: data.length,
  },
  idProvider: (item: Person) => item.id,
})

describe("KanbanCollection - item click", () => {
  it("calls itemOnClick when a card is clicked", async () => {
    const user = userEvent.setup()
    const people: Person[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]
    const onItemClick = vi.fn()

    const source = {
      ...createSource(people),
      lanes: [
        { id: "todo", filters: {} },
        { id: "doing", filters: {} },
      ],
      selectable: (p: Person) => p.id,
      itemOnClick: (item: Person) => () => onItemClick(item),
    }

    render(
      <Wrapper>
        <KanbanCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          lanes={[
            { id: "todo", title: "Todo" },
            { id: "doing", title: "Doing" },
          ]}
          title={(p) => p.name}
          description={(p) => p.name}
          metadata={() => []}
          source={source}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </Wrapper>
    )

    // Click first card (John)
    const cards = await screen.findAllByTestId("card")
    await user.click(cards[0])
    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(onItemClick).toHaveBeenCalledWith({ id: 1, name: "John" })
  })
})
