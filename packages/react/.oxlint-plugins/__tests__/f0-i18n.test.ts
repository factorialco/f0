import { execFileSync } from "node:child_process"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

// Same approach as the other plugin tests: run the real oxlint binary, because
// oxlint's JS-plugin AST is what the rule actually sees.
const PLUGIN_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PKG_DIR = resolve(PLUGIN_DIR, "..")
const OXLINT = resolve(PKG_DIR, "node_modules/.bin/oxlint")

let workspace: string
let configPath: string

beforeAll(() => {
  workspace = mkdtempSync(join(tmpdir(), "f0-i18n-"))
  configPath = join(workspace, ".oxlintrc.json")
  writeFileSync(
    configPath,
    JSON.stringify({
      jsPlugins: [join(PLUGIN_DIR, "f0-i18n", "index.js")],
      rules: { "f0-i18n/no-untranslated-copy": "error" },
    })
  )
})

afterAll(() => rmSync(workspace, { recursive: true, force: true }))

/** Lint a snippet and return the rule's messages. */
const lint = (source: string): string[] => {
  const file = join(workspace, "probe.tsx")
  writeFileSync(file, source)
  let output = ""
  try {
    output = execFileSync(
      OXLINT,
      ["--config", configPath, "--format", "default", file],
      { cwd: PKG_DIR, encoding: "utf-8", stdio: ["ignore", "pipe", "pipe"] }
    )
  } catch (error) {
    output = (error as { stdout?: string }).stdout ?? ""
  }
  return [...output.matchAll(/f0-i18n\(no-untranslated-copy\): ([^\n]+)/g)].map(
    (match) => match[1]
  )
}

describe("no-untranslated-copy — what it flags", () => {
  it("flags JSX text", () => {
    expect(lint(`export const A = () => <p>Hello there</p>`)).toHaveLength(1)
  })

  it("flags a literal on a text-bearing attribute", () => {
    const found = lint(
      `export const A = () => <X label="Close" aria-label="Close it" />`
    )
    expect(found).toHaveLength(2)
    expect(found[0]).toContain("`label`")
  })

  it("flags a default parameter, which is where the debt hides", () => {
    expect(
      lint(`export const A = ({ label = "Actions" }) => <p>{label}</p>`)
    ).toHaveLength(1)
  })

  it("flags prose under a name that says nothing about it", () => {
    // The case a name-only rule misses entirely.
    const found = lint(
      `export const A = ({ hola = "hey hey" }) => <p>{hola}</p>`
    )
    expect(found).toHaveLength(1)
    expect(found[0]).toContain("hola")
  })

  it("flags copy nested in objects inside arrays", () => {
    expect(
      lint(
        `export const P = [{ id: "a", label: "Today", meta: { title: "Deep" } }]`
      )
    ).toHaveLength(2)
  })
})

describe("no-untranslated-copy — what it leaves alone", () => {
  it("ignores a value that already comes from the i18n layer", () => {
    expect(
      lint(`export const A = ({ i18n }) => <X label={i18n.actions.save} />`)
    ).toEqual([])
  })

  it("ignores an interpolated template, which cannot be a raw literal", () => {
    expect(
      lint("export const A = ({ n }) => <X label={`Page ${n}`} />")
    ).toEqual([])
  })

  it.each([
    `export const S = { label: "w-6", text: "font-medium" }`,
    `export const A = () => <div style={{ transformOrigin: "top left" }} />`,
    `export const A = () => <a rel="noopener noreferrer" target="_blank" />`,
  ])("ignores styling and HTML plumbing: %s", (source) => {
    expect(lint(source)).toEqual([])
  })

  it("ignores a key cap, but not the sentence around it", () => {
    // `<kbd>` reads what is printed on the key; the sentence is translated.
    const found = lint(
      `export const A = () => <p><kbd>Enter</kbd> to select</p>`
    )
    expect(found).toHaveLength(1)
    expect(found[0]).toContain("to select")
  })

  it("respects an oxlint-disable comment, so an exception lands in the diff", () => {
    expect(
      lint(
        `export const A = () => (
  <X
    // oxlint-disable-next-line f0-i18n/no-untranslated-copy -- brand name
    label="Factorial One"
  />
)`
      )
    ).toEqual([])
  })
})
