import fs from "node:fs"
import path from "node:path"
import type { PatternProblem } from "./lib.ts"
import {
  CODEOWNERS_FILE,
  MANIFEST_TEMPLATE,
  REPO_ROOT,
  TEAM_PATTERN,
  checkCodeownersPattern,
  generateCodeowners,
  getManifestFiles,
  getModuleFolders,
  getValidTeams,
  loadManifest,
  parseCodeowners,
} from "./lib.ts"

interface CheckResult {
  ok: boolean
  errors: string[]
}

const pass = (): CheckResult => ({ ok: true, errors: [] })
const fail = (errors: string[]): CheckResult => ({ ok: false, errors })

function validateManifestPresence(): CheckResult {
  const missing = getModuleFolders().filter(
    (folder) => !fs.existsSync(path.join(REPO_ROOT, folder, "package.yml"))
  )
  if (missing.length === 0) return pass()

  return fail([
    "Every module in sds/ must declare an owner through a package.yml manifest.",
    "The following modules are missing one:",
    ...missing.map((folder) => `  >> ${folder}/package.yml`),
    "",
    "Create the manifest with the team that owns the module:",
    "",
    ...MANIFEST_TEMPLATE.split("\n").map((line) => `  ${line}`),
    `Valid teams are listed in ownership/teams.yml.`,
  ])
}

function validateManifestSchema(): CheckResult {
  const errors: string[] = []
  for (const manifestFile of getManifestFiles()) {
    let manifest
    try {
      manifest = loadManifest(manifestFile)
    } catch (error) {
      errors.push(`  >> ${manifestFile}: invalid YAML (${(error as Error).message})`)
      continue
    }

    const owner = manifest?.metadata?.owner
    if (!owner) {
      errors.push(
        `  >> ${manifestFile}: missing required field metadata.owner — ownership is mandatory in this repo`
      )
    } else if (typeof owner !== "string" || !TEAM_PATTERN.test(owner)) {
      errors.push(
        `  >> ${manifestFile}: metadata.owner must look like "@factorialco/<team-slug>", got "${owner}"`
      )
    }

    for (const reviewer of manifest?.metadata?.reviewers ?? []) {
      if (!reviewer.team || !TEAM_PATTERN.test(reviewer.team)) {
        errors.push(
          `  >> ${manifestFile}: reviewer team must look like "@factorialco/<team-slug>", got "${reviewer.team}"`
        )
      }
    }
  }
  if (errors.length === 0) return pass()
  return fail(["The following manifests are invalid:", ...errors])
}

function validateTeams(): CheckResult {
  const validTeams = getValidTeams()
  const errors: string[] = []
  for (const manifestFile of getManifestFiles()) {
    const { metadata } = loadManifest(manifestFile)
    const teams = [metadata.owner, ...(metadata.reviewers ?? []).map((r) => r.team)]
    for (const team of teams.filter((team) => team && !validTeams.includes(team))) {
      errors.push(`  >> ${manifestFile}: unknown team "${team}"`)
    }
  }
  if (errors.length === 0) return pass()
  return fail([
    "The following teams are not listed in ownership/teams.yml:",
    ...errors,
    "If the team exists in the GitHub org, add it to ownership/teams.yml.",
  ])
}

function validateReviewerPaths(): CheckResult {
  const errors: string[] = []
  for (const manifestFile of getManifestFiles()) {
    const moduleDir = path.dirname(manifestFile)
    const { metadata } = loadManifest(manifestFile)
    for (const reviewer of metadata.reviewers ?? []) {
      for (const include of reviewer.include ?? []) {
        if (!fs.existsSync(path.join(REPO_ROOT, moduleDir, include))) {
          errors.push(`  >> ${manifestFile}: include path "${include}" does not exist`)
        }
      }
    }
  }
  if (errors.length === 0) return pass()
  return fail([
    "The following reviewer include paths don't match existing files:",
    ...errors,
  ])
}

/**
 * A rule whose path no longer exists is how ownership gets lost silently:
 * GitHub keeps accepting the file, the rule just stops matching and the files
 * fall back to the global owner. Moving or renaming a directory must update
 * (or remove) the rule that points at it in the same PR.
 */
function validateCodeownersPaths(): CheckResult {
  const problems = parseCodeowners(generateCodeowners()).flatMap((rule) => {
    const problem = checkCodeownersPattern(rule.pattern)
    return problem ? [{ rule, problem }] : []
  })
  if (problems.length === 0) return pass()

  const explain: Record<PatternProblem, string> = {
    missing: "path does not exist — was it moved, renamed or deleted?",
    "not-a-directory": "pattern ends with / but the path is a file",
    unanchored: 'must start with "/" so it is anchored to the repo root',
  }
  return fail([
    "These CODEOWNERS rules don't match anything in the repo, so the files they",
    "should own fall back to the global owner:",
    ...problems.map(
      ({ rule, problem }) =>
        `  >> ${rule.pattern} ${rule.teams.join(" ")} — ${explain[problem]}`
    ),
    "",
    "Fix the path in ownership/CODEOWNERS.base (or the module's package.yml,",
    "for reviewer include paths) and run:",
    "",
    "  pnpm ownership",
  ])
}

/**
 * CODEOWNERS.base is hand-maintained, so its teams get no validation from the
 * manifest checks. A team that doesn't exist (or lost write access, hence the
 * teams.yml allowlist) is ignored by GitHub — same silent loss of ownership.
 */
function validateCodeownersTeams(): CheckResult {
  const validTeams = getValidTeams()
  const errors: string[] = []
  for (const { pattern, teams } of parseCodeowners(generateCodeowners())) {
    if (teams.length === 0) {
      errors.push(`  >> ${pattern}: rule has no owner`)
      continue
    }
    for (const team of teams.filter((team) => !validTeams.includes(team))) {
      errors.push(`  >> ${pattern}: unknown team "${team}"`)
    }
  }
  if (errors.length === 0) return pass()
  return fail([
    "The following CODEOWNERS rules reference teams that are not in",
    "ownership/teams.yml:",
    ...errors,
    "If the team exists in the GitHub org and has write access to this repo,",
    "add it to ownership/teams.yml.",
  ])
}

function validateCodeownersUpToDate(): CheckResult {
  const current = fs.existsSync(CODEOWNERS_FILE)
    ? fs.readFileSync(CODEOWNERS_FILE, "utf8")
    : ""
  if (current === generateCodeowners()) return pass()

  return fail([
    "The committed CODEOWNERS file is out of date with the ownership manifests.",
    "Never edit CODEOWNERS by hand: update the module's package.yml (or",
    "ownership/CODEOWNERS.base for global rules) and run:",
    "",
    "  pnpm ownership",
    "",
    "Then commit the regenerated CODEOWNERS file.",
  ])
}

const checks = [
  { name: "Every sds module has a package.yml manifest", run: validateManifestPresence },
  { name: "Every manifest declares a valid owner", run: validateManifestSchema },
  { name: "All teams exist in ownership/teams.yml", run: validateTeams },
  { name: "All reviewer include paths point to real files", run: validateReviewerPaths },
  { name: "Every CODEOWNERS rule matches a real path", run: validateCodeownersPaths },
  { name: "Every CODEOWNERS rule owner is a known team", run: validateCodeownersTeams },
  { name: "CODEOWNERS is up to date", run: validateCodeownersUpToDate },
]

console.log("Running ownership checks...\n")
let allPassed = true
for (const check of checks) {
  const result = check.run()
  if (result.ok) {
    console.log(`✅ ${check.name}`)
  } else {
    allPassed = false
    console.log(`❌ ${check.name}`)
    console.log(result.errors.map((line) => `   ${line}`).join("\n"))
  }
}

if (!allPassed) {
  console.log("\nSome ownership checks failed. See the messages above to fix them.")
  process.exit(1)
}
console.log("\nAll ownership checks passed!")
