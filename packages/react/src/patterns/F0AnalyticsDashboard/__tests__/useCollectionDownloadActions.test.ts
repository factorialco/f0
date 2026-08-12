import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { act, zeroRenderHook } from "@/testing/test-utils"

import { useCollectionDownloadActions } from "../hooks/useCollectionDownloadActions"
import * as downloadHelpers from "../utils/downloadHelpers"

const { toastOpen } = vi.hoisted(() => ({ toastOpen: vi.fn() }))

vi.mock("@/hooks/toast", () => ({
  toasts: { open: toastOpen },
}))

type Employee = {
  id: string
  name: string
  email: string
  salary: number
}

const records: Employee[] = [
  { id: "1", name: "Ada Lovelace", email: "ada@example.com", salary: 1000 },
  { id: "2", name: "Alan Turing", email: "alan@example.com", salary: 2000 },
]

function makeSource() {
  return {
    dataAdapter: {
      paginationType: undefined,
      fetchData: vi.fn().mockResolvedValue({ records }),
    },
    currentFilters: {},
    currentSortings: null,
    currentGrouping: null,
    currentSearch: "",
    currentNavigationFilters: {},
  }
}

const columns = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  {
    id: "salary",
    label: "Salary",
    render: (item: Employee) => `$${item.salary}`,
  },
]

describe("useCollectionDownloadActions", () => {
  beforeEach(() => {
    toastOpen.mockReset()
    toastOpen.mockReturnValue("collection-export")
    vi.spyOn(downloadHelpers, "downloadAsExcel").mockImplementation(() => {})
    vi.spyOn(downloadHelpers, "downloadAsCsv").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("returns Excel + CSV download actions when source is provided", () => {
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source: makeSource(),
        title: "Employees",
        columns,
      })
    )

    const labels = result.current
      .filter((item) => "label" in item)
      .map((item) => item.label)

    expect(labels).toContain("Download Excel")
    expect(labels).toContain("Download CSV")
  })

  it("returns empty array when source is missing", () => {
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source: null,
        title: "Employees",
        columns,
      })
    )

    expect(result.current).toEqual([])
  })

  it("invokes downloadAsExcel with rendered cell values", async () => {
    const source = makeSource()
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
      })
    )

    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }

    await excelAction.onClick()

    expect(downloadHelpers.downloadAsExcel).toHaveBeenCalledTimes(1)
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "collection-export",
      variant: "success",
      title: "Download started",
    })
    const [headers, rows, filename, rowKeys] = (
      downloadHelpers.downloadAsExcel as unknown as {
        mock: { calls: unknown[][] }
      }
    ).mock.calls[0]
    expect(headers).toEqual(["Name", "Email", "Salary"])
    expect(rowKeys).toEqual(["name", "email", "salary"])
    expect(filename).toBe("Employees")
    // Rendered column should produce the formatted string, not the raw number.
    expect(rows).toEqual([
      { name: "Ada Lovelace", email: "ada@example.com", salary: "$1000" },
      { name: "Alan Turing", email: "alan@example.com", salary: "$2000" },
    ])
  })

  it("invokes downloadAsCsv with rendered cell values", async () => {
    const source = makeSource()
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
      })
    )

    const csvAction = result.current.find(
      (item) => "label" in item && item.label === "Download CSV"
    ) as { onClick: () => Promise<void> }

    await csvAction.onClick()

    expect(downloadHelpers.downloadAsCsv).toHaveBeenCalledTimes(1)
  })

  it("respects hidden columns from tableSettings", async () => {
    const source = makeSource()
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
        tableSettings: { hidden: ["email"] },
      })
    )

    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }

    await excelAction.onClick()

    const [headers] = (
      downloadHelpers.downloadAsExcel as unknown as {
        mock: { calls: unknown[][] }
      }
    ).mock.calls[0]
    expect(headers).toEqual(["Name", "Salary"])
  })

  it("does not download when there are no columns", async () => {
    const source = makeSource()
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Empty",
        columns: [],
      })
    )

    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }

    await excelAction.onClick()

    expect(downloadHelpers.downloadAsExcel).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "collection-export",
      variant: "default",
      title: "No data to export",
      description: "Change your filters and try again",
    })
  })

  it("reports a failure when collection data cannot be fetched", async () => {
    const source = makeSource()
    source.dataAdapter.fetchData.mockRejectedValue(new Error("Request failed"))
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
      })
    )

    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }

    await excelAction.onClick()

    expect(downloadHelpers.downloadAsExcel).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "collection-export",
      variant: "error",
      title: "Couldn't export data",
      description: "Try again",
    })
  })

  it("reports when the collection exceeds the export limit", async () => {
    const source = makeSource()
    source.dataAdapter.fetchData.mockResolvedValue({
      records: Array.from({ length: 10_001 }, (_, index) => ({ id: index })),
    })
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
      })
    )

    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }

    await excelAction.onClick()

    expect(downloadHelpers.downloadAsExcel).not.toHaveBeenCalled()
    expect(toastOpen).toHaveBeenLastCalledWith({
      id: "collection-export",
      variant: "default",
      title: "Too much data to export",
      description: "Narrow your filters and try again",
    })
  })

  it("disables both download actions while an export is running", async () => {
    let resolveFetch: ((value: { records: Employee[] }) => void) | undefined
    const source = makeSource()
    source.dataAdapter.fetchData.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve
        })
    )
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
      })
    )
    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }

    let download: Promise<void> | undefined
    act(() => {
      download = excelAction.onClick()
    })

    expect(result.current).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "Exporting…", disabled: true }),
        expect.objectContaining({ label: "Exporting…", disabled: true }),
      ])
    )

    await act(async () => {
      resolveFetch?.({ records })
      await download
    })
  })

  it("coalesces concurrent collection export actions", async () => {
    let resolveFetch: ((value: { records: Employee[] }) => void) | undefined
    const source = makeSource()
    source.dataAdapter.fetchData.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve
        })
    )
    const { result } = zeroRenderHook(() =>
      useCollectionDownloadActions({
        source,
        title: "Employees",
        columns,
      })
    )
    const excelAction = result.current.find(
      (item) => "label" in item && item.label === "Download Excel"
    ) as { onClick: () => Promise<void> }
    const csvAction = result.current.find(
      (item) => "label" in item && item.label === "Download CSV"
    ) as { onClick: () => Promise<void> }

    let excelDownload: Promise<void> | undefined
    let csvDownload: Promise<void> | undefined
    act(() => {
      excelDownload = excelAction.onClick()
      csvDownload = csvAction.onClick()
    })

    expect(source.dataAdapter.fetchData).toHaveBeenCalledTimes(1)

    await act(async () => {
      resolveFetch?.({ records })
      await Promise.all([excelDownload, csvDownload])
    })

    expect(downloadHelpers.downloadAsExcel).toHaveBeenCalledTimes(1)
    expect(downloadHelpers.downloadAsCsv).not.toHaveBeenCalled()
  })
})
