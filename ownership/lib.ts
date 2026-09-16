import fs from "node:fs"
import path from "node:path"
import { parse } from "yaml"

export const REPO_ROOT = path.resolve(import.meta.dirname, "..")
export const CODEOWNERS_FILE = path.join(REPO_ROOT, "CODEOWNERS")
export const BASE_FILE = path.join(import.meta.dirname, "CODEOWNERS.base")
export const TEAMS_FILE = path.join(import.meta.dirname, "teams.yml")

/**
 * Folders whose direct children are modules that MUST declare ownership
 * through a package.yml manifest. Paths are relative to the repo root.
 */
export const MANDATORY_MODULE_ROOTS = ["packages/react/src/sds"]

export const TEAM_PATTERN = /^@factorialco\/[a-z0-9][a-z0-9-]*$/

export interface Reviewer {
  team: string
  include?: string[]
}

export interface Manifest {
  metadata: {
    domain?: string
    owner: string
    reviewers?: Reviewer[]
  }
}

export const MANIFEST_TEMPLATE = `metadata:
  domain: <Domain>
  owner: "@factorialco/<team-slug>"
`

/** Directories that must contain a package.yml, relative to the repo root */
export function getModuleFolders(): string[] {
  return MANDATORY_MODULE_ROOTS.flatMap((root) => {
    const absRoot = path.join(REPO_ROOT, root)
    return fs
      .readdirSync(absRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map((entry) => path.join(root, entry.name))
  }).sort()
}

/**
 * Every package.yml under the mandatory roots (any depth, so nested
 * manifests can refine ownership), relative to the repo root. Sorted from
 * least to most specific: GitHub CODEOWNERS resolves with last-match-wins,
 * so deeper manifests must come later in the generated file.
 */
export function getManifestFiles(): string[] {
  const manifests: string[] = []
  const walk = (absDir: string) => {
    for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue
      const absPath = path.join(absDir, entry.name)
      if (entry.isDirectory()) walk(absPath)
      else if (entry.name === "package.yml") {
        manifests.push(path.relative(REPO_ROOT, absPath))
      }
    }
  }
  MANDATORY_MODULE_ROOTS.forEach((root) => walk(path.join(REPO_ROOT, root)))
  return manifests.sort((a, b) => {
    const depthDiff = a.split("/").length - b.split("/").length
    return depthDiff !== 0 ? depthDiff : a.localeCompare(b)
  })
}

export interface CodeownersRule {
  /** Path pattern, exactly as written in the CODEOWNERS file */
  pattern: string
  teams: string[]
}

/** Ownership rules of a CODEOWNERS body, with comments and blank lines dropped */
export function parseCodeowners(contents: string): CodeownersRule[] {
  return contents
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"))
    .map((line) => {
      const [pattern, ...teams] = line.split(/\s+/)
      return { pattern, teams }
    })
}

/** Leading segments of a pattern, up to the first one holding a glob */
function concretePrefix(pattern: string): string {
  const segments: string[] = []
  for (const segment of pattern.split("/")) {
    if (/[*?[\]]/.test(segment)) break
    segments.push(segment)
  }
  return segments.join("/")
}

export type PatternProblem = "unanchored" | "missing" | "not-a-directory"

/**
 * Why a CODEOWNERS path pattern can no longer own anything, or undefined when
 * it is fine. Patterns are plain strings that GitHub never validates: when a
 * directory is moved or renamed the rule keeps parsing but stops matching, and
 * its files silently fall back to the global owner.
 */
export function checkCodeownersPattern(pattern: string): PatternProblem | undefined {
  if (pattern === "*") return undefined // global fallback
  if (!pattern.startsWith("/")) return "unanchored"

  const relative = pattern.slice(1)
  const expectsDirectory = relative.endsWith("/")
  const target = expectsDirectory ? relative.slice(0, -1) : relative

  // A glob can't be resolved to a single path, so validate its fixed prefix —
  // enough to catch the directory it points into being moved away.
  const probe = concretePrefix(target)
  if (probe === "") return undefined

  const absolute = path.join(REPO_ROOT, probe)
  if (!fs.existsSync(absolute)) return "missing"
  if (probe === target && expectsDirectory && !fs.statSync(absolute).isDirectory()) {
    return "not-a-directory"
  }
  return undefined
}

export function loadManifest(manifestFile: string): Manifest {
  return parse(fs.readFileSync(path.join(REPO_ROOT, manifestFile), "utf8"))
}

export function getValidTeams(): string[] {
  return parse(fs.readFileSync(TEAMS_FILE, "utf8")).teams
}

function codeownersLinesFor(manifestFile: string): string[] {
  const moduleDir = path.dirname(manifestFile)
  const { metadata } = loadManifest(manifestFile)
  const owner = metadata.owner
  const reviewers = metadata.reviewers ?? []

  const moduleWideTeams = [
    owner,
    ...reviewers.filter((r) => !r.include?.length).map((r) => r.team),
  ]
  const lines = [`/${moduleDir}/ ${moduleWideTeams.join(" ")}`]

  // Group scoped reviewers by path so shared paths produce a single line
  const teamsByPath = new Map<string, string[]>()
  for (const reviewer of reviewers) {
    for (const include of reviewer.include ?? []) {
      const teams = teamsByPath.get(include) ?? [owner]
      teams.push(reviewer.team)
      teamsByPath.set(include, teams)
    }
  }
  for (const [include, teams] of [...teamsByPath].sort()) {
    const absInclude = path.join(REPO_ROOT, moduleDir, include)
    const isDir = fs.existsSync(absInclude) && fs.statSync(absInclude).isDirectory()
    lines.push(`/${moduleDir}/${include}${isDir ? "/" : ""} ${teams.join(" ")}`)
  }
  return lines
}

export function generateCodeowners(): string {
  const base = fs.readFileSync(BASE_FILE, "utf8").trim()
  const generated = getManifestFiles().flatMap(codeownersLinesFor)

  return [
    "# ⚠️ GENERATED FILE — DO NOT EDIT BY HAND",
    "# Global rules live in ownership/CODEOWNERS.base; module ownership is",
    "# declared in each module's package.yml (packages/react/src/sds/**).",
    "# Regenerate with: pnpm ownership (validate with: pnpm ownership:check)",
    "",
    base,
    "",
    "# --- Module ownership (generated from package.yml manifests) ---",
    ...generated,
    "",
  ].join("\n")
}
