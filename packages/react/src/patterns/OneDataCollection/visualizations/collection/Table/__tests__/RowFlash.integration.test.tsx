import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"

import { TextCell } from "@/ui/value-display/types/text"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { zeroRender as render } from "@/testing/test-utils"

import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../index"

vi.mock("../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

type Person = { id: number; name: string }

const people: Person[] = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "Carla" },
]

const columns = [{ label: "name", render: (item: Person) => item.name }]

/**
 * Drives the real `useDataCollectionSource` with an async adapter, so the
 * render ordering that the hook-level unit tests can't reproduce (query state
 * updates immediately, `isLoading` only in a later effect) is exercised end to
 * end.
 */
const Harness = ({ extra = [] }: { extra?: Person[] }) => {
  const source = useDataCollectionSource<
    Person,
    FiltersDefinition,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Person>,
    NavigationFiltersDefinition,
    GroupingDefinition<Person>
  >(
    {
      search: { enabled: true, sync: false, debounceTime: 0 },
      dataAdapter: {
        fetchData: async ({ search }: { search?: string }) => {
          await new Promise((resolve) => setTimeout(resolve, 10))
          const term = (search ?? "").toLowerCase()
          const all = [...people, ...extra]
          return {
            records: term
              ? all.filter((p) => p.name.toLowerCase().includes(term))
              : all,
          }
        },
      },
    },
    [extra]
  )

  return (
    <>
      <input
        aria-label="search"
        value={source.currentSearch ?? ""}
        onChange={(e) => source.setCurrentSearch(e.target.value || undefined)}
      />
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
      />
    </>
  )
}

const flashingRows = () =>
  document.querySelectorAll("tr.animate-row-flash").length

describe("row flash — search round trip", () => {
  it("does not flash the rows that come back after clearing a search that matched nothing", async () => {
    const user = userEvent.setup()
    render(<Harness />)

    await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())

    const search = screen.getByLabelText("search")
    await user.type(search, "zzz")
    await waitFor(() =>
      expect(screen.queryByText("Ana")).not.toBeInTheDocument()
    )

    await user.clear(search)
    await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())

    expect(flashingRows()).toBe(0)
  })

  it("does not flash the rows hidden by a partial search when it is cleared", async () => {
    const user = userEvent.setup()
    render(<Harness />)

    await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())

    const search = screen.getByLabelText("search")
    await user.type(search, "ana")
    await waitFor(() =>
      expect(screen.queryByText("Bruno")).not.toBeInTheDocument()
    )

    await user.clear(search)
    await waitFor(() => expect(screen.getByText("Bruno")).toBeInTheDocument())

    expect(flashingRows()).toBe(0)
  })

  it("still flashes a row that is genuinely inserted", async () => {
    const { rerender } = render(<Harness />)

    await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())

    rerender(<Harness extra={[{ id: 4, name: "Diego" }]} />)
    await waitFor(() => expect(screen.getByText("Diego")).toBeInTheDocument())

    expect(flashingRows()).toBe(1)
  })
})
