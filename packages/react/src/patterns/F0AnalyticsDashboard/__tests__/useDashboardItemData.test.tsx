import { act, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

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

  it("ignores a stale response after the item-filter key starts a newer request", async () => {
    let resolveFirst: ((value: { value: number }) => void) | undefined
    let resolveSecond: ((value: { value: number }) => void) | undefined
    const firstFetch = vi.fn(
      () =>
        new Promise<{ value: number }>((resolve) => {
          resolveFirst = resolve
        })
    )
    const secondFetch = vi.fn(
      () =>
        new Promise<{ value: number }>((resolve) => {
          resolveSecond = resolve
        })
    )
    const { result, rerender } = renderHook(
      ({ fetchData, refreshKey }) =>
        useDashboardItemData(fetchData, {}, true, refreshKey),
      {
        initialProps: { fetchData: firstFetch, refreshKey: "{}" },
      }
    )

    await waitFor(() => expect(firstFetch).toHaveBeenCalledOnce())
    rerender({
      fetchData: secondFetch,
      refreshKey: '{"country":{"operator":"equals","values":["ES"]}}',
    })
    await waitFor(() => expect(secondFetch).toHaveBeenCalledOnce())

    await act(async () => resolveSecond?.({ value: 20 }))
    await waitFor(() => expect(result.current.data).toEqual({ value: 20 }))
    await act(async () => resolveFirst?.({ value: 10 }))

    expect(result.current.data).toEqual({ value: 20 })
  })

  it("goes back to the skeleton on a filters change, dimming only for a dataKey", async () => {
    const fetchData = vi
      .fn()
      .mockResolvedValueOnce({ value: 10 })
      .mockImplementationOnce(() => new Promise(() => {}))
    const { result, rerender } = renderHook(
      ({ filters }) =>
        useDashboardItemData(fetchData, filters, true, "{}", "none"),
      { initialProps: { filters: {} as FiltersState<FiltersDefinition> } }
    )

    await waitFor(() => expect(result.current.data).toEqual({ value: 10 }))

    rerender({ filters: { country: { operator: "equals", values: ["ES"] } } })

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2))
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isRefreshing).toBe(false)
  })
})
