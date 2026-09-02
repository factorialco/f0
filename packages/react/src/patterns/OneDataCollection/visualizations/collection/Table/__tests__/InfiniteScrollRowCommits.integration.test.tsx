import { screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

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

const PER_PAGE = 3
const people: Person[] = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  name: `Person ${index + 1}`,
}))

/**
 * Renders per row, counted where the row's own body runs. A row that skips its
 * render does not call its columns' renderers.
 */
const renderCounts = new Map<number, number>()

const columns = [
  {
    label: "name",
    render: (item: Person) => {
      renderCounts.set(item.id, (renderCounts.get(item.id) ?? 0) + 1)
      return item.name
    },
  },
]

// The real observer never fires in jsdom, and the global stub in the test setup
// only records the call. This one keeps the callback so the test can bring the
// sentinel into view on demand — the only way to reach `loadMore`, which the
// table owns internally.
let intersect: (() => void) | undefined

beforeEach(() => {
  renderCounts.clear()
  intersect = undefined
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(private readonly callback: IntersectionObserverCallback) {}
      observe(target: Element) {
        intersect = () =>
          this.callback(
            [{ isIntersecting: true, target } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver
          )
      }
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return []
      }
    }
  )
})

const Harness = () => {
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
      selectable: (item: Person) => item.id,
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: async ({
          pagination,
        }: {
          pagination?: { cursor?: string | null }
        }) => {
          const offset = Number(pagination?.cursor ?? 0) || 0
          const nextCursor = offset + PER_PAGE
          return {
            records: people.slice(offset, nextCursor),
            total: people.length,
            perPage: PER_PAGE,
            cursor: String(nextCursor),
            hasMore: nextCursor < people.length,
          }
        },
      },
    },
    []
  )

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
    />
  )
}

const loadNextPage = async (lastRowOfNextPage: string) => {
  await waitFor(() => expect(intersect).toBeDefined())
  intersect?.()
  await waitFor(() =>
    expect(screen.getByText(lastRowOfNextPage)).toBeInTheDocument()
  )
}

describe("infinite scroll — rows already on screen", () => {
  it("does not re-render them when the next page is appended", async () => {
    render(<Harness />)

    await waitFor(() =>
      expect(screen.getByText("Person 3")).toBeInTheDocument()
    )
    const before = new Map(renderCounts)

    await loadNextPage("Person 6")

    for (const id of [1, 2, 3]) {
      expect(renderCounts.get(id)).toBe(before.get(id))
    }
  })

  it("keeps the cost of a page flat as pages accumulate", async () => {
    render(<Harness />)

    await waitFor(() =>
      expect(screen.getByText("Person 3")).toBeInTheDocument()
    )

    const beforeSecond = [...renderCounts.values()].reduce((a, b) => a + b, 0)
    await loadNextPage("Person 6")
    const afterSecond = [...renderCounts.values()].reduce((a, b) => a + b, 0)

    await loadNextPage("Person 9")
    const afterThird = [...renderCounts.values()].reduce((a, b) => a + b, 0)

    // The third page costs no more renders than the second, even though there
    // are twice as many rows on screen by then.
    expect(afterThird - afterSecond).toBeLessThanOrEqual(
      afterSecond - beforeSecond
    )
  })
})
