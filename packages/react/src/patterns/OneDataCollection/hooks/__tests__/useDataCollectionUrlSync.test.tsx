import { afterEach, describe, expect, it, vi } from "vitest"

import { DATA_COLLECTION_URL_PARAM_PREFIX } from "@/lib/providers/datacollection/dataCollectionUrlParams"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useDataCollectionUrlSync } from "../useDataCollectionUrlSync"

const FILTERS = {
  department: { type: "in", label: "Department", options: { options: [] } },
} as unknown as FiltersDefinition

type Props = Parameters<typeof useDataCollectionUrlSync>[0]

const setup = (overrides: Partial<Props> = {}) => {
  const setFilters = vi.fn()
  const setSearch = vi.fn()
  const setSortings = vi.fn()
  const setVisualization = vi.fn()

  let props: Props = {
    disabled: false,
    storageReady: true,
    filtersDefinition: FILTERS,
    filters: {},
    search: undefined,
    sortings: null,
    visualization: 0,
    visualizationKeys: ["table", "card", "list"],
    setFilters,
    setSearch,
    setSortings,
    setVisualization,
    ...overrides,
  }

  const view = renderHook((p: Props) => useDataCollectionUrlSync(p), {
    initialProps: props,
  })

  return {
    ...view,
    setFilters,
    setSearch,
    setSortings,
    setVisualization,
    rerender: (next: Partial<Props> = {}) => {
      props = { ...props, ...next }
      view.rerender(props)
    },
  }
}

const currentParams = () => new URLSearchParams(window.location.search)
const hasDcParams = () =>
  [...currentParams().keys()].some((k) =>
    k.startsWith(DATA_COLLECTION_URL_PARAM_PREFIX)
  )

afterEach(() => {
  window.history.replaceState(null, "", "/")
})

describe("useDataCollectionUrlSync — URL → collection", () => {
  it("applies per-filter URL params on mount", () => {
    window.history.replaceState(
      null,
      "",
      `/?dc_department=Engineering&dc_department=Product&dc_sort=salary-desc`
    )

    const { setFilters, setSortings, setSearch } = setup()

    expect(setFilters).toHaveBeenCalledWith({
      department: ["Engineering", "Product"],
    })
    expect(setSortings).toHaveBeenCalledWith({ field: "salary", order: "desc" })
    expect(setSearch).not.toHaveBeenCalled()
  })

  it("waits for storage hydration before applying", () => {
    window.history.replaceState(null, "", `/?dc_search=ada`)

    const { setSearch, rerender } = setup({ storageReady: false })
    expect(setSearch).not.toHaveBeenCalled()

    rerender({ storageReady: true })
    expect(setSearch).toHaveBeenCalledWith("ada")
  })
})

describe("useDataCollectionUrlSync — collection → URL", () => {
  it("reflects later state changes as readable per-filter params", () => {
    window.history.replaceState(null, "", "/people")

    const { rerender } = setup()
    rerender({ filters: { department: ["Design", "Sales"] } })

    expect(window.location.pathname).toBe("/people")
    expect(currentParams().has("dc_id")).toBe(false)
    expect(currentParams().getAll("dc_department")).toEqual(["Design", "Sales"])
  })

  it("clears the dc_ params when the state goes back to empty", () => {
    window.history.replaceState(null, "", "/people")

    const { rerender } = setup()
    rerender({ search: "ada" })
    expect(currentParams().get("dc_search")).toBe("ada")

    rerender({ search: "" })
    expect(hasDcParams()).toBe(false)
  })
})

describe("useDataCollectionUrlSync — visualization", () => {
  it("maps a view key from the URL back to its index", () => {
    window.history.replaceState(null, "", `/?dc_visualization=list`)

    const { setVisualization } = setup({
      visualizationKeys: ["table", "card", "list"],
    })
    expect(setVisualization).toHaveBeenCalledWith(2)
  })

  it("ignores an unknown view key", () => {
    window.history.replaceState(null, "", `/?dc_visualization=gallery`)

    const { setVisualization } = setup({
      visualizationKeys: ["table", "card", "list"],
    })
    expect(setVisualization).not.toHaveBeenCalled()
  })

  it("does not sync visualization when there is only one", () => {
    window.history.replaceState(null, "", `/?dc_visualization=card`)

    const { setVisualization, rerender } = setup({
      visualizationKeys: ["table"],
    })
    expect(setVisualization).not.toHaveBeenCalled()

    rerender({ visualization: 0 })
    expect(currentParams().has("dc_visualization")).toBe(false)
  })

  it("reflects a visualization change into the URL by type (omitting the first)", () => {
    window.history.replaceState(null, "", "/people")

    const { rerender } = setup({ visualizationKeys: ["table", "card", "list"] })

    rerender({ visualization: 2 })
    expect(currentParams().get("dc_visualization")).toBe("list")

    rerender({ visualization: 0 })
    expect(currentParams().has("dc_visualization")).toBe(false)
  })
})

describe("useDataCollectionUrlSync — enabled regardless of id", () => {
  it("neither reads nor writes when disabled", () => {
    window.history.replaceState(null, "", `/?dc_search=ada`)

    const { setSearch, rerender } = setup({ disabled: true })
    expect(setSearch).not.toHaveBeenCalled()

    rerender({ search: "changed" })
    expect(currentParams().get("dc_search")).toBe("ada")
  })

  it("syncs both ways with no id involved (the hook takes no id)", () => {
    // URL → collection
    window.history.replaceState(null, "", `/?dc_search=ada`)
    const { setSearch, rerender } = setup()
    expect(setSearch).toHaveBeenCalledWith("ada")

    // collection → URL
    rerender({ search: "bob" })
    expect(currentParams().get("dc_search")).toBe("bob")
  })
})
