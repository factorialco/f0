import { describe, expect, it } from "vitest"

import {
  validateBundleCeiling,
  validateLazyBoundary,
  validateRootSubpathParity,
  type BundleCeiling,
  type BundleMetric,
} from "../consumer-bundle-contract"

const ceiling: BundleCeiling = {
  maxInitialJsBrotli: 200,
  maxRetainedF0Modules: 10,
  maxCssBrotli: 50,
}

const metric: BundleMetric = {
  initialJsBrotli: 180,
  totalJsBrotli: 220,
  cssBrotli: 40,
  retainedF0Modules: 8,
}

describe("consumer bundle contract", () => {
  it("accepts a scenario within its delivery and structure ceilings", () => {
    expect(validateBundleCeiling("example", metric, ceiling)).toEqual([])
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
