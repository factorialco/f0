import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"

import { TextCell } from "@/ui/value-display/types/text"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { BaseFetchOptions, FiltersDefinition } from "@/hooks/datasource"
import { zeroRender as render } from "@/testing/test-utils"

import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../../Table/index"
import { AddRowProvider } from "../context/AddRowContext"

vi.mock("../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

type MockDropdownItem = {
  value: string
  label: string
  items?: MockDropdownItem[]
}

type MockDropdownProps = {
  items: MockDropdownItem[] | { items: MockDropdownItem[] }[]
  onClick: (value: string, item: MockDropdownItem) => void
  mode?: string
  trigger?: string
  disabled?: boolean
  value?: string
}

vi.mock("@/components/F0ButtonDropdown", () => ({
  F0ButtonDropdown: ({
    items,
    onClick,
    mode,
    trigger,
    ...props
  }: MockDropdownProps) => {
    const flatItems = Array.isArray(items)
      ? items.flatMap((g) => ("items" in g ? g.items : [g]))
      : []
    if (mode === "dropdown") {
      return (
        <div data-testid="f0-button-dropdown-mock">
          <button
            aria-label={trigger ?? flatItems[0]?.label}
            disabled={props.disabled}
          >
            {trigger ?? flatItems[0]?.label}
          </button>
          {flatItems.map((item) => (
            <button
              key={item.value}
              data-testid={`dropdown-item-${item.value}`}
              onClick={() => onClick(item.value, item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )
    }
    // split mode (default)
    const selected =
      flatItems.find((i) => i.value === props.value) ?? flatItems[0]
    return (
      <div data-testid="f0-button-dropdown-mock">
        <button
          aria-label={selected?.label}
          disabled={props.disabled}
          onClick={() => selected && onClick(selected.value, selected)}
        >
          {selected?.label}
        </button>
        {flatItems
          .filter((i) => i.value !== selected?.value)
          .map((item) => (
            <button
              key={item.value}
              data-testid={`dropdown-item-${item.value}`}
              onClick={() => onClick(item.value, item)}
            >
              {item.label}
            </button>
          ))}
      </div>
    )
  },
}))

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition
type Person = {
  id: number
  name: string
  email: string
  hasChildren?: boolean
}

const testData: Person[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
]

const parentItem: Person = {
  id: 1,
  name: "Parent User",
  email: "parent@example.com",
  hasChildren: true,
}

const childItems: Person[] = [
  {
    id: 10,
    name: "Child A",
    email: "child.a@example.com",
    hasChildren: false,
  },
  {
    id: 11,
    name: "Child B",
    email: "child.b@example.com",
    hasChildren: false,
  },
]

const testColumns = [
  { label: "name", render: (item: Person) => item.name },
  { label: "email", render: (item: Person) => item.email },
]

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin: string = ``
  thresholds: readonly number[] = []

  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

const createTestSource = (): DataCollectionSource<
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
    fetchData: async (_options: BaseFetchOptions<TestFilters>) => ({
      records: testData,
    }),
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
})

const createNestedTestSource = (
  overrides?: Partial<
    DataCollectionSource<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    >
  >
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
    fetchData: async (_options: BaseFetchOptions<TestFilters>) => ({
      records: [parentItem],
    }),
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  itemsWithChildren: (item: Person) => !!item.hasChildren,
  fetchChildren: () => ({
    records: childItems,
    type: "basic" as const,
  }),
  ...overrides,
})

describe("EditableTable addRowActions (footer)", () => {
  it("renders an add-row button in the table footer when addRowActions is provided", async () => {
    render(
      <AddRowProvider
        addRowActions={() => ({ label: "Add row", onClick: vi.fn() })}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    expect(screen.getByRole("button", { name: /add row/i })).toBeInTheDocument()
  })

  it("renders custom label from addRowActions", async () => {
    render(
      <AddRowProvider
        addRowActions={() => ({ label: "Add phase", onClick: vi.fn() })}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    expect(
      screen.getByRole("button", { name: /add phase/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /^add row$/i })
    ).not.toBeInTheDocument()
  })

  it("calls onClick when the footer button is clicked", async () => {
    const user = userEvent.setup()
    const onClickMock = vi.fn()

    render(
      <AddRowProvider
        addRowActions={() => ({ label: "Add row", onClick: onClickMock })}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    const addRowButton = screen.getByRole("button", { name: /add row/i })
    await user.click(addRowButton)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it("renders dropdown button and dispatches correct action when multiple actions have descriptions", async () => {
    const user = userEvent.setup()
    const onClickAction1 = vi.fn()
    const onClickAction2 = vi.fn()

    render(
      <AddRowProvider
        addRowActions={() => [
          {
            label: "Add type A",
            description: "Adds a type A row",
            onClick: onClickAction1,
          },
          {
            label: "Add type B",
            description: "Adds a type B row",
            onClick: onClickAction2,
          },
        ]}
        addRowActionsLabel="Add row"
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    // Dropdown mode: trigger button should be visible with the label
    const triggerButton = screen.getByRole("button", { name: /add row/i })
    expect(triggerButton).toBeInTheDocument()

    // Click the second action in the dropdown
    await user.click(screen.getByTestId("dropdown-item-1"))

    expect(onClickAction2).toHaveBeenCalledTimes(1)
    expect(onClickAction1).not.toHaveBeenCalled()
  })

  it("renders split button and dispatches correct action when multiple actions have no descriptions", async () => {
    const user = userEvent.setup()
    const onClickAction1 = vi.fn()
    const onClickAction2 = vi.fn()

    render(
      <AddRowProvider
        addRowActions={() => [
          { label: "Add type A", onClick: onClickAction1 },
          { label: "Add type B", onClick: onClickAction2 },
        ]}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    // Split mode: primary button shows the first action's label
    const primaryButton = screen.getByRole("button", { name: /add type a/i })
    expect(primaryButton).toBeInTheDocument()

    // Click the primary button — should trigger the first action
    await user.click(primaryButton)

    expect(onClickAction1).toHaveBeenCalledTimes(1)
    expect(onClickAction2).not.toHaveBeenCalled()
  })
})

describe("EditableTable addNestedRowActions", () => {
  it("does not render add-row button when addNestedRowActions is not provided", async () => {
    const user = userEvent.setup()

    render(
      <TableCollection<
        Person,
        TestFilters,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<Person>,
        TestNavigationFilters,
        GroupingDefinition<Person>
      >
        columns={testColumns}
        source={createNestedTestSource()}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    expect(
      screen.queryByRole("button", { name: /add row/i })
    ).not.toBeInTheDocument()
  })

  it("renders add-row button when addNestedRowActions is provided and row is expanded", async () => {
    const user = userEvent.setup()

    render(
      <AddRowProvider
        addNestedRowActions={() => ({ label: "Add row", onClick: vi.fn() })}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    const tbody = screen.getByRole("table").querySelector("tbody")!
    const nestedAddRowButton = within(tbody).getByRole("button", {
      name: /add row/i,
    })
    expect(nestedAddRowButton).toBeInTheDocument()
  })

  it("renders custom label from addNestedRowActions for nested rows", async () => {
    const user = userEvent.setup()

    render(
      <AddRowProvider
        addNestedRowActions={(parentItem) => ({
          label: parentItem ? "Add line item" : "Add root row",
          onClick: vi.fn(),
        })}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    expect(
      screen.getByRole("button", { name: /add line item/i })
    ).toBeInTheDocument()
  })

  it("calls onClick when the nested add-row button is clicked", async () => {
    const user = userEvent.setup()
    const onClickMock = vi.fn()

    render(
      <AddRowProvider
        addNestedRowActions={(parentItem) => ({
          label: "Add row",
          onClick: () => onClickMock(parentItem),
        })}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    const tbody = screen.getByRole("table").querySelector("tbody")!
    const nestedAddRowButton = within(tbody).getByRole("button", {
      name: /add row/i,
    })
    await user.click(nestedAddRowButton)

    expect(onClickMock).toHaveBeenCalledTimes(1)
    expect(onClickMock).toHaveBeenCalledWith(
      expect.objectContaining({
        id: parentItem.id,
        name: parentItem.name,
        email: parentItem.email,
        hasChildren: parentItem.hasChildren,
      })
    )
  })

  it("renders dropdown button and dispatches correct action when multiple actions have descriptions", async () => {
    const user = userEvent.setup()
    const onClickAction1 = vi.fn()
    const onClickAction2 = vi.fn()

    render(
      <AddRowProvider
        addNestedRowActions={() => [
          {
            label: "Add type A",
            description: "Adds a type A row",
            onClick: onClickAction1,
          },
          {
            label: "Add type B",
            description: "Adds a type B row",
            onClick: onClickAction2,
          },
        ]}
        addNestedRowActionsLabel="Add row"
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    // Dropdown mode: trigger button should be visible
    const triggerButton = screen.getByRole("button", { name: /add row/i })
    expect(triggerButton).toBeInTheDocument()

    // Click the second action in the dropdown
    await user.click(screen.getByTestId("dropdown-item-1"))

    expect(onClickAction2).toHaveBeenCalledTimes(1)
    expect(onClickAction1).not.toHaveBeenCalled()
  })

  it("renders split button and dispatches correct action when multiple actions have no descriptions", async () => {
    const user = userEvent.setup()
    const onClickAction1 = vi.fn()
    const onClickAction2 = vi.fn()

    render(
      <AddRowProvider
        addNestedRowActions={() => [
          { label: "Add type A", onClick: onClickAction1 },
          { label: "Add type B", onClick: onClickAction2 },
        ]}
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    // Split mode: primary button shows the first action's label
    const primaryButton = screen.getByRole("button", { name: /add type a/i })
    expect(primaryButton).toBeInTheDocument()

    // Click the primary button — should trigger the first action
    await user.click(primaryButton)

    expect(onClickAction1).toHaveBeenCalledTimes(1)
    expect(onClickAction2).not.toHaveBeenCalled()
  })
})
