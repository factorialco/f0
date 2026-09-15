import { execFileSync } from "node:child_process"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

// Same approach as f0-security.test.ts: run the real oxlint binary, because
// oxlint's JS-plugin AST is what the wrapped rule actually sees.
const PLUGIN_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PKG_DIR = resolve(PLUGIN_DIR, "..")
const OXLINT = resolve(PKG_DIR, "node_modules/.bin/oxlint")

let workspace: string
let configPath: string

beforeAll(() => {
  workspace = mkdtempSync(join(tmpdir(), "f0-react-"))
  configPath = join(workspace, ".oxlintrc.json")
  writeFileSync(
    configPath,
    JSON.stringify({
      jsPlugins: [join(PLUGIN_DIR, "f0-react", "index.js")],
      rules: {
        "f0-react/jsx-no-leaked-render": [
          "error",
          { validStrategies: ["ternary"] },
        ],
      },
    })
  )
})

afterAll(() => rmSync(workspace, { recursive: true, force: true }))

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
  return [...output.matchAll(/f0-react\(([a-z-]+)\)/g)].map((m) => m[1])
}

describe("jsx-no-leaked-render", () => {
  it("flags && in element children", () => {
    expect(
      lint(`export const A = ({ n }) => <div>{n && <span>{n}</span>}</div>`)
    ).toContain("jsx-no-leaked-render")
  })

  it("flags && in fragment children", () => {
    expect(
      lint(`export const A = ({ n }) => <>{n && <span>{n}</span>}</>`)
    ).toContain("jsx-no-leaked-render")
  })

  it("flags a boolean-looking left side too, since it has no types", () => {
    expect(
      lint(`export const A = ({ open }) => <div>{open && <span>x</span>}</div>`)
    ).toContain("jsx-no-leaked-render")
  })

  it("accepts a ternary with a null alternate", () => {
    expect(
      lint(
        `export const A = ({ n }) => <div>{n ? <span>{n}</span> : null}</div>`
      )
    ).not.toContain("jsx-no-leaked-render")
  })

  it("leaves && in attribute values alone", () => {
    expect(
      lint(
        `export const A = ({ open, disabled }) => <dialog open={open && !disabled} />`
      )
    ).not.toContain("jsx-no-leaked-render")
  })
})
