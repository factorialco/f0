import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook } from "@/testing/test-utils"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { useDashboardExport } from "../hooks/useDashboardExport"
import type { DashboardItem } from "../types"
import * as downloadHelpers from "../utils/downloadHelpers"

const filtersDefinition = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [{ value: "engineering", label: "Engineering" }],
    },
  },
} as const satisfies FiltersDefinition

type TestFilters = FiltersState<typeof filtersDefinition>

const activeFilters: TestFilters = {
  department: ["engineering"],
}

async function runExport(items: DashboardItem<typeof filtersDefinition>[]) {
  const { result } = zeroRenderHook(() =>
    useDashboardExport({
      items,
      filters: activeFilters,
      filename: "test-dashboard",
    })
  )

  await act(async () => {
    await result.current.exportAsExcel()
  })
}

describe("useDashboardExport", () => {
  beforeEach(() => {
    vi.spyOn(downloadHelpers, "downloadMultiSheetExcel").mockImplementation(
      () => {}
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("honors filter opt-out for metrics", async () => {
    const filteredFetch = vi.fn().mockResolvedValue({ value: 42 })
    const unfilteredFetch = vi.fn().mockResolvedValue({ value: 84 })

    await runExport([
      {
        id: "filtered-metric",
        title: "Filtered metric",
        type: "metric",
        fetchData: filteredFetch,
      },
      {
        id: "unfiltered-metric",
        title: "Unfiltered metric",
        type: "metric",
        fetchData: unfilteredFetch,
        useDashboardFilters: false,
      },
    ])

    expect(filteredFetch).toHaveBeenCalledWith(activeFilters)
    expect(unfilteredFetch).toHaveBeenCalledWith({})
  })

  it("honors filter opt-out for charts", async () => {
    const filteredFetch = vi.fn().mockResolvedValue({
      categories: ["Engineering"],
      series: [{ name: "Headcount", data: [42] }],
    })
    const unfilteredFetch = vi.fn().mockResolvedValue({
      categories: ["All"],
      series: [{ name: "Headcount", data: [84] }],
    })

    await runExport([
      {
        id: "filtered-chart",
        title: "Filtered chart",
        type: "chart",
        chart: { type: "bar" },
        fetchData: filteredFetch,
      },
      {
        id: "unfiltered-chart",
        title: "Unfiltered chart",
        type: "chart",
        chart: { type: "bar" },
        fetchData: unfilteredFetch,
        useDashboardFilters: false,
      },
    ])

    expect(filteredFetch).toHaveBeenCalledWith(activeFilters)
    expect(unfilteredFetch).toHaveBeenCalledWith({})
  })

  it("honors filter opt-out for collections", async () => {
    const filteredCreateSource = vi.fn(() => ({
      dataAdapter: {
        fetchData: vi.fn().mockResolvedValue({
          records: [{ department: "Engineering" }],
        }),
      },
    }))
    const unfilteredCreateSource = vi.fn(() => ({
      dataAdapter: {
        fetchData: vi.fn().mockResolvedValue({
          records: [{ department: "All" }],
        }),
      },
    }))

    await runExport([
      {
        id: "filtered-collection",
        title: "Filtered collection",
        type: "collection",
        createSource: filteredCreateSource,
        visualizations: [],
      },
      {
        id: "unfiltered-collection",
        title: "Unfiltered collection",
        type: "collection",
        createSource: unfilteredCreateSource,
        visualizations: [],
        useDashboardFilters: false,
      },
    ])

    expect(filteredCreateSource).toHaveBeenCalledWith(activeFilters)
    expect(unfilteredCreateSource).toHaveBeenCalledWith({})
  })
})
