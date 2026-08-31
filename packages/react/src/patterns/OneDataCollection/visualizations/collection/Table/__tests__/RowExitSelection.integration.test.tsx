import { screen } from "@testing-library/react"
import { PresenceContext } from "motion/react"
import { describe, expect, it, vi } from "vitest"

import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"

import { TextCell } from "@/ui/value-display/types/text"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { TableContext } from "@/experimental/OneTable/utils/TableContext"
import { zeroRender as render } from "@/testing/test-utils"

import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { Row } from "../components/Row"
import type { TableColumnDefinition } from "../types"

vi.mock("../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

type Person = { id: number; name: string }

const ana: Person = { id: 1, name: "Ana" }

const columns: ReadonlyArray<
  TableColumnDefinition<Person, SortingsDefinition, SummariesDefinition>
> = [{ label: "name", render: (item: Person) => item.name }]

const source = {
  selectable: (item: Person) => item.id,
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
  dataAdapter: { fetchData: async () => ({ records: [ana] }) },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
} as unknown as DataCollectionSource<
  Person,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  NavigationFiltersDefinition,
  GroupingDefinition<Person>
>

type Presence = React.ContextType<typeof PresenceContext>

/**
 * The value AnimatePresence provides to a child it is animating out. Supplying
 * it directly pins the row in the mounted-but-exiting state a real browser
 * passes through — jsdom completes exit animations within a frame, so the
 * window can't be held open through a real AnimatePresence.
 */
const presence = (isPresent: boolean): NonNullable<Presence> => ({
  id: "test",
  isPresent,
  register: () => () => {},
  initial: false,
  custom: undefined,
  onExitComplete: undefined,
})

const rowUnder = (
  isPresent: boolean,
  registerSelectable: (id: number | string, item: Person) => void,
  unregisterSelectable: (id: number | string) => void
) => (
  <TableContext.Provider
    value={{
      isScrolled: false,
      setIsScrolled: () => {},
      isScrolledRight: false,
      setIsScrolledRight: () => {},
    }}
  >
    <PresenceContext.Provider value={presence(isPresent)}>
      <table>
        <tbody>
          <Row<
            Person,
            FiltersDefinition,
            SortingsDefinition,
            SummariesDefinition,
            ItemActionsDefinition<Person>,
            NavigationFiltersDefinition,
            GroupingDefinition<Person>
          >
            source={source}
            item={ana}
            index={0}
            groupIndex={0}
            onCheckedChange={vi.fn()}
            selectedItems={new Map()}
            columns={columns}
            frozenColumnsLeft={0}
            checkColumnWidth={40}
            tableWithChildren={false}
            headerGroups={null}
            registerSelectable={registerSelectable}
            unregisterSelectable={unregisterSelectable}
          />
        </tbody>
      </table>
    </PresenceContext.Provider>
  </TableContext.Provider>
)

describe("selection registry during row exit animations", () => {
  it("registers while present", () => {
    const registerSelectable = vi.fn()
    const unregisterSelectable = vi.fn()
    render(rowUnder(true, registerSelectable, unregisterSelectable))

    expect(screen.getByText("Ana")).toBeInTheDocument()
    expect(registerSelectable).toHaveBeenCalledWith(1, ana)
    expect(unregisterSelectable).not.toHaveBeenCalled()
  })

  it("unregisters the moment the exit animation starts, not on unmount", () => {
    const registerSelectable = vi.fn()
    const unregisterSelectable = vi.fn()
    const { rerender } = render(
      rowUnder(true, registerSelectable, unregisterSelectable)
    )

    // AnimatePresence flips the child's presence to false when it starts
    // animating it out; the row stays mounted until the animation ends.
    rerender(rowUnder(false, registerSelectable, unregisterSelectable))

    // Still mounted — mid-exit — yet no longer selectable. Before the fix the
    // unregister only ran on unmount, so a select-all clicked during the fade
    // still reached this row.
    expect(screen.getByText("Ana")).toBeInTheDocument()
    expect(unregisterSelectable).toHaveBeenCalledWith(1)

    // And it must not have re-registered afterwards.
    const lastRegister = registerSelectable.mock.invocationCallOrder.at(-1) ?? 0
    const lastUnregister =
      unregisterSelectable.mock.invocationCallOrder.at(-1) ?? 0
    expect(lastUnregister).toBeGreaterThan(lastRegister)
  })
})
