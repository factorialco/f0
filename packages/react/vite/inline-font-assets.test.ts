import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import postcss from "postcss"
import { afterEach, describe, expect, test } from "vitest"

import { inlineFontAssets } from "../inline-font-assets.mjs"

const temporaryDirectories: string[] = []

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true })
  }
})

describe("inlineFontAssets", () => {
  test("makes local WOFF references self-contained", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    temporaryDirectories.push(fontDirectory)
    writeFileSync(
      join(fontDirectory, "Inter-Regular.woff"),
      Buffer.from([0, 1, 2, 3])
    )

    const result = await postcss([inlineFontAssets({ fontDirectory })]).process(
      '@font-face { src: url("Inter-Regular.woff") format("woff"); }',
      { from: undefined }
    )

    expect(result.css).toContain('url("data:font/woff;base64,AAECAw==")')
  })

  test("leaves remote and non-font URLs unchanged", async () => {
    const fontDirectory = mkdtempSync(join(tmpdir(), "f0-fonts-"))
    temporaryDirectories.push(fontDirectory)
    const css =
      '.example { background: url("https://example.com/image.png"); mask: url("icon.svg"); }'

    const result = await postcss([inlineFontAssets({ fontDirectory })]).process(
      css,
      { from: undefined }
    )

    expect(result.css).toBe(css)
  })
})
