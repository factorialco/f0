import { readdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

/** Keep row modules independent of form types and imports. */
const MODULE_DIR = join(dirname(fileURLToPath(import.meta.url)), "..")

const SOURCES = readdirSync(MODULE_DIR)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .map((file) => ({ file, text: readFileSync(join(MODULE_DIR, file), "utf8") }))

const specifiersOf = (text: string): string[] =>
  Array.from(text.matchAll(/(?:from|import)\s*\(?\s*["']([^"']+)["']/g)).map(
    (match) => match[1]
  )

/** Match quoted discriminants, not substrings in Tailwind classes. */
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
      "index.ts",
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
