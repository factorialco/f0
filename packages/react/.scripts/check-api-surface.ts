/**
 * Public API surface breaking-change detector.
 *
 * Snapshots the public TypeScript API of each shipped entry point
 * (`f0`, `experimental`, `ai`) from a set of rolled-up `.d.ts` files, then
 * compares two snapshots (a `--base` directory vs a `--head` directory) and
 * classifies every difference.
 *
 * Classification is **structural and member-level**, so backward-compatible
 * changes are not flagged:
 *
 *   BREAKING
 *     - an export present in base is gone in head (removed / renamed)
 *     - a property/parameter was removed or had its type changed
 *     - a new REQUIRED property/parameter was added
 *     - an optional property became required
 *     - the kind or type parameters of an export changed
 *   SAFE (not flagged)
 *     - a brand-new export (new component/type)
 *     - a new OPTIONAL property/parameter
 *     - a required property became optional (widening)
 *
 * A rename surfaces, correctly, as a BREAKING removal of the old name plus a
 * safe addition of the new name.
 *
 * Both sides are analyzed by the *same* TypeScript in a single process, so the
 * comparison is deterministic and immune to compiler-version drift. Structural
 * types are resolved through the checker, which normalizes away api-extractor's
 * rollup noise (the `F0TextInputProps_2` suffixes / dangling `./types` imports)
 * instead of diffing raw `.d.ts` text.
 *
 * Unions are compared variant-by-variant (pairwise) and intersections of
 * object shapes are flattened into one merged member set — so an optional
 * prop added to a base type that feeds a union of prop variants (the
 * `F0SelectProps` shape) classifies as additive, not as "the union changed".
 *
 * Known simplification: leaf types (primitives, external types, non-object
 * unions/intersections) are compared by their normalized string, so a
 * *widening* of a leaf type (e.g. a prop `string` → `string | number`, which
 * is safe for an input) is reported as breaking. Object/parameter shape
 * changes — the common case — are classified precisely.
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
export const ENTRIES = ["f0", "experimental", "ai"] as const
export type Entry = (typeof ENTRIES)[number]

/** How deep to expand object/signature types before treating them as opaque
 * leaves. Bounds the work while still reaching component props
 * (export → call signature → props object → member). */
const MAX_DEPTH = 4

/**
 * A normalized, structural representation of a type used for comparison.
 *  - `object`: an object/props type, compared member by member. Intersections
 *    of object shapes are flattened into this (the checker merges members).
 *  - `callable`: a function/component, compared signature by signature.
 *  - `union`: a union, compared variant by variant (pairwise by position).
 *  - `opaque`: anything else (primitive, external type, non-object
 *    union/intersection constituents), compared by its normalized string.
 */
export type ApiItem =
  | {
      k: "object"
      members: Record<
        string,
        { optional: boolean; readonly: boolean; type: ApiItem }
      >
      index?: string
    }
  | {
      k: "callable"
      sigs: Array<{
        params: Array<{ name: string; optional: boolean; type: ApiItem }>
        ret: ApiItem
      }>
    }
  | { k: "union"; members: ApiItem[] }
  | { k: "opaque"; text: string }

interface ExportSnapshot {
  kind: string
  typeParams: string
  /** human-readable type, for the PR comment */
  display: string
  /** structural representation, for classification */
  item: ApiItem
}

type EntrySnapshot = Map<string, ExportSnapshot>

export interface EntryDiff {
  entry: Entry
  breaking: Array<{
    name: string
    kind: "removed" | "changed"
    reasons?: string[]
    before: string
    after?: string
  }>
  added: string[]
  skipped?: "no-base" | "no-head"
}

export interface AnalysisResult {
  hasBreaking: boolean
  breakingTotal: number
  addedTotal: number
  entries: EntryDiff[]
}

/* ----------------------------- snapshotting ----------------------------- */

function entryDtsPath(dir: string, entry: Entry): string | undefined {
  const p = path.resolve(dir, `${entry}.d.ts`)
  return existsSync(p) ? p : undefined
}

const COMPILER_OPTIONS: ts.CompilerOptions = {
  noEmit: true,
  skipLibCheck: true,
  skipDefaultLibCheck: true,
  target: ts.ScriptTarget.ESNext,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  jsx: ts.JsxEmit.Preserve,
  allowJs: false,
  strict: false,
}

// One `analyze()` run creates many small programs (per entry, per side). The
// dominant cost is parsing the multi-megabyte default TypeScript lib, which is
// identical across every program. Share a compiler host that caches parsed
// source files by name so the lib is parsed once instead of per program — this
// keeps each program from blowing the test timeout on slower CI runners.
let sharedHost: ts.CompilerHost | undefined
const sourceFileCache = new Map<string, ts.SourceFile | undefined>()

function getCompilerHost(): ts.CompilerHost {
  if (sharedHost) return sharedHost
  const host = ts.createCompilerHost(COMPILER_OPTIONS)
  const original = host.getSourceFile.bind(host)
  host.getSourceFile = (
    fileName,
    languageVersionOrOptions,
    onError,
    shouldCreate
  ) => {
    const cached = sourceFileCache.get(fileName)
    if (cached !== undefined) return cached
    const sf = original(
      fileName,
      languageVersionOrOptions,
      onError,
      shouldCreate
    )
    // Entry `.d.ts` files live at unique paths (temp dirs / base-vs-head dirs)
    // and are read once, so caching every file by name is safe and reuses the
    // expensive lib/node_modules parses across programs.
    sourceFileCache.set(fileName, sf)
    return sf
  }
  sharedHost = host
  return host
}

/**
 * Build a snapshot of the public exports of a single rolled `.d.ts` file.
 * Returns `undefined` when the file does not exist (treated as "no baseline").
 */
export function snapshotEntry(
  dir: string,
  entry: Entry
): EntrySnapshot | undefined {
  const dtsPath = entryDtsPath(dir, entry)
  if (!dtsPath) return undefined

  const dirAbsolute = path.resolve(dir)

  const program = ts.createProgram({
    rootNames: [dtsPath],
    options: COMPILER_OPTIONS,
    host: getCompilerHost(),
  })

  const checker = program.getTypeChecker()
  const sourceFile = program.getSourceFile(dtsPath)
  if (!sourceFile) return new Map()

  const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
  if (!moduleSymbol) return new Map()

  const snapshot: EntrySnapshot = new Map()
  for (const exp of checker.getExportsOfModule(moduleSymbol)) {
    const name = exp.getName()
    if (name === "default") continue
    snapshot.set(name, snapshotExport(exp, checker, sourceFile, dirAbsolute))
  }
  return snapshot
}

function snapshotExport(
  symbol: ts.Symbol,
  checker: ts.TypeChecker,
  location: ts.Node,
  dirAbsolute: string
): ExportSnapshot {
  let sym = symbol
  if (sym.flags & ts.SymbolFlags.Alias) {
    try {
      sym = checker.getAliasedSymbol(sym)
    } catch {
      // keep original
    }
  }

  const kind = symbolKind(sym)
  const typeParams = typeParameterText(sym)
  const isTypeOnly =
    !!(sym.flags & ts.SymbolFlags.Type) && !(sym.flags & ts.SymbolFlags.Value)

  let item: ApiItem = { k: "opaque", text: "<unresolved>" }
  let display = "<unresolved>"
  try {
    const type = isTypeOnly
      ? checker.getDeclaredTypeOfSymbol(sym)
      : checker.getTypeOfSymbolAtLocation(sym, location)
    item = buildApiItem(type, checker, dirAbsolute, MAX_DEPTH, new Set())
    display = normalize(
      checker.typeToString(type, undefined, TYPE_TO_STRING_FLAGS)
    )
  } catch (err) {
    display = `<unresolved: ${(err as Error).message}>`
  }

  return { kind, typeParams, display, item }
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
  return `<${tps.map((t) => t.getText()).join(", ")}>`
}

const TYPE_TO_STRING_FLAGS =
  ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.WriteArrayAsGenericType

/**
 * Normalize a type string so it is comparable across the two analyzed dirs:
 *  - strip `import("<abs path>").` qualifiers — the path is base-dir vs
 *    head-dir specific and would make every cross-referenced type look changed;
 *  - strip per-program unique-id suffixes on computed/internal names
 *    (e.g. `__@iterator@968`), which differ run-to-run.
 */
export function normalize(s: string): string {
  return s.replace(/import\("[^"]*"\)\./g, "").replace(/@\d+/g, "")
}

/** A type declared only outside the analyzed dir (React/DOM/lib) — referenced
 * by name rather than expanded, to keep snapshots stable and bounded.
 * Anonymous types (no symbol) are treated as local and expanded. */
function isExternal(type: ts.Type, dirAbsolute: string): boolean {
  const sym = type.aliasSymbol ?? type.getSymbol()
  const decls = sym?.getDeclarations()
  if (!decls || decls.length === 0) return false
  return decls.every((d) => {
    const f = d.getSourceFile().fileName
    return f.includes("node_modules") || !f.startsWith(dirAbsolute + path.sep)
  })
}

/** An intersection composed purely of object shapes (no primitives, no type
 * parameters), which the checker can flatten into one merged member set. */
function isPlainObjectIntersection(type: ts.Type): boolean {
  if (!type.isIntersection()) return false
  return type.types.every(
    (t) => !!(t.flags & ts.TypeFlags.Object) || isPlainObjectIntersection(t)
  )
}

function buildApiItem(
  type: ts.Type,
  checker: ts.TypeChecker,
  dirAbsolute: string,
  depth: number,
  visited: Set<ts.Type>
): ApiItem {
  const opaque = (): ApiItem => ({
    k: "opaque",
    text: normalize(
      checker.typeToString(type, undefined, TYPE_TO_STRING_FLAGS)
    ),
  })

  if (depth <= 0 || visited.has(type)) return opaque()

  // Union variants are compared pairwise (same position), so an optional
  // prop added to a shared base that feeds several variants classifies as
  // additive instead of "the whole union changed".
  if (type.isUnion()) {
    const next = new Set(visited).add(type)
    return {
      k: "union",
      members: type.types.map((t) =>
        buildApiItem(t, checker, dirAbsolute, depth - 1, next)
      ),
    }
  }

  // Intersections of plain object shapes fall through to the object branch
  // as one merged member set (the checker's getProperties() combines the
  // constituents). Anything else — branded primitives, callable
  // constituents — stays an opaque leaf, compared by text as before.
  if (
    type.isIntersection() &&
    (!isPlainObjectIntersection(type) ||
      type.getCallSignatures().length > 0 ||
      type.getConstructSignatures().length > 0)
  ) {
    return opaque()
  }

  const callSigs = type.getCallSignatures()
  const ctorSigs = type.getConstructSignatures()
  const sigs = [...callSigs, ...ctorSigs]
  if (sigs.length > 0) {
    const next = new Set(visited).add(type)
    return {
      k: "callable",
      sigs: sigs.map((s) => ({
        params: s.getParameters().map((p) => {
          const decl = p.valueDeclaration ?? p.declarations?.[0]
          const pt = decl
            ? checker.getTypeOfSymbolAtLocation(p, decl)
            : checker.getDeclaredTypeOfSymbol(p)
          // A parameter is optional via `?`, a default value, or rest `...`;
          // parameter symbols do not carry SymbolFlags.Optional.
          const pdecl = ts.isParameter(decl as ts.Node)
            ? (decl as ts.ParameterDeclaration)
            : undefined
          const optional =
            !!pdecl &&
            (!!pdecl.questionToken ||
              !!pdecl.initializer ||
              !!pdecl.dotDotDotToken)
          return {
            name: p.getName(),
            optional,
            type: buildApiItem(pt, checker, dirAbsolute, depth - 1, next),
          }
        }),
        ret: buildApiItem(
          s.getReturnType(),
          checker,
          dirAbsolute,
          depth - 1,
          next
        ),
      })),
    }
  }

  // Only expand genuine object types (interfaces, type literals, anonymous
  // object shapes). Primitives (string/number/…) have no Object flag, so they
  // stay opaque instead of leaking their prototype methods (e.g. the
  // program-specific `__@iterator@N`). Arrays/built-ins are Object types but
  // are caught by `isExternal` (declared in lib/node_modules) and stay opaque.
  const isObjectType =
    !!(type.flags & ts.TypeFlags.Object) || type.isIntersection()
  const props = type.getProperties()
  const indexInfos = checker.getIndexInfosOfType(type)
  const isObjectLike = props.length > 0 || indexInfos.length > 0
  if (isObjectType && isObjectLike && !isExternal(type, dirAbsolute)) {
    const next = new Set(visited).add(type)
    const members: Record<
      string,
      { optional: boolean; readonly: boolean; type: ApiItem }
    > = {}
    for (const p of props) {
      const decl = p.valueDeclaration ?? p.declarations?.[0]
      const pt = decl
        ? checker.getTypeOfSymbolAtLocation(p, decl)
        : checker.getDeclaredTypeOfSymbol(p)
      members[normalize(p.getName())] = {
        optional: !!(p.flags & ts.SymbolFlags.Optional),
        readonly: isReadonlySymbol(p),
        type: buildApiItem(pt, checker, dirAbsolute, depth - 1, next),
      }
    }
    const index = indexInfos
      .map(
        (info) =>
          `[${checker.typeToString(info.keyType)}]: ${normalize(checker.typeToString(info.type))}`
      )
      .sort()
      .join("; ")
    return { k: "object", members, index: index || undefined }
  }

  return opaque()
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

/* ----------------------------- classification ---------------------------- */

/** Compare two exports; returns the list of breaking reasons (empty = safe). */
export function classifyExport(
  before: ExportSnapshot,
  after: ExportSnapshot
): string[] {
  if (before.kind !== after.kind) {
    return [`kind changed (${before.kind} → ${after.kind})`]
  }
  if (before.typeParams !== after.typeParams) {
    return [
      `type parameters changed (${before.typeParams} → ${after.typeParams})`,
    ]
  }
  return classifyItem(before.item, after.item, "")
}

function at(path: string, name: string): string {
  return path ? `${path}.${name}` : name
}

/**
 * Structural breaking-change comparison. Variance is modelled the way a
 * consumer experiences component props: adding an optional member or relaxing
 * a required member to optional is safe; removing a member, retyping it, adding
 * a required member, or tightening optional→required is breaking.
 */
function classifyItem(before: ApiItem, after: ApiItem, path: string): string[] {
  if (before.k !== after.k) {
    return [`${path || "type"} changed shape (${before.k} → ${after.k})`]
  }

  if (before.k === "opaque" && after.k === "opaque") {
    return before.text !== after.text
      ? [`${path || "type"} changed: \`${before.text}\` → \`${after.text}\``]
      : []
  }

  if (before.k === "union" && after.k === "union") {
    if (before.members.length !== after.members.length) {
      return [
        `${path || "type"} union variants changed (${before.members.length} → ${after.members.length})`,
      ]
    }
    // Variants are compared at the same path so identical reasons coming
    // from a change in a shared base dedupe into a single line.
    const reasons = new Set<string>()
    before.members.forEach((b, i) => {
      for (const reason of classifyItem(b, after.members[i], path)) {
        reasons.add(reason)
      }
    })
    return [...reasons]
  }

  if (before.k === "object" && after.k === "object") {
    const reasons: string[] = []
    for (const name of Object.keys(before.members)) {
      const b = before.members[name]
      const a = after.members[name]
      if (!a) {
        reasons.push(`\`${at(path, name)}\` was removed`)
        continue
      }
      if (b.optional && !a.optional) {
        reasons.push(`\`${at(path, name)}\` became required`)
      }
      reasons.push(...classifyItem(b.type, a.type, at(path, name)))
    }
    for (const name of Object.keys(after.members)) {
      if (!before.members[name] && !after.members[name].optional) {
        reasons.push(`required \`${at(path, name)}\` was added`)
      }
    }
    if ((before.index ?? "") !== (after.index ?? "")) {
      reasons.push(`${path || "type"} index signature changed`)
    }
    return reasons
  }

  if (before.k === "callable" && after.k === "callable") {
    // Compare the first signature (components/most exports have one). A change
    // in overload count is itself breaking.
    if (before.sigs.length !== after.sigs.length) {
      return [`${path || "type"} call signatures changed`]
    }
    const reasons: string[] = []
    const bs = before.sigs[0]
    const as = after.sigs[0]
    const max = Math.max(bs.params.length, as.params.length)
    for (let i = 0; i < max; i++) {
      const bp = bs.params[i]
      const ap = as.params[i]
      const label = `param \`${(ap ?? bp).name}\``
      if (bp && !ap) {
        reasons.push(`${label} was removed`)
      } else if (!bp && ap) {
        if (!ap.optional) reasons.push(`required ${label} was added`)
      } else {
        if (bp.optional && !ap.optional)
          reasons.push(`${label} became required`)
        reasons.push(...classifyItem(bp.type, ap.type, at(path, ap.name)))
      }
    }
    reasons.push(...classifyItem(bs.ret, as.ret, at(path, "return")))
    return reasons
  }

  return []
}

/* -------------------------------- diffing -------------------------------- */

function diffEntry(
  entry: Entry,
  base: EntrySnapshot | undefined,
  head: EntrySnapshot | undefined
): EntryDiff {
  if (!base) return { entry, breaking: [], added: [], skipped: "no-base" }
  if (!head) return { entry, breaking: [], added: [], skipped: "no-head" }

  const breaking: EntryDiff["breaking"] = []
  const added: string[] = []

  for (const [name, b] of base) {
    const h = head.get(name)
    if (!h) {
      breaking.push({ name, kind: "removed", before: b.display })
      continue
    }
    const reasons = classifyExport(b, h)
    if (reasons.length > 0) {
      breaking.push({
        name,
        kind: "changed",
        reasons,
        before: b.display,
        after: h.display,
      })
    }
  }
  for (const name of head.keys()) {
    if (!base.has(name)) added.push(name)
  }

  breaking.sort((a, b) => a.name.localeCompare(b.name))
  added.sort()
  return { entry, breaking, added }
}

export function analyze(baseDir: string, headDir: string): AnalysisResult {
  const entries = ENTRIES.map((entry) =>
    diffEntry(
      entry,
      snapshotEntry(baseDir, entry),
      snapshotEntry(headDir, entry)
    )
  )
  const breakingTotal = entries.reduce((n, d) => n + d.breaking.length, 0)
  const addedTotal = entries.reduce((n, d) => n + d.added.length, 0)
  return { hasBreaking: breakingTotal > 0, breakingTotal, addedTotal, entries }
}

/* ------------------------------- reporting ------------------------------- */

function clip(s: string, max = 400): string {
  return s.length > max ? `${s.slice(0, max)} …` : s
}

/**
 * Hard cap on the rendered comment, in bytes.
 *
 * Why: the workflow funnels this markdown through `$GITHUB_OUTPUT` into a
 * downstream composite-action env var (`COMMENT_BODY`), which gets propagated
 * to `actions/github-script@v7`'s node process. A multi-megabyte body pushes
 * argv+envp past the kernel's `ARG_MAX` and exec fails with "Argument list
 * too long" before the script even runs. GitHub's own PR-comment ceiling is
 * 65,536 characters, so 60 KB also leaves headroom for the comment-id marker
 * and any per-character byte overhead from UTF-8.
 */
const MAX_COMMENT_BYTES = 60_000

/**
 * Truncate the rendered comment to {@link MAX_COMMENT_BYTES}, appending a
 * notice so reviewers know more changes exist. Truncation operates on whole
 * lines so the markdown stays well-formed.
 */
function capCommentSize(lines: string[]): string[] {
  let bytes = 0
  const out: string[] = []
  for (const line of lines) {
    const lineBytes = Buffer.byteLength(line, "utf8") + 1 // + newline
    if (bytes + lineBytes > MAX_COMMENT_BYTES) {
      out.push("")
      out.push(
        "_…output truncated to keep the comment under GitHub's size limits — run `pnpm --filter @factorialco/f0-react check:api-surface` locally for the full diff._"
      )
      return out
    }
    out.push(line)
    bytes += lineBytes
  }
  return out
}

/**
 * Render the PR comment body. Posted whether or not breaking changes exist, so
 * a prior "⚠️ breaking" comment is cleared to "✅" once resolved.
 */
export function buildCommentMarkdown(result: AnalysisResult): string {
  const { hasBreaking, breakingTotal, addedTotal, entries } = result
  const lines: string[] = []

  if (hasBreaking) {
    lines.push(`## ⚠️ Breaking public API changes (${breakingTotal})`)
    lines.push("")
    lines.push(
      "These public exports were **renamed/removed, or had a property/parameter removed, retyped, or newly required** compared to `main` — that breaks consumers. " +
        "Adding new exports or new *optional* props is always safe and is not flagged. " +
        "If a breaking change is intentional, note it in the PR description and use a `feat!:`/`BREAKING CHANGE` commit so the release is a major bump."
    )
  } else {
    lines.push("## ✅ No breaking public API changes")
    lines.push("")
    lines.push(
      "No public exports were removed, renamed, or had existing props/types changed in a breaking way compared to `main`."
    )
  }
  lines.push("")
  lines.push(
    "_Comparing `f0`, `experimental` and `ai` against `main`. Adding components, types, or optional props is safe. This check is non-blocking._"
  )

  for (const d of entries) {
    if (d.skipped || d.breaking.length === 0) continue
    lines.push("")
    lines.push(`### \`${d.entry}\``)
    for (const b of d.breaking) {
      if (b.kind === "removed") {
        lines.push(`- ❌ \`${b.name}\` — **removed** (renamed or deleted)`)
      } else {
        lines.push(`- ✏️ \`${b.name}\` — **breaking change**`)
        for (const reason of b.reasons ?? []) {
          lines.push(`  - ${reason}`)
        }
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
    for (const d of entries) {
      if (d.added.length > 0) {
        lines.push(
          `- \`${d.entry}\`: ${d.added.map((n) => `\`${n}\``).join(", ")}`
        )
      }
    }
    lines.push("</details>")
  }

  const skipped = entries.filter((d) => d.skipped)
  if (skipped.length > 0) {
    lines.push("")
    lines.push(
      `> ⚠️ Could not analyze ${skipped.map((d) => `\`${d.entry}\` (${d.skipped})`).join(", ")} — a build may have failed; results may be incomplete.`
    )
  }

  return capCommentSize(lines).join("\n")
}

/* --------------------------------- main ---------------------------------- */

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

function main(): void {
  const { base, head, json } = parseArgs()
  if (!base || !head) {
    consola.error(
      "Usage: tsx .scripts/check-api-surface.ts --base <dir> --head <dir> [--json]"
    )
    process.exit(2)
  }

  const result = analyze(base, head)

  if (json) {
    // Machine-readable output to stdout (the CI workflow reads it).
    process.stdout.write(
      JSON.stringify(
        { ...result, commentMarkdown: buildCommentMarkdown(result) },
        null,
        2
      ) + "\n"
    )
    process.exit(0)
  }

  for (const d of result.entries) {
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
        for (const reason of b.reasons ?? []) consola.log(`      • ${reason}`)
      }
    }
  }
  consola.log("")
  if (result.hasBreaking) {
    consola.error(
      `${result.breakingTotal} breaking public API change(s) (${result.addedTotal} additive).`
    )
  } else {
    consola.success(
      `No breaking public API changes (${result.addedTotal} additive change(s)).`
    )
  }
  // Non-blocking: always exit 0.
  process.exit(0)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (process.argv[1] && /check-api-surface\.(ts|js)$/.test(process.argv[1])) {
  main()
}
