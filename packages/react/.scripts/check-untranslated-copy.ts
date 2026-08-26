#!/usr/bin/env tsx
/**
 * check-untranslated-copy.ts
 *
 * Gate: user-visible copy in `packages/react` must come from the i18n layer
 * (`useI18n()` / `t()` — see src/lib/providers/i18n), not from a string literal
 * baked into the component. A literal is untranslatable by construction: a
 * consumer's dictionary can never reach it, so every locale renders English.
 *
 * The scan is AST-based (no regex over source) and looks at four positions:
 *
 *   1. JSX text          — `<span>Save</span>`
 *   2. JSX attributes    — `label="Close"`, `aria-label="Clear"`
 *   3. Object properties — `{ label: "Today" }`, at any depth, including
 *                          inside arrays and const maps
 *   4. Default values    — `function f({ label = "Actions" })`, `x = "Add"`
 *
 * Positions 3 and 4 are what catch copy hiding in default params and lookup
 * tables, which is where most of this debt actually lives.
 *
 * A literal is reported when EITHER
 *   - the name it is bound to is text-bearing (`label`, `title`, `placeholder`,
 *     `aria-label`, `emptyMessage`, …) and the value reads as copy, OR
 *   - the name is arbitrary but the value reads as prose ("hey hey"), which is
 *     how `hola = 'hey hey'` gets caught despite `hola` meaning nothing.
 *
 * Because the whole codebase predates the check, this is a **ratchet** rather
 * than a hard wall — the same idiom as `.scripts/stable-dod-debt.json`:
 *
 *   - `untranslated-copy-debt.json` records the known-untranslated strings per
 *     file. The list may only ever shrink.
 *   - A string not in the baseline for its file fails the check. That is the
 *     blocking half: a PR cannot add untranslated copy.
 *   - A baseline entry that no longer exists also fails, with the fix being to
 *     run `--update`. That is what locks each translation win in.
 *
 * Escape hatch for a literal that genuinely must not be translated (a brand
 * name, a keyboard key, a developer-facing dev tool): put `i18n-exempt` in a
 * comment on the same line or the line above.
 *
 * Usage:
 *   tsx .scripts/check-untranslated-copy.ts             # gate (exit 1 on drift)
 *   tsx .scripts/check-untranslated-copy.ts --verbose    # + every finding
 *   tsx .scripts/check-untranslated-copy.ts --report     # full inventory, exit 0
 *   tsx .scripts/check-untranslated-copy.ts --json       # machine-readable
 *   tsx .scripts/check-untranslated-copy.ts --update     # rewrite the baseline
 */
import { spawnSync } from "node:child_process"
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

import consola from "consola"
import ts from "typescript"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const SRC_DIR = resolve(PKG_DIR, "src")
const DEBT_FILE = resolve(PKG_DIR, ".scripts/untranslated-copy-debt.json")

/** Marker that opts a single line out of the check. */
const EXEMPT_MARKER = "i18n-exempt"

/**
 * Paths whose strings are not shipped copy. Tests, stories and fixtures are
 * excluded per the brief; the rest are either generated (icons, flags),
 * Storybook-only scaffolding, or the dictionary itself.
 *
 * Matched against the src-relative path with "/" separators.
 */
const EXCLUDED_PATHS: RegExp[] = [
  // Tests, stories, docs and type-level tests.
  /\.(spec|test|bench)\.(ts|tsx)$/,
  /\.test-d\.ts$/,
  /\.stories\.tsx?$/,
  /\.mdx$/,
  /\.d\.ts$/,
  /(^|\/)(__tests__|__test__|__stories__|__storybook__|__mocks__|__snapshots__)\//,
  // Fixture/sample data: `*.factory.tsx` exists only to feed stories.
  /\.(factory|fixture|mock|mocks)\.(ts|tsx)$/,
  // Generated from @factorialco/f0-core assets — never hand-edited.
  /(^|\/)(icons|flags)\//,
  // Sample data, harnesses and Storybook helpers.
  /(^|\/)(mocks|testing|examples)\//,
  /(^|\/)lib\/storybook-utils\//,
  // The dictionary itself: these literals ARE the translations.
  /(^|\/)lib\/providers\/i18n\//,
]

/**
 * Names that carry copy. Matched as a whole name or as a camelCase suffix, so
 * `emptyStateTitle`, `searchPlaceholder` and `confirmLabel` all qualify.
 */
const TEXT_WORDS = [
  "label",
  "title",
  "subtitle",
  "description",
  "placeholder",
  "text",
  "message",
  "tooltip",
  "caption",
  "heading",
  "hint",
  "cta",
  "alt",
  "copy",
  "prompt",
  "legend",
]
const TEXT_SUFFIX = new RegExp(`(^|[a-z])(${TEXT_WORDS.join("|")})s?$`, "i")

/** Text-bearing names the suffix rule cannot express (they contain a dash). */
const TEXT_EXACT = new Set([
  "aria-label",
  "aria-description",
  "aria-roledescription",
  "aria-valuetext",
  "aria-placeholder",
  "content",
])

/**
 * `showTooltip`, `hasTitle`, `noLabel` … end in a text word but hold a flag or
 * an enum, not copy.
 */
const BOOLEAN_PREFIX =
  /^(is|has|show|hide|should|can|with|without|enable|disable|use|no|allow|omit)[A-Z]/

/**
 * Names that never hold copy, however prose-like the value looks. Only consulted
 * by the prose pass — a text-bearing name always wins. `name` is the big one:
 * person and entity names dominate sample data and are not translatable copy.
 */
const NON_COPY_NAMES = new Set([
  // Identifiers and routing.
  "name",
  "id",
  "key",
  "type",
  "role",
  "variant",
  "value",
  "href",
  "src",
  "url",
  "path",
  "testId",
  "data-testid",
  "event",
  "icon",
  "color",
  "format",
  // Presentation.
  "className",
  "class",
  "style",
  "fontFamily",
  "font",
  // HTML plumbing whose values are keywords, not copy — `rel="noopener
  // noreferrer"` is the common one.
  "rel",
  "target",
  "download",
  "charSet",
  "crossOrigin",
  "referrerPolicy",
  "autoComplete",
  "inputMode",
  "enterKeyHint",
  "sandbox",
  "srcSet",
  "sizes",
  "media",
  "accept",
  "encType",
  "method",
  "action",
  "dir",
  "lang",
  "slot",
])

/**
 * Props/keys whose object value is a style or animation declaration. CSS values
 * (`overflow: "hidden auto"`, `transformOrigin: "top left"`) read as prose but
 * are never copy, so the whole subtree is skipped.
 */
const STYLE_CONTAINERS = new Set([
  "style",
  "css",
  "sx",
  // framer-motion.
  "animate",
  "initial",
  "exit",
  "transition",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView",
])

export type FindingKind =
  | "jsx-text"
  | "jsx-attribute"
  | "object-property"
  | "default-value"

export interface Finding {
  /** Path relative to `packages/react`, e.g. `src/ui/carousel.tsx`. */
  file: string
  line: number
  /** Prop/attribute/binding name, or `<jsx-text>` for element children. */
  name: string
  value: string
  kind: FindingKind
}

/** Strip HTML entities so `&nbsp;` does not read as a word. */
const decodeEntities = (s: string): string =>
  s.replace(/&[a-z]+;|&#\d+;/gi, " ")

/** `w-6`, `text-f1-foreground-warning`, `md:flex-1` — CSS classes, not copy. */
const CLASS_TOKEN = /^-?[a-z][a-z0-9]*([-:/.][a-z0-9[\]%.]+)+$/
const looksLikeClassNames = (value: string): boolean =>
  value.split(/\s+/).every((token) => CLASS_TOKEN.test(token))

/**
 * One word of prose: letters, an optional internal apostrophe, and trailing
 * sentence punctuation. Interpolations (`{{count}}`) and bare numbers count as
 * words too. Deliberately no dash, colon or slash — that omission is what
 * rejects Tailwind ("flex items-center"), font stacks ("Inter, sans-serif")
 * and code snippets, which are the only things in these positions that
 * otherwise read as prose.
 */
const PROSE_WORD =
  /^[("“]?([A-Za-z]+(['’][A-Za-z]+)?|\{\{\w+\}\}|\d+([.,]\d+)?)[.,!?:;)"”]*$/

export const isTextBearingName = (name: string): boolean =>
  TEXT_EXACT.has(name) || (!BOOLEAN_PREFIX.test(name) && TEXT_SUFFIX.test(name))

/**
 * Does this literal read as something a user sees? Applied when the name
 * already tells us the position holds copy, so a bare "Save" qualifies.
 */
export function readsAsCopy(raw: string): boolean {
  const value = decodeEntities(raw).trim()
  if (value.length < 2) return false
  if (!/[A-Za-z]/.test(value)) return false
  // URLs and paths.
  if (/^(https?:)?\/\//.test(value) || value.startsWith("/")) return false
  if (looksLikeClassNames(value)) return false
  // A single uncapitalised token is an identifier, enum member or CSS value
  // (`send`, `onHover`, `txt`) — copy starts with a capital or has more words.
  if (!/\s/.test(value) && !/^[A-Z]/.test(value)) return false
  return true
}

/**
 * Does this literal read as prose? Applied when the name tells us nothing, so
 * the bar is higher: two or more plain words. Case is not required — this is
 * what catches `hola = "hey hey"`, an arbitrary name holding obvious copy.
 */
export function readsAsProse(raw: string): boolean {
  const value = decodeEntities(raw).trim()
  if (!readsAsCopy(value)) return false
  const words = value.split(/\s+/)
  // One word is never enough: alone it is far likelier an enum member or a CSS
  // value than copy.
  if (words.length < 2) return false
  return words.every((word) => PROSE_WORD.test(word))
}

export function isExcludedPath(srcRelativePath: string): boolean {
  const normalized = srcRelativePath.split(sep).join("/")
  return EXCLUDED_PATHS.some((pattern) => pattern.test(normalized))
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full)
  }
  return out
}

/**
 * Scan one file's source. Exported so tests can drive it with a string instead
 * of a fixture tree.
 */
export function findInSource(filePath: string, source: string): Finding[] {
  const findings: Finding[] = []
  const isTsx = filePath.endsWith(".tsx")
  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
    isTsx ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  )
  const lines = source.split("\n")
  const exemptLine = (line: number) =>
    (lines[line - 1] ?? "").includes(EXEMPT_MARKER) ||
    (lines[line - 2] ?? "").includes(EXEMPT_MARKER)

  const lineOf = (node: ts.Node) =>
    sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1

  /** Literal text, or undefined for anything with interpolation or non-strings. */
  const literalOf = (node: ts.Node): string | undefined =>
    ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)
      ? node.text
      : undefined

  const record = (
    node: ts.Node,
    name: string,
    value: string,
    kind: FindingKind
  ) => {
    const line = lineOf(node)
    if (exemptLine(line)) return
    findings.push({
      file: filePath,
      line,
      name,
      value: decodeEntities(value).trim().replace(/\s+/g, " "),
      kind,
    })
  }

  /** Apply the name-driven rule, falling back to the prose rule. */
  const consider = (
    node: ts.Node,
    name: string,
    value: string,
    kind: FindingKind
  ) => {
    if (isTextBearingName(name)) {
      if (readsAsCopy(value)) record(node, name, value, kind)
      return
    }
    if (!NON_COPY_NAMES.has(name) && readsAsProse(value)) {
      record(node, name, value, kind)
    }
  }

  const visit = (node: ts.Node): void => {
    if (ts.isJsxAttribute(node) && node.initializer) {
      const attrName = node.name.getText(sourceFile)
      if (STYLE_CONTAINERS.has(attrName)) return
      const { initializer } = node
      const value = ts.isStringLiteral(initializer)
        ? initializer.text
        : ts.isJsxExpression(initializer) && initializer.expression
          ? literalOf(initializer.expression)
          : undefined
      if (value !== undefined) {
        consider(node, attrName, value, "jsx-attribute")
      }
    }

    if (ts.isPropertyAssignment(node)) {
      const name =
        ts.isIdentifier(node.name) || ts.isStringLiteral(node.name)
          ? node.name.text
          : undefined
      if (name !== undefined && STYLE_CONTAINERS.has(name)) return
      const value = literalOf(node.initializer)
      if (name !== undefined && value !== undefined) {
        consider(node, name, value, "object-property")
      }
    }

    // `function f(label = "x")` and `const { label = "x" } = props`.
    if (
      (ts.isParameter(node) || ts.isBindingElement(node)) &&
      node.initializer
    ) {
      const name = ts.isIdentifier(node.name) ? node.name.text : undefined
      const value = literalOf(node.initializer)
      if (name !== undefined && value !== undefined) {
        consider(node, name, value, "default-value")
      }
    }

    if (isTsx && ts.isJsxText(node) && readsAsCopy(node.text)) {
      record(node, "<jsx-text>", node.text, "jsx-text")
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return findings
}

export function scan(srcDir = SRC_DIR): Finding[] {
  const files = walk(srcDir).filter(
    (file) => !isExcludedPath(relative(srcDir, file))
  )
  return files.flatMap((file) =>
    findInSource(relative(PKG_DIR, file), readFileSync(file, "utf-8"))
  )
}

export interface DebtFile {
  /** Why this file exists and the rule that governs it. */
  note: string
  /** Total across every file — the headline number. */
  total: number
  /**
   * File → the untranslated strings it is known to contain. Values, not line
   * numbers, so moving code inside a file does not churn the baseline.
   */
  files: Record<string, string[]>
}

/** file → sorted list of findings' values. */
function groupValues(findings: Finding[]): Map<string, string[]> {
  const grouped = new Map<string, string[]>()
  for (const finding of findings) {
    const bucket = grouped.get(finding.file) ?? []
    bucket.push(finding.value)
    grouped.set(finding.file, bucket)
  }
  for (const bucket of grouped.values()) bucket.sort()
  return grouped
}

export function buildDebtFile(findings: Finding[]): DebtFile {
  const files: Record<string, string[]> = {}
  for (const [file, values] of [...groupValues(findings)].sort(([a], [b]) =>
    a.localeCompare(b)
  )) {
    files[file] = values
  }
  return {
    note:
      "Untranslated user-visible copy in packages/react/src — string literals that should " +
      "come from the i18n layer (src/lib/providers/i18n) instead. Enforced by " +
      ".scripts/check-untranslated-copy.ts. This list may only shrink: translate a string " +
      'and remove it from here (or run "--update"), never add one.',
    total: findings.length,
    files,
  }
}

export interface CheckResult {
  /** Untranslated strings this branch introduces — the blocking set. */
  added: Finding[]
  /** file → strings in the baseline that no longer exist. Delete these. */
  fixed: Record<string, string[]>
  /** Baseline entries for files that no longer exist (or have no findings). */
  staleFiles: string[]
  /** Total findings across the codebase right now. */
  total: number
  /** Total recorded in the baseline. */
  baselineTotal: number
}

export function check(findings: Finding[], baseline: DebtFile): CheckResult {
  const current = groupValues(findings)
  const added: Finding[] = []

  // Consume the baseline as a multiset per file: a finding is new only if the
  // baseline has no unclaimed copy of that exact string in that exact file.
  const remaining = new Map<string, Map<string, number>>()
  for (const [file, values] of Object.entries(baseline.files)) {
    const counts = new Map<string, number>()
    for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1)
    remaining.set(file, counts)
  }

  for (const finding of findings) {
    const counts = remaining.get(finding.file)
    const left = counts?.get(finding.value) ?? 0
    if (left > 0) counts!.set(finding.value, left - 1)
    else added.push(finding)
  }

  const fixed: Record<string, string[]> = {}
  const staleFiles: string[] = []
  for (const [file, counts] of remaining) {
    const leftover = [...counts.entries()].flatMap(([value, count]) =>
      Array.from({ length: count }, () => value)
    )
    if (leftover.length === 0) continue
    if (!current.has(file)) staleFiles.push(file)
    else fixed[file] = leftover.sort()
  }

  return {
    added,
    fixed,
    staleFiles: staleFiles.sort(),
    total: findings.length,
    baselineTotal: baseline.total,
  }
}

const KIND_LABEL: Record<FindingKind, string> = {
  "jsx-text": "JSX text",
  "jsx-attribute": "JSX attribute",
  "object-property": "object property",
  "default-value": "default value",
}

function readBaseline(): DebtFile {
  return JSON.parse(readFileSync(DEBT_FILE, "utf-8")) as DebtFile
}

function printInventory(findings: Finding[]): void {
  const byFile = new Map<string, Finding[]>()
  for (const finding of findings) {
    byFile.set(finding.file, [...(byFile.get(finding.file) ?? []), finding])
  }
  for (const file of [...byFile.keys()].sort()) {
    consola.log(`  ${file}`)
    for (const finding of byFile.get(file)!) {
      consola.log(
        `    ${finding.line}: ${finding.name} = ${JSON.stringify(finding.value)}` +
          ` (${KIND_LABEL[finding.kind]})`
      )
    }
  }
}

function main(): void {
  const args = process.argv.slice(2)
  const wants = (flag: string) => args.includes(flag)

  const findings = scan()

  if (wants("--update")) {
    const payload = buildDebtFile(findings)
    writeFileSync(DEBT_FILE, `${JSON.stringify(payload, null, 2)}\n`)
    // oxfmt collapses short arrays onto one line, which JSON.stringify cannot
    // reproduce. Normalise here so a later `oxfmt .scripts/` does not reflow a
    // freshly generated baseline into a confusing no-op diff.
    spawnSync("pnpm", ["exec", "oxfmt", DEBT_FILE], {
      cwd: PKG_DIR,
      stdio: "ignore",
    })
    consola.success(
      `Wrote ${payload.total} untranslated string(s) across ` +
        `${Object.keys(payload.files).length} file(s) to ` +
        ".scripts/untranslated-copy-debt.json"
    )
    process.exit(0)
  }

  if (wants("--report")) {
    if (wants("--json")) {
      consola.log(JSON.stringify({ total: findings.length, findings }, null, 2))
      process.exit(0)
    }
    const files = new Set(findings.map((f) => f.file)).size
    consola.log(
      `${findings.length} untranslated string(s) across ${files} file(s):\n`
    )
    printInventory(findings)
    process.exit(0)
  }

  const result = check(findings, readBaseline())

  if (wants("--json")) {
    consola.log(JSON.stringify(result, null, 2))
    process.exit(result.added.length > 0 ? 1 : 0)
  }

  if (wants("--verbose")) {
    consola.log(
      `Untranslated copy: ${result.total} (baseline ${result.baselineTotal})\n`
    )
    printInventory(findings)
  }

  process.exit(reportResult(result) ? 0 : 1)
}

/**
 * Print the verdict and return whether it passed. Shared with
 * pre-push-preflight.ts so the local and CI messages cannot drift.
 */
export function reportResult(result: CheckResult): boolean {
  consola.log(
    `Untranslated copy: ${result.total} (baseline ${result.baselineTotal})`
  )

  let failed = false

  if (result.added.length > 0) {
    failed = true
    consola.log("")
    consola.error(
      `${result.added.length} new untranslated string(s) — copy must come from ` +
        "the i18n layer, not a literal:"
    )
    for (const finding of result.added) {
      consola.log(
        `    ${finding.file}:${finding.line} — ${finding.name} = ` +
          `${JSON.stringify(finding.value)} (${KIND_LABEL[finding.kind]})`
      )
    }
    consola.log("")
    consola.log(
      "  Add the key to src/lib/providers/i18n/i18n-provider-defaults.ts and read " +
        "it with useI18n()/t()."
    )
    consola.log(
      `  If the string genuinely must not be translated, put "${EXEMPT_MARKER}" ` +
        "in a comment on that line."
    )
  }

  const fixedFiles = Object.keys(result.fixed)
  if (fixedFiles.length > 0 || result.staleFiles.length > 0) {
    failed = true
    const fixedCount = Object.values(result.fixed).reduce(
      (sum, values) => sum + values.length,
      0
    )
    consola.log("")
    consola.error(
      `${fixedCount + result.staleFiles.length} baseline entr(y/ies) no longer ` +
        "exist — the debt list must shrink to lock the win in:"
    )
    for (const file of fixedFiles) {
      consola.log(`    ${file}: ${result.fixed[file].join(", ")}`)
    }
    for (const file of result.staleFiles) {
      consola.log(`    ${file}: file gone or fully translated`)
    }
    consola.log("")
    consola.log(
      '  Run "pnpm --filter @factorialco/f0-react run check:untranslated-copy --update".'
    )
  }

  if (failed) return false

  consola.log("")
  consola.success("No new untranslated copy.")
  return true
}

/** Run the gate end to end. Used by pre-push-preflight.ts. */
export function runGate(): boolean {
  return reportResult(check(scan(), readBaseline()))
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (
  process.argv[1] &&
  /check-untranslated-copy\.(ts|js)$/.test(process.argv[1])
) {
  main()
}
