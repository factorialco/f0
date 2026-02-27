import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { TableContext } from "@/experimental/OneTable/utils/TableContext"
import {
  FiltersDefinition,
  GroupingDefinition,
  SortingsDefinition,
} from "@/hooks/datasource"
import { zeroRender } from "@/testing/test-utils"

import { DataCollectionSource } from "../../../../../hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "../../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../../navigationFilters/types"
import { SummariesDefinition } from "../../../../../summary"
import { TableColumnDefinition } from "../../types"
import { Row } from "../Row"

type TestRecord = {
  id: number
  name: string
  email: string
}

const testItem: TestRecord = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
}

const testColumns: TableColumnDefinition<
  TestRecord,
  SortingsDefinition,
  SummariesDefinition
>[] = [
  {
    label: "Name",
    render: (item: TestRecord) => item.name,
  },
  {
    label: "Email",
    render: (item: TestRecord) => item.email,
  },
]

const createTestSource = (
  options: {
    itemUrl?: (item: TestRecord) => string
    itemOnClick?: (item: TestRecord) => () => void
    itemActions?: ItemActionsDefinition<TestRecord>
  } = {}
): DataCollectionSource<
  TestRecord,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<TestRecord>,
  NavigationFiltersDefinition,
  GroupingDefinition<TestRecord>
> => ({
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  currentSortings: null,
  setCurrentSortings: vi.fn(),
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  dataAdapter: {
    fetchData: async () => ({ records: [testItem] }),
  },
  currentNavigationFilters: {},
  setCurrentNavigationFilters: vi.fn(),
  navigationFilters: undefined,
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  itemUrl: options.itemUrl,
  itemOnClick: options.itemOnClick,
  itemActions: options.itemActions,
})

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <TableContext.Provider
    value={{
      isScrolled: false,
      setIsScrolled: () => {},
      isScrolledRight: false,
      setIsScrolledRight: () => {},
    }}
  >
    <table>
      <tbody>{children}</tbody>
    </table>
  </TableContext.Provider>
)

const renderRow = (
  sourceOptions: {
    itemUrl?: (item: TestRecord) => string
    itemOnClick?: (item: TestRecord) => () => void
    itemActions?: ItemActionsDefinition<TestRecord>
  } = {},
  rowProps: { disableHover?: boolean; loading?: boolean } = {}
) => {
  const source = createTestSource(sourceOptions)

  return zeroRender(
    <TableWrapper>
      <Row
        source={source}
        item={testItem}
        index={0}
        groupIndex={0}
        onCheckedChange={vi.fn()}
        selectedItems={new Map()}
        columns={testColumns}
        frozenColumnsLeft={0}
        checkColumnWidth={40}
        tableWithChildren={false}
        {...rowProps}
      />
    </TableWrapper>
  )
}

describe("Row", () => {
  describe("hover behavior", () => {
    it("should have hover effect when row has itemUrl", () => {
      renderRow({
        itemUrl: () => "/test-url",
      })

      const row = screen.getByRole("row")
      expect(row).not.toHaveClass("hover:bg-transparent")
    })

    it("should have hover effect when row has itemOnClick", () => {
      renderRow({
        itemOnClick: () => () => {},
      })

      const row = screen.getByRole("row")
      expect(row).not.toHaveClass("hover:bg-transparent")
    })

    it("should have hover effect when row has itemActions", () => {
      renderRow({
        itemActions: () => [
          {
            label: "Edit",
            onClick: () => {},
          },
        ],
      })

      const row = screen.getByRole("row")
      expect(row).not.toHaveClass("hover:bg-transparent")
    })

    it("should disable hover effect when row has no itemUrl, itemOnClick, or itemActions", () => {
      renderRow({})

      const row = screen.getByRole("row")
      expect(row).toHaveClass("hover:bg-transparent")
    })

    it("should disable hover effect when disableHover prop is true even with itemUrl", () => {
      renderRow(
        {
          itemUrl: () => "/test-url",
        },
        { disableHover: true }
      )

      const row = screen.getByRole("row")
      expect(row).toHaveClass("hover:bg-transparent")
    })

    it("should disable hover effect when disableHover prop is true even with itemOnClick", () => {
      renderRow(
        {
          itemOnClick: () => () => {},
        },
        { disableHover: true }
      )

      const row = screen.getByRole("row")
      expect(row).toHaveClass("hover:bg-transparent")
    })

    it("should disable hover effect when disableHover prop is true even with itemActions", () => {
      renderRow(
        {
          itemActions: () => [
            {
              label: "Edit",
              onClick: () => {},
            },
          ],
        },
        { disableHover: true }
      )

      const row = screen.getByRole("row")
      expect(row).toHaveClass("hover:bg-transparent")
    })

    it("should have hover effect when loading but has itemUrl", () => {
      renderRow(
        {
          itemUrl: () => "/test-url",
        },
        { loading: true }
      )

      const row = screen.getByRole("row")
      // Even when loading, if there's a URL, hover should be enabled
      expect(row).not.toHaveClass("hover:bg-transparent")
    })

    it("should disable hover when loading and no interactive elements", () => {
      renderRow({}, { loading: true })

      const row = screen.getByRole("row")
      // When loading and no interactive elements, hover should be disabled
      expect(row).toHaveClass("hover:bg-transparent")
    })
  })
})
