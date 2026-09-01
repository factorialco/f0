import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { join, resolve } from "node:path"
import { afterEach, describe, expect, it } from "vitest"

import {
  validateBuildArtifacts,
  validateExportTargets,
  validatePackageManifest,
  validatePublishedFiles,
  validatePublishedStyleAssets,
  validatePreservedEsm,
} from "../check-publication"

const packageRoot = resolve(import.meta.dirname, "../..")
const packageManifest = JSON.parse(
  readFileSync(resolve(packageRoot, "package.json"), "utf8")
)
const temporaryDirectories: string[] = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true })
  }
})

describe("published package contract", () => {
  it("accepts the real package manifest", () => {
    expect(validatePackageManifest(packageManifest)).toEqual([])
  })

  it("names missing public exports", () => {
    const manifest = structuredClone(packageManifest)
    delete manifest.exports["./F0Button"]

    expect(validatePackageManifest(manifest)).toContain(
      "Missing package export: ./F0Button"
    )
  })

  it("names missing runtime and declaration export targets", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)

    expect(
      validateExportTargets(root, {
        "./Example": {
          types: "./dist/Example.d.ts",
          import: "./dist/esm/Example.js",
        },
      })
    ).toEqual([
      "Missing export target: ./Example -> ./dist/Example.d.ts",
      "Missing export target: ./Example -> ./dist/esm/Example.js",
    ])
  })

  it("checks both sides of wildcard export targets", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)
    mkdirSync(resolve(root, "icons/app"), { recursive: true })
    writeFileSync(resolve(root, "icons/app/Plus.js"), "export const Plus = 1")

    expect(
      validateExportTargets(root, {
        "./icons/app/*": {
          types: "./icons/app/*.d.ts",
          import: "./icons/app/*.js",
        },
      })
    ).toEqual([
      "Missing wildcard export target: ./icons/app/* -> ./icons/app/Plus.d.ts",
    ])
  })

  it("reports missing relative imports in preserved ESM", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)
    mkdirSync(resolve(root, "dist/esm"), { recursive: true })
    writeFileSync(resolve(root, "dist/esm/entry.js"), 'import "./missing.js"')

    expect(validatePreservedEsm(root, {})).toEqual([
      "Missing preserved ESM import: dist/esm/entry.js -> ./missing.js",
    ])
  })

  it("requires extension-complete icon barrel imports", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)
    mkdirSync(resolve(root, "icons/app"), { recursive: true })
    writeFileSync(
      resolve(root, "icons/app/index.js"),
      'export { default as Add } from "./Add"'
    )
    writeFileSync(resolve(root, "icons/app/Add.js"), "export default 1")

    expect(validatePreservedEsm(root, {})).toEqual([
      "Missing preserved ESM import: icons/app/index.js -> ./Add",
    ])
  })

  it("reports undeclared packages imported by preserved ESM", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)
    mkdirSync(resolve(root, "dist/esm"), { recursive: true })
    writeFileSync(
      resolve(root, "dist/esm/entry.js"),
      'import "missing-package"'
    )

    expect(validatePreservedEsm(root, {})).toEqual([
      "Undeclared preserved ESM import: dist/esm/entry.js -> missing-package",
    ])
  })

  it("requires derived bundled, preserved ESM, and structural artifacts", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)

    expect(validateBuildArtifacts(root)).toEqual(
      expect.arrayContaining([
        "Missing build artifact: dist/F0Button.js",
        "Missing build artifact: dist/esm/F0Button.js",
        "Missing build artifact: dist/global.d.ts",
        "Missing build artifact: dist/esm/components/F0Button/F0Button.js",
      ])
    )
  })

  it("rejects internal build machinery and duplicate source fonts", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)
    mkdirSync(resolve(root, "assets/fonts"), { recursive: true })
    mkdirSync(resolve(root, "dist/components/__stories__"), { recursive: true })
    writeFileSync(resolve(root, "postcss.config.js"), "export default {}")
    writeFileSync(resolve(root, "assets/fonts/Inter.woff2"), "font")
    writeFileSync(
      resolve(root, "dist/components/__stories__/Example.stories.d.ts"),
      "export {}"
    )

    expect(validatePublishedFiles(root)).toEqual([
      "Internal build file is published: postcss.config.js",
      "Non-production declaration is published: dist/components/__stories__/Example.stories.d.ts",
      "Source font is duplicated in the package: assets/fonts/Inter.woff2",
    ])
  })

  it("reports stylesheet references missing from the package", () => {
    const root = mkdtempSync(join(tmpdir(), "f0-publication-"))
    temporaryDirectories.push(root)
    mkdirSync(resolve(root, "dist"), { recursive: true })
    writeFileSync(
      resolve(root, "dist/styles.css"),
      '@font-face { src: url("fonts/missing.woff2") }'
    )

    expect(validatePublishedStyleAssets(root)).toEqual([
      "Published styles reference missing or unpackable asset: fonts/missing.woff2",
    ])
  })
})
