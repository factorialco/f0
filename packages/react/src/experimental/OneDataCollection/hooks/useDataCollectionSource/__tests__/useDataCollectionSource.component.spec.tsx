import {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { memo, useState } from "react"
import { describe, expect, it, vi } from "vitest"
import { useDataCollectionSource } from ".."
import type { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type { SummariesDefinition } from "../../../summary"
import type { DataCollectionSource } from "../types"

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

type Item = { id: number; name: string }

type SourceT = DataCollectionSource<
  Item,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Item>,
  NavigationFiltersDefinition,
  GroupingDefinition<Item>
>

const Child = memo(
  ({
    source,
    onRender,
  }: {
    source: SourceT
    onRender: (s: SourceT) => void
  }) => {
    onRender(source)
    return <div data-testid="child" />
  }
)
Child.displayName = "Child"

function Parent({ onRender }: { onRender: (s: SourceT) => void }) {
  const [tick, setTick] = useState(0)
  const source = useDataCollectionSource<
    Item,
    FiltersDefinition,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Item>,
    NavigationFiltersDefinition,
    GroupingDefinition<Item>
  >({
    dataAdapter: { fetchData: async () => ({ records: [] }) },
    filters: { name: { type: "search", label: "Name" } },
    lanes: [{ id: "1", filters: { name: "a" } }],
  })

  return (
    <div>
      <button onClick={() => setTick((t) => t + 1)}>rerender {tick}</button>
      <Child source={source} onRender={onRender} />
    </div>
  )
}

describe("useDataCollectionSource (component integration)", () => {
  it("does not re-render child when hook inputs remain unchanged", async () => {
    const onRender = vi.fn()
    const user = userEvent.setup()

    render(
      <Wrapper>
        <Parent onRender={onRender} />
      </Wrapper>
    )

    // Initial render of Child
    expect(onRender).toHaveBeenCalledTimes(1)

    // Trigger a parent re-render without changing hook inputs
    const button = screen.getByRole("button", { name: /rerender/i })
    await user.click(button)

    // Desired behavior: source reference should be stable, child should not re-render
    expect(onRender).toHaveBeenCalledTimes(1)
  })
})
