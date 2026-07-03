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
})
