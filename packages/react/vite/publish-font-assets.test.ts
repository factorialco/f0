import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import postcss from "postcss"
import { afterEach, describe, expect, test } from "vitest"

import { publishFontAssets } from "../publish-font-assets.mjs"

const temporaryDirectories: string[] = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true })
  }
})

describe("publishFontAssets", () => {
  test("publishes local WOFF2 references as cacheable package assets", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    const outputDirectory = mkdtempSync(join(tmpdir(), "f0-dist-"))
    temporaryDirectories.push(fontDirectory)
    temporaryDirectories.push(outputDirectory)
    writeFileSync(
      join(fontDirectory, "InterVariable.woff2"),
      Buffer.from([0, 1, 2, 3])
    )

    const result = await postcss([
      publishFontAssets({
        fontDirectory,
        outputDirectory,
        sourceStylesheet: join(fontDirectory, "style.css"),
      }),
    ]).process(
      '@font-face { src: url("InterVariable.woff2") format("woff2") tech(variations); }',
      {
        from: join(fontDirectory, "style.css"),
      }
    )

    expect(result.css).toContain('url("fonts/InterVariable.woff2")')
    expect(
      readFileSync(join(outputDirectory, "fonts/InterVariable.woff2"))
    ).toEqual(Buffer.from([0, 1, 2, 3]))
  })

  test("leaves remote and non-font URLs unchanged", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    const outputDirectory = mkdtempSync(join(tmpdir(), "f0-dist-"))
    temporaryDirectories.push(fontDirectory)
    temporaryDirectories.push(outputDirectory)
    const css =
      '.example { background: url("https://example.com/image.png"); mask: url("icon.svg"); }'

    const result = await postcss([
      publishFontAssets({
        fontDirectory,
        outputDirectory,
        sourceStylesheet: join(fontDirectory, "style.css"),
      }),
    ]).process(css, { from: join(fontDirectory, "style.css") })

    expect(result.css).toBe(css)
  })

  test("leaves matching font names from other stylesheets unchanged", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    const outputDirectory = mkdtempSync(join(tmpdir(), "f0-dist-"))
    temporaryDirectories.push(fontDirectory)
    temporaryDirectories.push(outputDirectory)
    writeFileSync(
      join(fontDirectory, "InterVariable.woff2"),
      Buffer.from([0, 1, 2, 3])
    )
    const css = '@font-face { src: url("InterVariable.woff2"); }'

    const result = await postcss([
      publishFontAssets({
        fontDirectory,
        outputDirectory,
        sourceStylesheet: join(fontDirectory, "style.css"),
      }),
    ]).process(css, { from: join(fontDirectory, "foreign.css") })

    expect(result.css).toBe(css)
  })
})
