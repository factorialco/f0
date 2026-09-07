import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import type {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"
import { TableCollection } from ".."
import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"

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

beforeEach(() => renderCounts.clear())

/**
 * State the table knows nothing about, and a definition rebuilt inline every
 * render — an object literal at the call site, as every real consumer writes it.
 */
const Harness = ({ memoizeDefinition }: { memoizeDefinition: boolean }) => {
  const [tick, setTick] = useState(0)

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
      memoizeDefinition,
      selectable: (item: Person) => item.id,
      itemUrl: (item: Person) => `/people/${item.id}`,
      dataAdapter: {
        fetchData: async () => people,
      },
    },
    []
  )

  return (
    <>
      <button onClick={() => setTick(tick + 1)}>tick</button>
      <span>ticks: {tick}</span>
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

const tickAndCount = async (memoizeDefinition: boolean) => {
  const user = userEvent.setup()
  render(<Harness memoizeDefinition={memoizeDefinition} />)

  await waitFor(() => expect(screen.getByText("Carla")).toBeInTheDocument())
  const before = new Map(renderCounts)

  await user.click(screen.getByText("tick"))
  await waitFor(() => expect(screen.getByText("ticks: 1")).toBeInTheDocument())

  return [1, 2, 3].map(
    (id) => (renderCounts.get(id) ?? 0) - (before.get(id) ?? 0)
  )
}

describe("a consumer render that has nothing to do with the rows", () => {
  it("does not re-render them, once the consumer opts in", async () => {
    expect(await tickAndCount(true)).toEqual([0, 0, 0])
  })

  it("still re-renders them for a consumer that has not", async () => {
    // A consumer that never asked keeps reading its callbacks fresh.
    expect(await tickAndCount(false)).toEqual([1, 1, 1])
  })
})
