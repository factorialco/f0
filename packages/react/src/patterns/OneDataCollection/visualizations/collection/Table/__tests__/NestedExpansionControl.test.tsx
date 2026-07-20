import { act, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useMemo, useState } from "react"
import { describe, expect, it, vi } from "vitest"

import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"

import { FiltersDefinition } from "@/hooks/datasource"
import { ChildrenPaginationInfo } from "@/hooks/datasource/types/nested.typings"
import { zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"

import { DataCollectionSource } from "../../../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../index"
import { useNestedTable } from "../nested"
import {
  matchesExpansionCriteria,
  NestedExpansionCriteria,
  NestedTableController,
  NestedTableOptions,
} from "../nested/types"

vi.mock("../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin = ""
  thresholds: readonly number[] = []
  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

type Person = { id: string; name: string; children?: Person[] }

const tree: Person[] = [
  {
    id: "p1",
    name: "Parent One",
    children: [
      {
        id: "c1",
        name: "Child One",
        children: [
          { id: "g1", name: "Grandchild One" },
          { id: "g2", name: "Grandchild Two" },
        ],
      },
      { id: "c2", name: "Child Two" },
    ],
  },
  {
    id: "p2",
    name: "Parent Two",
    children: [
      { id: "c3", name: "Child Three" },
      { id: "c4", name: "Child Four" },
      { id: "c5", name: "Child Five" },
      { id: "c6", name: "Child Six" },
    ],
  },
]

const CHILDREN_PER_PAGE = 2

const columns = [{ label: "name", render: (item: Person) => item.name }]

const createSource = (): DataCollectionSource<
  Person,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  NavigationFiltersDefinition,
  GroupingDefinition<Person>
> =>
  ({
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
    itemsWithChildren: (item: Person) => !!item.children?.length,
    childrenCount: ({ item }: { item: Person }) => item.children?.length,
    fetchChildren: ({
      item,
      pagination,
    }: {
      item: Person
      pagination?: ChildrenPaginationInfo
    }) => {
      const all = item.children ?? []
      const currentPage = (pagination?.currentPage ?? 0) + 1
      const start = (currentPage - 1) * CHILDREN_PER_PAGE
      return {
        records: all.slice(start, start + CHILDREN_PER_PAGE),
        paginationInfo: {
          total: all.length,
          perPage: CHILDREN_PER_PAGE,
          currentPage,
          pagesCount: Math.ceil(all.length / CHILDREN_PER_PAGE),
          hasMore: currentPage * CHILDREN_PER_PAGE < all.length,
        },
      }
    },
    dataAdapter: {
      fetchData: async () => ({ records: tree }),
    },
  }) as unknown as DataCollectionSource<
    Person,
    FiltersDefinition,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Person>,
    NavigationFiltersDefinition,
    GroupingDefinition<Person>
  >

type TestSource = ReturnType<typeof createSource>

const NestedTableHarness = ({
  nested,
  onControl,
  sourceOverrides,
}: {
  nested?: Omit<NestedTableOptions<Person>, "control">
  onControl?: (control: NestedTableController<Person>) => void
  sourceOverrides?: Partial<TestSource>
}) => {
  const control = useNestedTable<Person>()
  onControl?.(control)

  return (
    <TableCollection<
      Person,
      FiltersDefinition,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      NavigationFiltersDefinition,
      GroupingDefinition<Person>
    >
      columns={columns}
      source={{ ...createSource(), ...sourceOverrides }}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
      nested={{ ...nested, control }}
    />
  )
}

const renderNestedTable = (
  nested?: Omit<NestedTableOptions<Person>, "control">,
  sourceOverrides?: Partial<TestSource>
) => {
  let control!: NestedTableController<Person>
  render(
    <NestedTableHarness
      nested={nested}
      sourceOverrides={sourceOverrides}
      onControl={(c) => {
        control = c
      }}
    />
  )
  return {
    get control() {
      return control
    },
  }
}

/**
 * Harness with a mutable source, to exercise the expansion/cache resets that
 * happen when the source filters or search change.
 */
const MutableSourceHarness = ({
  nested,
  onApi,
  initialOverrides,
}: {
  nested?: Omit<NestedTableOptions<Person>, "control">
  onApi: (api: {
    control: NestedTableController<Person>
    setOverrides: (overrides: Partial<TestSource>) => void
  }) => void
  initialOverrides?: Partial<TestSource>
}) => {
  const [overrides, setOverrides] = useState<Partial<TestSource>>(
    initialOverrides ?? {}
  )
  const control = useNestedTable<Person>()
  const source = useMemo(
    () => ({ ...createSource(), ...initialOverrides, ...overrides }),
    [initialOverrides, overrides]
  )
  onApi({ control, setOverrides })

  return (
    <TableCollection<
      Person,
      FiltersDefinition,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      NavigationFiltersDefinition,
      GroupingDefinition<Person>
    >
      columns={columns}
      source={source}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
      nested={{ ...nested, control }}
    />
  )
}

/**
 * Harness for the controlled `nested.expanded` option: lets a test change
 * the criteria at runtime and observe the imperative controller alongside
 * it (to exercise the documented precedence between the two).
 */
const ControlledExpansionHarness = ({
  initialExpanded,
  onApi,
}: {
  initialExpanded?: NestedExpansionCriteria<Person>
  onApi: (api: {
    control: NestedTableController<Person>
    setExpanded: (value: NestedExpansionCriteria<Person> | undefined) => void
  }) => void
}) => {
  const [expanded, setExpanded] = useState<
    NestedExpansionCriteria<Person> | undefined
  >(initialExpanded)
  const control = useNestedTable<Person>()
  onApi({ control, setExpanded })

  return (
    <TableCollection<
      Person,
      FiltersDefinition,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      NavigationFiltersDefinition,
      GroupingDefinition<Person>
    >
      columns={columns}
      source={createSource()}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
      nested={{ control, expanded }}
    />
  )
}

/**
 * Harness that only varies `debouncedCurrentSearch`, keeping every other
 * source reference (filters, sortings, navigation filters) stable across
 * updates. Needed to isolate the search-normalization fix from the
 * `filtersChanged`/`sortingsChanged` identity checks in `useLoadChildren`,
 * which — unlike search — compare by reference and would otherwise mask a
 * spurious invalidation behind a legitimate one.
 */
const SearchOnlyMutableSourceHarness = ({
  nested,
  fetchChildren,
  onApi,
}: {
  nested?: Omit<NestedTableOptions<Person>, "control">
  fetchChildren: TestSource["fetchChildren"]
  onApi: (api: {
    control: NestedTableController<Person>
    setSearch: (search: string | undefined) => void
  }) => void
}) => {
  const [search, setSearch] = useState<string | undefined>(undefined)
  const control = useNestedTable<Person>()
  const baseSource = useMemo(() => createSource(), [])
  const source = useMemo(
    () => ({
      ...baseSource,
      fetchChildren,
      debouncedCurrentSearch: search,
    }),
    [baseSource, fetchChildren, search]
  )
  onApi({ control, setSearch })

  return (
    <TableCollection<
      Person,
      FiltersDefinition,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      NavigationFiltersDefinition,
      GroupingDefinition<Person>
    >
      columns={columns}
      source={source}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
      nested={{ ...nested, control }}
    />
  )
}

const waitForRootRows = async () => {
  await waitFor(() => {
    expect(screen.getByText("Parent One")).toBeInTheDocument()
    expect(screen.getByText("Parent Two")).toBeInTheDocument()
  })
}

const clickFirstChevron = async (user: ReturnType<typeof userEvent.setup>) => {
  const chevron = document.querySelector(
    ".lucide-chevron-right, .lucide-chevron-down"
  )
  expect(chevron).not.toBeNull()
  await user.click(chevron as Element)
}

describe("matchesExpansionCriteria", () => {
  const context = { item: { id: "x" }, depth: 1, hasActiveFilters: false }

  it("resolves booleans, depth numbers and predicates", () => {
    expect(matchesExpansionCriteria(undefined, context)).toBe(false)
    expect(matchesExpansionCriteria(true, context)).toBe(true)
    expect(matchesExpansionCriteria(false, context)).toBe(false)
    expect(matchesExpansionCriteria(1, context)).toBe(false)
    expect(matchesExpansionCriteria(2, context)).toBe(true)
    expect(matchesExpansionCriteria((ctx) => ctx.depth === 1, context)).toBe(
      true
    )
  })
})

describe("Nested table expansion control", () => {
  describe("defaultExpanded policy", () => {
    it("auto-expands every level with `true`, cascading through lazy loading", async () => {
      renderNestedTable({ defaultExpanded: true })
      await waitForRootRows()

      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Grandchild One")).toBeInTheDocument()
      })
    })

    it("expands only up to the given depth with a number", async () => {
      renderNestedTable({ defaultExpanded: 1 })
      await waitForRootRows()

      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      expect(screen.queryByText("Grandchild One")).not.toBeInTheDocument()
    })

    it("expands only rows matching a predicate", async () => {
      renderNestedTable({
        defaultExpanded: (ctx) => ctx.item.id === "p2",
      })
      await waitForRootRows()

      await waitFor(() => {
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()
    })

    it("leaves extra pages behind show-more by default, but loads them all with `defaultExpandedChildren: 'all'`", async () => {
      renderNestedTable({
        defaultExpanded: (ctx) => ctx.item.id === "p2",
      })
      await waitFor(() => {
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })
      // Paginated: only the first page is visible
      expect(screen.queryByText("Child Five")).not.toBeInTheDocument()
    })

    it("loads every page eagerly with `defaultExpandedChildren: 'all'`", async () => {
      renderNestedTable({
        defaultExpanded: (ctx) => ctx.item.id === "p2",
        defaultExpandedChildren: "all",
      })

      await waitFor(() => {
        expect(screen.getByText("Child Five")).toBeInTheDocument()
        expect(screen.getByText("Child Six")).toBeInTheDocument()
      })
    })
  })

  describe("useNestedTable controller", () => {
    it("expandAll/collapseAll expand and collapse the whole tree", async () => {
      const table = renderNestedTable()
      await waitForRootRows()
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()

      act(() => table.control.expandAll())
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Grandchild One")).toBeInTheDocument()
      })

      act(() => table.control.collapseAll())
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })
    })

    it("expandAll honors depth and where criteria", async () => {
      const table = renderNestedTable()
      await waitForRootRows()

      act(() =>
        table.control.expandAll({
          depth: 1,
          where: (ctx) => ctx.item.id === "p1",
        })
      )

      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      expect(screen.queryByText("Grandchild One")).not.toBeInTheDocument()
      expect(screen.queryByText("Child Three")).not.toBeInTheDocument()
    })

    it("expands a single row by id, optionally loading all its pages", async () => {
      const table = renderNestedTable()
      await waitForRootRows()

      act(() => table.control.expand("p2", { children: "all" }))

      await waitFor(() => {
        expect(screen.getByText("Child Three")).toBeInTheDocument()
        expect(screen.getByText("Child Six")).toBeInTheDocument()
      })
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      expect(table.control.isExpanded("p2")).toBe(true)
      expect(table.control.isExpanded("p1")).toBe(false)
    })

    it("collapse overrides an active auto-expansion policy", async () => {
      const table = renderNestedTable({ defaultExpanded: 1 })
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })

      act(() => table.control.collapse("p1"))

      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })
      // The policy still applies to the other root row
      expect(screen.getByText("Child Three")).toBeInTheDocument()
    })

    it("queues operations invoked before the table has mounted", async () => {
      const table = renderNestedTable()
      // The table is still on its initial-loading skeleton at this point
      act(() => table.control.expandAll({ depth: 1 }))

      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })
    })

    it("toggle flips the state, including rows expanded by a policy", async () => {
      const table = renderNestedTable({ defaultExpanded: 1 })
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })

      act(() => table.control.toggle("p1"))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })

      act(() => table.control.toggle("p1"))
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
    })

    it("targets multiple rows with a predicate", async () => {
      const table = renderNestedTable()
      await waitForRootRows()

      act(() => table.control.expand((ctx) => ctx.depth === 0))
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })

      act(() => table.control.collapse((ctx) => ctx.item.id === "p1"))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })
      expect(screen.getByText("Child Three")).toBeInTheDocument()
    })

    it("fires onExpandedChange for controller operations but not for policy auto-expansion", async () => {
      const onExpandedChange = vi.fn()
      const table = renderNestedTable({
        defaultExpanded: 1,
        onExpandedChange,
      })
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      // Policy-based auto-expansion does not emit events
      expect(onExpandedChange).not.toHaveBeenCalled()

      act(() => table.control.collapse("p1"))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })
      expect(onExpandedChange).toHaveBeenCalledWith({
        item: expect.objectContaining({ id: "p1" }),
        depth: 0,
        hasActiveFilters: false,
        expanded: false,
      })
    })

    it("expandTo reveals a deep node by expanding only its ancestor path", async () => {
      const table = renderNestedTable()
      await waitForRootRows()

      // c1 is not rendered yet (p1 is collapsed): the path resolves
      // progressively as lazy loading reveals each level.
      act(() => table.control.expandTo(["p1", "c1"]))

      await waitFor(() => {
        expect(screen.getByText("Grandchild One")).toBeInTheDocument()
      })
      // The sibling tree is untouched
      expect(screen.queryByText("Child Three")).not.toBeInTheDocument()
      expect(table.control.isExpanded("p2")).toBe(false)
    })

    it("expandTo queues before mount and honors the children load mode", async () => {
      const table = renderNestedTable()
      // Invoked while the table is still on its initial-loading skeleton
      act(() => table.control.expandTo(["p2"], { children: "all" }))

      await waitFor(() => {
        expect(screen.getByText("Child Three")).toBeInTheDocument()
        expect(screen.getByText("Child Six")).toBeInTheDocument()
      })
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()
    })

    it("getExpandedItems returns the expanded rendered items", async () => {
      const table = renderNestedTable()
      await waitForRootRows()

      act(() => table.control.expand("p1"))
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })

      const expandedIds = table.control.getExpandedItems().map((i) => i.id)
      expect(expandedIds).toEqual(["p1"])
    })
  })

  describe("filters change reset", () => {
    type MutableApi = {
      control: NestedTableController<Person>
      setOverrides: (overrides: Partial<TestSource>) => void
    }

    it("clears explicit overrides but keeps the auto-expansion policy", async () => {
      let api!: MutableApi
      render(
        <MutableSourceHarness
          nested={{ defaultExpanded: 1 }}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })

      // Explicit collapse overrides the policy…
      act(() => api.control.collapse("p1"))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })

      // …until the filters change: overrides reset, the policy re-applies
      act(() =>
        api.setOverrides({ currentFilters: { department: ["Engineering"] } })
      )
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
    })

    it("reloads children of every policy-expanded row without firing onExpandedChange", async () => {
      const onExpandedChange = vi.fn()
      let api!: MutableApi
      render(
        <MutableSourceHarness
          nested={{ defaultExpanded: 1, onExpandedChange }}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })

      act(() =>
        api.setOverrides({ currentFilters: { department: ["Engineering"] } })
      )

      // Every policy-expanded row stays expanded and reloads its children —
      // no row must be left with a residual explicit-collapse override.
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })
      // The reset is not an explicit expansion change, so no events fire
      expect(onExpandedChange).not.toHaveBeenCalled()
    })
  })

  describe("search and filters alignment", () => {
    type MutableApi = {
      control: NestedTableController<Person>
      setOverrides: (overrides: Partial<TestSource>) => void
    }

    it("resets children and passes the search term to fetchChildren when the search changes", async () => {
      const fetchChildren = vi.fn(({ item }: { item: Person }) => ({
        records: item.children ?? [],
      }))
      let api!: MutableApi
      render(
        <MutableSourceHarness
          initialOverrides={{ fetchChildren } as unknown as Partial<TestSource>}
          nested={{ defaultExpanded: 1 }}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      expect(fetchChildren).toHaveBeenCalledWith(
        expect.objectContaining({ search: undefined })
      )

      act(() => api.setOverrides({ debouncedCurrentSearch: "Grand" }))

      // The children cache resets and the refetch carries the search term
      await waitFor(() => {
        expect(fetchChildren).toHaveBeenCalledWith(
          expect.objectContaining({ search: "Grand" })
        )
      })
    })

    it("lets defaultExpanded react to the active search via hasActiveFilters", async () => {
      let api!: MutableApi
      render(
        <MutableSourceHarness
          nested={{ defaultExpanded: (ctx) => ctx.hasActiveFilters }}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitForRootRows()
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()

      // Searching activates the policy: the tree auto-expands
      act(() => api.setOverrides({ debouncedCurrentSearch: "One" }))
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })

      // Clearing the search deactivates it: the tree collapses back
      act(() => api.setOverrides({}))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })
    })
  })

  describe("expand animations", () => {
    it.each(["fade", "stagger", "slide", "pop"] as const)(
      "still renders revealed children with the '%s' animation",
      async (expandAnimation) => {
        renderNestedTable({ defaultExpanded: true, expandAnimation })

        await waitFor(() => {
          expect(screen.getByText("Child One")).toBeInTheDocument()
          expect(screen.getByText("Grandchild One")).toBeInTheDocument()
        })
      }
    )
  })

  describe("eager loading safety guards", () => {
    it("stops eager loading at `total` even if the adapter keeps reporting hasMore", async () => {
      const fetchChildren = vi.fn(({ item }: { item: Person }) => ({
        records: item.children ?? [],
        paginationInfo: {
          total: item.children?.length ?? 0,
          perPage: 2,
          currentPage: 1,
          pagesCount: 1,
          // Misbehaving adapter: always claims there is more
          hasMore: true,
        },
      }))
      const table = renderNestedTable(undefined, {
        fetchChildren,
      } as unknown as Partial<TestSource>)
      await waitForRootRows()

      act(() => table.control.expand("p2", { children: "all" }))
      await waitFor(() => {
        expect(screen.getByText("Child Six")).toBeInTheDocument()
      })

      // All records arrived in the first page; the total guard prevents
      // further requests despite hasMore staying true.
      expect(fetchChildren).toHaveBeenCalledTimes(1)
    })

    it("restores the policy's eager load mode after a manual collapse and re-expand", async () => {
      // Deferred fetches so the collapse can happen while page 1 is still in
      // flight — leaving page 2 pending when the row is re-expanded.
      const pending: Array<() => void> = []
      const fetchChildren = vi.fn(
        ({
          item,
          pagination,
        }: {
          item: Person
          pagination?: ChildrenPaginationInfo
        }) =>
          new Promise((resolve) => {
            pending.push(() => {
              const all = item.children ?? []
              const currentPage = (pagination?.currentPage ?? 0) + 1
              const start = (currentPage - 1) * CHILDREN_PER_PAGE
              resolve({
                records: all.slice(start, start + CHILDREN_PER_PAGE),
                paginationInfo: {
                  total: all.length,
                  perPage: CHILDREN_PER_PAGE,
                  currentPage,
                  pagesCount: Math.ceil(all.length / CHILDREN_PER_PAGE),
                  hasMore: currentPage * CHILDREN_PER_PAGE < all.length,
                },
              })
            })
          })
      )
      const table = renderNestedTable(
        {
          defaultExpanded: (ctx) => ctx.item.id === "p2",
          defaultExpandedChildren: "all",
        },
        { fetchChildren } as unknown as Partial<TestSource>
      )
      await waitForRootRows()
      await waitFor(() => expect(fetchChildren).toHaveBeenCalledTimes(1))

      // Collapse while page 1 is in flight, then let it land in the cache.
      act(() => table.control.collapse("p2"))
      await act(async () => {
        pending.shift()?.()
      })
      expect(screen.queryByText("Child Three")).not.toBeInTheDocument()

      // Re-expanding WITHOUT options must restore the eager mode declared by
      // the policy (`defaultExpandedChildren: "all"`): the remaining page is
      // fetched instead of hiding behind the "show more" row.
      act(() => table.control.expand("p2"))
      await waitFor(() => expect(fetchChildren).toHaveBeenCalledTimes(2))
      await act(async () => {
        pending.shift()?.()
      })
      await waitFor(() => {
        expect(screen.getByText("Child Six")).toBeInTheDocument()
      })
    })
  })

  describe("user interaction", () => {
    it("chevron toggling still works and fires onExpandedChange", async () => {
      const user = userEvent.setup()
      const onExpandedChange = vi.fn()
      renderNestedTable({ onExpandedChange })
      await waitForRootRows()

      await clickFirstChevron(user)
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      expect(onExpandedChange).toHaveBeenCalledWith({
        item: expect.objectContaining({ id: "p1" }),
        depth: 0,
        hasActiveFilters: false,
        expanded: true,
      })

      await clickFirstChevron(user)
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })
      expect(onExpandedChange).toHaveBeenLastCalledWith({
        item: expect.objectContaining({ id: "p1" }),
        depth: 0,
        hasActiveFilters: false,
        expanded: false,
      })
    })
  })

  describe("search normalization (undefined vs empty string)", () => {
    it('does not clear the children cache or refetch on an undefined→"" search transition', async () => {
      const fetchChildren = vi.fn(({ item }: { item: Person }) => ({
        records: item.children ?? [],
      }))
      let api!: {
        control: NestedTableController<Person>
        setSearch: (search: string | undefined) => void
      }
      render(
        <SearchOnlyMutableSourceHarness
          fetchChildren={
            fetchChildren as unknown as TestSource["fetchChildren"]
          }
          nested={{ defaultExpanded: 1 }}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      const callsBeforeTransition = fetchChildren.mock.calls.length

      // A consumer initializing a controlled search input commonly calls
      // `setSearch("")` on mount, producing this exact transition.
      act(() => api.setSearch(""))

      // The row stays expanded with its cached children, and no refetch was
      // triggered by the (spurious) cache invalidation this used to cause.
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      expect(fetchChildren).toHaveBeenCalledTimes(callsBeforeTransition)
    })
  })

  describe("re-expanding rows with empty cached children", () => {
    it("refetches when a row whose children resolved to an empty list is re-expanded", async () => {
      const fetchChildren = vi.fn(() => ({ records: [] }))
      const table = renderNestedTable(undefined, {
        fetchChildren,
      } as unknown as Partial<TestSource>)
      await waitForRootRows()

      act(() => table.control.expand("p1"))
      await waitFor(() => {
        expect(fetchChildren).toHaveBeenCalledTimes(1)
      })

      act(() => table.control.collapse("p1"))
      act(() => table.control.expand("p1"))

      await waitFor(() => {
        expect(fetchChildren).toHaveBeenCalledTimes(2)
      })
    })

    it("does not refetch on every render while the row stays expanded (no fetch loop)", async () => {
      const fetchChildren = vi.fn(() => ({ records: [] }))
      const table = renderNestedTable(undefined, {
        fetchChildren,
      } as unknown as Partial<TestSource>)
      await waitForRootRows()

      act(() => table.control.expand("p1"))
      await waitFor(() => {
        expect(fetchChildren).toHaveBeenCalledTimes(1)
      })

      // Re-render without collapsing/re-expanding: still just one call.
      act(() => table.control.expand("p1"))
      await waitFor(() => {
        expect(fetchChildren).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("controlled expansion (`nested.expanded`)", () => {
    it("reactively applies the criteria on change, taking precedence over the imperative controller", async () => {
      let api!: {
        control: NestedTableController<Person>
        setExpanded: (
          value: NestedExpansionCriteria<Person> | undefined
        ) => void
      }
      render(
        <ControlledExpansionHarness
          initialExpanded={1}
          onApi={(a) => {
            api = a
          }}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
      expect(screen.queryByText("Grandchild One")).not.toBeInTheDocument()

      // The imperative controller still works immediately…
      act(() => api.control.collapse("p1"))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })

      // …but changing the controlled criteria reimposes it, overriding the
      // controller's explicit collapse.
      act(() => api.setExpanded(2))
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
        expect(screen.getByText("Grandchild One")).toBeInTheDocument()
      })
    })

    it("keeps expandAll/collapseAll as complete no-ops while `expanded` is controlled", async () => {
      let api!: {
        control: NestedTableController<Person>
        setExpanded: (
          value: NestedExpansionCriteria<Person> | undefined
        ) => void
      }
      render(
        <ControlledExpansionHarness
          initialExpanded={true}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })

      // Manual collapse layers an override on top of the controlled criteria
      act(() => api.control.collapse("p1"))
      await waitFor(() => {
        expect(screen.queryByText("Child One")).not.toBeInTheDocument()
      })

      // collapseAll must NOT clear the override: the row stays collapsed
      // instead of snapping back open under the controlled `expanded: true`
      act(() => api.control.collapseAll())
      await act(async () => {})
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()

      // expandAll is equally inert while controlled
      act(() => api.control.expandAll())
      await act(async () => {})
      expect(screen.queryByText("Child One")).not.toBeInTheDocument()
    })

    it("warns in dev when a controlled `expanded` predicate changes identity repeatedly", async () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
      const inlineCriteria = () =>
        ((ctx) => ctx.depth < 0) as NestedExpansionCriteria<Person>
      const { rerender } = render(
        <NestedTableHarness nested={{ expanded: inlineCriteria() }} />
      )
      await waitForRootRows()
      // Each rerender passes a brand-new predicate identity (the footgun)
      rerender(<NestedTableHarness nested={{ expanded: inlineCriteria() }} />)
      rerender(<NestedTableHarness nested={{ expanded: inlineCriteria() }} />)
      await waitFor(() => {
        expect(warnSpy).toHaveBeenCalledWith(
          expect.stringContaining("nested.expanded")
        )
      })
      warnSpy.mockRestore()
    })
  })

  describe("row identity (rowId) collision safety", () => {
    it("keeps expansion state independent between branches of id-less items", async () => {
      type Node = { name: string; children?: Node[] }
      const branches: Node[] = [
        {
          name: "Branch A",
          children: [{ name: "A1", children: [{ name: "A1a" }] }],
        },
        {
          name: "Branch B",
          children: [{ name: "B1", children: [{ name: "B1a" }] }],
        },
      ]
      const table = renderNestedTable(undefined, {
        dataAdapter: { fetchData: async () => ({ records: branches }) },
        fetchChildren: ({ item }: { item: Node }) => ({
          records: item.children ?? [],
          paginationInfo: {
            total: item.children?.length ?? 0,
            perPage: 10,
            currentPage: 1,
            pagesCount: 1,
            hasMore: false,
          },
        }),
      } as unknown as Partial<TestSource>)
      await waitFor(() => {
        expect(screen.getByText("Branch A")).toBeInTheDocument()
        expect(screen.getByText("Branch B")).toBeInTheDocument()
      })

      // Reveal both intermediate rows, then their children: A1 and B1 both
      // sit at depth 1, index 0 — the positions that used to collide.
      act(() => table.control.expand((ctx) => ctx.depth === 0))
      await waitFor(() => {
        expect(screen.getByText("A1")).toBeInTheDocument()
        expect(screen.getByText("B1")).toBeInTheDocument()
      })
      act(() => table.control.expand((ctx) => ctx.depth === 1))
      await waitFor(() => {
        expect(screen.getByText("A1a")).toBeInTheDocument()
        expect(screen.getByText("B1a")).toBeInTheDocument()
      })

      // Collapsing only B1 must not touch A1's subtree
      act(() =>
        table.control.collapse(
          (ctx) => (ctx.item as unknown as Node).name === "B1"
        )
      )
      await waitFor(() => {
        expect(screen.queryByText("B1a")).not.toBeInTheDocument()
      })
      expect(screen.getByText("A1a")).toBeInTheDocument()
    })

    it("keeps a row expanded when its siblings are reordered by a refetch", async () => {
      // Stable filter/navigation references: swapping the dataAdapter below
      // must NOT look like a filters change (which resets overrides by
      // design) — only the data order changes.
      const stableSourceBits = {
        currentFilters: {},
        currentNavigationFilters: {},
      } as unknown as Partial<TestSource>
      let api!: {
        control: NestedTableController<Person>
        setOverrides: (overrides: Partial<TestSource>) => void
      }
      render(
        <MutableSourceHarness
          initialOverrides={stableSourceBits}
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitForRootRows()

      act(() => api.control.expand("p2"))
      await waitFor(() => {
        expect(screen.getByText("Child Three")).toBeInTheDocument()
      })

      // A refetch returns the same items in reverse order (no filters or
      // sortings change, so no expansion reset is involved): the row keys
      // by identity, not by position, so p2 must stay expanded.
      act(() =>
        api.setOverrides({
          dataAdapter: {
            fetchData: async () => ({ records: [...tree].reverse() }),
          },
        } as unknown as Partial<TestSource>)
      )
      await waitFor(() => {
        const parents = screen.getAllByText(/^Parent/)
        expect(parents[0]).toHaveTextContent("Parent Two")
      })
      expect(screen.getByText("Child Three")).toBeInTheDocument()
    })

    it("targets rows through source.idProvider when the items have no id", async () => {
      type PersonByEmail = {
        name: string
        email: string
        children?: PersonByEmail[]
      }
      const people: PersonByEmail[] = [
        {
          name: "Alice",
          email: "alice@corp.com",
          children: [{ name: "Alice Jr", email: "alice.jr@corp.com" }],
        },
        {
          name: "Bob",
          email: "bob@corp.com",
          children: [{ name: "Bob Jr", email: "bob.jr@corp.com" }],
        },
      ]
      const table = renderNestedTable(undefined, {
        idProvider: (item: PersonByEmail) => item.email,
        dataAdapter: { fetchData: async () => ({ records: people }) },
        fetchChildren: ({ item }: { item: PersonByEmail }) => ({
          records: item.children ?? [],
          paginationInfo: {
            total: item.children?.length ?? 0,
            perPage: 10,
            currentPage: 1,
            pagesCount: 1,
            hasMore: false,
          },
        }),
      } as unknown as Partial<TestSource>)
      await waitFor(() => {
        expect(screen.getByText("Bob")).toBeInTheDocument()
      })

      // The univocal column designated by idProvider is the target identity
      act(() => table.control.expand("bob@corp.com"))
      await waitFor(() => {
        expect(screen.getByText("Bob Jr")).toBeInTheDocument()
      })
      expect(screen.queryByText("Alice Jr")).not.toBeInTheDocument()
      expect(table.control.isExpanded("bob@corp.com")).toBe(true)
    })
  })

  describe("stale fetches and misbehaving adapters", () => {
    it("discards an in-flight children fetch when the search resets the cache", async () => {
      const pending: Array<() => void> = []
      const fetchChildren = vi.fn(
        ({ search }: { search?: string }) =>
          new Promise((resolve) => {
            pending.push(() =>
              resolve({
                records: [
                  {
                    id: `c-${search ?? "initial"}`,
                    name: `Child ${search ?? "initial"}`,
                  },
                ],
                paginationInfo: {
                  total: 1,
                  perPage: 2,
                  currentPage: 1,
                  pagesCount: 1,
                  hasMore: false,
                },
              })
            )
          })
      )
      let api!: {
        control: NestedTableController<Person>
        setSearch: (search: string | undefined) => void
      }
      render(
        <SearchOnlyMutableSourceHarness
          nested={{ defaultExpanded: (ctx) => ctx.item.id === "p1" }}
          fetchChildren={
            fetchChildren as unknown as TestSource["fetchChildren"]
          }
          onApi={(a) => {
            api = a
          }}
        />
      )
      await waitForRootRows()
      await waitFor(() => expect(fetchChildren).toHaveBeenCalledTimes(1))

      // The search changes while the first fetch is still in flight: the
      // reset must unsubscribe it so its late resolution cannot repopulate
      // the cache with children of the previous search.
      act(() => api.setSearch("Grand"))
      await waitFor(() => expect(fetchChildren).toHaveBeenCalledTimes(2))
      await act(async () => {
        pending[0]?.()
      })
      expect(screen.queryByText("Child initial")).not.toBeInTheDocument()

      // The legitimate re-fetch (with the new search) still lands
      await act(async () => {
        pending[1]?.()
      })
      await waitFor(() => {
        expect(screen.getByText("Child Grand")).toBeInTheDocument()
      })
    })

    it("stops eager loading when a page adds no records despite hasMore: true", async () => {
      const fetchChildren = vi.fn(() => ({
        records: [],
        paginationInfo: {
          total: 100,
          perPage: 2,
          currentPage: 1,
          pagesCount: 50,
          // Misbehaving adapter: empty page but still claims there is more
          hasMore: true,
        },
      }))
      const table = renderNestedTable(undefined, {
        fetchChildren,
      } as unknown as Partial<TestSource>)
      await waitForRootRows()

      act(() => table.control.expand("p2", { children: "all" }))
      await act(async () => {})

      // The empty page is treated as the end of pagination: exactly one
      // request, no infinite fetch loop.
      expect(fetchChildren).toHaveBeenCalledTimes(1)
    })
  })

  describe("id normalization and controller rebinding", () => {
    const numericTree = [
      {
        id: 1,
        name: "Uno",
        children: [
          { id: 11, name: "Once", children: [{ id: 111, name: "CientoOnce" }] },
        ],
      },
      { id: 2, name: "Dos", children: [{ id: 21, name: "Veintiuno" }] },
    ]

    it("matches numeric item ids against string targets (and vice versa)", async () => {
      const table = renderNestedTable(undefined, {
        dataAdapter: { fetchData: async () => ({ records: numericTree }) },
        fetchChildren: ({ item }: { item: (typeof numericTree)[number] }) => ({
          records: item.children ?? [],
          paginationInfo: {
            total: item.children?.length ?? 0,
            perPage: 10,
            currentPage: 1,
            pagesCount: 1,
            hasMore: false,
          },
        }),
      } as unknown as Partial<TestSource>)
      await waitFor(() => {
        expect(screen.getByText("Uno")).toBeInTheDocument()
      })

      // String target (e.g. an id read from a URL param) → numeric item id
      act(() => table.control.expand("2"))
      await waitFor(() => {
        expect(screen.getByText("Veintiuno")).toBeInTheDocument()
      })
      expect(table.control.isExpanded(2)).toBe(true)
      expect(table.control.isExpanded("2")).toBe(true)

      // expandTo with a string path over numeric ids
      act(() => table.control.expandTo(["1", "11"]))
      await waitFor(() => {
        expect(screen.getByText("CientoOnce")).toBeInTheDocument()
      })
    })

    it("replays operations queued while the table is unmounted onto the next mount", async () => {
      const RebindHarness = ({
        showTable,
        onControl,
      }: {
        showTable: boolean
        onControl: (control: NestedTableController<Person>) => void
      }) => {
        const control = useNestedTable<Person>()
        onControl(control)
        const source = useMemo(() => createSource(), [])
        if (!showTable) return null
        return (
          <TableCollection<
            Person,
            FiltersDefinition,
            SortingsDefinition,
            SummariesDefinition,
            ItemActionsDefinition<Person>,
            NavigationFiltersDefinition,
            GroupingDefinition<Person>
          >
            columns={columns}
            source={source}
            onSelectItems={vi.fn()}
            onLoadData={vi.fn()}
            onLoadError={vi.fn()}
            nested={{ control }}
          />
        )
      }

      let control!: NestedTableController<Person>
      const { rerender } = render(
        <RebindHarness
          showTable={true}
          onControl={(c) => {
            control = c
          }}
        />
      )
      await waitForRootRows()

      // Unmount the table: the engine unbinds and operations queue again
      rerender(
        <RebindHarness
          showTable={false}
          onControl={(c) => {
            control = c
          }}
        />
      )
      act(() => control.expand("p1"))

      // Remount: the queued operation replays against the new engine
      rerender(
        <RebindHarness
          showTable={true}
          onControl={(c) => {
            control = c
          }}
        />
      )
      await waitForRootRows()
      await waitFor(() => {
        expect(screen.getByText("Child One")).toBeInTheDocument()
      })
    })
  })
})
