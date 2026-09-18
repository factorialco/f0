import { execFileSync } from "node:child_process"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

// Same approach as f0-security.test.ts and f0-react.test.ts: run the real
// oxlint binary, because oxlint's JS-plugin AST is what the rule actually sees.
const PLUGIN_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PKG_DIR = resolve(PLUGIN_DIR, "..")
const OXLINT = resolve(PKG_DIR, "node_modules/.bin/oxlint")

let workspace: string
let configPath: string

beforeAll(() => {
  workspace = mkdtempSync(join(tmpdir(), "f0-styles-"))
  configPath = join(workspace, ".oxlintrc.json")
  writeFileSync(
    configPath,
    JSON.stringify({
      jsPlugins: [join(PLUGIN_DIR, "f0-styles", "index.js")],
      rules: { "f0-styles/no-inline-styles": "error" },
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
    // oxlint exits non-zero when it reports something; diagnostics are still
    // on stdout.
    output = (error as { stdout?: string }).stdout ?? ""
  }
  return [...output.matchAll(/f0-styles\(no-inline-styles\): ([^\n]+)/g)].map(
    (match) => match[1]
  )
}

describe("no-inline-styles", () => {
  it("flags an inline style prop", () => {
    expect(
      lint(`export const A = () => <div style={{ top: 0 }} />`)
    ).toHaveLength(1)
  })

  it("leaves className alone", () => {
    expect(lint(`export const A = () => <div className="top-0" />`)).toEqual([])
  })

  it("leaves other object-valued props alone", () => {
    expect(
      lint(`export const A = () => <motion.div animate={{ opacity: 1 }} />`)
    ).toEqual([])
  })

  it("names the properties so the message says what to convert", () => {
    expect(
      lint(`export const A = () => <div style={{ top: 0, left: 2 }} />`)[0]
    ).toContain("top, left")
  })

  it("calls out an all-constant style as a mechanical conversion", () => {
    expect(
      lint(`export const A = () => <div style={{ zIndex: 9999 }} />`)[0]
    ).toContain("constant values")
  })

  it("treats a template literal with no interpolation as constant", () => {
    expect(
      lint("export const A = () => <div style={{ position: `absolute` }} />")[0]
    ).toContain("constant values")
  })

  it("asks a dynamic style to justify itself rather than convert", () => {
    const [message] = lint(
      "export const A = ({ pct }) => <div style={{ width: `${pct}%` }} />"
    )
    expect(message).not.toContain("constant values")
    expect(message).toContain("oxlint-disable")
  })

  it("flags a forwarded style, naming it as a spread", () => {
    expect(
      lint(`export const A = ({ style }) => <div style={style} />`)[0]
    ).toContain("spread")
  })

  // A custom property is the one thing a class cannot set per-instance, and is
  // how F0 threads a dynamic value INTO the token system rather than around it.
  it("allows a style that only sets CSS custom properties", () => {
    expect(
      lint(`export const A = ({ c }) => <div style={{ "--bar-color": c }} />`)
    ).toEqual([])
  })

  // React's CSSProperties has no index signature for `--*`, so the recommended
  // fix for a dynamic value needs `as CSSProperties`. The rule must see through it.
  it("sees through an `as CSSProperties` cast to the custom property", () => {
    expect(
      lint(
        'export const A = ({ pct }) => <div style={{ "--w": `${pct}%` } as CSSProperties} />'
      )
    ).toEqual([])
  })

  it("still flags a regular style behind a cast", () => {
    expect(
      lint(
        "export const A = ({ pct }) => <div style={{ width: `${pct}%` } as CSSProperties} />"
      )
    ).toHaveLength(1)
  })

  it("allows a custom property alongside a regular one", () => {
    expect(
      lint(
        `export const A = ({ c }) => <div style={{ "--bar-color": c, top: 0 }} />`
      )
    ).toEqual([])
  })

  it("honours an oxlint-disable comment as the escape hatch", () => {
    expect(
      lint(
        [
          "// oxlint-disable-next-line f0-styles/no-inline-styles -- measured offset",
          "export const A = ({ y }) => <div style={{ top: y }} />",
        ].join("\n")
      )
    ).toEqual([])
  })
})
