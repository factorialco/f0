import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useDataCollectionSource } from ".."

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

describe("useDataCollectionSource", () => {
  it("returns stable references when source and deps are stable", () => {
    const dataAdapter = { fetchData: vi.fn(async () => ({ records: [] })) }

    const { result, rerender } = renderHook(
      ({ dep }: { dep: number }) =>
        useDataCollectionSource(
          {
            dataAdapter,
            filters: { name: { type: "search" as const, label: "Name" } },
            navigationFilters: undefined,
          },
          [dep]
        ),
      { initialProps: { dep: 1 }, wrapper: Wrapper }
    )

    const first = result.current

    // Rerender without changing props or deps
    rerender({ dep: 1 })

    const second = result.current

    // Core references should be stable (note: the returned object itself is new on rerender)
    expect(second.filters).toBe(first.filters)
    expect(second.dataAdapter).toBe(first.dataAdapter)
    // setCurrentFilters is a wrapper function, identity is not guaranteed to be stable
    expect(second.setCurrentSortings).toBe(first.setCurrentSortings)
    expect(second.setCurrentSearch).toBe(first.setCurrentSearch)
    expect(second.setIsLoading).toBe(first.setIsLoading)
    expect(second.setCurrentNavigationFilters).toBe(
      first.setCurrentNavigationFilters
    )

    // Invoke setters with identical values to ensure no type errors and stable behavior
    second.setCurrentFilters(second.currentFilters)
    second.setCurrentSearch(second.currentSearch)
    second.setIsLoading(second.isLoading)

    // Rerender again with same deps
    rerender({ dep: 1 })

    const third = result.current

    // Still stable references for memoized and state handlers
    expect(third.filters).toBe(first.filters)
    expect(third.dataAdapter).toBe(first.dataAdapter)
  })

  it("updates memoized fields only when deps change", () => {
    const dataAdapter = { fetchData: vi.fn(async () => ({ records: [] })) }

    const summaries = { total: { type: "sum" as const } }

    const { result, rerender } = renderHook(
      ({ dep, sums }: { dep: number; sums: typeof summaries }) =>
        useDataCollectionSource(
          {
            dataAdapter,
            summaries: sums,
          },
          [dep]
        ),
      { initialProps: { dep: 1, sums: summaries }, wrapper: Wrapper }
    )

    const first = result.current

    // Change non-dependency prop reference (new object with same content)
    const newSummaries = { total: { type: "sum" as const } }
    rerender({ dep: 1, sums: newSummaries })

    const second = result.current

    // summaries is memoized with deps; with same dep it should remain referentially equal
    expect(second.summaries).toBe(first.summaries)

    // Now change dependency so memoized values can update
    rerender({ dep: 2, sums: newSummaries })

    const third = result.current
    expect(third.summaries).not.toBe(first.summaries)
  })

  it("exposes the provided filters definition on source.filters", () => {
    const dataAdapter = { fetchData: vi.fn(async () => ({ records: [] })) }
    const filters = { name: { type: "search" as const, label: "Name" } }

    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter,
          filters,
        }),
      { wrapper: Wrapper }
    )

    expect(result.current.filters).toBe(filters)
  })

  it("preserves lanes configuration in the returned source", () => {
    const dataAdapter = { fetchData: vi.fn(async () => ({ records: [] })) }
    const filters = {
      status: {
        type: "in" as const,
        label: "Status",
        options: { options: [{ value: "open", label: "Open" }] },
      },
    }
    const lanes = [
      { id: "open", filters: { status: ["open"] } },
      { id: "all", filters: {} },
    ]

    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter,
          filters,
          lanes,
        }),
      { wrapper: Wrapper }
    )

    expect(result.current.lanes).toBe(lanes)
  })
})
