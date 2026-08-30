import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

interface ConditionalExport {
  types: string
  import: string
}

interface PackageManifest {
  exports?: Record<string, ConditionalExport | string>
}

const packageManifest = JSON.parse(
  readFileSync(resolve(import.meta.dirname, "../../package.json"), "utf8")
) as PackageManifest

const componentEntries: Record<string, ConditionalExport> = {
  "./F0Alert": {
    types: "./dist/components/F0Alert/index.d.ts",
    import: "./dist/esm/F0Alert.js",
  },
  "./F0Box": {
    types: "./dist/lib/F0Box/index.d.ts",
    import: "./dist/esm/F0Box.js",
  },
  "./F0Button": {
    types: "./dist/components/F0Button/index.d.ts",
    import: "./dist/esm/F0Button.js",
  },
  "./F0Card": {
    types: "./dist/components/F0Card/index.d.ts",
    import: "./dist/esm/F0Card.js",
  },
  "./F0DatePicker": {
    types: "./dist/components/F0DatePicker/index.d.ts",
    import: "./dist/esm/F0DatePicker.js",
  },
  "./F0Dialog": {
    types: "./dist/patterns/F0Dialog/index.d.ts",
    import: "./dist/esm/F0Dialog.js",
  },
  "./F0Heading": {
    types: "./dist/components/F0Heading/index.d.ts",
    import: "./dist/esm/F0Heading.js",
  },
  "./F0NumberInput": {
    types: "./dist/components/F0NumberInput/index.d.ts",
    import: "./dist/esm/F0NumberInput.js",
  },
  "./F0Select": {
    types: "./dist/components/F0Select/index.d.ts",
    import: "./dist/esm/F0Select.js",
  },
  "./F0Text": {
    types: "./dist/components/F0Text/index.d.ts",
    import: "./dist/esm/F0Text.js",
  },
  "./F0TextInput": {
    types: "./dist/components/F0TextInput/index.d.ts",
    import: "./dist/esm/F0TextInput.js",
  },
}

describe("published package exports", () => {
  it("routes every modern library entry through the preserved ESM graph", () => {
    expect(packageManifest.exports?.["."]).toEqual({
      types: "./dist/f0.d.ts",
      import: "./dist/esm/f0.js",
    })
    expect(packageManifest.exports?.["./experimental"]).toEqual({
      types: "./dist/experimental.d.ts",
      import: "./dist/esm/experimental.js",
    })
    expect(packageManifest.exports?.["./ai"]).toEqual({
      types: "./dist/ai.d.ts",
      import: "./dist/esm/ai.js",
    })
    expect(packageManifest.exports?.["./component-status"]).toEqual({
      types: "./dist/component-status.d.ts",
      import: "./dist/esm/component-status.js",
    })
    expect(packageManifest.exports?.["./i18n-provider-defaults"]).toEqual({
      types: "./dist/lib/providers/i18n/i18n-provider-defaults.d.ts",
      import: "./dist/esm/i18n-provider-defaults.js",
    })
  })

  it("exposes stable runtime and type entries for custom app components", () => {
    for (const [subpath, contract] of Object.entries(componentEntries)) {
      expect(packageManifest.exports?.[subpath]).toEqual(contract)
    }
  })

  it("preserves the root, styles, package metadata, and legacy dist paths", () => {
    expect(packageManifest.exports?.["./styles.css"]).toBe("./dist/styles.css")
    expect(packageManifest.exports?.["./package.json"]).toBe("./package.json")
    expect(packageManifest.exports?.["./dist/*"]).toBe("./dist/*")
  })

  it("preserves the icon index and per-icon import contracts used by Factorial", () => {
    for (const family of ["ai", "animated", "app", "modules", "special"]) {
      expect(packageManifest.exports?.[`./icons/${family}`]).toEqual({
        types: `./icons/${family}/index.d.ts`,
        import: `./icons/${family}/index.js`,
      })
      expect(packageManifest.exports?.[`./icons/${family}/*`]).toEqual({
        types: `./icons/${family}/*.d.ts`,
        import: `./icons/${family}/*.js`,
      })
    }
  })
})
