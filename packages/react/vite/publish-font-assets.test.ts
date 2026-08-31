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
      publishFontAssets({ fontDirectory, outputDirectory }),
    ]).process(
      '@font-face { src: url("InterVariable.woff2") format("woff2") tech(variations); }',
      {
        from: undefined,
      }
    )

    expect(result.css).toContain('url("fonts/InterVariable.woff2")')
    expect(
      readFileSync(join(outputDirectory, "fonts/InterVariable.woff2"))
    ).toEqual(Buffer.from([0, 1, 2, 3]))
  })

  test("leaves remote and non-font URLs unchanged", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    temporaryDirectories.push(fontDirectory)
    const css =
      '.example { background: url("https://example.com/image.png"); mask: url("icon.svg"); }'

    const result = await postcss([
      publishFontAssets({ fontDirectory }),
    ]).process(css, { from: undefined })

    expect(result.css).toBe(css)
  })

  test("leaves already-published font references unchanged", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    const outputDirectory = mkdtempSync(join(tmpdir(), "f0-dist-"))
    temporaryDirectories.push(fontDirectory)
    temporaryDirectories.push(outputDirectory)
    writeFileSync(
      join(fontDirectory, "Inter-Regular.woff"),
      Buffer.from([0, 1, 2, 3])
    )
    const source =
      '@font-face { src: url("Inter-Regular.woff") format("woff"); }'
    const firstPass = await postcss([
      publishFontAssets({ fontDirectory, outputDirectory }),
    ]).process(source, { from: undefined })

    const secondPass = await postcss([
      publishFontAssets({ fontDirectory, outputDirectory }),
    ]).process(firstPass.css, { from: undefined })

    expect(secondPass.css).toBe(firstPass.css)
  })
})
