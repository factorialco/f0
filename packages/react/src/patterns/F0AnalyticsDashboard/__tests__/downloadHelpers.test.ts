import { afterEach, describe, expect, it, vi } from "vitest"

import * as XLSX from "xlsx"

import {
  downloadAsCsv,
  downloadMultiSheetExcel,
  sanitizeDownloadFilename,
  serializeValue,
  uniqueExcelSheetName,
} from "../utils/downloadHelpers"

describe("downloadHelpers", () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it("preserves spreadsheet value types and neutralizes formulas", () => {
    expect(serializeValue(42)).toBe(42)
    expect(serializeValue(false)).toBe(false)
    expect(serializeValue('=HYPERLINK("https://example.com")')).toBe(
      '\'=HYPERLINK("https://example.com")'
    )
    expect(serializeValue("+44123456789")).toBe("'+44123456789")
    expect(serializeValue(' \t=HYPERLINK("https://example.com")')).toBe(
      '\' \t=HYPERLINK("https://example.com")'
    )
    expect(serializeValue("Headcount")).toBe("Headcount")
  })

  it("creates portable download filenames", () => {
    expect(sanitizeDownloadFilename("  Workforce: GB/ES?*  ")).toBe(
      "Workforce- GB-ES--"
    )
    expect(sanitizeDownloadFilename("CON")).toBe("_CON")
    expect(sanitizeDownloadFilename("CON.txt")).toBe("_CON.txt")
    expect(sanitizeDownloadFilename(" ... ")).toBe("download")
  })

  it("creates valid unique Excel sheet names after truncation", () => {
    const usedNames = new Set<string>()
    const longName = "Headcount by workplace and legal entity"

    expect(uniqueExcelSheetName(longName, usedNames)).toBe(
      "Headcount by workplace and lega"
    )
    expect(uniqueExcelSheetName(longName.toUpperCase(), usedNames)).toBe(
      "HEADCOUNT BY WORKPLACE AND (2)"
    )
    expect(uniqueExcelSheetName("A/B:C*D?E[F]", usedNames)).toBe("A-B-C-D-E-F-")
  })

  it("keeps the Blob URL alive until after the download click", () => {
    vi.useFakeTimers()
    const createObjectURL = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:dashboard-export")
    const revokeObjectURL = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => {})
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {})

    downloadAsCsv(["Name"], [{ Name: "Ada" }], "People/report")

    expect(createObjectURL).toHaveBeenCalledTimes(1)
    expect(click).toHaveBeenCalledTimes(1)
    expect(revokeObjectURL).not.toHaveBeenCalled()
    expect(document.querySelector('a[download="People-report.csv"]')).toBeNull()

    vi.runAllTimers()
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:dashboard-export")
  })

  it("opens multi-widget workbooks with a useful dashboard overview", async () => {
    let exportedBlob: Blob | undefined
    vi.spyOn(URL, "createObjectURL").mockImplementation((blob) => {
      exportedBlob = blob
      return "blob:dashboard-export"
    })
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => {})
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {})

    downloadMultiSheetExcel(
      [
        {
          name: "Metrics",
          columns: ["Metric", "Value"],
          rows: [
            { Metric: "Total headcount", Value: 34 },
            { Metric: "Average tenure", Value: 3.5 },
          ],
        },
        {
          name: "Headcount by location",
          columns: ["Location", "Headcount"],
          rows: [
            { Location: "Barcelona", Headcount: 20 },
            { Location: "Madrid", Headcount: 14 },
          ],
        },
      ],
      "Workforce snapshot",
      {
        sheetName: "Dashboard overview",
        description: "Every widget is previewed here.",
        rowsExported: (amount) => `${amount} rows exported`,
        previewTruncated: (amount) => `Showing the first ${amount} rows`,
        fullDataSheet: (sheetName) => `Full data: ${sheetName}`,
      }
    )

    expect(exportedBlob).toBeDefined()
    const exportedBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as ArrayBuffer)
      reader.onerror = () => reject(reader.error)
      reader.readAsArrayBuffer(exportedBlob!)
    })
    const workbook = XLSX.read(exportedBuffer)
    expect(workbook.SheetNames).toEqual([
      "Dashboard overview",
      "Metrics",
      "Headcount by location",
    ])

    const overviewRows = XLSX.utils.sheet_to_json<unknown[]>(
      workbook.Sheets["Dashboard overview"],
      { header: 1, raw: true }
    )
    expect(overviewRows).toEqual(
      expect.arrayContaining([
        ["Workforce snapshot"],
        ["Metrics", "2 rows exported"],
        ["Total headcount", 34],
        ["Headcount by location", "2 rows exported"],
        ["Barcelona", 20],
      ])
    )
    expect(workbook.Sheets["Dashboard overview"].A4.l?.Target).toBe(
      "#'Metrics'!A1"
    )
  })
})
