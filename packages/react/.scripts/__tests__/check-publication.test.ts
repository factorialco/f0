import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { resolve } from "node:path"
import { afterEach, expect, it } from "vitest"

import { validatePublication } from "../check-publication"

let packageRoot: string | undefined

afterEach(() => {
  if (packageRoot) rmSync(packageRoot, { force: true, recursive: true })
  packageRoot = undefined
})

it("fails closed for an incomplete published package", () => {
  packageRoot = mkdtempSync(resolve(tmpdir(), "f0-publication-"))
  for (const directory of [
    "assets/fonts",
    "dist/components/__stories__",
    "dist/esm",
    "icons/app",
  ]) {
    mkdirSync(resolve(packageRoot, directory), { recursive: true })
  }

  writeFileSync(
    resolve(packageRoot, "package.json"),
    JSON.stringify({
      exports: {
        "./icons/app/*": {
          import: "./icons/app/*.js",
          types: "./icons/app/*.d.ts",
        },
      },
    })
  )
  writeFileSync(resolve(packageRoot, "postcss.config.js"), "export default {}")
  writeFileSync(resolve(packageRoot, "assets/fonts/Inter.woff2"), "font")
  writeFileSync(
    resolve(packageRoot, "dist/components/__stories__/Example.stories.d.ts"),
    "export {}"
  )
  writeFileSync(
    resolve(packageRoot, "dist/styles.css"),
    '@font-face { src: url("fonts/missing.woff2") }'
  )
  writeFileSync(
    resolve(packageRoot, "dist/esm/entry.js"),
    'import "missing-package"\nimport "./missing.js"'
  )
  writeFileSync(
    resolve(packageRoot, "icons/app/index.js"),
    'export { default as Add } from "./Add"'
  )
  writeFileSync(resolve(packageRoot, "icons/app/Add.js"), "export default 1")

  expect(validatePublication(packageRoot)).toEqual(
    expect.arrayContaining([
      "Expected main to be dist/f0.js, received undefined",
      "Missing package export: ./F0Button",
      "Missing wildcard export target: ./icons/app/* -> ./icons/app/Add.d.ts",
      "Missing build artifact: dist/F0Button.js",
      "Internal build file is published: postcss.config.js",
      "Non-production declaration is published: dist/components/__stories__/Example.stories.d.ts",
      "Source font is duplicated in the package: assets/fonts/Inter.woff2",
      "Published styles reference missing or unpackable asset: fonts/missing.woff2",
      "Undeclared preserved ESM import: dist/esm/entry.js -> missing-package",
      "Missing preserved ESM import: dist/esm/entry.js -> ./missing.js",
      "Missing preserved ESM import: icons/app/index.js -> ./Add",
    ])
  )
})
