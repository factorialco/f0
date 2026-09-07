import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
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

// Hoisted: a consumer render changes no column identity, so the row memo has
// nothing but the source to compare on.
const columns = [{ label: "name", render: (item: Person) => item.name }]

const onSelectItems = vi.fn()

/**
 * `lockedIds` is consumer state that `selectionDisabled` closes over. Rows are
 * memoized and the registry they populate is filled from an effect, so this is
 * the case where "select all" has to keep up with a definition that changed
 * without any row's own data changing.
 *
 * `deps` is a parameter because both answers matter: declared, the definition
 * is rebuilt and the rows re-register; undeclared, the registry goes stale and
 * something else has to catch it.
 */
const Harness = ({ declareDeps }: { declareDeps: boolean }) => {
  const [lockedIds, setLockedIds] = useState<number[]>([])

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
      selectionDisabled: (item: Person) => lockedIds.includes(item.id),
      dataAdapter: {
        fetchData: async () => people,
      },
    },
    declareDeps ? [lockedIds] : []
  )

  return (
    <>
      <button onClick={() => setLockedIds([2])}>lock Bruno</button>
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
        onSelectItems={onSelectItems}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    </>
  )
}

const headerCheckbox = () =>
  within(document.querySelector("thead") as HTMLElement).getByRole("checkbox")

const selectedIds = () => {
  const last = onSelectItems.mock.calls.at(-1)?.[0] as
    | { itemsStatus?: { item: Person; checked: boolean }[] }
    | undefined
  return (last?.itemsStatus ?? [])
    .filter((entry) => entry.checked)
    .map((entry) => entry.item.id)
    .sort()
}

const lockBrunoThenSelectAll = async (declareDeps: boolean) => {
  const user = userEvent.setup()
  onSelectItems.mockClear()
  render(<Harness declareDeps={declareDeps} />)

  await waitFor(() => expect(screen.getByText("Carla")).toBeInTheDocument())
  await user.click(screen.getByText("lock Bruno"))
  await user.click(headerCheckbox())
}

describe("select all, after the consumer locks a row", () => {
  it("skips the row that just became unselectable", async () => {
    await lockBrunoThenSelectAll(true)

    await waitFor(() => expect(selectedIds()).toEqual([1, 3]))
  })

  it("skips it even when the registry is stale", async () => {
    // The definition is pinned to an empty `deps`, so the rows never re-register
    // and the registry still lists Bruno as selectable. `collectSelectableEntries`
    // re-filters what the registry hands it through the live `selectionDisabled`,
    // so the registry only decides which rows exist, never which may be picked.
    await lockBrunoThenSelectAll(false)

    await waitFor(() => expect(selectedIds()).toEqual([1, 3]))
  })
})
