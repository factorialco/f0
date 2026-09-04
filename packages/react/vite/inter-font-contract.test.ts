import { existsSync, readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import postcss from "postcss"
import valueParser from "postcss-value-parser"
import { describe, expect, test } from "vitest"

const fontsDirectory = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../assets/fonts"
)

const expectedSubsets = [
  "cyrillic-ext",
  "cyrillic",
  "greek-ext",
  "greek",
  "symbols",
  "vietnamese",
  "latin-ext",
  "latin",
] as const

describe("Inter webfont contract", () => {
  test("provides every weight and style as range-subset variable WOFF2", () => {
    const css = readFileSync(resolve(fontsDirectory, "style.css"), "utf8")
    const allFontFaces: Record<string, string>[] = []

    postcss.parse(css).walkAtRules("font-face", (rule) => {
      const declarations: Record<string, string> = {}
      rule.walkDecls((declaration) => {
        declarations[declaration.prop] = declaration.value
      })
      allFontFaces.push(declarations)
    })

    const interFontFaces = allFontFaces.filter(
      (fontFace) => fontFace["font-family"] === '"Inter"'
    )
    expect(interFontFaces).toHaveLength(expectedSubsets.length * 2)

    for (const style of ["normal", "italic"]) {
      for (const subset of expectedSubsets) {
        const assetName = `InterVariable-${subset}-${style}.woff2`
        const fontFace = interFontFaces.find((candidate) => {
          const sourceFunctions = new Map<string, string>()
          valueParser(candidate.src).walk((node) => {
            if (node.type === "function") {
              sourceFunctions.set(node.value, valueParser.stringify(node.nodes))
            }
          })

          return (
            sourceFunctions.get("url") === `"${assetName}"` &&
            sourceFunctions.get("format") === '"woff2"' &&
            sourceFunctions.get("tech") === "variations"
          )
        })

        expect(fontFace).toMatchObject({
          "font-display": "swap",
          "font-style": style,
          "font-weight": "400 700",
        })
        expect(fontFace?.["unicode-range"]).toBeTruthy()
        expect(existsSync(resolve(fontsDirectory, assetName))).toBe(true)
      }
    }

    expect(css).not.toMatch(/\.woff["')]/)

    const fallbackFaces = allFontFaces.filter(
      (fontFace) => fontFace["font-family"] === '"Inter Fallback"'
    )

    expect(fallbackFaces).toEqual([
      expect.objectContaining({
        "ascent-override": "90.44%",
        "descent-override": "22.52%",
        "line-gap-override": "0%",
        "size-adjust": "107.12%",
        src: 'local("Arial")',
      }),
    ])
  })
})
