import { describe, expect, it, vi } from "vitest"

import { seedFromStorage, SeedTarget } from "../seedFromStorage"

type TestRecord = { id: number; name: string; department: string }

const definition = {
  filters: {
    department: {
      type: "in" as const,
      label: "Department",
      options: { options: [] },
    },
  },
  sortings: {
    name: { label: "Name" },
  },
  search: { enabled: true },
  grouping: {
    collapsible: false as const,
    groupBy: {
      department: {
        name: "Department",
        label: (groupId: string) => groupId,
      },
    },
  },
}

const makeTarget = () =>
  ({
    setCurrentFilters: vi.fn(),
    setCurrentSortings: vi.fn(),
    setCurrentSearch: vi.fn(),
    setCurrentGrouping: vi.fn(),
  }) satisfies SeedTarget<
    TestRecord,
    typeof definition.filters,
    typeof definition.sortings,
    typeof definition.grouping
  >

describe("seedFromStorage", () => {
  it("returns null and applies nothing for empty storage", () => {
    const target = makeTarget()
    expect(seedFromStorage({}, definition, target)).toBeNull()
    expect(target.setCurrentFilters).not.toHaveBeenCalled()
    expect(target.setCurrentSortings).not.toHaveBeenCalled()
    expect(target.setCurrentSearch).not.toHaveBeenCalled()
    expect(target.setCurrentGrouping).not.toHaveBeenCalled()
  })

  it("applies persisted filters declared in the definition", () => {
    const target = makeTarget()
    const applied = seedFromStorage(
      { filters: { department: ["Engineering"] } },
      definition,
      target
    )
    expect(target.setCurrentFilters).toHaveBeenCalledWith({
      department: ["Engineering"],
    })
    expect(applied?.filters).toEqual({ department: ["Engineering"] })
  })

  it("resolves per-visualization filters over the top-level ones", () => {
    const target = makeTarget()
    seedFromStorage(
      {
        filters: { department: ["Marketing"] },
        visualization: 1,
        visualizationFilters: { "1": { department: ["Engineering"] } },
      },
      definition,
      target
    )
    expect(target.setCurrentFilters).toHaveBeenCalledWith({
      department: ["Engineering"],
    })
  })

  it("prunes persisted filter keys absent from the definition", () => {
    const target = makeTarget()
    const applied = seedFromStorage(
      { filters: { department: ["Engineering"], legacyFilter: "stale" } },
      definition,
      target
    )
    expect(target.setCurrentFilters).toHaveBeenCalledWith({
      department: ["Engineering"],
    })
    expect(applied?.filters).not.toHaveProperty("legacyFilter")
  })

  it("applies an explicitly persisted empty filters state (user cleared them)", () => {
    const target = makeTarget()
    const applied = seedFromStorage({ filters: {} }, definition, target)
    expect(target.setCurrentFilters).toHaveBeenCalledWith({})
    expect(applied?.filters).toEqual({})
  })

  it("applies nothing when every persisted filter key is unknown", () => {
    const target = makeTarget()
    const applied = seedFromStorage(
      { filters: { legacyFilter: "stale" } },
      definition,
      target
    )
    expect(target.setCurrentFilters).not.toHaveBeenCalled()
    expect(applied).toBeNull()
  })

  it("applies nothing when the definition declares no filters", () => {
    const target = makeTarget()
    const applied = seedFromStorage(
      { filters: { department: ["Engineering"] } },
      { ...definition, filters: undefined },
      target
    )
    expect(target.setCurrentFilters).not.toHaveBeenCalled()
    expect(applied).toBeNull()
  })

  it("applies a persisted sorting whose field is declared", () => {
    const target = makeTarget()
    const applied = seedFromStorage(
      { sortings: { field: "name", order: "desc" } },
      definition,
      target
    )
    expect(target.setCurrentSortings).toHaveBeenCalledWith({
      field: "name",
      order: "desc",
    })
    expect(applied?.sortings).toEqual({ field: "name", order: "desc" })
  })

  it("applies an explicit null sorting (user cleared it on the list)", () => {
    const target = makeTarget()
    const applied = seedFromStorage({ sortings: null }, definition, target)
    expect(target.setCurrentSortings).toHaveBeenCalledWith(null)
    expect(applied?.sortings).toBeNull()
  })

  it("skips sortings that are undefined (never persisted)", () => {
    const target = makeTarget()
    seedFromStorage({ filters: {} }, definition, target)
    expect(target.setCurrentSortings).not.toHaveBeenCalled()
  })

  it("skips a persisted sorting whose field is not declared", () => {
    const target = makeTarget()
    seedFromStorage(
      { sortings: { field: "hireDate", order: "asc" } },
      definition,
      target
    )
    expect(target.setCurrentSortings).not.toHaveBeenCalled()
  })

  it("applies search only when the definition enables it", () => {
    const target = makeTarget()
    const applied = seedFromStorage({ search: "alice" }, definition, target)
    expect(target.setCurrentSearch).toHaveBeenCalledWith("alice")
    expect(applied?.search).toBe("alice")

    const disabledTarget = makeTarget()
    const appliedDisabled = seedFromStorage(
      { search: "alice" },
      { ...definition, search: { enabled: false } },
      disabledTarget
    )
    expect(disabledTarget.setCurrentSearch).not.toHaveBeenCalled()
    expect(appliedDisabled).toBeNull()
  })

  it("applies a persisted grouping whose field is declared", () => {
    const target = makeTarget()
    const applied = seedFromStorage(
      { grouping: { field: "department", order: "asc" } },
      definition,
      target
    )
    expect(target.setCurrentGrouping).toHaveBeenCalledWith({
      field: "department",
      order: "asc",
    })
    expect(applied?.grouping).toEqual({ field: "department", order: "asc" })
  })

  it("skips a persisted grouping whose field is not declared", () => {
    const target = makeTarget()
    seedFromStorage(
      { grouping: { field: "country", order: "asc" } },
      definition,
      target
    )
    expect(target.setCurrentGrouping).not.toHaveBeenCalled()
  })
})
