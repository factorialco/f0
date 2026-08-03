import { act, renderHook } from "@testing-library/react"
import { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { F0EventCatcherProvider } from "@/lib/providers/events"
import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { useEventEmitter } from "./useEventEmitter"

type Filters = FiltersState<FiltersDefinition>

const asFilters = (value: Record<string, unknown>) =>
  value as unknown as Filters

const setup = (defaultFilters?: Record<string, unknown>) => {
  const onEvent = vi.fn()
  const wrapper = ({ children }: { children: ReactNode }) => (
    <F0EventCatcherProvider onEvent={onEvent}>
      {children}
    </F0EventCatcherProvider>
  )
  const { result } = renderHook(
    () =>
      useEventEmitter({
        defaultFilters: defaultFilters && asFilters(defaultFilters),
      }),
    { wrapper }
  )

  return { onEvent, result }
}

describe("useEventEmitter", () => {
  describe("emitFilterChange", () => {
    it("emits a scalar-array filter as-is", () => {
      const { onEvent, result } = setup({})

      act(() =>
        result.current.emitFilterChange(asFilters({ category: ["documents"] }))
      )

      expect(onEvent).toHaveBeenCalledWith("datacollection.filter-change", {
        name: "category",
        value: ["documents"],
      })
    })

    it("emits a date-range filter as normalized ISO strings (previously dropped)", () => {
      const { onEvent, result } = setup({})

      act(() =>
        result.current.emitFilterChange(
          asFilters({
            createdAt: {
              from: new Date("2025-01-01T00:00:00.000Z"),
              to: new Date("2025-02-01T00:00:00.000Z"),
            },
          })
        )
      )

      expect(onEvent).toHaveBeenCalledWith("datacollection.filter-change", {
        name: "createdAt",
        value: {
          from: "2025-01-01T00:00:00.000Z",
          to: "2025-02-01T00:00:00.000Z",
        },
      })
    })

    it("does not emit when nothing changed from the default filters", () => {
      const filters = { category: ["documents"] }
      const { onEvent, result } = setup(filters)

      act(() => result.current.emitFilterChange(asFilters(filters)))

      expect(onEvent).not.toHaveBeenCalled()
    })
  })

  describe("emitPresetClick", () => {
    it("emits the changed preset filter", () => {
      const { onEvent, result } = setup({})

      act(() =>
        result.current.emitPresetClick(asFilters({ category: ["timeoff"] }))
      )

      expect(onEvent).toHaveBeenCalledWith("datacollection.preset-click", {
        name: "category",
        value: ["timeoff"],
      })
    })
  })
})
