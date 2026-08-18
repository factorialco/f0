import { waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"

import { screen, zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"

import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"

import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../index"

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

type Node = {
  id: string
  name: string
  kind: "category" | "role" | "level"
  children?: Node[]
}

/**
 * Engineering (0) > Backend (1) > Backend Engineer (2) > Junior/Senior (3).
 *
 * Four levels on purpose: depth 3 can only be reached by a row that the policy
 * opened, whose children the policy opened in turn, so it is what proves the
 * cascade rather than a single hard-coded level.
 */
const TREE: Node[] = [
  {
    id: "engineering",
    name: "Engineering",
    kind: "category",
    children: [
      {
        id: "backend",
        name: "Backend",
        kind: "category",
        children: [
          {
            id: "backend-engineer",
            name: "Backend Engineer",
            kind: "role",
            children: [
              { id: "be-junior", name: "Junior", kind: "level" },
              { id: "be-senior", name: "Senior", kind: "level" },
            ],
          },
        ],
      },
    ],
  },
]

const indexTree = (nodes: Node[], into = new Map<string, Node>()) => {
  nodes.forEach((node) => {
    into.set(node.id, node)
    if (node.children) indexTree(node.children, into)
  })
  return into
}

const columns = [{ label: "name", render: (item: Node) => item.name }]

type TestSource = DataCollectionSource<
  Node,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Node>,
  NavigationFiltersDefinition,
  GroupingDefinition<Node>
>

const createSource = (
  tree: Node[] = TREE,
  fetchChildren?: (args: { item: Node }) => { records: Node[] }
): TestSource => {
  const byId = indexTree(tree)

  return {
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
    itemsWithChildren: (item: Node) => !!byId.get(item.id)?.children?.length,
    fetchChildren:
      fetchChildren ??
      (({ item }: { item: Node }) => ({
        records: byId.get(item.id)?.children ?? [],
      })),
    dataAdapter: {
      paginationType: "pages",
      fetchData: async () => ({
        records: tree,
        type: "pages",
        total: tree.length,
        perPage: 20,
        currentPage: 1,
        pagesCount: 1,
      }),
    },
  } as unknown as TestSource
}

const renderTable = (
  props: {
    source?: TestSource
    defaultExpanded?: boolean | number | ((node: Node) => boolean)
  } = {}
) =>
  render(
    <TableCollection<
      Node,
      FiltersDefinition,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Node>,
      NavigationFiltersDefinition,
      GroupingDefinition<Node>
    >
      columns={columns}
      source={props.source ?? createSource()}
      defaultExpanded={props.defaultExpanded}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )

/**
 * Clicks the chevron of the row showing `name`. The icon carries
 * `pointer-events-none` and the handler sits on its wrapper, but the click
 * bubbles, which is what the other nested-table tests rely on too.
 */
const toggleRow = async (
  user: ReturnType<typeof userEvent.setup>,
  name: string
) => {
  const row = screen.getByText(name).closest("tr")
  expect(row).not.toBeNull()

  const chevron = row?.querySelector(
    ".lucide-chevron-right, .lucide-chevron-down"
  )
  expect(chevron).not.toBeNull()

  await user.click(chevron as Element)
}

describe("TableCollection defaultExpanded", () => {
  describe("policy", () => {
    it("keeps every row collapsed when no policy is passed", async () => {
      renderTable()

      await waitFor(() =>
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      )
      expect(screen.queryByText("Backend")).toBeNull()
    })

    it("opens the whole tree with `true`, cascading down to depth 3", async () => {
      renderTable({ defaultExpanded: true })

      // A row opened by the policy never goes through the expand handler, so
      // reaching "Junior" also proves each opened row fetched its own children.
      await waitFor(() =>
        expect(screen.getByText("Junior")).toBeInTheDocument()
      )
      expect(screen.getByText("Senior")).toBeInTheDocument()
    })

    it("opens rows shallower than the given depth with a number", async () => {
      renderTable({ defaultExpanded: 1 })

      // depth 0 < 1 opens, revealing depth 1; depth 1 is not < 1 so it stays shut.
      await waitFor(() =>
        expect(screen.getByText("Backend")).toBeInTheDocument()
      )
      expect(screen.queryByText("Backend Engineer")).toBeNull()
    })

    it("lets a predicate stop the cascade at a kind of row", async () => {
      renderTable({ defaultExpanded: (node) => node.kind !== "role" })

      await waitFor(() =>
        expect(screen.getByText("Backend Engineer")).toBeInTheDocument()
      )
      expect(screen.queryByText("Junior")).toBeNull()
    })

    it("passes the row depth to the predicate", async () => {
      const policy = vi.fn(() => false)

      renderTable({
        defaultExpanded: policy as unknown as (node: Node) => boolean,
      })

      await waitFor(() =>
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      )
      expect(policy).toHaveBeenCalledWith(
        expect.objectContaining({ id: "engineering" }),
        { depth: 0 }
      )
    })
  })

  /**
   * The provider used to DELETE the entry on collapse, which made "never seen"
   * and "the user closed it" the same state. Harmless while nothing opened rows
   * on its own; with a policy in play it means an opening policy reopens a row
   * the instant the user closes it. These are the cases that regress if the
   * tri-state goes back to a two-state map.
   */
  describe("a user decision wins over the policy", () => {
    it("does not reopen a row the user collapsed under an opening policy", async () => {
      const user = userEvent.setup()
      renderTable({ defaultExpanded: true })

      await waitFor(() =>
        expect(screen.getByText("Backend")).toBeInTheDocument()
      )

      await toggleRow(user, "Engineering")

      await waitFor(() => expect(screen.queryByText("Backend")).toBeNull())
      // Still closed after the tree has had a chance to re-render and
      // re-evaluate the policy for that row.
      await new Promise((resolve) => setTimeout(resolve, 50))
      expect(screen.queryByText("Backend")).toBeNull()
    })

    it("keeps a collapse recorded while its row is unmounted", async () => {
      const user = userEvent.setup()
      renderTable({ defaultExpanded: true })

      await waitFor(() =>
        expect(screen.getByText("Junior")).toBeInTheDocument()
      )

      // Close the grandchild, then close its parent so the grandchild unmounts.
      await toggleRow(user, "Backend Engineer")
      await waitFor(() => expect(screen.queryByText("Junior")).toBeNull())

      await toggleRow(user, "Backend")
      await waitFor(() =>
        expect(screen.queryByText("Backend Engineer")).toBeNull()
      )

      // Reopening the parent brings the row back visible but still closed: its
      // `false` outlived the unmount because it lives in the provider.
      await toggleRow(user, "Backend")
      await waitFor(() =>
        expect(screen.getByText("Backend Engineer")).toBeInTheDocument()
      )
      expect(screen.queryByText("Junior")).toBeNull()
    })

    it("still lets the user open a row the policy left closed", async () => {
      const user = userEvent.setup()
      renderTable({ defaultExpanded: false })

      await waitFor(() =>
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      )

      await toggleRow(user, "Engineering")

      await waitFor(() =>
        expect(screen.getByText("Backend")).toBeInTheDocument()
      )
    })
  })

  describe("children of policy-opened rows", () => {
    it("fetches an opened row's children exactly once", async () => {
      const byId = indexTree(TREE)
      const fetchChildren = vi.fn(({ item }: { item: Node }) => ({
        records: byId.get(item.id)?.children ?? [],
      }))

      renderTable({
        source: createSource(TREE, fetchChildren),
        defaultExpanded: true,
      })

      await waitFor(() =>
        expect(screen.getByText("Junior")).toBeInTheDocument()
      )
      await new Promise((resolve) => setTimeout(resolve, 50))

      // One call per parent (Engineering, Backend, Backend Engineer), no repeats.
      expect(fetchChildren).toHaveBeenCalledTimes(3)
    })

    it("does not re-request a parent whose children come back empty", async () => {
      // `itemsWithChildren` says yes but the fetch returns nothing — the case
      // where `children.length` stays 0 forever. Guarding the request on it
      // instead of on a ref re-fires on every render, and since each response
      // sets a fresh `children` array the effect re-runs itself in a loop.
      const empty: Node[] = [
        {
          id: "engineering",
          name: "Engineering",
          kind: "category",
          children: [],
        },
      ]
      const fetchChildren = vi.fn(() => ({ records: [] as Node[] }))
      const source = {
        ...createSource(empty, fetchChildren),
        itemsWithChildren: () => true,
      } as unknown as TestSource

      renderTable({ source, defaultExpanded: true })

      await waitFor(() =>
        expect(screen.getByText("Engineering")).toBeInTheDocument()
      )
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(fetchChildren).toHaveBeenCalledTimes(1)
    })
  })

  /**
   * The provider used to be swapped for a `Fragment` on flat tables; it is now
   * mounted unconditionally so it can take the policy as a prop.
   */
  describe("flat tables", () => {
    it("renders a table with no nesting at all", async () => {
      const flat = {
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
          fetchData: async () => ({
            records: [{ id: "a", name: "Alone", kind: "category" as const }],
          }),
        },
      } as unknown as TestSource

      renderTable({ source: flat })

      await waitFor(() => expect(screen.getByText("Alone")).toBeInTheDocument())
      expect(
        document.querySelector(".lucide-chevron-right, .lucide-chevron-down")
      ).toBeNull()
    })
  })
})
