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
  describe("when source has a single visualization", () => {
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
          visualizations: [{ type: "table", options: {} }],
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

  describe("when source has 2+ visualizations without filter overrides", () => {
    it("enables per-visualization scoping (always-on for 2+ vizs)", () => {
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

      expect(result.current.hasPerVisualizationFilters).toBe(true)
      expect(result.current.effectiveFilters).toBe(allFilters)
      expect(result.current.effectivePresets).toEqual([
        { label: "Eng", filter: { department: ["Engineering"] } },
      ])
      expect(result.current.allVisualizationFilters).toEqual({ "0": {} })
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

    it("never persists the previous viz's filters under the new viz's storage slot during a transition", () => {
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

      const stored = {
        "0": { department: ["Engineering"] },
        "1": { salary: { mode: "single" as const, value: 75000 } },
      }
      act(() => {
        result.current.setAllVisualizationFilters(stored)
      })

      rerender({
        currentViz: 0,
        sourceCurrentFilters: { department: ["Engineering"] },
      })

      // Switch to viz 1 — sourceCurrentFilters is still previous viz
      rerender({
        currentViz: 1,
        sourceCurrentFilters: { department: ["Engineering"] },
      })

      expect(result.current.allVisualizationFilters["1"]).toEqual({
        salary: { mode: "single", value: 75000 },
      })
      expect(
        "department" in (result.current.allVisualizationFilters["1"] ?? {})
      ).toBe(false)
    })

    it("setCurrentFilters writes through to allVisualizationFilters at the active viz's slot", () => {
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

      act(() => {
        result.current.setCurrentFilters({ department: ["Marketing"] })
      })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Marketing"],
      })
      expect(result.current.allVisualizationFilters["0"]).toEqual({
        department: ["Marketing"],
      })
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

  describe("hydration sanitization (defence against pre-existing contamination)", () => {
    it("strips keys a viz does not own from its stored entry on hydration", () => {
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
        { initialProps: { currentViz: 1 } }
      )

      const contaminated = {
        "0": { department: ["Engineering"] },
        "1": {
          salary: { mode: "single" as const, value: 50000 },
          // Leaked from viz 0 — must be stripped on hydration
          department: ["Engineering"],
        },
      }

      act(() => {
        result.current.setAllVisualizationFilters(contaminated)
      })

      rerender({ currentViz: 1 })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        salary: { mode: "single", value: 50000 },
      })
      expect(result.current.allVisualizationFilters["1"]).toEqual({
        salary: { mode: "single", value: 50000 },
      })
    })

    it("falls back to source filter schema when a viz declares no overrides", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz }) =>
          usePerVisualizationFilters<AllFilters>({
            sourceFilters: { department: departmentFilter.department },
            sourcePresets: undefined,
            sourceCurrentFilters: {},
            sourceSetCurrentFilters,
            visualizations: [
              { type: "table", options: {} },
              { type: "card", options: {} },
            ],
            currentVisualization: currentViz,
          }),
        { initialProps: { currentViz: 1 } }
      )

      const contaminated = {
        "0": { department: ["Engineering"] },
        "1": {
          department: ["Marketing"],
          applicationPhaseId: ["leaked"],
        },
      }

      act(() => {
        result.current.setAllVisualizationFilters(
          contaminated as unknown as Parameters<
            typeof result.current.setAllVisualizationFilters
          >[0]
        )
      })

      rerender({ currentViz: 1 })

      expect(result.current.allVisualizationFilters["1"]).toEqual({
        department: ["Marketing"],
      })
    })
  })

  describe("setAllVisualizationFilters with corrupted payloads", () => {
    const buildHook = () => {
      const sourceSetCurrentFilters = vi.fn()
      return renderHook(() =>
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
    }

    it("does not throw when states is null", () => {
      const { result } = buildHook()
      expect(() => {
        act(() => {
          result.current.setAllVisualizationFilters(
            null as unknown as Parameters<
              typeof result.current.setAllVisualizationFilters
            >[0]
          )
        })
      }).not.toThrow()
    })

    it("does not throw when states is not an object", () => {
      const { result: r1 } = buildHook()
      expect(() => {
        act(() => {
          r1.current.setAllVisualizationFilters(
            "garbage" as unknown as Parameters<
              typeof r1.current.setAllVisualizationFilters
            >[0]
          )
        })
      }).not.toThrow()

      const { result: r2 } = buildHook()
      expect(() => {
        act(() => {
          r2.current.setAllVisualizationFilters(
            42 as unknown as Parameters<
              typeof r2.current.setAllVisualizationFilters
            >[0]
          )
        })
      }).not.toThrow()
    })

    it("does not throw when states is an array", () => {
      const { result } = buildHook()
      expect(() => {
        act(() => {
          result.current.setAllVisualizationFilters(
            [] as unknown as Parameters<
              typeof result.current.setAllVisualizationFilters
            >[0]
          )
        })
      }).not.toThrow()
    })

    it("replaces a null entry with {}", () => {
      const { result } = buildHook()
      act(() => {
        result.current.setAllVisualizationFilters({
          "0": null,
        } as unknown as Parameters<
          typeof result.current.setAllVisualizationFilters
        >[0])
      })
      expect(result.current.allVisualizationFilters["0"]).toEqual({})
    })

    it("replaces a non-object entry with {}", () => {
      const { result } = buildHook()
      act(() => {
        result.current.setAllVisualizationFilters({
          "0": "garbage",
        } as unknown as Parameters<
          typeof result.current.setAllVisualizationFilters
        >[0])
      })
      expect(result.current.allVisualizationFilters["0"]).toEqual({})
    })

    it("still marks hydration as initialized after a corrupted payload", () => {
      const { result } = buildHook()
      act(() => {
        result.current.setAllVisualizationFilters(
          null as unknown as Parameters<
            typeof result.current.setAllVisualizationFilters
          >[0]
        )
      })
      // Second call with valid data is ignored (idempotent — already initialized)
      act(() => {
        result.current.setAllVisualizationFilters({
          "0": { department: ["Engineering"] },
        } as unknown as Parameters<
          typeof result.current.setAllVisualizationFilters
        >[0])
      })
      expect(result.current.allVisualizationFilters["0"]).toEqual({})
    })
  })

  describe("setCurrentFilters function-updater branch", () => {
    it("writes through to source state and the active viz's slot", () => {
      let sourceState: Record<string, unknown> = {
        department: ["Engineering"],
      }
      const sourceSetCurrentFilters = vi.fn(
        (
          updater:
            | Record<string, unknown>
            | ((prev: Record<string, unknown>) => Record<string, unknown>)
        ) => {
          sourceState =
            typeof updater === "function" ? updater(sourceState) : updater
        }
      )

      const { result, rerender } = renderHook(
        ({ sourceCurrentFilters }) =>
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
            currentVisualization: 0,
          }),
        {
          initialProps: {
            sourceCurrentFilters: sourceState as Record<string, unknown>,
          },
        }
      )

      act(() => {
        result.current.setCurrentFilters((prev) => ({
          ...prev,
          department: [...((prev.department as string[]) ?? []), "Marketing"],
        }))
      })

      // Source state was updated via the function form
      expect(sourceState).toEqual({ department: ["Engineering", "Marketing"] })

      // Push the new source value back into the hook (mirrors a real rerender)
      rerender({ sourceCurrentFilters: sourceState })

      expect(result.current.allVisualizationFilters["0"]).toEqual({
        department: ["Engineering", "Marketing"],
      })
    })
  })

  describe("storageKey reset (collection swap re-hydration)", () => {
    it("re-hydrates persisted filters when storageKey changes", () => {
      const sourceSetCurrentFilters = vi.fn()

      const { result, rerender } = renderHook(
        ({ currentViz, storageKey }) =>
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
            storageKey,
          }),
        { initialProps: { currentViz: 0, storageKey: "collection-a/v1" } }
      )

      // First hydration: scope A
      act(() => {
        result.current.setAllVisualizationFilters({
          "0": { department: ["Engineering"] },
        })
      })
      rerender({ currentViz: 0, storageKey: "collection-a/v1" })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Engineering"],
      })

      sourceSetCurrentFilters.mockClear()

      // Storage scope changes (e.g. user navigates to a different collection).
      // The hook must accept the next hydration payload instead of staying
      // frozen on scope A's filters.
      rerender({ currentViz: 0, storageKey: "collection-b/v1" })

      // Map and locks are reset before the next hydration arrives — the
      // previous scope's persisted entry must NOT survive the storage swap
      expect(result.current.allVisualizationFilters["0"]).not.toEqual({
        department: ["Engineering"],
      })

      act(() => {
        result.current.setAllVisualizationFilters({
          "0": { department: ["Marketing"] },
        })
      })
      rerender({ currentViz: 0, storageKey: "collection-b/v1" })

      expect(sourceSetCurrentFilters).toHaveBeenCalledWith({
        department: ["Marketing"],
      })
    })
  })

  describe("source-driven filter updates (bypassing wrapped setter)", () => {
    it("mirrors stable sourceCurrentFilters changes into the persisted map", () => {
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
            sourceCurrentFilters: { department: ["Engineering"] } as Record<
              string,
              unknown
            >,
          },
        }
      )

      // Hydrate so initialization completes — the slot for viz 0 now exists.
      act(() => {
        result.current.setAllVisualizationFilters({
          "0": { department: ["Engineering"] },
        })
      })
      rerender({
        currentViz: 0,
        sourceCurrentFilters: { department: ["Engineering"] },
      })

      // Simulate an update that bypasses the wrapped setter (e.g. controlled
      // currentFilters prop sync inside useDataSource, or a direct external
      // dataSource.setCurrentFilters call). The persisted map for the active
      // viz must reflect the new value, not stay stuck on the old one.
      rerender({
        currentViz: 0,
        sourceCurrentFilters: { department: ["Marketing"] },
      })

      expect(result.current.allVisualizationFilters["0"]).toEqual({
        department: ["Marketing"],
      })
    })
  })
})
