import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRenderHook } from "@/testing/test-utils"

import { useCollectionDownloadActions } from "../hooks/useCollectionDownloadActions"
import * as downloadHelpers from "../utils/downloadHelpers"

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
  })
})
