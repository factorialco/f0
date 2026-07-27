import { existsSync, readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

/**
 * Storybook Docs (MDX) blocks such as `<Meta of={...} />`, `<Canvas of={...} />`
 * and `<Controls of={...} />` resolve `of` to a CSF export at render time. When
 * the referenced export doesn't exist, `of` becomes `undefined` and Storybook
 * throws:
 *
 *   "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
 *
 * which crashes the entire docs page. That failure only surfaces when the page
 * is actually opened in the browser, so a typo (or a story that was renamed /
 * never created) sails through typecheck, lint and `storybook build`.
 *
 * This test statically walks every MDX file and asserts that each `of={X}` /
 * `of={NS.X}` reference resolves to a real export of the imported module.
 */

const SRC_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const PKG_DIR = path.resolve(SRC_DIR, "..")

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith(".mdx")) acc.push(full)
  }
  return acc
}

// Resolve an alias / relative module specifier to a concrete file on disk.
function resolveModule(spec: string, fromDir: string): string | null {
  let base: string
  if (spec.startsWith("@/")) base = path.join(SRC_DIR, spec.slice(2))
  else if (spec.startsWith("~/")) base = path.join(PKG_DIR, spec.slice(2))
  else if (spec.startsWith(".")) base = path.join(fromDir, spec)
  else return null // bare package import (e.g. @storybook/...)

  const candidates = [
    base,
    `${base}.stories.tsx`,
    `${base}.stories.ts`,
    `${base}.tsx`,
    `${base}.ts`,
    `${base}.jsx`,
    `${base}.js`,
    path.join(base, "index.stories.tsx"),
    path.join(base, "index.tsx"),
    path.join(base, "index.ts"),
  ]
  return candidates.find((c) => existsSync(c)) ?? null
}

// Shallow, regex-based collection of a module's exported names.
function getExports(file: string, seen = new Set<string>()): Set<string> {
  if (seen.has(file)) return new Set()
  seen.add(file)
  const src = readFileSync(file, "utf-8")
  const names = new Set<string>()

  for (const m of src.matchAll(
    /export\s+(?:const|let|var|function|class)\s+([A-Za-z0-9_$]+)/g
  ))
    names.add(m[1])

  if (/export\s+default\b/.test(src)) names.add("default")

  for (const m of src.matchAll(/export\s*\{([^}]*)\}(?!\s*from)/g))
    for (const part of m[1].split(",")) {
      const as = part.split(/\sas\s/)
      const name = (as[1] ?? as[0]).trim()
      if (name) names.add(name)
    }

  for (const m of src.matchAll(
    /export\s*(\*|\{([^}]*)\})\s*from\s*["']([^"']+)["']/g
  )) {
    const target = resolveModule(m[3], path.dirname(file))
    if (m[1] === "*") {
      if (target) for (const n of getExports(target, seen)) names.add(n)
    } else {
      for (const part of m[2].split(",")) {
        const as = part.split(/\sas\s/)
        const name = (as[1] ?? as[0]).trim()
        if (name) names.add(name)
      }
    }
  }
  return names
}

type Symbol =
  | { kind: "namespace"; module: string }
  | { kind: "default"; module: string }
  | { kind: "named"; module: string; orig: string }

function buildSymbolTable(src: string): Map<string, Symbol> {
  const symbols = new Map<string, Symbol>()

  for (const m of src.matchAll(
    /import\s+\*\s+as\s+([A-Za-z0-9_$]+)\s+from\s*["']([^"']+)["']/g
  ))
    symbols.set(m[1], { kind: "namespace", module: m[2] })

  for (const m of src.matchAll(
    /import\s+(?:([A-Za-z0-9_$]+)\s*,?\s*)?(?:\{([^}]*)\})?\s*from\s*["']([^"']+)["']/g
  )) {
    const [, def, named, mod] = m
    if (def) symbols.set(def, { kind: "default", module: mod })
    if (named)
      for (const part of named.split(",")) {
        const as = part.split(/\sas\s/)
        const local = (as[1] ?? as[0]).trim()
        const orig = as[0].trim()
        if (local) symbols.set(local, { kind: "named", module: mod, orig })
      }
  }
  return symbols
}

function findDanglingReferences(mdxFile: string): string[] {
  const src = readFileSync(mdxFile, "utf-8")
  const dir = path.dirname(mdxFile)
  const symbols = buildSymbolTable(src)
  const problems: string[] = []

  for (const m of src.matchAll(/of=\{\s*([A-Za-z0-9_$.]+)\s*\}/g)) {
    const expr = m[1]
    const [head, member] = expr.split(".")
    const sym = symbols.get(head)

    if (!sym) {
      problems.push(`of={${expr}} — '${head}' is not imported`)
      continue
    }
    const target = resolveModule(sym.module, dir)
    if (!target) {
      problems.push(`of={${expr}} — cannot resolve module '${sym.module}'`)
      continue
    }
    const exports = getExports(target)
    const rel = path.relative(PKG_DIR, target)

    if (sym.kind === "namespace") {
      // `of={NS}` (no member) references the whole CSF file — always valid.
      if (member && !exports.has(member))
        problems.push(`of={${expr}} — '${member}' is not exported by ${rel}`)
    } else if (sym.kind === "named") {
      if (!exports.has(sym.orig))
        problems.push(`of={${expr}} — '${sym.orig}' is not exported by ${rel}`)
    } else if (!exports.has("default")) {
      problems.push(`of={${expr}} — no default export in ${rel}`)
    }
  }
  return problems
}

describe("MDX docs story references", () => {
  const mdxFiles = walk(SRC_DIR)

  it("finds MDX files to check", () => {
    expect(mdxFiles.length).toBeGreaterThan(0)
  })

  it.each(mdxFiles.map((f) => [path.relative(PKG_DIR, f), f]))(
    "%s references only exported stories",
    (_rel, file) => {
      expect(findDanglingReferences(file)).toEqual([])
    }
  )
})
