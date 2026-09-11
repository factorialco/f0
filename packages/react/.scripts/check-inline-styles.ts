#!/usr/bin/env tsx
/**
 * check-inline-styles.ts
 *
 * Gate: styling in `packages/react` must come from Tailwind classes, not from
 * an inline `style` prop. An inline style bypasses the design tokens, cannot be
 * overridden by a consumer's class, wins every specificity fight it enters, and
 * is invisible to the Tailwind build — so it never gets purged, themed or
 * responsive variants.
 *
 * The scan is AST-based (no regex over source) and looks at two positions:
 *
 *   1. `style={...}` JSX attributes — every form: object literal, identifier
 *      passthrough (`style={style}`), conditional, spread, call expression.
 *   2. `<style>` elements — a stylesheet smuggled into the component tree.
 *
 * `dangerouslySetInnerHTML` carrying CSS is deliberately NOT scanned: deciding
 * whether a string is CSS is heuristic, and heuristics in a blocking gate are
 * how you teach people to ignore it.
 *
 * ## Scope
 *
 * `src/ui/` is excluded. AGENTS.md defines it as "third-party primitive
 * wrappers (Radix, shadcn). Not part of F0 public API, not re-exported", and
 * components.json points shadcn's generator at `@/ui`. That code is generated
 * or re-synced from upstream, so a shrink-only baseline over it would fight
 * every sync, and its styles are upstream's decisions rather than F0's.
 *
 * ## The ratchet
 *
 * Because the whole codebase predates the check, this is a **ratchet** rather
 * than a hard wall — the same idiom as `.scripts/untranslated-copy-debt.json`:
 *
 *   - `inline-styles-debt.json` records the known inline styles per file. The
 *     list may only ever shrink.
 *   - A style not covered by the baseline for its file fails the check. That is
 *     the blocking half: a PR cannot add an inline style.
 *   - A baseline entry that no longer exists also fails, with the fix being to
 *     run `--update`. That is what locks each conversion in.
 *
 * Unlike the i18n baseline, this one is **grandfathered, not must-fix**. Most
 * of the entries are legitimate under the library's own rule (inline styles are
 * allowed for truly dynamic values — see the styling reference), so the list is
 * not expected to reach zero. What it guarantees is that the number only goes
 * down, and that every NEW inline style is a deliberate, reviewed decision.
 *
 * ## The baseline key
 *
 * An entry is keyed by the style's **property names**, sorted and joined —
 * `{{ width: `${w}px`, height: h }}` records as `height,width` — not by its
 * source text. Values in these objects are arbitrary expressions that churn on
 * every unrelated refactor; property names churn only when the styling actually
 * changes. Keying on text would fire the gate at refactors that add no styling
 * at all, which is the false-positive class that gets a check ignored.
 *
 * Entries are compared as a multiset per file, so a net-new style prop trips
 * the gate even when the file already has one with the same properties.
 *
 * Escape hatch for a style that genuinely must be inline (a measured pixel
 * offset, a data-driven colour, a `${percentage}%` width): put `styles-exempt`
 * in a comment on the same line or the line above, with the reason. It lands in
 * the diff, so a reviewer sees the claim and can judge it.
 *
 * Usage:
 *   tsx .scripts/check-inline-styles.ts             # gate (exit 1 on drift)
 *   tsx .scripts/check-inline-styles.ts --verbose   # + every finding
 *   tsx .scripts/check-inline-styles.ts --report    # full inventory, exit 0
 *   tsx .scripts/check-inline-styles.ts --json      # machine-readable
 *   tsx .scripts/check-inline-styles.ts --update    # rewrite the baseline
 *   tsx .scripts/check-inline-styles.ts --comment   # PR-comment markdown
 *
 * Under GitHub Actions it also emits `::error file=,line=` annotations, which
 * is what puts each offending style inline on the PR's Files tab.
 */
import { spawnSync } from "node:child_process"
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

import consola from "consola"
import ts from "typescript"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const SRC_DIR = resolve(PKG_DIR, "src")
const DEBT_FILE = resolve(PKG_DIR, ".scripts/inline-styles-debt.json")

/** Marker that opts a single style out of the check. */
export const EXEMPT_MARKER = "styles-exempt"

/**
 * Paths whose styles are not shipped F0 styling. Matched against the
 * src-relative path with "/" separators.
 */
const EXCLUDED_PATHS: RegExp[] = [
  // Third-party primitive wrappers (Radix, shadcn). Generated or re-synced
  // from upstream and never re-exported publicly — see AGENTS.md and
  // components.json, whose `ui` alias points shadcn's generator here.
  /^ui\//,
  // Tests, stories, docs and type-level tests.
  /\.(spec|test|bench)\.(ts|tsx)$/,
  /\.test-d\.ts$/,
  /\.stories\.tsx?$/,
  /\.mdx$/,
  /\.d\.ts$/,
  /(^|\/)(__tests__|__test__|__stories__|__storybook__|__mocks__|__snapshots__)\//,
  // Fixture/sample data: `*.factory.tsx` exists only to feed stories.
  /\.(factory|fixture|mock|mocks)\.(ts|tsx)$/,
  // Generated from @factorialco/f0-core assets — never hand-edited. These are
  // SVG components where `style` is part of the exported artwork.
  /(^|\/)(icons|flags)\//,
  // Sample data, harnesses and Storybook helpers.
  /(^|\/)(mocks|testing|examples)\//,
  /(^|\/)lib\/storybook-utils\//,
]

/**
 * What the style is made of. Not stored in the baseline — recomputed on every
 * run so the report and the PR comment can say which findings are a
 * mechanical Tailwind conversion and which are arguably legitimate.
 */
export type StyleShape =
  | "static" // every value is a literal — always convertible
  | "mixed" // some literal values, some dynamic
  | "dynamic" // no literal values
  | "css-variable" // sets a `--custom-property`
  | "passthrough" // `style={style}` — forwarded from props
  | "expression" // a call, conditional, spread or anything else
  | "element" // a `<style>` tag

export interface Finding {
  /** Path relative to `packages/react`, e.g. `src/patterns/F0Map/Marker.tsx`. */
  file: string
  line: number
  /** Baseline key: sorted property names, or a `<shape>` token. */
  key: string
  shape: StyleShape
  /** Source text of the style, collapsed and truncated — for humans only. */
  text: string
}

/** Tokens used as the baseline key when there are no property names to list. */
const SHAPE_TOKEN: Partial<Record<StyleShape, string>> = {
  passthrough: "<passthrough>",
  expression: "<expression>",
  element: "<style-element>",
}

const propertyName = (property: ts.ObjectLiteralElementLike): string => {
  if (ts.isSpreadAssignment(property)) return "...spread"
  const { name } = property
  if (!name) return "<unknown>"
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) return name.text
  if (ts.isComputedPropertyName(name)) return "<computed>"
  return "<unknown>"
}

/**
 * Classify an object literal. `static` is the interesting bucket: every value
 * is a constant, so the whole thing is expressible as Tailwind classes.
 */
export function describeObject(node: ts.ObjectLiteralExpression): {
  key: string
  shape: StyleShape
  staticProperties: string[]
} {
  const names: string[] = []
  const staticProperties: string[] = []
  let hasDynamic = false
  let hasCssVariable = false

  for (const property of node.properties) {
    const name = propertyName(property)
    names.push(name)
    if (name.startsWith("--")) hasCssVariable = true
    if (!ts.isPropertyAssignment(property)) {
      hasDynamic = true
      continue
    }
    const value = property.initializer
    const isLiteral =
      ts.isStringLiteral(value) ||
      ts.isNumericLiteral(value) ||
      ts.isNoSubstitutionTemplateLiteral(value)
    if (isLiteral) staticProperties.push(name)
    else hasDynamic = true
  }

  const shape: StyleShape = hasCssVariable
    ? "css-variable"
    : hasDynamic
      ? staticProperties.length > 0
        ? "mixed"
        : "dynamic"
      : "static"

  return { key: [...names].sort().join(","), shape, staticProperties }
}

export function isExcludedPath(srcRelativePath: string): boolean {
  const normalized = srcRelativePath.split(sep).join("/")
  return EXCLUDED_PATHS.some((pattern) => pattern.test(normalized))
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    // JSX only lives in .tsx — a .ts file cannot hold a style prop.
    else if (entry.name.endsWith(".tsx")) out.push(full)
  }
  return out
}

/**
 * Scan one file's source. Exported so tests can drive it with a string instead
 * of a fixture tree.
 */
export function findInSource(filePath: string, source: string): Finding[] {
  const findings: Finding[] = []
  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
    ts.ScriptKind.TSX
  )
  const lines = source.split("\n")
  const exemptLine = (line: number) =>
    (lines[line - 1] ?? "").includes(EXEMPT_MARKER) ||
    (lines[line - 2] ?? "").includes(EXEMPT_MARKER)

  const lineOf = (node: ts.Node) =>
    sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1

  const record = (
    node: ts.Node,
    key: string,
    shape: StyleShape,
    text: string
  ) => {
    const line = lineOf(node)
    if (exemptLine(line)) return
    findings.push({
      file: filePath,
      line,
      key,
      shape,
      text: text.replace(/\s+/g, " ").trim().slice(0, 120),
    })
  }

  const visit = (node: ts.Node): void => {
    if (
      ts.isJsxAttribute(node) &&
      node.name.getText(sourceFile) === "style" &&
      node.initializer
    ) {
      const { initializer } = node
      const expression = ts.isJsxExpression(initializer)
        ? initializer.expression
        : undefined

      if (expression && ts.isObjectLiteralExpression(expression)) {
        const { key, shape } = describeObject(expression)
        record(node, key, shape, initializer.getText(sourceFile))
      } else {
        const shape: StyleShape =
          expression &&
          (ts.isIdentifier(expression) ||
            ts.isPropertyAccessExpression(expression))
            ? "passthrough"
            : "expression"
        record(
          node,
          SHAPE_TOKEN[shape]!,
          shape,
          initializer.getText(sourceFile)
        )
      }
    }

    // `<style>` / `<style>{`...`}</style>` — a stylesheet in the tree. Keyed by
    // a constant token, not its CSS: the gate is about the tag existing, so
    // editing the rules inside an already-baselined block should not fire it.
    if (
      (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
      node.tagName.getText(sourceFile) === "style"
    ) {
      record(node, SHAPE_TOKEN.element!, "element", "<style> element")
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
   * File → the inline styles it is known to contain, as sorted property-name
   * keys. Not line numbers, so moving code inside a file does not churn the
   * baseline.
   */
  files: Record<string, string[]>
}

/** file → sorted list of findings' keys. */
function groupKeys(findings: Finding[]): Map<string, string[]> {
  const grouped = new Map<string, string[]>()
  for (const finding of findings) {
    const bucket = grouped.get(finding.file) ?? []
    bucket.push(finding.key)
    grouped.set(finding.file, bucket)
  }
  for (const bucket of grouped.values()) bucket.sort()
  return grouped
}

export function buildDebtFile(findings: Finding[]): DebtFile {
  const files: Record<string, string[]> = {}
  for (const [file, keys] of [...groupKeys(findings)].sort(([a], [b]) =>
    a.localeCompare(b)
  )) {
    files[file] = keys
  }
  return {
    note:
      "Inline styles in packages/react/src — `style={...}` props and `<style>` elements that " +
      "should be Tailwind classes instead. Enforced by .scripts/check-inline-styles.ts. Each " +
      "entry is the style's sorted property names. This list may only shrink: convert a style " +
      'to classes and remove it from here (or run "--update"), never add one. src/ui/ is out ' +
      "of scope (third-party primitive wrappers).",
    total: findings.length,
    files,
  }
}

export interface CheckResult {
  /** Inline styles this branch introduces — the blocking set. */
  added: Finding[]
  /** file → baseline keys that no longer exist. Delete these. */
  fixed: Record<string, string[]>
  /** Baseline entries for files that no longer exist (or have no findings). */
  staleFiles: string[]
  /** Total findings across the codebase right now. */
  total: number
  /** Total recorded in the baseline. */
  baselineTotal: number
}

export function check(findings: Finding[], baseline: DebtFile): CheckResult {
  const current = groupKeys(findings)
  const added: Finding[] = []

  // Consume the baseline as a multiset per file: a finding is new only if the
  // baseline has no unclaimed copy of that exact key in that exact file.
  const remaining = new Map<string, Map<string, number>>()
  for (const [file, keys] of Object.entries(baseline.files)) {
    const counts = new Map<string, number>()
    for (const key of keys) counts.set(key, (counts.get(key) ?? 0) + 1)
    remaining.set(file, counts)
  }

  for (const finding of findings) {
    const counts = remaining.get(finding.file)
    const left = counts?.get(finding.key) ?? 0
    if (left > 0) counts!.set(finding.key, left - 1)
    else added.push(finding)
  }

  const fixed: Record<string, string[]> = {}
  const staleFiles: string[] = []
  for (const [file, counts] of remaining) {
    const leftover = [...counts.entries()].flatMap(([key, count]) =>
      Array.from({ length: count }, () => key)
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

const SHAPE_LABEL: Record<StyleShape, string> = {
  static: "all values constant",
  mixed: "some values constant",
  dynamic: "all values dynamic",
  "css-variable": "sets a CSS custom property",
  passthrough: "forwarded from props",
  expression: "computed",
  element: "<style> element",
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
        `    ${finding.line}: ${finding.key} (${SHAPE_LABEL[finding.shape]})`
      )
    }
  }
}

/** Repo-root-relative path, which is what GitHub annotations need. */
const repoPath = (f: Finding) => `packages/react/${f.file}`

/** The one-line "what to do about it" for a single finding. */
export function fixHint(finding: Finding): string {
  switch (finding.shape) {
    case "static":
      return "Every value here is a constant — express it as Tailwind classes."
    case "mixed":
      return "The constant values here belong in Tailwind classes; keep only the dynamic ones inline."
    case "element":
      return "Move these rules into a Tailwind layer or a component class instead of a `<style>` tag."
    case "passthrough":
      return "Forward `className` instead of `style`, so consumers style through the design tokens."
    default:
      return "If this value is genuinely dynamic, keep it inline and say why."
  }
}

/**
 * Workflow-command annotations, so each offending line is flagged inline on the
 * PR's Files tab instead of only inside the job log. Newlines must be encoded
 * as `%0A`, and the file path must be relative to the repo root.
 */
export function annotations(added: Finding[]): string[] {
  return added.map((f) => {
    const message =
      `Inline style: ${f.key} (${SHAPE_LABEL[f.shape]}). ` +
      `${fixHint(f)} ` +
      `If it must stay inline, add a "${EXEMPT_MARKER}" comment on this line with the reason.`
    return (
      `::error file=${repoPath(f)},line=${f.line},` +
      `title=Inline style::${message.replace(/\r?\n/g, "%0A")}`
    )
  })
}

/**
 * Markdown for the PR comment. Leads with the all-constant cases, because those
 * are a mechanical Tailwind conversion rather than a design decision.
 */
export function commentMarkdown(result: CheckResult): string {
  const { added } = result
  if (added.length === 0) {
    return [
      "## ✅ No inline styles added",
      "",
      `Styling in this PR comes from Tailwind classes. Codebase total unchanged at **${result.total}**.`,
    ].join("\n")
  }

  const convertible = added.filter(
    (f) => f.shape === "static" || f.shape === "mixed"
  )
  const rest = added.filter((f) => f.shape !== "static" && f.shape !== "mixed")
  const lines = [
    `## ❌ ${added.length} inline style${added.length === 1 ? "" : "s"} added`,
    "",
    "An inline `style` bypasses the design tokens, cannot be overridden by a consumer's class, and is invisible to the Tailwind build — so it gets no theming, no responsive variants and no purging.",
    "",
  ]

  if (convertible.length > 0) {
    lines.push(
      `### ${convertible.length} with constant values — convert to classes`,
      "",
      "| Where | Style | |",
      "| --- | --- | --- |",
      ...convertible.map(
        (f) =>
          `| \`${f.file}:${f.line}\` | \`${f.key}\` | ${SHAPE_LABEL[f.shape]} |`
      ),
      ""
    )
  }

  if (rest.length > 0) {
    lines.push(
      `### ${rest.length} other${rest.length === 1 ? "" : "s"}`,
      "",
      "| Where | Style | |",
      "| --- | --- | --- |",
      ...rest.map(
        (f) =>
          `| \`${f.file}:${f.line}\` | \`${f.key}\` | ${SHAPE_LABEL[f.shape]} |`
      ),
      ""
    )
  }

  lines.push(
    "<details><summary>If a style genuinely must be inline</summary>",
    "",
    "Measured pixel offsets, data-driven colours and `${percentage}%` widths cannot be expressed as classes and are fine inline. " +
      `Put \`${EXEMPT_MARKER}\` in a comment on that line **with the reason** — it lands in the diff, so a reviewer can judge the claim.`,
    "</details>",
    "",
    `<sub>Each line is also annotated inline on the Files tab. Full inventory: \`pnpm --filter @factorialco/f0-react run check:inline-styles --report\`</sub>`
  )
  return lines.join("\n")
}

/**
 * Print the verdict and return whether it passed. Shared with
 * pre-push-preflight.ts so the local and CI messages cannot drift.
 */
export function reportResult(result: CheckResult): boolean {
  consola.log(
    `Inline styles: ${result.total} (baseline ${result.baselineTotal})`
  )

  let failed = false

  if (result.added.length > 0) {
    failed = true

    // Inline annotations first, so GitHub attaches them to the diff even if
    // nobody reads the rest of the log.
    // Raw stdout, not consola: a workflow command must start the line exactly,
    // with no prefix or colour codes, or GitHub ignores it.
    if (process.env.GITHUB_ACTIONS === "true") {
      for (const line of annotations(result.added)) {
        process.stdout.write(`${line}\n`)
      }
    }

    consola.log("")
    consola.error(
      `${result.added.length} new inline style(s) — styling must come from ` +
        "Tailwind classes, not a style prop:"
    )
    for (const finding of result.added) {
      consola.log(
        `    ${finding.file}:${finding.line} — ${finding.key} ` +
          `(${SHAPE_LABEL[finding.shape]})`
      )
      consola.log(`      ↳ ${fixHint(finding)}`)
    }
    consola.log("")
    consola.log(
      `  If a style genuinely must be inline — a measured offset, a data-driven ` +
        `colour, a \${percentage}% width — put "${EXEMPT_MARKER}" in a comment ` +
        "on that line with the reason."
    )
  }

  const fixedFiles = Object.keys(result.fixed)
  if (fixedFiles.length > 0 || result.staleFiles.length > 0) {
    failed = true
    const fixedCount = Object.values(result.fixed).reduce(
      (sum, keys) => sum + keys.length,
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
      consola.log(`    ${file}: file gone or fully converted`)
    }
    consola.log("")
    consola.log(
      '  Run "pnpm --filter @factorialco/f0-react run check:inline-styles --update".'
    )
  }

  if (failed) return false

  consola.log("")
  consola.success("No new inline styles.")
  return true
}

/** Run the gate end to end. Used by pre-push-preflight.ts. */
export function runGate(): boolean {
  return reportResult(check(scan(), readBaseline()))
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
      `Wrote ${payload.total} inline style(s) across ` +
        `${Object.keys(payload.files).length} file(s) to ` +
        ".scripts/inline-styles-debt.json"
    )
    process.exit(0)
  }

  if (wants("--report")) {
    if (wants("--json")) {
      consola.log(JSON.stringify({ total: findings.length, findings }, null, 2))
      process.exit(0)
    }
    const files = new Set(findings.map((f) => f.file)).size
    const byShape = findings.reduce<Record<string, number>>((acc, f) => {
      acc[f.shape] = (acc[f.shape] ?? 0) + 1
      return acc
    }, {})
    consola.log(`${findings.length} inline style(s) across ${files} file(s):\n`)
    printInventory(findings)
    consola.log("")
    for (const [shape, count] of Object.entries(byShape).sort(
      ([, a], [, b]) => b - a
    )) {
      consola.log(`  ${count}\t${shape}`)
    }
    process.exit(0)
  }

  const result = check(findings, readBaseline())

  if (wants("--json")) {
    consola.log(JSON.stringify(result, null, 2))
    process.exit(result.added.length > 0 ? 1 : 0)
  }

  // Plain stdout, not consola: the workflow captures this verbatim as the
  // comment body.
  if (wants("--comment")) {
    process.stdout.write(`${commentMarkdown(result)}\n`)
    process.exit(0)
  }

  if (wants("--verbose")) {
    consola.log(
      `Inline styles: ${result.total} (baseline ${result.baselineTotal})\n`
    )
    printInventory(findings)
  }

  process.exit(reportResult(result) ? 0 : 1)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (process.argv[1] && /check-inline-styles\.(ts|js)$/.test(process.argv[1])) {
  main()
}
