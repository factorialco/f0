import { act, fireEvent, screen, waitFor } from "@testing-library/react"
import { MotionGlobalConfig } from "motion"
import { useState } from "react"
import { afterAll, beforeAll, describe, expect, test } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { zeroRender as render } from "@/testing/test-utils"

import type { OnSelectItemsCallback } from "@/hooks/datasource"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"

/**
 * Rows that leave a flat table's dataset must unmount on the same commit that
 * renders the new dataset. Wrapping them in `AnimatePresence` with an `exit`
 * variant kept them in the DOM — and in the selection registry — for as long as
 * the exit transition ran, so a deleted row still answered queries and still
 * counted towards select-all.
 */

type Person = { id: string; name: string }

const people: Person[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
]

const columns = [{ label: "Name", render: (item: Person) => item.name }]

const Collection = ({
  selectable,
  onSelectItems,
}: {
  selectable?: boolean
  onSelectItems?: OnSelectItemsCallback<Person, FiltersDefinition>
}) => {
  const [records, setRecords] = useState(people)

  const source = useDataCollectionSource<Person>(
    {
      ...(selectable ? { selectable: (item: Person) => item.id } : {}),
      dataAdapter: { fetchData: async () => ({ records }) },
    },
    [records]
  )

  return (
    <I18nProvider translations={defaultTranslations}>
      <button onClick={() => setRecords((r) => r.slice(1))}>Delete John</button>
      <button
        onClick={() =>
          setRecords((r) => [...r, { id: "3", name: "Alice Brown" }])
        }
      >
        Add Alice
      </button>
      <OneDataCollection
        source={source}
        visualizations={[{ type: "table", options: { columns } }]}
        {...(onSelectItems ? { onSelectItems } : {})}
      />
    </I18nProvider>
  )
}

/**
 * Removes John from the dataset and flushes the refetch. Uses `fireEvent` and a
 * bare microtask flush rather than `userEvent`/`waitFor`: both of those advance
 * real time, which would let an exit transition finish and turn the assertions
 * below into a tautology.
 */
const deleteJohn = async () => {
  fireEvent.click(screen.getByRole("button", { name: "Delete John" }))
  await act(async () => {})
}

describe("OneDataCollection flat table row removal", () => {
  // `test-utils` sets `MotionGlobalConfig.skipAnimations = true` for the whole
  // suite, which resolves every exit transition instantly and would hide the
  // regression these tests guard. Consumers run with animations on, so this
  // file opts back into real motion timing to match what they see.
  beforeAll(() => {
    MotionGlobalConfig.skipAnimations = false
  })
  afterAll(() => {
    MotionGlobalConfig.skipAnimations = true
  })

  test("unmounts a row as soon as it leaves the dataset", async () => {
    render(<Collection />)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
    })

    await deleteJohn()

    expect(screen.queryByText("John Doe")).not.toBeInTheDocument()
    expect(screen.getAllByRole("row")).toHaveLength(2) // header + Jane
  })

  // Dropping the exit transition must not cost us the feature #4709 added:
  // a genuinely-inserted row still plays the "flash on add" highlight.
  test("still flashes a newly-inserted row", async () => {
    render(<Collection />)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole("button", { name: "Add Alice" }))
    await act(async () => {})

    const addedRow = screen.getByText("Alice Brown").closest("tr")
    expect(addedRow).toHaveClass("animate-row-flash")
  })
})
