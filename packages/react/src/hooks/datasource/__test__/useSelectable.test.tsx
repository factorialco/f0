import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { DataSourceDefinition, PaginationInfo } from "../types"
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

    it("should handle select all in grouped data", async () => {
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
        result.current.handleSelectAll(true)
      })

      await waitFor(() => {
        expect(result.current.selectedGroups.size).toBe(2)
        expect(result.current.selectedItems.size).toBe(4)
        expect(result.current.isAllSelected).toBe(true)
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
})
