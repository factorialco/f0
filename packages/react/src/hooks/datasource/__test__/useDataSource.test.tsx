import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import {
  BaseDataAdapter,
  BaseFetchOptions,
  BaseResponse,
  GroupingDefinition,
  RecordType,
} from "../types"
import { SortingsDefinition } from "../types/sortings.typings"
import { useDataSource } from "../useDataSource"

interface TestRecord extends RecordType {
  id: number
}

type TestFilters = Record<string, never>

const baseAdapter: BaseDataAdapter<
  TestRecord,
  TestFilters,
  BaseFetchOptions<TestFilters>,
  BaseResponse<TestRecord>
> = {
  fetchData: vi.fn(() => ({ records: [] })),
}

const renderDataSource = () =>
  renderHook(() =>
    useDataSource<
      TestRecord,
      TestFilters,
      SortingsDefinition,
      GroupingDefinition<TestRecord>
    >({
      dataAdapter: baseAdapter,
      defaultSortings: { field: "status", order: "asc" },
    })
  )

describe("useDataSource — setCurrentSortings", () => {
  it("ignores a deep-equal sortings value so it does not trigger a redundant refetch", () => {
    const { result } = renderDataSource()

    const before = result.current.currentSortings
    expect(before).toEqual({ field: "status", order: "asc" })

    act(() => {
      // Equal value, new object reference — as URL/storage hydration produces.
      result.current.setCurrentSortings({ field: "status", order: "asc" })
    })

    // Reference preserved → no state change → no downstream refetch.
    expect(result.current.currentSortings).toBe(before)
  })

  it("applies a different sortings value", () => {
    const { result } = renderDataSource()

    act(() => {
      result.current.setCurrentSortings({ field: "name", order: "desc" })
    })

    expect(result.current.currentSortings).toEqual({
      field: "name",
      order: "desc",
    })
  })
})
