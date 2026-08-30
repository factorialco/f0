import { describe, expect, it } from "vitest"

import {
  compareBundleReport,
  normalizeChunkName,
  type BundleReport,
} from "../consumer-bundle-baseline"

const baseline: BundleReport = {
  variants: {
    native: {
      assets: {
        js: { raw: 100, gzip: 80, brotli: 70 },
        initialJs: { raw: 100, gzip: 80, brotli: 70 },
        css: { raw: 0, gzip: 0, brotli: 0 },
      },
      retainedF0Modules: [],
    },
    f0Button: {
      assets: {
        js: { raw: 1_000, gzip: 800, brotli: 700 },
        initialJs: { raw: 1_000, gzip: 800, brotli: 700 },
        css: { raw: 100, gzip: 80, brotli: 70 },
      },
      retainedF0Modules: ["f0.js", "F0CanvasPanel.js"],
    },
  },
}

describe("consumer bundle baseline", () => {
  it("accepts an equal or smaller consumer bundle", () => {
    const actual: BundleReport = structuredClone(baseline)
    actual.variants.f0Button.assets.js.brotli -= 1
    actual.variants.f0Button.retainedF0Modules = ["f0.js"]

    expect(compareBundleReport(actual, baseline)).toEqual([])
  })

  it("reports every asset metric that grows beyond the baseline", () => {
    const actual: BundleReport = structuredClone(baseline)
    actual.variants.f0Button.assets.js.raw += 1
    actual.variants.f0Button.assets.css.brotli += 1

    expect(compareBundleReport(actual, baseline)).toEqual([
      "f0Button JS raw grew from 1000 B to 1001 B (+1 B)",
      "f0Button CSS brotli grew from 70 B to 71 B (+1 B)",
    ])
  })

  it("reports F0 modules that were not retained by the baseline", () => {
    const actual: BundleReport = structuredClone(baseline)
    actual.variants.f0Button.retainedF0Modules.push("xlsx.js")

    expect(compareBundleReport(actual, baseline)).toEqual([
      "f0Button retained new F0 module: xlsx.js",
    ])
  })

  it("requires every measured variant to have a reviewed baseline", () => {
    const actual: BundleReport = structuredClone(baseline)
    actual.variants.unreviewed = structuredClone(actual.variants.native)

    expect(compareBundleReport(actual, baseline)).toEqual([
      "Unexpected consumer bundle variant without baseline: unreviewed",
    ])
  })

  it("normalizes generated chunk hashes without changing stable filenames", () => {
    expect(normalizeChunkName("F0CanvasPanel-t6LAI_x8.js")).toBe(
      "F0CanvasPanel.js"
    )
    expect(normalizeChunkName("_commonjsHelpers-ByX85dGu.js")).toBe(
      "_commonjsHelpers.js"
    )
    expect(normalizeChunkName("i18n-provider-defaults.js")).toBe(
      "i18n-provider-defaults.js"
    )
  })
})
