import { describe, expect, it } from "vitest"

import { validateRootSubpathParity } from "../consumer-bundle-contract"

describe("consumer bundle contract", () => {
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
})
