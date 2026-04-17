import { describe, expect, it, vi } from "vitest"
import { act } from "@testing-library/react"

import { zeroRenderHook } from "@/testing/test-utils"

import { Data } from "../../useData"
import { PaginationInfo } from "../../types/fetch.typings"
import { DataSource } from "../../types/datasource.typings"
import { useDataSourceItemNavigation } from "../useDataSourceItemNavigation"
import { UseDataSourceItemNavigationProps } from "../types"

type TestRecord = { id: number; name: string }

const mockDataSource = {
  dataAdapter: {} as never,
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  currentSortings: null,
  setCurrentSortings: vi.fn(),
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  setCurrentGrouping: vi.fn(),
  idProvider: (item: TestRecord) => item.id,
} as unknown as DataSource<TestRecord, never, never, never>

const makeRecords = (count: number, startId = 1): TestRecord[] =>
  Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    name: `Item ${startId + i}`,
  }))

const makeData = (records: TestRecord[]): Data<TestRecord> => ({
  records: records.map((r) => ({ ...r, [Symbol("groupId")]: undefined })),
  type: "flat",
  groups: [],
})

const makePagePaginationInfo = (
  currentPage: number,
  pagesCount: number,
  total: number,
  perPage = 5
): PaginationInfo => ({
  type: "pages",
  currentPage,
  pagesCount,
  total,
  perPage,
})

const makeInfiniteScrollPaginationInfo = (
  hasMore: boolean,
  total: number,
  perPage = 5
): PaginationInfo => ({
  type: "infinite-scroll",
  cursor: hasMore ? "cursor-next" : null,
  hasMore,
  total,
  perPage,
})

const defaultProps = (
  overrides: Partial<UseDataSourceItemNavigationProps<TestRecord>> = {}
): UseDataSourceItemNavigationProps<TestRecord> => ({
  dataSource: mockDataSource,
  data: makeData(makeRecords(5)),
  paginationInfo: makePagePaginationInfo(1, 3, 15),
  setPage: vi.fn(),
  loadMore: vi.fn(),
  isLoading: false,
  idProvider: (item) => item.id,
  ...overrides,
})

describe("useDataSourceItemNavigation", () => {
  describe("initial state", () => {
    it("starts with null activeItemId when no default is provided", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps())
      )

      expect(result.current.activeItemId).toBeNull()
      expect(result.current.activeItem).toBeNull()
      expect(result.current.hasNext).toBe(false)
      expect(result.current.hasPrevious).toBe(false)
      expect(result.current.isNavigating).toBe(false)
    })

    it("uses defaultActiveItemId for initial state", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ defaultActiveItemId: 3 }))
      )

      expect(result.current.activeItemId).toBe(3)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 3, name: "Item 3" })
      )
    })

    it("uses controlled activeItemId prop", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ activeItemId: 2 }))
      )

      expect(result.current.activeItemId).toBe(2)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 2, name: "Item 2" })
      )
    })
  })

  describe("setActiveItemId", () => {
    it("updates active item when called", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps())
      )

      act(() => {
        result.current.setActiveItemId(4)
      })

      expect(result.current.activeItemId).toBe(4)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 4, name: "Item 4" })
      )
    })

    it("fires onActiveItemChange callback", () => {
      const onActiveItemChange = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ onActiveItemChange }))
      )

      act(() => {
        result.current.setActiveItemId(3)
      })

      expect(onActiveItemChange).toHaveBeenCalledWith(3)
    })

    it("sets activeItem to null when ID is not found in records", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps())
      )

      act(() => {
        result.current.setActiveItemId(999)
      })

      expect(result.current.activeItemId).toBe(999)
      expect(result.current.activeItem).toBeNull()
    })
  })

  describe("goToNext", () => {
    it("navigates to the next item within the page", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ defaultActiveItemId: 2 }))
      )

      act(() => {
        result.current.goToNext()
      })

      expect(result.current.activeItemId).toBe(3)
    })

    it("does nothing when activeItemId is null", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ setPage }))
      )

      act(() => {
        result.current.goToNext()
      })

      expect(result.current.activeItemId).toBeNull()
      expect(setPage).not.toHaveBeenCalled()
    })

    it("calls setPage for next page when at the last item (page-based)", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            setPage,
          })
        )
      )

      act(() => {
        result.current.goToNext()
      })

      expect(setPage).toHaveBeenCalledWith(2)
    })

    it("does nothing at the last item of the last page", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: makePagePaginationInfo(3, 3, 15),
            setPage,
          })
        )
      )

      act(() => {
        result.current.goToNext()
      })

      expect(setPage).not.toHaveBeenCalled()
      expect(result.current.activeItemId).toBe(5)
    })

    it("calls loadMore when at the last item (infinite-scroll)", () => {
      const loadMore = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: makeInfiniteScrollPaginationInfo(true, 15),
            loadMore,
          })
        )
      )

      act(() => {
        result.current.goToNext()
      })

      expect(loadMore).toHaveBeenCalled()
    })

    it("does nothing at the last item when no more data (infinite-scroll)", () => {
      const loadMore = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: makeInfiniteScrollPaginationInfo(false, 5),
            loadMore,
          })
        )
      )

      act(() => {
        result.current.goToNext()
      })

      expect(loadMore).not.toHaveBeenCalled()
      expect(result.current.activeItemId).toBe(5)
    })
  })

  describe("goToPrevious", () => {
    it("navigates to the previous item within the page", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ defaultActiveItemId: 3 }))
      )

      act(() => {
        result.current.goToPrevious()
      })

      expect(result.current.activeItemId).toBe(2)
    })

    it("does nothing when activeItemId is null", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ setPage }))
      )

      act(() => {
        result.current.goToPrevious()
      })

      expect(result.current.activeItemId).toBeNull()
      expect(setPage).not.toHaveBeenCalled()
    })

    it("calls setPage for previous page when at the first item (page-based)", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 1,
            paginationInfo: makePagePaginationInfo(2, 3, 15),
            setPage,
          })
        )
      )

      act(() => {
        result.current.goToPrevious()
      })

      expect(setPage).toHaveBeenCalledWith(1)
    })

    it("does nothing at the first item of the first page", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 1,
            paginationInfo: makePagePaginationInfo(1, 3, 15),
            setPage,
          })
        )
      )

      act(() => {
        result.current.goToPrevious()
      })

      expect(setPage).not.toHaveBeenCalled()
      expect(result.current.activeItemId).toBe(1)
    })

    it("does nothing at the first item (infinite-scroll)", () => {
      const setPage = vi.fn()
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 1,
            paginationInfo: makeInfiniteScrollPaginationInfo(true, 15),
            setPage,
          })
        )
      )

      act(() => {
        result.current.goToPrevious()
      })

      expect(setPage).not.toHaveBeenCalled()
      expect(result.current.activeItemId).toBe(1)
    })
  })

  describe("hasNext / hasPrevious", () => {
    it("hasNext is true when not at the last item", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ defaultActiveItemId: 3 }))
      )

      expect(result.current.hasNext).toBe(true)
    })

    it("hasNext is true at last item when more pages exist", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: makePagePaginationInfo(1, 3, 15),
          })
        )
      )

      expect(result.current.hasNext).toBe(true)
    })

    it("hasNext is false at last item of last page", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: makePagePaginationInfo(3, 3, 15),
          })
        )
      )

      expect(result.current.hasNext).toBe(false)
    })

    it("hasPrevious is true when not at the first item", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(defaultProps({ defaultActiveItemId: 3 }))
      )

      expect(result.current.hasPrevious).toBe(true)
    })

    it("hasPrevious is true at first item when previous pages exist", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 1,
            paginationInfo: makePagePaginationInfo(2, 3, 15),
          })
        )
      )

      expect(result.current.hasPrevious).toBe(true)
    })

    it("hasPrevious is false at first item of first page", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 1,
            paginationInfo: makePagePaginationInfo(1, 3, 15),
          })
        )
      )

      expect(result.current.hasPrevious).toBe(false)
    })
  })

  describe("pending navigation resolution (page-based)", () => {
    it("resolves to first item after navigating to next page", () => {
      const setPage = vi.fn()

      const { result, rerender } = zeroRenderHook(
        (props: UseDataSourceItemNavigationProps<TestRecord>) =>
          useDataSourceItemNavigation(props),
        {
          initialProps: defaultProps({
            defaultActiveItemId: 5,
            setPage,
          }),
        }
      )

      // Trigger next page navigation
      act(() => {
        result.current.goToNext()
      })
      expect(setPage).toHaveBeenCalledWith(2)

      // Simulate loading state (data hasn't changed yet)
      rerender(
        defaultProps({
          paginationInfo: makePagePaginationInfo(2, 3, 15),
          setPage,
          isLoading: true,
        })
      )

      // Simulate page 2 data arriving
      const page2Records = makeRecords(5, 6)
      rerender(
        defaultProps({
          data: makeData(page2Records),
          paginationInfo: makePagePaginationInfo(2, 3, 15),
          setPage,
          isLoading: false,
        })
      )

      expect(result.current.activeItemId).toBe(6)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 6, name: "Item 6" })
      )
    })

    it("resolves to last item after navigating to previous page", () => {
      const setPage = vi.fn()
      const records = makeRecords(5, 6)

      const { result, rerender } = zeroRenderHook(
        (props: UseDataSourceItemNavigationProps<TestRecord>) =>
          useDataSourceItemNavigation(props),
        {
          initialProps: defaultProps({
            defaultActiveItemId: 6,
            data: makeData(records),
            paginationInfo: makePagePaginationInfo(2, 3, 15),
            setPage,
          }),
        }
      )

      // Trigger previous page navigation
      act(() => {
        result.current.goToPrevious()
      })
      expect(setPage).toHaveBeenCalledWith(1)

      // Simulate page 1 data arriving
      const page1Records = makeRecords(5)
      rerender(
        defaultProps({
          data: makeData(page1Records),
          paginationInfo: makePagePaginationInfo(1, 3, 15),
          setPage,
          isLoading: false,
        })
      )

      expect(result.current.activeItemId).toBe(5)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 5, name: "Item 5" })
      )
    })
  })

  describe("pending navigation resolution (infinite-scroll)", () => {
    it("resolves to next item after loadMore appends data", () => {
      const loadMore = vi.fn()
      const records = makeRecords(5)

      const { result, rerender } = zeroRenderHook(
        (props: UseDataSourceItemNavigationProps<TestRecord>) =>
          useDataSourceItemNavigation(props),
        {
          initialProps: defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: makeInfiniteScrollPaginationInfo(true, 15),
            loadMore,
          }),
        }
      )

      // Trigger loadMore
      act(() => {
        result.current.goToNext()
      })
      expect(loadMore).toHaveBeenCalled()

      // Simulate appended data (original 5 + 5 new)
      const appendedRecords = [...records, ...makeRecords(5, 6)]
      rerender(
        defaultProps({
          data: makeData(appendedRecords),
          paginationInfo: makeInfiniteScrollPaginationInfo(true, 15),
          loadMore,
          isLoading: false,
        })
      )

      expect(result.current.activeItemId).toBe(6)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 6, name: "Item 6" })
      )
    })
  })

  describe("no pagination", () => {
    it("navigates within data when paginationInfo is null", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 3,
            paginationInfo: null,
          })
        )
      )

      expect(result.current.hasNext).toBe(true)
      expect(result.current.hasPrevious).toBe(true)

      act(() => {
        result.current.goToNext()
      })
      expect(result.current.activeItemId).toBe(4)

      act(() => {
        result.current.goToPrevious()
      })
      expect(result.current.activeItemId).toBe(3)
    })

    it("hasNext is false at last item with no pagination", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 5,
            paginationInfo: null,
          })
        )
      )

      expect(result.current.hasNext).toBe(false)
    })

    it("hasPrevious is false at first item with no pagination", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 1,
            paginationInfo: null,
          })
        )
      )

      expect(result.current.hasPrevious).toBe(false)
    })
  })

  describe("idProvider", () => {
    it("uses dataSource.idProvider when no override is provided", () => {
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            defaultActiveItemId: 3,
            idProvider: undefined,
          })
        )
      )

      // mockDataSource.idProvider returns item.id (number)
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 3, name: "Item 3" })
      )
    })

    it("falls back to default idProvider when neither override nor dataSource provides one", () => {
      const dataSourceWithoutIdProvider = {
        ...mockDataSource,
        idProvider: undefined,
      } as unknown as DataSource<TestRecord, never, never, never>

      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            dataSource: dataSourceWithoutIdProvider,
            defaultActiveItemId: "3",
            idProvider: undefined,
          })
        )
      )

      // Default idProvider converts item.id to string "3"
      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 3, name: "Item 3" })
      )
    })

    it("uses custom idProvider", () => {
      const records: TestRecord[] = [
        { id: 1, name: "alpha" },
        { id: 2, name: "beta" },
        { id: 3, name: "gamma" },
      ]
      const { result } = zeroRenderHook(() =>
        useDataSourceItemNavigation(
          defaultProps({
            data: makeData(records),
            defaultActiveItemId: "beta",
            idProvider: (item) => (item as TestRecord).name,
          })
        )
      )

      expect(result.current.activeItem).toEqual(
        expect.objectContaining({ id: 2, name: "beta" })
      )

      act(() => {
        result.current.goToNext()
      })
      expect(result.current.activeItemId).toBe("gamma")
    })
  })
})
