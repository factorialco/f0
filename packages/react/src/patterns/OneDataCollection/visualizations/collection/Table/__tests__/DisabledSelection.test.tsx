import { waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type {
  BaseFetchOptions,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"

import { FiltersDefinition } from "@/hooks/datasource"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"

import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../index"

vi.mock("../../../property", () => ({
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

type Node = { id: number; name: string; kind: "role" | "level" }

const nodes: Node[] = [
  { id: 1, name: "Engineer", kind: "role" },
  { id: 2, name: "Designer", kind: "role" },
  { id: 3, name: "Engineer L2", kind: "level" },
]

const columns = [{ label: "name", render: (item: Node) => item.name }]

type Source = DataCollectionSource<
  Node,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Node>,
  NavigationFiltersDefinition,
  GroupingDefinition<Node>
>

const createSource = ({
  disableSelectAll = false,
}: { disableSelectAll?: boolean } = {}): Source => ({
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
  selectable: (item: Node) => item.id,
  selectionDisabled: (item: Node) => item.kind === "level",
  disableSelectAll,
  dataAdapter: {
    fetchData: async (_options: BaseFetchOptions<FiltersDefinition>) => ({
      records: nodes,
    }),
  },
})

const renderTable = (source: Source) =>
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
      source={source}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )

describe("Table selectionDisabled", () => {
  it("disables the blocked row's checkbox and leaves the others alone", async () => {
    renderTable(createSource())

    await waitFor(() =>
      expect(screen.getByTitle("Select 3")).toBeInTheDocument()
    )

    expect(screen.getByTitle("Select 3")).toBeDisabled()
    expect(screen.getByTitle("Select 1")).toBeEnabled()
    expect(screen.getByTitle("Select 2")).toBeEnabled()
  })

  it("does not select a disabled row", async () => {
    const user = userEvent.setup()
    renderTable(createSource())

    await waitFor(() =>
      expect(screen.getByTitle("Select 3")).toBeInTheDocument()
    )

    await user.click(screen.getByTitle("Select 3"))

    expect(screen.getByTitle("Select 3")).not.toBeChecked()
  })

  it("select-all checks every enabled row, skips the disabled one, and still reads as fully checked", async () => {
    const user = userEvent.setup()
    renderTable(createSource())

    await waitFor(() =>
      expect(screen.getByTitle("Select 1")).toBeInTheDocument()
    )

    const headerCheckbox = screen.getAllByRole("checkbox")[0]
    await user.click(headerCheckbox)

    await waitFor(() => {
      expect(screen.getByTitle("Select 1")).toBeChecked()
      expect(screen.getByTitle("Select 2")).toBeChecked()
    })

    expect(screen.getByTitle("Select 3")).not.toBeChecked()
    // Not "mixed": the disabled row is out of the count, so every row the user
    // can tick is ticked.
    expect(headerCheckbox).toBeChecked()
  })

  it("disableSelectAll drops the header checkbox and keeps the row ones", async () => {
    renderTable(createSource({ disableSelectAll: true }))

    await waitFor(() =>
      expect(screen.getByTitle("Select 1")).toBeInTheDocument()
    )

    // One per row, none for the header.
    expect(screen.getAllByRole("checkbox")).toHaveLength(nodes.length)
  })
})
