import { act, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useDashboardItemData } from "../hooks/useDashboardItemData"

describe("useDashboardItemData", () => {
  it("refetches with the latest callback when the item-filter key changes", async () => {
    const firstFetch = vi.fn().mockResolvedValue({ value: 10 })
    const secondFetch = vi.fn().mockResolvedValue({ value: 20 })
    const { result, rerender } = renderHook(
      ({ fetchData, refreshKey }) =>
        useDashboardItemData(fetchData, {}, true, refreshKey),
      {
        initialProps: {
          fetchData: firstFetch,
          refreshKey: "{}",
        },
      }
    )

    await waitFor(() => expect(result.current.data).toEqual({ value: 10 }))

    rerender({
      fetchData: secondFetch,
      refreshKey: '{"country":{"operator":"equals","values":["ES"]}}',
    })

    await waitFor(() => expect(result.current.data).toEqual({ value: 20 }))
    expect(firstFetch).toHaveBeenCalledOnce()
    expect(secondFetch).toHaveBeenCalledOnce()
  })

  it("does not refetch only because the callback identity changes", async () => {
    const firstFetch = vi.fn().mockResolvedValue({ value: 10 })
    const secondFetch = vi.fn().mockResolvedValue({ value: 20 })
    const { result, rerender } = renderHook(
      ({ fetchData }) => useDashboardItemData(fetchData, {}, true, "{}"),
      { initialProps: { fetchData: firstFetch } }
    )

    await waitFor(() => expect(result.current.data).toEqual({ value: 10 }))
    await act(() => rerender({ fetchData: secondFetch }))

    expect(result.current.data).toEqual({ value: 10 })
    expect(secondFetch).not.toHaveBeenCalled()
  })
})
