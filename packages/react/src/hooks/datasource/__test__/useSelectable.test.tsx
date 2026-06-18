import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { DataSource, PaginationInfo } from "../types"
import { Data, GROUP_ID_SYMBOL } from "../useData"
import { useSelectable } from "../useSelectable/useSelectable"

type TestRecord = {
  id: number
  name: string
  group: string
}

describe("useSelectable", () => {
  const mockFlatData = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    name: `Item ${index}`,
    group: index % 3 === 0 ? "group1" : index % 3 === 1 ? "group2" : "group3",
  }))

  const mockSelectable = (item: TestRecord) => item.id

  const mockSource = {
    selectable: mockSelectable,
    dataAdapter: {} as never,
    currentFilters: {} as never,
    setCurrentFilters: () => {},
    currentSortings: {} as never,
    setCurrentSortings: () => {},
    currentSearch: "",
    setCurrentSearch: () => {},
    debouncedCurrentSearch: "",
    currentGrouping: {} as never,
    setCurrentGrouping: () => {},
    isLoading: false,
    setIsLoading: () => {},
  } as unknown as DataSourceDefinition<TestRecord, never, never, never>

  describe("Flat data", () => {
    const records = mockFlatData.map((item) => ({
      ...item,
      [GROUP_ID_SYMBOL]: undefined,
    }))
    const mockData: Data<TestRecord> = {
      type: "flat",
      records,
      groups: [
        {
          key: "all",
          label: "All",
          records: records,
          itemCount: records.length,
        },
      ],
    }

    it("should handle item selection", async () => {
      const { result } = renderHook(() =>
        useSelectable({
          data: mockData,
          paginationInfo: null,
          source: mockSource,
          onSelectItems: vi.fn(),
          selectionMode: "multi",
        })
      )

      act(() => {
        result.current.handleSelectItemChange(mockData.records[0], true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(1)
        expect(result.current.selectedItems.get(0)).toEqual(mockData.records[0])
      })
    })
  })

  describe("Pagination — page-based", () => {
    const makePagedData = (ids: number[]): Data<TestRecord> => {
      const records = ids.map((id) => ({
        id,
        name: `Item ${id}`,
        group: "group1",
        [GROUP_ID_SYMBOL]: undefined,
      }))
      return {
        type: "flat",
        records,
        groups: [
          { key: "all", label: "All", records, itemCount: records.length },
        ],
      }
    }

    it("clears selection when navigating to a different page (default behaviour)", async () => {
      const page1Info: PaginationInfo = {
        type: "pages",
        total: 4,
        currentPage: 1,
        perPage: 2,
        pagesCount: 2,
      }
      const page2Info: PaginationInfo = {
        type: "pages",
        total: 4,
        currentPage: 2,
        perPage: 2,
        pagesCount: 2,
      }

      // Hoist data so the same record instances are passed to both the hook
      // and the selection call — avoids false passes if identity ever matters.
      const page1Data = makePagedData([1, 2])

      const { result, rerender } = renderHook(
        ({ data, paginationInfo }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        {
          initialProps: {
            data: page1Data,
            paginationInfo: page1Info,
          },
        }
      )

      act(() => {
        result.current.handleSelectItemChange(page1Data.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Navigate to page 2 — selection must be cleared
      rerender({ data: makePagedData([3, 4]), paginationInfo: page2Info })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(0))
    })

    it("preserves selection across page changes when resetOnPageChange is false", async () => {
      const page1Info: PaginationInfo = {
        type: "pages",
        total: 4,
        currentPage: 1,
        perPage: 2,
        pagesCount: 2,
      }
      const page2Info: PaginationInfo = {
        type: "pages",
        total: 4,
        currentPage: 2,
        perPage: 2,
        pagesCount: 2,
      }

      const page1Data = makePagedData([1, 2])

      const { result, rerender } = renderHook(
        ({ data, paginationInfo }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            resetOnPageChange: false,
          }),
        {
          initialProps: {
            data: page1Data,
            paginationInfo: page1Info,
          },
        }
      )

      act(() => {
        result.current.handleSelectItemChange(page1Data.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Navigate to page 2 — opt-out: selection must survive
      rerender({ data: makePagedData([3, 4]), paginationInfo: page2Info })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))
    })

    it("still clears selection on filter change regardless of resetOnPageChange", async () => {
      const sourceWithFilters = {
        ...mockSource,
        currentFilters: { status: "active" } as never,
      }
      const paginationInfo: PaginationInfo = {
        type: "pages",
        total: 2,
        currentPage: 1,
        perPage: 2,
        pagesCount: 1,
      }

      const data = makePagedData([1, 2])

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data,
            paginationInfo,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { source: sourceWithFilters } }
      )

      act(() => {
        result.current.handleSelectItemChange(data.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Change filter — selection must be cleared
      rerender({
        source: {
          ...sourceWithFilters,
          currentFilters: { status: "draft" } as never,
        },
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(0))
    })
  })

  describe("Pagination — infinite-scroll", () => {
    const makeInfiniteData = (ids: number[]): Data<TestRecord> => {
      const records = ids.map((id) => ({
        id,
        name: `Item ${id}`,
        group: "group1",
        [GROUP_ID_SYMBOL]: undefined,
      }))
      return {
        type: "flat",
        records,
        groups: [
          { key: "all", label: "All", records, itemCount: records.length },
        ],
      }
    }

    const makeCursorInfo = (cursor: string): PaginationInfo => ({
      type: "infinite-scroll",
      total: 100,
      perPage: 2,
      cursor,
      hasMore: true,
    })

    it("preserves manual selection after loadMore (cursor change)", async () => {
      // Hoist data so the same record instances are passed to both the hook
      // and the selection call — avoids false passes if identity ever matters.
      const initialData = makeInfiniteData([1, 2])
      const page2Data = makeInfiniteData([1, 2, 3, 4])

      const { result, rerender } = renderHook(
        ({ data, paginationInfo }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        {
          initialProps: {
            data: initialData,
            paginationInfo: makeCursorInfo("cursor-0"),
          },
        }
      )

      // Select row 1 on the initial load
      act(() => {
        result.current.handleSelectItemChange(initialData.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Simulate loadMore: new page appended (ids 1-4 now in records), cursor advances
      rerender({
        data: page2Data,
        paginationInfo: makeCursorInfo("cursor-1"),
      })

      // Row 1 must still be selected; cursor change must NOT clear
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(1)
        expect(result.current.selectedItems.get(1)).toBeDefined()
      })
    })

    it("preserves selection across multiple loadMore calls", async () => {
      const page1Data = makeInfiniteData([1, 2])
      const page2Data = makeInfiniteData([1, 2, 3, 4])
      const page3Data = makeInfiniteData([1, 2, 3, 4, 5, 6])

      const { result, rerender } = renderHook(
        ({ data, paginationInfo }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        {
          initialProps: {
            data: page1Data,
            paginationInfo: makeCursorInfo("cursor-0"),
          },
        }
      )

      // Select rows 1 and 2 on first page
      act(() => {
        result.current.handleSelectItemChange(page1Data.records[0], true)
        result.current.handleSelectItemChange(page1Data.records[1], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(2))

      // loadMore page 2
      rerender({
        data: page2Data,
        paginationInfo: makeCursorInfo("cursor-1"),
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(2))

      // Select row 3 on page 2
      act(() => {
        result.current.handleSelectItemChange(page2Data.records[2], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(3))

      // loadMore page 3
      rerender({
        data: page3Data,
        paginationInfo: makeCursorInfo("cursor-2"),
      })

      // All three selections from pages 1 and 2 must still be present
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(3)
        expect(result.current.selectedItems.get(1)).toBeDefined()
        expect(result.current.selectedItems.get(2)).toBeDefined()
        expect(result.current.selectedItems.get(3)).toBeDefined()
      })
    })

    it("header select-all survives loadMore; new rows arrive unchecked (no longer all-selected)", async () => {
      const { result, rerender } = renderHook(
        ({ data, paginationInfo }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        {
          initialProps: {
            data: makeInfiniteData([1, 2]),
            paginationInfo: makeCursorInfo("cursor-0"),
          },
        }
      )

      // Hit the header checkbox — select all currently loaded rows
      act(() => {
        result.current.handleSelectAll(true)
      })

      // All 2 loaded rows are selected; isAllSelected is true
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.isAllSelected).toBe(true)
      })

      // loadMore appends 2 new rows
      rerender({
        data: makeInfiniteData([1, 2, 3, 4]),
        paginationInfo: makeCursorInfo("cursor-1"),
      })

      // Previously checked rows stay checked; new rows arrive unchecked.
      // isAllSelected becomes false (2 of 4 selected), which is the correct
      // UX: header checkbox moves to indeterminate state in the Table.
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.isAllSelected).toBe(false)
        // Existing selections are preserved — only 2 checked, 2 new rows unchecked
        expect(result.current.selectedItems.get(1)).toBeDefined()
        expect(result.current.selectedItems.get(2)).toBeDefined()
      })
    })

    it("Gmail-style select-all (handleSelectAllItems) survives loadMore unchanged", async () => {
      const { result, rerender } = renderHook(
        ({ data, paginationInfo }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            allPagesSelection: true,
          }),
        {
          initialProps: {
            data: makeInfiniteData([1, 2]),
            paginationInfo: makeCursorInfo("cursor-0"),
          },
        }
      )

      // Press "Select all N items" banner
      act(() => {
        result.current.handleSelectAllItems(true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.allSelectedStatus.checked).toBe(true)
      })

      // loadMore — new rows must also be selected via the data-sync effect
      rerender({
        data: makeInfiniteData([1, 2, 3, 4]),
        paginationInfo: makeCursorInfo("cursor-1"),
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(4)
        expect(result.current.allSelectedStatus.checked).toBe(true)
      })
    })

    it("still clears selection on filter change in infinite-scroll mode", async () => {
      const data = makeInfiniteData([1, 2])
      const sourceWithFilters = {
        ...mockSource,
        currentFilters: { status: "active" } as never,
      }

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data,
            paginationInfo: makeCursorInfo("cursor-0"),
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { source: sourceWithFilters } }
      )

      act(() => {
        result.current.handleSelectItemChange(data.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Filter change must still wipe selection
      rerender({
        source: {
          ...sourceWithFilters,
          currentFilters: { status: "draft" } as never,
        },
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(0))
    })

    it("clears selection when sortings change in infinite-scroll mode", async () => {
      const data = makeInfiniteData([1, 2])
      const sourceWithSortings = {
        ...mockSource,
        currentSortings: { field: "name", order: "asc" } as never,
      }

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data,
            paginationInfo: makeCursorInfo("cursor-0"),
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { source: sourceWithSortings } }
      )

      act(() => {
        result.current.handleSelectItemChange(data.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Sortings change resets the dataset — selection must be cleared
      rerender({
        source: {
          ...sourceWithSortings,
          currentSortings: { field: "name", order: "desc" } as never,
        },
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(0))
    })

    it("clears selection when search query changes in infinite-scroll mode", async () => {
      const data = makeInfiniteData([1, 2])
      const sourceWithSearch = {
        ...mockSource,
        debouncedCurrentSearch: "initial",
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data,
            paginationInfo: makeCursorInfo("cursor-0"),
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { source: sourceWithSearch } }
      )

      act(() => {
        result.current.handleSelectItemChange(data.records[0], true)
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(1))

      // Search query change resets the dataset — selection must be cleared
      rerender({
        source: {
          ...sourceWithSearch,
          debouncedCurrentSearch: "new-query",
        },
      })

      await waitFor(() => expect(result.current.selectedItems.size).toBe(0))
    })
  })

  describe("Grouped data", () => {
    const mockGroupedData: Data<TestRecord> = {
      type: "grouped",
      records: [],
      groups: [
        {
          key: "group1",
          label: "Group 1",
          records: [
            {
              id: 1,
              name: "Item 1",
              group: "group1",
              [GROUP_ID_SYMBOL]: "group1",
            },
            {
              id: 2,
              name: "Item 2",
              group: "group1",
              [GROUP_ID_SYMBOL]: "group1",
            },
          ],
          itemCount: Promise.resolve(2),
        },
        {
          key: "group2",
          label: "Group 2",
          records: [
            {
              id: 3,
              name: "Item 3",
              group: "group2",
              [GROUP_ID_SYMBOL]: "group2",
            },
            {
              id: 4,
              name: "Item 4",
              group: "group2",
              [GROUP_ID_SYMBOL]: "group2",
            },
          ],
          itemCount: Promise.resolve(2),
        },
      ],
    }

    it("should handle group selection", async () => {
      const { result } = renderHook(() =>
        useSelectable({
          data: mockGroupedData,
          paginationInfo: null,
          source: mockSource,
          onSelectItems: vi.fn(),
          selectionMode: "multi",
        })
      )

      act(() => {
        result.current.handleSelectGroupChange(mockGroupedData.groups[0], true)
      })

      await waitFor(() => {
        expect(result.current.selectedGroups.size).toBe(1)
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.groupAllSelectedStatus["group1"].checked).toBe(
          true
        )
      })
    })

    it("should handle pagination in grouped data and maintain selection state", async () => {
      const initialGroupedData: Data<TestRecord> = {
        type: "grouped",
        records: [],
        groups: [
          {
            key: "group1",
            label: "Group 1",
            records: [
              {
                id: 1,
                name: "Item 1",
                group: "group1",
                [GROUP_ID_SYMBOL]: "group1",
              },
              {
                id: 2,
                name: "Item 2",
                group: "group1",
                [GROUP_ID_SYMBOL]: "group1",
              },
            ],
            itemCount: Promise.resolve(3),
          },
        ],
      }

      const paginationInfo: PaginationInfo = {
        type: "pages" as const,
        total: 3,
        currentPage: 1,
        perPage: 2,
        pagesCount: 2,
      }

      const { result, rerender } = renderHook(
        ({ data }) =>
          useSelectable({
            data,
            paginationInfo,
            source: mockSource,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { data: initialGroupedData } }
      )

      // Select all items in first group
      act(() => {
        result.current.handleSelectGroupChange(
          initialGroupedData.groups[0],
          true
        )
      })

      await waitFor(() => {
        expect(result.current.selectedGroups.size).toBe(1)
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.groupAllSelectedStatus["group1"].checked).toBe(
          true
        )
      })

      // Simulate page change with new data for the same group
      const newGroupedData: Data<TestRecord> = {
        type: "grouped",
        records: [],
        groups: [
          {
            key: "group1",
            label: "Group 1",
            records: [
              {
                id: 3,
                name: "Item 3",
                group: "group1",
                [GROUP_ID_SYMBOL]: "group1",
              },
            ],
            itemCount: Promise.resolve(3),
          },
        ],
      }

      rerender({ data: newGroupedData })

      // New items should be automatically selected
      await waitFor(() => {
        expect(result.current.selectedGroups.size).toBe(1)
        expect(result.current.selectedItems.size).toBe(3)
        expect(result.current.groupAllSelectedStatus["group1"].checked).toBe(
          true
        )
      })
    })
  })

  describe("preserveSelectionOnDatasetChange", () => {
    const records = mockFlatData.slice(0, 5).map((item) => ({
      ...item,
      [GROUP_ID_SYMBOL]: undefined,
    }))
    const mockData: Data<TestRecord> = {
      type: "flat",
      records,
      groups: [
        {
          key: "all",
          label: "All",
          records,
          itemCount: records.length,
        },
      ],
    }

    it("should clear selections on search change by default", async () => {
      const source = {
        ...mockSource,
        debouncedCurrentSearch: "",
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { source } }
      )

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      rerender({
        source: {
          ...source,
          debouncedCurrentSearch: "test",
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(0)
      })
    })

    it("should clear selections on filter change by default", async () => {
      const source = {
        ...mockSource,
        currentFilters: { status: ["active"] },
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
          }),
        { initialProps: { source } }
      )

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      rerender({
        source: {
          ...source,
          currentFilters: { status: ["inactive"] },
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(0)
      })
    })

    it("should preserve selections on search change when preserveSelectionOnDatasetChange is true", async () => {
      const source = {
        ...mockSource,
        debouncedCurrentSearch: "",
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            preserveSelectionOnDatasetChange: true,
          }),
        { initialProps: { source } }
      )

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      rerender({
        source: {
          ...source,
          debouncedCurrentSearch: "test",
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.selectedItems.get(0)).toBeDefined()
        expect(result.current.selectedItems.get(1)).toBeDefined()
      })
    })

    it("should preserve selections on filter change when preserveSelectionOnDatasetChange is true", async () => {
      const source = {
        ...mockSource,
        currentFilters: { status: ["active"] },
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            preserveSelectionOnDatasetChange: true,
          }),
        { initialProps: { source } }
      )

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      rerender({
        source: {
          ...source,
          currentFilters: { status: ["inactive"] },
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.selectedItems.get(0)).toBeDefined()
        expect(result.current.selectedItems.get(1)).toBeDefined()
      })
    })

    it("should preserve selections when disableSelectAll is true even without preserveSelectionOnDatasetChange", async () => {
      const source = {
        ...mockSource,
        debouncedCurrentSearch: "",
        currentFilters: { status: ["active"] },
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            disableSelectAll: true,
            preserveSelectionOnDatasetChange: false,
          }),
        { initialProps: { source } }
      )

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      // Change both search and filters
      rerender({
        source: {
          ...source,
          debouncedCurrentSearch: "test",
          currentFilters: { status: ["inactive"] },
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      // disableSelectAll alone prevents clearing
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })
    })

    it("should preserve selections when both disableSelectAll and preserveSelectionOnDatasetChange are true", async () => {
      const source = {
        ...mockSource,
        debouncedCurrentSearch: "",
        currentFilters: { status: ["active"] },
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            disableSelectAll: true,
            preserveSelectionOnDatasetChange: true,
          }),
        { initialProps: { source } }
      )

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      // Change both search and filters
      rerender({
        source: {
          ...source,
          debouncedCurrentSearch: "test",
          currentFilters: { status: ["inactive"] },
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      // Both flags prevent clearing
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })
    })

    it("should preserve selections across search, filter, and search again (selector workflow)", async () => {
      const source = {
        ...mockSource,
        currentFilters: {},
        debouncedCurrentSearch: "",
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: mockData,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            preserveSelectionOnDatasetChange: true,
          }),
        { initialProps: { source } }
      )

      // Step 1: Search "Mexico" and select 2 employees
      rerender({
        source: {
          ...source,
          debouncedCurrentSearch: "Mexico",
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      act(() => {
        result.current.handleSelectItemChange(0, true)
        result.current.handleSelectItemChange(1, true)
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      // Step 2: Clear search
      rerender({
        source: {
          ...source,
          debouncedCurrentSearch: "",
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      // Step 3: Filter by location "Barcelona"
      rerender({
        source: {
          ...source,
          currentFilters: { location: ["Barcelona"] },
          debouncedCurrentSearch: "",
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      // Mexico selections should still be there
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
      })

      // Step 4: Select all Barcelona employees
      act(() => {
        result.current.handleSelectItemChange(2, true)
        result.current.handleSelectItemChange(3, true)
        result.current.handleSelectItemChange(4, true)
      })

      // All 5 selections preserved
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(5)
      })
    })
  })

  // `preserveSelectionOnDatasetChange` governs MANUAL selection only. A
  // "select all" is scoped to the query it was made under, so it always clears
  // on a filter/search/sort change — i.e. it behaves as if the prop were false,
  // regardless of the prop value. This prevents a filter-scoped select-all from
  // ballooning or reporting a stale count when the dataset later changes.
  describe("select-all is not preserved across dataset changes", () => {
    const makeData = (ids: number[]): Data<TestRecord> => {
      const records = ids.map((id) => ({
        id,
        name: `Item ${id}`,
        group: "all",
        [GROUP_ID_SYMBOL]: undefined,
      }))
      return {
        type: "flat",
        records,
        groups: [
          { key: "all", label: "All", records, itemCount: records.length },
        ],
      }
    }

    for (const preserve of [true, false]) {
      it(`clears a "select all" when the filter changes (preserve=${preserve})`, async () => {
        const sourceA = {
          ...mockSource,
          currentFilters: { department: ["A"] },
        } as unknown as DataSource<TestRecord, never, never, never>

        const { result, rerender } = renderHook(
          ({ source }) =>
            useSelectable({
              data: makeData([1, 2]),
              paginationInfo: null,
              source,
              onSelectItems: vi.fn(),
              selectionMode: "multi",
              allPagesSelection: true,
              preserveSelectionOnDatasetChange: preserve,
            }),
          { initialProps: { source: sourceA } }
        )

        act(() => {
          result.current.handleSelectAllItems(true)
        })
        await waitFor(() =>
          expect(result.current.selectionStatus.allChecked).toBe(true)
        )

        // Change the filter — the select-all is scoped to filter A and must clear.
        rerender({
          source: {
            ...sourceA,
            currentFilters: { department: ["B"] },
          } as unknown as DataSource<TestRecord, never, never, never>,
        })

        await waitFor(() => {
          expect(result.current.selectedItems.size).toBe(0)
          expect(result.current.selectionStatus.selectedCount).toBe(0)
          expect(result.current.selectionStatus.allChecked).toBe(false)
        })
      })
    }

    it("still preserves MANUAL selections across a filter change when preserve=true", async () => {
      const sourceA = {
        ...mockSource,
        currentFilters: { department: ["A"] },
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source }) =>
          useSelectable({
            data: makeData([1, 2, 3]),
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            allPagesSelection: true,
            preserveSelectionOnDatasetChange: true,
          }),
        { initialProps: { source: sourceA } }
      )

      // Manual selection (not select-all): allSelectedCheck stays false.
      act(() => {
        result.current.handleSelectItemChange(1, true)
        result.current.handleSelectItemChange(2, true)
      })
      await waitFor(() => expect(result.current.selectedItems.size).toBe(2))

      rerender({
        source: {
          ...sourceA,
          currentFilters: { department: ["B"] },
        } as unknown as DataSource<TestRecord, never, never, never>,
      })

      // Manual selections survive (the prop governs manual selection).
      await waitFor(() => expect(result.current.selectedItems.size).toBe(2))
    })

    // Regression: with preserve=true, prior selections are kept across a filter
    // change, then clicking "Select all" marked the WHOLE accumulated map as
    // checked — so onSelectItems reported e.g. selectedIds of 25 while
    // selectedCount (the filtered total) was 3. Select-all must select ONLY the
    // current query's items (behaving as preserve=false at the click).
    it("select-all selects only the current query, not the preserved accumulation", async () => {
      const sourceA = {
        ...mockSource,
        currentFilters: { team: ["1"] },
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result, rerender } = renderHook(
        ({ source, data }) =>
          useSelectable({
            data,
            paginationInfo: null,
            source,
            onSelectItems: vi.fn(),
            selectionMode: "multi",
            allPagesSelection: true,
            preserveSelectionOnDatasetChange: true,
          }),
        { initialProps: { source: sourceA, data: makeData([1, 2, 3]) } }
      )

      // Accumulate manual selections under team 1.
      act(() => {
        result.current.handleSelectItemChange(1, true)
        result.current.handleSelectItemChange(2, true)
        result.current.handleSelectItemChange(3, true)
      })
      await waitFor(() => expect(result.current.selectedItems.size).toBe(3))

      // Switch to team 3 (2 matching rows); the 3 are preserved in the map.
      rerender({
        source: {
          ...sourceA,
          currentFilters: { team: ["3"] },
        } as unknown as DataSource<TestRecord, never, never, never>,
        data: makeData([4, 5]),
      })
      await waitFor(() => expect(result.current.selectedItems.size).toBe(3))

      // Select all under team 3: only the 2 current rows are selected — the
      // preserved 1/2/3 are discarded. selectedIds and selectedCount agree.
      act(() => {
        result.current.handleSelectAllItems(true)
      })
      await waitFor(() => {
        expect(result.current.selectedItems.size).toBe(2)
        expect(result.current.selectionStatus.selectedCount).toBe(2)
        expect(result.current.selectionStatus.selectedIds.sort()).toEqual([
          4, 5,
        ])
      })
    })
  })
})
