import { waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import type {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"
import { TableCollection } from ".."
import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { ExpandedContentContext } from "../types"

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
  children?: Node[]
}

/** A parent with two leaves, plus a standalone leaf. */
const TREE: Node[] = [
  {
    id: "alice",
    name: "Alice",
    children: [
      { id: "mon", name: "Monday" },
      { id: "tue", name: "Tuesday" },
    ],
  },
  { id: "bob", name: "Bob" },
]

const indexTree = (nodes: Node[], into = new Map<string, Node>()) => {
  nodes.forEach((node) => {
    into.set(node.id, node)
    if (node.children) {
      indexTree(node.children, into)
    }
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
  overrides: Partial<Record<string, unknown>> = {}
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
    fetchChildren: ({ item }: { item: Node }) => ({
      records: byId.get(item.id)?.children ?? [],
    }),
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
    ...overrides,
  } as unknown as TestSource
}

const PANEL_TEXT = "panel for"

const defaultRenderExpandedContent = (item: Node) => (
  <div>
    {PANEL_TEXT} {item.name}
  </div>
)

const renderTable = (
  props: {
    source?: TestSource
    renderExpandedContent?: (
      item: Node,
      context: ExpandedContentContext
    ) => React.ReactNode
    onExpandedContentChange?: (item: Node, expanded: boolean) => void
    defaultExpanded?: boolean
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
      renderExpandedContent={
        props.renderExpandedContent ?? defaultRenderExpandedContent
      }
      onExpandedContentChange={props.onExpandedContentChange}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )

const expanderOf = (name: string) => {
  const row = screen.getByText(name).closest("tr")
  expect(row).not.toBeNull()
  return row?.querySelector("button[aria-expanded]") ?? null
}

describe("TableCollection renderExpandedContent", () => {
  it("gives a leaf row an expander", async () => {
    renderTable()

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())

    expect(expanderOf("Bob")).not.toBeNull()
  })

  it("renders no expander when the renderer returns undefined", async () => {
    renderTable({ renderExpandedContent: () => undefined })

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())

    expect(expanderOf("Bob")).toBeNull()
  })

  it("reveals the panel beneath the row, and hides it again", async () => {
    const user = userEvent.setup()
    renderTable()

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())
    expect(screen.queryByText(/panel for Bob/)).toBeNull()

    await user.click(expanderOf("Bob") as Element)
    expect(screen.getByText(/panel for Bob/)).toBeInTheDocument()

    await user.click(expanderOf("Bob") as Element)
    expect(screen.queryByText(/panel for Bob/)).toBeNull()
  })

  it("puts the panel in a row of its own, spanning every column", async () => {
    const user = userEvent.setup()
    renderTable()

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())
    await user.click(expanderOf("Bob") as Element)

    const panelCell = screen
      .getByText(/panel for Bob/)
      .closest("td") as HTMLTableCellElement
    const panelRow = panelCell.closest("tr") as HTMLTableRowElement

    expect(panelRow).toHaveAttribute("data-expanded-content", "true")
    // The one cell in the row, and its span is clamped to the real column
    // count rather than computed — see ExpandedContentRow.
    expect(panelRow.children).toHaveLength(1)
    expect(panelCell.colSpan).toBeGreaterThan(
      screen.getAllByRole("columnheader").length
    )
  })

  it("never gives a row with children an expanded-content panel", async () => {
    const user = userEvent.setup()
    renderTable()

    await waitFor(() => expect(screen.getByText("Alice")).toBeInTheDocument())

    // Alice's chevron belongs to her children, so it reveals them and never a
    // panel.
    await user.click(expanderOf("Alice") as Element)

    await waitFor(() => expect(screen.getByText("Monday")).toBeInTheDocument())
    expect(screen.queryByText(/panel for Alice/)).toBeNull()
  })

  it("expands a nested leaf without collapsing its parent", async () => {
    const user = userEvent.setup()
    renderTable()

    await waitFor(() => expect(screen.getByText("Alice")).toBeInTheDocument())
    await user.click(expanderOf("Alice") as Element)
    await waitFor(() => expect(screen.getByText("Monday")).toBeInTheDocument())

    await user.click(expanderOf("Monday") as Element)

    expect(screen.getByText(/panel for Monday/)).toBeInTheDocument()
    // The parent is still open: its children are still on screen.
    expect(screen.getByText("Monday")).toBeInTheDocument()
    expect(screen.getByText("Tuesday")).toBeInTheDocument()
  })

  it("tracks the panel with aria-expanded, and aria-controls only while open", async () => {
    const user = userEvent.setup()
    renderTable()

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())

    const collapsed = expanderOf("Bob") as HTMLElement
    expect(collapsed).toHaveAttribute("aria-expanded", "false")
    expect(collapsed.getAttribute("aria-controls")).toBeNull()

    await user.click(collapsed)

    const expanded = expanderOf("Bob") as HTMLElement
    expect(expanded).toHaveAttribute("aria-expanded", "true")
    const controls = expanded.getAttribute("aria-controls")
    expect(controls).not.toBeNull()
    expect(document.getElementById(controls as string)).not.toBeNull()
  })

  it("opens from the keyboard", async () => {
    const user = userEvent.setup()
    renderTable()

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())

    const expander = expanderOf("Bob") as HTMLElement
    expander.focus()
    await user.keyboard("{Enter}")

    expect(screen.getByText(/panel for Bob/)).toBeInTheDocument()
  })

  it("reports the item, never the internal key, when a panel toggles", async () => {
    const user = userEvent.setup()
    const onExpandedContentChange = vi.fn()
    renderTable({ onExpandedContentChange })

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())
    await user.click(expanderOf("Bob") as Element)

    expect(onExpandedContentChange).toHaveBeenCalledWith(
      expect.objectContaining({ id: "bob" }),
      true
    )
  })

  it("closes the panel when its content asks to collapse", async () => {
    const user = userEvent.setup()
    renderTable({
      renderExpandedContent: (item, { collapse }) => (
        <button type="button" onClick={collapse}>
          close {item.name}
        </button>
      ),
    })

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())
    await user.click(expanderOf("Bob") as Element)

    const closeButton = screen.getByText("close Bob")
    await user.click(closeButton)

    expect(screen.queryByText("close Bob")).toBeNull()
    // Focus went back to the expander rather than falling to <body>.
    expect(document.activeElement).toBe(expanderOf("Bob"))
  })

  it("hands the renderer the row's depth", async () => {
    const user = userEvent.setup()
    const depths: number[] = []
    renderTable({
      renderExpandedContent: (item, { depth }) => {
        depths.push(depth)
        return <div>panel for {item.name}</div>
      },
    })

    await waitFor(() => expect(screen.getByText("Alice")).toBeInTheDocument())
    await user.click(expanderOf("Alice") as Element)
    await waitFor(() => expect(screen.getByText("Monday")).toBeInTheDocument())

    // Bob is a root leaf, Monday is a child of Alice.
    expect(depths).toContain(0)
    expect(depths).toContain(1)
  })

  it("is not opened by defaultExpanded, which speaks for the tree", async () => {
    renderTable({ defaultExpanded: true })

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())

    expect(screen.queryByText(/panel for Bob/)).toBeNull()
    expect(expanderOf("Bob")).toHaveAttribute("aria-expanded", "false")
  })

  it("ignores a record with no id", async () => {
    const tree = [{ name: "Anonymous" }] as unknown as Node[]
    renderTable({ source: createSource(tree) })

    await waitFor(() =>
      expect(screen.getByText("Anonymous")).toBeInTheDocument()
    )

    expect(expanderOf("Anonymous")).toBeNull()
  })

  it("keeps the panel out of the selection registry", async () => {
    const user = userEvent.setup()
    const source = createSource(TREE, {
      selectable: (item: Node) => item.id,
    })
    renderTable({ source })

    await waitFor(() => expect(screen.getByText("Bob")).toBeInTheDocument())

    const before = document.querySelectorAll("input[type='checkbox']").length
    await user.click(expanderOf("Bob") as Element)

    expect(screen.getByText(/panel for Bob/)).toBeInTheDocument()
    expect(document.querySelectorAll("input[type='checkbox']")).toHaveLength(
      before
    )
  })

  describe("in a grouped table", () => {
    type Grouped = Node & { team: string }

    const GROUPED: Grouped[] = [
      { id: "ana", name: "Ana", team: "Design" },
      { id: "ben", name: "Ben", team: "Engineering" },
    ]

    const createGroupedSource = () =>
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
        dataAdapter: {
          fetchData: async () => ({ records: GROUPED }),
        },
        grouping: {
          mandatory: true,
          collapsible: true,
          defaultOpenGroups: true,
          groupBy: {
            team: {
              name: "Team",
              label: (groupId: string) => groupId,
              itemCount: () => 1,
            },
          },
        },
        currentGrouping: { field: "team", order: "asc" },
        setCurrentGrouping: vi.fn(),
      }) as unknown as TestSource

    it("opens a panel for a row inside a group", async () => {
      const user = userEvent.setup()
      renderTable({ source: createGroupedSource() })

      await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())

      await user.click(expanderOf("Ana") as Element)

      expect(screen.getByText(/panel for Ana/)).toBeInTheDocument()
    })

    it("keeps the first row of each group independent", async () => {
      const user = userEvent.setup()
      renderTable({ source: createGroupedSource() })

      await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())

      // Both are index 0, each in its own group: one key must not open both.
      await user.click(expanderOf("Ana") as Element)

      expect(screen.getByText(/panel for Ana/)).toBeInTheDocument()
      expect(screen.queryByText(/panel for Ben/)).toBeNull()
    })
  })
})
