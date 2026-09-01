import { describe, expect, it } from "vitest"

import {
  validateDeliveryCeiling,
  validateLazyBoundary,
  validateRootSubpathParity,
  type BundleMetric,
  type DeliveryCeiling,
} from "../consumer-bundle-contract"

const ceiling: DeliveryCeiling = {
  maxInitialJsBrotli: 200,
  maxCssBrotli: 50,
}

const metric: BundleMetric = {
  initialJsBrotli: 180,
  totalJsBrotli: 220,
  cssBrotli: 40,
  retainedF0Modules: 8,
}

describe("consumer bundle contract", () => {
  it("does not turn retained module diagnostics into a delivery failure", () => {
    expect(
      validateDeliveryCeiling(
        "example",
        { ...metric, retainedF0Modules: 10_000 },
        ceiling
      )
    ).toEqual([])
  })

  it("reports compressed delivery expansion", () => {
    expect(
      validateDeliveryCeiling(
        "example",
        { ...metric, initialJsBrotli: 201, cssBrotli: 51 },
        ceiling
      )
    ).toEqual([
      "example initial JS Brotli is 201 B; ceiling is 200 B",
      "example CSS Brotli is 51 B; ceiling is 50 B",
    ])
  })

  it("reports root-only F0 expansion beyond component-subpath tolerance", () => {
    expect(
      validateRootSubpathParity(
        [
          { path: "dist/esm/f0.js", bytes: 10 },
          { path: "dist/esm/F0Button.js", bytes: 100 },
          { path: "dist/esm/F0PdfViewer.js", bytes: 1_000 },
        ],
        [{ path: "dist/esm/F0Button.js", bytes: 100 }],
        { maxAdditionalBytes: 50, maxAdditionalModules: 1 }
      )
    ).toEqual([
      "Root import retains 1010 additional F0 bytes; ceiling is 50 B. Root-only modules: dist/esm/f0.js, dist/esm/F0PdfViewer.js",
      "Root import retains 2 additional F0 modules; ceiling is 1. Root-only modules: dist/esm/f0.js, dist/esm/F0PdfViewer.js",
    ])
  })

  it("requires heavy document parsers to remain async", () => {
    expect(
      validateLazyBoundary(
        "f0PdfViewer",
        ["node_modules/xlsx/xlsx.js", "dist/esm/F0PdfViewer.js"],
        [
          "node_modules/xlsx/xlsx.js",
          "node_modules/docx-preview/dist/docx-preview.js",
          "dist/esm/F0PdfViewer.js",
        ],
        ["node_modules/xlsx/", "node_modules/docx-preview/"]
      )
    ).toEqual([
      "f0PdfViewer initial chunks retain lazy dependency: node_modules/xlsx/",
    ])
  })
})
