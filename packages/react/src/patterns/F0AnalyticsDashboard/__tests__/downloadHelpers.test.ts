import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { downloadMultiSheetExcel } from "../utils/downloadHelpers"

const { aoaToSheet, appendSheet, bookNew, write } = vi.hoisted(() => ({
  aoaToSheet: vi.fn(() => ({})),
  appendSheet: vi.fn(),
  bookNew: vi.fn(() => ({})),
  write: vi.fn(() => new Uint8Array()),
}))

vi.mock("xlsx", () => ({
  utils: {
    aoa_to_sheet: aoaToSheet,
    book_append_sheet: appendSheet,
    book_new: bookNew,
  },
  write,
}))

describe("downloadMultiSheetExcel", () => {
  beforeEach(() => {
    vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:test")
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => {})
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
    aoaToSheet.mockClear()
    appendSheet.mockClear()
    bookNew.mockClear()
    write.mockClear()
  })

  it("serializes duplicate display labels through their stable keys", () => {
    downloadMultiSheetExcel(
      [
        {
          name: "Revenue",
          columns: ["Category", "Revenue", "Revenue"],
          keys: ["category", "bar-0", "line-0"],
          rows: [{ category: "Jan", "bar-0": 10, "line-0": 5 }],
        },
      ],
      "dashboard"
    )

    expect(aoaToSheet).toHaveBeenCalledWith([
      ["Category", "Revenue", "Revenue"],
      ["Jan", "10", "5"],
    ])
    expect(appendSheet).toHaveBeenCalledWith({}, {}, "Revenue")
  })
})
