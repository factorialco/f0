import { execFileSync } from "node:child_process"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { afterAll, beforeAll, describe, expect, it } from "vitest"

/**
 * These run the real oxlint binary against the real plugin, rather than
 * re-implementing the rules against a stand-in AST. The rules only matter
 * insofar as `pnpm lint` enforces them, and oxlint's JS-plugin AST is the thing
 * they actually see — a parallel ESLint RuleTester would prove something else.
 */
const PLUGIN_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const PKG_DIR = resolve(PLUGIN_DIR, "..")
// Resolved explicitly rather than trusting PATH: this has to work the same
// under `pnpm test`, a bare vitest run and CI.
const OXLINT = resolve(PKG_DIR, "node_modules/.bin/oxlint")

let workspace: string
let configPath: string

beforeAll(() => {
  workspace = mkdtempSync(join(tmpdir(), "f0-security-"))
  configPath = join(workspace, ".oxlintrc.json")
  writeFileSync(
    configPath,
    JSON.stringify({
      jsPlugins: [join(PLUGIN_DIR, "f0-security", "index.js")],
      rules: {
        "f0-security/no-spread-after-inner-html": "error",
        "f0-security/require-sanitized-inner-html": "error",
        "f0-security/require-style-nonce": [
          "error",
          { allow: ["allowed.tsx"] },
        ],
      },
    })
  )
})

afterAll(() => rmSync(workspace, { recursive: true, force: true }))

/** Lint one snippet and return the f0-security rule names it triggered. */
const lint = (source: string, filename = "probe.tsx"): string[] => {
  const file = join(workspace, filename)
  writeFileSync(file, source)
  let output = ""
  try {
    output = execFileSync(
      OXLINT,
      ["--config", configPath, "--format", "default", file],
      { cwd: PKG_DIR, encoding: "utf-8", stdio: ["ignore", "pipe", "pipe"] }
    )
  } catch (error) {
    // oxlint exits non-zero when it reports something; the diagnostics are still
    // on stdout.
    output = (error as { stdout?: string }).stdout ?? ""
  }
  return [...output.matchAll(/f0-security\(([a-z-]+)\)/g)].map((m) => m[1])
}

describe("no-spread-after-inner-html", () => {
  it("flags a spread that lands after dangerouslySetInnerHTML", () => {
    expect(
      lint(
        `export const A = (props) => <div dangerouslySetInnerHTML={{ __html: "x" }} {...props} />`
      )
    ).toContain("no-spread-after-inner-html")
  })

  it("accepts a spread that lands before it", () => {
    expect(
      lint(
        `export const A = (props) => <div {...props} dangerouslySetInnerHTML={{ __html: "x" }} />`
      )
    ).not.toContain("no-spread-after-inner-html")
  })

  it("flags the same mistake in a createElement props object", () => {
    expect(
      lint(
        `export const A = (props) => createElement("div", { dangerouslySetInnerHTML: { __html: "x" }, ...props })`
      )
    ).toContain("no-spread-after-inner-html")
  })

  it("accepts the props object when the spread comes first", () => {
    expect(
      lint(
        `export const A = (props) => createElement("div", { ...props, dangerouslySetInnerHTML: { __html: "x" } })`
      )
    ).not.toContain("no-spread-after-inner-html")
  })

  it("says which spread is at fault", () => {
    const file = join(workspace, "named.tsx")
    writeFileSync(
      file,
      `export const A = (rest) => <div dangerouslySetInnerHTML={{ __html: "x" }} {...rest} />`
    )
    let output = ""
    try {
      output = execFileSync(OXLINT, ["--config", configPath, file], {
        cwd: PKG_DIR,
        encoding: "utf-8",
        stdio: ["ignore", "pipe", "pipe"],
      })
    } catch (error) {
      output = (error as { stdout?: string }).stdout ?? ""
    }
    expect(output).toContain("`...rest`")
  })
})

describe("require-sanitized-inner-html", () => {
  const RULE = "require-sanitized-inner-html"

  it("flags a raw value", () => {
    expect(
      lint(
        `export const A = ({ h }) => <div dangerouslySetInnerHTML={{ __html: h }} />`
      )
    ).toContain(RULE)
  })

  it("accepts a direct sanitizer call", () => {
    expect(
      lint(
        `export const A = ({ h }) => <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(h) }} />`
      )
    ).not.toContain(RULE)
  })

  it("accepts a local const bound to a sanitizer", () => {
    expect(
      lint(
        `export const A = ({ h }) => { const html = parseMarkdown(h); return <div dangerouslySetInnerHTML={{ __html: html }} /> }`
      )
    ).not.toContain(RULE)
  })

  it("accepts a sanitizer memoized with useMemo", () => {
    expect(
      lint(
        `export const A = ({ h }) => { const html = useMemo(() => DOMPurify.sanitize(h), [h]); return <div dangerouslySetInnerHTML={{ __html: html }} /> }`
      )
    ).not.toContain(RULE)
  })

  it("accepts a ternary whose arms are all safe", () => {
    expect(
      lint(
        `export const A = ({ h, md }) => { const html = md ? parseMarkdown(h) : undefined; return <div dangerouslySetInnerHTML={{ __html: html }} /> }`
      )
    ).not.toContain(RULE)
  })

  it("flags a ternary with one unsafe arm", () => {
    expect(
      lint(
        `export const A = ({ h, md }) => { const html = md ? parseMarkdown(h) : h; return <div dangerouslySetInnerHTML={{ __html: html }} /> }`
      )
    ).toContain(RULE)
  })

  it("accepts a static template literal", () => {
    expect(
      lint(
        "export const A = () => <div dangerouslySetInnerHTML={{ __html: `.a{color:red}` }} />"
      )
    ).not.toContain(RULE)
  })

  // The bug this rule was written against: a `let` that looks safe from its
  // initializer and is reassigned to something unsanitized further down.
  it("flags a let whose later assignment is unsanitized", () => {
    expect(
      lint(
        `export const A = ({ el }) => { let html = ""; if (el) html = clone(el); return <div dangerouslySetInnerHTML={{ __html: html }} /> }`
      )
    ).toContain(RULE)
  })

  it("accepts a let whose later assignment is sanitized", () => {
    expect(
      lint(
        `export const A = ({ el }) => { let html = ""; if (el) html = DOMPurify.sanitize(clone(el)); return <div dangerouslySetInnerHTML={{ __html: html }} /> }`
      )
    ).not.toContain(RULE)
  })
})

describe("require-style-nonce", () => {
  const RULE = "require-style-nonce"

  it("flags an inline style element with no nonce", () => {
    expect(
      lint(
        "export const A = () => <style dangerouslySetInnerHTML={{ __html: `.a{color:red}` }} />"
      )
    ).toContain(RULE)
  })

  it("accepts one that carries a nonce", () => {
    expect(
      lint(
        "export const A = ({ nonce }) => <style nonce={nonce} dangerouslySetInnerHTML={{ __html: `.a{color:red}` }} />"
      )
    ).not.toContain(RULE)
  })

  it("does not guess against a spread that might carry the nonce", () => {
    expect(
      lint(
        "export const A = (props) => <style {...props} dangerouslySetInnerHTML={{ __html: `.a{color:red}` }} />"
      )
    ).not.toContain(RULE)
  })

  it("leaves a file on the allow list alone", () => {
    expect(
      lint(
        "export const A = () => <style dangerouslySetInnerHTML={{ __html: `.a{color:red}` }} />",
        "allowed.tsx"
      )
    ).not.toContain(RULE)
  })

  it("leaves non-style elements alone", () => {
    expect(lint(`export const A = () => <div className="x" />`)).not.toContain(
      RULE
    )
  })
})
