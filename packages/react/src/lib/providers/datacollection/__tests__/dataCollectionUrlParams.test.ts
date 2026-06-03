import { afterEach, describe, expect, it } from "vitest"

import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

import { getDataCollectionStorageKey } from "../dataCollectionStorageKey"
import {
  buildDataCollectionUrlParams,
  DATA_COLLECTION_URL_PARAM_PREFIX,
  DATA_COLLECTION_URL_PARAMS,
  MAX_URL_FILTER_VALUES,
  parseDataCollectionUrlParams,
  setDataCollectionUrlParams,
  syncDataCollectionUrlParams,
  writeDataCollectionStorage,
} from "../dataCollectionUrlParams"
import { readDataCollectionStorage } from "../readDataCollectionStorage"

const ID = "organization/employees/v1"
const KEY = getDataCollectionStorageKey(ID)

// Only `type` matters for decoding; the rest is filled to satisfy the type.
const FILTERS = {
  department: { type: "in", label: "Department", options: { options: [] } },
  role: { type: "in", label: "Role", options: { options: [] } },
  query: { type: "search", label: "Query" },
  salary: {
    type: "number",
    label: "Salary",
    options: { modes: ["range", "single"], min: 0 },
  },
} as unknown as FiltersDefinition

afterEach(() => {
  localStorage.clear()
  window.history.replaceState(null, "", "/")
})

describe("parseDataCollectionUrlParams", () => {
  it("returns null when there is no dc_id", () => {
    expect(parseDataCollectionUrlParams("dc_search=ada", FILTERS)).toBeNull()
    expect(parseDataCollectionUrlParams("")).toBeNull()
  })

  it("parses the id, search and shorthand sortings", () => {
    const parsed = parseDataCollectionUrlParams(
      `dc_id=${ID}&dc_search=ada&dc_sort=salary:desc`
    )
    expect(parsed).toEqual({
      id: ID,
      state: { search: "ada", sortings: { field: "salary", order: "desc" } },
    })
  })

  it("decodes each filter from its own dc_<key> param", () => {
    const parsed = parseDataCollectionUrlParams(
      `dc_id=${ID}&dc_department=Engineering&dc_department=Product&dc_query=ann&dc_salary=1000..5000`,
      FILTERS
    )

    expect(parsed?.state.filters).toEqual({
      // repeated params → array (multi-select)
      department: ["Engineering", "Product"],
      query: "ann",
      salary: {
        mode: "range",
        from: { value: 1000, closed: true },
        to: { value: 5000, closed: true },
      },
    })
  })

  it("decodes a single multi-select value as a one-item array", () => {
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_department=Sales`, FILTERS)
        ?.state.filters
    ).toEqual({ department: ["Sales"] })
  })

  it("decodes a single-mode number", () => {
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_salary=4200`, FILTERS)?.state
        .filters
    ).toEqual({ salary: { mode: "single", value: 4200 } })
  })

  it("distinguishes inclusive vs exclusive range bounds via the * marker", () => {
    const salaryOf = (raw: string) =>
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_salary=${raw}`, FILTERS)
        ?.state.filters?.salary

    // no marker → both inclusive (>=, <=)
    expect(salaryOf("1000..5000")).toEqual({
      mode: "range",
      from: { value: 1000, closed: true },
      to: { value: 5000, closed: true },
    })
    // lower exclusive (>), upper inclusive (<=)
    expect(salaryOf("1000*..5000")).toEqual({
      mode: "range",
      from: { value: 1000, closed: false },
      to: { value: 5000, closed: true },
    })
    // lower inclusive (>=), upper exclusive (<)
    expect(salaryOf("1000..5000*")).toEqual({
      mode: "range",
      from: { value: 1000, closed: true },
      to: { value: 5000, closed: false },
    })
    // both exclusive (>, <), with an open upper end
    expect(salaryOf("1000*..*")).toEqual({
      mode: "range",
      from: { value: 1000, closed: false },
      to: { value: undefined, closed: false },
    })
  })

  it("parses the visualization as a type/key string", () => {
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_view=kanban`)?.state
        .visualization
    ).toBe("kanban")
    // Absent → not present.
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}`)?.state
    ).not.toHaveProperty("visualization")
  })

  it("parses the page (1-indexed)", () => {
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_page=3`)?.state.page
    ).toBe(3)
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}`)?.state
    ).not.toHaveProperty("page")
    // page 0 / negative are ignored.
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_page=0`)?.state
    ).not.toHaveProperty("page")
  })

  it("skips filters when no definition is provided", () => {
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_department=Sales`)?.state
    ).not.toHaveProperty("filters")
  })

  it("keeps an empty search distinct from an absent one", () => {
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}&dc_search=`)?.state
    ).toHaveProperty("search", "")
    expect(
      parseDataCollectionUrlParams(`dc_id=${ID}`)?.state
    ).not.toHaveProperty("search")
  })
})

describe("buildDataCollectionUrlParams", () => {
  it("encodes each filter as its own prefixed param (no JSON)", () => {
    const params = buildDataCollectionUrlParams(ID, {
      search: "ada",
      filters: {
        department: ["Engineering", "Product"],
        query: "ann",
      },
      sortings: { field: "name", order: "asc" },
    })

    expect(params.get(DATA_COLLECTION_URL_PARAMS.id)).toBe(ID)
    expect(params.getAll("dc_department")).toEqual(["Engineering", "Product"])
    expect(params.get("dc_query")).toBe("ann")
    expect(params.get(DATA_COLLECTION_URL_PARAMS.search)).toBe("ada")
    expect(params.get(DATA_COLLECTION_URL_PARAMS.sortings)).toBe("name:asc")
    // Readable: no value is a JSON blob.
    expect(params.toString()).not.toContain("%7B")
  })

  it("encodes a number range as from..to", () => {
    const params = buildDataCollectionUrlParams(ID, {
      filters: {
        salary: {
          mode: "range",
          from: { value: 1000, closed: true },
          to: { value: 5000, closed: true },
        },
      },
    })
    expect(params.get("dc_salary")).toBe("1000..5000")
  })

  it("marks exclusive range bounds with * and round-trips them", () => {
    const salary = {
      mode: "range" as const,
      from: { value: 1000, closed: false },
      to: { value: 5000, closed: true },
    }
    const params = buildDataCollectionUrlParams(ID, { filters: { salary } })

    expect(params.get("dc_salary")).toBe("1000*..5000")
    expect(
      parseDataCollectionUrlParams(params, FILTERS)?.state.filters?.salary
    ).toEqual(salary)
  })

  it("round-trips multiple filters + search + sortings", () => {
    const state = {
      search: "ada",
      filters: {
        department: ["Engineering", "Product"],
        role: ["Manager"],
        query: "ann",
        salary: {
          mode: "range" as const,
          from: { value: 1000, closed: true },
          to: { value: 5000, closed: true },
        },
      },
      sortings: { field: "salary", order: "desc" as const },
    }

    const params = buildDataCollectionUrlParams(ID, state)
    expect(parseDataCollectionUrlParams(params, FILTERS)).toEqual({
      id: ID,
      state,
    })
  })

  it("emits only dc_id for an empty state", () => {
    const params = buildDataCollectionUrlParams(ID)
    expect([...params.keys()]).toEqual([DATA_COLLECTION_URL_PARAMS.id])
  })

  it("encodes the visualization as its type/key", () => {
    expect(
      buildDataCollectionUrlParams(ID, { visualization: "kanban" }).get(
        "dc_view"
      )
    ).toBe("kanban")
    // No view → no dc_view (the caller omits the default view).
    expect(buildDataCollectionUrlParams(ID, {}).has("dc_view")).toBe(false)
    expect([...buildDataCollectionUrlParams(ID, {}).keys()]).toEqual([
      DATA_COLLECTION_URL_PARAMS.id,
    ])
  })

  it("encodes the page, omitting the first one", () => {
    expect(buildDataCollectionUrlParams(ID, { page: 3 }).get("dc_page")).toBe(
      "3"
    )
    expect(buildDataCollectionUrlParams(ID, { page: 1 }).has("dc_page")).toBe(
      false
    )
    expect([...buildDataCollectionUrlParams(ID, { page: 1 }).keys()]).toEqual([
      DATA_COLLECTION_URL_PARAMS.id,
    ])
  })

  it("keeps page and sorting together (they don't clobber each other)", () => {
    const state = {
      sortings: { field: "salary", order: "desc" as const },
      page: 3,
    }
    const params = buildDataCollectionUrlParams(ID, state)
    expect(params.get(DATA_COLLECTION_URL_PARAMS.sortings)).toBe("salary:desc")
    expect(params.get(DATA_COLLECTION_URL_PARAMS.page)).toBe("3")
    expect(parseDataCollectionUrlParams(params)).toEqual({ id: ID, state })
  })

  it("round-trips the visualization with other state", () => {
    const state = {
      filters: { department: ["Design"] },
      visualization: "kanban",
    }
    const params = buildDataCollectionUrlParams(ID, state)
    expect(parseDataCollectionUrlParams(params, FILTERS)).toEqual({
      id: ID,
      state,
    })
  })
})

describe("search-type filters", () => {
  const SEARCH_FILTERS = {
    name: { type: "search", label: "Name" },
    search: { type: "search", label: "Search" },
  } as unknown as FiltersDefinition

  it("reflects a plain-string search filter value", () => {
    const params = buildDataCollectionUrlParams(ID, {
      filters: { name: "ann" },
    })
    expect(params.get("dc_name")).toBe("ann")
    expect(
      parseDataCollectionUrlParams(params, SEARCH_FILTERS)?.state.filters
    ).toEqual({ name: "ann" })
  })

  it("reflects the strict-toggle object form (search term only)", () => {
    const params = buildDataCollectionUrlParams(ID, {
      filters: { name: { value: "ann", strict: true } },
    })
    expect(params.get("dc_name")).toBe("ann")
    expect(
      parseDataCollectionUrlParams(params, SEARCH_FILTERS)?.state.filters
    ).toEqual({ name: "ann" })
  })

  it("reflects a filter keyed exactly 'search'", () => {
    const params = buildDataCollectionUrlParams(ID, {
      filters: { search: "ann" },
    })
    expect(params.get("dc_search")).toBe("ann")
    expect(
      parseDataCollectionUrlParams(params, SEARCH_FILTERS)?.state.filters
    ).toEqual({ search: "ann" })
  })

  it("lets the top-level search win over a same-named filter on clash", () => {
    const params = buildDataCollectionUrlParams(ID, {
      search: "top",
      filters: { search: "filter" },
    })
    expect(params.getAll("dc_search")).toEqual(["top"])
  })
})

describe("large multi-select values (e.g. select-all over a data source)", () => {
  const many = (n: number) => Array.from({ length: n }, (_, i) => `id-${i}`)

  it("keeps a selection at the cap but omits one over it", () => {
    const atCap = buildDataCollectionUrlParams(ID, {
      filters: { department: many(MAX_URL_FILTER_VALUES) },
    })
    expect(atCap.getAll("dc_department")).toHaveLength(MAX_URL_FILTER_VALUES)

    const overCap = buildDataCollectionUrlParams(ID, {
      filters: { department: many(MAX_URL_FILTER_VALUES + 1) },
    })
    expect(overCap.has("dc_department")).toBe(false)
  })

  it("drops only the oversized filter, keeping smaller filters, search and sort", () => {
    const params = buildDataCollectionUrlParams(ID, {
      search: "ada",
      filters: { department: many(100), role: ["Manager"] },
      sortings: { field: "name", order: "asc" },
    })

    expect(params.has("dc_department")).toBe(false)
    expect(params.getAll("dc_role")).toEqual(["Manager"])
    expect(params.get(DATA_COLLECTION_URL_PARAMS.search)).toBe("ada")
    expect(params.get(DATA_COLLECTION_URL_PARAMS.sortings)).toBe("name:asc")
  })

  it("leaves the URL free of dc_ params when only an oversized filter is active", () => {
    const params = setDataCollectionUrlParams("keep=1", ID, {
      filters: { department: many(100) },
    })

    expect(
      [...params.keys()].some((k) =>
        k.startsWith(DATA_COLLECTION_URL_PARAM_PREFIX)
      )
    ).toBe(false)
    expect(params.get("keep")).toBe("1")
  })
})

describe("setDataCollectionUrlParams", () => {
  it("preserves unrelated params and rebuilds the dc_ family", () => {
    const params = setDataCollectionUrlParams(
      `tab=overview&dc_department=Old`,
      ID,
      { filters: { department: ["Engineering"] } }
    )

    expect(params.get("tab")).toBe("overview")
    // The stale dc_department=Old is replaced, not appended.
    expect(params.getAll("dc_department")).toEqual(["Engineering"])
    expect(params.get(DATA_COLLECTION_URL_PARAMS.id)).toBe(ID)
  })

  it("drops the whole dc_ family (incl. dc_id) for empty state", () => {
    const start = `${DATA_COLLECTION_URL_PARAMS.id}=${ID}&dc_department=A&dc_search=old&keep=1`

    const params = setDataCollectionUrlParams(start, ID, {
      search: "",
      filters: { department: [] },
      sortings: null,
    })

    expect(
      [...params.keys()].some((k) =>
        k.startsWith(DATA_COLLECTION_URL_PARAM_PREFIX)
      )
    ).toBe(false)
    expect(params.get("keep")).toBe("1")
  })

  it("does not mutate a passed-in URLSearchParams", () => {
    const source = new URLSearchParams("keep=1")
    setDataCollectionUrlParams(source, ID, { search: "ada" })
    expect([...source.keys()]).toEqual(["keep"])
  })
})

describe("syncDataCollectionUrlParams", () => {
  it("writes the current state onto window.location, preserving the path + extras", () => {
    window.history.replaceState(null, "", "/people?tab=overview")

    const query = syncDataCollectionUrlParams(ID, {
      filters: { department: ["Engineering", "Product"] },
      sortings: { field: "salary", order: "desc" },
    })

    expect(window.location.pathname).toBe("/people")
    const params = new URLSearchParams(window.location.search)
    expect(params.get("tab")).toBe("overview")
    expect(params.getAll("dc_department")).toEqual(["Engineering", "Product"])
    expect(params.get(DATA_COLLECTION_URL_PARAMS.sortings)).toBe("salary:desc")
    expect(query).toBe(window.location.search.replace(/^\?/, ""))
  })

  it("clears all dc_ params when the state becomes empty", () => {
    window.history.replaceState(null, "", `/?keep=1&dc_id=${ID}&dc_search=ada`)

    syncDataCollectionUrlParams(ID, { search: "", filters: {}, sortings: null })

    const params = new URLSearchParams(window.location.search)
    expect(
      [...params.keys()].some((k) =>
        k.startsWith(DATA_COLLECTION_URL_PARAM_PREFIX)
      )
    ).toBe(false)
    expect(params.get("keep")).toBe("1")
  })

  it("leaves history untouched with history: 'none' but returns the query", () => {
    window.history.replaceState(null, "", "/")
    const query = syncDataCollectionUrlParams(
      ID,
      { search: "ada" },
      { history: "none" }
    )
    expect(window.location.search).toBe("")
    expect(query).toContain("dc_search=ada")
  })
})

describe("writeDataCollectionStorage", () => {
  it("persists under the prefixed key so readDataCollectionStorage can read it", () => {
    writeDataCollectionStorage(ID, { search: "ada" })
    expect(localStorage.getItem(KEY)).toBe(JSON.stringify({ search: "ada" }))
    expect(readDataCollectionStorage(ID)?.search).toBe("ada")
  })
})
