import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"
import type {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"
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
]

// Hoisted, so a consumer re-render changes no column identity — the case where
// the row's memo has nothing else to compare on.
const columns = [{ label: "name", render: (item: Person) => item.name }]

/**
 * The consumer owns a piece of state that `selectionDisabled` closes over.
 * `Row` calls `source.selectionDisabled(item)` during render, so flipping it
 * has to reach the rendered checkbox.
 */
const Harness = () => {
  const [canEdit, setCanEdit] = useState(false)

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
      selectionDisabled: () => !canEdit,
      dataAdapter: {
        fetchData: async () => people,
      },
    },
    [canEdit]
  )

  return (
    <>
      <button onClick={() => setCanEdit(true)}>grant edit</button>
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

const rowCheckboxes = () =>
  Array.from(
    document.querySelectorAll<HTMLElement>(
      'tbody [role="checkbox"], tbody input[type="checkbox"]'
    )
  )

describe("a source callback read during render", () => {
  it("reaches the rows when the consumer's state behind it changes", async () => {
    const user = userEvent.setup()
    render(<Harness />)

    await waitFor(() => expect(screen.getByText("Ana")).toBeInTheDocument())
    await waitFor(() => expect(rowCheckboxes()).toHaveLength(2))
    expect(rowCheckboxes().every((box) => box.hasAttribute("disabled"))).toBe(
      true
    )

    await user.click(screen.getByText("grant edit"))

    await waitFor(() =>
      expect(rowCheckboxes().some((box) => box.hasAttribute("disabled"))).toBe(
        false
      )
    )
  })
})
