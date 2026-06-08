import { describe, expect, test } from "vitest"

import { getFileTypeInfo } from "./utils"

describe("getFileTypeInfo", () => {
  describe("MIME type matching", () => {
    test("identifies legacy .xls as Excel via 'application/vnd.ms-excel'", () => {
      expect(
        getFileTypeInfo({
          name: "report.xls",
          type: "application/vnd.ms-excel",
        }).type
      ).toBe("XLS")
    })

    // Regression: OOXML xlsx MIME contains the substring "xml" (inside
    // "openxmlformats"), so it used to be detected as XML instead of Excel.
    test("identifies .xlsx (OOXML) as Excel, not XML", () => {
      expect(
        getFileTypeInfo({
          name: "report.xlsx",
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }).type
      ).toBe("XLS")
    })

    test("identifies .docx (OOXML) as Word, not XML", () => {
      expect(
        getFileTypeInfo({
          name: "doc.docx",
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }).type
      ).toBe("DOC")
    })

    test("identifies .pptx (OOXML) as PowerPoint, not XML", () => {
      expect(
        getFileTypeInfo({
          name: "slides.pptx",
          type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        }).type
      ).toBe("PPT")
    })

    test("identifies plain XML files as XML", () => {
      expect(
        getFileTypeInfo({ name: "data.xml", type: "application/xml" }).type
      ).toBe("XML")
    })

    test("identifies PDFs", () => {
      expect(
        getFileTypeInfo({ name: "a.pdf", type: "application/pdf" }).type
      ).toBe("PDF")
    })

    test("identifies images", () => {
      expect(getFileTypeInfo({ name: "a.png", type: "image/png" }).type).toBe(
        "IMG"
      )
    })

    test("identifies CSVs", () => {
      expect(getFileTypeInfo({ name: "a.csv", type: "text/csv" }).type).toBe(
        "CSV"
      )
    })
  })

  describe("Extension fallback (no MIME type)", () => {
    test("xlsx → Excel", () => {
      expect(getFileTypeInfo({ name: "report.xlsx", type: "" }).type).toBe(
        "XLS"
      )
    })

    test("docx → Word", () => {
      expect(getFileTypeInfo({ name: "doc.docx", type: "" }).type).toBe("DOC")
    })

    test("unknown extension falls back to FILE", () => {
      expect(getFileTypeInfo({ name: "thing.xyz", type: "" }).type).toBe("FILE")
    })

    test("no name and no type falls back to FILE", () => {
      expect(getFileTypeInfo({ name: "", type: "" }).type).toBe("FILE")
    })
  })
})
