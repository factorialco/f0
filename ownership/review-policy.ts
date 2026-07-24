/**
 * PR review policy evaluator. Classifies the PR and enforces the approval
 * matrix agreed for this repo:
 *
 *   1. PR only touching owned sds modules -> module owners only,
 *      enforced natively by GitHub code owners. Nothing else required.
 *   2. Remaining changes are documentation only (*.md, *.mdx, *.stories.tsx
 *      or any file inside a __stories__/ folder)
 *      -> 1 approval from @factorialco/f0-general.
 *   3. Feature (conventional `feat:` title) -> 1 approval from
 *      @factorialco/f0-devs AND 1 from @factorialco/f0-designers.
 *   4. Anything else -> 1 approval from @factorialco/f0-devs.
 *
 * The `needs-design-review` label adds @factorialco/f0-designers to the
 * requirements of any PR (opt-in by any reviewer or the author).
 *
 * Creating a new sds module (a PR that adds a package.yml under sds/)
 * additionally requires 1 approval from @factorialco/f0-general, on top of
 * whatever the classification requires.
 *
 * The script posts/updates an explanatory PR comment and publishes a
 * "Review policy" commit status: `pending` while required approvals are
 * missing, `success` once they are in place. Use that status context as the
 * required check in branch protection — the workflow job itself only fails
 * on real errors. Run it with: GITHUB_TOKEN, GITHUB_REPOSITORY and
 * PR_NUMBER set (DRY_RUN=1 skips the comment, status and review requests).
 */
import fs from "node:fs"
import path from "node:path"
import { parse } from "yaml"
import { TEAMS_FILE, getManifestFiles, loadManifest } from "./lib.ts"

const DOCS_PATTERN = /(\.mdx?|\.stories\.tsx?)$/
const isDoc = (file: string) => DOCS_PATTERN.test(file) || file.includes("/__stories__/")
const FEAT_PATTERN = /^feat(\([^)]*\))?!?:/
const DESIGN_LABEL = "needs-design-review"
const COMMENT_MARKER = "<!-- comment-type: review-policy -->"

const { GITHUB_TOKEN, GITHUB_REPOSITORY, PR_NUMBER, DRY_RUN } = process.env
if (!GITHUB_TOKEN || !GITHUB_REPOSITORY || !PR_NUMBER) {
  console.error("Missing required env vars: GITHUB_TOKEN, GITHUB_REPOSITORY, PR_NUMBER")
  process.exit(2)
}

async function api<T>(pathname: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`https://api.github.com${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...init?.headers,
    },
  })
  if (!response.ok) {
    throw new Error(`${init?.method ?? "GET"} ${pathname} -> ${response.status}: ${await response.text()}`)
  }
  return response.json() as Promise<T>
}

async function paginate<T>(pathname: string): Promise<T[]> {
  const results: T[] = []
  for (let page = 1; ; page++) {
    const batch = await api<T[]>(`${pathname}${pathname.includes("?") ? "&" : "?"}per_page=100&page=${page}`)
    results.push(...batch)
    if (batch.length < 100) return results
  }
}

interface PolicyTeams {
  [slug: string]: { members: string[] }
}

function getPolicyTeams(): PolicyTeams {
  return parse(fs.readFileSync(TEAMS_FILE, "utf8")).policy_teams
}

interface Requirement {
  team: string // slug without the org prefix
  reason: string
}

const NEW_MODULE_PATTERN = /^packages\/react\/src\/sds\/.+\/package\.yml$/

function classify(params: {
  files: string[]
  addedFiles: string[]
  title: string
  labels: string[]
}): { name: string; description: string; requirements: Requirement[]; ownedByModule: Map<string, string[]> } {
  const moduleOwners = new Map<string, string>() // module dir -> owner team
  for (const manifestFile of getManifestFiles()) {
    moduleOwners.set(path.dirname(manifestFile), loadManifest(manifestFile).metadata.owner)
  }

  const ownedByModule = new Map<string, string[]>() // module dir -> touched files
  const remainder: string[] = []
  for (const file of params.files) {
    // Deepest manifest wins, so match the longest module dir prefix
    const moduleDir = [...moduleOwners.keys()]
      .filter((dir) => file.startsWith(`${dir}/`))
      .sort((a, b) => b.length - a.length)[0]
    if (moduleDir) {
      ownedByModule.set(moduleDir, [...(ownedByModule.get(moduleDir) ?? []), file])
    } else {
      remainder.push(file)
    }
  }

  const requirements: Requirement[] = []
  let name: string
  let description: string

  if (remainder.length === 0) {
    name = "SDS modules"
    description =
      "Every changed file belongs to a module with a dedicated owner. " +
      "Module owners are the only required reviewers (rule 1) — their approval " +
      "is enforced natively by GitHub through CODEOWNERS."
  } else if (remainder.every(isDoc)) {
    name = "Documentation"
    description =
      "All changes outside owned modules are documentation " +
      "(`*.md`, `*.mdx`, `*.stories.tsx` or files inside `__stories__/`), " +
      "so one approval from anyone in f0-general is enough (rule 2)."
    requirements.push({
      team: "f0-general",
      reason: "Documentation-only changes need one approval from f0-general",
    })
  } else if (FEAT_PATTERN.test(params.title)) {
    name = "Feature"
    description =
      "The PR title starts with `feat`, so this is a feature: it needs one " +
      "approval from f0-devs AND one from f0-designers (rule 3)."
    requirements.push(
      { team: "f0-devs", reason: "Features need a dev approval" },
      { team: "f0-designers", reason: "Features need a design approval" }
    )
  } else {
    name = "Code change"
    description = "Default rule: any other change needs one approval from f0-devs (rule 4)."
    requirements.push({ team: "f0-devs", reason: "Every code change needs a dev approval" })
  }

  if (params.labels.includes(DESIGN_LABEL) && !requirements.some((r) => r.team === "f0-designers")) {
    requirements.push({
      team: "f0-designers",
      reason: `The \`${DESIGN_LABEL}\` label explicitly requests a design approval`,
    })
  }

  const newModules = params.addedFiles
    .filter((file) => NEW_MODULE_PATTERN.test(file))
    .map((file) => path.dirname(file).replace("packages/react/src/", ""))
  if (newModules.length > 0 && !requirements.some((r) => r.team === "f0-general")) {
    requirements.push({
      team: "f0-general",
      reason: `New sds module (\`${newModules.join("`, `")}\`) — creating a module needs f0-general sign-off`,
    })
  }

  return { name, description, requirements, ownedByModule }
}

/** Latest approval-relevant review state per reviewer (COMMENTED never revokes) */
function approversFrom(reviews: { user: { login: string }; state: string }[], author: string): string[] {
  const stateByUser = new Map<string, string>()
  for (const review of reviews) {
    if (review.user.login === author) continue
    if (review.state === "COMMENTED" || review.state === "PENDING") continue
    stateByUser.set(review.user.login, review.state)
  }
  return [...stateByUser].filter(([, state]) => state === "APPROVED").map(([login]) => login)
}

const [owner, repo] = GITHUB_REPOSITORY.split("/")
const prPath = `/repos/${owner}/${repo}/pulls/${PR_NUMBER}`

const pr = await api<{
  title: string
  user: { login: string }
  labels: { name: string }[]
  requested_teams: { slug: string }[]
  head: { sha: string }
}>(prPath)
const files = await paginate<{ filename: string; status: string }>(`${prPath}/files`)
const reviews = await paginate<{ user: { login: string }; state: string }>(`${prPath}/reviews`)

const approvers = approversFrom(reviews, pr.user.login)
const policyTeams = getPolicyTeams()
const { name, description, requirements, ownedByModule } = classify({
  files: files.map((f) => f.filename),
  addedFiles: files.filter((f) => f.status === "added").map((f) => f.filename),
  title: pr.title,
  labels: pr.labels.map((l) => l.name),
})

const evaluated = requirements.map((requirement) => {
  const members = policyTeams[requirement.team]?.members ?? []
  const approvedBy = approvers.filter((login) => members.includes(login))
  return { ...requirement, satisfied: approvedBy.length > 0, approvedBy }
})
const pending = evaluated.filter((r) => !r.satisfied)

// --- Explanatory PR comment -------------------------------------------------

const lines: string[] = [
  `## 🔍 Review policy: ${name}`,
  "",
  description,
  "",
]

if (ownedByModule.size > 0) {
  lines.push("### Module ownership (via CODEOWNERS)", "")
  lines.push("| Module | Code owner | Files touched |", "|---|---|---|")
  for (const [moduleDir, touched] of [...ownedByModule].sort()) {
    const moduleOwner = loadManifest(`${moduleDir}/package.yml`).metadata.owner
    lines.push(
      `| \`${moduleDir.replace("packages/react/src/", "")}\` | ${moduleOwner} | ${touched.length} |`
    )
  }
  lines.push(
    "",
    "_Declared in each module's `package.yml`. Wrong owner? Edit the manifest and run `pnpm ownership`._",
    ""
  )
}

if (evaluated.length > 0) {
  lines.push("### Required approvals", "")
  lines.push("| Team | Why | Status |", "|---|---|---|")
  for (const requirement of evaluated) {
    const status = requirement.satisfied
      ? `✅ approved by ${requirement.approvedBy.map((login) => `@${login}`).join(", ")}`
      : "⏳ pending"
    lines.push(`| @factorialco/${requirement.team} | ${requirement.reason} | ${status} |`)
  }
  lines.push("")
} else {
  lines.push("**No approvals required beyond the module code owners.**", "")
}

lines.push(
  "<details><summary>How this was decided</summary>",
  "",
  "- PRs touching only `sds/` modules require their owners and nothing else.",
  "- Otherwise, docs-only changes (`*.md`, `*.mdx`, `*.stories.tsx`, anything in `__stories__/`) → one f0-general approval.",
  "- Otherwise, `feat:` titles → one f0-devs **and** one f0-designers approval. Not a feature? Fix the title prefix.",
  "- Anything else → one f0-devs approval.",
  `- Add the \`${DESIGN_LABEL}\` label to also request a design approval on any PR.`,
  "- Creating a new `sds/` module (new `package.yml`) additionally requires an f0-general approval.",
  "",
  `Policy source: [\`ownership/review-policy.ts\`](https://github.com/${GITHUB_REPOSITORY}/blob/main/ownership/review-policy.ts) · Team members: [\`ownership/teams.yml\`](https://github.com/${GITHUB_REPOSITORY}/blob/main/ownership/teams.yml)`,
  "",
  "</details>"
)

const commentBody = `${COMMENT_MARKER}\n${lines.join("\n")}`

if (DRY_RUN) {
  console.log("--- DRY RUN: comment that would be posted ---\n")
  console.log(commentBody)
} else {
  const comments = await paginate<{ id: number; body?: string }>(
    `/repos/${owner}/${repo}/issues/${PR_NUMBER}/comments`
  )
  const existing = comments.find((comment) => comment.body?.includes(COMMENT_MARKER))
  if (existing) {
    await api(`/repos/${owner}/${repo}/issues/comments/${existing.id}`, {
      method: "PATCH",
      body: JSON.stringify({ body: commentBody }),
    })
  } else {
    await api(`/repos/${owner}/${repo}/issues/${PR_NUMBER}/comments`, {
      method: "POST",
      body: JSON.stringify({ body: commentBody }),
    })
  }

  // Best-effort: put the PR in the queue of the teams that still need to
  // approve. The status check is the enforcement; failing to request a team
  // review (e.g. token scope) must not fail the job on its own.
  const alreadyRequested = pr.requested_teams.map((team) => team.slug)
  const toRequest = pending.map((r) => r.team).filter((slug) => !alreadyRequested.includes(slug))
  if (toRequest.length > 0) {
    try {
      await api(`${prPath}/requested_reviewers`, {
        method: "POST",
        body: JSON.stringify({ team_reviewers: toRequest }),
      })
      console.log(`Requested review from: ${toRequest.join(", ")}`)
    } catch (error) {
      console.warn(`Could not request team reviews (${(error as Error).message})`)
    }
  }
}

// --- "Review policy" commit status -------------------------------------------
// The policy verdict is published as a commit status (pending/success) instead
// of failing the job: "waiting for approvals" is not a CI failure. Branch
// protection should require the "Review policy" status context.

const state = pending.length > 0 ? "pending" : "success"
const statusDescription = (
  pending.length > 0
    ? `${name}: missing approval from ${pending.map((r) => r.team).join(", ")}`
    : evaluated.length > 0
      ? `${name}: all required approvals are in place`
      : `${name}: owners enforced via CODEOWNERS, nothing else required`
).slice(0, 140)

const { GITHUB_SERVER_URL, GITHUB_RUN_ID } = process.env
const targetUrl =
  GITHUB_RUN_ID && `${GITHUB_SERVER_URL ?? "https://github.com"}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`

if (DRY_RUN) {
  console.log(`\nDRY RUN: would set commit status "${state}" — ${statusDescription}`)
} else {
  await api(`/repos/${owner}/${repo}/statuses/${pr.head.sha}`, {
    method: "POST",
    body: JSON.stringify({
      state,
      context: "Review policy",
      description: statusDescription,
      ...(targetUrl ? { target_url: targetUrl } : {}),
    }),
  })
}

console.log(`\nClassification: ${name}`)
for (const requirement of evaluated) {
  const icon = requirement.satisfied ? "✅" : "⏳"
  console.log(`${icon} @factorialco/${requirement.team} — ${requirement.reason}`)
}
console.log(
  pending.length > 0
    ? `\nCommit status set to pending: ${pending.length} required approval(s) missing. See the PR comment.`
    : "\nCommit status set to success: all requirements satisfied."
)
