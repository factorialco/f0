/**
 * Public API surface breaking-change detector.
 *
 * Snapshots the public TypeScript API of each shipped entry point
 * (`f0`, `experimental`, `ai`) from a set of rolled-up `.d.ts` files, then
 * compares two snapshots (a `--base` directory vs a `--head` directory) and
 * classifies every difference as either:
 *
 *   - BREAKING: an export present in base is gone in head (removed / renamed),
 *     or an export present in both has a different resolved type
 *     (changed signature, prop, or type).
 *   - ADDITIVE (safe): an export present in head but not in base.
 *
 * A rename surfaces, correctly, as a BREAKING removal of the old name plus a
 * safe addition of the new name.
 *
 * Both sides are analyzed by the *same* TypeScript in a single process, so the
 * comparison is deterministic and immune to compiler-version drift. The type
 * fingerprint is built by resolving structural types through the checker, which
 * normalizes away api-extractor's rollup noise (the `F0TextInputProps_2`
 * suffixes / dangling `./types` imports) instead of diffing raw `.d.ts` text.
 *
 * Usage:
 *   tsx .scripts/check-api-surface.ts --base <dir> --head <dir> [--json]
 *
 * `<dir>` is a directory containing the entry `.d.ts` files (f0.d.ts,
 * experimental.d.ts, ai.d.ts, plus global.d.ts so self-references resolve).
 *
 * The process always exits 0 (the check is non-blocking); whether breaking
 * changes were found is reported via the `hasBreaking` field of the `--json`
 * output and via the human-readable summary.
 */
import { existsSync } from "node:fs"
import path from "node:path"

import consola from "consola"
import ts from "typescript"

/** Public entry points shipped in `dist/`. */
const ENTRIES = ["f0", "experimental", "ai"] as const
type Entry = (typeof ENTRIES)[number]

/** How deep to expand F0-owned object/signature types before falling back to
 * a by-name reference. Keeps the fingerprint bounded while still catching
 * prop/signature changes one or two levels in. */
const MAX_DEPTH = 2

interface ApiSnapshot {
  /** export name -> normalized type fingerprint */
  items: Map<string, string>
}

interface EntryDiff {
  entry: Entry
  /** present in base but missing/changed in head */
  breaking: Array<{
    name: string
    kind: "removed" | "changed"
    before: string
    after?: string
  }>
  /** present in head but not in base */
  added: string[]
  /** true when the entry could not be analyzed on one side */
  skipped?: "no-base" | "no-head"
}

function parseArgs(): { base?: string; head?: string; json: boolean } {
  const args = process.argv.slice(2)
  const valueOf = (flag: string): string | undefined => {
    const i = args.indexOf(flag)
    return i !== -1 && args[i + 1] ? args[i + 1] : undefined
  }
  return {
    base: valueOf("--base"),
    head: valueOf("--head"),
    json: args.includes("--json"),
  }
}

/** Resolve `<dir>/<entry>.d.ts` if it exists. */
function entryDtsPath(dir: string, entry: Entry): string | undefined {
  const p = path.resolve(dir, `${entry}.d.ts`)
  return existsSync(p) ? p : undefined
}

/**
 * Build a snapshot of the public exports of a single rolled `.d.ts` file.
 *
 * Returns `undefined` when the file does not exist (e.g. the base build did not
 * produce it), which the caller treats as "no baseline".
 */
function snapshotEntry(dir: string, entry: Entry): ApiSnapshot | undefined {
  const dtsPath = entryDtsPath(dir, entry)
  if (!dtsPath) return undefined

  const dirAbsolute = path.resolve(dir)

  const program = ts.createProgram({
    rootNames: [dtsPath],
    options: {
      noEmit: true,
      skipLibCheck: true,
      skipDefaultLibCheck: true,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      jsx: ts.JsxEmit.Preserve,
      allowJs: false,
      strict: false,
    },
  })

  const checker = program.getTypeChecker()
  const sourceFile = program.getSourceFile(dtsPath)
  if (!sourceFile) return { items: new Map() }

  const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
  if (!moduleSymbol) return { items: new Map() }

  const items = new Map<string, string>()
  for (const exp of checker.getExportsOfModule(moduleSymbol)) {
    const name = exp.getName()
    if (name === "default") continue
    items.set(name, fingerprintSymbol(exp, checker, sourceFile, dirAbsolute))
  }
  return { items }
}

/** Whether a type is declared inside the analyzed dist directory (an F0-owned
 * type, worth expanding) versus an external type (React/DOM/lib, referenced by
 * name to keep the fingerprint stable and bounded). */
function isOwned(sym: ts.Symbol | undefined, dirAbsolute: string): boolean {
  const decls = sym?.getDeclarations()
  if (!decls || decls.length === 0) return false
  return decls.some((d) =>
    d.getSourceFile().fileName.startsWith(dirAbsolute + path.sep)
  )
}

function fingerprintSymbol(
  symbol: ts.Symbol,
  checker: ts.TypeChecker,
  location: ts.Node,
  dirAbsolute: string
): string {
  // Follow re-export aliases to the real declaration.
  let sym = symbol
  if (sym.flags & ts.SymbolFlags.Alias) {
    try {
      sym = checker.getAliasedSymbol(sym)
    } catch {
      // keep original on failure
    }
  }

  const kind = symbolKind(sym)
  const typeParams = typeParameterText(sym)

  // Type-only symbols use the declared type; value symbols use the type of the
  // value at the export location.
  const isTypeOnly =
    !!(sym.flags & ts.SymbolFlags.Type) && !(sym.flags & ts.SymbolFlags.Value)

  let body: string
  try {
    const type = isTypeOnly
      ? checker.getDeclaredTypeOfSymbol(sym)
      : checker.getTypeOfSymbolAtLocation(sym, location)
    body = serializeType(type, checker, dirAbsolute, MAX_DEPTH, new Set())
  } catch (err) {
    body = `<unresolved: ${(err as Error).message}>`
  }

  return normalizeFingerprint(`${kind} ${typeParams}${body}`)
}

function symbolKind(sym: ts.Symbol): string {
  const f = sym.flags
  if (f & ts.SymbolFlags.Class) return "class"
  if (f & ts.SymbolFlags.Interface) return "interface"
  if (f & ts.SymbolFlags.TypeAlias) return "type"
  if (f & ts.SymbolFlags.Enum) return "enum"
  if (f & ts.SymbolFlags.Function) return "function"
  if (f & ts.SymbolFlags.Variable) return "const"
  if (f & ts.SymbolFlags.Module) return "namespace"
  return "value"
}

/** `<T extends string, U>` from the symbol's declaration, when present. */
function typeParameterText(sym: ts.Symbol): string {
  const decl = sym.getDeclarations()?.[0]
  if (!decl) return ""
  let tps: readonly ts.TypeParameterDeclaration[] = []
  try {
    tps = ts.getEffectiveTypeParameterDeclarations(
      decl as ts.DeclarationWithTypeParameters
    )
  } catch {
    return ""
  }
  if (tps.length === 0) return ""
  return `<${tps.map((t) => t.getText()).join(", ")}> `
}

const TYPE_TO_STRING_FLAGS =
  ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.WriteArrayAsGenericType

/**
 * Make a fingerprint comparable across the two analyzed directories:
 *  - strip `import("<abs path>").` qualifiers — the path is base-dir vs
 *    head-dir specific and would make every cross-referenced type look changed;
 *  - strip per-program unique-id suffixes on computed/internal names
 *    (e.g. `__@iterator@968`), which differ run-to-run.
 */
function normalizeFingerprint(s: string): string {
  return s.replace(/import\("[^"]*"\)\./g, "").replace(/@\d+/g, "")
}

/**
 * Produce a normalized structural string for a type. F0-owned object/union and
 * signature types are expanded up to `depth` levels so prop/signature changes
 * are visible; external and too-deep types fall back to `typeToString` (a
 * by-name reference), which is stable.
 */
function serializeType(
  type: ts.Type,
  checker: ts.TypeChecker,
  dirAbsolute: string,
  depth: number,
  visited: Set<ts.Type>
): string {
  const plain = () =>
    checker.typeToString(type, undefined, TYPE_TO_STRING_FLAGS)

  if (depth <= 0 || visited.has(type)) return plain()

  // Unions / intersections: serialize each constituent (sorted for stability).
  if (type.isUnion() || type.isIntersection()) {
    const sep = type.isUnion() ? " | " : " & "
    const parts = (type as ts.UnionOrIntersectionType).types
      .map((t) => serializeType(t, checker, dirAbsolute, depth, visited))
      .sort()
    return parts.join(sep)
  }

  const callSigs = type.getCallSignatures()
  const ctorSigs = type.getConstructSignatures()
  if (callSigs.length > 0 || ctorSigs.length > 0) {
    const next = new Set(visited).add(type)
    const sigStr = (s: ts.Signature, isCtor: boolean) =>
      (isCtor ? "new " : "") +
      `(${s
        .getParameters()
        .map((p) => {
          const optional = !!(p.flags & ts.SymbolFlags.Optional)
          const pt = checker.getTypeOfSymbolAtLocation(
            p,
            p.valueDeclaration ?? p.declarations![0]
          )
          return `${p.getName()}${optional ? "?" : ""}: ${serializeType(pt, checker, dirAbsolute, depth - 1, next)}`
        })
        .join(
          ", "
        )}) => ${serializeType(s.getReturnType(), checker, dirAbsolute, depth - 1, next)}`
    return [
      ...callSigs.map((s) => sigStr(s, false)),
      ...ctorSigs.map((s) => sigStr(s, true)),
    ].join(" & ")
  }

  // Only expand object types we own; external types (React/DOM) stay by-name.
  const symbol = type.aliasSymbol ?? type.getSymbol()
  const props = type.getProperties()
  const isExpandableObject =
    props.length > 0 || checker.getIndexInfosOfType(type).length > 0
  if (isExpandableObject && isOwned(symbol, dirAbsolute)) {
    const next = new Set(visited).add(type)
    const members = props
      .map((p) => {
        const optional = !!(p.flags & ts.SymbolFlags.Optional)
        const readonly = isReadonlySymbol(p)
        const decl = p.valueDeclaration ?? p.declarations?.[0]
        const pt = decl
          ? checker.getTypeOfSymbolAtLocation(p, decl)
          : checker.getDeclaredTypeOfSymbol(p)
        return `${readonly ? "readonly " : ""}${p.getName()}${optional ? "?" : ""}: ${serializeType(pt, checker, dirAbsolute, depth - 1, next)}`
      })
      .sort()
    const indexInfos = checker
      .getIndexInfosOfType(type)
      .map(
        (info) =>
          `[index: ${checker.typeToString(info.keyType)}]: ${serializeType(info.type, checker, dirAbsolute, depth - 1, next)}`
      )
    return `{ ${[...members, ...indexInfos].join("; ")} }`
  }

  return plain()
}

function isReadonlySymbol(sym: ts.Symbol): boolean {
  return !!sym
    .getDeclarations()
    ?.some(
      (d) =>
        (ts.isPropertySignature(d) || ts.isPropertyDeclaration(d)) &&
        !!d.modifiers?.some((m) => m.kind === ts.SyntaxKind.ReadonlyKeyword)
    )
}

/** Diff two snapshots for a single entry. */
function diffEntry(
  entry: Entry,
  base: ApiSnapshot | undefined,
  head: ApiSnapshot | undefined
): EntryDiff {
  const diff: EntryDiff = { entry, breaking: [], added: [] }
  if (!base) {
    diff.skipped = "no-base"
    return diff
  }
  if (!head) {
    diff.skipped = "no-head"
    return diff
  }

  for (const [name, beforeFp] of base.items) {
    if (!head.items.has(name)) {
      diff.breaking.push({ name, kind: "removed", before: beforeFp })
    } else {
      const afterFp = head.items.get(name)!
      if (afterFp !== beforeFp) {
        diff.breaking.push({
          name,
          kind: "changed",
          before: beforeFp,
          after: afterFp,
        })
      }
    }
  }
  for (const name of head.items.keys()) {
    if (!base.items.has(name)) diff.added.push(name)
  }
  diff.breaking.sort((a, b) => a.name.localeCompare(b.name))
  diff.added.sort()
  return diff
}

/** Truncate a long type fingerprint for display inside the PR comment. */
function clip(s: string, max = 600): string {
  return s.length > max ? `${s.slice(0, max)} …` : s
}

/**
 * Render the PR comment body. Posted whether or not breaking changes exist, so
 * a prior "⚠️ breaking" comment is cleared to "✅" once resolved.
 */
function buildCommentMarkdown(diffs: EntryDiff[]): string {
  const breakingTotal = diffs.reduce((n, d) => n + d.breaking.length, 0)
  const addedTotal = diffs.reduce((n, d) => n + d.added.length, 0)
  const lines: string[] = []

  if (breakingTotal > 0) {
    lines.push(`## ⚠️ Breaking public API changes (${breakingTotal})`)
    lines.push("")
    lines.push(
      "These public exports were **renamed/removed or had their type changed** compared to `main`. " +
        "Renaming components or changing existing props/types breaks consumers. " +
        "If this is intentional, call it out in the PR description (and use a `feat!:`/`BREAKING CHANGE` commit so the release is a major bump)."
    )
  } else {
    lines.push("## ✅ No breaking public API changes")
    lines.push("")
    lines.push(
      "No public exports were renamed, removed, or retyped compared to `main`."
    )
  }
  lines.push("")
  lines.push(
    "_Comparing `f0`, `experimental` and `ai` against `main`. Adding new components/types is always safe. This check is non-blocking._"
  )

  for (const d of diffs) {
    if (d.skipped || d.breaking.length === 0) continue
    lines.push("")
    lines.push(`### \`${d.entry}\``)
    for (const b of d.breaking) {
      if (b.kind === "removed") {
        lines.push(`- ❌ \`${b.name}\` — **removed** (renamed or deleted)`)
      } else {
        lines.push(`- ✏️ \`${b.name}\` — **type changed**`)
        lines.push("")
        lines.push("  <details><summary>before → after</summary>")
        lines.push("")
        lines.push("  ```ts")
        lines.push(`  // before`)
        lines.push(`  ${clip(b.before)}`)
        lines.push(`  // after`)
        lines.push(`  ${clip(b.after ?? "")}`)
        lines.push("  ```")
        lines.push("  </details>")
      }
    }
  }

  if (addedTotal > 0) {
    lines.push("")
    lines.push(
      `<details><summary>➕ Additive changes (safe) — ${addedTotal}</summary>`
    )
    lines.push("")
    for (const d of diffs) {
      if (d.added.length > 0) {
        lines.push(
          `- \`${d.entry}\`: ${d.added.map((n) => `\`${n}\``).join(", ")}`
        )
      }
    }
    lines.push("</details>")
  }

  const skipped = diffs.filter((d) => d.skipped)
  if (skipped.length > 0) {
    lines.push("")
    lines.push(
      `> ⚠️ Could not analyze ${skipped.map((d) => `\`${d.entry}\` (${d.skipped})`).join(", ")} — a build may have failed; results may be incomplete.`
    )
  }

  return lines.join("\n")
}

function main(): void {
  const { base, head, json } = parseArgs()
  if (!base || !head) {
    consola.error(
      "Usage: tsx .scripts/check-api-surface.ts --base <dir> --head <dir> [--json]"
    )
    process.exit(2)
  }

  const diffs = ENTRIES.map((entry) =>
    diffEntry(entry, snapshotEntry(base, entry), snapshotEntry(head, entry))
  )

  const breakingTotal = diffs.reduce((n, d) => n + d.breaking.length, 0)
  const addedTotal = diffs.reduce((n, d) => n + d.added.length, 0)
  const hasBreaking = breakingTotal > 0

  if (json) {
    // Machine-readable output must go to stdout (the CI workflow reads it);
    // use process.stdout.write rather than console.log to satisfy oxlint.
    process.stdout.write(
      JSON.stringify(
        {
          hasBreaking,
          breakingTotal,
          addedTotal,
          entries: diffs,
          commentMarkdown: buildCommentMarkdown(diffs),
        },
        null,
        2
      ) + "\n"
    )
    process.exit(0)
  }

  for (const d of diffs) {
    if (d.skipped) {
      consola.warn(`[${d.entry}] skipped (${d.skipped})`)
      continue
    }
    if (d.breaking.length === 0) {
      consola.success(
        `[${d.entry}] no breaking changes (${d.added.length} additive)`
      )
      continue
    }
    consola.error(`[${d.entry}] ${d.breaking.length} breaking change(s):`)
    for (const b of d.breaking) {
      if (b.kind === "removed") {
        consola.log(`  - removed: ${b.name}`)
      } else {
        consola.log(`  - changed: ${b.name}`)
        consola.log(`      before: ${b.before}`)
        consola.log(`      after:  ${b.after}`)
      }
    }
  }
  consola.log("")
  if (hasBreaking) {
    consola.error(
      `${breakingTotal} breaking public API change(s) across ${ENTRIES.length} entries (${addedTotal} additive).`
    )
  } else {
    consola.success(
      `No breaking public API changes (${addedTotal} additive change(s)).`
    )
  }
  // Non-blocking: always exit 0.
  process.exit(0)
}

main()
