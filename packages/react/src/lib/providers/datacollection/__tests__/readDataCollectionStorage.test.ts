import { afterEach, describe, expect, it } from "vitest"

import { getDataCollectionStorageKey } from "../dataCollectionStorageKey"
import {
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
