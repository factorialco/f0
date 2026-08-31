import { act } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import { DataSourceDefinition } from "../types/datasource.typings"
import { useDataSource } from "../useDataSource"

const definition = {
  dataAdapter: {
    paginationType: "pages",
    fetchData: async () => ({
      records: [],
      type: "pages",
      total: 0,
      perPage: 20,
      currentPage: 1,
      pagesCount: 1,
    }),
  },
  defaultSortings: { field: "name", order: "asc" },
} as unknown as DataSourceDefinition

describe("useDataSource sortings", () => {
  it("drops a value-equal setCurrentSortings so the identity stays stable", () => {
    const { result } = zeroRenderHook(() => useDataSource(definition))

    const before = result.current.currentSortings
    act(() => {
      result.current.setCurrentSortings({ field: "name", order: "asc" })
    })

    // Same value → same object. This is what stops the URL sync's own
    // `dc_sort=name-asc` re-apply — a fresh object carrying the default value —
    // from looking like a real sorting change and resetting the nested tree.
    expect(result.current.currentSortings).toBe(before)
  })

  it("applies a genuinely different sorting", () => {
    const { result } = zeroRenderHook(() => useDataSource(definition))

    act(() => {
      result.current.setCurrentSortings({ field: "name", order: "desc" })
    })

    expect(result.current.currentSortings).toEqual({
      field: "name",
      order: "desc",
    })
  })
})
