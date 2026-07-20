import { afterEach, describe, expect, it } from "vitest"

import { getDataCollectionStorageKey } from "../dataCollectionStorageKey"
import {
  mergeDataCollectionFilters,
  readDataCollectionStorage,
  resolveDataCollectionFilters,
} from "../readDataCollectionStorage"

const ID = "organization/employees/v1"
const KEY = getDataCollectionStorageKey(ID)

afterEach(() => {
  localStorage.clear()
})

describe("getDataCollectionStorageKey", () => {
  it("prefixes the id with `datacollection-`", () => {
    expect(getDataCollectionStorageKey(ID)).toBe(
      "datacollection-organization/employees/v1"
    )
  })
})

describe("readDataCollectionStorage", () => {
  it("returns null when nothing is persisted", () => {
    expect(readDataCollectionStorage(ID)).toBeNull()
  })

  it("returns null on malformed JSON", () => {
    localStorage.setItem(KEY, "{ not valid json")
    expect(readDataCollectionStorage(ID)).toBeNull()
  })

  it("parses the persisted storage", () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        search: "ada",
        visualization: 0,
        filters: { team: { value: ["eng"] } },
      })
    )

    const storage = readDataCollectionStorage(ID)

    expect(storage?.search).toBe("ada")
    expect(storage?.visualization).toBe(0)
    expect(storage?.filters).toEqual({ team: { value: ["eng"] } })
  })
})

describe("resolveDataCollectionFilters", () => {
  it("returns undefined for null storage", () => {
    expect(resolveDataCollectionFilters(null)).toBeUndefined()
  })

  it("falls back to top-level filters when no per-visualization override", () => {
    expect(
      resolveDataCollectionFilters({
        filters: { team: { value: ["eng"] } },
      })
    ).toEqual({ team: { value: ["eng"] } })
  })

  it("prefers the per-visualization filters for the persisted visualization", () => {
    expect(
      resolveDataCollectionFilters({
        visualization: 1,
        filters: { team: { value: ["eng"] } },
        visualizationFilters: {
          "0": { team: { value: ["sales"] } },
          "1": { team: { value: ["design"] } },
        },
      })
    ).toEqual({ team: { value: ["design"] } })
  })

  it("defaults the visualization index to 0 when absent", () => {
    expect(
      resolveDataCollectionFilters({
        filters: { team: { value: ["eng"] } },
        visualizationFilters: {
          "0": { team: { value: ["sales"] } },
        },
      })
    ).toEqual({ team: { value: ["sales"] } })
  })
})

describe("mergeDataCollectionFilters", () => {
  it("replaces filters and preserves the rest of the storage", () => {
    const merged = mergeDataCollectionFilters(
      {
        filters: { team: { value: ["eng"] } },
        sortings: { field: "name", order: "asc" },
        search: "ada",
      },
      { team: { value: ["design"] } }
    )
    expect(merged).toEqual({
      filters: { team: { value: ["design"] } },
      sortings: { field: "name", order: "asc" },
      search: "ada",
    })
  })

  it("updates the per-visualization slot the resolver reads, when one exists", () => {
    const merged = mergeDataCollectionFilters(
      {
        visualization: 1,
        filters: { team: { value: ["eng"] } },
        visualizationFilters: {
          "0": { team: { value: ["sales"] } },
          "1": { team: { value: ["eng"] } },
        },
      },
      { team: { value: ["design"] } }
    )
    // The slot resolveDataCollectionFilters would read now resolves the
    // merged filters; the other visualization's slot is untouched
    expect(resolveDataCollectionFilters(merged)).toEqual({
      team: { value: ["design"] },
    })
    expect(merged.visualizationFilters?.["0"]).toEqual({
      team: { value: ["sales"] },
    })
    expect(merged.filters).toEqual({ team: { value: ["design"] } })
  })

  it("does not create a per-visualization slot when none exists", () => {
    const merged = mergeDataCollectionFilters(
      { filters: { team: { value: ["eng"] } } },
      { team: { value: ["design"] } }
    )
    expect(merged.visualizationFilters).toBeUndefined()
  })

  it("does not mutate the input storage", () => {
    const storage = {
      visualization: 0,
      filters: { team: { value: ["eng"] } },
      visualizationFilters: { "0": { team: { value: ["eng"] } } },
    }
    const before = JSON.stringify(storage)
    mergeDataCollectionFilters(storage, { team: { value: ["design"] } })
    expect(JSON.stringify(storage)).toBe(before)
  })
})
