import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

interface PackageManifest {
  scripts?: Record<string, string>
}

const packageManifest = JSON.parse(
  readFileSync(resolve(import.meta.dirname, "../../package.json"), "utf8")
) as PackageManifest

describe("build watch contract", () => {
  it("starts bundled, preserved ESM, and declaration watchers after a complete build", () => {
    expect(packageManifest.scripts?.["build:watch"]).toBe(
      "pnpm run build && run-p --race build:watch:runtime build:watch:esm build:watch:declarations"
    )
    expect(packageManifest.scripts?.["build:watch:runtime"]).toContain(
      "BUILD_WATCH=true"
    )
    expect(packageManifest.scripts?.["build:watch:runtime"]).toContain(
      "vite build --watch"
    )
    expect(packageManifest.scripts?.["build:watch:esm"]).toContain(
      "BUILD_PRESERVED_ESM=true"
    )
    expect(packageManifest.scripts?.["build:watch:esm"]).toContain(
      "vite build --watch"
    )
    expect(packageManifest.scripts?.["build:watch:declarations"]).toContain(
      "BUILD_DECLARATIONS_ONLY=true"
    )
    expect(packageManifest.scripts?.["build:watch:declarations"]).toContain(
      "vite build --watch"
    )
  })
})
