#!/usr/bin/env tsx
/**
 * check-lint-debt.ts
 *
 * Gate for the lint rules that are on as `"warn"` in `.oxlintrc.json` (the
 * RATCHET group). Those rules have more hits than one PR can fix, so instead
 * of turning them off they stay on and this script holds the line:
 *
 *   - `lint-debt.json` records, per file and per rule, how many warnings exist.
 *     The list may only ever shrink.
 *   - A file with more warnings for a rule than its baseline fails the check.
 *     That is the blocking half: a PR cannot add to the debt.
 *   - A file with fewer warnings than its baseline also fails, with the fix
 *     being to run `--update`. That is what locks each win in. A run over
 *     explicit paths is the exception: refusing a commit for improving the
 *     code is the wrong lesson, and CI asks for the update anyway.
 *   - Any diagnostic with severity `error` fails as well, so this check can
 *     stand alone.
 *
 * `pnpm lint` runs oxlint with `--quiet`, so developers see only errors there.
 * The warnings still show in editors for rules that oxlint runs natively; rules
 * from JS plugins (sonarjs, eslint-plugin-react) do not surface in editors.
 *
 * Usage:
 *   tsx .scripts/check-lint-debt.ts             # gate over src/ (exit 1 on drift)
 *   tsx .scripts/check-lint-debt.ts src/a.tsx   # gate over these files only
 *   tsx .scripts/check-lint-debt.ts --verbose   # + every warning
 *   tsx .scripts/check-lint-debt.ts --json      # machine-readable
 *   tsx .scripts/check-lint-debt.ts --update    # rewrite the baseline
 *
 * The pre-commit hook passes the staged paths, the same way the format and lint
 * hooks do. It cannot ask git itself: a git hook runs with GIT_DIR and
 * GIT_INDEX_FILE set, so a `git diff --cached` from another cwd reads the wrong
 * index and silently comes back empty.
 *
 * Under GitHub Actions it also emits `::error file=,line=` annotations for the
 * warnings a PR adds, which puts them inline on the PR's Files tab.
 */
import { spawnSync } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import consola from "consola"

const PKG_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const DEBT_FILE = resolve(PKG_DIR, ".scripts/lint-debt.json")
const OXLINT = resolve(PKG_DIR, "node_modules/.bin/oxlint")

const LINTED_EXTENSIONS = /\.(js|jsx|ts|tsx)$/

export interface Finding {
  /** Path relative to the package root, "/" separators: `src/x/y.tsx`. */
  file: string
  /** Rule id as oxlint prints it in the config: `sonarjs/cognitive-complexity`. */
  rule: string
  line: number
  message: string
}

/** Rule → count. */
export type RuleCounts = Record<string, number>

export interface DebtFile {
  note: string
  total: number
  rules: RuleCounts
  files: Record<string, RuleCounts>
}

interface OxlintDiagnostic {
  message: string
  code: string
  severity: "error" | "warning" | "advice"
  filename: string
  labels: { span: { line: number; column: number } }[]
}

interface OxlintOutput {
  diagnostics: OxlintDiagnostic[]
}

/** `sonarjs(cognitive-complexity)` → `sonarjs/cognitive-complexity`. */
export function ruleIdFromCode(code: string): string {
  const match = /^([^(]+)\((.+)\)$/.exec(code)
  if (!match) {
    return code
  }
  const [, plugin, rule] = match
  // oxlint's native plugins print their npm-style name in the JSON output.
  const aliases: Record<string, string> = {
    eslint: "",
    "typescript-eslint": "typescript",
    "eslint-plugin-react": "react",
    "eslint-plugin-react-hooks": "react-hooks",
    "eslint-plugin-import": "import",
    "eslint-plugin-unicorn": "unicorn",
    "eslint-plugin-promise": "promise",
    "eslint-plugin-jsx-a11y": "jsx-a11y",
    "eslint-plugin-vitest": "vitest",
  }
  const prefix = plugin in aliases ? aliases[plugin] : plugin
  return prefix ? `${prefix}/${rule}` : rule
}

const toPosix = (path: string) => path.split(sep).join("/")

/**
 * Run oxlint once over `paths` (package-relative) and split the diagnostics
 * into errors and warnings.
 */
export function runOxlint(paths: string[]): {
  errors: Finding[]
  warnings: Finding[]
} {
  const result = spawnSync(
    OXLINT,
    ["--type-aware", "--format", "json", ...paths],
    { cwd: PKG_DIR, encoding: "utf-8", maxBuffer: 1024 * 1024 * 256 }
  )
  if (result.error) {
    throw result.error
  }
  let parsed: OxlintOutput
  try {
    parsed = JSON.parse(result.stdout) as OxlintOutput
  } catch {
    throw new Error(
      `oxlint did not return JSON.\n${result.stdout}\n${result.stderr}`
    )
  }
  const errors: Finding[] = []
  const warnings: Finding[] = []
  for (const d of parsed.diagnostics) {
    const finding: Finding = {
      file: toPosix(d.filename),
      rule: ruleIdFromCode(d.code),
      line: d.labels[0]?.span.line ?? 1,
      message: d.message,
    }
    if (d.severity === "error") {
      errors.push(finding)
    } else if (d.severity === "warning") {
      warnings.push(finding)
    }
  }
  return { errors, warnings }
}

/** Of the paths given, the ones inside src/ that oxlint reads. */
export function lintablePaths(paths: string[]): string[] {
  return paths
    .map((path) => toPosix(path))
    .filter((path) => path.startsWith("src/") && LINTED_EXTENSIONS.test(path))
}

/**
 * Distinct values, order preserved. Written with an object rather than a Set
 * because the .scripts tsconfig targets ES5, where iterating one needs
 * `downlevelIteration`.
 */
function unique(values: string[]): string[] {
  const seen: Record<string, true> = {}
  const out: string[] = []
  for (const value of values) {
    if (seen[value]) {
      continue
    }
    seen[value] = true
    out.push(value)
  }
  return out
}

export function countByFile(warnings: Finding[]): Record<string, RuleCounts> {
  const files: Record<string, RuleCounts> = {}
  for (const w of warnings) {
    const counts = (files[w.file] ??= {})
    counts[w.rule] = (counts[w.rule] ?? 0) + 1
  }
  return files
}

export function buildDebtFile(warnings: Finding[]): DebtFile {
  const files = countByFile(warnings)
  const rules: RuleCounts = {}
  for (const w of warnings) {
    rules[w.rule] = (rules[w.rule] ?? 0) + 1
  }
  const sortedFiles: Record<string, RuleCounts> = {}
  for (const file of Object.keys(files).sort()) {
    sortedFiles[file] = Object.fromEntries(
      Object.entries(files[file]).sort(([a], [b]) => a.localeCompare(b))
    )
  }
  return {
    note: 'Warnings from the RATCHET rules in .oxlintrc.json, per file and per rule. Enforced by .scripts/check-lint-debt.ts. This list may only shrink: fix a warning and run "--update", never add one.',
    total: warnings.length,
    rules: Object.fromEntries(
      Object.entries(rules).sort(([a], [b]) => a.localeCompare(b))
    ),
    files: sortedFiles,
  }
}

export interface Drift {
  file: string
  rule: string
  baseline: number
  current: number
}

export interface CheckResult {
  /** Files whose count for a rule went up: the blocking set. */
  added: Drift[]
  /** The warnings behind `added`, for annotations. */
  addedFindings: Finding[]
  /** Files whose count went down: run --update to lock it in. */
  fixed: Drift[]
  /** Baseline entries for files that no longer exist. Only in full mode. */
  staleFiles: string[]
  total: number
  baselineTotal: number
}

/**
 * Compare the warnings against the baseline. With `scope`, only those files
 * are judged: files outside it are neither counted nor reported
 * as stale, since they were not linted.
 */
export function check(
  warnings: Finding[],
  baseline: DebtFile,
  scope?: string[]
): CheckResult {
  const current = countByFile(warnings)
  const inScope = scope ? new Set(scope) : undefined
  const files = unique([
    ...Object.keys(current),
    ...Object.keys(baseline.files).filter(
      (file) => !inScope || inScope.has(file)
    ),
  ])

  const added: Drift[] = []
  const fixed: Drift[] = []
  const staleFiles: string[] = []
  for (const file of files.sort()) {
    const now = current[file] ?? {}
    const before = baseline.files[file] ?? {}
    if (!scope && !(file in current) && !existsSync(resolve(PKG_DIR, file))) {
      staleFiles.push(file)
      continue
    }
    for (const rule of unique([...Object.keys(now), ...Object.keys(before)])) {
      const drift = {
        file,
        rule,
        baseline: before[rule] ?? 0,
        current: now[rule] ?? 0,
      }
      if (drift.current > drift.baseline) {
        added.push(drift)
      } else if (drift.current < drift.baseline) {
        fixed.push(drift)
      }
    }
  }

  const addedKeys = new Set(added.map((d) => `${d.file}\0${d.rule}`))
  const addedFindings = warnings.filter((w) =>
    addedKeys.has(`${w.file}\0${w.rule}`)
  )

  return {
    added,
    addedFindings,
    fixed,
    staleFiles,
    total: warnings.length,
    baselineTotal: baseline.total,
  }
}

function readBaseline(): DebtFile {
  return JSON.parse(readFileSync(DEBT_FILE, "utf-8")) as DebtFile
}

export function annotations(findings: Finding[]): string[] {
  return findings.map(
    (f) =>
      `::error file=packages/react/${f.file},line=${f.line},title=${f.rule}::${f.message}`
  )
}

function printFindings(findings: Finding[]): void {
  for (const f of findings) {
    consola.log(`  ${f.file}:${f.line}  ${f.rule}  ${f.message}`)
  }
}

/** Errors are never tolerated: print them and say so. */
function reportErrors(errors: Finding[]): boolean {
  if (errors.length === 0) {
    return true
  }
  consola.error(`${errors.length} lint error(s):`)
  printFindings(errors)
  return false
}

/** Warnings a file gained over its baseline: the blocking half. */
function reportAdded(result: CheckResult): boolean {
  if (result.added.length === 0) {
    return true
  }
  consola.error(
    "New lint debt. These files have more warnings than .scripts/lint-debt.json allows:"
  )
  for (const d of result.added) {
    consola.log(`  ${d.file}  ${d.rule}: ${d.baseline} → ${d.current}`)
  }
  printFindings(result.addedFindings)
  consola.log(
    "\nFix the new warnings. If the function was already over the limit and you only moved it, run `pnpm check:lint-debt --update` and explain in the PR."
  )
  if (process.env.GITHUB_ACTIONS) {
    for (const line of annotations(result.addedFindings)) {
      process.stdout.write(`${line}\n`)
    }
  }
  return false
}

/** Debt that is gone but still listed: the baseline needs rewriting. */
function reportFixed(result: CheckResult): boolean {
  if (result.fixed.length === 0 && result.staleFiles.length === 0) {
    return true
  }
  consola.warn(
    "Lint debt went down, but the baseline still lists it. Run `pnpm check:lint-debt --update` and commit .scripts/lint-debt.json:"
  )
  for (const d of result.fixed) {
    consola.log(`  ${d.file}  ${d.rule}: ${d.baseline} → ${d.current}`)
  }
  for (const file of result.staleFiles) {
    consola.log(`  ${file} (gone)`)
  }
  return false
}

/**
 * Print the verdict and return whether it passed. Shared with the CLI and the
 * tests so the messages cannot drift.
 *
 * `blockOnFixed` says whether a debt REDUCTION should fail. It must in CI,
 * which is what forces the baseline to shrink with the fix. In the pre-commit
 * hook it must not: blocking a commit for improving the code is the wrong
 * lesson, and CI asks for the same update anyway.
 */
export function reportResult(
  errors: Finding[],
  result: CheckResult,
  options: { blockOnFixed?: boolean } = {}
): boolean {
  const { blockOnFixed = true } = options
  const noErrors = reportErrors(errors)
  const noneAdded = reportAdded(result)
  const baselineFresh = reportFixed(result)
  const ok = noErrors && noneAdded && (baselineFresh || !blockOnFixed)

  if (ok) {
    consola.success(
      `Lint debt: ${result.total} warning(s) (baseline ${result.baselineTotal}), no new debt.`
    )
  }
  return ok
}

function main(): void {
  const args = process.argv.slice(2)
  const flags = new Set(args.filter((arg) => arg.startsWith("--")))
  const wants = (flag: string) => flags.has(flag)
  const given = args.filter((arg) => !arg.startsWith("--"))

  const scope = given.length > 0 ? lintablePaths(given) : undefined
  if (scope && scope.length === 0) {
    consola.success("Lint debt: none of those paths are linted.")
    process.exit(0)
  }

  const { errors, warnings } = runOxlint(scope ?? ["src/"])

  if (wants("--update")) {
    if (scope) {
      consola.error("--update needs the whole tree; drop the paths.")
      process.exit(1)
    }
    const payload = buildDebtFile(warnings)
    writeFileSync(DEBT_FILE, `${JSON.stringify(payload, null, 2)}\n`)
    spawnSync("pnpm", ["exec", "oxfmt", DEBT_FILE], {
      cwd: PKG_DIR,
      stdio: "ignore",
    })
    consola.success(
      `Wrote ${payload.total} warning(s) across ${Object.keys(payload.files).length} file(s) to .scripts/lint-debt.json`
    )
    process.exit(errors.length > 0 ? 1 : 0)
  }

  const result = check(warnings, readBaseline(), scope)

  if (wants("--json")) {
    consola.log(JSON.stringify({ errors, ...result }, null, 2))
    process.exit(errors.length > 0 || result.added.length > 0 ? 1 : 0)
  }

  if (wants("--verbose")) {
    consola.log(
      `Lint debt: ${result.total} (baseline ${result.baselineTotal})\n`
    )
    printFindings(warnings)
  }

  process.exit(reportResult(errors, result, { blockOnFixed: !scope }) ? 0 : 1)
}

// Run as a CLI only when invoked directly (not when imported by tests).
if (process.argv[1] && /check-lint-debt\.(ts|js)$/.test(process.argv[1])) {
  main()
}
