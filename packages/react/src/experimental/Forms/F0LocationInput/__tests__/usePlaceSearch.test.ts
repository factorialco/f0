import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { F0LocationSuggestion } from "../types"

import { MIN_QUERY_LENGTH, usePlaceSearch } from "../hooks/usePlaceSearch"

const suggestion = (id: string): F0LocationSuggestion => ({
  id,
  label: `Place ${id}`,
})

const deferred = <T>() => {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

describe("usePlaceSearch", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("does not search below the minimum query length", () => {
    const searchPlaces = vi.fn().mockResolvedValue([])
    const { result } = renderHook(() =>
      usePlaceSearch({ searchPlaces, country: undefined, enabled: true })
    )

    act(() => result.current.search("a".repeat(MIN_QUERY_LENGTH - 1)))
    act(() => vi.advanceTimersByTime(1000))

    expect(searchPlaces).not.toHaveBeenCalled()
    expect(result.current.suggestions).toEqual([])
  })

  it("debounces keystrokes into one call and passes the country", async () => {
    const searchPlaces = vi.fn().mockResolvedValue([suggestion("1")])
    const { result } = renderHook(() =>
      usePlaceSearch({ searchPlaces, country: "es", enabled: true })
    )

    act(() => result.current.search("Co"))
    act(() => vi.advanceTimersByTime(100))
    act(() => result.current.search("Col"))
    act(() => vi.advanceTimersByTime(100))
    act(() => result.current.search("Colon"))
    expect(result.current.isSearching).toBe(true)

    await act(async () => {
      vi.advanceTimersByTime(250)
    })

    expect(searchPlaces).toHaveBeenCalledTimes(1)
    expect(searchPlaces).toHaveBeenCalledWith("Colon", { country: "es" })
    expect(result.current.suggestions).toEqual([suggestion("1")])
    expect(result.current.isSearching).toBe(false)
    expect(result.current.query).toBe("Colon")
  })

  it("ignores a response that arrives after a newer search", async () => {
    const first = deferred<F0LocationSuggestion[]>()
    const second = deferred<F0LocationSuggestion[]>()
    const searchPlaces = vi
      .fn()
      .mockReturnValueOnce(first.promise)
      .mockReturnValueOnce(second.promise)
    const { result } = renderHook(() =>
      usePlaceSearch({ searchPlaces, country: undefined, enabled: true })
    )

    act(() => result.current.search("first"))
    act(() => vi.advanceTimersByTime(250))
    act(() => result.current.search("second"))
    act(() => vi.advanceTimersByTime(250))
    expect(searchPlaces).toHaveBeenCalledTimes(2)

    await act(async () => {
      second.resolve([suggestion("2")])
    })
    await act(async () => {
      first.resolve([suggestion("1")])
    })

    expect(result.current.suggestions).toEqual([suggestion("2")])
  })

  it("treats a rejected search as no results", async () => {
    const searchPlaces = vi.fn().mockRejectedValue(new Error("offline"))
    vi.spyOn(console, "warn").mockImplementation(() => {})
    const { result } = renderHook(() =>
      usePlaceSearch({ searchPlaces, country: undefined, enabled: true })
    )

    act(() => result.current.search("Colon"))
    await act(async () => {
      vi.advanceTimersByTime(250)
    })

    expect(result.current.suggestions).toEqual([])
    expect(result.current.isSearching).toBe(false)
  })

  it("drops cached suggestions when the country changes", async () => {
    const searchPlaces = vi.fn().mockResolvedValue([suggestion("1")])
    const { result, rerender } = renderHook(
      ({ country }: { country: "es" | "fr" | undefined }) =>
        usePlaceSearch({ searchPlaces, country, enabled: true }),
      { initialProps: { country: "es" } }
    )

    act(() => result.current.search("Colon"))
    await act(async () => {
      vi.advanceTimersByTime(250)
    })
    expect(result.current.suggestions).toHaveLength(1)

    rerender({ country: "fr" })

    expect(result.current.suggestions).toEqual([])
    expect(result.current.query).toBe("")
  })

  it("is inert when disabled", () => {
    const searchPlaces = vi.fn().mockResolvedValue([suggestion("1")])
    const { result } = renderHook(() =>
      usePlaceSearch({ searchPlaces, country: undefined, enabled: false })
    )

    act(() => result.current.search("Colon"))
    act(() => vi.advanceTimersByTime(1000))

    expect(searchPlaces).not.toHaveBeenCalled()
    expect(result.current.suggestions).toEqual([])
  })
})
