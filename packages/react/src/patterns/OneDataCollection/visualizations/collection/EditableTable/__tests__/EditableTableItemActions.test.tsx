import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"
import { BaseFetchOptions, FiltersDefinition } from "@/hooks/datasource"
import { zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"
import { DataCollectionSource } from "../../../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SummariesDefinition } from "../../../../summary"
import { EditableTableCollection } from "../EditableTable"

vi.mock("../../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition
type Person = {
  id: number
  name: string
  email: string
}

const testData: Person[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
]

const testColumns = [
  { label: "name", render: (item: Person) => item.name },
  { label: "email", render: (item: Person) => item.email },
]

const createTestSource = (
  data: Person[] = testData,
  itemActions?: ItemActionsDefinition<Person>
): DataCollectionSource<
  Person,
  TestFilters,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  TestNavigationFilters,
  GroupingDefinition<Person>
> => ({
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
  dataAdapter: {
    fetchData: async ({ filters: _filters }: BaseFetchOptions<TestFilters>) => {
      return { records: data }
    },
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  itemActions,
})

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin = ``
  thresholds: readonly number[] = []

  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

const renderEditableTable = (
  itemActions?: ItemActionsDefinition<Person>,
  itemActionsOnHover?: boolean
) => {
  return render(
    <EditableTableCollection<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    >
      columns={testColumns}
      itemActionsOnHover={itemActionsOnHover}
      source={createTestSource(testData, itemActions)}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )
}

describe("EditableTable Item Actions", () => {
  it("renders primary action buttons in the action column", async () => {
    const itemActions: ItemActionsDefinition<Person> = () => [
      {
        label: "Edit",
        type: "primary",
        onClick: vi.fn(),
      },
    ]

    renderEditableTable(itemActions)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    // Each row should have an "Edit" button
    const editButtons = screen.getAllByRole("button", { name: /edit/i })
    expect(editButtons.length).toBeGreaterThanOrEqual(2) // one per row
  })

  it("paints the row actions on every row by default", async () => {
    const itemActions: ItemActionsDefinition<Person> = () => [
      { label: "Edit", type: "primary", onClick: vi.fn() },
    ]

    renderEditableTable(itemActions)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    const actions = screen
      .getAllByRole("button", { name: /edit/i })[0]
      .closest("aside")

    expect(actions).not.toHaveClass("opacity-0")
  })

  // Regression: revealing them on hover first faded a column's contents, which left the
  // column — and so its width — behind as an empty strip down the right edge. The overlay
  // the plain table uses is absolutely positioned, so it occupies none.
  it("gives the row actions no column of their own when itemActionsOnHover is set", async () => {
    const itemActions: ItemActionsDefinition<Person> = () => [
      { label: "Edit", type: "primary", onClick: vi.fn() },
    ]

    renderEditableTable(itemActions, true)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    const actions = screen.getAllByRole("button", { name: /edit/i })[0]

    expect(actions.closest("aside")?.parentElement).toHaveClass("absolute")
    // A cell would sit in the row's flow; the overlay hangs off a zero-width sticky td.
    expect(actions.closest("td")).not.toHaveAttribute("width")
  })

  // jsdom computes no Tailwind styles, so the assertion reaches the class the row's
  // `group` hover drives rather than computed visibility.
  it("reveals the row actions on hover when itemActionsOnHover is set", async () => {
    const itemActions: ItemActionsDefinition<Person> = () => [
      { label: "Edit", type: "primary", onClick: vi.fn() },
    ]

    renderEditableTable(itemActions, true)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    const overlay = screen
      .getAllByRole("button", { name: /edit/i })[0]
      .closest("aside")?.parentElement

    expect(overlay).toHaveClass("opacity-0", "group-hover:opacity-100")
    // A keyboard user never hovers, so the actions must surface on focus too.
    expect(overlay).toHaveClass("focus-within:opacity-100")
  })

  it("calls onClick handler when an action button is clicked", async () => {
    const user = userEvent.setup()
    const onClickMock = vi.fn()

    const itemActions: ItemActionsDefinition<Person> = () => [
      {
        label: "Edit",
        type: "primary",
        onClick: onClickMock,
      },
    ]

    renderEditableTable(itemActions)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    const editButtons = screen.getAllByRole("button", { name: /edit/i })
    await user.click(editButtons[0])

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it("renders icon-only buttons when hideLabel is true", async () => {
    const itemActions: ItemActionsDefinition<Person> = () => [
      {
        label: "Edit",
        type: "primary",
        onClick: vi.fn(),
        hideLabel: true,
      },
    ]

    renderEditableTable(itemActions)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    // With hideLabel, the button label should not be visible as text
    // but should still be accessible via the button's accessible name
    const editButtons = screen.getAllByRole("button", { name: /edit/i })
    expect(editButtons.length).toBeGreaterThanOrEqual(2)

    // The label text should be visually hidden (sr-only), not rendered as visible text
    // F0Button with hideLabel renders the label in a tooltip / sr-only span
    const firstButton = editButtons[0]

    // The label should be visually hidden via sr-only
    const hiddenLabel = firstButton.querySelector(".sr-only")
    expect(hiddenLabel).toBeInTheDocument()
    expect(hiddenLabel).toHaveTextContent("Edit")
  })

  it("renders dropdown menu for secondary actions", async () => {
    const itemActions: ItemActionsDefinition<Person> = () => [
      {
        label: "Edit",
        type: "primary",
        onClick: vi.fn(),
      },
      {
        label: "Delete",
        type: "secondary",
        onClick: vi.fn(),
      },
    ]

    renderEditableTable(itemActions)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })

    // Secondary actions go into the dropdown menu trigger
    const dropdownButtons = screen.getAllByRole("button", { name: /actions/i })
    expect(dropdownButtons.length).toBeGreaterThanOrEqual(1)
  })
})
