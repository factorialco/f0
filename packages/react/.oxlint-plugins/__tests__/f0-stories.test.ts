import { execFileSync } from "node:child_process"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
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
  workspace = mkdtempSync(join(tmpdir(), "f0-stories-"))
  configPath = join(workspace, ".oxlintrc.json")
  writeFileSync(
    configPath,
    JSON.stringify({
      jsPlugins: [join(PLUGIN_DIR, "f0-stories", "index.js")],
      rules: { "f0-stories/no-nondeterministic-story-names": "error" },
    })
  )
  mkdirSync(join(workspace, "__stories__"), { recursive: true })
})

afterAll(() => rmSync(workspace, { recursive: true, force: true }))

/**
 * Lint a snippet at `name` and return the rule's messages. The filename
 * matters: the rule scopes itself to story sources.
 */
const lintAs = (name: string, source: string): string[] => {
  const file = join(workspace, name)
  writeFileSync(file, source)
  let output = ""
  try {
    output = execFileSync(
      OXLINT,
      ["--config", configPath, "--format", "default", file],
      { cwd: PKG_DIR, encoding: "utf-8", stdio: ["ignore", "pipe", "pipe"] }
    )
  } catch (error) {
    // oxlint exits non-zero when it reports something; diagnostics are still
    // on stdout.
    output = (error as { stdout?: string }).stdout ?? ""
  }
  return [
    ...output.matchAll(
      /f0-stories\(no-nondeterministic-story-names\): ([^\n]+)/g
    ),
  ].map((match) => match[1])
}

const lint = (source: string) => lintAs("probe.stories.tsx", source)

describe("no-nondeterministic-story-names", () => {
  describe("reports a moving read that reaches a name", () => {
    it("a naming fixture key", () => {
      expect(
        lint("export const w = { title: `Title ${Math.random()}` }")
      ).toHaveLength(1)
    })

    it("a date key a component formats into a name", () => {
      expect(
        lint("export const v = { timestamp: new Date(Date.now() - 86400000) }")
      ).toHaveLength(1)
    })

    it("a bare new Date() in a date key", () => {
      expect(lint("export const v = { sentAt: new Date() }")).toHaveLength(1)
    })

    it("a naming JSX attribute", () => {
      expect(
        lint("export const A = () => <img alt={`Shot ${Math.random()}`} />")
      ).toHaveLength(1)
    })

    it("rendered JSX text", () => {
      expect(
        lint("export const A = () => <p>{pick(copy, Math.random())}</p>")
      ).toHaveLength(1)
    })
  })

  describe("stays quiet where the value never reaches a name", () => {
    it("a random id", () => {
      expect(
        lint("export const w = { id: `widget-${Math.random()}` }")
      ).toEqual([])
    })

    it("a random coordinate or size", () => {
      expect(
        lint("export const w = { x: Math.random(), w: Math.random() }")
      ).toEqual([])
    })

    it("a bare read in a play function", () => {
      expect(
        lint("export const play = async () => { const start = Date.now() }")
      ).toEqual([])
    })

    it("a non-naming JSX attribute", () => {
      expect(
        lint("export const A = () => <div data-seed={Math.random()} />")
      ).toEqual([])
    })

    it("a nested non-naming key inside a naming one", () => {
      expect(lint("export const w = { title: { id: Math.random() } }")).toEqual(
        []
      )
    })
  })

  describe("scope and shape", () => {
    it("leaves a fixed date alone", () => {
      expect(
        lint('export const v = { timestamp: new Date("2025-01-15T16:45:00") }')
      ).toEqual([])
    })

    it("leaves a seeded sequence alone", () => {
      expect(lint('export const w = { title: pickAt(["a", "b"], 0) }')).toEqual(
        []
      )
    })

    it("does not flag a same-named method on something else", () => {
      expect(
        lint("export const w = { title: clock.now() + rng.random() }")
      ).toEqual([])
    })

    it("covers fixtures a story imports, under __stories__/", () => {
      expect(
        lintAs(
          "__stories__/mockWidgets.tsx",
          "export const w = { title: `T ${Math.random()}` }"
        )
      ).toHaveLength(1)
    })

    it("leaves non-story sources alone", () => {
      expect(
        lintAs("probe.tsx", "export const w = { title: `T ${Math.random()}` }")
      ).toEqual([])
    })

    it("says where the value lands and what to do instead", () => {
      const [message] = lint("export const v = { timestamp: new Date() }")
      expect(message).toContain("`timestamp`")
      expect(message).toContain("oxlint-disable")
    })
  })
})
