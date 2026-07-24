import fs from "node:fs"
import path from "node:path"
import {
  CODEOWNERS_FILE,
  MANIFEST_TEMPLATE,
  REPO_ROOT,
  TEAM_PATTERN,
  generateCodeowners,
  getManifestFiles,
  getModuleFolders,
  getValidTeams,
  loadManifest,
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
