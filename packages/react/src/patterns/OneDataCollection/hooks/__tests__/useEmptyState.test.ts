import { act } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useEmptyState } from "../useEmptyState"

describe("useEmptyState", () => {
  it("uses the neutral variant for the default 'clear filters' action on no-results", () => {
    const { result } = renderHook(() =>
      useEmptyState(undefined, { retry: vi.fn(), clearFilters: vi.fn() })
    )

    act(() => {
      result.current.setEmptyStateType("no-results")
    })

    expect(result.current.emptyState?.actions?.[0].variant).toBe("neutral")
  })

  it("uses the neutral variant for the default 'retry' action on error", () => {
    const { result } = renderHook(() =>
      useEmptyState(undefined, { retry: vi.fn(), clearFilters: vi.fn() })
    )

    act(() => {
      result.current.setEmptyStateType("error")
    })

    expect(result.current.emptyState?.actions?.[0].variant).toBe("neutral")
  })

  it("does not force neutral onto a custom action's explicit variant", () => {
    const { result } = renderHook(() =>
      useEmptyState(
        {
          "no-results": {
            actions: [
              {
                label: "Upgrade",
                onClick: vi.fn(),
                variant: "promote",
              },
            ],
          },
        },
        { retry: vi.fn(), clearFilters: vi.fn() }
      )
    )

    act(() => {
      result.current.setEmptyStateType("no-results")
    })

    expect(result.current.emptyState?.actions?.[0].variant).toBe("promote")
  })
})
