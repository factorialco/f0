import { describe, expect, it } from "vitest"

import { pruneStoredStatus, StoredStatusDefinition } from "../pruneStoredStatus"
import { DataCollectionStatusComplete } from "../types"

type Status = DataCollectionStatusComplete<Record<string, unknown>>

const definition: StoredStatusDefinition = {
  filters: { department: {}, status: {} },
  sortings: { name: {}, createdAt: {} },
  grouping: { groupBy: { team: {} } },
  navigationFilters: { period: {} },
  search: { enabled: true },
  visualizationCount: 2,
}

const prune = (stored: Status, override?: StoredStatusDefinition) =>
  pruneStoredStatus(stored, override ?? definition)

describe("pruneStoredStatus", () => {
  describe("filters", () => {
    it("keeps declared keys and drops undeclared ones", () => {
      const result = prune({
        filters: { department: ["eng"], removedFilter: ["x"] },
      } as Status)

      expect(result.filters).toEqual({ department: ["eng"] })
    })

    it("honors an explicitly cleared state", () => {
      expect(prune({ filters: {} } as Status).filters).toEqual({})
    })

    it("drops the whole value when every stored key is undeclared, so the declared defaults survive", () => {
      const result = prune({ filters: { removedFilter: ["x"] } } as Status)

      expect(result.filters).toBeUndefined()
    })

    it("drops a non-object value", () => {
      const result = prune({
        filters: "corrupt" as unknown as Record<string, unknown>,
      } as Status)

      expect(result.filters).toBeUndefined()
    })

    it("drops everything when the collection declares no filters", () => {
      const result = prune({ filters: { department: ["eng"] } } as Status, {
        visualizationCount: 1,
      })

      expect(result.filters).toBeUndefined()
    })
  })

  describe("visualizationFilters", () => {
    it("prunes each entry against the collection-level filter keys", () => {
      const result = prune({
        visualizationFilters: {
          "0": { department: ["eng"], removedFilter: ["x"] },
          "1": { status: ["active"] },
        },
      } as Status)

      expect(result.visualizationFilters).toEqual({
        "0": { department: ["eng"] },
        "1": { status: ["active"] },
      })
    })

    it("drops entries for visualizations the collection no longer declares", () => {
      const result = prune({
        visualizationFilters: {
          "0": { department: ["eng"] },
          "5": { department: ["ops"] },
        },
      } as Status)

      expect(result.visualizationFilters).toEqual({
        "0": { department: ["eng"] },
      })
    })

    it("drops the map when no entry survives", () => {
      const result = prune({
        visualizationFilters: { "9": { removedFilter: ["x"] } },
      } as Status)

      expect(result.visualizationFilters).toBeUndefined()
    })
  })

  describe("sortings", () => {
    it("keeps a declared field", () => {
      const stored = { field: "name", order: "asc" } as const

      expect(prune({ sortings: stored } as Status).sortings).toEqual(stored)
    })

    it("drops an undeclared field", () => {
      const result = prune({
        sortings: { field: "removedColumn", order: "asc" },
      } as Status)

      expect(result.sortings).toBeUndefined()
    })

    it("keeps null, which is an explicit user clear rather than drift", () => {
      expect(prune({ sortings: null } as Status).sortings).toBeNull()
    })
  })

  describe("grouping", () => {
    it("keeps a declared groupBy field", () => {
      const stored = { field: "team", order: "asc" } as const

      expect(prune({ grouping: stored } as Status).grouping).toEqual(stored)
    })

    it("drops an undeclared groupBy field", () => {
      const result = prune({ grouping: { field: "removedGroup" } } as Status)

      expect(result.grouping).toBeUndefined()
    })
  })

  describe("search", () => {
    it("keeps a stored term when search is enabled", () => {
      expect(prune({ search: "ada" } as Status).search).toBe("ada")
    })

    it("drops a stored term when search is not enabled", () => {
      const result = prune({ search: "ada" } as Status, {
        visualizationCount: 1,
      })

      expect(result.search).toBeUndefined()
    })
  })

  describe("visualization", () => {
    it("keeps an in-range index", () => {
      expect(prune({ visualization: 1 } as Status).visualization).toBe(1)
    })

    it("drops an index past the declared visualizations", () => {
      expect(
        prune({ visualization: 4 } as Status).visualization
      ).toBeUndefined()
    })

    it("drops a negative or non-integer index", () => {
      expect(
        prune({ visualization: -1 } as Status).visualization
      ).toBeUndefined()
      expect(
        prune({ visualization: 1.5 } as Status).visualization
      ).toBeUndefined()
    })
  })

  describe("navigationFilters", () => {
    it("keeps declared keys and drops undeclared ones", () => {
      const result = prune({
        navigationFilters: { period: { from: "2026-01-01" }, removed: {} },
      } as Status)

      expect(result.navigationFilters).toEqual({
        period: { from: "2026-01-01" },
      })
    })
  })

  describe("pass-through features", () => {
    it("leaves settings untouched, since stale column ids match no column", () => {
      const settings = { columns: { removedColumn: { hidden: true } } }

      expect(prune({ settings } as unknown as Status).settings).toEqual(
        settings
      )
    })

    it("leaves customPresets untouched, since a saved view is user-authored data", () => {
      const customPresets = [
        { id: "mine", label: "Mine", filter: { removedFilter: ["x"] } },
      ]

      expect(
        prune({ customPresets } as unknown as Status).customPresets
      ).toEqual(customPresets)
    })
  })

  it("omits every feature absent from the stored payload", () => {
    expect(prune({} as Status)).toEqual({})
  })

  it("returns an empty status for a non-object payload", () => {
    expect(prune(null as unknown as Status)).toEqual({})
    expect(prune("corrupt" as unknown as Status)).toEqual({})
  })
})
