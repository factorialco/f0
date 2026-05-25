import { vi } from "vitest"

import type {
  FiltersDefinition,
  GroupingDefinition,
  PaginatedFetchOptions,
  SortingsDefinition,
} from "@/hooks/datasource"

import type { DataCollectionSource } from "../../../../hooks/useDataCollectionSource"
import type { ItemActionsDefinition } from "../../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import type { SummariesDefinition } from "../../../../summary"

export type TestPerson = {
  id: string
  name: string
  parentId: string | null
}

type TestSource = DataCollectionSource<
  TestPerson,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<TestPerson>,
  NavigationFiltersDefinition,
  GroupingDefinition<TestPerson>
>

/**
 * No-pagination source for eager-mode Graph tests (mirrors Card test pattern).
 */
export const createEagerSource = (
  records: TestPerson[],
  overrides: Partial<TestSource> = {}
): TestSource => ({
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
    fetchData: async () => ({ records }),
  },
  currentNavigationFilters: {},
  setCurrentNavigationFilters: vi.fn(),
  navigationFilters: undefined,
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  idProvider: (item: TestPerson) => item.id,
  selectable: (item: TestPerson) => item.id,
  ...overrides,
})

/**
 * Infinite-scroll paginated source for lazy-mode Graph tests (mirrors Kanban
 * test pattern). Required whenever the test passes `loadChildren`.
 */
export const createPaginatedSource = (
  records: TestPerson[],
  overrides: Partial<TestSource> = {}
): TestSource => ({
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
    fetchData: async (_options: PaginatedFetchOptions<FiltersDefinition>) => ({
      records,
      total: records.length,
      perPage: records.length,
      type: "infinite-scroll" as const,
      cursor: null,
      hasMore: false,
    }),
    paginationType: "infinite-scroll",
    perPage: records.length || 10,
  },
  currentNavigationFilters: {},
  setCurrentNavigationFilters: vi.fn(),
  navigationFilters: undefined,
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  idProvider: (item: TestPerson) => item.id,
  selectable: (item: TestPerson) => item.id,
  ...overrides,
})

/**
 * Render-stub renderer that just prints the record id so tests can assert on
 * presence without depending on F0GraphNode internals.
 */
export const stubRenderNode = (record: TestPerson) => (
  <span data-testid={`node-${record.id}`}>{record.name}</span>
)
