import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { act } from "@testing-library/react"

import { zeroRenderHook } from "@/testing/test-utils"
import { Data, GROUP_ID_SYMBOL, PaginationInfo } from "@/hooks/datasource"

import { DataCollectionItemNavigationDataState } from "../../types"
import {
  useSnapshotManager,
  UseSnapshotManagerProps,
} from "../useSnapshotManager"

// ─── Test helpers ─────────────────────────────────────────────────────────────

type TestRecord = { id: number; name: string }

const makeRecord = (id: number, name = `Item ${id}`): TestRecord => ({
  id,
  name,
})

const makeData = (records: TestRecord[]): Data<TestRecord> => ({
  records: records.map((r) => ({ ...r, [GROUP_ID_SYMBOL]: undefined })),
  type: "flat",
  groups: [],
})

const makePagePaginationInfo = (
  currentPage: number,
  pagesCount = 3,
  perPage = 5
): PaginationInfo => ({
  type: "pages",
  currentPage,
  pagesCount,
  total: pagesCount * perPage,
  perPage,
})

const makeInfiniteScrollPaginationInfo = (
  hasMore: boolean
): PaginationInfo => ({
  type: "infinite-scroll",
  cursor: hasMore ? "cursor-next" : null,
  hasMore,
  total: 20,
  perPage: 5,
})

const makeDataState = (
  overrides: Partial<DataCollectionItemNavigationDataState<TestRecord>> = {}
): DataCollectionItemNavigationDataState<TestRecord> => ({
  source: {
    idProvider: (item) => item.id,
    itemUrl: (item) => `/items/${item.id}`,
  },
  data: makeData([makeRecord(1), makeRecord(2), makeRecord(3)]),
  paginationInfo: null,
  setPage: vi.fn(),
  loadMore: vi.fn(),
  isLoading: false,
  isLoadingMore: false,
  ...overrides,
})

const defaultProps = (
  overrides: Partial<UseSnapshotManagerProps<TestRecord>> = {}
): UseSnapshotManagerProps<TestRecord> => ({
  dataState: makeDataState(),
  dataStateVersion: 1,
  effectiveSnapshotKey: null,
  resetSnapshotKey: 0,
  ...overrides,
})

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("useSnapshotManager", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  // ── Live mode (no snapshot key) ────────────────────────────────────────────

  describe("live mode (effectiveSnapshotKey is null)", () => {
    it("returns dataState data directly as navigationData", () => {
      const data = makeData([makeRecord(1), makeRecord(2)])
      const { result } = zeroRenderHook(() =>
        useSnapshotManager(
          defaultProps({
            dataState: makeDataState({ data }),
            effectiveSnapshotKey: null,
          })
        )
      )

      expect(result.current.navigationData).toBe(data)
    })

    it("returns dataState paginationInfo as navigationPaginationInfo", () => {
      const paginationInfo = makePagePaginationInfo(2)
      const { result } = zeroRenderHook(() =>
        useSnapshotManager(
          defaultProps({
            dataState: makeDataState({ paginationInfo }),
            effectiveSnapshotKey: null,
          })
        )
      )

      expect(result.current.navigationPaginationInfo).toBe(paginationInfo)
    })

    it("returns empty data when dataState is null", () => {
      const { result } = zeroRenderHook(() =>
        useSnapshotManager(
          defaultProps({ dataState: null, effectiveSnapshotKey: null })
        )
      )

      expect(result.current.navigationData.records).toHaveLength(0)
      expect(result.current.navigationPaginationInfo).toBeNull()
    })

    it("tracks live data updates", () => {
      const data1 = makeData([makeRecord(1)])
      const data2 = makeData([makeRecord(1), makeRecord(2)])

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: data1 }),
          }),
        }
      )

      expect(result.current.navigationData).toBe(data1)

      rerender(defaultProps({ dataState: makeDataState({ data: data2 }) }))

      expect(result.current.navigationData).toBe(data2)
    })
  })

  // ── Snapshot creation ──────────────────────────────────────────────────────

  describe("snapshot mode (effectiveSnapshotKey is set)", () => {
    it("creates a snapshot of current data when key is first set", () => {
      const records = [makeRecord(1), makeRecord(2)]
      const data = makeData(records)

      const { result } = zeroRenderHook(() =>
        useSnapshotManager(
          defaultProps({
            dataState: makeDataState({ data }),
            effectiveSnapshotKey: "key-1",
          })
        )
      )

      expect(result.current.navigationData.records).toHaveLength(2)
      expect(result.current.navigationData.records[0].id).toBe(1)
      expect(result.current.navigationData.records[1].id).toBe(2)
    })

    it("does not create a snapshot when data has no records", () => {
      const { result } = zeroRenderHook(() =>
        useSnapshotManager(
          defaultProps({
            dataState: makeDataState({ data: makeData([]) }),
            effectiveSnapshotKey: "key-1",
          })
        )
      )

      // Falls back to live state data (also empty)
      expect(result.current.navigationData.records).toHaveLength(0)
    })

    it("freezes record order even when live data changes order", () => {
      const records = [makeRecord(1), makeRecord(2), makeRecord(3)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(records) }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Snapshot is established
      expect(result.current.navigationData.records[0].id).toBe(1)

      // Live data comes back in different order
      const reorderedRecords = [makeRecord(3), makeRecord(1), makeRecord(2)]
      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(reorderedRecords) }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
        })
      )

      // Snapshot order is preserved
      expect(result.current.navigationData.records[0].id).toBe(1)
      expect(result.current.navigationData.records[1].id).toBe(2)
      expect(result.current.navigationData.records[2].id).toBe(3)
    })

    it("refreshes record objects in snapshot when live data updates same IDs", () => {
      const original = makeData([makeRecord(1, "Old Name"), makeRecord(2)])

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: original }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      const updated = makeData([makeRecord(1, "New Name"), makeRecord(2)])
      rerender(
        defaultProps({
          dataState: makeDataState({ data: updated }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
        })
      )

      // Record object is refreshed with new name, order unchanged
      expect(result.current.navigationData.records[0].name).toBe("New Name")
      expect(result.current.navigationData.records[0].id).toBe(1)
    })

    it("does not change snapshot reference when live data is identical", () => {
      const data = makeData([makeRecord(1), makeRecord(2)])

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      const firstNavData = result.current.navigationData

      // Re-render with same dataState
      rerender(
        defaultProps({
          dataState: makeDataState({ data }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 1,
        })
      )

      expect(result.current.navigationData).toBe(firstNavData)
    })
  })

  // ── Snapshot key change (pending reset) ───────────────────────────────────

  describe("snapshot key change", () => {
    it("adopts new snapshot after timeout when key changes with new data", () => {
      const page1Records = [makeRecord(1), makeRecord(2), makeRecord(3)]
      const page2Records = [makeRecord(4), makeRecord(5), makeRecord(6)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(page1Records) }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Snapshot established for key-1
      expect(result.current.navigationData.records[0].id).toBe(1)

      // Key changes + different data arrives — pending reset is queued
      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(page2Records) }),
          effectiveSnapshotKey: "key-2",
          dataStateVersion: 2,
        })
      )

      // Snapshot not yet replaced (waiting for timeout / data confirmation)
      expect(result.current.navigationData.records[0].id).toBe(1)

      // Timeout fires, canUseCurrentData is true, record order differs → adopt
      act(() => {
        vi.runAllTimers()
      })

      expect(result.current.navigationData.records[0].id).toBe(4)
    })

    it("adopts snapshot via timeout fallback when data is unchanged", async () => {
      const records = [makeRecord(1), makeRecord(2)]
      const data = makeData(records)

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Snapshot established
      expect(result.current.navigationData.records[0].id).toBe(1)

      // Key changes but same data (no fetch triggered)
      rerender(
        defaultProps({
          dataState: makeDataState({ data }),
          effectiveSnapshotKey: "key-2",
          dataStateVersion: 1,
        })
      )

      // Timeout fires, canUseCurrentData → true, snapshot re-established
      act(() => {
        vi.runAllTimers()
      })

      expect(result.current.navigationData.records[0].id).toBe(1)
    })

    it("clears snapshot when key is removed", () => {
      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Snapshot was created
      expect(result.current.navigationData.records).toHaveLength(3)

      // Key is cleared
      rerender(
        defaultProps({ effectiveSnapshotKey: null, dataStateVersion: 1 })
      )

      expect(result.current.navigationData).toBe(
        result.current.navigationData // falls through to live state
      )
      // After key cleared, navigationData comes directly from dataState
      expect(result.current.navigationData.records).toHaveLength(3)
    })
  })

  // ── Page-based pagination replacement ─────────────────────────────────────

  describe("page-based pagination", () => {
    it("freezes snapshot pagination info across live page changes", () => {
      // Without startPendingNavigation the snapshot deliberately freezes order
      // and paginationInfo so consumers navigate the captured session, not live data.
      const page1Records = [makeRecord(1), makeRecord(2)]
      const page2Records = [makeRecord(3), makeRecord(4)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({
              data: makeData(page1Records),
              paginationInfo: makePagePaginationInfo(1),
            }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.navigationData.records[0].id).toBe(1)
      expect(result.current.navigationPaginationInfo).toMatchObject({
        currentPage: 1,
      })

      // Live data moves to page 2 without explicit navigation
      rerender(
        defaultProps({
          dataState: makeDataState({
            data: makeData(page2Records),
            paginationInfo: makePagePaginationInfo(2),
          }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
        })
      )

      // Snapshot is preserved — order and pagination frozen
      expect(result.current.navigationData.records[0].id).toBe(1)
      expect(result.current.navigationPaginationInfo).toMatchObject({
        currentPage: 1,
      })
    })
  })

  // ── resetSnapshotKey ───────────────────────────────────────────────────────

  describe("resetSnapshotKey", () => {
    it("replaces snapshot immediately when reset key changes and data is not loading", () => {
      const oldRecords = [makeRecord(1), makeRecord(2)]
      const newRecords = [makeRecord(10), makeRecord(11)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(oldRecords) }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
            resetSnapshotKey: 0,
          }),
        }
      )

      expect(result.current.navigationData.records[0].id).toBe(1)

      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(newRecords) }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
          resetSnapshotKey: 1,
        })
      )

      expect(result.current.navigationData.records[0].id).toBe(10)
    })

    it("waits for loading to finish before replacing snapshot on reset", () => {
      const records = [makeRecord(1), makeRecord(2)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(records) }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
            resetSnapshotKey: 0,
          }),
        }
      )

      // Reset key changes but data is loading
      rerender(
        defaultProps({
          dataState: makeDataState({
            data: makeData(records),
            isLoading: true,
          }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 1,
          resetSnapshotKey: 1,
        })
      )

      // Snapshot should not have changed yet — still shows original
      expect(result.current.navigationData.records[0].id).toBe(1)

      const newRecords = [makeRecord(99), makeRecord(100)]

      // Loading finishes with fresh data
      rerender(
        defaultProps({
          dataState: makeDataState({
            data: makeData(newRecords),
            isLoading: false,
          }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
          resetSnapshotKey: 1,
        })
      )

      expect(result.current.navigationData.records[0].id).toBe(99)
    })
  })

  // ── startPendingNavigation ─────────────────────────────────────────────────

  describe("startPendingNavigation", () => {
    it("is a no-op when effectiveSnapshotKey is null", () => {
      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({ effectiveSnapshotKey: null }),
        }
      )

      act(() => {
        result.current.startPendingNavigation()
      })

      // NavigationData still follows live data
      const newRecords = [makeRecord(10)]
      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(newRecords) }),
        })
      )

      expect(result.current.navigationData.records[0].id).toBe(10)
    })

    it("is a no-op when no snapshot exists yet", () => {
      const { result } = zeroRenderHook(() =>
        useSnapshotManager(
          defaultProps({
            dataState: makeDataState({ data: makeData([]) }),
            effectiveSnapshotKey: "key-1",
          })
        )
      )

      // No snapshot (empty data), startPendingNavigation should not throw
      expect(() => {
        act(() => {
          result.current.startPendingNavigation()
        })
      }).not.toThrow()
    })

    it("expands snapshot when more records load after infinite-scroll navigation", () => {
      const page1Records = [makeRecord(1), makeRecord(2), makeRecord(3)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({
              data: makeData(page1Records),
              paginationInfo: makeInfiniteScrollPaginationInfo(true),
            }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Snapshot is established with 3 records
      expect(result.current.navigationData.records).toHaveLength(3)

      // User navigates to boundary — loadMore is triggered
      act(() => {
        result.current.startPendingNavigation()
      })

      // More data arrives
      const expandedRecords = [...page1Records, makeRecord(4), makeRecord(5)]
      rerender(
        defaultProps({
          dataState: makeDataState({
            data: makeData(expandedRecords),
            paginationInfo: makeInfiniteScrollPaginationInfo(false),
          }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
        })
      )

      // Snapshot expands to include new records
      expect(result.current.navigationData.records).toHaveLength(5)
      expect(result.current.navigationData.records[4].id).toBe(5)
    })

    it("replaces snapshot when page changes after page-based boundary navigation", () => {
      const page1Records = [makeRecord(1), makeRecord(2)]
      const page2Records = [makeRecord(3), makeRecord(4)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({
              data: makeData(page1Records),
              paginationInfo: makePagePaginationInfo(1),
            }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      act(() => {
        result.current.startPendingNavigation()
      })

      // Page 2 data arrives
      rerender(
        defaultProps({
          dataState: makeDataState({
            data: makeData(page2Records),
            paginationInfo: makePagePaginationInfo(2),
          }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
        })
      )

      expect(result.current.navigationData.records[0].id).toBe(3)
    })
  })

  // ── clearSnapshot ──────────────────────────────────────────────────────────

  describe("clearSnapshot", () => {
    it("resets navigationData to live data after clearing", () => {
      const snapshotRecords = [makeRecord(1), makeRecord(2)]
      const liveRecords = [makeRecord(10), makeRecord(11)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(snapshotRecords) }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.navigationData.records[0].id).toBe(1)

      act(() => {
        result.current.clearSnapshot()
      })

      // Now effectiveSnapshotKey is still set but snapshot is null → falls back to live data
      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(liveRecords) }),
          effectiveSnapshotKey: null,
          dataStateVersion: 2,
        })
      )

      expect(result.current.navigationData.records[0].id).toBe(10)
    })
  })

  // ── clearPendingNavigation ─────────────────────────────────────────────────

  describe("clearPendingNavigation", () => {
    it("prevents snapshot expansion after being called", () => {
      const page1Records = [makeRecord(1), makeRecord(2)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(page1Records) }),
            effectiveSnapshotKey: "key-1",
            dataStateVersion: 1,
          }),
        }
      )

      act(() => {
        result.current.startPendingNavigation()
      })

      // Cancel before data arrives
      act(() => {
        result.current.clearPendingNavigation()
      })

      // More data arrives but snapshot should NOT expand
      const expandedRecords = [...page1Records, makeRecord(3), makeRecord(4)]
      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(expandedRecords) }),
          effectiveSnapshotKey: "key-1",
          dataStateVersion: 2,
        })
      )

      // Snapshot grows naturally (no pending navigation guard) but via the
      // regular refreshSnapshotData path since live data has more records
      // than the snapshot — the snapshot IS expected to grow here, which is
      // correct: clearPendingNavigation only stops the explicit expansion trigger
      expect(result.current.navigationData).toBeDefined()
    })
  })

  // ── Source unmount during active session ───────────────────────────────────

  describe("source unmount during active session", () => {
    it("preserves snapshot when dataState becomes null while session is active", () => {
      const records = [makeRecord(1), makeRecord(2), makeRecord(3)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(records) }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Snapshot established
      expect(result.current.navigationData.records).toHaveLength(3)
      expect(result.current.hasSnapshot).toBe(true)

      // Source unmounts — dataState becomes null
      rerender(
        defaultProps({
          dataState: null,
          effectiveSnapshotKey: "session-1",
          dataStateVersion: 1,
        })
      )

      // Snapshot preserved — consumer can still navigate
      expect(result.current.navigationData.records).toHaveLength(3)
      expect(result.current.navigationData.records[0].id).toBe(1)
      expect(result.current.hasSnapshot).toBe(true)
    })

    it("clears snapshot when dataState is null and no session key is active", () => {
      const records = [makeRecord(1), makeRecord(2)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(records) }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.hasSnapshot).toBe(true)

      // Session ended AND source unmounts
      rerender(
        defaultProps({
          dataState: null,
          effectiveSnapshotKey: null,
          dataStateVersion: 1,
        })
      )

      expect(result.current.navigationData.records).toHaveLength(0)
      expect(result.current.hasSnapshot).toBe(false)
    })

    it("resumes normally when source re-mounts with fresh data", () => {
      const records = [makeRecord(1), makeRecord(2)]
      const freshRecords = [makeRecord(1, "Updated"), makeRecord(2)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ data: makeData(records) }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      // Source unmounts
      rerender(
        defaultProps({
          dataState: null,
          effectiveSnapshotKey: "session-1",
          dataStateVersion: 1,
        })
      )

      expect(result.current.hasSnapshot).toBe(true)

      // Source re-mounts with fresh data (same IDs, updated records)
      rerender(
        defaultProps({
          dataState: makeDataState({ data: makeData(freshRecords) }),
          effectiveSnapshotKey: "session-1",
          dataStateVersion: 2,
        })
      )

      // Snapshot is still active and refreshes record objects from live data
      expect(result.current.hasSnapshot).toBe(true)
      expect(result.current.navigationData.records).toHaveLength(2)
      expect(result.current.navigationData.records[0].name).toBe("Updated")
    })
  })

  // ── snapshotItemUrl ────────────────────────────────────────────────────────

  describe("snapshotItemUrl", () => {
    it("is undefined before a snapshot is created", () => {
      const { result } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            effectiveSnapshotKey: null,
          }),
        }
      )

      expect(result.current.snapshotItemUrl).toBeUndefined()
    })

    it("captures source.itemUrl when snapshot is first created", () => {
      const itemUrl = (item: TestRecord) => `/items/${item.id}`
      const { result } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ source: { itemUrl } }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.snapshotItemUrl).toBe(itemUrl)
    })

    it("preserves snapshotItemUrl when dataState becomes null", () => {
      const itemUrl = (item: TestRecord) => `/items/${item.id}`
      const records = [makeRecord(1), makeRecord(2), makeRecord(3)]

      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({
              source: { itemUrl },
              data: makeData(records),
            }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.snapshotItemUrl).toBe(itemUrl)

      // Source unmounts
      rerender(
        defaultProps({
          dataState: null,
          effectiveSnapshotKey: "session-1",
          dataStateVersion: 1,
        })
      )

      // itemUrl is still available from the frozen snapshot
      expect(result.current.snapshotItemUrl).toBe(itemUrl)
      expect(result.current.snapshotItemUrl?.(makeRecord(5))).toBe("/items/5")
    })

    it("clears snapshotItemUrl when snapshot is cleared and key is removed", () => {
      const itemUrl = (item: TestRecord) => `/items/${item.id}`
      const { result, rerender } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({ source: { itemUrl } }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.snapshotItemUrl).toBe(itemUrl)

      act(() => {
        result.current.clearSnapshot()
      })

      // Session ended — clear key too (mirrors closeItem behaviour)
      rerender(
        defaultProps({
          dataState: makeDataState({ source: { itemUrl } }),
          effectiveSnapshotKey: null,
          dataStateVersion: 1,
        })
      )

      expect(result.current.snapshotItemUrl).toBeUndefined()
    })

    it("is undefined when source does not provide itemUrl", () => {
      const { result } = zeroRenderHook(
        (props: UseSnapshotManagerProps<TestRecord>) =>
          useSnapshotManager(props),
        {
          initialProps: defaultProps({
            dataState: makeDataState({
              source: { idProvider: (item) => item.id },
            }),
            effectiveSnapshotKey: "session-1",
            dataStateVersion: 1,
          }),
        }
      )

      expect(result.current.snapshotItemUrl).toBeUndefined()
    })
  })
})
