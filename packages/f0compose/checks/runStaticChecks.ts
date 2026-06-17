/**
 * Static checks for prototype files. AST-based, complementary to `tsc`.
 *
 * Validates:
 *  - imports come only from the allowlist
 *  - no `any` (explicit or via `as any`)
 *  - colors use only `f1-*` tokens (no `text-blue-500`, `bg-#abc`, ...)
 *  - props referenced on F0/One components actually exist in the registry
 *    (skipped when the component's `propsExtractionIncomplete` is true)
 *  - heuristic: arrays inline with > 3 elements should come from @/fixtures
 */

import { parse } from "@babel/parser"
import traverseDefault from "@babel/traverse"
import * as t from "@babel/types"
import { execFileSync } from "node:child_process"
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { dirname, extname, join, relative, resolve } from "node:path"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const traverse: typeof traverseDefault =
  (traverseDefault as any).default ?? traverseDefault

const ALLOWED_BARE = [
  "react",
  "react-dom",
  "react-dom/client",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-router-dom",
  "@factorialco/f0-react",
  "@factorialco/f0-core",
] as const

const ALLOWED_PATH_ALIASES = [
  "@/fixtures",
  "@/lib",
  "@/prototypes",
  "@/shell",
] as const

const FORBIDDEN_COLOR_PATTERNS = [
  /\b(text|bg|border|ring|fill|stroke|from|to|via)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\b/,
  /#[0-9a-fA-F]{3,8}\b/,
]

const BIG_LIST_COMPONENTS = new Set([
  "OneDataCollection",
  "F0DataChart",
  "F0AnalyticsDashboard",
  "OneCalendar",
])

export type Violation = {
  file: string
  line: number
  column: number
  rule: string
  message: string
}

export type CheckResult = {
  ok: boolean
  filesChecked: number
  violations: Violation[]
}

type RegistryShape = {
  components: Array<{
    name: string
    props: Array<{ name: string }>
    propsExtractionIncomplete?: boolean
  }>
}

export function runStaticChecks(
  target: string,
  registryPath: string
): CheckResult {
  const registry = loadRegistry(registryPath)
  const componentNames = new Set(registry.components.map((c) => c.name))
  const propsByComponent = new Map<string, Set<string>>()
  const componentsWithIncompleteProps = new Set<string>()
  for (const c of registry.components) {
    propsByComponent.set(c.name, new Set(c.props.map((p) => p.name)))
    if (c.propsExtractionIncomplete) componentsWithIncompleteProps.add(c.name)
  }

  const files = collectFiles(target)
  const violations: Violation[] = []

  violations.push(...runReplicatedTrainingsAuditCheck(files, registryPath))

  for (const file of files) {
    const content = readFileSync(file, "utf8")
    let ast
    try {
      ast = parse(content, {
        sourceType: "module",
        plugins: ["typescript", "jsx", "decorators-legacy"],
      })
    } catch (err) {
      violations.push({
        file,
        line: 1,
        column: 1,
        rule: "parse-error",
        message: `Failed to parse: ${(err as Error).message}`,
      })
      continue
    }

    const f0ImportedNames = new Set<string>()

    traverse(ast, {
      ImportDeclaration(path) {
        const source = path.node.source.value
        const isRelative = source.startsWith(".") || source.startsWith("/")
        const isBareAllowed = ALLOWED_BARE.some(
          (a) => source === a || source.startsWith(a + "/")
        )
        const isAliasAllowed = ALLOWED_PATH_ALIASES.some(
          (a) => source === a || source.startsWith(a + "/")
        )
        if (!isRelative && !isBareAllowed && !isAliasAllowed) {
          violations.push({
            file,
            line: path.node.loc?.start.line ?? 1,
            column: path.node.loc?.start.column ?? 0,
            rule: "import-allowlist",
            message:
              `Import "${source}" is not allowed. Allowed: ` +
              [...ALLOWED_BARE, ...ALLOWED_PATH_ALIASES, "relative paths"].join(
                ", "
              ),
          })
        }
        if (
          source === "@factorialco/f0-react" ||
          source.startsWith("@factorialco/f0-react/")
        ) {
          for (const spec of path.node.specifiers) {
            if (t.isImportSpecifier(spec) && t.isIdentifier(spec.imported)) {
              if (componentNames.has(spec.imported.name)) {
                f0ImportedNames.add(spec.local.name)
              }
            }
          }
        }
      },

      TSAnyKeyword(path) {
        violations.push({
          file,
          line: path.node.loc?.start.line ?? 1,
          column: path.node.loc?.start.column ?? 0,
          rule: "no-any",
          message:
            "Avoid `any`. f0 components are strictly typed; the code you write should be too.",
        })
      },

      TSAsExpression(path) {
        const ann = path.node.typeAnnotation
        if (t.isTSAnyKeyword(ann)) {
          violations.push({
            file,
            line: path.node.loc?.start.line ?? 1,
            column: path.node.loc?.start.column ?? 0,
            rule: "no-as-any",
            message: "`as any` is forbidden — express the real type.",
          })
        }
      },

      JSXOpeningElement(path) {
        const nameNode = path.node.name
        if (!t.isJSXIdentifier(nameNode)) return
        const localName = nameNode.name
        if (!f0ImportedNames.has(localName)) return
        const componentName = componentNames.has(localName) ? localName : null
        if (!componentName) return
        if (componentsWithIncompleteProps.has(componentName)) return
        const known = propsByComponent.get(componentName)
        if (!known || known.size === 0) return
        for (const attr of path.node.attributes) {
          if (!t.isJSXAttribute(attr)) continue
          if (!t.isJSXIdentifier(attr.name)) continue
          const propName = attr.name.name
          if (
            propName === "key" ||
            propName === "ref" ||
            propName.startsWith("data-") ||
            propName.startsWith("aria-") ||
            propName === "className" ||
            propName === "style" ||
            propName === "id"
          )
            continue
          if (!known.has(propName)) {
            violations.push({
              file,
              line: attr.loc?.start.line ?? 1,
              column: attr.loc?.start.column ?? 0,
              rule: "prop-not-in-registry",
              message:
                `Prop "${propName}" not found on ${componentName}. ` +
                `Available: ${[...known].slice(0, 8).join(", ")}${known.size > 8 ? ", ..." : ""}.`,
            })
          }
        }
      },

      JSXAttribute(path) {
        if (!t.isJSXIdentifier(path.node.name)) return
        if (path.node.name.name !== "className") return
        const value = path.node.value
        let stringValue: string | null = null
        if (t.isStringLiteral(value)) stringValue = value.value
        else if (
          t.isJSXExpressionContainer(value) &&
          (t.isStringLiteral(value.expression) ||
            t.isTemplateLiteral(value.expression))
        ) {
          if (t.isStringLiteral(value.expression)) {
            stringValue = value.expression.value
          } else {
            stringValue = value.expression.quasis
              .map((q) => q.value.cooked || q.value.raw)
              .join(" ")
          }
        }
        if (!stringValue) return
        for (const pattern of FORBIDDEN_COLOR_PATTERNS) {
          const m = stringValue.match(pattern)
          if (m) {
            violations.push({
              file,
              line: path.node.loc?.start.line ?? 1,
              column: path.node.loc?.start.column ?? 0,
              rule: "no-raw-colors",
              message: `Raw color "${m[0]}" — use f1-* tokens (e.g., text-f1-foreground, bg-f1-background, border-f1-border).`,
            })
          }
        }
      },

      JSXExpressionContainer(path) {
        const expr = path.node.expression
        if (!t.isArrayExpression(expr)) return
        if (expr.elements.length <= 3) return
        const parent = path.parent
        if (!t.isJSXAttribute(parent)) return
        const propName = t.isJSXIdentifier(parent.name)
          ? parent.name.name
          : null
        const grandparent = path.parentPath?.parent
        if (!grandparent || !t.isJSXOpeningElement(grandparent)) return
        const compName = t.isJSXIdentifier(grandparent.name)
          ? grandparent.name.name
          : null
        if (!compName || !BIG_LIST_COMPONENTS.has(compName)) return
        if (!propName) return
        violations.push({
          file,
          line: path.node.loc?.start.line ?? 1,
          column: path.node.loc?.start.column ?? 0,
          rule: "anti-empty-mock",
          message:
            `Inline array of ${expr.elements.length} items passed as ${compName}.${propName}. ` +
            `Move to @/fixtures and import — prototypes must use curated mocks.`,
        })
      },
    })
  }

  return {
    ok: violations.length === 0,
    filesChecked: files.length,
    violations,
  }
}

function runReplicatedTrainingsAuditCheck(
  files: string[],
  registryPath: string
): Violation[] {
  const pkgRoot = resolve(dirname(registryPath), "..")
  const repoRoot = resolve(pkgRoot, "..", "..")
  const changedFiles = collectChangedGitFiles(repoRoot)
  if (changedFiles.size === 0) return []

  const changedTrainingFiles = files
    .map((file) => ({ file, repoPath: toRepoPath(repoRoot, file) }))
    .filter(({ repoPath }) => changedFiles.has(repoPath))
    .filter(({ repoPath }) =>
      repoPath.startsWith("packages/f0compose/src/prototypes/trainings/")
    )

  if (changedTrainingFiles.length === 0) return []

  const changedAuditPaths = [...changedFiles].filter(
    (file) =>
      file.startsWith("packages/f0compose/checks/") &&
      file.endsWith("-audit.md")
  )
  const changedAudits = changedAuditPaths.map((file) => ({
    file,
    content: readChangedAudit(repoRoot, file),
  }))

  if (changedAudits.length === 0) {
    return changedTrainingFiles.map(({ file, repoPath }) =>
      auditViolation(
        file,
        `Changed replicated Trainings file "${repoPath}" requires a changed audit markdown in packages/f0compose/checks/ before running this check.`
      )
    )
  }

  return changedTrainingFiles.flatMap(({ file, repoPath }) => {
    const matchingAudits = changedAudits.filter(({ content }) =>
      auditCoversTrainingFile(content, repoPath)
    )
    if (matchingAudits.length === 0) {
      return [
        auditViolation(
          file,
          `Changed replicated Trainings file "${repoPath}" is not covered by any changed audit. The audit must cite the exact file path.`
        ),
      ]
    }

    const matchingAudit = matchingAudits.find(
      ({ content }) =>
        requiredAuditMarkers.every((marker) => content.includes(marker)) &&
        content.includes("frontend/src/modules/trainings")
    )
    if (!matchingAudit) {
      const auditNames = matchingAudits.map(({ file }) => file).join(", ")
      return [
        auditViolation(
          file,
          `Changed replicated Trainings file "${repoPath}" is covered by audit file(s) without the required upstream parity gate: ${auditNames}.`
        ),
      ]
    }

    const missingSections = requiredAuditMarkers.filter(
      (marker) => !matchingAudit.content.includes(marker)
    )
    if (missingSections.length > 0) {
      return [
        auditViolation(
          file,
          `Audit "${matchingAudit.file}" is missing required parity sections: ${missingSections.join(
            ", "
          )}.`
        ),
      ]
    }

    if (!matchingAudit.content.includes("frontend/src/modules/trainings")) {
      return [
        auditViolation(
          file,
          `Audit "${matchingAudit.file}" must cite the upstream Trainings module source under frontend/src/modules/trainings.`
        ),
      ]
    }

    return []
  })
}

const requiredAuditMarkers = [
  "## Current Delta Parity Gate",
  "### Scope",
  "### Upstream Sources Checked",
  "### Local Files Checked",
  "### Local vs Upstream Diff",
  "### Verification",
]

function auditCoversTrainingFile(content: string, repoPath: string): boolean {
  const packagePath = repoPath.replace("packages/f0compose/", "")
  return content.includes(repoPath) || content.includes(packagePath)
}

function auditViolation(file: string, message: string): Violation {
  return {
    file,
    line: 1,
    column: 1,
    rule: "upstream-parity-audit",
    message,
  }
}

function readChangedAudit(repoRoot: string, repoPath: string): string {
  const absolutePath = resolve(repoRoot, repoPath)
  if (!existsSync(absolutePath)) return ""
  return readFileSync(absolutePath, "utf8")
}

function collectChangedGitFiles(repoRoot: string): Set<string> {
  return new Set([
    ...gitLines(repoRoot, ["diff", "--name-only"]),
    ...gitLines(repoRoot, ["diff", "--name-only", "--cached"]),
    ...gitLines(repoRoot, ["ls-files", "--others", "--exclude-standard"]),
    ...gitBaseDiffLines(repoRoot),
  ])
}

function gitBaseDiffLines(repoRoot: string): string[] {
  const ref = process.env.F0COMPOSE_PARITY_BASE
  if (!ref) return []
  if (gitLines(repoRoot, ["rev-parse", "--verify", ref]).length === 0) {
    return []
  }
  const base = gitOutput(repoRoot, ["merge-base", "HEAD", ref])
  if (!base) return []
  return gitLines(repoRoot, ["diff", "--name-only", `${base}...HEAD`])
}

function gitLines(repoRoot: string, args: string[]): string[] {
  const output = gitOutput(repoRoot, args)
  if (!output) return []
  return output
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
}

function gitOutput(repoRoot: string, args: string[]): string {
  try {
    return execFileSync("git", args, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim()
  } catch {
    return ""
  }
}

function toRepoPath(repoRoot: string, file: string): string {
  return relative(repoRoot, file).split("\\").join("/")
}

function loadRegistry(registryPath: string): RegistryShape {
  if (!existsSync(registryPath)) {
    throw new Error(
      `Registry not found at ${registryPath}. Run \`pnpm --filter @factorialco/f0compose generate:manifest\` first.`
    )
  }
  return JSON.parse(readFileSync(registryPath, "utf8")) as RegistryShape
}

function collectFiles(target: string): string[] {
  const out: string[] = []
  const stat = statSync(target)
  if (stat.isFile()) {
    if (isProtoFile(target)) out.push(target)
    return out
  }
  walk(target, out)
  return out
}

function walk(dir: string, out: string[]): void {
  for (const name of readdirSync(dir)) {
    if (
      name === "node_modules" ||
      name === "__tests__" ||
      name === "__stories__"
    )
      continue
    const full = join(dir, name)
    let s
    try {
      s = statSync(full)
    } catch {
      continue
    }
    if (s.isDirectory()) walk(full, out)
    else if (s.isFile() && isProtoFile(full)) out.push(full)
  }
}

function isProtoFile(file: string): boolean {
  const ext = extname(file)
  return ext === ".ts" || ext === ".tsx"
}

export function formatViolations(result: CheckResult, root: string): string {
  if (result.ok) return `✓ ${result.filesChecked} file(s) checked, no issues.`
  const lines = [
    `✗ ${result.violations.length} violation(s) across ${result.filesChecked} file(s):`,
    "",
  ]
  for (const v of result.violations) {
    lines.push(`  ${relative(root, v.file)}:${v.line}:${v.column}  [${v.rule}]`)
    lines.push(`    ${v.message}`)
  }
  return lines.join("\n")
}
