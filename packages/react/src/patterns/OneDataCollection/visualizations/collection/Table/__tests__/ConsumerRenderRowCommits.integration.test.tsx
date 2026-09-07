import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
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
 * The consumer owns state the table knows nothing about, and rebuilds its
 * source definition inline on every render — which is what every real consumer
 * does, since the definition is written as an object literal at the call site.
 */
const Harness = () => {
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

describe("a consumer render that has nothing to do with the rows", () => {
  it("does not re-render them", async () => {
    const user = userEvent.setup()
    render(<Harness />)

    await waitFor(() => expect(screen.getByText("Carla")).toBeInTheDocument())
    const before = new Map(renderCounts)

    await user.click(screen.getByText("tick"))
    await waitFor(() =>
      expect(screen.getByText("ticks: 1")).toBeInTheDocument()
    )

    for (const id of [1, 2, 3]) {
      expect(renderCounts.get(id)).toBe(before.get(id))
    }
  })
})
