import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook } from "@/testing/test-utils"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { useDashboardExport } from "../hooks/useDashboardExport"
import type { DashboardItem } from "../types"
import * as downloadHelpers from "../utils/downloadHelpers"

const { toastOpen } = vi.hoisted(() => ({ toastOpen: vi.fn() }))

vi.mock("@/hooks/toast", () => ({
  toasts: { open: toastOpen },
}))

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
  const { result } = renderExport(items)

  await act(async () => {
    await result.current.exportAsExcel()
  })
}

function renderExport(items: DashboardItem<typeof filtersDefinition>[]) {
  return zeroRenderHook(() =>
    useDashboardExport({
      items,
      filters: activeFilters,
      filename: "test-dashboard",
    })
  )
}

describe("useDashboardExport", () => {
  beforeEach(() => {
    toastOpen.mockReset()
    toastOpen.mockReturnValue("dashboard-export")
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

  it("exports paginated collections in bounded pages", async () => {
    const fetchData = vi.fn(
      ({ pagination }: { pagination: { currentPage: number } }) =>
        Promise.resolve({
          records:
            pagination.currentPage === 1
              ? [{ id: "1", name: "Ada" }]
              : [{ id: "2", name: "Alan" }],
          pagesCount: 2,
        })
    )

    await runExport([
      {
        id: "people",
        title: "People",
        type: "collection",
        createSource: () => ({
          dataAdapter: { paginationType: "pages", fetchData },
        }),
        visualizations: [],
      },
    ])

    expect(fetchData).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        pagination: { currentPage: 1, perPage: 100 },
      })
    )
    expect(fetchData).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        pagination: { currentPage: 2, perPage: 100 },
      })
    )
  })

  it("reports preparing and success states for a complete export", async () => {
    await runExport([
      {
        id: "headcount",
        title: "Headcount",
        type: "metric",
        fetchData: vi.fn().mockResolvedValue({ value: 42 }),
      },
    ])

    expect(toastOpen).toHaveBeenNthCalledWith(1, {
      variant: "loading",
      title: "Preparing dashboard export",
      persistent: true,
    })
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "dashboard-export",
      variant: "success",
      title: "Dashboard exported",
    })
  })

  it("rejects the whole export when any dashboard item fails", async () => {
    const { result } = renderExport([
      {
        id: "headcount",
        title: "Headcount",
        type: "metric",
        fetchData: vi.fn().mockResolvedValue({ value: 42 }),
      },
      {
        id: "failed-chart",
        title: "Headcount over time",
        type: "chart",
        chart: { type: "line" },
        fetchData: vi.fn().mockRejectedValue(new Error("Request failed")),
      },
    ])

    await act(async () => {
      await expect(result.current.exportAsExcel()).rejects.toThrow(
        "Request failed"
      )
    })

    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "dashboard-export",
      variant: "error",
      title: "Couldn't export dashboard",
      description: "Try again",
    })
    expect(result.current.isExporting).toBe(false)
  })

  it("rejects the whole export when a chart type is unsupported", async () => {
    const { result } = renderExport([
      {
        id: "unsupported-chart",
        title: "Unsupported chart",
        type: "chart",
        chart: { type: "unsupported" } as never,
        fetchData: vi.fn().mockResolvedValue({
          categories: ["Engineering"],
          series: [{ name: "Headcount", data: [42] }],
        }),
      },
    ])

    await act(async () => {
      await expect(result.current.exportAsExcel()).rejects.toThrow(
        'Chart "unsupported-chart" cannot be exported'
      )
    })
    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
  })

  it("uses the displayed table labels and rendered values", async () => {
    await runExport([
      {
        id: "people",
        title: "People",
        type: "collection",
        createSource: () => ({
          dataAdapter: {
            fetchData: vi.fn().mockResolvedValue({
              records: [{ name: "Ada", salary: 1000 }],
            }),
          },
        }),
        visualizations: [
          {
            type: "table",
            options: {
              columns: [
                { id: "name", label: "Employee" },
                {
                  id: "salary",
                  label: "Salary",
                  render: (record: { salary: number }) => `$${record.salary}`,
                },
              ],
            },
          },
        ],
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        {
          name: "People",
          columns: ["Employee", "Salary"],
          keys: ["name", "salary"],
          rows: [{ name: "Ada", salary: "$1000" }],
        },
      ],
      "test-dashboard",
      expect.objectContaining({
        sheetName: "Dashboard overview",
        description:
          "Preview every dashboard widget here. Use each widget sheet for its full exported data.",
        rowsExported: expect.any(Function),
        previewTruncated: expect.any(Function),
        fullDataSheet: expect.any(Function),
      })
    )
  })

  it("reports when a collection is too large instead of exporting partial data", async () => {
    const records = Array.from({ length: 10_001 }, (_, index) => ({
      id: index,
    }))
    const { result } = renderExport([
      {
        id: "people",
        title: "People",
        type: "collection",
        createSource: () => ({
          dataAdapter: {
            fetchData: vi.fn().mockResolvedValue({ records }),
          },
        }),
        visualizations: [],
      },
    ])

    await act(async () => {
      await expect(result.current.exportAsExcel()).rejects.toThrow(
        "The export exceeds the 10000-row limit"
      )
    })

    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "dashboard-export",
      variant: "default",
      title: "Too much data to export",
      description: "Narrow your filters and try again",
    })
  })

  it("reports an empty state when every dashboard item has no rows", async () => {
    const { result } = renderExport([
      {
        id: "people",
        title: "People",
        type: "collection",
        createSource: () => ({
          dataAdapter: {
            fetchData: vi.fn().mockResolvedValue({ records: [] }),
          },
        }),
        visualizations: [],
      },
    ])

    await act(async () => {
      await expect(result.current.exportAsExcel()).rejects.toThrow(
        "The dashboard has no data to export"
      )
    })

    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "dashboard-export",
      variant: "default",
      title: "No data to export",
      description: "Change your filters and try again",
    })
  })

  it("keeps an empty item represented when another item has data", async () => {
    await runExport([
      {
        id: "people",
        title: "People",
        type: "collection",
        createSource: () => ({
          dataAdapter: {
            fetchData: vi.fn().mockResolvedValue({ records: [] }),
          },
        }),
        visualizations: [],
      },
      {
        id: "headcount",
        title: "Headcount",
        type: "metric",
        fetchData: vi.fn().mockResolvedValue({ value: 42 }),
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: "Metrics", rows: expect.any(Array) }),
        { name: "People", columns: [], rows: [] },
      ]),
      "test-dashboard",
      expect.objectContaining({
        sheetName: "Dashboard overview",
        rowsExported: expect.any(Function),
      })
    )
  })

  it("coalesces concurrent export requests", async () => {
    let resolveFetch: ((value: { value: number }) => void) | undefined
    const fetchData = vi.fn(
      () =>
        new Promise<{ value: number }>((resolve) => {
          resolveFetch = resolve
        })
    )
    const { result } = renderExport([
      {
        id: "headcount",
        title: "Headcount",
        type: "metric",
        fetchData,
      },
    ])

    await act(async () => {
      const first = result.current.exportAsExcel()
      const second = result.current.exportAsExcel()
      resolveFetch?.({ value: 42 })
      await Promise.all([first, second])
    })

    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledTimes(1)
  })
})
