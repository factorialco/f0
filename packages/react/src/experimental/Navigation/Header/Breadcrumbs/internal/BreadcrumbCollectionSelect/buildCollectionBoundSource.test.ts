import { describe, expect, it } from "vitest"

import { DataAdapter } from "@/hooks/datasource"

import { buildCollectionBoundSource } from "./buildCollectionBoundSource"

type TestRecord = { id: string; name: string }

const dataAdapter: DataAdapter<
  Record<string, unknown>,
  Record<string, never>
> = {
  fetchData: () => ({ records: [] as TestRecord[] }),
}

const source = {
  filters: {
    department: {
      type: "in" as const,
      label: "Department",
      options: { options: [] },
    },
  },
  presets: [],
  sortings: {
    name: { label: "Name" },
  },
  dataAdapter,
}

describe("buildCollectionBoundSource", () => {
  it("keeps the source unfiltered when storage is null", () => {
    const result = buildCollectionBoundSource(source, null)
    expect(result.currentFilters).toBeUndefined()
    expect(result.currentSortings).toBeUndefined()
  })

  it("seeds persisted filters as currentFilters", () => {
    const result = buildCollectionBoundSource(source, {
      filters: { department: ["Engineering"] },
    })
    expect(result.currentFilters).toEqual({ department: ["Engineering"] })
  })

  it("resolves per-visualization filters over the top-level ones", () => {
    const result = buildCollectionBoundSource(source, {
      filters: { department: ["Marketing"] },
      visualization: 1,
      visualizationFilters: { "1": { department: ["Engineering"] } },
    })
    expect(result.currentFilters).toEqual({ department: ["Engineering"] })
  })

  it("prunes persisted filter keys absent from the declared filters", () => {
    const result = buildCollectionBoundSource(source, {
      filters: { department: ["Engineering"], legacyFilter: "stale" },
    })
    expect(result.currentFilters).toEqual({ department: ["Engineering"] })
  })

  it("keeps every persisted filter when the source declares none", () => {
    const result = buildCollectionBoundSource(
      { ...source, filters: undefined },
      { filters: { department: ["Engineering"] } }
    )
    expect(result.currentFilters).toEqual({ department: ["Engineering"] })
  })

  it("strips the filter and preset definitions from the result", () => {
    const result = buildCollectionBoundSource(source, {
      filters: { department: ["Engineering"] },
    })
    expect(result.filters).toBeUndefined()
    expect(result.presets).toBeUndefined()
    expect(result.currentFilters).toEqual({ department: ["Engineering"] })
  })

  it("keeps the filter definitions when showFilters is set", () => {
    const result = buildCollectionBoundSource(
      source,
      { filters: { department: ["Engineering"] } },
      { showFilters: true }
    )
    expect(result.filters).toBe(source.filters)
    expect(result.currentFilters).toEqual({ department: ["Engineering"] })
    // Presets are list-page UI: stripped regardless
    expect(result.presets).toBeUndefined()
  })

  it("seeds a persisted sorting whose field is declared", () => {
    const result = buildCollectionBoundSource(source, {
      sortings: { field: "name", order: "desc" },
    })
    expect(result.currentSortings).toEqual({ field: "name", order: "desc" })
  })

  it("applies an explicit null sorting and skips unknown fields", () => {
    expect(
      buildCollectionBoundSource(source, { sortings: null }).currentSortings
    ).toBeNull()
    expect(
      buildCollectionBoundSource(source, {
        sortings: { field: "hireDate", order: "asc" },
      }).currentSortings
    ).toBeUndefined()
  })

  it("never seeds search", () => {
    const result = buildCollectionBoundSource(source, { search: "alice" })
    expect(result.currentFilters).toBeUndefined()
    expect("currentSearch" in result).toBe(false)
  })

  it("respects the seed options", () => {
    const storage = {
      filters: { department: ["Engineering"] },
      sortings: { field: "name" as const, order: "asc" as const },
    }
    const noFilters = buildCollectionBoundSource(source, storage, {
      seed: { filters: false },
    })
    expect(noFilters.currentFilters).toBeUndefined()
    expect(noFilters.currentSortings).toEqual({ field: "name", order: "asc" })

    const noSortings = buildCollectionBoundSource(source, storage, {
      seed: { sortings: false },
    })
    expect(noSortings.currentFilters).toEqual({ department: ["Engineering"] })
    expect(noSortings.currentSortings).toBeUndefined()
  })

  it("adapts a pages adapter to infinite scroll", () => {
    const pagesSource = {
      ...source,
      dataAdapter: {
        paginationType: "pages" as const,
        fetchData: () => ({
          type: "pages" as const,
          records: [],
          total: 0,
          perPage: 10,
          currentPage: 1,
          pagesCount: 0,
        }),
      },
    }
    const result = buildCollectionBoundSource(pagesSource, null)
    expect(result.dataAdapter.paginationType).toBe("infinite-scroll")
  })

  it("does not mutate the input source", () => {
    const before = JSON.stringify(source.filters)
    buildCollectionBoundSource(source, {
      filters: { department: ["Engineering"] },
    })
    expect(JSON.stringify(source.filters)).toBe(before)
    expect(source.presets).toEqual([])
  })
})
