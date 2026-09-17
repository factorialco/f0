import { readdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

/**
 * The row is form chrome only by where it is filed. It must stay liftable out
 * of `patterns/F0Form` in one move, so nothing it imports may come from the
 * form layer and nothing it says may be the name of a field type. Both are
 * checked against the source rather than trusted to review.
 */
const MODULE_DIR = join(dirname(fileURLToPath(import.meta.url)), "..")

/**
 * The folder holds the field layer too, and that one is allowed to know what a
 * field is. Only the row's own modules are checked; `index.ts` is the folder's
 * barrel and re-exports both layers, so it is not one of them.
 */
const ROW_FILES = new Set(["InlineFieldRow.tsx", "types.ts"])

const SOURCES = readdirSync(MODULE_DIR)
  .filter((file) => ROW_FILES.has(file))
  .map((file) => ({ file, text: readFileSync(join(MODULE_DIR, file), "utf8") }))

/** `from "…"` and `import("…")`, which is every specifier a module can have. */
const specifiersOf = (text: string): string[] =>
  Array.from(text.matchAll(/(?:from|import)\s*\(?\s*["']([^"']+)["']/g)).map(
    (match) => match[1]
  )

/**
 * The discriminants of `F0Field`. Quoted and whole, so a Tailwind class such as
 * `text-f1-foreground` or `cursor-text` is not mistaken for the word `text`.
 */
const FIELD_TYPE_LITERALS = [
  '"text"',
  '"number"',
  '"select"',
  '"date"',
  '"daterange"',
  '"switch"',
  '"checkbox"',
  '"money"',
  '"percentage"',
  '"file"',
  '"duration"',
]

const FORM_LAYER_IDENTIFIERS = ["F0Field", "f0FormField", "FieldRenderer"]

describe("InlineFieldRow module boundary", () => {
  it("has sources to check", () => {
    expect(SOURCES.map(({ file }) => file).sort()).toEqual([
      "InlineFieldRow.tsx",
      "types.ts",
    ])
  })

  it.each(SOURCES)("$file imports nothing from F0Form", ({ text }) => {
    const offenders = specifiersOf(text).filter(
      (specifier) =>
        specifier.includes("F0Form") ||
        // A relative hop out of this folder lands in the form layer.
        specifier.startsWith("../")
    )

    expect(offenders).toEqual([])
  })

  it.each(SOURCES)("$file names no field type", ({ text }) => {
    const offenders = FIELD_TYPE_LITERALS.filter((literal) =>
      text.includes(literal)
    )

    expect(offenders).toEqual([])
  })

  it.each(SOURCES)("$file names no form-layer type", ({ text }) => {
    const offenders = FORM_LAYER_IDENTIFIERS.filter((identifier) =>
      new RegExp(`\\b${identifier}\\b`).test(text)
    )

    expect(offenders).toEqual([])
  })
})
