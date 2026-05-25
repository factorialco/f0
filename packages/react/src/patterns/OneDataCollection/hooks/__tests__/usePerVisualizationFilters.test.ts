import { act } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { usePerVisualizationFilters } from "../usePerVisualizationFilters"

const departmentFilter = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: [
        { value: "Engineering", label: "Engineering" },
        { value: "Marketing", label: "Marketing" },
      ],
    },
  },
} as const

const searchFilter = {
  search: {
    type: "search" as const,
    label: "Search",
  },
} as const

const salaryFilter = {
  salary: {
    type: "number" as const,
    label: "Salary",
    options: {
      modes: ["single" as const],
      min: 0,
    },
  },
} as const

const allFilters = {
  ...departmentFilter,
  ...searchFilter,
  ...salaryFilter,
} as const

type AllFilters = typeof allFilters

describe("usePerVisualizationFilters", () => {
  describe("when no visualization has filter overrides", () => {
    it("should pass through source filters and presets", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: [
            { label: "Eng", filter: { department: ["Engineering"] } },
          ],
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [
            { type: "table", options: {} },
            { type: "card", options: {} },
          ],
          currentVisualization: 0,
        })
      )

      expect(result.current.effectiveFilters).toBe(allFilters)
      expect(result.current.effectivePresets).toEqual([
        { label: "Eng", filter: { department: ["Engineering"] } },
      ])
      expect(result.current.hasPerVisualizationFilters).toBe(false)
      expect(result.current.currentFilters).toEqual({})
      expect(result.current.allVisualizationFilters).toEqual({})
    })

    it("should use source setCurrentFilters directly", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: undefined,
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [{ type: "table", options: {} }],
          currentVisualization: 0,
        })
      )

      act(() => {
        result.current.setCurrentFilters({
          department: ["Engineering"],
        })
      })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Engineering"],
      })
    })
  })

  describe("when visualizations have filter overrides", () => {
    it("should return per-view filters for the active visualization", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: undefined,
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [
            {
              type: "table",
              options: {},
              filters: { department: departmentFilter.department },
            },
            {
              type: "card",
              options: {},
              filters: { salary: salaryFilter.salary },
            },
          ],
          currentVisualization: 0,
        })
      )

      expect(result.current.hasPerVisualizationFilters).toBe(true)
      expect(result.current.effectiveFilters).toEqual({
        department: departmentFilter.department,
      })
    })

    it("should fall back to source filters when active view has no override", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: undefined,
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [
            {
              type: "table",
              options: {},
              // No filter override for this view
            },
            {
              type: "card",
              options: {},
              filters: { salary: salaryFilter.salary },
            },
          ],
          currentVisualization: 0,
        })
      )

      expect(result.current.hasPerVisualizationFilters).toBe(true)
      expect(result.current.effectiveFilters).toBe(allFilters)
    })

    it("should use only per-view presets when visualization defines its own presets", () => {
      const sourceSetCurrentFilters = vi.fn()
      const globalPresets = [
        {
          label: "Eng",
          filter: { department: ["Engineering"] as string[] },
        },
      ]
      const viewPresets = [
        {
          label: "Marketing",
          filter: { department: ["Marketing"] as string[] },
        },
      ]

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: globalPresets,
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [
            {
              type: "table",
              options: {},
              presets: viewPresets,
            },
          ],
          currentVisualization: 0,
        })
      )

      // Per-viz presets REPLACE source presets
      expect(result.current.effectivePresets).toEqual(viewPresets)
    })

    it("should filter global presets to only include those relevant to the active view's filters", () => {
      const sourceSetCurrentFilters = vi.fn()
      const globalPresets = [
        {
          label: "Eng Dept",
          filter: { department: ["Engineering"] as string[] },
        },
        {
          label: "High Salary",
          filter: { salary: { mode: "single" as const, value: 100000 } },
        },
      ]

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: globalPresets,
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [
            {
              type: "table",
              options: {},
              // Only department filter, so salary preset should be excluded
              filters: { department: departmentFilter.department },
            },
          ],
          currentVisualization: 0,
        })
      )

      expect(result.current.effectivePresets).toEqual([
        {
          label: "Eng Dept",
          filter: { department: ["Engineering"] },
        },
      ])
    })

    it("should exclude source presets with keys not in viz effective filters (every-key match)", () => {
      const sourceSetCurrentFilters = vi.fn()
      const globalPresets = [
        {
          label: "Dept Only",
          filter: { department: ["Engineering"] as string[] },
        },
        {
          label: "Mixed Keys",
          filter: {
            department: ["Engineering"] as string[],
            salary: { mode: "single" as const, value: 100000 },
          },
        },
      ]

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: globalPresets,
          sourceCurrentFilters: {},
          sourceSetCurrentFilters,
          visualizations: [
            {
              type: "table",
              options: {},
              // Only department filter — "Mixed Keys" has salary key which is not here
              filters: { department: departmentFilter.department },
            },
          ],
          currentVisualization: 0,
        })
      )

      // "Mixed Keys" excluded because salary key is not in effective filters
      expect(result.current.effectivePresets).toEqual([
        { label: "Dept Only", filter: { department: ["Engineering"] } },
      ])
    })

    it("should save and restore filter state when switching visualizations", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters:
              currentViz === 0 ? { department: ["Engineering"] } : {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      expect(result.current.hasPerVisualizationFilters).toBe(true)

      // Initialize via storage restore (required before switch effect will run)
      const storedStates = {
        "0": { department: ["Engineering"] },
        "1": { salary: { mode: "single" as const, value: 50000 } },
      }

      act(() => {
        result.current.setAllVisualizationFilters(storedStates)
      })

      // Rerender to trigger the initialization effect
      rerender({ currentViz: 0 })

      // Clear mock to isolate the switch call
      sourceSetCurrentFilters.mockClear()

      // Switch to viz 1
      rerender({ currentViz: 1 })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        salary: { mode: "single", value: 50000 },
      })
    })

    it("should expose allVisualizationFilters for storage persistence", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result } = renderHook(() =>
        usePerVisualizationFilters<AllFilters>({
          sourceFilters: allFilters,
          sourcePresets: undefined,
          sourceCurrentFilters: { department: ["Engineering"] },
          sourceSetCurrentFilters,
          visualizations: [
            {
              type: "table",
              options: {},
              filters: { department: departmentFilter.department },
            },
            {
              type: "card",
              options: {},
              filters: { salary: salaryFilter.salary },
            },
          ],
          currentVisualization: 0,
        })
      )

      const allFiltersState = result.current.allVisualizationFilters
      expect(allFiltersState["0"]).toEqual({ department: ["Engineering"] })
    })
  })

  describe("setAllVisualizationFilters (storage restore)", () => {
    it("should restore per-visualization states from storage", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      const storedStates = {
        "0": { department: ["Marketing"] },
        "1": { salary: { mode: "single" as const, value: 50000 } },
      }

      act(() => {
        result.current.setAllVisualizationFilters(storedStates)
      })

      // Rerender to trigger the initialization effect
      rerender({ currentViz: 0 })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Marketing"],
      })
    })

    it("should apply correct filters when visualization index changes from storage restoration", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      const storedStates = {
        "0": { department: ["Marketing"] },
        "1": { salary: { mode: "single" as const, value: 75000 } },
      }

      act(() => {
        result.current.setAllVisualizationFilters(storedStates)
      })

      // Storage then restores viz index to 1
      rerender({ currentViz: 1 })

      // Final settled state should be viz 1's filters
      expect(sourceSetCurrentFilters).toHaveBeenLastCalledWith({
        salary: { mode: "single", value: 75000 },
      })
    })

    it("should only initialize once (idempotent)", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      const stored = { "0": { department: ["Engineering"] } }

      act(() => {
        result.current.setAllVisualizationFilters(stored)
      })

      // Rerender to trigger the initialization effect
      rerender({ currentViz: 0 })

      const callCountAfterFirst = sourceSetCurrentFilters.mock.calls.length

      // Second call should be a no-op (initializedRef is already true)
      act(() => {
        result.current.setAllVisualizationFilters({
          "0": { department: ["Marketing"] },
        })
      })

      rerender({ currentViz: 0 })

      expect(sourceSetCurrentFilters.mock.calls.length).toBe(
        callCountAfterFirst
      )
    })
  })

  describe("synchronous transition (pendingFiltersRef)", () => {
    it("should return target viz filters synchronously when sourceCurrentFilters is still stale", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz, sourceCurrentFilters }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters,
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
              },
            ],
            currentVisualization: currentViz,
          }),
        {
          initialProps: {
            currentViz: 0,
            sourceCurrentFilters: {} as Record<string, unknown>,
          },
        }
      )

      // Initialize via storage restore
      const storedStates = {
        "0": { department: ["Engineering"] },
        "1": { salary: { mode: "single" as const, value: 50000 } },
      }

      act(() => {
        result.current.setAllVisualizationFilters(storedStates)
      })

      // Rerender to trigger the init effect
      rerender({
        currentViz: 0,
        sourceCurrentFilters: { department: ["Engineering"] },
      })

      // Switch to viz 1 while sourceCurrentFilters is still stale
      rerender({
        currentViz: 1,
        sourceCurrentFilters: { department: ["Engineering"] }, // stale!
      })

      // Hook returns viz 1's filters synchronously via pendingFiltersRef
      expect(result.current.currentFilters).toEqual({
        salary: { mode: "single", value: 50000 },
      })
    })

    it("should return default preset filters for never-visited viz during synchronous transition", () => {
      const sourceSetCurrentFilters = vi.fn()
      const vizPresets = [
        {
          label: "High Salary",
          filter: { salary: { mode: "single" as const, value: 100000 } },
        },
      ]

      const { result, rerender } = renderHook(
        ({ currentViz, sourceCurrentFilters }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters,
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
                presets: vizPresets,
              },
            ],
            currentVisualization: currentViz,
          }),
        {
          initialProps: {
            currentViz: 0,
            sourceCurrentFilters: {} as Record<string, unknown>,
          },
        }
      )

      // Initialize storage with only viz 0 — viz 1 has never been visited
      const storedStates = {
        "0": { department: ["Engineering"] },
      }

      act(() => {
        result.current.setAllVisualizationFilters(storedStates)
      })

      rerender({
        currentViz: 0,
        sourceCurrentFilters: { department: ["Engineering"] },
      })

      // Switch to viz 1 (never visited) while sourceCurrentFilters is stale
      rerender({
        currentViz: 1,
        sourceCurrentFilters: { department: ["Engineering"] }, // stale!
      })

      expect(result.current.currentFilters).toEqual({
        salary: { mode: "single", value: 100000 },
      })
    })
  })

  describe("default filters for never-visited visualizations", () => {
    it("should use first per-viz preset when switching to a never-visited visualization", () => {
      const sourceSetCurrentFilters = vi.fn()
      const vizPresets = [
        {
          label: "Active",
          filter: { department: ["Engineering"] as string[] },
        },
      ]

      const { rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                presets: vizPresets,
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      // Switch to viz 1 (never visited, has per-viz presets)
      rerender({ currentViz: 1 })

      // Should apply viz 1's first preset, not {}
      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Engineering"],
      })
    })

    it("should use source presets as fallback when target view has no own presets", () => {
      const sourceSetCurrentFilters = vi.fn()
      const globalPresets = [
        {
          label: "Eng",
          filter: { department: ["Engineering"] as string[] },
        },
      ]

      const { rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: globalPresets,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      // Switch to viz 1 (never visited, no per-viz presets, but has source presets)
      rerender({ currentViz: 1 })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Engineering"],
      })
    })

    it("should fall back to empty filters when no presets exist", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: undefined,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      // Switch to viz 1 (never visited, no presets at all)
      rerender({ currentViz: 1 })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({})
    })

    it("should not fall back to source presets when viz defines empty presets array", () => {
      const sourceSetCurrentFilters = vi.fn()
      const globalPresets = [
        {
          label: "Eng",
          filter: { department: ["Engineering"] as string[] },
        },
      ]

      const { rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: allFilters,
            sourcePresets: globalPresets,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              {
                type: "table",
                options: {},
                filters: { department: departmentFilter.department },
              },
              {
                type: "card",
                options: {},
                filters: { salary: salaryFilter.salary },
                presets: [],
              },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 0 } }
      )

      // Switch to viz 1 (never visited, explicitly empty presets)
      rerender({ currentViz: 1 })

      // presets: [] means "I explicitly want no presets" — should NOT fall back to globalPresets[0]
      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({})
    })
  })
})
